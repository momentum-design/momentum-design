import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as l}from"./lit-element-CHllvULs.js";import{Q as p}from"./repeat-CnoDnp1o.js";import{L as k}from"./index-BwzlRlAk.js";import{c as b,s as L}from"./commonArgTypes-BluK8w5L.js";import{h as g}from"./utils-D1SE5bce.js";import"./index-y7RqcNps.js";import"./index-D7TfTGI1.js";import"./index-DHQHaLdp.js";import"./index-DC_MINyB.js";import"./index-DVzS1xOX.js";import"./index-Df9-gRJ-.js";import"./index-DUX9WrWe.js";import"./index-GE8cwMoi.js";import"./v4-CQkTLCs1.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-D8kir-nK.js";import"./index-HW6KrQZO.js";import"./DataAriaLabelMixin-vs_lw9aw.js";import"./text.constants-DJu2q-6E.js";import"./index-BGkqZMsC.js";import"./FormInternalsMixin-Ch02HUy5.js";import"./DisabledMixin-DBt9didn.js";import"./buttonsimple.component-BPMM56DO.js";import"./index-BGjwsboe.js";import"./state-CWckTc1X.js";import"./if-defined-C4tJgJ33.js";import"./IconNameMixin-DXlfdGtk.js";import"./index-BCq72oPp.js";import"./button.constants-BtWRRBoE.js";import"./class-map-DVSk4OQh.js";import"./button.utils-CM5PFBkb.js";import"./formfieldwrapper.component-63e8oEkZ.js";import"./iframe-Cbkw04dK.js";import"../sb-preview/runtime.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-BsPZ_dvP.js";import"./create-context-89xeped_.js";import"./index-7yGVwRQ8.js";const I=["Maria Simpson","Diana Rees","Fiona Wallace","Abigail Reid","Theresa Miller","Andrea Wright","Natalie Hunter","Bernadette Carr","Samantha Robertson","Deirdre Clark"],$=c=>l`
  <mdc-list header-text="${c["header-text"]}" data-aria-label="${c["data-aria-label"]}">
    ${p(I,a=>l`<mdc-listitem
      @click="${t("onclick")}" label="${a}" variant="${k.INSET_PILL}"
    >
      <mdc-checkbox slot="leading-controls" data-aria-label="mock label"></mdc-checkbox>
      <mdc-avatar slot="leading-controls"
        initials="${[a.split(" ")[0][0],a.split(" ")[1][0]].join("")}"
      ></mdc-avatar>
      <mdc-button
        slot="trailing-controls"
        color="positive"
        prefix-icon="data-range-selection-bold"
        aria-label="mock label"
      ></mdc-button>
      <mdc-button slot="trailing-controls" variant="tertiary">Learn More</mdc-button>
      <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
    </mdc-listitem>
    `)}
  </mdc-list>`,lt={title:"Work In Progress/list",tags:["autodocs"],component:"mdc-list",render:$,parameters:{badges:["wip"]},argTypes:{"header-text":{control:"text"},"data-aria-label":{control:"text"},...g(["role","listItems","default"]),...b,...L}},i={args:{"header-text":"Participants List","data-aria-label":"View all participants"}},e={render:()=>l`
    <mdc-list>
      <mdc-listitem @click=${t("onclick")} label="List Item 1"></mdc-listitem>
      <mdc-listitem @click=${t("onclick")} label="List Item 2"></mdc-listitem>
      <mdc-listitem @click=${t("onclick")} label="List Item 3"></mdc-listitem>
      <mdc-divider></mdc-divider>
      <mdc-listitem @click=${t("onclick")} label="List Item 4"></mdc-listitem>
      <mdc-listitem @click=${t("onclick")} label="List Item 5"></mdc-listitem>
      <mdc-listitem @click=${t("onclick")} label="List Item 6"></mdc-listitem>
    </mdc-list>
  `};var m,r,o;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    'header-text': 'Participants List',
    'data-aria-label': 'View all participants'
  }
}`,...(o=(r=i.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var s,d,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-list>
      <mdc-listitem @click=\${action('onclick')} label="List Item 1"></mdc-listitem>
      <mdc-listitem @click=\${action('onclick')} label="List Item 2"></mdc-listitem>
      <mdc-listitem @click=\${action('onclick')} label="List Item 3"></mdc-listitem>
      <mdc-divider></mdc-divider>
      <mdc-listitem @click=\${action('onclick')} label="List Item 4"></mdc-listitem>
      <mdc-listitem @click=\${action('onclick')} label="List Item 5"></mdc-listitem>
      <mdc-listitem @click=\${action('onclick')} label="List Item 6"></mdc-listitem>
    </mdc-list>
  \`
}`,...(n=(d=e.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};const ct=["Example","ListWithDivider"];export{i as Example,e as ListWithDivider,ct as __namedExportsOrder,lt as default};
