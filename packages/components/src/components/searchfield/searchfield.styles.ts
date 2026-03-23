import { css } from 'lit';

const styles = css`
  :host::part(filters-container) {
    display: flex;
    gap: 0.25rem;
    margin: 0.25rem 0;
  }

  :host::part(input-text) {
    white-space: nowrap;
  }

  input[type='search']::-webkit-search-cancel-button {
    -webkit-appearance: none;
    pointer-events: none;
  }

  input[type='search']:hover::-webkit-search-cancel-button {
    -webkit-appearance: none;
    pointer-events: none;
  }

  :host::part(searchfield-container) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export default [styles];
