import{s as e}from"./iframe-DD1qd397.js";import{useMDXComponents as o}from"./index-DnkJEKFf.js";import"./preload-helper-C1FmrZbK.js";function t(s){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsxs(n.p,{children:["To install the library, add the following NPM dependency to your ",e.jsx(n.code,{children:"package.json"}),`
with the required version number:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/momentum-design/momentum-design/tree/main/packages/components",rel:"nofollow",children:e.jsx(n.strong,{children:"@momentum-design/components"})}),` -
Components Package.
`,e.jsx(n.a,{href:"https://www.npmjs.com/package/@momentum-design/components",rel:"nofollow",children:"NPMJS Package"})]}),`
`]}),`
`,e.jsx(n.p,{children:"In order to install, run the following command:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @momentum-design/components

or

yarn add @momentum-design/components
`})}),`
`,e.jsx(n.h2,{id:"checklist",children:"Checklist"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Ensure that all required stylesheets are included in your project:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import '@momentum-design/fonts/dist/css/fonts.css';
import '@momentum-design/tokens/dist/css/typography/complete.css';
import '@momentum-design/tokens/dist/css/effect/complete.css';
import '@momentum-design/tokens/dist/css/typography/complete.css';
import '@momentum-design/tokens/dist/css/theme/webex/dark-stable.css';
import '@momentum-design/tokens/dist/css/theme/webex/light-stable.css';

// in case you would like to use additional themes, use the following:
import '@momentum-design/tokens/dist/css/theme/webex/dark-bronze-stable.css';
import '@momentum-design/tokens/dist/css/theme/webex/dark-indigo-stable.css';
import '@momentum-design/tokens/dist/css/theme/webex/dark-jade-stable.css';
import '@momentum-design/tokens/dist/css/theme/webex/dark-lavender-stable.css';
import '@momentum-design/tokens/dist/css/theme/webex/dark-rose-stable.css';

import '@momentum-design/tokens/dist/css/theme/webex/light-bronze-stable.css';
import '@momentum-design/tokens/dist/css/theme/webex/light-indigo-stable.css';
import '@momentum-design/tokens/dist/css/theme/webex/light-jade-stable.css';
import '@momentum-design/tokens/dist/css/theme/webex/light-lavender-stable.css';
import '@momentum-design/tokens/dist/css/theme/webex/light-rose-stable.css';
`})}),`
`,e.jsxs(n.p,{children:["or short (",e.jsx(n.code,{children:"components/complete.css"})," includes all the above files):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// JavaScript
import '@momentum-design/fonts/dist/css/fonts.css';
import '@momentum-design/tokens/dist/css/components/complete.css';
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Set the ",e.jsx(n.code,{children:"mds-typography"})," & ",e.jsx(n.code,{children:"mds-elevation"}),` class on the root element of your
application, i.e.:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- HTML -->
<body class="mds-typography mds-elevation">
  ...
</body>
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Make sure to set ",e.jsx(n.code,{children:"-webkit-font-smoothing"})," and ",e.jsx(n.code,{children:"-moz-osx-font-smoothing"}),` on
root / body to match Figma:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* CSS */
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[`Wrap your application or component tree with the
`,e.jsx(n.a,{href:"https://momentum-design.github.io/momentum-design/storybook-static/index.html?path=/docs/components-themeprovider--docs",rel:"nofollow",children:e.jsx(n.strong,{children:"Theme Provider"})}),`
and
`,e.jsx(n.a,{href:"https://momentum-design.github.io/momentum-design/storybook-static/index.html?path=/docs/components-iconprovider--docs",rel:"nofollow",children:e.jsx(n.strong,{children:"Icon Provider"})}),`
components to ensure proper theming and icon configuration.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:`Verify that your build configuration supports file loaders for CSS and WOFF2
files.`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Test the components in different themes to ensure they render correctly."}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:[`Note: All code examples below can work with TypeScript versions lower than 4.7
by adding dist into the import path. For detailed information about each
component, refer to the
`,e.jsx(n.a,{href:"https://momentum-design.github.io/en/components/",rel:"nofollow",children:e.jsx(n.strong,{children:"individual component documentation."})})]}),`
`,e.jsx(n.h3,{id:"top-level-import",children:"Top-level Import"}),`
`,e.jsx(n.p,{children:"Import the browser bundle on the top of the app:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- HTML -->
<script src="@momentum-design/components/browser/index.js"><\/script>

...
<body class="mds-typography mds-elevation">
  <!-- Wrap your app with ThemeProvider & other asset providers as mentioned above -->
  <!-- Your app code here -->
  <mdc-avatar></mdc-avatar>
</body>
`})}),`
`,e.jsx(n.h3,{id:"component-import",children:"Component Import"}),`
`,e.jsx(n.h4,{id:"web-components",children:"Web Components"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// lower than TS 4.7:
import '@momentum-design/components/dist/components/avatar';

// TS 4.7 and above:
import '@momentum-design/components/components/avatar';

...
export class MyComponent {
  render() {
    return (
      <mdc-avatar></mdc-avatar>
    );
  }
}
`})}),`
`,e.jsx(n.h4,{id:"react",children:"React"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// lower than TS 4.7:
import { Avatar } from '@momentum-design/components/dist/react';

// TS 4.7 and above:
import { Avatar } from '@momentum-design/components/react';

export const MyComponent = () => <Avatar />;
`})})]})}function c(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{c as default};
