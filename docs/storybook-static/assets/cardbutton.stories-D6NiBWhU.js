import{E as V,O as T,g,x as B,F as t,k as A,t as a}from"./iframe-DKmoi846.js";import{i as _}from"./manifest-DISj2anu.js";import{i}from"./imageFixtures-CD4avj2q.js";import{c as k,s as z}from"./commonArgTypes-BG7EqI50.js";import{h as H}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,j=e=>A` <mdc-cardbutton
    @click="${o("onclick")}"
    @keydown="${o("onkeydown")}"
    @keyup="${o("onkeyup")}"
    @focus="${o("onfocus")}"
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
  >`,Y={title:"Components/card/cardbutton",tags:["autodocs"],component:"mdc-cardbutton",render:j,argTypes:{variant:{control:"select",options:Object.values(V)},orientation:{control:"select",options:Object.values(T)},"card-title":{control:"text"},subtitle:{control:"text"},"image-src":{control:"text"},"image-alt":{control:"text"},"icon-name":{control:"select",options:Object.keys(_)},"title-tag-name":{control:"select",options:Object.values(g)},"subtitle-tag-name":{control:"select",options:Object.values(g)},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},tabIndex:{control:"number"},type:{control:"select",options:Object.values(B)},name:{control:"text"},value:{control:"text"},role:{control:"text"},ariaStateKey:{control:"text"},"auto-focus-on-mount":{control:"boolean"},...H(["children","active","size"]),...k,...z}},n=A`<mdc-text slot="body" type="body-midsize-medium" tagname="span"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate aliquet risus, eget auctor ante egestas
  facilisis. Curabitur malesuada tempor pulvinar. Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at.
  Praesent gravida dui diam, non elementum risus laoreet vitae. Sed sed nunc ullamcorper, porttitor dui id, posuere
  justo. Curabitur laoreet sem ut pharetra hendrerit. Vivamus mattis ligula eget imperdiet tempor. Ut in massa luctus
  lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text
>`,r={args:{"card-title":"Title",subtitle:"Subtitle","image-src":i.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:n,disabled:!1,"soft-disabled":!1}},l={args:{"card-title":"Title",subtitle:"Subtitle","image-src":i.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:T.HORIZONTAL,children:n}},s={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:n}},c={args:{"image-src":i.card,"image-alt":"Image Alt",variant:t.VARIANT,orientation:t.ORIENTATION,children:n}},d={args:{"image-src":i.card,"image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"icon-name":"placeholder-bold",variant:t.VARIANT,orientation:t.ORIENTATION}},m={args:{"card-title":"Title",subtitle:"Subtitle","image-src":i.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:A`<div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src=${i.card} alt="Image Alt" />
      </div>
      ${n}`}},u={args:{"card-title":"Title",subtitle:"Subtitle","image-src":i.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:T.HORIZONTAL,children:A`<div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src=${i.card} alt="Image Alt" />
      </div>
      ${n}`}};var b,p,N;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(N=(p=r.parameters)==null?void 0:p.docs)==null?void 0:N.source}}};var E,I,S;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(S=(I=l.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var O,h,f;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,y,x;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    children: defaultChildren
  }
}`,...(x=(y=c.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var F,R,L;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(L=(R=d.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var $,U,C;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(C=(U=m.parameters)==null?void 0:U.docs)==null?void 0:C.source}}};var D,M,G;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(G=(M=u.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};const Q=["Example","HorizontalCard","CardWithoutImage","CardWithoutHeader","CardWithoutBody","ContentBeforeBody","ContentAfterBody"];export{d as CardWithoutBody,c as CardWithoutHeader,s as CardWithoutImage,u as ContentAfterBody,m as ContentBeforeBody,r as Example,l as HorizontalCard,Q as __namedExportsOrder,Y as default};
