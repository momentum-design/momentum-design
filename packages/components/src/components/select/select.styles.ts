import { css } from 'lit';
import { hostFocusRingStyles } from '../../utils/styles';

const styles = css`
  :host {
    --mdc-select-background-color: var(--mds-color-theme-background-primary-ghost);
    --mdc-select-icon-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-select-base-text-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-select-selected-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-select-disabled-border-color: var(--mds-color-theme-outline-primary-disabled);
    --mdc-select-disabled-background-color: var(--mds-color-theme-background-input-disabled);
    --mdc-select-disabled-text-color: var(--mds-color-theme-text-primary-disabled);
    --mdc-select-error-border-color: var(--mds-color-theme-text-error-normal);
    --mdc-select-warning-border-color: var(--mds-color-theme-text-warning-normal);
    --mdc-select-success-border-color: var(--mds-color-theme-text-success-normal);
    --mdc-select-background-hover: var(--mds-color-theme-background-primary-hover);
    --mdc-select-background-active: var(--mds-color-theme-background-primary-active);

    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    align-items: unset;
    width: unset;
  }
  :host::part(native-select) {
    margin: 0;
    opacity: 0.1%;
    overflow: visible;
    padding: 0;
    position: absolute;
    width: 100%;
    height: 1px;
    z-index: -1;
  }
  :host::part(container) {
    width: 100%;
    position: relative;
  }
  :host::part(base-container) {
    border-radius: 0.5rem;
    padding: 5.5px 6px 5.5px 12px;
    border: 1px solid var(--mdc-select-icon-border-color);
    background: var(--mdc-select-background-color);
    display: flex;
    gap: 0.375rem;
  }
  :host::part(base-container):hover {
    background-color: var(--mdc-select-background-hover);
  }
  :host::part(base-container):active {
    background-color: var(--mdc-select-background-active);
  }
  :host::part(base-text) {
    height: 1.3125rem;
    width: 100%;
    color: var(--mdc-select-base-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  :host::part(selected) {
    color: var(--mdc-select-selected-text-color);
  }
  :host::part(icon-container) {
    margin-left: auto;
    display: flex;
    padding: 2px;
  }
  :host([readonly])::part(icon-container) {
    color: var(--mdc-select-disabled-text-color);
  }
  :host::part(popover-content) {
    min-width: auto;
  }
  :host([disabled])::part(base-container),
  :host([readonly])::part(base-container),
  :host([help-text-type="success"][disabled])::part(base-container),
  :host([help-text-type="error"][disabled])::part(base-container),
  :host([help-text-type="warning"][disabled])::part(base-container),
  :host([help-text-type="success"][readonly])::part(base-container),
  :host([help-text-type="error"][readonly])::part(base-container),
  :host([help-text-type="warning"][readonly])::part(base-container) {
    border-color: var(--mdc-select-disabled-border-color);
    background: var(--mdc-select-disabled-background-color);
  }
  :host([disabled]:hover)::part(base-container),
  :host([readonly]:hover)::part(base-container) {
    background-color: unset;
  }
  :host([readonly])::part(base-text) {
    color: var(--mdc-select-selected-text-color);
  }
  :host([disabled])::part(base-text) {
    color: var(--mdc-select-disabled-text-color);
  }
  :host([help-text-type="success"])::part(base-container) {
    border-color: var(--mdc-select-success-border-color);
  }
  :host([help-text-type="error"])::part(base-container) {
    border-color: var(--mdc-select-error-border-color);
  }
  :host([help-text-type="warning"])::part(base-container) {
    border-color: var(--mdc-select-warning-border-color);
  }
`;

export default [styles, ...hostFocusRingStyles(true)];
