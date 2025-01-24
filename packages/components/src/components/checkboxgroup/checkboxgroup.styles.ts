import { css } from 'lit';

const styles = [css`
  :host {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  :host([type="parent"]) > ::slotted(mdc-checkbox), ::slotted(mdc-checkboxgroup) {
    margin-left: 1.5rem;
  }
`];

export default styles;
