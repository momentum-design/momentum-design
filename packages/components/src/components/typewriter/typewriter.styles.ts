import { css } from 'lit';

const styles = [
  css`
    :host {
      display: block;
      position: relative;
    }

    [part='container'] {
      display: flex;
      align-items: baseline;
    }

    .typewriter-hidden {
      display: none;
    }
  `,
];

export default styles;
