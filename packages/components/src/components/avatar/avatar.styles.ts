import { css } from 'lit';

const styles = css`
  :host {
    --mdc-avatar-default-background-color: var(--mds-color-theme-avatar-default);
    --mdc-avatar-default-foreground-color: var(--mds-color-theme-common-text-primary-normal);
  }
  .place-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container {
    padding: unset;
    margin: unset;
    position: absolute;
    border-radius: 10%;
    background-color: unset;
    color: var(--mdc-avatar-default-foreground-color);
  }
  .content {
    background-color: var(--mdc-avatar-default-background-color);
    border-radius: 100vh;
  }
  .photo {
    border-radius: 100vh;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .icon {
    height: 100%;
    width: 100%;
    color: white;
  }
  .presence {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

export default [styles];
