import { css } from 'lit';

const styles = css`
  :host {
    --mdc-radio-group-description-text-normal: var(--mds-color-theme-text-secondary-normal);
  }

  [part="container"]:has([part="description"]) {
    gap: 0;
  }

  [part="container"]:has([part="description"]) > [part="header"] {
    margin-bottom: 4px;
  }

  [part="container"]:has([part="description"]) > [part="description"] {
    color: var(--mdc-radio-group-description-text-normal);
    margin-bottom: 0.75rem;
  }

  [part="container"]:has([part="description"]) > ::slotted(mdc-radio) {
    margin-bottom: 0.75rem;
  }
`;

export default [styles];
