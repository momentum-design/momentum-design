import{a as l}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as t}from"./lit-element-CHllvULs.js";import{L as _}from"./index-BwzlRlAk.js";import{c as D,s as O}from"./commonArgTypes-BluK8w5L.js";import{h as E}from"./utils-D1SE5bce.js";import"./index-y7RqcNps.js";import"./index-DHQHaLdp.js";import"./index-DC_MINyB.js";import"./index-DVzS1xOX.js";import"./index-DUX9WrWe.js";import"./index-GE8cwMoi.js";import"./v4-CQkTLCs1.js";import"./index-HW6KrQZO.js";import"./DataAriaLabelMixin-vs_lw9aw.js";import"./text.constants-DJu2q-6E.js";import"./index-BGkqZMsC.js";import"./FormInternalsMixin-Ch02HUy5.js";import"./DisabledMixin-DBt9didn.js";import"./buttonsimple.component-BPMM56DO.js";import"./index-BGjwsboe.js";import"./state-CWckTc1X.js";import"./if-defined-C4tJgJ33.js";import"./IconNameMixin-DXlfdGtk.js";import"./index-BCq72oPp.js";import"./class-map-DVSk4OQh.js";import"./directive-Ctav8iJK.js";import"./button.constants-BtWRRBoE.js";import"./button.utils-CM5PFBkb.js";import"./formfieldwrapper.component-63e8oEkZ.js";import"./iframe-Cbkw04dK.js";import"../sb-preview/runtime.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-BsPZ_dvP.js";import"./create-context-89xeped_.js";import"./index-7yGVwRQ8.js";const a=e=>t`<mdc-list>${e}</mdc-list>`,z=e=>a(t`
    <mdc-listitem
      @click="${l("onclick")}"
      @keydown="${l("onkeydown")}"
      @keyup="${l("onkeyup")}"
      @focus="${l("onfocus")}"
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
  `),ue={title:"Work In Progress/listitem",tags:["autodocs"],component:"mdc-listitem",render:z,parameters:{badges:["wip"]},argTypes:{variant:{control:"select",options:Object.values(_)},label:{control:"text"},"secondary-label":{control:"text"},"tertiary-label":{control:"text"},"side-header-text":{control:"text"},"subline-text":{control:"text"},disabled:{control:"boolean"},...E(["role","--mdc-listitem-background-color-active","--mdc-listitem-background-color-hover","--mdc-listitem-default-background-color","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color"]),...D,...O}},r={args:{variant:_.FULL_WIDTH,label:"Label Text","secondary-label":"Secondary Label","tertiary-label":"Teritary Label","side-header-text":"Header","subline-text":"Subline",disabled:!1}},o={render:()=>a(t`<mdc-listitem label="Primary Label"></mdc-listitem>`)},i={render:()=>a(t`
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
  `),args:{disabled:!0,label:"Primary Label","side-header-text":"Header"},argTypes:{...E(["variant","secondary-label","tertiary-label","subline-text","data-aria-label","tabIndex"])}},n={render:()=>a(t`
    <mdc-listitem label="Primary Label" 
    secondary-label="This is a long Secondary Label" 
    tertiary-label="Teritary Label">
      <div slot="leading-controls">
        <mdc-icon name="placeholder-bold"></mdc-icon>
      </div>
    </mdc-listitem>
  `)};var m,b,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: LISTITEM_VARIANTS.FULL_WIDTH,
    label: 'Label Text',
    'secondary-label': 'Secondary Label',
    'tertiary-label': 'Teritary Label',
    'side-header-text': 'Header',
    'subline-text': 'Subline',
    disabled: false
  }
}`,...(p=(b=r.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var g,h,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:'{\n  render: () => wrapWithList(html`<mdc-listitem label="Primary Label"></mdc-listitem>`)\n}',...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var L,u,x;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(T=(v=c.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var S,W,$;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => wrapWithList(html\`
    <mdc-listitem label="Primary Label">
      <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
    </mdc-listitem>
  \`)
}`,...($=(W=s.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var A,I,f;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(H=(w=n.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};const xe=["Example","LabelOnly","TrailingIcon","ListWithLabelAndLeadingAvatar","ListWithLabelAndTrailingBadge","ListWithDisableState","ListWithIconAndLabels"];export{r as Example,o as LabelOnly,d as ListWithDisableState,n as ListWithIconAndLabels,c as ListWithLabelAndLeadingAvatar,s as ListWithLabelAndTrailingBadge,i as TrailingIcon,xe as __namedExportsOrder,ue as default};
