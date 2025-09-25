import { css } from 'lit';

const styles = css`
  :host::part(container) {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  :host::part(group-header) {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  :host::part(label) {
    font-weight: bold;
  }
`;

export default [styles];
