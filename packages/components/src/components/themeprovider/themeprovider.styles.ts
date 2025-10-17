import { css } from 'lit';

const styles = css`
  :host {
    --mdc-themeprovider-color-default: var(--mds-color-theme-text-primary-normal);
    --mdc-themeprovider-font-family: var(--mds-font-family-primary);
    --mdc-themeprovider-font-weight: 400;
    /* adjusting Inter's letter spacing to better match the old CiscoSans */
    --mdc-themeprovider-letter-spacing-adjustment: -0.25px;
    /* Adjusting font feature settings for accessibility reasons */
    --mdc-themeprovider-font-feature-settings: 'ss02' on;

    /* Custom scrollbar variables */
    --mdc-themeprovider-scrollbar-track-color: transparent;
    --mdc-themeprovider-scrollbar-thumb-color: var(--mds-color-theme-scrollbar-button-normal);

    color: var(--mdc-themeprovider-color-default);
    font-family: var(--mdc-themeprovider-font-family);
    font-weight: var(--mdc-themeprovider-font-weight);
    letter-spacing: var(--mdc-themeprovider-letter-spacing-adjustment);

    font-feature-settings: var(--mdc-themeprovider-font-feature-settings);
  }

  /** Scrollbar Theme for Chrome, Edge, and Firefox. This has limited support on other browsers.
    https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color for more details */
  * {
    scrollbar-color: var(--mdc-themeprovider-scrollbar-thumb-color) var(--mdc-themeprovider-scrollbar-track-color);
  }
`;

export default [styles];
