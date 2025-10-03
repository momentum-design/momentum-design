import{S as B,X as k,h as _,k as i,u as H,V as b,B as z}from"./iframe-Bmqk5ncS.js";import{B as j}from"./buttonsimple.component-DJ5naDiX.js";import{a as W,C as q}from"./card.component-Dif9ETfv.js";import"./index-BMN--PIx.js";import{i as a}from"./imageFixtures-CD4avj2q.js";import{c as Z,s as w}from"./commonArgTypes-BluK8w5L.js";import{a as P,t as X}from"./utils-CFOyPOhY.js";import{V as K,O as g,D as t}from"./FooterMixin-8AjGxESk.js";import"./preload-helper-C1FmrZbK.js";import"./keys-hFXe221I.js";import"./DisabledMixin-CJC0_YR8.js";import"./TabIndexMixin-CoFbKfFN.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./index-Bo7GamiG.js";import"./index-DTrDRi1E.js";import"./link.constants-CRDwEYBm.js";const Q=B`
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
`,Y=[Q,...k()],T=class T extends W(j){connectedCallback(){super.connectedCallback(),this.active=void 0,this.size=void 0}renderHeader(){return this.cardTitle?i`<div part="header">${this.renderIcon()} ${this.renderTitle()}</div>`:_}render(){return i`
      ${this.renderImage()}
      <div part="body">
        ${this.renderHeader()}
        <slot name="before-body"></slot>
        <slot name="body"></slot>
        <slot name="after-body"></slot>
      </div>
    `}};T.styles=[...q.styles,...Y];let A=T;const J=H.constructTagName("cardbutton");A.register(J);const{action:o}=__STORYBOOK_MODULE_ACTIONS__,tt=e=>i` <mdc-cardbutton
    @click="${o("onclick")}"
    @keydown="${o("onkeydown")}"
    @keyup="${o("onkeyup")}"
    @focus="${o("onfocus")}"
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
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    >${e.children}</mdc-cardbutton
  >`,Nt={title:"Components/card/cardbutton",tags:["autodocs"],component:"mdc-cardbutton",render:tt,argTypes:{variant:{control:"select",options:Object.values(K)},orientation:{control:"select",options:Object.values(g)},"card-title":{control:"text"},subtitle:{control:"text"},"image-src":{control:"text"},"image-alt":{control:"text"},"icon-name":{control:"text"},"title-tag-name":{control:"select",options:Object.values(b)},"subtitle-tag-name":{control:"select",options:Object.values(b)},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},tabIndex:{control:"number"},type:{control:"select",options:Object.values(z)},"auto-focus-on-mount":{control:"boolean"},...P(["children","active","size"]),...X(["--mdc-card-width"]),...Z,...w}},r=i`<mdc-text slot="body" type="body-midsize-medium" tagname="span"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate aliquet risus, eget auctor ante egestas
  facilisis. Curabitur malesuada tempor pulvinar. Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at.
  Praesent gravida dui diam, non elementum risus laoreet vitae. Sed sed nunc ullamcorper, porttitor dui id, posuere
  justo. Curabitur laoreet sem ut pharetra hendrerit. Vivamus mattis ligula eget imperdiet tempor. Ut in massa luctus
  lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text
>`,n={args:{"card-title":"Title",subtitle:"Subtitle","image-src":a.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:r,disabled:!1,"soft-disabled":!1}},l={args:{"card-title":"Title",subtitle:"Subtitle","image-src":a.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:g.HORIZONTAL,children:r}},s={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:r}},d={args:{"image-src":a.card,"image-alt":"Image Alt",variant:t.VARIANT,orientation:t.ORIENTATION,children:r}},c={args:{"image-src":a.card,"image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"icon-name":"placeholder-bold",variant:t.VARIANT,orientation:t.ORIENTATION}},m={args:{"card-title":"Title",subtitle:"Subtitle","image-src":a.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:i`<div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src=${a.card} alt="Image Alt" />
      </div>
      ${r}`}},u={args:{"card-title":"Title",subtitle:"Subtitle","image-src":a.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:g.HORIZONTAL,children:i`<div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src=${a.card} alt="Image Alt" />
      </div>
      ${r}`}};var p,N,I;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': imageFixtures.card,
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
}`,...(I=(N=n.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var h,E,S;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: ORIENTATIONS.HORIZONTAL,
    children: defaultChildren
  }
}`,...(S=(E=l.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var v,y,O;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(O=(y=s.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var f,x,F;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    children: defaultChildren
  }
}`,...(F=(x=d.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var R,$,C;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION
  }
}`,...(C=($=c.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var L,D,U;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: DEFAULTS.ORIENTATION,
    children: html\`<div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src=\${imageFixtures.card} alt="Image Alt" />
      </div>
      \${defaultChildren}\`
  }
}`,...(U=(D=m.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};var M,G,V;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: ORIENTATIONS.HORIZONTAL,
    children: html\`<div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src=\${imageFixtures.card} alt="Image Alt" />
      </div>
      \${defaultChildren}\`
  }
}`,...(V=(G=u.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};const It=["Example","HorizontalCard","CardWithoutImage","CardWithoutHeader","CardWithoutBody","ContentBeforeBody","ContentAfterBody"];export{c as CardWithoutBody,d as CardWithoutHeader,s as CardWithoutImage,u as ContentAfterBody,m as ContentBeforeBody,n as Example,l as HorizontalCard,It as __namedExportsOrder,Nt as default};
