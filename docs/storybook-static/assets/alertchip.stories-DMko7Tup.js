import{S as E,U as y,X as R,u as S,q as N,V as I,c as _,k as t,h as O,G as $,n as T}from"./iframe-YytTiSpJ.js";import{B as x}from"./buttonsimple.component-BVakejB1.js";import"./index-CqFh5GF_.js";import{c as w,s as L}from"./commonArgTypes-BluK8w5L.js";import{a as U}from"./utils-Dd_sfl9-.js";import"./preload-helper-C1FmrZbK.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DFP3Cra7.js";import"./TabIndexMixin-CouquMWg.js";import"./index-DT0cuXBy.js";import"./index-DTrDRi1E.js";const C=E`
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
`,V=[y,C,...R()],G=S.constructTagName("alertchip"),o={NEUTRAL:"neutral",ERROR:"error",SUCCESS:"success",WARNING:"warning",INFORMATIONAL:"informational"},e={VARIANT:o.NEUTRAL,TEXT_TYPE:N.BODY_MIDSIZE_REGULAR,TAG_NAME:I.SPAN,SIZE:_[24],ROLE:"button"},D=r=>({[o.ERROR]:"error-legacy-badge-filled",[o.WARNING]:"warning-badge-filled",[o.SUCCESS]:"check-circle-badge-filled",[o.INFORMATIONAL]:"info-badge-filled",[o.NEUTRAL]:"dnd-presence-badge-filled"})[r];var M=Object.defineProperty,f=(r,i,h,j)=>{for(var a=void 0,m=r.length-1,p;m>=0;m--)(p=r[m])&&(a=p(i,h,a)||a);return a&&M(i,h,a),a};const d=class d extends x{constructor(){super(...arguments),this.variant=e.VARIANT,this.label=""}connectedCallback(){super.connectedCallback(),this.disabled=void 0,this.softDisabled=void 0,this.active=void 0,this.size=e.SIZE,this.role=e.ROLE}render(){return t`
      <mdc-icon part="icon" name="${D(this.variant)}" length-unit="rem" size="1"></mdc-icon>
      ${this.label?t`<mdc-text part="label" type="${e.TEXT_TYPE}" tagname="${e.TAG_NAME}"
            >${this.label}</mdc-text
          >`:O}
    `}};d.styles=[...$.styles,...V];let c=d;f([T({type:String})],c.prototype,"variant");f([T({type:String})],c.prototype,"label");c.register(G);const{action:n}=__STORYBOOK_MODULE_ACTIONS__,P=r=>t` <mdc-alertchip
    @click="${n("onclick")}"
    @keydown="${n("onkeydown")}"
    @keyup="${n("onkeyup")}"
    @focus="${n("onfocus")}"
    variant="${r.variant}"
    label="${r.label}"
    ?auto-focus-on-mount="${r["auto-focus-on-mount"]}"
  ></mdc-alertchip>`,Q={title:"Components/chip/alert",tags:["autodocs"],component:"mdc-alertchip",render:P,argTypes:{variant:{control:"select",options:Object.values(o)},label:{control:"text"},"auto-focus-on-mount":{control:"boolean"},...w,...L,...U(["soft-disabled","size","role","type","active","disabled"])}},l={args:{variant:o.NEUTRAL,label:"Alert"}},s={render:()=>t` <div style="display: flex; gap: 0.5rem;">
      ${Object.values(o).map(r=>t` <mdc-alertchip variant="${r}" label="${r}"></mdc-alertchip> `)}
    </div>`};var v,u,b;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: VARIANTS.NEUTRAL,
    label: 'Alert'
  }
}`,...(b=(u=l.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var g,k,A;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:'{\n  render: () => html` <div style="display: flex; gap: 0.5rem;">\n      ${Object.values(VARIANTS).map(variant => html` <mdc-alertchip variant="${variant}" label="${variant}"></mdc-alertchip> `)}\n    </div>`\n}',...(A=(k=s.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};const rr=["Example","AllVariants"];export{s as AllVariants,l as Example,rr as __namedExportsOrder,Q as default};
