import { css } from 'lit';

const styles = css`
  :host::part(list-item) {
    height: 2.25rem;
  }
  :host::part(default-slot) {
    display: none; 
  }
`;

export default [styles];
