// AI-Assisted
import { css } from 'lit';

const styles = css`
  :host::part(input-text) {
    white-space: nowrap;
    flex: 0 0 auto;
    min-width: 4rem;
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
    flex-wrap: nowrap;
    align-items: center;
    width: 100%;
    gap: 0.25rem;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;
  }

  :host::part(searchfield-container)::-webkit-scrollbar {
    display: none;
  }
`;

export default [styles];
// End AI-Assisted
