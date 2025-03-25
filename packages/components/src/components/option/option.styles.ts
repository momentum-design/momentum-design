import { css } from 'lit';

const styles = css`
  :host {
    --mdc-option-trailing-min-width: 1rem;
  }
  :host::part(list-item) {
    height: 2.25rem;
  }
  :host::part(default-slot) {
    display: none;
  }
  :host::part(leading) {
    width: calc(100% - var(--mdc-option-trailing-min-width) - var(--mdc-listitem-column-gap));
  }
  :host::part(leading-text) {
    overflow: hidden;
  }
  :host::part(trailing) {
    min-width: var(--mdc-option-trailing-min-width);
  }
  :host::part(leading-text-primary-label) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default [styles];
