import{k as t}from"./lit-element-CHllvULs.js";import{h as H}from"./utils-D1SE5bce.js";import{L as _}from"./index-_pMkPRMO.js";import{c as E,s as D}from"./commonArgTypes-BluK8w5L.js";import"./index-CuAM_C1j.js";import"./index-DeqJyyCU.js";import"./index-Is41_kCk.js";import"./index-2a-9S-ch.js";import"./index-CQMdz21n.js";import"./index-CVmuatNI.js";import"./index-HW6KrQZO.js";import"./DataAriaLabelMixin-vs_lw9aw.js";import"./text.constants-DJu2q-6E.js";import"./index-BGkqZMsC.js";import"./FormInternalsMixin-DnHjpz6p.js";import"./DisabledMixin-DBt9didn.js";import"./buttonsimple.component-BAX6wI0V.js";import"./index-BGjwsboe.js";import"./state-CWckTc1X.js";import"./if-defined-C4tJgJ33.js";import"./IconNameMixin-DXlfdGtk.js";import"./index-0DSrwNWs.js";import"./class-map-DVSk4OQh.js";import"./directive-Ctav8iJK.js";import"./button.constants-Bg6wWCWM.js";import"./button.utils-Ckgdbdrp.js";import"./formfieldwrapper.component-63e8oEkZ.js";import"./v4-CmTdKEVZ.js";import"./iframe-CLmQ9ERx.js";import"../sb-preview/runtime.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-BsPZ_dvP.js";import"./create-context-89xeped_.js";import"./index-fAnYsQM2.js";const O=e=>t`
  <mdc-list>
    <mdc-listitem
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
  </mdc-list>
`,he={title:"Work In Progress/listitem",tags:["autodocs"],component:"mdc-listitem",render:O,parameters:{badges:["wip"]},argTypes:{variant:{control:"select",options:Object.values(_)},label:{control:"text"},"secondary-label":{control:"text"},"tertiary-label":{control:"text"},"side-header-text":{control:"text"},"subline-text":{control:"text"},disabled:{control:"boolean"},...H(["role","--mdc-listitem-background-color-active","--mdc-listitem-background-color-hover","--mdc-listitem-default-background-color","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color"]),...E,...D}},a={args:{variant:_.FULL_WIDTH,label:"Label Text","secondary-label":"Secondary Label","tertiary-label":"Teritary Label","side-header-text":"Header","subline-text":"Subline",disabled:!1}},l={render:()=>t`
    <mdc-listitem>
      <mdc-icon slot="trailing-controls" name="placeholder-bold"></mdc-icon>
    </mdc-listitem>
  `},r={render:()=>t`<mdc-listitem label="Primary Label"></mdc-listitem>`},o={render:()=>t`
    <mdc-listitem label="Primary Label">
      <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/237/256" presence="busy"></mdc-avatar>
    </mdc-listitem>`},i={render:()=>t`
    <mdc-listitem label="Primary Label">
      <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
    </mdc-listitem>`},c={render:e=>t`
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
  `,args:{disabled:!0,label:"Primary Label","side-header-text":"Header"},argTypes:{...H(["variant","secondary-label","tertiary-label","subline-text","data-aria-label","tabIndex"])}},d={render:()=>t`
    <mdc-listitem label="Primary Label" 
    secondary-label="This is a long Secondary Label" 
    tertiary-label="Teritary Label">
      <div slot="leading-controls">
        <mdc-icon name="placeholder-bold"></mdc-icon>
      </div>
    </mdc-listitem>`};var s,n,m;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: LISTITEM_VARIANTS.FULL_WIDTH,
    label: 'Label Text',
    'secondary-label': 'Secondary Label',
    'tertiary-label': 'Teritary Label',
    'side-header-text': 'Header',
    'subline-text': 'Subline',
    disabled: false
  }
}`,...(m=(n=a.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var b,p,g;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-listitem>
      <mdc-icon slot="trailing-controls" name="placeholder-bold"></mdc-icon>
    </mdc-listitem>
  \`
}`,...(g=(p=l.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,y,u;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:'{\n  render: () => html`<mdc-listitem label="Primary Label"></mdc-listitem>`\n}',...(u=(y=r.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var L,x,v;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-listitem label="Primary Label">
      <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/237/256" presence="busy"></mdc-avatar>
    </mdc-listitem>\`
}`,...(v=(x=o.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var T,k,S;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-listitem label="Primary Label">
      <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
    </mdc-listitem>\`
}`,...(S=(k=i.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var A,I,$;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: (args: Args) => html\`
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
  \`,
  args: {
    disabled: true,
    label: 'Primary Label',
    'side-header-text': 'Header'
  },
  argTypes: {
    ...hideControls(['variant', 'secondary-label', 'tertiary-label', 'subline-text', 'data-aria-label', 'tabIndex'])
  }
}`,...($=(I=c.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var P,W,f;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-listitem label="Primary Label" 
    secondary-label="This is a long Secondary Label" 
    tertiary-label="Teritary Label">
      <div slot="leading-controls">
        <mdc-icon name="placeholder-bold"></mdc-icon>
      </div>
    </mdc-listitem>\`
}`,...(f=(W=d.parameters)==null?void 0:W.docs)==null?void 0:f.source}}};const ye=["Example","TrailingIcon","LabelOnly","ListWithLabelAndLeadingAvatar","ListWithLabelAndTrailingBadge","ListWithDisableState","ListWithIconAndLabels"];export{a as Example,r as LabelOnly,c as ListWithDisableState,d as ListWithIconAndLabels,o as ListWithLabelAndLeadingAvatar,i as ListWithLabelAndTrailingBadge,l as TrailingIcon,ye as __namedExportsOrder,he as default};
