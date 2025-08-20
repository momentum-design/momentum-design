import{i as V,D as k,k as a}from"./lit-element-D5KKan5q.js";import{B}from"./buttonsimple.component-UJ4pbvCi.js";import{a as H,C as z}from"./card.component-eIYH7VK1.js";import{a as j}from"./index-B-GnYs90.js";import{u as W}from"./provider.component-DrWB4byV.js";import"./index-DmTbUWqt.js";import{V as T}from"./index-DeEenWCE.js";import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as _,s as q}from"./commonArgTypes-BluK8w5L.js";import{a as Z,t as w}from"./utils-CFOyPOhY.js";import{V as P,O as u,D as t}from"./FooterMixin-BQCuuCJE.js";import{B as Q}from"./button.constants-BBlkZKjZ.js";import"./property-Bj3TGwkg.js";import"./keys-hFXe221I.js";import"./DisabledMixin-B-Cnza7-.js";import"./TabIndexMixin-DEwGeIeI.js";import"./buttonsimple.constants-CVV9o_W6.js";import"./roles-CJI3JVG-.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./iframe-Bi_Ol3W8.js";import"../sb-preview/runtime.js";import"./state-CmYk530Z.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";import"./link.constants-DNTydABS.js";const X=V`
  :host {
    cursor: pointer;
    user-select: none;
  }

  :host(:hover) {
    background-color: var(--mds-color-theme-background-primary-hover);
  }

  :host(:active) {
    background-color: var(--mds-color-theme-background-primary-active);
  }

  :host([disabled]) {
    background-color: var(--mds-color-theme-background-primary-ghost);
    color: var(--mds-color-theme-text-primary-disabled);
  }

  :host([disabled])::part(image) {
    opacity: 0.5;
  }
`,J=[X,...j()],A=class A extends H(B){connectedCallback(){super.connectedCallback(),this.active=void 0,this.size=void 0}renderHeader(){return this.cardTitle?a`<div part="header">${this.renderIcon()} ${this.renderTitle()}</div>`:k}render(){return a`
      ${this.renderImage()}
      <div part="body">
        ${this.renderHeader()}
        <slot name="before-body"></slot>
        <slot name="body"></slot>
        <slot name="after-body"></slot>
      </div>
    `}};A.styles=[...z.styles,...J];let p=A;const K=W.constructTagName("cardbutton");p.register(K);const Y=e=>a` <mdc-cardbutton
    @click="${i("onclick")}"
    @keydown="${i("onkeydown")}"
    @keyup="${i("onkeyup")}"
    @focus="${i("onfocus")}"
    variant="${e.variant}"
    ?disabled="${e.disabled}"
    ?soft-disabled="${e["soft-disabled"]}"
    orientation="${e.orientation}"
    card-title="${e["card-title"]}"
    subtitle="${e.subtitle}"
    image-src="${e["image-src"]}"
    image-alt="${e["image-alt"]}"
    icon-name="${e["icon-name"]}"
    title-tag-name="${e["title-tag-name"]}"
    subtitle-tag-name="${e["subtitle-tag-name"]}"
    type="${e.type}"
    role="${e.role}"
    tabIndex="${e.tabIndex}"
    class="${e.class}"
    style="${e.style}"
    >${e.children}</mdc-cardbutton
  >`,Rt={title:"Components/card/cardbutton",tags:["autodocs"],component:"mdc-cardbutton",render:Y,parameters:{badges:["stable"]},argTypes:{variant:{control:"select",options:Object.values(P)},orientation:{control:"select",options:Object.values(u)},"card-title":{control:"text"},subtitle:{control:"text"},"image-src":{control:"text"},"image-alt":{control:"text"},"icon-name":{control:"text"},"title-tag-name":{control:"select",options:Object.values(T)},"subtitle-tag-name":{control:"select",options:Object.values(T)},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},tabIndex:{control:"number"},type:{control:"select",options:Object.values(Q)},...Z(["children","active","size"]),...w(["--mdc-card-width"]),..._,...q}},o=a`<mdc-text slot="body" type="body-midsize-medium" tagname="span"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate aliquet risus, eget auctor ante egestas
  facilisis. Curabitur malesuada tempor pulvinar. Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at.
  Praesent gravida dui diam, non elementum risus laoreet vitae. Sed sed nunc ullamcorper, porttitor dui id, posuere
  justo. Curabitur laoreet sem ut pharetra hendrerit. Vivamus mattis ligula eget imperdiet tempor. Ut in massa luctus
  lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text
>`,r={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/100x100","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:o,disabled:!1,"soft-disabled":!1}},l={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/100x100","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:u.HORIZONTAL,children:o}},n={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:o}},s={args:{"image-src":"https://placehold.co/100x100","image-alt":"Image Alt",variant:t.VARIANT,orientation:t.ORIENTATION,children:o}},c={args:{"image-src":"https://placehold.co/100x100","image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"icon-name":"placeholder-bold",variant:t.VARIANT,orientation:t.ORIENTATION}},d={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/100x100","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:a`<div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src="https://placehold.co/100x100" alt="Image Alt" />
      </div>
      ${o}`}},m={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/100x100","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:u.HORIZONTAL,children:a`<div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src="https://placehold.co/100x100" alt="Image Alt" />
      </div>
      ${o}`}};var g,b,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': 'https://placehold.co/100x100',
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: DEFAULTS.ORIENTATION,
    children: defaultChildren,
    disabled: false,
    'soft-disabled': false
  }
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var N,I,E;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': 'https://placehold.co/100x100',
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: ORIENTATIONS.HORIZONTAL,
    children: defaultChildren
  }
}`,...(E=(I=l.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var v,y,S;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: DEFAULTS.ORIENTATION,
    children: defaultChildren
  }
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var f,x,O;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    'image-src': 'https://placehold.co/100x100',
    'image-alt': 'Image Alt',
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    children: defaultChildren
  }
}`,...(O=(x=s.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var R,C,L;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    'image-src': 'https://placehold.co/100x100',
    'image-alt': 'Image Alt',
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION
  }
}`,...(L=(C=c.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var $,D,U;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': 'https://placehold.co/100x100',
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: DEFAULTS.ORIENTATION,
    children: html\`<div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src="https://placehold.co/100x100" alt="Image Alt" />
      </div>
      \${defaultChildren}\`
  }
}`,...(U=(D=d.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};var F,G,M;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': 'https://placehold.co/100x100',
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: ORIENTATIONS.HORIZONTAL,
    children: html\`<div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src="https://placehold.co/100x100" alt="Image Alt" />
      </div>
      \${defaultChildren}\`
  }
}`,...(M=(G=m.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};const Ct=["Example","HorizontalCard","CardWithoutImage","CardWithoutHeader","CardWithoutBody","ContentBeforeBody","ContentAfterBody"];export{c as CardWithoutBody,s as CardWithoutHeader,n as CardWithoutImage,m as ContentAfterBody,d as ContentBeforeBody,r as Example,l as HorizontalCard,Ct as __namedExportsOrder,Rt as default};
