import { css } from 'lit';

const styles = css`
  :host {
    --mdc-listitem-column-gap: 0.75rem;
    --mdc-option-icon-width: 1rem;
  }

  :host::part(leading-icon),
  :host::part(trailing) {
    display: flex;
    align-items: center;
    width: var(--mdc-option-icon-width);
  }

  :host::part(leading-text) {
    flex: 1;
  }
 
  :host::part(leading-icon) {
    margin-inline-end: var(--mdc-listitem-column-gap);
  }
  :host::part(trailing) {
    margin-inline-start: var(--mdc-listitem-column-gap);
  }
`;

export default [styles];
