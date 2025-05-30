import { css } from 'lit';
import { hostFitContentStyles } from '../../utils/styles';

const styles = css`
  :host {
    gap: 0.5rem;

  --mdc-stepperitem-status-container-background: var(--mds-color-theme-control-active-normal);
  --mdc-stepperitem-step-number-color: var(--mds-color-theme-inverted-text-primary-normal);
  }

  :host([variant='stacked']) {
    flex-direction: column;
    text-align: center;
  }

  :host::part(status-container){
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.75rem;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: var(--mdc-stepperitem-status-container-background);
  }

  :host([status="future-clickable"])::part(status-container){
    --mdc-stepperitem-status-container-background: var(--mds-color-theme-background-secondary-normal);
  }

  :host([status="future-disabled"])::part(status-container){
    --mdc-stepperitem-status-container-background: transparent;
    border: 1px solid var(--mds-color-theme-outline-secondary-normal);
  }

  :host::part(status-icon){
      --mdc-icon-fill-color: var(--mds-color-theme-inverted-text-primary-normal);
  }

  :host::part(step-number){
    color: var(--mdc-stepperitem-step-number-color);
  }

  :host([status="future-clickable"])::part(step-number) {
   --mdc-stepperitem-step-number-color: var(--mds-color-theme-text-primary-normal);
  }
  :host([status="future-disabled"])::part(step-number) {
   --mdc-stepperitem-step-number-color: var(--mds-color-theme-text-secondary-normal);
  }
`;

export default [hostFitContentStyles, styles];
