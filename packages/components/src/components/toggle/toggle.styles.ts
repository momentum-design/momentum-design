import { css } from 'lit';
import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [hostFitContentStyles, css`
  :host {
    --mdc-toggle-width: 3rem;
    --mdc-toggle-height: 1.5rem;
    --mdc-toggle-width-compact: 2rem;
    --mdc-toggle-height-compact: 1rem;
    --mdc-toggle-border-radius: 0.75rem;
    --mdc-toggle-border-radius-compact: 0.5rem;
    --mdc-toggle-border: 0.0625rem solid var(--mds-color-theme-outline-input-normal);

    --mdc-toggle-inactive-rest-color: var(--mds-color-theme-control-inactive-normal);
    --mdc-toggle-inactive-hover-color: var(--mds-color-theme-control-inactive-hover);
    --mdc-toggle-inactive-pressed-color: var(--mds-color-theme-control-inactive-pressed);
    --mdc-toggle-inactive-disabled-color: var(--mds-color-theme-control-inactive-disabled);
    --mdc-toggle-active-rest-color: var(--mds-color-theme-control-active-normal);
    --mdc-toggle-active-hover-color: var(--mds-color-theme-control-active-hover);
    --mdc-toggle-active-pressed-color: var(--mds-color-theme-control-active-pressed);
    --mdc-toggle-active-disabled-color: var(--mds-color-theme-control-active-disabled);

    --mdc-toggle-label-lineheight: var(--mds-font-lineheight-body-midsize);
    --mdc-toggle-label-fontsize: var(--mds-font-size-body-midsize);
    --mdc-toggle-label-fontweight: 400;
    --mdc-toggle-label-color-disabled: var(--mds-color-theme-text-primary-disabled);
    --mdc-toggle-help-text-color: var(--mds-color-theme-text-secondary-normal);

    --mdc-toggle-icon-color-normal: var(--mds-color-theme-common-inverted-text-primary-normal);
    --mdc-toggle-icon-color-disabled: var(--mds-color-theme-common-inverted-text-primary-disabled);
    --mdc-toggle-icon-background-color-normal: var(--mds-color-theme-common-text-primary-normal);
    --mdc-toggle-icon-background-color-disabled: var(--mds-color-theme-common-text-primary-disabled);
  }

  :host([label]), :host([help-text]){
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto;
    column-gap: 0.75rem;
    row-gap: 0.25rem;
  }

  :host([help-text='']) {
    grid-template-rows: auto;
    row-gap: 0rem;
  }

  .mdc-toggle__container {
    position: relative;
    border-radius: var(--mdc-toggle-border-radius);
  }

  .mdc-toggle__input {
    opacity: 0;
    position: absolute;
    cursor: pointer;
  }

  .mdc-toggle__slider {
    width: var(--mdc-toggle-width);
    height: var(--mdc-toggle-height);
    background: var(--mdc-toggle-inactive-rest-color);
    border-radius: var(--mdc-toggle-border-radius);
    border: var(--mdc-toggle-border);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    transition: background-color 0.3s ease;
    outline: none;
    padding: 0.0625rem;
  }

  :host([checked]) .mdc-toggle__slider {
    background-color: var(--mdc-toggle-active-rest-color);
    justify-content: flex-end;
    border-color: transparent;
  }

  :host([size='compact']) .mdc-toggle__slider {
    width: var(--mdc-toggle-width-compact);
    height: var(--mdc-toggle-height-compact);
    border-radius: var(--mdc-toggle-border-radius-compact);
  }
  
  .mdc-toggle__icon {
    padding: 0.25rem;
   --mdc-icon-fill-color: var(--mdc-toggle-icon-color-normal);
   background-color: var(--mdc-toggle-icon-background-color-normal);
   border-radius: 50%;
  }

  :host([disabled]) .mdc-toggle__icon {
    --mdc-icon-fill-color: var(--mdc-toggle-icon-color-disabled);
  }

  :host([size='compact']) .mdc-toggle__icon {
    padding: 0.125rem;
  }

  :host(:not([disabled])) .mdc-toggle__container:hover .mdc-toggle__slider {
    background-color: var(--mdc-toggle-inactive-hover-color);
  }

  :host(:not([disabled])) .mdc-toggle__container:active .mdc-toggle__slider {
    background-color: var(--mdc-toggle-inactive-pressed-color);
  }

  :host(:not([disabled])[checked]) .mdc-toggle__container:hover .mdc-toggle__slider {
    background-color: var(--mdc-toggle-active-hover-color);
  }

  :host(:not([disabled])[checked]) .mdc-toggle__container:active .mdc-toggle__slider {
    background-color: var(--mdc-toggle-active-pressed-color);
  }

  :host([disabled]) .mdc-toggle__slider {
    background-color: var(--mdc-toggle-inactive-disabled-color);
  }

  :host([disabled][checked]) .mdc-toggle__slider {
    background-color: var(--mdc-toggle-active-disabled-color);
  }

  :host([disabled]) .mdc-toggle__icon {
    background-color: var(--mdc-toggle-icon-background-color-disabled);
  }

  .mdc-label-text, .mdc-help-text {
    font-size: var(--mdc-toggle-label-fontsize);
    font-weight: var(--mdc-toggle-label-fontweight);
    line-height: var(--mdc-toggle-label-lineheight);
    grid-column: 2;
  }

  .mdc-help-text {
    color: var(--mdc-toggle-help-text-color);
  }

  :host([disabled]) .mdc-label-text, :host([disabled]) .mdc-help-text {
    color: var(--mdc-toggle-label-color-disabled);
  }

   /* High Contrast Mode */
   @media (forced-colors: active) {
    :host([checked]) .mdc-toggle__slider, .mdc-toggle__icon {
      border: var(--mdc-toggle-border);
    }
  }
`, ...hostFocusRingStyles(true)];

export default styles;
