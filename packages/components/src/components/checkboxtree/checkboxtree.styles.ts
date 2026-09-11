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
    /* Keep the fallback here so consumer overrides inherit through nested trees. */
    padding-inline-start: var(--mdc-checkboxtree-indent, 1.5rem);
  }
`;

export default [styles];
