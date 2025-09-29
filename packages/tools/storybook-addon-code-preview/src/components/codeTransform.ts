import { wrap, keyBy, mapKeys } from "lodash";
import type { Package as CustomElementPackage, CustomElement, Attribute } from "custom-elements-manifest/schema";
import type { Parser } from "prettier";
import prettier from "prettier/standalone.js";
import * as htmlPlugin from "prettier/plugins/html";

type HtmlAst = {
  children: HtmlAst[];
  type: string;
  name: string;
  attrs?: HtmlParserAttrs[];
  value?: string;
  parent?: { name: string };
};

type HtmlParserAttrs = { name: string; value: string | null };

type PrettierParser = Parser<HtmlAst>["parse"];

type AstTransformer = (
  originalParser: PrettierParser,
  ...args: Parameters<PrettierParser>
) => ReturnType<PrettierParser>;

type MdcElementMap = Record<
  string,
  {
    name: string;
    tag: string;
    attrs: Record<string, Attribute>;
  }
>;

const HTML_GLOBAL_ATTRIBUTES = [
  "accesskey",
  "autocapitalize",
  "class",
  "contenteditable",
  "dir",
  "draggable",
  "enterkeyhint",
  "hidden",
  "id",
  "inputmode",
  "is",
  "itemid",
  "itemprop",
  "itemref",
  "itemscope",
  "itemtype",
  "lang",
  "nonce",
  "spellcheck",
  "style",
  "tabindex",
  "title",
  "translate",
  "aria-label",
  "aria-labelledby",
  "aria-hidden",
  "role",
];

// Reference of the custom elements manifest for the htmlAstLitTransformer function
let customElementsManifest: undefined | CustomElementPackage = undefined;

const getMdcElementMap = (): MdcElementMap =>
  Object.fromEntries(
    customElementsManifest!.modules
      // One declaration per module
      .map((m) => m?.declarations?.[0] as CustomElement)
      .filter((d) => d && d.tagName && d.name)
      .map((d) => [
        d.tagName,
        {
          name: d.name,
          tag: d.tagName,
          attrs: mapKeys(keyBy(d.attributes, "name"), (v: unknown, k: string) => k.toLowerCase()),
        },
      ]),
  );

/**
 * Cleans the HTML AST based on Custom Elements Manifest
 *
 * - Removes attributes set to default values
 * - shorten boolean attributes
 * - empty style attributes for non-MDC elements
 * @param node
 * @param mdcElements
 */
const cleanAstHtmlAttributes = (node: HtmlAst, mdcElements: MdcElementMap) => {
  const clean = (node: HtmlAst) => {
    if (mdcElements[node.name] && node.attrs) {
      const mdcAttrs = mdcElements[node.name]?.attrs || {};
      node.attrs = node.attrs.reduce((attrs, attr: HtmlParserAttrs) => {
        const mdcAttr = mdcAttrs?.[attr.name.toLowerCase()];

        if (mdcAttr) {
          if (mdcAttr.default === attr.value) {
            return attrs;
          }
          if (/\bboolean\b/.test(mdcAttr.type?.text ?? "") && attr.value === "") {
            attr.value = null;
          } else if (attr.value === "") {
            return attrs;
          }
        } else if (HTML_GLOBAL_ATTRIBUTES.includes(attr.name) && attr.value === "") {
          return attrs;
        }
        attrs.push(attr);
        return attrs;
      }, [] as HtmlParserAttrs[]);
    } else if (node.attrs) {
      node.attrs.forEach((attr: HtmlParserAttrs) => {
        if (attr.name === "style" && attr.value !== "") {
          attr.value = "...";
        }
      });
    } else if (node.type === "text" && node.parent?.name === "style") {
      node.value = "...";
    }
    if (node.children) {
      node.children.forEach(clean);
    }
  };

  clean(node);

  return node;
};

/**
 * Transforms the HTML AST for lit elements.
 *
 * Intercept Prettier's HTML parser to modify the AST before formatting.
 *
 * @param originalParser
 * @param options
 */
const htmlAstLitTransformer: AstTransformer = async (originalParser, ...options) => {
  const result = await originalParser(...options);

  if (!customElementsManifest) {
    return result;
  }

  const mdcElements = getMdcElementMap();

  cleanAstHtmlAttributes(result, mdcElements);

  return result;
};

/**
 * Transforms MDC custom elements to React-friendly format
 *
 * @param node
 * @param mdcElements
 */
const reactifyCustomElements = (node: HtmlAst, mdcElements: MdcElementMap) => {
  const transform = (node: HtmlAst) => {
    const mdcElement = mdcElements[node.name];
    if (node.name && mdcElement) {
      const mdcAttrs = mdcElement.attrs;
      node.name = mdcElement.name;
      node.attrs?.forEach((attr: HtmlParserAttrs) => {
        if (mdcAttrs[attr.name.toLowerCase()]) {
          attr.name = mdcAttrs[attr.name]!.fieldName ?? attr.name;
        }
      });
    }
    node.attrs?.forEach((attr: HtmlParserAttrs) => {
      if (attr.name === "class") {
        attr.name = "className";
      }
    });

    if (node.children) {
      node.children.forEach(transform);
    }
  };

  transform(node);
};

/**
 * Transforms the HTML AST for React elements.
 *
 * @param originalParser
 * @param options
 */
const reactHtmlAstTransformer: AstTransformer = async (originalParser, ...options) => {
  const result = await originalParser(...options);

  if (!customElementsManifest) {
    return result;
  }
  const mdcElements = getMdcElementMap();

  cleanAstHtmlAttributes(result, mdcElements);
  reactifyCustomElements(result, mdcElements);
  return result;
};

/**
 * Wraps a Prettier HTML plugin parser to apply an AST transformer
 * @param transformer
 */
const wrapHtmlPluginParser = (transformer: AstTransformer) => ({
  ...htmlPlugin,
  parsers: {
    ...htmlPlugin.parsers,
    html: {
      ...htmlPlugin.parsers.html,
      parse: wrap(htmlPlugin.parsers.html.parse, transformer as any),
    },
  },
});

// Create wrapped plugins for Lit and React transformations
const litHtmlPlugin = wrapHtmlPluginParser(htmlAstLitTransformer);
const reactHtmlPlugin = wrapHtmlPluginParser(reactHtmlAstTransformer);

// todo: do this properly
export const codeTransform = async (
  originalCode: string = "",
  srcLanguage?: string,
  destLanguage?: string,
  customElementsJson?: CustomElementPackage,
) => {
  customElementsManifest = customElementsJson;
  try {
    if (srcLanguage === "lit" && destLanguage === "lit") {
      return await prettier.format(originalCode.trim(), {
        parser: "html",
        plugins: [litHtmlPlugin],
      });
    } else if (destLanguage === "react") {
      return await prettier.format(originalCode.trim(), {
        parser: "html",
        plugins: [reactHtmlPlugin],
      });
    }
  } catch (e) {
    console.warn("Code Preview - Prettier code formatting failed", e);
  }
  return originalCode;
};
