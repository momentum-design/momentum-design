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

    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    width: var(--mdc-combobox-width);
  }
  :host::part(combobox__base) {
    width: 100%;
    display: flex;
    position: relative;
    border-radius: 0.5rem;
  }
  :host(:dir(ltr))::part(combobox__button) {
    background-color: unset;
    border-radius: 0 0.5rem 0.5rem 0;
    border-left: 1px solid var(--mdc-combobox-border-color);
    position: absolute;
    padding: 0.5rem;
    right: 0;
  }
  :host(:dir(rtl))::part(combobox__button) {
    background-color: unset;
    border-radius: 0.5rem 0 0 0.5rem;
    border-right: 1px solid var(--mdc-combobox-border-color);
    position: absolute;
    padding: 0.5rem;
    left: 0;
  }
  :host([disabled])::part(combobox__button) {
    cursor: unset;
  }
  :host(:focus-within)::part(combobox__button) {
    border-inline-start-color: var(--mdc-combobox-border-color);
  }
  :host(:not([disabled]))::part(combobox__base):hover {
    background-color: var(--mdc-combobox-hover-background-color);
  }
  :host([help-text-type='error'])::part(combobox__button),
  :host([help-text-type='warning'])::part(combobox__button),
  :host([help-text-type='success'])::part(combobox__button),
  :host([help-text-type='priority'])::part(combobox__button) {
    border-color: var(--mdc-help-text-color);
  }
  :host([disabled])::part(combobox__button) {
    border-inline-start-color: var(--mdc-combobox-text-color-disabled);
  }
  :host::part(mdc-input) {
    width: calc(100% - 1.5rem);
  }
  :host::part(combobox__button-icon) {
    --mdc-icon-fill-color: var(--mdc-combobox-icon-color);
  }
  :host([disabled])::part(combobox__button-icon) {
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
    outline: none;
  }
  /* High Contrast Mode */
  @media (forced-colors: active) {
    :host::part(combobox__button-icon) {
      --mdc-icon-fill-color: ButtonText;
    }
  }
`;

export default [styles];
