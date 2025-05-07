import{a as o}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as t}from"./lit-element-D5KKan5q.js";import"./index-NL2RLj9m.js";import{c as V,s as z}from"./commonArgTypes-BluK8w5L.js";import{h as M,d as j,a}from"./utils-CO8B6ZcN.js";import"./index-BWY4AysT.js";import"./index-DX4AyC2W.js";import"./index-Dv9CBPoW.js";import"./index-C1igdIP8.js";import"./index-D_U1O2ot.js";import{P as N}from"./popover.component-B7gte4U1.js";import"./index-B8O8OMlH.js";import{L as R}from"./listitem.component-DCWpekq1.js";import"./v4-CQkTLCs1.js";import"./index-C9z9WAEj.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./keys-CuA-OPmH.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./roles-DCpIf2k8.js";import"./text.constants-ZF0jM5wn.js";import"./index-D3DhXfcW.js";import"./state-CSSggq2n.js";import"./if-defined-D5BV9-c0.js";import"./IconNameMixin-CujGSn0t.js";import"./index-CcXofQbA.js";import"./index-WX4f7rST.js";import"./class-map-BcCVsMyu.js";import"./directive-Ctav8iJK.js";import"./button.component-DF6F2T9a.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./buttonsimple.component-C1CVlJGY.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./button.utils-rNW36Ji7.js";import"./FormInternalsMixin-CSixOKbK.js";import"./query-DXShiZ7f.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-5n2-mkV5.js";import"./index-BTO4Dc9R.js";import"./iframe-B46Nvhm3.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./toggle.constants-B075MHvv.js";import"./index-DDvxNBtM.js";const l=e=>t`<mdc-list style="width: 10rem">${e}</mdc-list>`,B=e=>l(t`
    <mdc-listitem
      @click="${o("onclick")}"
      @keydown="${o("onkeydown")}"
      @keyup="${o("onkeyup")}"
      @focus="${o("onfocus")}"
      ?disabled="${e.disabled}"
      variant="${e.variant}"
      label="${e.label}"
      secondary-label="${e["secondary-label"]}"
      tertiary-label="${e["tertiary-label"]}"
      side-header-text="${e["side-header-text"]}"
      subline-text="${e["subline-text"]}"
      tooltip-text="${e["tooltip-text"]}"
      tooltip-placement="${e["tooltip-placement"]}"
    >
      <mdc-checkbox slot="leading-controls" data-aria-label="mock label" checked></mdc-checkbox>
      <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/63/256" presence="active"></mdc-avatar>
      <mdc-icon slot="leading-controls" name="placeholder-bold"></mdc-icon>
      <mdc-icon slot="trailing-controls" name="placeholder-bold"></mdc-icon>
      <mdc-button slot="trailing-controls" variant="secondary">Label</mdc-button>
      <mdc-toggle slot="trailing-controls" data-aria-label="mock label" size="compact"></mdc-toggle>
      <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
    </mdc-listitem>
  `),Ne={title:"Components/listitem",tags:["autodocs"],component:"mdc-listitem",render:B,parameters:{badges:["stable"]},argTypes:{variant:{control:"select",options:Object.values(R)},label:{control:"text"},"secondary-label":{control:"text"},"tertiary-label":{control:"text"},"side-header-text":{control:"text"},"subline-text":{control:"text"},disabled:{control:"boolean"},"tooltip-text":{control:"text"},"tooltip-placement":{control:"select",options:Object.values(N)},...M(["role"]),...j(["click","keydown","keyup","focus","leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-text-side-header","trailing-text-subline","trailing-controls","--mdc-listitem-background-color-active","--mdc-listitem-background-color-hover","--mdc-listitem-default-background-color","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color","--mdc-listitem-column-gap","--mdc-listitem-padding-left-and-right"]),...V,...z}},i={args:{variant:R.FULL_WIDTH,label:"Label Text","secondary-label":"Secondary Label","tertiary-label":"Teritary Label","side-header-text":"Header Text","subline-text":"Subline Text",disabled:!1,"tooltip-text":"","tooltip-placement":N.TOP}},r={render:()=>l(t`<mdc-listitem label="Primary Label"></mdc-listitem>`),...a()},s={render:()=>l(t`
    <mdc-listitem>
      <mdc-icon slot="trailing-controls" name="placeholder-bold"></mdc-icon>
    </mdc-listitem>
  `),...a()},c={render:()=>l(t`
    <mdc-listitem label="Primary Label">
      <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/237/256" presence="busy"></mdc-avatar>
    </mdc-listitem>
  `),...a()},d={render:()=>l(t`
    <mdc-listitem label="Primary Label">
      <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
    </mdc-listitem>
  `),...a()},n={render:e=>l(t`
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
  `),args:{disabled:!0,label:"Primary Label","side-header-text":"Header"},argTypes:{...M(["variant","secondary-label","tertiary-label","subline-text","tabIndex"])}},m={render:()=>l(t`
    <mdc-listitem label="Primary Label" 
    secondary-label="This is a long Secondary Label" 
    tertiary-label="Teritary Label">
      <div slot="leading-controls">
        <mdc-icon name="placeholder-bold"></mdc-icon>
      </div>
    </mdc-listitem>
  `),...a()},b={render:()=>t`
    <div role="list" style="width: 15rem">
      <mdc-listitem label="A short text"></mdc-listitem>
      <mdc-listitem label="A little lengthy text"></mdc-listitem>
      <mdc-listitem
        label="A long lengthy text with small secondary label"
        secondary-label="a small secondary label"
        tooltip-text="A long lengthy text with small secondary label"
      ></mdc-listitem>
      <mdc-listitem
        label="A small primary label"
        secondary-label="a lengthy secondary label with a small label"
        tooltip-text="a lengthy secondary label with a small label"
        tooltip-placement="bottom"
      ></mdc-listitem>
      <mdc-listitem label="A short text"></mdc-listitem>
    </div>
  `,...a()};var p,g,h;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: LISTITEM_VARIANTS.FULL_WIDTH,
    label: 'Label Text',
    'secondary-label': 'Secondary Label',
    'tertiary-label': 'Teritary Label',
    'side-header-text': 'Header Text',
    'subline-text': 'Subline Text',
    disabled: false,
    'tooltip-text': '',
    'tooltip-placement': POPOVER_PLACEMENT.TOP
  }
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,x,u;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => wrapWithList(html\`<mdc-listitem label="Primary Label"></mdc-listitem>\`),
  ...hideAllControls()
}`,...(u=(x=r.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var L,A,T;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => wrapWithList(html\`
    <mdc-listitem>
      <mdc-icon slot="trailing-controls" name="placeholder-bold"></mdc-icon>
    </mdc-listitem>
  \`),
  ...hideAllControls()
}`,...(T=(A=s.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var v,k,w;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => wrapWithList(html\`
    <mdc-listitem label="Primary Label">
      <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/237/256" presence="busy"></mdc-avatar>
    </mdc-listitem>
  \`),
  ...hideAllControls()
}`,...(w=(k=c.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var S,$,P;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => wrapWithList(html\`
    <mdc-listitem label="Primary Label">
      <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
    </mdc-listitem>
  \`),
  ...hideAllControls()
}`,...(P=($=d.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var W,f,I;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
    ...hideControls(['variant', 'secondary-label', 'tertiary-label', 'subline-text', 'tabIndex'])
  }
}`,...(I=(f=n.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var C,E,O;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => wrapWithList(html\`
    <mdc-listitem label="Primary Label" 
    secondary-label="This is a long Secondary Label" 
    tertiary-label="Teritary Label">
      <div slot="leading-controls">
        <mdc-icon name="placeholder-bold"></mdc-icon>
      </div>
    </mdc-listitem>
  \`),
  ...hideAllControls()
}`,...(O=(E=m.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var _,H,D;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => html\`
    <div role="list" style="width: 15rem">
      <mdc-listitem label="A short text"></mdc-listitem>
      <mdc-listitem label="A little lengthy text"></mdc-listitem>
      <mdc-listitem
        label="A long lengthy text with small secondary label"
        secondary-label="a small secondary label"
        tooltip-text="A long lengthy text with small secondary label"
      ></mdc-listitem>
      <mdc-listitem
        label="A small primary label"
        secondary-label="a lengthy secondary label with a small label"
        tooltip-text="a lengthy secondary label with a small label"
        tooltip-placement="bottom"
      ></mdc-listitem>
      <mdc-listitem label="A short text"></mdc-listitem>
    </div>
  \`,
  ...hideAllControls()
}`,...(D=(H=b.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};const Re=["Example","LabelOnly","TrailingIcon","ListWithLabelAndLeadingAvatar","ListWithLabelAndTrailingBadge","ListWithDisableState","ListWithIconAndLabels","ListWithLongText"];export{i as Example,r as LabelOnly,n as ListWithDisableState,m as ListWithIconAndLabels,c as ListWithLabelAndLeadingAvatar,d as ListWithLabelAndTrailingBadge,b as ListWithLongText,s as TrailingIcon,Re as __namedExportsOrder,Ne as default};
