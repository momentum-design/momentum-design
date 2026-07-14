import React, { useCallback, useMemo, useState } from "react";
import { Text } from "@momentum-design/components/react";

import { slugify } from "../utils/slugify";

export interface AnchorHeadingProps {
  level: 2 | 3 | 4 | 5 | 6;
  id?: string;
  children?: React.ReactNode;
}

const flattenText = (node: React.ReactNode): string => {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(flattenText).join("");
  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    return flattenText(node.props.children);
  }
  return "";
};

type HeadingTypeToken =
  | "heading-large-medium"
  | "heading-midsize-medium"
  | "heading-small-medium"
  | "body-large-medium"
  | "body-midsize-medium";

type TextTagName = "h2" | "h3" | "h4" | "h5" | "h6";

const levelConfig: Record<AnchorHeadingProps["level"], { type: HeadingTypeToken; tagname: TextTagName }> = {
  2: { type: "heading-large-medium", tagname: "h2" },
  3: { type: "heading-midsize-medium", tagname: "h3" },
  4: { type: "heading-small-medium", tagname: "h4" },
  5: { type: "body-large-medium", tagname: "h5" },
  6: { type: "body-midsize-medium", tagname: "h6" },
};

/**
 * Heading that exposes a stable id and a hover-visible link button which
 * copies a deep link to the heading to the clipboard.
 */
export const AnchorHeading: React.FC<AnchorHeadingProps> = ({ level, id, children }) => {
  const text = useMemo(() => flattenText(children), [children]);
  const slug = id ?? slugify(text);
  const [copied, setCopied] = useState(false);
  const [hover, setHover] = useState(false);

  const onCopy = useCallback(() => {
    const href = `${window.location.href.split("#")[0]}#${slug}`;
    void navigator.clipboard.writeText(href).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    });
    try {
      window.history.replaceState(null, "", `#${slug}`);
    } catch {
      // ignore — replaceState can throw in sandboxed iframes
    }
  }, [slug]);

  const cfg = levelConfig[level];

  return (
    <Text
      type={cfg.type}
      tagname={cfg.tagname}
      id={slug}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
      <button
        type="button"
        aria-label={copied ? "Link copied" : `Copy link to ${text}`}
        title={copied ? "Link copied" : "Copy link"}
        onClick={onCopy}
        style={{
          appearance: "none",
          background: "transparent",
          border: "none",
          marginLeft: 8,
          padding: 2,
          cursor: "pointer",
          opacity: hover || copied ? 1 : 0,
          transition: "opacity 120ms ease",
          color: copied ? "var(--mds-color-theme-text-success-normal)" : "var(--mds-color-theme-text-secondary-normal)",
          verticalAlign: "middle",
          fontSize: "0.8em",
        }}
      >
        {copied ? "✓" : "#"}
      </button>
    </Text>
  );
};
