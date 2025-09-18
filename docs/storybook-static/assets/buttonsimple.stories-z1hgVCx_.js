import"./index-ByhtR4jH.js";import{k as r}from"./lit-element-D5KKan5q.js";import{a as o}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{t as c}from"./if-defined-D5BV9-c0.js";import{c as d,s as p}from"./commonArgTypes-BluK8w5L.js";import{a as l,B as i,D as m}from"./buttonsimple.constants-An7St6B1.js";import"./buttonsimple.component-CKyEWPbX.js";import"./provider.component-BaQC7CJH.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";import"./index-CqVtAZCJ.js";import"./v4-CQkTLCs1.js";import"./roles-CJI3JVG-.js";const b=e=>r` <mdc-buttonsimple
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
    ariaStateKey="${c(e.ariaStateKey)}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    >${e.children}</mdc-buttonsimple
  >`,N={title:"Internal/buttonsimple",tags:["autodocs"],component:"mdc-buttonsimple",render:b,parameters:{badges:["internal"]},argTypes:{children:{description:"Text label for the button.",control:"text"},ariaStateKey:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},size:{control:"select",options:Object.values(l)},type:{control:"select",options:Object.values(i)},"auto-focus-on-mount":{control:"boolean"},...d,...p}},t={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,size:l[32],type:i.BUTTON,role:m.ROLE,tabIndex:0}};var a,s,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const _=["Example"];export{t as Example,_ as __namedExportsOrder,N as default};
