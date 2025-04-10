import { css } from 'lit';

const styles = [css`
:host {
  --mdc-progressbar-background-color: var(--mds-color-theme-control-indicator-inactive-normal);
  --mdc-progressbar-active-background-color: var(--mds-color-theme-control-active-normal);
  --mdc-progressbar-success-color: var(--mds-color-theme-indicator-stable);
  --mdc-progressbar-error-color: var(--mds-color-theme-indicator-attention);
  --mdc-progressbar-height: 0.25rem;
  --mdc-progressbar-border: 0.5px solid transparent;
  --mdc-progressbar-border-radius: var(--mdc-progressbar-height);

  --mdc-progressbar-label-color: var(--mds-color-theme-text-primary-normal);
  --mdc-progressbar-label-line-height: var(--mds-font-lineheight-body-midsize);
  --mdc-progressbar-label-font-size: var(--mds-font-size-body-midsize);
  --mdc-progressbar-label-font-weight: var(--mds-font-weight-regular);
  --mdc-progressbar-help-text-color: var(--mds-color-theme-text-secondary-normal);

  display: block;
  width: 100%;
}

:host::part(label-container) {
  display: flex;
  justify-content: space-between;
}

:host::part(inline-label-container) {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

:host::part(progress-container) {
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--mdc-progressbar-height);
  margin: 0.5rem 0;
}

:host::part(gap) {
  gap: 0.25rem;
}

:host([variant="inline"])::part(label) {
  overflow: unset;
}

:host::part(progress-bar) {
  height: 100%;
  background-color: var(--mdc-progressbar-active-background-color);
  border-radius: var(--mdc-progressbar-border-radius);
  transition: width 0.3s ease-in-out;
}

:host::part(success) {
  background-color: var(--mdc-progressbar-success-color);
}

:host::part(error) {
  background-color: var(--mdc-progressbar-error-color);
}

:host::part(remaining) {
  height: 100%;
  flex-grow: 1;
  background-color: var(--mdc-progressbar-background-color);
  border-radius: var(--mdc-progressbar-border-radius);
}

:host::part(label-text), :host::part(help-text), :host::part(percentage) {
  font-size: var(--mdc-progressbar-label-font-size);
  font-weight: var(--mdc-progressbar-label-font-weight);
  line-height: var(--mdc-progressbar-label-line-height);
}

:host([help-text-type="default"])::part(help-text) {
  color: var(--mdc-progressbar-help-text-color);
}

@media (forced-colors: active) {
  :host::part(progress-container), :host::part(progress-bar) {
    border: var(--mdc-progressbar-border);
  }
}
`];

export default styles;
