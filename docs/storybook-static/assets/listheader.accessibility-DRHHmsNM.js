import{j as e}from"./jsx-runtime-N83kn9-W.js";import{useMDXComponents as s}from"./index-g1djAheZ.js";import{ae as i}from"./index-CaVFw3pw.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DqLWW5Nb.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-Cef7vbu6.js";import"./index-DrFu-skq.js";const{deprecate:r}=__STORYBOOK_MODULE_CLIENT_LOGGER__;r("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.");function o(n){const t={code:"code",h2:"h2",p:"p",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Components/listheader/Accessibility"}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"mdc-listheader"}),` component is designed to be used within lists and menus,
providing a header that can help organize content.`]}),`
`,e.jsxs(t.p,{children:[`Except the passed in slot content (where interactive content like buttons etc
can be passed in), everything else will be hidden from screen readers (using
`,e.jsx(t.code,{children:"aria-hidden"}),`) to make sure the header can be used within lists, groups and
menus without interfering.`]})]})}function b(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{b as default};
