import { css } from 'lit';

const styles = css`
  :host {
    --mdc-font-size-body-large: var(--mds-font-size-body-large);
    --mdc-font-lineheight-body-large: var(--mds-font-lineheight-body-large);
    --mdc-color-theme-text-primary-normal: var(--mds-color-theme-text-primary-normal);
    --mdc-font-weight-bold: var(--mds-font-weight-bold);
  }

  .mdc-radio-group{
    display: flex;
    flex-direction: column;
  }

  .mdc-radio-group__label {
    font-size: var(--mdc-font-size-body-large);
    line-height: var(--mdc-font-lineheight-body-large);
    color: var(--mdc-color-theme-text-primary-normal);
    font-weight: var(--mdc-font-weight-bold);
  }
`;

export default [styles];
