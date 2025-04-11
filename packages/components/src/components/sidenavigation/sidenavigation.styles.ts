import { css } from 'lit';

const styles = css`
:host {
  --mdc-sidenavigation-expanded-width: 14.75rem;
  --mdc-sidenavigation-collapsed-width: 4.5rem;

  display: flex;
  height: 100%;
  width: var(--mdc-sidenavigation-collapsed-width);
}

:host([expanded]) {
  width: var(--mdc-sidenavigation-expanded-width);
}

:host([variant="hidden"]) {
  display: none;
}

:host::part(side-navigation-container) {
  display: flex;
  flex-direction: column;
  width: 100%;
}

:host::part(scrollable-section) {
  flex-grow: 1;
  overflow: auto;
  padding: 1rem 0;
  min-height: 0;
}

:host::part(fixed-section) {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.75rem 0 1rem 0;
}

/* In Progress */
:host::part(brand-logo-container) {
  display: flex;
  align-items: center;
  gap: 0.5rem;  
  padding: 0.5rem;
  margin-left: 1rem;
}

::slotted([slot="fixed-section"]) {
  padding: 0.5rem;
  margin-left: 1rem;
}

::slotted(mdc-button[slot="fixed-section"]),
::slotted(mdc-button[slot="fixed-section"][disabled]) {
  border: none;
  background-color: unset;
  outline: unset;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--mdc-button-secondary-color);
  border-color: var(--mdc-button-secondary-border-color);
  border-radius: 1.25rem;
  font-weight: var(--mds-font-apps-body-large-medium-font-weight);
}

::slotted([slot="brand-logo"]) {
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  aspect-ratio: 1 / 1;
}

`;

export default [styles];
