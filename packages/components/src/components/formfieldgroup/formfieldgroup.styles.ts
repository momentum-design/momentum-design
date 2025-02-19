import { css } from 'lit';

const styles = css`
  :host::part(container) {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  :host::part(description) {
    margin-bottom: 0.25rem;
  }
`;

export default [styles];
