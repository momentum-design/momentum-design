import React from "react";
import { codeTransform } from "./codeTransform";
import { Source } from "@storybook/addon-docs/blocks";
import { useGlobals } from "storybook/internal/manager-api";
import type { CodeSnippetEvent, SourceLanguage } from "../types";

interface Props {
  snippet: CodeSnippetEvent;
  currentLanguage: SourceLanguage;
  baseLanguage: SourceLanguage;
}

const CodeBlock = React.memo(({ snippet, currentLanguage, baseLanguage }: Props) => {
  const [globals] = useGlobals();
  const [code, setCode] = React.useState("");

  React.useEffect(() => {
    if (snippet) {
      codeTransform(snippet.source, baseLanguage.id, currentLanguage.id).then(setCode);
    }
  }, [snippet, baseLanguage, currentLanguage]);

  return <Source code={code} dark={globals?.theme?.startsWith("dark")} format={currentLanguage.format} />;
});

export default CodeBlock;
