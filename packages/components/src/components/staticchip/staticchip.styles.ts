import { css } from 'lit';

import { hostFitContentStyles } from '../../utils/styles';

const styles = css`
  :host {
    height: 1.5rem;
    gap: 0.25rem;
    padding: 0 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid;
    white-space: nowrap;

    --mdc-staticchip-color: var(--mds-color-theme-text-primary-normal);
    --mdc-staticchip-border-color: var(--mds-color-theme-outline-button-normal);
    --mdc-staticchip-background-color: var(--mds-color-theme-background-label-default-normal);

    color: var(--mdc-staticchip-color);
    border-color: var(--mdc-staticchip-border-color);
    background-color: var(--mdc-staticchip-background-color);
  }

  :host([color='cobalt']) {
    --mdc-staticchip-border-color: var(--mds-color-theme-outline-theme-normal);
    --mdc-staticchip-background-color: var(--mds-color-theme-background-label-cobalt-normal);
  }

  :host([color='gold']) {
    --mdc-staticchip-border-color: var(--mds-color-theme-outline-label-gold);
    --mdc-staticchip-background-color: var(--mds-color-theme-background-label-gold-normal);
  }

  :host([color='lime']) {
    --mdc-staticchip-border-color: var(--mds-color-theme-outline-label-lime);
    --mdc-staticchip-background-color: var(--mds-color-theme-background-label-lime-normal);
  }

  :host([color='mint']) {
    --mdc-staticchip-border-color: var(--mds-color-theme-outline-label-mint);
    --mdc-staticchip-background-color: var(--mds-color-theme-background-label-mint-normal);
  }

  :host([color='pink']) {
    --mdc-staticchip-border-color: var(--mds-color-theme-outline-label-pink);
    --mdc-staticchip-background-color: var(--mds-color-theme-background-label-pink-normal);
  }

  :host([color='purple']) {
    --mdc-staticchip-border-color: var(--mds-color-theme-outline-label-purple);
    --mdc-staticchip-background-color: var(--mds-color-theme-background-label-purple-normal);
  }

  :host([color='orange']) {
    --mdc-staticchip-border-color: var(--mds-color-theme-outline-label-orange);
    --mdc-staticchip-background-color: var(--mds-color-theme-background-label-orange-normal);
  }

  :host([color='slate']) {
    --mdc-staticchip-border-color: var(--mds-color-theme-outline-label-slate);
    --mdc-staticchip-background-color: var(--mds-color-theme-background-label-slate-normal);
  }

  :host([color='violet']) {
    --mdc-staticchip-border-color: var(--mds-color-theme-outline-label-violet);
    --mdc-staticchip-background-color: var(--mds-color-theme-background-label-violet-normal);
  }
`;

export default [hostFitContentStyles, styles];
