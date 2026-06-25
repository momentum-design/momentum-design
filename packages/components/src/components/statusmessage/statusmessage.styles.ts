// AI-Assisted
import { css } from 'lit';

const styles = css`
  :host {
    --mdc-statusmessage-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-statusmessage-font-size: var(--mds-font-apps-body-midsize-regular-font-size);
    --mdc-statusmessage-font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
    --mdc-statusmessage-line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    --mdc-statusmessage-gap: 0.5rem;
    --mdc-statusmessage-icon-size: 1rem;

    display: block;
    width: fit-content;
    color: var(--mdc-statusmessage-color);
    font-size: var(--mdc-statusmessage-font-size);
    font-weight: var(--mdc-statusmessage-font-weight);
    line-height: var(--mdc-statusmessage-line-height);
  }

  :host([severity='error']) {
    --mdc-statusmessage-color: var(--mds-color-theme-text-error-normal);
  }

  :host([severity='warning']) {
    --mdc-statusmessage-color: var(--mds-color-theme-text-warning-normal);
  }

  :host([severity='success']) {
    --mdc-statusmessage-color: var(--mds-color-theme-text-success-normal);
  }

  :host([severity='priority']) {
    --mdc-statusmessage-color: var(--mds-color-theme-text-accent-normal);
  }

  [part='container'] {
    display: flex;
    align-items: center;
    gap: var(--mdc-statusmessage-gap);
    width: 100%;
    color: var(--mdc-statusmessage-color);
    font-size: var(--mdc-statusmessage-font-size);
    font-weight: var(--mdc-statusmessage-font-weight);
    line-height: var(--mdc-statusmessage-line-height);
  }

  [part='icon'],
  ::slotted([slot='icon']) {
    --mdc-icon-size: var(--mdc-statusmessage-icon-size);

    align-self: flex-start;
    flex-shrink: 0;
    height: var(--mdc-statusmessage-icon-size);
    margin-block-start: 0.125rem;
  }

  [part='text'],
  ::slotted(*) {
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }
`;

export default [styles];
// End AI-Assisted
