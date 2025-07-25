import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as e}from"./lit-element-D5KKan5q.js";import"./index-B4QZ2VpB.js";import{c as B,s as F}from"./commonArgTypes-BluK8w5L.js";import{h as U,d as q,t as G,a}from"./utils-CF1irry3.js";import"./index-DdbcqXWy.js";import"./index-BSF1GxeV.js";import"./index-BqMbwpsf.js";import"./index-DCZdzMqH.js";import"./index-BCi5wcp3.js";import{P as V}from"./popover.component-b3MZdLOz.js";import"./index-Bmx8_ic5.js";import{L as j}from"./listitem.component-BsXDfNEd.js";import"./v4-CQkTLCs1.js";import"./index-C9z9WAEj.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./keys-Hz01Ianf.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./roles-BH_hBfTz.js";import"./index-BrLJ_9IK.js";import"./index-DWRtudfj.js";import"./v4-CmTdKEVZ.js";import"./state-CSSggq2n.js";import"./if-defined-D5BV9-c0.js";import"./IconNameMixin-CujGSn0t.js";import"./index-B-GnYs90.js";import"./index-DYkwZRlJ.js";import"./class-map-BcCVsMyu.js";import"./directive-Ctav8iJK.js";import"./badge.constants-B-xnQ0yZ.js";import"./button.component-CzH-VU4W.js";import"./button.constants-ld6CW6g-.js";import"./buttonsimple.constants-wHSLNcjv.js";import"./buttonsimple.component-CHHctxKG.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./button.utils-rNW36Ji7.js";import"./index-WexvvS10.js";import"./index-Cs7A1LnK.js";import"./index-96ToHBu8.js";import"./FormInternalsMixin-CqDKsEWP.js";import"./query-DXShiZ7f.js";import"./formfieldwrapper.component-nmLPHhLb.js";import"./iframe-DUofq7Yr.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./toggle.constants-Bq8GYsb9.js";import"./index-DgfR5KE5.js";const l=t=>e`<mdc-list style="width: 10rem">${t}</mdc-list>`,J=t=>l(e`
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
  `),qt={title:"Components/listitem",tags:["autodocs"],component:"mdc-listitem",render:J,parameters:{badges:["stable"]},argTypes:{variant:{control:"select",options:Object.values(j)},label:{control:"text"},"secondary-label":{control:"text"},"tertiary-label":{control:"text"},"side-header-text":{control:"text"},"subline-text":{control:"text"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},"tooltip-text":{control:"text"},"tooltip-placement":{control:"select",options:Object.values(V)},...U(["role"]),...q(["click","keydown","keyup","focus","leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-text-side-header","trailing-text-subline","trailing-controls"]),...G(["--mdc-listitem-background-color-active","--mdc-listitem-background-color-hover","--mdc-listitem-default-background-color","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color","--mdc-listitem-column-gap","--mdc-listitem-padding-left-and-right"]),...B,...F}},o={args:{variant:j.FULL_WIDTH,label:"Label Text","secondary-label":"Secondary Label","tertiary-label":"Teritary Label","side-header-text":"Header Text","subline-text":"Subline Text",disabled:!1,"tooltip-text":"","tooltip-placement":V.TOP}},r={render:()=>l(e`<mdc-listitem label="Primary Label"></mdc-listitem>`),...a()},s={render:()=>l(e`
      <mdc-listitem>
        <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
      </mdc-listitem>
    `),...a()},d={render:()=>l(e`
      <mdc-listitem label="Primary Label">
        <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/237/256" presence="busy"></mdc-avatar>
      </mdc-listitem>
    `),...a()},c={render:()=>l(e`
      <mdc-listitem label="Primary Label">
        <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
      </mdc-listitem>
    `),...a()},n={render:t=>l(e`
      <mdc-listitem ?disabled="${t.disabled}" label="${t.label}" side-header-text="${t["side-header-text"]}">
        <mdc-checkbox slot="leading-controls" data-aria-label="mock label" checked></mdc-checkbox>
        <mdc-icon length-unit="rem" slot="leading-controls" name="placeholder-bold"></mdc-icon>
        <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
        <mdc-button slot="trailing-controls" variant="secondary">Label</mdc-button>
        <mdc-toggle slot="trailing-controls" data-aria-label="mock label" size="compact"></mdc-toggle>
        <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
      </mdc-listitem>
    `),args:{disabled:!0,label:"Primary Label","side-header-text":"Header"},argTypes:{...U(["variant","secondary-label","tertiary-label","subline-text","tabIndex"])}},m={render:()=>l(e`
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
  `};var g,h,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var x,u,L;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => wrapWithList(html\`<mdc-listitem label="Primary Label"></mdc-listitem>\`),
  ...hideAllControls()
}`,...(L=(u=r.parameters)==null?void 0:u.docs)==null?void 0:L.source}}};var k,v,T;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => wrapWithList(html\`
      <mdc-listitem>
        <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
      </mdc-listitem>
    \`),
  ...hideAllControls()
}`,...(T=(v=s.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var A,S,w;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => wrapWithList(html\`
      <mdc-listitem label="Primary Label">
        <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/237/256" presence="busy"></mdc-avatar>
      </mdc-listitem>
    \`),
  ...hideAllControls()
}`,...(w=(S=d.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var P,$,f;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => wrapWithList(html\`
      <mdc-listitem label="Primary Label">
        <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
      </mdc-listitem>
    \`),
  ...hideAllControls()
}`,...(f=($=c.parameters)==null?void 0:$.docs)==null?void 0:f.source}}};var W,I,C;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(C=(I=n.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var E,O,_;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(_=(O=m.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var H,z,D;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(D=(z=b.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var M,N,R;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(R=(N=p.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};const Gt=["Example","LabelOnly","TrailingIcon","ListWithLabelAndLeadingAvatar","ListWithLabelAndTrailingBadge","ListWithDisableState","ListWithIconAndLabels","ListWithLongText","ListItemLabelsUsingSlot"];export{o as Example,r as LabelOnly,p as ListItemLabelsUsingSlot,n as ListWithDisableState,m as ListWithIconAndLabels,d as ListWithLabelAndLeadingAvatar,c as ListWithLabelAndTrailingBadge,b as ListWithLongText,s as TrailingIcon,Gt as __namedExportsOrder,qt as default};
