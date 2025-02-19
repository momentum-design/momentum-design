import { css } from 'lit';

const styles = css`
  :host {
    --mdc-radio-group-description-text-normal: var(--mds-color-theme-text-secondary-normal);
  }

  :host::part(container) {
    gap: 0;
  }

  :host ::slotted(mdc-radio) {
    margin-bottom: 0.75rem;
  }

  :host::part(header) {
    margin-bottom: 0.25rem;
  }

  :host::part(description) {
    color: var(--mdc-radio-group-description-text-normal);
    margin-bottom: 0.75rem;
  }
`;

export default [styles];
