import"./index-Dx9F_tyA.js";import{k as c}from"./iframe-CXwaMhTJ.js";import{t as r}from"./if-defined-DIAx6F34.js";import{c as d,s as p}from"./commonArgTypes-BluK8w5L.js";import{a as l,B as i,D as m}from"./buttonsimple.constants-BOMNYkoG.js";import"./buttonsimple.component-uJ9ziZ_h.js";import"./keys-hFXe221I.js";import"./DisabledMixin-8BMo0Dt6.js";import"./TabIndexMixin-Ckq1KLgg.js";import"./index-BH7b8QFc.js";import"./preload-helper-C1FmrZbK.js";import"./roles-CJI3JVG-.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,b=e=>c` <mdc-buttonsimple
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
