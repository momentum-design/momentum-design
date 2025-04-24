import{j as o}from"./jsx-runtime-N83kn9-W.js";import{useMDXComponents as e}from"./index-g1djAheZ.js";import{ae as n,af as s,ag as m,ah as p}from"./index-hrhFx1QU.js";import a from"./subcomponent-focusring.stories-mNBogn5E.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-CHHmOJF7.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-Cef7vbu6.js";import"./index-DrFu-skq.js";import"./lit-element-D5KKan5q.js";import"./utils-CO8B6ZcN.js";import"./index-BYdGIfq7.js";import"./index-C9z9WAEj.js";import"./state-CSSggq2n.js";import"./buttonsimple.component-9hW3yvQZ.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-MA1r3zrt.js";import"./button.constants-Bfip8hYE.js";import"./button.utils-rNW36Ji7.js";import"./index-Crtz8Lf5.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./index-GYtxVm9X.js";import"./if-defined-D5BV9-c0.js";import"./index-B5npvane.js";import"./IconNameMixin-CujGSn0t.js";import"./index-DjojG2S8.js";import"./text.constants-ZF0jM5wn.js";import"./index-D3DhXfcW.js";import"./index-DiQwCYWV.js";import"./index-aWT1Xk0s.js";import"./class-map-BcCVsMyu.js";import"./directive-Ctav8iJK.js";import"./index-CY64wDHN.js";import"./index-q05lRx-F.js";import"./input.component-hWDOJU7M.js";import"./index-CQ2mO-Sg.js";import"./formfieldwrapper.component-DNKMXI01.js";import"./input.constants-C-3dG_Rx.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./FormInternalsMixin-CSixOKbK.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./v4-CmTdKEVZ.js";import"./index-C339unsw.js";import"./index-BQHpR8ua.js";import"./index-BhZjTNR-.js";import"./index-CIUCAf-K.js";import"./index-BXRtKu4z.js";function r(i){const t={blockquote:"blockquote",code:"code",p:"p",strong:"strong",...e(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:a}),`
`,o.jsx(s,{children:"Focus Ring"}),`
`,o.jsx(t.p,{children:o.jsx(t.strong,{children:"The Focus Ring provides a visual indication of focus for users navigating via keyboard or mouse."})}),`
`,o.jsx(t.p,{children:`When the shared styles of the Focus Ring are applied to a component,
that component in its focus state will automatically have the focus ring wrap
around every form (like rounded corners, edges, etc.) without increasing its overall size.`}),`
`,o.jsxs(t.blockquote,{children:[`
`,o.jsxs(t.p,{children:[o.jsx(t.strong,{children:"Note:"}),`
Currently, the Focus Ring is not exported as part of our Global Web Library.
However, once there is an accessible component that requires the Focus Ring
in its focus state (triggered by tab or click), the focus ring will wrap around that web component.`]}),`
`]}),`
`,o.jsxs(t.p,{children:[o.jsx(t.strong,{children:"IMPORTANT:"})," The Focus Ring is following the HTML standards by using ",o.jsx(t.code,{children:"focus-visible"}),`, which will make the visible FocusRing appear around the button
for example only when tabbing to it, not when clicking (`,o.jsx(t.code,{children:"document.activeElement"}),` will be the button in both cases).
This is the standard HTML behavior and is accessibility compliant.`]}),`
`,o.jsx(m,{}),`
`,o.jsx(p,{})]})}function po(i={}){const{wrapper:t}={...e(),...i.components};return t?o.jsx(t,{...i,children:o.jsx(r,{...i})}):r(i)}export{po as default};
