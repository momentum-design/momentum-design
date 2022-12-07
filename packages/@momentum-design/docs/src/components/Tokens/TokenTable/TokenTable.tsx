/** @jsxImportSource preact */
import type { FunctionalComponent } from 'preact';
import { TokenType } from '../../../types/tokens';
import './TokenTable.css';

const getSampleStyle = (type: TokenType, value?: string): string | undefined => {
  if (type === 'color') {
    return `background: ${value};`;
  }
  return undefined;
};

function generateJSXTable(jsonData: any, tokenType: TokenType) {
  // Create an array to hold the JSX tables
  const tables: any = [];

  // Helper function to recursively generate tables for the subgroups and tokens
  function generateTables(data: any, path: any) {
    // Create an array of table rows
    const rows: any = [];

    // Get an array of the keys in the data object
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
              <code>{item.value}</code>
            </td>
          </tr>
        );
        rows.push(row);
      }
    });

    // If there are any rows, create a table for them
    if (rows.length > 0) {
      const table = (
        <div>
          <h3>{path.join('-')}</h3>
          <table>
            <thead>
              <tr>
                {tokenType === TokenType.Color && <th>Sample</th>}
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        </div>
      );
      tables.push(table);
    }
  }

  // Start the recursive table generation process
  generateTables(jsonData, []);

  // Return the array of JSX tables
  return tables;
}

// eslint-disable-next-line max-len
export const TokenTable: FunctionalComponent<{ tokens: any, tokenType: TokenType }> = ({ tokens, tokenType }: { tokens: any, tokenType:TokenType }) => (
  <div className="tableWrapper">{generateJSXTable(tokens, tokenType)}</div>
);
