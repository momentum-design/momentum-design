import { css } from 'lit';
import { hostFitContentStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    :host {
      --mdc-presence-active-background-color: var(--mds-color-theme-indicator-stable);
      
      --mdc-presence-away-background-color: var(--mds-color-theme-indicator-locked);
      
      --mdc-presence-away-calling-background-color: var(--mds-color-theme-indicator-locked);

      --mdc-presence-busy-background-color: var(--mds-color-theme-indicator-unstable);
      
      --mdc-presence-dnd-background-color: var(--mds-color-theme-indicator-attention);
      
      --mdc-presence-meeting-background-color: var(--mds-color-theme-indicator-unstable);

      --mdc-presence-on-call-background-color: var(--mds-color-theme-indicator-unstable);
      
      --mdc-presence-on-device-background-color: var(--mds-color-theme-indicator-locked);
      
      --mdc-presence-on-mobile-background-color: var(--mds-color-theme-indicator-locked);

      --mdc-presence-pause-background-color: var(--mds-color-theme-indicator-locked);

      --mdc-presence-pto-background-color: var(--mds-color-theme-indicator-locked);
      
      --mdc-presence-presenting-background-color: var(--mds-color-theme-indicator-attention);

      --mdc-presence-quiet-background-color: var(--mds-color-theme-indicator-locked);

      --mdc-presence-scheduled-background-color: var(--mds-color-theme-indicator-unstable);

      --mdc-presence-overlay-background-color: var(--mds-color-theme-background-solid-primary-normal);
    }

    .mdc-presence-icon {
      border-radius: 50%;
    }

    .mdc-presence-icon__xx_small,
    .mdc-presence-icon__x_small,
    .mdc-presence-icon__small,{
      outline: 0.09375rem solid var(--mdc-presence-overlay-background-color);
    }
    .mdc-presence-icon__midsize {
      outline: 0.129rem solid var(--mdc-presence-overlay-background-color);
    }
    .mdc-presence-icon__large {
      outline: 0.14375rem solid var(--mdc-presence-overlay-background-color);
    }
    .mdc-presence-icon__x_large {
      outline: 0.1775rem solid var(--mdc-presence-overlay-background-color);
    }
    .mdc-presence-icon__xx_large {
      outline: 0.25rem solid var(--mdc-presence-overlay-background-color);
    }

    .mdc-presence-icon__active {
      color: var(--mdc-presence-active-background-color);
    }
    .mdc-presence-icon__away {
      color: var(--mdc-presence-away-background-color);
    }
    .mdc-presence-icon__away-calling {
      color: var(--mdc-presence-away-calling-background-color);
    }
    .mdc-presence-icon__busy {
      color: var(--mdc-presence-busy-background-color);
    }
    .mdc-presence-icon__dnd {
      color: var(--mdc-presence-dnd-background-color);
    }
    .mdc-presence-icon__meeting {
      color: var(--mdc-presence-meeting-background-color);
    }
    .mdc-presence-icon__on-call {
      color: var(--mdc-presence-on-call-background-color);
    }
    .mdc-presence-icon__on-device {
      color: var(--mdc-presence-on-device-background-color);
    }
    .mdc-presence-icon__on-mobile {
      color: var(--mdc-presence-on-mobile-background-color);
    }
    .mdc-presence-icon__pause {
      color: var(--mdc-presence-pause-background-color);
    }
    .mdc-presence-icon__pto {
      color: var(--mdc-presence-pto-background-color);
    }
    .mdc-presence-icon__presenting {
      color: var(--mdc-presence-presenting-background-color);
    }
    .mdc-presence-icon__quiet {
      color: var(--mdc-presence-quiet-background-color);
    }
    .mdc-presence-icon__scheduled {
      color: var(--mdc-presence-scheduled-background-color);
    }
  `,
];

export default styles;
