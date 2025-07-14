import { css } from 'lit';

const styles = css`
  :host {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  ::slotted(mdc-divider) {
    margin-block: 0.25rem;
  }
`;

export default [styles];
