import { css } from 'lit';

const styles = css`
  :host {
  }

  .menu-footer-divider {
    margin-top: 0.3125rem;
  }

  .menu-footer {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    height: 2.625rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .selected-count {
      padding-top: 0.75rem;
      padding-bottom: 0.625rem;
    }

    .footer-actions {
      display: flex;
      gap: 0.5rem;
    }
  }
`;

export default [styles];
