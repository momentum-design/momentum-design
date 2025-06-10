import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as t}from"./lit-element-D5KKan5q.js";import"./index-DRaCArMg.js";import{c as V,s as z}from"./commonArgTypes-BluK8w5L.js";import{h as M,d as j,a}from"./utils-CO8B6ZcN.js";import"./index-YwxIzfyP.js";import"./index-BNj367tp.js";import"./index-DIA0lsP8.js";import"./index-BB4bR0tb.js";import"./index-2_CBxh1w.js";import{P as N}from"./popover.component-DqsEEw9E.js";import"./index-CmlCvllE.js";import{L as R}from"./listitem.component-7b049Nhq.js";import"./v4-CQkTLCs1.js";import"./list.component-C5IS7dNA.js";import"./index-C9z9WAEj.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./roles-Ch6n0tol.js";import"./index-D1yLszQ-.js";import"./index-BQIA-yjU.js";import"./v4-CmTdKEVZ.js";import"./state-CSSggq2n.js";import"./if-defined-D5BV9-c0.js";import"./IconNameMixin-CujGSn0t.js";import"./index-MA1r3zrt.js";import"./index-BmdcAgiU.js";import"./class-map-BcCVsMyu.js";import"./directive-Ctav8iJK.js";import"./button.component-CETyLHgp.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./buttonsimple.component-UuTVCePh.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./button.utils-rNW36Ji7.js";import"./index-CCzUgcHR.js";import"./index-BiY5Zn4z.js";import"./index-CWUJHaLg.js";import"./FormInternalsMixin-CSixOKbK.js";import"./query-DXShiZ7f.js";import"./formfieldwrapper.component-B1RGcmSz.js";import"./iframe-DPyiK6K0.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./FocusTrapMixin-SA_WaGa6.js";import"./toggle.constants-DxorTNId.js";import"./index-BkzqNDAm.js";const l=e=>t`<mdc-list style="width: 10rem">${e}</mdc-list>`,B=e=>l(t`
    <mdc-listitem
      @click="${i("onclick")}"
      @keydown="${i("onkeydown")}"
      @keyup="${i("onkeyup")}"
      @focus="${i("onfocus")}"
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
      <mdc-icon slot="leading-controls" length-unit="rem" name="placeholder-bold"></mdc-icon>
      <mdc-icon slot="trailing-controls" length-unit="rem" name="placeholder-bold"></mdc-icon>
      <mdc-button slot="trailing-controls" variant="secondary">Label</mdc-button>
      <mdc-toggle slot="trailing-controls" data-aria-label="mock label" size="compact"></mdc-toggle>
      <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
    </mdc-listitem>
  `),ze={title:"Components/listitem",tags:["autodocs"],component:"mdc-listitem",render:B,parameters:{badges:["stable"]},argTypes:{variant:{control:"select",options:Object.values(R)},label:{control:"text"},"secondary-label":{control:"text"},"tertiary-label":{control:"text"},"side-header-text":{control:"text"},"subline-text":{control:"text"},disabled:{control:"boolean"},"tooltip-text":{control:"text"},"tooltip-placement":{control:"select",options:Object.values(N)},...M(["role"]),...j(["click","keydown","keyup","focus","leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-text-side-header","trailing-text-subline","trailing-controls","--mdc-listitem-background-color-active","--mdc-listitem-background-color-hover","--mdc-listitem-default-background-color","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color","--mdc-listitem-column-gap","--mdc-listitem-padding-left-and-right"]),...V,...z}},o={args:{variant:R.FULL_WIDTH,label:"Label Text","secondary-label":"Secondary Label","tertiary-label":"Teritary Label","side-header-text":"Header Text","subline-text":"Subline Text",disabled:!1,"tooltip-text":"","tooltip-placement":N.TOP}},r={render:()=>l(t`<mdc-listitem label="Primary Label"></mdc-listitem>`),...a()},s={render:()=>l(t`
    <mdc-listitem>
      <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
    </mdc-listitem>
  `),...a()},n={render:()=>l(t`
    <mdc-listitem label="Primary Label">
      <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/237/256" presence="busy"></mdc-avatar>
    </mdc-listitem>
  `),...a()},c={render:()=>l(t`
    <mdc-listitem label="Primary Label">
      <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
    </mdc-listitem>
  `),...a()},d={render:e=>l(t`
    <mdc-listitem
      ?disabled="${e.disabled}"
      label="${e.label}"
      side-header-text="${e["side-header-text"]}"
    >
      <mdc-checkbox slot="leading-controls" data-aria-label="mock label" checked></mdc-checkbox>
      <mdc-icon length-unit="rem" slot="leading-controls" name="placeholder-bold"></mdc-icon>
      <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
      <mdc-button slot="trailing-controls" variant="secondary">Label</mdc-button>
      <mdc-toggle slot="trailing-controls" data-aria-label="mock label" size="compact"></mdc-toggle>
      <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
    </mdc-listitem>
  `),args:{disabled:!0,label:"Primary Label","side-header-text":"Header"},argTypes:{...M(["variant","secondary-label","tertiary-label","subline-text","tabIndex"])}},m={render:()=>l(t`
    <mdc-listitem label="Primary Label" 
    secondary-label="This is a long Secondary Label" 
    tertiary-label="Teritary Label">
      <div slot="leading-controls">
        <mdc-icon length-unit="rem" name="placeholder-bold"></mdc-icon>
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
  `,...a()};var p,g,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,u,x;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => wrapWithList(html\`<mdc-listitem label="Primary Label"></mdc-listitem>\`),
  ...hideAllControls()
}`,...(x=(u=r.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var L,A,T;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => wrapWithList(html\`
    <mdc-listitem>
      <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
    </mdc-listitem>
  \`),
  ...hideAllControls()
}`,...(T=(A=s.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var v,k,w;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => wrapWithList(html\`
    <mdc-listitem label="Primary Label">
      <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/237/256" presence="busy"></mdc-avatar>
    </mdc-listitem>
  \`),
  ...hideAllControls()
}`,...(w=(k=n.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var S,$,P;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => wrapWithList(html\`
    <mdc-listitem label="Primary Label">
      <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
    </mdc-listitem>
  \`),
  ...hideAllControls()
}`,...(P=($=c.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var W,f,I;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: (args: Args) => wrapWithList(html\`
    <mdc-listitem
      ?disabled="\${args.disabled}"
      label="\${args.label}"
      side-header-text="\${args['side-header-text']}"
    >
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
}`,...(I=(f=d.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var C,E,O;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => wrapWithList(html\`
    <mdc-listitem label="Primary Label" 
    secondary-label="This is a long Secondary Label" 
    tertiary-label="Teritary Label">
      <div slot="leading-controls">
        <mdc-icon length-unit="rem" name="placeholder-bold"></mdc-icon>
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
}`,...(D=(H=b.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};const je=["Example","LabelOnly","TrailingIcon","ListWithLabelAndLeadingAvatar","ListWithLabelAndTrailingBadge","ListWithDisableState","ListWithIconAndLabels","ListWithLongText"];export{o as Example,r as LabelOnly,d as ListWithDisableState,m as ListWithIconAndLabels,n as ListWithLabelAndLeadingAvatar,c as ListWithLabelAndTrailingBadge,b as ListWithLongText,s as TrailingIcon,je as __namedExportsOrder,ze as default};
