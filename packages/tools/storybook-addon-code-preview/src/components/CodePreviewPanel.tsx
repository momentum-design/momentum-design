import { SourceContainer } from "@storybook/addon-docs/blocks";
import React from "react";
import { TabsState } from "storybook/internal/components";
import { useParameter } from "storybook/internal/manager-api";
import { styled } from "storybook/theming";
import CodeBlock from "./CodeBlock";
import type { CodeSnippetEvent, PluginParameters } from "../types";

const StyledPanel = styled.div`
  width: 50%;
  background: ${(props) => props.theme.background.content};
  border-left: 1px solid ${(props) => props.theme.appBorderColor};
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow-y: auto;
`;
const SourceWrapper = styled.div`
  margin-top: -25px;
  margin-bottom: -40px;
`;

interface CodePreviewPanelProps {
  snippetEvent: CodeSnippetEvent;
  channel: any;
}

const CodePreviewPanel: React.FC<CodePreviewPanelProps> = ({ snippetEvent, channel }) => {
  const { languages, initialLanguageId, customElements } = useParameter<PluginParameters>("codePreview", {});

  const baseLanguage = languages?.find((lang) => lang.type === "base");
  const initialSelected = initialLanguageId || languages?.[0]?.id;

  return (
    <SourceContainer channel={channel}>
      <StyledPanel>
        <TabsState initial={initialSelected}>
          {languages?.map((language: any) => (
            <div key={language.id} id={language.id} title={language.label || language.id}>
              {language.status === "active" ? (
                <SourceWrapper>
                  <CodeBlock
                    snippet={snippetEvent}
                    currentLanguage={language}
                    baseLanguage={baseLanguage}
                    customElements={customElements}
                  />
                </SourceWrapper>
              ) : (
                <div style={{ padding: "25px 0 0 16px" }}>Coming soon!</div>
              )}
            </div>
          ))}
        </TabsState>
      </StyledPanel>
    </SourceContainer>
  );
};

export default CodePreviewPanel;
