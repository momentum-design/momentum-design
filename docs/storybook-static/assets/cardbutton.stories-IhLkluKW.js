import{i as V,D as k,k as a}from"./lit-element-D5KKan5q.js";import{B}from"./buttonsimple.component-q2YakOka.js";import{a as H,C as z}from"./card.component-SIS7N_u7.js";import{a as j}from"./index-B-GnYs90.js";import{u as W}from"./index-C9z9WAEj.js";import"./index-D_ZheRMr.js";import{V as b}from"./index-BrLJ_9IK.js";import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as _,s as q}from"./commonArgTypes-BluK8w5L.js";import{h as Z}from"./utils-CF1irry3.js";import{V as w,O as u,D as t}from"./CardAndDialogFooterMixin-Bxo6tU4P.js";import{B as P}from"./button.constants-D0QAbDxL.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./iframe-D0gGuhQW.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";import"./link.constants-CqyNsepP.js";const Q=V`
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
`,X=[Q,...j()],A=class A extends H(B){connectedCallback(){super.connectedCallback(),this.active=void 0,this.size=void 0}renderHeader(){return this.cardTitle?a`<div part="header">${this.renderIcon()} ${this.renderTitle()}</div>`:k}render(){return a`
      ${this.renderImage()}
      <div part="body">
        ${this.renderHeader()}
        <slot name="before-body"></slot>
        <slot name="body"></slot>
        <slot name="after-body"></slot>
      </div>
    `}};A.styles=[...z.styles,...X];let p=A;const J=W.constructTagName("cardbutton");p.register(J);const K=e=>a` <mdc-cardbutton
    @click="${r("onclick")}"
    @keydown="${r("onkeydown")}"
    @keyup="${r("onkeyup")}"
    @focus="${r("onfocus")}"
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
  >`,ft={title:"Components/card/cardbutton",tags:["autodocs"],component:"mdc-cardbutton",render:K,parameters:{badges:["stable"]},argTypes:{variant:{control:"select",options:Object.values(w)},orientation:{control:"select",options:Object.values(u)},"card-title":{control:"text"},subtitle:{control:"text"},"image-src":{control:"text"},"image-alt":{control:"text"},"icon-name":{control:"text"},"title-tag-name":{control:"select",options:Object.values(b)},"subtitle-tag-name":{control:"select",options:Object.values(b)},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},tabIndex:{control:"number"},type:{control:"select",options:Object.values(P)},...Z(["children","active","size"]),..._,...q}},o=a`<mdc-text slot="body" type="body-midsize-medium" tagname="span"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate aliquet risus, eget auctor ante egestas
  facilisis. Curabitur malesuada tempor pulvinar. Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at.
  Praesent gravida dui diam, non elementum risus laoreet vitae. Sed sed nunc ullamcorper, porttitor dui id, posuere
  justo. Curabitur laoreet sem ut pharetra hendrerit. Vivamus mattis ligula eget imperdiet tempor. Ut in massa luctus
  lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text
>`,i={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/320x200","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:o,disabled:!1,"soft-disabled":!1}},l={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/160x300","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:u.HORIZONTAL,children:o}},n={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:o}},s={args:{"image-src":"https://placehold.co/320x200","image-alt":"Image Alt",variant:t.VARIANT,orientation:t.ORIENTATION,children:o}},c={args:{"image-src":"https://placehold.co/320x200","image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"icon-name":"placeholder-bold",variant:t.VARIANT,orientation:t.ORIENTATION}},d={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/320x200","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:a` <mdc-text slot="before-body" type="body-midsize-medium" tagname="span"
        >Content Before Body</mdc-text
      >
      <img src="https://placehold.co/100x50" alt="Image Alt" slot="before-body" />
      ${o}`}},m={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/160x560","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:u.HORIZONTAL,children:a` <img src="https://placehold.co/100x50" alt="Image Alt" slot="after-body" />
      <mdc-text slot="after-body" type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
      ${o}`}};var T,g,h;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': 'https://placehold.co/320x200',
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
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var N,I,E;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': 'https://placehold.co/160x300',
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: ORIENTATIONS.HORIZONTAL,
    children: defaultChildren
  }
}`,...(E=(I=l.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var y,S,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(f=(S=n.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var v,O,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    'image-src': 'https://placehold.co/320x200',
    'image-alt': 'Image Alt',
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    children: defaultChildren
  }
}`,...(x=(O=s.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var R,C,L;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    'image-src': 'https://placehold.co/320x200',
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
    'image-src': 'https://placehold.co/320x200',
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: DEFAULTS.ORIENTATION,
    children: html\` <mdc-text slot="before-body" type="body-midsize-medium" tagname="span"
        >Content Before Body</mdc-text
      >
      <img src="https://placehold.co/100x50" alt="Image Alt" slot="before-body" />
      \${defaultChildren}\`
  }
}`,...(U=(D=d.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};var F,G,M;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': 'https://placehold.co/160x560',
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: ORIENTATIONS.HORIZONTAL,
    children: html\` <img src="https://placehold.co/100x50" alt="Image Alt" slot="after-body" />
      <mdc-text slot="after-body" type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
      \${defaultChildren}\`
  }
}`,...(M=(G=m.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};const vt=["Example","HorizontalCard","CardWithoutImage","CardWithoutHeader","CardWithoutBody","ContentBeforeBody","ContentAfterBody"];export{c as CardWithoutBody,s as CardWithoutHeader,n as CardWithoutImage,m as ContentAfterBody,d as ContentBeforeBody,i as Example,l as HorizontalCard,vt as __namedExportsOrder,ft as default};
