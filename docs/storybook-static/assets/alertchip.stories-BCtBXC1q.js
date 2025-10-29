import{S,U as y,X as O,u as x,q as _,V as $,c as w,k as c,h as L,E as U,n as I}from"./iframe-CeK4lsRG.js";import{B as C}from"./buttonsimple.component-B7bWPcFd.js";import{I as M}from"./IconNameMixin-DmxgUU3Q.js";import"./index-DGUdAI4Q.js";import{c as V,s as D}from"./commonArgTypes-BluK8w5L.js";import{a as F}from"./utils-Dd_sfl9-.js";import"./preload-helper-C1FmrZbK.js";import"./TabIndexMixin-WyJrwR-3.js";import"./DisabledMixin-S32os9Wv.js";import"./index-DBPc6w47.js";import"./index-DTrDRi1E.js";const G=S`
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
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  :host::part(icon) {
    color: var(--mdc-chip-icon-color);
    flex-shrink: 0;
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
`,P=[y,G,...O()],j=x.constructTagName("alertchip"),o={NEUTRAL:"neutral",ERROR:"error",SUCCESS:"success",WARNING:"warning",INFORMATIONAL:"informational"},a={VARIANT:o.NEUTRAL,TEXT_TYPE:_.BODY_MIDSIZE_REGULAR,TAG_NAME:$.SPAN,SIZE:w[24],ROLE:"button"},B=r=>({[o.ERROR]:"error-legacy-badge-filled",[o.WARNING]:"warning-badge-filled",[o.SUCCESS]:"check-circle-badge-filled",[o.INFORMATIONAL]:"info-badge-filled",[o.NEUTRAL]:"dnd-presence-badge-filled"})[r];var Y=Object.defineProperty,R=(r,m,p,X)=>{for(var e=void 0,d=r.length-1,u;d>=0;d--)(u=r[d])&&(e=u(m,p,e)||e);return e&&Y(m,p,e),e};const h=class h extends M(C){constructor(){super(...arguments),this.variant=a.VARIANT,this.label=""}connectedCallback(){super.connectedCallback(),this.disabled=void 0,this.softDisabled=void 0,this.active=void 0,this.size=a.SIZE,this.role=a.ROLE}render(){return c`
      <mdc-icon part="icon" name="${this.iconName||B(this.variant)}" length-unit="rem" size="1"></mdc-icon>
      ${this.label?c`<mdc-text part="label" type="${a.TEXT_TYPE}" tagname="${a.TAG_NAME}"
            >${this.label}</mdc-text
          >`:L}
    `}};h.styles=[...U.styles,...P];let t=h;R([I({type:String})],t.prototype,"variant");R([I({type:String})],t.prototype,"label");t.register(j);const{action:n}=__STORYBOOK_MODULE_ACTIONS__,W=r=>c` <mdc-alertchip
    @click="${n("onclick")}"
    @keydown="${n("onkeydown")}"
    @keyup="${n("onkeyup")}"
    @focus="${n("onfocus")}"
    variant="${r.variant}"
    label="${r.label}"
    icon-name="${r["icon-name"]}"
    ?auto-focus-on-mount="${r["auto-focus-on-mount"]}"
  ></mdc-alertchip>`,cr={title:"Components/chip/alertchip",tags:["autodocs"],component:"mdc-alertchip",render:W,argTypes:{variant:{control:"select",options:Object.values(o)},label:{control:"text"},"icon-name":{control:"text"},"auto-focus-on-mount":{control:"boolean"},...V,...D,...F(["soft-disabled","size","role","type","active","disabled"])}},l={args:{variant:o.NEUTRAL,label:"Alert"}},i={args:{variant:o.INFORMATIONAL,label:"Announcement","icon-name":"announcement-regular"}},s={render:()=>c` <div style="display: flex; gap: 0.5rem;">
      ${Object.values(o).map(r=>c` <mdc-alertchip variant="${r}" label="${r}"></mdc-alertchip> `)}
    </div>`};var v,b,g;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: VARIANTS.NEUTRAL,
    label: 'Alert'
  }
}`,...(g=(b=l.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var A,k,f;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: VARIANTS.INFORMATIONAL,
    label: 'Announcement',
    'icon-name': 'announcement-regular'
  }
}`,...(f=(k=i.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var T,N,E;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:'{\n  render: () => html` <div style="display: flex; gap: 0.5rem;">\n      ${Object.values(VARIANTS).map(variant => html` <mdc-alertchip variant="${variant}" label="${variant}"></mdc-alertchip> `)}\n    </div>`\n}',...(E=(N=s.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};const tr=["Example","WithIcon","AllVariants"];export{s as AllVariants,l as Example,i as WithIcon,tr as __namedExportsOrder,cr as default};
