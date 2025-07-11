import { css } from 'lit';

const styles = css`
  :host > .mdc-menusection__label {
    padding: 0.5rem 0.75rem;
  }

  :host::part(divider) {
    margin-block: 0.25rem;
  }

  :host(:dir(ltr))::part(align-header) {
    padding-left: 1.75rem;
  }

  :host(:dir(rtl))::part(align-header) {
    padding-right: 1.75rem;
  }
`;

export default [styles];
