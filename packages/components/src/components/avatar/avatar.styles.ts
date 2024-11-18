import { css } from 'lit';

const styles = css`
  .container {
    padding: unset;
    margin: unset;
    background-color: gray;

    width: 128px;
    height: 128px;
    position: absolute;
    border-radius: 12vh;
  }
  .photo {
    border-radius: 100vh;
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  .icon {
    height: 100%;
    width: 100%;
    color: white;
  }
  .presence {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

export default [styles];
