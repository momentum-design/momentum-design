import { css } from 'lit';
import { hostFocusRingStyles } from '../../utils/styles';

const styles = css`
  :host {
    --mdc-select-background-color: var(--mds-color-theme-background-primary-ghost);
    --mdc-select-icon-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-select-placeholder-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-select-disabled-color: var(--mds-color-theme-outline-primary-disabled);

    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
  }
  :host::part(base-container) {
    border-radius: 0.5rem;
    padding: 5.5px 6px 5.5px 12px;
    border: 1px solid var(--mdc-select-icon-border-color);
    background: var(--mdc-select-background-color);
    display: flex;
    gap: 0.375rem;
  }
  :host::part(placeholder-text) {
    width: 100%;
    color: var(--mdc-select-placeholder-color);
  }
  :host::part(icon-container) {
    margin-left: auto;
    display: flex;
    padding: 2px;
  }
  :host([disabled]) {
    border-color: var(--mdc-select-disabled-color);
  }
  :host::part(popover-content) {
    background-color: orange;
    width: calc(100% + 2px);
  }
`;

export default [styles, ...hostFocusRingStyles(true)];
