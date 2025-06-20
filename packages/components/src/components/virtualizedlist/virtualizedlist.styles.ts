import { css } from 'lit';

const styles = [
  css`
    :host::part(scroll) {
      height: 100%;
      width: 100%;
      overflow-y: auto;
    }
    :host::part(container) {
      position: relative;
      width: 100%;
    }
  `,
];

export default styles;
