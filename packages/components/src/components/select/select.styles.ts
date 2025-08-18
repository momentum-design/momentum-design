import { css } from 'lit';

import { hostFocusRingStyles } from '../../utils/styles';

const styles = css`
  :host {
    --mdc-select-background-color: var(--mds-color-theme-background-primary-ghost);
    --mdc-select-background-color-hover: var(--mds-color-theme-background-primary-hover);
    --mdc-select-background-color-active: var(--mds-color-theme-background-primary-active);
    --mdc-select-background-color-disabled: var(--mds-color-theme-background-input-disabled);
    --mdc-select-text-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-select-text-color-selected: var(--mds-color-theme-text-primary-normal);
    --mdc-select-text-color-disabled: var(--mds-color-theme-text-primary-disabled);
    --mdc-select-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-select-border-color-disabled: var(--mds-color-theme-outline-primary-disabled);
    --mdc-select-border-color-success: var(--mds-color-theme-text-success-normal);
    --mdc-select-border-color-warning: var(--mds-color-theme-text-warning-normal);
    --mdc-select-border-color-error: var(--mds-color-theme-text-error-normal);
    --mdc-select-width: 100%;
    --mdc-select-listbox-width: var(--mdc-select-width);
    --mdc-select-listbox-height: auto;

    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    align-items: unset;
    width: var(--mdc-select-width);
  }
  :host::part(native-input) {
    margin: 0;
    opacity: 0.1%;
    overflow: visible;
    padding: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
  :host::part(container) {
    width: 100%;
    position: relative;
  }
  :host ::slotted(mdc-selectlistbox) {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: var(--mdc-popover-internal-available-height);
  }
  :host::part(base-container) {
    border-radius: 0.5rem;
    padding: 5.5px 6px 5.5px 12px;
    border: 1px solid var(--mdc-select-border-color);
    background: var(--mdc-select-background-color);
    display: flex;
    gap: 0.375rem;
    align-items: center;
    user-select: none;
  }
  :host::part(base-container):hover {
    background-color: var(--mdc-select-background-color-hover);
  }
  :host::part(base-container):active {
    background-color: var(--mdc-select-background-color-active);
  }
  :host::part(base-text) {
    height: 1.3125rem;
    width: 100%;
    color: var(--mdc-select-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  :host::part(selected) {
    color: var(--mdc-select-text-color-selected);
  }
  :host::part(selected-icon) {
    flex-shrink: 0;
  }
  :host::part(icon-container) {
    margin-left: auto;
    display: flex;
    padding: 2px;
  }

  /* Popover height, width & padding overrides */
  :host mdc-popover {
    --mdc-popover-max-width: var(--mdc-select-listbox-width);
    --mdc-popover-max-height: var(--mdc-select-listbox-height);
  }
  :host mdc-popover::part(popover-content) {
    max-height: var(--mdc-popover-max-height);
    min-width: auto;
    padding: 0.75rem 0.5rem;
  }

  /* Help text border colors */
  :host([help-text-type='success'])::part(base-container) {
    border-color: var(--mdc-select-border-color-success);
  }
  :host([help-text-type='warning'])::part(base-container) {
    border-color: var(--mdc-select-border-color-warning);
  }
  :host([help-text-type='error'])::part(base-container) {
    border-color: var(--mdc-select-border-color-error);
  }

  /* Disabled, soft-disabled */
  :host([disabled])::part(base-container),
  :host([soft-disabled])::part(base-container),
  :host([readonly])::part(base-container),
  :host([help-text-type='success'][disabled])::part(base-container),
  :host([help-text-type='error'][disabled])::part(base-container),
  :host([help-text-type='warning'][disabled])::part(base-container),
  :host([help-text-type='success'][readonly])::part(base-container),
  :host([help-text-type='error'][readonly])::part(base-container),
  :host([help-text-type='warning'][readonly])::part(base-container) {
    border-color: var(--mdc-select-border-color-disabled);
    background: var(--mdc-select-background-color-disabled);
  }
  :host([disabled])::part(base-text),
  :host([soft-disabled])::part(base-text) {
    color: var(--mdc-select-text-color-disabled);
  }
`;

export default [styles, ...hostFocusRingStyles(true)];
