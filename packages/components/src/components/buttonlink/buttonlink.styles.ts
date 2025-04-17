import { css } from 'lit';

const styles = css`
  /** Overriding button styles */
  :host([buttonlink-size="64"]) {
    --mdc-button-prefix-icon-size: 2rem;
    --mdc-button-postfix-icon-size: 2rem;
  }

  :host([buttonlink-size="52"]) {
    --mdc-button-prefix-icon-size: 1.75rem;
    --mdc-button-postfix-icon-size: 1.75rem;
  }

  :host([buttonlink-size="40"]) {
    --mdc-button-prefix-icon-size: 1.25rem;
    --mdc-button-postfix-icon-size: 1.25rem;
  }

  :host([buttonlink-size="64"][data-btn-type='icon']), 
  :host([buttonlink-size="52"][data-btn-type='icon']), 
  :host([buttonlink-size="40"][data-btn-type='icon']), 
  :host([buttonlink-size="32"][data-btn-type='icon']),
  :host([buttonlink-size="28"][data-btn-type='icon']),
  :host([buttonlink-size="24"][data-btn-type='icon']){
    border-radius: 6.25rem;
    aspect-ratio: 1;
    padding: unset;
  }
  :host([buttonlink-size="40"]){
    font-size: var(--mds-font-size-body-large);
    line-height: var(--mdc-button-line-height-size-40);
    padding: 0 1rem;
    gap: 0.5rem;
  }
  :host([buttonlink-size="32"]){
    font-size: var(--mds-font-size-body-large);
    line-height: var(--mdc-button-line-height-size-32);
    padding: 0 0.75rem;
    gap: 0.375rem;
  }
  :host([buttonlink-size="28"]){
    font-size: var(--mds-font-size-body-midsize);
    line-height: var(--mdc-button-line-height-size-28);
    padding: 0 0.75rem;
    gap: 0.375rem;
  }
  :host([buttonlink-size="24"]){
    font-size: var(--mds-font-size-body-small);
    line-height: var(--mdc-button-line-height-size-24);
    padding: 0 0.625rem;
    gap: 0.25rem;
  }
  :host([buttonlink-size="20"]){
    padding: 0.0625rem;
    aspect-ratio: 1;
  }

  /** Overriding buttonSimple styles */
  :host([buttonlink-size="124"]){
    height: var(--mdc-button-height-size-124);
  }
  :host([buttonlink-size="88"]){
    height: var(--mdc-button-height-size-88);
  }
  :host([buttonlink-size="72"]){
    height: var(--mdc-button-height-size-72);
  }
  :host([buttonlink-size="64"]){
    height: var(--mdc-button-height-size-64);
  }
  :host([buttonlink-size="52"]){
    height: var(--mdc-button-height-size-52);
  }
  :host([buttonlink-size="40"]){
    height: var(--mdc-button-height-size-40);
  }
  :host([buttonlink-size="32"]){
    height: var(--mdc-button-height-size-32);
  }
  :host([buttonlink-size="28"]){
    height: var(--mdc-button-height-size-28);
    font-size: var(--mds-font-size-body-midsize);
  }
  :host([buttonlink-size="24"]){
    height: var(--mdc-button-height-size-24);
  }
  :host([buttonlink-size="20"]){
    height: var(--mdc-button-height-size-20);
  }
`;

export default [styles];
