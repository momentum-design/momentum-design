import { css } from 'lit';

const styles = css`
  :host {
    --mdc-virtualizedlist-focusring-padding: 0.25rem;

    height: 100%;
  }

  :host::part(scroll) {
    height: 100%;
    width: 100%;
    overflow-y: auto;
    contain: strict;
    overflow-anchor: none;
    scrollbar-gutter: stable;
    scroll-padding: var(--mdc-virtualizedlist-focusring-padding) 0;
    padding: var(--mdc-virtualizedlist-focusring-padding) 0;
  }

  :host::part(wrapper) {
    padding: 0 var(--mdc-virtualizedlist-focusring-padding);
  }

  ::slotted([data-virtualized-hidden]) {
    position: absolute !important;
    top: var(--mdc-virtualizedlist-hidden-top) !important;
    left: 0 !important;
  }

  ::slotted(mdc-listitem) {
    position: relative;
  }
`;

export default [styles];
