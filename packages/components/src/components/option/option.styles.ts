import { css } from 'lit';

const styles = css`
  :host {
    --mdc-option-trailing-min-width: 1rem;
    /** The leading text should take up the remaining space before the trailing text. */
    --mdc-option-label-text: calc(100% - var(--mdc-option-trailing-min-width) - var(--mdc-listitem-column-gap));

    display: grid;
    grid-template-columns: var(--mdc-option-label-text) auto;
  }
  :host::part(list-item) {
    height: 2.25rem;
  }
  :host::part(default-slot) {
    display: none;
  }
  :host::part(trailing) {
    min-width: var(--mdc-option-trailing-min-width);
  }
  :host::part(leading-text) {
    width: var(--mdc-option-label-text);
  }
  :host::part(leading-text-primary-label) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  :host::part(leading-text-primary-label):dir(rtl) {
    /** This little padding is to prevent the label text being hidden at the end.  */
    padding-inline-start: 0.4px;
  }
`;

export default [styles];
