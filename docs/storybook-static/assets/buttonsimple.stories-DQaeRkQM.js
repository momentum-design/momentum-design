import"./index-BzDeUI_j.js";import{k as c}from"./iframe-Dey1eEIV.js";import{t as r}from"./if-defined-CBLcy0O0.js";import{c as d,s as p}from"./commonArgTypes-BluK8w5L.js";import{a as l,B as i,D as m}from"./buttonsimple.constants-FFGgs1Ue.js";import"./buttonsimple.component-yJgg0UJE.js";import"./keys-hFXe221I.js";import"./DisabledMixin-Cz2kmvXB.js";import"./TabIndexMixin-DYjNaT1n.js";import"./index-Tyfr8zZA.js";import"./preload-helper-C1FmrZbK.js";import"./roles-CJI3JVG-.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,b=e=>c` <mdc-buttonsimple
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
    ariaStateKey="${r(e.ariaStateKey)}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    >${e.children}</mdc-buttonsimple
  >`,B={title:"Internal/buttonsimple",tags:["autodocs"],component:"mdc-buttonsimple",render:b,argTypes:{children:{description:"Text label for the button.",control:"text"},ariaStateKey:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},size:{control:"select",options:Object.values(l)},type:{control:"select",options:Object.values(i)},"auto-focus-on-mount":{control:"boolean"},...d,...p}},t={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,size:l[32],type:i.BUTTON,role:m.ROLE,tabIndex:0}};var a,s,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const I=["Example"];export{t as Example,I as __namedExportsOrder,B as default};
