import { css } from 'lit';

const styles = css`
  :host {
    --mdc-radio-group-label-text-normal: var(--mds-color-theme-text-primary-normal);
    --mdc-radio-group-description-text-normal: var(--mds-color-theme-text-secondary-normal);
  }

  .mdc-radio-group{
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .mdc-radio-group__label {
    color: var(--mdc-radio-group-label-text-normal);
    margin-bottom: 0.5rem;
  }

  .mdc-radio-group__description {
    color: var(--mdc-radio-group-description-text-normal);
    margin-bottom: 1rem;
  }
`;

export default [styles];
