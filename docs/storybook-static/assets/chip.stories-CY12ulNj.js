import"./index-Du2ANAlS.js";import{k as t}from"./lit-element-D5KKan5q.js";import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as $,s as y}from"./commonArgTypes-BluK8w5L.js";import{h as A}from"./utils-CO8B6ZcN.js";import{a as o}from"./chip.component-D798IeZ5.js";import"./index-D3DhXfcW.js";import"./index-C9z9WAEj.js";import"./text.constants-ZF0jM5wn.js";import"./index-8z3Rwwit.js";import"./iframe-Bcrg3ltV.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-CcXofQbA.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";import"./IconNameMixin-CujGSn0t.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./buttonsimple.component-C1CVlJGY.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";const C=e=>t`
  <mdc-chip 
  @click="${r("onclick")}"
  @keydown="${r("onkeydown")}"
  @keyup="${r("onkeyup")}"
  @focus="${r("onfocus")}"
  color="${e.color}" 
  label="${e.label}"
  icon-name="${e["icon-name"]}"
  ?disabled="${e.disabled}"></mdc-chip>`,N={title:"Components/chip/label",tags:["autodocs"],component:"mdc-chip",render:C,parameters:{badges:["stable"]},argTypes:{color:{control:"select",options:Object.values(o)},label:{control:"text"},"icon-name":{control:"text"},disabled:{control:"boolean"},...$,...y,...A(["soft-disabled","size","role","type","active"])}},a={args:{color:o.DEFAULT,label:"Label",disabled:!1}},l={args:{color:o.DEFAULT,label:"Label","icon-name":"placeholder-bold",disabled:!1}},s={args:{color:o.DEFAULT,label:"Label","icon-name":"placeholder-bold",disabled:!0}},c={render:()=>t`
  <div style="display: flex; gap: 0.5rem;">
    ${Object.values(o).map(e=>t`
      <mdc-chip color="${e}" label="${e}"></mdc-chip>
    `)}
  </div>`};var n,i,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    disabled: false
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,d,b;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    'icon-name': 'placeholder-bold',
    disabled: false
  }
}`,...(b=(d=l.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var u,h,L;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    'icon-name': 'placeholder-bold',
    disabled: true
  }
}`,...(L=(h=s.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};var f,g,O;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:'{\n  render: () => html`\n  <div style="display: flex; gap: 0.5rem;">\n    ${Object.values(COLOR).map(color => html`\n      <mdc-chip color="${color}" label="${color}"></mdc-chip>\n    `)}\n  </div>`\n}',...(O=(g=c.parameters)==null?void 0:g.docs)==null?void 0:O.source}}};const P=["Example","WithIcon","Disabled","AllColors"];export{c as AllColors,s as Disabled,a as Example,l as WithIcon,P as __namedExportsOrder,N as default};
