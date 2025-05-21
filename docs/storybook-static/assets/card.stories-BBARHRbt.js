import{C as rt}from"./card.component-BbEuZO0l.js";import{T as lt,V as nt,O as o,D as t}from"./CardAndDialogFooterMixin-COm20Ox1.js";import"./index-Bsm1O7tu.js";import"./index-D3DhXfcW.js";import{k as a}from"./lit-element-D5KKan5q.js";import{c as ct,s as st}from"./commonArgTypes-BluK8w5L.js";import{h as dt}from"./utils-CO8B6ZcN.js";import{V as N}from"./text.constants-ZF0jM5wn.js";import"./index-Q8zjfA8Y.js";import"./index-DqA2SZV3.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./index-CcXofQbA.js";import"./index-C9z9WAEj.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./link.constants-CqyNsepP.js";import"./iframe-CDGo2ghH.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./IconNameMixin-CujGSn0t.js";import"./linksimple.component-CTvKnIXa.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./button.component-DuJ_hCOI.js";import"./buttonsimple.component-C1CVlJGY.js";import"./button.utils-rNW36Ji7.js";rt.register(lt);const mt=e=>a`
  <mdc-card 
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
    style="${e.style}">${e.children}</mdc-card>`,kt={title:"Components/card/card",tags:["autodocs"],component:"mdc-card",render:mt,parameters:{badges:["stable"]},argTypes:{variant:{control:"select",options:Object.values(nt)},orientation:{control:"select",options:Object.values(o)},"card-title":{control:"text"},subtitle:{control:"text"},"image-src":{control:"text"},"image-alt":{control:"text"},"icon-name":{control:"text"},"title-tag-name":{control:"select",options:Object.values(N)},"subtitle-tag-name":{control:"select",options:Object.values(N)},...dt(["children"]),...ct,...st}},i=a`<mdc-text slot='body' 
type="body-midsize-medium" tagname="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Nam vulputate aliquet risus, eget auctor ante egestas facilisis. Curabitur malesuada tempor pulvinar. 
Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at. 
Praesent gravida dui diam, non elementum risus laoreet vitae. 
Sed sed nunc ullamcorper, porttitor dui id, posuere justo. Curabitur laoreet sem ut pharetra hendrerit. 
Vivamus mattis ligula eget imperdiet tempor. 
Ut in massa luctus lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text>`,l={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/320x200","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:i}},n={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/160x300","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:o.HORIZONTAL,children:i}},c={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:i}},s={args:{"image-src":"https://placehold.co/320x200","image-alt":"Image Alt",variant:t.VARIANT,orientation:t.ORIENTATION,children:i}},d={args:{"image-src":"https://placehold.co/320x200","image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"icon-name":"placeholder-bold",variant:t.VARIANT,orientation:t.ORIENTATION}},m={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/320x200","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:a`
    <mdc-text slot='before-body' type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
    <img src="https://placehold.co/100x50" alt="Image Alt" slot="before-body"/>
    ${i}`}},p={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/160x560","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:o.HORIZONTAL,children:a`
    <img src="https://placehold.co/100x50" alt="Image Alt" slot="after-body"/>
    <mdc-text slot='after-body' type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
    ${i}`}},r=a`<mdc-text slot='body' 
type="body-midsize-medium" tagname="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Nam vulputate aliquet risus, eget auctor ante egestas facilisis. Curabitur malesuada tempor pulvinar. 
Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at. 
Praesent gravida dui diam, non elementum risus laoreet vitae. 
Sed sed nunc ullamcorper, porttitor dui id, posuere justo. Curabitur laoreet sem ut pharetra hendrerit. 
Vivamus mattis ligula eget imperdiet tempor. 
Ut in massa luctus lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text>
<mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>
<mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>
<mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>
<mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="this is not rendered"></mdc-button>
<mdc-link slot="footer-link" icon-name="placeholder-bold" href='#'>Label</mdc-link>
<mdc-text slot="footer-link">Not rendered</mdc-text>
<mdc-button slot="footer-button-secondary">Label</mdc-button>
<mdc-button slot="footer-button-primary">Label</mdc-button>`,u={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/160x330","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:o.HORIZONTAL,children:r}},A={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:r}},b={args:{"image-src":"https://placehold.co/320x200","image-alt":"Image Alt",variant:t.VARIANT,orientation:t.ORIENTATION,children:r}},g={args:{"image-src":"https://placehold.co/320x200","image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"icon-name":"placeholder-bold",variant:t.VARIANT,orientation:t.ORIENTATION,children:a`
    <mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>
    <mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>
    <mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>`}},T={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/320x200","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:a`
    <mdc-text slot='before-body' type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
    <img src="https://placehold.co/100x50" alt="Image Alt" slot="before-body"/>
    <div slot="before-body" style="display: flex; gap: 8px; margin-top: 8px;"> 
    <mdc-button  size="28">Click Me</mdc-button>
    <mdc-button  size="28" variant="secondary">View More</mdc-button>
    </div>-
    ${r}`}},h={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/160x540","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:o.HORIZONTAL,children:a`
    <img src="https://placehold.co/120x30" alt="Image Alt" slot="after-body"/>
    <div slot="after-body" style="display: flex; gap: 8px; margin: 8px 0;"> 
      <mdc-button  size="28">Click Me</mdc-button>
      <mdc-button  size="28" variant="secondary">View More</mdc-button>
    </div>
    <mdc-text slot='after-body' type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
    ${r}`}};var I,E,S;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
    children: defaultChildren
  }
}`,...(S=(E=l.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var x,y,v;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var f,O,L;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(L=(O=c.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var R,C,M;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    'image-src': 'https://placehold.co/320x200',
    'image-alt': 'Image Alt',
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    children: defaultChildren
  }
}`,...(M=(C=s.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var U,D,G;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(G=(D=d.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var F,V,B;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
    children: html\`
    <mdc-text slot='before-body' type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
    <img src="https://placehold.co/100x50" alt="Image Alt" slot="before-body"/>
    \${defaultChildren}\`
  }
}`,...(B=(V=m.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var z,$,H;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
    children: html\`
    <img src="https://placehold.co/100x50" alt="Image Alt" slot="after-body"/>
    <mdc-text slot='after-body' type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
    \${defaultChildren}\`
  }
}`,...(H=($=p.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var W,k,q;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': 'https://placehold.co/160x330',
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: ORIENTATIONS.HORIZONTAL,
    children: interactiveChildren
  }
}`,...(q=(k=u.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var Z,j,_;A.parameters={...A.parameters,docs:{...(Z=A.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(_=(j=A.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var w,P,Q;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    'image-src': 'https://placehold.co/320x200',
    'image-alt': 'Image Alt',
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    children: interactiveChildren
  }
}`,...(Q=(P=b.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var X,J,K;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    'image-src': 'https://placehold.co/320x200',
    'image-alt': 'Image Alt',
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    children: html\`
    <mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>
    <mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>
    <mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>\`
  }
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Y,tt,et;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
    children: html\`
    <mdc-text slot='before-body' type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
    <img src="https://placehold.co/100x50" alt="Image Alt" slot="before-body"/>
    <div slot="before-body" style="display: flex; gap: 8px; margin-top: 8px;"> 
    <mdc-button  size="28">Click Me</mdc-button>
    <mdc-button  size="28" variant="secondary">View More</mdc-button>
    </div>-
    \${interactiveChildren}\`
  }
}`,...(et=(tt=T.parameters)==null?void 0:tt.docs)==null?void 0:et.source}}};var at,it,ot;h.parameters={...h.parameters,docs:{...(at=h.parameters)==null?void 0:at.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': 'https://placehold.co/160x540',
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: ORIENTATIONS.HORIZONTAL,
    children: html\`
    <img src="https://placehold.co/120x30" alt="Image Alt" slot="after-body"/>
    <div slot="after-body" style="display: flex; gap: 8px; margin: 8px 0;"> 
      <mdc-button  size="28">Click Me</mdc-button>
      <mdc-button  size="28" variant="secondary">View More</mdc-button>
    </div>
    <mdc-text slot='after-body' type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
    \${interactiveChildren}\`
  }
}`,...(ot=(it=h.parameters)==null?void 0:it.docs)==null?void 0:ot.source}}};const qt=["Example","StaticHorizontalCard","StaticCardWithoutImage","StaticCardWithoutHeader","StaticCardWithoutBody","StaticContentBeforeBody","StaticContentAfterBody","InteractiveHorizontalCard","InteractiveCardWithoutImage","InteractiveCardWithoutHeader","InteractiveCardWithoutBody","InteractiveContentBeforeBody","InteractiveContentAfterBody"];export{l as Example,g as InteractiveCardWithoutBody,b as InteractiveCardWithoutHeader,A as InteractiveCardWithoutImage,h as InteractiveContentAfterBody,T as InteractiveContentBeforeBody,u as InteractiveHorizontalCard,d as StaticCardWithoutBody,s as StaticCardWithoutHeader,c as StaticCardWithoutImage,p as StaticContentAfterBody,m as StaticContentBeforeBody,n as StaticHorizontalCard,qt as __namedExportsOrder,kt as default};
