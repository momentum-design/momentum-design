import { css, unsafeCSS } from 'lit';

const hostFitContentStyles = css`
  :host {
    align-items: center;
    display: flex;
    height: fit-content;
    justify-content: center;
    width: fit-content;
  }
`;

const hostFocusRingStyles = (className?: string) => {
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
  if (className) {
    return [
      baseHostStyleVariables,
      css`
        .${unsafeCSS(className)}:focus-visible {
          outline: none;
        }
        :host([disabled]) .${unsafeCSS(className)}:focus {
          box-shadow: none;
        }
        .${unsafeCSS(className)}:focus-within {
          position: relative;
          box-shadow: ${boxShadow};
        }
        /* High Contrast Mode */
        @media (forced-colors: active) {
          .${unsafeCSS(className)}:focus-within {
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
      :host(:focus) {
        position: relative;
        box-shadow: ${boxShadow};
      }
      /* High Contrast Mode */
      @media (forced-colors: active) {
        :host(:focus) {
          outline: 0.125rem solid var(--mds-color-theme-focus-default-0);
        }
      }
    `,
  ];
};

export { hostFitContentStyles, hostFocusRingStyles };
