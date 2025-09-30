import{C as nt}from"./card.component-C1igm4U4.js";import{T as lt,V as ct,O as o,D as t}from"./FooterMixin-CS_hZ2HD.js";import"./index-Bsauk3ns.js";import{V as E}from"./index-C88XNpuE.js";import{k as i}from"./iframe-CAPDL6NR.js";import{c as st,s as dt}from"./commonArgTypes-BluK8w5L.js";import{a as mt,t as ut}from"./utils-CFOyPOhY.js";import{i as e}from"./imageFixtures-CD4avj2q.js";import"./index-CjRJOeEN.js";import"./index-Duh8ikqK.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./button.constants-DBKgnBVW.js";import"./buttonsimple.constants-DfngC-nr.js";import"./roles-CJI3JVG-.js";import"./index-D0E8q322.js";import"./link.constants-Prf5Ha_y.js";import"./preload-helper-C1FmrZbK.js";import"./index-gxLeJpQ8.js";import"./index-DTrDRi1E.js";import"./IconNameMixin-B4P7RgBU.js";import"./linksimple.component-QAB_DZzO.js";import"./if-defined-CZl5EkiP.js";import"./DataAriaLabelMixin-DKyP6cE4.js";import"./DisabledMixin-CMR8O10r.js";import"./button.component-HKUijv0F.js";import"./buttonsimple.component-DZ5Vgbpt.js";import"./keys-hFXe221I.js";import"./TabIndexMixin-CPdktGlp.js";import"./button.utils-rNW36Ji7.js";nt.register(lt);const At=a=>i` <mdc-card
    variant="${a.variant}"
    orientation="${a.orientation}"
    card-title="${a["card-title"]}"
    subtitle="${a.subtitle}"
    image-src="${a["image-src"]}"
    image-alt="${a["image-alt"]}"
    icon-name="${a["icon-name"]}"
    title-tag-name="${a["title-tag-name"]}"
    subtitle-tag-name="${a["subtitle-tag-name"]}"
    class="${a.class}"
    style="${a.style}"
    >${a.children}</mdc-card
  >`,Zt={title:"Components/card/card",tags:["autodocs"],component:"mdc-card",render:At,argTypes:{variant:{control:"select",options:Object.values(ct)},orientation:{control:"select",options:Object.values(o)},"card-title":{control:"text"},subtitle:{control:"text"},"image-src":{control:"text"},"image-alt":{control:"text"},"icon-name":{control:"text"},"title-tag-name":{control:"select",options:Object.values(E)},"subtitle-tag-name":{control:"select",options:Object.values(E)},...mt(["children"]),...ut(["--mdc-card-width"]),...st,...dt}},r=i`<mdc-text slot="body" type="body-midsize-medium" tagname="span"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate aliquet risus, eget auctor ante egestas
  facilisis. Curabitur malesuada tempor pulvinar. Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at.
  Praesent gravida dui diam, non elementum risus laoreet vitae. Sed sed nunc ullamcorper, porttitor dui id, posuere
  justo. Curabitur laoreet sem ut pharetra hendrerit. Vivamus mattis ligula eget imperdiet tempor. Ut in massa luctus
  lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text
>`,l={args:{"card-title":"Title",subtitle:"Subtitle","image-src":e.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:r}},c={args:{"card-title":"Title",subtitle:"Subtitle","image-src":e.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:o.HORIZONTAL,children:r}},s={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:r}},d={args:{"image-src":e.card,"image-alt":"Image Alt",variant:t.VARIANT,orientation:t.ORIENTATION,children:r}},m={args:{"image-src":e.card,"image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"icon-name":"placeholder-bold",variant:t.VARIANT,orientation:t.ORIENTATION}},u={args:{"card-title":"Title",subtitle:"Subtitle","image-src":e.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:i` <div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src=${e.card} alt="Image Alt" />
      </div>
      ${r}`}},A={args:{"card-title":"Title",subtitle:"Subtitle","image-src":e.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:o.HORIZONTAL,children:i` <div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src=${e.card} alt="Image Alt" />
      </div>
      ${r}`}},n=i`<mdc-text slot="body" type="body-midsize-medium" tagname="span"
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
  <mdc-button slot="footer-button-primary">Label</mdc-button>`,g={args:{"card-title":"Title",subtitle:"Subtitle","image-src":e.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:o.HORIZONTAL,children:n}},p={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:n}},T={args:{"image-src":e.card,"image-alt":"Image Alt",variant:t.VARIANT,orientation:t.ORIENTATION,children:n}},b={args:{"image-src":e.card,"image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"icon-name":"placeholder-bold",variant:t.VARIANT,orientation:t.ORIENTATION,children:i` <mdc-button
        slot="icon-button"
        prefix-icon="placeholder-bold"
        aria-label="icon description"
      ></mdc-button>
      <mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>
      <mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>`}},I={args:{"card-title":"Title",subtitle:"Subtitle","image-src":e.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:i` <div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src=${e.card} alt="Image Alt" />
        <div style="display: flex; gap: 8px; margin-top: 8px;">
          <mdc-button size="28">Click Me</mdc-button>
          <mdc-button size="28" variant="secondary">View More</mdc-button>
        </div>
      </div>
      - ${n}`}},N={args:{"card-title":"Title",subtitle:"Subtitle","image-src":e.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:o.HORIZONTAL,children:i` <div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src=${e.card} alt="Image Alt" />
        <div style="display: flex; gap: 8px; margin: 8px 0;">
          <mdc-button size="28">Click Me</mdc-button>
          <mdc-button size="28" variant="secondary">View More</mdc-button>
        </div>
      </div>
      ${n}`}};var S,h,v;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(v=(h=l.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var y,O,x;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(x=(O=c.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var F,L,f;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(f=(L=s.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};var C,R,M;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    children: defaultChildren
  }
}`,...(M=(R=d.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var U,D,G;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(G=(D=m.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var V,B,$;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...($=(B=u.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var z,H,W;A.parameters={...A.parameters,docs:{...(z=A.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(W=(H=A.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var k,q,Z;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(Z=(q=g.parameters)==null?void 0:q.docs)==null?void 0:Z.source}}};var j,w,_;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(_=(w=p.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var P,Q,X;T.parameters={...T.parameters,docs:{...(P=T.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    children: interactiveChildren
  }
}`,...(X=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var J,K,Y;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Y=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var tt,et,at;I.parameters={...I.parameters,docs:{...(tt=I.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(at=(et=I.parameters)==null?void 0:et.docs)==null?void 0:at.source}}};var it,rt,ot;N.parameters={...N.parameters,docs:{...(it=N.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(ot=(rt=N.parameters)==null?void 0:rt.docs)==null?void 0:ot.source}}};const jt=["Example","StaticHorizontalCard","StaticCardWithoutImage","StaticCardWithoutHeader","StaticCardWithoutBody","StaticContentBeforeBody","StaticContentAfterBody","InteractiveHorizontalCard","InteractiveCardWithoutImage","InteractiveCardWithoutHeader","InteractiveCardWithoutBody","InteractiveContentBeforeBody","InteractiveContentAfterBody"];export{l as Example,b as InteractiveCardWithoutBody,T as InteractiveCardWithoutHeader,p as InteractiveCardWithoutImage,N as InteractiveContentAfterBody,I as InteractiveContentBeforeBody,g as InteractiveHorizontalCard,m as StaticCardWithoutBody,d as StaticCardWithoutHeader,s as StaticCardWithoutImage,A as StaticContentAfterBody,u as StaticContentBeforeBody,c as StaticHorizontalCard,jt as __namedExportsOrder,Zt as default};
