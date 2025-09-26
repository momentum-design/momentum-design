import { css } from 'lit';

const styles = css`
  :host::part(label) {
    font-size: var(--mds-font-apps-body-midsize-medium-font-size);
    font-weight: var(--mds-font-apps-body-midsize-medium-font-weight);
    line-height: var(--mds-font-apps-body-midsize-medium-line-height);
  }

  :host::part(container) {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  :host::part(group-header) {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
`;

export default [styles];
