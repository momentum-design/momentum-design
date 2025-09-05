import { css } from 'lit';

import { baseHostStyleVariables, focusRingBoxShadow } from '../../utils/styles';

const styles = [
  baseHostStyleVariables,
  css`
    :host {
      --mdc-option-icon-width: 1rem;

      flex-shrink: 0;

      display: flex;
      flex-direction: row;
      align-items: center;
    }
    :host::part(list-item) {
      height: 2.25rem;
    }
    :host::part(default-slot) {
      display: none;
    }
    :host::part(leading-icon),
    :host::part(trailing) {
      flex: 1;
      max-width: var(--mdc-option-icon-width);
    }
    :host::part(leading-text) {
      flex: 1;
      /** 2x of leading and trailing icon width + 2x of column gap on both sides of the label text */
      width: calc(100% - (2 * var(--mdc-option-icon-width)) - (2 * var(--mdc-listitem-column-gap)));
    }
    :host([data-focused]) {
      outline: none;
      position: relative;
      box-shadow: ${focusRingBoxShadow};
    }
    :host([data-hidden]) {
      display: none;
    }
  `,
];

export default styles;
