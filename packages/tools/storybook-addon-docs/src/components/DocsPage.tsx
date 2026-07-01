import React from "react";
import { DocsPage as StorybookDocsPage, useOf } from "@storybook/addon-docs/blocks";
import { Text } from "@momentum-design/components/react";

import { DocsTabs } from "./DocsTabs";
import { MarkdownView } from "./Markdown";
import { parseFrontmatter, splitByH2 } from "../markdown";
import { getMarkdownForMeta } from "../registry";
import type { DocsAddonParameters, MetaLike } from "../types";

/**
 * Pull the resolved meta from the docs context. The shape of `useOf` results
 * can vary across Storybook 9.x minors; we look at the documented fields and
 * fall back to undefined.
 */
function useResolvedMeta(): MetaLike & { parameters?: Record<string, unknown> } {
  try {
    const resolved = useOf("meta") as unknown as Record<string, unknown>;
    const preparedMeta = resolved?.["preparedMeta"] as
      | { title?: string; component?: unknown; parameters?: Record<string, unknown> }
      | undefined;
    const csfMeta = (
      resolved?.["csfFile"] as
        | { meta?: { title?: string; component?: unknown; parameters?: Record<string, unknown> } }
        | undefined
    )?.meta;
    const meta = preparedMeta ?? csfMeta;
    if (meta) {
      return {
        title: meta.title,
        component: meta.component,
        parameters: meta.parameters,
      };
    }
  } catch {
    // useOf throws if called outside a docs context — render empty state.
  }
  return {};
}

function getDocsParam(parameters: Record<string, unknown> | undefined): DocsAddonParameters | undefined {
  const docs = parameters?.["docs"];
  if (docs && typeof docs === "object") {
    return docs as DocsAddonParameters;
  }
  return undefined;
}

const rootStyle: React.CSSProperties = {
  padding: "16px 0",
  fontFamily: "var(--mds-font-family-primary, Inter, sans-serif)",
  color: "var(--mds-color-theme-text-primary-normal)",
};

export const DocsPage: React.FC = () => {
  const meta = useResolvedMeta();
  const docsParam = getDocsParam(meta.parameters);

  const raw = docsParam?.markdown ?? getMarkdownForMeta(meta);

  if (!raw) {
    return (
      <div style={{ ...rootStyle, color: "var(--mds-color-theme-text-secondary-normal)" }}>
        <p>
          No knowledge-base markdown found for this component. Add a
          <code style={{ margin: "0 4px" }}>knowledge-base/&lt;name&gt;.component.md</code>
          file alongside your component, or pass <code>parameters.docs.markdown</code> in the story.
        </p>
      </div>
    );
  }

  const { data, body } = parseFrontmatter(raw);
  const sections = splitByH2(body);
  const title = typeof data.title === "string" ? data.title : undefined;
  const summary = typeof data.summary === "string" ? data.summary : undefined;

  return (
    <div style={rootStyle}>
      {title && (
        <Text type="heading-xlarge-medium" tagname="h1">
          {title}
        </Text>
      )}
      {summary && (
        <Text type="body-midsize-medium" tagname="p">
          {summary}
        </Text>
      )}
      {sections.length > 0 ? (
        <DocsTabs sections={sections} />
      ) : (
        <div style={{ marginTop: 12 }}>
          <MarkdownView>{body}</MarkdownView>
        </div>
      )}
    </div>
  );
};
