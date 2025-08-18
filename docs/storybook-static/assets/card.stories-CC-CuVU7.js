import{C as rt}from"./card.component-CSHyC_aH.js";import{T as nt,V as lt,O as o,D as t}from"./FooterMixin-9o7JZZe3.js";import"./index-GdCyEKPh.js";import{V as I}from"./index-riA1qVWu.js";import{k as a}from"./lit-element-D5KKan5q.js";import{c as ct,s as st}from"./commonArgTypes-BluK8w5L.js";import{a as dt,t as mt}from"./utils-CFOyPOhY.js";import"./index-DStC4dXa.js";import"./index-BfK3x_97.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./provider.component-BaQC7CJH.js";import"./button.constants-BpS-4nLb.js";import"./buttonsimple.constants-CNAgWCp2.js";import"./roles-DU0xbrD4.js";import"./index-B-GnYs90.js";import"./link.constants-Df3Yk0mX.js";import"./iframe-CE9iiYgP.js";import"../sb-preview/runtime.js";import"./state-C0WmBOuD.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-ChWiF_5p.js";import"./create-context-89xeped_.js";import"./link.component-Ccgin3ck.js";import"./IconNameMixin-CRlZlTtq.js";import"./linksimple.component-D2w8QSTB.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";import"./button.component-CMTraJwt.js";import"./buttonsimple.component-I-gcvU8_.js";import"./keys-hFXe221I.js";import"./button.utils-rNW36Ji7.js";rt.register(nt);const pt=e=>a` <mdc-card
    variant="${e.variant}"
    orientation="${e.orientation}"
    card-title="${e["card-title"]}"
    subtitle="${e.subtitle}"
    image-src="${e["image-src"]}"
    image-alt="${e["image-alt"]}"
    icon-name="${e["icon-name"]}"
    title-tag-name="${e["title-tag-name"]}"
    subtitle-tag-name="${e["subtitle-tag-name"]}"
    class="${e.class}"
    style="${e.style}"
    >${e.children}</mdc-card
  >`,jt={title:"Components/card/card",tags:["autodocs"],component:"mdc-card",render:pt,parameters:{badges:["stable"]},argTypes:{variant:{control:"select",options:Object.values(lt)},orientation:{control:"select",options:Object.values(o)},"card-title":{control:"text"},subtitle:{control:"text"},"image-src":{control:"text"},"image-alt":{control:"text"},"icon-name":{control:"text"},"title-tag-name":{control:"select",options:Object.values(I)},"subtitle-tag-name":{control:"select",options:Object.values(I)},...dt(["children"]),...mt(["--mdc-card-width"]),...ct,...st}},i=a`<mdc-text slot="body" type="body-midsize-medium" tagname="span"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate aliquet risus, eget auctor ante egestas
  facilisis. Curabitur malesuada tempor pulvinar. Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at.
  Praesent gravida dui diam, non elementum risus laoreet vitae. Sed sed nunc ullamcorper, porttitor dui id, posuere
  justo. Curabitur laoreet sem ut pharetra hendrerit. Vivamus mattis ligula eget imperdiet tempor. Ut in massa luctus
  lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text
>`,n={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/100x100","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:i}},l={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/100x100","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:o.HORIZONTAL,children:i}},c={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:i}},s={args:{"image-src":"https://placehold.co/100x100","image-alt":"Image Alt",variant:t.VARIANT,orientation:t.ORIENTATION,children:i}},d={args:{"image-src":"https://placehold.co/100x100","image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"icon-name":"placeholder-bold",variant:t.VARIANT,orientation:t.ORIENTATION}},m={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/100x100","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:a` <div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src="https://placehold.co/100x100" alt="Image Alt" />
      </div>
      ${i}`}},p={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/100x100","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:o.HORIZONTAL,children:a` <div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src="https://placehold.co/100x100" alt="Image Alt" />
      </div>
      ${i}`}},r=a`<mdc-text slot="body" type="body-midsize-medium" tagname="span"
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
  <mdc-button slot="footer-button-primary">Label</mdc-button>`,u={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/100x100","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:o.HORIZONTAL,children:r}},A={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:r}},g={args:{"image-src":"https://placehold.co/100x100","image-alt":"Image Alt",variant:t.VARIANT,orientation:t.ORIENTATION,children:r}},b={args:{"image-src":"https://placehold.co/100x100","image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"icon-name":"placeholder-bold",variant:t.VARIANT,orientation:t.ORIENTATION,children:a` <mdc-button
        slot="icon-button"
        prefix-icon="placeholder-bold"
        aria-label="icon description"
      ></mdc-button>
      <mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>
      <mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>`}},T={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/100x100","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:a` <div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src="https://placehold.co/100x100" alt="Image Alt" />
        <div style="display: flex; gap: 8px; margin-top: 8px;">
          <mdc-button size="28">Click Me</mdc-button>
          <mdc-button size="28" variant="secondary">View More</mdc-button>
        </div>
      </div>
      - ${r}`}},h={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/100x100","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:o.HORIZONTAL,children:a` <div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src="https://placehold.co/100x100" alt="Image Alt" />
        <div style="display: flex; gap: 8px; margin: 8px 0;">
          <mdc-button size="28">Click Me</mdc-button>
          <mdc-button size="28" variant="secondary">View More</mdc-button>
        </div>
      </div>
      ${r}`}};var N,E,S;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
    children: defaultChildren
  }
}`,...(S=(E=n.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var v,x,y;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(x=l.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var O,L,C;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(C=(L=c.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var R,f,M;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    'image-src': 'https://placehold.co/100x100',
    'image-alt': 'Image Alt',
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    children: defaultChildren
  }
}`,...(M=(f=s.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var U,D,G;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(G=(D=d.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var F,V,B;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
    children: html\` <div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src="https://placehold.co/100x100" alt="Image Alt" />
      </div>
      \${defaultChildren}\`
  }
}`,...(B=(V=m.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var z,$,H;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
    children: html\` <div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src="https://placehold.co/100x100" alt="Image Alt" />
      </div>
      \${defaultChildren}\`
  }
}`,...(H=($=p.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var W,k,q;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
    children: interactiveChildren
  }
}`,...(q=(k=u.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var Z,j,w;A.parameters={...A.parameters,docs:{...(Z=A.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(w=(j=A.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var _,P,Q;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    'image-src': 'https://placehold.co/100x100',
    'image-alt': 'Image Alt',
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    children: interactiveChildren
  }
}`,...(Q=(P=g.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var X,J,K;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    'image-src': 'https://placehold.co/100x100',
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
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Y,tt,et;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
    children: html\` <div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src="https://placehold.co/100x100" alt="Image Alt" />
        <div style="display: flex; gap: 8px; margin-top: 8px;">
          <mdc-button size="28">Click Me</mdc-button>
          <mdc-button size="28" variant="secondary">View More</mdc-button>
        </div>
      </div>
      - \${interactiveChildren}\`
  }
}`,...(et=(tt=T.parameters)==null?void 0:tt.docs)==null?void 0:et.source}}};var at,it,ot;h.parameters={...h.parameters,docs:{...(at=h.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
    children: html\` <div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src="https://placehold.co/100x100" alt="Image Alt" />
        <div style="display: flex; gap: 8px; margin: 8px 0;">
          <mdc-button size="28">Click Me</mdc-button>
          <mdc-button size="28" variant="secondary">View More</mdc-button>
        </div>
      </div>
      \${interactiveChildren}\`
  }
}`,...(ot=(it=h.parameters)==null?void 0:it.docs)==null?void 0:ot.source}}};const wt=["Example","StaticHorizontalCard","StaticCardWithoutImage","StaticCardWithoutHeader","StaticCardWithoutBody","StaticContentBeforeBody","StaticContentAfterBody","InteractiveHorizontalCard","InteractiveCardWithoutImage","InteractiveCardWithoutHeader","InteractiveCardWithoutBody","InteractiveContentBeforeBody","InteractiveContentAfterBody"];export{n as Example,b as InteractiveCardWithoutBody,g as InteractiveCardWithoutHeader,A as InteractiveCardWithoutImage,h as InteractiveContentAfterBody,T as InteractiveContentBeforeBody,u as InteractiveHorizontalCard,d as StaticCardWithoutBody,s as StaticCardWithoutHeader,c as StaticCardWithoutImage,p as StaticContentAfterBody,m as StaticContentBeforeBody,l as StaticHorizontalCard,wt as __namedExportsOrder,jt as default};
