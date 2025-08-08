import { css } from 'lit';

const styles = css`
  :host {
    display: flex;
    flex-direction: column;
  }

  :host::part(container) {
    display: flex;
    flex-direction: column;
    gap: 0rem;
  }
`;

export default [styles];
