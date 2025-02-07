import { css } from 'lit';

const styles = css`
  :host {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  :host([type="parent"]) > ::slotted(mdc-checkbox) {
    margin-left: 1.5rem;
  }
  :host([type="parent"]:dir(rtl)) > ::slotted(mdc-checkbox) {
    margin-right: 1.5rem;
  }
`;

export default [styles];
