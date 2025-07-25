import{i as Z,k as u,D as U}from"./lit-element-D5KKan5q.js";import{u as j,n as g}from"./index-C9z9WAEj.js";import{I as V}from"./IconNameMixin-CujGSn0t.js";import{B as W}from"./buttonsimple.component-CHHctxKG.js";import{L as F}from"./link.component-CnXE6lpN.js";import{R as K}from"./roles-BH_hBfTz.js";import{D as z}from"./linksimple.component-Co560Rby.js";import"./index-B1F6ryiU.js";import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as M,s as G}from"./commonArgTypes-BluK8w5L.js";import{h as P,t as q}from"./utils-CF1irry3.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./keys-Hz01Ianf.js";import"./buttonsimple.constants-wHSLNcjv.js";import"./index-B-GnYs90.js";import"./link.constants-CqyNsepP.js";import"./iframe-DbyPoBUR.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";const H=j.constructTagName("linkbutton"),s={12:12,14:14,16:16},n={SIZE:s[16],ROLE:K.BUTTON,INLINE:z.INLINE,INVERTED:z.INVERTED},J=e=>{switch(e){case s[12]:return .75;case s[14]:return .875;default:return 1}},Q=Z`
  :host {
    --mdc-link-color-disabled: var(--mds-color-theme-text-primary-disabled);
    gap: 0.25rem;
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

  :host([soft-disabled]) {
    color: var(--mdc-link-color-disabled);
  }
`,X=[Q];var Y=Object.defineProperty,h=(e,t,b,ee)=>{for(var r=void 0,f=e.length-1,y;f>=0;f--)(y=e[f])&&(r=y(t,b,r)||r);return r&&Y(t,b,r),r};const v=class v extends V(W){constructor(){super(...arguments),this.size=n.SIZE,this.inline=n.INLINE,this.inverted=n.INVERTED}connectedCallback(){super.connectedCallback(),this.active=void 0,this.role=n.ROLE}update(t){super.update(t),t.has("size")&&this.setSize(this.size)}setSize(t){this.setAttribute("size",Object.values(s).includes(t)?`${t}`:n.SIZE.toString())}render(){return u`
      <slot></slot>
      ${this.iconName?u` <mdc-icon name=${this.iconName} size=${J(this.size)} length-unit="rem"></mdc-icon> `:U}
    `}};v.styles=[...F.styles,...X];let o=v;h([g({type:Number,reflect:!0})],o.prototype,"size");h([g({type:Boolean,reflect:!0})],o.prototype,"inline");h([g({type:Boolean,reflect:!0})],o.prototype,"inverted");o.register(H);const _=e=>u`<mdc-linkbutton
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
    ?autofocus="${e.autofocus}"
    aria-label="${e["aria-label"]}"
    >${e.children}</mdc-linkbutton>`,C=e=>u`<div style="background-color: var(--mds-color-theme-inverted-background-normal); padding: 8px;">
    ${_(e)}
  </div>`,Se={title:"Components/linkbutton",tags:["autodocs"],component:"mdc-linkbutton",render:_,parameters:{badges:["stable"]},argTypes:{children:{control:"text"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},inline:{control:"boolean"},inverted:{control:"boolean"},"icon-name":{control:"text"},size:{control:"select",options:Object.values(s)},tabIndex:{control:"number"},autofocus:{control:"boolean"},...M,...G,...P(["active","role","type","ariaStateKey"]),...q(["--mdc-link-border-radius","--mdc-link-color-active","--mdc-link-color-disabled","--mdc-link-color-hover","--mdc-link-color-normal","--mdc-link-inverted-color-active","--mdc-link-inverted-color-disabled","--mdc-link-inverted-color-hover","--mdc-link-inverted-color-normal"])}},a={children:"LinkButton",disabled:!1,"soft-disabled":!1,"icon-name":"placeholder-bold",inline:!1,inverted:!1,size:n.SIZE,tabIndex:0},l={args:{...a}},d={args:{...a,inline:!1,inverted:!1}},c={render:C,args:{...a,inverted:!0,inline:!1}},m={args:{...a,inline:!0,inverted:!1}},p={render:C,args:{...a,inline:!0,inverted:!0}};var x,k,I;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...(I=(k=l.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var E,S,$;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(A=(T=m.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var O,D,R;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inline: true,
    inverted: true
  }
}`,...(R=(D=p.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};const $e=["Example","StandaloneLinkButton","StandaloneLinkButtonInverted","InlineLinkButton","InlineLinkButtonInverted"];export{l as Example,m as InlineLinkButton,p as InlineLinkButtonInverted,d as StandaloneLinkButton,c as StandaloneLinkButtonInverted,$e as __namedExportsOrder,Se as default};
