import { css } from 'lit';

import { baseHostStyleVariables } from '../../utils/styles';

const styles = [
  baseHostStyleVariables,
  css`
    :host {
      height: 100%;
    }

    :host::part(scroll) {
      height: 100%;
      width: 100%;
      overflow-y: auto;
      scroll-padding: var(--mdc-focus-ring-outer-width) 0;
      contain: strict;
      overflow-anchor: none;
      scrollbar-gutter: stable;
      padding: var(--mdc-focus-ring-outer-width) 0;
    }

    :host::part(wrapper) {
      padding: 0 var(--mdc-focus-ring-outer-width);
    }

    ::slotted([data-virtualized-hidden]) {
      position: absolute !important;
      top: var(--mdc-virtualizedlist-hidden-top) !important;
      left: 0 !important;
    }

    ::slotted(mdc-listitem) {
      position: relative;
    }
  `,
];

export default styles;
