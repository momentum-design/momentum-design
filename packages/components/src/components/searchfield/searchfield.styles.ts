import { css } from 'lit';

const styles = css`

:host::part(filters-container){
  display: flex;
  gap: 0.25rem;
}

.input {
  flex: 1;
}
`;

export default [styles];
