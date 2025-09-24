import { css } from 'lit';

import { baseHostStyleVariables, focusRingBoxShadow } from '../../utils/styles';

const styles = [
  baseHostStyleVariables,
  css`
    :host {
      --mdc-listitem-column-gap: 0.75rem;
      --mdc-option-icon-width: 1rem;
      flex-shrink: 0;
    }

    :host::part(leading-icon),
    :host::part(trailing) {
      display: flex;
      align-items: center;
      width: var(--mdc-option-icon-width);
    }

    :host::part(leading-text) {
      flex: 1;
    }

    :host::part(leading-icon) {
      margin-inline-end: var(--mdc-listitem-column-gap);
    }
    :host::part(trailing) {
      margin-inline-start: var(--mdc-listitem-column-gap);
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
