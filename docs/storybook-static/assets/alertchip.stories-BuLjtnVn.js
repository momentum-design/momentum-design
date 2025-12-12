import{U as S,W as O,X as x,u as _,T as $,V as w,a as L,R as C,k as t,h as U,F as M,n as R}from"./iframe-Dihsx-NL.js";import{B as V}from"./buttonsimple.component-D3KCa39w.js";import{I as F}from"./IconNameMixin-lWfER01s.js";import"./index-DAxnXaXz.js";import{i as B}from"./manifest-BmzYojFK.js";import{t as h}from"./if-defined-D-bzpMf3.js";import{c as D,s as G}from"./commonArgTypes-BG7EqI50.js";import{h as j,a as P}from"./utils-D6nie9pS.js";import"./preload-helper-C1FmrZbK.js";import"./TabIndexMixin-B9Csws3O.js";import"./DisabledMixin-BvD2odSx.js";import"./index-CGtjRWZl.js";import"./index-DTrDRi1E.js";const W=S`
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

  /* High Contrast Mode */
  @media (forced-colors: active) {
    :host([variant='neutral'])::part(icon) {
      --mdc-chip-icon-color: ButtonText;
    }
  }
`,Y=[O,W,...x()],X=_.constructTagName("alertchip"),o={NEUTRAL:"neutral",ERROR:"error",SUCCESS:"success",WARNING:"warning",INFORMATIONAL:"informational"},a={VARIANT:o.NEUTRAL,TEXT_TYPE:$.BODY_MIDSIZE_REGULAR,TAG_NAME:w.SPAN,SIZE:L[24],ROLE:C.BUTTON},Z=r=>({[o.ERROR]:"error-legacy-badge-filled",[o.INFORMATIONAL]:"info-badge-filled",[o.NEUTRAL]:"dnd-presence-badge-filled",[o.SUCCESS]:"check-circle-badge-filled",[o.WARNING]:"warning-badge-filled"})[r];var z=Object.defineProperty,y=(r,m,u,H)=>{for(var e=void 0,d=r.length-1,v;d>=0;d--)(v=r[d])&&(e=v(m,u,e)||e);return e&&z(m,u,e),e};const p=class p extends F(V){constructor(){super(...arguments),this.variant=a.VARIANT}connectedCallback(){super.connectedCallback(),this.disabled=void 0,this.softDisabled=void 0,this.active=void 0,this.size=a.SIZE,this.role=a.ROLE}render(){return t`
      <mdc-icon part="icon" name="${this.iconName||Z(this.variant)}" length-unit="rem" size="1"></mdc-icon>
      ${this.label?t`<mdc-text part="label" type="${a.TEXT_TYPE}" tagname="${a.TAG_NAME}"
            >${this.label}</mdc-text
          >`:U}
    `}};p.styles=[...M.styles,...Y];let c=p;y([R({type:String,reflect:!0})],c.prototype,"variant");y([R({type:String})],c.prototype,"label");c.register(X);const{action:n}=__STORYBOOK_MODULE_ACTIONS__,K=r=>t` <mdc-alertchip
    @click="${n("onclick")}"
    @keydown="${n("onkeydown")}"
    @keyup="${n("onkeyup")}"
    @focus="${n("onfocus")}"
    variant="${h(r.variant)}"
    label="${h(r.label)}"
    icon-name="${h(r["icon-name"])}"
    ?auto-focus-on-mount="${r["auto-focus-on-mount"]}"
  ></mdc-alertchip>`,mr={title:"Components/chip/alertchip",tags:["autodocs"],component:"mdc-alertchip",render:K,argTypes:{variant:{control:"select",options:Object.values(o)},label:{control:"text"},"icon-name":{control:"select",options:Object.keys(B)},"auto-focus-on-mount":{control:"boolean"},...D,...G,...j(["soft-disabled","size","role","type","active","disabled","name","value","tabIndex","ariaStateKey"])}},l={args:{variant:o.NEUTRAL,label:"Alert"}},i={args:{variant:o.INFORMATIONAL,label:"Announcement","icon-name":"announcement-regular"}},s={render:()=>t` <div style="display: flex; gap: 0.5rem;">
      ${Object.values(o).map(r=>t` <mdc-alertchip variant="${r}" label="${r}"></mdc-alertchip> `)}
    </div>`,...P()};var b,g,A;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: VARIANTS.NEUTRAL,
    label: 'Alert'
  }
}`,...(A=(g=l.parameters)==null?void 0:g.docs)==null?void 0:A.source}}};var k,f,T;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: VARIANTS.INFORMATIONAL,
    label: 'Announcement',
    'icon-name': 'announcement-regular'
  }
}`,...(T=(f=i.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var N,E,I;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:'{\n  render: () => html` <div style="display: flex; gap: 0.5rem;">\n      ${Object.values(VARIANTS).map(variant => html` <mdc-alertchip variant="${variant}" label="${variant}"></mdc-alertchip> `)}\n    </div>`,\n  ...hideAllControls()\n}',...(I=(E=s.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const dr=["Example","WithIcon","AllVariants"];export{s as AllVariants,l as Example,i as WithIcon,dr as __namedExportsOrder,mr as default};
