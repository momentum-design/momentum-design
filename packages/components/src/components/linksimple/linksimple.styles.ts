import { css } from 'lit';
import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [hostFitContentStyles, css`
  :host {
    --mdc-link-border-radius: 0.25rem;
    --mdc-link-color-active: var(--mds-color-theme-text-accent-active);
    --mdc-link-color-disabled: var(--mds-color-theme-text-primary-disabled);
    --mdc-link-color-hover: var(--mds-color-theme-text-accent-hover);
    --mdc-link-color-normal: var(--mds-color-theme-text-accent-normal);
    --mdc-link-inverted-color-active: var(--mds-color-theme-inverted-text-accent-active);
    --mdc-link-inverted-color-disabled: var(--mds-color-theme-inverted-text-primary-disabled);
    --mdc-link-inverted-color-hover: var(--mds-color-theme-inverted-text-accent-hover);
    --mdc-link-inverted-color-normal: var(--mds-color-theme-inverted-text-accent-normal);

    border-radius: var(--mdc-link-border-radius);
    color: var(--mdc-link-color-normal);
    text-underline-offset: auto;
    text-underline-position: from-font;
    cursor: pointer;
    
    /* based on default linksimple size (large) */
    line-height: var(--mds-font-apps-body-large-regular-line-height);
  }

  :host([inline]) {
    display: inline-flex;
  }

  :host([inverted]) {
    color: var(--mdc-link-inverted-color-normal);
  }

  :host(:hover) {
    color: var(--mdc-link-color-hover);
  }

  :host(:active) {
    color: var(--mdc-link-color-active);
    box-shadow: none;
  }

  :host([inverted]:hover) {
    color: var(--mdc-link-inverted-color-hover);
  }

  :host([inverted]:active) {
    color: var(--mdc-link-inverted-color-active);
  }

  :host([disabled]) {
    color: var(--mdc-link-color-disabled);
    pointer-events: none;
  }

  :host([inverted][disabled]) {
    color: var(--mdc-link-inverted-color-disabled);
  }

  /* based on default linksimple size (large) */
  :host(:hover),
  :host(:active),
  :host([inline]) {
    font-size: var(--mds-font-apps-body-large-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-large-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-large-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-large-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-large-regular-underline-text-case);
  }

`, ...hostFocusRingStyles(),
];

export default styles;
