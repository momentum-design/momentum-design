import { css } from 'lit';

const styles = css`
  :host > .mdc-menusection__label {
    padding: 0.5rem 0.75rem;
  }

  :host::part(divider) {
    margin-block: 0.25rem;
  }
`;

export default [styles];