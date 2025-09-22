type Language = 'lit' | 'react';

// todo: do this properly
export const codeTransform = (originalCode: string, srcLanguage: Language, destLanguage: Language) => {
    if(srcLanguage === 'lit' && destLanguage === 'react') {
        let transformedCode = originalCode;

        // convert lit to react here

        return transformedCode;
    }
    return originalCode;
}