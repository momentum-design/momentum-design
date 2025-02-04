import { css } from 'lit';

const styles = [
  css`
    :host {
      .mdc-virtualizedlist-scroll-container {  
        height: 100%;
        width: 100%;
        overflow-y: auto;
      }
      .mdc-virtualizedlist-wrapper {
        position: relative;
        width: 100%;
      }
    }
  `,
];

export default styles;
