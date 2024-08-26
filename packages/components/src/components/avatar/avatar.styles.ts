import { css } from 'lit';

const styles = css`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100vh;
    position: relative;
    width: fit-content;
  }
  img {
    border-radius: 100vh;
    height: inherit;
    width: inherit;
    object-fit: cover;
  }
`;

export default styles;
