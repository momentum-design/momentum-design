import{u as Z,R as j,U as M,X as F,k as f,h as K,n as g}from"./iframe-sRPgz7Dy.js";import{I as V}from"./IconNameMixin-CcpELpGW.js";import{B as W}from"./buttonsimple.component-CdXwdlTg.js";import{D as x,L as G}from"./linksimple.component-CjkpZDiU.js";import"./index-W_UNrl-0.js";import{i as P}from"./manifest-DRrdiy54.js";import{t as o}from"./if-defined-DrlexgLD.js";import{c as X,s as Y}from"./commonArgTypes-BG7EqI50.js";import{h as q}from"./utils-D6nie9pS.js";import"./preload-helper-C1FmrZbK.js";import"./TabIndexMixin-Bd3wWymV.js";import"./DisabledMixin-BHVblWhw.js";import"./DataAriaLabelMixin-CVdG5Iu9.js";import"./index-DD7q-BVW.js";import"./index-DTrDRi1E.js";const H=Z.constructTagName("linkbutton"),s={12:12,14:14,16:16},r={SIZE:s[16],ROLE:j.BUTTON,INLINE:x.INLINE,INVERTED:x.INVERTED},J=e=>{switch(e){case s[12]:return .75;case s[14]:return .875;default:return 1}},Q=M`
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
`,ee=[Q,...F()];var te=Object.defineProperty,h=(e,t,y,ne)=>{for(var n=void 0,v=e.length-1,z;v>=0;v--)(z=e[v])&&(n=z(t,y,n)||n);return n&&te(t,y,n),n};const b=class b extends V(W){constructor(){super(...arguments),this.size=r.SIZE,this.inline=r.INLINE,this.inverted=r.INVERTED}connectedCallback(){super.connectedCallback(),this.active=void 0,this.role=r.ROLE}update(t){super.update(t),t.has("size")&&this.setSize(this.size)}setSize(t){this.setAttribute("size",Object.values(s).includes(t)?`${t}`:r.SIZE.toString())}render(){return f`
      <slot></slot>
      ${this.iconName?f` <mdc-icon name=${this.iconName} size=${J(this.size)} length-unit="rem"></mdc-icon> `:K}
    `}};b.styles=[...G.styles,...ee];let a=b;h([g({type:Number,reflect:!0})],a.prototype,"size");h([g({type:Boolean,reflect:!0})],a.prototype,"inline");h([g({type:Boolean,reflect:!0})],a.prototype,"inverted");a.register(H);const{action:l}=__STORYBOOK_MODULE_ACTIONS__,C=e=>f`<mdc-linkbutton
    @click="${l("onclick")}"
    @keydown="${l("onkeydown")}"
    @focus="${l("onfocus")}"
    @blur="${l("onblur")}"
    ?disabled="${e.disabled}"
    ?soft-disabled="${e["soft-disabled"]}"
    ?inline="${e.inline}"
    ?inverted="${e.inverted}"
    icon-name="${o(e["icon-name"])}"
    size="${o(e.size)}"
    tabindex="${o(e.tabIndex)}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    aria-label="${o(e["aria-label"])}"
    name="${o(e.name)}"
    value="${o(e.value)}"
    >${e.children}</mdc-linkbutton
  >`,U=e=>f`<div style="background-color: var(--mds-color-theme-inverted-background-normal); padding: 8px;">
    ${C(e)}
  </div>`,be={title:"Components/linkbutton",tags:["autodocs"],component:"mdc-linkbutton",render:C,argTypes:{children:{control:"text"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},inline:{control:"boolean"},inverted:{control:"boolean"},"icon-name":{control:"select",options:Object.keys(P)},size:{control:"select",options:Object.values(s)},tabIndex:{control:"number"},"auto-focus-on-mount":{control:"boolean"},"aria-label":{control:"text",description:"Defines an accessible label for the linkbutton for screen readers.",table:{category:"attributes"}},name:{control:"text"},value:{control:"text"},...X,...Y,...q(["active","role","type","ariaStateKey"])}},i={children:"LinkButton",disabled:!1,"soft-disabled":!1,"icon-name":"placeholder-bold",inline:!1,inverted:!1,size:r.SIZE,tabIndex:0,"aria-label":"Link Button"},d={args:{...i}},c={args:{...i,inline:!1,inverted:!1}},m={render:U,args:{...i,inverted:!0,inline:!1}},u={args:{...i,inline:!0,inverted:!1}},p={render:U,args:{...i,inline:!0,inverted:!0}};var k,I,S;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...(S=(I=d.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var E,$,L;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    inline: false,
    inverted: false
  }
}`,...(L=($=c.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var N,B,T;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inverted: true,
    inline: false
  }
}`,...(T=(B=m.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var w,O,A;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    inline: true,
    inverted: false
  }
}`,...(A=(O=u.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var _,D,R;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inline: true,
    inverted: true
  }
}`,...(R=(D=p.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};const ye=["Example","StandaloneLinkButton","StandaloneLinkButtonInverted","InlineLinkButton","InlineLinkButtonInverted"];export{d as Example,u as InlineLinkButton,p as InlineLinkButtonInverted,c as StandaloneLinkButton,m as StandaloneLinkButtonInverted,ye as __namedExportsOrder,be as default};
