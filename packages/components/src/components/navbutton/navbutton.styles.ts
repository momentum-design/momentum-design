import { css } from 'lit';

import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    :host {
      --mdc-navbutton-color: var(--mds-color-theme-text-primary-normal);
      --mdc-navbutton-disabled-color: var(--mds-color-theme-text-primary-disabled);
      --mdc-navbutton-expanded-width: 12.75rem;

      /* Background color when in default (normal) or active state */
      --mdc-navbutton-hover-background-color: var(--mds-color-theme-button-secondary-hover);
      --mdc-navbutton-pressed-background-color: var(--mds-color-theme-button-secondary-pressed);
      --mdc-navbutton-disabled-background-color: var(--mds-color-theme-button-secondary-disabled);

      position: relative;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem;
      color: var(--mdc-navbutton-color);
      border: none;
      border-radius: 1.25rem;
      cursor: pointer;
    }

    :host(:dir(ltr)) {
      margin-left: 1rem;
    }

    :host(:dir(rtl)) {
      margin-right: 1rem;
    }

    :host([show-label]) {
      width: var(--mdc-navbutton-expanded-width);
    }

    :host([disabled]) {
      color: var(--mdc-navbutton-disabled-color);
      background-color: var(--mdc-navbutton-disabled-background-color);
    }

    :host(:hover) {
      background-color: var(--mdc-navbutton-hover-background-color);
    }

    :host(:active),
    :host(.pressed) {
      background-color: var(--mdc-navbutton-pressed-background-color);
    }

    :host::part(text-container) {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    :host::part(icon-container) {
      position: relative;
    }

    :host(:dir(ltr))::part(badge) {
      position: absolute;
      right: -0.375rem;
      top: -0.375rem;
    }

    :host(:dir(rtl))::part(badge) {
      position: absolute;
      left: -0.375rem;
      top: -0.375rem;
    }

    :host mdc-badge {
      --mdc-badge-dot-width: 1rem;
      --mdc-badge-dot-height: 1rem;
    }
  `,
  ...hostFocusRingStyles(),
];

export default styles;
