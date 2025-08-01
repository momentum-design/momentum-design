import { css } from 'lit';

const styles = css`
  :host::part(header-section) {
    display: flex;
    align-items: center;
    cursor: unset;
    justify-content: space-between;
  }
  :host::part(header-section):hover,
  :host::part(header-section):active {
    background-color: unset;
  }
  :host::part(trailing-header__button) {
    margin: 0.125rem;
  }
`;

export default [styles];
