import{i as E,k as l}from"./lit-element-D5KKan5q.js";import{u as y,C as R,n as f}from"./index-C9z9WAEj.js";import{h as N,a as S}from"./index-BX3Tn-Br.js";import{b as I,a as x}from"./buttonsimple.component-CcsHbiGJ.js";import{T as $,V as O}from"./text.constants-ZF0jM5wn.js";import"./index-D3DhXfcW.js";import"./index-P21x_s7g.js";import{a as c}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as _,s as w}from"./commonArgTypes-BluK8w5L.js";import{h as L}from"./utils-D1SE5bce.js";import"./DisabledMixin-CizxPH9K.js";import"./TabIndexMixin-CsrHswKP.js";import"./iframe-BL2arnm0.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";const U=E`
  :host {
    height: 1.5rem;
    gap: 0.25rem;
    padding: 0 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid;
    cursor: pointer;
    
    --mdc-chip-color: var(--mds-color-theme-text-primary-normal);
    --mdc-chip-border-color: var(--mds-color-theme-outline-button-normal);
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-default-normal);
    --mdc-chip-icon-color: var(--mds-color-theme-text-secondary-normal);

    border-color: var(--mdc-chip-border-color);
    background: var(--mdc-chip-background-color);
  }

  :host::part(label){
    color: var(--mdc-chip-color);
  }

  :host([variant="neutral"])::part(icon){
    color: var(--mdc-chip-icon-color);
  }
  

  :host([variant="neutral"]:hover){
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-default-hover);
  }

  :host([variant="neutral"]:active){
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-default-active);
  }

  :host([variant="error"])::part(icon){
    --mdc-chip-icon-color: var(--mds-color-theme-text-error-normal);
  }
  
  :host([variant="error"]){
    --mdc-chip-border-color: var(--mds-color-theme-outline-cancel-normal);
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-error-normal);
  }

  :host([variant="error"]:hover){
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-error-hover);
  }

  :host([variant="error"]:active){
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-error-active);
  }

  :host([variant="warning"])::part(icon){
    --mdc-chip-icon-color: var(--mds-color-theme-text-warning-normal);
  }

  :host([variant="warning"]){
    --mdc-chip-border-color: var(--mds-color-theme-outline-warning-normal);
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-warning-normal);
  }

  :host([variant="warning"]:hover){
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-warning-hover);
  }

  :host([variant="warning"]:active){
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-warning-active);
  }

  :host([variant="success"])::part(icon){
    --mdc-chip-icon-color: var(--mds-color-theme-text-success-normal);
  }

  :host([variant="success"]){
    --mdc-chip-border-color: var(--mds-color-theme-outline-join-normal);
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-success-normal);
  }

  :host([variant="success"]:hover){
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-success-hover);
  }

  :host([variant="success"]:active){
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-success-active);
  }

  :host([variant="informational"])::part(icon){
    --mdc-chip-icon-color: var(--mds-color-theme-text-accent-normal);
  }

  :host([variant="informational"]){
    --mdc-chip-border-color: var(--mds-color-theme-outline-theme-normal);
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-theme-normal);
  }

  :host([variant="informational"]:hover){
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-theme-hover);
  }

  :host([variant="informational"]:active){
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-theme-active);
  }
`,V=[N,U,...S()],C=y.constructTagName("alertchip"),o={NEUTRAL:"neutral",ERROR:"error",SUCCESS:"success",WARNING:"warning",INFORMATIONAL:"informational"},e={VARIANT:o.NEUTRAL,TEXT_TYPE:$.BODY_MIDSIZE_REGULAR,TAG_NAME:O.SPAN,SIZE:I[24],ROLE:"button"},G=r=>({[o.ERROR]:"error-legacy-badge-filled",[o.WARNING]:"warning-badge-filled",[o.SUCCESS]:"check-circle-badge-filled",[o.INFORMATIONAL]:"info-badge-filled",[o.NEUTRAL]:"dnd-presence-badge-filled"})[r];var P=Object.defineProperty,T=(r,s,h,j)=>{for(var a=void 0,m=r.length-1,p;m>=0;m--)(p=r[m])&&(a=p(s,h,a)||a);return a&&P(s,h,a),a};const d=class d extends x{constructor(){super(),this.variant=e.VARIANT,this.label="",this.disabled=void 0,this.softDisabled=void 0,this.active=void 0,this.size=e.SIZE,this.role=e.ROLE}render(){return l`
      <mdc-icon part="icon" name="${G(this.variant)}" length-unit="rem" size="1"></mdc-icon>
      <mdc-text part="label" type="${e.TEXT_TYPE}" tagname="${e.TAG_NAME}">${this.label}</mdc-text>
    `}};d.styles=[...R.styles,...V];let t=d;T([f({type:String})],t.prototype,"variant");T([f({type:String})],t.prototype,"label");t.register(C);const M=r=>l`
  <mdc-alertchip 
  @click="${c("onclick")}"
  @keydown="${c("onkeydown")}"
  @keyup="${c("onkeyup")}"
  @focus="${c("onfocus")}"
    variant="${r.variant}"
    label="${r.label}"
  ></mdc-alertchip>`,nr={title:"Work In Progress/chip/alert",tags:["autodocs"],component:"mdc-alertchip",render:M,parameters:{badges:["wip"]},argTypes:{variant:{control:"select",options:Object.values(o)},label:{control:"text"},..._,...w,...L(["soft-disabled","size","role","type","active","disabled"])}},n={args:{variant:o.NEUTRAL,label:"Alert"}},i={render:()=>l`
  <div style="display: flex; gap: 0.5rem;">
    ${Object.values(o).map(r=>l`
      <mdc-alertchip variant="${r}" label="${r}"></mdc-alertchip>
    `)}
  </div>`};var v,u,g;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: VARIANTS.NEUTRAL,
    label: 'Alert'
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,k,A;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:'{\n  render: () => html`\n  <div style="display: flex; gap: 0.5rem;">\n    ${Object.values(VARIANTS).map(variant => html`\n      <mdc-alertchip variant="${variant}" label="${variant}"></mdc-alertchip>\n    `)}\n  </div>`\n}',...(A=(k=i.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};const ir=["Example","AllVariants"];export{i as AllVariants,n as Example,ir as __namedExportsOrder,nr as default};
