import { css } from 'lit';

const styles = [css`
  :host {
    display: flex;
    flex-direction: column;
  }
  :host([type="parent"]) > ::slotted(mdc-checkbox), ::slotted(mdc-checkboxgroup) {
    margin-left: 1.5rem;
  }
  :host([type="parent"]):dir(rtl) > ::slotted(mdc-checkbox), ::slotted(mdc-checkboxgroup) {
    margin-right: 1.5rem;
  }
  .mdc-checkboxgroup__header-text {
    margin-bottom: 0.5rem;
  }
`];

export default styles;
