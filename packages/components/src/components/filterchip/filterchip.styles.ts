import { css } from 'lit';

const styles = css`
  :host([selected]){
    border: 2px solid;
    background-color: var(--mds-color-theme-background-label-default-active);
  }

  :host([selected]:active) {
    background-color: var(--mds-color-theme-background-label-default-normal);
  }

  :host([selected]:focus) {
    background-color: var(--mds-color-theme-background-label-default-active);
  }

  :host([disabled]), :host([disabled]:hover), :host([disabled]:active) {
    border-color: var(--mds-color-theme-outline-primary-disabled);
    background: var(--mds-color-theme-background-primary-disabled);
    color: var(--mds-color-theme-text-primary-disabled);
    cursor: auto;
  }
`;

export default [styles];
