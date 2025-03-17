import{C as $,T as y,a as o}from"./chip.component-_IIpo63b.js";import"./index-D3DhXfcW.js";import"./index-P21x_s7g.js";import{k as t}from"./lit-element-D5KKan5q.js";import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as A,s as T}from"./commonArgTypes-BluK8w5L.js";import{h as C}from"./utils-D1SE5bce.js";import"./index-C9z9WAEj.js";import"./index-BX3Tn-Br.js";import"./IconNameMixin-CujGSn0t.js";import"./buttonsimple.component-CcsHbiGJ.js";import"./DisabledMixin-CizxPH9K.js";import"./TabIndexMixin-CsrHswKP.js";import"./text.constants-ZF0jM5wn.js";import"./iframe-BL2arnm0.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";$.register(y);const E=e=>t`
  <mdc-chip 
  @click="${r("onclick")}"
  @keydown="${r("onkeydown")}"
  @keyup="${r("onkeyup")}"
  @focus="${r("onfocus")}"
  color="${e.color}" 
  label="${e.label}"
  icon-name="${e["icon-name"]}"
  ?disabled="${e.disabled}"></mdc-chip>`,J={title:"Work In Progress/chip/label",tags:["autodocs"],component:"mdc-chip",render:E,parameters:{badges:["wip"]},argTypes:{color:{control:"select",options:Object.values(o)},label:{control:"text"},"icon-name":{control:"text"},disabled:{control:"boolean"},...A,...T,...C(["soft-disabled","size","role","type","active"])}},a={args:{color:o.DEFAULT,label:"Label",disabled:!1}},l={args:{color:o.DEFAULT,label:"Label","icon-name":"placeholder-bold",disabled:!1}},s={args:{color:o.DEFAULT,label:"Label","icon-name":"placeholder-bold",disabled:!0}},c={render:()=>t`
  <div style="display: flex; gap: 0.5rem;">
    ${Object.values(o).map(e=>t`
      <mdc-chip color="${e}" label="${e}"></mdc-chip>
    `)}
  </div>`};var i,n,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    disabled: false
  }
}`,...(p=(n=a.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var m,d,b;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(L=(h=s.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};var g,f,O;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:'{\n  render: () => html`\n  <div style="display: flex; gap: 0.5rem;">\n    ${Object.values(COLOR).map(color => html`\n      <mdc-chip color="${color}" label="${color}"></mdc-chip>\n    `)}\n  </div>`\n}',...(O=(f=c.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};const K=["Example","WithIcon","Disabled","AllColors"];export{c as AllColors,s as Disabled,a as Example,l as WithIcon,K as __namedExportsOrder,J as default};
