import { css } from 'lit';

import { hostFocusRingStyles } from '../../utils/styles';

const styles = css`
  :host {
    cursor: pointer;
    user-select: none;
  }

  :host(:hover) {
    background-color: var(--mds-color-theme-background-primary-hover);
  }

  :host(:active) {
    background-color: var(--mds-color-theme-background-primary-active);
  }

  :host([disabled]) {
    background-color: var(--mds-color-theme-background-primary-ghost);
    color: var(--mds-color-theme-text-primary-disabled);
  }

  :host([disabled])::part(image) {
    opacity: 0.5;
  }
`;

export default [styles, ...hostFocusRingStyles()];
