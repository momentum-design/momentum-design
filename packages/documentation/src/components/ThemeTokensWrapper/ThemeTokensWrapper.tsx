/** @jsxImportSource preact */
import { useCallback, useState } from 'preact/hooks';
import { TokenType } from '../../types/tokens';
import { TokenTable } from '../Tokens/TokenTable/TokenTable';
import './ThemeTokensWrapper.css';

type Props = {
  themeTokens: Record<string, {data: Object, path: string}>;
};

export const ThemeTokensWrapper = ({ themeTokens }: Props) => {
  const [theme, setTheme] = useState(Object.keys(themeTokens)[0]);

  const onChangeTheme = useCallback((event: any) => {
    setTheme(event?.target?.value);
  }, [setTheme]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '-20px' }}>
        <p><b>File:</b> {themeTokens[theme].path}</p>
        <select placeholder="Select Theme" className="themeSelect" onChange={onChangeTheme}>
          {Object.keys(themeTokens).map((theme) => (
            <option value={theme}>{theme}</option>
          ))}
        </select>
      </div>

      <TokenTable tokens={themeTokens[theme].data} tokenType={TokenType.Color} />
    </div>
  );
};
