import{i as o}from"./iframe-KY1Pl7Qi.js";const n=o`
  :host {
    align-items: center;
    display: flex;
    height: fit-content;
    justify-content: center;
    width: fit-content;
  }
`,c=o`
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
`,e=o`0 0 0 var(--mdc-focus-ring-inner-width) var(--mdc-focus-ring-inner-color),
    0 0 0 var(--mdc-focus-ring-middle-width) var(--mdc-focus-ring-middle-color),
    0 0 0 var(--mdc-focus-ring-outer-width) var(--mdc-focus-ring-outer-color)
  `,r=(i=!1)=>i?[c,o`
        .mdc-focus-ring:focus-visible {
          outline: none;
        }
        :host([disabled]) .mdc-focus-ring:focus {
          box-shadow: none;
        }
        /* Add focus ring to parent when child is focused. The parent element must have class name mdc-focus-ring */
        .mdc-focus-ring:focus-within {
          position: relative;
          box-shadow: ${e};
        }
        /* Remove focus ring from parent when children has its own focus ring.
            The child element must have class name own-focus-ring */
        .mdc-focus-ring:has(.own-focus-ring:focus-visible) {
          box-shadow: none;
        }

        /* High Contrast Mode */
        @media (forced-colors: active) {
          .mdc-focus-ring:focus-within {
            outline: 0.125rem solid var(--mds-color-theme-focus-default-0);
          }
        }
      `]:[c,o`
      :host([disabled]:focus) {
        box-shadow: none;
      }
      :host(:focus-visible) {
        outline: none;
        position: relative;
        box-shadow: ${e};
      }
      /* High Contrast Mode */
      @media (forced-colors: active) {
        :host(:focus-visible) {
          outline: 0.125rem solid var(--mds-color-theme-focus-default-0);
        }
      }
    `];export{r as a,c as b,e as f,n as h};
