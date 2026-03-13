import{w as e}from"./iframe-D5_nhDxE.js";import{useMDXComponents as t}from"./index-45qhraE9.js";import"./preload-helper-C1FmrZbK.js";function i(o){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"overlays",children:"Overlays"}),`
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
`,e.jsxs(n.p,{children:[`When there are multiple overlays open and not the topmost overlay is closed
(e.g., programmatically, or by clicking a close button inside a dialog with open
popover(s)), all overlays above it `,e.jsx(n.strong,{children:"within the same stack group"}),` are also
closed. Overlays belonging to a different group remain open.`]}),`
`,e.jsx(n.h3,{id:"stack-groups",children:"Stack groups"}),`
`,e.jsxs(n.p,{children:["Overlays can be assigned to a ",e.jsx(n.strong,{children:"stack group"})," using the ",e.jsx(n.code,{children:"stack-group-name"}),`
attribute. Stack groups allow independent sets of overlays to coexist in the
same global stack without interfering with each other.`]}),`
`,e.jsxs(n.p,{children:[`In a conventional stack, removing an element also removes every element above
it. With stack groups, only the elements that belong to the `,e.jsx(n.strong,{children:"same group"}),` are
affected — elements from other groups are left untouched.`]}),`
`,e.jsx(n.h4,{id:"how-it-works",children:"How it works"}),`
`,e.jsx(n.p,{children:"When an overlay is closed (popped), the DepthManager:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`Filters the global stack to find only the elements that share the same
`,e.jsx(n.code,{children:"stack-group-name"})," as the overlay being closed."]}),`
`,e.jsx(n.li,{children:`Removes the target overlay and all same-group elements above it from the
stack.`}),`
`,e.jsx(n.li,{children:`Recalculates the z-index of the remaining elements to fill any gaps left by
the removal, ensuring continuous layering with no z-index holes.`}),`
`]}),`
`,e.jsxs(n.p,{children:["Elements that do not specify a ",e.jsx(n.code,{children:"stack-group-name"}),` (or use an empty string) are
all considered part of the `,e.jsx(n.strong,{children:"default group"})," and behave as before."]}),`
`,e.jsx(n.h4,{id:"example-dialog-with-a-warning-popover-and-a-combobox-dropdown",children:"Example: Dialog with a warning popover and a combobox dropdown"}),`
`,e.jsx(n.p,{children:`Consider a dialog that contains a combobox and a warning popover. The warning
popover is assigned to a separate group so that dismissing it does not cascade
to the combobox dropdown:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Stack (bottom → top): [ Dialog, Warning Popover, Combobox Dropdown ]
                        group: ""  group: "warning"   group: ""
`})}),`
`,e.jsx(n.p,{children:"When the warning popover is dismissed:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Only elements in the ",e.jsx(n.code,{children:'"warning"'}),` group are considered — the warning popover
is removed.`]}),`
`,e.jsxs(n.li,{children:["The dialog and combobox dropdown (both in the default group) are ",e.jsx(n.strong,{children:"not"}),`
affected and remain open.`]}),`
`,e.jsx(n.li,{children:`Z-indices are recalculated so all remaining overlays layer correctly without
gaps.`}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Stack after removal:   [ Dialog, Combobox Dropdown ]
                         group: ""  group: ""
`})}),`
`,e.jsx(n.p,{children:`Without stack groups, closing the warning popover (a middle element) would also
close the combobox dropdown above it, since it would cascade upward through the
entire stack.`}),`
`,e.jsx(n.h4,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["Set the ",e.jsx(n.code,{children:"stack-group-name"})," attribute on the overlay element:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<mdc-popover stack-group-name="warning-overlay" trigger="manual">
  ...
</mdc-popover>
`})}),`
`,e.jsxs(n.p,{children:["Overlays with the same ",e.jsx(n.code,{children:"stack-group-name"}),` value form a group. Closing any
overlay in the group cascades only within that group. Overlays without a
`,e.jsx(n.code,{children:"stack-group-name"})," (or with an empty value) belong to the default group."]}),`
`,e.jsx(n.h4,{id:"z-index-recalculation",children:"Z-index recalculation"}),`
`,e.jsxs(n.p,{children:[`When elements are removed from the middle of the stack, the remaining elements
receive a `,e.jsx(n.code,{children:"moved"}),` notification. This triggers a z-index recalculation so that
every overlay in the stack maintains continuous, gap-free layering based on its
new position.`]}),`
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
`]})]})}function l(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{l as default};
