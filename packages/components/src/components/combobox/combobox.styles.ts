import { css } from 'lit';

const styles = css`
  :host {
    --mdc-combobox-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-combobox-icon-color: var(--mds-color-theme-text-primary-normal);
    --mdc-combobox-width: 100%;
    --mdc-combobox-listbox-width: var(--mdc-combobox-width);
    --mdc-combobox-listbox-height: auto;
    --mdc-combobox-text-color-disabled: var(--mds-color-theme-text-primary-disabled);
    --mdc-combobox-hover-background-color: var(--mds-color-theme-background-primary-hover);
    --mdc-combobox-error-border-color: var(--mds-color-theme-text-error-normal);
    --mdc-combobox-warning-border-color: var(--mds-color-theme-text-warning-normal);
    --mdc-combobox-success-border-color: var(--mds-color-theme-text-success-normal);
    --mdc-combobox-primary-border-color: var(--mds-color-theme-text-accent-normal);
    --mdc-combobox-focused-background-color: var(--mds-color-theme-background-primary-ghost);

    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    align-items: unset;
    width: var(--mdc-combobox-width);
  }
  :host::part(container__base) {
    width: 100%;
    display: flex;
    position: relative;
    border-radius: 0.5rem;
  }
  :host::part(container__button) {
    position: absolute;
    right: 0;
    padding: 0.5rem;
    background-color: unset;
    border-left: 1px solid var(--mdc-combobox-border-color);
  }
  :host mdc-input {
    --mdc-input-error-border-color: var(--mdc-combobox-error-border-color);
    --mdc-input-warning-border-color: var(--mdc-combobox-warning-border-color);
    --mdc-input-success-border-color: var(--mdc-combobox-success-border-color);
    --mdc-input-primary-border-color: var(--mdc-combobox-primary-border-color);
  }
  :host::part(container__base):hover {
    background-color: var(--mdc-combobox-hover-background-color);
  }
  :host::part(container__base):active {
    background-color: var(--mdc-combobox-focused-background-color);
  }
  :host([help-text-type='error'])::part(container__button) {
    border-color: var(--mdc-combobox-error-border-color);
  }
  :host([help-text-type='warning'])::part(container__button) {
    border-color: var(--mdc-combobox-warning-border-color);
  }
  :host([help-text-type='success'])::part(container__button) {
    border-color: var(--mdc-combobox-success-border-color);
  }
  :host([help-text-type='priority'])::part(container__button) {
    border-color: var(--mdc-combobox-primary-border-color);
  }
  :host([disabled])::part(container__button) {
    border-left: 1px solid var(--mdc-combobox-text-color-disabled);
  }
  :host::part(mdc-input) {
    width: calc(100% - 1.5rem);
  }
  :host(:dir(rtl))::part(container__button) {
    right: unset;
    border-left: unset;
    left: 0;
    border-right: 1px solid var(--mdc-combobox-border-color);
  }
  :host::part(container__button-icon) {
    --mdc-icon-fill-color: var(--mdc-combobox-icon-color);
  }
  :host([disabled])::part(container__button-icon) {
    --mdc-icon-fill-color: var(--mdc-combobox-text-color-disabled);
  }
  :host::part(no-result-text) {
    pointer-events: none;
  }
  :host([disabled]) input,
  :host([disabled]) mdc-input {
    user-select: none;
    pointer-events: none;
  }
  :host::part(internal-native-input) {
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
  :host ::slotted(mdc-selectlistbox) {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: var(--mdc-popover-internal-available-height);
  }
  /* Popover height & width overrides */
  :host mdc-popover {
    --mdc-popover-max-height: var(--mdc-combobox-listbox-height);
    --mdc-popover-max-width: var(--mdc-combobox-listbox-width);
  }
  :host mdc-popover::part(popover-content) {
    max-height: var(--mdc-popover-max-height);
  }
  /* High Contrast Mode */
  @media (forced-colors: active) {
    :host::part(container__button-icon) {
      --mdc-icon-fill-color: ButtonText;
    }
  }
`;

export default [styles];
