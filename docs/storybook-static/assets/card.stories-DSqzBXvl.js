import{C as lt}from"./card.component-DK645wWV.js";import{T as ct,V as st,O as n,D as t}from"./FooterMixin-CCRE6fSX.js";import"./index-D5LOnZrI.js";import{V as S,k as r}from"./iframe-C9zBfpfZ.js";import{i as dt}from"./manifest-BmzYojFK.js";import{t as i}from"./if-defined-Cp73i_az.js";import{c as mt,s as ut}from"./commonArgTypes-BG7EqI50.js";import{h as At}from"./utils-D6nie9pS.js";import{i as e}from"./imageFixtures-CD4avj2q.js";import"./index-RQLaBtXf.js";import"./index-aC5r5DBS.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./link.constants-BwoNogHw.js";import"./preload-helper-C1FmrZbK.js";import"./index-x4X1EYSm.js";import"./index-DTrDRi1E.js";import"./IconNameMixin-BVlrRYvw.js";import"./linksimple.component-BZu5yR2M.js";import"./DataAriaLabelMixin-Dy-wPdti.js";import"./DisabledMixin-5uIk7xY-.js";import"./button.component-D8sp4KLM.js";import"./buttonsimple.component-E9KKvIDw.js";import"./TabIndexMixin-D7RnmEw2.js";import"./button.utils-rNW36Ji7.js";lt.register(ct);const gt=a=>r`<div role="main">
    <mdc-card
      variant="${i(a.variant)}"
      orientation="${i(a.orientation)}"
      card-title="${i(a["card-title"])}"
      subtitle="${i(a.subtitle)}"
      image-src="${i(a["image-src"])}"
      image-alt="${i(a["image-alt"])}"
      icon-name="${i(a["icon-name"])}"
      title-tag-name="${i(a["title-tag-name"])}"
      subtitle-tag-name="${i(a["subtitle-tag-name"])}"
      class="${a.class}"
      style="${a.style}"
      >${a.children}</mdc-card
    >
  </div>`,Ht={title:"Components/card/card",tags:["autodocs"],component:"mdc-card",render:gt,argTypes:{variant:{control:"select",options:Object.values(st)},orientation:{control:"select",options:Object.values(n)},"card-title":{control:"text"},subtitle:{control:"text"},"image-src":{control:"text"},"image-alt":{control:"text"},"icon-name":{control:"select",options:Object.keys(dt)},"title-tag-name":{control:"select",options:Object.values(S)},"subtitle-tag-name":{control:"select",options:Object.values(S)},...At(["children"]),...mt,...ut}},o=r`<mdc-text slot="body" type="body-midsize-medium" tagname="span"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate aliquet risus, eget auctor ante egestas
  facilisis. Curabitur malesuada tempor pulvinar. Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at.
  Praesent gravida dui diam, non elementum risus laoreet vitae. Sed sed nunc ullamcorper, porttitor dui id, posuere
  justo. Curabitur laoreet sem ut pharetra hendrerit. Vivamus mattis ligula eget imperdiet tempor. Ut in massa luctus
  lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text
>`,c={args:{"card-title":"Title",subtitle:"Subtitle","image-src":e.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:o}},s={args:{"card-title":"Title",subtitle:"Subtitle","image-src":e.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:n.HORIZONTAL,children:o}},d={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:o}},m={args:{"image-src":e.card,"image-alt":"Image Alt",variant:t.VARIANT,orientation:t.ORIENTATION,children:o}},u={args:{"image-src":e.card,"image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"icon-name":"placeholder-bold",variant:t.VARIANT,orientation:t.ORIENTATION}},A={args:{"card-title":"Title",subtitle:"Subtitle","image-src":e.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:r` <div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src=${e.card} alt="Image Alt" />
      </div>
      ${o}`}},g={args:{"card-title":"Title",subtitle:"Subtitle","image-src":e.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:n.HORIZONTAL,children:r` <div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src=${e.card} alt="Image Alt" />
      </div>
      ${o}`}},l=r`<mdc-text slot="body" type="body-midsize-medium" tagname="span"
    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate aliquet risus, eget auctor ante egestas
    facilisis. Curabitur malesuada tempor pulvinar. Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at.
    Praesent gravida dui diam, non elementum risus laoreet vitae. Sed sed nunc ullamcorper, porttitor dui id, posuere
    justo. Curabitur laoreet sem ut pharetra hendrerit. Vivamus mattis ligula eget imperdiet tempor. Ut in massa luctus
    lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text
  >
  <mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>
  <mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>
  <mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>
  <mdc-link slot="footer-link" icon-name="placeholder-bold" href="#">Label</mdc-link>
  <mdc-button slot="footer-button-secondary">Label</mdc-button>
  <mdc-button slot="footer-button-primary">Label</mdc-button>`,p={args:{"card-title":"Title",subtitle:"Subtitle","image-src":e.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:n.HORIZONTAL,children:l}},b={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:l}},T={args:{"image-src":e.card,"image-alt":"Image Alt",variant:t.VARIANT,orientation:t.ORIENTATION,children:l}},I={args:{"image-src":e.card,"image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"icon-name":"placeholder-bold",variant:t.VARIANT,orientation:t.ORIENTATION,children:r` <mdc-button
        slot="icon-button"
        prefix-icon="placeholder-bold"
        aria-label="icon description"
      ></mdc-button>
      <mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>
      <mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>`}},N={args:{"card-title":"Title",subtitle:"Subtitle","image-src":e.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:r` <div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src=${e.card} alt="Image Alt" />
        <div style="display: flex; gap: 8px; margin-top: 8px;">
          <mdc-button size="28">Click Me</mdc-button>
          <mdc-button size="28" variant="secondary">View More</mdc-button>
        </div>
      </div>
      - ${l}`}},E={args:{"card-title":"Title",subtitle:"Subtitle","image-src":e.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:n.HORIZONTAL,children:r` <div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src=${e.card} alt="Image Alt" />
        <div style="display: flex; gap: 8px; margin: 8px 0;">
          <mdc-button size="28">Click Me</mdc-button>
          <mdc-button size="28" variant="secondary">View More</mdc-button>
        </div>
      </div>
      ${l}`}};var h,v,y;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
    children: defaultChildren
  }
}`,...(y=(v=c.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var O,x,F;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(F=(x=s.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var f,L,R;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(R=(L=d.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var C,M,U;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    children: defaultChildren
  }
}`,...(U=(M=m.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var D,G,V;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(V=(G=u.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var B,$,z;A.parameters={...A.parameters,docs:{...(B=A.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
    children: html\` <div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src=\${imageFixtures.card} alt="Image Alt" />
      </div>
      \${defaultChildren}\`
  }
}`,...(z=($=A.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var H,W,k;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
    children: html\` <div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src=\${imageFixtures.card} alt="Image Alt" />
      </div>
      \${defaultChildren}\`
  }
}`,...(k=(W=g.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var q,Z,j;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
    children: interactiveChildren
  }
}`,...(j=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:j.source}}};var _,w,P;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: DEFAULTS.ORIENTATION,
    children: interactiveChildren
  }
}`,...(P=(w=b.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var Q,X,J;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    children: interactiveChildren
  }
}`,...(J=(X=T.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var K,Y,tt;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    children: html\` <mdc-button
        slot="icon-button"
        prefix-icon="placeholder-bold"
        aria-label="icon description"
      ></mdc-button>
      <mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>
      <mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>\`
  }
}`,...(tt=(Y=I.parameters)==null?void 0:Y.docs)==null?void 0:tt.source}}};var et,at,it;N.parameters={...N.parameters,docs:{...(et=N.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
    children: html\` <div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src=\${imageFixtures.card} alt="Image Alt" />
        <div style="display: flex; gap: 8px; margin-top: 8px;">
          <mdc-button size="28">Click Me</mdc-button>
          <mdc-button size="28" variant="secondary">View More</mdc-button>
        </div>
      </div>
      - \${interactiveChildren}\`
  }
}`,...(it=(at=N.parameters)==null?void 0:at.docs)==null?void 0:it.source}}};var rt,ot,nt;E.parameters={...E.parameters,docs:{...(rt=E.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
    children: html\` <div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src=\${imageFixtures.card} alt="Image Alt" />
        <div style="display: flex; gap: 8px; margin: 8px 0;">
          <mdc-button size="28">Click Me</mdc-button>
          <mdc-button size="28" variant="secondary">View More</mdc-button>
        </div>
      </div>
      \${interactiveChildren}\`
  }
}`,...(nt=(ot=E.parameters)==null?void 0:ot.docs)==null?void 0:nt.source}}};const Wt=["Example","StaticHorizontalCard","StaticCardWithoutImage","StaticCardWithoutHeader","StaticCardWithoutBody","StaticContentBeforeBody","StaticContentAfterBody","InteractiveHorizontalCard","InteractiveCardWithoutImage","InteractiveCardWithoutHeader","InteractiveCardWithoutBody","InteractiveContentBeforeBody","InteractiveContentAfterBody"];export{c as Example,I as InteractiveCardWithoutBody,T as InteractiveCardWithoutHeader,b as InteractiveCardWithoutImage,E as InteractiveContentAfterBody,N as InteractiveContentBeforeBody,p as InteractiveHorizontalCard,u as StaticCardWithoutBody,m as StaticCardWithoutHeader,d as StaticCardWithoutImage,g as StaticContentAfterBody,A as StaticContentBeforeBody,s as StaticHorizontalCard,Wt as __namedExportsOrder,Ht as default};
