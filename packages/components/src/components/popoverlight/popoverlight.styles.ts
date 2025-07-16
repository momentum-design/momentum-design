const styles = `
  mdc-popoverlight {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: content-box;
    background-color: var(--mds-color-theme-background-solid-primary-normal);
    border-radius: 0.5rem;
    border: 0.0625rem solid var(--mds-color-theme-outline-secondary-normal);
    filter: var(--mds-elevation-3);
    width: max-content;
    z-index: var(--mdc-popover-z-index, 1000);
  }

  mdc-popoverlight[visible] {
    display: block;
  }

  mdc-popoverlight[color='contrast'] {
    background-color: var(--mds-color-theme-inverted-background-normal);
    border-color: var(--mds-color-theme-inverted-outline-primary-normal);
    color: var(--mds-color-theme-inverted-text-primary-normal);
  }

  mdc-popoverlight[color='contrast'] .popover-arrow {
    background-color: var(--mds-color-theme-inverted-background-normal);
    border-color: var(--mds-color-theme-inverted-outline-primary-normal);
  }

  mdc-popoverlight[color='contrast'] .popover-close {
    color: var(--mds-color-theme-inverted-text-primary-normal);
  }

  .popover-content {
    position: relative;
    padding: 0.75rem;
    min-width: max-content;
    z-index: 9998;
    max-height: auto;
  }

  .popover-hover-bridge {
    position: absolute;
    transform: translateX(-50%);
    background: transparent;
    pointer-events: auto;
  }

  .popover-arrow {
    position: absolute;
    width: 1rem;
    height: 1rem;
    background-color: var(--mds-color-theme-background-solid-primary-normal);
    transform: rotate(45deg);
    pointer-events: none;
    border: 0.0625rem solid var(--mds-color-theme-outline-secondary-normal);
  }

  .popover-close {
    box-sizing: border-box;
    position: absolute;
    right: 0.75rem;
    top: 0.75rem;
    cursor: pointer;
    z-index: 9999;
  }

  .popover-close.rtl {
    right: auto;
    left: 0.75rem;
  }

  .popover-arrow[data-side='top'] {
    border-top: none;
    border-left: none;
    border-bottom-right-radius: 0.1875rem;
    border-top-left-radius: 100%;
  }

  .popover-arrow[data-side='bottom'] {
    border-bottom: none;
    border-right: none;
    border-top-left-radius: 0.1875rem;
    border-bottom-right-radius: 100%;
  }

  .popover-arrow[data-side='right'] {
    border-top: none;
    border-right: none;
    border-bottom-left-radius: 0.1875rem;
    border-top-right-radius: 100%;
  }

  .popover-arrow[data-side='left'] {
    border-bottom: none;
    border-left: none;
    border-top-right-radius: 0.1875rem;
    border-bottom-left-radius: 100%;
  }
`;

export default styles;
