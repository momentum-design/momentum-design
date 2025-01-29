import { css } from 'lit';
import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [hostFitContentStyles, css`
  :host{
    --mdc-inner-circle-size: 0.375rem;
    --mdc-radio-color-theme-text-primary-disabled: var(--mds-color-theme-text-primary-disabled);
    --mdc-radio-color-theme-outline-primary-disabled: var(--mds-color-theme-outline-primary-disabled);
    --mdc-radio-color-theme-control-inactive-disabled: var(--mds-color-theme-control-inactive-disabled);
    --mdc-radio-color-theme-control-active-disabled: var(--mds-color-theme-control-active-disabled);
    --mdc-radio-color-theme-inverted-text-primary-disabled: var(--mds-color-theme-inverted-text-primary-disabled);
    --mdc-radio-color-theme-outline-input-normal: var(--mds-color-theme-outline-input-normal);
    --mdc-radio-color-theme-control-inactive-normal: var(--mds-color-theme-control-inactive-normal);
    --mdc-radio-color-theme-control-active-normal: var(--mds-color-theme-control-active-normal);
    --mdc-radio-color-theme-inverted-text-primary-normal: var(--mds-color-theme-inverted-text-primary-normal);
    --mdc-radio-color-theme-control-inactive-hover: var(--mds-color-theme-control-inactive-hover);
    --mdc-radio-color-theme-control-active-hover: var(--mds-color-theme-control-active-hover);
    --mdc-radio-color-theme-control-inactive-pressed: var(--mds-color-theme-control-inactive-pressed);
    --mdc-radio-color-theme-control-active-pressed: var(--mds-color-theme-control-active-pressed);

  }
  :host([readonly]) .mdc-radio__input,
  :host([disabled]) .mdc-radio__input{
    cursor: unset;
  }

  :host([disabled]) .mdc-radio__label-text,
  :host([disabled]) .mdc-radio__help-text {
    color: var(--mdc-radio-color-theme-text-primary-disabled);
  }

  :host([disabled]) .mdc-radio__icon,
  :host([disabled]) .mdc-radio__container:hover .mdc-radio__icon,
  :host([disabled][readonly]) .mdc-radio__container:hover .mdc-radio__icon {
    border-color: var(--mdc-radio-color-theme-outline-primary-disabled);
    background: var(--mdc-radio-color-theme-control-inactive-disabled);
  }
  :host([disabled][checked]) .mdc-radio__icon,
  :host([disabled][checked]) .mdc-radio__container:hover .mdc-radio__icon,
  :host([disabled][readonly][checked]) .mdc-radio__icon,
  :host([disabled][readonly][checked]) .mdc-radio__container:hover .mdc-radio__icon {
    border-color: var(--mdc-radio-color-theme-outline-primary-disabled);
    background: var(--mdc-radio-color-theme-control-active-disabled);
  }
  :host([disabled][checked]) .mdc-radio__icon:after,
  :host([disabled][checked]) .mdc-radio__container:hover  .mdc-radio__icon:after,
  :host([disabled][readonly][checked]) .mdc-radio__icon:after,
  :host([disabled][readonly][checked]) .mdc-radio__container:hover  .mdc-radio__icon:after {
    background: var(--mdc-radio-color-theme-inverted-text-primary-disabled);
  }

  :host .mdc-radio__icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 1rem;
    height: 1rem;
    border: 0.0625rem solid var(--mdc-radio-color-theme-outline-input-normal);
    background-color: var(--mdc-radio-color-theme-control-inactive-normal);
    border-radius: 50%;
  }

  :host([checked]) .mdc-radio__icon {
    border-color: var(--mdc-radio-color-theme-control-active-normal);
    background-color: var(--mdc-radio-color-theme-control-active-normal);
  }

  :host([checked]) .mdc-radio__icon:after {
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: var(--mdc-inner-circle-size);
    height: var(--mdc-inner-circle-size);
    border-radius: 50%;
    background: var(--mdc-radio-color-theme-inverted-text-primary-normal);
  }

  :host .mdc-radio__input:hover ~ .mdc-radio__icon {
    border-color: var(--mdc-radio-color-theme-outline-input-normal);
    background-color: var(--mdc-radio-color-theme-control-inactive-hover);
  }

  :host([checked]) .mdc-radio__input:hover ~ .mdc-radio__icon {
    border-color: var(--mdc-radio-color-theme-control-active-hover);
    background-color: var(--mdc-radio-color-theme-control-active-hover);
  }

  :host .mdc-radio__input:active ~ .mdc-radio__icon {
    border-color: var(--mdc-radio-color-theme-outline-input-normal);
    background-color: var(--mdc-radio-color-theme-control-inactive-pressed);
  }

  :host([checked]) .mdc-radio__input:active ~ .mdc-radio__icon {
    border-color: var(--mdc-radio-color-theme-control-active-pressed);
    background-color: var(--mdc-radio-color-theme-control-active-pressed);
  }

  :host([readonly]) .mdc-radio__icon,
  :host([readonly]) .mdc-radio__container:hover .mdc-radio__icon {
    border-color: var(--mdc-radio-color-theme-outline-input-normal);
    background-color: var(--mdc-radio-color-theme-control-inactive-normal);
  }

  :host([readonly][checked]) .mdc-radio__icon {
    border-color: var(--mdc-radio-color-theme-outline-input-normal);
  }

  :host([readonly][checked]) .mdc-radio__icon:after,
  :host([readonly][checked]) .mdc-radio__container:hover .mdc-radio__icon:after,
  :host([readonly][checked]) .mdc-radio__container:active .mdc-radio__icon:after {
    background-color: var(--mdc-radio-color-theme-text-primary-disabled);
  }

  .mdc-radio__container {
    display: flex;
    align-items: start;
  }
  .mdc-radio__icon-container {
    display: block;
    position: relative;
    width: 1rem;
    height: 1rem;
    margin: 0.125rem 0.5rem;
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
`, ...hostFocusRingStyles(true)];

export default styles;
