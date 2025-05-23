import { css } from 'lit';

const styles = css`
  :host {
    gap: 0.25rem;
  }

  :host(:not([expanded])) ::slotted(mdc-text) {
    display: none;
  }

  :host(:dir(ltr)) ::slotted(mdc-text) {
    padding-left: 1.75rem;
  }

  :host(:dir(rtl)) ::slotted(mdc-text) {
    padding-right: 1.75rem;
  }

  ::slotted(mdc-divider) {
    margin: 0.75rem 0rem;
  }
`;

export default [styles];
