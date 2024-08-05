import { css } from "lit";

const styles = css`
  :host {
    --mdc-themeprovider-font-family: "Momentum";
    --mdc-themeprovider-color-default: var(--mds-color-theme-text-primary-normal);

    font-family: var(--mdc-themeprovider-font-family);
    color: var(--mdc-themeprovider-color-default);
  }
`;

export default styles;
