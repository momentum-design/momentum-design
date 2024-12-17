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

      display: flex;
      justify-content: center;
    }

    /* Primary and grabber divider styles */
    :host([data-type='mdc-primary-divider']),
    :host([data-type='mdc-grabber-divider']) {
      background-color: var(--mdc-divider-background-color);
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
    :host([orientation='vertical']) ::slotted(mdc-button) {
      width: 1.25rem;
      height: 2.5rem;
      border-radius: 0 
          var(--mdc-divider-grabber-button-border-radius) 
          var(--mdc-divider-grabber-button-border-radius) 
          0;
    }

    :host([orientation='horizontal']) ::slotted(mdc-button) {
      height: 1.25rem;
      width: 2.5rem;
      border-radius: 0 
          0 
          var(--mdc-divider-grabber-button-border-radius) 
          var(--mdc-divider-grabber-button-border-radius);
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
      border-radius: var(--mdc-divider-grabber-button-border-radius) 
          var(--mdc-divider-grabber-button-border-radius) 
          0 
          0;
      border-bottom-color: transparent;
    }

    :host([orientation='horizontal'][button-position='negative']) ::slotted(mdc-button) {
      border-top-color: transparent;
    }

    :host([orientation='vertical'][button-position='negative']:dir(ltr)) ::slotted(mdc-button),
    :host([orientation='vertical'][button-position='negative']:dir(rtl)) ::slotted(mdc-button) {
      border-radius: var(--mdc-divider-grabber-button-border-radius) 
          0 
          0 
          var(--mdc-divider-grabber-button-border-radius);
      border-right-color: transparent;
    }

    :host([orientation='vertical'][button-position='positive']:dir(ltr)) ::slotted(mdc-button),
    :host([orientation='vertical'][button-position='positive']:dir(rtl)) ::slotted(mdc-button) {
      border-left-color: transparent;
    }

    :host([orientation='vertical'][button-position='positive']:dir(rtl)) ::slotted(mdc-button) {
      border-radius: 0 
          var(--mdc-divider-grabber-button-border-radius) 
          var(--mdc-divider-grabber-button-border-radius) 
          0;
      transform: rotate(180deg);
    }

    :host([orientation='vertical'][button-position='negative']:dir(rtl)) ::slotted(mdc-button) {
      transform: rotate(180deg);
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
    }
  `,
];

export default styles;
