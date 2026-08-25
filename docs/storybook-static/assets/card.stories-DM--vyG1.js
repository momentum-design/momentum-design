import{E as lt,O as o,g as h,F as t,k as r,t as i}from"./iframe-DKmoi846.js";import{i as ct}from"./manifest-DISj2anu.js";import{c as st,s as dt}from"./commonArgTypes-BG7EqI50.js";import{h as mt}from"./utils-B5QUENNQ.js";import{i as e}from"./imageFixtures-CD4avj2q.js";import"./preload-helper-C1FmrZbK.js";const ut=a=>r`<div role="main">
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
  </div>`,Et={title:"Components/card/card",tags:["autodocs"],component:"mdc-card",render:ut,argTypes:{variant:{control:"select",options:Object.values(lt)},orientation:{control:"select",options:Object.values(o)},"card-title":{control:"text"},subtitle:{control:"text"},"image-src":{control:"text"},"image-alt":{control:"text"},"icon-name":{control:"select",options:Object.keys(ct)},"title-tag-name":{control:"select",options:Object.values(h)},"subtitle-tag-name":{control:"select",options:Object.values(h)},...mt(["children"]),...st,...dt}},n=r`<mdc-text slot="body" type="body-midsize-medium" tagname="span"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate aliquet risus, eget auctor ante egestas
  facilisis. Curabitur malesuada tempor pulvinar. Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at.
  Praesent gravida dui diam, non elementum risus laoreet vitae. Sed sed nunc ullamcorper, porttitor dui id, posuere
  justo. Curabitur laoreet sem ut pharetra hendrerit. Vivamus mattis ligula eget imperdiet tempor. Ut in massa luctus
  lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text
>`,l={args:{"card-title":"Title",subtitle:"Subtitle","image-src":e.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:n}},c={args:{"card-title":"Title",subtitle:"Subtitle","image-src":e.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:o.HORIZONTAL,children:n}},s={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:n}},d={args:{"image-src":e.card,"image-alt":"Image Alt",variant:t.VARIANT,orientation:t.ORIENTATION,children:n}},m={args:{"image-src":e.card,"image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"icon-name":"placeholder-bold",variant:t.VARIANT,orientation:t.ORIENTATION}},u={args:{"card-title":"Title",subtitle:"Subtitle","image-src":e.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:r` <div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src=${e.card} alt="Image Alt" />
      </div>
      ${n}`}},A={args:{"card-title":"Title",subtitle:"Subtitle","image-src":e.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:o.HORIZONTAL,children:r` <div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src=${e.card} alt="Image Alt" />
      </div>
      ${n}`}},E=r`<mdc-text slot="body" type="body-midsize-medium" tagname="span"
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
  <mdc-button slot="footer-button-primary">Label</mdc-button>`,At=r`<mdc-text slot="body" type="body-midsize-medium" tagname="span"
    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate aliquet risus, eget auctor ante egestas
    facilisis. Curabitur malesuada tempor pulvinar. Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at.
    Praesent gravida dui diam, non elementum risus laoreet vitae. Sed sed nunc ullamcorper, porttitor dui id, posuere
    justo. Curabitur laoreet sem ut pharetra hendrerit. Vivamus mattis ligula eget imperdiet tempor. Ut in massa luctus
    lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text
  >
  <mdc-link slot="footer-link" icon-name="placeholder-bold" href="#">Label</mdc-link>
  <mdc-button slot="footer-button-secondary">Label</mdc-button>
  <mdc-button slot="footer-button-primary">Label</mdc-button>`,g={args:{"card-title":"Title",subtitle:"Subtitle","image-src":e.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:o.HORIZONTAL,children:E}},b={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:E}},p={args:{"image-src":e.card,"image-alt":"Image Alt",variant:t.VARIANT,orientation:t.ORIENTATION,children:At}},T={args:{"image-src":e.card,"image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"icon-name":"placeholder-bold",variant:t.VARIANT,orientation:t.ORIENTATION,children:r` <mdc-button
        slot="icon-button"
        prefix-icon="placeholder-bold"
        aria-label="icon description"
      ></mdc-button>
      <mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>
      <mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>`}},I={args:{"card-title":"Title",subtitle:"Subtitle","image-src":e.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:r` <div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src=${e.card} alt="Image Alt" />
        <div style="display: flex; gap: 8px; margin-top: 8px;">
          <mdc-button size="28">Click Me</mdc-button>
          <mdc-button size="28" variant="secondary">View More</mdc-button>
        </div>
      </div>
      - ${E}`}},N={args:{"card-title":"Title",subtitle:"Subtitle","image-src":e.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:o.HORIZONTAL,children:r` <div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src=${e.card} alt="Image Alt" />
        <div style="display: flex; gap: 8px; margin: 8px 0;">
          <mdc-button size="28">Click Me</mdc-button>
          <mdc-button size="28" variant="secondary">View More</mdc-button>
        </div>
      </div>
      ${E}`}};var S,v,y;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(y=(v=l.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var O,x,L;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(L=(x=c.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var f,F,C;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(C=(F=s.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};var R,M,U;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    children: defaultChildren
  }
}`,...(U=(M=d.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var D,G,V;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(V=(G=m.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var B,$,z;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(z=($=u.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var H,W,k;A.parameters={...A.parameters,docs:{...(H=A.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(k=(W=A.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var q,j,Z;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(Z=(j=g.parameters)==null?void 0:j.docs)==null?void 0:Z.source}}};var P,w,_;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(_=(w=b.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var Q,X,J;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    children: interactiveChildrenWithoutHeader
  }
}`,...(J=(X=p.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var K,Y,tt;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(tt=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:tt.source}}};var et,at,it;I.parameters={...I.parameters,docs:{...(et=I.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(it=(at=I.parameters)==null?void 0:at.docs)==null?void 0:it.source}}};var rt,nt,ot;N.parameters={...N.parameters,docs:{...(rt=N.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(ot=(nt=N.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};const ht=["Example","StaticHorizontalCard","StaticCardWithoutImage","StaticCardWithoutHeader","StaticCardWithoutBody","StaticContentBeforeBody","StaticContentAfterBody","InteractiveHorizontalCard","InteractiveCardWithoutImage","InteractiveCardWithoutHeader","InteractiveCardWithoutBody","InteractiveContentBeforeBody","InteractiveContentAfterBody"];export{l as Example,T as InteractiveCardWithoutBody,p as InteractiveCardWithoutHeader,b as InteractiveCardWithoutImage,N as InteractiveContentAfterBody,I as InteractiveContentBeforeBody,g as InteractiveHorizontalCard,m as StaticCardWithoutBody,d as StaticCardWithoutHeader,s as StaticCardWithoutImage,A as StaticContentAfterBody,u as StaticContentBeforeBody,c as StaticHorizontalCard,ht as __namedExportsOrder,Et as default};
