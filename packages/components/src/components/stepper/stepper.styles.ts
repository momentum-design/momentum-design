import { css } from 'lit';

import { hostFitContentStyles } from '../../utils/styles';

const styles = css`
  :host {
    gap: 0.5rem;
  }

  ::slotted(mdc-stepperitem) {
    flex-shrink: 0;
  }

  :host([orientation='horizontal']) {
    width: 100%;
  }

  :host([orientation='vertical']) {
    flex-direction: column;
    height: 100%;
  }

  :host([orientation='vertical'][variant='inline']),
  :host([orientation='horizontal'][variant='stacked']) {
    align-items: flex-start;
  }

  :host([orientation='vertical'][variant='stacked']) ::slotted(mdc-stepperconnector) {
    display: flex;
    justify-content: center;
  }

  :host([orientation='vertical'][variant='inline']) ::slotted(mdc-stepperconnector) {
    display: flex;
    padding-left: 0.875rem;
  }

  :host([orientation='horizontal'][variant='stacked']) ::slotted(mdc-stepperconnector) {
    padding-top: 0.9375rem;
    margin: 0 -3rem;
  }
`;

// AI-Assisted: Let stacked steps share constrained space without collapsing connectors into adjacent items.
const adaptiveStackedStyles = css`
  :host([orientation='horizontal'][variant='stacked']) {
    gap: 0.25rem;
  }

  :host([orientation='horizontal'][variant='stacked']) ::slotted(mdc-stepperitem) {
    flex-shrink: 1;
    min-inline-size: 6rem;
  }

  :host([orientation='horizontal'][variant='stacked']) ::slotted(mdc-stepperconnector) {
    flex-basis: 6rem;
    flex-grow: 1;
    min-inline-size: 6rem;
  }
`;
// End AI-Assisted

export default [hostFitContentStyles, styles, adaptiveStackedStyles];
