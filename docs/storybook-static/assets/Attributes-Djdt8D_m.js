import{j as e}from"./iframe-B6w-V3Sx.js";import{useMDXComponents as t}from"./index-BoSaSgaK.js";import"./preload-helper-C1FmrZbK.js";function i(n){const s={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{id:"common-attributes",children:"Common Attributes"}),`
`,e.jsx(s.p,{children:`This guide summarizes the common attributes supported across a variety of
components.`}),`
`,e.jsxs(s.h3,{id:"readonly-vs-disabled-vs-soft-disabled",children:[e.jsx(s.code,{children:"readonly"})," vs ",e.jsx(s.code,{children:"disabled"})," vs ",e.jsx(s.code,{children:"soft-disabled"})]}),`
`,e.jsx(s.p,{children:"Three state attributes provide different levels of interactivity and accessibility."}),`
`,e.jsx(s.h4,{id:"readonly",children:e.jsx(s.code,{children:"readonly"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Focusable"}),": ✅ Yes"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Visual styles"}),": Normal appearance (not dimmed)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Interactions"}),": Cannot edit content. Focusing is possible."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Screen Reader"}),": Fully accessible"]}),`
`]}),`
`,e.jsx(s.h4,{id:"disabled",children:e.jsx(s.code,{children:"disabled"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Focusable"}),": ❌ No"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Visual styles"}),": Dimmed/grayed out"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Interactions"}),": No interactions are possible."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Screen Reader"}),': Accessible but announced as "dimmed"']}),`
`]}),`
`,e.jsx(s.h4,{id:"soft-disabled",children:e.jsx(s.code,{children:"soft-disabled"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Focusable"}),": ✅ Yes"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Visual styles"}),": Dimmed/grayed out"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Interactions"}),": Focusing is available, rest of the interactions are not possible."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Screen Reader"}),": Fully accessible"]}),`
`]}),`
`,e.jsxs(s.h3,{id:"auto-focus-on-mount-attribute",children:[e.jsx(s.code,{children:"auto-focus-on-mount"})," Attribute"]}),`
`,e.jsxs(s.p,{children:["This attribute is a replacement for the native ",e.jsx(s.code,{children:"autofocus"}),` attribute and should
be used instead.`,e.jsx("br",{}),` When present, it makes the component automatically focus
when it is mounted. This attribute will focus the element regardless if the
focus is already on the page or not.`]}),`
`,e.jsxs(s.p,{children:["The same accessibility concerns for ",e.jsx(s.code,{children:"autofocus"})," apply to this attribute as well."]}),`
`,e.jsxs(s.p,{children:[e.jsx("br",{})," See MDN: ",e.jsx(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/autofocus#accessibility_concerns",rel:"nofollow",children:`Accessibility concerns for
autofocus`}),"."]})]})}function c(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{c as default};
