import { css } from 'lit';

const styles = css`
  :host {
    --mdc-listitem-column-gap: 0.75rem;
    --mdc-option-icon-width: 1rem;
  }

  :host::part(leading-icon),
  :host::part(trailing-icon) {
    display: flex;
    align-items: center;
    max-width: var(--mdc-option-icon-width);
  }

  :host::part(leading-text) {
    flex: 1 1 auto;
  }

  :host::part(leading-icon):dir(ltr) {
    margin-right: var(--mdc-listitem-column-gap);
  }
  :host::part(leading-icon):dir(rtl) {
    margin-left: var(--mdc-listitem-column-gap);
  }
  :host::part(trailing-icon):dir(ltr) {
    margin-left: var(--mdc-listitem-column-gap);
  }
  :host::part(trailing-icon):dir(rtl) {
    margin-right: var(--mdc-listitem-column-gap);
  }
`;

export default [styles];
