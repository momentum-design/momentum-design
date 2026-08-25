import{E as B,O as T,G as l,g,F as e,k as n,Q as H,t as a}from"./iframe-DKmoi846.js";import{i as _}from"./manifest-DISj2anu.js";import{i}from"./imageFixtures-CD4avj2q.js";import{c as V,s as K}from"./commonArgTypes-BG7EqI50.js";import{h as P,a as Y}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,j=t=>n`<div role="main">
    <mdc-cardcheckbox
      @click="${o("onclick")}"
      @keydown="${o("onkeydown")}"
      @keyup="${o("onkeyup")}"
      @focus="${o("onfocus")}"
      @change="${o("onchange")}"
      variant="${a(t.variant)}"
      orientation="${a(t.orientation)}"
      card-title="${a(t["card-title"])}"
      subtitle="${a(t.subtitle)}"
      image-src="${a(t["image-src"])}"
      image-alt="${a(t["image-alt"])}"
      icon-name="${a(t["icon-name"])}"
      ?checked="${t.checked}"
      ?disabled="${t.disabled}"
      aria-label="${a(t["aria-label"])}"
      selection-type="${a(t["selection-type"])}"
      title-tag-name="${a(t["title-tag-name"])}"
      subtitle-tag-name="${a(t["subtitle-tag-name"])}"
      tabindex="${a(t.tabIndex)}"
      class="${a(t.class)}"
      style="${a(t.style)}"
      >${t.children}</mdc-cardcheckbox
    >
  </div>`,Q={title:"Components/card/cardcheckbox",tags:["autodocs"],component:"mdc-cardcheckbox",render:j,argTypes:{variant:{control:"select",options:Object.values(B)},orientation:{control:"select",options:Object.values(T)},"card-title":{control:"text"},subtitle:{control:"text"},"image-src":{control:"text"},"image-alt":{control:"text"},"icon-name":{control:"select",options:Object.keys(_)},checked:{control:"boolean"},disabled:{control:"boolean"},tabIndex:{control:"number"},"aria-label":{control:"text",description:"Defines an accessible label for screen readers. Required when using icon-only cards.",table:{category:"attributes"}},"selection-type":{control:"select",options:Object.values(l)},"title-tag-name":{control:"select",options:Object.values(g)},"subtitle-tag-name":{control:"select",options:Object.values(g)},...P(["children"]),...V,...K}},r=n`<mdc-text slot="body" type="body-midsize-medium" tagname="span"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate aliquet risus, eget auctor ante egestas
  facilisis. Curabitur malesuada tempor pulvinar. Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at.
  Praesent gravida dui diam, non elementum risus laoreet vitae. Sed sed nunc ullamcorper, porttitor dui id, posuere
  justo. Curabitur laoreet sem ut pharetra hendrerit. Vivamus mattis ligula eget imperdiet tempor. Ut in massa luctus
  lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text
>`,c={args:{"card-title":"Title",subtitle:"Subtitle","image-src":i.card,"image-alt":"Image Alt","icon-name":"placeholder-bold","title-tag-name":e.TAGNAME,"subtitle-tag-name":e.TAGNAME,variant:e.VARIANT,orientation:e.ORIENTATION,checked:!1,disabled:!1,tabIndex:0,"selection-type":l.CHECK,children:r}},s={args:{"card-title":"Title",subtitle:"Subtitle","image-src":i.card,"image-alt":"Image Alt","icon-name":"placeholder-bold","aria-label":"Aria Label","title-tag-name":e.TAGNAME,"subtitle-tag-name":e.TAGNAME,"selection-type":l.CHECKBOX,checked:!1,disabled:!1,tabIndex:0,variant:e.VARIANT,orientation:T.HORIZONTAL,children:r}},d={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold","title-tag-name":e.TAGNAME,"subtitle-tag-name":e.TAGNAME,"aria-label":"Aria Label","selection-type":l.CHECK,checked:!1,disabled:!1,tabIndex:0,variant:e.VARIANT,orientation:e.ORIENTATION,children:r}},m={args:{"image-src":i.card,"image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold","selection-type":l.CHECK,"title-tag-name":e.TAGNAME,"subtitle-tag-name":e.TAGNAME,checked:!1,disabled:!1,tabIndex:0,variant:e.VARIANT,orientation:e.ORIENTATION}},b={args:{"card-title":"Title",subtitle:"Subtitle","image-src":i.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:e.VARIANT,"title-tag-name":e.TAGNAME,"subtitle-tag-name":e.TAGNAME,orientation:e.ORIENTATION,"selection-type":l.CHECKBOX,checked:!1,disabled:!1,tabIndex:0,children:n`<div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src="${i.card}" alt="Image Alt" />
      </div>
      ${r}`}},u={args:{"card-title":"Title",subtitle:"Subtitle","image-src":i.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:e.VARIANT,"title-tag-name":e.TAGNAME,"subtitle-tag-name":e.TAGNAME,orientation:T.HORIZONTAL,"selection-type":l.CHECKBOX,checked:!1,disabled:!1,tabIndex:0,children:n`<div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src="${i.card}" alt="Image Alt" />
      </div>
      ${r}`}},A={render:()=>n`
    <mdc-formfieldgroup label="Checkbox Cards" help-text="Help Text" data-aria-label="Checkbox Cards">
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
        ${H([1,2,3,4],t=>n`
            <mdc-cardcheckbox
              name="checkbox cards"
              variant="border"
              orientation="vertical"
              card-title="Title ${t}"
              subtitle="Subtitle"
              image-src="${i.card}"
              image-alt="Image Alt"
              icon-name="placeholder-bold"
              tabIndex="0"
            >
              ${r}
            </mdc-cardcheckbox>
          `)}
      </div>
    </mdc-formfieldgroup>
  `,...Y()};var p,E,I;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
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
    'selection-type': SELECTION_TYPE.CHECK,
    children: defaultChildren
  }
}`,...(I=(E=c.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var h,N,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    'aria-label': 'Aria Label',
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    'selection-type': SELECTION_TYPE.CHECKBOX,
    checked: false,
    disabled: false,
    tabIndex: 0,
    variant: DEFAULTS.VARIANT,
    orientation: ORIENTATIONS.HORIZONTAL,
    children: defaultChildren
  }
}`,...(x=(N=s.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var C,f,S;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'icon-name': 'placeholder-bold',
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    'aria-label': 'Aria Label',
    'selection-type': SELECTION_TYPE.CHECK,
    checked: false,
    disabled: false,
    tabIndex: 0,
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    children: defaultChildren
  }
}`,...(S=(f=d.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var y,O,v;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'icon-name': 'placeholder-bold',
    'selection-type': SELECTION_TYPE.CHECK,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    checked: false,
    disabled: false,
    tabIndex: 0,
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION
  }
}`,...(v=(O=m.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};var L,k,$;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
    'selection-type': SELECTION_TYPE.CHECKBOX,
    checked: false,
    disabled: false,
    tabIndex: 0,
    children: html\`<div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src="\${imageFixtures.card}" alt="Image Alt" />
      </div>
      \${defaultChildren}\`
  }
}`,...($=(k=b.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var F,R,G;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
    'selection-type': SELECTION_TYPE.CHECKBOX,
    checked: false,
    disabled: false,
    tabIndex: 0,
    children: html\`<div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src="\${imageFixtures.card}" alt="Image Alt" />
      </div>
      \${defaultChildren}\`
  }
}`,...(G=(R=u.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var D,M,U;A.parameters={...A.parameters,docs:{...(D=A.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-formfieldgroup label="Checkbox Cards" help-text="Help Text" data-aria-label="Checkbox Cards">
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
        \${repeat([1, 2, 3, 4], index => html\`
            <mdc-cardcheckbox
              name="checkbox cards"
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
            </mdc-cardcheckbox>
          \`)}
      </div>
    </mdc-formfieldgroup>
  \`,
  ...hideAllControls()
}`,...(U=(M=A.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};const J=["Example","HorizontalCard","CardWithoutImage","CardWithoutBody","ContentBeforeBody","ContentAfterBody","CardsInCheckboxGroup"];export{m as CardWithoutBody,d as CardWithoutImage,A as CardsInCheckboxGroup,u as ContentAfterBody,b as ContentBeforeBody,c as Example,s as HorizontalCard,J as __namedExportsOrder,Q as default};
