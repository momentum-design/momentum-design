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

  :host(:dir(ltr))::part(leading-icon) {
    margin-right: var(--mdc-listitem-column-gap);
  }
  :host(:dir(rtl))::part(leading-icon) {
    margin-left: var(--mdc-listitem-column-gap);
  }
  :host(:dir(ltr))::part(trailing-icon) {
    margin-left: var(--mdc-listitem-column-gap);
  }
  :host(:dir(rtl))::part(trailing-icon) {
    margin-right: var(--mdc-listitem-column-gap);
  }
`;

export default [styles];
