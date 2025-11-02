import { css } from 'lit';

import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    :host {
      --mdc-navbuttonlink-color: var(--mds-color-theme-text-primary-normal);
      --mdc-navbuttonlink-disabled-color: var(--mds-color-theme-text-primary-disabled);
      --mdc-navbuttonlink-expanded-width: 12.75rem;
      --mdc-navbuttonlink-postfix-icon-size: 1.25rem;

      /* Background color when in default (normal) or active state */
      --mdc-navbuttonlink-hover-background-color: var(--mds-color-theme-button-secondary-hover);
      --mdc-navbuttonlink-pressed-background-color: var(--mds-color-theme-button-secondary-pressed);
      --mdc-navbuttonlink-disabled-background-color: var(--mds-color-theme-button-secondary-disabled);

      position: relative;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--mdc-navbuttonlink-color);
      border: none;
      border-radius: 1.25rem;
      cursor: pointer;
    }

    /* Anchor inside ButtonLink */
    :host::part(anchor) {
      color: inherit;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: inherit;
      height: 100%;
      width: 100%;
      border-radius: inherit;
      outline: none;
      padding: 0.5rem;
    }

    :host(:dir(ltr)) {
      margin-left: 1rem;
    }

    :host(:dir(rtl)) {
      margin-right: 1rem;
    }

    :host([show-label]) {
      width: var(--mdc-navbuttonlink-expanded-width);
    }

    :host([disabled]) {
      cursor: auto;
      pointer-events: none;
      color: var(--mdc-navbuttonlink-disabled-color);
      background-color: var(--mdc-navbuttonlink-disabled-background-color);
    }

    :host(:hover) {
      background-color: var(--mdc-navbuttonlink-hover-background-color);
    }

    :host(:active) {
      background-color: var(--mdc-navbuttonlink-pressed-background-color);
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

    :host::part(postfix-icon) {
      flex-shrink: 0;
      --mdc-icon-size: var(--mdc-navbuttonlink-postfix-icon-size);
    }
  `,
  ...hostFocusRingStyles(true),
];

export default styles;
