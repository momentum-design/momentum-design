import{u as U,W as Z,S as W,X as j,k as p,h as F,n as v}from"./iframe-DlUA9Lme.js";import{I as K}from"./IconNameMixin-BxglfIEY.js";import{B as M}from"./buttonsimple.component-DbCI_knu.js";import{D as z,L as V}from"./linksimple.component-l3FnsRqu.js";import"./index-DWTl0clH.js";import{c as G,s as P}from"./commonArgTypes-BluK8w5L.js";import{a as X,t as Y}from"./utils-CFOyPOhY.js";import"./preload-helper-C1FmrZbK.js";import"./keys-hFXe221I.js";import"./DisabledMixin-CAO-9s6U.js";import"./TabIndexMixin-D2-rjBj7.js";import"./if-defined-sRFM4mFi.js";import"./DataAriaLabelMixin-zzpBu2FW.js";import"./index-BLWS0bNq.js";import"./index-DTrDRi1E.js";const q=U.constructTagName("linkbutton"),s={12:12,14:14,16:16},o={SIZE:s[16],ROLE:Z.BUTTON,INLINE:z.INLINE,INVERTED:z.INVERTED},H=e=>{switch(e){case s[12]:return .75;case s[14]:return .875;default:return 1}},J=W`
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
`,Q=[J,...j()];var ee=Object.defineProperty,g=(e,t,b,te)=>{for(var n=void 0,f=e.length-1,y;f>=0;f--)(y=e[f])&&(n=y(t,b,n)||n);return n&&ee(t,b,n),n};const h=class h extends K(M){constructor(){super(...arguments),this.size=o.SIZE,this.inline=o.INLINE,this.inverted=o.INVERTED}connectedCallback(){super.connectedCallback(),this.active=void 0,this.role=o.ROLE}update(t){super.update(t),t.has("size")&&this.setSize(this.size)}setSize(t){this.setAttribute("size",Object.values(s).includes(t)?`${t}`:o.SIZE.toString())}render(){return p`
      <slot></slot>
      ${this.iconName?p` <mdc-icon name=${this.iconName} size=${H(this.size)} length-unit="rem"></mdc-icon> `:F}
    `}};h.styles=[...V.styles,...Q];let r=h;g([v({type:Number,reflect:!0})],r.prototype,"size");g([v({type:Boolean,reflect:!0})],r.prototype,"inline");g([v({type:Boolean,reflect:!0})],r.prototype,"inverted");r.register(q);const{action:i}=__STORYBOOK_MODULE_ACTIONS__,R=e=>p`<mdc-linkbutton
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
  </div>`,he={title:"Components/linkbutton",tags:["autodocs"],component:"mdc-linkbutton",render:R,argTypes:{children:{control:"text"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},inline:{control:"boolean"},inverted:{control:"boolean"},"icon-name":{control:"text"},size:{control:"select",options:Object.values(s)},tabIndex:{control:"number"},"auto-focus-on-mount":{control:"boolean"},...G,...P,...X(["active","role","type","ariaStateKey"]),...Y(["--mdc-link-border-radius","--mdc-link-color-active","--mdc-link-color-disabled","--mdc-link-color-hover","--mdc-link-color-normal","--mdc-link-inverted-color-active","--mdc-link-inverted-color-disabled","--mdc-link-inverted-color-hover","--mdc-link-inverted-color-normal"])}},a={children:"LinkButton",disabled:!1,"soft-disabled":!1,"icon-name":"placeholder-bold",inline:!1,inverted:!1,size:o.SIZE,tabIndex:0},l={args:{...a}},d={args:{...a,inline:!1,inverted:!1}},c={render:C,args:{...a,inverted:!0,inline:!1}},m={args:{...a,inline:!0,inverted:!1}},u={render:C,args:{...a,inline:!0,inverted:!0}};var k,x,I;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...(I=(x=l.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var S,E,$;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(D=(_=u.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const be=["Example","StandaloneLinkButton","StandaloneLinkButtonInverted","InlineLinkButton","InlineLinkButtonInverted"];export{l as Example,m as InlineLinkButton,u as InlineLinkButtonInverted,d as StandaloneLinkButton,c as StandaloneLinkButtonInverted,be as __namedExportsOrder,he as default};
