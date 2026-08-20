import { css } from 'lit';

const styles = css`
  :host {
    --mdc-checkboxtree-indent: 1.5rem;

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
    padding-inline-start: var(--mdc-checkboxtree-indent);
  }
`;

export default [styles];
