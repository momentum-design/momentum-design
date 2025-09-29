import React from "react";
import { codeTransform } from "./codeTransform";
import { Source } from "@storybook/addon-docs/blocks";
import { useGlobals } from "storybook/internal/manager-api";
import type { CodeSnippetEvent, SourceLanguage } from "../types";
import type { Package as CustomElementPackage } from "custom-elements-manifest/schema";

interface Props {
  snippet: CodeSnippetEvent;
  currentLanguage: SourceLanguage;
  baseLanguage?: SourceLanguage;
  customElements?: CustomElementPackage;
}

const CodeBlock = React.memo(({ snippet, currentLanguage, baseLanguage, customElements }: Props) => {
  const [globals] = useGlobals();
  const [code, setCode] = React.useState("");

  React.useEffect(() => {
    if (snippet) {
      codeTransform(snippet.source, baseLanguage?.id, currentLanguage.id, customElements).then(setCode);
    }
  }, [snippet, baseLanguage, currentLanguage]);

  return <Source code={code} dark={globals?.theme?.startsWith("dark")} format={currentLanguage.format} />;
});

export default CodeBlock;
