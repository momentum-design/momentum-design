import { css } from 'lit';

const styles = css`
  :host {

  }

  .menu-footer-divider {
    margin-top: 5px;
  }

  .menu-footer {
    padding-left: 12px;
    padding-right: 12px;
    height: 42px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .selected-count {
      padding-top: 12px;
      padding-bottom: 10px;
    }

    .footer-actions {
      display: flex;
      gap: 8px;
    }
  }
`;

export default [styles];
