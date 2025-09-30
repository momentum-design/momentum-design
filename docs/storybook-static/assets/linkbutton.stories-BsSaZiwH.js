import{u as U,i as Z,k as p,D as j,n as v}from"./iframe-D-08lnMy.js";import{I as F}from"./IconNameMixin-CPMlvtV0.js";import{B as K}from"./buttonsimple.component-CR82t0Wb.js";import{D as z,L as M}from"./linksimple.component-4UWR2aa-.js";import{R as V}from"./roles-CJI3JVG-.js";import{a as W}from"./index-DLkDgkt0.js";import"./index-IIsCSytv.js";import{c as G,s as P}from"./commonArgTypes-BluK8w5L.js";import{a as Y,t as q}from"./utils-CFOyPOhY.js";import"./preload-helper-C1FmrZbK.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DXbj9uc5.js";import"./TabIndexMixin-BhqEAyT5.js";import"./buttonsimple.constants-CXhRTk6O.js";import"./if-defined-DcyjgjZk.js";import"./DataAriaLabelMixin-pmRAtT1w.js";import"./index-DSmo-PZh.js";import"./index-DTrDRi1E.js";const H=U.constructTagName("linkbutton"),i={12:12,14:14,16:16},r={SIZE:i[16],ROLE:V.BUTTON,INLINE:z.INLINE,INVERTED:z.INVERTED},J=e=>{switch(e){case i[12]:return .75;case i[14]:return .875;default:return 1}},Q=Z`
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
`,X=[Q,...W()];var ee=Object.defineProperty,g=(e,t,b,te)=>{for(var o=void 0,f=e.length-1,y;f>=0;f--)(y=e[f])&&(o=y(t,b,o)||o);return o&&ee(t,b,o),o};const h=class h extends F(K){constructor(){super(...arguments),this.size=r.SIZE,this.inline=r.INLINE,this.inverted=r.INVERTED}connectedCallback(){super.connectedCallback(),this.active=void 0,this.role=r.ROLE}update(t){super.update(t),t.has("size")&&this.setSize(this.size)}setSize(t){this.setAttribute("size",Object.values(i).includes(t)?`${t}`:r.SIZE.toString())}render(){return p`
      <slot></slot>
      ${this.iconName?p` <mdc-icon name=${this.iconName} size=${J(this.size)} length-unit="rem"></mdc-icon> `:j}
    `}};h.styles=[...M.styles,...X];let n=h;g([v({type:Number,reflect:!0})],n.prototype,"size");g([v({type:Boolean,reflect:!0})],n.prototype,"inline");g([v({type:Boolean,reflect:!0})],n.prototype,"inverted");n.register(H);const{action:a}=__STORYBOOK_MODULE_ACTIONS__,D=e=>p`<mdc-linkbutton
    @click="${a("onclick")}"
    @keydown="${a("onkeydown")}"
    @focus="${a("onfocus")}"
    @blur="${a("onblur")}"
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
    ${D(e)}
  </div>`,ze={title:"Components/linkbutton",tags:["autodocs"],component:"mdc-linkbutton",render:D,argTypes:{children:{control:"text"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},inline:{control:"boolean"},inverted:{control:"boolean"},"icon-name":{control:"text"},size:{control:"select",options:Object.values(i)},tabIndex:{control:"number"},"auto-focus-on-mount":{control:"boolean"},...G,...P,...Y(["active","role","type","ariaStateKey"]),...q(["--mdc-link-border-radius","--mdc-link-color-active","--mdc-link-color-disabled","--mdc-link-color-hover","--mdc-link-color-normal","--mdc-link-inverted-color-active","--mdc-link-inverted-color-disabled","--mdc-link-inverted-color-hover","--mdc-link-inverted-color-normal"])}},s={children:"LinkButton",disabled:!1,"soft-disabled":!1,"icon-name":"placeholder-bold",inline:!1,inverted:!1,size:r.SIZE,tabIndex:0},l={args:{...s}},d={args:{...s,inline:!1,inverted:!1}},c={render:C,args:{...s,inverted:!0,inline:!1}},m={args:{...s,inline:!0,inverted:!1}},u={render:C,args:{...s,inline:!0,inverted:!0}};var k,x,I;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(A=(w=m.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var O,_,R;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inline: true,
    inverted: true
  }
}`,...(R=(_=u.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};const ke=["Example","StandaloneLinkButton","StandaloneLinkButtonInverted","InlineLinkButton","InlineLinkButtonInverted"];export{l as Example,m as InlineLinkButton,u as InlineLinkButtonInverted,d as StandaloneLinkButton,c as StandaloneLinkButtonInverted,ke as __namedExportsOrder,ze as default};
