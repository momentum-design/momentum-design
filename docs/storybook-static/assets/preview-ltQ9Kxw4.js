import{s as p}from"./chunk-L4EGOTBX-9DS_KiQO.js";import"./entry-preview-BI3Ia3go.js";import{k as c}from"./lit-element-D5KKan5q.js";import"./index-p76AQOEb.js";import"./index-CymK7bIw.js";import"./directive-helpers-Bb6vhctq.js";import"./index-DrFu-skq.js";import"./index-C9z9WAEj.js";import"./state-CSSggq2n.js";import"./create-context-89xeped_.js";import"./iconprovider.component-Bvm-70EG.js";const m="1.0.0",u="",h=[{kind:"javascript-module",path:"components/alertchip/alertchip.component.js",declarations:[{kind:"class",description:`mdc-alertchip component is an interactive chip that consumers can use to represent an alert.

- It supports a leading icon along with label.
- It supports 5 variants of alerts - neutral, warning, error, success, and informational

This component is built by extending Buttonsimple.`,name:"AlertChip",cssProperties:[{description:"The color of the label text",name:"--mdc-chip-color"},{description:"The color of the icon",name:"--mdc-chip-icon-color"},{description:"The border color of the alertchip",name:"--mdc-chip-border-color"},{description:"The background color of the alertchip",name:"--mdc-chip-background-color"}],members:[{kind:"field",name:"variant",type:{text:"VariantType"},description:`The variant of the alertchip. It supports 5 variants
- neutral
- warning
- error
- success
- informational`,default:"neutral",attribute:"variant"},{kind:"field",name:"label",type:{text:"string"},default:"''",description:`The visible label text of the alertchip.

We recommend limiting the <b>maximum length of the label text to 20 characters</b>,
including empty spaces to split words.`,attribute:"label"},{kind:"field",name:"disabled",type:{text:"boolean"},default:"undefined as unknown",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,attribute:"disabled",reflects:!0,inheritedFrom:{name:"DisabledMixin",module:"utils/mixins/DisabledMixin.js"}},{kind:"field",name:"softDisabled",type:{text:"boolean"},default:"undefined as unknown",description:`Indicates whether the button is soft disabled.
When set to \`true\`, the button appears visually disabled but still allows
focus, click, and keyboard actions to be passed through.

**Important:** When using soft disabled, consumers must ensure that
the button behaves like a disabled button, allowing only focus and
preventing any interactions (clicks or keyboard actions) from triggering unintended actions.`,attribute:"soft-disabled",inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"active",type:{text:"boolean"},default:"undefined as unknown",description:`The button's active state indicates whether it is currently toggled on (active) or off (inactive).
When the active state is true, the button is considered to be in an active state, meaning it is toggled on.
Conversely, when the active state is false, the button is in an inactive state, indicating it is toggled off.`,attribute:"active",reflects:!0,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"size",type:{text:"ButtonSize"},description:"Simplebutton size is a super set of all the sizes supported by children components.",default:"32",attribute:"size",reflects:!0,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"role",description:`This property defines the ARIA role for the element. By default, it is set to 'button'.
Consumers should override this role when:
- The element is being used in a context where a different role is more appropriate.
- Custom behaviors are implemented that require a specific ARIA role for accessibility purposes.`,default:"button",attribute:"role",reflects:!0,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"tabIndex",type:{text:"number"},default:"0",description:"This property specifies the tab order of the element.",attribute:"tabIndex",reflects:!0,inheritedFrom:{name:"TabIndexMixin",module:"utils/mixins/TabIndexMixin.js"}},{kind:"field",name:"type",type:{text:"ButtonType"},description:`This property defines the type attribute for the button element.
The type attribute specifies the behavior of the button when it is clicked.
- **submit**: The button submits the form data to the server.
- **reset**: The button resets the form data to its initial state.
- **button**: The button does nothing when clicked.`,default:"button",attribute:"type",reflects:!0,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"executeAction",privacy:"protected",inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"setActive",privacy:"protected",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The button element"},{name:"active",type:{text:"boolean"},description:"The active state of the element"}],description:"Sets the aria-pressed attribute based on the active state of the button.",inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"setSoftDisabled",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The button element."},{name:"softDisabled",type:{text:"boolean"},description:"The soft-disabled state."}],description:`Sets the soft-disabled attribute for the button.
When soft-disabled, the button looks to be disabled but remains focusable and clickable.
Also sets/removes aria-disabled attribute.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"setDisabled",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The button element."},{name:"disabled",type:{text:"boolean"},description:"The disabled state."}],description:`Sets the disabled attribute for the button.
When disabled, the button is not focusable or clickable, and tabindex is set to -1.
The previous tabindex is stored and restored when enabled.
Also sets/removes aria-disabled attribute.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"triggerClickEvent",privacy:"private",inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"handleBlur",privacy:"private",description:`In case the button is pressed and the focus is lost while pressing,
the pressed class is removed.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"handleKeyDown",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"},description:"The keyboard event."}],description:`Handles the keydown event on the button.
If the key is 'Enter' or 'Space', the button is pressed.
If the key is 'Enter', the button is pressed. The native HTML button works in the same way.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"handleKeyUp",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"},description:"The keyboard event."}],description:`Handles the keyup event on the button.
If the key is 'Enter' or 'Space', the button is clicked.
If the key is 'Space', the button is pressed. The native HTML button works in the same way.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}}],attributes:[{name:"variant",type:{text:"VariantType"},description:`The variant of the alertchip. It supports 5 variants
- neutral
- warning
- error
- success
- informational`,default:"neutral",fieldName:"variant"},{name:"label",type:{text:"string"},default:"''",description:`The visible label text of the alertchip.

We recommend limiting the <b>maximum length of the label text to 20 characters</b>,
including empty spaces to split words.`,fieldName:"label"},{name:"tabIndex",type:{text:"number"},default:"0",description:"This property specifies the tab order of the element.",fieldName:"tabIndex",inheritedFrom:{name:"TabIndexMixin",module:"src/utils/mixins/TabIndexMixin.ts"}},{name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,fieldName:"disabled",inheritedFrom:{name:"DisabledMixin",module:"src/utils/mixins/DisabledMixin.ts"}},{name:"active",type:{text:"boolean"},default:"false",description:`The button's active state indicates whether it is currently toggled on (active) or off (inactive).
When the active state is true, the button is considered to be in an active state, meaning it is toggled on.
Conversely, when the active state is false, the button is in an inactive state, indicating it is toggled off.`,fieldName:"active",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{name:"soft-disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the button is soft disabled.
When set to \`true\`, the button appears visually disabled but still allows
focus, click, and keyboard actions to be passed through.

**Important:** When using soft disabled, consumers must ensure that
the button behaves like a disabled button, allowing only focus and
preventing any interactions (clicks or keyboard actions) from triggering unintended actions.`,fieldName:"softDisabled",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{name:"size",type:{text:"ButtonSize"},description:"Simplebutton size is a super set of all the sizes supported by children components.",default:"32",fieldName:"size",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{name:"role",description:`This property defines the ARIA role for the element. By default, it is set to 'button'.
Consumers should override this role when:
- The element is being used in a context where a different role is more appropriate.
- Custom behaviors are implemented that require a specific ARIA role for accessibility purposes.`,default:"button",fieldName:"role",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{name:"type",type:{text:"ButtonType"},description:`This property defines the type attribute for the button element.
The type attribute specifies the behavior of the button when it is clicked.
- **submit**: The button submits the form data to the server.
- **reset**: The button resets the form data to its initial state.
- **button**: The button does nothing when clicked.`,default:"button",fieldName:"type",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}}],superclass:{name:"Buttonsimple",module:"/src/components/buttonsimple/buttonsimple.component"},tagName:"mdc-alertchip",jsDoc:`/**
 * mdc-alertchip component is an interactive chip that consumers can use to represent an alert.
 *
 * - It supports a leading icon along with label.
 * - It supports 5 variants of alerts - neutral, warning, error, success, and informational
 *
 * This component is built by extending Buttonsimple.
 *
 * @tagname mdc-alertchip
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @cssproperty --mdc-chip-color - The color of the label text
 * @cssproperty --mdc-chip-icon-color - The color of the icon
 * @cssproperty --mdc-chip-border-color - The border color of the alertchip
 * @cssproperty --mdc-chip-background-color - The background color of the alertchip
 *
 */`,customElement:!0,events:[{description:"(React: onClick) This event is dispatched when the button is clicked.",name:"click",reactName:"onClick",eventName:"ClickEvent",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{description:"(React: onKeyDown) This event is dispatched when a key is pressed down on the button.",name:"keydown",reactName:"onKeyDown",eventName:"KeydownEvent",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{description:"(React: onKeyUp) This event is dispatched when a key is released on the button.",name:"keyup",reactName:"onKeyUp",eventName:"KeyupEvent",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{description:"(React: onFocus) This event is dispatched when the button receives focus.",name:"focus",reactName:"onFocus",eventName:"FocusEvent",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}}]}],exports:[{kind:"js",name:"default",declaration:{name:"AlertChip",module:"components/alertchip/alertchip.component.js"}}]},{kind:"javascript-module",path:"components/avatar/avatar.component.js",declarations:[{kind:"class",description:`The \`mdc-avatar\` component is used to represent a person or a space.
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
- 124`,default:"32",attribute:"size",reflects:!0,inheritedFrom:{name:"AvatarComponentMixin",module:"utils/mixins/AvatarComponentMixin.js"}},{kind:"field",name:"counter",type:{text:"number | undefined"},description:"The counter is the number which can be displayed on the avatar.\nThe maximum number is 99 and if the given number is greater than 99,\nthen the avatar will be displayed as `99+`.\nIf the given number is a negative number,\nthen the avatar will be displayed as `0`.",attribute:"counter",inheritedFrom:{name:"AvatarComponentMixin",module:"utils/mixins/AvatarComponentMixin.js"}},{kind:"field",name:"isTyping",type:{text:"boolean"},default:"false",description:"Represents the typing indicator when the user is typing.",attribute:"is-typing",inheritedFrom:{name:"AvatarComponentMixin",module:"utils/mixins/AvatarComponentMixin.js"}},{kind:"field",name:"iconName",type:{text:"IconNames | undefined"},description:"Name of the icon (= filename).\n\nIf no `icon-name` is provided, no icon will be rendered.",attribute:"icon-name",inheritedFrom:{name:"IconNameMixin",module:"utils/mixins/IconNameMixin.js"}}],mixins:[{name:"AvatarComponentMixin",module:"/src/utils/mixins/AvatarComponentMixin"},{name:"IconNameMixin",module:"/src/utils/mixins/IconNameMixin"}],superclass:{name:"Component",module:"/src/models"},tagName:"mdc-avatar",jsDoc:`/**
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
- 124`,default:"32",fieldName:"size",inheritedFrom:{name:"AvatarComponentMixin",module:"src/utils/mixins/AvatarComponentMixin.ts"}},{name:"counter",type:{text:"number | undefined"},description:"The counter is the number which can be displayed on the avatar.\nThe maximum number is 99 and if the given number is greater than 99,\nthen the avatar will be displayed as `99+`.\nIf the given number is a negative number,\nthen the avatar will be displayed as `0`.",fieldName:"counter",inheritedFrom:{name:"AvatarComponentMixin",module:"src/utils/mixins/AvatarComponentMixin.ts"}},{name:"is-typing",type:{text:"boolean"},default:"false",description:"Represents the typing indicator when the user is typing.",fieldName:"isTyping",inheritedFrom:{name:"AvatarComponentMixin",module:"src/utils/mixins/AvatarComponentMixin.ts"}},{name:"icon-name",type:{text:"IconNames | undefined"},description:"Name of the icon (= filename).\n\nIf no `icon-name` is provided, no icon will be rendered.",fieldName:"iconName",inheritedFrom:{name:"IconNameMixin",module:"src/utils/mixins/IconNameMixin.ts"}}]}],exports:[{kind:"js",name:"default",declaration:{name:"Avatar",module:"components/avatar/avatar.component.js"}}]},{kind:"javascript-module",path:"components/avatarbutton/avatarbutton.component.js",declarations:[{kind:"class",description:"The `mdc-avatarbutton` component is an interactable version of the `mdc-avatar` component.\n\nThis component is made by extending `buttonsimple` class.\nThe button component acts as a wrapper for the avatar component.",name:"AvatarButton",members:[{kind:"field",name:"ariaLabel",type:{text:"string | null"},default:"null",description:"Aria-label attribute to be set for accessibility",attribute:"aria-label"},{kind:"method",name:"setSize",privacy:"private",parameters:[{name:"size",type:{text:"AvatarSize"}}]},{kind:"field",name:"active",type:{text:"boolean"},default:"undefined as unknown",description:`The button's active state indicates whether it is currently toggled on (active) or off (inactive).
When the active state is true, the button is considered to be in an active state, meaning it is toggled on.
Conversely, when the active state is false, the button is in an inactive state, indicating it is toggled off.`,attribute:"active",reflects:!0,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"disabled",type:{text:"boolean"},default:"undefined as unknown",description:`Indicates whether the component is disabled.
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
- 124`,default:"32",attribute:"size",reflects:!0,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"counter",type:{text:"number | undefined"},description:"The counter is the number which can be displayed on the avatar.\nThe maximum number is 99 and if the given number is greater than 99,\nthen the avatar will be displayed as `99+`.\nIf the given number is a negative number,\nthen the avatar will be displayed as `0`.",attribute:"counter",inheritedFrom:{name:"AvatarComponentMixin",module:"utils/mixins/AvatarComponentMixin.js"}},{kind:"field",name:"isTyping",type:{text:"boolean"},default:"false",description:"Represents the typing indicator when the user is typing.",attribute:"is-typing",inheritedFrom:{name:"AvatarComponentMixin",module:"utils/mixins/AvatarComponentMixin.js"}},{kind:"field",name:"iconName",type:{text:"IconNames | undefined"},description:"Name of the icon (= filename).\n\nIf no `icon-name` is provided, no icon will be rendered.",attribute:"icon-name",inheritedFrom:{name:"IconNameMixin",module:"utils/mixins/IconNameMixin.js"}},{kind:"field",name:"tabIndex",type:{text:"number"},default:"0",description:"This property specifies the tab order of the element.",attribute:"tabIndex",reflects:!0,inheritedFrom:{name:"TabIndexMixin",module:"utils/mixins/TabIndexMixin.js"}},{kind:"method",name:"executeAction",privacy:"protected",inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"setActive",privacy:"protected",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The button element"},{name:"active",type:{text:"boolean"},description:"The active state of the element"}],description:"Sets the aria-pressed attribute based on the active state of the button.",inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"setSoftDisabled",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The button element."},{name:"softDisabled",type:{text:"boolean"},description:"The soft-disabled state."}],description:`Sets the soft-disabled attribute for the button.
When soft-disabled, the button looks to be disabled but remains focusable and clickable.
Also sets/removes aria-disabled attribute.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"setDisabled",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The button element."},{name:"disabled",type:{text:"boolean"},description:"The disabled state."}],description:`Sets the disabled attribute for the button.
When disabled, the button is not focusable or clickable, and tabindex is set to -1.
The previous tabindex is stored and restored when enabled.
Also sets/removes aria-disabled attribute.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"triggerClickEvent",privacy:"private",inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"handleBlur",privacy:"private",description:`In case the button is pressed and the focus is lost while pressing,
the pressed class is removed.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"handleKeyDown",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"},description:"The keyboard event."}],description:`Handles the keydown event on the button.
If the key is 'Enter' or 'Space', the button is pressed.
If the key is 'Enter', the button is pressed. The native HTML button works in the same way.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"handleKeyUp",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"},description:"The keyboard event."}],description:`Handles the keyup event on the button.
If the key is 'Enter' or 'Space', the button is clicked.
If the key is 'Space', the button is pressed. The native HTML button works in the same way.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}}],events:[{description:"(React: onClick) This event is dispatched when the avatarbutton is clicked.",name:"click",reactName:"onClick",eventName:"ClickEvent",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{description:"(React: onKeyDown) This event is dispatched when a key is pressed down on the avatarbutton.",name:"keydown",reactName:"onKeyDown",eventName:"KeydownEvent",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{description:"(React: onKeyUp) This event is dispatched when a key is released on the avatarbutton.",name:"keyup",reactName:"onKeyUp",eventName:"KeyupEvent",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{description:"(React: onFocus) This event is dispatched when the avatarbutton receives focus.",name:"focus",reactName:"onFocus",eventName:"FocusEvent",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}}],attributes:[{name:"aria-label",type:{text:"string | null"},default:"null",description:"Aria-label attribute to be set for accessibility",fieldName:"ariaLabel"},{name:"src",type:{text:"string | undefined"},description:`The src is the url which will be used to display the avatar.
When the src is loading, we will display the initials as a placeholder.`,fieldName:"src",inheritedFrom:{name:"AvatarComponentMixin",module:"src/utils/mixins/AvatarComponentMixin.ts"}},{name:"initials",type:{text:"string | undefined"},description:"The initials to be displayed for the avatar.",fieldName:"initials",inheritedFrom:{name:"AvatarComponentMixin",module:"src/utils/mixins/AvatarComponentMixin.ts"}},{name:"presence",type:{text:"PresenceType | undefined"},description:"The presence is the status which can be used to display the\nactivity state of a user or a space within an avatar component.\n\nAcceptable values include:\n- `active`\n- `away`\n- `away-calling`\n- `busy`\n- `dnd`\n- `meeting`\n- `on-call`\n- `on-device`\n- `on-mobile`\n- `pause`\n- `pto`\n- `presenting`\n- `quiet`\n- `scheduled`",fieldName:"presence",inheritedFrom:{name:"AvatarComponentMixin",module:"src/utils/mixins/AvatarComponentMixin.ts"}},{name:"size",type:{text:"ButtonSize"},description:`Acceptable values include (size in px unit):
- 24
- 32
- 48
- 64
- 72
- 88
- 124`,default:"32",fieldName:"size",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{name:"counter",type:{text:"number | undefined"},description:"The counter is the number which can be displayed on the avatar.\nThe maximum number is 99 and if the given number is greater than 99,\nthen the avatar will be displayed as `99+`.\nIf the given number is a negative number,\nthen the avatar will be displayed as `0`.",fieldName:"counter",inheritedFrom:{name:"AvatarComponentMixin",module:"src/utils/mixins/AvatarComponentMixin.ts"}},{name:"is-typing",type:{text:"boolean"},default:"false",description:"Represents the typing indicator when the user is typing.",fieldName:"isTyping",inheritedFrom:{name:"AvatarComponentMixin",module:"src/utils/mixins/AvatarComponentMixin.ts"}},{name:"icon-name",type:{text:"IconNames | undefined"},description:"Name of the icon (= filename).\n\nIf no `icon-name` is provided, no icon will be rendered.",fieldName:"iconName",inheritedFrom:{name:"IconNameMixin",module:"src/utils/mixins/IconNameMixin.ts"}},{name:"tabIndex",type:{text:"number"},default:"0",description:"This property specifies the tab order of the element.",fieldName:"tabIndex",inheritedFrom:{name:"TabIndexMixin",module:"src/utils/mixins/TabIndexMixin.ts"}},{name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
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
- **button**: The button does nothing when clicked.`,default:"button",fieldName:"type",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}}],mixins:[{name:"AvatarComponentMixin",module:"/src/utils/mixins/AvatarComponentMixin"},{name:"IconNameMixin",module:"/src/utils/mixins/IconNameMixin"}],superclass:{name:"Buttonsimple",module:"/src/components/buttonsimple/buttonsimple.component"},tagName:"mdc-avatarbutton",jsDoc:`/**
 * The \`mdc-avatarbutton\` component is an interactable version of the \`mdc-avatar\` component.
 *
 * This component is made by extending \`buttonsimple\` class.
 * The button component acts as a wrapper for the avatar component.
 *
 * @dependency mdc-avatar
 *
 * @event click - (React: onClick) This event is dispatched when the avatarbutton is clicked.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the avatarbutton.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the avatarbutton.
 * @event focus - (React: onFocus) This event is dispatched when the avatarbutton receives focus.
 *
 * @tagname mdc-avatarbutton
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"AvatarButton",module:"components/avatarbutton/avatarbutton.component.js"}}]},{kind:"javascript-module",path:"components/badge/badge.component.js",declarations:[{kind:"class",description:"The `mdc-badge` component is a versatile UI element used to\ndisplay dot, icons, counters, success, warning and error type badge.\n\nSupported badge types:\n- `dot`: Displays a dot notification badge with a blue color.\n- `icon`: Displays a badge with a specified icon using the `icon-name` attribute.\n- `counter`: Displays a badge with a counter value. If the counter exceeds the `max-counter`,\nit shows `maxCounter+`. The maximum value of the counter is 999 and anything above that will be set to `999+`.\n- `success`: Displays a success badge with a check circle icon and green color.\n- `warning`: Displays a warning badge with a warning icon and yellow color.\n- `error`: Displays a error badge with a error legacy icon and red color.\n\nFor `icon`, `success`, `warning` and `error` types, the `mdc-icon` component is used to render the icon.\n\nFor the `counter` type, the `mdc-text` component is used to render the counter value.",name:"Badge",cssProperties:[{description:"The foreground color of the primary badge.",name:"--mdc-badge-primary-foreground-color"},{description:"The background color of the primary badge.",name:"--mdc-badge-primary-background-color"},{description:"The foreground color of the secondary badge.",name:"--mdc-badge-secondary-foreground-color"},{description:"The background color of the secondary badge.",name:"--mdc-badge-secondary-background-color"},{description:"The foreground color of the success badge.",name:"--mdc-badge-success-foreground-color"},{description:"The background color of the success badge.",name:"--mdc-badge-success-background-color"},{description:"The foreground color of the warning badge.",name:"--mdc-badge-warning-foreground-color"},{description:"The background color of the warning badge.",name:"--mdc-badge-warning-background-color"},{description:"The foreground color of the error badge.",name:"--mdc-badge-error-foreground-color"},{description:"The background color of the error badge.",name:"--mdc-badge-error-background-color"},{description:"The background color of the badge overlay.",name:"--mdc-badge-overlay-background-color"}],members:[{kind:"field",name:"type",type:{text:"BadgeType | undefined"},description:"Type of the badge\nCan be `dot` (notification) , `icon`, `counter`, `success`, `warning` or `error`.",attribute:"type",reflects:!0},{kind:"field",name:"variant",type:{text:"IconVariant"},description:"Type of the variant can be `primary` or `secondary`.\nIt defines the background and foreground color of the icon.",default:"primary",attribute:"variant",reflects:!0},{kind:"field",name:"counter",type:{text:"number | undefined"},description:"Counter is the number which can be provided in the badge.",attribute:"counter"},{kind:"field",name:"maxCounter",type:{text:"number"},description:"The maximum number can be set up to 999, anything above that will be rendered as _999+_.\nThe max counter can be `9`, `99` or `999`.",default:"99",attribute:"max-counter",reflects:!0},{kind:"field",name:"overlay",type:{text:"boolean"},default:"false",description:`Overlay is to add a thin outline to the badge.
This will help distinguish between the badge and the button,
where the badge will be layered on top of a button.`,attribute:"overlay"},{kind:"field",name:"ariaLabel",type:{text:"string | null"},default:"null",description:"Aria-label attribute to be set for accessibility",attribute:"aria-label"},{kind:"method",name:"getCounterText",privacy:"private",return:{type:{text:""}},parameters:[{name:"maxCounter",type:{text:"number"},description:"the maximum limit which can be displayed on the badge"},{name:"counter",optional:!0,type:{text:"number"},description:"the number to be displayed on the badge"}],description:"If `type` is set to `counter` and if `counter` is greater than `maxCounter`,\nthen it will return a string the maxCounter value as string.\nOtherwise, it will return a string representation of `counter`.\nIf `counter` is not a number, it will return an empty string."},{kind:"method",name:"getBadgeIcon",privacy:"private",return:{type:{text:""}},parameters:[{name:"iconName",type:{text:"string"},description:"the name of the icon from the icon set"},{name:"backgroundClassPostfix",type:{text:"string"},description:"postfix for the class to style the badge icon."}],description:"Method to generate the badge icon."},{kind:"method",name:"getBadgeDot",privacy:"private",return:{type:{text:""}},description:"Method to generate the badge dot template."},{kind:"method",name:"getBadgeCounterText",privacy:"private",return:{type:{text:""}},description:"Method to generate the badge text and counter template."},{kind:"method",name:"setRoleByAriaLabel",privacy:"private",return:{type:{text:"void"}},description:`Method to set the role based on the aria-label provided.
If the aria-label is provided, the role of the element will be 'img'.
Otherwise, the role will be null.`},{kind:"method",name:"getBadgeContentBasedOnType",privacy:"private",return:{type:{text:""}},description:`Generates the badge content based on the badge type.
Utilizes various helper methods to create the appropriate badge template based on the
current badge type. Supports 'dot', 'icon', 'counter', 'success', 'warning', and 'error'
types, returning the corresponding template result for each type.`},{kind:"field",name:"iconName",type:{text:"IconNames | undefined"},description:"Name of the icon (= filename).\n\nIf no `icon-name` is provided, no icon will be rendered.",attribute:"icon-name",inheritedFrom:{name:"IconNameMixin",module:"utils/mixins/IconNameMixin.js"}}],attributes:[{name:"type",type:{text:"BadgeType | undefined"},description:"Type of the badge\nCan be `dot` (notification) , `icon`, `counter`, `success`, `warning` or `error`.",fieldName:"type"},{name:"variant",type:{text:"IconVariant"},description:"Type of the variant can be `primary` or `secondary`.\nIt defines the background and foreground color of the icon.",default:"primary",fieldName:"variant"},{name:"counter",type:{text:"number | undefined"},description:"Counter is the number which can be provided in the badge.",fieldName:"counter"},{name:"max-counter",type:{text:"number"},description:"The maximum number can be set up to 999, anything above that will be rendered as _999+_.\nThe max counter can be `9`, `99` or `999`.",default:"99",fieldName:"maxCounter"},{name:"overlay",type:{text:"boolean"},default:"false",description:`Overlay is to add a thin outline to the badge.
This will help distinguish between the badge and the button,
where the badge will be layered on top of a button.`,fieldName:"overlay"},{name:"aria-label",type:{text:"string | null"},default:"null",description:"Aria-label attribute to be set for accessibility",fieldName:"ariaLabel"},{name:"icon-name",type:{text:"IconNames | undefined"},description:"Name of the icon (= filename).\n\nIf no `icon-name` is provided, no icon will be rendered.",fieldName:"iconName",inheritedFrom:{name:"IconNameMixin",module:"src/utils/mixins/IconNameMixin.ts"}}],mixins:[{name:"IconNameMixin",module:"/src/utils/mixins/IconNameMixin"}],superclass:{name:"Component",module:"/src/models"},tagName:"mdc-badge",jsDoc:"/**\n * The `mdc-badge` component is a versatile UI element used to\n * display dot, icons, counters, success, warning and error type badge.\n *\n * Supported badge types:\n * - `dot`: Displays a dot notification badge with a blue color.\n * - `icon`: Displays a badge with a specified icon using the `icon-name` attribute.\n * - `counter`: Displays a badge with a counter value. If the counter exceeds the `max-counter`,\n * it shows `maxCounter+`. The maximum value of the counter is 999 and anything above that will be set to `999+`.\n * - `success`: Displays a success badge with a check circle icon and green color.\n * - `warning`: Displays a warning badge with a warning icon and yellow color.\n * - `error`: Displays a error badge with a error legacy icon and red color.\n *\n * For `icon`, `success`, `warning` and `error` types, the `mdc-icon` component is used to render the icon.\n *\n * For the `counter` type, the `mdc-text` component is used to render the counter value.\n *\n * @dependency mdc-icon\n * @dependency mdc-text\n *\n * @tagname mdc-badge\n *\n * @cssproperty --mdc-badge-primary-foreground-color - The foreground color of the primary badge.\n * @cssproperty --mdc-badge-primary-background-color - The background color of the primary badge.\n * @cssproperty --mdc-badge-secondary-foreground-color - The foreground color of the secondary badge.\n * @cssproperty --mdc-badge-secondary-background-color - The background color of the secondary badge.\n * @cssproperty --mdc-badge-success-foreground-color - The foreground color of the success badge.\n * @cssproperty --mdc-badge-success-background-color - The background color of the success badge.\n * @cssproperty --mdc-badge-warning-foreground-color - The foreground color of the warning badge.\n * @cssproperty --mdc-badge-warning-background-color - The background color of the warning badge.\n * @cssproperty --mdc-badge-error-foreground-color - The foreground color of the error badge.\n * @cssproperty --mdc-badge-error-background-color - The background color of the error badge.\n * @cssproperty --mdc-badge-overlay-background-color - The background color of the badge overlay.\n */",customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"Badge",module:"components/badge/badge.component.js"}}]},{kind:"javascript-module",path:"components/bullet/bullet.component.js",declarations:[{kind:"class",description:`Bullet component, which is a visual marker
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
Conversely, when the active state is false, the button is in an inactive state, indicating it is toggled off.`,attribute:"active",reflects:!0,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"softDisabled",type:{text:"boolean"},default:"false",description:`Indicates whether the button is soft disabled.
When set to \`true\`, the button appears visually disabled but still allows
focus, click, and keyboard actions to be passed through.

**Important:** When using soft disabled, consumers must ensure that
the button behaves like a disabled button, allowing only focus and
preventing any interactions (clicks or keyboard actions) from triggering unintended actions.`,attribute:"soft-disabled",inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"type",type:{text:"ButtonType"},description:`This property defines the type attribute for the button element.
The type attribute specifies the behavior of the button when it is clicked.
- **submit**: The button submits the form data to the server.
- **reset**: The button resets the form data to its initial state.
- **button**: The button does nothing when clicked.`,default:"button",attribute:"type",reflects:!0,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"executeAction",privacy:"protected",inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"setActive",privacy:"protected",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The button element"},{name:"active",type:{text:"boolean"},description:"The active state of the element"}],description:"Sets the aria-pressed attribute based on the active state of the button.",inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"setSoftDisabled",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The button element."},{name:"softDisabled",type:{text:"boolean"},description:"The soft-disabled state."}],description:`Sets the soft-disabled attribute for the button.
When soft-disabled, the button looks to be disabled but remains focusable and clickable.
Also sets/removes aria-disabled attribute.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"setDisabled",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The button element."},{name:"disabled",type:{text:"boolean"},description:"The disabled state."}],description:`Sets the disabled attribute for the button.
When disabled, the button is not focusable or clickable, and tabindex is set to -1.
The previous tabindex is stored and restored when enabled.
Also sets/removes aria-disabled attribute.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"triggerClickEvent",privacy:"private",inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"handleBlur",privacy:"private",description:`In case the button is pressed and the focus is lost while pressing,
the pressed class is removed.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"handleKeyDown",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"},description:"The keyboard event."}],description:`Handles the keydown event on the button.
If the key is 'Enter' or 'Space', the button is pressed.
If the key is 'Enter', the button is pressed. The native HTML button works in the same way.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"handleKeyUp",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"},description:"The keyboard event."}],description:`Handles the keyup event on the button.
If the key is 'Enter' or 'Space', the button is clicked.
If the key is 'Space', the button is pressed. The native HTML button works in the same way.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}}],events:[{description:"(React: onClick) This event is dispatched when the button is clicked.",name:"click",reactName:"onClick",eventName:"ClickEvent",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{description:"(React: onKeyDown) This event is dispatched when a key is pressed down on the button.",name:"keydown",reactName:"onKeyDown",eventName:"KeydownEvent",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{description:"(React: onKeyUp) This event is dispatched when a key is released on the button.",name:"keyup",reactName:"onKeyUp",eventName:"KeyupEvent",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{description:"(React: onFocus) This event is dispatched when the button receives focus.",name:"focus",reactName:"onFocus",eventName:"FocusEvent",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}}],attributes:[{name:"prefix-icon",type:{text:"string | undefined"},description:`The name of the icon to display as a prefix.
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
 * @event click - (React: onClick) This event is dispatched when the button is clicked.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the button.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the button.
 * @event focus - (React: onFocus) This event is dispatched when the button receives focus.
 *
 * @tagname mdc-button
 *
 * @slot - Text label of the button.
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"Button",module:"components/button/button.component.js"}}]},{kind:"javascript-module",path:"components/buttonsimple/buttonsimple.component.js",declarations:[{kind:"class",description:"`mdc-buttonsimple` is a component that can be configured in various ways to suit different use cases.\nIt is used as an internal component and is not intended to be used directly by consumers.\nConsumers should use the `mdc-button` component instead.",name:"Buttonsimple",members:[{kind:"field",name:"active",type:{text:"boolean"},default:"false",description:`The button's active state indicates whether it is currently toggled on (active) or off (inactive).
When the active state is true, the button is considered to be in an active state, meaning it is toggled on.
Conversely, when the active state is false, the button is in an inactive state, indicating it is toggled off.`,attribute:"active",reflects:!0},{kind:"field",name:"softDisabled",type:{text:"boolean"},default:"false",description:`Indicates whether the button is soft disabled.
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
- **button**: The button does nothing when clicked.`,default:"button",attribute:"type",reflects:!0},{kind:"method",name:"executeAction",privacy:"protected"},{kind:"method",name:"setActive",privacy:"protected",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The button element"},{name:"active",type:{text:"boolean"},description:"The active state of the element"}],description:"Sets the aria-pressed attribute based on the active state of the button."},{kind:"method",name:"setSoftDisabled",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The button element."},{name:"softDisabled",type:{text:"boolean"},description:"The soft-disabled state."}],description:`Sets the soft-disabled attribute for the button.
When soft-disabled, the button looks to be disabled but remains focusable and clickable.
Also sets/removes aria-disabled attribute.`},{kind:"method",name:"setDisabled",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The button element."},{name:"disabled",type:{text:"boolean"},description:"The disabled state."}],description:`Sets the disabled attribute for the button.
When disabled, the button is not focusable or clickable, and tabindex is set to -1.
The previous tabindex is stored and restored when enabled.
Also sets/removes aria-disabled attribute.`},{kind:"method",name:"triggerClickEvent",privacy:"private"},{kind:"method",name:"handleBlur",privacy:"private",description:`In case the button is pressed and the focus is lost while pressing,
the pressed class is removed.`},{kind:"method",name:"handleKeyDown",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"},description:"The keyboard event."}],description:`Handles the keydown event on the button.
If the key is 'Enter' or 'Space', the button is pressed.
If the key is 'Enter', the button is pressed. The native HTML button works in the same way.`},{kind:"method",name:"handleKeyUp",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"},description:"The keyboard event."}],description:`Handles the keyup event on the button.
If the key is 'Enter' or 'Space', the button is clicked.
If the key is 'Space', the button is pressed. The native HTML button works in the same way.`},{kind:"field",name:"tabIndex",type:{text:"number"},default:"0",description:"This property specifies the tab order of the element.",attribute:"tabIndex",reflects:!0,inheritedFrom:{name:"TabIndexMixin",module:"utils/mixins/TabIndexMixin.js"}},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,attribute:"disabled",reflects:!0,inheritedFrom:{name:"DisabledMixin",module:"utils/mixins/DisabledMixin.js"}}],events:[{description:"(React: onClick) This event is dispatched when the button is clicked.",name:"click",reactName:"onClick",eventName:"ClickEvent"},{description:"(React: onKeyDown) This event is dispatched when a key is pressed down on the button.",name:"keydown",reactName:"onKeyDown",eventName:"KeydownEvent"},{description:"(React: onKeyUp) This event is dispatched when a key is released on the button.",name:"keyup",reactName:"onKeyUp",eventName:"KeyupEvent"},{description:"(React: onFocus) This event is dispatched when the button receives focus.",name:"focus",reactName:"onFocus",eventName:"FocusEvent"}],attributes:[{name:"active",type:{text:"boolean"},default:"false",description:`The button's active state indicates whether it is currently toggled on (active) or off (inactive).
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
 * @event click - (React: onClick) This event is dispatched when the button is clicked.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the button.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the button.
 * @event focus - (React: onFocus) This event is dispatched when the button receives focus.
 *
 * @tagname mdc-buttonsimple
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}}]},{kind:"javascript-module",path:"components/checkbox/checkbox.component.js",declarations:[{kind:"class",description:`Checkboxes allow users to select multiple options from a list or turn an item/feature on or off.
These are often used in forms, settings, and selections in lists.

A checkbox component contains an optional label and an optional helper text.

To create a group of checkboxes, use the FormFieldGroup component.`,name:"Checkbox",cssProperties:[{description:"Allows customization of the background color on hover.",name:"--mdc-checkbox-background-color-hover"},{description:"Border color in high contrast.",name:"--mdc-checkbox-border-color"},{description:"Background color for a selected checkbox.",name:"--mdc-checkbox-checked-background-color"},{description:"Background color for a selected checkbox when hovered.",name:"--mdc-checkbox-checked-background-color-hover"},{description:"Background color for a selected checkbox when pressed.",name:"--mdc-checkbox-checked-pressed-icon-color"},{description:"Background color for a disabled checkbox.",name:"--mdc-checkbox-disabled-background-color"},{description:"Border color for a disabled checkbox.",name:"--mdc-checkbox-disabled-border-color"},{description:"Background color for a disabled, selected checkbox.",name:"--mdc-checkbox-disabled-checked-icon-color"},{description:"Icon color for a disabled checkbox.",name:"--mdc-checkbox-disabled-icon-color"},{description:"Background color for an unselected checkbox.",name:"--mdc-checkbox-icon-background-color"},{description:"Default background color for an unselected checkbox.",name:"--mdc-checkbox-icon-border-color"},{description:"Icon color for an unselected checkbox.",name:"--mdc-checkbox-icon-color"},{description:"Background color for a selected checkbox when pressed.",name:"--mdc-checkbox-pressed-icon-color"}],members:[{kind:"field",name:"checked",type:{text:"boolean"},default:"false",description:"Determines whether the checkbox is selected or unselected.",attribute:"checked",reflects:!0},{kind:"field",name:"indeterminate",type:{text:"boolean"},default:"false",description:`This property is used to determine the parent checkbox in a nested checkbox group.
If any one of the children is unselected, then the parent checkbox will be indeterminate.
If all children are either selected or unselected, then the parent checkbox will not be indeterminate.`,attribute:"indeterminate",reflects:!0},{kind:"field",name:"autofocus",type:{text:"boolean"},default:"false",description:`Automatically focus on the element when the page loads.
[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus)`,attribute:"autofocus",reflects:!0},{kind:"method",name:"setFormValue",privacy:"private",description:`Updates the form value to reflect the current state of the checkbox.
If checked, the value is set to either the user-provided value or 'on' if no value is provided.
If unchecked, the value is set to null.`},{kind:"method",name:"manageRequired",privacy:"private",description:`Manages the required state of the checkbox.
If the checkbox is not checked and the requiredLabel property is set, then the checkbox is invalid.`},{kind:"method",name:"toggleState",privacy:"private",return:{type:{text:"void"}},description:`Toggles the state of the checkbox element.
If the element is not disabled, then
the checked property is toggled and the indeterminate property is set to false.`},{kind:"method",name:"handleKeyDown",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"KeyboardEvent"},description:"The keyboard event."}],description:`Handles the keydown event on the checkbox.
When the user presses Enter, the form is submitted.`},{kind:"method",name:"handleChange",privacy:"public",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"Event"}}],description:`Toggles the state of the checkbox element.
and dispatch the new change event.`},{kind:"field",name:"renderLabelAndHelperText",privacy:"private"},{kind:"field",name:"helpTextType",type:{text:"ValidationType"},description:"The type of help text. It can be 'default', 'error', 'warning', 'success', 'priority'.",attribute:"help-text-type",reflects:!0,default:"undefined as unknown",inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"name",type:{text:"string"},default:"''",description:`Indicates the name of the component group.
They are used to group elements in a form together.`,attribute:"name",reflects:!0,inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"field",name:"value",type:{text:"string"},default:"''",description:"Indicates the value of the component group (ex: input, checkbox, radio, select etc...)",attribute:"value",reflects:!0,inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"field",name:"validationMessage",type:{text:"string | undefined"},description:"Custom validation message that will override the default message and displayed when the input is invalid.",attribute:"validation-message",reflects:!0,inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"field",name:"validity",type:{text:"ValidityState"},readonly:!0,inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"field",name:"willValidate",readonly:!0,inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"method",name:"setValidity",description:"Sets the validity of the input field based on the input field's validity.",return:{type:{text:""}},inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"method",name:"checkValidity",return:{type:{text:"boolean"}},inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"method",name:"reportValidity",inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"field",name:"id",type:{text:"string"},default:"`mdc-input-${uuidv4()}`",description:"The unique id of the input field. It is used to link the input field with the label.",attribute:"id",inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"dataAriaLabel",type:{text:"string | null"},default:"null",description:`Defines a string value that labels the current element.
The Aria-Label attribute to be set for accessibility.`,attribute:"data-aria-label",reflects:!0,inheritedFrom:{name:"DataAriaLabelMixin",module:"utils/mixins/DataAriaLabelMixin.js"}},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,attribute:"disabled",reflects:!0,inheritedFrom:{name:"DisabledMixin",module:"utils/mixins/DisabledMixin.js"}},{kind:"field",name:"label",type:{text:"string | undefined"},description:"The label of the input field. It is linked to the input field using the `for` attribute.",attribute:"label",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"requiredLabel",type:{text:"string | undefined"},description:`The required label of the input field.
When an appropriate string value is set,
the input field is marked as required and the label is appended with this text.`,attribute:"required-label",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"helpText",type:{text:"string | undefined"},description:"The help text that is displayed below the input field.",attribute:"help-text",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderLabelElement",privacy:"protected",description:`creates the label element when the label property is set.
id is used to link the label with the input field.`,return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderRequiredLabel",privacy:"protected",inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderHelpTextIcon",privacy:"protected",description:`creates the helpertext icon based on the helpTextType for validation.
If the helpTextType is not set, it defaults to 'default' and it doesn't display any icon.`,return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderHelpText",privacy:"protected",description:`creates the helper text component when the helpertext value is set.
It is also used to display the validation message based on the helpTextType.`,return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderLabel",privacy:"protected",description:"renders the mdc-label-text container that contains the label and labelInfoToggleTip.",return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderHelperText",privacy:"protected",description:"renders the mdc-help-text container that contains the helpertext icon and helpertext.",return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}}],events:[{type:{text:"EventConstructor"}},{description:"(React: onChange) Event that gets dispatched when the checkbox state changes.",name:"change",reactName:"onChange",eventName:"ChangeEvent"},{description:"(React: onFocus) Event that gets dispatched when the checkbox receives focus.",name:"focus",reactName:"onFocus",eventName:"FocusEvent"}],attributes:[{name:"checked",type:{text:"boolean"},default:"false",description:"Determines whether the checkbox is selected or unselected.",fieldName:"checked"},{name:"indeterminate",type:{text:"boolean"},default:"false",description:`This property is used to determine the parent checkbox in a nested checkbox group.
If any one of the children is unselected, then the parent checkbox will be indeterminate.
If all children are either selected or unselected, then the parent checkbox will not be indeterminate.`,fieldName:"indeterminate"},{name:"autofocus",type:{text:"boolean"},default:"false",description:`Automatically focus on the element when the page loads.
[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus)`,fieldName:"autofocus"},{name:"name",type:{text:"string"},default:"''",description:`Indicates the name of the component group.
They are used to group elements in a form together.`,fieldName:"name",inheritedFrom:{name:"FormInternalsMixin",module:"src/utils/mixins/FormInternalsMixin.ts"}},{name:"value",type:{text:"string"},default:"''",description:"Indicates the value of the component group (ex: input, checkbox, radio, select etc...)",fieldName:"value",inheritedFrom:{name:"FormInternalsMixin",module:"src/utils/mixins/FormInternalsMixin.ts"}},{name:"validation-message",type:{text:"string | undefined"},description:"Custom validation message that will override the default message and displayed when the input is invalid.",fieldName:"validationMessage",inheritedFrom:{name:"FormInternalsMixin",module:"src/utils/mixins/FormInternalsMixin.ts"}},{name:"data-aria-label",type:{text:"string | null"},default:"null",description:`Defines a string value that labels the current element.
The Aria-Label attribute to be set for accessibility.`,fieldName:"dataAriaLabel",inheritedFrom:{name:"DataAriaLabelMixin",module:"src/utils/mixins/DataAriaLabelMixin.ts"}},{name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,fieldName:"disabled",inheritedFrom:{name:"DisabledMixin",module:"src/utils/mixins/DisabledMixin.ts"}},{name:"label",type:{text:"string | undefined"},description:"The label of the input field. It is linked to the input field using the `for` attribute.",fieldName:"label",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"required-label",type:{text:"string | undefined"},description:`The required label of the input field.
When an appropriate string value is set,
the input field is marked as required and the label is appended with this text.`,fieldName:"requiredLabel",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"id",type:{text:"string"},default:"''",description:"The unique id of the input field. It is used to link the input field with the label.",fieldName:"id",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"help-text-type",type:{text:"ValidationType"},description:"The type of help text. It can be 'default', 'error', 'warning', 'success', 'priority'.",fieldName:"helpTextType",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"help-text",type:{text:"string | undefined"},description:"The help text that is displayed below the input field.",fieldName:"helpText",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}}],mixins:[{name:"FormInternalsMixin",module:"/src/utils/mixins/FormInternalsMixin"},{name:"DataAriaLabelMixin",module:"/src/utils/mixins/DataAriaLabelMixin"}],superclass:{name:"FormfieldWrapper",module:"/src/components/formfieldwrapper/formfieldwrapper.component"},tagName:"mdc-checkbox",jsDoc:`/**
 * Checkboxes allow users to select multiple options from a list or turn an item/feature on or off.
 * These are often used in forms, settings, and selections in lists.
 *
 * A checkbox component contains an optional label and an optional helper text.
 *
 * To create a group of checkboxes, use the FormFieldGroup component.
 *
 * @dependency mdc-icon
 *
 * @tagname mdc-checkbox
 *
 * @event change - (React: onChange) Event that gets dispatched when the checkbox state changes.
 * @event focus - (React: onFocus) Event that gets dispatched when the checkbox receives focus.
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
 */`,customElement:!0,slots:[{description:"slot to add the label info icon",name:"label-info",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}}]}],exports:[{kind:"js",name:"default",declaration:{name:"Checkbox",module:"components/checkbox/checkbox.component.js"}}]},{kind:"javascript-module",path:"components/chip/chip.component.js",declarations:[{kind:"class",description:`mdc-chip is an interactive element that can be used to represent a chip. It supports a leading icon along with label.
Consumers can wrap this component around a tooltip to provide additional context.

It is recommended to keep the label text for the chip component concise and compact.
For best results, we recommend limiting the <b>maximum length of the label text to 20 characters</b>,
including empty spaces to split words.

This component is built by extending Buttonsimple.`,name:"Chip",cssProperties:[{description:"The color of the chip.",name:"--mdc-chip-color"},{description:"The border color of the chip.",name:"--mdc-chip-border-color"},{description:"The background color of the chip.",name:"--mdc-chip-background-color"}],members:[{kind:"field",name:"color",type:{text:"ColorType"},description:`The color of the chip. It supports the following colors
- default
- cobalt
- gold
- lime
- mint
- pink
- purple
- slate
- violet`,default:"default",attribute:"color",reflects:!0},{kind:"field",name:"label",type:{text:"string"},default:"''",description:`The visible label text of the chip.

We recommend limiting the <b>maximum length of the label text to 20 characters</b>,
including empty spaces to split words.`,attribute:"label"},{kind:"method",name:"renderIcon",privacy:"private",description:"Renders the icon element if available.",return:{type:{text:""}}},{kind:"field",name:"role",description:`This property defines the ARIA role for the element. By default, it is set to 'button'.
Consumers should override this role when:
- The element is being used in a context where a different role is more appropriate.
- Custom behaviors are implemented that require a specific ARIA role for accessibility purposes.`,default:"button",attribute:"role",reflects:!0,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"size",type:{text:"ButtonSize"},description:"Simplebutton size is a super set of all the sizes supported by children components.",default:"32",attribute:"size",reflects:!0,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"active",type:{text:"boolean"},default:"undefined as unknown",description:`The button's active state indicates whether it is currently toggled on (active) or off (inactive).
When the active state is true, the button is considered to be in an active state, meaning it is toggled on.
Conversely, when the active state is false, the button is in an inactive state, indicating it is toggled off.`,attribute:"active",reflects:!0,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"softDisabled",type:{text:"boolean"},default:"undefined as unknown",description:`Indicates whether the button is soft disabled.
When set to \`true\`, the button appears visually disabled but still allows
focus, click, and keyboard actions to be passed through.

**Important:** When using soft disabled, consumers must ensure that
the button behaves like a disabled button, allowing only focus and
preventing any interactions (clicks or keyboard actions) from triggering unintended actions.`,attribute:"soft-disabled",inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"iconName",type:{text:"IconNames | undefined"},description:"Name of the icon (= filename).\n\nIf no `icon-name` is provided, no icon will be rendered.",attribute:"icon-name",inheritedFrom:{name:"IconNameMixin",module:"utils/mixins/IconNameMixin.js"}},{kind:"field",name:"tabIndex",type:{text:"number"},default:"0",description:"This property specifies the tab order of the element.",attribute:"tabIndex",reflects:!0,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,attribute:"disabled",reflects:!0,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"type",type:{text:"ButtonType"},description:`This property defines the type attribute for the button element.
The type attribute specifies the behavior of the button when it is clicked.
- **submit**: The button submits the form data to the server.
- **reset**: The button resets the form data to its initial state.
- **button**: The button does nothing when clicked.`,default:"button",attribute:"type",reflects:!0,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"executeAction",privacy:"protected",inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"setActive",privacy:"protected",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The button element"},{name:"active",type:{text:"boolean"},description:"The active state of the element"}],description:"Sets the aria-pressed attribute based on the active state of the button.",inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"setSoftDisabled",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The button element."},{name:"softDisabled",type:{text:"boolean"},description:"The soft-disabled state."}],description:`Sets the soft-disabled attribute for the button.
When soft-disabled, the button looks to be disabled but remains focusable and clickable.
Also sets/removes aria-disabled attribute.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"setDisabled",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The button element."},{name:"disabled",type:{text:"boolean"},description:"The disabled state."}],description:`Sets the disabled attribute for the button.
When disabled, the button is not focusable or clickable, and tabindex is set to -1.
The previous tabindex is stored and restored when enabled.
Also sets/removes aria-disabled attribute.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"triggerClickEvent",privacy:"private",inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"handleBlur",privacy:"private",description:`In case the button is pressed and the focus is lost while pressing,
the pressed class is removed.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"handleKeyDown",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"},description:"The keyboard event."}],description:`Handles the keydown event on the button.
If the key is 'Enter' or 'Space', the button is pressed.
If the key is 'Enter', the button is pressed. The native HTML button works in the same way.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"handleKeyUp",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"},description:"The keyboard event."}],description:`Handles the keyup event on the button.
If the key is 'Enter' or 'Space', the button is clicked.
If the key is 'Space', the button is pressed. The native HTML button works in the same way.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}}],attributes:[{name:"color",type:{text:"ColorType"},description:`The color of the chip. It supports the following colors
- default
- cobalt
- gold
- lime
- mint
- pink
- purple
- slate
- violet`,default:"default",fieldName:"color"},{name:"label",type:{text:"string"},default:"''",description:`The visible label text of the chip.

We recommend limiting the <b>maximum length of the label text to 20 characters</b>,
including empty spaces to split words.`,fieldName:"label"},{name:"icon-name",type:{text:"IconNames | undefined"},description:"Name of the icon (= filename).\n\nIf no `icon-name` is provided, no icon will be rendered.",fieldName:"iconName",inheritedFrom:{name:"IconNameMixin",module:"src/utils/mixins/IconNameMixin.ts"}},{name:"tabIndex",type:{text:"number"},default:"0",description:"This property specifies the tab order of the element.",fieldName:"tabIndex",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,fieldName:"disabled",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{name:"active",type:{text:"boolean"},default:"false",description:`The button's active state indicates whether it is currently toggled on (active) or off (inactive).
When the active state is true, the button is considered to be in an active state, meaning it is toggled on.
Conversely, when the active state is false, the button is in an inactive state, indicating it is toggled off.`,fieldName:"active",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{name:"soft-disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the button is soft disabled.
When set to \`true\`, the button appears visually disabled but still allows
focus, click, and keyboard actions to be passed through.

**Important:** When using soft disabled, consumers must ensure that
the button behaves like a disabled button, allowing only focus and
preventing any interactions (clicks or keyboard actions) from triggering unintended actions.`,fieldName:"softDisabled",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{name:"size",type:{text:"ButtonSize"},description:"Simplebutton size is a super set of all the sizes supported by children components.",default:"32",fieldName:"size",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{name:"role",description:`This property defines the ARIA role for the element. By default, it is set to 'button'.
Consumers should override this role when:
- The element is being used in a context where a different role is more appropriate.
- Custom behaviors are implemented that require a specific ARIA role for accessibility purposes.`,default:"button",fieldName:"role",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{name:"type",type:{text:"ButtonType"},description:`This property defines the type attribute for the button element.
The type attribute specifies the behavior of the button when it is clicked.
- **submit**: The button submits the form data to the server.
- **reset**: The button resets the form data to its initial state.
- **button**: The button does nothing when clicked.`,default:"button",fieldName:"type",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}}],mixins:[{name:"IconNameMixin",module:"/src/utils/mixins/IconNameMixin"}],superclass:{name:"Buttonsimple",module:"/src/components/buttonsimple/buttonsimple.component"},tagName:"mdc-chip",jsDoc:`/**
 * mdc-chip is an interactive element that can be used to represent a chip. It supports a leading icon along with label.
 * Consumers can wrap this component around a tooltip to provide additional context.
 *
 * It is recommended to keep the label text for the chip component concise and compact.
 * For best results, we recommend limiting the <b>maximum length of the label text to 20 characters</b>,
 * including empty spaces to split words.
 *
 * This component is built by extending Buttonsimple.
 *
 * @tagname mdc-chip
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @cssproperty --mdc-chip-color - The color of the chip.
 * @cssproperty --mdc-chip-border-color - The border color of the chip.
 * @cssproperty --mdc-chip-background-color - The background color of the chip.
 *
 */`,customElement:!0,events:[{description:"(React: onClick) This event is dispatched when the button is clicked.",name:"click",reactName:"onClick",eventName:"ClickEvent",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{description:"(React: onKeyDown) This event is dispatched when a key is pressed down on the button.",name:"keydown",reactName:"onKeyDown",eventName:"KeydownEvent",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{description:"(React: onKeyUp) This event is dispatched when a key is released on the button.",name:"keyup",reactName:"onKeyUp",eventName:"KeyupEvent",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{description:"(React: onFocus) This event is dispatched when the button receives focus.",name:"focus",reactName:"onFocus",eventName:"FocusEvent",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}}]}],exports:[{kind:"js",name:"default",declaration:{name:"Chip",module:"components/chip/chip.component.js"}}]},{kind:"javascript-module",path:"components/coachmark/coachmark.component.js",declarations:[{kind:"class",description:`Coachmark component based on top of the popover component,
with the default value of certain properties changed.`,name:"Coachmark",cssProperties:[{description:"radius of the arrow border",name:"--mdc-popover-arrow-border-radius",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{description:"border of the arrow",name:"--mdc-popover-arrow-border",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{description:"primary background color of the popover",name:"--mdc-popover-primary-background-color",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{description:"border color of the popover",name:"--mdc-popover-border-color",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{description:"inverted background color of the popover",name:"--mdc-popover-inverted-background-color",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{description:"inverted border color of the popover",name:"--mdc-popover-inverted-border-color",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{description:"inverted text color of the popover",name:"--mdc-popover-inverted-text-color",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{description:"elevation of the popover",name:"--mdc-popover-elevation-3",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}}],slots:[{description:"Default slot for modal container",name:"",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}}],members:[{kind:"field",name:"trigger",type:{text:"PopoverTrigger"},description:`Determines the events that cause the Coachmark to show.
Multiple event names should be separated by spaces.
For example to allow both click and hover, use 'click mouseenter' as the trigger.
- **click**
- **mouseenter**
- **focusin**
- **manual**`,default:"manual",attribute:"trigger",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"showArrow",type:{text:"boolean"},description:"The arrow visibility of the Coachmark.",default:"true",attribute:"show-arrow",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"closeButton",type:{text:"boolean"},description:"The close button visibility of the Coachmark.",default:"true",attribute:"close-button",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"disableAriaExpanded",type:{text:"boolean"},description:"Disable aria-expanded attribute on trigger element.",default:"true",attribute:"disable-aria-expanded",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"color",type:{text:"PopoverColor"},description:`Color of the popover
- **tonal**
- **contrast**`,default:"tonal",attribute:"color",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"enabledFocusTrap",type:{text:"boolean"},description:`Determines whether the focus trap is enabled.
If true, focus will be restricted to the content within this component.`,default:"false",attribute:"enabledFocusTrap",inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"field",name:"enabledPreventScroll",type:{text:"boolean"},description:"Prevent outside scrolling when popover show.",default:"false",attribute:"enabledPreventScroll",inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"field",name:"shouldWrapFocus",type:{text:"() => boolean"},inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"deactivateFocusTrap",description:"Deactivate the focus trap.",inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"hasNoClientRects",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Checks if the element has no client rectangles (not visible in the viewport).",return:{type:{text:""}},inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"hasZeroDimensions",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Checks if the element has zero dimensions (width and height are both 0).",return:{type:{text:""}},inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"isNotVisible",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Determines if the element is not visible in the DOM.",return:{type:{text:""}},inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"hasHiddenStyle",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Checks if the element has inline styles that make it hidden.",return:{type:{text:""}},inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"hasComputedHidden",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Checks if the element is hidden by a computed style.",return:{type:{text:""}},inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"isHidden",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Checks if the element is hidden from the user.",return:{type:{text:""}},inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"isNotTabbable",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Checks if the element is not tabbable.",return:{type:{text:""}},inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"isInteractiveElement",privacy:"private",return:{type:{text:""}},parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Checks if the element is interactive.",inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"isFocusable",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Checks if the element is focusable.",return:{type:{text:""}},inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"findFocusable",privacy:"private",return:{type:{text:""}},parameters:[{name:"root",type:{text:"ShadowRoot | HTMLElement"},description:"The root element to search for focusable elements."},{name:"matches",default:"new Set()",type:{text:"Set<HTMLElement>"},description:"The set of focusable elements."}],description:"Recursively finds all focusable elements within the given root and its descendants.",inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"setFocusableElements",privacy:"public",description:"Updates the list of focusable elements within the component's shadow root.",inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"setInitialFocus",privacy:"public",parameters:[{name:"prefferableElement",default:"0",type:{text:"number"},description:"The index of the prefferable element to focus."}],description:"Sets the initial focus within the container.",inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"calculateNextIndex",privacy:"private",parameters:[{name:"currentIndex",type:{text:"number"},description:"The current index."},{name:"step",type:{text:"number"},description:"The step to calculate the next index."}],description:"Calculates the next index for the focus trap.",return:{type:{text:""}},inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"getDeepActiveElement",privacy:"private",description:"Returns the deepest active element in the shadow DOM.",return:{type:{text:""}},inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"findElement",privacy:"private",parameters:[{name:"activeElement",type:{text:"HTMLElement"},description:"The active element."}],description:"Finds the index of the active element within the focusable elements.",return:{type:{text:""}},inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"isEqualFocusNode",privacy:"private",parameters:[{name:"activeElement",type:{text:"HTMLElement"},description:"The active element."},{name:"element",type:{text:"HTMLElement"},description:"The element to compare."}],description:"Checks if the active element is equal to the given element.",return:{type:{text:""}},inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"trapFocus",privacy:"private",parameters:[{name:"direction",type:{text:"boolean"},description:`The direction of the focus trap.
If true, the focus will be trapped in the previous element.`}],description:"Traps focus within the container.",inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"handleKeydown",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"},description:"The keyboard event."}],description:"Traps focus within the container.",inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"field",name:"id",type:{text:"string"},default:"''",description:"The unique ID of the popover.",attribute:"id",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"triggerID",type:{text:"string"},default:"''",description:`The ID of the element that triggers the popover.
This attribute is required for the popover to work.`,attribute:"triggerID",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"placement",type:{text:"PopoverPlacement"},description:`The placement of the popover.
- **top**
- **top-start**
- **top-end**
- **bottom**
- **bottom-start**
- **bottom-end**
- **left**
- **left-start**
- **left-end**
- **right**
- **right-start**
- **right-end**`,default:"bottom",attribute:"placement",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"visible",type:{text:"boolean"},description:"The visibility of the popover.",default:"false",attribute:"visible",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"offset",type:{text:"number"},description:"The offset of the popover.",default:"4",attribute:"offset",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"focusTrap",type:{text:"boolean"},description:`Determines whether the focus trap is enabled.
If true, focus will be restricted to the content within this component.`,default:"false",attribute:"focus-trap",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"preventScroll",type:{text:"boolean"},description:"Prevent outside scrolling when popover show.",default:"false",attribute:"prevent-scroll",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"interactive",type:{text:"boolean"},description:"Determines whether the popover is interactive。",default:"false",attribute:"interactive",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"delay",type:{text:"string"},description:"The delay of the show/hide popover.",default:"0,0",attribute:"delay",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"hideOnEscape",type:{text:"boolean"},description:"Hide popover on escape key press.",default:"false",attribute:"hide-on-escape",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"hideOnBlur",type:{text:"boolean"},description:"Hide popover on blur.",default:"false",attribute:"hide-on-blur",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"hideOnOutsideClick",type:{text:"boolean"},description:"Hide on outside click of the popover.",default:"false",attribute:"hide-on-outside-click",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"focusBackToTrigger",type:{text:"boolean"},description:"The focus back to trigger after the popover hide.",default:"false",attribute:"focus-back-to-trigger",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"backdrop",type:{text:"boolean"},description:`Determines whether the popover with backdrop.
Other than popover and trigger element, the rest of the screen will be covered with a backdrop.`,default:"false",attribute:"backdrop",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"flip",type:{text:"boolean"},description:"Changes the placement of popover to keep it in view when scrolling.",default:"true",attribute:"flip",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"size",type:{text:"boolean"},description:"Changes the size of popover to keep it in view when scrolling.",default:"false",attribute:"size",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"zIndex",type:{text:"number"},description:"The z-index of the popover.",default:"1000",attribute:"z-index",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"appendTo",type:{text:"string"},default:"''",description:"Element ID that the popover append to.",attribute:"append-to",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"closeButtonAriaLabel",type:{text:"string | null"},default:"null",description:"aria-label attribute to be set for close button accessibility.",attribute:"close-button-aria-label",inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"role",type:{text:"HTMLElement['role']"},description:"Role of the popover",default:"dialog",attribute:"role",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"ariaLabelledby",type:{text:"string | null"},default:"null",description:`aria-labelledby for an interactive popover only, defaults to the trigger component id.
Used in nested cases where the triggerComponent isn't the actual button.`,attribute:"aria-labelledby",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"ariaDescribedby",type:{text:"string | null"},default:"null",description:"aria-describedby of the popover.",attribute:"aria-describedby",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"arrowElement",type:{text:"HTMLElement | null"},privacy:"public",default:"null",inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"triggerElement",type:{text:"HTMLElement | null"},privacy:"public",default:"null",inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"method",name:"setupTriggerListener",privacy:"private",description:"Sets up the trigger event listeners based on the trigger type.",inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"method",name:"removeEventListeners",privacy:"private",description:"Removes the trigger event listeners.",inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"onOutsidePopoverClick",privacy:"private",description:"Handles the outside click event to close the popover.",parameters:[{description:"The mouse event.",name:"event"}],inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"onEscapeKeydown",privacy:"private",description:"Handles the escape keydown event to close the popover.",parameters:[{description:"The keyboard event.",name:"event"}],inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"onPopoverFocusOut",privacy:"private",description:"Handles the popover focus out event.",parameters:[{description:"The focus event.",name:"event"}],inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"method",name:"isOpenUpdated",privacy:"private",parameters:[{name:"oldValue",type:{text:"boolean"},description:"The old value of the visible property."},{name:"newValue",type:{text:"boolean"},description:"The new value of the visible property."}],description:`Handles the popover visibility change and position the popover.
Handles the exit event to close the popover.`,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"startCloseDelay",privacy:"private",description:`Starts the close delay timer.
If the popover is not interactive, it will close the popover after the delay.`,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"cancelCloseDelay",privacy:"private",description:"Cancels the close delay timer.",inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"showPopover",privacy:"public",description:"Shows the popover.",inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"hidePopover",privacy:"public",description:"Hides the popover.",inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"togglePopoverVisible",privacy:"public",description:"Toggles the popover visibility.",inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"method",name:"handleCreatePopoverFirstUpdate",privacy:"private",description:"Sets the focusable elements inside the popover.",inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"method",name:"positionPopover",privacy:"private",description:`Positions the popover based on the trigger element.
It also handles the flip, size and arrow placement.
It uses the floating-ui/dom library to calculate the position.`,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"utils",default:"new PopoverUtils(this)",inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}}],attributes:[{name:"trigger",type:{text:"PopoverTrigger"},description:`Determines the events that cause the Coachmark to show.
Multiple event names should be separated by spaces.
For example to allow both click and hover, use 'click mouseenter' as the trigger.
- **click**
- **mouseenter**
- **focusin**
- **manual**`,default:"manual",fieldName:"trigger",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"show-arrow",type:{text:"boolean"},description:"The arrow visibility of the Coachmark.",default:"true",fieldName:"showArrow",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"close-button",type:{text:"boolean"},description:"The close button visibility of the Coachmark.",default:"true",fieldName:"closeButton",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"disable-aria-expanded",type:{text:"boolean"},description:"Disable aria-expanded attribute on trigger element.",default:"true",fieldName:"disableAriaExpanded",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"enabledFocusTrap",type:{text:"boolean"},description:`Determines whether the focus trap is enabled.
If true, focus will be restricted to the content within this component.`,default:"false",fieldName:"enabledFocusTrap",inheritedFrom:{name:"FocusTrapMixin",module:"src/utils/mixins/FocusTrapMixin.ts"}},{name:"enabledPreventScroll",type:{text:"boolean"},description:"Prevent outside scrolling when popover show.",default:"false",fieldName:"enabledPreventScroll",inheritedFrom:{name:"FocusTrapMixin",module:"src/utils/mixins/FocusTrapMixin.ts"}},{name:"id",type:{text:"string"},default:"''",description:"The unique ID of the popover.",fieldName:"id",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"triggerID",type:{text:"string"},default:"''",description:`The ID of the element that triggers the popover.
This attribute is required for the popover to work.`,fieldName:"triggerID",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"placement",type:{text:"PopoverPlacement"},description:`The placement of the popover.
- **top**
- **top-start**
- **top-end**
- **bottom**
- **bottom-start**
- **bottom-end**
- **left**
- **left-start**
- **left-end**
- **right**
- **right-start**
- **right-end**`,default:"bottom",fieldName:"placement",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"color",type:{text:"PopoverColor"},description:`Color of the popover
- **tonal**
- **contrast**`,default:"tonal",fieldName:"color",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"visible",type:{text:"boolean"},description:"The visibility of the popover.",default:"false",fieldName:"visible",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"offset",type:{text:"number"},description:"The offset of the popover.",default:"4",fieldName:"offset",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"focus-trap",type:{text:"boolean"},description:`Determines whether the focus trap is enabled.
If true, focus will be restricted to the content within this component.`,default:"false",fieldName:"focusTrap",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"prevent-scroll",type:{text:"boolean"},description:"Prevent outside scrolling when popover show.",default:"false",fieldName:"preventScroll",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"interactive",type:{text:"boolean"},description:"Determines whether the popover is interactive。",default:"false",fieldName:"interactive",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"delay",type:{text:"string"},description:"The delay of the show/hide popover.",default:"0,0",fieldName:"delay",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"hide-on-escape",type:{text:"boolean"},description:"Hide popover on escape key press.",default:"false",fieldName:"hideOnEscape",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"hide-on-blur",type:{text:"boolean"},description:"Hide popover on blur.",default:"false",fieldName:"hideOnBlur",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"hide-on-outside-click",type:{text:"boolean"},description:"Hide on outside click of the popover.",default:"false",fieldName:"hideOnOutsideClick",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"focus-back-to-trigger",type:{text:"boolean"},description:"The focus back to trigger after the popover hide.",default:"false",fieldName:"focusBackToTrigger",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"backdrop",type:{text:"boolean"},description:`Determines whether the popover with backdrop.
Other than popover and trigger element, the rest of the screen will be covered with a backdrop.`,default:"false",fieldName:"backdrop",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"flip",type:{text:"boolean"},description:"Changes the placement of popover to keep it in view when scrolling.",default:"true",fieldName:"flip",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"size",type:{text:"boolean"},description:"Changes the size of popover to keep it in view when scrolling.",default:"false",fieldName:"size",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"z-index",type:{text:"number"},description:"The z-index of the popover.",default:"1000",fieldName:"zIndex",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"append-to",type:{text:"string"},default:"''",description:"Element ID that the popover append to.",fieldName:"appendTo",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"close-button-aria-label",type:{text:"string | null"},default:"null",description:"aria-label attribute to be set for close button accessibility.",fieldName:"closeButtonAriaLabel",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"role",type:{text:"HTMLElement['role']"},description:"Role of the popover",default:"dialog",fieldName:"role",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"aria-labelledby",type:{text:"string | null"},default:"null",description:`aria-labelledby for an interactive popover only, defaults to the trigger component id.
Used in nested cases where the triggerComponent isn't the actual button.`,fieldName:"ariaLabelledby",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"aria-describedby",type:{text:"string | null"},default:"null",description:"aria-describedby of the popover.",fieldName:"ariaDescribedby",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}}],superclass:{name:"Popover",module:"/src/components/popover/popover.component"},tagName:"mdc-coachmark",jsDoc:`/**
 * Coachmark component based on top of the popover component,
 * with the default value of certain properties changed.
 *
 * @dependency mdc-popover
 *
 * @tagname mdc-coachmark
 *
 * @cssproperty --mdc-popover-arrow-border-radius - radius of the arrow border
 * @cssproperty --mdc-popover-arrow-border - border of the arrow
 * @cssproperty --mdc-popover-primary-background-color - primary background color of the popover
 * @cssproperty --mdc-popover-border-color - border color of the popover
 * @cssproperty --mdc-popover-inverted-background-color - inverted background color of the popover
 * @cssproperty --mdc-popover-inverted-border-color - inverted border color of the popover
 * @cssproperty --mdc-popover-inverted-text-color - inverted text color of the popover
 * @cssproperty --mdc-popover-elevation-3 - elevation of the popover
 *
 * @slot - Default slot for modal container
 *
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"Coachmark",module:"components/coachmark/coachmark.component.js"}}]},{kind:"javascript-module",path:"components/divider/divider.component.js",declarations:[{kind:"class",description:`\`mdc-divider\` is a component that provides a line to separate and organize content.
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
- To override the styles of the divider, use the provided CSS custom properties.`,name:"Divider",cssProperties:[{description:"background color of the divider",name:"--mdc-divider-background-color"},{description:"width of the divider",name:"--mdc-divider-width"},{description:"gradient of the horizontal divider",name:"--mdc-divider-horizontal-gradient"},{description:"gradient of the vertical divider",name:"--mdc-divider-vertical-gradient"},{description:"font size of label in the text divider",name:"--mdc-divider-text-size"},{description:"font color of label in the text divider",name:"--mdc-divider-text-color"},{description:"left and right margin of label in the text divider",name:"--mdc-divider-text-margin"},{description:"line height of label in the text divider",name:"--mdc-divider-text-line-height"},{description:"background color of the grabber button in rest state",name:"--mdc-divider-grabber-button-background-color-normal"},{description:"background color of the grabber button in hover state",name:"--mdc-divider-grabber-button-background-color-hover"},{description:"background color of the grabber button in pressed state",name:"--mdc-divider-grabber-button-background-color-pressed"},{description:"border color of the grabber button",name:"--mdc-divider-grabber-button-border-color"},{description:"border radius of the grabber button",name:"--mdc-divider-grabber-button-border-radius"}],members:[{kind:"field",name:"orientation",type:{text:"DividerOrientation"},description:`Two orientations of divider
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
 * @cssproperty --mdc-divider-grabber-button-background-color-normal - background color of the grabber button
 *  in rest state
 * @cssproperty --mdc-divider-grabber-button-background-color-hover - background color of the grabber button
 *  in hover state
 * @cssproperty --mdc-divider-grabber-button-background-color-pressed - background color of the grabber button
 *  in pressed state
 * @cssproperty --mdc-divider-grabber-button-border-color - border color of the grabber button
 * @cssproperty --mdc-divider-grabber-button-border-radius - border radius of the grabber button
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"Divider",module:"components/divider/divider.component.js"}}]},{kind:"javascript-module",path:"components/filterchip/filterchip.component.js",declarations:[{kind:"class",description:`mdc-filterchip component is an interactive chip that consumers can use to select or deselect.
They can be found with lists or tables as quick filters.

This component is built on top of the mdc-chip component.`,name:"FilterChip",members:[{kind:"field",name:"selected",type:{text:"boolean"},default:"false",description:"The selected state of the filterchip.",attribute:"selected",reflects:!0},{kind:"method",name:"setSelected",privacy:"private",parameters:[{name:"selected",type:{text:"boolean"},description:"The selected state of the filterchip."}],description:`Sets the selected state of the filterchip along with the icon.
aria-pressed attribute is also set to true or false.`},{kind:"method",name:"executeAction",privacy:"protected",inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"},return:{type:{text:"void"}}},{kind:"field",name:"color",type:{text:"ColorType"},description:`The color of the chip. It supports the following colors
- default
- cobalt
- gold
- lime
- mint
- pink
- purple
- slate
- violet`,default:"default",attribute:"color",reflects:!0,inheritedFrom:{name:"Chip",module:"components/chip/chip.component.js"}},{kind:"field",name:"iconName",type:{text:"IconNames | undefined"},description:"Name of the icon (= filename).\n\nIf no `icon-name` is provided, no icon will be rendered.",attribute:"icon-name",inheritedFrom:{name:"IconNameMixin",module:"utils/mixins/IconNameMixin.js"}},{kind:"field",name:"label",type:{text:"string"},default:"''",description:`The visible label text of the chip.

We recommend limiting the <b>maximum length of the label text to 20 characters</b>,
including empty spaces to split words.`,attribute:"label",inheritedFrom:{name:"Chip",module:"components/chip/chip.component.js"}},{kind:"method",name:"renderIcon",privacy:"private",description:"Renders the icon element if available.",return:{type:{text:""}},inheritedFrom:{name:"Chip",module:"components/chip/chip.component.js"}},{kind:"field",name:"role",description:`This property defines the ARIA role for the element. By default, it is set to 'button'.
Consumers should override this role when:
- The element is being used in a context where a different role is more appropriate.
- Custom behaviors are implemented that require a specific ARIA role for accessibility purposes.`,default:"button",attribute:"role",reflects:!0,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"size",type:{text:"ButtonSize"},description:"Simplebutton size is a super set of all the sizes supported by children components.",default:"32",attribute:"size",reflects:!0,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"active",type:{text:"boolean"},default:"undefined as unknown",description:`The button's active state indicates whether it is currently toggled on (active) or off (inactive).
When the active state is true, the button is considered to be in an active state, meaning it is toggled on.
Conversely, when the active state is false, the button is in an inactive state, indicating it is toggled off.`,attribute:"active",reflects:!0,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"softDisabled",type:{text:"boolean"},default:"undefined as unknown",description:`Indicates whether the button is soft disabled.
When set to \`true\`, the button appears visually disabled but still allows
focus, click, and keyboard actions to be passed through.

**Important:** When using soft disabled, consumers must ensure that
the button behaves like a disabled button, allowing only focus and
preventing any interactions (clicks or keyboard actions) from triggering unintended actions.`,attribute:"soft-disabled",inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"tabIndex",type:{text:"number"},default:"0",description:"This property specifies the tab order of the element.",attribute:"tabIndex",reflects:!0,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,attribute:"disabled",reflects:!0,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"type",type:{text:"ButtonType"},description:`This property defines the type attribute for the button element.
The type attribute specifies the behavior of the button when it is clicked.
- **submit**: The button submits the form data to the server.
- **reset**: The button resets the form data to its initial state.
- **button**: The button does nothing when clicked.`,default:"button",attribute:"type",reflects:!0,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"setActive",privacy:"protected",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The button element"},{name:"active",type:{text:"boolean"},description:"The active state of the element"}],description:"Sets the aria-pressed attribute based on the active state of the button.",inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"setSoftDisabled",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The button element."},{name:"softDisabled",type:{text:"boolean"},description:"The soft-disabled state."}],description:`Sets the soft-disabled attribute for the button.
When soft-disabled, the button looks to be disabled but remains focusable and clickable.
Also sets/removes aria-disabled attribute.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"setDisabled",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The button element."},{name:"disabled",type:{text:"boolean"},description:"The disabled state."}],description:`Sets the disabled attribute for the button.
When disabled, the button is not focusable or clickable, and tabindex is set to -1.
The previous tabindex is stored and restored when enabled.
Also sets/removes aria-disabled attribute.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"triggerClickEvent",privacy:"private",inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"handleBlur",privacy:"private",description:`In case the button is pressed and the focus is lost while pressing,
the pressed class is removed.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"handleKeyDown",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"},description:"The keyboard event."}],description:`Handles the keydown event on the button.
If the key is 'Enter' or 'Space', the button is pressed.
If the key is 'Enter', the button is pressed. The native HTML button works in the same way.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"handleKeyUp",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"},description:"The keyboard event."}],description:`Handles the keyup event on the button.
If the key is 'Enter' or 'Space', the button is clicked.
If the key is 'Space', the button is pressed. The native HTML button works in the same way.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}}],attributes:[{name:"selected",type:{text:"boolean"},default:"false",description:"The selected state of the filterchip.",fieldName:"selected"},{name:"icon-name",type:{text:"IconNames | undefined"},description:"Name of the icon (= filename).\n\nIf no `icon-name` is provided, no icon will be rendered.",fieldName:"iconName",inheritedFrom:{name:"IconNameMixin",module:"src/utils/mixins/IconNameMixin.ts"}},{name:"color",type:{text:"ColorType"},description:`The color of the chip. It supports the following colors
- default
- cobalt
- gold
- lime
- mint
- pink
- purple
- slate
- violet`,default:"default",fieldName:"color",inheritedFrom:{name:"Chip",module:"src/components/chip/chip.component.ts"}},{name:"label",type:{text:"string"},default:"''",description:`The visible label text of the chip.

We recommend limiting the <b>maximum length of the label text to 20 characters</b>,
including empty spaces to split words.`,fieldName:"label",inheritedFrom:{name:"Chip",module:"src/components/chip/chip.component.ts"}},{name:"tabIndex",type:{text:"number"},default:"0",description:"This property specifies the tab order of the element.",fieldName:"tabIndex",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,fieldName:"disabled",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{name:"active",type:{text:"boolean"},default:"false",description:`The button's active state indicates whether it is currently toggled on (active) or off (inactive).
When the active state is true, the button is considered to be in an active state, meaning it is toggled on.
Conversely, when the active state is false, the button is in an inactive state, indicating it is toggled off.`,fieldName:"active",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{name:"soft-disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the button is soft disabled.
When set to \`true\`, the button appears visually disabled but still allows
focus, click, and keyboard actions to be passed through.

**Important:** When using soft disabled, consumers must ensure that
the button behaves like a disabled button, allowing only focus and
preventing any interactions (clicks or keyboard actions) from triggering unintended actions.`,fieldName:"softDisabled",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{name:"size",type:{text:"ButtonSize"},description:"Simplebutton size is a super set of all the sizes supported by children components.",default:"32",fieldName:"size",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{name:"role",description:`This property defines the ARIA role for the element. By default, it is set to 'button'.
Consumers should override this role when:
- The element is being used in a context where a different role is more appropriate.
- Custom behaviors are implemented that require a specific ARIA role for accessibility purposes.`,default:"button",fieldName:"role",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{name:"type",type:{text:"ButtonType"},description:`This property defines the type attribute for the button element.
The type attribute specifies the behavior of the button when it is clicked.
- **submit**: The button submits the form data to the server.
- **reset**: The button resets the form data to its initial state.
- **button**: The button does nothing when clicked.`,default:"button",fieldName:"type",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}}],superclass:{name:"Chip",module:"/src/components/chip/chip.component"},tagName:"mdc-filterchip",jsDoc:`/**
 * mdc-filterchip component is an interactive chip that consumers can use to select or deselect.
 * They can be found with lists or tables as quick filters.
 *
 * This component is built on top of the mdc-chip component.
 *
 * @tagname mdc-filterchip
 *
 */`,customElement:!0,cssProperties:[{description:"The color of the chip.",name:"--mdc-chip-color",inheritedFrom:{name:"Chip",module:"src/components/chip/chip.component.ts"}},{description:"The border color of the chip.",name:"--mdc-chip-border-color",inheritedFrom:{name:"Chip",module:"src/components/chip/chip.component.ts"}},{description:"The background color of the chip.",name:"--mdc-chip-background-color",inheritedFrom:{name:"Chip",module:"src/components/chip/chip.component.ts"}}],events:[{description:"(React: onClick) This event is dispatched when the button is clicked.",name:"click",reactName:"onClick",eventName:"ClickEvent",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{description:"(React: onKeyDown) This event is dispatched when a key is pressed down on the button.",name:"keydown",reactName:"onKeyDown",eventName:"KeydownEvent",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{description:"(React: onKeyUp) This event is dispatched when a key is released on the button.",name:"keyup",reactName:"onKeyUp",eventName:"KeyupEvent",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{description:"(React: onFocus) This event is dispatched when the button receives focus.",name:"focus",reactName:"onFocus",eventName:"FocusEvent",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}}]}],exports:[{kind:"js",name:"default",declaration:{name:"FilterChip",module:"components/filterchip/filterchip.component.js"}}]},{kind:"javascript-module",path:"components/formfieldgroup/formfieldgroup.component.js",declarations:[{kind:"class",description:`\`mdc-formfieldgroup\` component, groups the form field components together.
All passed in children will have a gap of 12px (0.75rem) each applied.

This component is specifically for creating a \`checkbox\` group and a \`toggle\` group component.
For the radiogroup use the RadioGroup component instead.

The header text and description text are displayed above the items with accessible labels.<br/>
The consumer has to provide atleast the header-text or the aria-label,
like one of them <b>has</b> to be passed in always, otherwise its not accessible.

The role will be set to \`group\`.
The aria-label will be set with the data-aria-label property.
The aria-labelledby will be set with the header id which contains the header text information.
The aria-describedby will be set with the description id which contains the description text information.`,name:"FormfieldGroup",slots:[{description:"This is a default slot for checkbox or toggle components.",name:"default"},{description:"slot to add the label info icon",name:"label-info",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}}],members:[{kind:"field",name:"id",type:{text:"string"},default:"''",description:"The unique id of the input field. It is used to link the input field with the label.",attribute:"id",inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"helpTextType",type:{text:"ValidationType"},description:"The type of help text. It can be 'default', 'error', 'warning', 'success', 'priority'.",attribute:"help-text-type",reflects:!0,default:"undefined as unknown",inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"disabled",type:{text:"boolean"},default:"undefined as unknown",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,attribute:"disabled",reflects:!0,inheritedFrom:{name:"DisabledMixin",module:"utils/mixins/DisabledMixin.js"}},{kind:"field",name:"dataAriaLabel",type:{text:"string | null"},default:"null",description:`Defines a string value that labels the current element.
The Aria-Label attribute to be set for accessibility.`,attribute:"data-aria-label",reflects:!0,inheritedFrom:{name:"DataAriaLabelMixin",module:"utils/mixins/DataAriaLabelMixin.js"}},{kind:"field",name:"label",type:{text:"string | undefined"},description:"The label of the input field. It is linked to the input field using the `for` attribute.",attribute:"label",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"requiredLabel",type:{text:"string | undefined"},description:`The required label of the input field.
When an appropriate string value is set,
the input field is marked as required and the label is appended with this text.`,attribute:"required-label",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"helpText",type:{text:"string | undefined"},description:"The help text that is displayed below the input field.",attribute:"help-text",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderLabelElement",privacy:"protected",description:`creates the label element when the label property is set.
id is used to link the label with the input field.`,return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderRequiredLabel",privacy:"protected",inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderHelpTextIcon",privacy:"protected",description:`creates the helpertext icon based on the helpTextType for validation.
If the helpTextType is not set, it defaults to 'default' and it doesn't display any icon.`,return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderHelpText",privacy:"protected",description:`creates the helper text component when the helpertext value is set.
It is also used to display the validation message based on the helpTextType.`,return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderLabel",privacy:"protected",description:"renders the mdc-label-text container that contains the label and labelInfoToggleTip.",return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderHelperText",privacy:"protected",description:"renders the mdc-help-text container that contains the helpertext icon and helpertext.",return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}}],mixins:[{name:"DataAriaLabelMixin",module:"/src/utils/mixins/DataAriaLabelMixin"}],superclass:{name:"FormfieldWrapper",module:"/src/components/formfieldwrapper/formfieldwrapper.component"},tagName:"mdc-formfieldgroup",jsDoc:`/**
 * \`mdc-formfieldgroup\` component, groups the form field components together.
 * All passed in children will have a gap of 12px (0.75rem) each applied.
 *
 * This component is specifically for creating a \`checkbox\` group and a \`toggle\` group component.
 * For the radiogroup use the RadioGroup component instead.
 *
 * The header text and description text are displayed above the items with accessible labels.<br/>
 * The consumer has to provide atleast the header-text or the aria-label,
 * like one of them <b>has</b> to be passed in always, otherwise its not accessible.
 *
 * The role will be set to \`group\`.
 * The aria-label will be set with the data-aria-label property.
 * The aria-labelledby will be set with the header id which contains the header text information.
 * The aria-describedby will be set with the description id which contains the description text information.
 *
 * @tagname mdc-formfieldgroup
 *
 * @slot default - This is a default slot for checkbox or toggle components.
 */`,customElement:!0,attributes:[{name:"data-aria-label",type:{text:"string | null"},default:"null",description:`Defines a string value that labels the current element.
The Aria-Label attribute to be set for accessibility.`,fieldName:"dataAriaLabel",inheritedFrom:{name:"DataAriaLabelMixin",module:"src/utils/mixins/DataAriaLabelMixin.ts"}},{name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,fieldName:"disabled",inheritedFrom:{name:"DisabledMixin",module:"src/utils/mixins/DisabledMixin.ts"}},{name:"label",type:{text:"string | undefined"},description:"The label of the input field. It is linked to the input field using the `for` attribute.",fieldName:"label",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"required-label",type:{text:"string | undefined"},description:`The required label of the input field.
When an appropriate string value is set,
the input field is marked as required and the label is appended with this text.`,fieldName:"requiredLabel",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"id",type:{text:"string"},default:"''",description:"The unique id of the input field. It is used to link the input field with the label.",fieldName:"id",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"help-text-type",type:{text:"ValidationType"},description:"The type of help text. It can be 'default', 'error', 'warning', 'success', 'priority'.",fieldName:"helpTextType",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"help-text",type:{text:"string | undefined"},description:"The help text that is displayed below the input field.",fieldName:"helpText",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}}]}],exports:[{kind:"js",name:"default",declaration:{name:"FormfieldGroup",module:"components/formfieldgroup/formfieldgroup.component.js"}}]},{kind:"javascript-module",path:"components/formfieldwrapper/formfieldwrapper.component.js",declarations:[{kind:"class",description:`formfieldwrapper is a component that contains the label and helper/validation text
 that can be configured in various ways to suit different use cases (most of the input related components).
It is used as an internal component and is not intended to be used directly by consumers.`,name:"FormfieldWrapper",slots:[{description:"slot to add the label info icon",name:"label-info"}],members:[{kind:"field",name:"label",type:{text:"string | undefined"},description:"The label of the input field. It is linked to the input field using the `for` attribute.",attribute:"label",reflects:!0},{kind:"field",name:"requiredLabel",type:{text:"string | undefined"},description:`The required label of the input field.
When an appropriate string value is set,
the input field is marked as required and the label is appended with this text.`,attribute:"required-label",reflects:!0},{kind:"field",name:"id",type:{text:"string"},default:"''",description:"The unique id of the input field. It is used to link the input field with the label.",attribute:"id"},{kind:"field",name:"helpTextType",type:{text:"ValidationType"},description:"The type of help text. It can be 'default', 'error', 'warning', 'success', 'priority'.",attribute:"help-text-type",reflects:!0},{kind:"field",name:"helpText",type:{text:"string | undefined"},description:"The help text that is displayed below the input field.",attribute:"help-text",reflects:!0},{kind:"method",name:"renderLabelElement",privacy:"protected",description:`creates the label element when the label property is set.
id is used to link the label with the input field.`,return:{type:{text:""}}},{kind:"method",name:"renderRequiredLabel",privacy:"protected"},{kind:"method",name:"renderHelpTextIcon",privacy:"protected",description:`creates the helpertext icon based on the helpTextType for validation.
If the helpTextType is not set, it defaults to 'default' and it doesn't display any icon.`,return:{type:{text:""}}},{kind:"method",name:"renderHelpText",privacy:"protected",description:`creates the helper text component when the helpertext value is set.
It is also used to display the validation message based on the helpTextType.`,return:{type:{text:""}}},{kind:"method",name:"renderLabel",privacy:"protected",description:"renders the mdc-label-text container that contains the label and labelInfoToggleTip.",return:{type:{text:""}}},{kind:"method",name:"renderHelperText",privacy:"protected",description:"renders the mdc-help-text container that contains the helpertext icon and helpertext.",return:{type:{text:""}}},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,attribute:"disabled",reflects:!0,inheritedFrom:{name:"DisabledMixin",module:"utils/mixins/DisabledMixin.js"}}],attributes:[{name:"label",type:{text:"string | undefined"},description:"The label of the input field. It is linked to the input field using the `for` attribute.",fieldName:"label"},{name:"required-label",type:{text:"string | undefined"},description:`The required label of the input field.
When an appropriate string value is set,
the input field is marked as required and the label is appended with this text.`,fieldName:"requiredLabel"},{name:"id",type:{text:"string"},default:"''",description:"The unique id of the input field. It is used to link the input field with the label.",fieldName:"id"},{name:"help-text-type",type:{text:"ValidationType"},description:"The type of help text. It can be 'default', 'error', 'warning', 'success', 'priority'.",fieldName:"helpTextType"},{name:"help-text",type:{text:"string | undefined"},description:"The help text that is displayed below the input field.",fieldName:"helpText"},{name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
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
- **Only use this when a Icon is standalone and is not part of a button or other interactive elements.**`,name:"Icon",cssProperties:[{description:"Allows customization of the default fill color.",name:"--mdc-icon-fill-color"},{description:"Allows customization of the icon size.",name:"--mdc-icon-size"},{description:"Allows customization of the icon border radius.",name:"--mdc-icon-border-radius"}],members:[{kind:"field",name:"iconData",type:{text:"HTMLElement | undefined"},privacy:"private"},{kind:"field",name:"lengthUnitFromContext",type:{text:"string | undefined"},privacy:"private"},{kind:"field",name:"sizeFromContext",type:{text:"number | undefined"},privacy:"private"},{kind:"field",name:"name",type:{text:"IconNames | undefined"},description:"Name of the icon (= filename)",attribute:"name",reflects:!0},{kind:"field",name:"size",type:{text:"number | undefined"},description:"Size of the icon (works in combination with length unit)",attribute:"size"},{kind:"field",name:"lengthUnit",type:{text:"string | undefined"},description:"Length unit attribute for overriding length-unit from `IconProvider`",attribute:"length-unit"},{kind:"field",name:"ariaLabel",type:{text:"string | null"},default:"null",description:"Aria-label attribute to be set for accessibility",attribute:"aria-label"},{kind:"field",name:"ariaLabelledBy",type:{text:"string | null"},default:"null",description:"Aria-labelledby attribute to be set for accessibility",attribute:"aria-labelledby"},{kind:"field",name:"iconProviderContext",privacy:"private",readonly:!0},{kind:"field",name:"abortController",type:{text:"AbortController"},privacy:"private",default:"new AbortController()"},{kind:"method",name:"prepareIconElement",privacy:"private",parameters:[{name:"iconData",type:{text:"string"},description:"The icon string to be parsed"}],description:`Parse the icon string to an html element, set the attributes and
return the icon element`,return:{type:{text:""}}},{kind:"method",name:"getIconData",privacy:"private",description:`Fetches the icon (currently only svg) and sets state and attributes once fetched successfully

This method uses abortController.signal to cancel the fetch request when the component is disconnected or updated.
If the request is aborted after the fetch() call has been fulfilled but before the response body has been read,
then attempting to read the response body will reject with an AbortError exception.`},{kind:"method",name:"handleIconLoadedSuccess",privacy:"private",parameters:[{name:"iconHtml",type:{text:"HTMLElement"},description:"The icon html element which has been fetched from the icon provider."}],description:`Sets the iconData state to the fetched icon.
Dispatches a 'load' event on the component once the icon has been successfully loaded.`},{kind:"method",name:"handleIconLoadedFailure",privacy:"private",parameters:[{name:"error",type:{text:"unknown"}}],description:`Dispatches an 'error' event on the component when the icon fetching has failed.
This event bubbles and is cancelable.
The error detail is set to the error object.`},{kind:"method",name:"updateSize",privacy:"private",description:"Updates the size by setting the width and height"},{kind:"field",name:"computedIconSize",privacy:"private",readonly:!0}],attributes:[{name:"name",type:{text:"IconNames | undefined"},description:"Name of the icon (= filename)",fieldName:"name"},{name:"size",type:{text:"number | undefined"},description:"Size of the icon (works in combination with length unit)",fieldName:"size"},{name:"length-unit",type:{text:"string | undefined"},description:"Length unit attribute for overriding length-unit from `IconProvider`",fieldName:"lengthUnit"},{name:"aria-label",type:{text:"string | null"},default:"null",description:"Aria-label attribute to be set for accessibility",fieldName:"ariaLabel"},{name:"aria-labelledby",type:{text:"string | null"},default:"null",description:"Aria-labelledby attribute to be set for accessibility",fieldName:"ariaLabelledBy"}],superclass:{name:"Component",module:"/src/models"},tagName:"mdc-icon",jsDoc:`/**
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
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"Icon",module:"components/icon/icon.component.js"}}]},{kind:"javascript-module",path:"components/iconprovider/iconprovider.component.js",declarations:[{kind:"class",description:"IconProvider component, which allows to be consumed from sub components\n(see `providerUtils.consume` for how to consume)\n\nAttribute `iconSet` can be set to either `momentum-icons` or `custom-icons`.\nIf `momentum-icons` is selected, the icons will be fetched from the\nMomentum Design System icon set per a dynamic JS Import (no need to provide a URL).\nThis requires the consumer to have the `@momentum-designs` package installed and the\nbuild tooling needs to support dynamic imports.\n\nIf `custom-icons` is selected, the icons will be fetched from the provided URL.\nThis requires the consumer to provide a URL from which the icons will be fetched and\nthe consumer needs to make sure to bundle the icons in the application.\n\nIf `cacheStrategy` is provided (only works with iconSet = `custom-icons`), the\nIconProvider will cache the icons in the selected cache (either web-api-cache or in-memory-cache),\nto avoid fetching the same icon multiple times over the network.\nThis is useful when the same icon is used multiple times in the application.\nTo consider:\n- The `in-memory-cache` is not persisted and will be lost when the\nIconProvider is removed from the DOM.\n- The `web-api-cache` is persisted, but only works in https environments\n(https://developer.mozilla.org/en-US/docs/Web/API/Cache).",name:"IconProvider",slots:[{description:"children",name:""}],members:[{kind:"field",name:"Context",privacy:"public",static:!0,description:"Context object of the IconProvider, to be consumed by child components",readonly:!0},{kind:"field",name:"iconSet",type:{text:"IconSet | undefined"},description:`Icon set to be used

If \`momentum-icons\` is selected, the icons will be fetched from the
Momentum Design System icon set per a dynamic JS Import (no need to provide a URL).
This requires the consumer to have the \`@momentum-designs\` package installed and the
build tooling needs to support dynamic imports.

If \`custom-icons\` is selected, the icons will be fetched from the provided URL.
This requires the consumer to provide a URL from which the icons will be fetched and
the consumer needs to make sure to bundle the icons in the application.`,default:"momentum-icons",attribute:"icon-set",reflects:!0},{kind:"field",name:"url",type:{text:"string | undefined"},description:"Url of where icons will be fetched from\n(if Icon set is `custom-icons`, this will be the base url)",attribute:"url"},{kind:"field",name:"fileExtension",type:{text:"string | undefined"},description:"File extension of icons\n(if Icon set is `custom-icons`, this will be the file extension for icons)",default:"svg",attribute:"file-extension",reflects:!0},{kind:"field",name:"lengthUnit",type:{text:"string"},description:"Length unit used for sizing of icons",default:"em",attribute:"length-unit",reflects:!0},{kind:"field",name:"size",type:{text:"number | undefined"},description:`The default size of the icon.
If not set, it falls back to the size defined by the length unit.`,default:"1",attribute:"size",reflects:!0},{kind:"field",name:"cacheStrategy",type:{text:"CacheStrategy | undefined"},description:"Icons Cache Strategy to use\n\n**Can only be used if Icon set is `custom-icons`**\n\nChoose `in-memory-cache` to cache icons in a JS cache (in-memory cache).\nChoose `web-cache-api` to cache icons using the Web Cache API.\n\nNOTE: `cache-name` must be provided if `cache-strategy` is provided.\n\nIf not provided or invalid value provided, the icons will not be cached.",default:"undefined",attribute:"cache-strategy"},{kind:"field",name:"cacheName",type:{text:"string | undefined"},description:`Icons Cache Name to use (cache strategy must be provided)

If provided, Icons inside the provider will be cached in the
cache (determined by \`cache-strategy\`) with the provided name.

NOTE: \`cache-name\` requires \`cache-strategy\` to be set.

If not provided, the icons will not be cached.`,default:"undefined",attribute:"cache-name"},{kind:"method",name:"updateValuesInContext",privacy:"private"},{kind:"method",name:"updateContext",privacy:"protected",return:{type:{text:"void"}}}],attributes:[{name:"icon-set",type:{text:"IconSet | undefined"},description:`Icon set to be used

If \`momentum-icons\` is selected, the icons will be fetched from the
Momentum Design System icon set per a dynamic JS Import (no need to provide a URL).
This requires the consumer to have the \`@momentum-designs\` package installed and the
build tooling needs to support dynamic imports.

If \`custom-icons\` is selected, the icons will be fetched from the provided URL.
This requires the consumer to provide a URL from which the icons will be fetched and
the consumer needs to make sure to bundle the icons in the application.`,default:"momentum-icons",fieldName:"iconSet"},{name:"url",type:{text:"string | undefined"},description:"Url of where icons will be fetched from\n(if Icon set is `custom-icons`, this will be the base url)",fieldName:"url"},{name:"file-extension",type:{text:"string | undefined"},description:"File extension of icons\n(if Icon set is `custom-icons`, this will be the file extension for icons)",default:"svg",fieldName:"fileExtension"},{name:"length-unit",type:{text:"string"},description:"Length unit used for sizing of icons",default:"em",fieldName:"lengthUnit"},{name:"size",type:{text:"number | undefined"},description:`The default size of the icon.
If not set, it falls back to the size defined by the length unit.`,default:"1",fieldName:"size"},{name:"cache-strategy",type:{text:"CacheStrategy | undefined"},description:"Icons Cache Strategy to use\n\n**Can only be used if Icon set is `custom-icons`**\n\nChoose `in-memory-cache` to cache icons in a JS cache (in-memory cache).\nChoose `web-cache-api` to cache icons using the Web Cache API.\n\nNOTE: `cache-name` must be provided if `cache-strategy` is provided.\n\nIf not provided or invalid value provided, the icons will not be cached.",default:"undefined",fieldName:"cacheStrategy"},{name:"cache-name",type:{text:"string | undefined"},description:`Icons Cache Name to use (cache strategy must be provided)

If provided, Icons inside the provider will be cached in the
cache (determined by \`cache-strategy\`) with the provided name.

NOTE: \`cache-name\` requires \`cache-strategy\` to be set.

If not provided, the icons will not be cached.`,default:"undefined",fieldName:"cacheName"}],superclass:{name:"Provider",module:"/src/models"},tagName:"mdc-iconprovider",jsDoc:`/**
 * IconProvider component, which allows to be consumed from sub components
 * (see \`providerUtils.consume\` for how to consume)
 *
 * Attribute \`iconSet\` can be set to either \`momentum-icons\` or \`custom-icons\`.
 * If \`momentum-icons\` is selected, the icons will be fetched from the
 * Momentum Design System icon set per a dynamic JS Import (no need to provide a URL).
 * This requires the consumer to have the \`@momentum-designs\` package installed and the
 * build tooling needs to support dynamic imports.
 *
 * If \`custom-icons\` is selected, the icons will be fetched from the provided URL.
 * This requires the consumer to provide a URL from which the icons will be fetched and
 * the consumer needs to make sure to bundle the icons in the application.
 *
 * If \`cacheStrategy\` is provided (only works with iconSet = \`custom-icons\`), the
 * IconProvider will cache the icons in the selected cache (either web-api-cache or in-memory-cache),
 * to avoid fetching the same icon multiple times over the network.
 * This is useful when the same icon is used multiple times in the application.
 * To consider:
 * - The \`in-memory-cache\` is not persisted and will be lost when the
 * IconProvider is removed from the DOM.
 * - The \`web-api-cache\` is persisted, but only works in https environments
 * (https://developer.mozilla.org/en-US/docs/Web/API/Cache).
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
- all the attributes of the input field.`,name:"Input",cssProperties:[{description:"Border color for the input container when disabled",name:"--mdc-input-disabled-border-color"},{description:"Text color for the input field when disabled",name:"--mdc-input-disabled-text-color"},{description:"Background color for the input field when disabled",name:"--mdc-input-disabled-background-color"},{description:"Border color for the input container",name:"--mdc-input-border-color"},{description:"Text color for the input field",name:"--mdc-input-text-color"},{description:"Background color for the input field",name:"--mdc-input-background-color"},{description:"Background color for the selected text",name:"--mdc-input-selection-background-color"},{description:"Text color for the selected text",name:"--mdc-input-selection-text-color"},{description:"Text color for the help text",name:"--mdc-input-support-text-color"},{description:"Background color for the input field when hovered",name:"--mdc-input-hover-background-color"},{description:"Background color for the input field when focused",name:"--mdc-input-focused-background-color"},{description:"Border color for the input container when focused",name:"--mdc-input-focused-border-color"},{description:"Border color for the input container when error",name:"--mdc-input-error-border-color"},{description:"Border color for the input container when warning",name:"--mdc-input-warning-border-color"},{description:"Border color for the input container when success",name:"--mdc-input-success-border-color"},{description:"Border color for the input container when primary",name:"--mdc-input-primary-border-color"}],members:[{kind:"field",name:"placeholder",type:{text:"string"},default:"''",description:"The placeholder text that is displayed when the input field is empty.",attribute:"placeholder"},{kind:"field",name:"readonly",type:{text:"boolean"},default:"false",description:"readonly attribute of the input field. If true, the input field is read-only.",attribute:"readonly"},{kind:"field",name:"prefixText",type:{text:"string | undefined"},description:`The prefix text that is displayed before the input field. It has a max length of 10 characters.
When the prefix text is set, make sure to set the 'data-aria-label'
attribute with the appropriate value for accessibility.`,attribute:"prefix-text"},{kind:"field",name:"leadingIcon",type:{text:"IconNames | undefined"},description:"The leading icon that is displayed before the input field.",attribute:"leading-icon"},{kind:"field",name:"trailingButton",type:{text:"boolean"},default:"false",description:"The trailing button when set to true, shows a clear button that clears the input field.",attribute:"trailing-button"},{kind:"field",name:"maxlength",type:{text:"number | undefined"},description:"The maximum number of characters that the input field can accept.",attribute:"maxlength"},{kind:"field",name:"minlength",type:{text:"number | undefined"},description:"The minimum number of characters that the input field can accept.",attribute:"minlength"},{kind:"field",name:"autocapitalize",type:{text:"AutoCapitalizeType"},description:"The autocapitalize attribute of the input field.",default:"'off'",attribute:"autocapitalize"},{kind:"field",name:"autocomplete",type:{text:"any"},default:"'off'",description:"The autocomplete attribute of the input field.",attribute:"autocomplete"},{kind:"field",name:"autofocus",type:{text:"boolean"},default:"false",description:"If true, the input field is focused when the component is rendered.",attribute:"autofocus"},{kind:"field",name:"dirname",type:{text:"string | undefined"},description:'Specifies the name of the directionality of text for submission purposes (e.g., "rtl" for right-to-left).',attribute:"dirname"},{kind:"field",name:"pattern",type:{text:"string | undefined"},description:`The pattern attribute of the input field.
Specifies a regular expression that the input value must match for validation purposes.`,attribute:"pattern"},{kind:"field",name:"list",type:{text:"string | undefined"},description:`The list attribute of the input field.
Identifies a list of pre-defined options to suggest to the user.`,attribute:"list"},{kind:"field",name:"size",type:{text:"number | undefined | undefined"},description:`The size attribute of the input field.
Specifies the width of the input field.`,default:"undefined",attribute:"size"},{kind:"field",name:"clearAriaLabel",type:{text:"string"},default:"''",description:"Aria label for the trailing button. If trailing button is set to true, this label is used for the clear button.",attribute:"clear-aria-label"},{kind:"method",name:"handleValueChange",description:`Handles the value change of the input field.
Sets the form value and updates the validity of the input field.`,return:{type:{text:""}}},{kind:"method",name:"setInputValidity",privacy:"private"},{kind:"method",name:"updateValue",privacy:"private",description:`Updates the value of the input field.
Sets the form value.`,return:{type:{text:""}}},{kind:"method",name:"onInput",privacy:"private",description:`Handles the input event of the input field.
Updates the value and sets the validity of the input field.`},{kind:"method",name:"onChange",privacy:"private",parameters:[{name:"event",type:{text:"Event"},description:"Event which contains information about the value change."}],description:`Handles the change event of the input field.
Updates the value and sets the validity of the input field.

The 'change' event does not bubble up through the shadow DOM as it was not composed.
Therefore, we need to re-dispatch the same event to ensure it is propagated correctly.
Read more: https://developer.mozilla.org/en-US/docs/Web/API/Event/composed`},{kind:"method",name:"handleKeyDown",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"},description:"Keyboard event"}],description:`Handles the keydown event of the input field.
If the key pressed is 'Enter', it submits the form.`},{kind:"method",name:"renderLeadingIcon",privacy:"protected",description:`Renders the leading icon before the input field.
If the leading icon is not set, it will not be displayed.`,return:{type:{text:""}}},{kind:"method",name:"renderPrefixText",privacy:"protected",description:`Renders the prefix text before the input field.
If the prefix text is more than 10 characters,
- it will not be displayed.
- the validation messsage will be displayed.

 Note: We are setting aria-hidden so that the screen reader does not read the prefix text.
 The consumers should set the appropriate aria-label for the input field using 'data-aria-label' attribute.`,return:{type:{text:""}}},{kind:"method",name:"clearInputText",privacy:"private",description:"Clears the input field."},{kind:"method",name:"renderTrailingButton",privacy:"protected",description:"Renders the trailing button to clear the input field if the trailingButton is set to true.",return:{type:{text:""}}},{kind:"field",name:"name",type:{text:"string"},default:"''",description:`Indicates the name of the component group.
They are used to group elements in a form together.`,attribute:"name",reflects:!0,inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"field",name:"value",type:{text:"string"},default:"''",description:"Indicates the value of the component group (ex: input, checkbox, radio, select etc...)",attribute:"value",reflects:!0,inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"field",name:"validationMessage",type:{text:"string | undefined"},description:"Custom validation message that will override the default message and displayed when the input is invalid.",attribute:"validation-message",reflects:!0,inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"field",name:"validity",type:{text:"ValidityState"},readonly:!0,inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"field",name:"willValidate",readonly:!0,inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"method",name:"setValidity",description:"Sets the validity of the input field based on the input field's validity.",return:{type:{text:""}},inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"method",name:"checkValidity",return:{type:{text:"boolean"}},inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"method",name:"reportValidity",inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"field",name:"id",type:{text:"string"},default:"`mdc-input-${uuidv4()}`",description:"The unique id of the input field. It is used to link the input field with the label.",attribute:"id",inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"dataAriaLabel",type:{text:"string | null"},default:"null",description:`Defines a string value that labels the current element.
The Aria-Label attribute to be set for accessibility.`,attribute:"data-aria-label",reflects:!0,inheritedFrom:{name:"DataAriaLabelMixin",module:"utils/mixins/DataAriaLabelMixin.js"}},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,attribute:"disabled",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"label",type:{text:"string | undefined"},description:"The label of the input field. It is linked to the input field using the `for` attribute.",attribute:"label",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"requiredLabel",type:{text:"string | undefined"},description:`The required label of the input field.
When an appropriate string value is set,
the input field is marked as required and the label is appended with this text.`,attribute:"required-label",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"helpTextType",type:{text:"ValidationType"},description:"The type of help text. It can be 'default', 'error', 'warning', 'success', 'priority'.",attribute:"help-text-type",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"helpText",type:{text:"string | undefined"},description:"The help text that is displayed below the input field.",attribute:"help-text",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderLabelElement",privacy:"protected",description:`creates the label element when the label property is set.
id is used to link the label with the input field.`,return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderRequiredLabel",privacy:"protected",inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderHelpTextIcon",privacy:"protected",description:`creates the helpertext icon based on the helpTextType for validation.
If the helpTextType is not set, it defaults to 'default' and it doesn't display any icon.`,return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderHelpText",privacy:"protected",description:`creates the helper text component when the helpertext value is set.
It is also used to display the validation message based on the helpTextType.`,return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderLabel",privacy:"protected",description:"renders the mdc-label-text container that contains the label and labelInfoToggleTip.",return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderHelperText",privacy:"protected",description:"renders the mdc-help-text container that contains the helpertext icon and helpertext.",return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}}],events:[{type:{text:"EventConstructor"}},{description:"(React: onInput) This event is dispatched when the value of the input field changes (every press).",name:"input",reactName:"onInput",eventName:"InputEvent"},{description:"(React: onChange) This event is dispatched when the value of the input field changes (on blur).",name:"change",reactName:"onChange",eventName:"ChangeEvent"},{description:"(React: onFocus) This event is dispatched when the input receives focus.",name:"focus",reactName:"onFocus",eventName:"FocusEvent"},{description:"(React: onBlur) This event is dispatched when the input loses focus.",name:"blur",reactName:"onBlur",eventName:"BlurEvent"}],attributes:[{name:"placeholder",type:{text:"string"},default:"''",description:"The placeholder text that is displayed when the input field is empty.",fieldName:"placeholder"},{name:"readonly",type:{text:"boolean"},default:"false",description:"readonly attribute of the input field. If true, the input field is read-only.",fieldName:"readonly"},{name:"prefix-text",type:{text:"string | undefined"},description:`The prefix text that is displayed before the input field. It has a max length of 10 characters.
When the prefix text is set, make sure to set the 'data-aria-label'
attribute with the appropriate value for accessibility.`,fieldName:"prefixText"},{name:"leading-icon",type:{text:"IconNames | undefined"},description:"The leading icon that is displayed before the input field.",fieldName:"leadingIcon"},{name:"trailing-button",type:{text:"boolean"},default:"false",description:"The trailing button when set to true, shows a clear button that clears the input field.",fieldName:"trailingButton"},{name:"maxlength",type:{text:"number | undefined"},description:"The maximum number of characters that the input field can accept.",fieldName:"maxlength"},{name:"minlength",type:{text:"number | undefined"},description:"The minimum number of characters that the input field can accept.",fieldName:"minlength"},{name:"autocapitalize",type:{text:"AutoCapitalizeType"},description:"The autocapitalize attribute of the input field.",default:"'off'",fieldName:"autocapitalize"},{name:"autocomplete",type:{text:"any"},default:"'off'",description:"The autocomplete attribute of the input field.",fieldName:"autocomplete"},{name:"autofocus",type:{text:"boolean"},default:"false",description:"If true, the input field is focused when the component is rendered.",fieldName:"autofocus"},{name:"dirname",type:{text:"string | undefined"},description:'Specifies the name of the directionality of text for submission purposes (e.g., "rtl" for right-to-left).',fieldName:"dirname"},{name:"pattern",type:{text:"string | undefined"},description:`The pattern attribute of the input field.
Specifies a regular expression that the input value must match for validation purposes.`,fieldName:"pattern"},{name:"list",type:{text:"string | undefined"},description:`The list attribute of the input field.
Identifies a list of pre-defined options to suggest to the user.`,fieldName:"list"},{name:"size",type:{text:"number | undefined | undefined"},description:`The size attribute of the input field.
Specifies the width of the input field.`,default:"undefined",fieldName:"size"},{name:"clear-aria-label",type:{text:"string"},default:"''",description:"Aria label for the trailing button. If trailing button is set to true, this label is used for the clear button.",fieldName:"clearAriaLabel"},{name:"name",type:{text:"string"},default:"''",description:`Indicates the name of the component group.
They are used to group elements in a form together.`,fieldName:"name",inheritedFrom:{name:"FormInternalsMixin",module:"src/utils/mixins/FormInternalsMixin.ts"}},{name:"value",type:{text:"string"},default:"''",description:"Indicates the value of the component group (ex: input, checkbox, radio, select etc...)",fieldName:"value",inheritedFrom:{name:"FormInternalsMixin",module:"src/utils/mixins/FormInternalsMixin.ts"}},{name:"validation-message",type:{text:"string | undefined"},description:"Custom validation message that will override the default message and displayed when the input is invalid.",fieldName:"validationMessage",inheritedFrom:{name:"FormInternalsMixin",module:"src/utils/mixins/FormInternalsMixin.ts"}},{name:"data-aria-label",type:{text:"string | null"},default:"null",description:`Defines a string value that labels the current element.
The Aria-Label attribute to be set for accessibility.`,fieldName:"dataAriaLabel",inheritedFrom:{name:"DataAriaLabelMixin",module:"src/utils/mixins/DataAriaLabelMixin.ts"}},{name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,fieldName:"disabled",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"label",type:{text:"string | undefined"},description:"The label of the input field. It is linked to the input field using the `for` attribute.",fieldName:"label",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"required-label",type:{text:"string | undefined"},description:`The required label of the input field.
When an appropriate string value is set,
the input field is marked as required and the label is appended with this text.`,fieldName:"requiredLabel",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"id",type:{text:"string"},default:"''",description:"The unique id of the input field. It is used to link the input field with the label.",fieldName:"id",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"help-text-type",type:{text:"ValidationType"},description:"The type of help text. It can be 'default', 'error', 'warning', 'success', 'priority'.",fieldName:"helpTextType",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"help-text",type:{text:"string | undefined"},description:"The help text that is displayed below the input field.",fieldName:"helpText",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}}],mixins:[{name:"FormInternalsMixin",module:"/src/utils/mixins/FormInternalsMixin"},{name:"DataAriaLabelMixin",module:"/src/utils/mixins/DataAriaLabelMixin"}],superclass:{name:"FormfieldWrapper",module:"/src/components/formfieldwrapper"},tagName:"mdc-input",jsDoc:`/**
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
 * @event input - (React: onInput) This event is dispatched when the value of the input field changes (every press).
 * @event change - (React: onChange) This event is dispatched when the value of the input field changes (on blur).
 * @event focus - (React: onFocus) This event is dispatched when the input receives focus.
 * @event blur - (React: onBlur) This event is dispatched when the input loses focus.
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
 */`,customElement:!0,slots:[{description:"slot to add the label info icon",name:"label-info",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}}]}],exports:[{kind:"js",name:"default",declaration:{name:"Input",module:"components/input/input.component.js"}}]},{kind:"javascript-module",path:"components/inputchip/inputchip.component.js",declarations:[{kind:"class",description:`mdc-inputchip component is an interactive chip that consumers can use to represent an input.

- It supports a leading icon along with label.
- It supports an error state for validation.
- It supports a close button to remove the chip.`,name:"InputChip",cssProperties:[{description:"The color of the chip.",name:"--mdc-chip-color"},{description:"The border color of the chip.",name:"--mdc-chip-border-color"},{description:"The background color of the chip.",name:"--mdc-chip-background-color"}],members:[{kind:"field",name:"label",type:{text:"string"},default:"''",description:`The label of the inputchip.

We recommend limiting the <b>maximum length of the label text to 20 characters</b>,
including empty spaces to split words.`,attribute:"label"},{kind:"field",name:"error",type:{text:"boolean"},default:"false",description:"The error state of the inputchip.",attribute:"error"},{kind:"field",name:"clearAriaLabel",type:{text:"string"},default:"''",description:"The aria-label of the close button.",attribute:"clear-aria-label"},{kind:"method",name:"renderIcon",privacy:"private",description:"Renders the icon element if available.",return:{type:{text:""}}},{kind:"method",name:"handleClose",privacy:"private",parameters:[{name:"event",type:{text:"Event"},description:"The event object."}],description:"Handles the behavior of the close button on click event."},{kind:"field",name:"iconName",type:{text:"IconNames | undefined"},description:"Name of the icon (= filename).\n\nIf no `icon-name` is provided, no icon will be rendered.",attribute:"icon-name",inheritedFrom:{name:"IconNameMixin",module:"utils/mixins/IconNameMixin.js"}},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,attribute:"disabled",reflects:!0,inheritedFrom:{name:"DisabledMixin",module:"utils/mixins/DisabledMixin.js"}}],events:[{type:{text:"EventConstructor"}},{description:"(React: onClick) This event is dispatched when the close button is clicked.",name:"click",reactName:"onClick",eventName:"ClickEvent"},{description:"(React: onKeyDown) This event is dispatched when a key is pressed down on the close button.",name:"keydown",reactName:"onKeyDown",eventName:"KeydownEvent"},{description:"(React: onKeyUp) This event is dispatched when a key is released on the close button.",name:"keyup",reactName:"onKeyUp",eventName:"KeyupEvent"},{description:"(React: onFocus) This event is dispatched when the close button receives focus.",name:"focus",reactName:"onFocus",eventName:"FocusEvent"}],attributes:[{name:"label",type:{text:"string"},default:"''",description:`The label of the inputchip.

We recommend limiting the <b>maximum length of the label text to 20 characters</b>,
including empty spaces to split words.`,fieldName:"label"},{name:"error",type:{text:"boolean"},default:"false",description:"The error state of the inputchip.",fieldName:"error"},{name:"clear-aria-label",type:{text:"string"},default:"''",description:"The aria-label of the close button.",fieldName:"clearAriaLabel"},{name:"icon-name",type:{text:"IconNames | undefined"},description:"Name of the icon (= filename).\n\nIf no `icon-name` is provided, no icon will be rendered.",fieldName:"iconName",inheritedFrom:{name:"IconNameMixin",module:"src/utils/mixins/IconNameMixin.ts"}},{name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,fieldName:"disabled",inheritedFrom:{name:"DisabledMixin",module:"src/utils/mixins/DisabledMixin.ts"}}],mixins:[{name:"IconNameMixin",module:"/src/utils/mixins/IconNameMixin"},{name:"DisabledMixin",module:"/src/utils/mixins/DisabledMixin"}],superclass:{name:"Component",module:"/src/models"},tagName:"mdc-inputchip",jsDoc:`/**
 * mdc-inputchip component is an interactive chip that consumers can use to represent an input.
 *
 * - It supports a leading icon along with label.
 * - It supports an error state for validation.
 * - It supports a close button to remove the chip.
 *
 * @tagname mdc-inputchip
 *
 * @dependency mdc-button
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @event click - (React: onClick) This event is dispatched when the close button is clicked.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the close button.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the close button.
 * @event focus - (React: onFocus) This event is dispatched when the close button receives focus.
 *
 * @cssproperty --mdc-chip-color - The color of the chip.
 * @cssproperty --mdc-chip-border-color - The border color of the chip.
 * @cssproperty --mdc-chip-background-color - The background color of the chip.
 *
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"InputChip",module:"components/inputchip/inputchip.component.js"}}]},{kind:"javascript-module",path:"components/link/link.component.js",declarations:[{kind:"class",description:"`mdc-link` component can be used to navigate to a different page\nwithin the application or to an external site. It can be used to link to\nemails or phone numbers.\n\nThe `children` of the link component is expected to be an anchor element\ncontaining the text, href, and other attributes.\n\nFor `icon`, the `mdc-icon` component is used to render the icon.",name:"Link",cssProperties:[{description:"Border radius of the link",name:"--mdc-link-border-radius"},{description:"Text and icon color of the link in active state",name:"--mdc-link-color-active"},{description:"Text and icon color of the link in disabled state",name:"--mdc-link-color-disabled"},{description:"Text and icon color of the link in hover state",name:"--mdc-link-color-hover"},{description:"Text and icon color of the link in normal state",name:"--mdc-link-color-normal"},{description:"Gap between the text and icon (only applicable when an icon is set)",name:"--mdc-link-icon-margin-left"},{description:"Text and icon color of the inverted link in active state",name:"--mdc-link-inverted-color-active"},{description:"Text and icon color of the inverted link in disabled state",name:"--mdc-link-inverted-color-disabled"},{description:"Text and icon color of the inverted link in hover state",name:"--mdc-link-inverted-color-hover"},{description:"Text and icon color of the inverted link in normal state",name:"--mdc-link-inverted-color-normal"},{description:"Text decoration of the link in disabled state for all variants",name:"--mdc-link-text-decoration-disabled"}],members:[{kind:"field",name:"inline",type:{text:"boolean"},description:"The link can be inline or standalone.",default:"false",attribute:"inline",reflects:!0},{kind:"field",name:"inverted",type:{text:"boolean"},description:"The link color can be inverted by setting the inverted attribute to true.",default:"false",attribute:"inverted",reflects:!0},{kind:"field",name:"size",type:{text:"LinkSize"},description:`Size of the link.
Acceptable values include:

- 'small'
- 'midsize'
- 'large'`,default:"large",attribute:"size",reflects:!0},{kind:"method",name:"getIconSize",privacy:"private",return:{type:{text:""}},description:"Method to get the size of the trailing icon based on the link size."},{kind:"method",name:"setDisabled",privacy:"private",parameters:[{name:"disabled",type:{text:"boolean"},description:"The disabled state of icon"}],description:`Updates the tabindex of the host element to disable or enable the link.
When disabled, the link is not focusable or clickable, and tabindex is set to -1
and aria-disabled attribute is set to true
When link is not disabled, the previous tabindex of the host element is restored
and aria-disabled attribute is removed.`},{kind:"method",name:"updateTrailingIcon",privacy:"private",description:`Method to create and append trailing icon to the first anchor element in the slot.
If no icon name is provided, no icon will be rendered.`},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,attribute:"disabled",reflects:!0,inheritedFrom:{name:"DisabledMixin",module:"utils/mixins/DisabledMixin.js"}},{kind:"field",name:"iconName",type:{text:"IconNames | undefined"},description:"Name of the icon (= filename).\n\nIf no `icon-name` is provided, no icon will be rendered.",attribute:"icon-name",inheritedFrom:{name:"IconNameMixin",module:"utils/mixins/IconNameMixin.js"}}],attributes:[{name:"inline",type:{text:"boolean"},description:"The link can be inline or standalone.",default:"false",fieldName:"inline"},{name:"inverted",type:{text:"boolean"},description:"The link color can be inverted by setting the inverted attribute to true.",default:"false",fieldName:"inverted"},{name:"size",type:{text:"LinkSize"},description:`Size of the link.
Acceptable values include:

- 'small'
- 'midsize'
- 'large'`,default:"large",fieldName:"size"},{name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,fieldName:"disabled",inheritedFrom:{name:"DisabledMixin",module:"src/utils/mixins/DisabledMixin.ts"}},{name:"icon-name",type:{text:"IconNames | undefined"},description:"Name of the icon (= filename).\n\nIf no `icon-name` is provided, no icon will be rendered.",fieldName:"iconName",inheritedFrom:{name:"IconNameMixin",module:"src/utils/mixins/IconNameMixin.ts"}}],mixins:[{name:"DisabledMixin",module:"/src/utils/mixins/DisabledMixin"},{name:"IconNameMixin",module:"/src/utils/mixins/IconNameMixin"}],superclass:{name:"Component",module:"/src/models"},tagName:"mdc-link",jsDoc:`/**
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
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"Link",module:"components/link/link.component.js"}}]},{kind:"javascript-module",path:"components/list/list.component.js",declarations:[{kind:"class",description:"mdc-list component is used to display a group of list items. It is used as a container to wrap other list items.",name:"List",slots:[{description:"This is a default/unnamed slot",name:"default"}],members:[{kind:"field",name:"listItems",type:{text:"Array<HTMLElement>"}},{kind:"field",name:"headerText",type:{text:"string | undefined"},description:"The header text of the list.",attribute:"header-text",reflects:!0},{kind:"method",name:"handleKeyDown",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"KeyboardEvent"},description:"The keyboard event."}],description:`Handles the keydown event on the list element.
If the key is 'ArrowUp' or 'ArrowDown', it focuses to the previous or next list item
and sets the active tabindex of the list item.
Prevents the default event behavior.`},{kind:"method",name:"getCurrentIndex",privacy:"private",return:{type:{text:""}},parameters:[{name:"target",type:{text:"EventTarget | null"},description:"The target element to find the index of."}],description:`Returns the index of the given target in the listItems array.
If the target is not a list item, but a child element of a list item,
it returns the index of the parent list item.`},{kind:"method",name:"getNewIndexBasedOnKey",privacy:"private",return:{type:{text:""}},parameters:[{name:"key",type:{text:"string"},description:"The key that was pressed."},{name:"currentIndex",type:{text:"number"},description:"The current index of the focused list item."},{name:"wrappedDivsCount",type:{text:"number"},description:"The total number of list items."}],description:`Calculates a new index based on the pressed keyboard key.
Supports navigation keys for moving focus within a list.`},{kind:"method",name:"handleMouseClick",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"MouseEvent"},description:"The mouse event."}],description:"Handles the mouse click event on the list element.\nFinds the index of the target element in the list items array and calls\n`resetTabIndexAndSetActiveTabIndex` with that index."},{kind:"method",name:"resetTabIndexAndSetActiveTabIndex",privacy:"private",parameters:[{name:"newIndex",type:{text:"number"},description:"The index of the new active element in the list."}],description:`Resets all list items tabindex to -1 and sets the tabindex of the
element at the given index to 0, effectively setting the active
element. This is used when navigating the list via keyboard.`},{kind:"field",name:"dataAriaLabel",type:{text:"string | null"},default:"null",description:`Defines a string value that labels the current element.
The Aria-Label attribute to be set for accessibility.`,attribute:"data-aria-label",reflects:!0,inheritedFrom:{name:"DataAriaLabelMixin",module:"utils/mixins/DataAriaLabelMixin.js"}}],attributes:[{name:"header-text",type:{text:"string | undefined"},description:"The header text of the list.",fieldName:"headerText"},{name:"data-aria-label",type:{text:"string | null"},default:"null",description:`Defines a string value that labels the current element.
The Aria-Label attribute to be set for accessibility.`,fieldName:"dataAriaLabel",inheritedFrom:{name:"DataAriaLabelMixin",module:"src/utils/mixins/DataAriaLabelMixin.ts"}}],mixins:[{name:"DataAriaLabelMixin",module:"/src/utils/mixins/DataAriaLabelMixin"}],superclass:{name:"Component",module:"/src/models"},tagName:"mdc-list",jsDoc:`/**
 * mdc-list component is used to display a group of list items. It is used as a container to wrap other list items.
 *
 * @tagname mdc-list
 *
 * @dependency mdc-text
 *
 * @slot default - This is a default/unnamed slot
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"List",module:"components/list/list.component.js"}}]},{kind:"javascript-module",path:"components/listitem/listitem.component.js",declarations:[{kind:"class",description:`mdc-listitem component is used to display a label with different types of controls.
There can be three types of controls, a radio button, a checkbox on the
leading side and a toggle on the trailing side.
The list item can contain an avatar on the leading side and a badge on the trailing side.
Additionally, the list item can contain a side header and a subline text.

The leading and trailing slots can be used to display controls and text. <br/>
Based on the leading/trailing slot, the position of the controls and text can be adjusted. <br/>
Please use mdc-list as a parent element even when there is only listitem for a11y purpose.`,name:"ListItem",cssProperties:[{description:"Allows customization of the default background color.",name:"--mdc-listitem-default-background-color"},{description:"Allows customization of the background color on hover.",name:"--mdc-listitem-background-color-hover"},{description:"Allows customization of the background color when pressed.",name:"--mdc-listitem-background-color-active"},{description:"Allows customization of the primary label, side header and subline text slot color.",name:"--mdc-listitem-primary-label-color"},{description:"Allows customization of the secondary and teritary label text slot color.",name:"--mdc-listitem-secondary-label-color"},{description:"Allows customization of the disabled color.",name:"--mdc-listitem-disabled-color"}],slots:[{description:"slot for list item controls to appear of leading end.",name:"leading-controls"},{description:"slot for list item primary label.",name:"leading-text-primary-label"},{description:"slot for list item secondary label.",name:"leading-text-secondary-label"},{description:"slot for list item tertiary label.",name:"leading-text-tertiary-label"},{description:"slot for list item side header text.",name:"trailing-text-side-header"},{description:"slot for list item subline text.",name:"trailing-text-subline"},{description:"slot for list item controls to appear of trailing end.",name:"trailing-controls"}],members:[{kind:"field",name:"variant",type:{text:"ListItemVariants"},description:"The variant of the list item. It can be a pill, rectangle or a full-width.",default:"'full-width'",attribute:"variant",reflects:!0},{kind:"field",name:"label",type:{text:"string | undefined"},description:`The primary label of the list item.
This appears on the leading side of the list item.`,attribute:"label",reflects:!0},{kind:"field",name:"secondaryLabel",type:{text:"string | undefined"},description:`The secondary label of the list item.
This appears on the leading side of the list item.`,attribute:"secondary-label",reflects:!0},{kind:"field",name:"tertiaryLabel",type:{text:"string | undefined"},description:`The tertiary label of the list item.
This appears on the leading side of the list item.`,attribute:"tertiary-label",reflects:!0},{kind:"field",name:"sideHeaderText",type:{text:"string | undefined"},description:`The header text of the list item.
This appears on the trailing side of the list item.`,attribute:"side-header-text",reflects:!0},{kind:"field",name:"sublineText",type:{text:"string | undefined"},description:`The subline text of the list item.
This appears on the trailing side of the list item.`,attribute:"subline-text",reflects:!0},{kind:"method",name:"getText",privacy:"protected",return:{type:{text:""}},parameters:[{name:"slotName",type:{text:"string"},description:"The name of the slot to be used."},{name:"type",type:{text:"TextType"},description:"The type of the text element."},{name:"content",optional:!0,type:{text:"string"},description:"The text content to be displayed within the slot."}],description:"Generates a template for a text slot with the specified content."},{kind:"method",name:"disableSlottedChildren",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"disabled",type:{text:"boolean"},description:"Whether to disable or enable the controls."}],description:`Disable or enable all slotted elements in the leading and trailing slots.
This is useful when the list item is disabled, to prevent the user from interacting with the controls.`},{kind:"field",name:"role"},{kind:"field",name:"dataAriaLabel",type:{text:"string | null"},default:"null",description:`Defines a string value that labels the current element.
The Aria-Label attribute to be set for accessibility.`,attribute:"data-aria-label",reflects:!0,inheritedFrom:{name:"DataAriaLabelMixin",module:"utils/mixins/DataAriaLabelMixin.js"}},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,attribute:"disabled",reflects:!0,inheritedFrom:{name:"DisabledMixin",module:"utils/mixins/DisabledMixin.js"}},{kind:"field",name:"tabIndex",type:{text:"number"},default:"0",description:"This property specifies the tab order of the element.",attribute:"tabIndex",reflects:!0,inheritedFrom:{name:"TabIndexMixin",module:"utils/mixins/TabIndexMixin.js"}}],events:[{description:"(React: onClick) This event is dispatched when the listitem is clicked.",name:"click",reactName:"onClick",eventName:"ClickEvent"},{description:"(React: onKeyDown) This event is dispatched when a key is pressed down on the listitem.",name:"keydown",reactName:"onKeyDown",eventName:"KeydownEvent"},{description:"(React: onKeyUp) This event is dispatched when a key is released on the listitem.",name:"keyup",reactName:"onKeyUp",eventName:"KeyupEvent"},{description:"(React: onFocus) This event is dispatched when the listitem receives focus.",name:"focus",reactName:"onFocus",eventName:"FocusEvent"}],attributes:[{name:"variant",type:{text:"ListItemVariants"},description:"The variant of the list item. It can be a pill, rectangle or a full-width.",default:"'full-width'",fieldName:"variant"},{name:"label",type:{text:"string | undefined"},description:`The primary label of the list item.
This appears on the leading side of the list item.`,fieldName:"label"},{name:"secondary-label",type:{text:"string | undefined"},description:`The secondary label of the list item.
This appears on the leading side of the list item.`,fieldName:"secondaryLabel"},{name:"tertiary-label",type:{text:"string | undefined"},description:`The tertiary label of the list item.
This appears on the leading side of the list item.`,fieldName:"tertiaryLabel"},{name:"side-header-text",type:{text:"string | undefined"},description:`The header text of the list item.
This appears on the trailing side of the list item.`,fieldName:"sideHeaderText"},{name:"subline-text",type:{text:"string | undefined"},description:`The subline text of the list item.
This appears on the trailing side of the list item.`,fieldName:"sublineText"},{name:"data-aria-label",type:{text:"string | null"},default:"null",description:`Defines a string value that labels the current element.
The Aria-Label attribute to be set for accessibility.`,fieldName:"dataAriaLabel",inheritedFrom:{name:"DataAriaLabelMixin",module:"src/utils/mixins/DataAriaLabelMixin.ts"}},{name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,fieldName:"disabled",inheritedFrom:{name:"DisabledMixin",module:"src/utils/mixins/DisabledMixin.ts"}},{name:"tabIndex",type:{text:"number"},default:"0",description:"This property specifies the tab order of the element.",fieldName:"tabIndex",inheritedFrom:{name:"TabIndexMixin",module:"src/utils/mixins/TabIndexMixin.ts"}}],mixins:[{name:"DataAriaLabelMixin",module:"/src/utils/mixins/DataAriaLabelMixin"},{name:"DisabledMixin",module:"/src/utils/mixins/DisabledMixin"},{name:"TabIndexMixin",module:"/src/utils/mixins/TabIndexMixin"}],superclass:{name:"Component",module:"/src/models"},tagName:"mdc-listitem",jsDoc:`/**
 * mdc-listitem component is used to display a label with different types of controls.
 * There can be three types of controls, a radio button, a checkbox on the
 * leading side and a toggle on the trailing side.
 * The list item can contain an avatar on the leading side and a badge on the trailing side.
 * Additionally, the list item can contain a side header and a subline text.
 *
 * The leading and trailing slots can be used to display controls and text. <br/>
 * Based on the leading/trailing slot, the position of the controls and text can be adjusted. <br/>
 * Please use mdc-list as a parent element even when there is only listitem for a11y purpose.
 *
 * @tagname mdc-listitem
 *
 * @dependency mdc-text
 *
 * @slot leading-controls - slot for list item controls to appear of leading end.
 * @slot leading-text-primary-label - slot for list item primary label.
 * @slot leading-text-secondary-label - slot for list item secondary label.
 * @slot leading-text-tertiary-label - slot for list item tertiary label.
 * @slot trailing-text-side-header - slot for list item side header text.
 * @slot trailing-text-subline - slot for list item subline text.
 * @slot trailing-controls - slot for list item controls to appear of trailing end.
 *
 * @cssproperty --mdc-listitem-default-background-color - Allows customization of the default background color.
 * @cssproperty --mdc-listitem-background-color-hover - Allows customization of the background color on hover.
 * @cssproperty --mdc-listitem-background-color-active - Allows customization of the background color when pressed.
 * @cssproperty --mdc-listitem-primary-label-color
 *  - Allows customization of the primary label, side header and subline text slot color.
 * @cssproperty --mdc-listitem-secondary-label-color
 *  - Allows customization of the secondary and teritary label text slot color.
 * @cssproperty --mdc-listitem-disabled-color - Allows customization of the disabled color.
 *
 * @event click - (React: onClick) This event is dispatched when the listitem is clicked.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the listitem.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the listitem.
 * @event focus - (React: onFocus) This event is dispatched when the listitem receives focus.
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"ListItem",module:"components/listitem/listitem.component.js"}}]},{kind:"javascript-module",path:"components/marker/marker.component.js",declarations:[{kind:"class",description:`\`mdc-marker\`, which is a vertical line and
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
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"Marker",module:"components/marker/marker.component.js"}}]},{kind:"javascript-module",path:"components/optgroup/optgroup.component.js",declarations:[{kind:"class",description:"optgroup component, which creates a grouping of mdc-option within a listbox element.",name:"OptGroup",cssProperties:[{description:"Allows customization of the disabled option color.",name:"--mdc-optgroup-disabled-color"}],slots:[{description:"This is a default slot for mdc-option elements.",name:"default"}],members:[{kind:"field",name:"label",type:{text:"string | undefined"},description:"The header text to be displayed on the top of the options list.",attribute:"label",reflects:!0},{kind:"method",name:"setDisabledForAllOptions",privacy:"private",return:{type:{text:"void"}}},{kind:"field",name:"dataAriaLabel",type:{text:"string | null"},default:"null",description:`Defines a string value that labels the current element.
The Aria-Label attribute to be set for accessibility.`,attribute:"data-aria-label",reflects:!0,inheritedFrom:{name:"DataAriaLabelMixin",module:"utils/mixins/DataAriaLabelMixin.js"}},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,attribute:"disabled",reflects:!0,inheritedFrom:{name:"DisabledMixin",module:"utils/mixins/DisabledMixin.js"}}],attributes:[{name:"label",type:{text:"string | undefined"},description:"The header text to be displayed on the top of the options list.",fieldName:"label"},{name:"data-aria-label",type:{text:"string | null"},default:"null",description:`Defines a string value that labels the current element.
The Aria-Label attribute to be set for accessibility.`,fieldName:"dataAriaLabel",inheritedFrom:{name:"DataAriaLabelMixin",module:"src/utils/mixins/DataAriaLabelMixin.ts"}},{name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,fieldName:"disabled",inheritedFrom:{name:"DisabledMixin",module:"src/utils/mixins/DisabledMixin.ts"}}],mixins:[{name:"DataAriaLabelMixin",module:"/src/utils/mixins/DataAriaLabelMixin"},{name:"DisabledMixin",module:"/src/utils/mixins/DisabledMixin"}],superclass:{name:"Component",module:"/src/models"},tagName:"mdc-optgroup",jsDoc:`/**
 * optgroup component, which creates a grouping of mdc-option within a listbox element.
 *
 * @dependency mdc-text
 *
 * @tagname mdc-optgroup
 *
 * @slot default - This is a default slot for mdc-option elements.
 *
 * @cssproperty --mdc-optgroup-disabled-color - Allows customization of the disabled option color.
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"OptGroup",module:"components/optgroup/optgroup.component.js"}}]},{kind:"javascript-module",path:"components/option/option.component.js",declarations:[{kind:"class",description:`option component, which is used as a list item in a select component.<br/>
We can pass an icon which will be displayed in leading position of the option label text.`,name:"Option",slots:[{description:"This is a default/unnamed slot",name:"default"},{description:"slot for list item controls to appear of leading end.",name:"leading-controls",inheritedFrom:{name:"ListItem",module:"src/components/listitem/listitem.component.ts"}},{description:"slot for list item primary label.",name:"leading-text-primary-label",inheritedFrom:{name:"ListItem",module:"src/components/listitem/listitem.component.ts"}},{description:"slot for list item secondary label.",name:"leading-text-secondary-label",inheritedFrom:{name:"ListItem",module:"src/components/listitem/listitem.component.ts"}},{description:"slot for list item tertiary label.",name:"leading-text-tertiary-label",inheritedFrom:{name:"ListItem",module:"src/components/listitem/listitem.component.ts"}},{description:"slot for list item side header text.",name:"trailing-text-side-header",inheritedFrom:{name:"ListItem",module:"src/components/listitem/listitem.component.ts"}},{description:"slot for list item subline text.",name:"trailing-text-subline",inheritedFrom:{name:"ListItem",module:"src/components/listitem/listitem.component.ts"}},{description:"slot for list item controls to appear of trailing end.",name:"trailing-controls",inheritedFrom:{name:"ListItem",module:"src/components/listitem/listitem.component.ts"}}],members:[{kind:"field",name:"selected",type:{text:"boolean"},default:"false",description:"The selected attribute is used to indicate that the option is selected.",attribute:"selected",reflects:!0},{kind:"field",name:"prefixIcon",type:{text:"IconNames | undefined"},description:"The prefix icon attribute is used to display the icon name on the left of the option label.",attribute:"prefix-icon",reflects:!0},{kind:"field",name:"ariaLabel",type:{text:"string | null"},default:"null",description:"Any additional description can be provided here for screen readers.",attribute:"aria-label",reflects:!0},{kind:"method",name:"handleDefaultSlotChange",privacy:"private",description:`Listens to changes in the default slot and updates the label of the option accordingly.
This is used to set the label of the option when it is not explicitly set.
It is called internally when the slot is changed.`},{kind:"method",name:"updateAttribute",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"attributeName",type:{text:"string"}},{name:"value",type:{text:"string"}}],description:"Updates the attribute of the option to reflect the current state."},{kind:"field",name:"role",type:{text:"string"},default:"'option'",inheritedFrom:{name:"ListItem",module:"components/listitem/listitem.component.js"}},{kind:"field",name:"variant",type:{text:"ListItemVariants"},description:"The variant of the list item. It can be a pill, rectangle or a full-width.",default:"'full-width'",attribute:"variant",reflects:!0,inheritedFrom:{name:"ListItem",module:"components/listitem/listitem.component.js"}},{kind:"field",name:"name",type:{text:"string"},default:"undefined as unknown",description:`Indicates the name of the component group.
They are used to group elements in a form together.`,attribute:"name",reflects:!0,inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"field",name:"secondaryLabel",type:{text:"string | undefined"},description:`The secondary label of the list item.
This appears on the leading side of the list item.`,attribute:"secondary-label",reflects:!0,default:"undefined as unknown",inheritedFrom:{name:"ListItem",module:"components/listitem/listitem.component.js"}},{kind:"field",name:"sideHeaderText",type:{text:"string | undefined"},description:`The header text of the list item.
This appears on the trailing side of the list item.`,attribute:"side-header-text",reflects:!0,default:"undefined as unknown",inheritedFrom:{name:"ListItem",module:"components/listitem/listitem.component.js"}},{kind:"field",name:"sublineText",type:{text:"string | undefined"},description:`The subline text of the list item.
This appears on the trailing side of the list item.`,attribute:"subline-text",reflects:!0,default:"undefined as unknown",inheritedFrom:{name:"ListItem",module:"components/listitem/listitem.component.js"}},{kind:"field",name:"dataAriaLabel",type:{text:"string | null"},default:"undefined as unknown",description:`Defines a string value that labels the current element.
The Aria-Label attribute to be set for accessibility.`,attribute:"data-aria-label",reflects:!0,inheritedFrom:{name:"ListItem",module:"components/listitem/listitem.component.js"}},{kind:"field",name:"value",type:{text:"string"},default:"''",description:"Indicates the value of the component group (ex: input, checkbox, radio, select etc...)",attribute:"value",reflects:!0,inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"field",name:"validationMessage",type:{text:"string | undefined"},description:"Custom validation message that will override the default message and displayed when the input is invalid.",attribute:"validation-message",reflects:!0,inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"field",name:"validity",type:{text:"ValidityState"},readonly:!0,inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"field",name:"willValidate",readonly:!0,inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"method",name:"setValidity",description:"Sets the validity of the input field based on the input field's validity.",return:{type:{text:""}},inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"method",name:"checkValidity",return:{type:{text:"boolean"}},inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"method",name:"reportValidity",inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"field",name:"id",default:"`mdc-input-${uuidv4()}`",inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,attribute:"disabled",reflects:!0,inheritedFrom:{name:"ListItem",module:"components/listitem/listitem.component.js"}},{kind:"field",name:"tabIndex",type:{text:"number"},default:"0",description:"This property specifies the tab order of the element.",attribute:"tabIndex",reflects:!0,inheritedFrom:{name:"ListItem",module:"components/listitem/listitem.component.js"}},{kind:"field",name:"label",type:{text:"string | undefined"},description:`The primary label of the list item.
This appears on the leading side of the list item.`,attribute:"label",reflects:!0,inheritedFrom:{name:"ListItem",module:"components/listitem/listitem.component.js"}},{kind:"field",name:"tertiaryLabel",type:{text:"string | undefined"},description:`The tertiary label of the list item.
This appears on the leading side of the list item.`,attribute:"tertiary-label",reflects:!0,inheritedFrom:{name:"ListItem",module:"components/listitem/listitem.component.js"}},{kind:"method",name:"getText",privacy:"protected",return:{type:{text:""}},parameters:[{name:"slotName",type:{text:"string"},description:"The name of the slot to be used."},{name:"type",type:{text:"TextType"},description:"The type of the text element."},{name:"content",optional:!0,type:{text:"string"},description:"The text content to be displayed within the slot."}],description:"Generates a template for a text slot with the specified content.",inheritedFrom:{name:"ListItem",module:"components/listitem/listitem.component.js"}},{kind:"method",name:"disableSlottedChildren",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"disabled",type:{text:"boolean"},description:"Whether to disable or enable the controls."}],description:`Disable or enable all slotted elements in the leading and trailing slots.
This is useful when the list item is disabled, to prevent the user from interacting with the controls.`,inheritedFrom:{name:"ListItem",module:"components/listitem/listitem.component.js"}}],events:[{description:"(React: onClick) This event is dispatched when the option is clicked.",name:"click",reactName:"onClick",eventName:"ClickEvent",inheritedFrom:{name:"ListItem",module:"src/components/listitem/listitem.component.ts"}},{description:"(React: onKeyDown) This event is dispatched when a key is pressed down on the option.",name:"keydown",reactName:"onKeyDown",eventName:"KeydownEvent",inheritedFrom:{name:"ListItem",module:"src/components/listitem/listitem.component.ts"}},{description:"(React: onKeyUp) This event is dispatched when a key is released on the option.",name:"keyup",reactName:"onKeyUp",eventName:"KeyupEvent",inheritedFrom:{name:"ListItem",module:"src/components/listitem/listitem.component.ts"}},{description:"(React: onFocus) This event is dispatched when the option receives focus.",name:"focus",reactName:"onFocus",eventName:"FocusEvent",inheritedFrom:{name:"ListItem",module:"src/components/listitem/listitem.component.ts"}}],attributes:[{name:"selected",type:{text:"boolean"},default:"false",description:"The selected attribute is used to indicate that the option is selected.",fieldName:"selected"},{name:"prefix-icon",type:{text:"IconNames | undefined"},description:"The prefix icon attribute is used to display the icon name on the left of the option label.",fieldName:"prefixIcon"},{name:"aria-label",type:{text:"string | null"},default:"null",description:"Any additional description can be provided here for screen readers.",fieldName:"ariaLabel"},{name:"name",type:{text:"string"},default:"''",description:`Indicates the name of the component group.
They are used to group elements in a form together.`,fieldName:"name",inheritedFrom:{name:"FormInternalsMixin",module:"src/utils/mixins/FormInternalsMixin.ts"}},{name:"value",type:{text:"string"},default:"''",description:"Indicates the value of the component group (ex: input, checkbox, radio, select etc...)",fieldName:"value",inheritedFrom:{name:"FormInternalsMixin",module:"src/utils/mixins/FormInternalsMixin.ts"}},{name:"validation-message",type:{text:"string | undefined"},description:"Custom validation message that will override the default message and displayed when the input is invalid.",fieldName:"validationMessage",inheritedFrom:{name:"FormInternalsMixin",module:"src/utils/mixins/FormInternalsMixin.ts"}},{name:"data-aria-label",type:{text:"string | null"},default:"null",description:`Defines a string value that labels the current element.
The Aria-Label attribute to be set for accessibility.`,fieldName:"dataAriaLabel",inheritedFrom:{name:"ListItem",module:"src/components/listitem/listitem.component.ts"}},{name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,fieldName:"disabled",inheritedFrom:{name:"ListItem",module:"src/components/listitem/listitem.component.ts"}},{name:"tabIndex",type:{text:"number"},default:"0",description:"This property specifies the tab order of the element.",fieldName:"tabIndex",inheritedFrom:{name:"ListItem",module:"src/components/listitem/listitem.component.ts"}},{name:"variant",type:{text:"ListItemVariants"},description:"The variant of the list item. It can be a pill, rectangle or a full-width.",default:"'full-width'",fieldName:"variant",inheritedFrom:{name:"ListItem",module:"src/components/listitem/listitem.component.ts"}},{name:"label",type:{text:"string | undefined"},description:`The primary label of the list item.
This appears on the leading side of the list item.`,fieldName:"label",inheritedFrom:{name:"ListItem",module:"src/components/listitem/listitem.component.ts"}},{name:"secondary-label",type:{text:"string | undefined"},description:`The secondary label of the list item.
This appears on the leading side of the list item.`,fieldName:"secondaryLabel",inheritedFrom:{name:"ListItem",module:"src/components/listitem/listitem.component.ts"}},{name:"tertiary-label",type:{text:"string | undefined"},description:`The tertiary label of the list item.
This appears on the leading side of the list item.`,fieldName:"tertiaryLabel",inheritedFrom:{name:"ListItem",module:"src/components/listitem/listitem.component.ts"}},{name:"side-header-text",type:{text:"string | undefined"},description:`The header text of the list item.
This appears on the trailing side of the list item.`,fieldName:"sideHeaderText",inheritedFrom:{name:"ListItem",module:"src/components/listitem/listitem.component.ts"}},{name:"subline-text",type:{text:"string | undefined"},description:`The subline text of the list item.
This appears on the trailing side of the list item.`,fieldName:"sublineText",inheritedFrom:{name:"ListItem",module:"src/components/listitem/listitem.component.ts"}}],mixins:[{name:"FormInternalsMixin",module:"/src/utils/mixins/FormInternalsMixin"}],superclass:{name:"ListItem",module:"/src/components/listitem/listitem.component"},tagName:"mdc-option",jsDoc:`/**
 * option component, which is used as a list item in a select component.<br/>
 * We can pass an icon which will be displayed in leading position of the option label text.
 *
 * @tagname mdc-option
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is dispatched when the option is clicked.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the option.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the option.
 * @event focus - (React: onFocus) This event is dispatched when the option receives focus.
 */`,customElement:!0,cssProperties:[{description:"Allows customization of the default background color.",name:"--mdc-listitem-default-background-color",inheritedFrom:{name:"ListItem",module:"src/components/listitem/listitem.component.ts"}},{description:"Allows customization of the background color on hover.",name:"--mdc-listitem-background-color-hover",inheritedFrom:{name:"ListItem",module:"src/components/listitem/listitem.component.ts"}},{description:"Allows customization of the background color when pressed.",name:"--mdc-listitem-background-color-active",inheritedFrom:{name:"ListItem",module:"src/components/listitem/listitem.component.ts"}},{description:"Allows customization of the primary label, side header and subline text slot color.",name:"--mdc-listitem-primary-label-color",inheritedFrom:{name:"ListItem",module:"src/components/listitem/listitem.component.ts"}},{description:"Allows customization of the secondary and teritary label text slot color.",name:"--mdc-listitem-secondary-label-color",inheritedFrom:{name:"ListItem",module:"src/components/listitem/listitem.component.ts"}},{description:"Allows customization of the disabled color.",name:"--mdc-listitem-disabled-color",inheritedFrom:{name:"ListItem",module:"src/components/listitem/listitem.component.ts"}}]}],exports:[{kind:"js",name:"default",declaration:{name:"Option",module:"components/option/option.component.js"}}]},{kind:"javascript-module",path:"components/popover/popover.component.js",declarations:[{kind:"class",description:`Popover component is a lightweight floating UI element that displays additional content when triggered.
It can be used for tooltips, dropdowns, or contextual menus.
The popover automatically positions itself based on available space and
supports dynamic height adjustments with scrollable content when needed。`,name:"Popover",cssProperties:[{description:"radius of the arrow border",name:"--mdc-popover-arrow-border-radius"},{description:"border of the arrow",name:"--mdc-popover-arrow-border"},{description:"primary background color of the popover",name:"--mdc-popover-primary-background-color"},{description:"border color of the popover",name:"--mdc-popover-border-color"},{description:"inverted background color of the popover",name:"--mdc-popover-inverted-background-color"},{description:"inverted border color of the popover",name:"--mdc-popover-inverted-border-color"},{description:"inverted text color of the popover",name:"--mdc-popover-inverted-text-color"},{description:"elevation of the popover",name:"--mdc-popover-elevation-3"}],slots:[{description:"Default slot for the popover content",name:""}],members:[{kind:"field",name:"id",type:{text:"string"},default:"''",description:"The unique ID of the popover.",attribute:"id",reflects:!0},{kind:"field",name:"triggerID",type:{text:"string"},default:"''",description:`The ID of the element that triggers the popover.
This attribute is required for the popover to work.`,attribute:"triggerID",reflects:!0},{kind:"field",name:"trigger",type:{text:"PopoverTrigger"},description:`Determines the events that cause the Popover to show.
Multiple event names should be separated by spaces.
For example to allow both click and hover, use 'click mouseenter' as the trigger.
- **click**
- **mouseenter**
- **focusin**
- **manual**`,default:"click",attribute:"trigger",reflects:!0},{kind:"field",name:"placement",type:{text:"PopoverPlacement"},description:`The placement of the popover.
- **top**
- **top-start**
- **top-end**
- **bottom**
- **bottom-start**
- **bottom-end**
- **left**
- **left-start**
- **left-end**
- **right**
- **right-start**
- **right-end**`,default:"bottom",attribute:"placement",reflects:!0},{kind:"field",name:"color",type:{text:"PopoverColor"},description:`Color of the popover
- **tonal**
- **contrast**`,default:"tonal",attribute:"color",reflects:!0},{kind:"field",name:"visible",type:{text:"boolean"},description:"The visibility of the popover.",default:"false",attribute:"visible",reflects:!0},{kind:"field",name:"offset",type:{text:"number"},description:"The offset of the popover.",default:"4",attribute:"offset",reflects:!0},{kind:"field",name:"focusTrap",type:{text:"boolean"},description:`Determines whether the focus trap is enabled.
If true, focus will be restricted to the content within this component.`,default:"false",attribute:"focus-trap",reflects:!0},{kind:"field",name:"preventScroll",type:{text:"boolean"},description:"Prevent outside scrolling when popover show.",default:"false",attribute:"prevent-scroll",reflects:!0},{kind:"field",name:"showArrow",type:{text:"boolean"},description:"The arrow visibility of the popover.",default:"false",attribute:"show-arrow",reflects:!0},{kind:"field",name:"closeButton",type:{text:"boolean"},description:"The close button visibility of the popover.",default:"false",attribute:"close-button",reflects:!0},{kind:"field",name:"interactive",type:{text:"boolean"},description:"Determines whether the popover is interactive。",default:"false",attribute:"interactive",reflects:!0},{kind:"field",name:"delay",type:{text:"string"},description:"The delay of the show/hide popover.",default:"0,0",attribute:"delay",reflects:!0},{kind:"field",name:"hideOnEscape",type:{text:"boolean"},description:"Hide popover on escape key press.",default:"false",attribute:"hide-on-escape",reflects:!0},{kind:"field",name:"hideOnBlur",type:{text:"boolean"},description:"Hide popover on blur.",default:"false",attribute:"hide-on-blur",reflects:!0},{kind:"field",name:"hideOnOutsideClick",type:{text:"boolean"},description:"Hide on outside click of the popover.",default:"false",attribute:"hide-on-outside-click",reflects:!0},{kind:"field",name:"focusBackToTrigger",type:{text:"boolean"},description:"The focus back to trigger after the popover hide.",default:"false",attribute:"focus-back-to-trigger",reflects:!0},{kind:"field",name:"backdrop",type:{text:"boolean"},description:`Determines whether the popover with backdrop.
Other than popover and trigger element, the rest of the screen will be covered with a backdrop.`,default:"false",attribute:"backdrop",reflects:!0},{kind:"field",name:"flip",type:{text:"boolean"},description:"Changes the placement of popover to keep it in view when scrolling.",default:"true",attribute:"flip",reflects:!0},{kind:"field",name:"size",type:{text:"boolean"},description:"Changes the size of popover to keep it in view when scrolling.",default:"false",attribute:"size",reflects:!0},{kind:"field",name:"zIndex",type:{text:"number"},description:"The z-index of the popover.",default:"1000",attribute:"z-index",reflects:!0},{kind:"field",name:"appendTo",type:{text:"string"},default:"''",description:"Element ID that the popover append to.",attribute:"append-to",reflects:!0},{kind:"field",name:"closeButtonAriaLabel",type:{text:"string | null"},default:"null",description:"aria-label attribute to be set for close button accessibility.",attribute:"close-button-aria-label"},{kind:"field",name:"role",type:{text:"HTMLElement['role']"},description:"Role of the popover",default:"dialog",attribute:"role",reflects:!0},{kind:"field",name:"ariaLabelledby",type:{text:"string | null"},default:"null",description:`aria-labelledby for an interactive popover only, defaults to the trigger component id.
Used in nested cases where the triggerComponent isn't the actual button.`,attribute:"aria-labelledby",reflects:!0},{kind:"field",name:"ariaDescribedby",type:{text:"string | null"},default:"null",description:"aria-describedby of the popover.",attribute:"aria-describedby",reflects:!0},{kind:"field",name:"disableAriaExpanded",type:{text:"boolean"},description:"Disable aria-expanded attribute on trigger element.",default:"false",attribute:"disable-aria-expanded",reflects:!0},{kind:"field",name:"arrowElement",type:{text:"HTMLElement | null"},privacy:"public",default:"null"},{kind:"field",name:"triggerElement",type:{text:"HTMLElement | null"},privacy:"public",default:"null"},{kind:"method",name:"setupTriggerListener",privacy:"private",description:"Sets up the trigger event listeners based on the trigger type."},{kind:"method",name:"removeEventListeners",privacy:"private",description:"Removes the trigger event listeners."},{kind:"field",name:"onOutsidePopoverClick",privacy:"private",description:"Handles the outside click event to close the popover.",parameters:[{description:"The mouse event.",name:"event"}]},{kind:"field",name:"onEscapeKeydown",privacy:"private",description:"Handles the escape keydown event to close the popover.",parameters:[{description:"The keyboard event.",name:"event"}]},{kind:"field",name:"onPopoverFocusOut",privacy:"private",description:"Handles the popover focus out event.",parameters:[{description:"The focus event.",name:"event"}]},{kind:"method",name:"isOpenUpdated",privacy:"private",parameters:[{name:"oldValue",type:{text:"boolean"},description:"The old value of the visible property."},{name:"newValue",type:{text:"boolean"},description:"The new value of the visible property."}],description:`Handles the popover visibility change and position the popover.
Handles the exit event to close the popover.`},{kind:"field",name:"startCloseDelay",privacy:"private",description:`Starts the close delay timer.
If the popover is not interactive, it will close the popover after the delay.`},{kind:"field",name:"cancelCloseDelay",privacy:"private",description:"Cancels the close delay timer."},{kind:"field",name:"showPopover",privacy:"public",description:"Shows the popover."},{kind:"field",name:"hidePopover",privacy:"public",description:"Hides the popover."},{kind:"field",name:"togglePopoverVisible",privacy:"public",description:"Toggles the popover visibility."},{kind:"method",name:"handleCreatePopoverFirstUpdate",privacy:"private",description:"Sets the focusable elements inside the popover."},{kind:"method",name:"positionPopover",privacy:"private",description:`Positions the popover based on the trigger element.
It also handles the flip, size and arrow placement.
It uses the floating-ui/dom library to calculate the position.`},{kind:"field",name:"utils",default:"new PopoverUtils(this)"},{kind:"field",name:"enabledFocusTrap",type:{text:"boolean"},description:`Determines whether the focus trap is enabled.
If true, focus will be restricted to the content within this component.`,default:"false",attribute:"enabledFocusTrap",inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"field",name:"enabledPreventScroll",type:{text:"boolean"},description:"Prevent outside scrolling when popover show.",default:"false",attribute:"enabledPreventScroll",inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"field",name:"shouldWrapFocus",type:{text:"() => boolean"},inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"deactivateFocusTrap",description:"Deactivate the focus trap.",inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"hasNoClientRects",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Checks if the element has no client rectangles (not visible in the viewport).",return:{type:{text:""}},inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"hasZeroDimensions",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Checks if the element has zero dimensions (width and height are both 0).",return:{type:{text:""}},inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"isNotVisible",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Determines if the element is not visible in the DOM.",return:{type:{text:""}},inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"hasHiddenStyle",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Checks if the element has inline styles that make it hidden.",return:{type:{text:""}},inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"hasComputedHidden",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Checks if the element is hidden by a computed style.",return:{type:{text:""}},inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"isHidden",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Checks if the element is hidden from the user.",return:{type:{text:""}},inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"isNotTabbable",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Checks if the element is not tabbable.",return:{type:{text:""}},inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"isInteractiveElement",privacy:"private",return:{type:{text:""}},parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Checks if the element is interactive.",inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"isFocusable",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Checks if the element is focusable.",return:{type:{text:""}},inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"findFocusable",privacy:"private",return:{type:{text:""}},parameters:[{name:"root",type:{text:"ShadowRoot | HTMLElement"},description:"The root element to search for focusable elements."},{name:"matches",default:"new Set()",type:{text:"Set<HTMLElement>"},description:"The set of focusable elements."}],description:"Recursively finds all focusable elements within the given root and its descendants.",inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"setFocusableElements",privacy:"public",description:"Updates the list of focusable elements within the component's shadow root.",inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"setInitialFocus",privacy:"public",parameters:[{name:"prefferableElement",default:"0",type:{text:"number"},description:"The index of the prefferable element to focus."}],description:"Sets the initial focus within the container.",inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"calculateNextIndex",privacy:"private",parameters:[{name:"currentIndex",type:{text:"number"},description:"The current index."},{name:"step",type:{text:"number"},description:"The step to calculate the next index."}],description:"Calculates the next index for the focus trap.",return:{type:{text:""}},inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"getDeepActiveElement",privacy:"private",description:"Returns the deepest active element in the shadow DOM.",return:{type:{text:""}},inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"findElement",privacy:"private",parameters:[{name:"activeElement",type:{text:"HTMLElement"},description:"The active element."}],description:"Finds the index of the active element within the focusable elements.",return:{type:{text:""}},inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"isEqualFocusNode",privacy:"private",parameters:[{name:"activeElement",type:{text:"HTMLElement"},description:"The active element."},{name:"element",type:{text:"HTMLElement"},description:"The element to compare."}],description:"Checks if the active element is equal to the given element.",return:{type:{text:""}},inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"trapFocus",privacy:"private",parameters:[{name:"direction",type:{text:"boolean"},description:`The direction of the focus trap.
If true, the focus will be trapped in the previous element.`}],description:"Traps focus within the container.",inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}},{kind:"method",name:"handleKeydown",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"},description:"The keyboard event."}],description:"Traps focus within the container.",inheritedFrom:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}}],attributes:[{name:"id",type:{text:"string"},default:"''",description:"The unique ID of the popover.",fieldName:"id"},{name:"triggerID",type:{text:"string"},default:"''",description:`The ID of the element that triggers the popover.
This attribute is required for the popover to work.`,fieldName:"triggerID"},{name:"trigger",type:{text:"PopoverTrigger"},description:`Determines the events that cause the Popover to show.
Multiple event names should be separated by spaces.
For example to allow both click and hover, use 'click mouseenter' as the trigger.
- **click**
- **mouseenter**
- **focusin**
- **manual**`,default:"click",fieldName:"trigger"},{name:"placement",type:{text:"PopoverPlacement"},description:`The placement of the popover.
- **top**
- **top-start**
- **top-end**
- **bottom**
- **bottom-start**
- **bottom-end**
- **left**
- **left-start**
- **left-end**
- **right**
- **right-start**
- **right-end**`,default:"bottom",fieldName:"placement"},{name:"color",type:{text:"PopoverColor"},description:`Color of the popover
- **tonal**
- **contrast**`,default:"tonal",fieldName:"color"},{name:"visible",type:{text:"boolean"},description:"The visibility of the popover.",default:"false",fieldName:"visible"},{name:"offset",type:{text:"number"},description:"The offset of the popover.",default:"4",fieldName:"offset"},{name:"focus-trap",type:{text:"boolean"},description:`Determines whether the focus trap is enabled.
If true, focus will be restricted to the content within this component.`,default:"false",fieldName:"focusTrap"},{name:"prevent-scroll",type:{text:"boolean"},description:"Prevent outside scrolling when popover show.",default:"false",fieldName:"preventScroll"},{name:"show-arrow",type:{text:"boolean"},description:"The arrow visibility of the popover.",default:"false",fieldName:"showArrow"},{name:"close-button",type:{text:"boolean"},description:"The close button visibility of the popover.",default:"false",fieldName:"closeButton"},{name:"interactive",type:{text:"boolean"},description:"Determines whether the popover is interactive。",default:"false",fieldName:"interactive"},{name:"delay",type:{text:"string"},description:"The delay of the show/hide popover.",default:"0,0",fieldName:"delay"},{name:"hide-on-escape",type:{text:"boolean"},description:"Hide popover on escape key press.",default:"false",fieldName:"hideOnEscape"},{name:"hide-on-blur",type:{text:"boolean"},description:"Hide popover on blur.",default:"false",fieldName:"hideOnBlur"},{name:"hide-on-outside-click",type:{text:"boolean"},description:"Hide on outside click of the popover.",default:"false",fieldName:"hideOnOutsideClick"},{name:"focus-back-to-trigger",type:{text:"boolean"},description:"The focus back to trigger after the popover hide.",default:"false",fieldName:"focusBackToTrigger"},{name:"backdrop",type:{text:"boolean"},description:`Determines whether the popover with backdrop.
Other than popover and trigger element, the rest of the screen will be covered with a backdrop.`,default:"false",fieldName:"backdrop"},{name:"flip",type:{text:"boolean"},description:"Changes the placement of popover to keep it in view when scrolling.",default:"true",fieldName:"flip"},{name:"size",type:{text:"boolean"},description:"Changes the size of popover to keep it in view when scrolling.",default:"false",fieldName:"size"},{name:"z-index",type:{text:"number"},description:"The z-index of the popover.",default:"1000",fieldName:"zIndex"},{name:"append-to",type:{text:"string"},default:"''",description:"Element ID that the popover append to.",fieldName:"appendTo"},{name:"close-button-aria-label",type:{text:"string | null"},default:"null",description:"aria-label attribute to be set for close button accessibility.",fieldName:"closeButtonAriaLabel"},{name:"role",type:{text:"HTMLElement['role']"},description:"Role of the popover",default:"dialog",fieldName:"role"},{name:"aria-labelledby",type:{text:"string | null"},default:"null",description:`aria-labelledby for an interactive popover only, defaults to the trigger component id.
Used in nested cases where the triggerComponent isn't the actual button.`,fieldName:"ariaLabelledby"},{name:"aria-describedby",type:{text:"string | null"},default:"null",description:"aria-describedby of the popover.",fieldName:"ariaDescribedby"},{name:"disable-aria-expanded",type:{text:"boolean"},description:"Disable aria-expanded attribute on trigger element.",default:"false",fieldName:"disableAriaExpanded"},{name:"enabledFocusTrap",type:{text:"boolean"},description:`Determines whether the focus trap is enabled.
If true, focus will be restricted to the content within this component.`,default:"false",fieldName:"enabledFocusTrap",inheritedFrom:{name:"FocusTrapMixin",module:"src/utils/mixins/FocusTrapMixin.ts"}},{name:"enabledPreventScroll",type:{text:"boolean"},description:"Prevent outside scrolling when popover show.",default:"false",fieldName:"enabledPreventScroll",inheritedFrom:{name:"FocusTrapMixin",module:"src/utils/mixins/FocusTrapMixin.ts"}}],mixins:[{name:"FocusTrapMixin",module:"/src/utils/mixins/FocusTrapMixin"}],superclass:{name:"Component",module:"/src/models"},tagName:"mdc-popover",jsDoc:`/**
 * Popover component is a lightweight floating UI element that displays additional content when triggered.
 * It can be used for tooltips, dropdowns, or contextual menus.
 * The popover automatically positions itself based on available space and
 * supports dynamic height adjustments with scrollable content when needed。
 *
 * @dependency mdc-button
 *
 * @tagname mdc-popover
 *
 * @cssproperty --mdc-popover-arrow-border-radius - radius of the arrow border
 * @cssproperty --mdc-popover-arrow-border - border of the arrow
 * @cssproperty --mdc-popover-primary-background-color - primary background color of the popover
 * @cssproperty --mdc-popover-border-color - border color of the popover
 * @cssproperty --mdc-popover-inverted-background-color - inverted background color of the popover
 * @cssproperty --mdc-popover-inverted-border-color - inverted border color of the popover
 * @cssproperty --mdc-popover-inverted-text-color - inverted text color of the popover
 * @cssproperty --mdc-popover-elevation-3 - elevation of the popover
 *
 * @slot - Default slot for the popover content
 *
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"Popover",module:"components/popover/popover.component.js"}}]},{kind:"javascript-module",path:"components/presence/presence.component.js",declarations:[{kind:"class",description:`The \`mdc-presence\` component is a versatile UI element used to
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
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"Presence",module:"components/presence/presence.component.js"}}]},{kind:"javascript-module",path:"components/radio/radio.component.js",declarations:[{kind:"class",description:`Radio allow users to select single options from a list or turn an item/feature on or off.
These are often used in forms, settings, and selection in lists.

A radio component contains an optional label, optional info icon and an optional helper text.`,name:"Radio",cssProperties:[{description:"size of the inner circle",name:"--mdc-radio-inner-circle-size"},{description:"color of the label when disabled",name:"--mdc-radio-text-disabled-color"},{description:"color of the radio button border when disabled",name:"--mdc-radio-disabled-border-color"},{description:"color of the radio button border when normal",name:"--mdc-radio-normal-border-color"},{description:"background color of the inner circle when normal",name:"--mdc-radio-inner-circle-normal-background"},{description:"background color of the inner circle when disabled",name:"--mdc-radio-inner-circle-disabled-background"},{description:"color of the radio button when inactive",name:"--mdc-radio-control-inactive-color"},{description:"color of the radio button when inactive and hovered",name:"--mdc-radio-control-inactive-hover"},{description:"color of the radio button when inactive and pressed",name:"--mdc-radio-control-inactive-pressed-color"},{description:"background color of the radio button when inactive and disabled",name:"--mdc-radio-control-inactive-disabled-background"},{description:"color of the radio button when active",name:"--mdc-radio-control-active-color"},{description:"color of the radio button when active and hovered",name:"--mdc-radio-control-active-hover-color"},{description:"color of the radio button when active and pressed",name:"--mdc-radio-control-active-pressed-color"},{description:"background color of the radio button when active and disabled",name:"--mdc-radio-control-active-disabled-background"}],members:[{kind:"field",name:"checked",type:{text:"boolean"},default:"false",description:"Determines whether the radio is selected or unselected.",attribute:"checked",reflects:!0},{kind:"field",name:"readonly",type:{text:"boolean"},default:"false",description:"Determines whether the radio is read-only.",attribute:"readonly",reflects:!0},{kind:"field",name:"autofocus",type:{text:"boolean"},default:"false",description:`Automatically focus on the element when the page loads.
[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus)`,attribute:"autofocus",reflects:!0},{kind:"method",name:"getAllRadiosWithinSameGroup",privacy:"private",return:{type:{text:"Radio[]"}},description:"Returns all radios within the same group (name)."},{kind:"method",name:"dispatchChangeEvent",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"Event"}}],description:`The 'change' event does not bubble up through the shadow DOM as it was not composed.
Therefore, we need to re-dispatch the same event to ensure it is propagated correctly.
Read more: https://developer.mozilla.org/en-US/docs/Web/API/Event/composed`},{kind:"method",name:"setGroupValidity",privacy:"private",parameters:[{name:"radios",type:{text:"Radio[]"},description:"Array of radios of the same group"},{name:"isValid",type:{text:"boolean"},description:"Boolean value to set the validity of the group"}],description:"Sets the validity of the group of radios."},{kind:"method",name:"setActualFormValue",privacy:"private",description:`Updates the form value to reflect the current state of the radio.
If checked, the value is set to the user-provided value.
If unchecked, the value is set to null.`},{kind:"method",name:"handleChange",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"Event"}}],description:`Handles the change event on the radio element.
This will toggle the state of the radio element.
Dispatches the change event.`},{kind:"method",name:"updateRadio",privacy:"private",parameters:[{name:"enabledRadios",type:{text:"Radio[]"},description:"An array of enabled radio buttons within the same group."},{name:"index",type:{text:"number"},description:"The index of the radio button to be updated within the enabled radios array."},{name:"event",type:{text:"Event"},description:"The event that triggered the update."}],description:`Updates the state of the radio button at the specified index within the enabled radios.
Focuses the radio button and triggers the change event if the radio button is not read-only.`},{kind:"method",name:"handleKeyDown",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"KeyboardEvent"}}],description:"Handles the keydown event (Arrow Up/Down/Left/Right) on the radio element."},{kind:"method",name:"updateTabIndex",privacy:"private",return:{type:{text:"void"}},description:`Update tab index for all radios in the same group (name)
If any radio group is checked, it will have a tab index of 0
If no radio group is checked, the first enabled radio will have a tab index of 0`},{kind:"field",name:"renderLabelAndHelperText",privacy:"private"},{kind:"field",name:"helpTextType",type:{text:"ValidationType"},description:"The type of help text. It can be 'default', 'error', 'warning', 'success', 'priority'.",attribute:"help-text-type",reflects:!0,default:"undefined as unknown",inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"name",type:{text:"string"},default:"''",description:`Indicates the name of the component group.
They are used to group elements in a form together.`,attribute:"name",reflects:!0,inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"field",name:"value",type:{text:"string"},default:"''",description:"Indicates the value of the component group (ex: input, checkbox, radio, select etc...)",attribute:"value",reflects:!0,inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"field",name:"validationMessage",type:{text:"string | undefined"},description:"Custom validation message that will override the default message and displayed when the input is invalid.",attribute:"validation-message",reflects:!0,inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"field",name:"validity",type:{text:"ValidityState"},readonly:!0,inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"field",name:"willValidate",readonly:!0,inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"method",name:"setValidity",description:"Sets the validity of the input field based on the input field's validity.",return:{type:{text:""}},inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"method",name:"checkValidity",return:{type:{text:"boolean"}},inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"method",name:"reportValidity",inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"field",name:"id",type:{text:"string"},default:"`mdc-input-${uuidv4()}`",description:"The unique id of the input field. It is used to link the input field with the label.",attribute:"id",inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"dataAriaLabel",type:{text:"string | null"},default:"null",description:`Defines a string value that labels the current element.
The Aria-Label attribute to be set for accessibility.`,attribute:"data-aria-label",reflects:!0,inheritedFrom:{name:"DataAriaLabelMixin",module:"utils/mixins/DataAriaLabelMixin.js"}},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,attribute:"disabled",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"label",type:{text:"string | undefined"},description:"The label of the input field. It is linked to the input field using the `for` attribute.",attribute:"label",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"requiredLabel",type:{text:"string | undefined"},description:`The required label of the input field.
When an appropriate string value is set,
the input field is marked as required and the label is appended with this text.`,attribute:"required-label",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"helpText",type:{text:"string | undefined"},description:"The help text that is displayed below the input field.",attribute:"help-text",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderLabelElement",privacy:"protected",description:`creates the label element when the label property is set.
id is used to link the label with the input field.`,return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderRequiredLabel",privacy:"protected",inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderHelpTextIcon",privacy:"protected",description:`creates the helpertext icon based on the helpTextType for validation.
If the helpTextType is not set, it defaults to 'default' and it doesn't display any icon.`,return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderHelpText",privacy:"protected",description:`creates the helper text component when the helpertext value is set.
It is also used to display the validation message based on the helpTextType.`,return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderLabel",privacy:"protected",description:"renders the mdc-label-text container that contains the label and labelInfoToggleTip.",return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderHelperText",privacy:"protected",description:"renders the mdc-help-text container that contains the helpertext icon and helpertext.",return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}}],events:[{type:{text:"EventConstructor"}},{description:"(React: onChange) Event that gets dispatched when the radio state changes.",name:"change",reactName:"onChange",eventName:"ChangeEvent"},{description:"(React: onFocus) Event that gets dispatched when the radio receives focus.",name:"focus",reactName:"onFocus",eventName:"FocusEvent"}],attributes:[{name:"checked",type:{text:"boolean"},default:"false",description:"Determines whether the radio is selected or unselected.",fieldName:"checked"},{name:"readonly",type:{text:"boolean"},default:"false",description:"Determines whether the radio is read-only.",fieldName:"readonly"},{name:"autofocus",type:{text:"boolean"},default:"false",description:`Automatically focus on the element when the page loads.
[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus)`,fieldName:"autofocus"},{name:"name",type:{text:"string"},default:"''",description:`Indicates the name of the component group.
They are used to group elements in a form together.`,fieldName:"name",inheritedFrom:{name:"FormInternalsMixin",module:"src/utils/mixins/FormInternalsMixin.ts"}},{name:"value",type:{text:"string"},default:"''",description:"Indicates the value of the component group (ex: input, checkbox, radio, select etc...)",fieldName:"value",inheritedFrom:{name:"FormInternalsMixin",module:"src/utils/mixins/FormInternalsMixin.ts"}},{name:"validation-message",type:{text:"string | undefined"},description:"Custom validation message that will override the default message and displayed when the input is invalid.",fieldName:"validationMessage",inheritedFrom:{name:"FormInternalsMixin",module:"src/utils/mixins/FormInternalsMixin.ts"}},{name:"data-aria-label",type:{text:"string | null"},default:"null",description:`Defines a string value that labels the current element.
The Aria-Label attribute to be set for accessibility.`,fieldName:"dataAriaLabel",inheritedFrom:{name:"DataAriaLabelMixin",module:"src/utils/mixins/DataAriaLabelMixin.ts"}},{name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,fieldName:"disabled",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"label",type:{text:"string | undefined"},description:"The label of the input field. It is linked to the input field using the `for` attribute.",fieldName:"label",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"required-label",type:{text:"string | undefined"},description:`The required label of the input field.
When an appropriate string value is set,
the input field is marked as required and the label is appended with this text.`,fieldName:"requiredLabel",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"id",type:{text:"string"},default:"''",description:"The unique id of the input field. It is used to link the input field with the label.",fieldName:"id",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"help-text-type",type:{text:"ValidationType"},description:"The type of help text. It can be 'default', 'error', 'warning', 'success', 'priority'.",fieldName:"helpTextType",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"help-text",type:{text:"string | undefined"},description:"The help text that is displayed below the input field.",fieldName:"helpText",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}}],mixins:[{name:"FormInternalsMixin",module:"/src/utils/mixins/FormInternalsMixin"},{name:"DataAriaLabelMixin",module:"/src/utils/mixins/DataAriaLabelMixin"}],superclass:{name:"FormfieldWrapper",module:"/src/components/formfieldwrapper/formfieldwrapper.component"},tagName:"mdc-radio",jsDoc:`/**
 * Radio allow users to select single options from a list or turn an item/feature on or off.
 * These are often used in forms, settings, and selection in lists.
 *
 * A radio component contains an optional label, optional info icon and an optional helper text.
 * @dependency mdc-formfieldwrapper
 *
 * @tagname mdc-radio
 *
 * @event change - (React: onChange) Event that gets dispatched when the radio state changes.
 * @event focus - (React: onFocus) Event that gets dispatched when the radio receives focus.
 *
 * @cssproperty --mdc-radio-inner-circle-size - size of the inner circle
 * @cssproperty --mdc-radio-text-disabled-color - color of the label when disabled
 * @cssproperty --mdc-radio-disabled-border-color - color of the radio button border when disabled
 * @cssproperty --mdc-radio-normal-border-color - color of the radio button border when normal
 * @cssproperty --mdc-radio-inner-circle-normal-background - background color of the inner circle when normal
 * @cssproperty --mdc-radio-inner-circle-disabled-background - background color of the inner circle when disabled
 * @cssproperty --mdc-radio-control-inactive-color - color of the radio button when inactive
 * @cssproperty --mdc-radio-control-inactive-hover - color of the radio button when inactive and hovered
 * @cssproperty --mdc-radio-control-inactive-pressed-color - color of the radio button when inactive and pressed
 * @cssproperty --mdc-radio-control-inactive-disabled-background - background color of the radio button when
 *  inactive and disabled
 * @cssproperty --mdc-radio-control-active-color - color of the radio button when active
 * @cssproperty --mdc-radio-control-active-hover-color - color of the radio button when active and hovered
 * @cssproperty --mdc-radio-control-active-pressed-color - color of the radio button when active and pressed
 * @cssproperty --mdc-radio-control-active-disabled-background - background color of the radio button
 *  when active and disabled
 *
 */`,customElement:!0,slots:[{description:"slot to add the label info icon",name:"label-info",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}}]}],exports:[{kind:"js",name:"default",declaration:{name:"Radio",module:"components/radio/radio.component.js"}}]},{kind:"javascript-module",path:"components/radiogroup/radiogroup.component.js",declarations:[{kind:"class",description:"`mdc-radiogroup` - This is the wrapper component for radio buttons which are grouped together.\nIt can have a header text and a description. It enables users to select a single option from a set of options.\nIt is often used in forms, settings, and selection in lists. It automatically group the radio buttons inside it.",name:"RadioGroup",cssProperties:[{description:"color of the description text",name:"--mdc-radiogroup-description-text-normal"}],members:[{kind:"field",name:"name",type:{text:"string"},default:"''",description:`Name of the radio group.
They are used to group elements in a form together.`,attribute:"name"},{kind:"field",name:"dataAriaLabel",type:{text:"string | null"},default:"null",description:`Defines a string value that labels the current element.
The Aria-Label attribute to be set for accessibility.`,attribute:"data-aria-label",reflects:!0,inheritedFrom:{name:"DataAriaLabelMixin",module:"utils/mixins/DataAriaLabelMixin.js"}},{kind:"field",name:"id",type:{text:"string"},default:"''",description:"The unique id of the input field. It is used to link the input field with the label.",attribute:"id",inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"helpTextType",type:{text:"ValidationType"},description:"The type of help text. It can be 'default', 'error', 'warning', 'success', 'priority'.",attribute:"help-text-type",reflects:!0,default:"undefined as unknown",inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"disabled",type:{text:"boolean"},default:"undefined as unknown",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,attribute:"disabled",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"label",type:{text:"string | undefined"},description:"The label of the input field. It is linked to the input field using the `for` attribute.",attribute:"label",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"requiredLabel",type:{text:"string | undefined"},description:`The required label of the input field.
When an appropriate string value is set,
the input field is marked as required and the label is appended with this text.`,attribute:"required-label",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"helpText",type:{text:"string | undefined"},description:"The help text that is displayed below the input field.",attribute:"help-text",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderLabelElement",privacy:"protected",description:`creates the label element when the label property is set.
id is used to link the label with the input field.`,return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderRequiredLabel",privacy:"protected",inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderHelpTextIcon",privacy:"protected",description:`creates the helpertext icon based on the helpTextType for validation.
If the helpTextType is not set, it defaults to 'default' and it doesn't display any icon.`,return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderHelpText",privacy:"protected",description:`creates the helper text component when the helpertext value is set.
It is also used to display the validation message based on the helpTextType.`,return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderLabel",privacy:"protected",description:"renders the mdc-label-text container that contains the label and labelInfoToggleTip.",return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderHelperText",privacy:"protected",description:"renders the mdc-help-text container that contains the helpertext icon and helpertext.",return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}}],attributes:[{name:"name",type:{text:"string"},default:"''",description:`Name of the radio group.
They are used to group elements in a form together.`,fieldName:"name"},{name:"data-aria-label",type:{text:"string | null"},default:"null",description:`Defines a string value that labels the current element.
The Aria-Label attribute to be set for accessibility.`,fieldName:"dataAriaLabel",inheritedFrom:{name:"DataAriaLabelMixin",module:"src/utils/mixins/DataAriaLabelMixin.ts"}},{name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,fieldName:"disabled",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"label",type:{text:"string | undefined"},description:"The label of the input field. It is linked to the input field using the `for` attribute.",fieldName:"label",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"required-label",type:{text:"string | undefined"},description:`The required label of the input field.
When an appropriate string value is set,
the input field is marked as required and the label is appended with this text.`,fieldName:"requiredLabel",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"id",type:{text:"string"},default:"''",description:"The unique id of the input field. It is used to link the input field with the label.",fieldName:"id",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"help-text-type",type:{text:"ValidationType"},description:"The type of help text. It can be 'default', 'error', 'warning', 'success', 'priority'.",fieldName:"helpTextType",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"help-text",type:{text:"string | undefined"},description:"The help text that is displayed below the input field.",fieldName:"helpText",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}}],superclass:{name:"FormfieldGroup",module:"/src/components/formfieldgroup"},tagName:"mdc-radiogroup",jsDoc:`/**
 * \`mdc-radiogroup\` - This is the wrapper component for radio buttons which are grouped together.
 * It can have a header text and a description. It enables users to select a single option from a set of options.
 * It is often used in forms, settings, and selection in lists. It automatically group the radio buttons inside it.
 *
 * @tagname mdc-radiogroup
 *
 * @cssproperty --mdc-radiogroup-description-text-normal - color of the description text
 *
 */`,customElement:!0,slots:[{description:"This is a default slot for checkbox or toggle components.",name:"default",inheritedFrom:{name:"FormfieldGroup",module:"src/components/formfieldgroup/formfieldgroup.component.ts"}},{description:"slot to add the label info icon",name:"label-info",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}}]}],exports:[{kind:"js",name:"default",declaration:{name:"RadioGroup",module:"components/radiogroup/radiogroup.component.js"}}]},{kind:"javascript-module",path:"components/spinner/spinner.component.js",declarations:[{kind:"class",description:`\`mdc-spinner\` is loading spinner which is an indeterminate progress indicator, meaning
it's best for cases where the  progress or duration of a process is variable or unknown.

Spinner Variants:
- **Standalone (Default)**: Track has a blue color.
- **Button**: To be used when placed in a button to show that the button’s action is currently in progress.
To ensure a minimum 3:1 contrast ratio, the color is changed internally to be the same color as the button’s
icon or label text.

Spinner Sizes:
- **Large (96px)**: Use when replacing entire regions or pages that are still loading
- **MidSize (48px) (Default)**: Use for most use cases.
- **Small (24px)**: Use for inline with loading text.

Customisation of the spinner size is allowed by setting the size to undefined and using the --mdc-spinner-size
CSS property.

Spinner Colors:
- **Default**: Use for most use cases.
- **Inverted**: Only to be used within inverted components, such as coachmarks.

Regarding accessibility, if an aria-label is provided, the role will be set to 'img'; if it is absent, the role
will be unset
and aria-hidden will be set to 'true' so the spinner will be ignored by screen readers.`,name:"Spinner",cssProperties:[{description:"Allows customization of the default spinner color.",name:"--mdc-spinner-default-color"},{description:"Allows customization of the inverted spinner color.",name:"--mdc-spinner-inverted-color"},{description:"Allows customization of the spinner Button variant color.",name:"--mdc-spinner-button-variant-color"},{description:"Allows customization of the spinner size.",name:"--mdc-spinner-size"}],cssParts:[{description:"The svg which contains the circle spinner.",name:"container"},{description:"The circle of the spinner.",name:"circle"}],members:[{kind:"field",name:"inverted",description:"The spinner color can be inverted by setting the inverted attribute to true.",default:"false",attribute:"inverted",reflects:!0},{kind:"field",name:"size",type:{text:"SpinnerSize | undefined"},description:`Size of the spinner.
Acceptable values include:

- 'small'
- 'midsize'
- 'large'
- 'undefined'`,default:"midsize",attribute:"size",reflects:!0},{kind:"field",name:"ariaLabel",type:{text:"string | null"},default:"null",description:"Aria-label attribute to be set for accessibility",attribute:"aria-label"},{kind:"field",name:"variant",type:{text:"SpinnerVariant"},description:`There are 2 variants of spinner: default and button. Their coloring is different.
- **Standalone (Default)**: Track has a blue color.
- **Button**: To be used when placed in a button to show that the button’s action is currently in progress.
To ensure a minimum 3:1 contrast ratio, change the active indicator color to be the same color as the button’s
icon or label text.`,default:"standalone",attribute:"variant",reflects:!0}],attributes:[{name:"inverted",description:"The spinner color can be inverted by setting the inverted attribute to true.",default:"false",fieldName:"inverted"},{name:"size",type:{text:"SpinnerSize | undefined"},description:`Size of the spinner.
Acceptable values include:

- 'small'
- 'midsize'
- 'large'
- 'undefined'`,default:"midsize",fieldName:"size"},{name:"aria-label",type:{text:"string | null"},default:"null",description:"Aria-label attribute to be set for accessibility",fieldName:"ariaLabel"},{name:"variant",type:{text:"SpinnerVariant"},description:`There are 2 variants of spinner: default and button. Their coloring is different.
- **Standalone (Default)**: Track has a blue color.
- **Button**: To be used when placed in a button to show that the button’s action is currently in progress.
To ensure a minimum 3:1 contrast ratio, change the active indicator color to be the same color as the button’s
icon or label text.`,default:"standalone",fieldName:"variant"}],superclass:{name:"Component",module:"/src/models"},tagName:"mdc-spinner",jsDoc:`/**
 * \`mdc-spinner\` is loading spinner which is an indeterminate progress indicator, meaning
 * it's best for cases where the  progress or duration of a process is variable or unknown.
 *
 * Spinner Variants:
 * - **Standalone (Default)**: Track has a blue color.
 * - **Button**: To be used when placed in a button to show that the button’s action is currently in progress.
 * To ensure a minimum 3:1 contrast ratio, the color is changed internally to be the same color as the button’s
 * icon or label text.
 *
 * Spinner Sizes:
 * - **Large (96px)**: Use when replacing entire regions or pages that are still loading
 * - **MidSize (48px) (Default)**: Use for most use cases.
 * - **Small (24px)**: Use for inline with loading text.
 *
 * Customisation of the spinner size is allowed by setting the size to undefined and using the --mdc-spinner-size
 * CSS property.
 *
 * Spinner Colors:
 * - **Default**: Use for most use cases.
 * - **Inverted**: Only to be used within inverted components, such as coachmarks.
 *
 * Regarding accessibility, if an aria-label is provided, the role will be set to 'img'; if it is absent, the role
 * will be unset
 * and aria-hidden will be set to 'true' so the spinner will be ignored by screen readers.
 *
 * @tagname mdc-spinner
 *
 * @cssproperty --mdc-spinner-default-color - Allows customization of the default spinner color.
 * @cssproperty --mdc-spinner-inverted-color - Allows customization of the inverted spinner color.
 * @cssproperty --mdc-spinner-button-variant-color - Allows customization of the spinner Button variant color.
 * @cssproperty --mdc-spinner-size - Allows customization of the spinner size.
 *
 * @csspart container - The svg which contains the circle spinner.
 * @csspart circle - The circle of the spinner.
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"Spinner",module:"components/spinner/spinner.component.js"}}]},{kind:"javascript-module",path:"components/tab/tab.component.js",declarations:[{kind:"class",description:'`mdc-tab` is Tab component to be used within the Tabgroup.\n\nPassing in the attribute `text` to the tab component is changing the text displayed in the tab.\n\nThe `slot="badge"` can be used to add a badge to the tab.\n\nThe `slot="chip"` can be used to add a chip to the tab.\n\nFor `icon`, the `mdc-icon` component is used to render the icon.\n\nNote: Icons can be used in conjunction with badges or chips.\nBadges and chips should not be used at the same time.',name:"Tab",cssProperties:[{description:"Gap between the badge(if provided), icon and text.",name:"--mdc-tab-content-gap"},{description:"Height of the tab.",name:"--mdc-tab-height"},{description:"Background color for active glass tab in disabled state.",name:"--mdc-tab-glass-active-background-color-disabled"},{description:"Background color for active glass tab in hover state.",name:"--mdc-tab-glass-active-background-color-hover"},{description:"Background color for active glass tab in rest state.",name:"--mdc-tab-glass-active-background-color-normal"},{description:"Background color for active glass tab in pressed state.",name:"--mdc-tab-glass-active-background-color-pressed"},{description:"Text and icon color for active glass tab.",name:"--mdc-tab-glass-active-color"},{description:"Text and icon color for active glass tab in disabled state.",name:"--mdc-tab-glass-active-color-disabled"},{description:"Border radius for glass tab.",name:"--mdc-tab-glass-border-radius"},{description:"Background color for inactive glass tab in disabled state.",name:"--mdc-tab-glass-inactive-background-color-disabled"},{description:"Background color for inactive glass tab in hover state.",name:"--mdc-tab-glass-inactive-background-color-hover"},{description:"Background color for inactive glass tab in rest state.",name:"--mdc-tab-glass-inactive-background-color-normal"},{description:"Background color for inactive glass tab in pressed state.",name:"--mdc-tab-glass-inactive-background-color-pressed"},{description:"Text and icon color for inactive glass tab.",name:"--mdc-tab-glass-inactive-color"},{description:"Text and icon color for inactive glass tab in disabled state.",name:"--mdc-tab-glass-inactive-color-disabled"},{description:"Background color for active line tab in pressed state.",name:"--mdc-tab-line-active-background-color-pressed"},{description:"Background color for active line tab in disabled state.",name:"--mdc-tab-line-active-background-color-disabled"},{description:"Background color for active line tab in hover state.",name:"--mdc-tab-line-active-background-color-hover"},{description:"Background color for active line tab in rest state.",name:"--mdc-tab-line-active-background-color-normal"},{description:"Text and icon color for active line tab.",name:"--mdc-tab-line-active-color"},{description:"Text and icon color for active line tab in disabled state.",name:"--mdc-tab-line-active-color-disabled"},{description:"color for indicator in active line tab.",name:"--mdc-tab-line-active-indicator-color"},{description:"Color for indicator in active line tab in disabled state.",name:"--mdc-tab-line-active-indicator-color-disabled"},{description:"Height for indicator in active line tab.",name:"--mdc-tab-line-active-indicator-height"},{description:"Width for indicator in active line tab.",name:"--mdc-tab-line-active-indicator-width"},{description:"Bottom left border radius for line tab.",name:"--mdc-tab-line-border-bottom-left-radius"},{description:"Bottom right border radius for line tab.",name:"--mdc-tab-line-border-bottom-right-radius"},{description:"Top left border radius for line tab.",name:"--mdc-tab-line-border-top-left-radius"},{description:"Top right border radius for line tab.",name:"--mdc-tab-line-border-top-right-radius"},{description:"Background color for inactive line tab in pressed state.",name:"--mdc-tab-line-inactive-background-color-pressed"},{description:"Background color for inactive line tab in disabled state",name:"--mdc-tab-line-inactive-background-color-disabled"},{description:"Background color for inactive line tab in hover state.",name:"--mdc-tab-line-inactive-background-color-hover"},{description:"Background color for inactive line tab in rest state.",name:"--mdc-tab-line-inactive-background-color-normal"},{description:"Text and icon color for inactive line tab.",name:"--mdc-tab-line-inactive-color"},{description:"Text and icon color for inactive line tab in disabled state.",name:"--mdc-tab-line-inactive-color-disabled"},{description:"Padding left for the tab.",name:"--mdc-tab-padding-left"},{description:"Padding right for the tab.",name:"--mdc-tab-padding-right"},{description:"Background color for active pill tab in pressed state.",name:"--mdc-tab-pill-active-background-color-pressed"},{description:"Background color for active pill tab in disabled state.",name:"--mdc-tab-pill-active-background-color-disabled"},{description:"Background color for active pill tab in hover state.",name:"--mdc-tab-pill-active-background-color-hover"},{description:"Background color for active pill tab in rest state.",name:"--mdc-tab-pill-active-background-color-normal"},{description:"Text and icon color for active pill tab.",name:"--mdc-tab-pill-active-color"},{description:"Text and icon color for active pill tab in disabled state.",name:"--mdc-tab-pill-active-color-disabled"},{description:"Border radius for pill tab.",name:"--mdc-tab-pill-border-radius"},{description:"Background color for inactive pill tab in pressed state.",name:"--mdc-tab-pill-inactive-background-color-pressed"},{description:"Background color for inactive pill tab in disabled state.",name:"--mdc-tab-pill-inactive-background-color-disabled"},{description:"Background color for inactive pill tab in hover state.",name:"--mdc-tab-pill-inactive-background-color-hover"},{description:"Background color for inactive pill tab in rest state.",name:"--mdc-tab-pill-inactive-background-color-normal"},{description:"Text and icon color for inactive pill tab.",name:"--mdc-tab-pill-inactive-color"},{description:"Text and icon color for inactive pill tab in disabled state.",name:"--mdc-tab-pill-inactive-color-disabled"}],members:[{kind:"field",name:"text",type:{text:"string | undefined"},description:"Text to be displayed in the tab.\nIf no `text` is provided, no text will be rendered,\n`aria-label` should be set on the tab.",attribute:"text",reflects:!0},{kind:"field",name:"variant",type:{text:"Variant"},description:"Tab can have three variants:\n- `glass`\n- `line`\n- `pill`\n\nIt defines the background and foreground color of the tab.",default:"pill",attribute:"variant",reflects:!0},{kind:"method",name:"modifyIconName",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"active",type:{text:"boolean"},description:"The active state."}],description:`Modifies the icon name based on the active state.
If the tab is active, the icon name is suffixed with '-filled'.
If the tab is inactive, the icon name is restored to its original value.
If '-filled' icon is not available, the icon name remains unchanged.`},{kind:"method",name:"setVariant",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"variant",type:{text:"Variant"},description:"The variant to set."}],description:`Sets the variant attribute for the tab component.
If the provided variant is not included in the TAB_VARIANTS,
it defaults to the value specified in DEFAULTS.VARIANT.`},{kind:"method",name:"setActive",privacy:"protected",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The tab element."},{name:"active",type:{text:"boolean"},description:"The active state of the tab."}],description:`Sets the aria-selected attribute based on the active state of the Tab.
If the tab is active, the filled version of the icon is displayed,
else the icon is restored to its original value.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"executeAction",privacy:"protected",inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"role",description:`This property defines the ARIA role for the element. By default, it is set to 'button'.
Consumers should override this role when:
- The element is being used in a context where a different role is more appropriate.
- Custom behaviors are implemented that require a specific ARIA role for accessibility purposes.`,default:"'tab'",attribute:"role",reflects:!0,type:{text:"string"},inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"softDisabled",type:{text:"boolean"},default:"undefined as unknown",description:`Indicates whether the button is soft disabled.
When set to \`true\`, the button appears visually disabled but still allows
focus, click, and keyboard actions to be passed through.

**Important:** When using soft disabled, consumers must ensure that
the button behaves like a disabled button, allowing only focus and
preventing any interactions (clicks or keyboard actions) from triggering unintended actions.`,attribute:"soft-disabled",inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"size",type:{text:"ButtonSize"},description:"Simplebutton size is a super set of all the sizes supported by children components.",default:"undefined as unknown",attribute:"size",reflects:!0,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"type",type:{text:"ButtonType"},description:`This property defines the type attribute for the button element.
The type attribute specifies the behavior of the button when it is clicked.
- **submit**: The button submits the form data to the server.
- **reset**: The button resets the form data to its initial state.
- **button**: The button does nothing when clicked.`,default:"undefined as unknown",attribute:"type",reflects:!0,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"iconName",type:{text:"IconNames | undefined"},description:"Name of the icon (= filename).\n\nIf no `icon-name` is provided, no icon will be rendered.",attribute:"icon-name",inheritedFrom:{name:"IconNameMixin",module:"utils/mixins/IconNameMixin.js"}},{kind:"field",name:"tabIndex",type:{text:"number"},default:"0",description:"This property specifies the tab order of the element.",attribute:"tabIndex",reflects:!0,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,attribute:"disabled",reflects:!0,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"field",name:"active",type:{text:"boolean"},default:"false",description:`The button's active state indicates whether it is currently toggled on (active) or off (inactive).
When the active state is true, the button is considered to be in an active state, meaning it is toggled on.
Conversely, when the active state is false, the button is in an inactive state, indicating it is toggled off.`,attribute:"active",reflects:!0,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"setSoftDisabled",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The button element."},{name:"softDisabled",type:{text:"boolean"},description:"The soft-disabled state."}],description:`Sets the soft-disabled attribute for the button.
When soft-disabled, the button looks to be disabled but remains focusable and clickable.
Also sets/removes aria-disabled attribute.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"setDisabled",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The button element."},{name:"disabled",type:{text:"boolean"},description:"The disabled state."}],description:`Sets the disabled attribute for the button.
When disabled, the button is not focusable or clickable, and tabindex is set to -1.
The previous tabindex is stored and restored when enabled.
Also sets/removes aria-disabled attribute.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"triggerClickEvent",privacy:"private",inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"handleBlur",privacy:"private",description:`In case the button is pressed and the focus is lost while pressing,
the pressed class is removed.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"handleKeyDown",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"},description:"The keyboard event."}],description:`Handles the keydown event on the button.
If the key is 'Enter' or 'Space', the button is pressed.
If the key is 'Enter', the button is pressed. The native HTML button works in the same way.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}},{kind:"method",name:"handleKeyUp",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"},description:"The keyboard event."}],description:`Handles the keyup event on the button.
If the key is 'Enter' or 'Space', the button is clicked.
If the key is 'Space', the button is pressed. The native HTML button works in the same way.`,inheritedFrom:{name:"Buttonsimple",module:"components/buttonsimple/buttonsimple.component.js"}}],events:[{description:"(React: onClick) This event is dispatched when the tab is clicked.",name:"click",reactName:"onClick",eventName:"ClickEvent",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{description:"(React: onKeyDown) This event is dispatched when a key is pressed down on the tab.",name:"keydown",reactName:"onKeyDown",eventName:"KeydownEvent",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{description:"(React: onKeyUp) This event is dispatched when a key is released on the tab.",name:"keyup",reactName:"onKeyUp",eventName:"KeyupEvent",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{description:"(React: onFocus) This event is dispatched when the tab receives focus.",name:"focus",reactName:"onFocus",eventName:"FocusEvent",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}}],attributes:[{name:"text",type:{text:"string | undefined"},description:"Text to be displayed in the tab.\nIf no `text` is provided, no text will be rendered,\n`aria-label` should be set on the tab.",fieldName:"text"},{name:"variant",type:{text:"Variant"},description:"Tab can have three variants:\n- `glass`\n- `line`\n- `pill`\n\nIt defines the background and foreground color of the tab.",default:"pill",fieldName:"variant"},{name:"icon-name",type:{text:"IconNames | undefined"},description:"Name of the icon (= filename).\n\nIf no `icon-name` is provided, no icon will be rendered.",fieldName:"iconName",inheritedFrom:{name:"IconNameMixin",module:"src/utils/mixins/IconNameMixin.ts"}},{name:"tabIndex",type:{text:"number"},default:"0",description:"This property specifies the tab order of the element.",fieldName:"tabIndex",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,fieldName:"disabled",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{name:"active",type:{text:"boolean"},default:"false",description:`The button's active state indicates whether it is currently toggled on (active) or off (inactive).
When the active state is true, the button is considered to be in an active state, meaning it is toggled on.
Conversely, when the active state is false, the button is in an inactive state, indicating it is toggled off.`,fieldName:"active",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{name:"soft-disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the button is soft disabled.
When set to \`true\`, the button appears visually disabled but still allows
focus, click, and keyboard actions to be passed through.

**Important:** When using soft disabled, consumers must ensure that
the button behaves like a disabled button, allowing only focus and
preventing any interactions (clicks or keyboard actions) from triggering unintended actions.`,fieldName:"softDisabled",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{name:"size",type:{text:"ButtonSize"},description:"Simplebutton size is a super set of all the sizes supported by children components.",default:"32",fieldName:"size",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{name:"role",description:`This property defines the ARIA role for the element. By default, it is set to 'button'.
Consumers should override this role when:
- The element is being used in a context where a different role is more appropriate.
- Custom behaviors are implemented that require a specific ARIA role for accessibility purposes.`,default:"button",fieldName:"role",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}},{name:"type",type:{text:"ButtonType"},description:`This property defines the type attribute for the button element.
The type attribute specifies the behavior of the button when it is clicked.
- **submit**: The button submits the form data to the server.
- **reset**: The button resets the form data to its initial state.
- **button**: The button does nothing when clicked.`,default:"button",fieldName:"type",inheritedFrom:{name:"Buttonsimple",module:"src/components/buttonsimple/buttonsimple.component.ts"}}],mixins:[{name:"IconNameMixin",module:"/src/utils/mixins/IconNameMixin"}],superclass:{name:"Buttonsimple",module:"/src/components/buttonsimple/buttonsimple.component"},tagName:"mdc-tab",jsDoc:`/**
 * \`mdc-tab\` is Tab component to be used within the Tabgroup.
 *
 * Passing in the attribute \`text\` to the tab component is changing the text displayed in the tab.
 *
 * The \`slot="badge"\` can be used to add a badge to the tab.
 *
 * The \`slot="chip"\` can be used to add a chip to the tab.
 *
 * For \`icon\`, the \`mdc-icon\` component is used to render the icon.
 *
 * Note: Icons can be used in conjunction with badges or chips.
 * Badges and chips should not be used at the same time.
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @event click - (React: onClick) This event is dispatched when the tab is clicked.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the tab.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the tab.
 * @event focus - (React: onFocus) This event is dispatched when the tab receives focus.
 *
 * @tagname mdc-tab
 *
 * @cssproperty --mdc-tab-content-gap - Gap between the badge(if provided), icon and text.
 * @cssproperty --mdc-tab-height - Height of the tab.
 * @cssproperty --mdc-tab-glass-active-background-color-disabled - Background color for active glass tab
 *  in disabled state.
 * @cssproperty --mdc-tab-glass-active-background-color-hover - Background color for active glass tab in hover state.
 * @cssproperty --mdc-tab-glass-active-background-color-normal - Background color for active glass tab in rest state.
 * @cssproperty --mdc-tab-glass-active-background-color-pressed - Background color for active glass tab
 *  in pressed state.
 * @cssproperty --mdc-tab-glass-active-color - Text and icon color for active glass tab.
 * @cssproperty --mdc-tab-glass-active-color-disabled - Text and icon color for active glass tab in disabled state.
 * @cssproperty --mdc-tab-glass-border-radius - Border radius for glass tab.
 * @cssproperty --mdc-tab-glass-inactive-background-color-disabled - Background color for inactive glass tab
 *  in disabled state.
 * @cssproperty --mdc-tab-glass-inactive-background-color-hover - Background color for inactive glass tab
 *  in hover state.
 * @cssproperty --mdc-tab-glass-inactive-background-color-normal - Background color for inactive glass tab
 *  in rest state.
 * @cssproperty --mdc-tab-glass-inactive-background-color-pressed - Background color for inactive glass tab
 *  in pressed state.
 * @cssproperty --mdc-tab-glass-inactive-color - Text and icon color for inactive glass tab.
 * @cssproperty --mdc-tab-glass-inactive-color-disabled - Text and icon color for inactive glass tab in disabled state.
 * @cssproperty --mdc-tab-line-active-background-color-pressed - Background color for active line tab in pressed state.
 * @cssproperty --mdc-tab-line-active-background-color-disabled - Background color for active line tab
 *  in disabled state.
 * @cssproperty --mdc-tab-line-active-background-color-hover - Background color for active line tab in hover state.
 * @cssproperty --mdc-tab-line-active-background-color-normal - Background color for active line tab in rest state.
 * @cssproperty --mdc-tab-line-active-color - Text and icon color for active line tab.
 * @cssproperty --mdc-tab-line-active-color-disabled - Text and icon color for active line tab in disabled state.
 * @cssproperty --mdc-tab-line-active-indicator-color - color for indicator in active line tab.
 * @cssproperty --mdc-tab-line-active-indicator-color-disabled - Color for indicator in active line tab
 *  in disabled state.
 * @cssproperty --mdc-tab-line-active-indicator-height - Height for indicator in active line tab.
 * @cssproperty --mdc-tab-line-active-indicator-width - Width for indicator in active line tab.
 * @cssproperty --mdc-tab-line-border-bottom-left-radius - Bottom left border radius for line tab.
 * @cssproperty --mdc-tab-line-border-bottom-right-radius - Bottom right border radius for line tab.
 * @cssproperty --mdc-tab-line-border-top-left-radius - Top left border radius for line tab.
 * @cssproperty --mdc-tab-line-border-top-right-radius - Top right border radius for line tab.
 * @cssproperty --mdc-tab-line-inactive-background-color-pressed - Background color for inactive line tab
 *  in pressed state.
 * @cssproperty --mdc-tab-line-inactive-background-color-disabled - Background color for inactive line tab
 *  in disabled state
 * @cssproperty --mdc-tab-line-inactive-background-color-hover - Background color for inactive line tab in hover state.
 * @cssproperty --mdc-tab-line-inactive-background-color-normal - Background color for inactive line tab
 *  in rest state.
 * @cssproperty --mdc-tab-line-inactive-color - Text and icon color for inactive line tab.
 * @cssproperty --mdc-tab-line-inactive-color-disabled - Text and icon color for inactive line tab in disabled state.
 * @cssproperty --mdc-tab-padding-left - Padding left for the tab.
 * @cssproperty --mdc-tab-padding-right - Padding right for the tab.
 * @cssproperty --mdc-tab-pill-active-background-color-pressed - Background color for active pill tab in pressed state.
 * @cssproperty --mdc-tab-pill-active-background-color-disabled - Background color for active pill tab
 *  in disabled state.
 * @cssproperty --mdc-tab-pill-active-background-color-hover - Background color for active pill tab in hover state.
 * @cssproperty --mdc-tab-pill-active-background-color-normal - Background color for active pill tab in rest state.
 * @cssproperty --mdc-tab-pill-active-color - Text and icon color for active pill tab.
 * @cssproperty --mdc-tab-pill-active-color-disabled - Text and icon color for active pill tab in disabled state.
 * @cssproperty --mdc-tab-pill-border-radius - Border radius for pill tab.
 * @cssproperty --mdc-tab-pill-inactive-background-color-pressed - Background color for inactive pill tab
 *  in pressed state.
 * @cssproperty --mdc-tab-pill-inactive-background-color-disabled - Background color for inactive pill tab
 *  in disabled state.
 * @cssproperty --mdc-tab-pill-inactive-background-color-hover - Background color for inactive pill tab in hover state.
 * @cssproperty --mdc-tab-pill-inactive-background-color-normal - Background color for inactive pill tab in rest state.
 * @cssproperty --mdc-tab-pill-inactive-color - Text and icon color for inactive pill tab.
 * @cssproperty --mdc-tab-pill-inactive-color-disabled - Text and icon color for inactive pill tab in disabled state.
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"Tab",module:"components/tab/tab.component.js"}}]},{kind:"javascript-module",path:"components/text/text.component.js",declarations:[{kind:"class",description:"Text component for creating styled text elements.\nIt has to be mounted within the ThemeProvider to access color and font tokens.\n\nThe `type` attribute allows changing the text style.\nThe `tagname` attribute allows changing the tag name of the text element.\nThe default tag name is `p`.\n\nThe `tagname` attribute should be a valid HTML tag name.\nIf the `tagname` attribute is not a valid HTML tag name, the default tag name will be used.\n\nThe styling is applied based on the `type` attribute.",name:"Text",cssParts:[{description:"The text element",name:"text"}],slots:[{description:"Default slot for text content",name:""}],members:[{kind:"field",name:"type",type:{text:"TextType"},privacy:"public",description:`Specifies the text style to be applied.

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
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"Text",module:"components/text/text.component.js"}}]},{kind:"javascript-module",path:"components/textarea/textarea.component.js",declarations:[{kind:"class",description:`mdc-textarea component, which is used to get the multi-line text input from the user.
It contains:
- label: It is the title of the textarea field.
- required-label: A string depicting that the textarea field is required.
- Textarea: It is the multi-line text input field.
- helper-text: It is the text that provides additional information about the textarea field.
- max-character-limit: It is the text that shows the character count of the textarea field.
- clear-button: A boolean value when marked to true represents a button that can
  clear the text value within the textarea field.
- Error, Warning, Success, Priority Help Text type: It is the text that provides additional information
  about the textarea field based on the validation state.
- limitexceeded: It is the event that is dispatched when the character limit exceeds or restored.
  This event exposes 3 properties:
  - currentCharacterCount - the current number of characters in the textarea field,
  - maxCharacterLimit - the maximum number of characters allowed in the textarea field,
  - value - the current value of the textarea field,

**Note**: Consumers must set the help-text-type with 'error' and
help-text attribute with the error message using limitexceeded event.
The same help-text value will be used for the validation message to be displayed.`,name:"Textarea",cssProperties:[{description:"Border color for the textarea container when disabled",name:"--mdc-textarea-disabled-border-color"},{description:"Text color for the textarea field when disabled",name:"--mdc-textarea-disabled-text-color"},{description:"Background color for the textarea field when disabled",name:"--mdc-textarea-disabled-background-color"},{description:"Text color for the textarea field",name:"--mdc-textarea-text-color"},{description:"Background color for the textarea field",name:"--mdc-textarea-background-color"},{description:"Border color for the textarea field",name:"--mdc-textarea-border-color"},{description:"Text color for the character counter",name:"--mdc-textarea-text-secondary-normal"},{description:"Border color for the error related help text",name:"--mdc-textarea-error-border-color"},{description:"Border color for the warning related help text",name:"--mdc-textarea-warning-border-color"},{description:"Border color for the success related help text",name:"--mdc-textarea-success-border-color"},{description:"Border color for the priority related help text",name:"--mdc-textarea-primary-border-color"},{description:"Background color for the textarea container when hover",name:"--mdc-textarea-hover-background-color"},{description:"Background color for the textarea container when focused",name:"--mdc-textarea-focused-background-color"},{description:"Border color for the textarea container when focused",name:"--mdc-textarea-focused-border-color"}],members:[{kind:"field",name:"placeholder",type:{text:"string | undefined"},description:"The placeholder text that is displayed when the textarea field is empty.",attribute:"placeholder"},{kind:"field",name:"readonly",type:{text:"boolean"},default:"false",description:"readonly attribute of the textarea field. If true, the textarea field is read-only.",attribute:"readonly"},{kind:"field",name:"rows",description:"The rows attribute specifies the visible number of lines in a text area.",default:"5",attribute:"rows"},{kind:"field",name:"cols",description:"The cols attribute specifies the visible number of lines in a text area.",default:"40",attribute:"cols"},{kind:"field",name:"wrap",type:{text:"WrapType"},description:"The wrap attribute specifies how the text in a text area is to be wrapped when submitted in a form.",default:"'soft'",attribute:"wrap"},{kind:"field",name:"autocapitalize",type:{text:"AutoCapitalizeType"},description:"The autocapitalize attribute of the textarea field.",default:"'off'",attribute:"autocapitalize"},{kind:"field",name:"autocomplete",type:{text:"AutoCompleteType"},description:"The autocomplete attribute of the textarea field.",default:"'off'",attribute:"autocomplete"},{kind:"field",name:"autofocus",type:{text:"boolean"},default:"false",description:"If true, the textarea field is focused when the component is rendered.",attribute:"autofocus"},{kind:"field",name:"dirname",type:{text:"string | undefined"},description:'Specifies the name of the directionality of text for submission purposes (e.g., "rtl" for right-to-left).',attribute:"dirname"},{kind:"field",name:"maxlength",type:{text:"number | undefined"},description:"The maximum number of characters that the textarea field can accept.",attribute:"maxlength"},{kind:"field",name:"minlength",type:{text:"number | undefined"},description:"The minimum number of characters that the textarea field can accept.",attribute:"minlength"},{kind:"field",name:"clearButton",type:{text:"boolean"},default:"false",description:"The clear button when set to true, shows a clear button that clears the textarea field.",attribute:"clear-button"},{kind:"field",name:"clearAriaLabel",type:{text:"string"},default:"''",description:"Aria label for the clear button. If clear button is set to true, this label is used for the clear button.",attribute:"clear-aria-label"},{kind:"field",name:"maxCharacterLimit",type:{text:"number | undefined"},description:"maximum character limit for the textarea field for character counter.",attribute:"max-character-limit"},{kind:"field",name:"characterLimitExceedingFired",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"textarea",type:{text:"HTMLTextAreaElement"},privacy:"protected",readonly:!0},{kind:"method",name:"setTextareaValidity",privacy:"private"},{kind:"method",name:"handleValueChange",description:`Handles the value change of the textarea field.
Sets the form value and updates the validity of the textarea field.`,return:{type:{text:""}}},{kind:"method",name:"dispatchCharacterOverflowStateChangeEvent",privacy:"private",description:"Dispatches the character overflow state change event.",return:{type:{text:""}}},{kind:"method",name:"handleCharacterOverflowStateChange",privacy:"private",description:`Handles the character overflow state change.
Dispatches the character overflow state change event if the character limit is exceeded or restored.`,return:{type:{text:""}}},{kind:"method",name:"updateValue",privacy:"private",description:`Updates the value of the textarea field.
Sets the form value.`,return:{type:{text:""}}},{kind:"method",name:"onChange",privacy:"private",parameters:[{name:"event",type:{text:"Event"},description:"Event which contains information about the value change."}],description:`Handles the change event of the textarea field.
Updates the value and sets the validity of the textarea field.

The 'change' event does not bubble up through the shadow DOM as it was not composed.
Therefore, we need to re-dispatch the same event to ensure it is propagated correctly.
Read more: https://developer.mozilla.org/en-US/docs/Web/API/Event/composed`},{kind:"method",name:"handleKeyDown",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"},description:"Keyboard event"}],description:`Handles the keydown event of the textarea field.
Clears the textarea field when the 'Enter' key is pressed.`,return:{type:{text:""}}},{kind:"method",name:"clearInputText",privacy:"private",description:"Clears the textarea field.",return:{type:{text:""}}},{kind:"method",name:"renderClearButton",privacy:"protected",description:"Renders the clear button to clear the textarea field if the clearButton is set to true.",return:{type:{text:""}}},{kind:"method",name:"renderCharacterCounter",privacy:"protected"},{kind:"method",name:"renderTextareaFooter",privacy:"protected"},{kind:"field",name:"value",type:{text:"string"},default:"''",description:"Indicates the value of the component group (ex: input, checkbox, radio, select etc...)",attribute:"value",reflects:!0,inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"field",name:"name",type:{text:"string"},default:"''",description:`Indicates the name of the component group.
They are used to group elements in a form together.`,attribute:"name",reflects:!0,inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"field",name:"validationMessage",type:{text:"string | undefined"},description:"Custom validation message that will override the default message and displayed when the input is invalid.",attribute:"validation-message",reflects:!0,inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"field",name:"validity",type:{text:"ValidityState"},readonly:!0,inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"field",name:"willValidate",readonly:!0,inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"method",name:"setValidity",description:"Sets the validity of the input field based on the input field's validity.",return:{type:{text:""}},inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"method",name:"checkValidity",return:{type:{text:"boolean"}},inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"method",name:"reportValidity",inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"field",name:"id",type:{text:"string"},default:"`mdc-input-${uuidv4()}`",description:"The unique id of the input field. It is used to link the input field with the label.",attribute:"id",inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"dataAriaLabel",type:{text:"string | null"},default:"null",description:`Defines a string value that labels the current element.
The Aria-Label attribute to be set for accessibility.`,attribute:"data-aria-label",reflects:!0,inheritedFrom:{name:"DataAriaLabelMixin",module:"utils/mixins/DataAriaLabelMixin.js"}},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,attribute:"disabled",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"label",type:{text:"string | undefined"},description:"The label of the input field. It is linked to the input field using the `for` attribute.",attribute:"label",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"requiredLabel",type:{text:"string | undefined"},description:`The required label of the input field.
When an appropriate string value is set,
the input field is marked as required and the label is appended with this text.`,attribute:"required-label",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"helpTextType",type:{text:"ValidationType"},description:"The type of help text. It can be 'default', 'error', 'warning', 'success', 'priority'.",attribute:"help-text-type",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"helpText",type:{text:"string | undefined"},description:"The help text that is displayed below the input field.",attribute:"help-text",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderLabelElement",privacy:"protected",description:`creates the label element when the label property is set.
id is used to link the label with the input field.`,return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderRequiredLabel",privacy:"protected",inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderHelpTextIcon",privacy:"protected",description:`creates the helpertext icon based on the helpTextType for validation.
If the helpTextType is not set, it defaults to 'default' and it doesn't display any icon.`,return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderHelpText",privacy:"protected",description:`creates the helper text component when the helpertext value is set.
It is also used to display the validation message based on the helpTextType.`,return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderLabel",privacy:"protected",description:"renders the mdc-label-text container that contains the label and labelInfoToggleTip.",return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderHelperText",privacy:"protected",description:"renders the mdc-help-text container that contains the helpertext icon and helpertext.",return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}}],events:[{name:"limitexceeded",type:{text:"CustomEvent"},description:"(React: onLimitExceeded) This event is dispatched once when the character limit exceeds or restored.",reactName:"onLimitExceeded",eventName:"LimitexceededEvent"},{type:{text:"EventConstructor"}},{description:"(React: onInput) This event is dispatched when the value of the textarea field changes (every press).",name:"input",reactName:"onInput",eventName:"InputEvent"},{description:"(React: onChange) This event is dispatched when the value of the textarea field changes (on blur).",name:"change",reactName:"onChange",eventName:"ChangeEvent"},{description:"(React: onFocus) This event is dispatched when the textarea receives focus.",name:"focus",reactName:"onFocus",eventName:"FocusEvent"},{description:"(React: onBlur) This event is dispatched when the textarea loses focus.",name:"blur",reactName:"onBlur",eventName:"BlurEvent"}],attributes:[{name:"placeholder",type:{text:"string | undefined"},description:"The placeholder text that is displayed when the textarea field is empty.",fieldName:"placeholder"},{name:"readonly",type:{text:"boolean"},default:"false",description:"readonly attribute of the textarea field. If true, the textarea field is read-only.",fieldName:"readonly"},{name:"rows",description:"The rows attribute specifies the visible number of lines in a text area.",default:"5",fieldName:"rows"},{name:"cols",description:"The cols attribute specifies the visible number of lines in a text area.",default:"40",fieldName:"cols"},{name:"wrap",type:{text:"WrapType"},description:"The wrap attribute specifies how the text in a text area is to be wrapped when submitted in a form.",default:"'soft'",fieldName:"wrap"},{name:"autocapitalize",type:{text:"AutoCapitalizeType"},description:"The autocapitalize attribute of the textarea field.",default:"'off'",fieldName:"autocapitalize"},{name:"autocomplete",type:{text:"AutoCompleteType"},description:"The autocomplete attribute of the textarea field.",default:"'off'",fieldName:"autocomplete"},{name:"autofocus",type:{text:"boolean"},default:"false",description:"If true, the textarea field is focused when the component is rendered.",fieldName:"autofocus"},{name:"dirname",type:{text:"string | undefined"},description:'Specifies the name of the directionality of text for submission purposes (e.g., "rtl" for right-to-left).',fieldName:"dirname"},{name:"maxlength",type:{text:"number | undefined"},description:"The maximum number of characters that the textarea field can accept.",fieldName:"maxlength"},{name:"minlength",type:{text:"number | undefined"},description:"The minimum number of characters that the textarea field can accept.",fieldName:"minlength"},{name:"clear-button",type:{text:"boolean"},default:"false",description:"The clear button when set to true, shows a clear button that clears the textarea field.",fieldName:"clearButton"},{name:"clear-aria-label",type:{text:"string"},default:"''",description:"Aria label for the clear button. If clear button is set to true, this label is used for the clear button.",fieldName:"clearAriaLabel"},{name:"max-character-limit",type:{text:"number | undefined"},description:"maximum character limit for the textarea field for character counter.",fieldName:"maxCharacterLimit"},{name:"name",type:{text:"string"},default:"''",description:`Indicates the name of the component group.
They are used to group elements in a form together.`,fieldName:"name",inheritedFrom:{name:"FormInternalsMixin",module:"src/utils/mixins/FormInternalsMixin.ts"}},{name:"value",type:{text:"string"},default:"''",description:"Indicates the value of the component group (ex: input, checkbox, radio, select etc...)",fieldName:"value",inheritedFrom:{name:"FormInternalsMixin",module:"src/utils/mixins/FormInternalsMixin.ts"}},{name:"validation-message",type:{text:"string | undefined"},description:"Custom validation message that will override the default message and displayed when the input is invalid.",fieldName:"validationMessage",inheritedFrom:{name:"FormInternalsMixin",module:"src/utils/mixins/FormInternalsMixin.ts"}},{name:"data-aria-label",type:{text:"string | null"},default:"null",description:`Defines a string value that labels the current element.
The Aria-Label attribute to be set for accessibility.`,fieldName:"dataAriaLabel",inheritedFrom:{name:"DataAriaLabelMixin",module:"src/utils/mixins/DataAriaLabelMixin.ts"}},{name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,fieldName:"disabled",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"label",type:{text:"string | undefined"},description:"The label of the input field. It is linked to the input field using the `for` attribute.",fieldName:"label",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"required-label",type:{text:"string | undefined"},description:`The required label of the input field.
When an appropriate string value is set,
the input field is marked as required and the label is appended with this text.`,fieldName:"requiredLabel",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"id",type:{text:"string"},default:"''",description:"The unique id of the input field. It is used to link the input field with the label.",fieldName:"id",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"help-text-type",type:{text:"ValidationType"},description:"The type of help text. It can be 'default', 'error', 'warning', 'success', 'priority'.",fieldName:"helpTextType",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"help-text",type:{text:"string | undefined"},description:"The help text that is displayed below the input field.",fieldName:"helpText",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}}],mixins:[{name:"FormInternalsMixin",module:"/src/utils/mixins/FormInternalsMixin"},{name:"DataAriaLabelMixin",module:"/src/utils/mixins/DataAriaLabelMixin"}],superclass:{name:"FormfieldWrapper",module:"/src/components/formfieldwrapper"},tagName:"mdc-textarea",jsDoc:`/**
 * mdc-textarea component, which is used to get the multi-line text input from the user.
 * It contains:
 * - label: It is the title of the textarea field.
 * - required-label: A string depicting that the textarea field is required.
 * - Textarea: It is the multi-line text input field.
 * - helper-text: It is the text that provides additional information about the textarea field.
 * - max-character-limit: It is the text that shows the character count of the textarea field.
 * - clear-button: A boolean value when marked to true represents a button that can
 *   clear the text value within the textarea field.
 * - Error, Warning, Success, Priority Help Text type: It is the text that provides additional information
 *   about the textarea field based on the validation state.
 * - limitexceeded: It is the event that is dispatched when the character limit exceeds or restored.
 *   This event exposes 3 properties:
 *   - currentCharacterCount - the current number of characters in the textarea field,
 *   - maxCharacterLimit - the maximum number of characters allowed in the textarea field,
 *   - value - the current value of the textarea field,
 *
 * **Note**: Consumers must set the help-text-type with 'error' and
 * help-text attribute with the error message using limitexceeded event.
 * The same help-text value will be used for the validation message to be displayed.
 *
 * @tagname mdc-textarea
 *
 * @event input - (React: onInput) This event is dispatched when the value of the textarea field changes (every press).
 * @event change - (React: onChange) This event is dispatched when the value of the textarea field changes (on blur).
 * @event focus - (React: onFocus) This event is dispatched when the textarea receives focus.
 * @event blur - (React: onBlur) This event is dispatched when the textarea loses focus.
 * @event limitexceeded - (React: onLimitExceeded) This event is dispatched once when the character limit
 * exceeds or restored.
 *
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 * @dependency mdc-button
 *
 * @cssproperty --mdc-textarea-disabled-border-color - Border color for the textarea container when disabled
 * @cssproperty --mdc-textarea-disabled-text-color - Text color for the textarea field when disabled
 * @cssproperty --mdc-textarea-disabled-background-color - Background color for the textarea field when disabled
 * @cssproperty --mdc-textarea-text-color - Text color for the textarea field
 * @cssproperty --mdc-textarea-background-color - Background color for the textarea field
 * @cssproperty --mdc-textarea-border-color - Border color for the textarea field
 * @cssproperty --mdc-textarea-text-secondary-normal - Text color for the character counter
 * @cssproperty --mdc-textarea-error-border-color - Border color for the error related help text
 * @cssproperty --mdc-textarea-warning-border-color - Border color for the warning related help text
 * @cssproperty --mdc-textarea-success-border-color - Border color for the success related help text
 * @cssproperty --mdc-textarea-primary-border-color - Border color for the priority related help text
 * @cssproperty --mdc-textarea-hover-background-color - Background color for the textarea container when hover
 * @cssproperty --mdc-textarea-focused-background-color - Background color for the textarea container when focused
 * @cssproperty --mdc-textarea-focused-border-color - Border color for the textarea container when focused
 */`,customElement:!0,slots:[{description:"slot to add the label info icon",name:"label-info",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}}]}],exports:[{kind:"js",name:"default",declaration:{name:"Textarea",module:"components/textarea/textarea.component.js"}}]},{kind:"javascript-module",path:"components/themeprovider/themeprovider.component.js",declarations:[{kind:"class",description:"ThemeProvider component, which sets the passed in themeclass as class.\nIf the themeclass switches, the existing themeclass will be removed as a class\nand the new themeclass will be added.\n\nCSS variables defined in the themeclass will be used for the styling of child dom nodes.\n\nAvailable Momentum theme classes:\n\n`mds-theme-stable-darkWebex`, `mds-theme-stable-lightWebex`\n\n`mds-theme-stable-darkBronzeWebex`, `mds-theme-stable-lightBronzeWebex`\n\n`mds-theme-stable-darkIndigoWebex`, `mds-theme-stable-lightIndigoWebex`\n\n`mds-theme-stable-darkJadeWebex`, `mds-theme-stable-lightJadeWebex`\n\n`mds-theme-stable-darkLavenderWebex`, `mds-theme-stable-lightLavenderWebex`\n\n`mds-theme-stable-darkRoseWebex`, `mds-theme-stable-lightRoseWebex`\n\nThemeclass context can be be consumed from Lit child components\n(see providerUtils.consume for how to consume)\n\nThemeProvider also includes basic font defaults for text.",name:"ThemeProvider",cssProperties:[{description:"Option to override the default color, default: color-theme-text-primary-normal",name:"--mdc-themeprovider-color-default"},{description:"Option to override the font family, default: `Momentum` (from momentum-design/fonts)",name:"--mdc-themeprovider-font-family"},{description:"Option to override the font weight, default: `400`",name:"--mdc-themeprovider-font-weight"},{description:"Option to override the default letter-spacing, default: `-0.25px` (this is to match the old CiscoSans)",name:"--mdc-themeprovider-letter-spacing-adjustment"},{description:'Option to override the font feature settings, default: `"ss02" on`',name:"--mdc-themeprovider-font-feature-settings"},{description:"Option to override the color of the scrollbar track.",name:"--mdc-themeprovider-scrollbar-track-color"},{description:"Option to override the color of the scrollbar thumb.",name:"--mdc-themeprovider-scrollbar-thumb-color"},{description:"Option to override the color of the scrollbar thumb on hover. Applicable only on webkit browsers.",name:"--mdc-themeprovider-scrollbar-thumb-hover-color"},{description:"Option to override the color of the scrollbar thumb on press. Applicable only on webkit browsers.",name:"--mdc-themeprovider-scrollbar-thumb-active-color"}],slots:[{description:"children",name:""}],members:[{kind:"field",name:"Context",privacy:"public",static:!0,description:"Context object of the ThemeProvider, to be consumed by child components",readonly:!0},{kind:"field",name:"themeclass",type:{text:"string"},description:`Current theme class

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
 * Available Momentum theme classes:
 *
 * \`mds-theme-stable-darkWebex\`, \`mds-theme-stable-lightWebex\`
 *
 * \`mds-theme-stable-darkBronzeWebex\`, \`mds-theme-stable-lightBronzeWebex\`
 *
 * \`mds-theme-stable-darkIndigoWebex\`, \`mds-theme-stable-lightIndigoWebex\`
 *
 * \`mds-theme-stable-darkJadeWebex\`, \`mds-theme-stable-lightJadeWebex\`
 *
 * \`mds-theme-stable-darkLavenderWebex\`, \`mds-theme-stable-lightLavenderWebex\`
 *
 * \`mds-theme-stable-darkRoseWebex\`, \`mds-theme-stable-lightRoseWebex\`
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
 * @cssproperty --mdc-themeprovider-font-feature-settings - Option to override the font feature settings,
 * default: \`"ss02" on\`
 * @cssproperty --mdc-themeprovider-scrollbar-track-color - Option to override the color of the scrollbar track.
 * @cssproperty --mdc-themeprovider-scrollbar-thumb-color - Option to override the color of the scrollbar thumb.
 * @cssproperty --mdc-themeprovider-scrollbar-thumb-hover-color - Option to override the color of the
 * scrollbar thumb on hover. Applicable only on webkit browsers.
 * @cssproperty --mdc-themeprovider-scrollbar-thumb-active-color - Option to override the color of the
 * scrollbar thumb on press. Applicable only on webkit browsers.
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"ThemeProvider",module:"components/themeprovider/themeprovider.component.js"}}]},{kind:"javascript-module",path:"components/toggle/toggle.component.js",declarations:[{kind:"class",description:`Toggle Component is an interactive control used to switch between two mutually exclusive options,
such as On/Off, Active/Inactive. These are commonly used in settings panels, forms, and preference selections
where users need to enable or disable a feature.
It contains an optional label and an optional helper text.

To create a group of toggles, use the FormFieldGroup component.

Note: It internally renders a checkbox styled as a toggle switch.`,name:"Toggle",cssProperties:[{description:"width of the toggle",name:"--mdc-toggle-width"},{description:"height of the toggle",name:"--mdc-toggle-height"},{description:"width of the toggle when it's size is compact",name:"--mdc-toggle-width-compact"},{description:"height of the toggle when it's size is compact",name:"--mdc-toggle-height-compact"},{description:"border radius of the toggle",name:"--mdc-toggle-border-radius"},{description:"border radius of the toggle when it's size is compact",name:"--mdc-toggle-border-radius-compact"},{description:"border of the toggle",name:"--mdc-toggle-border"},{description:"background color of the inactive toggle in rest state",name:"--mdc-toggle-inactive-rest-color"},{description:"background color of the inactive toggle in hover state",name:"--mdc-toggle-inactive-hover-color"},{description:"background color of the inactive toggle in pressed state",name:"--mdc-toggle-inactive-pressed-color"},{description:"background color of the inactive toggle in disabled state",name:"--mdc-toggle-inactive-disabled-color"},{description:"background color of the active toggle in rest state",name:"--mdc-toggle-active-rest-color"},{description:"background color of the active toggle in hover state",name:"--mdc-toggle-active-hover-color"},{description:"background color of the active toggle in pressed state",name:"--mdc-toggle-active-pressed-color"},{description:"background color of the active toggle in disabled state",name:"--mdc-toggle-active-disabled-color"},{description:" color of the help text label",name:"--mdc-toggle-help-text-color"},{description:"color of the toggle label and help text in disabled state",name:"--mdc-toggle-label-color-disabled"}],members:[{kind:"field",name:"checked",type:{text:"boolean"},default:"false",description:"Determines whether the toggle is active or inactive.",attribute:"checked",reflects:!0},{kind:"field",name:"size",type:{text:"ToggleSize"},description:`Determines toggle size in rem (height is specified here).
- **Default**: 1.5
- **Compact**: 1`,default:"default",attribute:"size",reflects:!0},{kind:"field",name:"autofocus",type:{text:"boolean"},default:"false",description:`Automatically focus on the element when the page loads.
[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus)`,attribute:"autofocus",reflects:!0},{kind:"method",name:"manageRequired",privacy:"private",description:`Manages the required state of the checkbox.
If the checkbox is not checked and the requiredLabel property is set, then the checkbox is invalid.`},{kind:"method",name:"setFormValue",privacy:"private",description:`Updates the form value to reflect the current state of the toggle.
If toggle is switched on, the value is set to either the user-provided value or 'isActive' if no value is provided.
If toggle is switched off, the value is set to null.`},{kind:"method",name:"toggleState",privacy:"private",return:{type:{text:"void"}},description:`Toggles the state of the toggle element.
If the element is not disabled, then the checked property is toggled.`},{kind:"method",name:"handleKeyDown",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"KeyboardEvent"},description:"The keyboard event."}],description:`Handles the keydown event on the toggle element.
When the user presses Enter, the form is submitted.`},{kind:"method",name:"handleChange",privacy:"private",parameters:[{name:"event",type:{text:"Event"}}],description:`Toggles the state of the toggle element.
and dispatch the new change event.`},{kind:"method",name:"setToggleSize",privacy:"private",parameters:[{name:"size",type:{text:"ToggleSize"},description:"The size to set."}],description:`Sets the size attribute for the toggle component.
If the provided size is not included in the TOGGLE_SIZE,
it defaults to the value specified in DEFAULTS.SIZE.`},{kind:"field",name:"helpTextType",type:{text:"ValidationType"},description:"The type of help text. It can be 'default', 'error', 'warning', 'success', 'priority'.",attribute:"help-text-type",reflects:!0,default:"undefined as unknown",inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"name",type:{text:"string"},default:"''",description:`Indicates the name of the component group.
They are used to group elements in a form together.`,attribute:"name",reflects:!0,inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"field",name:"value",type:{text:"string"},default:"''",description:"Indicates the value of the component group (ex: input, checkbox, radio, select etc...)",attribute:"value",reflects:!0,inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"field",name:"validationMessage",type:{text:"string | undefined"},description:"Custom validation message that will override the default message and displayed when the input is invalid.",attribute:"validation-message",reflects:!0,inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"field",name:"validity",type:{text:"ValidityState"},readonly:!0,inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"field",name:"willValidate",readonly:!0,inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"method",name:"setValidity",description:"Sets the validity of the input field based on the input field's validity.",return:{type:{text:""}},inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"method",name:"checkValidity",return:{type:{text:"boolean"}},inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"method",name:"reportValidity",inheritedFrom:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}},{kind:"field",name:"id",type:{text:"string"},default:"`mdc-input-${uuidv4()}`",description:"The unique id of the input field. It is used to link the input field with the label.",attribute:"id",inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"dataAriaLabel",type:{text:"string | null"},default:"null",description:`Defines a string value that labels the current element.
The Aria-Label attribute to be set for accessibility.`,attribute:"data-aria-label",reflects:!0,inheritedFrom:{name:"DataAriaLabelMixin",module:"utils/mixins/DataAriaLabelMixin.js"}},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,attribute:"disabled",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"label",type:{text:"string | undefined"},description:"The label of the input field. It is linked to the input field using the `for` attribute.",attribute:"label",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"requiredLabel",type:{text:"string | undefined"},description:`The required label of the input field.
When an appropriate string value is set,
the input field is marked as required and the label is appended with this text.`,attribute:"required-label",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"field",name:"helpText",type:{text:"string | undefined"},description:"The help text that is displayed below the input field.",attribute:"help-text",reflects:!0,inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderLabelElement",privacy:"protected",description:`creates the label element when the label property is set.
id is used to link the label with the input field.`,return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderRequiredLabel",privacy:"protected",inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderHelpTextIcon",privacy:"protected",description:`creates the helpertext icon based on the helpTextType for validation.
If the helpTextType is not set, it defaults to 'default' and it doesn't display any icon.`,return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderHelpText",privacy:"protected",description:`creates the helper text component when the helpertext value is set.
It is also used to display the validation message based on the helpTextType.`,return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderLabel",privacy:"protected",description:"renders the mdc-label-text container that contains the label and labelInfoToggleTip.",return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}},{kind:"method",name:"renderHelperText",privacy:"protected",description:"renders the mdc-help-text container that contains the helpertext icon and helpertext.",return:{type:{text:""}},inheritedFrom:{name:"FormfieldWrapper",module:"components/formfieldwrapper/formfieldwrapper.component.js"}}],events:[{type:{text:"EventConstructor"}},{description:"(React: onChange) Event that gets dispatched when the toggle state changes.",name:"change",reactName:"onChange",eventName:"ChangeEvent"},{description:"(React: onFocus) Event that gets dispatched when the toggle receives focus.",name:"focus",reactName:"onFocus",eventName:"FocusEvent"}],attributes:[{name:"checked",type:{text:"boolean"},default:"false",description:"Determines whether the toggle is active or inactive.",fieldName:"checked"},{name:"size",type:{text:"ToggleSize"},description:`Determines toggle size in rem (height is specified here).
- **Default**: 1.5
- **Compact**: 1`,default:"default",fieldName:"size"},{name:"autofocus",type:{text:"boolean"},default:"false",description:`Automatically focus on the element when the page loads.
[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus)`,fieldName:"autofocus"},{name:"name",type:{text:"string"},default:"''",description:`Indicates the name of the component group.
They are used to group elements in a form together.`,fieldName:"name",inheritedFrom:{name:"FormInternalsMixin",module:"src/utils/mixins/FormInternalsMixin.ts"}},{name:"value",type:{text:"string"},default:"''",description:"Indicates the value of the component group (ex: input, checkbox, radio, select etc...)",fieldName:"value",inheritedFrom:{name:"FormInternalsMixin",module:"src/utils/mixins/FormInternalsMixin.ts"}},{name:"validation-message",type:{text:"string | undefined"},description:"Custom validation message that will override the default message and displayed when the input is invalid.",fieldName:"validationMessage",inheritedFrom:{name:"FormInternalsMixin",module:"src/utils/mixins/FormInternalsMixin.ts"}},{name:"data-aria-label",type:{text:"string | null"},default:"null",description:`Defines a string value that labels the current element.
The Aria-Label attribute to be set for accessibility.`,fieldName:"dataAriaLabel",inheritedFrom:{name:"DataAriaLabelMixin",module:"src/utils/mixins/DataAriaLabelMixin.ts"}},{name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,fieldName:"disabled",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"label",type:{text:"string | undefined"},description:"The label of the input field. It is linked to the input field using the `for` attribute.",fieldName:"label",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"required-label",type:{text:"string | undefined"},description:`The required label of the input field.
When an appropriate string value is set,
the input field is marked as required and the label is appended with this text.`,fieldName:"requiredLabel",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"id",type:{text:"string"},default:"''",description:"The unique id of the input field. It is used to link the input field with the label.",fieldName:"id",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"help-text-type",type:{text:"ValidationType"},description:"The type of help text. It can be 'default', 'error', 'warning', 'success', 'priority'.",fieldName:"helpTextType",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}},{name:"help-text",type:{text:"string | undefined"},description:"The help text that is displayed below the input field.",fieldName:"helpText",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}}],mixins:[{name:"FormInternalsMixin",module:"/src/utils/mixins/FormInternalsMixin"},{name:"DataAriaLabelMixin",module:"/src/utils/mixins/DataAriaLabelMixin"}],superclass:{name:"FormfieldWrapper",module:"/src/components/formfieldwrapper"},tagName:"mdc-toggle",jsDoc:`/**
 * Toggle Component is an interactive control used to switch between two mutually exclusive options,
 * such as On/Off, Active/Inactive. These are commonly used in settings panels, forms, and preference selections
 * where users need to enable or disable a feature.
 * It contains an optional label and an optional helper text.
 *
 * To create a group of toggles, use the FormFieldGroup component.
 *
 * Note: It internally renders a checkbox styled as a toggle switch.
 *
 * @dependency mdc-icon
 *
 * @tagname mdc-toggle
 *
 * @event change - (React: onChange) Event that gets dispatched when the toggle state changes.
 * @event focus - (React: onFocus) Event that gets dispatched when the toggle receives focus.
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
 */`,customElement:!0,slots:[{description:"slot to add the label info icon",name:"label-info",inheritedFrom:{name:"FormfieldWrapper",module:"src/components/formfieldwrapper/formfieldwrapper.component.ts"}}]}],exports:[{kind:"js",name:"default",declaration:{name:"Toggle",module:"components/toggle/toggle.component.js"}}]},{kind:"javascript-module",path:"components/tooltip/tooltip.component.js",declarations:[{kind:"class",description:`A tooltip is triggered by mouse hover or by keyboard focus
and will disappear upon mouse exit or focus change.

Note: Tooltips cannot contain content that can be focused or interacted with.`,name:"Tooltip",cssProperties:[{description:"The maximum width of the tooltip.",name:"--mdc-tooltip-max-width"},{description:"The padding of the tooltip.",name:"--mdc-tooltip-padding"},{description:"The text color of the tooltip.",name:"--mdc-tooltip-text-color"},{description:"The text color of the tooltip when the color is contrast.",name:"--mdc-tooltip-text-color-contrast"},{description:"radius of the arrow border",name:"--mdc-popover-arrow-border-radius",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{description:"border of the arrow",name:"--mdc-popover-arrow-border",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{description:"primary background color of the popover",name:"--mdc-popover-primary-background-color",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{description:"border color of the popover",name:"--mdc-popover-border-color",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{description:"inverted background color of the popover",name:"--mdc-popover-inverted-background-color",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{description:"inverted border color of the popover",name:"--mdc-popover-inverted-border-color",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{description:"inverted text color of the popover",name:"--mdc-popover-inverted-text-color",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{description:"elevation of the popover",name:"--mdc-popover-elevation-3",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}}],members:[{kind:"field",name:"tooltipType",type:{text:"TooltipType"},description:`The type of tooltip.
- **description** sets aria-describedby on the trigger component which refers to the tooltip id.
- **label** sets aria-labelledby on the trigger component which refers to the tooltip id.
- **none** no aria props set on trigger component referring to the tooltip id.`,default:"'description'",attribute:"tooltip-type",reflects:!0},{kind:"field",name:"defaultSlotNodes",type:{text:"Array<Node>"},privacy:"private"},{kind:"method",name:"getTooltipText",privacy:"private",return:{type:{text:""}}},{kind:"method",name:"setTooltipType",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"type",type:{text:"TooltipType"},description:"The type to set."}],description:`Sets the type attribute for the tooltip component.
If the provided type is not included in the TOOLTIP_TYPES,
it defaults to the value specified in DEFAULTS.TOOLTIP_TYPE.`},{kind:"method",name:"onIdUpdated",privacy:"private",return:{type:{text:"void"}},description:"Updates the tooltip id if it is empty."},{kind:"method",name:"onPlacementUpdated",privacy:"private",return:{type:{text:"void"}},description:`Updates the placement attribute if it is not a valid placement.
Overriding the default from Popover`},{kind:"method",name:"onTooltipTypeUpdated",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"changedProperties",type:{text:"PropertyValues"},description:"The changed properties."}],description:"Updates the tooltip type attribute and sets the appropriate aria props on the trigger component."},{kind:"field",name:"backdrop",type:{text:"boolean"},description:`Determines whether the popover with backdrop.
Other than popover and trigger element, the rest of the screen will be covered with a backdrop.`,default:"false",attribute:"backdrop",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"color",type:{text:"PopoverColor"},description:`Color of the popover
- **tonal**
- **contrast**`,default:"tonal",attribute:"color",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"delay",type:{text:"string"},description:"The delay of the show/hide popover.",default:"0,0",attribute:"delay",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"focusTrap",type:{text:"boolean"},description:`Determines whether the focus trap is enabled.
If true, focus will be restricted to the content within this component.`,default:"false",attribute:"focus-trap",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"hideOnBlur",type:{text:"boolean"},description:"Hide popover on blur.",default:"true",attribute:"hide-on-blur",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"hideOnEscape",type:{text:"boolean"},description:"Hide popover on escape key press.",default:"true",attribute:"hide-on-escape",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"interactive",type:{text:"boolean"},description:"Determines whether the popover is interactive。",default:"false",attribute:"interactive",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"offset",type:{text:"number"},description:"The offset of the popover.",default:"4",attribute:"offset",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"placement",type:{text:"PopoverPlacement"},description:`The placement of the popover.
- **top**
- **top-start**
- **top-end**
- **bottom**
- **bottom-start**
- **bottom-end**
- **left**
- **left-start**
- **left-end**
- **right**
- **right-start**
- **right-end**`,default:"bottom",attribute:"placement",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"role",type:{text:"HTMLElement['role']"},description:"Role of the popover",default:"'tooltip'",attribute:"role",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"showArrow",type:{text:"boolean"},description:"The arrow visibility of the popover.",default:"true",attribute:"show-arrow",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"trigger",type:{text:"PopoverTrigger"},description:`Determines the events that cause the Popover to show.
Multiple event names should be separated by spaces.
For example to allow both click and hover, use 'click mouseenter' as the trigger.
- **click**
- **mouseenter**
- **focusin**
- **manual**`,default:"'mouseenter focusin'",attribute:"trigger",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"visible",type:{text:"boolean"},description:"The visibility of the popover.",default:"false",attribute:"visible",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"enabledFocusTrap",type:{text:"boolean"},description:`Determines whether the focus trap is enabled.
If true, focus will be restricted to the content within this component.`,default:"false",attribute:"enabledFocusTrap",inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"enabledPreventScroll",type:{text:"boolean"},description:"Prevent outside scrolling when popover show.",default:"false",attribute:"enabledPreventScroll",inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"flip",type:{text:"boolean"},description:"Changes the placement of popover to keep it in view when scrolling.",default:"true",attribute:"flip",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"preventScroll",type:{text:"boolean"},description:"Prevent outside scrolling when popover show.",default:"false",attribute:"prevent-scroll",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"closeButton",type:{text:"boolean"},description:"The close button visibility of the popover.",default:"false",attribute:"close-button",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"hideOnOutsideClick",type:{text:"boolean"},description:"Hide on outside click of the popover.",default:"false",attribute:"hide-on-outside-click",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"focusBackToTrigger",type:{text:"boolean"},description:"The focus back to trigger after the popover hide.",default:"false",attribute:"focus-back-to-trigger",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"size",type:{text:"boolean"},description:"Changes the size of popover to keep it in view when scrolling.",default:"false",attribute:"size",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"disableAriaExpanded",type:{text:"boolean"},description:"Disable aria-expanded attribute on trigger element.",default:"true",attribute:"disable-aria-expanded",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"shouldWrapFocus",type:{text:"() => boolean"},inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"method",name:"deactivateFocusTrap",description:"Deactivate the focus trap.",inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"method",name:"hasNoClientRects",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Checks if the element has no client rectangles (not visible in the viewport).",return:{type:{text:""}},inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"method",name:"hasZeroDimensions",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Checks if the element has zero dimensions (width and height are both 0).",return:{type:{text:""}},inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"method",name:"isNotVisible",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Determines if the element is not visible in the DOM.",return:{type:{text:""}},inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"method",name:"hasHiddenStyle",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Checks if the element has inline styles that make it hidden.",return:{type:{text:""}},inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"method",name:"hasComputedHidden",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Checks if the element is hidden by a computed style.",return:{type:{text:""}},inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"method",name:"isHidden",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Checks if the element is hidden from the user.",return:{type:{text:""}},inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"method",name:"isNotTabbable",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Checks if the element is not tabbable.",return:{type:{text:""}},inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"method",name:"isInteractiveElement",privacy:"private",return:{type:{text:""}},parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Checks if the element is interactive.",inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"method",name:"isFocusable",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Checks if the element is focusable.",return:{type:{text:""}},inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"method",name:"findFocusable",privacy:"private",return:{type:{text:""}},parameters:[{name:"root",type:{text:"ShadowRoot | HTMLElement"},description:"The root element to search for focusable elements."},{name:"matches",default:"new Set()",type:{text:"Set<HTMLElement>"},description:"The set of focusable elements."}],description:"Recursively finds all focusable elements within the given root and its descendants.",inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"method",name:"setFocusableElements",privacy:"public",description:"Updates the list of focusable elements within the component's shadow root.",inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"method",name:"setInitialFocus",privacy:"public",parameters:[{name:"prefferableElement",default:"0",type:{text:"number"},description:"The index of the prefferable element to focus."}],description:"Sets the initial focus within the container.",inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"method",name:"calculateNextIndex",privacy:"private",parameters:[{name:"currentIndex",type:{text:"number"},description:"The current index."},{name:"step",type:{text:"number"},description:"The step to calculate the next index."}],description:"Calculates the next index for the focus trap.",return:{type:{text:""}},inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"method",name:"getDeepActiveElement",privacy:"private",description:"Returns the deepest active element in the shadow DOM.",return:{type:{text:""}},inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"method",name:"findElement",privacy:"private",parameters:[{name:"activeElement",type:{text:"HTMLElement"},description:"The active element."}],description:"Finds the index of the active element within the focusable elements.",return:{type:{text:""}},inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"method",name:"isEqualFocusNode",privacy:"private",parameters:[{name:"activeElement",type:{text:"HTMLElement"},description:"The active element."},{name:"element",type:{text:"HTMLElement"},description:"The element to compare."}],description:"Checks if the active element is equal to the given element.",return:{type:{text:""}},inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"method",name:"trapFocus",privacy:"private",parameters:[{name:"direction",type:{text:"boolean"},description:`The direction of the focus trap.
If true, the focus will be trapped in the previous element.`}],description:"Traps focus within the container.",inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"method",name:"handleKeydown",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"},description:"The keyboard event."}],description:"Traps focus within the container.",inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"id",type:{text:"string"},default:"''",description:"The unique ID of the popover.",attribute:"id",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"triggerID",type:{text:"string"},default:"''",description:`The ID of the element that triggers the popover.
This attribute is required for the popover to work.`,attribute:"triggerID",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"zIndex",type:{text:"number"},description:"The z-index of the popover.",default:"1000",attribute:"z-index",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"appendTo",type:{text:"string"},default:"''",description:"Element ID that the popover append to.",attribute:"append-to",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"closeButtonAriaLabel",type:{text:"string | null"},default:"null",description:"aria-label attribute to be set for close button accessibility.",attribute:"close-button-aria-label",inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"ariaLabelledby",type:{text:"string | null"},default:"null",description:`aria-labelledby for an interactive popover only, defaults to the trigger component id.
Used in nested cases where the triggerComponent isn't the actual button.`,attribute:"aria-labelledby",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"ariaDescribedby",type:{text:"string | null"},default:"null",description:"aria-describedby of the popover.",attribute:"aria-describedby",reflects:!0,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"arrowElement",type:{text:"HTMLElement | null"},privacy:"public",default:"null",inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"triggerElement",type:{text:"HTMLElement | null"},privacy:"public",default:"null",inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"method",name:"setupTriggerListener",privacy:"private",description:"Sets up the trigger event listeners based on the trigger type.",inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"method",name:"removeEventListeners",privacy:"private",description:"Removes the trigger event listeners.",inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"onOutsidePopoverClick",privacy:"private",description:"Handles the outside click event to close the popover.",parameters:[{description:"The mouse event.",name:"event"}],inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"onEscapeKeydown",privacy:"private",description:"Handles the escape keydown event to close the popover.",parameters:[{description:"The keyboard event.",name:"event"}],inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"onPopoverFocusOut",privacy:"private",description:"Handles the popover focus out event.",parameters:[{description:"The focus event.",name:"event"}],inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"method",name:"isOpenUpdated",privacy:"private",parameters:[{name:"oldValue",type:{text:"boolean"},description:"The old value of the visible property."},{name:"newValue",type:{text:"boolean"},description:"The new value of the visible property."}],description:`Handles the popover visibility change and position the popover.
Handles the exit event to close the popover.`,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"startCloseDelay",privacy:"private",description:`Starts the close delay timer.
If the popover is not interactive, it will close the popover after the delay.`,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"cancelCloseDelay",privacy:"private",description:"Cancels the close delay timer.",inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"showPopover",privacy:"public",description:"Shows the popover.",inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"hidePopover",privacy:"public",description:"Hides the popover.",inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"togglePopoverVisible",privacy:"public",description:"Toggles the popover visibility.",inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"method",name:"handleCreatePopoverFirstUpdate",privacy:"private",description:"Sets the focusable elements inside the popover.",inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"method",name:"positionPopover",privacy:"private",description:`Positions the popover based on the trigger element.
It also handles the flip, size and arrow placement.
It uses the floating-ui/dom library to calculate the position.`,inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}},{kind:"field",name:"utils",default:"new PopoverUtils(this)",inheritedFrom:{name:"Popover",module:"components/popover/popover.component.js"}}],attributes:[{name:"tooltip-type",type:{text:"TooltipType"},description:`The type of tooltip.
- **description** sets aria-describedby on the trigger component which refers to the tooltip id.
- **label** sets aria-labelledby on the trigger component which refers to the tooltip id.
- **none** no aria props set on trigger component referring to the tooltip id.`,default:"'description'",fieldName:"tooltipType"},{name:"enabledFocusTrap",type:{text:"boolean"},description:`Determines whether the focus trap is enabled.
If true, focus will be restricted to the content within this component.`,default:"false",fieldName:"enabledFocusTrap",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"enabledPreventScroll",type:{text:"boolean"},description:"Prevent outside scrolling when popover show.",default:"false",fieldName:"enabledPreventScroll",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"id",type:{text:"string"},default:"''",description:"The unique ID of the popover.",fieldName:"id",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"triggerID",type:{text:"string"},default:"''",description:`The ID of the element that triggers the popover.
This attribute is required for the popover to work.`,fieldName:"triggerID",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"trigger",type:{text:"PopoverTrigger"},description:`Determines the events that cause the Popover to show.
Multiple event names should be separated by spaces.
For example to allow both click and hover, use 'click mouseenter' as the trigger.
- **click**
- **mouseenter**
- **focusin**
- **manual**`,default:"click",fieldName:"trigger",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"placement",type:{text:"PopoverPlacement"},description:`The placement of the popover.
- **top**
- **top-start**
- **top-end**
- **bottom**
- **bottom-start**
- **bottom-end**
- **left**
- **left-start**
- **left-end**
- **right**
- **right-start**
- **right-end**`,default:"bottom",fieldName:"placement",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"color",type:{text:"PopoverColor"},description:`Color of the popover
- **tonal**
- **contrast**`,default:"tonal",fieldName:"color",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"visible",type:{text:"boolean"},description:"The visibility of the popover.",default:"false",fieldName:"visible",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"offset",type:{text:"number"},description:"The offset of the popover.",default:"4",fieldName:"offset",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"focus-trap",type:{text:"boolean"},description:`Determines whether the focus trap is enabled.
If true, focus will be restricted to the content within this component.`,default:"false",fieldName:"focusTrap",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"prevent-scroll",type:{text:"boolean"},description:"Prevent outside scrolling when popover show.",default:"false",fieldName:"preventScroll",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"show-arrow",type:{text:"boolean"},description:"The arrow visibility of the popover.",default:"false",fieldName:"showArrow",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"close-button",type:{text:"boolean"},description:"The close button visibility of the popover.",default:"false",fieldName:"closeButton",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"interactive",type:{text:"boolean"},description:"Determines whether the popover is interactive。",default:"false",fieldName:"interactive",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"delay",type:{text:"string"},description:"The delay of the show/hide popover.",default:"0,0",fieldName:"delay",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"hide-on-escape",type:{text:"boolean"},description:"Hide popover on escape key press.",default:"false",fieldName:"hideOnEscape",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"hide-on-blur",type:{text:"boolean"},description:"Hide popover on blur.",default:"false",fieldName:"hideOnBlur",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"hide-on-outside-click",type:{text:"boolean"},description:"Hide on outside click of the popover.",default:"false",fieldName:"hideOnOutsideClick",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"focus-back-to-trigger",type:{text:"boolean"},description:"The focus back to trigger after the popover hide.",default:"false",fieldName:"focusBackToTrigger",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"backdrop",type:{text:"boolean"},description:`Determines whether the popover with backdrop.
Other than popover and trigger element, the rest of the screen will be covered with a backdrop.`,default:"false",fieldName:"backdrop",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"flip",type:{text:"boolean"},description:"Changes the placement of popover to keep it in view when scrolling.",default:"true",fieldName:"flip",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"size",type:{text:"boolean"},description:"Changes the size of popover to keep it in view when scrolling.",default:"false",fieldName:"size",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"z-index",type:{text:"number"},description:"The z-index of the popover.",default:"1000",fieldName:"zIndex",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"append-to",type:{text:"string"},default:"''",description:"Element ID that the popover append to.",fieldName:"appendTo",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"close-button-aria-label",type:{text:"string | null"},default:"null",description:"aria-label attribute to be set for close button accessibility.",fieldName:"closeButtonAriaLabel",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"role",type:{text:"HTMLElement['role']"},description:"Role of the popover",default:"dialog",fieldName:"role",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"aria-labelledby",type:{text:"string | null"},default:"null",description:`aria-labelledby for an interactive popover only, defaults to the trigger component id.
Used in nested cases where the triggerComponent isn't the actual button.`,fieldName:"ariaLabelledby",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"aria-describedby",type:{text:"string | null"},default:"null",description:"aria-describedby of the popover.",fieldName:"ariaDescribedby",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}},{name:"disable-aria-expanded",type:{text:"boolean"},description:"Disable aria-expanded attribute on trigger element.",default:"false",fieldName:"disableAriaExpanded",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}}],superclass:{name:"Popover",module:"/src/components/popover/popover.component"},tagName:"mdc-tooltip",jsDoc:`/**
 * A tooltip is triggered by mouse hover or by keyboard focus
 * and will disappear upon mouse exit or focus change.
 *
 * Note: Tooltips cannot contain content that can be focused or interacted with.
 *
 * @tagname mdc-tooltip
 *
 * @cssproperty --mdc-tooltip-max-width - The maximum width of the tooltip.
 * @cssproperty --mdc-tooltip-padding - The padding of the tooltip.
 * @cssproperty --mdc-tooltip-text-color - The text color of the tooltip.
 * @cssproperty --mdc-tooltip-text-color-contrast - The text color of the tooltip when the color is contrast.
 *
 */`,customElement:!0,slots:[{description:"Default slot for the popover content",name:"",inheritedFrom:{name:"Popover",module:"src/components/popover/popover.component.ts"}}]}],exports:[{kind:"js",name:"default",declaration:{name:"Tooltip",module:"components/tooltip/tooltip.component.js"}}]},{kind:"javascript-module",path:"components/virtualizedlist/virtualizedlist.component.js",declarations:[{kind:"class",description:`\`mdc-virtualizedlist\` component for creating custom virtualized lists.
IMPORTANT: This component does not create it's own list/list items.
Use the setlistdata callback prop to update client state in order to
Pass list/listitems as a child of this component, which this will virtuailze
This implementation handles dynamic lists as well as fixed sized lists.
Please refer to [Tanstack Virtual Docs](https://tanstack.com/virtual/latest) for more in depth documentation.`,name:"VirtualizedList",slots:[{description:"Client side List with nested list items.",name:""}],members:[{kind:"field",name:"onscroll",type:{text:"((this: GlobalEventHandlers, ev: Event) => void) | null"},description:`Callback that gets called when user scrolls inside of list. This gives access to the scroll container element
as well via the event. Particularly useful for
handling logic related when the user scrolls to the top or bottom of a list.`,default:"null",attribute:"onscroll"},{kind:"field",name:"virtualizerProps",type:{text:"VirtualizerProps"},description:`Object that sets and updates the virtualizer with any relevant props.
There are two required object props in order to get virtualization to work properly.
count - The length of your list that you are virtualizing.
As your list grows/shrinks, this component must be updated with the appropriate value
(Same with any other updated prop).
estimateSize - A function that returns the estimated size of your items.
If your list is fixed, this will just be the size of your items.
If your list is dynamic, try to return approximate the size of each item.

A full list of possible props can be in
[Tanstack Virtualizer API Docs](https://tanstack.com/virtual/latest/docs/api/virtualizer)`,attribute:"virtualizerprops"},{kind:"field",name:"setlistdata",type:{text:"(({ virtualItems, measureElement, listStyle }: SetListDataProps) => void) | null"},description:`Callback that gets envoked when updates to the virtualizer interally occur.
This must be implemented in such a way that this function will trigger update to parent.

virtualItems - Array that will be what the client displays on screen. Use this to render
a List of your choosing with these items nested inside as your ListItems.
measureElement - Ref to pass to each ListItem rendered client side.
Each ListItem should also be be passed key and a data-index (which can be found on the virtualItem).
listStyle - This should be passed as the style attribute to your List.`,default:"null",attribute:"setlistdata"},{kind:"field",name:"scrollElementRef",type:{text:"Ref<HTMLDivElement>"},privacy:"public"},{kind:"field",name:"virtualizer",type:{text:"Virtualizer<Element, Element> | null"},privacy:"public",default:"null"},{kind:"field",name:"virtualItems",type:{text:"Array<VirtualItem>"},privacy:"public",default:"[]"},{kind:"field",name:"virtualizerController",type:{text:"null"},default:"null"}],events:[{description:"(React: onScroll) Event that gets called when user scrolls inside of list.",name:"onscroll",reactName:"onScroll",eventName:"OnscrollEvent"}],attributes:[{name:"onscroll",type:{text:"((this: GlobalEventHandlers, ev: Event) => void) | null"},description:`Callback that gets called when user scrolls inside of list. This gives access to the scroll container element
as well via the event. Particularly useful for
handling logic related when the user scrolls to the top or bottom of a list.`,default:"null",fieldName:"onscroll"},{name:"virtualizerprops",type:{text:"VirtualizerProps"},description:`Object that sets and updates the virtualizer with any relevant props.
There are two required object props in order to get virtualization to work properly.
count - The length of your list that you are virtualizing.
As your list grows/shrinks, this component must be updated with the appropriate value
(Same with any other updated prop).
estimateSize - A function that returns the estimated size of your items.
If your list is fixed, this will just be the size of your items.
If your list is dynamic, try to return approximate the size of each item.

A full list of possible props can be in
[Tanstack Virtualizer API Docs](https://tanstack.com/virtual/latest/docs/api/virtualizer)`,fieldName:"virtualizerProps"},{name:"setlistdata",type:{text:"(({ virtualItems, measureElement, listStyle }: SetListDataProps) => void) | null"},description:`Callback that gets envoked when updates to the virtualizer interally occur.
This must be implemented in such a way that this function will trigger update to parent.

virtualItems - Array that will be what the client displays on screen. Use this to render
a List of your choosing with these items nested inside as your ListItems.
measureElement - Ref to pass to each ListItem rendered client side.
Each ListItem should also be be passed key and a data-index (which can be found on the virtualItem).
listStyle - This should be passed as the style attribute to your List.`,default:"null",fieldName:"setlistdata"}],superclass:{name:"Component",module:"/src/models"},tagName:"mdc-virtualizedlist",jsDoc:`/**
 * \`mdc-virtualizedlist\` component for creating custom virtualized lists.
 * IMPORTANT: This component does not create it's own list/list items.
 * Use the setlistdata callback prop to update client state in order to
 * Pass list/listitems as a child of this component, which this will virtuailze
 * This implementation handles dynamic lists as well as fixed sized lists.
 * Please refer to [Tanstack Virtual Docs](https://tanstack.com/virtual/latest) for more in depth documentation.
 *
 * @tagname mdc-virtualizedlist
 *
 * @event onscroll - (React: onScroll) Event that gets called when user scrolls inside of list.
 *
 * @slot - Client side List with nested list items.
 */`,customElement:!0}],exports:[{kind:"js",name:"default",declaration:{name:"VirtualizedList",module:"components/virtualizedlist/virtualizedlist.component.js"}}]},{kind:"javascript-module",path:"utils/mixins/AvatarComponentMixin.js",declarations:[{kind:"mixin",description:"",name:"AvatarComponentMixin",members:[{kind:"field",name:"src",type:{text:"string | undefined"},description:`The src is the url which will be used to display the avatar.
When the src is loading, we will display the initials as a placeholder.`,attribute:"src"},{kind:"field",name:"initials",type:{text:"string | undefined"},description:"The initials to be displayed for the avatar.",attribute:"initials"},{kind:"field",name:"presence",type:{text:"PresenceType | undefined"},description:"The presence is the status which can be used to display the\nactivity state of a user or a space within an avatar component.\n\nAcceptable values include:\n- `active`\n- `away`\n- `away-calling`\n- `busy`\n- `dnd`\n- `meeting`\n- `on-call`\n- `on-device`\n- `on-mobile`\n- `pause`\n- `pto`\n- `presenting`\n- `quiet`\n- `scheduled`",attribute:"presence"},{kind:"field",name:"size",type:{text:"AvatarSize"},description:`Acceptable values include (size in px unit):
- 24
- 32
- 48
- 64
- 72
- 88
- 124`,default:"32",attribute:"size",reflects:!0},{kind:"field",name:"counter",type:{text:"number | undefined"},description:"The counter is the number which can be displayed on the avatar.\nThe maximum number is 99 and if the given number is greater than 99,\nthen the avatar will be displayed as `99+`.\nIf the given number is a negative number,\nthen the avatar will be displayed as `0`.",attribute:"counter"},{kind:"field",name:"isTyping",type:{text:"boolean"},default:"false",description:"Represents the typing indicator when the user is typing.",attribute:"is-typing"}],attributes:[{name:"src",type:{text:"string | undefined"},description:`The src is the url which will be used to display the avatar.
When the src is loading, we will display the initials as a placeholder.`,fieldName:"src"},{name:"initials",type:{text:"string | undefined"},description:"The initials to be displayed for the avatar.",fieldName:"initials"},{name:"presence",type:{text:"PresenceType | undefined"},description:"The presence is the status which can be used to display the\nactivity state of a user or a space within an avatar component.\n\nAcceptable values include:\n- `active`\n- `away`\n- `away-calling`\n- `busy`\n- `dnd`\n- `meeting`\n- `on-call`\n- `on-device`\n- `on-mobile`\n- `pause`\n- `pto`\n- `presenting`\n- `quiet`\n- `scheduled`",fieldName:"presence"},{name:"size",type:{text:"AvatarSize"},description:`Acceptable values include (size in px unit):
- 24
- 32
- 48
- 64
- 72
- 88
- 124`,default:"32",fieldName:"size"},{name:"counter",type:{text:"number | undefined"},description:"The counter is the number which can be displayed on the avatar.\nThe maximum number is 99 and if the given number is greater than 99,\nthen the avatar will be displayed as `99+`.\nIf the given number is a negative number,\nthen the avatar will be displayed as `0`.",fieldName:"counter"},{name:"is-typing",type:{text:"boolean"},default:"false",description:"Represents the typing indicator when the user is typing.",fieldName:"isTyping"}],parameters:[{name:"superClass",type:{text:"T"}}]}],exports:[{kind:"js",name:"AvatarComponentMixin",declaration:{name:"AvatarComponentMixin",module:"utils/mixins/AvatarComponentMixin.js"}}]},{kind:"javascript-module",path:"utils/mixins/DataAriaLabelMixin.js",declarations:[{kind:"mixin",description:"",name:"DataAriaLabelMixin",members:[{kind:"field",name:"dataAriaLabel",type:{text:"string | null"},default:"null",description:`Defines a string value that labels the current element.
The Aria-Label attribute to be set for accessibility.`,attribute:"data-aria-label",reflects:!0}],attributes:[{name:"data-aria-label",type:{text:"string | null"},default:"null",description:`Defines a string value that labels the current element.
The Aria-Label attribute to be set for accessibility.`,fieldName:"dataAriaLabel"}],parameters:[{name:"superClass",type:{text:"T"}}]}],exports:[{kind:"js",name:"DataAriaLabelMixin",declaration:{name:"DataAriaLabelMixin",module:"utils/mixins/DataAriaLabelMixin.js"}}]},{kind:"javascript-module",path:"utils/mixins/DisabledMixin.js",declarations:[{kind:"mixin",description:"",name:"DisabledMixin",members:[{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,attribute:"disabled",reflects:!0}],attributes:[{name:"disabled",type:{text:"boolean"},default:"false",description:`Indicates whether the component is disabled.
When the component is disabled for user interaction; it is not focusable or clickable.`,fieldName:"disabled"}],parameters:[{name:"superClass",type:{text:"T"}}]}],exports:[{kind:"js",name:"DisabledMixin",declaration:{name:"DisabledMixin",module:"utils/mixins/DisabledMixin.js"}}]},{kind:"javascript-module",path:"utils/mixins/FocusTrapMixin.js",declarations:[{kind:"mixin",description:"",name:"FocusTrapMixin",members:[{kind:"field",name:"enabledFocusTrap",type:{text:"boolean"},description:`Determines whether the focus trap is enabled.
If true, focus will be restricted to the content within this component.`,default:"false",attribute:"enabledFocusTrap"},{kind:"field",name:"enabledPreventScroll",type:{text:"boolean"},description:"Prevent outside scrolling when popover show.",default:"false",attribute:"enabledPreventScroll"},{kind:"field",name:"shouldWrapFocus",type:{text:"() => boolean"}},{kind:"method",name:"deactivateFocusTrap",description:"Deactivate the focus trap."},{kind:"method",name:"hasNoClientRects",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Checks if the element has no client rectangles (not visible in the viewport).",return:{type:{text:""}}},{kind:"method",name:"hasZeroDimensions",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Checks if the element has zero dimensions (width and height are both 0).",return:{type:{text:""}}},{kind:"method",name:"isNotVisible",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Determines if the element is not visible in the DOM.",return:{type:{text:""}}},{kind:"method",name:"hasHiddenStyle",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Checks if the element has inline styles that make it hidden.",return:{type:{text:""}}},{kind:"method",name:"hasComputedHidden",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Checks if the element is hidden by a computed style.",return:{type:{text:""}}},{kind:"method",name:"isHidden",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Checks if the element is hidden from the user.",return:{type:{text:""}}},{kind:"method",name:"isNotTabbable",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Checks if the element is not tabbable.",return:{type:{text:""}}},{kind:"method",name:"isInteractiveElement",privacy:"private",return:{type:{text:""}},parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Checks if the element is interactive."},{kind:"method",name:"isFocusable",privacy:"private",parameters:[{name:"element",type:{text:"HTMLElement"},description:"The element to check."}],description:"Checks if the element is focusable.",return:{type:{text:""}}},{kind:"method",name:"findFocusable",privacy:"private",return:{type:{text:""}},parameters:[{name:"root",type:{text:"ShadowRoot | HTMLElement"},description:"The root element to search for focusable elements."},{name:"matches",default:"new Set()",type:{text:"Set<HTMLElement>"},description:"The set of focusable elements."}],description:"Recursively finds all focusable elements within the given root and its descendants."},{kind:"method",name:"setFocusableElements",privacy:"public",description:"Updates the list of focusable elements within the component's shadow root."},{kind:"method",name:"setInitialFocus",privacy:"public",parameters:[{name:"prefferableElement",default:"0",type:{text:"number"},description:"The index of the prefferable element to focus."}],description:"Sets the initial focus within the container."},{kind:"method",name:"calculateNextIndex",privacy:"private",parameters:[{name:"currentIndex",type:{text:"number"},description:"The current index."},{name:"step",type:{text:"number"},description:"The step to calculate the next index."}],description:"Calculates the next index for the focus trap.",return:{type:{text:""}}},{kind:"method",name:"getDeepActiveElement",privacy:"private",description:"Returns the deepest active element in the shadow DOM.",return:{type:{text:""}}},{kind:"method",name:"findElement",privacy:"private",parameters:[{name:"activeElement",type:{text:"HTMLElement"},description:"The active element."}],description:"Finds the index of the active element within the focusable elements.",return:{type:{text:""}}},{kind:"method",name:"isEqualFocusNode",privacy:"private",parameters:[{name:"activeElement",type:{text:"HTMLElement"},description:"The active element."},{name:"element",type:{text:"HTMLElement"},description:"The element to compare."}],description:"Checks if the active element is equal to the given element.",return:{type:{text:""}}},{kind:"method",name:"trapFocus",privacy:"private",parameters:[{name:"direction",type:{text:"boolean"},description:`The direction of the focus trap.
If true, the focus will be trapped in the previous element.`}],description:"Traps focus within the container."},{kind:"method",name:"handleKeydown",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"},description:"The keyboard event."}],description:"Traps focus within the container."}],attributes:[{name:"enabledFocusTrap",type:{text:"boolean"},description:`Determines whether the focus trap is enabled.
If true, focus will be restricted to the content within this component.`,default:"false",fieldName:"enabledFocusTrap"},{name:"enabledPreventScroll",type:{text:"boolean"},description:"Prevent outside scrolling when popover show.",default:"false",fieldName:"enabledPreventScroll"}],parameters:[{name:"superClass",type:{text:"T"}}]}],exports:[{kind:"js",name:"FocusTrapMixin",declaration:{name:"FocusTrapMixin",module:"utils/mixins/FocusTrapMixin.js"}}]},{kind:"javascript-module",path:"utils/mixins/FormInternalsMixin.js",declarations:[{kind:"mixin",description:"",name:"FormInternalsMixin",members:[{kind:"field",name:"name",type:{text:"string"},default:"''",description:`Indicates the name of the component group.
They are used to group elements in a form together.`,attribute:"name",reflects:!0},{kind:"field",name:"value",type:{text:"string"},default:"''",description:"Indicates the value of the component group (ex: input, checkbox, radio, select etc...)",attribute:"value",reflects:!0},{kind:"field",name:"validationMessage",type:{text:"string | undefined"},description:"Custom validation message that will override the default message and displayed when the input is invalid.",attribute:"validation-message",reflects:!0},{kind:"field",name:"validity",type:{text:"ValidityState"},readonly:!0},{kind:"field",name:"willValidate",readonly:!0},{kind:"method",name:"setValidity",description:"Sets the validity of the input field based on the input field's validity.",return:{type:{text:""}}},{kind:"method",name:"checkValidity",return:{type:{text:"boolean"}}},{kind:"method",name:"reportValidity"},{kind:"field",name:"id",default:"`mdc-input-${uuidv4()}`"}],attributes:[{name:"name",type:{text:"string"},default:"''",description:`Indicates the name of the component group.
They are used to group elements in a form together.`,fieldName:"name"},{name:"value",type:{text:"string"},default:"''",description:"Indicates the value of the component group (ex: input, checkbox, radio, select etc...)",fieldName:"value"},{name:"validation-message",type:{text:"string | undefined"},description:"Custom validation message that will override the default message and displayed when the input is invalid.",fieldName:"validationMessage"}],parameters:[{name:"superClass",type:{text:"T"}}]}],exports:[{kind:"js",name:"FormInternalsMixin",declaration:{name:"FormInternalsMixin",module:"utils/mixins/FormInternalsMixin.js"}}]},{kind:"javascript-module",path:"utils/mixins/IconNameMixin.js",declarations:[{kind:"mixin",description:"",name:"IconNameMixin",members:[{kind:"field",name:"iconName",type:{text:"IconNames | undefined"},description:"Name of the icon (= filename).\n\nIf no `icon-name` is provided, no icon will be rendered.",attribute:"icon-name"}],attributes:[{name:"icon-name",type:{text:"IconNames | undefined"},description:"Name of the icon (= filename).\n\nIf no `icon-name` is provided, no icon will be rendered.",fieldName:"iconName"}],parameters:[{name:"superClass",type:{text:"T"}}]}],exports:[{kind:"js",name:"IconNameMixin",declaration:{name:"IconNameMixin",module:"utils/mixins/IconNameMixin.js"}}]},{kind:"javascript-module",path:"utils/mixins/TabIndexMixin.js",declarations:[{kind:"mixin",description:"",name:"TabIndexMixin",members:[{kind:"field",name:"tabIndex",type:{text:"number"},default:"0",description:"This property specifies the tab order of the element.",attribute:"tabIndex",reflects:!0}],attributes:[{name:"tabIndex",type:{text:"number"},default:"0",description:"This property specifies the tab order of the element.",fieldName:"tabIndex"}],parameters:[{name:"superClass",type:{text:"T"}}]}],exports:[{kind:"js",name:"TabIndexMixin",declaration:{name:"TabIndexMixin",module:"utils/mixins/TabIndexMixin.js"}}]},{kind:"javascript-module",path:"utils/mixins/index.types.js",declarations:[],exports:[]}],f={schemaVersion:m,readme:u,modules:h},d=[{themeclass:"mds-theme-stable-darkWebex",displayName:"darkWebex",className:"dark"},{themeclass:"mds-theme-stable-darkBronzeWebex",displayName:"darkBronzeWebex",className:"darkBronze"},{themeclass:"mds-theme-stable-darkIndigoWebex",displayName:"darkIndigoWebex",className:"darkIndigo"},{themeclass:"mds-theme-stable-darkJadeWebex",displayName:"darkJadeWebex",className:"darkJade"},{themeclass:"mds-theme-stable-darkLavenderWebex",displayName:"darkLavenderWebex",className:"darkLavender"},{themeclass:"mds-theme-stable-darkRoseWebex",displayName:"darkRoseWebex",className:"darkRose"},{themeclass:"mds-theme-stable-lightWebex",displayName:"lightWebex",className:"light"},{themeclass:"mds-theme-stable-lightBronzeWebex",displayName:"lightBronzeWebex",className:"lightBronze"},{themeclass:"mds-theme-stable-lightIndigoWebex",displayName:"lightIndigoWebex",className:"lightIndigo"},{themeclass:"mds-theme-stable-lightJadeWebex",displayName:"lightJadeWebex",className:"lightJade"},{themeclass:"mds-theme-stable-lightLavenderWebex",displayName:"lightLavenderWebex",className:"lightLavender"},{themeclass:"mds-theme-stable-lightRoseWebex",displayName:"lightRoseWebex",className:"lightRose"}],s=(e,n)=>{e.classList.add(n)},b=e=>{const n=document.querySelectorAll("div.docs-story");for(const i of n)i.style.backgroundColor=e},v=(e,n)=>{const i=n.globals.theme,t=d.find(r=>r.displayName===i),o=document.querySelector("body.sb-show-main");return s(o,"bodyOverride"),s(o,"mds-typography"),s(o,"mds-elevation"),b(t.backgroundColor),c` <mdc-themeprovider id="theme-provider" themeclass="${t.themeclass}">
    <div class="backgroundGradient">${e()}</div>
  </mdc-themeprovider>`},y=e=>c` <mdc-iconprovider url="./icons/svg" cache-strategy="in-memory-cache" cache-name="momentum">
    ${e()}
  </mdc-iconprovider>`;function x(e){const n=i=>i.replace(/-([a-z])/g,t=>t[1].toUpperCase());return e.modules.forEach(i=>{i.declarations.forEach(t=>{var l;const o=new Set((l=t==null?void 0:t.attributes)==null?void 0:l.map(a=>n(a.name))),r=t.members.filter(a=>!o.has(a.name));Object.assign(t,{members:r})})}),e}const g=x(f);p(g);const L={parameters:{a11y:{options:{runOnly:{type:"tag",values:["best-practice","wcag2a","wcag2aa","wcag21aa","wcag22aa"]}}},docs:{source:{excludeDecorators:!0}},actions:{argTypesRegex:"^on[A-Z].*"},backgrounds:{disable:!0,grid:{disable:!0}},badgesConfig:{wip:{styles:{backgroundColor:"#30240D",borderColor:"#D6B220",color:"#FFFFFFF2"},title:"Work In Progress",tooltip:{title:"This Component is Work In Progress",desc:"Keep an eye on the Release history for updates or provide feedback."}},stable:{styles:{backgroundColor:"#416116",borderColor:"#93C437",color:"#FFFFFFF2"},title:"Stable",tooltip:{title:"This Component is Stable",desc:"Ready for use."}},internal:{styles:{backgroundColor:"#0D2C3D",borderColor:"#1D9BF0",color:"#FFFFFFF2"},title:"Internal",tooltip:{title:"This Component is Internal",desc:"This component is not intended for direct consumption."}},deprecated:{styles:{backgroundColor:"#4F0E10",borderColor:"#FC8B98",color:"#FFFFFFF2"},title:"Deprecated",tooltip:{title:"This Component is Deprecated",desc:"Check the Release history for more information about deprecation or provide feedback."}}},controls:{disableSaveFromUI:!0,expanded:!0,matchers:{color:/(background|color)$/i,date:/Date$/}},options:{storySort:{order:["Consumption","Styling","Components","Work In Progress"]}},direction:"ltr"},decorators:[v,y],globalTypes:{theme:{description:"Global theme for components",defaultValue:d[0].displayName,toolbar:{title:"Theme",icon:"globe",items:d.map(e=>e.displayName),dynamicTitle:!0}}}};export{L as default};
