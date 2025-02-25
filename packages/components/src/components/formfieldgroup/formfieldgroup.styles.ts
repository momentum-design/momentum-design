import { css } from 'lit';

const styles = css`
  :host::part(container), :host::part(list) {
    display: flex;
    flex-direction: column;
  }

  :host::part(container) {
    gap: 0.25rem;
  }

  :host::part(list) {
    gap: 0.75rem;
  }

  :host::part(description) {
    color: var(--mds-color-theme-text-secondary-normal);
  }
`;

export default [styles];
