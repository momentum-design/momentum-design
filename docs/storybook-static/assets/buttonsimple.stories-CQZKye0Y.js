import{B as r}from"./buttonsimple.component-Di038Q01.js";import{T as c,a as n,B as i,D as d}from"./buttonsimple.constants-Biy6Bznc.js";import{k as p}from"./lit-element-CHllvULs.js";import{a as o}from"./chunk-D5ZWXAHU-Cy56BkwE.js";import{c as m,s as b}from"./commonArgTypes-BluK8w5L.js";import"./index-HW6KrQZO.js";import"./index-BNZgxKMr.js";import"./v4-CQkTLCs1.js";r.register(c);const T=e=>p`
  <mdc-buttonsimple 
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
  >${e.children}</mdc-buttonsimple>`,B={title:"Internal/buttonsimple",tags:["autodocs"],component:"mdc-buttonsimple",render:T,parameters:{badges:["wip"]},argTypes:{children:{description:"Text label for the button.",control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},size:{control:"select",options:Object.values(n)},type:{control:"select",options:Object.values(i)},...m,...b}},t={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,size:n[32],type:i.BUTTON,role:d.ROLE,tabIndex:0}};var s,a,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const U=["Example"];export{t as Example,U as __namedExportsOrder,B as default};
