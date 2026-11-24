import { css } from 'lit';

const styles = css`
  :host {
    --mdc-announcementdialog-illustration-background-color: var(--mds-color-theme-background-solid-secondary-normal);

    background-image: linear-gradient(
      var(--mdc-announcementdialog-illustration-background-color) 0%,
      var(--mdc-announcementdialog-illustration-background-color) 100%
    );
    background-size: 50% 100%;
    background-position: left;
    background-repeat: no-repeat;
    max-height: 100vh;
  }
  :host(:dir(rtl)) {
    background-position: right;
  }
  :host::part(body) {
    padding-top: var(--mds-spacing-theme-pad-v-2xl) !important;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0px, 1fr));
  }
  :host::part(illustration-container) {
    width: auto;
  }

  :host mdc-illustration {
    width: auto;
    margin-inline-start: var(--mds-spacing-theme-pad-h-md);
    margin-inline-end: var(--mds-spacing-theme-pad-h-2xl);
  }
  :host::part(content-container) {
    color: var(--mdc-dialog-description-text-color);
    width: auto;
    margin-inline-start: var(--mds-spacing-theme-pad-h-2xl);
    margin-inline-end: var(--mds-spacing-theme-pad-h-md);
  }

  @media (max-width: 27rem) {
    :host {
      background-size: 0% 100%;
    }
    :host::part(illustration-container) {
      display: none;
    }
    :host::part(content-container) {
      margin-inline-start: var(--mds-spacing-theme-pad-none);
      margin-inline-end: var(--mds-spacing-theme-pad-none);
    }
  }
`;

export default [styles];
