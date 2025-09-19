import React from 'react';
import { codeTransform } from './codeTransform';
import { Source } from '@storybook/addon-docs/blocks';
import { useGlobals } from 'storybook/internal/manager-api';

const CodeBlock = React.memo(({originalCode, currentLanguage, baseLanguage}: any) => {
    const [globals] = useGlobals();

    return (
        <Source 
            code={codeTransform(originalCode, baseLanguage, currentLanguage.id)} 
            dark={globals?.theme?.startsWith('dark')} 
            format={currentLanguage.format}
        />
    );
});

export default CodeBlock;