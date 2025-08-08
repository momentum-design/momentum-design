import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as e}from"./lit-element-D5KKan5q.js";import{Q as n}from"./repeat-CNQ7t7Vw.js";import"./index-B0nQz6QP.js";import{c as b,s as k}from"./commonArgTypes-BluK8w5L.js";import{d as L}from"./utils-CFOyPOhY.js";import{L as $}from"./listitem.component-BKW0gbwj.js";import"./index-BaVB7T1-.js";import"./index-Cr-tTtFm.js";import"./index-C22ADMoe.js";import"./index-BV2mzR5x.js";import"./index-BaC1j5O6.js";import"./index-BWIpxT1l.js";import"./index-BNTyituY.js";import"./index-BJhh_a2t.js";import"./index-riA1qVWu.js";import"./index-BRil66-r.js";import"./v4-CQkTLCs1.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-Bb6vhctq.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./provider.component-BaQC7CJH.js";import"./keys-hFXe221I.js";import"./roles-DU0xbrD4.js";import"./index-DYRxW7oy.js";import"./popover.component-BeJYT0F1.js";import"./if-defined-D5BV9-c0.js";import"./v4-CmTdKEVZ.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";import"./index-B-GnYs90.js";import"./state-C0WmBOuD.js";import"./IconNameMixin-CRlZlTtq.js";import"./index-CBGufzqe.js";import"./button.constants-BpS-4nLb.js";import"./buttonsimple.constants-CNAgWCp2.js";import"./buttonsimple.component-I-gcvU8_.js";import"./class-map-BcCVsMyu.js";import"./badge.constants-Cr-5n44e.js";import"./button.component-DvOKP7op.js";import"./button.utils-rNW36Ji7.js";import"./index-CePXUBNt.js";import"./index-D3HudnFx.js";import"./index-Dm_kZN_u.js";import"./DataAriaLabelMixin-Cpdy3gUS.js";import"./FormInternalsMixin-BIoSiX4k.js";import"./query-DXShiZ7f.js";import"./formfieldwrapper.component-C-SgLT80.js";import"./divider.constants-DBMTjDho.js";import"./iframe-DXnaf2Uw.js";import"../sb-preview/runtime.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-ChWiF_5p.js";import"./create-context-89xeped_.js";import"./toggle.constants-CKY-Rki5.js";import"./index-Dp2aryvJ.js";const h=["Maria Simpson","Diana Rees","Fiona Wallace","Abigail Reid","Theresa Miller","Andrea Wright","Natalie Hunter","Bernadette Carr","Samantha Robertson","Deirdre Clark"],x=t=>e` <mdc-list aria-label="${t["aria-label"]}">
    ${t.textPassedToListHeader?e`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
    ${n(h,l=>e`<mdc-listitem @click="${i("onclick")}" label="${l}" variant="${$.INSET_PILL}">
          <mdc-checkbox slot="leading-controls" data-aria-label="mock label"></mdc-checkbox>
          <mdc-avatar
            slot="leading-controls"
            initials="${[l.split(" ")[0][0],l.split(" ")[1][0]].join("")}"
          ></mdc-avatar>
          <mdc-button
            slot="trailing-controls"
            color="positive"
            prefix-icon="data-range-selection-bold"
            aria-label="mock label"
          ></mdc-button>
          <mdc-button slot="trailing-controls" variant="tertiary">Learn More</mdc-button>
          <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
        </mdc-listitem> `)}
  </mdc-list>`,Pt={title:"Components/list",tags:["autodocs"],component:"mdc-list",render:x,parameters:{badges:["stable"]},argTypes:{textPassedToListHeader:{control:"text",description:"Text to be rendered in the list header component. This is a control in storybook only."},"aria-label":{control:"text"},...L(["default","list-header"]),...b,...k}},a={args:{textPassedToListHeader:"Participants List","aria-label":"View all participants"}},r={render:t=>e`
    <mdc-list aria-label="${t["aria-label"]}">
      ${t.textPassedToListHeader?e`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
      <mdc-listitem @click=${i("onclick")} label="List Item 1"></mdc-listitem>
      <mdc-listitem @click=${i("onclick")} label="List Item 2"></mdc-listitem>
      <mdc-listitem @click=${i("onclick")} label="List Item 3"></mdc-listitem>
      <mdc-divider></mdc-divider>
      <mdc-listitem @click=${i("onclick")} label="List Item 4"></mdc-listitem>
      <mdc-listitem @click=${i("onclick")} label="List Item 5"></mdc-listitem>
      <mdc-listitem @click=${i("onclick")} label="List Item 6"></mdc-listitem>
    </mdc-list>
  `,args:{textPassedToListHeader:"Participants List","aria-label":"View all participants"}};var s,o,m;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    textPassedToListHeader: 'Participants List',
    'aria-label': 'View all participants'
  }
}`,...(m=(o=a.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var c,d,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => html\`
    <mdc-list aria-label="\${args['aria-label']}">
      \${args.textPassedToListHeader ? html\`<mdc-listheader slot="list-header" header-text="\${args.textPassedToListHeader}"></mdc-listheader>\` : ''}
      <mdc-listitem @click=\${action('onclick')} label="List Item 1"></mdc-listitem>
      <mdc-listitem @click=\${action('onclick')} label="List Item 2"></mdc-listitem>
      <mdc-listitem @click=\${action('onclick')} label="List Item 3"></mdc-listitem>
      <mdc-divider></mdc-divider>
      <mdc-listitem @click=\${action('onclick')} label="List Item 4"></mdc-listitem>
      <mdc-listitem @click=\${action('onclick')} label="List Item 5"></mdc-listitem>
      <mdc-listitem @click=\${action('onclick')} label="List Item 6"></mdc-listitem>
    </mdc-list>
  \`,
  args: {
    textPassedToListHeader: 'Participants List',
    'aria-label': 'View all participants'
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const ut=["Example","ListWithDivider"];export{a as Example,r as ListWithDivider,ut as __namedExportsOrder,Pt as default};
