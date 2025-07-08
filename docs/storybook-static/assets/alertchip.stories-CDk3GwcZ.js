import{i as E,k as i}from"./lit-element-D5KKan5q.js";import{u as y,C as R,n as f}from"./index-C9z9WAEj.js";import{B as N}from"./buttonsimple.component-DTw2LNsX.js";import{a as S,h as I}from"./index-Cx7wvr8C.js";import{a as x}from"./buttonsimple.constants-CGc1uJX6.js";import{T as $,V as w}from"./index-BrLJ_9IK.js";import"./index-DgVPg-O5.js";import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as O,s as _}from"./commonArgTypes-BluK8w5L.js";import{h as L,t as C}from"./utils-CF1irry3.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./iframe-CgsJliCm.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";const U=E`
  :host {
    height: 1.5rem;
    gap: 0.25rem;
    padding: 0 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid;
    cursor: pointer;
    white-space: nowrap;

    --mdc-chip-color: var(--mds-color-theme-text-primary-normal);
    --mdc-chip-border-color: var(--mds-color-theme-outline-button-normal);
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-default-normal);
    --mdc-chip-icon-color: var(--mds-color-theme-text-secondary-normal);

    border-color: var(--mdc-chip-border-color);
    background: var(--mdc-chip-background-color);
  }

  :host::part(label) {
    color: var(--mdc-chip-color);
  }

  :host::part(icon) {
    color: var(--mdc-chip-icon-color);
  }

  :host([variant='neutral']:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-default-hover);
  }

  :host([variant='neutral']:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-default-active);
  }

  :host([variant='error'])::part(icon) {
    --mdc-chip-icon-color: var(--mds-color-theme-text-error-normal);
  }

  :host([variant='error']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-cancel-normal);
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-error-normal);
  }

  :host([variant='error']:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-error-hover);
  }

  :host([variant='error']:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-error-active);
  }

  :host([variant='warning'])::part(icon) {
    --mdc-chip-icon-color: var(--mds-color-theme-text-warning-normal);
  }

  :host([variant='warning']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-warning-normal);
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-warning-normal);
  }

  :host([variant='warning']:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-warning-hover);
  }

  :host([variant='warning']:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-warning-active);
  }

  :host([variant='success'])::part(icon) {
    --mdc-chip-icon-color: var(--mds-color-theme-text-success-normal);
  }

  :host([variant='success']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-join-normal);
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-success-normal);
  }

  :host([variant='success']:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-success-hover);
  }

  :host([variant='success']:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-success-active);
  }

  :host([variant='informational'])::part(icon) {
    --mdc-chip-icon-color: var(--mds-color-theme-text-accent-normal);
  }

  :host([variant='informational']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-theme-normal);
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-theme-normal);
  }

  :host([variant='informational']:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-theme-hover);
  }

  :host([variant='informational']:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-theme-active);
  }
`,V=[S,U,...I()],G=y.constructTagName("alertchip"),o={NEUTRAL:"neutral",ERROR:"error",SUCCESS:"success",WARNING:"warning",INFORMATIONAL:"informational"},e={VARIANT:o.NEUTRAL,TEXT_TYPE:$.BODY_MIDSIZE_REGULAR,TAG_NAME:w.SPAN,SIZE:x[24],ROLE:"button"},M=r=>({[o.ERROR]:"error-legacy-badge-filled",[o.WARNING]:"warning-badge-filled",[o.SUCCESS]:"check-circle-badge-filled",[o.INFORMATIONAL]:"info-badge-filled",[o.NEUTRAL]:"dnd-presence-badge-filled"})[r];var P=Object.defineProperty,T=(r,s,h,D)=>{for(var a=void 0,m=r.length-1,p;m>=0;m--)(p=r[m])&&(a=p(s,h,a)||a);return a&&P(s,h,a),a};const d=class d extends N{constructor(){super(...arguments),this.variant=e.VARIANT,this.label=""}connectedCallback(){super.connectedCallback(),this.disabled=void 0,this.softDisabled=void 0,this.active=void 0,this.size=e.SIZE,this.role=e.ROLE}render(){return i`
      <mdc-icon part="icon" name="${M(this.variant)}" length-unit="rem" size="1"></mdc-icon>
      <mdc-text part="label" type="${e.TEXT_TYPE}" tagname="${e.TAG_NAME}">${this.label}</mdc-text>
    `}};d.styles=[...R.styles,...V];let c=d;T([f({type:String})],c.prototype,"variant");T([f({type:String})],c.prototype,"label");c.register(G);const j=r=>i` <mdc-alertchip
    @click="${t("onclick")}"
    @keydown="${t("onkeydown")}"
    @keyup="${t("onkeyup")}"
    @focus="${t("onfocus")}"
    variant="${r.variant}"
    label="${r.label}"
  ></mdc-alertchip>`,lr={title:"Components/chip/alert",tags:["autodocs"],component:"mdc-alertchip",render:j,parameters:{badges:["stable"]},argTypes:{variant:{control:"select",options:Object.values(o)},label:{control:"text"},...O,..._,...L(["soft-disabled","size","role","type","active","disabled"]),...C(["--mdc-chip-color","--mdc-chip-icon-color","--mdc-chip-border-color","--mdc-chip-background-color"])}},n={args:{variant:o.NEUTRAL,label:"Alert"}},l={render:()=>i` <div style="display: flex; gap: 0.5rem;">
      ${Object.values(o).map(r=>i` <mdc-alertchip variant="${r}" label="${r}"></mdc-alertchip> `)}
    </div>`};var v,u,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: VARIANTS.NEUTRAL,
    label: 'Alert'
  }
}`,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var g,k,A;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:'{\n  render: () => html` <div style="display: flex; gap: 0.5rem;">\n      ${Object.values(VARIANTS).map(variant => html` <mdc-alertchip variant="${variant}" label="${variant}"></mdc-alertchip> `)}\n    </div>`\n}',...(A=(k=l.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};const ir=["Example","AllVariants"];export{l as AllVariants,n as Example,ir as __namedExportsOrder,lr as default};
