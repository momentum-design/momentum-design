import{a as r,T as c,b as n,B as i,D as d}from"./buttonsimple.component-9hW3yvQZ.js";import{k as p}from"./lit-element-D5KKan5q.js";import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{t as m}from"./if-defined-D5BV9-c0.js";import{c as b,s as T}from"./commonArgTypes-BluK8w5L.js";import"./index-C9z9WAEj.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-MA1r3zrt.js";import"./v4-CQkTLCs1.js";r.register(c);const f=e=>p` <mdc-buttonsimple
    @click="${t("onclick")}"
    @keydown="${t("onkeydown")}"
    @keyup="${t("onkeyup")}"
    @focus="${t("onfocus")}"
    ?active="${e.active}"
    ?disabled="${e.disabled}"
    ?soft-disabled="${e["soft-disabled"]}"
    size="${e.size}"
    type="${e.type}"
    role="${e.role}"
    tabIndex="${e.tabIndex}"
    ariaStateKey="${m(e.ariaStateKey)}"
    >${e.children}</mdc-buttonsimple
  >`,v={title:"Internal/buttonsimple",tags:["autodocs"],component:"mdc-buttonsimple",render:f,parameters:{badges:["internal"]},argTypes:{children:{description:"Text label for the button.",control:"text"},ariaStateKey:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},size:{control:"select",options:Object.values(n)},type:{control:"select",options:Object.values(i)},...b,...T}},o={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,size:n[32],type:i.BUTTON,role:d.ROLE,tabIndex:0}};var a,s,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const I=["Example"];export{o as Example,I as __namedExportsOrder,v as default};
