import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as t}from"./lit-element-D5KKan5q.js";import"./index-DzczUNIe.js";import{c as D,s as O}from"./commonArgTypes-BluK8w5L.js";import{h as _}from"./utils-CO8B6ZcN.js";import"./index-DGikrHfh.js";import"./index-D6pNVj43.js";import"./index-4ZVjsjFM.js";import"./index-B52Ye5Ky.js";import"./index-BTJkjEke.js";import"./index-_KQQ0hFS.js";import{L as E}from"./listitem.component-ByzXbRUd.js";import"./v4-CQkTLCs1.js";import"./index-C9z9WAEj.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./text.constants-ZF0jM5wn.js";import"./keys-CuA-OPmH.js";import"./index-D3DhXfcW.js";import"./state-CSSggq2n.js";import"./if-defined-D5BV9-c0.js";import"./IconNameMixin-CujGSn0t.js";import"./index-CrgYZA2k.js";import"./index-BPwDQa1k.js";import"./class-map-BcCVsMyu.js";import"./directive-Ctav8iJK.js";import"./buttonsimple.component-erRKITyq.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./button.constants-ZfNn7qyJ.js";import"./button.utils-DsAX4jmL.js";import"./FormInternalsMixin-Dg5j8Yib.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-QwyRw3wQ.js";import"./iframe-Dn8rHWsH.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./index-DuvdoSdC.js";const a=e=>t`<mdc-list>${e}</mdc-list>`,z=e=>a(t`
    <mdc-listitem
      @click="${r("onclick")}"
      @keydown="${r("onkeydown")}"
      @keyup="${r("onkeyup")}"
      @focus="${r("onfocus")}"
      ?disabled="${e.disabled}"
      variant="${e.variant}"
      label="${e.label}"
      secondary-label="${e["secondary-label"]}"
      tertiary-label="${e["tertiary-label"]}"
      side-header-text="${e["side-header-text"]}"
      subline-text="${e["subline-text"]}"
    >
      <mdc-checkbox slot="leading-controls" data-aria-label="mock label" checked></mdc-checkbox>
      <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/63/256" presence="active"></mdc-avatar>
      <mdc-icon slot="leading-controls" name="placeholder-bold"></mdc-icon>
      <mdc-icon slot="trailing-controls" name="placeholder-bold"></mdc-icon>
      <mdc-button slot="trailing-controls" variant="secondary">Label</mdc-button>
      <mdc-toggle slot="trailing-controls" data-aria-label="mock label" size="compact"></mdc-toggle>
      <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
    </mdc-listitem>
  `),$e={title:"Components/listitem",tags:["autodocs"],component:"mdc-listitem",render:z,parameters:{badges:["stable"]},argTypes:{variant:{control:"select",options:Object.values(E)},label:{control:"text"},"secondary-label":{control:"text"},"tertiary-label":{control:"text"},"side-header-text":{control:"text"},"subline-text":{control:"text"},disabled:{control:"boolean"},..._(["role","--mdc-listitem-background-color-active","--mdc-listitem-background-color-hover","--mdc-listitem-default-background-color","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color"]),...D,...O}},l={args:{variant:E.FULL_WIDTH,label:"Label Text","secondary-label":"Secondary Label","tertiary-label":"Teritary Label","side-header-text":"Header","subline-text":"Subline",disabled:!1}},o={render:()=>a(t`<mdc-listitem label="Primary Label"></mdc-listitem>`)},i={render:()=>a(t`
    <mdc-listitem>
      <mdc-icon slot="trailing-controls" name="placeholder-bold"></mdc-icon>
    </mdc-listitem>
  `)},c={render:()=>a(t`
    <mdc-listitem label="Primary Label">
      <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/237/256" presence="busy"></mdc-avatar>
    </mdc-listitem>
  `)},s={render:()=>a(t`
    <mdc-listitem label="Primary Label">
      <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
    </mdc-listitem>
  `)},d={render:e=>a(t`
    <mdc-listitem
      ?disabled="${e.disabled}"
      label="${e.label}"
      side-header-text="${e["side-header-text"]}"
    >
      <mdc-checkbox slot="leading-controls" data-aria-label="mock label" checked></mdc-checkbox>
      <mdc-icon slot="leading-controls" name="placeholder-bold"></mdc-icon>
      <mdc-icon slot="trailing-controls" name="placeholder-bold"></mdc-icon>
      <mdc-button slot="trailing-controls" variant="secondary">Label</mdc-button>
      <mdc-toggle slot="trailing-controls" data-aria-label="mock label" size="compact"></mdc-toggle>
      <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
    </mdc-listitem>
  `),args:{disabled:!0,label:"Primary Label","side-header-text":"Header"},argTypes:{..._(["variant","secondary-label","tertiary-label","subline-text","data-aria-label","tabIndex"])}},n={render:()=>a(t`
    <mdc-listitem label="Primary Label" 
    secondary-label="This is a long Secondary Label" 
    tertiary-label="Teritary Label">
      <div slot="leading-controls">
        <mdc-icon name="placeholder-bold"></mdc-icon>
      </div>
    </mdc-listitem>
  `)};var m,b,p;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: LISTITEM_VARIANTS.FULL_WIDTH,
    label: 'Label Text',
    'secondary-label': 'Secondary Label',
    'tertiary-label': 'Teritary Label',
    'side-header-text': 'Header',
    'subline-text': 'Subline',
    disabled: false
  }
}`,...(p=(b=l.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var g,h,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:'{\n  render: () => wrapWithList(html`<mdc-listitem label="Primary Label"></mdc-listitem>`)\n}',...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var L,u,x;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => wrapWithList(html\`
    <mdc-listitem>
      <mdc-icon slot="trailing-controls" name="placeholder-bold"></mdc-icon>
    </mdc-listitem>
  \`)
}`,...(x=(u=i.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var k,v,T;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => wrapWithList(html\`
    <mdc-listitem label="Primary Label">
      <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/237/256" presence="busy"></mdc-avatar>
    </mdc-listitem>
  \`)
}`,...(T=(v=c.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var S,$,W;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => wrapWithList(html\`
    <mdc-listitem label="Primary Label">
      <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
    </mdc-listitem>
  \`)
}`,...(W=($=s.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};var A,I,f;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: (args: Args) => wrapWithList(html\`
    <mdc-listitem
      ?disabled="\${args.disabled}"
      label="\${args.label}"
      side-header-text="\${args['side-header-text']}"
    >
      <mdc-checkbox slot="leading-controls" data-aria-label="mock label" checked></mdc-checkbox>
      <mdc-icon slot="leading-controls" name="placeholder-bold"></mdc-icon>
      <mdc-icon slot="trailing-controls" name="placeholder-bold"></mdc-icon>
      <mdc-button slot="trailing-controls" variant="secondary">Label</mdc-button>
      <mdc-toggle slot="trailing-controls" data-aria-label="mock label" size="compact"></mdc-toggle>
      <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
    </mdc-listitem>
  \`),
  args: {
    disabled: true,
    label: 'Primary Label',
    'side-header-text': 'Header'
  },
  argTypes: {
    ...hideControls(['variant', 'secondary-label', 'tertiary-label', 'subline-text', 'data-aria-label', 'tabIndex'])
  }
}`,...(f=(I=d.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var P,w,H;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => wrapWithList(html\`
    <mdc-listitem label="Primary Label" 
    secondary-label="This is a long Secondary Label" 
    tertiary-label="Teritary Label">
      <div slot="leading-controls">
        <mdc-icon name="placeholder-bold"></mdc-icon>
      </div>
    </mdc-listitem>
  \`)
}`,...(H=(w=n.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};const We=["Example","LabelOnly","TrailingIcon","ListWithLabelAndLeadingAvatar","ListWithLabelAndTrailingBadge","ListWithDisableState","ListWithIconAndLabels"];export{l as Example,o as LabelOnly,d as ListWithDisableState,n as ListWithIconAndLabels,c as ListWithLabelAndLeadingAvatar,s as ListWithLabelAndTrailingBadge,i as TrailingIcon,We as __namedExportsOrder,$e as default};
