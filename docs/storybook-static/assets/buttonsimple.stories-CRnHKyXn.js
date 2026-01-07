import"./index-DVEBpr2k.js";import{a as c,c as i,D as r,k as d}from"./iframe-sRPgz7Dy.js";import{t as o}from"./if-defined-DrlexgLD.js";import{c as p,s as m}from"./commonArgTypes-BG7EqI50.js";import"./buttonsimple.component-CdXwdlTg.js";import"./TabIndexMixin-Bd3wWymV.js";import"./DisabledMixin-BHVblWhw.js";import"./preload-helper-C1FmrZbK.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,u=e=>d` <mdc-buttonsimple
    @click="${t("onclick")}"
    @keydown="${t("onkeydown")}"
    @keyup="${t("onkeyup")}"
    @focus="${t("onfocus")}"
    ?active="${e.active}"
    ?disabled="${e.disabled}"
    ?soft-disabled="${e["soft-disabled"]}"
    size="${o(e.size)}"
    type="${o(e.type)}"
    role="${o(e.role)}"
    tabindex="${o(e.tabIndex)}"
    ariaStateKey="${o(e.ariaStateKey)}"
    name="${o(e.name)}"
    value="${o(e.value)}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    >${e.children}</mdc-buttonsimple
  >`,S={title:"Internal/buttonsimple",tags:["autodocs"],component:"mdc-buttonsimple",render:u,argTypes:{children:{description:"Text label for the button.",control:"text"},ariaStateKey:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},size:{control:"select",options:Object.values(c)},type:{control:"select",options:Object.values(i)},name:{control:"text"},value:{control:"text"},"auto-focus-on-mount":{control:"boolean"},...p,...m}},a={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,size:c[32],type:i.BUTTON,role:r.ROLE,tabIndex:0}};var n,l,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(l=a.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const _=["Example"];export{a as Example,_ as __namedExportsOrder,S as default};
