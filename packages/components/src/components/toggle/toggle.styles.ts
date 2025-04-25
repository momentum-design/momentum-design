import { css } from 'lit';
import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [hostFitContentStyles, css`
  :host {
    --mdc-toggle-width: 3rem;
    --mdc-toggle-height: 1.5rem;
    --mdc-toggle-width-compact: 2rem;
    --mdc-toggle-height-compact: 1rem;

    --mdc-toggle-label-lineheight: var(--mds-font-lineheight-body-midsize);
    --mdc-toggle-label-fontsize: var(--mds-font-size-body-midsize);
    --mdc-toggle-label-fontweight: 400;
    --mdc-toggle-label-color-disabled: var(--mds-color-theme-text-primary-disabled);
    --mdc-toggle-help-text-color: var(--mds-color-theme-text-secondary-normal);
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

  .mdc-toggle__input {
    opacity: 0;
    position: absolute;
    cursor: pointer;
    margin: 0;
    width: var(--mdc-toggle-width);
    height: var(--mdc-toggle-height);
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
`, ...hostFocusRingStyles(true)];

export default styles;
