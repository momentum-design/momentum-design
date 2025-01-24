import { css } from 'lit';
import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [hostFitContentStyles, css`
  :host {
    display: block;
  }
  :host([disabled]) .mdc-radio__label-text,
  :host([disabled]) .mdc-radio__help-text {
    color: var(--mds-color-theme-text-primary-disabled);
  }
  :host([disabled]) .mdc-radio__icon-container:hover {
    background: unset;
  }
  :host([disabled]) .mdc-radio__icon-container .mdc-radio__icon {
    border: 1px solid var(--mds-color-theme-outline-primary-disabled);
    background: var(--mds-color-theme-control-inactive-disabled);
  }
  :host([disabled]) .mdc-radio__icon-container input:checked ~ .mdc-radio__icon {
    border: 1px solid var(--mds-color-theme-outline-primary-disabled);
    background: var(--mds-color-theme-control-active-disabled);
  }
  :host([disabled]) input:checked ~ .mdc-radio__icon:after {
    background: var(--mds-color-theme-inverted-text-primary-disabled);
  }
  .mdc-radio__container {
    display: flex;
    align-items: start;
  }

  .mdc-radio__container[disabled] {
    border-color: var(--mds-color-theme-outline-primary-disabled);
    background: var(--mds-color-theme-control-inactive-disabled);
  }
  .mdc-radio__icon-container {
    display: block;
    position: relative;
    width: 1rem;
    height: 1rem;
    margin: 0.125rem 0.5rem;
  }

  .mdc-radio__icon-container input{
    position: absolute;
    opacity: 0;
    margin: 0;
    width: 1rem;
    height: 1rem;
    cursor: pointer;
    z-index: 2;
  }

  .mdc-radio__icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 1rem;
    height: 1rem;
    border: 1px solid var(--mds-color-theme-outline-input-normal);
    background: var(--mds-color-theme-control-inactive-normal);
    border-radius: 50%;
    z-index: 1;
  }

  .mdc-radio__icon-container .mdc-radio__icon:after {
    content: "";
    position: absolute;
    display: none;
  }

  .mdc-radio__icon-container input:checked ~ .mdc-radio__icon:after {
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: red;
  }

  .mdc-radio__icon-container:hover .mdc-radio__icon {
    border-color: var(--mds-color-theme-control-inactive-hover);
    background: var(--mds-color-theme-control-inactive-hover);
  }

  .mdc-radio__icon-container:active .mdc-radio__icon {
    background: var(--mds-color-theme-control-inactive-pressed);
  }

  .mdc-radio__icon-container input:checked ~ .mdc-radio__icon {
    border-color: var(--mds-color-theme-control-active-normal);
    background-color: var(--mds-color-theme-control-active-normal);
  }
  .mdc-radio__icon-container:hover input:checked ~ .mdc-radio__icon {
    border-color: var(--mds-color-theme-control-active-hover);
    background-color: var(--mds-color-theme-control-active-hover);
  }
  .mdc-radio__icon-container:active input:checked ~ .mdc-radio__icon {
    border-color: var(--mds-color-theme-control-active-pressed);
    background-color: var(--mds-color-theme-control-active-pressed);
  }

  .mdc-radio__icon-container:focus input:checked .mdc-radio__icon {
    background: var(--mds-color-theme-control-active-normal);
  }

  .mdc-radio__label-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
  }
`, ...hostFocusRingStyles(true)];

export default styles;
