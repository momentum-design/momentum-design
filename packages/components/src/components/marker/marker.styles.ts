import { css, unsafeCSS } from 'lit';
import { MARKER_CLASSES } from './marker.constants';

const SOLID_CLASS_NAME_BYPASS = unsafeCSS(MARKER_CLASSES.SOLID);
const STRIPED_CLASS_NAME_BYPASS = unsafeCSS(MARKER_CLASSES.STRIPED);

const styles = css`
  :host {
    width: 0.25rem;
    height: 100%;
    display: inline-block;
  }

  :host(.${SOLID_CLASS_NAME_BYPASS}) {
    background: var(--mds-color-theme-outline-secondary-normal, rgba(0, 0, 0, 0.20));
  }

  :host(.${STRIPED_CLASS_NAME_BYPASS}) {
    background: repeating-linear-gradient(
      135deg,
      var(--mds-color-theme-outline-secondary-normal, rgba(0, 0, 0, 0.20)),
      var(--mds-color-theme-outline-secondary-normal, rgba(0, 0, 0, 0.20)) 0.1875rem,
      white 0.1875rem, 
      white 0.375rem
    );
  }
`;

export default [styles];