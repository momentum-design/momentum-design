import{s as l}from"./chunk-L4EGOTBX-ars-O5a7.js";import"./entry-preview-BTbO7y0k.js";import{k as d}from"./lit-element-CPYlYYac.js";import"./index-DZhShGSj.js";import"./index-xE1mO55Y.js";import"./index-DrFu-skq.js";import"./index-BLShQaRP.js";import"./state-I_twzcUk.js";import"./create-context-89xeped_.js";import"./iconprovider.component-DlI5gUhJ.js";const c="1.0.0",m="",h=[{kind:"javascript-module",path:"components/avatar/avatar.component.js",declarations:[{kind:"class",description:"",name:"Avatar",slots:[{description:"This is a default/unnamed slot",name:""}],members:[{kind:"field",name:"type",type:{text:"AvatarType | undefined"},attribute:"type",reflects:!0},{kind:"field",name:"alt",type:{text:"string | undefined"},attribute:"alt"},{kind:"field",name:"src",type:{text:"string | undefined"},attribute:"src"},{kind:"field",name:"size",type:{text:"number | undefined"},description:"Scale of the avatar",attribute:"size"},{kind:"method",name:"updateSize",privacy:"private",description:"Updates the size by setting the width and height"},{kind:"method",name:"photoTemplate"}],attributes:[{name:"type",type:{text:"AvatarType | undefined"},fieldName:"type"},{name:"alt",type:{text:"string | undefined"},fieldName:"alt"},{name:"src",type:{text:"string | undefined"},fieldName:"src"},{name:"size",type:{text:"number | undefined"},description:"Scale of the avatar",fieldName:"size"}],superclass:{name:"Component",module:"/src/models"},tagName:"mdc-avatar",summary:"This is MyElement",jsDoc:`/**
 * @slot - This is a default/unnamed slot
 *
 * @summary This is MyElement
 *
 * @tagname mdc-avatar
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"Avatar",module:"components/avatar/avatar.component.js"}}]},{kind:"javascript-module",path:"components/badge/badge.component.js",declarations:[{kind:"class",description:"The `mdc-badge` component is a versatile UI element used to\ndisplay dot, icons, counters, success, warning and error type badge.\n\nSupported badge types:\n- `dot`: Displays a dot notification badge with a blue color.\n- `icon`: Displays a badge with a specified icon using the `icon-name` attribute.\n- `counter`: Displays a badge with a counter value. If the counter exceeds the `max-counter`,\nit shows `maxCounter+`. The maximum value of the counter is 999 and anything about that will be set to `999+`.\n- `success`: Displays a success badge with a check circle icon and green color.\n- `warning`: Displays a warning badge with a warning icon and yellow color.\n- `error`: Displays a error badge with a error legacy icon and red color.\n\nFor `icon`, `success`, `warning` and `error` types, the `mdc-icon` component is used to render the icon.\n\nFor the `counter` type, the `mdc-text` component is used to render the counter value.",name:"Badge",members:[{kind:"field",name:"type",type:{text:"string | undefined"},description:"Type of the badge\nCan be `dot` (notification) , `icon`, `counter`, `success`, `warning` or `error`.",attribute:"type",reflects:!0},{kind:"field",name:"iconName",type:{text:"string | undefined"},description:"Name of the icon (= filename).\n\nIf no `icon-name` is provided, no icon will be rendered.",attribute:"icon-name"},{kind:"field",name:"variant",description:"Type of the variant can be `primary` or `secondary`.\nIt defines the background and foreground color of the icon.",attribute:"variant",reflects:!0},{kind:"field",name:"counter",type:{text:"number | undefined"},description:"Counter is the number which can be provided in the badge.",attribute:"counter"},{kind:"field",name:"maxCounter",type:{text:"number"},description:"The maximum number can be set up to 999, anything about that will be rendered as _999+_.\nThe max counter can be `9`, `99` or `999`.",attribute:"max-counter",reflects:!0},{kind:"field",name:"overlay",type:{text:"boolean"},default:"false",description:`Overlay is to add a thin outline to the badge.
This will help distinguish between the badge and the button,
where the badge will be layered on top of a button.`,attribute:"overlay"},{kind:"field",name:"ariaLabel",type:{text:"string | null"},default:"null",description:"Aria-label attribute to be set for accessibility",attribute:"aria-label"},{kind:"method",name:"getCounterText",privacy:"private",return:{type:{text:""}},parameters:[{name:"maxCounter",type:{text:"number"},description:"the maximum limit which can be displayed on the badge"},{name:"counter",optional:!0,type:{text:"number"},description:"the number to be displayed on the badge"}],description:"If `type` is set to `counter` and if `counter` is greater than `maxCounter`,\nthen it will return a string the maxCounter value as string.\nOtherwise, it will return a string representation of `counter`.\nIf `counter` is not a number, it will return an empty string."},{kind:"method",name:"getBadgeIcon",privacy:"private",return:{type:{text:""}},parameters:[{name:"iconName",type:{text:"string"},description:"the name of the icon from the icon set"},{name:"overlay",type:{text:"boolean"},description:"boolean indicating whether the badge should have an overlay."},{name:"iconVariant",type:{text:"string"},description:"the variant of the icon badge."},{name:"type",optional:!0,type:{text:"string"},description:"the type of the badge."}],description:"Method to generate the badge icon."},{kind:"method",name:"getBadgeDot",privacy:"private",return:{type:{text:""}},parameters:[{name:"overlay",type:{text:"boolean"},description:"boolean indicating whether the badge should have an overlay."}],description:"Method to generate the badge dot template."},{kind:"method",name:"getIconClasses",privacy:"private",return:{type:{text:""}},parameters:[{name:"overlay",type:{text:"boolean"},description:"boolean indicating whether the badge should have an overlay."},{name:"iconVariant",type:{text:"string"},description:"the variant of the icon badge."},{name:"type",optional:!0,type:{text:"string"},description:"the type of the badge."}],description:"This method generates the CSS classes for the badge icon."},{kind:"method",name:"getBadgeCounterText",privacy:"private",return:{type:{text:""}},parameters:[{name:"maxCounter",type:{text:"number"},description:"the maximum limit which can be displayed on the badge"},{name:"overlay",type:{text:"boolean"},description:"whether the badge should have an overlay."},{name:"counter",optional:!0,type:{text:"number"},description:"the number to be displayed on the badge"}],description:"Method to generate the badge text and counter template."},{kind:"method",name:"setRoleByAriaLabel",privacy:"private",return:{type:{text:"void"}},description:`Method to set the role based on the aria-label provided.
If the aria-label is provided, the role of the element will be 'img'.
Otherwise, the role will be null.`},{kind:"method",name:"getBadgeContentBasedOnType",privacy:"private",return:{type:{text:""}},description:`Generates the badge content based on the badge type.
Utilizes various helper methods to create the appropriate badge template based on the
current badge type. Supports 'dot', 'icon', 'counter', 'success', 'warning', and 'error'
types, returning the corresponding template result for each type.`}],attributes:[{name:"type",type:{text:"string | undefined"},description:"Type of the badge\nCan be `dot` (notification) , `icon`, `counter`, `success`, `warning` or `error`.",fieldName:"type"},{name:"icon-name",type:{text:"string | undefined"},description:"Name of the icon (= filename).\n\nIf no `icon-name` is provided, no icon will be rendered.",fieldName:"iconName"},{name:"variant",description:"Type of the variant can be `primary` or `secondary`.\nIt defines the background and foreground color of the icon.",fieldName:"variant"},{name:"counter",type:{text:"number | undefined"},description:"Counter is the number which can be provided in the badge.",fieldName:"counter"},{name:"max-counter",type:{text:"number"},description:"The maximum number can be set up to 999, anything about that will be rendered as _999+_.\nThe max counter can be `9`, `99` or `999`.",fieldName:"maxCounter"},{name:"overlay",type:{text:"boolean"},default:"false",description:`Overlay is to add a thin outline to the badge.
This will help distinguish between the badge and the button,
where the badge will be layered on top of a button.`,fieldName:"overlay"},{name:"aria-label",type:{text:"string | null"},default:"null",description:"Aria-label attribute to be set for accessibility",fieldName:"ariaLabel"}],superclass:{name:"Component",module:"/src/models"},tagName:"mdc-badge",jsDoc:"/**\n * The `mdc-badge` component is a versatile UI element used to\n * display dot, icons, counters, success, warning and error type badge.\n *\n * Supported badge types:\n * - `dot`: Displays a dot notification badge with a blue color.\n * - `icon`: Displays a badge with a specified icon using the `icon-name` attribute.\n * - `counter`: Displays a badge with a counter value. If the counter exceeds the `max-counter`,\n * it shows `maxCounter+`. The maximum value of the counter is 999 and anything about that will be set to `999+`.\n * - `success`: Displays a success badge with a check circle icon and green color.\n * - `warning`: Displays a warning badge with a warning icon and yellow color.\n * - `error`: Displays a error badge with a error legacy icon and red color.\n *\n * For `icon`, `success`, `warning` and `error` types, the `mdc-icon` component is used to render the icon.\n *\n * For the `counter` type, the `mdc-text` component is used to render the counter value.\n *\n * @dependency mdc-icon\n * @dependency mdc-text\n *\n * @tagname mdc-badge\n */",customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"Badge",module:"components/badge/badge.component.js"}}]},{kind:"javascript-module",path:"components/icon/icon.component.js",declarations:[{kind:"class",description:`Icon component that dynamically displays SVG icons based on a valid name.

This component must be mounted within an \`IconProvider\` component.

The \`IconProvider\` defines the source URL from which icons are consumed.
The \`Icon\` component accepts a \`name\` attribute, which corresponds to
the file name of the icon to be loaded from the specified URL.

Once fetched, the icon will be rendered. If the fetching process is unsuccessful,
no icon will be displayed.

The \`size\` attribute allows for dynamic sizing of the icon based on the provided
\`length-unit\` attribute. This unit can either come from the \`IconProvider\`
or can be overridden for each individual icon. For example:
if \`size = 1\` and \`length-unit = 'em'\`, the dimensions of the icon will be
\`width: 1em; height: 1em\`.

Regarding accessibility, there are two types of icons: decorative and informative.

### Decorative Icons
- Decorative icons do not convey any essential information to the content of a page.
- They should be hidden from screen readers (SR) to prevent confusion for users.
- For decorative icons, an \`aria-label\` is not required, and the \`role\` will be set to null.

### Informative Icons
- Informative icons convey important information that is not adequately represented
  by surrounding text or components.
- They provide valuable context and must be announced by assistive technologies.
- For informative icons, an \`aria-label\` is required, and the \`role\` will be set to "img".
- If an \`aria-label\` is provided, the role will be set to 'img'; if it is absent,
  the role will be unset.`,name:"Icon",cssProperties:[{description:"Allows customization of the default fill color.",name:"--mdc-icon-fill-color"}],members:[{kind:"field",name:"iconData",type:{text:"HTMLElement | undefined"},privacy:"private"},{kind:"field",name:"lengthUnitFromContext",type:{text:"string | undefined"},privacy:"private"},{kind:"field",name:"sizeFromContext",type:{text:"number | undefined"},privacy:"private"},{kind:"field",name:"name",type:{text:"string | undefined"},description:"Name of the icon (= filename)",attribute:"name",reflects:!0},{kind:"field",name:"size",type:{text:"number | undefined"},description:"Size of the icon (works in combination with length unit)",attribute:"size"},{kind:"field",name:"lengthUnit",type:{text:"string | undefined"},description:"Length unit attribute for overriding length-unit from `IconProvider`",attribute:"length-unit"},{kind:"field",name:"ariaLabel",type:{text:"string | null"},default:"null",description:"Aria-label attribute to be set for accessibility",attribute:"aria-label"},{kind:"field",name:"iconProviderContext",privacy:"private",readonly:!0},{kind:"method",name:"getIconData",privacy:"private",description:`Get Icon Data function which will fetch the icon (currently only svg)
and sets state and attributes once fetched successfully`},{kind:"method",name:"updateSize",privacy:"private",description:"Updates the size by setting the width and height"},{kind:"method",name:"setRoleOnIcon",privacy:"private"},{kind:"method",name:"setAriaHiddenOnIcon",privacy:"private"},{kind:"method",name:"setAriaLabelOnIcon",privacy:"private"},{kind:"field",name:"computedIconSize",privacy:"private",readonly:!0}],attributes:[{name:"name",type:{text:"string | undefined"},description:"Name of the icon (= filename)",fieldName:"name"},{name:"size",type:{text:"number | undefined"},description:"Size of the icon (works in combination with length unit)",fieldName:"size"},{name:"length-unit",type:{text:"string | undefined"},description:"Length unit attribute for overriding length-unit from `IconProvider`",fieldName:"lengthUnit"},{name:"aria-label",type:{text:"string | null"},default:"null",description:"Aria-label attribute to be set for accessibility",fieldName:"ariaLabel"}],superclass:{name:"Component",module:"/src/models"},tagName:"mdc-icon",jsDoc:`/**
 * Icon component that dynamically displays SVG icons based on a valid name.
 *
 * This component must be mounted within an \`IconProvider\` component.
 *
 * The \`IconProvider\` defines the source URL from which icons are consumed.
 * The \`Icon\` component accepts a \`name\` attribute, which corresponds to
 * the file name of the icon to be loaded from the specified URL.
 *
 * Once fetched, the icon will be rendered. If the fetching process is unsuccessful,
 * no icon will be displayed.
 *
 * The \`size\` attribute allows for dynamic sizing of the icon based on the provided
 * \`length-unit\` attribute. This unit can either come from the \`IconProvider\`
 * or can be overridden for each individual icon. For example:
 * if \`size = 1\` and \`length-unit = 'em'\`, the dimensions of the icon will be
 * \`width: 1em; height: 1em\`.
 *
 * Regarding accessibility, there are two types of icons: decorative and informative.
 *
 * ### Decorative Icons
 * - Decorative icons do not convey any essential information to the content of a page.
 * - They should be hidden from screen readers (SR) to prevent confusion for users.
 * - For decorative icons, an \`aria-label\` is not required, and the \`role\` will be set to null.
 *
 * ### Informative Icons
 * - Informative icons convey important information that is not adequately represented
 *   by surrounding text or components.
 * - They provide valuable context and must be announced by assistive technologies.
 * - For informative icons, an \`aria-label\` is required, and the \`role\` will be set to "img".
 * - If an \`aria-label\` is provided, the role will be set to 'img'; if it is absent,
 *   the role will be unset.
 *
 * @tagname mdc-icon
 *
 * @cssproperty --mdc-icon-fill-color - Allows customization of the default fill color.
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"Icon",module:"components/icon/icon.component.js"}}]},{kind:"javascript-module",path:"components/iconprovider/iconprovider.component.js",declarations:[{kind:"class",description:`IconProvider component, which allows to be consumed from sub components
(see \`providerUtils.consume\` for how to consume)

Bundling icons will be up to the consumer of this component, such
that only a url has to be passed in from which the icons will be
fetched.`,name:"IconProvider",slots:[{description:"children",name:""}],members:[{kind:"field",name:"Context",privacy:"public",static:!0,description:"Context object of the IconProvider, to be consumed by child components",readonly:!0},{kind:"field",name:"url",type:{text:"string | undefined"},description:"Url of where icons will be fetched from",attribute:"url"},{kind:"field",name:"fileExtension",type:{text:"string | undefined"},description:"File extension of icons, default: 'svg'",attribute:"file-extension",reflects:!0},{kind:"field",name:"lengthUnit",type:{text:"string"},description:"Length unit used for sizing of icons, default: 'em'",attribute:"length-unit",reflects:!0},{kind:"field",name:"size",type:{text:"number | undefined"},default:"DEFAULTS.LENGTH_UNIT_SIZE[DEFAULTS.LENGTH_UNIT]",description:`The default size of the icon.
If not set, it falls back to the size defined by the length unit.`,attribute:"size",reflects:!0},{kind:"method",name:"updateValuesInContext",privacy:"private"},{kind:"method",name:"updateContext",privacy:"protected",return:{type:{text:"void"}}}],attributes:[{name:"url",type:{text:"string | undefined"},description:"Url of where icons will be fetched from",fieldName:"url"},{name:"file-extension",type:{text:"string | undefined"},description:"File extension of icons, default: 'svg'",fieldName:"fileExtension"},{name:"length-unit",type:{text:"string"},description:"Length unit used for sizing of icons, default: 'em'",fieldName:"lengthUnit"},{name:"size",type:{text:"number | undefined"},default:"DEFAULTS.LENGTH_UNIT_SIZE[DEFAULTS.LENGTH_UNIT]",description:`The default size of the icon.
If not set, it falls back to the size defined by the length unit.`,fieldName:"size"}],superclass:{name:"Provider",module:"/src/models"},tagName:"mdc-iconprovider",jsDoc:`/**
 * IconProvider component, which allows to be consumed from sub components
 * (see \`providerUtils.consume\` for how to consume)
 *
 * Bundling icons will be up to the consumer of this component, such
 * that only a url has to be passed in from which the icons will be
 * fetched.
 *
 * @tagname mdc-iconprovider
 *
 * @slot - children
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"IconProvider",module:"components/iconprovider/iconprovider.component.js"}}]},{kind:"javascript-module",path:"components/presence/presence.component.js",declarations:[{kind:"class",description:`The \`mdc-presence\` component is a versatile UI element used to
display the presence status of a user or entity within an avatar component.

This component is ideal for use within avatar UIs where the presence status
needs to be visually represented.`,name:"Presence",members:[{kind:"field",name:"type",description:"Supported presence types:\n- `active`\n- `away`\n- `away-calling`\n- `busy`\n- `dnd`\n- `meeting`\n- `on-call`\n- `on-device`\n- `on-mobile`\n- `pause`\n- `pto`\n- `presenting`\n- `quiet`\n- `scheduled`",attribute:"type",reflects:!0},{kind:"field",name:"size",description:`Acceptable values include:
- XX_SMALL
- X_SMALL
- SMALL
- MIDSIZE
- LARGE
- X_LARGE
- XX_LARGE`,attribute:"size",reflects:!0},{kind:"field",name:"iconSize",privacy:"private",description:"Get the size of the presence icon based on the given size type",readonly:!0},{kind:"field",name:"icon",privacy:"private",description:"Get the icon name based on the presence type",readonly:!0}],attributes:[{name:"type",description:"Supported presence types:\n- `active`\n- `away`\n- `away-calling`\n- `busy`\n- `dnd`\n- `meeting`\n- `on-call`\n- `on-device`\n- `on-mobile`\n- `pause`\n- `pto`\n- `presenting`\n- `quiet`\n- `scheduled`",fieldName:"type"},{name:"size",description:`Acceptable values include:
- XX_SMALL
- X_SMALL
- SMALL
- MIDSIZE
- LARGE
- X_LARGE
- XX_LARGE`,fieldName:"size"}],superclass:{name:"Component",module:"/src/models"},tagName:"mdc-presence",jsDoc:`/**
 * The \`mdc-presence\` component is a versatile UI element used to
 * display the presence status of a user or entity within an avatar component.
 *
 * This component is ideal for use within avatar UIs where the presence status
 * needs to be visually represented.
 *
 * @dependency mdc-icon
 *
 * @tagname mdc-presence
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"Presence",module:"components/presence/presence.component.js"}}]},{kind:"javascript-module",path:"components/text/text.component.js",declarations:[{kind:"class",description:"Text component for creating styled text elements.\nIt has to be mounted within the ThemeProvider to access color and font tokens.\n\nThe `type` attribute allows changing the text style.\nThe `tagname` attribute allows changing the tag name of the text element.\nThe default tag name is `p`.\n\nThe `tagname` attribute should be a valid HTML tag name.\nIf the `tagname` attribute is not a valid HTML tag name, the default tag name will be used.\n\nThe styling is applied based on the `type` attribute.",name:"Text",cssParts:[{description:"The text element",name:"text"}],slots:[{description:"Default slot for text content",name:""}],members:[{kind:"field",name:"type",privacy:"public",description:`Specifies the text style to be applied.

Acceptable values include:

- 'body-small-regular'
- 'body-small-medium'
- 'body-small-bold'
- 'body-midsize-regular'
- 'body-midsize-medium'
- 'body-midsize-bold'
- 'body-large-regular'
- 'body-large-medium'
- 'body-large-bold'
- 'body-small-regular-underline'
- 'body-small-medium-underline'
- 'body-midsize-regular-underline'
- 'body-midsize-medium-underline'
- 'body-large-regular-underline'
- 'body-large-medium-underline'
- 'heading-small-regular'
- 'heading-small-medium'
- 'heading-small-bold'
- 'heading-midsize-regular'
- 'heading-midsize-medium'
- 'heading-midsize-bold'
- 'heading-large-regular'
- 'heading-large-medium'
- 'heading-large-bold'
- 'heading-xlarge-regular'
- 'heading-xlarge-medium'
- 'heading-xlarge-bold'
- 'headline-small-light'
- 'headline-small-regular'`,attribute:"type",reflects:!0},{kind:"field",name:"tagname",privacy:"public",description:`Specifies the HTML tag name for the text element. The default tag name is \`p\`.
This attribute is optional. When set, it changes the tag name of the text element.

Acceptable values include:

- 'h1'
- 'h2'
- 'h3'
- 'h4'
- 'h5'
- 'h6'
- 'p'
- 'small'
- 'span'
- 'div'

For instance, setting this attribute to \`h2\` will render the text element as an \`h2\` element.
Note that the styling is determined by the \`type\` attribute.`,attribute:"tagname",reflects:!0}],attributes:[{name:"type",description:`Specifies the text style to be applied.

Acceptable values include:

- 'body-small-regular'
- 'body-small-medium'
- 'body-small-bold'
- 'body-midsize-regular'
- 'body-midsize-medium'
- 'body-midsize-bold'
- 'body-large-regular'
- 'body-large-medium'
- 'body-large-bold'
- 'body-small-regular-underline'
- 'body-small-medium-underline'
- 'body-midsize-regular-underline'
- 'body-midsize-medium-underline'
- 'body-large-regular-underline'
- 'body-large-medium-underline'
- 'heading-small-regular'
- 'heading-small-medium'
- 'heading-small-bold'
- 'heading-midsize-regular'
- 'heading-midsize-medium'
- 'heading-midsize-bold'
- 'heading-large-regular'
- 'heading-large-medium'
- 'heading-large-bold'
- 'heading-xlarge-regular'
- 'heading-xlarge-medium'
- 'heading-xlarge-bold'
- 'headline-small-light'
- 'headline-small-regular'`,fieldName:"type"},{name:"tagname",description:`Specifies the HTML tag name for the text element. The default tag name is \`p\`.
This attribute is optional. When set, it changes the tag name of the text element.

Acceptable values include:

- 'h1'
- 'h2'
- 'h3'
- 'h4'
- 'h5'
- 'h6'
- 'p'
- 'small'
- 'span'
- 'div'

For instance, setting this attribute to \`h2\` will render the text element as an \`h2\` element.
Note that the styling is determined by the \`type\` attribute.`,fieldName:"tagname"}],superclass:{name:"Component",module:"/src/models"},tagName:"mdc-text",jsDoc:`/**
 * Text component for creating styled text elements.
 * It has to be mounted within the ThemeProvider to access color and font tokens.
 *
 * The \`type\` attribute allows changing the text style.
 * The \`tagname\` attribute allows changing the tag name of the text element.
 * The default tag name is \`p\`.
 *
 * The \`tagname\` attribute should be a valid HTML tag name.
 * If the \`tagname\` attribute is not a valid HTML tag name, the default tag name will be used.
 *
 * The styling is applied based on the \`type\` attribute.
 *
 * @tagname mdc-text
 * @slot - Default slot for text content
 *
 * @csspart text - The text element
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"Text",module:"components/text/text.component.js"}}]},{kind:"javascript-module",path:"components/themeprovider/themeprovider.component.js",declarations:[{kind:"class",description:`ThemeProvider component, which sets the passed in themeclass as class.
If the themeclass switches, the existing themeclass will be removed as a class
and the new themeclass will be added.

CSS variables defined in the themeclass will be used for the styling of child dom nodes.

Themeclass context can be be consumed from Lit child components
(see providerUtils.consume for how to consume)

ThemeProvider also includes basic font defaults for text.`,name:"ThemeProvider",cssProperties:[{description:"Option to override the default color, default: color-theme-text-primary-normal",name:"--mdc-themeprovider-color-default"},{description:"Option to override the font family, default: `Momentum` (from momentum-design/fonts)",name:"--mdc-themeprovider-font-family"},{description:"Option to override the font weight, default: `400`",name:"--mdc-themeprovider-font-weight"},{description:"Option to override the default letter-spacing, default: `-0.25px` (this is to match the old CiscoSans)",name:"--mdc-themeprovider-letter-spacing-adjustment"}],slots:[{description:"children",name:""}],members:[{kind:"field",name:"Context",privacy:"public",static:!0,description:"Context object of the ThemeProvider, to be consumed by child components",readonly:!0},{kind:"field",name:"themeclass",type:{text:"string"},description:`Current theme class

Has to be fully qualified, such that
the theme class matches the class of the respective
theme stylesheet

Default: 'mds-theme-stable-darkWebex'`,attribute:"themeclass"},{kind:"method",name:"updateContext",privacy:"protected",return:{type:{text:"void"}},description:`Update all observing components of this
provider to update the themeclass

Is called on every re-render, see Provider class`},{kind:"method",name:"setThemeInClassList",privacy:"private",description:`Function to update the active theme classnames to update the theme tokens
as CSS variables on the web component.`}],attributes:[{name:"themeclass",type:{text:"string"},description:`Current theme class

Has to be fully qualified, such that
the theme class matches the class of the respective
theme stylesheet

Default: 'mds-theme-stable-darkWebex'`,fieldName:"themeclass"}],superclass:{name:"Provider",module:"/src/models"},tagName:"mdc-themeprovider",jsDoc:`/**
 * ThemeProvider component, which sets the passed in themeclass as class.
 * If the themeclass switches, the existing themeclass will be removed as a class
 * and the new themeclass will be added.
 *
 * CSS variables defined in the themeclass will be used for the styling of child dom nodes.
 *
 * Themeclass context can be be consumed from Lit child components
 * (see providerUtils.consume for how to consume)
 *
 * ThemeProvider also includes basic font defaults for text.
 *
 * @tagname mdc-themeprovider
 *
 * @slot - children
 *
 * @cssproperty --mdc-themeprovider-color-default - Option to override the default color,
 * default: color-theme-text-primary-normal
 * @cssproperty --mdc-themeprovider-font-family - Option to override the font family,
 * default: \`Momentum\` (from momentum-design/fonts)
 * @cssproperty --mdc-themeprovider-font-weight - Option to override the font weight, default: \`400\`
 * @cssproperty --mdc-themeprovider-letter-spacing-adjustment - Option to override the default letter-spacing,
 * default: \`-0.25px\` (this is to match the old CiscoSans)
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"ThemeProvider",module:"components/themeprovider/themeprovider.component.js"}}]}],u={schemaVersion:c,readme:m,modules:h},r=[{themeclass:"mds-theme-stable-darkWebex",displayName:"darkWebex",backgroundColor:"#000000",className:"dark"},{themeclass:"mds-theme-stable-lightWebex",displayName:"lightWebex",backgroundColor:"#ffffff",className:"light"}],p=e=>{for(const t of r)e.classList.remove(t.className)},s=(e,t)=>{e.classList.add(t)},b=e=>{const t=document.querySelectorAll("div.docs-story");for(const i of t)i.style.backgroundColor=e},f=(e,t)=>{const i=t.globals.theme,n=r.find(a=>a.displayName===i),o=document.querySelector("body.sb-show-main");return p(o),s(o,n.className),s(o,"mds-typography"),b(n.backgroundColor),d`<mdc-themeprovider
    id="theme-provider"
    themeclass="${n.themeclass}"
  >
    ${e()}
  </mdc-themeprovider>`},g=e=>d`<mdc-iconprovider
        url="./icons/svg"
      >
        ${e()}
      </mdc-iconprovider>`;function y(e){const t=i=>i.replace(/-([a-z])/g,n=>n[1].toUpperCase());return e.modules.forEach(i=>{i.declarations.forEach(n=>{const o=new Set(n.attributes.map(a=>t(a.name)));n.members=n.members.filter(a=>!o.has(a.name))})}),e}const v=y(u);l(v);const F={parameters:{a11y:{options:{runOnly:{type:"tag",values:["best-practice","wcag2a","wcag2aa","wcag21aa","wcag22aa"]}}},actions:{argTypesRegex:"^on[A-Z].*"},backgrounds:{disable:!0,grid:{disable:!0}},badgesConfig:{wip:{styles:{backgroundColor:"#30240D",borderColor:"#D6B220",color:"#FFFFFFF2"},title:"Work In Progress",tooltip:{title:"This Component is Work In Progress",desc:"Keep an eye on the Release history for updates or provide feedback.",links:[{title:"Release history",href:"https://github.com/momentum-design/momentum-design/releases"},{title:"Leave feedback",href:"https://github.com/momentum-design/momentum-design/issues"}]}},stable:{styles:{backgroundColor:"#416116",borderColor:"#93C437",color:"#FFFFFFF2"},title:"Stable",tooltip:{title:"This Component is Stable",desc:"Ready for use.",links:[{title:"Consumption guide",href:"https://momentum-design.github.io/momentum-design/en/components/"},{title:"Release history",href:"https://github.com/momentum-design/momentum-design/releases"},{title:"Leave feedback",href:"https://github.com/momentum-design/momentum-design/issues"}]}},deprecated:{styles:{backgroundColor:"#4F0E10",borderColor:"#FC8B98",color:"#FFFFFFF2"},title:"Deprecated",tooltip:{title:"This Component is Deprecated",desc:"Check the Release history for more information about deprecation or provide feedback.",links:[{title:"Release history",href:"https://github.com/momentum-design/momentum-design/releases"},{title:"Leave feedback",href:"https://github.com/momentum-design/momentum-design/issues"}]}}},controls:{disableSaveFromUI:!0,expanded:!0,matchers:{color:/(background|color)$/i,date:/Date$/}},options:{storySort:{order:["Consumption","Styling","Components","Work In Progress"]}}},decorators:[f,g],globalTypes:{theme:{description:"Global theme for components",defaultValue:r[0].displayName,toolbar:{title:"Theme",icon:"globe",items:r.map(e=>e.displayName),dynamicTitle:!0}}}};export{F as default};
