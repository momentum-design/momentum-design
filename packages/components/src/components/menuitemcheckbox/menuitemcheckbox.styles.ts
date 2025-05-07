import { css } from 'lit';

const styles = css`
  :host::part(checkmark-icon) {
    --mdc-icon-fill-color: var(--mds-color-theme-control-active-normal);
  }
  :host([disabled])::part(checkmark-icon) {
    --mdc-icon-fill-color: currentColor;
  }
`;

export default [styles];
