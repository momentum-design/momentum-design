import{i as Z,k as u,D as U}from"./lit-element-D5KKan5q.js";import{u as j,n as v}from"./provider.component-BaQC7CJH.js";import{I as F}from"./IconNameMixin-CRlZlTtq.js";import{B as V}from"./buttonsimple.component-CKyEWPbX.js";import{D as z,L as W}from"./linksimple.component-BhKRWe-u.js";import{R as K}from"./roles-CJI3JVG-.js";import{a as M}from"./index-CqVtAZCJ.js";import"./index-ibTCk7Bz.js";import{a as s}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as G,s as P}from"./commonArgTypes-BluK8w5L.js";import{a as q,t as H}from"./utils-CFOyPOhY.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";import"./buttonsimple.constants-An7St6B1.js";import"./if-defined-D5BV9-c0.js";import"./DataAriaLabelMixin-Cpdy3gUS.js";import"./iframe-BCa7iKqm.js";import"../sb-preview/runtime.js";import"./state-C0WmBOuD.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-DWn5NkGG.js";import"./create-context-89xeped_.js";import"./index-DTrDRi1E.js";import"./v4-CQkTLCs1.js";const J=j.constructTagName("linkbutton"),i={12:12,14:14,16:16},o={SIZE:i[16],ROLE:K.BUTTON,INLINE:z.INLINE,INVERTED:z.INVERTED},Q=e=>{switch(e){case i[12]:return .75;case i[14]:return .875;default:return 1}},X=Z`
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
`,Y=[X,...M()];var ee=Object.defineProperty,g=(e,t,b,te)=>{for(var r=void 0,f=e.length-1,y;f>=0;f--)(y=e[f])&&(r=y(t,b,r)||r);return r&&ee(t,b,r),r};const h=class h extends F(V){constructor(){super(...arguments),this.size=o.SIZE,this.inline=o.INLINE,this.inverted=o.INVERTED}connectedCallback(){super.connectedCallback(),this.active=void 0,this.role=o.ROLE}update(t){super.update(t),t.has("size")&&this.setSize(this.size)}setSize(t){this.setAttribute("size",Object.values(i).includes(t)?`${t}`:o.SIZE.toString())}render(){return u`
      <slot></slot>
      ${this.iconName?u` <mdc-icon name=${this.iconName} size=${Q(this.size)} length-unit="rem"></mdc-icon> `:U}
    `}};h.styles=[...W.styles,...Y];let n=h;g([v({type:Number,reflect:!0})],n.prototype,"size");g([v({type:Boolean,reflect:!0})],n.prototype,"inline");g([v({type:Boolean,reflect:!0})],n.prototype,"inverted");n.register(J);const _=e=>u`<mdc-linkbutton
    @click="${s("onclick")}"
    @keydown="${s("onkeydown")}"
    @focus="${s("onfocus")}"
    @blur="${s("onblur")}"
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
  >`,C=e=>u`<div style="background-color: var(--mds-color-theme-inverted-background-normal); padding: 8px;">
    ${_(e)}
  </div>`,Le={title:"Components/linkbutton",tags:["autodocs"],component:"mdc-linkbutton",render:_,parameters:{badges:["stable"]},argTypes:{children:{control:"text"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},inline:{control:"boolean"},inverted:{control:"boolean"},"icon-name":{control:"text"},size:{control:"select",options:Object.values(i)},tabIndex:{control:"number"},"auto-focus-on-mount":{control:"boolean"},...G,...P,...q(["active","role","type","ariaStateKey"]),...H(["--mdc-link-border-radius","--mdc-link-color-active","--mdc-link-color-disabled","--mdc-link-color-hover","--mdc-link-color-normal","--mdc-link-inverted-color-active","--mdc-link-inverted-color-disabled","--mdc-link-inverted-color-hover","--mdc-link-inverted-color-normal"])}},a={children:"LinkButton",disabled:!1,"soft-disabled":!1,"icon-name":"placeholder-bold",inline:!1,inverted:!1,size:o.SIZE,tabIndex:0},l={args:{...a}},d={args:{...a,inline:!1,inverted:!1}},c={render:C,args:{...a,inverted:!0,inline:!1}},m={args:{...a,inline:!0,inverted:!1}},p={render:C,args:{...a,inline:!0,inverted:!0}};var k,x,I;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...(I=(x=l.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var E,S,$;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    inline: false,
    inverted: false
  }
}`,...($=(S=d.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var L,N,B;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inverted: true,
    inline: false
  }
}`,...(B=(N=c.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var w,T,A;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    inline: true,
    inverted: false
  }
}`,...(A=(T=m.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var O,R,D;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inline: true,
    inverted: true
  }
}`,...(D=(R=p.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};const Ne=["Example","StandaloneLinkButton","StandaloneLinkButtonInverted","InlineLinkButton","InlineLinkButtonInverted"];export{l as Example,m as InlineLinkButton,p as InlineLinkButtonInverted,d as StandaloneLinkButton,c as StandaloneLinkButtonInverted,Ne as __namedExportsOrder,Le as default};
