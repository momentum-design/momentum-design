import { SourceContainer } from '@storybook/addon-docs/blocks';
import React from 'react';
import { TabsState } from 'storybook/internal/components';
import { useParameter } from 'storybook/internal/manager-api';
import { styled } from 'storybook/theming';
import CodeBlock from './CodeBlock';

const StyledPanel = styled.div`
    width: 50%;
    background: ${(props) => props.theme.background.content};
    border-left: 1px solid ${(props) => props.theme.appBorderColor};
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    overflow-y: auto;
    padding: 8px;
`;

interface CodePreviewPanelProps {
    codeSource: string;
    channel: any;
}

const CodePreviewPanel: React.FC<CodePreviewPanelProps> = ({
    codeSource,
    channel
}) => {
    const {languages, initialLanguageId} = useParameter<any>('codePreview', {});
    
    const baseLanguage = languages?.find((lang: any) => lang.type === 'base');
    const initialSelected = initialLanguageId || languages?.[0]?.id;
   
    return (
        <SourceContainer channel={channel}>
            <StyledPanel>
                <TabsState
                    initial={initialSelected}
                >
                    {languages?.map((language: any) => (
                        <div key={language.id} id={language.id} title={language.label || language.id}>
                            {language.status === "active" ?
                                <CodeBlock originalCode={codeSource} currentLanguage={language} baseLanguage={baseLanguage}  />
                            : <div style={{padding: '25px 0 0 16px'}}>Coming soon!</div>
                            }
                        </div>
                    ))}
                </TabsState>
            </StyledPanel>
        </SourceContainer>
    );
};

export default CodePreviewPanel;