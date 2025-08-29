import { css } from 'lit';

const styles = css`
  :host {
    --mdc-combobox-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-combobox-icon-color: var(--mds-color-theme-text-primary-normal);

    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    align-items: unset;
    width: unset;
  }
  :host::part(container__base) {
    width: 100%;
    display: flex;
    position: relative;
  }
  :host::part(container__button) {
    position: absolute;
    right: 0;
    padding: 0.5rem;
    background-color: unset;
    border-left: 1px solid var(--mdc-combobox-border-color);
  }
  :host::part(container__button-icon) {
    --mdc-icon-fill-color: var(--mdc-combobox-icon-color);
  }
  :host::part(no-result-text) {
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
`;

export default [styles];
