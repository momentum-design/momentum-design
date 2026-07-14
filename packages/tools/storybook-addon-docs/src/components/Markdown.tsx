import React from "react";
import Markdown from "markdown-to-jsx";
import { Source } from "@storybook/addon-docs/blocks";
import { Link, Text } from "@momentum-design/components/react";

import { AnchorHeading } from "./AnchorHeading";

export interface MarkdownProps {
  children: string;
}

const CODE_BLOCK_LANG_RE = /(?:^|\s)(?:lang|language)-([\w-]+)/;

/**
 * Override for `<pre>` so fenced code blocks render with Storybook's
 * Prism-powered Source block (syntax highlighted + copy button).
 */
const PreOverride: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  // markdown-to-jsx wraps fenced blocks as <pre><code class="language-foo">…</code></pre>.
  const codeChild = React.Children.toArray(children).find(
    (child): child is React.ReactElement<{ className?: string; children?: React.ReactNode }> =>
      React.isValidElement(child) && (child.type === "code" || child.type === CodeOverride),
  );

  if (!codeChild) {
    return <pre>{children}</pre>;
  }

  const className = codeChild.props.className ?? "";
  const langMatch = className.match(CODE_BLOCK_LANG_RE);
  const language = langMatch?.[1] ?? "text";

  const raw = React.Children.toArray(codeChild.props.children)
    .map((c) => (typeof c === "string" ? c : ""))
    .join("")
    .replace(/\n$/, "");

  return (
    <div style={{ margin: "12px 0" }}>
      <Source code={raw} language={language as never} dark format={false} />
    </div>
  );
};

const CodeOverride: React.FC<{ className?: string; children?: React.ReactNode }> = ({ className, children }) => (
  <code
    className={className}
    style={{
      fontSize: "0.92em",
      background: "var(--mds-color-theme-background-secondary-normal, rgba(255,255,255,0.08)) !important",
      padding: "2px 6px",
      borderRadius: 4,
      color: "var(--mds-color-theme-text-primary-normal)",
    }}
  >
    {children}
  </code>
);

/**
 * Markdown renderer using markdown-to-jsx. Inline `<code>` is themed,
 * fenced code blocks delegate to addon-docs `<Source>` for syntax
 * highlighting, anchor links use `mdc-link`, paragraphs use `mdc-text`,
 * and H2–H5 become anchor headings with a copy-link icon.
 */
export const MarkdownView: React.FC<MarkdownProps> = ({ children }) => (
  <Markdown
    options={{
      forceBlock: true,
      overrides: {
        a: {
          component: ({ children: linkChildren, href, ...rest }: any) => (
            <Link {...rest} inline size="midsize" href={href} target="_blank" rel="noopener noreferrer">
              {linkChildren}
            </Link>
          ),
        },
        pre: { component: PreOverride },
        code: { component: CodeOverride },
        h2: {
          component: (props: any) => <AnchorHeading level={2} {...props} />,
        },
        h3: {
          component: (props: any) => <AnchorHeading level={3} {...props} />,
        },
        h4: {
          component: (props: any) => <AnchorHeading level={4} {...props} />,
        },
        h5: {
          component: (props: any) => <AnchorHeading level={5} {...props} />,
        },
        ul: {
          props: { style: { paddingLeft: 20, margin: "8px 0" } },
        },
        ol: {
          props: { style: { paddingLeft: 20, margin: "8px 0" } },
        },
        li: {
          component: ({ children: liChildren, ...rest }: any) => (
            <li {...rest} style={{ margin: "4px 0", color: "var(--mds-color-theme-text-primary-normal)" }}>
              <Text type="body-midsize-medium" tagname="span">
                {liChildren}
              </Text>
            </li>
          ),
        },
        p: {
          component: ({ children: pChildren }: any) => (
            <Text type="body-midsize-medium" tagname="p">
              {pChildren}
            </Text>
          ),
        },
        blockquote: {
          props: {
            style: {
              borderLeft: "3px solid var(--mds-color-theme-outline-secondary-normal)",
              padding: "4px 12px",
              margin: "12px 0",
              color: "var(--mds-color-theme-text-secondary-normal)",
            },
          },
        },
        table: {
          props: {
            style: {
              borderCollapse: "collapse",
              margin: "12px 0",
              width: "100%",
              color: "var(--mds-color-theme-text-primary-normal)",
            },
          },
        },
        tr: {
          props: {
            style: {
              backgroundColor: "transparent",
            },
          },
        },
        th: {
          component: ({ children: thChildren, ...rest }: any) => (
            <th
              {...rest}
              style={{
                border: "1px solid var(--mds-color-theme-outline-secondary-normal)",
                padding: "6px 10px",
                textAlign: "left",
                color: "var(--mds-color-theme-text-primary-normal)",
              }}
            >
              <Text type="body-midsize-bold" tagname="span">
                {thChildren}
              </Text>
            </th>
          ),
        },
        td: {
          component: ({ children: tdChildren, ...rest }: any) => (
            <td
              {...rest}
              style={{
                border: "1px solid var(--mds-color-theme-outline-secondary-normal)",
                padding: "6px 10px",
                color: "var(--mds-color-theme-text-primary-normal)",
              }}
            >
              <Text type="body-midsize-medium" tagname="span">
                {tdChildren}
              </Text>
            </td>
          ),
        },
      },
    }}
  >
    {children}
  </Markdown>
);
