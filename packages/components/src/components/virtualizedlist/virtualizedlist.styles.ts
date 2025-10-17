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
      scroll-padding: 0.25rem 0;
      contain: strict;
      overflow-anchor: none;
      scrollbar-gutter: stable;
    }

    ::slotted([data-virtualized-hidden]) {
      position: absolute !important;
      top: var(--mdc-virtualizedlist-hidden-top) !important;
      left: 0 !important;
    }
  `,
];

export default styles;
