import { css } from 'lit';
import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [hostFitContentStyles, css`
  :host {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 0.5rem;
  }
  .mdc-label-text {
    line-height: unset;
  }
  .mdc-label {
    cursor: pointer;
  }
  :host([checked]) .mdc-checkbox__icon-container,
  :host([indeterminate]) .mdc-checkbox__icon-container {
    background: var(--mds-color-theme-control-active-normal);
    border: unset;
  }
  :host([disabled]) .mdc-checkbox__container:hover {
    background: unset;
  }
  :host([disabled]) .mdc-checkbox__icon-container {
    border: 1px solid var(--mds-color-theme-outline-primary-disabled);
    background: var(--mds-color-theme-control-inactive-disabled);
  }
  :host([disabled]) .mdc-checkbox__icon {
    --mdc-icon-fill-color: var(--mds-color-theme-text-primary-disabled);
  }
  :host([disabled][checked]) .mdc-checkbox__icon-container,
  :host([disabled][indeterminate]) .mdc-checkbox__icon-container {
    background: var(--mds-color-theme-control-active-disabled);
  }
  .mdc-checkbox__input {
    margin: 0;
    padding: 0;
    position: absolute;
    opacity: 0.1%;
    overflow: visible;
    z-index: 1;
    cursor: pointer
  }
  .mdc-checkbox__icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-grow: 0;
    flex-shrink: 0;
    background: unset;
    border: 1px solid var(--mds-color-theme-outline-button-normal);
  }
  .mdc-checkbox__input, .mdc-checkbox__icon-container {
    width: 1rem;
    height: 1rem;
  }
  .mdc-checkbox__container:hover {
    background: var(--mds-color-theme-control-inactive-hover);
  }
  .mdc-checkbox__input,
  .mdc-checkbox__icon-container,
  .mdc-checkbox__container,
  .mdc-checkbox__container:hover {
    border-radius: 0.125rem;
  }
  .mdc-checkbox__icon {
    --mdc-icon-fill-color: var(--mds-color-theme-inverted-text-primary-normal);
  }
`, ...hostFocusRingStyles(true)];

export default styles;
