import { css } from 'lit';

const styles = css`
  :host {
  }

  // Remove the default search clear button
  input[type="search"]::-webkit-search-cancel-button {
  display: none;
}
`;

export default [styles];
