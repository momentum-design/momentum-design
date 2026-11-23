import { css } from 'lit';

import { hostFitContentStyles } from '../../utils/styles';

const styles = css`
  :host {
    height: var(--mds-size-theme-md-24);
    gap: var(--mds-spacing-theme-gap-2xs);
    padding: var(--mds-spacing-theme-pad-none) var(--mds-spacing-theme-pad-h-2xs) var(--mds-spacing-theme-pad-none)
      var(--mds-spacing-theme-pad-h-xs);
    border-radius: var(--mds-radius-theme-xs);
    border-style: solid;
    border-width: var(--mds-border-theme-default);
    white-space: nowrap;

    --mdc-chip-color: var(--mds-color-theme-text-primary-normal);
    --mdc-chip-border-color: var(--mds-color-theme-outline-button-normal);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-default-normal);

    color: var(--mdc-chip-color);
    border-color: var(--mdc-chip-border-color);
    background-color: var(--mdc-chip-background-color);
  }

  :host([error]) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-cancel-normal);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-error-normal);
  }

  :host([disabled]),
  :host([disabled]:hover),
  :host([disabled]:active) {
    --mdc-chip-border-color: var(--mds-color-theme-common-outline-primary-disabled);
    --mdc-chip-background-color: var(--mds-color-theme-background-primary-disabled);
    --mdc-chip-color: var(--mds-color-theme-text-primary-disabled);
    cursor: auto;
  }

  ::slotted(mdc-avatar[slot='prefix']) {
    width: var(--mds-size-theme-md-20);
    height: var(--mds-size-theme-md-20);
  }
`;

export default [hostFitContentStyles, styles];
