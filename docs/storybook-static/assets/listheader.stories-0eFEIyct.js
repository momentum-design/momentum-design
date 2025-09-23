import"./index-Cb0939iD.js";import{k as o}from"./iframe-BkJ5kS8N.js";import"./index-dzAX0o8w.js";import{c as d,s as p}from"./commonArgTypes-BluK8w5L.js";import"./index-B9QnmU1I.js";import"./preload-helper-C1FmrZbK.js";import"./index-D1x4BkfB.js";import"./index-CF79w7L3.js";import"./index-DTrDRi1E.js";import"./index-DPSnH-H_.js";import"./button.component-Cn98geJU.js";import"./button.constants-bHBvS2Vh.js";import"./buttonsimple.constants-DK_uiVFG.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-Cm1y_9ia.js";import"./keys-hFXe221I.js";import"./DisabledMixin-rtnkKzcf.js";import"./TabIndexMixin-Dgc8kQl8.js";import"./button.utils-rNW36Ji7.js";const c=e=>o`
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
