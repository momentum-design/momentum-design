import { css } from 'lit';

export const fontsStyles = css`
  :host::part(text) {
    font-size: unset;
    font-weight: unset;
    line-height: unset;
    text-decoration: unset;
    text-transform: unset;
    white-space: inherit;
    overflow: inherit;
    text-overflow: inherit;
  }

  :host([type="headline-small-regular"]) {
    font-size: var(--mds-font-apps-headline-small-regular-font-size);
    font-weight: var(--mds-font-apps-headline-small-regular-font-weight);
    line-height: var(--mds-font-apps-headline-small-regular-line-height);
    text-decoration: var(--mds-font-apps-headline-small-regular-text-decoration);
    text-transform: var(--mds-font-apps-headline-small-regular-text-case);
  }

  :host([type="headline-small-light"]) {
    font-size: var(--mds-font-apps-headline-small-light-font-size);
    font-weight: var(--mds-font-apps-headline-small-light-font-weight);
    line-height: var(--mds-font-apps-headline-small-light-line-height);
    text-decoration: var(--mds-font-apps-headline-small-light-text-decoration);
    text-transform: var(--mds-font-apps-headline-small-light-text-case);
  }

  :host([type="heading-xlarge-bold"]) {
    font-size: var(--mds-font-apps-heading-xlarge-bold-font-size);
    font-weight: var(--mds-font-apps-heading-xlarge-bold-font-weight);
    line-height: var(--mds-font-apps-heading-xlarge-bold-line-height);
    text-decoration: var(--mds-font-apps-heading-xlarge-bold-text-decoration);
    text-transform: var(--mds-font-apps-heading-xlarge-bold-text-case);
  }
  
  :host([type="heading-xlarge-medium"]) {
    font-size: var(--mds-font-apps-heading-xlarge-medium-font-size);
    font-weight: var(--mds-font-apps-heading-xlarge-medium-font-weight);
    line-height: var(--mds-font-apps-heading-xlarge-medium-line-height);
    text-decoration: var(--mds-font-apps-heading-xlarge-medium-text-decoration);
    text-transform: var(--mds-font-apps-heading-xlarge-medium-text-case);
  }
  
  :host([type="heading-xlarge-regular"]) {
    font-size: var(--mds-font-apps-heading-xlarge-regular-font-size);
    font-weight: var(--mds-font-apps-heading-xlarge-regular-font-weight);
    line-height: var(--mds-font-apps-heading-xlarge-regular-line-height);
    text-decoration: var(--mds-font-apps-heading-xlarge-regular-text-decoration);
    text-transform: var(--mds-font-apps-heading-xlarge-regular-text-case);
  }

  :host([type="heading-large-bold"]) {
    font-size: var(--mds-font-apps-heading-large-bold-font-size);
    font-weight: var(--mds-font-apps-heading-large-bold-font-weight);
    line-height: var(--mds-font-apps-heading-large-bold-line-height);
    text-decoration: var(--mds-font-apps-heading-large-bold-text-decoration);
    text-transform: var(--mds-font-apps-heading-large-bold-text-case);
  }
  
  :host([type="heading-large-medium"]) {
    font-size: var(--mds-font-apps-heading-large-medium-font-size);
    font-weight: var(--mds-font-apps-heading-large-medium-font-weight);
    line-height: var(--mds-font-apps-heading-large-medium-line-height);
    text-decoration: var(--mds-font-apps-heading-large-medium-text-decoration);
    text-transform: var(--mds-font-apps-heading-large-medium-text-case);
  }
  
  :host([type="heading-large-regular"]) {
    font-size: var(--mds-font-apps-heading-large-regular-font-size);
    font-weight: var(--mds-font-apps-heading-large-regular-font-weight);
    line-height: var(--mds-font-apps-heading-large-regular-line-height);
    text-decoration: var(--mds-font-apps-heading-large-regular-text-decoration);
    text-transform: var(--mds-font-apps-heading-large-regular-text-case);
  }

  :host([type="heading-midsize-bold"]) {
    font-size: var(--mds-font-apps-heading-midsize-bold-font-size);
    font-weight: var(--mds-font-apps-heading-midsize-bold-font-weight);
    line-height: var(--mds-font-apps-heading-midsize-bold-line-height);
    text-decoration: var(--mds-font-apps-heading-midsize-bold-text-decoration);
    text-transform: var(--mds-font-apps-heading-midsize-bold-text-case);
  }
  
  :host([type="heading-midsize-medium"]) {
    font-size: var(--mds-font-apps-heading-midsize-medium-font-size);
    font-weight: var(--mds-font-apps-heading-midsize-medium-font-weight);
    line-height: var(--mds-font-apps-heading-midsize-medium-line-height);
    text-decoration: var(--mds-font-apps-heading-midsize-medium-text-decoration);
    text-transform: var(--mds-font-apps-heading-midsize-medium-text-case);
  }
  
  :host([type="heading-midsize-regular"]) {
    font-size: var(--mds-font-apps-heading-midsize-regular-font-size);
    font-weight: var(--mds-font-apps-heading-midsize-regular-font-weight);
    line-height: var(--mds-font-apps-heading-midsize-regular-line-height);
    text-decoration: var(--mds-font-apps-heading-midsize-regular-text-decoration);
    text-transform: var(--mds-font-apps-heading-midsize-regular-text-case);
  }

  :host([type="heading-small-bold"]) {
    font-size: var(--mds-font-apps-heading-small-bold-font-size);
    font-weight: var(--mds-font-apps-heading-small-bold-font-weight);
    line-height: var(--mds-font-apps-heading-small-bold-line-height);
    text-decoration: var(--mds-font-apps-heading-small-bold-text-decoration);
    text-transform: var(--mds-font-apps-heading-small-bold-text-case);
  }
  
  :host([type="heading-small-medium"]) {
    font-size: var(--mds-font-apps-heading-small-medium-font-size);
    font-weight: var(--mds-font-apps-heading-small-medium-font-weight);
    line-height: var(--mds-font-apps-heading-small-medium-line-height);
    text-decoration: var(--mds-font-apps-heading-small-medium-text-decoration);
    text-transform: var(--mds-font-apps-heading-small-medium-text-case);
  }
  
  :host([type="heading-small-regular"]) {
    font-size: var(--mds-font-apps-heading-small-regular-font-size);
    font-weight: var(--mds-font-apps-heading-small-regular-font-weight);
    line-height: var(--mds-font-apps-heading-small-regular-line-height);
    text-decoration: var(--mds-font-apps-heading-small-regular-text-decoration);
    text-transform: var(--mds-font-apps-heading-small-regular-text-case);
  }

  :host([type="body-large-bold"]) {
    font-size: var(--mds-font-apps-body-large-bold-font-size);
    font-weight: var(--mds-font-apps-body-large-bold-font-weight);
    line-height: var(--mds-font-apps-body-large-bold-line-height);
    text-decoration: var(--mds-font-apps-body-large-bold-text-decoration);
    text-transform: var(--mds-font-apps-body-large-bold-text-case);
  }
  
  :host([type="body-large-medium-underline"]) {
    font-size: var(--mds-font-apps-body-large-medium-underline-font-size);
    font-weight: var(--mds-font-apps-body-large-medium-underline-font-weight);
    line-height: var(--mds-font-apps-body-large-medium-underline-line-height);
    text-decoration: var(--mds-font-apps-body-large-medium-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-large-medium-underline-text-case);
  }
  
  :host([type="body-large-medium"]) {
    font-size: var(--mds-font-apps-body-large-medium-font-size);
    font-weight: var(--mds-font-apps-body-large-medium-font-weight);
    line-height: var(--mds-font-apps-body-large-medium-line-height);
    text-decoration: var(--mds-font-apps-body-large-medium-text-decoration);
    text-transform: var(--mds-font-apps-body-large-medium-text-case);
  }
  
  :host([type="body-large-regular-underline"]) {
    font-size: var(--mds-font-apps-body-large-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-large-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-large-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-large-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-large-regular-underline-text-case);
  }
  
  :host([type="body-large-regular"]) {
    font-size: var(--mds-font-apps-body-large-regular-font-size);
    font-weight: var(--mds-font-apps-body-large-regular-font-weight);
    line-height: var(--mds-font-apps-body-large-regular-line-height);
    text-decoration: var(--mds-font-apps-body-large-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-large-regular-text-case);
  }

  :host([type="body-midsize-bold"]) {
    font-size: var(--mds-font-apps-body-midsize-bold-font-size);
    font-weight: var(--mds-font-apps-body-midsize-bold-font-weight);
    line-height: var(--mds-font-apps-body-midsize-bold-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-bold-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-bold-text-case);
  }
  
  :host([type="body-midsize-medium-underline"]) {
    font-size: var(--mds-font-apps-body-midsize-medium-underline-font-size);
    font-weight: var(--mds-font-apps-body-midsize-medium-underline-font-weight);
    line-height: var(--mds-font-apps-body-midsize-medium-underline-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-medium-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-medium-underline-text-case);
  }
  
  :host([type="body-midsize-medium"]) {
    font-size: var(--mds-font-apps-body-midsize-medium-font-size);
    font-weight: var(--mds-font-apps-body-midsize-medium-font-weight);
    line-height: var(--mds-font-apps-body-midsize-medium-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-medium-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-medium-text-case);
  }
  
  :host([type="body-midsize-regular-underline"]) {
    font-size: var(--mds-font-apps-body-midsize-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-midsize-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-midsize-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-regular-underline-text-case);
  }
  
  :host([type="body-midsize-regular"]) {
    font-size: var(--mds-font-apps-body-midsize-regular-font-size);
    font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
    line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-regular-text-case);
  }

  :host([type="body-small-bold"]) {
    font-size: var(--mds-font-apps-body-small-bold-font-size);
    font-weight: var(--mds-font-apps-body-small-bold-font-weight);
    line-height: var(--mds-font-apps-body-small-bold-line-height);
    text-decoration: var(--mds-font-apps-body-small-bold-text-decoration);
    text-transform: var(--mds-font-apps-body-small-bold-text-case);
  }
  
  :host([type="body-small-medium-underline"]) {
    font-size: var(--mds-font-apps-body-small-medium-underline-font-size);
    font-weight: var(--mds-font-apps-body-small-medium-underline-font-weight);
    line-height: var(--mds-font-apps-body-small-medium-underline-line-height);
    text-decoration: var(--mds-font-apps-body-small-medium-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-small-medium-underline-text-case);
  }
  
  :host([type="body-small-medium"]) {
    font-size: var(--mds-font-apps-body-small-medium-font-size);
    font-weight: var(--mds-font-apps-body-small-medium-font-weight);
    line-height: var(--mds-font-apps-body-small-medium-line-height);
    text-decoration: var(--mds-font-apps-body-small-medium-text-decoration);
    text-transform: var(--mds-font-apps-body-small-medium-text-case);
  }
  
  :host([type="body-small-regular-underline"]) {
    font-size: var(--mds-font-apps-body-small-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-small-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-small-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-small-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-small-regular-underline-text-case);
  }
  
  :host([type="body-small-regular"]) {
    font-size: var(--mds-font-apps-body-small-regular-font-size);
    font-weight: var(--mds-font-apps-body-small-regular-font-weight);
    line-height: var(--mds-font-apps-body-small-regular-line-height);
    text-decoration: var(--mds-font-apps-body-small-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-small-regular-text-case);
  }
`;
