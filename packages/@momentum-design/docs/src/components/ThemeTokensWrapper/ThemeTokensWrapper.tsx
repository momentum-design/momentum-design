/** @jsxImportSource preact */
import { useCallback, useState } from 'preact/hooks';
import { TokenType } from '../../types/tokens';
import { TokenTable } from '../Tokens/TokenTable/TokenTable';
import './ThemeTokensWrapper.css';

type Props = {
  themeTokens: Record<string, object>;
};

export const ThemeTokensTwapper = ({ themeTokens }: Props) => {
  const [theme, setTheme] = useState('dark');

  const onChangeTheme = useCallback((event: any) => {
    setTheme(event?.target?.value);
  }, [setTheme]);

  return (
    <div>
      <select placeholder="Select Theme" className="themeSelect" onChange={onChangeTheme}>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
      <TokenTable tokens={themeTokens[theme]} tokenType={TokenType.Color} />
    </div>
  );
};
