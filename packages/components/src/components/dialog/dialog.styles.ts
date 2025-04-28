import { css } from 'lit';

const styles = css`
  :host {
    --mdc-dialog-primary-background-color: var(--mds-color-theme-background-solid-primary-normal);
    --mdc-dialog-border-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-dialog-header-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-dialog-description-text-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-dialog-elevation-3: var(--mds-elevation-3);
    --mdc-dialog-width: 27rem; /* Default to small */
    --mdc-dialog-height: 20.75rem;
    
    background-color: var(--mdc-dialog-primary-background-color);
    border: 0.0625rem solid var(--mdc-dialog-border-color);
    border-radius: 0.5rem;
    filter: var(--mdc-dialog-elevation-3);
    display: none;
    padding: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    position: absolute;
    right: 50%;
    bottom: 50%;
    transform: translate(50%,50%);
  }
    
  :host([visible]) {
    display: flex;
      
  }

  :host([size='medium']) {
    --mdc-dialog-width: 41rem;
    --mdc-dialog-height: 22.25rem;
  }

  :host([size='large']) {
    --mdc-dialog-width: 62rem;
    --mdc-dialog-height: 25.75rem;
  }

  :host {
    width: var(--mdc-dialog-width);
    height: var(--mdc-dialog-height);
  }

  @media (max-width: 432px) {
      :host {
          width: 100%;
      }
  }  
    
  :host::part(header),
  :host::part(body),
  :host::part(footer) {
    display: flex;
    align-self: stretch;
  }

  :host::part(header) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  :host::part(header-text) {
    width: 23.625rem;
    color: var(--mdc-dialog-header-text-color);
  }
    
  :host::part(description-text) {
    color: var(--mdc-dialog-description-text-color);
  }
    
  :host::part(body) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%
  }

  :host::part(footer) {
    padding-top: 0.5rem;
    box-sizing: content-box;
    justify-content: flex-end;
  }

  .dialog-close {
    position: absolute;
    right: 1rem;
    top: 1rem;
    cursor: pointer;
    z-index: 9999;
  }
    
  mdc-text::part(text) {
    margin: 0;
  }
`;

export default [styles];
