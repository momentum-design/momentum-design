import { css } from 'lit';
import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [hostFitContentStyles, css`
  :host{
    --mdc-radio-inner-circle-size: 0.375rem;
    --mdc-radio-text-disabled-color: var(--mds-color-theme-text-primary-disabled);
    --mdc-radio-disabled-border-color: var(--mds-color-theme-outline-primary-disabled);
    --mdc-radio-normal-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-radio-inner-circle-normal-background: var(--mds-color-theme-inverted-text-primary-normal);
    --mdc-radio-inner-circle-disabled-background: var(--mds-color-theme-inverted-text-primary-disabled);

    --mdc-radio-control-inactive-color: var(--mds-color-theme-control-inactive-normal);
    --mdc-radio-control-inactive-hover: var(--mds-color-theme-control-inactive-hover);
    --mdc-radio-control-inactive-pressed-color: var(--mds-color-theme-control-inactive-pressed);
    --mdc-radio-control-inactive-disabled-background: var(--mds-color-theme-control-inactive-disabled);

    --mdc-radio-control-active-color: var(--mds-color-theme-control-active-normal);
    --mdc-radio-control-active-hover-color: var(--mds-color-theme-control-active-hover);
    --mdc-radio-control-active-pressed-color: var(--mds-color-theme-control-active-pressed);
    --mdc-radio-control-active-disabled-background: var(--mds-color-theme-control-active-disabled);

  }
  :host([readonly]) .mdc-radio__input,
  :host([disabled]) .mdc-radio__input,
  :host([disabled]) .mdc-label,
  :host([readonly]) .mdc-label{
    cursor: default;
  }

  .mdc-label {
    cursor: pointer;
  }

  :host([disabled]) .mdc-radio__label-text,
  :host([disabled]) .mdc-radio__help-text {
    color: var(--mdc-radio-text-disabled-color);
  }

  :host([disabled]) .mdc-radio__icon,
  :host([disabled]) .mdc-radio__container:hover .mdc-radio__icon,
  :host([disabled][readonly]) .mdc-radio__icon,
  :host([disabled][readonly]) .mdc-radio__container:hover .mdc-radio__icon {
    border-color: var(--mdc-radio-disabled-border-color);
    background: var(--mdc-radio-control-inactive-disabled-background);
  }

  :host([disabled][checked]) .mdc-radio__icon,
  :host([disabled][checked]) .mdc-radio__container:hover .mdc-radio__icon,
  :host([disabled][readonly][checked]) .mdc-radio__icon,
  :host([disabled][readonly][checked]) .mdc-radio__container:hover .mdc-radio__icon {
    border: var(--mdc-radio-control-active-disabled-background);
    background: var(--mdc-radio-control-active-disabled-background);
  }

  :host([disabled][checked]) .mdc-radio__icon:after,
  :host([disabled][checked]) .mdc-radio__container:hover  .mdc-radio__icon:after,
  :host([disabled][readonly][checked]) .mdc-radio__icon:after,
  :host([disabled][readonly][checked]) .mdc-radio__container:hover  .mdc-radio__icon:after {
    background: var(--mdc-radio-inner-circle-disabled-background);
  }

  :host .mdc-radio__icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 1rem;
    height: 1rem;
    border: 0.0625rem solid var(--mdc-radio-normal-border-color);
    background-color: var(--mdc-radio-control-inactive-color);
    border-radius: 50%;
  }

  :host([checked]) .mdc-radio__icon {
    border-color: var(--mdc-radio-control-active-color);
    background-color: var(--mdc-radio-control-active-color);
  }

  :host([checked]) .mdc-radio__icon:after {
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: var(--mdc-radio-inner-circle-size);
    height: var(--mdc-radio-inner-circle-size);
    border-radius: 50%;
    background: var(--mdc-radio-inner-circle-normal-background);
  }

  :host .mdc-radio__input:hover ~ .mdc-radio__icon {
    border-color: var(--mdc-radio-normal-border-color);
    background-color: var(--mdc-radio-control-inactive-hover);
  }

  :host([checked]) .mdc-radio__input:hover ~ .mdc-radio__icon {
    border-color: var(--mdc-radio-control-active-hover-color);
    background-color: var(--mdc-radio-control-active-hover-color);
  }

  :host .mdc-radio__input:active ~ .mdc-radio__icon {
    border-color: var(--mdc-radio-normal-border-color);
    background-color: var(--mdc-radio-control-inactive-pressed-color);
  }

  :host([checked]) .mdc-radio__input:active ~ .mdc-radio__icon {
    border-color: var(--mdc-radio-control-active-pressed-color);
    background-color: var(--mdc-radio-control-active-pressed-color);
  }

  :host([readonly]) .mdc-radio__icon,
  :host([readonly]) .mdc-radio__container:hover .mdc-radio__icon {
    border-color: var(--mdc-radio-normal-border-color);
    background-color: var(--mdc-radio-control-inactive-color);
  }

  :host([readonly][checked]) .mdc-radio__icon {
    border-color: var(--mdc-radio-normal-border-color);
  }

  :host([readonly][checked]) .mdc-radio__icon:after,
  :host([readonly][checked]) .mdc-radio__container:hover .mdc-radio__icon:after,
  :host([readonly][checked]) .mdc-radio__container:active .mdc-radio__icon:after {
    background-color: var(--mdc-radio-text-disabled-color);
  }

  .mdc-radio__container {
    display: flex;
    align-items: start;
    gap: 0.5rem;
  }
  .mdc-radio__icon-container {
    display: block;
    position: relative;
    width: 1rem;
    height: 1rem;
    margin: 0.125rem 0;
    border-radius: 50%;
  }

  .mdc-radio__icon-container input{
    position: absolute;
    opacity: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 2;
  }
  
  .mdc-radio__icon-container .mdc-radio__icon:after {
    content: "";
    position: absolute;
    display: none;
  }

  .mdc-radio__label-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.25rem;
  }
  :host::part(required-label){
    display: none;
  }

`, ...hostFocusRingStyles(true)];

export default styles;
