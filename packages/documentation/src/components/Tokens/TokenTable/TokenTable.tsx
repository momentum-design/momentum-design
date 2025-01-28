/** @jsxImportSource preact */
import lodash from 'lodash';
import type { FunctionalComponent } from 'preact';
import { useMemo } from 'preact/hooks';
import { TokenType } from '../../../types/tokens';
import './TokenTable.css';

const getSampleStyle = (type: TokenType, value?: string): string | undefined => {
  if (type === 'color') {
    return `background: ${value};`;
  }
  return undefined;
};

/**
 * Generates tables and groups them by first path keys or token type
 *
 * @param jsonData - json data with core tokens
 * @param tokenType - color or spacing etc,
 * @returns
 */
function generateJSXTable(jsonData: any, tokenType: TokenType) {
  // Create an array to hold the JSX tables
  const tables: any = [];

  /**
   * Helper function to recursively generate tables for the subgroups and tokens
   * @param data - json data
   * @param path - initial path
   */
  function generateTables(data: any, path: any) {
    const rows: any = [];

    console.log(data);

    const keys = Object.keys(data);

    // Loop through the keys and create a table row for each subgroup or token
    keys.forEach((key) => {
      const item = data[key];

      // If the item is a subgroup, recursively generate tables for its contents
      if (typeof item === 'object' && !item.isSource) {
        generateTables(item, path.concat([key]));
      }

      // If the item is a token and its `isSource` property is set to `true`, create a table row
      if (item.isSource) {
        const row = (
          <tr>
            {/* Create a table cell for each property in the token */}
            {tokenType === TokenType.Color && <td>
              <span class="colorSample" style={getSampleStyle(TokenType.Color, item.value)} />
            </td>}
            <td>{item.path.join('-')}</td>
            <td>
              <code>--{item.name}</code>
            </td>
            <td>
              <code>{item.value}</code>
            </td>
          </tr>
        );
        rows.push(row);
      }
    });

    // If there are any rows, create a table for them
    if (rows.length > 0) {
      const table = { section: path[0] || tokenType || 'unknown',
        jsx: (
          <div>
            <a href={`#${path.join('-')}`}><h3 class="heading3" id={path.join('-')}>{path.join('-')}</h3></a>
            <table>
              <thead>
                <tr>
                  {tokenType === TokenType.Color && <th>Sample</th>}
                  <th>Name</th>
                  <th>CSS Variable</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </table>
          </div>
        ) };
      tables.push(table);
    }
  }

  generateTables(jsonData, []);
  return lodash.groupBy(tables, 'section');
}

// eslint-disable-next-line max-len
export const TokenTable: FunctionalComponent<{ tokens: any, tokenType: TokenType }> = ({ tokens, tokenType }: { tokens: any, tokenType:TokenType }) => {
  const data = useMemo(() => generateJSXTable(tokens, tokenType), [tokens, tokenType]);
  return (
    <div>
      {Object.entries(data).map(([section, value]) => (
        <>
          <h2 class="heading2 marginTop">{section}</h2>
          <div className="tableWrapper">
            { value.map((table) => table.jsx) }
          </div>
        </>
      ))}
    </div>
  );
};
