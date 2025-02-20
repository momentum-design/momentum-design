import { css } from 'lit';

const styles = css`
  :host {
    --mdc-group-help-text-normal: var(--mds-color-theme-text-secondary-normal);
  }

  :host::part(container) {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  /* Adjust the gap between group elements if the help text exists. */
  :host [part="container"]:has([part="help-text"]) {
    gap: 0;

    /*
    * Adjust the gap between the label text and the help text.
    */
    & > [part="label-text"] {
      margin-bottom: 0.25rem;
    }
    /*
    * Adjust the gap between the help text and the slot element.
    */
    & > [part="help-text"],
    & > ::slotted(*) {
      margin-bottom: 0.75rem;
    }
  }

  :host::part(label-text){
    font-weight: 700;
  }

  :host::part(help-text) {
    color: var(--mdc-group-help-text-normal);
  }
`;

export default [styles];
