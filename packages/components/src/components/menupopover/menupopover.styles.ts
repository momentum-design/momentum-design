import { css } from 'lit';

const styles = css`
  :host::part(popover-content) {
    padding: 0.75rem 0.5rem;
  }

  ::slotted(mdc-divider) {
    margin-block: 0.25rem;
  }
`;

export default [styles];
