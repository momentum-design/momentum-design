import{r as e}from"./iframe-DHOQtyml.js";import{useMDXComponents as t}from"./index-CHGxN4Mh.js";import"./preload-helper-C1FmrZbK.js";function o(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"styling",children:"Styling"}),`
`,e.jsx(n.p,{children:`This guide explains how to override the styling of Momentum Design System
components using CSS. It covers the use of CSS parts, CSS custom properties
(variables), and how to pass classes and inline styles to components and slots.`}),`
`,e.jsxs(n.h2,{id:"passing-class-and-style-to-components",children:["Passing ",e.jsx(n.code,{children:"class"})," and ",e.jsx(n.code,{children:"style"})," to Components"]}),`
`,e.jsxs(n.p,{children:["You can pass a ",e.jsx(n.code,{children:"class"})," or ",e.jsx(n.code,{children:"style"}),` attribute directly to a Momentum component.
These will be applied to the host element.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<mdc-button
  class="my-custom-class"
  style="margin: 16px; border-radius: 8px;"
></mdc-button>
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"class"})," attribute can be used for global or scoped CSS selectors."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"style"})," attribute allows for quick inline overrides."]}),`
`]}),`
`,e.jsx(n.h2,{id:"using-css-custom-properties-variables",children:"Using CSS Custom Properties (Variables)"}),`
`,e.jsxs(n.p,{children:[`Many component-specific values are exposed as
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/--*",rel:"nofollow",children:"CSS custom properties"}),` on
the component host. You can override these variables in your CSS to change the
values.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`mdc-input {
  --mdc-input-background-color: #0070d2;
  --mdc-input-text-color: #fff;
}
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Refer to the component documentation for a list of supported custom properties
(see Storybook controls).`}),`
`]}),`
`,e.jsx(n.h2,{id:"using-css-parts",children:"Using CSS Parts"}),`
`,e.jsxs(n.p,{children:[`Momentum components expose
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/::part",rel:"nofollow",children:"CSS parts"}),` for
targeting internal elements. You can style these parts from outside the
component using the `,e.jsx(n.code,{children:"::part"})," selector."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`mdc-input::part(input) {
  color: red;
  font-weight: bold;
}
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Check the component documentation for available part names (e.g., ",e.jsx(n.code,{children:"label"}),`,
`,e.jsx(n.code,{children:"icon"}),", etc.)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"styling-slotted-content",children:"Styling Slotted Content"}),`
`,e.jsx(n.p,{children:`When using slots, you can style the content you place inside a component as you
would any regular HTML element. However, to style the slot itself or its
container, use CSS parts or custom properties if exposed.`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<mdc-dialog>
  <div slot="dialog-body" class="body-dialog">Content passed to Dialog</div>
</mdc-dialog>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.body-dialog {
  font-size: 1.25rem;
  color: #333;
}
`})}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Prefer using CSS custom properties and parts for deep customization."}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"class"})," and ",e.jsx(n.code,{children:"style"})," for layout and host-level tweaks."]}),`
`,e.jsx(n.li,{children:"Always check the component documentation for available styling hooks."}),`
`,e.jsxs(n.li,{children:["Avoid using deep selectors (e.g., ",e.jsx(n.code,{children:"mdc-button > .internal-class"}),`) as they may
break with component updates or may not work at all.`]}),`
`]})]})}function i(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{i as default};
