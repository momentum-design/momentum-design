import { css } from 'lit';

const styles = css`
  :host {
    box-sizing: border-box;
    max-width: 100%;
  }

  :host::part(label) {
    overflow: visible;
    text-overflow: clip;
    white-space: normal;
  }

  ::slotted(mdc-checkbox),
  ::slotted(mdc-checkboxtree) {
    box-sizing: border-box;
    max-width: 100%;
  }

  ::slotted(mdc-checkboxtree) {
    /* Declared as a fallback here instead of set on :host, so a value the consumer sets on the
       outermost tree inherits down through every nested level instead of being reset back to the
       default by each nested host's own :host rule. */
    padding-inline-start: var(--mdc-checkboxtree-indent, 1.5rem);
  }
`;

export default [styles];
