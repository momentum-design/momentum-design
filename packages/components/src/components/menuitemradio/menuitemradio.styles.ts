import { css } from 'lit';

const styles = css`
  :host {
    --mdc-radio-indicator-color: var(--mds-color-theme-control-active-normal);
  }
  :host::part(radio-icon) {
    --mdc-icon-fill-color: var(--mdc-radio-indicator-color);
  }
  :host([disabled])::part(radio-icon) {
    --mdc-icon-fill-color: currentColor;
  }
`;

export default [styles];
