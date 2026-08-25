import{E as k,O as b,g,F as e,k as r,Q as B,t}from"./iframe-DKmoi846.js";import{i as V}from"./manifest-DISj2anu.js";import{i}from"./imageFixtures-CD4avj2q.js";import{c as _,s as H}from"./commonArgTypes-BG7EqI50.js";import{h as w,a as z}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const{action:n}=__STORYBOOK_MODULE_ACTIONS__,j=a=>r`<div role="main">
    <mdc-cardradio
      @click="${n("onclick")}"
      @keydown="${n("onkeydown")}"
      @keyup="${n("onkeyup")}"
      @focus="${n("onfocus")}"
      @change="${n("onchange")}"
      name="${t(a.name)}"
      variant="${t(a.variant)}"
      orientation="${t(a.orientation)}"
      card-title="${t(a["card-title"])}"
      subtitle="${t(a.subtitle)}"
      image-src="${t(a["image-src"])}"
      image-alt="${t(a["image-alt"])}"
      icon-name="${t(a["icon-name"])}"
      ?checked="${a.checked}"
      ?disabled="${a.disabled}"
      aria-label="${t(a["aria-label"])}"
      title-tag-name="${t(a["title-tag-name"])}"
      subtitle-tag-name="${t(a["subtitle-tag-name"])}"
      tabindex="${t(a.tabIndex)}"
      class="${t(a.class)}"
      style="${t(a.style)}"
      >${a.children}</mdc-cardradio
    >
  </div>`,X={title:"Components/card/cardradio",tags:["autodocs"],component:"mdc-cardradio",render:j,argTypes:{variant:{control:"select",options:Object.values(k)},orientation:{control:"select",options:Object.values(b)},name:{control:"text"},"card-title":{control:"text"},subtitle:{control:"text"},"image-src":{control:"text"},"image-alt":{control:"text"},"icon-name":{control:"select",options:Object.keys(V)},checked:{control:"boolean"},disabled:{control:"boolean"},tabIndex:{control:"number"},"aria-label":{control:"text",description:"Defines an accessible label for screen readers. Required when using icon-only cards.",table:{category:"attributes"}},"title-tag-name":{control:"select",options:Object.values(g)},"subtitle-tag-name":{control:"select",options:Object.values(g)},...w(["children"]),..._,...H}},l=r`<mdc-text slot="body" type="body-midsize-medium" tagname="span"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate aliquet risus, eget auctor ante egestas
  facilisis. Curabitur malesuada tempor pulvinar. Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at.
  Praesent gravida dui diam, non elementum risus laoreet vitae. Sed sed nunc ullamcorper, porttitor dui id, posuere
  justo. Curabitur laoreet sem ut pharetra hendrerit. Vivamus mattis ligula eget imperdiet tempor. Ut in massa luctus
  lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text
>`,d={args:{"card-title":"Title",name:"radio-card",subtitle:"Subtitle","image-src":i.card,"image-alt":"Image Alt","icon-name":"placeholder-bold","title-tag-name":e.TAGNAME,"subtitle-tag-name":e.TAGNAME,variant:e.VARIANT,orientation:e.ORIENTATION,checked:!1,disabled:!1,tabIndex:0,children:l}},o={args:{"card-title":"Title",subtitle:"Subtitle","image-src":i.card,"image-alt":"Image Alt","icon-name":"placeholder-bold","aria-label":"Aria Label","title-tag-name":e.TAGNAME,"subtitle-tag-name":e.TAGNAME,checked:!1,disabled:!1,tabIndex:0,variant:e.VARIANT,orientation:b.HORIZONTAL,children:l}},s={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold","title-tag-name":e.TAGNAME,"subtitle-tag-name":e.TAGNAME,"aria-label":"Aria Label",checked:!1,disabled:!1,tabIndex:0,variant:e.VARIANT,orientation:e.ORIENTATION,children:l}},c={args:{"image-src":i.card,"image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold","title-tag-name":e.TAGNAME,"subtitle-tag-name":e.TAGNAME,checked:!1,disabled:!1,tabIndex:0,variant:e.VARIANT,orientation:e.ORIENTATION}},m={args:{"card-title":"Title",subtitle:"Subtitle","image-src":i.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:e.VARIANT,"title-tag-name":e.TAGNAME,"subtitle-tag-name":e.TAGNAME,orientation:e.ORIENTATION,checked:!1,disabled:!1,tabIndex:0,children:r`<div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src="${i.card}" alt="Image Alt" />
      </div>
      ${l}`}},u={args:{"card-title":"Title",subtitle:"Subtitle","image-src":i.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:e.VARIANT,"title-tag-name":e.TAGNAME,"subtitle-tag-name":e.TAGNAME,orientation:b.HORIZONTAL,checked:!1,disabled:!1,tabIndex:0,children:r`<div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src="${i.card}" alt="Image Alt" />
      </div>
      ${l}`}},A={render:()=>r`
    <mdc-formfieldgroup label="Radio Cards" name="radio-cards" help-text="Help Text" data-aria-label="Radio Cards">
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
        ${B([1,2,3,4],a=>r`
            <mdc-cardradio
              name="radio-cards"
              variant="border"
              orientation="vertical"
              card-title="Title ${a}"
              subtitle="Subtitle"
              image-src="${i.card}"
              image-alt="Image Alt"
              icon-name="placeholder-bold"
              tabIndex="0"
            >
              ${l}
            </mdc-cardradio>
          `)}
      </div>
    </mdc-formfieldgroup>
  `,...z()};var T,p,I;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    name: 'radio-card',
    subtitle: 'Subtitle',
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    checked: false,
    disabled: false,
    tabIndex: 0,
    children: defaultChildren
  }
}`,...(I=(p=d.parameters)==null?void 0:p.docs)==null?void 0:I.source}}};var f,h,N;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    'aria-label': 'Aria Label',
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    checked: false,
    disabled: false,
    tabIndex: 0,
    variant: DEFAULTS.VARIANT,
    orientation: ORIENTATIONS.HORIZONTAL,
    children: defaultChildren
  }
}`,...(N=(h=o.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var E,x,S;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'icon-name': 'placeholder-bold',
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    'aria-label': 'Aria Label',
    checked: false,
    disabled: false,
    tabIndex: 0,
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    children: defaultChildren
  }
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var v,y,O;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'icon-name': 'placeholder-bold',
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    checked: false,
    disabled: false,
    tabIndex: 0,
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION
  }
}`,...(O=(y=c.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var $,R,C;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
    checked: false,
    disabled: false,
    tabIndex: 0,
    children: html\`<div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src="\${imageFixtures.card}" alt="Image Alt" />
      </div>
      \${defaultChildren}\`
  }
}`,...(C=(R=m.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var L,F,G;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
    checked: false,
    disabled: false,
    tabIndex: 0,
    children: html\`<div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src="\${imageFixtures.card}" alt="Image Alt" />
      </div>
      \${defaultChildren}\`
  }
}`,...(G=(F=u.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var D,M,U;A.parameters={...A.parameters,docs:{...(D=A.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-formfieldgroup label="Radio Cards" name="radio-cards" help-text="Help Text" data-aria-label="Radio Cards">
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
        \${repeat([1, 2, 3, 4], index => html\`
            <mdc-cardradio
              name="radio-cards"
              variant="border"
              orientation="vertical"
              card-title="Title \${index}"
              subtitle="Subtitle"
              image-src="\${imageFixtures.card}"
              image-alt="Image Alt"
              icon-name="placeholder-bold"
              tabIndex="0"
            >
              \${defaultChildren}
            </mdc-cardradio>
          \`)}
      </div>
    </mdc-formfieldgroup>
  \`,
  ...hideAllControls()
}`,...(U=(M=A.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};const Y=["Example","HorizontalCard","CardWithoutImage","CardWithoutBody","ContentBeforeBody","ContentAfterBody","CardsInRadioGroup"];export{c as CardWithoutBody,s as CardWithoutImage,A as CardsInRadioGroup,u as ContentAfterBody,m as ContentBeforeBody,d as Example,o as HorizontalCard,Y as __namedExportsOrder,X as default};
