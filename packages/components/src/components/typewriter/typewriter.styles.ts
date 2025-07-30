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

    [part='cursor'] {
      display: inline-block;
      width: 0.125rem;
      height: 1em;
      background-color: currentColor;
      vertical-align: text-bottom;
      margin-left: 0.125rem;
      opacity: 1;
    }

    .cursor-hidden {
      opacity: 0;
    }

    .typewriter-hidden {
      display: none;
    }
  `,
];

export default styles;
