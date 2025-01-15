import{a as o}from"./chunk-D5ZWXAHU-CgQFgVhR.js";import{k as r}from"./lit-element-CHllvULs.js";import{c,s as d}from"./commonArgTypes-BluK8w5L.js";import{B as n,a as i,D as p}from"./buttonsimple.constants-5FOanXlE.js";import"./index-HW6KrQZO.js";import"./index-BW6Y21yA.js";import"./v4-CQkTLCs1.js";const m=e=>r`
  <mdc-buttonsimple 
  @click="${o("onClick")}"
  @keydown="${o("onKeyDown")}"
  @keyup="${o("onKeyUp")}"
  @focus="${o("onFocus")}"
  ?active="${e.active}"
  ?disabled="${e.disabled}"
  ?soft-disabled="${e["soft-disabled"]}"
  size="${e.size}"
  type="${e.type}"
  role="${e.role}"
  tabIndex="${e.tabIndex}"
  >${e.children}</mdc-buttonsimple>`,O={title:"Internal/buttonsimple",tags:["autodocs"],component:"mdc-buttonsimple",render:m,parameters:{badges:["wip"]},argTypes:{children:{description:"Text label for the button.",control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},size:{control:"select",options:Object.values(n)},type:{control:"select",options:Object.values(i)},...c,...d}},t={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,size:n[32],type:i.BUTTON,role:p.ROLE,tabIndex:0}};var s,a,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const x=["Example"];export{t as Example,x as __namedExportsOrder,O as default};
