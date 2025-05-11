import"./index-BtYAKQJG.js";import{k as t}from"./lit-element-D5KKan5q.js";import{a as n}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as T,s as V}from"./commonArgTypes-BluK8w5L.js";import"./index-C9z9WAEj.js";import"./index-CcXofQbA.js";import"./DisabledMixin-BZruwOeC.js";import"./IconNameMixin-CujGSn0t.js";import"./text.constants-ZF0jM5wn.js";import"./index-D3DhXfcW.js";import"./index-Gvtn2Gcx.js";import"./iframe-BvdIjTUX.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./index-DxcbYocs.js";import"./button.component-DF6F2T9a.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./buttonsimple.component-C1CVlJGY.js";import"./TabIndexMixin-CsrHswKP.js";import"./button.utils-rNW36Ji7.js";import"./v4-CQkTLCs1.js";const W=e=>t`
<mdc-inputchip
@remove="${n("remove")}"
  label="${e.label}"
  icon-name="${e["icon-name"]}"
  ?error="${e.error}"
  ?disabled="${e.disabled}"
  clear-aria-label="${e["clear-aria-label"]}"
></mdc-inputchip>`,le={title:"Components/chip/input",tags:["autodocs"],component:"mdc-inputchip",render:W,parameters:{badges:["stable"]},argTypes:{label:{control:"text"},"icon-name":{control:"text"},error:{control:"boolean"},disabled:{control:"boolean"},"clear-aria-label":{control:"text"},...T,...V}},r={args:{label:"Input Chip","clear-aria-label":"Clear",error:!1,disabled:!1}},a={args:{label:"Input Chip","icon-name":"placeholder-bold","clear-aria-label":"Clear",error:!1,disabled:!1}},l={args:{label:"Input Chip","clear-aria-label":"Clear",error:!0,disabled:!1}},o={args:{label:"Input Chip","clear-aria-label":"Clear",error:!1,disabled:!0}},c={render:()=>t`
  <div style="display: flex; gap: 0.5rem;">
    <mdc-inputchip 
      label="Input" 
      icon-name="placeholder-bold" 
      clear-aria-label="Clear"
      @click="${n("click")}"
    ></mdc-inputchip>
    <mdc-inputchip 
      label="Error" 
      icon-name="placeholder-bold" 
      clear-aria-label="Clear" 
      error
      @click="${n("click")}"
    ></mdc-inputchip>
    <mdc-inputchip 
      label="Disabled" 
      icon-name="placeholder-bold" 
      clear-aria-label="Clear" 
      disabled
      @click="${n("click")}"
    ></mdc-inputchip>
  </div>`},i={render:()=>t`
    <mdc-inputchip
      @remove="${D=>{var p;(p=D.target)==null||p.remove()}}"
      label="Value"
      icon-name="placeholder-bold"
      clear-aria-label="Clear"
    ></mdc-inputchip>`};var s,m,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Input Chip',
    'clear-aria-label': 'Clear',
    error: false,
    disabled: false
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var b,u,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Input Chip',
    'icon-name': 'placeholder-bold',
    'clear-aria-label': 'Clear',
    error: false,
    disabled: false
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var C,g,f;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Input Chip',
    'clear-aria-label': 'Clear',
    error: true,
    disabled: false
  }
}`,...(f=(g=l.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,k,$;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Input Chip',
    'clear-aria-label': 'Clear',
    error: false,
    disabled: true
  }
}`,...($=(k=o.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var I,x,E;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => html\`
  <div style="display: flex; gap: 0.5rem;">
    <mdc-inputchip 
      label="Input" 
      icon-name="placeholder-bold" 
      clear-aria-label="Clear"
      @click="\${action('click')}"
    ></mdc-inputchip>
    <mdc-inputchip 
      label="Error" 
      icon-name="placeholder-bold" 
      clear-aria-label="Clear" 
      error
      @click="\${action('click')}"
    ></mdc-inputchip>
    <mdc-inputchip 
      label="Disabled" 
      icon-name="placeholder-bold" 
      clear-aria-label="Clear" 
      disabled
      @click="\${action('click')}"
    ></mdc-inputchip>
  </div>\`
}`,...(E=(x=c.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var y,S,A;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const removeChip = (e: Event) => {
      (e.target as HTMLElement)?.remove();
    };
    return html\`
    <mdc-inputchip
      @remove="\${removeChip}"
      label="Value"
      icon-name="placeholder-bold"
      clear-aria-label="Clear"
    ></mdc-inputchip>\`;
  }
}`,...(A=(S=i.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};const oe=["Example","WithIcon","Error","Disabled","StatesAndVariants","WithRemove"];export{o as Disabled,l as Error,r as Example,c as StatesAndVariants,a as WithIcon,i as WithRemove,oe as __namedExportsOrder,le as default};
