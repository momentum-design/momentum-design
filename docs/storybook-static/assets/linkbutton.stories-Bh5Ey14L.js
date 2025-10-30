import{u as U,W as Z,S as W,X as j,k as p,h as F,n as v}from"./iframe-MeD3DPBw.js";import{I as K}from"./IconNameMixin-ChGCKbSR.js";import{B as M}from"./buttonsimple.component-UbwWwZAi.js";import{D as z,L as V}from"./linksimple.component-BqXTflck.js";import"./index-Dh2wrkbT.js";import{c as G,s as P}from"./commonArgTypes-BluK8w5L.js";import{a as X}from"./utils-Dd_sfl9-.js";import"./preload-helper-C1FmrZbK.js";import"./TabIndexMixin-Bo6VnUsU.js";import"./DisabledMixin-BCertKWZ.js";import"./if-defined-CUdZ4DdS.js";import"./DataAriaLabelMixin-C_qShqfV.js";import"./index-MLR-_8aL.js";import"./index-DTrDRi1E.js";const Y=U.constructTagName("linkbutton"),s={12:12,14:14,16:16},r={SIZE:s[16],ROLE:Z.BUTTON,INLINE:z.INLINE,INVERTED:z.INVERTED},q=e=>{switch(e){case s[12]:return .75;case s[14]:return .875;default:return 1}},H=W`
  :host {
    gap: 0.25rem;
    cursor: pointer;
    text-decoration: none;
    outline: none;
    display: inline-flex;
    align-items: center;
    color: var(--mdc-link-color-normal);
  }

  :host([inverted]) {
    color: var(--mdc-link-inverted-color-normal);
  }

  :host([size='16']) {
    font-size: var(--mds-font-apps-body-large-regular-font-size);
    font-weight: var(--mds-font-apps-body-large-regular-font-weight);
    line-height: var(--mds-font-apps-body-large-regular-line-height);
    text-decoration: var(--mds-font-apps-body-large-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-large-regular-text-case);
  }

  :host([size='14']) {
    font-size: var(--mds-font-apps-body-midsize-regular-font-size);
    font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
    line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-regular-text-case);
  }

  :host([size='12']) {
    font-size: var(--mds-font-apps-body-small-regular-font-size);
    font-weight: var(--mds-font-apps-body-small-regular-font-weight);
    line-height: var(--mds-font-apps-body-small-regular-line-height);
    text-decoration: var(--mds-font-apps-body-small-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-small-regular-text-case);
  }

  :host([size='16']:hover),
  :host([size='16']:active),
  :host([size='16'][inline]) {
    font-size: var(--mds-font-apps-body-large-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-large-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-large-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-large-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-large-regular-underline-text-case);
  }

  :host([size='14']:hover),
  :host([size='14']:active),
  :host([size='14'][inline]) {
    font-size: var(--mds-font-apps-body-midsize-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-midsize-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-midsize-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-regular-underline-text-case);
  }

  :host([size='12']:hover),
  :host([size='12']:active),
  :host([size='12'][inline]) {
    font-size: var(--mds-font-apps-body-small-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-small-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-small-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-small-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-small-regular-underline-text-case);
  }

  :host(:not([disabled]):hover) {
    color: var(--mdc-link-color-hover);
  }

  :host(:not([disabled]):active) {
    color: var(--mdc-link-color-active);
  }

  :host([inverted]:not([disabled]):hover) {
    color: var(--mdc-link-inverted-color-hover);
  }

  :host([inverted]:not([disabled]):active) {
    color: var(--mdc-link-inverted-color-active);
  }

  :host([disabled]) {
    color: var(--mdc-link-color-disabled);
    pointer-events: none;
    text-decoration: none;
  }

  :host([inverted][disabled]) {
    color: var(--mdc-link-inverted-color-disabled);
  }

  :host([soft-disabled]) {
    color: var(--mdc-link-color-disabled);
    pointer-events: none;
  }
`,J=[H,...j()];var Q=Object.defineProperty,g=(e,t,b,ee)=>{for(var n=void 0,f=e.length-1,y;f>=0;f--)(y=e[f])&&(n=y(t,b,n)||n);return n&&Q(t,b,n),n};const h=class h extends K(M){constructor(){super(...arguments),this.size=r.SIZE,this.inline=r.INLINE,this.inverted=r.INVERTED}connectedCallback(){super.connectedCallback(),this.active=void 0,this.role=r.ROLE}update(t){super.update(t),t.has("size")&&this.setSize(this.size)}setSize(t){this.setAttribute("size",Object.values(s).includes(t)?`${t}`:r.SIZE.toString())}render(){return p`
      <slot></slot>
      ${this.iconName?p` <mdc-icon name=${this.iconName} size=${q(this.size)} length-unit="rem"></mdc-icon> `:F}
    `}};h.styles=[...V.styles,...J];let o=h;g([v({type:Number,reflect:!0})],o.prototype,"size");g([v({type:Boolean,reflect:!0})],o.prototype,"inline");g([v({type:Boolean,reflect:!0})],o.prototype,"inverted");o.register(Y);const{action:i}=__STORYBOOK_MODULE_ACTIONS__,R=e=>p`<mdc-linkbutton
    @click="${i("onclick")}"
    @keydown="${i("onkeydown")}"
    @focus="${i("onfocus")}"
    @blur="${i("onblur")}"
    ?disabled="${e.disabled}"
    ?soft-disabled="${e["soft-disabled"]}"
    ?inline="${e.inline}"
    ?inverted="${e.inverted}"
    icon-name="${e["icon-name"]}"
    size="${e.size}"
    tabindex="${e.tabIndex}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    aria-label="${e["aria-label"]}"
    >${e.children}</mdc-linkbutton
  >`,C=e=>p`<div style="background-color: var(--mds-color-theme-inverted-background-normal); padding: 8px;">
    ${R(e)}
  </div>`,ve={title:"Components/linkbutton",tags:["autodocs"],component:"mdc-linkbutton",render:R,argTypes:{children:{control:"text"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},inline:{control:"boolean"},inverted:{control:"boolean"},"icon-name":{control:"text"},size:{control:"select",options:Object.values(s)},tabIndex:{control:"number"},"auto-focus-on-mount":{control:"boolean"},...G,...P,...X(["active","role","type","ariaStateKey"])}},a={children:"LinkButton",disabled:!1,"soft-disabled":!1,"icon-name":"placeholder-bold",inline:!1,inverted:!1,size:r.SIZE,tabIndex:0},l={args:{...a}},d={args:{...a,inline:!1,inverted:!1}},c={render:C,args:{...a,inverted:!0,inline:!1}},m={args:{...a,inline:!0,inverted:!1}},u={render:C,args:{...a,inline:!0,inverted:!0}};var x,k,I;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...(I=(k=l.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var S,E,$;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    inline: false,
    inverted: false
  }
}`,...($=(E=d.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var L,N,B;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inverted: true,
    inline: false
  }
}`,...(B=(N=c.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var T,w,A;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    inline: true,
    inverted: false
  }
}`,...(A=(w=m.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var O,_,D;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inline: true,
    inverted: true
  }
}`,...(D=(_=u.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const ge=["Example","StandaloneLinkButton","StandaloneLinkButtonInverted","InlineLinkButton","InlineLinkButtonInverted"];export{l as Example,m as InlineLinkButton,u as InlineLinkButtonInverted,d as StandaloneLinkButton,c as StandaloneLinkButtonInverted,ge as __namedExportsOrder,ve as default};
