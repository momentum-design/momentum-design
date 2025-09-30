import"./index-DLACxPF1.js";import{k as o}from"./iframe-DSSNydaC.js";import"./index-BSPq_17-.js";import{c as d,s as p}from"./commonArgTypes-BluK8w5L.js";import"./index-D-FiYTdm.js";import"./preload-helper-C1FmrZbK.js";import"./index-BGTWniqm.js";import"./index-CrzoWpsH.js";import"./index-DTrDRi1E.js";import"./index-CqfQTe1K.js";import"./button.component-CkA2lHen.js";import"./button.constants-Cz0aBL3u.js";import"./buttonsimple.constants-xC2Epio7.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-B8tQZ5CJ.js";import"./keys-hFXe221I.js";import"./DisabledMixin-CVvLVeWc.js";import"./TabIndexMixin-Crv4vJKj.js";import"./button.utils-rNW36Ji7.js";const c=e=>o`
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
`,_={title:"Components/listheader",tags:["autodocs"],component:"mdc-listheader",render:c,argTypes:{...d,...p,"prefix-icon":{control:"text"},"postfix-icon":{control:"text"},"header-text":{control:"text"},disabled:{control:"boolean"},children:{control:{type:"select"},options:["Button","None"],description:"Content for the default slot (e.g., button)"}}},t={args:{"prefix-icon":"placeholder-bold","header-text":"List Header","postfix-icon":"placeholder-bold",children:""}};var r,i,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    'prefix-icon': 'placeholder-bold',
    'header-text': 'List Header',
    'postfix-icon': 'placeholder-bold',
    children: ''
  }
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const v=["Example"];export{t as Example,v as __namedExportsOrder,_ as default};
