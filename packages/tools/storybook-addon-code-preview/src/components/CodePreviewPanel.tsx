import { Source } from '@storybook/addon-docs/blocks';
import React from 'react';
import { styled } from 'storybook/theming';

const StyledPanel = styled.div`
    width: 50%;
    background: ${(props) => props.theme.background.content};
    border-left: 1px solid ${(props) => props.theme.appBorderColor};
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    overflow-y: auto;
    padding: 16px;
`;

const PanelHeader = styled.div`
    font-size: ${(props) => props.theme.typography.size.s2}px;
    font-weight: ${(props) => props.theme.typography.weight.bold};
    color: ${(props) => props.theme.color.defaultText};
    margin-bottom: 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid ${(props) => props.theme.appBorderColor};
`;

const CodeContainer = styled(Source)`
    background: ${(props) => props.theme.background.hoverable};
    border: 1px solid ${(props) => props.theme.appBorderColor};
    border-radius: 4px;
    padding: 12px;
    margin: 0;
    font-family: ${(props) => props.theme.typography.fonts.mono};
    font-size: ${(props) => props.theme.typography.size.s1}px;
    color: ${(props) => props.theme.color.defaultText};
    overflow-x: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
`;

interface CodePreviewPanelProps {
    code?: string;
    title?: string;
}

export const CodePreviewPanel: React.FC<CodePreviewPanelProps> = ({
    code = '',
    title = 'Code Preview'
}) => {
    return (
        <StyledPanel>
            <PanelHeader>{title}</PanelHeader>
            <CodeContainer code={code}></CodeContainer>
        </StyledPanel>
    );
};