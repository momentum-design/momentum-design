import { css } from 'lit';

const styles = css`
  :host {
    --mdc-themeprovider-color-default: var(--mds-color-theme-text-primary-normal);
    --mdc-themeprovider-font-family: var(--mds-font-family-primary);
    --mdc-themeprovider-font-weight: 400;
    /* adjusting Inter's letter spacing to better match the old CiscoSans */
    --mdc-themeprovider-letter-spacing-adjustment: -0.25px;
    /* Adjusting font feature settings for accessibility reasons */
    --mdc-themeprovider-font-feature-settings: "ss02" on;

    color: var(--mdc-themeprovider-color-default);
    font-family: var(--mdc-themeprovider-font-family);
    font-weight: var(--mdc-themeprovider-font-weight);
    letter-spacing: var(--mdc-themeprovider-letter-spacing-adjustment);

    font-feature-settings: var(--mdc-themeprovider-font-feature-settings);
  }
   
/* Scrollbar Theme */

  /* width */
  ::-webkit-scrollbar {
    width: 1rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 100vh;
    background: var(--mds-color-theme-scrollbar-background-secondary-normal);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: var(--mds-color-theme-scrollbar-button-normal);
    border: 0.25rem solid transparent;
    border-radius: 0.5rem;
    background-clip: content-box;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--mds-color-theme-scrollbar-button-hover);
    border: 0.25rem solid transparent;
    border-radius: 0.5rem;
    background-clip: content-box;
  }

  /* Handle on press */
  ::-webkit-scrollbar-thumb:active {
    background: var(--mds-color-theme-scrollbar-button-pressed);
    border: 0.25rem solid transparent;
    border-radius: 0.5rem;
    height: 6.25rem;
    background-clip: content-box;
  }

  /* Corner */
  ::-webkit-scrollbar-corner {
    background: inherit;
  }
`;

export default [styles];
