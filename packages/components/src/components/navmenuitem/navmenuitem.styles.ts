import { css } from 'lit';

import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    :host {
      --mdc-navmenuitem-color: var(--mds-color-theme-text-primary-normal);
      --mdc-navmenuitem-disabled-color: var(--mds-color-theme-text-primary-disabled);
      --mdc-navmenuitem-expanded-width: 12.75rem;

      /* Background color when in default (normal) or active state */
      --mdc-navmenuitem-rest-active-background-color: var(--mds-color-theme-button-secondary-active-normal);
      --mdc-navmenuitem-hover-background-color: var(--mds-color-theme-button-secondary-hover);
      --mdc-navmenuitem-hover-active-background-color: var(--mds-color-theme-button-secondary-active-hover);
      --mdc-navmenuitem-pressed-background-color: var(--mds-color-theme-button-secondary-pressed);
      --mdc-navmenuitem-pressed-active-background-color: var(--mds-color-theme-button-secondary-active-pressed);
      --mdc-navmenuitem-disabled-background-color: var(--mds-color-theme-button-secondary-disabled);
      --mdc-navmenuitem-disabled-active-background-color: var(--mds-color-theme-button-secondary-active-disabled);

      position: relative;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem;
      color: var(--mdc-navmenuitem-color);
      border-radius: 0.5rem;
      cursor: pointer;
    }

    :host(:not([in-menupopover])) {
      border-radius: 1.25rem;
    }

    :host(:not([in-menupopover]):dir(ltr)) {
      margin-left: 1rem;
    }

    :host(:not([in-menupopover]):dir(rtl)) {
      margin-right: 1rem;
    }

    :host([show-label]) {
      width: var(--mdc-navmenuitem-expanded-width);
    }

    :host([active]) {
      background-color: var(--mdc-navmenuitem-rest-active-background-color);
    }

    :host([disabled]) {
      color: var(--mdc-navmenuitem-disabled-color);
      background-color: var(--mdc-navmenuitem-disabled-background-color);
    }

    :host([active][disabled]) {
      background-color: var(--mdc-navmenuitem-disabled-active-background-color);
      color: var(--mdc-navmenuitem-disabled-color);
    }

    :host(:hover) {
      background-color: var(--mdc-navmenuitem-hover-background-color);
    }

    :host(:hover[active]) {
      background-color: var(--mdc-navmenuitem-hover-active-background-color);
    }

    :host(:active) {
      background-color: var(--mdc-navmenuitem-pressed-background-color);
    }

    :host(:active[active]) {
      background-color: var(--mdc-navmenuitem-pressed-active-background-color);
    }

    :host(:not([in-menupopover]))::before {
      content: '';
      display: block;
      position: absolute;
      background-color: var(--mdc-navmenuitem-color);
      width: 0.25rem;
      height: 1rem;
      pointer-events: none;
      visibility: hidden;
    }

    :host(:dir(ltr))::before {
      left: -1rem;
      border-radius: 0 0.25rem 0.25rem 0;
    }

    :host(:dir(rtl))::before {
      right: -1rem;
      border-radius: 0.25rem 0 0 0.25rem;
    }

    :host([active])::before {
      visibility: visible;
    }

    :host([disabled])::before {
      background-color: var(--mdc-navmenuitem-disabled-color);
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

    :host(:not([show-label]))::part(trailing-arrow) {
      --mdc-icon-size: 0.75rem;
    }

    :host([show-label])::part(trailing-arrow) {
      --mdc-icon-size: 1rem;
      flex-shrink: 0;
    }

    :host(:dir(ltr))::part(arrow) {
      position: absolute;
      right: -0.75rem;
      top: 0.875rem;
    }

    :host(:dir(rtl))::part(arrow) {
      position: absolute;
      left: -0.75rem;
      top: 0.875rem;
    }

    :host mdc-badge {
      --mdc-badge-dot-width: 1rem;
      --mdc-badge-dot-height: 1rem;
    }

    @media (forced-colors: active) {
      :host(:not([in-menupopover]))::before {
        background-color: ButtonText;
      }
    }
  `,
  ...hostFocusRingStyles(),
];

export default styles;
