import { css } from 'lit';
import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [hostFitContentStyles, css`

  ::slotted(a) {
    align-items: center;
    color: inherit;
    display: flex;
    gap: 0.25rem;
    text-decoration: inherit;
    text-underline-offset: auto;
    text-underline-position: from-font;
  }

  :host {
    border-radius: 0.25rem;
    color: var(--mds-color-theme-text-accent-normal);
  }

  :host(:hover) {
    color: var(--mds-color-theme-text-accent-hover);
  }

  :host(:active) {
    color: var(--mds-color-theme-text-accent-active);
  }

  :host([inline]) {
    display: inline-flex;
  }

  :host([inverted]) {
    color: var(--mds-color-theme-inverted-text-accent-normal);
  }

  :host([inverted]:hover) {
    color: var(--mds-color-theme-inverted-text-accent-hover);
  }

  :host([inverted]:active) {
    color: var(--mds-color-theme-inverted-text-accent-active);
  }

  :host([disabled]) {
    color: var(--mds-color-theme-text-primary-disabled);
    pointer-events: none;
  }

  :host([inverted][disabled]) {
    color: var(--mds-color-theme-inverted-text-primary-disabled);
  }

  :host([size="large"]) {
    font-size: var(--mds-font-apps-body-large-regular-font-size);
    font-weight: var(--mds-font-apps-body-large-regular-font-weight);
    line-height: var(--mds-font-apps-body-large-regular-line-height);
    text-decoration: var(--mds-font-apps-body-large-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-large-regular-text-case);
  }

  :host([size="midsize"]) {
    font-size: var(--mds-font-apps-body-midsize-regular-font-size);
    font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
    line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-regular-text-case);
  }

  :host([size="small"]) {
    font-size: var(--mds-font-apps-body-small-medium-font-size);
    font-weight: var(--mds-font-apps-body-small-medium-font-weight);
    line-height: var(--mds-font-apps-body-small-medium-line-height);
    text-decoration: var(--mds-font-apps-body-small-medium-text-decoration);
    text-transform: var(--mds-font-apps-body-small-medium-text-case);
  }

  :host([size="large"]:hover), :host([size="large"]:active), :host([size="large"][inline]) {
    font-size: var(--mds-font-apps-body-large-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-large-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-large-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-large-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-large-regular-underline-text-case);
  }

  :host([size="midsize"]:hover), :host([size="midsize"]:active), :host([size="midsize"][inline]) {
    font-size: var(--mds-font-apps-body-midsize-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-midsize-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-midsize-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-regular-underline-text-case);
  }

  :host([size="small"]:hover), :host([size="small"]:active), :host([size="small"][inline]) {
    font-size: var(--mds-font-apps-body-small-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-small-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-small-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-small-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-small-regular-underline-text-case);
  }
`, hostFocusRingStyles];

export default styles;
