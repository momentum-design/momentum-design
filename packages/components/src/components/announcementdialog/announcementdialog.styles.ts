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
    padding-top: 2rem !important;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0px, 1fr));
  }
  :host::part(illustration-container) {
    width: auto;
  }

  :host mdc-illustration {
    width: auto;
    margin-inline-start: 1rem;
    margin-inline-end: 2rem;
  }
  :host::part(content-container) {
    color: var(--mdc-dialog-description-text-color);
    width: auto;
    margin-inline-start: 2rem;
    margin-inline-end: 1rem;
  }

  @media (max-width: 27rem) {
    :host {
      background-size: 0% 100%;
    }
    :host::part(illustration-container) {
      display: none;
    }
    :host::part(content-container) {
      margin-inline-start: 0;
      margin-inline-end: 0;
    }
  }
`;

export default [styles];
