import{s as r}from"./chunk-L4EGOTBX-ars-O5a7.js";import"./entry-preview-BTbO7y0k.js";import{k as o}from"./lit-element-CPYlYYac.js";import"./index-CJCxIR5U.js";import"./index-BuhVKn4m.js";import"./index-DrFu-skq.js";import"./index-CFYjfE6c.js";import"./create-context-89xeped_.js";import"./iconprovider.component-1kxMB-M8.js";const l="1.0.0",c="",m=[{kind:"javascript-module",path:"components/avatar/avatar.component.js",declarations:[{kind:"class",description:"",name:"Avatar",slots:[{description:"This is a default/unnamed slot",name:""}],members:[{kind:"field",name:"type",type:{text:"AvatarType | undefined"},attribute:"type",reflects:!0},{kind:"field",name:"alt",type:{text:"string | undefined"},attribute:"alt"},{kind:"field",name:"src",type:{text:"string | undefined"},attribute:"src"},{kind:"field",name:"scale",type:{text:"number | undefined"},description:"Scale of the avatar",attribute:"scale"},{kind:"method",name:"updateSize",privacy:"private",description:"Updates the size by setting the width and height"},{kind:"method",name:"photoTemplate"}],attributes:[{name:"type",type:{text:"AvatarType | undefined"},fieldName:"type"},{name:"alt",type:{text:"string | undefined"},fieldName:"alt"},{name:"src",type:{text:"string | undefined"},fieldName:"src"},{name:"scale",type:{text:"number | undefined"},description:"Scale of the avatar",fieldName:"scale"}],superclass:{name:"Component",module:"/src/models"},tagName:"mdc-avatar",summary:"This is MyElement",jsDoc:`/**
 * @slot - This is a default/unnamed slot
 *
 * @summary This is MyElement
 *
 * @tag mdc-avatar
 * @tagname mdc-avatar
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"Avatar",module:"components/avatar/avatar.component.js"}}]},{kind:"javascript-module",path:"components/badge/badge.component.js",declarations:[{kind:"class",description:"",name:"Badge",slots:[{description:"This is a default/unnamed slot",name:""}],members:[{kind:"field",name:"type",type:{text:"BadgeType | undefined"},description:"Type of the badge\nCan be `regular`, `icon`, `text` or `warning`\n\nDefault: `regular`",attribute:"type",reflects:!0},{kind:"field",name:"scale",type:{text:"number | undefined"},description:"Scale of the badge (works in combination with length unit)\n\nDefault: `1`",attribute:"scale"},{kind:"field",name:"lengthUnit",type:{text:"string | undefined"},description:"Length unit attribute for scale\n\nDefault: `rem`",attribute:"length-unit"},{kind:"field",name:"iconName",type:{text:"string | undefined"},description:"If `type` is set to `icon`, attribute `iconName` can\nbe used to choose which icon should be shown\n\nIf no `iconName` is provided, no icon will be rendered.",attribute:"icon-name"},{kind:"field",name:"text",type:{text:"string | undefined"},description:"If `type` is set to `text`, attribute `text` can\nbe used to pass in any text to be displayed in the badge.",attribute:"text"},{kind:"method",name:"updateSize",privacy:"private"},{kind:"method",name:"iconTemplate"},{kind:"method",name:"textTemplate"},{kind:"method",name:"warningTemplate"}],attributes:[{name:"type",type:{text:"BadgeType | undefined"},description:"Type of the badge\nCan be `regular`, `icon`, `text` or `warning`\n\nDefault: `regular`",fieldName:"type"},{name:"scale",type:{text:"number | undefined"},description:"Scale of the badge (works in combination with length unit)\n\nDefault: `1`",fieldName:"scale"},{name:"length-unit",type:{text:"string | undefined"},description:"Length unit attribute for scale\n\nDefault: `rem`",fieldName:"lengthUnit"},{name:"icon-name",type:{text:"string | undefined"},description:"If `type` is set to `icon`, attribute `iconName` can\nbe used to choose which icon should be shown\n\nIf no `iconName` is provided, no icon will be rendered.",fieldName:"iconName"},{name:"text",type:{text:"string | undefined"},description:"If `type` is set to `text`, attribute `text` can\nbe used to pass in any text to be displayed in the badge.",fieldName:"text"}],superclass:{name:"Component",module:"/src/models"},tagName:"mdc-badge",summary:"This is MyElement",jsDoc:`/**
 * @slot - This is a default/unnamed slot
 *
 * @summary This is MyElement
 *
 * @tag mdc-badge
 * @tagname mdc-badge
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"Badge",module:"components/badge/badge.component.js"}}]},{kind:"javascript-module",path:"components/icon/icon.component.js",declarations:[{kind:"class",description:"Icon component, which has to be mounted inside of a `IconProvider`\ncomponent.\n\nThe `IconProvider` component defines where icons should be consumed from (`url`).\nThis `Icon` component accepts the `name` attribute, which will be\nthe file name of the icon to be loaded from the given `url`.\n\nOnce fetched, the icon will be mounted. If fetching wasn't successful,\nnothing will be shown.\n\nThe `scale` attribute allows scaling the icon based on the provided\n`length-unit` attribute (which will either come from the IconProvider or\ncould be overridden per icon). For example:\nif `scale = 1` and `length-unit = 'em'`, the size of the icon will be\n`width: 1em; height: 1em`.\n\nFor accessibility the `role` and `aria-label` of the icon can be set.",name:"Icon",members:[{kind:"field",name:"iconData",type:{text:"HTMLElement | undefined"},privacy:"private"},{kind:"field",name:"lengthUnitFromContext",type:{text:"string | undefined"},privacy:"private"},{kind:"field",name:"name",type:{text:"string | undefined"},description:"Name of the icon (= filename)",attribute:"name",reflects:!0},{kind:"field",name:"scale",type:{text:"number | undefined"},description:"Scale of the icon (works in combination with length unit)",attribute:"scale"},{kind:"field",name:"lengthUnit",type:{text:"string | undefined"},description:"Length unit attribute for overridding length-unit from `IconProvider`",attribute:"length-unit"},{kind:"field",name:"role",type:{text:"string | null"},default:"null",description:"Role attribute to be set for accessibility",attribute:"role"},{kind:"field",name:"ariaLabel",type:{text:"string | null"},default:"null",description:"Aria-label attribute to be set for accessibility",attribute:"aria-label"},{kind:"field",name:"iconProviderContext",privacy:"private"},{kind:"method",name:"getIconData",privacy:"private",description:`Get Icon Data function which will fetch the icon (currently only svg)
and sets state and attributes once fetched successfully`},{kind:"method",name:"updateSize",privacy:"private",description:"Updates the size by setting the width and height"},{kind:"method",name:"setRoleOnIcon",privacy:"private"},{kind:"method",name:"setAriaLabelOnIcon",privacy:"private"}],attributes:[{name:"name",type:{text:"string | undefined"},description:"Name of the icon (= filename)",fieldName:"name"},{name:"scale",type:{text:"number | undefined"},description:"Scale of the icon (works in combination with length unit)",fieldName:"scale"},{name:"length-unit",type:{text:"string | undefined"},description:"Length unit attribute for overridding length-unit from `IconProvider`",fieldName:"lengthUnit"},{name:"role",type:{text:"string | null"},default:"null",description:"Role attribute to be set for accessibility",fieldName:"role"},{name:"aria-label",type:{text:"string | null"},default:"null",description:"Aria-label attribute to be set for accessibility",fieldName:"ariaLabel"}],superclass:{name:"Component",module:"/src/models"},tagName:"mdc-icon",jsDoc:"/**\n * Icon component, which has to be mounted inside of a `IconProvider`\n * component.\n *\n * The `IconProvider` component defines where icons should be consumed from (`url`).\n * This `Icon` component accepts the `name` attribute, which will be\n * the file name of the icon to be loaded from the given `url`.\n *\n * Once fetched, the icon will be mounted. If fetching wasn't successful,\n * nothing will be shown.\n *\n * The `scale` attribute allows scaling the icon based on the provided\n * `length-unit` attribute (which will either come from the IconProvider or\n * could be overridden per icon). For example:\n * if `scale = 1` and `length-unit = 'em'`, the size of the icon will be\n * `width: 1em; height: 1em`.\n *\n * For accessibility the `role` and `aria-label` of the icon can be set.\n *\n * @tag mdc-icon\n * @tagname mdc-icon\n */",customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"Icon",module:"components/icon/icon.component.js"}}]},{kind:"javascript-module",path:"components/iconprovider/iconprovider.component.js",declarations:[{kind:"class",description:`IconProvider component, which allows to be consumed from sub components
(see \`providerUtils.consume\` for how to consume)

Bundling icons will be up to the consumer of this component, such
that only a url has to be passed in from which the icons will be
fetched.`,name:"IconProvider",members:[{kind:"field",name:"Context",privacy:"public",static:!0,readonly:!0},{kind:"field",name:"url",type:{text:"string | undefined"},description:"Url of where icons will be fetched from",attribute:"url"},{kind:"field",name:"fileExtension",type:{text:"string | undefined"},description:"File extension of icons, default: 'svg'",attribute:"file-extension",reflects:!0},{kind:"field",name:"lengthUnit",type:{text:"string | undefined"},description:"Length unit used for sizing of icons, default: 'em'",attribute:"length-unit",reflects:!0},{kind:"method",name:"updateValuesInContext",privacy:"private"},{kind:"method",name:"updateContext",privacy:"protected",return:{type:{text:"void"}}}],attributes:[{name:"url",type:{text:"string | undefined"},description:"Url of where icons will be fetched from",fieldName:"url"},{name:"file-extension",type:{text:"string | undefined"},description:"File extension of icons, default: 'svg'",fieldName:"fileExtension"},{name:"length-unit",type:{text:"string | undefined"},description:"Length unit used for sizing of icons, default: 'em'",fieldName:"lengthUnit"}],superclass:{name:"Provider",module:"/src/models"},tagName:"mdc-iconprovider",jsDoc:`/**
 * IconProvider component, which allows to be consumed from sub components
 * (see \`providerUtils.consume\` for how to consume)
 *
 * Bundling icons will be up to the consumer of this component, such
 * that only a url has to be passed in from which the icons will be
 * fetched.
 *
 * @tag mdc-iconprovider
 * @tagname mdc-iconprovider
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"IconProvider",module:"components/iconprovider/iconprovider.component.js"}}]},{kind:"javascript-module",path:"components/text/text.component.js",declarations:[{kind:"class",description:'Text component, which helps creating a text element aligning with\nstyling.\n\nThe `type` attribute allows changing the type of text, like `heading-1`, etc.\n\nFor accessibility the `role` and `aria-level` on the component are going to be set\nautomatically based on the type e.g. heading-1 will lead to `role="heading"` and `aria-level=1`.',name:"Text",members:[{kind:"field",name:"type",type:{text:"FontType | undefined"},privacy:"public",description:"Text Type - defines how the text should be rendered\n\nPossible values: `heading-1` | `heading-2` | `heading-3` | `heading-4`\n| `heading-5` | `heading-6` | `heading-7` | `body-large` | `body-regular`\n| `body-small` | `image-title` | `label`;",attribute:"type",reflects:!0},{kind:"method",name:"handleTypeChanged",privacy:"protected",return:{type:{text:"void"}}}],attributes:[{name:"type",type:{text:"FontType | undefined"},description:"Text Type - defines how the text should be rendered\n\nPossible values: `heading-1` | `heading-2` | `heading-3` | `heading-4`\n| `heading-5` | `heading-6` | `heading-7` | `body-large` | `body-regular`\n| `body-small` | `image-title` | `label`;",fieldName:"type"}],superclass:{name:"Component",module:"/src/models"},tagName:"mdc-text",jsDoc:'/**\n * Text component, which helps creating a text element aligning with\n * styling.\n *\n * The `type` attribute allows changing the type of text, like `heading-1`, etc.\n *\n * For accessibility the `role` and `aria-level` on the component are going to be set\n * automatically based on the type e.g. heading-1 will lead to `role="heading"` and `aria-level=1`.\n *\n * @tag mdc-text\n * @tagname mdc-text\n */',customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"Text",module:"components/text/text.component.js"}}]},{kind:"javascript-module",path:"components/themeprovider/themeprovider.component.js",declarations:[{kind:"class",description:`ThemeProvider component, which sets the theme css variables
for the child dom nodes and allows to be consumed from sub components
(see providerUtils.consume for how to consume)

ThemeProvider also includes the different font faces available
for Text components.`,name:"ThemeProvider",members:[{kind:"field",name:"Context",privacy:"public",static:!0,readonly:!0},{kind:"field",name:"themes",type:{text:"string"},description:`Available themes to switch to

Has to be a space separated string, like className
e.g.: \`mds-theme-stable-darkWebex mds-theme-stable-lightWebex\``,attribute:"themes"},{kind:"field",name:"theme",type:{text:"Theme"},description:`Current theme attribute

Has to be fully qualified, such that
the theme name matches the className of the respective
theme stylesheet`,attribute:"theme"},{kind:"method",name:"updateContext",privacy:"protected",return:{type:{text:"void"}},description:`Update all observing components of this
provider to update the theme`},{kind:"method",name:"updateActiveThemeClass",privacy:"private",description:`Function to update the active theme classname to update the theme tokens
as CSS variables on the web component.`}],attributes:[{name:"themes",type:{text:"string"},description:`Available themes to switch to

Has to be a space separated string, like className
e.g.: \`mds-theme-stable-darkWebex mds-theme-stable-lightWebex\``,fieldName:"themes"},{name:"theme",type:{text:"Theme"},description:`Current theme attribute

Has to be fully qualified, such that
the theme name matches the className of the respective
theme stylesheet`,fieldName:"theme"}],superclass:{name:"Provider",module:"/src/models"},tagName:"mdc-themeprovider",jsDoc:`/**
 * ThemeProvider component, which sets the theme css variables
 * for the child dom nodes and allows to be consumed from sub components
 * (see providerUtils.consume for how to consume)
 *
 * ThemeProvider also includes the different font faces available
 * for Text components.
 *
 * @tag mdc-themeprovider
 * @tagname mdc-themeprovider
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"ThemeProvider",module:"components/themeprovider/themeprovider.component.js"}}]}],h={schemaVersion:l,readme:c,modules:m},n=[{name:"mds-theme-stable-darkWebex",displayName:"darkWebex",backgroundColor:"#000000",className:"dark"},{name:"mds-theme-stable-lightWebex",displayName:"lightWebex",backgroundColor:"#ffffff",className:"light"}],p=e=>{for(const t of n)e.classList.remove(t.className)},u=(e,t)=>{e.classList.add(t)},f=(e,t)=>{const s=t.globals.theme,i=n.find(d=>d.displayName===s),a=document.querySelector("body.sb-show-main");return p(a),u(a,i.className),o`<mdc-themeprovider
    id="theme-provider"
    theme="${i.name}"
    themes="mds-theme-stable-darkWebex mds-theme-stable-lightWebex"
  >
    ${e()}
  </mdc-themeprovider>`},b=e=>o`<mdc-iconprovider
        url="./icons/svg"
      >
        ${e()}
      </mdc-iconprovider>`;r(h);const j={parameters:{a11y:{options:{runOnly:{type:"tag",values:["best-practice","wcag2a","wcag2aa","wcag21aa","wcag22aa"]}}},backgrounds:{disable:!0,grid:{disable:!0}},actions:{argTypesRegex:"^on[A-Z].*"},controls:{controls:{expanded:!0},matchers:{color:/(background|color)$/i,date:/Date$/}},options:{storySort:{order:["Components","Work In Progress"]}}},decorators:[f,b],globalTypes:{theme:{description:"Global theme for components",defaultValue:n[0].displayName,toolbar:{title:"Theme",icon:"globe",items:n.map(e=>e.displayName),dynamicTitle:!0}}}};export{j as default};
