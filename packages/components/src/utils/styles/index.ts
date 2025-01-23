import { css } from 'lit';

const hostFitContentStyles = css`
  :host {
    align-items: center;
    display: flex;
    height: fit-content;
    justify-content: center;
    width: fit-content;
  }
`;

const hostFocusRingStyles = (applyFocusRingOnClass = false) => {
  const baseHostStyleVariables = css`
    :host {
      --mdc-focus-ring-inner-color: var(--mds-color-theme-focus-default-0);
      --mdc-focus-ring-middle-color: var(--mds-color-theme-focus-default-1);
      --mdc-focus-ring-outer-color: var(--mds-color-theme-focus-default-2);

      --mdc-focus-ring-inner-width: 0.125rem;
      --mdc-focus-ring-middle-width: calc(2 * var(--mdc-focus-ring-inner-width));
      --mdc-focus-ring-outer-width: calc(0.0625rem + var(--mdc-focus-ring-middle-width));

      --mdc-focus-ring-middle-offset: var(--mdc-focus-ring-inner-width);
      --mdc-focus-ring-outer-offset: calc(var(--mdc-focus-ring-inner-width) + var(--mdc-focus-ring-middle-width));
    }
  `;
  const boxShadow = css`0 0 0 var(--mdc-focus-ring-inner-width) var(--mdc-focus-ring-inner-color),
    0 0 0 var(--mdc-focus-ring-middle-width) var(--mdc-focus-ring-middle-color),
    0 0 0 var(--mdc-focus-ring-outer-width) var(--mdc-focus-ring-outer-color)
  `;
  if (applyFocusRingOnClass) {
    return [
      baseHostStyleVariables,
      css`
        .mdc-focus-ring:focus-visible {
          outline: none;
        }
        :host([disabled]) .mdc-focus-ring:focus {
          box-shadow: none;
        }
        .mdc-focus-ring:focus-within {
          position: relative;
          box-shadow: ${boxShadow};
        }
        /* High Contrast Mode */
        @media (forced-colors: active) {
          .mdc-focus-ring:focus-within {
            outline: 0.125rem solid var(--mds-color-theme-focus-default-0);
          }
        }
      `,
    ];
  }
  return [
    baseHostStyleVariables,
    css`
      :host([disabled]:focus) {
        box-shadow: none;
      }
      :host(:focus), :host(:focus-within) {
        position: relative;
        box-shadow: ${boxShadow};
      }
      /* High Contrast Mode */
      @media (forced-colors: active) {
        :host(:focus), :host(:focus-within) {
          outline: 0.125rem solid var(--mds-color-theme-focus-default-0);
        }
      }
    `,
  ];
};

export { hostFitContentStyles, hostFocusRingStyles };
