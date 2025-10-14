import"./index-CsF6Sz_H.js";import{k as o}from"./iframe-Ckq14th5.js";import"./index-BbKtROZO.js";import{c as d,s as c}from"./commonArgTypes-BluK8w5L.js";import"./index-BYN-6AzR.js";import"./preload-helper-C1FmrZbK.js";import"./index-CA7IxMHH.js";import"./index-DTrDRi1E.js";import"./button.component-BBjCZ0hb.js";import"./buttonsimple.component-DsGx8Kzo.js";import"./keys-hFXe221I.js";import"./DisabledMixin-D9zNYipp.js";import"./TabIndexMixin-CQNowTQO.js";import"./button.utils-rNW36Ji7.js";const s=e=>o`
  <mdc-listheader
    prefix-icon="${e["prefix-icon"]}"
    postfix-icon="${e["postfix-icon"]}"
    header-text="${e["header-text"]}"
    ?disabled="${e.disabled}"
    class="${e.class}"
    style="${e.style}"
  >
    ${e.children==="Button"?o`<mdc-button size="24" variant="secondary" ?disabled="${e.disabled}">${e.children}</mdc-button>`:""}
  </mdc-listheader>
`,A={title:"Components/listheader",tags:["autodocs"],component:"mdc-listheader",render:s,argTypes:{...d,...c,"prefix-icon":{control:"text"},"postfix-icon":{control:"text"},"header-text":{control:"text"},disabled:{control:"boolean"},children:{control:{type:"select"},options:["Button","None"],description:"Content for the default slot (e.g., button)"}}},t={args:{"prefix-icon":"placeholder-bold","header-text":"List Header","postfix-icon":"placeholder-bold",children:""}};var r,i,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    'prefix-icon': 'placeholder-bold',
    'header-text': 'List Header',
    'postfix-icon': 'placeholder-bold',
    children: ''
  }
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const B=["Example"];export{t as Example,B as __namedExportsOrder,A as default};
