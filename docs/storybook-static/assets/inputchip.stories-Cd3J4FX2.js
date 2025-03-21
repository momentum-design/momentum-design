import{i as P,D as M,k as p}from"./lit-element-D5KKan5q.js";import{u as G,C,n as u}from"./index-C9z9WAEj.js";import{h as V}from"./index-BX3Tn-Br.js";import{D as Y}from"./DisabledMixin-CizxPH9K.js";import{I as w}from"./IconNameMixin-CujGSn0t.js";import{T as X,V as z}from"./text.constants-ZF0jM5wn.js";import"./index-D3DhXfcW.js";import"./index-CbJj7ITm.js";import"./index-BuOHTqrx.js";import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as B,s as F}from"./commonArgTypes-BluK8w5L.js";import"./iframe-BYhHLzXf.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./buttonsimple.component-CcsHbiGJ.js";import"./TabIndexMixin-CsrHswKP.js";import"./button.constants-D3lNAbe_.js";import"./button.utils-idYASaaz.js";import"./v4-CQkTLCs1.js";const R=P`
  :host {
    height: 1.5rem;
    gap: 0.25rem;
    padding: 0 0.25rem 0 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid;
    cursor: pointer;

    --mdc-chip-color: var(--mds-color-theme-text-primary-normal);
    --mdc-chip-border-color: var(--mds-color-theme-outline-button-normal);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-default-normal);

    color: var(--mdc-chip-color);
    border-color: var(--mdc-chip-border-color);
    background-color: var(--mdc-chip-background-color);
  }
  
  :host([error]){
    --mdc-chip-border-color: var(--mds-color-theme-outline-cancel-normal);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-error-normal);
  }

  :host([disabled]), :host([disabled]:hover), :host([disabled]:active) {
    --mdc-chip-border-color: var(--mds-color-theme-common-outline-primary-disabled);
    --mdc-chip-background-color: var(--mds-color-theme-background-primary-disabled);
    --mdc-chip-color: var(--mds-color-theme-text-primary-disabled);
    cursor: auto;
  }
`,U=[V,R],W=G.constructTagName("inputchip"),b={TEXT_TYPE:X.BODY_MIDSIZE_REGULAR,TAG_NAME:z.SPAN,CLOSE_ICON:"cancel-bold"};var j=Object.defineProperty,h=(r,e,c,q)=>{for(var o=void 0,m=r.length-1,f;m>=0;m--)(f=r[m])&&(o=f(e,c,o)||o);return o&&j(e,c,o),o};const g=class g extends w(Y(C)){constructor(){super(...arguments),this.label="",this.error=!1,this.clearAriaLabel=""}renderIcon(){return this.iconName?p`
    <mdc-icon 
      name="${this.iconName}" 
      length-unit="rem" 
      size="1"></mdc-icon>
  `:M}handleClose(e){e.stopPropagation();const c=e.constructor;this.dispatchEvent(new c(e.type,e))}render(){return p`
        ${this.renderIcon()}
        <mdc-text part="label" type="${b.TEXT_TYPE}" tagname="${b.TAG_NAME}">${this.label}</mdc-text>
        <mdc-button 
          ?disabled="${this.disabled}"
          variant="tertiary"
          part="close-icon"
          aria-label="${this.clearAriaLabel}"
          prefix-icon="${b.CLOSE_ICON}"
          size="20"
          @click="${this.handleClose}"
        ></mdc-button>
      `}};g.styles=[...C.styles,...U];let l=g;h([u({type:String})],l.prototype,"label");h([u({type:Boolean})],l.prototype,"error");h([u({type:String,attribute:"clear-aria-label"})],l.prototype,"clearAriaLabel");l.register(W);const Z=r=>p`
<mdc-inputchip
  @click="${a("onclick")}"
  @keydown="${a("onkeydown")}"
  @keyup="${a("onkeyup")}"
  @focus="${a("onfocus")}"
  label="${r.label}"
  icon-name="${r["icon-name"]}"
  ?error="${r.error}"
  ?disabled="${r.disabled}"
  clear-aria-label="${r["clear-aria-label"]}"
></mdc-inputchip>`,Cr={title:"Components/chip/input",tags:["autodocs"],component:"mdc-inputchip",render:Z,parameters:{badges:["stable"]},argTypes:{label:{control:"text"},"icon-name":{control:"text"},error:{control:"boolean"},disabled:{control:"boolean"},"clear-aria-label":{control:"text"},...B,...F}},i={args:{label:"Input Chip","clear-aria-label":"Clear",error:!1,disabled:!1}},t={args:{label:"Input Chip","icon-name":"placeholder-bold","clear-aria-label":"Clear",error:!1,disabled:!1}},s={args:{label:"Input Chip","clear-aria-label":"Clear",error:!0,disabled:!1}},n={args:{label:"Input Chip","clear-aria-label":"Clear",error:!1,disabled:!0}},d={render:()=>p`
  <div style="display: flex; gap: 0.5rem;">
    <mdc-inputchip 
      label="Input" 
      icon-name="placeholder-bold" 
      clear-aria-label="Clear"
      @click="${a("click")}"
    ></mdc-inputchip>
    <mdc-inputchip 
      label="Error" 
      icon-name="placeholder-bold" 
      clear-aria-label="Clear" 
      error
      @click="${a("click")}"
    ></mdc-inputchip>
    <mdc-inputchip 
      label="Disabled" 
      icon-name="placeholder-bold" 
      clear-aria-label="Clear" 
      disabled
      @click="${a("click")}"
    ></mdc-inputchip>
  </div>`};var y,k,$;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Input Chip',
    'clear-aria-label': 'Clear',
    error: false,
    disabled: false
  }
}`,...($=(k=i.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var E,v,I;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Input Chip',
    'icon-name': 'placeholder-bold',
    'clear-aria-label': 'Clear',
    error: false,
    disabled: false
  }
}`,...(I=(v=t.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var T,x,A;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Input Chip',
    'clear-aria-label': 'Clear',
    error: true,
    disabled: false
  }
}`,...(A=(x=s.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var S,_,D;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Input Chip',
    'clear-aria-label': 'Clear',
    error: false,
    disabled: true
  }
}`,...(D=(_=n.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var N,L,O;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(O=(L=d.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const yr=["Example","WithIcon","Error","Disabled","StatesAndVariants"];export{n as Disabled,s as Error,i as Example,d as StatesAndVariants,t as WithIcon,yr as __namedExportsOrder,Cr as default};
