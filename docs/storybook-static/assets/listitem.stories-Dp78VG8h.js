import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as e}from"./lit-element-D5KKan5q.js";import"./index-FOCL2P7j.js";import{c as J,s as K}from"./commonArgTypes-BluK8w5L.js";import{a as F,d as Q,t as X,h as a}from"./utils-CFOyPOhY.js";import"./index-DKeH6Fog.js";import"./index-gSUN5-1C.js";import"./index-D9B9YfOT.js";import"./index-BvSnv6br.js";import"./index-BGF5-tDE.js";import{a as q}from"./popover.component-BeJYT0F1.js";import"./index-CpZ-cfgq.js";import{L as G}from"./listitem.component-CqDx-T5W.js";import"./v4-CQkTLCs1.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./provider.component-BaQC7CJH.js";import"./keys-hFXe221I.js";import"./roles-DU0xbrD4.js";import"./index-riA1qVWu.js";import"./index-DYRxW7oy.js";import"./v4-CmTdKEVZ.js";import"./state-C0WmBOuD.js";import"./if-defined-D5BV9-c0.js";import"./IconNameMixin-CRlZlTtq.js";import"./index-B-GnYs90.js";import"./index-DUfFEiVr.js";import"./class-map-BcCVsMyu.js";import"./directive-Ctav8iJK.js";import"./badge.constants-Cr-5n44e.js";import"./button.component-DvOKP7op.js";import"./button.constants-BpS-4nLb.js";import"./buttonsimple.constants-CNAgWCp2.js";import"./buttonsimple.component-I-gcvU8_.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";import"./button.utils-rNW36Ji7.js";import"./index-CVdmMHAR.js";import"./index-DiT-dXQx.js";import"./index-Dm_kZN_u.js";import"./DataAriaLabelMixin-Cpdy3gUS.js";import"./FormInternalsMixin-BIoSiX4k.js";import"./query-DXShiZ7f.js";import"./formfieldwrapper.component-C-SgLT80.js";import"./iframe-B9i_6K3H.js";import"../sb-preview/runtime.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-ChWiF_5p.js";import"./create-context-89xeped_.js";import"./toggle.constants-Cu2Y3ZaP.js";import"./index-B5y-giHl.js";const l=t=>e`<mdc-list style="width: 10rem">${t}</mdc-list>`,Y=t=>l(e`
    <mdc-listitem
      @click="${i("onclick")}"
      @keydown="${i("onkeydown")}"
      @keyup="${i("onkeyup")}"
      @focus="${i("onfocus")}"
      ?disabled="${t.disabled}"
      ?soft-disabled="${t["soft-disabled"]}"
      variant="${t.variant}"
      label="${t.label}"
      secondary-label="${t["secondary-label"]}"
      tertiary-label="${t["tertiary-label"]}"
      side-header-text="${t["side-header-text"]}"
      subline-text="${t["subline-text"]}"
      tooltip-text="${t["tooltip-text"]}"
      tooltip-placement="${t["tooltip-placement"]}"
    >
      <mdc-checkbox slot="leading-controls" data-aria-label="mock label" checked></mdc-checkbox>
      <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/63/256" presence="active"></mdc-avatar>
      <mdc-icon slot="leading-controls" length-unit="rem" name="placeholder-bold"></mdc-icon>
      <mdc-icon slot="trailing-controls" length-unit="rem" name="placeholder-bold"></mdc-icon>
      <mdc-button slot="trailing-controls" variant="secondary">Label</mdc-button>
      <mdc-toggle slot="trailing-controls" data-aria-label="mock label" size="compact"></mdc-toggle>
      <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
    </mdc-listitem>
  `),Qt={title:"Components/listitem",tags:["autodocs"],component:"mdc-listitem",render:Y,parameters:{badges:["stable"]},argTypes:{variant:{control:"select",options:Object.values(G)},label:{control:"text"},"secondary-label":{control:"text"},"tertiary-label":{control:"text"},"side-header-text":{control:"text"},"subline-text":{control:"text"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},"tooltip-text":{control:"text"},"tooltip-placement":{control:"select",options:Object.values(q)},...F(["role"]),...Q(["click","keydown","keyup","focus","leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-text-side-header","trailing-text-subline","trailing-controls"]),...X(["--mdc-listitem-background-color-active","--mdc-listitem-background-color-hover","--mdc-listitem-default-background-color","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color","--mdc-listitem-column-gap","--mdc-listitem-padding-left-right","--mdc-listitem-padding-top-bottom","--mdc-listitem-cursor","--mdc-listitem-width","--mdc-listitem-height"]),...J,...K}},o={args:{variant:G.FULL_WIDTH,label:"Label Text","secondary-label":"Secondary Label","tertiary-label":"Teritary Label","side-header-text":"Header Text","subline-text":"Subline Text",disabled:!1,"tooltip-text":"","tooltip-placement":q.TOP}},r={render:()=>l(e`<mdc-listitem label="Primary Label"></mdc-listitem>`),...a()},n={render:()=>l(e`
      <mdc-listitem>
        <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
      </mdc-listitem>
    `),...a()},s={render:()=>l(e`
      <mdc-listitem label="Primary Label">
        <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/237/256" presence="busy"></mdc-avatar>
      </mdc-listitem>
    `),...a()},c={render:()=>l(e`
      <mdc-listitem label="Primary Label">
        <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
      </mdc-listitem>
    `),...a()},d={render:t=>l(e`
      <mdc-listitem ?disabled="${t.disabled}" label="${t.label}" side-header-text="${t["side-header-text"]}">
        <mdc-checkbox slot="leading-controls" data-aria-label="mock label" checked></mdc-checkbox>
        <mdc-icon length-unit="rem" slot="leading-controls" name="placeholder-bold"></mdc-icon>
        <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
        <mdc-button slot="trailing-controls" variant="secondary">Label</mdc-button>
        <mdc-toggle slot="trailing-controls" data-aria-label="mock label" size="compact"></mdc-toggle>
        <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
      </mdc-listitem>
    `),args:{disabled:!0,label:"Primary Label","side-header-text":"Header"},argTypes:{...F(["variant","secondary-label","tertiary-label","subline-text","tabIndex"])}},m={render:()=>l(e`
      <mdc-listitem
        label="Primary Label"
        secondary-label="This is a long Secondary Label"
        tertiary-label="Teritary Label"
      >
        <div slot="leading-controls">
          <mdc-icon length-unit="rem" name="placeholder-bold"></mdc-icon>
        </div>
      </mdc-listitem>
    `),...a()},b={render:()=>e`
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
  `,...a()},p={render:()=>e`
    <mdc-list>
      <mdc-listitem variant="full-width">
        <mdc-checkbox slot="leading-controls" data-aria-label="List item checkbox" checked=""></mdc-checkbox>
        <mdc-text slot="leading-text-primary-label" type="body-midsize-regular" tagname="div">Primary</mdc-text>
        <mdc-text slot="leading-text-secondary-label" type="body-large-regular">Secondary</mdc-text>
        <mdc-text slot="leading-text-tertiary-label" type="body-small-bold" tagname="div">Tertiary</mdc-text>
      </mdc-listitem>
    </mdc-list>
  `},g={render:()=>e`
    <mdc-list>
      <mdc-listitem variant="full-width">
        <span slot="content">This is a complete override / customisation to show case flexibility.</span>
        <mdc-button slot="content" variant="secondary">Action 1</mdc-button>
        <mdc-button slot="content" variant="primary">Action 2</mdc-button>
        <mdc-button slot="content" variant="tertiary">Action 3</mdc-button>
      </mdc-listitem>
    </mdc-list>
  `};var h,y,u;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(u=(y=o.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var x,L,v;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => wrapWithList(html\`<mdc-listitem label="Primary Label"></mdc-listitem>\`),
  ...hideAllControls()
}`,...(v=(L=r.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var A,T,k;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => wrapWithList(html\`
      <mdc-listitem>
        <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
      </mdc-listitem>
    \`),
  ...hideAllControls()
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var w,S,f;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => wrapWithList(html\`
      <mdc-listitem label="Primary Label">
        <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/237/256" presence="busy"></mdc-avatar>
      </mdc-listitem>
    \`),
  ...hideAllControls()
}`,...(f=(S=s.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var W,$,P;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => wrapWithList(html\`
      <mdc-listitem label="Primary Label">
        <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
      </mdc-listitem>
    \`),
  ...hideAllControls()
}`,...(P=($=c.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var I,C,O;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (args: Args) => wrapWithList(html\`
      <mdc-listitem ?disabled="\${args.disabled}" label="\${args.label}" side-header-text="\${args['side-header-text']}">
        <mdc-checkbox slot="leading-controls" data-aria-label="mock label" checked></mdc-checkbox>
        <mdc-icon length-unit="rem" slot="leading-controls" name="placeholder-bold"></mdc-icon>
        <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
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
}`,...(O=(C=d.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var E,_,H;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => wrapWithList(html\`
      <mdc-listitem
        label="Primary Label"
        secondary-label="This is a long Secondary Label"
        tertiary-label="Teritary Label"
      >
        <div slot="leading-controls">
          <mdc-icon length-unit="rem" name="placeholder-bold"></mdc-icon>
        </div>
      </mdc-listitem>
    \`),
  ...hideAllControls()
}`,...(H=(_=m.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var z,D,M;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(M=(D=b.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var N,R,U;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-list>
      <mdc-listitem variant="full-width">
        <mdc-checkbox slot="leading-controls" data-aria-label="List item checkbox" checked=""></mdc-checkbox>
        <mdc-text slot="leading-text-primary-label" type="body-midsize-regular" tagname="div">Primary</mdc-text>
        <mdc-text slot="leading-text-secondary-label" type="body-large-regular">Secondary</mdc-text>
        <mdc-text slot="leading-text-tertiary-label" type="body-small-bold" tagname="div">Tertiary</mdc-text>
      </mdc-listitem>
    </mdc-list>
  \`
}`,...(U=(R=p.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var V,j,B;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(B=(j=g.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};const Xt=["Example","LabelOnly","TrailingIcon","ListWithLabelAndLeadingAvatar","ListWithLabelAndTrailingBadge","ListWithDisableState","ListWithIconAndLabels","ListWithLongText","ListItemLabelsUsingSlot","ListItemOverrideWithContentSlot"];export{o as Example,r as LabelOnly,p as ListItemLabelsUsingSlot,g as ListItemOverrideWithContentSlot,d as ListWithDisableState,m as ListWithIconAndLabels,s as ListWithLabelAndLeadingAvatar,c as ListWithLabelAndTrailingBadge,b as ListWithLongText,n as TrailingIcon,Xt as __namedExportsOrder,Qt as default};
