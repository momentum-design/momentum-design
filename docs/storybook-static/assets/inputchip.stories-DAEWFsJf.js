import{i as O,D as M,k as p}from"./lit-element-D5KKan5q.js";import{u as G,C as f,n as h}from"./index-C9z9WAEj.js";import{h as w}from"./index-BX3Tn-Br.js";import{D as V}from"./DisabledMixin-CizxPH9K.js";import{I as Y}from"./IconNameMixin-CujGSn0t.js";import{T as W,V as X}from"./text.constants-ZF0jM5wn.js";import"./index-D3DhXfcW.js";import"./index-P21x_s7g.js";import"./index-vGa-YSJb.js";import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as z,s as B}from"./commonArgTypes-BluK8w5L.js";import"./iframe-BL2arnm0.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./buttonsimple.component-CcsHbiGJ.js";import"./TabIndexMixin-CsrHswKP.js";import"./button.constants-D3lNAbe_.js";import"./button.utils-idYASaaz.js";import"./v4-CQkTLCs1.js";const F=O`
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

  :host(:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-default-hover);
  }
  
  :host(:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-default-active);
  }
  
  :host([error]){
    --mdc-chip-border-color: var(--mds-color-theme-outline-cancel-normal);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-error-normal);
  }

  :host([error]:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-error-hover);
  }

  :host([error]:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-error-active);
  }

  :host([disabled]), :host([disabled]:hover), :host([disabled]:active) {
    --mdc-chip-border-color: var(--mds-color-theme-common-outline-primary-disabled);
    --mdc-chip-background-color: var(--mds-color-theme-background-primary-disabled);
    --mdc-chip-color: var(--mds-color-theme-text-primary-disabled);
    cursor: auto;
  }

  :host::part(close-icon){
    border-radius: 0.25rem;
  }
`,R=[w,F],U=G.constructTagName("inputchip"),b={TEXT_TYPE:W.BODY_MIDSIZE_REGULAR,TAG_NAME:X.SPAN,CLOSE_ICON:"cancel-bold"};var j=Object.defineProperty,u=(r,e,c,q)=>{for(var o=void 0,m=r.length-1,k;m>=0;m--)(k=r[m])&&(o=k(e,c,o)||o);return o&&j(e,c,o),o};const g=class g extends Y(V(f)){constructor(){super(...arguments),this.label="",this.error=!1,this.clearAriaLabel=""}renderIcon(){return this.iconName?p`
    <mdc-icon 
      name="${this.iconName}" 
      length-unit="rem" 
      size="1"></mdc-icon>
  `:M}handleClose(e){e.stopPropagation();const c=e.constructor;this.dispatchEvent(new c(e.type,e))}render(){return p`
        ${this.renderIcon()}
        <mdc-text type="${b.TEXT_TYPE}" tagname="${b.TAG_NAME}">${this.label}</mdc-text>
        <mdc-button 
          ?disabled="${this.disabled}"
          variant="tertiary"
          part="close-icon"
          aria-label="${this.clearAriaLabel}"
          prefix-icon="${b.CLOSE_ICON}"
          size="20"
          @click="${this.handleClose}"
        ></mdc-button>
      `}};g.styles=[...f.styles,...R];let l=g;u([h({type:String})],l.prototype,"label");u([h({type:Boolean})],l.prototype,"error");u([h({type:String,attribute:"clear-aria-label"})],l.prototype,"clearAriaLabel");l.register(U);const Z=r=>p`
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
></mdc-inputchip>`,fr={title:"Work In Progress/chip/input",tags:["autodocs"],component:"mdc-inputchip",render:Z,parameters:{badges:["wip"]},argTypes:{label:{control:"text"},"icon-name":{control:"text"},error:{control:"boolean"},disabled:{control:"boolean"},"clear-aria-label":{control:"text"},...z,...B}},i={args:{label:"Input Chip","clear-aria-label":"Clear",error:!1,disabled:!1}},t={args:{label:"Input Chip","icon-name":"placeholder-bold","clear-aria-label":"Clear",error:!1,disabled:!1}},s={args:{label:"Input Chip","clear-aria-label":"Clear",error:!0,disabled:!1}},n={args:{label:"Input Chip","clear-aria-label":"Clear",error:!1,disabled:!0}},d={render:()=>p`
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
  </div>`};var v,C,y;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Input Chip',
    'clear-aria-label': 'Clear',
    error: false,
    disabled: false
  }
}`,...(y=(C=i.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var $,E,I;t.parameters={...t.parameters,docs:{...($=t.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Input Chip',
    'icon-name': 'placeholder-bold',
    'clear-aria-label': 'Clear',
    error: false,
    disabled: false
  }
}`,...(I=(E=t.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var T,x,A;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(D=(_=n.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var N,L,P;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(P=(L=d.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};const vr=["Example","WithIcon","Error","Disabled","StatesAndVariants"];export{n as Disabled,s as Error,i as Example,d as StatesAndVariants,t as WithIcon,vr as __namedExportsOrder,fr as default};
