import{v as e}from"./iframe-BStS_Y8s.js";import{useMDXComponents as o}from"./index-BBxXRc23.js";import"./preload-helper-C1FmrZbK.js";function l(i){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"overlays",children:"Overlays"}),`
`,e.jsx(n.p,{children:`There are many components in Momentum Design that create overlays. An overlay is
any element that appears on top of the main content, often blocking interaction
with the underlying content until it is dismissed.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Dialog, and extends:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Announcement dialog"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Popover, and extends:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Menu popover"}),`
`,e.jsx(n.li,{children:"Tooltip"}),`
`,e.jsx(n.li,{children:"Toggle"}),`
`,e.jsx(n.li,{children:"Coachmark"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Also, there are other components that create uses overlays, such as:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Select"}),`
`,e.jsx(n.li,{children:"Combobox"}),`
`,e.jsx(n.li,{children:"Search popover"}),`
`]}),`
`,e.jsx(n.h2,{id:"stacking-overlays",children:"Stacking overlays"}),`
`,e.jsx(n.p,{children:`Depth of the overlays is managed using a stack. When an overlay is opened, it is
added to the top of the stack. When an overlay is closed, it is removed from the
stack.`}),`
`,e.jsx(n.h3,{id:"opening-overlays",children:"Opening overlays"}),`
`,e.jsx(n.p,{children:`When an overlay is opened, it is added to the top of the stack and given focus.
If there is another overlay already open, it remains in the stack but loses
focus.`}),`
`,e.jsx(n.p,{children:`An overlay can appear only once in the stack. If an attempt is made to open an
overlay that is already in the stack, it will stay the same position in the
stack.`}),`
`,e.jsx(n.h3,{id:"closing-overlays",children:"Closing overlays"}),`
`,e.jsx(n.p,{children:`When an overlay is closed, it is removed from the stack and focus is returned to
the next overlay in the stack (if any).`}),`
`,e.jsx(n.p,{children:"There are multiple ways to close an overlay:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"press the Escape key"}),`
`,e.jsx(n.li,{children:"click outside the overlay, on the backdrop (if present)"}),`
`,e.jsx(n.li,{children:"click on a close button inside the overlay"}),`
`,e.jsxs(n.li,{children:["programmatically via the ",e.jsx(n.code,{children:"hide()"})," method"]}),`
`]}),`
`,e.jsx(n.h4,{id:"closing-with-escape-key",children:"Closing with Escape key"}),`
`,e.jsx(n.p,{children:"When the Escape key is pressed, only the topmost overlay in the stack is closed."}),`
`,e.jsx(n.h5,{id:"open-multiple-overlays-from-a-single-element",children:"Open multiple overlays from a single element"}),`
`,e.jsx(n.p,{children:`When multiple overlays are opened from a single trigger element (e.g., a button
which opens an popover, but it also has a tooltip) the opening and closing order
matters.`}),`
`,e.jsxs(n.p,{children:[`Depth manager can handle this scenario correctly but only if all "sibling"
overlays have `,e.jsx(n.code,{children:"triggerid"})," attribute with the same value."]}),`
`,e.jsx(n.p,{children:"for example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<mdc-button id="opener">Open dialog</mdc-button>
<mdc-dialog triggerid="opener">...</mdc-dialog>
<mdc-tooltip triggerid="opener">...</mdc-tooltip>
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Note: ",e.jsx(n.code,{children:"triggerid"})," attribute is needed even if the overlay manually opened."]}),`
`]}),`
`,e.jsx(n.h4,{id:"closing-multiple-overlays",children:"Closing multiple overlays"}),`
`,e.jsx(n.p,{children:`When there are multiple overlays open and not the topmost overlay is closed
(e.g., programmatically, or by clicking a close button inside a dialog with open
popover(s)), all overlays above it in the stack also closed.`}),`
`,e.jsx(n.h2,{id:"layering-components",children:"Layering components"}),`
`,e.jsxs(n.p,{children:["Overlays are layered using CSS ",e.jsx(n.code,{children:"z-index"}),` property which is calculated based on
the position of the overlay in the stack.`]}),`
`,e.jsx(n.p,{children:`Z-index is incremented by 3 for each overlay in the stack, starting from a base
value of 1000.`}),`
`,e.jsx(n.p,{children:`This allows for proper layering of overlay, backdrops, and trigger elements, for
example the first overlay in the stack will have the following z-index values:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"1000: z-index of the overlay element (e.g. popover, dialog, etc.)"}),`
`,e.jsx(n.li,{children:"999: z-index of the trigger component (if any)"}),`
`,e.jsx(n.li,{children:"998: z-index of the backdrop (if any)"}),`
`]}),`
`,e.jsx(n.p,{children:`The next overlay will have z-index values of 1003, 1002, and 1001 respectively,
and so on.`}),`
`,e.jsx(n.h3,{id:"overwriting-z-index",children:"Overwriting z-index"}),`
`,e.jsxs(n.p,{children:[`In some cases, it might be necessary to overwrite the calculated z-index of an
overlay. It can be done by setting the `,e.jsx(n.code,{children:"z-index"}),` attribute on the overlay
element.`]}),`
`,e.jsx(n.p,{children:"Backdrop and trigger elements will have their z-index adjusted accordingly."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`⚠️Setting a custom z-index might cause layering issues with other overlays in
the stack. ⚠️`}),`
`]})]})}function a(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}export{a as default};
