import { css } from 'lit';

const styles = css`
  :host {
    --mdc-aiassistantprompt-width: 100%;
    --mdc-aiassistantprompt-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-aiassistantprompt-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-aiassistantprompt-background-color: var(--mds-color-theme-background-primary-ghost);
    --mdc-aiassistantprompt-text-secondary-normal: var(--mds-color-theme-text-secondary-normal);
    --mdc-aiassistantprompt-text-font-size: var(--mds-font-size-body-midsize);
    --mdc-aiassistantprompt-text-line-height: var(--mds-font-lineheight-body-midsize);
    --mdc-aiassistantprompt-container-padding: 0.75rem;
    --mdc-aiassistantprompt-region-gap: 0.5rem;
    --mdc-aiassistantprompt-border-radius: 0.5rem;
    --mdc-focus-ring-inner-color: var(--mds-color-theme-focus-default-0);
    --mdc-focus-ring-middle-color: var(--mds-color-theme-focus-default-1);
    --mdc-focus-ring-outer-color: var(--mds-color-theme-focus-default-2);
    --mdc-focus-ring-inner-width: 0.125rem;
    --mdc-focus-ring-middle-width: calc(2 * var(--mdc-focus-ring-inner-width));
    --mdc-focus-ring-outer-width: calc(0.0625rem + var(--mdc-focus-ring-middle-width));

    display: block;
    width: var(--mdc-aiassistantprompt-width);
  }

  :host::part(container) {
    display: flex;
    flex-direction: column;
    gap: var(--mdc-aiassistantprompt-region-gap);
    box-sizing: border-box;
    width: 100%;
    padding: var(--mdc-aiassistantprompt-container-padding);
    border: 0.0625rem solid var(--mdc-aiassistantprompt-border-color);
    border-radius: var(--mdc-aiassistantprompt-border-radius);
    background-color: var(--mdc-aiassistantprompt-background-color);
    overflow: hidden;
  }

  :host(:not([disabled])) .mdc-focus-ring:hover {
    --mdc-aiassistantprompt-background-color: var(--mds-color-theme-background-primary-hover);
  }

  :host(:not([disabled])) .mdc-focus-ring:has(textarea:focus-visible) {
    --mdc-aiassistantprompt-background-color: var(--mds-color-theme-background-primary-ghost);
    --mdc-aiassistantprompt-border-color: var(--mds-color-theme-outline-input-active);
    box-shadow:
      0 0 0 var(--mdc-focus-ring-inner-width) var(--mdc-focus-ring-inner-color),
      0 0 0 var(--mdc-focus-ring-middle-width) var(--mdc-focus-ring-middle-color),
      0 0 0 var(--mdc-focus-ring-outer-width) var(--mdc-focus-ring-outer-color);
  }

  :host(:not([data-has-header]))::part(header),
  :host(:not([data-has-footer-left]):not([data-has-footer-right]))::part(footer),
  :host(:not([data-has-footer-left]))::part(footer-left),
  :host(:not([data-has-footer-right]))::part(footer-right) {
    display: none;
  }

  :host::part(header) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--mdc-aiassistantprompt-region-gap);
  }

  :host::part(footer) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--mdc-aiassistantprompt-region-gap);
    width: 100%;
  }

  :host::part(footer-left),
  :host::part(footer-right) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--mdc-aiassistantprompt-region-gap);
  }

  :host::part(footer-left) {
    justify-content: flex-start;
  }

  :host::part(footer-right) {
    justify-content: flex-end;
    margin-inline-start: auto;
  }

  :host::part(textarea) {
    box-sizing: border-box;
    width: 100%;
    min-height: var(--mdc-aiassistantprompt-text-line-height);
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    resize: none;
    background-color: transparent;
    color: var(--mdc-aiassistantprompt-text-color);
    font-family: inherit;
    font-size: var(--mdc-aiassistantprompt-text-font-size);
    line-height: var(--mdc-aiassistantprompt-text-line-height);
  }

  textarea::placeholder {
    color: var(--mdc-aiassistantprompt-text-secondary-normal);
  }

  :host([disabled])::part(textarea),
  :host([disabled]) textarea::placeholder {
    color: var(--mds-color-theme-text-primary-disabled);
  }

  :host([disabled])::part(container),
  :host([readonly])::part(container) {
    --mdc-aiassistantprompt-border-color: var(--mds-color-theme-outline-primary-disabled);
    --mdc-aiassistantprompt-background-color: var(--mds-color-theme-background-input-disabled);
  }

  @media (forced-colors: active) {
    :host(:not([disabled])) .mdc-focus-ring:has(textarea:focus-visible) {
      outline: 0.125rem solid var(--mds-color-theme-focus-default-0);
    }
  }
`;

export default [styles];
