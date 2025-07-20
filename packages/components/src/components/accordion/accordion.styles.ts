import { css } from 'lit';

const styles = css`
  :host::part(header-section) {
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
  }
  :host::part(header-section):hover,
  :host::part(header-section):active {
    background-color: unset;
  }
  :host([size='small'])::part(header-section) {
    padding-right: 0.5rem;
  }
  :host([size='large'])::part(header-section) {
    padding-right: 1rem;
  }
`;

export default [styles];
