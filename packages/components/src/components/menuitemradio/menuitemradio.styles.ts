import { css } from 'lit';

const styles = css`
  :host {
    --mdc-checkmark-indicator-color: var(--mds-color-theme-control-active-normal);
  }
  :host::part(checkmark-icon) {
    --mdc-icon-fill-color: var(--mdc-checkmark-indicator-color);
  }
  :host([disabled])::part(checkmark-icon) {
    --mdc-icon-fill-color: currentColor;
  }
`;

export default [styles];
