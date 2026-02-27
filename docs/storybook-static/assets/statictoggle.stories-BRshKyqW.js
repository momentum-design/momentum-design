import{k as r}from"./iframe-B_1iNO5L.js";import{T as l}from"./toggle.constants-Dv71i2XB.js";import{c as d,s as c}from"./commonArgTypes-BG7EqI50.js";import"./preload-helper-C1FmrZbK.js";import"./index-BKUw_YBw.js";import"./index-DbWVkAPk.js";import"./index-DTrDRi1E.js";import"./DisabledMixin-Y2ty_K_n.js";const i=e=>r`
  <div role="main">
    <mdc-statictoggle
      ?checked="${e.checked}"
      ?disabled="${e.disabled}"
      ?readonly="${e.readonly}"
      ?soft-disabled="${e["soft-disabled"]}"
      size="${e.size}"
    ></mdc-statictoggle>
  </div>
`,T={title:"Components/decorator/statictoggle",tags:["autodocs"],component:"mdc-statictoggle",render:i,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},readonly:{control:"boolean"},"soft-disabled":{control:"boolean"},size:{control:"inline-radio",options:Object.values(l)},...d,...c},parameters:{actions:{disable:!0}}},o={args:{checked:!1,disabled:!1,readonly:!1,"soft-disabled":!1,size:l.DEFAULT}};var s,a,t;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    readonly: false,
    'soft-disabled': false,
    size: TOGGLE_SIZE.DEFAULT
  }
}`,...(t=(a=o.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const k=["Example"];export{o as Example,k as __namedExportsOrder,T as default};
