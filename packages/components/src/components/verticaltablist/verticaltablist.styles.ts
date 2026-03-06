// AI-Assisted
import { css } from 'lit';

const styles = css`
  :host {
    --mdc-verticaltablist-width: 100%;

    width: var(--mdc-verticaltablist-width);
  }

  :host::part(container) {
    gap: 0.5rem;
  }

  ::slotted(mdc-tab) {
    width: 100%;
    border-radius: 0;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    align-items: flex-start;
    --mdc-tab-line-active-indicator-height: 100%;
    --mdc-tab-line-active-indicator-width: 0.125rem;
    --mdc-tab-content-justification: space-between;
  }
`;

export default [styles];
// End AI-Assisted
