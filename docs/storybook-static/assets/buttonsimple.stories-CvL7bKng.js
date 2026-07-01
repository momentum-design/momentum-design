import"./index-BHM77v-t.js";import{b as c,d as i,D as r,k as d,t as o}from"./iframe-BrN8x_Z0.js";import{c as p,s as m}from"./commonArgTypes-BG7EqI50.js";import"./buttonsimple.component-C085WkLc.js";import"./DisabledMixin-DjI3Wyw_.js";import"./KeyDownHandledMixin-lEQrVlT7.js";import"./index-CuaFIEeJ.js";import"./preload-helper-C1FmrZbK.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,u=e=>d` <mdc-buttonsimple
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
  >`,S={title:"Components/buttonsimple",tags:["autodocs"],component:"mdc-buttonsimple",render:u,argTypes:{children:{description:"Text label for the button.",control:"text"},ariaStateKey:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},size:{control:"select",options:Object.values(c)},type:{control:"select",options:Object.values(i)},name:{control:"text"},value:{control:"text"},"auto-focus-on-mount":{control:"boolean"},...p,...m}},n={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,size:c[32],type:i.BUTTON,role:r.ROLE,tabIndex:0}};var a,s,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(l=(s=n.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const _=["Example"];export{n as Example,_ as __namedExportsOrder,S as default};
