import"./index-DbN3cmCQ.js";import{k as o}from"./iframe-BsXEur3E.js";import"./index-8Gnz77xp.js";import{c as d,s as c}from"./commonArgTypes-BluK8w5L.js";import"./index-Dx-dfjAZ.js";import"./preload-helper-C1FmrZbK.js";import"./index-B8Q5kWEL.js";import"./index-DTrDRi1E.js";import"./button.component-vWXmlh1n.js";import"./buttonsimple.component-CgU8-rfD.js";import"./TabIndexMixin-DvuoSTvP.js";import"./DisabledMixin-Be0iqgvH.js";import"./button.utils-rNW36Ji7.js";const s=e=>o`
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
`,k={title:"Components/listheader",tags:["autodocs"],component:"mdc-listheader",render:s,argTypes:{...d,...c,"prefix-icon":{control:"text"},"postfix-icon":{control:"text"},"header-text":{control:"text"},disabled:{control:"boolean"},children:{control:{type:"select"},options:["Button","None"],description:"Content for the default slot (e.g., button)"}}},t={args:{"prefix-icon":"placeholder-bold","header-text":"List Header","postfix-icon":"placeholder-bold",children:""}};var r,i,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    'prefix-icon': 'placeholder-bold',
    'header-text': 'List Header',
    'postfix-icon': 'placeholder-bold',
    children: ''
  }
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const A=["Example"];export{t as Example,A as __namedExportsOrder,k as default};
