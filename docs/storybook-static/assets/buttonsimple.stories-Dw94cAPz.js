import"./index-CYjus9M6.js";import{c as l,b as c,D as i,k as r}from"./iframe-DjzY12_L.js";import{t as d}from"./if-defined-D4sqW-Mq.js";import{c as p,s as m}from"./commonArgTypes-BluK8w5L.js";import"./buttonsimple.component-DpLYU5FB.js";import"./TabIndexMixin-hkv6uRnr.js";import"./DisabledMixin-CqJJpo6w.js";import"./preload-helper-C1FmrZbK.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,b=e=>r` <mdc-buttonsimple
    @click="${o("onclick")}"
    @keydown="${o("onkeydown")}"
    @keyup="${o("onkeyup")}"
    @focus="${o("onfocus")}"
    ?active="${e.active}"
    ?disabled="${e.disabled}"
    ?soft-disabled="${e["soft-disabled"]}"
    size="${e.size}"
    type="${e.type}"
    role="${e.role}"
    tabIndex="${e.tabIndex}"
    ariaStateKey="${d(e.ariaStateKey)}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    >${e.children}</mdc-buttonsimple
  >`,_={title:"Internal/buttonsimple",tags:["autodocs"],component:"mdc-buttonsimple",render:b,argTypes:{children:{description:"Text label for the button.",control:"text"},ariaStateKey:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},size:{control:"select",options:Object.values(l)},type:{control:"select",options:Object.values(c)},"auto-focus-on-mount":{control:"boolean"},...p,...m}},t={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,size:l[32],type:c.BUTTON,role:i.ROLE,tabIndex:0}};var a,s,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: 'Click Me',
    active: false,
    disabled: false,
    'soft-disabled': false,
    size: BUTTON_SIZES[32],
    type: BUTTON_TYPE.BUTTON,
    role: DEFAULTS.ROLE,
    tabIndex: 0
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const x=["Example"];export{t as Example,x as __namedExportsOrder,_ as default};
