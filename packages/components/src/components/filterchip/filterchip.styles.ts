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

`;

export default [styles];
