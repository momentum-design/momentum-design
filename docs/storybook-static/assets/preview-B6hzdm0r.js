import{s as m}from"./chunk-L4EGOTBX-qkkAwraa.js";import"./entry-preview-BbhL-oir.js";import{k as c}from"./lit-element-CHllvULs.js";import"./index-CuTxblA2.js";import"./index-Bmi4RbhY.js";import"./directive-helpers-5SvKRCBg.js";import"./index-DrFu-skq.js";import"./index-HW6KrQZO.js";import"./state-CWckTc1X.js";import"./create-context-89xeped_.js";import"./iconprovider.component-CvArfi6w.js";const p="1.0.0",u="",h=[{kind:"javascript-module",path:"components/avatar/avatar.component.js",declarations:[{kind:"class",description:`The \`mdc-avatar\` component is used to represent a person or a space.
An avatar can be an icon, initials, counter and photo.

To set the photo of an avatar,
you need to set "src" attribute.

While the avatar image is loading, as a placeholder,
we will show the initials text.
If the initials are not specified then,
we will show \`user-regular\` icon as a placeholder.

By default, if there are no attributes specified,
then the default avatar will be an icon with \`user-regular\` name.

The avatar component is non clickable and non interactive/focusable component.
If the avatar is typing, then the loading indicator will be displayed.
If the counter type avatar is set to a negative number, then we will display 0.
The presence indicator will be hidden when the counter property is set.`,name:"Avatar",cssProperties:[{description:"Allows customization of the default background color.",name:"--mdc-avatar-default-background-color"},{description:"Allows customization of the default foreground color.",name:"--mdc-avatar-default-foreground-color"},{description:"Allows customization of the loading indicator background color.",name:"--mdc-avatar-loading-indicator-background-color"},{description:"Allows customization of the loading indicator foreground color.",name:"--mdc-avatar-loading-indicator-foreground-color"},{description:"Allows customization of the loading overlay background color.",name:"--mdc-avatar-loading-overlay-background-color"}],members:[{kind:"field",name:"src",type:{text:"string | undefined"},description:`The src is the url which will be used to display the avatar.
When the src is loading, we will display the initials as a placeholder.`,attribute:"src",inheritedFrom:{name:"AvatarComponentMixin",module:"utils/mixins/AvatarComponentMixin.js"}},{kind:"field",name:"initials",type:{text:"string | undefined"},description:"The initials to be displayed for the avatar.",attribute:"initials",inheritedFrom:{name:"AvatarComponentMixin",module:"utils/mixins/AvatarComponentMixin.js"}},{kind:"field",name:"presence",type:{text:"PresenceType | undefined"},description:"The presence is the status which can be used to display the\nactivity state of a user or a space within an avatar component.\n\nAcceptable values include:\n- `active`\n- `away`\n- `away-calling`\n- `busy`\n- `dnd`\n- `meeting`\n- `on-call`\n- `on-device`\n- `on-mobile`\n- `pause`\n- `pto`\n- `presenting`\n- `quiet`\n- `scheduled`",attribute:"presence",inheritedFrom:{name:"AvatarComponentMixin",module:"utils/mixins/AvatarComponentMixin.js"}},{kind:"field",name:"size",type:{text:"AvatarSize"},description:`Acceptable values include (size in px unit):
- 24
- 32
- 48
- 64
- 72
- 88
- 124`,default:"32",attribute:"size",reflects:!0,inheritedFrom:{name:"AvatarComponentMixin",module:"utils/mixins/AvatarComponentMixin.js"}},{kind:"field",name:"iconName",type:{text:"IconNames | undefined"},description:`Name of the icon to be displayed inside the Avatar.
Must be a valid icon name.`,attribute:"icon-name",inheritedFrom:{name:"AvatarComponentMixin",module:"utils/mixins/AvatarComponentMixin.js"}},{kind:"field",name:"counter",type:{text:"number | undefined"},description:"The counter is the number which can be displayed on the avatar.\nThe maximum number is 99 and if the given number is greater than 99,\nthen the avatar will be displayed as `99+`.\nIf the given number is a negative number,\nthen the avatar will be displayed as `0`.",attribute:"counter",inheritedFrom:{name:"AvatarComponentMixin",module:"utils/mixins/AvatarComponentMixin.js"}},{kind:"field",name:"isTyping",type:{text:"boolean"},default:"false",description:"Represents the typing indicator when the user is typing.",attribute:"is-typing",inheritedFrom:{name:"AvatarComponentMixin",module:"utils/mixins/AvatarComponentMixin.js"}}],mixins:[{name:"AvatarComponentMixin",module:"/src/utils/mixins/AvatarComponentMixin"}],superclass:{name:"Component",module:"/src/models"},tagName:"mdc-avatar",jsDoc:`/**
 * The \`mdc-avatar\` component is used to represent a person or a space.
 * An avatar can be an icon, initials, counter and photo.
 *
 * To set the photo of an avatar,
 * you need to set "src" attribute.
 *
 * While the avatar image is loading, as a placeholder,
 * we will show the initials text.
 * If the initials are not specified then,
 * we will show \`user-regular\` icon as a placeholder.
 *
 * By default, if there are no attributes specified,
 * then the default avatar will be an icon with \`user-regular\` name.
 *
 * The avatar component is non clickable and non interactive/focusable component.
 * If the avatar is typing, then the loading indicator will be displayed.
 * If the counter type avatar is set to a negative number, then we will display 0.
 * The presence indicator will be hidden when the counter property is set.
 *
 * @dependency mdc-icon
 * @dependency mdc-presence
 * @dependency mdc-text
 *
 * @tagname mdc-avatar
 *
 * @cssproperty --mdc-avatar-default-background-color - Allows customization of the default background color.
 * @cssproperty --mdc-avatar-default-foreground-color - Allows customization of the default foreground color.
 * @cssproperty --mdc-avatar-loading-indicator-background-color -
 *  Allows customization of the loading indicator background color.
 * @cssproperty --mdc-avatar-loading-indicator-foreground-color -
 *  Allows customization of the loading indicator foreground color.
 * @cssproperty --mdc-avatar-loading-overlay-background-color -
 *  Allows customization of the loading overlay background color.
 */`,customElement:!0,attributes:[{name:"src",type:{text:"string | undefined"},description:`The src is the url which will be used to display the avatar.
When the src is loading, we will display the initials as a placeholder.`,fieldName:"src",inheritedFrom:{name:"AvatarComponentMixin",module:"src/utils/mixins/AvatarComponentMixin.ts"}},{name:"initials",type:{text:"string | undefined"},description:"The initials to be displayed for the avatar.",fieldName:"initials",inheritedFrom:{name:"AvatarComponentMixin",module:"src/utils/mixins/AvatarComponentMixin.ts"}},{name:"presence",type:{text:"PresenceType | undefined"},description:"The presence is the status which can be used to display the\nactivity state of a user or a space within an avatar component.\n\nAcceptable values include:\n- `active`\n- `away`\n- `away-calling`\n- `busy`\n- `dnd`\n- `meeting`\n- `on-call`\n- `on-device`\n- `on-mobile`\n- `pause`\n- `pto`\n- `presenting`\n- `quiet`\n- `scheduled`",fieldName:"presence",inheritedFrom:{name:"AvatarComponentMixin",module:"src/utils/mixins/AvatarComponentMixin.ts"}},{name:"size",type:{text:"AvatarSize"},description:`Acceptable values include (size in px unit):
- 24
- 32
- 48
- 64
- 72
- 88
- 124`,default:"32",fieldName:"size",inheritedFrom:{name:"AvatarComponentMixin",module:"src/utils/mixins/AvatarComponentMixin.ts"}},{name:"icon-name",type:{text:"IconNames | undefined"},description:`Name of the icon to be displayed inside the Avatar.
Must be a valid icon name.`,fieldName:"iconName",inheritedFrom:{name:"AvatarComponentMixin",module:"src/utils/mixins/AvatarComponentMixin.ts"}},{name:"counter",type:{text:"number | undefined"},description:"The counter is the number which can be displayed on the avatar.\nThe maximum number is 99 and if the given number is greater than 99,\nthen the avatar will be displayed as `99+`.\nIf the given number is a negative number,\nthen the avatar will be displayed as `0`.",fieldName:"counter",inheritedFrom:{name:"AvatarComponentMixin",module:"src/utils/mixins/AvatarComponentMixin.ts"}},{name:"is-typing",type:{text:"boolean"},default:"false",description:"Represents the typing indicator when the user is typing.",fieldName:"isTyping",inheritedFrom:{name:"AvatarComponentMixin",module:"src/utils/mixins/AvatarComponentMixin.ts"}}]}],exports:[{kind:"js",name:"default",declaration:{name:"Avatar",module:"components/avatar/avatar.component.js"}}]},{kind:"javascript-module",path:"components/avatarbutton/avatarbutton.component.js",declarations:[{kind:"class",description:"The `mdc-avatarbutton` component is an interactable version of the `mdc-avatar` component.\n\nThis component is made by extending `buttonsimple` class.\nThe button component acts as a wrapper for the avatar component.",name:"AvatarButton",members:[{kind:"field",name:"ariaLabel",type:{text:"string | null"},default:"null",description:"Aria-label attribute to be set for accessibility",attribute:"aria-label"},{kind:"method",name:"setSize",privacy:"private",parameters:[{name:"size",type:{text:"AvatarSize"}}]},{kind:"field",name:"active",type:{text:"boolean"},default:"undefined as unknown",description:`The button's active state indicates whether it is currently toggled on (active) or off (inactive).
When the active state is true, the button is considered to be in an active state, meaning it is toggled on.
Conversely, when the active state is false, the button is in an inactive state, indicating it is toggled off.`,attribute:"active",inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"disabled",type:{text:"boolean"},default:"undefined as unknown",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,attribute:"disabled",reflects:!0,inheritedFrom:{name:"DisabledMixin",module:"utils/mixins/DisabledMixin.js"}},{kind:"field",name:"softDisabled",type:{text:"boolean"},default:"undefined as unknown",description:`Indicates whether the button is soft disabled.
When set to \`true\`, the button appears visually disabled but still allows
focus, click, and keyboard actions to be passed through.

**Important:** When using soft disabled, consumers must ensure that
the button behaves like a disabled button, allowing only focus and
preventing any interactions (clicks or keyboard actions) from triggering unintended actions.`,attribute:"soft-disabled",inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"role",description:`This property defines the ARIA role for the element. By default, it is set to 'button'.
Consumers should override this role when:
- The element is being used in a context where a different role is more appropriate.
- Custom behaviors are implemented that require a specific ARIA role for accessibility purposes.`,default:"'button'",attribute:"role",reflects:!0,type:{text:"string"},inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"type",type:{text:"ButtonType"},description:`This property defines the type attribute for the button element.
The type attribute specifies the behavior of the button when it is clicked.
- **submit**: The button submits the form data to the server.
- **reset**: The button resets the form data to its initial state.
- **button**: The button does nothing when clicked.`,default:"button",attribute:"type",reflects:!0,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"src",type:{text:"string | undefined"},description:`The src is the url which will be used to display the avatar.
When the src is loading, we will display the initials as a placeholder.`,attribute:"src",inheritedFrom:{name:"AvatarComponentMixin",module:"utils/mixins/AvatarComponentMixin.js"}},{kind:"field",name:"initials",type:{text:"string | undefined"},description:"The initials to be displayed for the avatar.",attribute:"initials",inheritedFrom:{name:"AvatarComponentMixin",module:"utils/mixins/AvatarComponentMixin.js"}},{kind:"field",name:"presence",type:{text:"PresenceType | undefined"},description:"The presence is the status which can be used to display the\nactivity state of a user or a space within an avatar component.\n\nAcceptable values include:\n- `active`\n- `away`\n- `away-calling`\n- `busy`\n- `dnd`\n- `meeting`\n- `on-call`\n- `on-device`\n- `on-mobile`\n- `pause`\n- `pto`\n- `presenting`\n- `quiet`\n- `scheduled`",attribute:"presence",inheritedFrom:{name:"AvatarComponentMixin",module:"utils/mixins/AvatarComponentMixin.js"}},{kind:"field",name:"size",type:{text:"ButtonSize"},description:`Acceptable values include (size in px unit):
- 24
- 32
- 48
- 64
- 72
- 88
- 124`,default:"32",attribute:"size",reflects:!0,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"iconName",type:{text:"IconNames | undefined"},description:`Name of the icon to be displayed inside the Avatar.
Must be a valid icon name.`,attribute:"icon-name",inheritedFrom:{name:"AvatarComponentMixin",module:"utils/mixins/AvatarComponentMixin.js"}},{kind:"field",name:"counter",type:{text:"number | undefined"},description:"The counter is the number which can be displayed on the avatar.\nThe maximum number is 99 and if the given number is greater than 99,\nthen the avatar will be displayed as `99+`.\nIf the given number is a negative number,\nthen the avatar will be displayed as `0`.",attribute:"counter",inheritedFrom:{name:"AvatarComponentMixin",module:"utils/mixins/AvatarComponentMixin.js"}},{kind:"field",name:"isTyping",type:{text:"boolean"},default:"false",description:"Represents the typing indicator when the user is typing.",attribute:"is-typing",inheritedFrom:{name:"AvatarComponentMixin",module:"utils/mixins/AvatarComponentMixin.js"}},{kind:"field",name:"tabIndex",type:{text:"number"},default:"0",description:"This property specifies the tab order of the element.",attribute:"tabIndex",reflects:!0,inheritedFrom:{name:"TabIndexMixin",module:"utils/mixins/TabIndexMixin.js"}},{kind:"method",name:"executeAction",privacy:"private",inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"setAriaPressed",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The target element."},{name:"active",type:{text:"boolean"},description:"The active state."}],description:"Sets the aria-pressed attribute based on the active state.",inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"setSoftDisabled",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The button element."},{name:"softDisabled",type:{text:"boolean"},description:"The soft-disabled state."}],description:`Sets the soft-disabled attribute for the button.
When soft-disabled, the button looks to be disabled but remains focusable and clickable.
Also sets/removes aria-disabled attribute.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"setDisabled",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The button element."},{name:"disabled",type:{text:"boolean"},description:"The disabled state."}],description:`Sets the disabled attribute for the button.
When disabled, the button is not focusable or clickable, and tabindex is set to -1.
The previous tabindex is stored and restored when enabled.
Also sets/removes aria-disabled attribute.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"triggerClickEvent",privacy:"private",inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"handleKeyDown",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"},description:"The keyboard event."}],description:`Handles the keydown event on the button.
If the key is 'Enter' or 'Space', the button is pressed.
If the key is 'Enter', the button is pressed. The native HTML button works in the same way.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"handleKeyUp",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"},description:"The keyboard event."}],description:`Handles the keyup event on the button.
If the key is 'Enter' or 'Space', the button is clicked.
If the key is 'Space', the button is pressed. The native HTML button works in the same way.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}}],attributes:[{name:"aria-label",type:{text:"string | null"},default:"null",description:"Aria-label attribute to be set for accessibility",fieldName:"ariaLabel"},{name:"src",type:{text:"string | undefined"},description:`The src is the url which will be used to display the avatar.
When the src is loading, we will display the initials as a placeholder.`,fieldName:"src",inheritedFrom:{name:"AvatarComponentMixin",module:"src/utils/mixins/AvatarComponentMixin.ts"}},{name:"initials",type:{text:"string | undefined"},description:"The initials to be displayed for the avatar.",fieldName:"initials",inheritedFrom:{name:"AvatarComponentMixin",module:"src/utils/mixins/AvatarComponentMixin.ts"}},{name:"presence",type:{text:"PresenceType | undefined"},description:"The presence is the status which can be used to display the\nactivity state of a user or a space within an avatar component.\n\nAcceptable values include:\n- `active`\n- `away`\n- `away-calling`\n- `busy`\n- `dnd`\n- `meeting`\n- `on-call`\n- `on-device`\n- `on-mobile`\n- `pause`\n- `pto`\n- `presenting`\n- `quiet`\n- `scheduled`",fieldName:"presence",inheritedFrom:{name:"AvatarComponentMixin",module:"src/utils/mixins/AvatarComponentMixin.ts"}},{name:"size",type:{text:"ButtonSize"},description:`Acceptable values include (size in px unit):
- 24
- 32
- 48
- 64
- 72
- 88
- 124`,default:"32",fieldName:"size",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{name:"icon-name",type:{text:"IconNames | undefined"},description:`Name of the icon to be displayed inside the Avatar.
Must be a valid icon name.`,fieldName:"iconName",inheritedFrom:{name:"AvatarComponentMixin",module:"src/utils/mixins/AvatarComponentMixin.ts"}},{name:"counter",type:{text:"number | undefined"},description:"The counter is the number which can be displayed on the avatar.\nThe maximum number is 99 and if the given number is greater than 99,\nthen the avatar will be displayed as `99+`.\nIf the given number is a negative number,\nthen the avatar will be displayed as `0`.",fieldName:"counter",inheritedFrom:{name:"AvatarComponentMixin",module:"src/utils/mixins/AvatarComponentMixin.ts"}},{name:"is-typing",type:{text:"boolean"},default:"false",description:"Represents the typing indicator when the user is typing.",fieldName:"isTyping",inheritedFrom:{name:"AvatarComponentMixin",module:"src/utils/mixins/AvatarComponentMixin.ts"}},{name:"tabIndex",type:{text:"number"},default:"0",description:"This property specifies the tab order of the element.",fieldName:"tabIndex",inheritedFrom:{name:"TabIndexMixin",module:"src/utils/mixins/TabIndexMixin.ts"}},{name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,fieldName:"disabled",inheritedFrom:{name:"DisabledMixin",module:"src/utils/mixins/DisabledMixin.ts"}},{name:"active",type:{text:"boolean"},default:"false",description:`The button's active state indicates whether it is currently toggled on (active) or off (inactive).
When the active state is true, the button is considered to be in an active state, meaning it is toggled on.
Conversely, when the active state is false, the button is in an inactive state, indicating it is toggled off.`,fieldName:"active",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{name:"soft-disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the button is soft disabled.
When set to \`true\`, the button appears visually disabled but still allows
focus, click, and keyboard actions to be passed through.

**Important:** When using soft disabled, consumers must ensure that
the button behaves like a disabled button, allowing only focus and
preventing any interactions (clicks or keyboard actions) from triggering unintended actions.`,fieldName:"softDisabled",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{name:"role",description:`This property defines the ARIA role for the element. By default, it is set to 'button'.
Consumers should override this role when:
- The element is being used in a context where a different role is more appropriate.
- Custom behaviors are implemented that require a specific ARIA role for accessibility purposes.`,default:"button",fieldName:"role",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{name:"type",type:{text:"ButtonType"},description:`This property defines the type attribute for the button element.
The type attribute specifies the behavior of the button when it is clicked.
- **submit**: The button submits the form data to the server.
- **reset**: The button resets the form data to its initial state.
- **button**: The button does nothing when clicked.`,default:"button",fieldName:"type",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}}],mixins:[{name:"AvatarComponentMixin",module:"/src/utils/mixins/AvatarComponentMixin"}],superclass:{name:"Buttonsimple",module:"/src/components/buttonsimple/buttonsimple.component"},tagName:"mdc-avatarbutton",jsDoc:`/**
 * The \`mdc-avatarbutton\` component is an interactable version of the \`mdc-avatar\` component.
 *
 * This component is made by extending \`buttonsimple\` class.
 * The button component acts as a wrapper for the avatar component.
 *
 * @dependency mdc-avatar
 *
 * @tagname mdc-avatarbutton
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"AvatarButton",module:"components/avatarbutton/avatarbutton.component.js"}}]},{kind:"javascript-module",path:"components/badge/badge.component.js",declarations:[{kind:"class",description:"The `mdc-badge` component is a versatile UI element used to\ndisplay dot, icons, counters, success, warning and error type badge.\n\nSupported badge types:\n- `dot`: Displays a dot notification badge with a blue color.\n- `icon`: Displays a badge with a specified icon using the `icon-name` attribute.\n- `counter`: Displays a badge with a counter value. If the counter exceeds the `max-counter`,\nit shows `maxCounter+`. The maximum value of the counter is 999 and anything above that will be set to `999+`.\n- `success`: Displays a success badge with a check circle icon and green color.\n- `warning`: Displays a warning badge with a warning icon and yellow color.\n- `error`: Displays a error badge with a error legacy icon and red color.\n\nFor `icon`, `success`, `warning` and `error` types, the `mdc-icon` component is used to render the icon.\n\nFor the `counter` type, the `mdc-text` component is used to render the counter value.",name:"Badge",cssProperties:[{description:"The foreground color of the primary badge.",name:"--mdc-badge-primary-foreground-color"},{description:"The background color of the primary badge.",name:"--mdc-badge-primary-background-color"},{description:"The foreground color of the secondary badge.",name:"--mdc-badge-secondary-foreground-color"},{description:"The background color of the secondary badge.",name:"--mdc-badge-secondary-background-color"},{description:"The foreground color of the success badge.",name:"--mdc-badge-success-foreground-color"},{description:"The background color of the success badge.",name:"--mdc-badge-success-background-color"},{description:"The foreground color of the warning badge.",name:"--mdc-badge-warning-foreground-color"},{description:"The background color of the warning badge.",name:"--mdc-badge-warning-background-color"},{description:"The foreground color of the error badge.",name:"--mdc-badge-error-foreground-color"},{description:"The background color of the error badge.",name:"--mdc-badge-error-background-color"},{description:"The background color of the badge overlay.",name:"--mdc-badge-overlay-background-color"}],members:[{kind:"field",name:"type",type:{text:"BadgeType | undefined"},description:"Type of the badge\nCan be `dot` (notification) , `icon`, `counter`, `success`, `warning` or `error`.",attribute:"type",reflects:!0},{kind:"field",name:"iconName",type:{text:"IconNames | undefined"},description:"Name of the icon (= filename).\n\nIf no `icon-name` is provided, no icon will be rendered.",attribute:"icon-name"},{kind:"field",name:"variant",type:{text:"IconVariant"},description:"Type of the variant can be `primary` or `secondary`.\nIt defines the background and foreground color of the icon.",default:"primary",attribute:"variant",reflects:!0},{kind:"field",name:"counter",type:{text:"number | undefined"},description:"Counter is the number which can be provided in the badge.",attribute:"counter"},{kind:"field",name:"maxCounter",type:{text:"number"},description:"The maximum number can be set up to 999, anything above that will be rendered as _999+_.\nThe max counter can be `9`, `99` or `999`.",default:"99",attribute:"max-counter",reflects:!0},{kind:"field",name:"overlay",type:{text:"boolean"},default:"false",description:`Overlay is to add a thin outline to the badge.
This will help distinguish between the badge and the button,
where the badge will be layered on top of a button.`,attribute:"overlay"},{kind:"field",name:"ariaLabel",type:{text:"string | null"},default:"null",description:"Aria-label attribute to be set for accessibility",attribute:"aria-label"},{kind:"method",name:"getCounterText",privacy:"private",return:{type:{text:""}},parameters:[{name:"maxCounter",type:{text:"number"},description:"the maximum limit which can be displayed on the badge"},{name:"counter",optional:!0,type:{text:"number"},description:"the number to be displayed on the badge"}],description:"If `type` is set to `counter` and if `counter` is greater than `maxCounter`,\nthen it will return a string the maxCounter value as string.\nOtherwise, it will return a string representation of `counter`.\nIf `counter` is not a number, it will return an empty string."},{kind:"method",name:"getBadgeIcon",privacy:"private",return:{type:{text:""}},parameters:[{name:"iconName",type:{text:"string"},description:"the name of the icon from the icon set"},{name:"backgroundClassPostfix",type:{text:"string"},description:"postfix for the class to style the badge icon."}],description:"Method to generate the badge icon."},{kind:"method",name:"getBadgeDot",privacy:"private",return:{type:{text:""}},description:"Method to generate the badge dot template."},{kind:"method",name:"getBadgeCounterText",privacy:"private",return:{type:{text:""}},description:"Method to generate the badge text and counter template."},{kind:"method",name:"setRoleByAriaLabel",privacy:"private",return:{type:{text:"void"}},description:`Method to set the role based on the aria-label provided.
If the aria-label is provided, the role of the element will be 'img'.
Otherwise, the role will be null.`},{kind:"method",name:"getBadgeContentBasedOnType",privacy:"private",return:{type:{text:""}},description:`Generates the badge content based on the badge type.
Utilizes various helper methods to create the appropriate badge template based on the
current badge type. Supports 'dot', 'icon', 'counter', 'success', 'warning', and 'error'
types, returning the corresponding template result for each type.`}],attributes:[{name:"type",type:{text:"BadgeType | undefined"},description:"Type of the badge\nCan be `dot` (notification) , `icon`, `counter`, `success`, `warning` or `error`.",fieldName:"type"},{name:"icon-name",type:{text:"IconNames | undefined"},description:"Name of the icon (= filename).\n\nIf no `icon-name` is provided, no icon will be rendered.",fieldName:"iconName"},{name:"variant",type:{text:"IconVariant"},description:"Type of the variant can be `primary` or `secondary`.\nIt defines the background and foreground color of the icon.",default:"primary",fieldName:"variant"},{name:"counter",type:{text:"number | undefined"},description:"Counter is the number which can be provided in the badge.",fieldName:"counter"},{name:"max-counter",type:{text:"number"},description:"The maximum number can be set up to 999, anything above that will be rendered as _999+_.\nThe max counter can be `9`, `99` or `999`.",default:"99",fieldName:"maxCounter"},{name:"overlay",type:{text:"boolean"},default:"false",description:`Overlay is to add a thin outline to the badge.
This will help distinguish between the badge and the button,
where the badge will be layered on top of a button.`,fieldName:"overlay"},{name:"aria-label",type:{text:"string | null"},default:"null",description:"Aria-label attribute to be set for accessibility",fieldName:"ariaLabel"}],superclass:{name:"Component",module:"/src/models"},tagName:"mdc-badge",jsDoc:"/**\n * The `mdc-badge` component is a versatile UI element used to\n * display dot, icons, counters, success, warning and error type badge.\n *\n * Supported badge types:\n * - `dot`: Displays a dot notification badge with a blue color.\n * - `icon`: Displays a badge with a specified icon using the `icon-name` attribute.\n * - `counter`: Displays a badge with a counter value. If the counter exceeds the `max-counter`,\n * it shows `maxCounter+`. The maximum value of the counter is 999 and anything above that will be set to `999+`.\n * - `success`: Displays a success badge with a check circle icon and green color.\n * - `warning`: Displays a warning badge with a warning icon and yellow color.\n * - `error`: Displays a error badge with a error legacy icon and red color.\n *\n * For `icon`, `success`, `warning` and `error` types, the `mdc-icon` component is used to render the icon.\n *\n * For the `counter` type, the `mdc-text` component is used to render the counter value.\n *\n * @dependency mdc-icon\n * @dependency mdc-text\n *\n * @tagname mdc-badge\n *\n * @cssproperty --mdc-badge-primary-foreground-color - The foreground color of the primary badge.\n * @cssproperty --mdc-badge-primary-background-color - The background color of the primary badge.\n * @cssproperty --mdc-badge-secondary-foreground-color - The foreground color of the secondary badge.\n * @cssproperty --mdc-badge-secondary-background-color - The background color of the secondary badge.\n * @cssproperty --mdc-badge-success-foreground-color - The foreground color of the success badge.\n * @cssproperty --mdc-badge-success-background-color - The background color of the success badge.\n * @cssproperty --mdc-badge-warning-foreground-color - The foreground color of the warning badge.\n * @cssproperty --mdc-badge-warning-background-color - The background color of the warning badge.\n * @cssproperty --mdc-badge-error-foreground-color - The foreground color of the error badge.\n * @cssproperty --mdc-badge-error-background-color - The background color of the error badge.\n * @cssproperty --mdc-badge-overlay-background-color - The background color of the badge overlay.\n */",customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"Badge",module:"components/badge/badge.component.js"}}]},{kind:"javascript-module",path:"components/bullet/bullet.component.js",declarations:[{kind:"class",description:`Bullet component, which is a visual marker
and be used to organize and present items in a list format.`,name:"Bullet",cssProperties:[{description:"background color of the bullet",name:"--mdc-bullet-background-color"},{description:"small size value of the bullet",name:"--mdc-bullet-size-small"},{description:"medium size value of the bullet",name:"--mdc-bullet-size-medium"},{description:"large size value of the bullet",name:"--mdc-bullet-size-large"}],members:[{kind:"field",name:"size",type:{text:"Size"},privacy:"public",description:`Size of the bullet

Possible values: 'small', 'medium', 'large'`,default:"small",attribute:"size",reflects:!0}],attributes:[{name:"size",type:{text:"Size"},description:`Size of the bullet

Possible values: 'small', 'medium', 'large'`,default:"small",fieldName:"size"}],superclass:{name:"Component",module:"/src/models"},tagName:"mdc-bullet",jsDoc:`/**
 * Bullet component, which is a visual marker
 * and be used to organize and present items in a list format.
 *
 * @tagname mdc-bullet
 *
 * @cssproperty --mdc-bullet-background-color - background color of the bullet
 * @cssproperty --mdc-bullet-size-small - small size value of the bullet
 * @cssproperty --mdc-bullet-size-medium - medium size value of the bullet
 * @cssproperty --mdc-bullet-size-large - large size value of the bullet
*/`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"Bullet",module:"components/bullet/bullet.component.js"}}]},{kind:"javascript-module",path:"components/button/button.component.js",declarations:[{kind:"class",description:`\`mdc-button\` is a component that can be configured in various ways to suit different use cases.

Button Variants:
- **Primary**: Solid background color.
- **Secondary**: Transparent background with a solid border.
- **Tertiary**: No background or border, appears as plain text but retains all button functionalities.

Button Colors:
- **Positive**: Green color.
- **Negative**: Red color.
- **Accent**: Blue color.
- **Promotional**: Purple color.
- **Default**: White color.

Button Sizes (in REM units):
- **Pill button**: 40, 32, 28, 24.
- **Icon button**: 64, 52, 40, 32, 28, 24.
- **Tertiary icon button**: 20.

Button Types:
- **Pill button**: A button that contains text value. Commonly used for call to action, tags, or filters.
- **Pill button with icons**: A button containing an icon either on the left or right side of the button.
- **Icon button**: A button represented by just an icon without any text.
The type of button is inferred based on the presence of slot and/or prefix and postfix icons.`,name:"Button",slots:[{description:"Text label of the button.",name:""}],members:[{kind:"field",name:"prefixIcon",type:{text:"string | undefined"},description:`The name of the icon to display as a prefix.
The icon is displayed on the left side of the button.`,attribute:"prefix-icon",reflects:!0},{kind:"field",name:"postfixIcon",type:{text:"string | undefined"},description:`The name of the icon to display as a postfix.
The icon is displayed on the right side of the button.`,attribute:"postfix-icon",reflects:!0},{kind:"field",name:"variant",type:{text:"ButtonVariant"},description:`There are 3 variants of button: primary, secondary, tertiary. They are styled differently.
- **Primary**: Solid background color.
- **Secondary**: Transparent background with a solid border.
- **Tertiary**: No background or border, appears as plain text but retains all button functionalities.`,default:"primary",attribute:"variant"},{kind:"field",name:"size",type:{text:"ButtonSize"},description:`Button sizing is based on the button type.
- **Pill button**: 40, 32, 28, 24.
- **Icon button**: 64, 52, 40, 32, 28, 24.
- Tertiary icon button can also be 20.`,default:"32",attribute:"size",reflects:!0,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"color",type:{text:"ButtonColor"},description:"There are 5 colors for button: positive, negative, accent, promotional, default.",default:"default",attribute:"color"},{kind:"field",name:"role",description:`This property defines the ARIA role for the element. By default, it is set to 'button'.
Consumers should override this role when:
- The element is being used in a context where a different role is more appropriate.
- Custom behaviors are implemented that require a specific ARIA role for accessibility purposes.`,default:"'button'",attribute:"role",reflects:!0,type:{text:"string"},inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"modifyIconName",privacy:"private",parameters:[{name:"active",type:{text:"boolean"},description:"The active state."}],description:`Modifies the icon name based on the active state.
If the button is active, the icon name is suffixed with '-filled'.
If the button is inactive, the icon name is restored to its original value.
If '-filled' icon is not available, the icon name remains unchanged.`},{kind:"method",name:"setVariant",privacy:"private",parameters:[{name:"variant",type:{text:"ButtonVariant"},description:"The variant to set."}],description:`Sets the variant attribute for the button component.
If the provided variant is not included in the BUTTON_VARIANTS,
it defaults to the value specified in DEFAULTS.VARIANT.`},{kind:"method",name:"setSize",privacy:"private",parameters:[{name:"size",type:{text:"PillButtonSize | IconButtonSize"},description:"The size to set."}],description:`Sets the size attribute for the button component.
Validates the size based on the button type (icon, pill, or tertiary).
Defaults to DEFAULTS.SIZE if invalid.`},{kind:"method",name:"setColor",privacy:"private",parameters:[{name:"color",type:{text:"ButtonColor"},description:"The color to set."}],description:`Sets the color attribute for the button.
Defaults to DEFAULTS.COLOR if invalid or for tertiary buttons.`},{kind:"method",name:"inferButtonType",privacy:"private",description:"Infers the type of button based on the presence of slot and/or prefix and postfix icons.",parameters:[{description:"default slot of button",name:"slot"}]},{kind:"field",name:"tabIndex",type:{text:"number"},default:"0",description:"This property specifies the tab order of the element.",attribute:"tabIndex",reflects:!0,inheritedFrom:{name:"TabIndexMixin",module:"utils/mixins/TabIndexMixin.js"}},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,attribute:"disabled",reflects:!0,inheritedFrom:{name:"DisabledMixin",module:"utils/mixins/DisabledMixin.js"}},{kind:"field",name:"active",type:{text:"boolean"},default:"false",description:`The button's active state indicates whether it is currently toggled on (active) or off (inactive).
When the active state is true, the button is considered to be in an active state, meaning it is toggled on.
Conversely, when the active state is false, the button is in an inactive state, indicating it is toggled off.`,attribute:"active",inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"softDisabled",type:{text:"boolean"},default:"false",description:`Indicates whether the button is soft disabled.
When set to \`true\`, the button appears visually disabled but still allows
focus, click, and keyboard actions to be passed through.

**Important:** When using soft disabled, consumers must ensure that
the button behaves like a disabled button, allowing only focus and
preventing any interactions (clicks or keyboard actions) from triggering unintended actions.`,attribute:"soft-disabled",inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"type",type:{text:"ButtonType"},description:`This property defines the type attribute for the button element.
The type attribute specifies the behavior of the button when it is clicked.
- **submit**: The button submits the form data to the server.
- **reset**: The button resets the form data to its initial state.
- **button**: The button does nothing when clicked.`,default:"button",attribute:"type",reflects:!0,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"executeAction",privacy:"private",inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"setAriaPressed",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The target element."},{name:"active",type:{text:"boolean"},description:"The active state."}],description:"Sets the aria-pressed attribute based on the active state.",inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"setSoftDisabled",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The button element."},{name:"softDisabled",type:{text:"boolean"},description:"The soft-disabled state."}],description:`Sets the soft-disabled attribute for the button.
When soft-disabled, the button looks to be disabled but remains focusable and clickable.
Also sets/removes aria-disabled attribute.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"setDisabled",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The button element."},{name:"disabled",type:{text:"boolean"},description:"The disabled state."}],description:`Sets the disabled attribute for the button.
When disabled, the button is not focusable or clickable, and tabindex is set to -1.
The previous tabindex is stored and restored when enabled.
Also sets/removes aria-disabled attribute.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"triggerClickEvent",privacy:"private",inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"handleKeyDown",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"},description:"The keyboard event."}],description:`Handles the keydown event on the button.
If the key is 'Enter' or 'Space', the button is pressed.
If the key is 'Enter', the button is pressed. The native HTML button works in the same way.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"handleKeyUp",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"},description:"The keyboard event."}],description:`Handles the keyup event on the button.
If the key is 'Enter' or 'Space', the button is clicked.
If the key is 'Space', the button is pressed. The native HTML button works in the same way.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}}],attributes:[{name:"prefix-icon",type:{text:"string | undefined"},description:`The name of the icon to display as a prefix.
The icon is displayed on the left side of the button.`,fieldName:"prefixIcon"},{name:"postfix-icon",type:{text:"string | undefined"},description:`The name of the icon to display as a postfix.
The icon is displayed on the right side of the button.`,fieldName:"postfixIcon"},{name:"variant",type:{text:"ButtonVariant"},description:`There are 3 variants of button: primary, secondary, tertiary. They are styled differently.
- **Primary**: Solid background color.
- **Secondary**: Transparent background with a solid border.
- **Tertiary**: No background or border, appears as plain text but retains all button functionalities.`,default:"primary",fieldName:"variant"},{name:"size",type:{text:"ButtonSize"},description:`Button sizing is based on the button type.
- **Pill button**: 40, 32, 28, 24.
- **Icon button**: 64, 52, 40, 32, 28, 24.
- Tertiary icon button can also be 20.`,default:"32",fieldName:"size",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{name:"color",type:{text:"ButtonColor"},description:"There are 5 colors for button: positive, negative, accent, promotional, default.",default:"default",fieldName:"color"},{name:"role",description:`This property defines the ARIA role for the element. By default, it is set to 'button'.
Consumers should override this role when:
- The element is being used in a context where a different role is more appropriate.
- Custom behaviors are implemented that require a specific ARIA role for accessibility purposes.`,default:"'button'",fieldName:"role",type:{text:"string"},inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{name:"tabIndex",type:{text:"number"},default:"0",description:"This property specifies the tab order of the element.",fieldName:"tabIndex",inheritedFrom:{name:"TabIndexMixin",module:"src/utils/mixins/TabIndexMixin.ts"}},{name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,fieldName:"disabled",inheritedFrom:{name:"DisabledMixin",module:"src/utils/mixins/DisabledMixin.ts"}},{name:"active",type:{text:"boolean"},default:"false",description:`The button's active state indicates whether it is currently toggled on (active) or off (inactive).
When the active state is true, the button is considered to be in an active state, meaning it is toggled on.
Conversely, when the active state is false, the button is in an inactive state, indicating it is toggled off.`,fieldName:"active",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{name:"soft-disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the button is soft disabled.
When set to \`true\`, the button appears visually disabled but still allows
focus, click, and keyboard actions to be passed through.

**Important:** When using soft disabled, consumers must ensure that
the button behaves like a disabled button, allowing only focus and
preventing any interactions (clicks or keyboard actions) from triggering unintended actions.`,fieldName:"softDisabled",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{name:"type",type:{text:"ButtonType"},description:`This property defines the type attribute for the button element.
The type attribute specifies the behavior of the button when it is clicked.
- **submit**: The button submits the form data to the server.
- **reset**: The button resets the form data to its initial state.
- **button**: The button does nothing when clicked.`,default:"button",fieldName:"type",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}}],superclass:{name:"Buttonsimple",module:"/src/components/buttonsimple/buttonsimple.component"},tagName:"mdc-button",jsDoc:`/**
 * \`mdc-button\` is a component that can be configured in various ways to suit different use cases.
 *
 * Button Variants:
 * - **Primary**: Solid background color.
 * - **Secondary**: Transparent background with a solid border.
 * - **Tertiary**: No background or border, appears as plain text but retains all button functionalities.
 *
 * Button Colors:
 * - **Positive**: Green color.
 * - **Negative**: Red color.
 * - **Accent**: Blue color.
 * - **Promotional**: Purple color.
 * - **Default**: White color.
 *
 * Button Sizes (in REM units):
 * - **Pill button**: 40, 32, 28, 24.
 * - **Icon button**: 64, 52, 40, 32, 28, 24.
 * - **Tertiary icon button**: 20.
 *
 * Button Types:
 * - **Pill button**: A button that contains text value. Commonly used for call to action, tags, or filters.
 * - **Pill button with icons**: A button containing an icon either on the left or right side of the button.
 * - **Icon button**: A button represented by just an icon without any text.
 * The type of button is inferred based on the presence of slot and/or prefix and postfix icons.
 *
 * @dependency mdc-icon
 *
 * @tagname mdc-button
 *
 * @slot - Text label of the button.
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"Button",module:"components/button/button.component.js"}}]},{kind:"javascript-module",path:"components/buttonsimple/buttonsimple.component.js",declarations:[{kind:"class",description:"`mdc-buttonsimple` is a component that can be configured in various ways to suit different use cases.\nIt is used as an internal component and is not intended to be used directly by consumers.\nConsumers should use the `mdc-button` component instead.",name:"Buttonsimple",members:[{kind:"field",name:"active",type:{text:"boolean"},default:"false",description:`The button's active state indicates whether it is currently toggled on (active) or off (inactive).
When the active state is true, the button is considered to be in an active state, meaning it is toggled on.
Conversely, when the active state is false, the button is in an inactive state, indicating it is toggled off.`,attribute:"active"},{kind:"field",name:"softDisabled",type:{text:"boolean"},default:"false",description:`Indicates whether the button is soft disabled.
When set to \`true\`, the button appears visually disabled but still allows
focus, click, and keyboard actions to be passed through.

**Important:** When using soft disabled, consumers must ensure that
the button behaves like a disabled button, allowing only focus and
preventing any interactions (clicks or keyboard actions) from triggering unintended actions.`,attribute:"soft-disabled"},{kind:"field",name:"size",type:{text:"ButtonSize"},description:"Simplebutton size is a super set of all the sizes supported by children components.",default:"32",attribute:"size",reflects:!0},{kind:"field",name:"role",description:`This property defines the ARIA role for the element. By default, it is set to 'button'.
Consumers should override this role when:
- The element is being used in a context where a different role is more appropriate.
- Custom behaviors are implemented that require a specific ARIA role for accessibility purposes.`,default:"button",attribute:"role",reflects:!0},{kind:"field",name:"type",type:{text:"ButtonType"},description:`This property defines the type attribute for the button element.
The type attribute specifies the behavior of the button when it is clicked.
- **submit**: The button submits the form data to the server.
- **reset**: The button resets the form data to its initial state.
- **button**: The button does nothing when clicked.`,default:"button",attribute:"type",reflects:!0},{kind:"method",name:"executeAction",privacy:"private"},{kind:"method",name:"setAriaPressed",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The target element."},{name:"active",type:{text:"boolean"},description:"The active state."}],description:"Sets the aria-pressed attribute based on the active state."},{kind:"method",name:"setSoftDisabled",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The button element."},{name:"softDisabled",type:{text:"boolean"},description:"The soft-disabled state."}],description:`Sets the soft-disabled attribute for the button.
When soft-disabled, the button looks to be disabled but remains focusable and clickable.
Also sets/removes aria-disabled attribute.`},{kind:"method",name:"setDisabled",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The button element."},{name:"disabled",type:{text:"boolean"},description:"The disabled state."}],description:`Sets the disabled attribute for the button.
When disabled, the button is not focusable or clickable, and tabindex is set to -1.
The previous tabindex is stored and restored when enabled.
Also sets/removes aria-disabled attribute.`},{kind:"method",name:"triggerClickEvent",privacy:"private"},{kind:"method",name:"handleKeyDown",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"},description:"The keyboard event."}],description:`Handles the keydown event on the button.
If the key is 'Enter' or 'Space', the button is pressed.
If the key is 'Enter', the button is pressed. The native HTML button works in the same way.`},{kind:"method",name:"handleKeyUp",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"},description:"The keyboard event."}],description:`Handles the keyup event on the button.
If the key is 'Enter' or 'Space', the button is clicked.
If the key is 'Space', the button is pressed. The native HTML button works in the same way.`},{kind:"field",name:"tabIndex",type:{text:"number"},default:"0",description:"This property specifies the tab order of the element.",attribute:"tabIndex",reflects:!0,inheritedFrom:{name:"TabIndexMixin",module:"utils/mixins/TabIndexMixin.js"}},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,attribute:"disabled",reflects:!0,inheritedFrom:{name:"DisabledMixin",module:"utils/mixins/DisabledMixin.js"}}],attributes:[{name:"active",type:{text:"boolean"},default:"false",description:`The button's active state indicates whether it is currently toggled on (active) or off (inactive).
When the active state is true, the button is considered to be in an active state, meaning it is toggled on.
Conversely, when the active state is false, the button is in an inactive state, indicating it is toggled off.`,fieldName:"active"},{name:"soft-disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the button is soft disabled.
When set to \`true\`, the button appears visually disabled but still allows
focus, click, and keyboard actions to be passed through.

**Important:** When using soft disabled, consumers must ensure that
the button behaves like a disabled button, allowing only focus and
preventing any interactions (clicks or keyboard actions) from triggering unintended actions.`,fieldName:"softDisabled"},{name:"size",type:{text:"ButtonSize"},description:"Simplebutton size is a super set of all the sizes supported by children components.",default:"32",fieldName:"size"},{name:"role",description:`This property defines the ARIA role for the element. By default, it is set to 'button'.
Consumers should override this role when:
- The element is being used in a context where a different role is more appropriate.
- Custom behaviors are implemented that require a specific ARIA role for accessibility purposes.`,default:"button",fieldName:"role"},{name:"type",type:{text:"ButtonType"},description:`This property defines the type attribute for the button element.
The type attribute specifies the behavior of the button when it is clicked.
- **submit**: The button submits the form data to the server.
- **reset**: The button resets the form data to its initial state.
- **button**: The button does nothing when clicked.`,default:"button",fieldName:"type"},{name:"tabIndex",type:{text:"number"},default:"0",description:"This property specifies the tab order of the element.",fieldName:"tabIndex",inheritedFrom:{name:"TabIndexMixin",module:"src/utils/mixins/TabIndexMixin.ts"}},{name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,fieldName:"disabled",inheritedFrom:{name:"DisabledMixin",module:"src/utils/mixins/DisabledMixin.ts"}}],mixins:[{name:"TabIndexMixin",module:"/src/utils/mixins/TabIndexMixin"},{name:"DisabledMixin",module:"/src/utils/mixins/DisabledMixin"}],superclass:{name:"Component",module:"/src/models"},tagName:"mdc-buttonsimple",jsDoc:`/**
 * \`mdc-buttonsimple\` is a component that can be configured in various ways to suit different use cases.
 * It is used as an internal component and is not intended to be used directly by consumers.
 * Consumers should use the \`mdc-button\` component instead.
 *
 * @tagname mdc-buttonsimple
 *
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}}]},{kind:"javascript-module",path:"components/checkbox/checkbox.component.js",declarations:[{kind:"class",description:`Checkboxes allow users to select multiple options from a list or turn an item/feature on or off.
These are often used in forms, settings, and selections in lists.

A checkbox component contains an optional label and an optional helper text.`,name:"Checkbox",cssProperties:[{description:"Allows customization of the background color on hover.",name:"--mdc-checkbox-background-color-hover"},{description:"Border color in high contrast.",name:"--mdc-checkbox-border-color"},{description:"Background color for a selected checkbox.",name:"--mdc-checkbox-checked-background-color"},{description:"Background color for a selected checkbox when hovered.",name:"--mdc-checkbox-checked-background-color-hover"},{description:"Background color for a selected checkbox when pressed.",name:"--mdc-checkbox-checked-pressed-icon-color"},{description:"Background color for a disabled checkbox.",name:"--mdc-checkbox-disabled-background-color"},{description:"Border color for a disabled checkbox.",name:"--mdc-checkbox-disabled-border-color"},{description:"Background color for a disabled, selected checkbox.",name:"--mdc-checkbox-disabled-checked-icon-color"},{description:"Icon color for a disabled checkbox.",name:"--mdc-checkbox-disabled-icon-color"},{description:"Background color for an unselected checkbox.",name:"--mdc-checkbox-icon-background-color"},{description:"Default background color for an unselected checkbox.",name:"--mdc-checkbox-icon-border-color"},{description:"Icon color for an unselected checkbox.",name:"--mdc-checkbox-icon-color"},{description:"Background color for a selected checkbox when pressed.",name:"--mdc-checkbox-pressed-icon-color"}],members:[{kind:"field",name:"checked",type:{text:"boolean"},default:"false",description:"Determines whether the checkbox is selected or unselected.",attribute:"checked",reflects:!0},{kind:"field",name:"indeterminate",type:{text:"boolean"},default:"false",description:`This property is used to determine the parent checkbox in a nested checkbox group.
If any one of the children is unselected, then the parent checkbox will be indeterminate.
If all children are either selected or unselected, then the parent checkbox will not be indeterminate.`,attribute:"indeterminate",reflects:!0},{kind:"method",name:"setFormValue",privacy:"private",description:`Updates the form value to reflect the current state of the checkbox.
If checked, the value is set to either the user-provided value or 'on' if no value is provided.
If unchecked, the value is set to null.`},{kind:"method",name:"toggleState",privacy:"private",return:{type:{text:"void"}},description:`Toggles the state of the checkbox element.
If the element is not disabled, then
the checked property is toggled and the indeterminate property is set to false.`},{kind:"method",name:"handleChange",privacy:"public",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"Event"}}],description:`Toggles the state of the checkbox element.
and dispatch the new event.`},{kind:"field",name:"internals"},{kind:"field",name:"helpTextType",type:{text:"ValidationType"},description:"The type of help text. It can be 'default', 'error', 'warning', 'success', 'priority'.",attribute:"help-text-type",reflects:!0,default:"undefined as unknown",inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"name",type:{text:"string"},default:"''",description:`Indicates the name of the component group (ex: checkbox, radio group).
They are used to group elements in a form together.`,attribute:"name",reflects:!0,inheritedFrom:{name:"NameMixin",module:"utils/mixins/NameMixin.js"}},{kind:"field",name:"value",type:{text:"string"},default:"''",description:"Indicates the value of the component group (ex: input, checkbox, radio, select etc...)",attribute:"value",reflects:!0,inheritedFrom:{name:"ValueMixin",module:"utils/mixins/ValueMixin.js"}},{kind:"field",name:"dataAriaLabel",type:{text:"string | null"},default:"null",description:`Defines a string value that labels the current element.
The Aria-Label attribute to be set for accessibility.`,attribute:"data-aria-label",reflects:!0,inheritedFrom:{name:"DataAriaLabelMixin",module:"utils/mixins/DataAriaLabelMixin.js"}},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,attribute:"disabled",reflects:!0,inheritedFrom:{name:"DisabledMixin",module:"utils/mixins/DisabledMixin.js"}},{kind:"field",name:"label",type:{text:"string | undefined"},description:"The label of the input field. It is linked to the input field using the `for` attribute.",attribute:"label",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"id",default:"`mdc-input-${uuidv4()}`",description:"The unique id of the input field. It is used to link the input field with the label.",attribute:"id",inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"helpText",type:{text:"string | undefined"},description:"The help text that is displayed below the input field.",attribute:"help-text",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderLabelElement",privacy:"protected",description:`creates the label element when the label property is set.
id is used to link the label with the input field.`,return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderHelpTextIcon",privacy:"protected",description:`creates the helpertext icon based on the helpTextType for validation.
If the helpTextType is not set, it defaults to 'default' and it doesn't display any icon.`,return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderHelpText",privacy:"protected",description:`creates the helper text component when the helpertext value is set.
It is also used to display the validation message based on the helpTextType.`,return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderLabel",privacy:"protected",description:"renders the mdc-label-text container that contains the label and labelInfoToggleTip.",return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderHelperText",privacy:"protected",description:"renders the mdc-help-text container that contains the helpertext icon and helpertext.",return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}}],events:[{type:{text:"Event"}}],attributes:[{name:"checked",type:{text:"boolean"},default:"false",description:"Determines whether the checkbox is selected or unselected.",fieldName:"checked"},{name:"indeterminate",type:{text:"boolean"},default:"false",description:`This property is used to determine the parent checkbox in a nested checkbox group.
If any one of the children is unselected, then the parent checkbox will be indeterminate.
If all children are either selected or unselected, then the parent checkbox will not be indeterminate.`,fieldName:"indeterminate"},{name:"name",type:{text:"string"},default:"''",description:`Indicates the name of the component group (ex: checkbox, radio group).
They are used to group elements in a form together.`,fieldName:"name",inheritedFrom:{name:"NameMixin",module:"src/utils/mixins/NameMixin.ts"}},{name:"value",type:{text:"string"},default:"''",description:"Indicates the value of the component group (ex: input, checkbox, radio, select etc...)",fieldName:"value",inheritedFrom:{name:"ValueMixin",module:"src/utils/mixins/ValueMixin.ts"}},{name:"data-aria-label",type:{text:"string | null"},default:"null",description:`Defines a string value that labels the current element.
The Aria-Label attribute to be set for accessibility.`,fieldName:"dataAriaLabel",inheritedFrom:{name:"DataAriaLabelMixin",module:"src/utils/mixins/DataAriaLabelMixin.ts"}},{name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,fieldName:"disabled",inheritedFrom:{name:"DisabledMixin",module:"src/utils/mixins/DisabledMixin.ts"}},{name:"label",type:{text:"string | undefined"},description:"The label of the input field. It is linked to the input field using the `for` attribute.",fieldName:"label",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"id",default:"`mdc-input-${uuidv4()}`",description:"The unique id of the input field. It is used to link the input field with the label.",fieldName:"id",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"help-text-type",type:{text:"ValidationType"},description:"The type of help text. It can be 'default', 'error', 'warning', 'success', 'priority'.",fieldName:"helpTextType",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"help-text",type:{text:"string | undefined"},description:"The help text that is displayed below the input field.",fieldName:"helpText",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}}],mixins:[{name:"NameMixin",module:"/src/utils/mixins/NameMixin"},{name:"ValueMixin",module:"/src/utils/mixins/ValueMixin"},{name:"DataAriaLabelMixin",module:"/src/utils/mixins/DataAriaLabelMixin"}],superclass:{name:"FormfieldWrapper",module:"/src/components/formfieldwrapper/formfieldwrapper.component"},tagName:"mdc-checkbox",jsDoc:`/**
 * Checkboxes allow users to select multiple options from a list or turn an item/feature on or off.
 * These are often used in forms, settings, and selections in lists.
 *
 * A checkbox component contains an optional label and an optional helper text.
 *
 * @dependency mdc-icon
 *
 * @tagname mdc-checkbox
 *
 * @cssproperty --mdc-checkbox-background-color-hover - Allows customization of the background color on hover.
 * @cssproperty --mdc-checkbox-border-color - Border color in high contrast.
 * @cssproperty --mdc-checkbox-checked-background-color - Background color for a selected checkbox.
 * @cssproperty --mdc-checkbox-checked-background-color-hover - Background color for a selected checkbox when hovered.
 * @cssproperty --mdc-checkbox-checked-pressed-icon-color - Background color for a selected checkbox when pressed.
 * @cssproperty --mdc-checkbox-disabled-background-color - Background color for a disabled checkbox.
 * @cssproperty --mdc-checkbox-disabled-border-color - Border color for a disabled checkbox.
 * @cssproperty --mdc-checkbox-disabled-checked-icon-color - Background color for a disabled, selected checkbox.
 * @cssproperty --mdc-checkbox-disabled-icon-color - Icon color for a disabled checkbox.
 * @cssproperty --mdc-checkbox-icon-background-color - Background color for an unselected checkbox.
 * @cssproperty --mdc-checkbox-icon-border-color - Default background color for an unselected checkbox.
 * @cssproperty --mdc-checkbox-icon-color - Icon color for an unselected checkbox.
 * @cssproperty --mdc-checkbox-pressed-icon-color - Background color for a selected checkbox when pressed.
 */`,customElement:!0,slots:[{description:"slot to add the label info icon",name:"label-info",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}}]}],exports:[{kind:"js",name:"default",declaration:{name:"Checkbox",module:"components/checkbox/checkbox.component.js"}}]},{kind:"javascript-module",path:"components/divider/divider.component.js",declarations:[{kind:"class",description:`\`mdc-divider\` is a component that provides a line to separate and organize content.
It can also include a button or text positioned centrally, allowing users to interact with the layout.

**Divider Orientation:**
- **Horizontal**: A thin, horizontal line.
- **Vertical**: A thin, vertical line.

**Divider Variants:**
- **solid**: Solid line.
- **gradient**: Gradient Line.

**Divider Types:**
- The type of divider is inferred based on the kind of slot present.
 - **Primary**: A simple horizontal or vertical divider.
 - **Text**: A horizontal divider with a text label in the center.
 - **Grabber Button**: A horizontal or vertical divider with a styled button in the center.

**Accessibility:**
- When the slot is replaced by an \`mdc-button\`:
  - \`aria-label\` should be passed to the \`mdc-button\`.
  - \`aria-expanded\` should be passed to the \`mdc-button\`.

**Notes:**
- If the slot is replaced by an invalid tag name or contains multiple elements,
  the divider defaults to the **Primary** type.
- To override the styles of the divider, use the provided CSS custom properties.`,name:"Divider",cssProperties:[{description:"background color of the divider",name:"--mdc-divider-background-color"},{description:"width of the divider",name:"--mdc-divider-width"},{description:"gradient of the horizontal divider",name:"--mdc-divider-horizontal-gradient"},{description:"gradient of the vertical divider",name:"--mdc-divider-vertical-gradient"},{description:"font size of label in the text divider",name:"--mdc-divider-text-size"},{description:"font color of label in the text divider",name:"--mdc-divider-text-color"},{description:"left and right margin of label in the text divider",name:"--mdc-divider-text-margin"},{description:"line height of label in the text divider",name:"--mdc-divider-text-line-height"},{description:"border radius of the grabber button",name:"--mdc-divider-grabber-button-border-radius"}],members:[{kind:"field",name:"orientation",type:{text:"DividerOrientation"},description:`Two orientations of divider
- **horizontal**: A thin, horizontal line with 0.0625rem width.
- **vertical**: A thin, vertical line with 0.0625rem width.

Note: We do not support "Vertical Text Divider" as of now.`,default:"horizontal",attribute:"orientation",reflects:!0},{kind:"field",name:"variant",type:{text:"DividerVariant"},description:`Two variants of divider
- **solid**: Solid line.
- **gradient**: Gradient Line that fades on either sides of the divider.`,default:"solid",attribute:"variant",reflects:!0},{kind:"field",name:"arrowDirection",type:{text:"Directions"},description:`Direction of the arrow icon, if applicable.
- **positive**
- **negative**

Note: Positive and Negative directions are defined based on Cartesian plane.`,default:"'negative'",attribute:"arrow-direction",reflects:!0},{kind:"field",name:"buttonPosition",type:{text:"Directions"},description:`Position of the button, if applicable.
- **positive**
- **negative**

Note: Positive and Negative directions are defined based on Cartesian plane.`,default:"'negative'",attribute:"button-position",reflects:!0},{kind:"method",name:"setVariant",privacy:"private",parameters:[{name:"variant",type:{text:"DividerVariant"},description:"The variant to set."}],description:`Sets the variant attribute for the divider component.
If the provided variant is not included in the DIVIDER_VARIANT,
it defaults to the value specified in DEFAULTS.VARIANT.`},{kind:"method",name:"setOrientation",privacy:"private",parameters:[{name:"orientation",type:{text:"DividerOrientation"},description:"The orientation to set."}],description:`Sets the orientation attribute for the divider component.
If the provided orientation is not included in the DIVIDER_ORIENTATION,
it defaults to the value specified in DEFAULTS.ORIENTATION.`},{kind:"method",name:"ensureValidDirections",privacy:"private",description:`Sets the buttonPosition and arrowDirection attribute for the divider component.
If the provided buttonPosition and arrowDirection are not included in the DIRECTIONS,
it defaults to the value specified in DIRECTIONS based on the ORIENTATION.`,parameters:[{description:"The buttonPosition to set.",name:"buttonPosition"},{description:"The arrowDirection to set.",name:"arrowDirection"}]},{kind:"method",name:"setGrabberButton",privacy:"private",return:{type:{text:"void"}},description:"Configures the grabber button within the divider.\n\n- Sets the `prefix-icon` attribute for the grabber button based\non the `arrow-direction` and `orientation` properties.\n\nThis method updates the DOM element dynamically if a grabber button is present."},{kind:"method",name:"getArrowIcon",privacy:"private",return:{type:{text:""}},description:"Determines the arrow icon based on the consumer-defined `arrowDirection`."},{kind:"method",name:"inferDividerType",privacy:"private",description:"Infers the type of divider based on the kind of slot present.",parameters:[{description:"default slot of divider",name:"slot"}]}],attributes:[{name:"orientation",type:{text:"DividerOrientation"},description:`Two orientations of divider
- **horizontal**: A thin, horizontal line with 0.0625rem width.
- **vertical**: A thin, vertical line with 0.0625rem width.

Note: We do not support "Vertical Text Divider" as of now.`,default:"horizontal",fieldName:"orientation"},{name:"variant",type:{text:"DividerVariant"},description:`Two variants of divider
- **solid**: Solid line.
- **gradient**: Gradient Line that fades on either sides of the divider.`,default:"solid",fieldName:"variant"},{name:"arrow-direction",type:{text:"Directions"},description:`Direction of the arrow icon, if applicable.
- **positive**
- **negative**

Note: Positive and Negative directions are defined based on Cartesian plane.`,default:"'negative'",fieldName:"arrowDirection"},{name:"button-position",type:{text:"Directions"},description:`Position of the button, if applicable.
- **positive**
- **negative**

Note: Positive and Negative directions are defined based on Cartesian plane.`,default:"'negative'",fieldName:"buttonPosition"}],superclass:{name:"Component",module:"/src/models"},tagName:"mdc-divider",jsDoc:`/**
 * \`mdc-divider\` is a component that provides a line to separate and organize content.
 * It can also include a button or text positioned centrally, allowing users to interact with the layout.
 *
 * **Divider Orientation:**
 * - **Horizontal**: A thin, horizontal line.
 * - **Vertical**: A thin, vertical line.
 *
 * **Divider Variants:**
 * - **solid**: Solid line.
 * - **gradient**: Gradient Line.
 *
 * **Divider Types:**
 * - The type of divider is inferred based on the kind of slot present.
 *  - **Primary**: A simple horizontal or vertical divider.
 *  - **Text**: A horizontal divider with a text label in the center.
 *  - **Grabber Button**: A horizontal or vertical divider with a styled button in the center.
 *
 * **Accessibility:**
 * - When the slot is replaced by an \`mdc-button\`:
 *   - \`aria-label\` should be passed to the \`mdc-button\`.
 *   - \`aria-expanded\` should be passed to the \`mdc-button\`.
 *
 * **Notes:**
 * - If the slot is replaced by an invalid tag name or contains multiple elements,
 *   the divider defaults to the **Primary** type.
 * - To override the styles of the divider, use the provided CSS custom properties.
 *
 * @tagname mdc-divider
 *
 * @cssproperty --mdc-divider-background-color - background color of the divider
 * @cssproperty --mdc-divider-width - width of the divider
 * @cssproperty --mdc-divider-horizontal-gradient - gradient of the horizontal divider
 * @cssproperty --mdc-divider-vertical-gradient - gradient of the vertical divider
 * @cssproperty --mdc-divider-text-size - font size of label in the text divider
 * @cssproperty --mdc-divider-text-color - font color of label in the text divider
 * @cssproperty --mdc-divider-text-margin - left and right margin of label in the text divider
 * @cssproperty --mdc-divider-text-line-height - line height of label in the text divider
 * @cssproperty --mdc-divider-grabber-button-border-radius - border radius of the grabber button
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"Divider",module:"components/divider/divider.component.js"}}]},{kind:"javascript-module",path:"components/formfieldwrapper/formfieldwrapper.component.js",declarations:[{kind:"class",description:`formfieldwrapper is a component that contains the label and helper/validation text
 that can be configured in various ways to suit different use cases (most of the input related components).
It is used as an internal component and is not intended to be used directly by consumers.`,name:"FormfieldWrapper",slots:[{description:"slot to add the label info icon",name:"label-info"}],members:[{kind:"field",name:"label",type:{text:"string | undefined"},description:"The label of the input field. It is linked to the input field using the `for` attribute.",attribute:"label",reflects:!0},{kind:"field",name:"id",default:"`mdc-input-${uuidv4()}`",description:"The unique id of the input field. It is used to link the input field with the label.",attribute:"id"},{kind:"field",name:"helpTextType",type:{text:"ValidationType"},description:"The type of help text. It can be 'default', 'error', 'warning', 'success', 'priority'.",attribute:"help-text-type",reflects:!0},{kind:"field",name:"helpText",type:{text:"string | undefined"},description:"The help text that is displayed below the input field.",attribute:"help-text",reflects:!0},{kind:"method",name:"renderLabelElement",privacy:"protected",description:`creates the label element when the label property is set.
id is used to link the label with the input field.`,return:{type:{text:""}}},{kind:"method",name:"renderHelpTextIcon",privacy:"protected",description:`creates the helpertext icon based on the helpTextType for validation.
If the helpTextType is not set, it defaults to 'default' and it doesn't display any icon.`,return:{type:{text:""}}},{kind:"method",name:"renderHelpText",privacy:"protected",description:`creates the helper text component when the helpertext value is set.
It is also used to display the validation message based on the helpTextType.`,return:{type:{text:""}}},{kind:"method",name:"renderLabel",privacy:"protected",description:"renders the mdc-label-text container that contains the label and labelInfoToggleTip.",return:{type:{text:""}}},{kind:"method",name:"renderHelperText",privacy:"protected",description:"renders the mdc-help-text container that contains the helpertext icon and helpertext.",return:{type:{text:""}}},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,attribute:"disabled",reflects:!0,inheritedFrom:{name:"DisabledMixin",module:"utils/mixins/DisabledMixin.js"}}],attributes:[{name:"label",type:{text:"string | undefined"},description:"The label of the input field. It is linked to the input field using the `for` attribute.",fieldName:"label"},{name:"id",default:"`mdc-input-${uuidv4()}`",description:"The unique id of the input field. It is used to link the input field with the label.",fieldName:"id"},{name:"help-text-type",type:{text:"ValidationType"},description:"The type of help text. It can be 'default', 'error', 'warning', 'success', 'priority'.",fieldName:"helpTextType"},{name:"help-text",type:{text:"string | undefined"},description:"The help text that is displayed below the input field.",fieldName:"helpText"},{name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,fieldName:"disabled",inheritedFrom:{name:"DisabledMixin",module:"src/utils/mixins/DisabledMixin.ts"}}],mixins:[{name:"DisabledMixin",module:"/src/utils/mixins/DisabledMixin"}],superclass:{name:"Component",module:"/src/models"},tagName:"mdc-formfieldwrapper",jsDoc:`/**
 * formfieldwrapper is a component that contains the label and helper/validation text
 *  that can be configured in various ways to suit different use cases (most of the input related components).
 * It is used as an internal component and is not intended to be used directly by consumers.
 *
 * @tagname mdc-formfieldwrapper
 *
 * @slot label-info - slot to add the label info icon
 *
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}}]},{kind:"javascript-module",path:"components/icon/icon.component.js",declarations:[{kind:"class",description:`Icon component that dynamically displays SVG icons based on a valid name.

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

Regarding accessibility, there are three types of icons: decorative, informative and informative standalone.

### Decorative Icons
- Decorative icons do not convey any essential information to the content of a page.
- They should be hidden from screen readers (SR) to prevent confusion for users.
- For decorative icons, an \`aria-label\` is not required, and the \`role\` will be set to null.

### Informative Icons
- Informative icons convey important information that is not adequately represented
  by surrounding text or components.
- They provide valuable context and must be announced by assistive technologies.
- For informative icons, an \`aria-label\` is required, and the \`role\` will be set to "img" automatically.
- If an \`aria-label\` is provided, the role will be set to 'img'; if it is absent,
  the role will be unset.

### Informative Standalone Icons
- If an icon is informative (as mentioned above) and does not belong to a button (=standalone), it must
have a Tooltip that describes what it means.
- For informative standalone icons, an \`aria-label\` & \`tabindex="0"\` is required,
and the \`role\` will be set to "img" automatically.
- **Only use this when a Icon is standalone and is not part of a button or other interactive elements.**`,name:"Icon",cssProperties:[{description:"Allows customization of the default fill color.",name:"--mdc-icon-fill-color"},{description:"Allows customization of the icon size.",name:"--mdc-icon-size"},{description:"Allows customization of the icon border radius.",name:"--mdc-icon-border-radius"}],members:[{kind:"field",name:"iconData",type:{text:"HTMLElement | undefined"},privacy:"private"},{kind:"field",name:"lengthUnitFromContext",type:{text:"string | undefined"},privacy:"private"},{kind:"field",name:"sizeFromContext",type:{text:"number | undefined"},privacy:"private"},{kind:"field",name:"name",type:{text:"IconNames | undefined"},description:"Name of the icon (= filename)",attribute:"name",reflects:!0},{kind:"field",name:"size",type:{text:"number | undefined"},description:"Size of the icon (works in combination with length unit)",attribute:"size"},{kind:"field",name:"lengthUnit",type:{text:"string | undefined"},description:"Length unit attribute for overriding length-unit from `IconProvider`",attribute:"length-unit"},{kind:"field",name:"ariaLabel",type:{text:"string | null"},default:"null",description:"Aria-label attribute to be set for accessibility",attribute:"aria-label"},{kind:"field",name:"iconProviderContext",privacy:"private",readonly:!0},{kind:"field",name:"abortController",type:{text:"AbortController"},privacy:"private",default:"new AbortController()"},{kind:"method",name:"getIconData",privacy:"private",description:`Get Icon Data function which will fetch the icon (currently only svg)
and sets state and attributes once fetched successfully

This method uses abortController.signal to cancel the fetch request when the component is disconnected or updated.
If the request is aborted after the fetch() call has been fulfilled but before the response body has been read,
then attempting to read the response body will reject with an AbortError exception.`},{kind:"method",name:"handleIconLoadedSuccess",privacy:"private",parameters:[{name:"iconHtml",type:{text:"HTMLElement"},description:"The icon html element which has been fetched from the icon provider."}],description:`Sets the iconData state to the fetched icon.
Dispatches a 'load' event on the component once the icon has been successfully loaded.`},{kind:"method",name:"handleIconLoadedFailure",privacy:"private",parameters:[{name:"error",type:{text:"unknown"}}],description:`Dispatches an 'error' event on the component when the icon fetching has failed.
This event bubbles and is cancelable.
The error detail is set to the error object.`},{kind:"method",name:"updateSize",privacy:"private",description:"Updates the size by setting the width and height"},{kind:"field",name:"computedIconSize",privacy:"private",readonly:!0}],attributes:[{name:"name",type:{text:"IconNames | undefined"},description:"Name of the icon (= filename)",fieldName:"name"},{name:"size",type:{text:"number | undefined"},description:"Size of the icon (works in combination with length unit)",fieldName:"size"},{name:"length-unit",type:{text:"string | undefined"},description:"Length unit attribute for overriding length-unit from `IconProvider`",fieldName:"lengthUnit"},{name:"aria-label",type:{text:"string | null"},default:"null",description:"Aria-label attribute to be set for accessibility",fieldName:"ariaLabel"}],superclass:{name:"Component",module:"/src/models"},tagName:"mdc-icon",jsDoc:`/**
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
 * Regarding accessibility, there are three types of icons: decorative, informative and informative standalone.
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
 * - For informative icons, an \`aria-label\` is required, and the \`role\` will be set to "img" automatically.
 * - If an \`aria-label\` is provided, the role will be set to 'img'; if it is absent,
 *   the role will be unset.
 *
 * ### Informative Standalone Icons
 * - If an icon is informative (as mentioned above) and does not belong to a button (=standalone), it must
 * have a Tooltip that describes what it means.
 * - For informative standalone icons, an \`aria-label\` & \`tabindex="0"\` is required,
 * and the \`role\` will be set to "img" automatically.
 * - **Only use this when a Icon is standalone and is not part of a button or other interactive elements.**
 *
 * @tagname mdc-icon
 *
 * @cssproperty --mdc-icon-fill-color - Allows customization of the default fill color.
 * @cssproperty --mdc-icon-size - Allows customization of the icon size.
 * @cssproperty --mdc-icon-border-radius - Allows customization of the icon border radius.
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"Icon",module:"components/icon/icon.component.js"}}]},{kind:"javascript-module",path:"components/iconprovider/iconprovider.component.js",declarations:[{kind:"class",description:`IconProvider component, which allows to be consumed from sub components
(see \`providerUtils.consume\` for how to consume)

Bundling icons will be up to the consumer of this component, such
that only a url has to be passed in from which the icons will be
fetched.`,name:"IconProvider",slots:[{description:"children",name:""}],members:[{kind:"field",name:"Context",privacy:"public",static:!0,description:"Context object of the IconProvider, to be consumed by child components",readonly:!0},{kind:"field",name:"url",type:{text:"string | undefined"},description:"Url of where icons will be fetched from",attribute:"url"},{kind:"field",name:"fileExtension",type:{text:"string | undefined"},description:"File extension of icons",default:"svg",attribute:"file-extension",reflects:!0},{kind:"field",name:"lengthUnit",type:{text:"string"},description:"Length unit used for sizing of icons",default:"em",attribute:"length-unit",reflects:!0},{kind:"field",name:"size",type:{text:"number | undefined"},description:`The default size of the icon.
If not set, it falls back to the size defined by the length unit.`,default:"1",attribute:"size",reflects:!0},{kind:"method",name:"updateValuesInContext",privacy:"private"},{kind:"method",name:"updateContext",privacy:"protected",return:{type:{text:"void"}}}],attributes:[{name:"url",type:{text:"string | undefined"},description:"Url of where icons will be fetched from",fieldName:"url"},{name:"file-extension",type:{text:"string | undefined"},description:"File extension of icons",default:"svg",fieldName:"fileExtension"},{name:"length-unit",type:{text:"string"},description:"Length unit used for sizing of icons",default:"em",fieldName:"lengthUnit"},{name:"size",type:{text:"number | undefined"},description:`The default size of the icon.
If not set, it falls back to the size defined by the length unit.`,default:"1",fieldName:"size"}],superclass:{name:"Provider",module:"/src/models"},tagName:"mdc-iconprovider",jsDoc:`/**
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
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"IconProvider",module:"components/iconprovider/iconprovider.component.js"}}]},{kind:"javascript-module",path:"components/input/input.component.js",declarations:[{kind:"class",description:`mdc-input is a component that allows users to input text.
 It contains:
- label field - describe the input field.
- input field - contains the value
- help text or validation message - displayed below the input field.
- trailing button - it displays a clear the input field.
- prefix text - displayed before the input field.
- leading icon - displayed before the input field.
- clear-aria-label - aria label for the trailing button.
- all the attributes of the input field.`,name:"Input",cssProperties:[{description:"Border color for the input container when disabled",name:"--mdc-input-disabled-border-color"},{description:"Text color for the input field when disabled",name:"--mdc-input-disabled-text-color"},{description:"Background color for the input field when disabled",name:"--mdc-input-disabled-background-color"},{description:"Border color for the input container",name:"--mdc-input-border-color"},{description:"Text color for the input field",name:"--mdc-input-text-color"},{description:"Background color for the input field",name:"--mdc-input-background-color"},{description:"Background color for the selected text",name:"--mdc-input-selection-background-color"},{description:"Text color for the selected text",name:"--mdc-input-selection-text-color"},{description:"Text color for the help text",name:"--mdc-input-support-text-color"},{description:"Background color for the input field when hovered",name:"--mdc-input-hover-background-color"},{description:"Background color for the input field when focused",name:"--mdc-input-focused-background-color"},{description:"Border color for the input container when focused",name:"--mdc-input-focused-border-color"},{description:"Border color for the input container when error",name:"--mdc-input-error-border-color"},{description:"Border color for the input container when warning",name:"--mdc-input-warning-border-color"},{description:"Border color for the input container when success",name:"--mdc-input-success-border-color"},{description:"Border color for the input container when primary",name:"--mdc-input-primary-border-color"}],members:[{kind:"field",name:"placeholder",type:{text:"string"},default:"''",description:"The placeholder text that is displayed when the input field is empty.",attribute:"placeholder"},{kind:"field",name:"required",type:{text:"boolean"},default:"false",description:`required attribute of the input field.
If true, the consumer should indicate it on the label that the input field is required.`,attribute:"required"},{kind:"field",name:"readonly",type:{text:"boolean"},default:"false",description:"readonly attribute of the input field. If true, the input field is read-only.",attribute:"readonly"},{kind:"field",name:"prefixText",type:{text:"string | undefined"},description:`The prefix text that is displayed before the input field. It has a max length of 10 characters.
When the prefix text is set, make sure to set the 'data-aria-label'
attribute with the appropriate value for accessibility.`,attribute:"prefix-text"},{kind:"field",name:"leadingIcon",type:{text:"IconNames | undefined"},description:"The leading icon that is displayed before the input field.",attribute:"leading-icon"},{kind:"field",name:"trailingButton",type:{text:"boolean"},default:"false",description:"The trailing button when set to true, shows a clear button that clears the input field.",attribute:"trailing-button"},{kind:"field",name:"maxlength",type:{text:"number | undefined"},description:"The maximum number of characters that the input field can accept.",attribute:"maxlength"},{kind:"field",name:"minlength",type:{text:"number | undefined"},description:"The minimum number of characters that the input field can accept.",attribute:"minlength"},{kind:"field",name:"autocapitalize",type:{text:"AutoCapitalizeType"},description:"The autocapitalize attribute of the input field.",default:"'off'",attribute:"autocapitalize"},{kind:"field",name:"autocomplete",type:{text:"any"},default:"'off'",description:"The autocomplete attribute of the input field.",attribute:"autocomplete"},{kind:"field",name:"autofocus",type:{text:"boolean"},default:"false",description:"If true, the input field is focused when the component is rendered.",attribute:"autofocus"},{kind:"field",name:"dirname",type:{text:"string | undefined"},description:'Specifies the name of the directionality of text for submission purposes (e.g., "rtl" for right-to-left).',attribute:"dirname"},{kind:"field",name:"pattern",type:{text:"string | undefined"},description:`The pattern attribute of the input field.
Specifies a regular expression that the input value must match for validation purposes.`,attribute:"pattern"},{kind:"field",name:"list",type:{text:"string | undefined"},description:`The list attribute of the input field.
Identifies a list of pre-defined options to suggest to the user.`,attribute:"list"},{kind:"field",name:"size",type:{text:"number | undefined | undefined"},description:`The size attribute of the input field.
Specifies the width of the input field.`,default:"undefined",attribute:"size"},{kind:"field",name:"clearAriaLabel",type:{text:"string"},default:"''",description:"Aria label for the trailing button. If trailing button is set to true, this label is used for the clear button.",attribute:"clear-aria-label"},{kind:"method",name:"checkValidity",return:{type:{text:"boolean"}}},{kind:"method",name:"reportValidity"},{kind:"method",name:"handleValueChange",description:`Handles the value change of the input field.
Sets the form value and updates the validity of the input field.`,return:{type:{text:""}}},{kind:"method",name:"setValidityFromInput",privacy:"private",description:"Sets the validity of the input field based on the input field's validity.",return:{type:{text:""}}},{kind:"method",name:"updateValue",privacy:"private",description:`Updates the value of the input field.
Sets the form value.`,return:{type:{text:""}}},{kind:"method",name:"onInput",privacy:"private",description:`Handles the input event of the input field.
Updates the value and sets the validity of the input field.`},{kind:"method",name:"onChange",privacy:"private",parameters:[{name:"event",type:{text:"Event"},description:"Event which contains information about the value change."}],description:`Handles the change event of the input field.
Updates the value and sets the validity of the input field.

The 'change' event does not bubble up through the shadow DOM as it was not composed.
Therefore, we need to re-dispatch the same event to ensure it is propagated correctly.
Read more: https://developer.mozilla.org/en-US/docs/Web/API/Event/composed`},{kind:"method",name:"renderLeadingIcon",privacy:"protected",description:`Renders the leading icon before the input field.
If the leading icon is not set, it will not be displayed.`,return:{type:{text:""}}},{kind:"method",name:"renderPrefixText",privacy:"protected",description:`Renders the prefix text before the input field.
If the prefix text is more than 10 characters,
- it will not be displayed.
- the validation messsage will be displayed.

 Note: We are setting aria-hidden so that the screen reader does not read the prefix text.
 The consumers should set the appropriate aria-label for the input field using 'data-aria-label' attribute.`,return:{type:{text:""}}},{kind:"method",name:"clearInputText",privacy:"private",description:"Clears the input field."},{kind:"method",name:"renderTrailingButton",privacy:"protected",description:"Renders the trailing button to clear the input field if the trailingButton is set to true.",return:{type:{text:""}}},{kind:"field",name:"dataAriaLabel",type:{text:"string | null"},default:"null",description:`Defines a string value that labels the current element.
The Aria-Label attribute to be set for accessibility.`,attribute:"data-aria-label",reflects:!0,inheritedFrom:{name:"DataAriaLabelMixin",module:"utils/mixins/DataAriaLabelMixin.js"}},{kind:"field",name:"value",type:{text:"string"},default:"''",description:"Indicates the value of the component group (ex: input, checkbox, radio, select etc...)",attribute:"value",reflects:!0,inheritedFrom:{name:"ValueMixin",module:"utils/mixins/ValueMixin.js"}},{kind:"field",name:"name",type:{text:"string"},default:"''",description:`Indicates the name of the component group (ex: checkbox, radio group).
They are used to group elements in a form together.`,attribute:"name",reflects:!0,inheritedFrom:{name:"NameMixin",module:"utils/mixins/NameMixin.js"}},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,attribute:"disabled",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"label",type:{text:"string | undefined"},description:"The label of the input field. It is linked to the input field using the `for` attribute.",attribute:"label",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"id",default:"`mdc-input-${uuidv4()}`",description:"The unique id of the input field. It is used to link the input field with the label.",attribute:"id",inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"helpTextType",type:{text:"ValidationType"},description:"The type of help text. It can be 'default', 'error', 'warning', 'success', 'priority'.",attribute:"help-text-type",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"helpText",type:{text:"string | undefined"},description:"The help text that is displayed below the input field.",attribute:"help-text",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderLabelElement",privacy:"protected",description:`creates the label element when the label property is set.
id is used to link the label with the input field.`,return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderHelpTextIcon",privacy:"protected",description:`creates the helpertext icon based on the helpTextType for validation.
If the helpTextType is not set, it defaults to 'default' and it doesn't display any icon.`,return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderHelpText",privacy:"protected",description:`creates the helper text component when the helpertext value is set.
It is also used to display the validation message based on the helpTextType.`,return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderLabel",privacy:"protected",description:"renders the mdc-label-text container that contains the label and labelInfoToggleTip.",return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderHelperText",privacy:"protected",description:"renders the mdc-help-text container that contains the helpertext icon and helpertext.",return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}}],events:[{type:{text:"EventConstructor"}}],attributes:[{name:"placeholder",type:{text:"string"},default:"''",description:"The placeholder text that is displayed when the input field is empty.",fieldName:"placeholder"},{name:"required",type:{text:"boolean"},default:"false",description:`required attribute of the input field.
If true, the consumer should indicate it on the label that the input field is required.`,fieldName:"required"},{name:"readonly",type:{text:"boolean"},default:"false",description:"readonly attribute of the input field. If true, the input field is read-only.",fieldName:"readonly"},{name:"prefix-text",type:{text:"string | undefined"},description:`The prefix text that is displayed before the input field. It has a max length of 10 characters.
When the prefix text is set, make sure to set the 'data-aria-label'
attribute with the appropriate value for accessibility.`,fieldName:"prefixText"},{name:"leading-icon",type:{text:"IconNames | undefined"},description:"The leading icon that is displayed before the input field.",fieldName:"leadingIcon"},{name:"trailing-button",type:{text:"boolean"},default:"false",description:"The trailing button when set to true, shows a clear button that clears the input field.",fieldName:"trailingButton"},{name:"maxlength",type:{text:"number | undefined"},description:"The maximum number of characters that the input field can accept.",fieldName:"maxlength"},{name:"minlength",type:{text:"number | undefined"},description:"The minimum number of characters that the input field can accept.",fieldName:"minlength"},{name:"autocapitalize",type:{text:"AutoCapitalizeType"},description:"The autocapitalize attribute of the input field.",default:"'off'",fieldName:"autocapitalize"},{name:"autocomplete",type:{text:"any"},default:"'off'",description:"The autocomplete attribute of the input field.",fieldName:"autocomplete"},{name:"autofocus",type:{text:"boolean"},default:"false",description:"If true, the input field is focused when the component is rendered.",fieldName:"autofocus"},{name:"dirname",type:{text:"string | undefined"},description:'Specifies the name of the directionality of text for submission purposes (e.g., "rtl" for right-to-left).',fieldName:"dirname"},{name:"pattern",type:{text:"string | undefined"},description:`The pattern attribute of the input field.
Specifies a regular expression that the input value must match for validation purposes.`,fieldName:"pattern"},{name:"list",type:{text:"string | undefined"},description:`The list attribute of the input field.
Identifies a list of pre-defined options to suggest to the user.`,fieldName:"list"},{name:"size",type:{text:"number | undefined | undefined"},description:`The size attribute of the input field.
Specifies the width of the input field.`,default:"undefined",fieldName:"size"},{name:"clear-aria-label",type:{text:"string"},default:"''",description:"Aria label for the trailing button. If trailing button is set to true, this label is used for the clear button.",fieldName:"clearAriaLabel"},{name:"data-aria-label",type:{text:"string | null"},default:"null",description:`Defines a string value that labels the current element.
The Aria-Label attribute to be set for accessibility.`,fieldName:"dataAriaLabel",inheritedFrom:{name:"DataAriaLabelMixin",module:"src/utils/mixins/DataAriaLabelMixin.ts"}},{name:"value",type:{text:"string"},default:"''",description:"Indicates the value of the component group (ex: input, checkbox, radio, select etc...)",fieldName:"value",inheritedFrom:{name:"ValueMixin",module:"src/utils/mixins/ValueMixin.ts"}},{name:"name",type:{text:"string"},default:"''",description:`Indicates the name of the component group (ex: checkbox, radio group).
They are used to group elements in a form together.`,fieldName:"name",inheritedFrom:{name:"NameMixin",module:"src/utils/mixins/NameMixin.ts"}},{name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,fieldName:"disabled",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"label",type:{text:"string | undefined"},description:"The label of the input field. It is linked to the input field using the `for` attribute.",fieldName:"label",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"id",default:"`mdc-input-${uuidv4()}`",description:"The unique id of the input field. It is used to link the input field with the label.",fieldName:"id",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"help-text-type",type:{text:"ValidationType"},description:"The type of help text. It can be 'default', 'error', 'warning', 'success', 'priority'.",fieldName:"helpTextType",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"help-text",type:{text:"string | undefined"},description:"The help text that is displayed below the input field.",fieldName:"helpText",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}}],mixins:[{name:"DataAriaLabelMixin",module:"/src/utils/mixins/DataAriaLabelMixin"},{name:"ValueMixin",module:"/src/utils/mixins/ValueMixin"},{name:"NameMixin",module:"/src/utils/mixins/NameMixin"}],superclass:{name:"FormfieldWrapper",module:"/src/components/formfieldwrapper"},tagName:"mdc-input",jsDoc:`/**
 * mdc-input is a component that allows users to input text.
 *  It contains:
 * - label field - describe the input field.
 * - input field - contains the value
 * - help text or validation message - displayed below the input field.
 * - trailing button - it displays a clear the input field.
 * - prefix text - displayed before the input field.
 * - leading icon - displayed before the input field.
 * - clear-aria-label - aria label for the trailing button.
 * - all the attributes of the input field.
 *
 * @tagname mdc-input
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 * @dependency mdc-button
 *
 * @cssproperty --mdc-input-disabled-border-color - Border color for the input container when disabled
 * @cssproperty --mdc-input-disabled-text-color - Text color for the input field when disabled
 * @cssproperty --mdc-input-disabled-background-color - Background color for the input field when disabled
 * @cssproperty --mdc-input-border-color - Border color for the input container
 * @cssproperty --mdc-input-text-color - Text color for the input field
 * @cssproperty --mdc-input-background-color - Background color for the input field
 * @cssproperty --mdc-input-selection-background-color - Background color for the selected text
 * @cssproperty --mdc-input-selection-text-color - Text color for the selected text
 * @cssproperty --mdc-input-support-text-color - Text color for the help text
 * @cssproperty --mdc-input-hover-background-color - Background color for the input field when hovered
 * @cssproperty --mdc-input-focused-background-color - Background color for the input field when focused
 * @cssproperty --mdc-input-focused-border-color - Border color for the input container when focused
 * @cssproperty --mdc-input-error-border-color - Border color for the input container when error
 * @cssproperty --mdc-input-warning-border-color - Border color for the input container when warning
 * @cssproperty --mdc-input-success-border-color - Border color for the input container when success
 * @cssproperty --mdc-input-primary-border-color - Border color for the input container when primary
 *
 */`,customElement:!0,slots:[{description:"slot to add the label info icon",name:"label-info",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}}]}],exports:[{kind:"js",name:"default",declaration:{name:"Input",module:"components/input/input.component.js"}}]},{kind:"javascript-module",path:"components/link/link.component.js",declarations:[{kind:"class",description:"`mdc-link` component can be used to navigate to a different page\nwithin the application or to an external site. It can be used to link to\nemails or phone numbers.\n\nThe `children` of the link component is expected to be an anchor element\ncontaining the text, href, and other attributes.\n\nFor `icon`, the `mdc-icon` component is used to render the icon.",name:"Link",cssProperties:[{description:"Border radius of the link",name:"--mdc-link-border-radius"},{description:"Text and icon color of the link in active state",name:"--mdc-link-color-active"},{description:"Text and icon color of the link in disabled state",name:"--mdc-link-color-disabled"},{description:"Text and icon color of the link in hover state",name:"--mdc-link-color-hover"},{description:"Text and icon color of the link in normal state",name:"--mdc-link-color-normal"},{description:"Gap between the text and icon (only applicable when an icon is set)",name:"--mdc-link-icon-margin-left"},{description:"Text and icon color of the inverted link in active state",name:"--mdc-link-inverted-color-active"},{description:"Text and icon color of the inverted link in disabled state",name:"--mdc-link-inverted-color-disabled"},{description:"Text and icon color of the inverted link in hover state",name:"--mdc-link-inverted-color-hover"},{description:"Text and icon color of the inverted link in normal state",name:"--mdc-link-inverted-color-normal"},{description:"Text decoration of the link in disabled state for all variants",name:"--mdc-link-text-decoration-disabled"}],members:[{kind:"field",name:"iconName",type:{text:"IconNames | undefined"},description:"Name of the icon (= filename) to be used as trailing icon for link.\n\nIf no `icon` is provided, no icon will be rendered.",attribute:"icon-name"},{kind:"field",name:"inline",type:{text:"boolean"},description:"The link can be inline or standalone.",default:"false",attribute:"inline",reflects:!0},{kind:"field",name:"inverted",type:{text:"boolean"},description:"The link color can be inverted by setting the inverted attribute to true.",default:"false",attribute:"inverted",reflects:!0},{kind:"field",name:"size",type:{text:"LinkSize"},description:`Size of the link.
Acceptable values include:

- 'small'
- 'midsize'
- 'large'`,default:"large",attribute:"size",reflects:!0},{kind:"method",name:"getIconSize",privacy:"private",return:{type:{text:""}},description:"Method to get the size of the trailing icon based on the link size."},{kind:"method",name:"setDisabled",privacy:"private",parameters:[{name:"disabled",type:{text:"boolean"},description:"The disabled state of icon"}],description:`Updates the tabindex of the host element to disable or enable the link.
When disabled, the link is not focusable or clickable, and tabindex is set to -1
and aria-disabled attribute is set to true
When link is not disabled, the previous tabindex of the host element is restored
and aria-disabled attribute is removed.`},{kind:"method",name:"updateTrailingIcon",privacy:"private",description:`Method to create and append trailing icon to the first anchor element in the slot.
If no icon name is provided, no icon will be rendered.`},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,attribute:"disabled",reflects:!0,inheritedFrom:{name:"DisabledMixin",module:"utils/mixins/DisabledMixin.js"}}],attributes:[{name:"icon-name",type:{text:"IconNames | undefined"},description:"Name of the icon (= filename) to be used as trailing icon for link.\n\nIf no `icon` is provided, no icon will be rendered.",fieldName:"iconName"},{name:"inline",type:{text:"boolean"},description:"The link can be inline or standalone.",default:"false",fieldName:"inline"},{name:"inverted",type:{text:"boolean"},description:"The link color can be inverted by setting the inverted attribute to true.",default:"false",fieldName:"inverted"},{name:"size",type:{text:"LinkSize"},description:`Size of the link.
Acceptable values include:

- 'small'
- 'midsize'
- 'large'`,default:"large",fieldName:"size"},{name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,fieldName:"disabled",inheritedFrom:{name:"DisabledMixin",module:"src/utils/mixins/DisabledMixin.ts"}}],mixins:[{name:"DisabledMixin",module:"/src/utils/mixins/DisabledMixin"}],superclass:{name:"Component",module:"/src/models"},tagName:"mdc-link",jsDoc:`/**
 * \`mdc-link\` component can be used to navigate to a different page
 * within the application or to an external site. It can be used to link to
 * emails or phone numbers.
 *
 * The \`children\` of the link component is expected to be an anchor element
 * containing the text, href, and other attributes.
 *
 * For \`icon\`, the \`mdc-icon\` component is used to render the icon.
 *
 * @dependency mdc-icon
 *
 * @tagname mdc-link
 *
 * @cssproperty --mdc-link-border-radius - Border radius of the link
 * @cssproperty --mdc-link-color-active - Text and icon color of the link in active state
 * @cssproperty --mdc-link-color-disabled - Text and icon color of the link in disabled state
 * @cssproperty --mdc-link-color-hover - Text and icon color of the link in hover state
 * @cssproperty --mdc-link-color-normal - Text and icon color of the link in normal state
 * @cssproperty --mdc-link-icon-margin-left - Gap between the text and icon (only applicable when an icon is set)
 * @cssproperty --mdc-link-inverted-color-active - Text and icon color of the inverted link in active state
 * @cssproperty --mdc-link-inverted-color-disabled - Text and icon color of the inverted link in disabled state
 * @cssproperty --mdc-link-inverted-color-hover - Text and icon color of the inverted link in hover state
 * @cssproperty --mdc-link-inverted-color-normal - Text and icon color of the inverted link in normal state
 * @cssproperty --mdc-link-text-decoration-disabled - Text decoration of the link in disabled state for all variants
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"Link",module:"components/link/link.component.js"}}]},{kind:"javascript-module",path:"components/marker/marker.component.js",declarations:[{kind:"class",description:`\`mdc-marker\`, which is a vertical line and
used to draw attention to specific parts of
the content or to signify important information.

**Marker Variants**:
- **solid**: Solid marker.
- **striped**: Striped marker.`,name:"Marker",cssProperties:[{description:"Allows customization of the default background color in solid variant.",name:"--mdc-marker-solid-background-color"},{description:"Allows customization of the default stripes in striped variant.",name:"--mdc-marker-striped-color"},{description:"Allows customization of the default background color in striped variant.",name:"--mdc-marker-striped-background-color"},{description:"Allows customization of the default width.",name:"--mdc-marker-width"}],members:[{kind:"field",name:"variant",type:{text:"MarkerVariants"},privacy:"public",description:`There are two variants of markers, each with a width of 0.25rem:
- **solid**: Solid marker.
- **striped**: Striped marker.`,default:"solid",attribute:"variant",reflects:!0}],attributes:[{name:"variant",type:{text:"MarkerVariants"},description:`There are two variants of markers, each with a width of 0.25rem:
- **solid**: Solid marker.
- **striped**: Striped marker.`,default:"solid",fieldName:"variant"}],superclass:{name:"Component",module:"/src/models"},tagName:"mdc-marker",jsDoc:`/**
 * \`mdc-marker\`, which is a vertical line and
 * used to draw attention to specific parts of
 * the content or to signify important information.
 *
 * **Marker Variants**:
 * - **solid**: Solid marker.
 * - **striped**: Striped marker.
 *
 * @tagname mdc-marker
 *
 * @cssproperty --mdc-marker-solid-background-color - Allows customization of the default background color
 * in solid variant.
 * @cssproperty --mdc-marker-striped-color - Allows customization of the default stripes in striped variant.
 * @cssproperty --mdc-marker-striped-background-color - Allows customization of the default background color
 * in striped variant.
 * @cssproperty --mdc-marker-width - Allows customization of the default width.
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"Marker",module:"components/marker/marker.component.js"}}]},{kind:"javascript-module",path:"components/modalcontainer/modalcontainer.component.js",declarations:[{kind:"class",description:"The `mdc-modalcontainer` component is an element used to\ndisplay a modal container that can further be used in popover.",name:"Modalcontainer",cssProperties:[{description:"primary background color of the modalcontainer",name:"--mdc-modalcontainer-primary-background-color"},{description:"border color of the modalcontainer",name:"--mdc-modalcontainer-border-color"},{description:"inverted background color of the modalcontainer",name:"--mdc-modalcontainer-inverted-background-color"},{description:"inverted border color of the modalcontainer",name:"--mdc-modalcontainer-inverted-border-color"},{description:"inverted text color of the modalcontainer",name:"--mdc-modalcontainer-inverted-text-color"}],slots:[{description:"Default slot for modal container",name:""}],members:[{kind:"field",name:"color",type:{text:"ModalContainerColor"},description:`Color of the modalcontainer
- **tonal**
- **contrast**`,default:"tonal",attribute:"color",reflects:!0},{kind:"field",name:"elevation",type:{text:"ModalContainerElevation"},description:`Elevation of the modalcontainer where each value corresponds to a different drop shadow.
- **0**
- **1**
- **2**
- **3**
- **4**`,default:"0",attribute:"elevation",reflects:!0},{kind:"field",name:"role",type:{text:"ModalContainerRole"},description:"Role of the modalcontainer",default:"dialog",attribute:"role"}],attributes:[{name:"color",type:{text:"ModalContainerColor"},description:`Color of the modalcontainer
- **tonal**
- **contrast**`,default:"tonal",fieldName:"color"},{name:"elevation",type:{text:"ModalContainerElevation"},description:`Elevation of the modalcontainer where each value corresponds to a different drop shadow.
- **0**
- **1**
- **2**
- **3**
- **4**`,default:"0",fieldName:"elevation"},{name:"role",type:{text:"ModalContainerRole"},description:"Role of the modalcontainer",default:"dialog",fieldName:"role"}],superclass:{name:"Component",module:"/src/models"},tagName:"mdc-modalcontainer",jsDoc:`/**
 * The \`mdc-modalcontainer\` component is an element used to
 * display a modal container that can further be used in popover.
 *
 * @tagname mdc-modalcontainer
 *
 * @cssproperty --mdc-modalcontainer-primary-background-color - primary background color of the modalcontainer
 * @cssproperty --mdc-modalcontainer-border-color - border color of the modalcontainer
 * @cssproperty --mdc-modalcontainer-inverted-background-color - inverted background color of the modalcontainer
 * @cssproperty --mdc-modalcontainer-inverted-border-color - inverted border color of the modalcontainer
 * @cssproperty --mdc-modalcontainer-inverted-text-color - inverted text color of the modalcontainer
 *
 * @slot - Default slot for modal container
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"Modalcontainer",module:"components/modalcontainer/modalcontainer.component.js"}}]},{kind:"javascript-module",path:"components/presence/presence.component.js",declarations:[{kind:"class",description:`The \`mdc-presence\` component is a versatile UI element used to
display the presence status of a user or entity within an avatar component.

This component is ideal for use within avatar UIs where the presence status
needs to be visually represented.`,name:"Presence",cssProperties:[{description:"The background color of the presence type active.",name:"--mdc-presence-active-background-color"},{description:"The background color of the presence type away.",name:"--mdc-presence-away-background-color"},{description:"The background color of the presence type away-calling.",name:"--mdc-presence-away-calling-background-color"},{description:"The background color of the presence type busy.",name:"--mdc-presence-busy-background-color"},{description:"The background color of the presence type dnd.",name:"--mdc-presence-dnd-background-color"},{description:"The background color of the presence type meeting.",name:"--mdc-presence-meeting-background-color"},{description:"The background color of the presence type on-call.",name:"--mdc-presence-on-call-background-color"},{description:"The background color of the presence type on-device.",name:"--mdc-presence-on-device-background-color"},{description:"The background color of the presence type on-mobile.",name:"--mdc-presence-on-mobile-background-color"},{description:"The background color of the presence type pause.",name:"--mdc-presence-pause-background-color"},{description:"The background color of the presence type pto.",name:"--mdc-presence-pto-background-color"},{description:"The background color of the presence type presenting.",name:"--mdc-presence-presenting-background-color"},{description:"The background color of the presence type quiet.",name:"--mdc-presence-quiet-background-color"},{description:"The background color of the presence type scheduled.",name:"--mdc-presence-scheduled-background-color"},{description:"The background color of the presence type overlay.",name:"--mdc-presence-overlay-background-color"}],members:[{kind:"field",name:"type",type:{text:"PresenceType"},description:"Supported presence types:\n- `active`\n- `away`\n- `away-calling`\n- `busy`\n- `dnd`\n- `meeting`\n- `on-call`\n- `on-device`\n- `on-mobile`\n- `pause`\n- `pto`\n- `presenting`\n- `quiet`\n- `scheduled`",default:"active",attribute:"type",reflects:!0},{kind:"field",name:"size",type:{text:"PresenceSize"},description:`Acceptable values include:
- XX_SMALL
- X_SMALL
- SMALL
- MIDSIZE
- LARGE
- X_LARGE
- XX_LARGE

Presence icons are minimum 14px in size, meaning XX_Small, X_Small and Small presence
icons will be no smaller than 14px.`,default:"small",attribute:"size",reflects:!0},{kind:"field",name:"iconSize",privacy:"private",description:"Get the size of the presence icon based on the given size type",readonly:!0},{kind:"field",name:"icon",privacy:"private",description:"Get the icon name based on the presence type",readonly:!0},{kind:"method",name:"handleOnLoad",privacy:"private",return:{type:{text:"void"}},description:"Handles the successful load of an icon.\nSets the `currentIconType` property to match the `type` property."},{kind:"method",name:"handleOnError",privacy:"private",return:{type:{text:"void"}},description:"Handles an error that occurs when loading an icon."}],attributes:[{name:"type",type:{text:"PresenceType"},description:"Supported presence types:\n- `active`\n- `away`\n- `away-calling`\n- `busy`\n- `dnd`\n- `meeting`\n- `on-call`\n- `on-device`\n- `on-mobile`\n- `pause`\n- `pto`\n- `presenting`\n- `quiet`\n- `scheduled`",default:"active",fieldName:"type"},{name:"size",type:{text:"PresenceSize"},description:`Acceptable values include:
- XX_SMALL
- X_SMALL
- SMALL
- MIDSIZE
- LARGE
- X_LARGE
- XX_LARGE

Presence icons are minimum 14px in size, meaning XX_Small, X_Small and Small presence
icons will be no smaller than 14px.`,default:"small",fieldName:"size"}],superclass:{name:"Component",module:"/src/models"},tagName:"mdc-presence",jsDoc:`/**
 * The \`mdc-presence\` component is a versatile UI element used to
 * display the presence status of a user or entity within an avatar component.
 *
 * This component is ideal for use within avatar UIs where the presence status
 * needs to be visually represented.
 *
 * @dependency mdc-icon
 *
 * @tagname mdc-presence
 *
 * @cssproperty --mdc-presence-active-background-color - The background color of the presence type active.
 * @cssproperty --mdc-presence-away-background-color - The background color of the presence type away.
 * @cssproperty --mdc-presence-away-calling-background-color - The background color of the presence type away-calling.
 * @cssproperty --mdc-presence-busy-background-color - The background color of the presence type busy.
 * @cssproperty --mdc-presence-dnd-background-color - The background color of the presence type dnd.
 * @cssproperty --mdc-presence-meeting-background-color - The background color of the presence type meeting.
 * @cssproperty --mdc-presence-on-call-background-color - The background color of the presence type on-call.
 * @cssproperty --mdc-presence-on-device-background-color - The background color of the presence type on-device.
 * @cssproperty --mdc-presence-on-mobile-background-color - The background color of the presence type on-mobile.
 * @cssproperty --mdc-presence-pause-background-color - The background color of the presence type pause.
 * @cssproperty --mdc-presence-pto-background-color - The background color of the presence type pto.
 * @cssproperty --mdc-presence-presenting-background-color - The background color of the presence type presenting.
 * @cssproperty --mdc-presence-quiet-background-color - The background color of the presence type quiet.
 * @cssproperty --mdc-presence-scheduled-background-color - The background color of the presence type scheduled.
 * @cssproperty --mdc-presence-overlay-background-color - The background color of the presence type overlay.
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"Presence",module:"components/presence/presence.component.js"}}]},{kind:"javascript-module",path:"components/text/text.component.js",declarations:[{kind:"class",description:"Text component for creating styled text elements.\nIt has to be mounted within the ThemeProvider to access color and font tokens.\n\nThe `type` attribute allows changing the text style.\nThe `tagname` attribute allows changing the tag name of the text element.\nThe default tag name is `p`.\n\nThe `tagname` attribute should be a valid HTML tag name.\nIf the `tagname` attribute is not a valid HTML tag name, the default tag name will be used.\n\nThe styling is applied based on the `type` attribute.",name:"Text",cssParts:[{description:"The text element",name:"text"}],slots:[{description:"Default slot for text content",name:""}],members:[{kind:"field",name:"type",type:{text:"TextType"},privacy:"public",description:`Specifies the text style to be applied.

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
- 'headline-small-regular'`,default:"body-large-regular",attribute:"type",reflects:!0},{kind:"field",name:"tagname",type:{text:"TagName | undefined"},privacy:"public",description:`Specifies the HTML tag name for the text element. The default tag name is \`p\`.
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
Note that the styling is determined by the \`type\` attribute.`,attribute:"tagname",reflects:!0}],attributes:[{name:"type",type:{text:"TextType"},description:`Specifies the text style to be applied.

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
- 'headline-small-regular'`,default:"body-large-regular",fieldName:"type"},{name:"tagname",type:{text:"TagName | undefined"},description:`Specifies the HTML tag name for the text element. The default tag name is \`p\`.
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
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"ThemeProvider",module:"components/themeprovider/themeprovider.component.js"}}]},{kind:"javascript-module",path:"components/toggle/toggle.component.js",declarations:[{kind:"class",description:`Toggle Component is an interactive control used to switch between two mutually exclusive options,
such as On/Off, Active/Inactive. These are commonly used in settings panels, forms, and preference selections
where users need to enable or disable a feature.
It contains an optional label and an optional helper text.

Note: It internally renders a checkbox styled as a toggle switch.`,name:"Toggle",cssProperties:[{description:"width of the toggle",name:"--mdc-toggle-width"},{description:"height of the toggle",name:"--mdc-toggle-height"},{description:"width of the toggle when it's size is compact",name:"--mdc-toggle-width-compact"},{description:"height of the toggle when it's size is compact",name:"--mdc-toggle-height-compact"},{description:"border radius of the toggle",name:"--mdc-toggle-border-radius"},{description:"border radius of the toggle when it's size is compact",name:"--mdc-toggle-border-radius-compact"},{description:"border of the toggle",name:"--mdc-toggle-border"},{description:"background color of the inactive toggle in rest state",name:"--mdc-toggle-inactive-rest-color"},{description:"background color of the inactive toggle in hover state",name:"--mdc-toggle-inactive-hover-color"},{description:"background color of the inactive toggle in pressed state",name:"--mdc-toggle-inactive-pressed-color"},{description:"background color of the inactive toggle in disabled state",name:"--mdc-toggle-inactive-disabled-color"},{description:"background color of the active toggle in rest state",name:"--mdc-toggle-active-rest-color"},{description:"background color of the active toggle in hover state",name:"--mdc-toggle-active-hover-color"},{description:"background color of the active toggle in pressed state",name:"--mdc-toggle-active-pressed-color"},{description:"background color of the active toggle in disabled state",name:"--mdc-toggle-active-disabled-color"},{description:" color of the help text label",name:"--mdc-toggle-help-text-color"},{description:"color of the toggle label and help text in disabled state",name:"--mdc-toggle-label-color-disabled"}],members:[{kind:"field",name:"checked",type:{text:"boolean"},default:"false",description:"Determines whether the toggle is active or inactive.",attribute:"checked",reflects:!0},{kind:"field",name:"size",type:{text:"ToggleSize"},description:`Determines toggle size in rem (height is specified here).
- **Default**: 1.5
- **Compact**: 1`,default:"default",attribute:"size",reflects:!0},{kind:"method",name:"setFormValue",privacy:"private",description:`Updates the form value to reflect the current state of the toggle.
If toggle is switched on, the value is set to either the user-provided value or 'isActive' if no value is provided.
If toggle is switched off, the value is set to null.`},{kind:"method",name:"toggleState",privacy:"private",return:{type:{text:"void"}},description:`Toggles the state of the toggle element.
If the element is not disabled, then the checked property is toggled.`},{kind:"method",name:"handleChange",privacy:"private",parameters:[{name:"event",type:{text:"Event"}}],description:`Toggles the state of the toggle element.
and dispatch the new change event.`},{kind:"method",name:"setToggleSize",privacy:"private",parameters:[{name:"size",type:{text:"ToggleSize"},description:"The size to set."}],description:`Sets the size attribute for the toggle component.
If the provided size is not included in the TOGGLE_SIZE,
it defaults to the value specified in DEFAULTS.SIZE.`},{kind:"field",name:"helpTextType",type:{text:"ValidationType"},description:"The type of help text. It can be 'default', 'error', 'warning', 'success', 'priority'.",attribute:"help-text-type",reflects:!0,default:"undefined as unknown",inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"name",type:{text:"string"},default:"''",description:`Indicates the name of the component group (ex: checkbox, radio group).
They are used to group elements in a form together.`,attribute:"name",reflects:!0,inheritedFrom:{name:"NameMixin",module:"utils/mixins/NameMixin.js"}},{kind:"field",name:"value",type:{text:"string"},default:"''",description:"Indicates the value of the component group (ex: input, checkbox, radio, select etc...)",attribute:"value",reflects:!0,inheritedFrom:{name:"ValueMixin",module:"utils/mixins/ValueMixin.js"}},{kind:"field",name:"dataAriaLabel",type:{text:"string | null"},default:"null",description:`Defines a string value that labels the current element.
The Aria-Label attribute to be set for accessibility.`,attribute:"data-aria-label",reflects:!0,inheritedFrom:{name:"DataAriaLabelMixin",module:"utils/mixins/DataAriaLabelMixin.js"}},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,attribute:"disabled",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"label",type:{text:"string | undefined"},description:"The label of the input field. It is linked to the input field using the `for` attribute.",attribute:"label",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"id",default:"`mdc-input-${uuidv4()}`",description:"The unique id of the input field. It is used to link the input field with the label.",attribute:"id",inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"helpText",type:{text:"string | undefined"},description:"The help text that is displayed below the input field.",attribute:"help-text",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderLabelElement",privacy:"protected",description:`creates the label element when the label property is set.
id is used to link the label with the input field.`,return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderHelpTextIcon",privacy:"protected",description:`creates the helpertext icon based on the helpTextType for validation.
If the helpTextType is not set, it defaults to 'default' and it doesn't display any icon.`,return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderHelpText",privacy:"protected",description:`creates the helper text component when the helpertext value is set.
It is also used to display the validation message based on the helpTextType.`,return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderLabel",privacy:"protected",description:"renders the mdc-label-text container that contains the label and labelInfoToggleTip.",return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderHelperText",privacy:"protected",description:"renders the mdc-help-text container that contains the helpertext icon and helpertext.",return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}}],events:[{type:{text:"EventConstructor"}}],attributes:[{name:"checked",type:{text:"boolean"},default:"false",description:"Determines whether the toggle is active or inactive.",fieldName:"checked"},{name:"size",type:{text:"ToggleSize"},description:`Determines toggle size in rem (height is specified here).
- **Default**: 1.5
- **Compact**: 1`,default:"default",fieldName:"size"},{name:"name",type:{text:"string"},default:"''",description:`Indicates the name of the component group (ex: checkbox, radio group).
They are used to group elements in a form together.`,fieldName:"name",inheritedFrom:{name:"NameMixin",module:"src/utils/mixins/NameMixin.ts"}},{name:"value",type:{text:"string"},default:"''",description:"Indicates the value of the component group (ex: input, checkbox, radio, select etc...)",fieldName:"value",inheritedFrom:{name:"ValueMixin",module:"src/utils/mixins/ValueMixin.ts"}},{name:"data-aria-label",type:{text:"string | null"},default:"null",description:`Defines a string value that labels the current element.
The Aria-Label attribute to be set for accessibility.`,fieldName:"dataAriaLabel",inheritedFrom:{name:"DataAriaLabelMixin",module:"src/utils/mixins/DataAriaLabelMixin.ts"}},{name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,fieldName:"disabled",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"label",type:{text:"string | undefined"},description:"The label of the input field. It is linked to the input field using the `for` attribute.",fieldName:"label",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"id",default:"`mdc-input-${uuidv4()}`",description:"The unique id of the input field. It is used to link the input field with the label.",fieldName:"id",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"help-text-type",type:{text:"ValidationType"},description:"The type of help text. It can be 'default', 'error', 'warning', 'success', 'priority'.",fieldName:"helpTextType",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"help-text",type:{text:"string | undefined"},description:"The help text that is displayed below the input field.",fieldName:"helpText",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}}],mixins:[{name:"NameMixin",module:"/src/utils/mixins/NameMixin"},{name:"ValueMixin",module:"/src/utils/mixins/ValueMixin"},{name:"DataAriaLabelMixin",module:"/src/utils/mixins/DataAriaLabelMixin"}],superclass:{name:"FormfieldWrapper",module:"/src/components/formfieldwrapper"},tagName:"mdc-toggle",jsDoc:`/**
 * Toggle Component is an interactive control used to switch between two mutually exclusive options,
 * such as On/Off, Active/Inactive. These are commonly used in settings panels, forms, and preference selections
 * where users need to enable or disable a feature.
 * It contains an optional label and an optional helper text.
 *
 * Note: It internally renders a checkbox styled as a toggle switch.
 *
 * @dependency mdc-icon
 *
 * @tagname mdc-toggle
 *
 * @cssproperty --mdc-toggle-width - width of the toggle
 * @cssproperty --mdc-toggle-height - height of the toggle
 * @cssproperty --mdc-toggle-width-compact - width of the toggle when it's size is compact
 * @cssproperty --mdc-toggle-height-compact - height of the toggle when it's size is compact
 * @cssproperty --mdc-toggle-border-radius - border radius of the toggle
 * @cssproperty --mdc-toggle-border-radius-compact - border radius of the toggle when it's size is compact
 * @cssproperty --mdc-toggle-border - border of the toggle
 * @cssproperty --mdc-toggle-inactive-rest-color - background color of the inactive toggle in rest state
 * @cssproperty --mdc-toggle-inactive-hover-color - background color of the inactive toggle in hover state
 * @cssproperty --mdc-toggle-inactive-pressed-color - background color of the inactive toggle in pressed state
 * @cssproperty --mdc-toggle-inactive-disabled-color - background color of the inactive toggle in disabled state
 * @cssproperty --mdc-toggle-active-rest-color - background color of the active toggle in rest state
 * @cssproperty --mdc-toggle-active-hover-color - background color of the active toggle in hover state
 * @cssproperty --mdc-toggle-active-pressed-color - background color of the active toggle in pressed state
 * @cssproperty --mdc-toggle-active-disabled-color - background color of the active toggle in disabled state
 * @cssproperty --mdc-toggle-help-text-color -  color of the help text label
 * @cssproperty --mdc-toggle-label-color-disabled - color of the toggle label and help text in disabled state
 *
 */`,customElement:!0,slots:[{description:"slot to add the label info icon",name:"label-info",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}}]}],exports:[{kind:"js",name:"default",declaration:{name:"Toggle",module:"components/toggle/toggle.component.js"}}]},{kind:"javascript-module",path:"utils/mixins/AvatarComponentMixin.js",declarations:[{kind:"mixin",description:"",name:"AvatarComponentMixin",members:[{kind:"field",name:"src",type:{text:"string | undefined"},description:`The src is the url which will be used to display the avatar.
When the src is loading, we will display the initials as a placeholder.`,attribute:"src"},{kind:"field",name:"initials",type:{text:"string | undefined"},description:"The initials to be displayed for the avatar.",attribute:"initials"},{kind:"field",name:"presence",type:{text:"PresenceType | undefined"},description:"The presence is the status which can be used to display the\nactivity state of a user or a space within an avatar component.\n\nAcceptable values include:\n- `active`\n- `away`\n- `away-calling`\n- `busy`\n- `dnd`\n- `meeting`\n- `on-call`\n- `on-device`\n- `on-mobile`\n- `pause`\n- `pto`\n- `presenting`\n- `quiet`\n- `scheduled`",attribute:"presence"},{kind:"field",name:"size",type:{text:"AvatarSize"},description:`Acceptable values include (size in px unit):
- 24
- 32
- 48
- 64
- 72
- 88
- 124`,default:"32",attribute:"size",reflects:!0},{kind:"field",name:"iconName",type:{text:"IconNames | undefined"},description:`Name of the icon to be displayed inside the Avatar.
Must be a valid icon name.`,attribute:"icon-name"},{kind:"field",name:"counter",type:{text:"number | undefined"},description:"The counter is the number which can be displayed on the avatar.\nThe maximum number is 99 and if the given number is greater than 99,\nthen the avatar will be displayed as `99+`.\nIf the given number is a negative number,\nthen the avatar will be displayed as `0`.",attribute:"counter"},{kind:"field",name:"isTyping",type:{text:"boolean"},default:"false",description:"Represents the typing indicator when the user is typing.",attribute:"is-typing"}],attributes:[{name:"src",type:{text:"string | undefined"},description:`The src is the url which will be used to display the avatar.
When the src is loading, we will display the initials as a placeholder.`,fieldName:"src"},{name:"initials",type:{text:"string | undefined"},description:"The initials to be displayed for the avatar.",fieldName:"initials"},{name:"presence",type:{text:"PresenceType | undefined"},description:"The presence is the status which can be used to display the\nactivity state of a user or a space within an avatar component.\n\nAcceptable values include:\n- `active`\n- `away`\n- `away-calling`\n- `busy`\n- `dnd`\n- `meeting`\n- `on-call`\n- `on-device`\n- `on-mobile`\n- `pause`\n- `pto`\n- `presenting`\n- `quiet`\n- `scheduled`",fieldName:"presence"},{name:"size",type:{text:"AvatarSize"},description:`Acceptable values include (size in px unit):
- 24
- 32
- 48
- 64
- 72
- 88
- 124`,default:"32",fieldName:"size"},{name:"icon-name",type:{text:"IconNames | undefined"},description:`Name of the icon to be displayed inside the Avatar.
Must be a valid icon name.`,fieldName:"iconName"},{name:"counter",type:{text:"number | undefined"},description:"The counter is the number which can be displayed on the avatar.\nThe maximum number is 99 and if the given number is greater than 99,\nthen the avatar will be displayed as `99+`.\nIf the given number is a negative number,\nthen the avatar will be displayed as `0`.",fieldName:"counter"},{name:"is-typing",type:{text:"boolean"},default:"false",description:"Represents the typing indicator when the user is typing.",fieldName:"isTyping"}],parameters:[{name:"superClass",type:{text:"T"}}]}],exports:[{kind:"js",name:"AvatarComponentMixin",declaration:{name:"AvatarComponentMixin",module:"utils/mixins/AvatarComponentMixin.js"}}]},{kind:"javascript-module",path:"utils/mixins/DataAriaLabelMixin.js",declarations:[{kind:"mixin",description:"",name:"DataAriaLabelMixin",members:[{kind:"field",name:"dataAriaLabel",type:{text:"string | null"},default:"null",description:`Defines a string value that labels the current element.
The Aria-Label attribute to be set for accessibility.`,attribute:"data-aria-label",reflects:!0}],attributes:[{name:"data-aria-label",type:{text:"string | null"},default:"null",description:`Defines a string value that labels the current element.
The Aria-Label attribute to be set for accessibility.`,fieldName:"dataAriaLabel"}],parameters:[{name:"superClass",type:{text:"T"}}]}],exports:[{kind:"js",name:"DataAriaLabelMixin",declaration:{name:"DataAriaLabelMixin",module:"utils/mixins/DataAriaLabelMixin.js"}}]},{kind:"javascript-module",path:"utils/mixins/DisabledMixin.js",declarations:[{kind:"mixin",description:"",name:"DisabledMixin",members:[{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,attribute:"disabled",reflects:!0}],attributes:[{name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,fieldName:"disabled"}],parameters:[{name:"superClass",type:{text:"T"}}]}],exports:[{kind:"js",name:"DisabledMixin",declaration:{name:"DisabledMixin",module:"utils/mixins/DisabledMixin.js"}}]},{kind:"javascript-module",path:"utils/mixins/NameMixin.js",declarations:[{kind:"mixin",description:"",name:"NameMixin",members:[{kind:"field",name:"name",type:{text:"string"},default:"''",description:`Indicates the name of the component group (ex: checkbox, radio group).
They are used to group elements in a form together.`,attribute:"name",reflects:!0}],attributes:[{name:"name",type:{text:"string"},default:"''",description:`Indicates the name of the component group (ex: checkbox, radio group).
They are used to group elements in a form together.`,fieldName:"name"}],parameters:[{name:"superClass",type:{text:"T"}}]}],exports:[{kind:"js",name:"NameMixin",declaration:{name:"NameMixin",module:"utils/mixins/NameMixin.js"}}]},{kind:"javascript-module",path:"utils/mixins/ReadonlyMixin.js",declarations:[{kind:"mixin",description:"",name:"ReadonlyMixin",members:[{kind:"field",name:"readonly",type:{text:"boolean"},default:"false",description:`Indicates whether the component is readonly.
When the component is readonly, it is not editable.`,attribute:"readonly",reflects:!0}],attributes:[{name:"readonly",type:{text:"boolean"},default:"false",description:`Indicates whether the component is readonly.
When the component is readonly, it is not editable.`,fieldName:"readonly"}],parameters:[{name:"superClass",type:{text:"T"}}]}],exports:[{kind:"js",name:"ReadonlyMixin",declaration:{name:"ReadonlyMixin",module:"utils/mixins/ReadonlyMixin.js"}}]},{kind:"javascript-module",path:"utils/mixins/RequiredMixin.js",declarations:[{kind:"mixin",description:"",name:"RequiredMixin",members:[{kind:"field",name:"required",type:{text:"boolean"},default:"false",description:`Indicates whether the component is required.
When the component is required, it is a mandatory field.`,attribute:"required",reflects:!0}],attributes:[{name:"required",type:{text:"boolean"},default:"false",description:`Indicates whether the component is required.
When the component is required, it is a mandatory field.`,fieldName:"required"}],parameters:[{name:"superClass",type:{text:"T"}}]}],exports:[{kind:"js",name:"RequiredMixin",declaration:{name:"RequiredMixin",module:"utils/mixins/RequiredMixin.js"}}]},{kind:"javascript-module",path:"utils/mixins/TabIndexMixin.js",declarations:[{kind:"mixin",description:"",name:"TabIndexMixin",members:[{kind:"field",name:"tabIndex",type:{text:"number"},default:"0",description:"This property specifies the tab order of the element.",attribute:"tabIndex",reflects:!0}],attributes:[{name:"tabIndex",type:{text:"number"},default:"0",description:"This property specifies the tab order of the element.",fieldName:"tabIndex"}],parameters:[{name:"superClass",type:{text:"T"}}]}],exports:[{kind:"js",name:"TabIndexMixin",declaration:{name:"TabIndexMixin",module:"utils/mixins/TabIndexMixin.js"}}]},{kind:"javascript-module",path:"utils/mixins/ValueMixin.js",declarations:[{kind:"mixin",description:"",name:"ValueMixin",members:[{kind:"field",name:"value",type:{text:"string"},default:"''",description:"Indicates the value of the component group (ex: input, checkbox, radio, select etc...)",attribute:"value",reflects:!0}],attributes:[{name:"value",type:{text:"string"},default:"''",description:"Indicates the value of the component group (ex: input, checkbox, radio, select etc...)",fieldName:"value"}],parameters:[{name:"superClass",type:{text:"T"}}]}],exports:[{kind:"js",name:"ValueMixin",declaration:{name:"ValueMixin",module:"utils/mixins/ValueMixin.js"}}]},{kind:"javascript-module",path:"utils/mixins/index.types.js",declarations:[],exports:[]}],f={schemaVersion:p,readme:u,modules:h},a=[{themeclass:"mds-theme-stable-darkWebex",displayName:"darkWebex",backgroundColor:"#000000",className:"dark"},{themeclass:"mds-theme-stable-lightWebex",displayName:"lightWebex",backgroundColor:"#ffffff",className:"light"}],b=e=>{for(const n of a)e.classList.remove(n.className)},d=(e,n)=>{e.classList.add(n)},y=e=>{const n=document.querySelectorAll("div.docs-story");for(const i of n)i.style.backgroundColor=e},g=(e,n)=>{const i=n.globals.theme,t=a.find(r=>r.displayName===i),o=document.querySelector("body.sb-show-main");return b(o),d(o,t.className),d(o,"mds-typography"),d(o,"mds-elevation"),y(t.backgroundColor),c` <mdc-themeprovider id="theme-provider" themeclass="${t.themeclass}">
    ${e()}
  </mdc-themeprovider>`},v=e=>c` <mdc-iconprovider url="./icons/svg"> ${e()} </mdc-iconprovider>`;function x(e){const n=i=>i.replace(/-([a-z])/g,t=>t[1].toUpperCase());return e.modules.forEach(i=>{i.declarations.forEach(t=>{var l;const o=new Set((l=t==null?void 0:t.attributes)==null?void 0:l.map(s=>n(s.name))),r=t.members.filter(s=>!o.has(s.name));Object.assign(t,{members:r})})}),e}const k=x(f);m(k);const S={parameters:{a11y:{options:{runOnly:{type:"tag",values:["best-practice","wcag2a","wcag2aa","wcag21aa","wcag22aa"]}}},docs:{source:{excludeDecorators:!0}},actions:{argTypesRegex:"^on[A-Z].*"},backgrounds:{disable:!0,grid:{disable:!0}},badgesConfig:{wip:{styles:{backgroundColor:"#30240D",borderColor:"#D6B220",color:"#FFFFFFF2"},title:"Work In Progress",tooltip:{title:"This Component is Work In Progress",desc:"Keep an eye on the Release history for updates or provide feedback.",links:[{title:"Release history",href:"https://github.com/momentum-design/momentum-design/releases"},{title:"Leave feedback",href:"https://github.com/momentum-design/momentum-design/issues"}]}},stable:{styles:{backgroundColor:"#416116",borderColor:"#93C437",color:"#FFFFFFF2"},title:"Stable",tooltip:{title:"This Component is Stable",desc:"Ready for use.",links:[{title:"Consumption guide",href:"https://momentum-design.github.io/momentum-design/en/components/"},{title:"Release history",href:"https://github.com/momentum-design/momentum-design/releases"},{title:"Leave feedback",href:"https://github.com/momentum-design/momentum-design/issues"}]}},deprecated:{styles:{backgroundColor:"#4F0E10",borderColor:"#FC8B98",color:"#FFFFFFF2"},title:"Deprecated",tooltip:{title:"This Component is Deprecated",desc:"Check the Release history for more information about deprecation or provide feedback.",links:[{title:"Release history",href:"https://github.com/momentum-design/momentum-design/releases"},{title:"Leave feedback",href:"https://github.com/momentum-design/momentum-design/issues"}]}}},controls:{disableSaveFromUI:!0,expanded:!0,matchers:{color:/(background|color)$/i,date:/Date$/}},options:{storySort:{order:["Consumption","Styling","Components","Work In Progress"]}},direction:"ltr"},decorators:[g,v],globalTypes:{theme:{description:"Global theme for components",defaultValue:a[0].displayName,toolbar:{title:"Theme",icon:"globe",items:a.map(e=>e.displayName),dynamicTitle:!0}}}};export{S as default};
