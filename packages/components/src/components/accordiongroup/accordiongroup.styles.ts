import { css } from 'lit';

const styles = css`
  :host {
    display: flex;
    flex-direction: column;
  }
  :host([variant='stacked']) {
    row-gap: 1.5rem;
  }
`;

export default [styles];
