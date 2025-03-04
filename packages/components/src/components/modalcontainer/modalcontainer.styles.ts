import { css } from 'lit';
import { hostFitContentStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    :host {
      --mdc-modalcontainer-primary-background-color: var(--mds-color-theme-background-solid-primary-normal);
      --mdc-modalcontainer-border-color: var(--mds-color-theme-outline-secondary-normal);
      --mdc-modalcontainer-inverted-background-color: var(--mds-color-theme-inverted-background-normal);
      --mdc-modalcontainer-inverted-border-color: var(--mds-color-theme-inverted-outline-primary-normal);
      --mdc-modalcontainer-inverted-text-color: var(--mds-color-theme-inverted-text-primary-normal);
      --mdc-modalcontainer-elevation-1: var(--mds-elevation-1);
      --mdc-modalcontainer-elevation-2: var(--mds-elevation-2);
      --mdc-modalcontainer-elevation-3: var(--mds-elevation-3);
      --mdc-modalcontainer-elevation-4: var(--mds-elevation-4);
    }

    :host::part(container) {
      padding: 0.75rem;
      background-color: var(--mdc-modalcontainer-primary-background-color);
      border-radius: 0.5rem;
      border: 0.0625rem solid var(--mdc-modalcontainer-border-color);
    }

    :host([color='contrast'])::part(container) {
      background-color: var(--mdc-modalcontainer-inverted-background-color);
      border: 0.0625rem solid var(--mdc-modalcontainer-inverted-border-color);
      color: var(--mdc-modalcontainer-inverted-text-color);
    }

    :host([elevation='1'])::part(container) {
      filter: var(--mdc-modalcontainer-elevation-1);
    }
    :host([elevation='2'])::part(container) {
      filter: var(--mdc-modalcontainer-elevation-2);
    }
    :host([elevation='3'])::part(container) {
      filter: var(--mdc-modalcontainer-elevation-3);
    }
    :host([elevation='4'])::part(container) {
      filter: var(--mdc-modalcontainer-elevation-4);
    }
  `,
];

export default styles;
