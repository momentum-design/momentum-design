import{i as E,k as c,D as y}from"./lit-element-D5KKan5q.js";import{u as R,C as N,n as f}from"./index-C9z9WAEj.js";import{B as S}from"./buttonsimple.component-q2YakOka.js";import{h as I,a as x}from"./index-B-GnYs90.js";import{a as $}from"./buttonsimple.constants-CGc1uJX6.js";import{T as w,V as O}from"./index-BrLJ_9IK.js";import"./index-jvv5-dFJ.js";import{a as n}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as _,s as L}from"./commonArgTypes-BluK8w5L.js";import{h as C,t as U}from"./utils-CF1irry3.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./iframe-BZV36bcQ.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";const V=E`
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
`,G=[I,V,...x()],D=R.constructTagName("alertchip"),o={NEUTRAL:"neutral",ERROR:"error",SUCCESS:"success",WARNING:"warning",INFORMATIONAL:"informational"},e={VARIANT:o.NEUTRAL,TEXT_TYPE:w.BODY_MIDSIZE_REGULAR,TAG_NAME:O.SPAN,SIZE:$[24],ROLE:"button"},M=r=>({[o.ERROR]:"error-legacy-badge-filled",[o.WARNING]:"warning-badge-filled",[o.SUCCESS]:"check-circle-badge-filled",[o.INFORMATIONAL]:"info-badge-filled",[o.NEUTRAL]:"dnd-presence-badge-filled"})[r];var P=Object.defineProperty,T=(r,s,h,F)=>{for(var a=void 0,m=r.length-1,p;m>=0;m--)(p=r[m])&&(a=p(s,h,a)||a);return a&&P(s,h,a),a};const d=class d extends S{constructor(){super(...arguments),this.variant=e.VARIANT,this.label=""}connectedCallback(){super.connectedCallback(),this.disabled=void 0,this.softDisabled=void 0,this.active=void 0,this.size=e.SIZE,this.role=e.ROLE}render(){return c`
      <mdc-icon part="icon" name="${M(this.variant)}" length-unit="rem" size="1"></mdc-icon>
      ${this.label?c`<mdc-text part="label" type="${e.TEXT_TYPE}" tagname="${e.TAG_NAME}"
            >${this.label}</mdc-text
          >`:y}
    `}};d.styles=[...N.styles,...G];let t=d;T([f({type:String})],t.prototype,"variant");T([f({type:String})],t.prototype,"label");t.register(D);const j=r=>c` <mdc-alertchip
    @click="${n("onclick")}"
    @keydown="${n("onkeydown")}"
    @keyup="${n("onkeyup")}"
    @focus="${n("onfocus")}"
    variant="${r.variant}"
    label="${r.label}"
  ></mdc-alertchip>`,ir={title:"Components/chip/alert",tags:["autodocs"],component:"mdc-alertchip",render:j,parameters:{badges:["stable"]},argTypes:{variant:{control:"select",options:Object.values(o)},label:{control:"text"},..._,...L,...C(["soft-disabled","size","role","type","active","disabled"]),...U(["--mdc-chip-color","--mdc-chip-icon-color","--mdc-chip-border-color","--mdc-chip-background-color"])}},l={args:{variant:o.NEUTRAL,label:"Alert"}},i={render:()=>c` <div style="display: flex; gap: 0.5rem;">
      ${Object.values(o).map(r=>c` <mdc-alertchip variant="${r}" label="${r}"></mdc-alertchip> `)}
    </div>`};var v,u,b;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: VARIANTS.NEUTRAL,
    label: 'Alert'
  }
}`,...(b=(u=l.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var g,k,A;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:'{\n  render: () => html` <div style="display: flex; gap: 0.5rem;">\n      ${Object.values(VARIANTS).map(variant => html` <mdc-alertchip variant="${variant}" label="${variant}"></mdc-alertchip> `)}\n    </div>`\n}',...(A=(k=i.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};const sr=["Example","AllVariants"];export{i as AllVariants,l as Example,sr as __namedExportsOrder,ir as default};
