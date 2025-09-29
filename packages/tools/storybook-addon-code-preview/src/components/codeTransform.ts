import { wrap, keyBy, mapKeys } from "lodash";
import type { Parser } from "prettier";
import prettier from "prettier/standalone.js";
import * as htmlPlugin from "prettier/plugins/html";
import * as estreePlugin from "prettier/plugins/estree";
import * as babelPlugin from "prettier/plugins/babel";
import type { Package as CustomElementPackage, CustomElement, Attribute } from "custom-elements-manifest/schema";

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

type AstTransformerOptions = {
  customElementsManifest?: CustomElementPackage;
  componentImportCallback: (importSource: string) => void;
};

type AstTransformer = (
  options: AstTransformerOptions,
) => (originalParser: PrettierParser, ...args: Parameters<PrettierParser>) => ReturnType<PrettierParser>;

type MdcElementMap = Record<
  string,
  {
    name: string;
    tagName: string;
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

/**
 * Simplify access to the custom elements manifest
 *
 * @param customElementsManifest
 */
const getMdcElementMap = (customElementsManifest: CustomElementPackage): MdcElementMap =>
  Object.fromEntries(
    customElementsManifest!.modules
      // One declaration per module
      .map((m) => m?.declarations?.[0] as CustomElement)
      .filter((d) => d && d.tagName && d.name)
      .map(({ tagName, name, attributes }) => [
        tagName,
        {
          name,
          tagName,
          attrs: mapKeys(keyBy(attributes, "name"), (v: unknown, k: string) => k.toLowerCase()),
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
 * @param callback
 */
const cleanAstHtmlAttributes = (
  node: HtmlAst,
  mdcElements: MdcElementMap,
  callback?: AstTransformerOptions["componentImportCallback"],
) => {
  const usedElements = new Set<string>();
  const clean = (node: HtmlAst) => {
    const mdcElement = mdcElements[node.name]!;
    if (mdcElement) {
      usedElements.add(mdcElement.tagName.replace(/^.*?-/, ""));
      if (node.attrs) {
        const mdcAttrs = mdcElement.attrs || {};
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
      }
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

  if (callback) {
    callback(
      Array.from(usedElements)
        .sort()
        .map((c) => `import '@momentum-design/components/dist/components/${c}/index.js';`)
        .join("\n"),
    );
  }
  return node;
};

/**
 * Transforms the HTML AST for lit elements.
 *
 * Intercept Prettier's HTML parser to modify the AST before formatting.
 *
 * @param transformerOptions
 */
const htmlAstLitTransformer: AstTransformer =
  (transformerOptions) =>
  async (originalParser, ...options) => {
    const result = await originalParser(...options);

    if (!transformerOptions.customElementsManifest) {
      return result;
    }

    const mdcElements = getMdcElementMap(transformerOptions.customElementsManifest);

    cleanAstHtmlAttributes(result, mdcElements, transformerOptions.componentImportCallback);

    return result;
  };

/**
 * Transforms MDC custom elements to React-friendly format
 *
 * @param node
 * @param mdcElements
 * @param callback
 */

const reactifyCustomElements = (
  node: HtmlAst,
  mdcElements: MdcElementMap,
  callback?: AstTransformerOptions["componentImportCallback"],
) => {
  const usedElements = new Set<string>();

  const transform = (node: HtmlAst) => {
    const mdcElement = mdcElements[node.name];
    if (node.name && mdcElement) {
      const mdcAttrs = mdcElement.attrs;
      node.name = mdcElement.name;
      usedElements.add(mdcElement.name);
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
      if (attr.name === "aria-label") {
        attr.name = "ariaLabel";
      }
    });

    if (node.children) {
      node.children.forEach(transform);
    }
  };

  transform(node);

  if (callback) {
    const imports = Array.from(usedElements).sort().join(",");
    callback(`import { ${imports} } from '@momentum-design/components/dist/react';`);
  }
};

/**
 * Transforms the HTML AST for React elements.
 *
 * @param transformerOptions
 */
const reactHtmlAstTransformer: AstTransformer =
  (transformerOptions) =>
  async (originalParser, ...options) => {
    const result = await originalParser(...options);

    if (!transformerOptions.customElementsManifest) {
      return result;
    }
    const mdcElements = getMdcElementMap(transformerOptions.customElementsManifest);

    cleanAstHtmlAttributes(result, mdcElements);
    reactifyCustomElements(result, mdcElements, transformerOptions.componentImportCallback);
    return result;
  };

/**
 * Wraps a Prettier HTML plugin parser to apply an AST transformer
 * @param transformer
 */
const wrapHtmlPluginParser = (transformer: AstTransformer) => (options: AstTransformerOptions) => ({
  ...htmlPlugin,
  parsers: {
    ...htmlPlugin.parsers,
    html: {
      ...htmlPlugin.parsers.html,
      parse: wrap(htmlPlugin.parsers.html.parse, transformer(options) as any),
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
  customElementsManifest?: CustomElementPackage,
) => {
  let imports = "";
  let output = originalCode.trim();

  try {
    if (srcLanguage === "lit" && destLanguage === "lit") {
      output = await prettier.format(originalCode.trim(), {
        parser: "html",
        plugins: [
          litHtmlPlugin({
            customElementsManifest,
            componentImportCallback: (result: string) => (imports = result),
          }),
        ],
      });
    } else if (destLanguage === "react") {
      output = await prettier.format(originalCode.trim(), {
        parser: "html",
        plugins: [
          reactHtmlPlugin({
            customElementsManifest,
            componentImportCallback: (result: string) => (imports = result),
          }),
        ],
      });
    }

    imports = await prettier.format(imports.trim(), {
      parser: "babel",
      plugins: [estreePlugin, babelPlugin],
    });

    output = `${imports}\n\n${output.trim()}`;
  } catch (e) {
    console.warn("Code Preview - Prettier code formatting failed", e);
  }
  return output;
};
