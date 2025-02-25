import { css } from 'lit';

const styles = [
  css`
  :host::part(mdc-virtualizedlist-scroll) {
        height: 100%;
        width: 100%;
        overflow-y: auto;
  }
  :host::part(mdc-virtualizedlist-container) {
        position: relative;
        width: 100%;
  }
  `,
];

export default styles;
