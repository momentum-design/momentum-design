import { css } from 'lit';

const styles = css`
  :host {
    --mdc-menupopover-slide-offset: 1rem;

    display: none;
    opacity: 0;
    transform: var(--mdc-menupopover-slide-from, translateY(calc(-1 * var(--mdc-menupopover-slide-offset))));
    transition: var(--mds-transition-slide-exit);
    transition-behavior: allow-discrete;
  }

  :host([data-floating-side='bottom']),
  :host([placement^='bottom']:not([data-floating-side])) {
    --mdc-menupopover-slide-from: translateY(calc(-1 * var(--mdc-menupopover-slide-offset)));
  }

  :host([data-floating-side='top']),
  :host([placement^='top']:not([data-floating-side])) {
    --mdc-menupopover-slide-from: translateY(var(--mdc-menupopover-slide-offset));
  }

  :host([data-floating-side='left']),
  :host([placement^='left']:not([data-floating-side])) {
    --mdc-menupopover-slide-from: translateX(var(--mdc-menupopover-slide-offset));
  }

  :host([data-floating-side='right']),
  :host([placement^='right']:not([data-floating-side])) {
    --mdc-menupopover-slide-from: translateX(calc(-1 * var(--mdc-menupopover-slide-offset)));
  }

  :host([visible]) {
    display: block;
    opacity: 1;
    transform: none;
    transition: var(--mds-transition-slide-entrance);
    transition-behavior: allow-discrete;
  }

  @starting-style {
    :host([visible]) {
      opacity: 0;
      transform: var(--mdc-menupopover-slide-from);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    :host,
    :host([visible]) {
      transition: none;
    }
  }

  :host::part(popover-content) {
    padding: 0.75rem 0.5rem;
    scroll-padding-block: 0.25rem;
  }

  ::slotted(mdc-divider) {
    margin-block: 0.25rem;
  }
`;

export default [styles];
