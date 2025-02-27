import { css } from 'lit';

const styles = css`
  :host::part(header-text) {
    padding: 0.5rem 0.75rem;
  }
  :host::part(list-container) {
    margin: unset;
    padding: unset;
  }
  ::slotted(.list-wrapper) {
    list-style: none;
  }
`;

export default [styles];
