import { css } from 'lit';

const styles = css`
  :host > ul {
    padding: unset;
    margin: unset;
  }
  :host::part(header-text) {
    padding: 0.5rem 0.75rem;
  }
`;

export default [styles];
