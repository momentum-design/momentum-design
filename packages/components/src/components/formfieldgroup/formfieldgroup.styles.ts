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
  :host [part="container"]:has([part="help-text"]) {
    gap: 0;
    & > [part="label-text"] {
      margin-bottom: 0.25rem;
    }
    & > [part="help-text"] {
      margin-bottom: 0.75rem;
    }
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
