import { css } from 'lit';

const styles = css`
  :host {
    display: block;
  }
  .mdc-password-wrapper {
    display: flex;
    align-items: center;
  }
  input[type='password'],
  input[type='text'] {
    flex: 1;
    padding-right: 2.5rem;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
    margin-left: -2.5rem;
    z-index: 1;
    display: flex;
    align-items: center;
  }
`;

export default [styles];
