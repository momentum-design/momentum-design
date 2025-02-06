import { css } from 'lit';
import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [hostFitContentStyles, css`

  :host {
    --mdc-tab-content-gap: 0.5rem;
    --mdc-tab-height: 2rem;
    --mdc-tab-line-active-background-color-active: var(--mds-color-theme-button-secondary-hover);
    --mdc-tab-line-active-background-color-disabled: var(--mds-color-theme-button-secondary-disabled);
    --mdc-tab-line-active-background-color-focus: var(--mds-color-theme-button-secondary-normal);
    --mdc-tab-line-active-background-color-hover: var(--mds-color-theme-button-secondary-hover);
    --mdc-tab-line-active-background-color-normal: var(--mds-color-theme-button-secondary-normal);
    --mdc-tab-line-active-bottom-border-color: var(--mds-color-theme-outline-input-active);
    --mdc-tab-line-active-bottom-border-color-disabled: var(--mds-color-theme-outline-primary-disabled);
    --mdc-tab-line-active-color: var(--mds-color-theme-text-primary-normal);
    --mdc-tab-line-active-color-disabled: var(--mds-color-theme-text-primary-disabled);
    --mdc-tab-line-border-bottom-left-radius: 0;
    --mdc-tab-line-border-bottom-right-radius: 0;
    --mdc-tab-line-border-top-left-radius: 0.25rem;
    --mdc-tab-line-border-top-right-radius: 0.25rem;
    --mdc-tab-line-inactive-background-color-active: var(--mds-color-theme-button-secondary-hover);
    --mdc-tab-line-inactive-background-color-disabled: var(--mds-color-theme-button-secondary-disabled);
    --mdc-tab-line-inactive-background-color-focus: var(--mds-color-theme-button-secondary-normal);
    --mdc-tab-line-inactive-background-color-hover: var(--mds-color-theme-button-secondary-hover);
    --mdc-tab-line-inactive-background-color-normal: var(--mds-color-theme-button-secondary-normal);
    --mdc-tab-line-inactive-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-tab-line-inactive-color-disabled: var(--mds-color-theme-text-primary-disabled);
    --mdc-tab-padding-left: 0.75rem;
    --mdc-tab-padding-right: 0.75rem;
    --mdc-tab-pill-active-background-color-active: var(--mds-color-theme-button-secondary-active-hover);
    --mdc-tab-pill-active-background-color-disabled: var(--mds-color-theme-button-secondary-active-disabled);
    --mdc-tab-pill-active-background-color-focus: var(--mds-color-theme-button-secondary-active-normal);
    --mdc-tab-pill-active-background-color-hover: var(--mds-color-theme-button-secondary-active-hover);
    --mdc-tab-pill-active-background-color-normal: var(--mds-color-theme-button-secondary-active-normal);
    --mdc-tab-pill-active-color: var(--mds-color-theme-text-primary-normal);
    --mdc-tab-pill-active-color-disabled: var(--mds-color-theme-text-primary-disabled);
    --mdc-tab-pill-border-radius: 0.5rem;
    --mdc-tab-pill-inactive-background-color-active: var(--mds-color-theme-button-secondary-hover);
    --mdc-tab-pill-inactive-background-color-disabled: var(--mds-color-theme-button-secondary-disabled);
    --mdc-tab-pill-inactive-background-color-focus: var(--mds-color-theme-button-secondary-normal);
    --mdc-tab-pill-inactive-background-color-hover: var(--mds-color-theme-button-secondary-hover);
    --mdc-tab-pill-inactive-background-color-normal: var(--mds-color-theme-button-secondary-normal);
    --mdc-tab-pill-inactive-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-tab-pill-inactive-color-disabled: var(--mds-color-theme-text-primary-disabled);

    gap: var(--mdc-tab-content-gap);
    height: var(--mdc-tab-height);
    padding-left: var(--mdc-tab-padding-left);
    padding-right: var(--mdc-tab-padding-right);
  }

  :host([disabled]) {
    cursor: default;
  }

  :host([variant="line"]) {
    background-color: var(--mdc-tab-line-inactive-background-color-normal);
    border-top-left-radius: var(--mdc-tab-line-border-top-left-radius);
    border-top-right-radius: var(--mdc-tab-line-border-top-right-radius);
    border-bottom-left-radius: var(--mdc-tab-line-border-bottom-left-radius);
    border-bottom-right-radius: var(--mdc-tab-line-border-bottom-right-radius);
    color: var(--mdc-tab-line-inactive-color);
  }

  :host([variant="line"]:hover) {
    background-color: var(--mdc-tab-line-inactive-background-color-hover);
  }

  :host([variant="line"]:active) {
    background-color: var(--mdc-tab-line-inactive-background-color-active);
  }

  :host([variant="line"]:focus) {
    background-color: var(--mdc-tab-line-inactive-background-color-focus);
  }

  :host([variant="line"][disabled]) {
    background-color: var(--mdc-tab-line-inactive-background-color-disabled);
    border: none;
    color: var(--mdc-tab-line-inactive-color-disabled);
  }

  :host([variant="line"][active]) {
    background-color: var(--mdc-tab-line-active-background-color-normal);
    border: none;
    border-bottom: 0.125rem solid var(--mdc-tab-line-active-bottom-border-color);
    color: var(--mdc-tab-line-active-color);
  }

  :host([variant="line"][active]:hover) {
    background-color: var(--mdc-tab-line-active-background-color-hover);
  }

  :host([variant="line"][active]:active) {
    background-color: var(--mdc-tab-line-active-background-color-active);
  }

  :host([variant="line"][active]:focus) {
    background-color: var(--mdc-tab-line-active-background-color-focus);
  }

  :host([variant="line"][active][disabled]) {
    color: var(--mdc-tab-line-active-color-disabled);
    background-color: var(--mdc-tab-line-active-background-color-disabled);
    border-bottom-color: var(--mdc-tab-line-active-bottom-border-color-disabled);

  }

  :host([variant="pill"]) {
    background-color: var(--mdc-tab-pill-inactive-background-color-normal);
    border-radius: var(--mdc-tab-pill-border-radius);
    color: var(--mdc-tab-pill-inactive-color);
  }

  :host([variant="pill"]:hover) {
    background-color: var(--mdc-tab-pill-inactive-background-color-hover);
  }

  :host([variant="pill"]:active) {
    background-color: var(--mdc-tab-pill-inactive-background-color-active);
  }

  :host([variant="pill"]:focus) {
    background-color: var(--mdc-tab-pill-inactive-background-color-focus);
  }

  :host([variant="pill"][disabled]) {
    background-color: var(--mdc-tab-pill-inactive-background-color-disabled);
    color: var(--mdc-tab-pill-inactive-color-disabled);
  }

  :host([variant="pill"][active]) {
    background-color: var(--mdc-tab-pill-active-background-color-normal);
    border: none;
    color: var(--mdc-tab-pill-active-color);
  }

  :host([variant="pill"][active]:hover) {
    background-color: var(--mdc-tab-pill-active-background-color-hover);
  }

  :host([variant="pill"][active]:active) {
    background-color: var(--mdc-tab-pill-active-background-color-active);
  }

  :host([variant="pill"][active]:focus) {
    background-color: var(--mdc-tab-pill-active-background-color-focus);
  }

  :host([variant="pill"][active][disabled]) {
    background-color: var(--mdc-tab-pill-active-background-color-disabled);
    color: var(--mdc-tab-pill-active-color-disabled);
  }

`, ...hostFocusRingStyles()];
export default styles;
