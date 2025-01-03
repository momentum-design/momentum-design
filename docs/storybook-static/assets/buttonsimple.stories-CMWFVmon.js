import"./index-CkJK-IP5.js";import{k as i}from"./lit-element-CHllvULs.js";import{c as r,s as d}from"./commonArgTypes-BluK8w5L.js";import{B as l,a as n,D as c}from"./buttonsimple.constants-5FOanXlE.js";import"./index-HW6KrQZO.js";import"./index-CcvxQn6k.js";const p=e=>i`
  <mdc-buttonsimple 
  ?active="${e.active}"
  ?disabled="${e.disabled}"
  ?soft-disabled="${e["soft-disabled"]}"
  size="${e.size}"
  type="${e.type}"
  role="${e.role}"
  tabIndex="${e.tabIndex}"
  >${e.children}</mdc-buttonsimple>`,O={title:"Internal/buttonsimple",tags:["autodocs"],component:"mdc-buttonsimple",render:p,parameters:{badges:["wip"]},argTypes:{children:{description:"Text label for the button.",control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},size:{control:"select",options:Object.values(l)},type:{control:"select",options:Object.values(n)},...r,...d}},t={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,size:l[32],type:n.BUTTON,role:c.ROLE,tabIndex:0}};var o,s,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const x=["Example"];export{t as Example,x as __namedExportsOrder,O as default};
