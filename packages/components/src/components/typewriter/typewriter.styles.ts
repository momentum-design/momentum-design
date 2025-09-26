import { css } from 'lit';

const styles = [
  css`
    :host {
      display: block;
      position: relative;
    }

    :host::part(container) {
      display: flex;
      align-items: baseline;
    }

    :host::part(typewriter-hidden) {
      display: none;
    }
  `,
];

export default styles;
