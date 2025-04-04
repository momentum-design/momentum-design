import { css } from 'lit';

const styles = css`
  :host {
    display: block;
    height: 100%;
  }
  :host::part(brandvisual) {
    height: 100%;
    width: 100%;
  }
`;

export default [styles];
