import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as e}from"./lit-element-D5KKan5q.js";import"./index-DGdosPEB.js";import{c as G,s as J}from"./commonArgTypes-BluK8w5L.js";import{d as K,t as Q,h as j}from"./utils-CFOyPOhY.js";import"./index-Bzdu_AfN.js";import"./index-TMLGJEr-.js";import"./index-Bygo1iDm.js";import"./index-C22da2mf.js";import"./index-DyTlZ_IO.js";import"./index-iU0e_kzA.js";import"./index-DQ1Hv4sq.js";import"./index-B3dlYBJu.js";import{a as g}from"./listitem.component-Cy9hWtov.js";import"./v4-CQkTLCs1.js";import"./index-DHsMOcdX.js";import"./provider.component-BaQC7CJH.js";import"./state-C0WmBOuD.js";import"./if-defined-D5BV9-c0.js";import"./IconNameMixin-CRlZlTtq.js";import"./index-CqVtAZCJ.js";import"./index-CHKWDHWa.js";import"./class-map-BcCVsMyu.js";import"./directive-Ctav8iJK.js";import"./roles-CJI3JVG-.js";import"./badge.constants-Cr-5n44e.js";import"./button.component-D5eG231X.js";import"./button.constants-B6suqA4v.js";import"./buttonsimple.constants-An7St6B1.js";import"./buttonsimple.component-CKyEWPbX.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";import"./button.utils-rNW36Ji7.js";import"./index-CqIM0fgK.js";import"./index-Bit_m4dL.js";import"./popover.component-CgG8O1N4.js";import"./base-DIkkzJ-c.js";import"./index-Dm_kZN_u.js";import"./v4-CmTdKEVZ.js";import"./DataAriaLabelMixin-Cpdy3gUS.js";import"./FormInternalsMixin-CvUI0OX_.js";import"./query-DXShiZ7f.js";import"./formfieldwrapper.component-Bh3Mxn5K.js";import"./iframe-BUpju6j_.js";import"../sb-preview/runtime.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-DWn5NkGG.js";import"./create-context-89xeped_.js";import"./index-DTrDRi1E.js";import"./ListNavigationMixin-DgCStHq0.js";import"./CaptureDestroyEventForChildElement-qq7X9vNO.js";import"./toggle.constants-f3i6qnJX.js";import"./index-Dw2D1LKG.js";import"./query-assigned-elements-uEuc3rg8.js";const l=(t,q)=>e`<mdc-list>
    <mdc-listitem
      @click="${a("onclick")}"
      @keydown="${a("onkeydown")}"
      @keyup="${a("onkeyup")}"
      @focus="${a("onfocus")}"
      @enabled="${a("onenabled")}"
      @disabled="${a("ondisabled")}"
      @created="${a("oncreated")}"
      @destroyed="${a("ondestroyed")}"
      ?disabled="${t.disabled}"
      ?soft-disabled="${t["soft-disabled"]}"
      variant="${t.variant}"
      label="${t.label}"
      secondary-label="${t["secondary-label"]}"
      tertiary-label="${t["tertiary-label"]}"
      side-header-text="${t["side-header-text"]}"
      subline-text="${t["subline-text"]}"
      >${q??""}</mdc-listitem
    >
  </mdc-list>`,X=t=>l(t,e`
      <mdc-checkbox slot="leading-controls" data-aria-label="mock label" checked></mdc-checkbox>
      <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/63/256" presence="active"></mdc-avatar>
      <mdc-icon slot="leading-controls" length-unit="rem" name="placeholder-bold"></mdc-icon>
      <mdc-icon slot="trailing-controls" length-unit="rem" name="placeholder-bold"></mdc-icon>
      <mdc-button slot="trailing-controls" variant="secondary">Label</mdc-button>
      <mdc-toggle slot="trailing-controls" data-aria-label="mock label" size="compact"></mdc-toggle>
      <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
    `),Zt={title:"Components/listitem",tags:["autodocs"],component:"mdc-listitem",render:X,parameters:{badges:["stable"]},argTypes:{variant:{control:"select",options:Object.values(g)},label:{control:"text"},"secondary-label":{control:"text"},"tertiary-label":{control:"text"},"side-header-text":{control:"text"},"subline-text":{control:"text"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},...K(["leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-text-side-header","trailing-text-subline","trailing-controls"]),...Q(["--mdc-listitem-background-color-active","--mdc-listitem-background-color-hover","--mdc-listitem-default-background-color","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color","--mdc-listitem-column-gap","--mdc-listitem-padding-left-right","--mdc-listitem-padding-top-bottom","--mdc-listitem-cursor","--mdc-listitem-width","--mdc-listitem-height"]),...G,...J}},r={args:{variant:g.FULL_WIDTH,label:"Label Text","secondary-label":"Secondary Label","tertiary-label":"Teritary Label","side-header-text":"Header Text","subline-text":"Subline Text",disabled:!1}},o={render:t=>l(t),args:{variant:g.FULL_WIDTH,label:"Primary Label"}},i={render:t=>l(t,e`<mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>`)},s={render:t=>l(t,e`<mdc-avatar slot="leading-controls" src="https://picsum.photos/id/237/256" presence="busy"></mdc-avatar>`),args:{label:"Primary Label"}},n={render:t=>l(t,e`<mdc-badge slot="trailing-controls" type="dot"></mdc-badge>`),args:{label:"Primary Label"}},c={render:t=>l(t,e`
        <mdc-checkbox slot="leading-controls" data-aria-label="mock label" checked></mdc-checkbox>
        <mdc-icon length-unit="rem" slot="leading-controls" name="placeholder-bold"></mdc-icon>
        <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
        <mdc-button slot="trailing-controls" variant="secondary">Label</mdc-button>
        <mdc-toggle slot="trailing-controls" data-aria-label="mock label" size="compact"></mdc-toggle>
        <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
      `),args:{disabled:!0,label:"Primary Label","side-header-text":"Header"}},d={render:t=>l(t,e`
        <div slot="leading-controls">
          <mdc-icon length-unit="rem" name="placeholder-bold"></mdc-icon>
        </div>
      `),args:{label:"Primary Label","secondary-label":"This is a long Secondary Label","tertiary-label":"Teritary Label"}},m={render:()=>e`
    <div role="list" style="width: 15rem">
      <mdc-listitem label="A short text"></mdc-listitem>
      <mdc-listitem label="A little lengthy text"></mdc-listitem>
      <mdc-listitem
        id="listitem-1"
        label="A long lengthy text with small secondary label"
        secondary-label="a small secondary label"
      ></mdc-listitem>
      <mdc-listitem
        id="listitem-2"
        label="A small primary label"
        secondary-label="a lengthy secondary label with a small label"
      ></mdc-listitem>
      <mdc-listitem label="A short text"></mdc-listitem>
    </div>
    <mdc-tooltip triggerID="listitem-1" placement="top" show-arrow>
      A long lengthy text with small secondary label
    </mdc-tooltip>
    <mdc-tooltip triggerID="listitem-2" show-arrow> A small primary label with a lengthy secondary label </mdc-tooltip>
    <mdc-text>Note: The consumer needs to attach mdc-tooltip to the listitem from their end</mdc-text>
  `,...j()},b={render:t=>l(t,e`
        <mdc-checkbox slot="leading-controls" data-aria-label="List item checkbox" checked=""></mdc-checkbox>
        <mdc-text slot="leading-text-primary-label" type="body-midsize-regular" tagname="div">Primary</mdc-text>
        <mdc-text slot="leading-text-secondary-label" type="body-large-regular">Secondary</mdc-text>
        <mdc-text slot="leading-text-tertiary-label" type="body-small-bold" tagname="div">Tertiary</mdc-text>
      `),args:{variant:g.FULL_WIDTH},...j()},p={render:()=>e`
    <mdc-list>
      <mdc-listitem variant="full-width">
        <span slot="content">This is a complete override / customisation to show case flexibility.</span>
        <mdc-button slot="content" variant="secondary">Action 1</mdc-button>
        <mdc-button slot="content" variant="primary">Action 2</mdc-button>
        <mdc-button slot="content" variant="tertiary">Action 3</mdc-button>
      </mdc-listitem>
    </mdc-list>
  `};var h,y,u;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: LISTITEM_VARIANTS.FULL_WIDTH,
    label: 'Label Text',
    'secondary-label': 'Secondary Label',
    'tertiary-label': 'Teritary Label',
    'side-header-text': 'Header Text',
    'subline-text': 'Subline Text',
    disabled: false
  }
}`,...(u=(y=r.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var x,L,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: Args) => wrapWithList(args),
  args: {
    variant: LISTITEM_VARIANTS.FULL_WIDTH,
    label: 'Primary Label'
  }
}`,...(v=(L=o.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var A,T,k;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:'{\n  render: (args: Args) => wrapWithList(args, html`<mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>`)\n}',...(k=(T=i.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var w,S,I;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: (args: Args) => wrapWithList(args, html\`<mdc-avatar slot="leading-controls" src="https://picsum.photos/id/237/256" presence="busy"></mdc-avatar>\`),
  args: {
    label: 'Primary Label'
  }
}`,...(I=(S=s.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var W,f,$;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: (args: Args) => wrapWithList(args, html\`<mdc-badge slot="trailing-controls" type="dot"></mdc-badge>\`),
  args: {
    label: 'Primary Label'
  }
}`,...($=(f=n.parameters)==null?void 0:f.docs)==null?void 0:$.source}}};var D,P,_;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: (args: Args) => wrapWithList(args, html\`
        <mdc-checkbox slot="leading-controls" data-aria-label="mock label" checked></mdc-checkbox>
        <mdc-icon length-unit="rem" slot="leading-controls" name="placeholder-bold"></mdc-icon>
        <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
        <mdc-button slot="trailing-controls" variant="secondary">Label</mdc-button>
        <mdc-toggle slot="trailing-controls" data-aria-label="mock label" size="compact"></mdc-toggle>
        <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
      \`),
  args: {
    disabled: true,
    label: 'Primary Label',
    'side-header-text': 'Header'
  }
}`,...(_=(P=c.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var H,C,U;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: (args: Args) => wrapWithList(args, html\`
        <div slot="leading-controls">
          <mdc-icon length-unit="rem" name="placeholder-bold"></mdc-icon>
        </div>
      \`),
  args: {
    label: 'Primary Label',
    'secondary-label': 'This is a long Secondary Label',
    'tertiary-label': 'Teritary Label'
  }
}`,...(U=(C=d.parameters)==null?void 0:C.docs)==null?void 0:U.source}}};var E,F,N;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => html\`
    <div role="list" style="width: 15rem">
      <mdc-listitem label="A short text"></mdc-listitem>
      <mdc-listitem label="A little lengthy text"></mdc-listitem>
      <mdc-listitem
        id="listitem-1"
        label="A long lengthy text with small secondary label"
        secondary-label="a small secondary label"
      ></mdc-listitem>
      <mdc-listitem
        id="listitem-2"
        label="A small primary label"
        secondary-label="a lengthy secondary label with a small label"
      ></mdc-listitem>
      <mdc-listitem label="A short text"></mdc-listitem>
    </div>
    <mdc-tooltip triggerID="listitem-1" placement="top" show-arrow>
      A long lengthy text with small secondary label
    </mdc-tooltip>
    <mdc-tooltip triggerID="listitem-2" show-arrow> A small primary label with a lengthy secondary label </mdc-tooltip>
    <mdc-text>Note: The consumer needs to attach mdc-tooltip to the listitem from their end</mdc-text>
  \`,
  ...hideAllControls()
}`,...(N=(F=m.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var O,z,M;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: (args: Args) => wrapWithList(args, html\`
        <mdc-checkbox slot="leading-controls" data-aria-label="List item checkbox" checked=""></mdc-checkbox>
        <mdc-text slot="leading-text-primary-label" type="body-midsize-regular" tagname="div">Primary</mdc-text>
        <mdc-text slot="leading-text-secondary-label" type="body-large-regular">Secondary</mdc-text>
        <mdc-text slot="leading-text-tertiary-label" type="body-small-bold" tagname="div">Tertiary</mdc-text>
      \`),
  args: {
    variant: LISTITEM_VARIANTS.FULL_WIDTH
  },
  ...hideAllControls()
}`,...(M=(z=b.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var R,V,B;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-list>
      <mdc-listitem variant="full-width">
        <span slot="content">This is a complete override / customisation to show case flexibility.</span>
        <mdc-button slot="content" variant="secondary">Action 1</mdc-button>
        <mdc-button slot="content" variant="primary">Action 2</mdc-button>
        <mdc-button slot="content" variant="tertiary">Action 3</mdc-button>
      </mdc-listitem>
    </mdc-list>
  \`
}`,...(B=(V=p.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};const te=["Example","LabelOnly","TrailingIcon","ListWithLabelAndLeadingAvatar","ListWithLabelAndTrailingBadge","ListWithDisableState","ListWithIconAndLabels","ListWithLongText","ListItemLabelsUsingSlot","ListItemOverrideWithContentSlot"];export{r as Example,o as LabelOnly,b as ListItemLabelsUsingSlot,p as ListItemOverrideWithContentSlot,c as ListWithDisableState,d as ListWithIconAndLabels,s as ListWithLabelAndLeadingAvatar,n as ListWithLabelAndTrailingBadge,m as ListWithLongText,i as TrailingIcon,te as __namedExportsOrder,Zt as default};
