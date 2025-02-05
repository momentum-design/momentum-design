import { css } from 'lit';

const styles = [
  css`
    :host {
      .mdc-virtualizedlist-scroll {  
        height: 100%;
        width: 100%;
        overflow-y: auto;
      }
      .mdc-virtualizedlist-container {
        position: relative;
        width: 100%;
      }
    }
  `,
];

export default styles;
