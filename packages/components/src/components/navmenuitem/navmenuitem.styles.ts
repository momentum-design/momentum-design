import { css } from 'lit';

import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    :host {
      --mdc-navmenuitem-in-sidenav-expanded-width: var(--mdc-sidenavigation-expanded-width, 100%);
      --mdc-navmenuitem-in-sidenav-expanded-margin-left: var(--mdc-sidenavigation-expanded-left-padding, 1rem);
      --mdc-navmenuitem-in-sidenav-expanded-margin-right: var(--mdc-sidenavigation-expanded-right-padding, 1rem);
      --mdc-navmenuitem-in-sidenav-collapsed-width: var(--mdc-sidenavigation-collapsed-width, fit-content);
      --mdc-navmenuitem-in-sidenav-collapsed-margin-left: var(--mdc-sidenavigation-collapsed-left-padding, 1rem);
      --mdc-navmenuitem-in-sidenav-collapsed-margin-right: var(--mdc-sidenavigation-collapsed-right-padding, 1rem);

      --mdc-navmenuitem-color: var(--mds-color-theme-text-primary-normal);
      --mdc-navmenuitem-disabled-color: var(--mds-color-theme-text-primary-disabled);

      /* Background color when in default (normal) or active state */
      --mdc-navmenuitem-rest-active-background-color: var(--mds-color-theme-button-secondary-active-normal);
      --mdc-navmenuitem-hover-background-color: var(--mds-color-theme-button-secondary-hover);
      --mdc-navmenuitem-hover-active-background-color: var(--mds-color-theme-button-secondary-active-hover);
      --mdc-navmenuitem-pressed-background-color: var(--mds-color-theme-button-secondary-pressed);
      --mdc-navmenuitem-pressed-active-background-color: var(--mds-color-theme-button-secondary-active-pressed);
      --mdc-navmenuitem-disabled-background-color: var(--mds-color-theme-button-secondary-disabled);
      --mdc-navmenuitem-disabled-active-background-color: var(--mds-color-theme-button-secondary-active-disabled);

      position: relative;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem;
      color: var(--mdc-navmenuitem-color);
      border-radius: 0.5rem;
      cursor: pointer;
    }

    :host::part(icon-container) {
      position: relative;
    }

    :host([active]:not([cannot-activate]))::part(regular-icon) {
      display: none;
    }

    :host([active]:not([cannot-activate]))::part(filled-icon) {
      display: block;
    }

    :host::part(regular-icon) {
      display: block;
    }

    :host::part(filled-icon) {
      display: none;
    }

    :host([in-menupopover]) {
      width: 100%;
    }

    :host(:not([in-menupopover])) {
      border-radius: 1.25rem;
    }

    :host([show-label]:not([in-menupopover])) {
      width: calc(
        var(--mdc-navmenuitem-in-sidenav-expanded-width) - var(--mdc-navmenuitem-in-sidenav-expanded-margin-left) - var(
            --mdc-navmenuitem-in-sidenav-expanded-margin-right
          )
      );

      margin-inline-start: var(--mdc-navmenuitem-in-sidenav-expanded-margin-left);
    }

    :host(:not([show-label]):not([in-menupopover])) {
      width: calc(
        var(--mdc-navmenuitem-in-sidenav-collapsed-width) - var(--mdc-navmenuitem-in-sidenav-collapsed-margin-left) - var(
            --mdc-navmenuitem-in-sidenav-collapsed-margin-right
          )
      );

      margin-inline-start: var(--mdc-navmenuitem-in-sidenav-collapsed-margin-left);
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

    :host([show-label]:dir(ltr))::before {
      left: calc(-1 * var(--mdc-navmenuitem-in-sidenav-expanded-margin-left));
      border-radius: 0 0.25rem 0.25rem 0;
    }

    :host([show-label]:dir(rtl))::before {
      right: calc(-1 * var(--mdc-navmenuitem-in-sidenav-expanded-margin-left));
      border-radius: 0.25rem 0 0 0.25rem;
    }

    :host(:not([show-label]):dir(ltr))::before {
      left: calc(-1 * var(--mdc-navmenuitem-in-sidenav-collapsed-margin-left));
      border-radius: 0 0.25rem 0.25rem 0;
    }

    :host(:not([show-label]):dir(rtl))::before {
      right: calc(-1 * var(--mdc-navmenuitem-in-sidenav-collapsed-margin-left));
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
      flex-shrink: 0;

      position: absolute;
      inset-inline-end: -0.25rem;
      top: 0.875rem;
    }

    :host([show-label])::part(trailing-arrow) {
      flex-shrink: 0;
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
