import { css } from 'lit';

const styles = css`

:host::part(filters-container){
  display: flex;
  gap: 0.25rem;
}

.input {
  flex: 1;
}

.input::-webkit-search-cancel-button {
    -webkit-appearance: none;
    pointer-events: none;
  }
`;

export default [styles];
