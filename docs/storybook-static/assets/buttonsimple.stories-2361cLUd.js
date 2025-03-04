import{a as r,T as c,b as n,B as i,D as d}from"./buttonsimple.component-CXHzGrZ-.js";import{k as p}from"./lit-element-CHllvULs.js";import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as m,s as b}from"./commonArgTypes-BluK8w5L.js";import"./index-HW6KrQZO.js";import"./DisabledMixin-DBt9didn.js";import"./FormInternalsMixin-D4P2zbkO.js";import"./index-CEbgplXA.js";import"./v4-CQkTLCs1.js";r.register(c);const T=e=>p`
  <mdc-buttonsimple 
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
  >${e.children}</mdc-buttonsimple>`,U={title:"Internal/buttonsimple",tags:["autodocs"],component:"mdc-buttonsimple",render:T,parameters:{badges:["internal"]},argTypes:{children:{description:"Text label for the button.",control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},size:{control:"select",options:Object.values(n)},type:{control:"select",options:Object.values(i)},...m,...b}},o={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,size:n[32],type:i.BUTTON,role:d.ROLE,tabIndex:0}};var s,a,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(l=(a=o.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const v=["Example"];export{o as Example,v as __namedExportsOrder,U as default};
