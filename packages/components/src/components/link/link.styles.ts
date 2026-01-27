import { css } from 'lit';

const styles = css`
  :host::part(text) {
    text-decoration: inherit;
  }

  :host::part(icon) {
    display: inline-flex;
    vertical-align: -0.125rem;
    margin-inline-start: 0.25rem;
  }

  :host([size='large'])::part(anchor) {
    font-size: var(--mds-font-apps-body-large-regular-font-size);
    font-weight: var(--mds-font-apps-body-large-regular-font-weight);
    line-height: var(--mds-font-apps-body-large-regular-line-height);
    text-decoration: var(--mds-font-apps-body-large-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-large-regular-text-case);
  }

  :host([size='midsize'])::part(anchor) {
    font-size: var(--mds-font-apps-body-midsize-regular-font-size);
    font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
    line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-regular-text-case);
  }

  :host([size='small'])::part(anchor) {
    font-size: var(--mds-font-apps-body-small-regular-font-size);
    font-weight: var(--mds-font-apps-body-small-regular-font-weight);
    line-height: var(--mds-font-apps-body-small-regular-line-height);
    text-decoration: var(--mds-font-apps-body-small-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-small-regular-text-case);
  }

  :host([size='large']:hover)::part(text),
  :host([size='large']:active)::part(text),
  :host([size='large'][inline])::part(text) {
    text-decoration: var(--mds-font-apps-body-large-regular-underline-text-decoration);
  }

  :host([size='large']:hover)::part(anchor),
  :host([size='large']:active)::part(anchor),
  :host([size='large'][inline])::part(anchor) {
    font-size: var(--mds-font-apps-body-large-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-large-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-large-regular-underline-line-height);
    text-decoration: none;
    text-transform: var(--mds-font-apps-body-large-regular-underline-text-case);
  }

  :host([size='midsize']:hover)::part(text),
  :host([size='midsize']:active)::part(text),
  :host([size='midsize'][inline])::part(text) {
    text-decoration: var(--mds-font-apps-body-midsize-regular-underline-text-decoration);
  }

  :host([size='midsize']:hover)::part(anchor),
  :host([size='midsize']:active)::part(anchor),
  :host([size='midsize'][inline])::part(anchor) {
    font-size: var(--mds-font-apps-body-midsize-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-midsize-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-midsize-regular-underline-line-height);
    text-decoration: none;
    text-transform: var(--mds-font-apps-body-midsize-regular-underline-text-case);
  }

  :host([size='small']:hover)::part(text),
  :host([size='small']:active)::part(text),
  :host([size='small'][inline])::part(text) {
    text-decoration: var(--mds-font-apps-body-small-regular-underline-text-decoration);
  }

  :host([size='small']:hover)::part(anchor),
  :host([size='small']:active)::part(anchor),
  :host([size='small'][inline])::part(anchor) {
    font-size: var(--mds-font-apps-body-small-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-small-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-small-regular-underline-line-height);
    text-decoration: none;
    text-transform: var(--mds-font-apps-body-small-regular-underline-text-case);
  }
`;

export default [styles];
