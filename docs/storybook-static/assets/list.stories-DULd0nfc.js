import{k as m}from"./lit-element-CHllvULs.js";import{Q as p}from"./repeat-CnoDnp1o.js";import{L as n}from"./index-_pMkPRMO.js";import{c as b,s as L}from"./commonArgTypes-BluK8w5L.js";import{h as g}from"./utils-D1SE5bce.js";import"./index-CuAM_C1j.js";import"./index-BGaairDN.js";import"./index-DeqJyyCU.js";import"./index-Is41_kCk.js";import"./index-2a-9S-ch.js";import"./index-BTMWcOwZ.js";import"./index-CQMdz21n.js";import"./index-CVmuatNI.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-D8kir-nK.js";import"./index-HW6KrQZO.js";import"./DataAriaLabelMixin-vs_lw9aw.js";import"./text.constants-DJu2q-6E.js";import"./index-BGkqZMsC.js";import"./FormInternalsMixin-DnHjpz6p.js";import"./DisabledMixin-DBt9didn.js";import"./buttonsimple.component-BAX6wI0V.js";import"./index-BGjwsboe.js";import"./state-CWckTc1X.js";import"./if-defined-C4tJgJ33.js";import"./IconNameMixin-DXlfdGtk.js";import"./index-0DSrwNWs.js";import"./button.constants-Bg6wWCWM.js";import"./class-map-DVSk4OQh.js";import"./button.utils-Ckgdbdrp.js";import"./formfieldwrapper.component-63e8oEkZ.js";import"./v4-CmTdKEVZ.js";import"./iframe-CLmQ9ERx.js";import"../sb-preview/runtime.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-BsPZ_dvP.js";import"./create-context-89xeped_.js";import"./index-fAnYsQM2.js";const I=["Maria Simpson","Diana Rees","Fiona Wallace","Abigail Reid","Theresa Miller","Andrea Wright","Natalie Hunter","Bernadette Carr","Samantha Robertson","Deirdre Clark"],h=r=>m`
  <mdc-list header-text="${r["header-text"]}" data-aria-label="${r["data-aria-label"]}">
    ${p(I,e=>m`<mdc-listitem label="${e}" variant="${n.INSET_PILL}">
      <mdc-checkbox slot="leading-controls" data-aria-label="mock label"></mdc-checkbox>
      <mdc-avatar slot="leading-controls"
        initials="${[e.split(" ")[0][0],e.split(" ")[1][0]].join("")}"
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
  </mdc-list>`,et={title:"Work In Progress/list",tags:["autodocs"],component:"mdc-list",render:h,parameters:{badges:["wip"]},argTypes:{"header-text":{control:"text"},"data-aria-label":{control:"text"},...g(["role","listItems","default"]),...b,...L}},t={args:{"header-text":"Participants List","data-aria-label":"View all participants"}},i={render:()=>m`
    <mdc-list>
      <mdc-listitem label="List Item 1"></mdc-listitem>
      <mdc-listitem label="List Item 2"></mdc-listitem>
      <mdc-listitem label="List Item 3"></mdc-listitem>
      <mdc-divider></mdc-divider>
      <mdc-listitem label="List Item 4"></mdc-listitem>
      <mdc-listitem label="List Item 5"></mdc-listitem>
      <mdc-listitem label="List Item 6"></mdc-listitem>
    </mdc-list>
  `};var a,l,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    'header-text': 'Participants List',
    'data-aria-label': 'View all participants'
  }
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var o,d,c;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-list>
      <mdc-listitem label="List Item 1"></mdc-listitem>
      <mdc-listitem label="List Item 2"></mdc-listitem>
      <mdc-listitem label="List Item 3"></mdc-listitem>
      <mdc-divider></mdc-divider>
      <mdc-listitem label="List Item 4"></mdc-listitem>
      <mdc-listitem label="List Item 5"></mdc-listitem>
      <mdc-listitem label="List Item 6"></mdc-listitem>
    </mdc-list>
  \`
}`,...(c=(d=i.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const mt=["Example","ListWithDivider"];export{t as Example,i as ListWithDivider,mt as __namedExportsOrder,et as default};
