import{C as nt}from"./card.component-U5cYJvzG.js";import{T as lt,O as r,D as t,V as o}from"./CardAndDialogFooterMixin-COm20Ox1.js";import"./index-CNShk9YU.js";import"./index-D3DhXfcW.js";import{k as a}from"./lit-element-D5KKan5q.js";import{c as ct,s as st}from"./commonArgTypes-BluK8w5L.js";import{h as dt}from"./utils-CO8B6ZcN.js";import{V as N}from"./text.constants-ZF0jM5wn.js";import"./index-DIsa_wyr.js";import"./index-38ZaXoSt.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./index-CcXofQbA.js";import"./index-C9z9WAEj.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./link.constants-CqyNsepP.js";import"./iframe-D_7QXMK9.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./IconNameMixin-CujGSn0t.js";import"./linksimple.component-CTvKnIXa.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./button.component-DuJ_hCOI.js";import"./buttonsimple.component-C1CVlJGY.js";import"./button.utils-rNW36Ji7.js";nt.register(lt);const mt=e=>a`
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
    style="${e.style}">${e.children}</mdc-card>`,Wt={title:"Work In Progress/card/card",tags:["autodocs"],component:"mdc-card",render:mt,parameters:{badges:["wip"]},argTypes:{variant:{control:"select",options:["border","ghost"]},orientation:{control:"select",options:Object.values(r)},"card-title":{control:"text"},subtitle:{control:"text"},"image-src":{control:"text"},"image-alt":{control:"text"},"icon-name":{control:"text"},"title-tag-name":{control:"select",options:Object.values(N)},"subtitle-tag-name":{control:"select",options:Object.values(N)},...dt(["children"]),...ct,...st}},i=a`<mdc-text slot='body' 
type="body-midsize-medium" tagname="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Nam vulputate aliquet risus, eget auctor ante egestas facilisis. Curabitur malesuada tempor pulvinar. 
Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at. 
Praesent gravida dui diam, non elementum risus laoreet vitae. 
Sed sed nunc ullamcorper, porttitor dui id, posuere justo. Curabitur laoreet sem ut pharetra hendrerit. 
Vivamus mattis ligula eget imperdiet tempor. 
Ut in massa luctus lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text>`,l={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/320x200","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:i}},c={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/160x300","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:r.HORIZONTAL,children:i}},s={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:i}},d={args:{"image-src":"https://placehold.co/320x200","image-alt":"Image Alt",variant:t.VARIANT,orientation:t.ORIENTATION,children:i}},m={args:{"image-src":"https://placehold.co/320x200","image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"icon-name":"placeholder-bold",variant:t.VARIANT,orientation:t.ORIENTATION}},p={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/320x200","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:a`
    <mdc-text slot='before-body' type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
    <img src="https://placehold.co/100x50" alt="Image Alt" slot="before-body"/>
    ${i}`}},u={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/160x560","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:r.HORIZONTAL,children:a`
    <img src="https://placehold.co/100x50" alt="Image Alt" slot="after-body"/>
    <mdc-text slot='after-body' type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
    ${i}`}},n=a`<mdc-text slot='body' 
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
<mdc-button slot="footer-button-primary">Label</mdc-button>`,A={argTypes:{variant:{control:"select",options:Object.values(o)}},args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/160x330","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:r.HORIZONTAL,children:n}},b={argTypes:{variant:{control:"select",options:Object.values(o)}},args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:n}},g={argTypes:{variant:{control:"select",options:Object.values(o)}},args:{"image-src":"https://placehold.co/320x200","image-alt":"Image Alt",variant:t.VARIANT,orientation:t.ORIENTATION,children:n}},T={argTypes:{variant:{control:"select",options:Object.values(o)}},args:{"image-src":"https://placehold.co/320x200","image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"icon-name":"placeholder-bold",variant:t.VARIANT,orientation:t.ORIENTATION,children:a`
    <mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>
    <mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>
    <mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>`}},h={argTypes:{variant:{control:"select",options:Object.values(o)}},args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/320x200","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,children:a`
    <mdc-text slot='before-body' type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
    <img src="https://placehold.co/100x50" alt="Image Alt" slot="before-body"/>
    <div slot="before-body" style="display: flex; gap: 8px;"> 
    <mdc-button  size="28">Click Me</mdc-button>
    <mdc-button  size="28" variant="secondary">View More</mdc-button>
    </div>-
    ${n}`}},I={argTypes:{variant:{control:"select",options:Object.values(o)}},args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/160x540","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:r.HORIZONTAL,children:a`
    <img src="https://placehold.co/120x30" alt="Image Alt" slot="after-body"/>
    <div slot="after-body" style="display: flex; gap: 8px;"> 
      <mdc-button  size="28">Click Me</mdc-button>
      <mdc-button  size="28" variant="secondary">View More</mdc-button>
    </div>
    <mdc-text slot='after-body' type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
    ${n}`}};var E,S,v;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(v=(S=l.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var y,x,O;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(O=(x=c.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var f,R,L;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(L=(R=s.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var C,M,U;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    'image-src': 'https://placehold.co/320x200',
    'image-alt': 'Image Alt',
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    children: defaultChildren
  }
}`,...(U=(M=d.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var D,G,F;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(F=(G=m.parameters)==null?void 0:G.docs)==null?void 0:F.source}}};var V,B,z;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(z=(B=p.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var $,j,H;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(H=(j=u.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var W,k,q;A.parameters={...A.parameters,docs:{...(W=A.parameters)==null?void 0:W.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(VARIANTS)
    }
  },
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
}`,...(q=(k=A.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var Z,w,P;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(VARIANTS)
    }
  },
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
}`,...(P=(w=b.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var _,Q,X;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(VARIANTS)
    }
  },
  args: {
    'image-src': 'https://placehold.co/320x200',
    'image-alt': 'Image Alt',
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    children: interactiveChildren
  }
}`,...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var J,K,Y;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(VARIANTS)
    }
  },
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
}`,...(Y=(K=T.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var tt,et,at;h.parameters={...h.parameters,docs:{...(tt=h.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(VARIANTS)
    }
  },
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
    <div slot="before-body" style="display: flex; gap: 8px;"> 
    <mdc-button  size="28">Click Me</mdc-button>
    <mdc-button  size="28" variant="secondary">View More</mdc-button>
    </div>-
    \${interactiveChildren}\`
  }
}`,...(at=(et=h.parameters)==null?void 0:et.docs)==null?void 0:at.source}}};var ot,it,rt;I.parameters={...I.parameters,docs:{...(ot=I.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(VARIANTS)
    }
  },
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
    <div slot="after-body" style="display: flex; gap: 8px;"> 
      <mdc-button  size="28">Click Me</mdc-button>
      <mdc-button  size="28" variant="secondary">View More</mdc-button>
    </div>
    <mdc-text slot='after-body' type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
    \${interactiveChildren}\`
  }
}`,...(rt=(it=I.parameters)==null?void 0:it.docs)==null?void 0:rt.source}}};const kt=["Example","StaticHorizontalCard","StaticCardWithoutImage","StaticCardWithoutHeader","StaticCardWithoutBody","StaticContentBeforeBody","StaticContentAfterBody","InteractiveHorizontalCard","InteractiveCardWithoutImage","InteractiveCardWithoutHeader","InteractiveCardWithoutBody","InteractiveContentBeforeBody","InteractiveContentAfterBody"];export{l as Example,T as InteractiveCardWithoutBody,g as InteractiveCardWithoutHeader,b as InteractiveCardWithoutImage,I as InteractiveContentAfterBody,h as InteractiveContentBeforeBody,A as InteractiveHorizontalCard,m as StaticCardWithoutBody,d as StaticCardWithoutHeader,s as StaticCardWithoutImage,u as StaticContentAfterBody,p as StaticContentBeforeBody,c as StaticHorizontalCard,kt as __namedExportsOrder,Wt as default};
