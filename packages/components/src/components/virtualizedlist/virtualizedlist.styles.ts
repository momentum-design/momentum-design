import { css } from 'lit';

const styles = [
  css`
    :host {
      height: 100%;
    }

    :host::part(scroll) {
      height: 100%;
      width: 100%;
      overflow-y: auto;
      padding: 0.25rem 0;
      scroll-padding: 0.25rem 0;
      contain: strict;
      overflow-anchor: none;
    }

    :host::part(wrapper) {
      position: relative;
      width: 100%;
    }

    :host::part(container) {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: 0 0.25rem;
    }

    ::slotted([data-virtualized-hidden]) {
      position: absolute !important;
      top: var(--mdc-virtualizedlist-hidden-top) !important;
      left: 0 !important;
    }
  `,
];

export default styles;
