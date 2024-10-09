import{j as n}from"./jsx-runtime-N83kn9-W.js";import{useMDXComponents as t}from"./index-g1djAheZ.js";import"./_commonjsHelpers-Cpj98o6Y.js";function o(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"consumption",children:"Consumption"}),`
`,n.jsxs(e.p,{children:["This consumption guide for the Global Web Library, ",n.jsx(e.code,{children:"@momentum-design/components"})," provides detailed instructions on how to effectively access and utilize these components in your web applications, specifically focusing on Web Components and React."]}),`
`,n.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,n.jsxs(e.p,{children:["To install the library, add the following NPM dependency to your ",n.jsx(e.code,{children:"package.json"})," with the required version number:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://github.com/momentum-design/momentum-design/tree/main/packages/components",rel:"nofollow",children:n.jsx(e.strong,{children:"@momentum-design/components"})})," - Components Package. ",n.jsx(e.a,{href:"https://www.npmjs.com/package/@momentum-design/components",rel:"nofollow",children:"NPMJS Package"})]}),`
`]}),`
`,n.jsx(e.p,{children:"In order to install, run the following command:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install @momentum-design/components
`})}),`
`,n.jsx(e.p,{children:"or"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`yarn add @momentum-design/components
`})}),`
`,n.jsx(e.h2,{id:"compatibility",children:"Compatibility"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["Webpack 4 (refer to ",n.jsx(e.a,{href:"https://lit.dev/docs/releases/upgrade/#using-lit-3-with-webpack-4",rel:"nofollow",children:n.jsx(e.strong,{children:"Best Practices"})}),")"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["TypeScript > 4.7 (refer to ",n.jsx(e.a,{href:"https://stackoverflow.com/a/70020984",rel:"nofollow",children:n.jsx(e.strong,{children:"Best Practices"})}),")"]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"prerequisites",children:"PreRequisites"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import '@momentum-design/fonts/dist/css/fonts.css';
import '@momentum-design/tokens/dist/css/typography/complete.css';
import '@momentum-design/tokens/dist/css/theme/webex/dark-stable.css';
import '@momentum-design/tokens/dist/css/theme/webex/light-stable.css';
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Your build config needs to be able to have file loaders for CSS and WOFF2."}),`
`]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsxs(e.p,{children:[`Note:
All code examples below can work with TypeScript versions lower than 4.7 by adding dist into the import path.
For detailed information about each component, refer to the `,n.jsx(e.a,{href:"https://momentum-design.github.io/momentum-design/en/components/",rel:"nofollow",children:n.jsx(e.strong,{children:"individual component documentation."})})]}),`
`,n.jsx(e.h3,{id:"top-level-import",children:"Top-level Import"}),`
`,n.jsx(e.p,{children:"Import the browser bundle on the top of the app:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// index.html

<script src="@momentum-design/components/browser/index.js"><\/script>

...

<mdc-avatar></mdc-avatar>
`})}),`
`,n.jsx(e.h3,{id:"component-import",children:"Component Import"}),`
`,n.jsx(e.h4,{id:"web-components",children:"Web Components"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import '@momentum-design/components/components/avatar';

...

<mdc-avatar></mdc-avatar>
`})}),`
`,n.jsx(e.h4,{id:"react",children:"React"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Avatar } from '@momentum-design/components/react';

...

<Avatar />
`})})]})}function l(s={}){const{wrapper:e}={...t(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(o,{...s})}):o(s)}export{l as default};
