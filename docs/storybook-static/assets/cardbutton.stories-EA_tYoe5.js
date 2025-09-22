import{i as k,D as B,k as r}from"./lit-element-D5KKan5q.js";import{B as H}from"./buttonsimple.component-CKyEWPbX.js";import{a as z,C as j}from"./card.component-D0WAfSkC.js";import{a as W}from"./index-CqVtAZCJ.js";import{u as _}from"./provider.component-BaQC7CJH.js";import"./index-ibTCk7Bz.js";import{V as T}from"./index-DHsMOcdX.js";import{a as o}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{i as a}from"./imageFixtures-CD4avj2q.js";import{c as q,s as Z}from"./commonArgTypes-BluK8w5L.js";import{a as w,t as P}from"./utils-CFOyPOhY.js";import{V as Q,O as g,D as t}from"./FooterMixin-Dp15GCvz.js";import{B as X}from"./button.constants-B6suqA4v.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";import"./buttonsimple.constants-An7St6B1.js";import"./roles-CJI3JVG-.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./iframe-BCa7iKqm.js";import"../sb-preview/runtime.js";import"./state-C0WmBOuD.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-DWn5NkGG.js";import"./create-context-89xeped_.js";import"./index-DTrDRi1E.js";import"./v4-CQkTLCs1.js";import"./link.constants-Df3Yk0mX.js";const J=k`
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
`,K=[J,...W()],p=class p extends z(H){connectedCallback(){super.connectedCallback(),this.active=void 0,this.size=void 0}renderHeader(){return this.cardTitle?r`<div part="header">${this.renderIcon()} ${this.renderTitle()}</div>`:B}render(){return r`
      ${this.renderImage()}
      <div part="body">
        ${this.renderHeader()}
        <slot name="before-body"></slot>
        <slot name="body"></slot>
        <slot name="after-body"></slot>
      </div>
    `}};p.styles=[...j.styles,...K];let A=p;const Y=_.constructTagName("cardbutton");A.register(Y);const tt=e=>r` <mdc-cardbutton
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
  >`,Rt={title:"Components/card/cardbutton",tags:["autodocs"],component:"mdc-cardbutton",render:tt,parameters:{badges:["stable"]},argTypes:{variant:{control:"select",options:Object.values(Q)},orientation:{control:"select",options:Object.values(g)},"card-title":{control:"text"},subtitle:{control:"text"},"image-src":{control:"text"},"image-alt":{control:"text"},"icon-name":{control:"text"},"title-tag-name":{control:"select",options:Object.values(T)},"subtitle-tag-name":{control:"select",options:Object.values(T)},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},tabIndex:{control:"number"},type:{control:"select",options:Object.values(X)},"auto-focus-on-mount":{control:"boolean"},...w(["children","active","size"]),...P(["--mdc-card-width"]),...q,...Z}},i=r`<mdc-text slot="body" type="body-midsize-medium" tagname="span"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate aliquet risus, eget auctor ante egestas
  facilisis. Curabitur malesuada tempor pulvinar. Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at.
  Praesent gravida dui diam, non elementum risus laoreet vitae. Sed sed nunc ullamcorper, porttitor dui id, posuere
  justo. Curabitur laoreet sem ut pharetra hendrerit. Vivamus mattis ligula eget imperdiet tempor. Ut in massa luctus
  lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text
>`,n={args:{"card-title":"Title",subtitle:"Subtitle","image-src":a.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:i,disabled:!1,"soft-disabled":!1}},l={args:{"card-title":"Title",subtitle:"Subtitle","image-src":a.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:g.HORIZONTAL,children:i}},s={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:i}},m={args:{"image-src":a.card,"image-alt":"Image Alt",variant:t.VARIANT,orientation:t.ORIENTATION,children:i}},d={args:{"image-src":a.card,"image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"icon-name":"placeholder-bold",variant:t.VARIANT,orientation:t.ORIENTATION}},c={args:{"card-title":"Title",subtitle:"Subtitle","image-src":a.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:r`<div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src=${a.card} alt="Image Alt" />
      </div>
      ${i}`}},u={args:{"card-title":"Title",subtitle:"Subtitle","image-src":a.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:g.HORIZONTAL,children:r`<div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src=${a.card} alt="Image Alt" />
      </div>
      ${i}`}};var b,N,I;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(I=(N=n.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var h,E,v;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(v=(E=l.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var y,S,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(f=(S=s.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var O,x,F;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    children: defaultChildren
  }
}`,...(F=(x=m.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var $,R,C;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(C=(R=d.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var L,D,U;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(U=(D=c.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};var G,M,V;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(V=(M=u.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};const Ct=["Example","HorizontalCard","CardWithoutImage","CardWithoutHeader","CardWithoutBody","ContentBeforeBody","ContentAfterBody"];export{d as CardWithoutBody,m as CardWithoutHeader,s as CardWithoutImage,u as ContentAfterBody,c as ContentBeforeBody,n as Example,l as HorizontalCard,Ct as __namedExportsOrder,Rt as default};
