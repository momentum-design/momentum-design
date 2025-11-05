import { css } from 'lit';

const styles = css`
  :host {
    --mdc-menusection-divider-margin-block: 0.25rem;
    --mdc-menusection-gap: 0rem;
    --mdc-menusection-divider-width: 100%;
    --mdc-menusection-header-padding: 0.5rem 1.75rem;

    display: flex;
    flex-direction: column;
    height: 100%;
    gap: var(--mdc-menusection-gap);
  }

  :host::part(divider) {
    width: var(--mdc-menusection-divider-width);
    margin-block: var(--mdc-menusection-divider-margin-block);
  }

  :host::part(align-header) {
    --mdc-listheader-padding: var(--mdc-menusection-header-padding);
  }
`;

export default [styles];
