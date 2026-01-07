import{U as B,X as _,h as H,k as r,u as z,V as p,c as j}from"./iframe-d_zaQfcU.js";import{B as W}from"./buttonsimple.component-CdddaYua.js";import{a as q,C as Z}from"./card.component-BCnEvgVI.js";import"./index-BGrZUgLa.js";import{i as P}from"./manifest-gC2C1jpI.js";import{t as a}from"./if-defined-CJ88QP4X.js";import{i}from"./imageFixtures-CD4avj2q.js";import{c as w,s as K}from"./commonArgTypes-BG7EqI50.js";import{h as X}from"./utils-D6nie9pS.js";import{V as Y,O as T,D as t}from"./FooterMixin-CvGh-1hp.js";import"./preload-helper-C1FmrZbK.js";import"./TabIndexMixin-BJQMSLME.js";import"./DisabledMixin-ChCzWmbj.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./index-wTs15Rgo.js";import"./index-DTrDRi1E.js";import"./link.constants-HtVXXQgd.js";const Q=B`
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
`,J=[Q,..._()],b=class b extends q(W){connectedCallback(){super.connectedCallback(),this.active=void 0,this.size=void 0}renderHeader(){return this.cardTitle?r`<div part="header">${this.renderIcon()} ${this.renderTitle()}</div>`:H}render(){return r`
      <slot name="image"> ${this.renderImage()} </slot>
      <div part="body">
        ${this.renderHeader()}
        <slot name="before-body"></slot>
        <slot name="body"></slot>
        <slot name="after-body"></slot>
      </div>
    `}};b.styles=[...Z.styles,...J];let g=b;const tt=z.constructTagName("cardbutton");g.register(tt);const{action:n}=__STORYBOOK_MODULE_ACTIONS__,et=e=>r` <mdc-cardbutton
    @click="${n("onclick")}"
    @keydown="${n("onkeydown")}"
    @keyup="${n("onkeyup")}"
    @focus="${n("onfocus")}"
    variant="${a(e.variant)}"
    ?disabled="${e.disabled}"
    ?soft-disabled="${e["soft-disabled"]}"
    orientation="${a(e.orientation)}"
    card-title="${a(e["card-title"])}"
    subtitle="${a(e.subtitle)}"
    image-src="${a(e["image-src"])}"
    image-alt="${a(e["image-alt"])}"
    icon-name="${a(e["icon-name"])}"
    title-tag-name="${a(e["title-tag-name"])}"
    subtitle-tag-name="${a(e["subtitle-tag-name"])}"
    type="${a(e.type)}"
    role="${a(e.role)}"
    tabindex="${a(e.tabIndex)}"
    name="${a(e.name)}"
    value="${a(e.value)}"
    class="${e.class}"
    style="${e.style}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    >${e.children}</mdc-cardbutton
  >`,It={title:"Components/card/cardbutton",tags:["autodocs"],component:"mdc-cardbutton",render:et,argTypes:{variant:{control:"select",options:Object.values(Y)},orientation:{control:"select",options:Object.values(T)},"card-title":{control:"text"},subtitle:{control:"text"},"image-src":{control:"text"},"image-alt":{control:"text"},"icon-name":{control:"select",options:Object.keys(P)},"title-tag-name":{control:"select",options:Object.values(p)},"subtitle-tag-name":{control:"select",options:Object.values(p)},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},tabIndex:{control:"number"},type:{control:"select",options:Object.values(j)},name:{control:"text"},value:{control:"text"},role:{control:"text"},ariaStateKey:{control:"text"},"auto-focus-on-mount":{control:"boolean"},...X(["children","active","size"]),...w,...K}},o=r`<mdc-text slot="body" type="body-midsize-medium" tagname="span"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate aliquet risus, eget auctor ante egestas
  facilisis. Curabitur malesuada tempor pulvinar. Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at.
  Praesent gravida dui diam, non elementum risus laoreet vitae. Sed sed nunc ullamcorper, porttitor dui id, posuere
  justo. Curabitur laoreet sem ut pharetra hendrerit. Vivamus mattis ligula eget imperdiet tempor. Ut in massa luctus
  lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text
>`,l={args:{"card-title":"Title",subtitle:"Subtitle","image-src":i.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:o,disabled:!1,"soft-disabled":!1}},s={args:{"card-title":"Title",subtitle:"Subtitle","image-src":i.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:T.HORIZONTAL,children:o}},c={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:o}},d={args:{"image-src":i.card,"image-alt":"Image Alt",variant:t.VARIANT,orientation:t.ORIENTATION,children:o}},m={args:{"image-src":i.card,"image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"icon-name":"placeholder-bold",variant:t.VARIANT,orientation:t.ORIENTATION}},u={args:{"card-title":"Title",subtitle:"Subtitle","image-src":i.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:r`<div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src=${i.card} alt="Image Alt" />
      </div>
      ${o}`}},A={args:{"card-title":"Title",subtitle:"Subtitle","image-src":i.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:T.HORIZONTAL,children:r`<div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src=${i.card} alt="Image Alt" />
      </div>
      ${o}`}};var N,E,I;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(I=(E=l.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var h,v,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var S,f,O;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(O=(f=c.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var x,$,F;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    children: defaultChildren
  }
}`,...(F=($=d.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var R,C,L;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(L=(C=m.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var U,D,M;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(M=(D=u.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var G,V,k;A.parameters={...A.parameters,docs:{...(G=A.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(k=(V=A.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};const ht=["Example","HorizontalCard","CardWithoutImage","CardWithoutHeader","CardWithoutBody","ContentBeforeBody","ContentAfterBody"];export{m as CardWithoutBody,d as CardWithoutHeader,c as CardWithoutImage,A as ContentAfterBody,u as ContentBeforeBody,l as Example,s as HorizontalCard,ht as __namedExportsOrder,It as default};
