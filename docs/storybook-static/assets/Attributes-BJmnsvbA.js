import{r as e}from"./iframe-J50dDciQ.js";import{useMDXComponents as l}from"./index-CZiAaEMl.js";import"./preload-helper-C1FmrZbK.js";function i(s){const n={a:"a",br:"br",code:"code",h1:"h1",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"common-attributes",children:"Common Attributes"}),`
`,e.jsx(n.p,{children:`This guide summarizes the common attributes supported across a variety of
components.`}),`
`,e.jsxs(n.h3,{id:"readonly-vs-disabled-vs-soft-disabled",children:[e.jsx(n.code,{children:"readonly"})," vs ",e.jsx(n.code,{children:"disabled"})," vs ",e.jsx(n.code,{children:"soft-disabled"})]}),`
`,e.jsxs(n.p,{children:["Three state attributes provide different levels of interactivity, accessibility, and intent.",e.jsx(n.br,{}),`
`,"Use the following to choose the right one:"]}),`
`,e.jsx(n.h4,{id:"readonly",children:e.jsx(n.code,{children:"readonly"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focusable"}),": ✅ Yes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Visual styles"}),": Normal appearance (not dimmed)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Interactions"}),": Content is visible but cannot be edited. Users can still focus the field."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Screen Reader"}),": Fully accessible"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Use when"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Displaying pre-filled data the user cannot change (e.g., system IDs)."}),`
`,e.jsx(n.li,{children:"Locking fields temporarily while keeping their values visible."}),`
`,e.jsx(n.li,{children:"Users need to focus the field to copy its value but not modify it."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h4,{id:"disabled",children:e.jsx(n.code,{children:"disabled"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focusable"}),": ❌ No"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Visual styles"}),": Dimmed/grayed out"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Interactions"}),": No interaction at all (not focusable, not editable, not selectable)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Screen Reader"}),': Accessible but announced as "dimmed"']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Use when"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The input or action is not applicable in the current context."}),`
`,e.jsx(n.li,{children:"You want to remove it from keyboard and screen reader navigation."}),`
`,e.jsx(n.li,{children:"Example: A “Submit” button before required fields are completed."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h4,{id:"soft-disabled",children:e.jsx(n.code,{children:"soft-disabled"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focusable"}),": ✅ Yes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Visual styles"}),": Dimmed/grayed out"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Interactions"}),": Focusable, but editing is blocked. Can display a tooltip or helper text to explain why."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Screen Reader"}),": Fully accessible"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Use when"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Input/action is temporarily unavailable but still important to discover."}),`
`,e.jsx(n.li,{children:"Users need to understand why the field is unavailable (e.g., “Upgrade plan to enable”)."}),`
`,e.jsx(n.li,{children:"You want users to know the control exists and could become available later."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h4,{id:"design-guidance",children:"Design Guidance"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.strong,{children:"readonly"})," for locked values the user must see or copy."]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.strong,{children:"disabled"})," to completely remove a control from the interaction flow."]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.strong,{children:"soft-disabled"})," when discoverability and explanation are important."]}),`
`,e.jsxs(n.li,{children:["Always provide context (tooltip or helper text) for ",e.jsx(n.strong,{children:"soft-disabled"})," states."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"auto-focus-on-mount-attribute",children:[e.jsx(n.code,{children:"auto-focus-on-mount"})," Attribute"]}),`
`,e.jsxs(n.p,{children:["This attribute is a replacement for the native ",e.jsx(n.code,{children:"autofocus"}),` attribute and should
be used instead.`,e.jsx("br",{}),` When present, it makes the component automatically focus
when it is mounted. This attribute will focus the element regardless if the
focus is already on the page or not.`]}),`
`,e.jsxs(n.p,{children:["The same accessibility concerns for ",e.jsx(n.code,{children:"autofocus"})," apply to this attribute as well."]}),`
`,e.jsxs(n.p,{children:[e.jsx("br",{})," See MDN: ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/autofocus#accessibility_concerns",rel:"nofollow",children:`Accessibility concerns for
autofocus`}),"."]})]})}function d(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{d as default};
