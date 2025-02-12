import { css } from 'lit';

const styles = css`
  :host {
    --mdc-label-text-normal: var(--mds-color-theme-text-primary-normal);
    --mdc-description-text-normal: var(--mds-color-theme-text-secondary-normal);
  }

  .mdc-radio-group{
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .mdc-radio-group__label {
    color: var(--mdc-label-text-normal);
    margin-bottom: 0.5rem;
  }

  .mdc-radio-group__description {
    color: var(--mdc-description-text-normal);
    margin-bottom: 1rem;
  }
`;

export default [styles];
