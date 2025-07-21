import { css } from 'lit';

const styles = css`
  :host {
    --mdc-connector-complete-bg: var(--mds-color-theme-outline-theme-normal);
    --mdc-connector-incomplete-bg: var(--mds-color-theme-outline-primary-normal);
    display: block;
  }
  :host::part(connector) {
    width: 220px;
    height: 1px;
    background: var(--mdc-connector-incomplete-bg);
  }
  :host([status='complete'])::part(connector) {
    background: var(--mdc-connector-complete-bg);
  }
  :host([orientation='vertical'])::part(connector) {
    width: 1px;
    height: 220px;
  }
  :host([orientation='horizontal'])::part(connector) {
    width: 220px;
    height: 1px;
  }
`;

export default [styles];
