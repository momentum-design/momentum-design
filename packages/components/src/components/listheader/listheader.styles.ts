import { css } from 'lit';

const styles = css`
  :host {
    --mdc-listheader-padding: 0.5rem 0.75rem;
    --mdc-listheader-gap: 0.5rem;
    --mdc-listheader-color-disabled: var(--mds-color-theme-text-primary-disabled);

    display: flex;
    align-items: center;
    padding: var(--mdc-listheader-padding);
    gap: var(--mdc-listheader-gap);
  }

  :host([disabled]) {
    color: var(--mdc-listheader-color-disabled);
  }

  ::slotted(*) {
    flex-shrink: 0;
  }

  :host::part(header-text) {
    width: 100%;
  }
  :host::part(prefix-icon),
  :host::part(postfix-icon) {
    flex-shrink: 0;
  }
`;

export default [styles];
