import { css } from 'lit';

const styles = css`
  :host {
    --mdc-connector-complete-background: var(--mds-color-theme-outline-theme-normal);
    --mdc-connector-incomplete-background: var(--mds-color-theme-outline-primary-normal);
    display: block;
    width: 100%;
    height: 100%;
  }
  :host::part(connector) {
    width: 100%;
    height: 0.0625rem;
    background: var(--mdc-connector-incomplete-background);
  }
  :host([status='complete'])::part(connector) {
    background: var(--mdc-connector-complete-background);
  }
  :host([orientation='vertical'])::part(connector) {
    width: 0.0625rem;
    height: 100%;
  }

  @media (forced-colors: active) {
    :host([orientation='horizontal'])::part(connector) {
      border-top: 1px solid var(--mdc-connector-incomplete-background);
    }
    :host([status='complete'][orientation='horizontal'])::part(connector) {
      border-top: 1px solid var(--mdc-connector-complete-background);
    }
    :host([orientation='vertical'])::part(connector) {
      border-left: 1px solid var(--mdc-connector-incomplete-background);
    }
    :host([status='complete'][orientation='vertical'])::part(connector) {
      border-left: 1px solid var(--mdc-connector-complete-background);
    }
  }
`;

export default [styles];
