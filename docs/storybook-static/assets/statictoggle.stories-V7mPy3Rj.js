import{k as r}from"./iframe-BsSOvdiI.js";import{T as l}from"./toggle.constants-Cm3YnLid.js";import{c as d,s as c}from"./commonArgTypes-BG7EqI50.js";import"./preload-helper-C1FmrZbK.js";import"./index-D5ySaiVt.js";import"./index-BD9j_4IV.js";import"./index-DTrDRi1E.js";import"./DisabledMixin-fjLCGnVB.js";const i=e=>r`
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
