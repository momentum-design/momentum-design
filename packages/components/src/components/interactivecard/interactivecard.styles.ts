import { css } from 'lit';

const styles = css`
  :host {
  }

  :host([variant='promotional']){
    border-color: var(--mds-color-theme-outline-promotion-normal);
  }

  :host::part(icon-button), :host::part(footer) {
    margin-left: auto;
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
  }

  :host::part(footer){
    gap: 16px;
    padding-bottom: 8px;
  }
`;

export default [styles];
