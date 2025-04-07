import { css } from 'lit';

const styles = css`
:host {
  display: flex;
  height: 100%;
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
  padding-bottom: 1rem;
}

::slotted([slot="scrollable-section"]) {
}

::slotted([slot="fixed-section"]) {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
}

::slotted([slot="scrollable-section"])::part(text) {
  padding-left: 1.75rem;
}

::slotted([slot="fixed-section"] mdc-button),
::slotted([slot="fixed-section"] mdc-link) {
  border: 1px solid red;
}

::slotted(mdc-text) {
  color: red;
  padding-left: 1.75rem;
}
`;

export default [styles];
