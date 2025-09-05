import { css } from 'lit';

import { hostFitContentStyles } from '../../utils/styles';

/**
 * Divider component styles
 */
const styles = [
  hostFitContentStyles,
  /* Host styles */
  css`
    :host {
      --mdc-divider-background-color: var(--mds-color-theme-outline-secondary-normal);
      --mdc-divider-width: 0.0625rem;
      --mdc-divider-horizontal-gradient: var(--mds-color-theme-gradientdivider-default-normal);
      --mdc-divider-vertical-gradient: var(--mds-color-theme-gradientdivider-vertical-normal);
      --mdc-divider-text-size: var(--mds-font-size-body-midsize);
      --mdc-divider-text-color: var(--mds-color-theme-text-secondary-normal);
      --mdc-divider-text-line-height: var(--mds-font-lineheight-body-midsize);
      --mdc-divider-text-margin: 1.5rem;
      --mdc-divider-grabber-button-border-radius: 0.5rem;
      --mdc-divider-grabber-button-border-color: var(--mds-color-theme-outline-secondary-normal);
      --mdc-divider-grabber-button-background-color-normal: var(--mds-color-theme-overlay-button-secondary-normal);
      --mdc-divider-grabber-button-background-color-hover: var(--mds-color-theme-overlay-button-secondary-hover);
      --mdc-divider-grabber-button-background-color-pressed: var(--mds-color-theme-overlay-button-secondary-pressed);

      display: flex;
      justify-content: center;
    }

    /* Primary and grabber divider styles */
    :host([data-type='mdc-primary-divider']),
    :host([data-type='mdc-grabber-divider']) {
      background-color: var(--mdc-divider-background-color);
    }

    @media (forced-colors: active) {
      /* Primary and grabber divider styles */
      :host([data-type='mdc-primary-divider'][button-position='positive']),
      :host([data-type='mdc-grabber-divider'][button-position='positive']) {
        border: 0;
        border-top: var(--mdc-divider-width) solid var(--mdc-divider-background-color);
      }

      :host([data-type='mdc-primary-divider'][button-position='negative']),
      :host([data-type='mdc-grabber-divider'][button-position='negative']) {
        border: 0;
        border-bottom: var(--mdc-divider-width) solid var(--mdc-divider-background-color);
      }

      :host([data-type='mdc-primary-divider'][orientation='vertical'][button-position='positive']),
      :host([data-type='mdc-grabber-divider'][orientation='vertical'][button-position='positive']),
      :host([data-type='mdc-primary-divider'][orientation='vertical'][button-position='negative']:dir(rtl)),
      :host([data-type='mdc-grabber-divider'][orientation='vertical'][button-position='negative']:dir(rtl)) {
        border: 0;
        border-right: var(--mdc-divider-width) solid var(--mdc-divider-background-color);
      }

      :host([data-type='mdc-primary-divider'][orientation='vertical'][button-position='negative']),
      :host([data-type='mdc-grabber-divider'][orientation='vertical'][button-position='negative']),
      :host([data-type='mdc-primary-divider'][orientation='vertical'][button-position='positive']:dir(rtl)),
      :host([data-type='mdc-grabber-divider'][orientation='vertical'][button-position='positive']:dir(rtl)) {
        border: 0;
        border-left: var(--mdc-divider-width) solid var(--mdc-divider-background-color);
      }
    }

    /* Orientation-specific styles */
    :host([orientation='horizontal']) {
      flex-direction: row;
      height: var(--mdc-divider-width);
      width: 100%;
    }

    :host([orientation='vertical']:not([data-type='mdc-text-divider'])) {
      flex-direction: column;
      height: 100%;
      width: var(--mdc-divider-width);
    }

    /* Gradient styles for primary and grabber dividers */
    :host([orientation='horizontal'][variant='gradient'][data-type='mdc-primary-divider']),
    :host([orientation='horizontal'][variant='gradient'][data-type='mdc-grabber-divider']) {
      background: var(--mdc-divider-horizontal-gradient);
    }

    :host([orientation='vertical'][variant='gradient'][data-type='mdc-primary-divider']),
    :host([orientation='vertical'][variant='gradient'][data-type='mdc-grabber-divider']) {
      background: var(--mdc-divider-vertical-gradient);
    }

    /* Hiding slotted content for primary dividers */
    :host([data-type='mdc-primary-divider']) ::slotted(*) {
      display: none;
    }

    /** Button divider styles */

    ::slotted(mdc-button) {
      background-color: var(--mdc-divider-grabber-button-background-color-normal);
      border-color: var(--mdc-divider-grabber-button-border-color);
    }

    ::slotted(mdc-button:hover) {
      background-color: var(--mdc-divider-grabber-button-background-color-hover);
    }

    ::slotted(mdc-button:active) {
      background-color: var(--mdc-divider-grabber-button-background-color-pressed);
    }

    :host([orientation='vertical']) ::slotted(mdc-button) {
      width: 1.25rem;
      height: 2.5rem;
      border-radius: 0 var(--mdc-divider-grabber-button-border-radius) var(--mdc-divider-grabber-button-border-radius) 0;
    }

    :host([orientation='horizontal']) ::slotted(mdc-button) {
      height: 1.25rem;
      width: 2.5rem;
      border-radius: 0 0 var(--mdc-divider-grabber-button-border-radius) var(--mdc-divider-grabber-button-border-radius);
    }

    :host([orientation='horizontal'][button-position='positive']),
    :host([orientation='vertical'][button-position='negative']) {
      align-items: end;
    }

    :host([orientation='horizontal'][button-position='negative']),
    :host([orientation='vertical'][button-position='positive']) {
      align-items: start;
    }

    :host([orientation='horizontal'][button-position='positive']) ::slotted(mdc-button) {
      border-radius: var(--mdc-divider-grabber-button-border-radius) var(--mdc-divider-grabber-button-border-radius) 0 0;
      margin: 0;
      margin-bottom: var(--mdc-divider-width);
      border-bottom: 0;
    }

    :host([orientation='horizontal'][button-position='negative']) ::slotted(mdc-button) {
      margin: 0;
      margin-top: var(--mdc-divider-width);
      border-top: 0;
    }

    :host([orientation='vertical'][button-position='negative']:dir(ltr)) ::slotted(mdc-button),
    :host([orientation='vertical'][button-position='negative']:dir(rtl)) ::slotted(mdc-button) {
      border-radius: var(--mdc-divider-grabber-button-border-radius) 0 0 var(--mdc-divider-grabber-button-border-radius);
      margin: 0;
      margin-right: var(--mdc-divider-width);
      border-right: 0;
    }

    :host([orientation='vertical'][button-position='positive']:dir(ltr)) ::slotted(mdc-button),
    :host([orientation='vertical'][button-position='positive']:dir(rtl)) ::slotted(mdc-button) {
      margin: 0;
      margin-left: var(--mdc-divider-width);
      border-left: 0;
    }

    :host([orientation='vertical'][button-position='positive']:dir(rtl)) ::slotted(mdc-button) {
      border-radius: 0 var(--mdc-divider-grabber-button-border-radius) var(--mdc-divider-grabber-button-border-radius) 0;
      transform: rotate(180deg);
      margin: 0;
      margin-right: var(--mdc-divider-width);
    }

    :host([orientation='vertical'][button-position='negative']:dir(rtl)) ::slotted(mdc-button) {
      transform: rotate(180deg);
      margin: 0;
      margin-left: var(--mdc-divider-width);
    }

    /** Text divider styles */
    :host([orientation='horizontal'][variant='gradient'][data-type='mdc-text-divider']),
    :host([orientation='horizontal'][variant='solid'][data-type='mdc-text-divider']) {
      align-items: center;
    }

    :host([data-type='mdc-text-divider']) > div {
      width: 100%;
      height: 100%;
      background-color: var(--mdc-divider-background-color);
    }

    @media (forced-colors: active) {
      :host([data-type='mdc-text-divider']) > div {
        border-bottom: var(--mdc-divider-width) solid var(--mdc-divider-background-color);
      }
    }

    :host([orientation='horizontal'][variant='gradient'][data-type='mdc-text-divider']) > div:first-of-type {
      background: linear-gradient(to right, transparent, 30%, var(--mdc-divider-background-color));
    }

    :host([orientation='horizontal'][variant='gradient'][data-type='mdc-text-divider']) > div:last-of-type {
      background: linear-gradient(to left, transparent, 30%, var(--mdc-divider-background-color));
    }

    :host([data-type='mdc-text-divider']) ::slotted(mdc-text) {
      margin: 0 var(--mdc-divider-text-margin);
      color: var(--mdc-divider-text-color);
      font-size: var(--mdc-divider-text-size);
      line-height: var(--mdc-divider-text-line-height);
      flex-shrink: 0;
    }

    :host([data-hidden]) {
      display: none;
    }
  `,
];

export default styles;
