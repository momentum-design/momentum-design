import { css } from 'lit';

const styles = css`
  :host {
    display: flex;
    flex-direction: column;
    scroll-padding-top: 0.25rem;
    scroll-padding-bottom: 0.25rem;
  }

  :host::part(container) {
    display: flex;
    flex-direction: column;
    gap: 0rem;
    scroll-padding-top: 0.25rem;
    scroll-padding-bottom: 0.25rem;
  }

  :host([orientation='horizontal'])::part(container) {
    flex-direction: row;
    scroll-padding-left: 0.25rem;
    scroll-padding-right: 0.25rem;
  }
`;

export default [styles];
