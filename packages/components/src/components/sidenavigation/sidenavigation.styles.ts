import { css } from 'lit';

const styles = css`
:host {
  display: flex;
  height: 100%;
  width: 14.75rem;
}

:host([variant="hidden"]) {
  display: none;
}

:host([variant="fixed-expanded"]),
:host([variant="flexible"][expanded]) {
  width: 14.75rem;
}

:host([variant="fixed-collapsed"]),
:host([variant="flexible"]) {
  width: 4.5rem;
}

:host::part(side-navigation-container) {
  display: flex;
  flex-direction: column;
  height: 100%;
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

:host::part(brand-logo-container) {
  display: flex;
  align-items: center;
  gap: 0.5rem;  
  padding: 0.5rem;
  margin-left: 1rem;
}

::slotted([slot="fixed-section-link"]),
::slotted([slot="fixed-section-button"]) {
  padding: 0.5rem;
  margin-left: 1rem;
}

::slotted([slot="fixed-section-button"]),
::slotted([slot="fixed-section-button"][disabled]) {
  border: none;
  background-color: unset;
  outline: unset;
  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--mdc-button-secondary-color);
  border-color: var(--mdc-button-secondary-border-color);
  border-radius: 1.25rem;
  font-weight: var(--mds-font-apps-body-large-medium-font-weight);
}

// in progress
::slotted([slot="brand-logo"]) {
  height: 1.5rem;
}

`;

export default [styles];
