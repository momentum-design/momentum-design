import { css } from 'lit';
import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [hostFitContentStyles, css`
  :host {
    display: block;
    position: relative;
    margin: 4px 0;
    min-height: 18px;
    user-select: none;
  }
  :host([indeterminate]) {
    cursor: none;
    pointer-events: none;
  }
  :host([disabled]) .mdc-checkbox__label-text,
  :host([disabled]) .mdc-checkbox__help-text {
    color: var(--mds-color-theme-text-primary-disabled);
  }
  :host([disabled]) .mdc-checkbox__label-text:hover:before {
    background-color: unset;
  }
  :host([disabled]) > .mdc-checkbox__container > .mdc-checkbox__label-text:before {
    border: 1px solid var(--mds-color-theme-outline-primary-disabled);
  }
  :host([disabled]) > .mdc-checkbox__container > .mdc-checkbox__label-text > .mdc-checkbox__icon {
    --mdc-icon-fill-color: var(--mds-color-theme-text-primary-disabled);
    border: 1px solid var(--color-theme-outline-primary-disabled);
    background: var(--mds-color-theme-control-active-disabled);
  }
  .mdc-checkbox__container {
    display: flex;
  }
  .mdc-checkbox__input {
    position: absolute;
    height: 1px;
    left: 9px;
    margin: 0;
    top: 17px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap;
  }
  .icon {
    align-items: center;
    background-color: green;
    background-size: 16px;
    border: 1px solid green;
    color: lightblue;
    display: flex;
    height: 18px;
    justify-content: center;
    left: 0;
    margin-left: 0;
    margin-right: 9px;
    padding: 0;
    position: absolute;
    top: 0;
    width: 18px;
    border-radius: 3px;
  }
  span {
    margin-left: 1.5rem;
  }
  .icon:focus-within {
    position: absolute !important;
  }
  .mdc-checkbox__input:checked ~ .mdc-checkbox__label-text > .mdc-checkbox__icon {
    display: block;
    background-color: var(--mds-color-theme-control-active-normal);
  }
  .mdc-checkbox__input:not(:checked) ~ .mdc-checkbox__label-text > .mdc-checkbox__icon {
    display: none;
  }
  .mdc-checkbox__icon {
    position: absolute;
    --mdc-icon-fill-color: var(--mds-color-theme-inverted-text-primary-normal);
  }
  .mdc-checkbox__label-text {
    align-items: center;
    cursor: pointer;
    display: flex;
    gap: 0.5rem;
  }
  .mdc-checkbox__label-text:before {
    content: " ";
    background-color: unset;
    border: 1px solid var(--mds-color-theme-outline-button-normal);
    height: 1rem;
    width: 1rem;
  }
  .mdc-checkbox__label-text:hover:before {
    background-color: var(--mds-color-theme-control-inactive-hover);
  }
  .mdc-checkbox__input:checked ~ .mdc-checkbox__label-text > .mdc-checkbox__icon, .mdc-checkbox__label-text:before {
    border-radius: 0.125rem;
  }
  .mdc-checkbox__help-text {
    color: var(--mds-color-theme-text-secondary-normal);
    margin-left: 1.5rem;
    height: 1.25rem;
  }
`, ...hostFocusRingStyles(true)];

export default styles;
