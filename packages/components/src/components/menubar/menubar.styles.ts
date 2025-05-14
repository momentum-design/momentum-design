import { css } from 'lit';

const styles = css`
  :host {
    display: flex;
  }

  :host([aria-orientation='horizontal']) {
    flex-direction: row;
  }

  :host([aria-orientation='vertical']) {
    flex-direction: column;
  }
`;

export default [styles];
