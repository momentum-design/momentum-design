import { css } from 'lit';
import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [hostFitContentStyles, css`
  :host {
    display: block;
    position: relative;
  }
  :host([disabled]) .mdc-checkbox__label-text,
  :host([disabled]) .mdc-checkbox__help-text {
    color: var(--mds-color-theme-text-primary-disabled);
  }
  :host([disabled]) .mdc-checkbox__icon-container:hover {
    background: unset;
  }
  :host([disabled]) .mdc-checkbox__icon-container {
    border: 1px solid var(--mds-color-theme-outline-primary-disabled);
  }
  :host([disabled]) .mdc-checkbox__icon {
    --mdc-icon-fill-color: var(--mds-color-theme-text-primary-disabled);
    background: var(--mds-color-theme-control-active-disabled);
  }
  .mdc-checkbox__container {
    display: flex;
    align-items: center;
    height: 1.5rem;
    cursor: pointer;
  }
  .mdc-checkbox__input {
    position: absolute;
    visibility: hidden;
  }
  .mdc-checkbox__icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-right: 0.5rem;
    height: 1rem;
    width: 1rem;
    border: 1px solid var(--mds-color-theme-outline-button-normal);
    background: unset;
  }
  .mdc-checkbox__icon-container:focus-within {
    position: absolute !important;
  }
  .mdc-checkbox__label-text {
    margin-left: 1.5rem;
  }
  .mdc-checkbox__icon {
    position: absolute;
    background: var(--mds-color-theme-control-active-normal);
    --mdc-icon-fill-color: var(--mds-color-theme-inverted-text-primary-normal);
  }
  .mdc-checkbox__icon-container, .mdc-checkbox__icon {
    border-radius: 0.125rem;
  }
  .mdc-checkbox__icon-container:hover {
    background: var(--mds-color-theme-control-inactive-hover);
  }
  .mdc-checkbox__help-text {
    color: var(--mds-color-theme-text-secondary-normal);
    margin-left: 1.5rem;
    height: 1.25rem;
  }
`, ...hostFocusRingStyles(true)];

export default styles;
