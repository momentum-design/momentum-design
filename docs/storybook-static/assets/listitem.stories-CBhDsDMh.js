import{k as e}from"./iframe-DSSNydaC.js";import"./index-Cjrr_aKb.js";import{c as Y,s as q}from"./commonArgTypes-BluK8w5L.js";import{d as G,t as J,h as j}from"./utils-CFOyPOhY.js";import"./index-Dj8K798u.js";import"./index-CZt40tMf.js";import"./index-BSPq_17-.js";import"./index-DgyZxzGB.js";import"./index-D-FiYTdm.js";import"./index-RuoiwXJd.js";import"./index-COpAa2i6.js";import"./index-Bf_9eHn2.js";import{a as g}from"./listitem.component-DXbYBQ9g.js";import"./preload-helper-C1FmrZbK.js";import"./index-CqfQTe1K.js";import"./if-defined-Zwr4HrLo.js";import"./IconNameMixin-DYZzuQwH.js";import"./index-CrzoWpsH.js";import"./index-CWEsSlXu.js";import"./roles-CJI3JVG-.js";import"./badge.constants-D5jHC11G.js";import"./button.component-CkA2lHen.js";import"./button.constants-Cz0aBL3u.js";import"./buttonsimple.constants-xC2Epio7.js";import"./buttonsimple.component-B8tQZ5CJ.js";import"./keys-hFXe221I.js";import"./DisabledMixin-CVvLVeWc.js";import"./TabIndexMixin-Crv4vJKj.js";import"./button.utils-rNW36Ji7.js";import"./index-D9aIBAYM.js";import"./index-D9ZEAHOf.js";import"./popover.component-CqvNoEG6.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-YDHX3k1H.js";import"./index-zLe3K9Af.js";import"./v4-CmTdKEVZ.js";import"./DataAriaLabelMixin-WXnwXJEb.js";import"./FormInternalsMixin-CGwI6nwQ.js";import"./query-DXShiZ7f.js";import"./formfieldwrapper.component-ac6X_6HV.js";import"./index-BGTWniqm.js";import"./index-DTrDRi1E.js";import"./ListNavigationMixin-DgCStHq0.js";import"./CaptureDestroyEventForChildElement-CvfnZf10.js";import"./toggle.constants-CIE4cyjH.js";import"./index-Defp-QOx.js";import"./query-assigned-elements-uEuc3rg8.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,l=(t,K)=>e`<mdc-list>
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
      >${K??""}</mdc-listitem
    >
  </mdc-list>`,Q=t=>l(t,e`
      <mdc-checkbox slot="leading-controls" data-aria-label="mock label" checked></mdc-checkbox>
      <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/63/256" presence="active"></mdc-avatar>
      <mdc-icon slot="leading-controls" length-unit="rem" name="placeholder-bold"></mdc-icon>
      <mdc-icon slot="trailing-controls" length-unit="rem" name="placeholder-bold"></mdc-icon>
      <mdc-button slot="trailing-controls" variant="secondary">Label</mdc-button>
      <mdc-toggle slot="trailing-controls" data-aria-label="mock label" size="compact"></mdc-toggle>
      <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
    `),jt={title:"Components/listitem",tags:["autodocs"],component:"mdc-listitem",render:Q,argTypes:{variant:{control:"select",options:Object.values(g)},label:{control:"text"},"secondary-label":{control:"text"},"tertiary-label":{control:"text"},"side-header-text":{control:"text"},"subline-text":{control:"text"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},...G(["leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-text-side-header","trailing-text-subline","trailing-controls"]),...J(["--mdc-listitem-background-color-active","--mdc-listitem-background-color-hover","--mdc-listitem-default-background-color","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color","--mdc-listitem-column-gap","--mdc-listitem-padding-left-right","--mdc-listitem-padding-top-bottom","--mdc-listitem-cursor","--mdc-listitem-width","--mdc-listitem-height"]),...Y,...q}},r={args:{variant:g.FULL_WIDTH,label:"Label Text","secondary-label":"Secondary Label","tertiary-label":"Teritary Label","side-header-text":"Header Text","subline-text":"Subline Text",disabled:!1}},o={render:t=>l(t),args:{variant:g.FULL_WIDTH,label:"Primary Label"}},i={render:t=>l(t,e`<mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>`)},s={render:t=>l(t,e`<mdc-avatar slot="leading-controls" src="https://picsum.photos/id/237/256" presence="busy"></mdc-avatar>`),args:{label:"Primary Label"}},n={render:t=>l(t,e`<mdc-badge slot="trailing-controls" type="dot"></mdc-badge>`),args:{label:"Primary Label"}},c={render:t=>l(t,e`
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
}`,...(u=(y=r.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var x,L,A;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: Args) => wrapWithList(args),
  args: {
    variant: LISTITEM_VARIANTS.FULL_WIDTH,
    label: 'Primary Label'
  }
}`,...(A=(L=o.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var v,T,k;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:'{\n  render: (args: Args) => wrapWithList(args, html`<mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>`)\n}',...(k=(T=i.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var S,w,I;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args: Args) => wrapWithList(args, html\`<mdc-avatar slot="leading-controls" src="https://picsum.photos/id/237/256" presence="busy"></mdc-avatar>\`),
  args: {
    label: 'Primary Label'
  }
}`,...(I=(w=s.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var W,f,_;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: (args: Args) => wrapWithList(args, html\`<mdc-badge slot="trailing-controls" type="dot"></mdc-badge>\`),
  args: {
    label: 'Primary Label'
  }
}`,...(_=(f=n.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var $,D,P;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(P=(D=c.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var O,H,C;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(C=(H=d.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var U,E,N;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(N=(E=m.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var F,z,M;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(B=(V=p.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};const Kt=["Example","LabelOnly","TrailingIcon","ListWithLabelAndLeadingAvatar","ListWithLabelAndTrailingBadge","ListWithDisableState","ListWithIconAndLabels","ListWithLongText","ListItemLabelsUsingSlot","ListItemOverrideWithContentSlot"];export{r as Example,o as LabelOnly,b as ListItemLabelsUsingSlot,p as ListItemOverrideWithContentSlot,c as ListWithDisableState,d as ListWithIconAndLabels,s as ListWithLabelAndLeadingAvatar,n as ListWithLabelAndTrailingBadge,m as ListWithLongText,i as TrailingIcon,Kt as __namedExportsOrder,jt as default};
