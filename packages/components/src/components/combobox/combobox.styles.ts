import { css } from 'lit';

import { hostFocusRingStyles } from '../../utils/styles';

const styles = css`
  :host {
    --mdc-combobox-border-color: var(--mds-color-theme-outline-input-normal);

    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    align-items: unset;
    width: unset;
  }
  :host::part(container) {
    width: 100%;
  }
  :host::part(container__base) {
    display: flex;
    position: relative;
  }
  :host::part(container__base-icon) {
    position: absolute;
    right: 0;
    padding: 0.5rem;
  }
`;

export default [styles, ...hostFocusRingStyles()];
