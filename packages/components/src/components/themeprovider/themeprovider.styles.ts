import { css } from 'lit';

// todo: use type tokens once the full set with fallbacks is available
const styles = css`
  :host {
    --mdc-themeprovider-font-family: var(--mds-font-family-primary);
    --mdc-themeprovider-color-default: var(--mds-color-theme-text-primary-normal);

    font-family: var(--mdc-themeprovider-font-family);
    color: var(--mdc-themeprovider-color-default);
  }
`;

export default styles;
