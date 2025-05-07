import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as r}from"./lit-element-D5KKan5q.js";import{Q as n}from"./repeat-CNQ7t7Vw.js";import"./index-NL2RLj9m.js";import{c as b,s as k}from"./commonArgTypes-BluK8w5L.js";import{h as L}from"./utils-CO8B6ZcN.js";import"./index-TNsxyv01.js";import"./index-C-EIbZCM.js";import"./index-apx1csr8.js";import"./index-DFYnp3b5.js";import"./index-DONo0QAA.js";import"./index-BKk1AD_8.js";import"./index-jt085OsO.js";import{L as $}from"./listitem.component-DCWpekq1.js";import"./index-DaOyaB2Q.js";import"./v4-CQkTLCs1.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-Bb6vhctq.js";import"./index-C9z9WAEj.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./keys-CuA-OPmH.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./roles-DCpIf2k8.js";import"./text.constants-ZF0jM5wn.js";import"./index-D3DhXfcW.js";import"./state-CSSggq2n.js";import"./if-defined-D5BV9-c0.js";import"./IconNameMixin-CujGSn0t.js";import"./index-CcXofQbA.js";import"./index-DFWXGByN.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./buttonsimple.component-C1CVlJGY.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./class-map-BcCVsMyu.js";import"./button.component-DF6F2T9a.js";import"./button.utils-rNW36Ji7.js";import"./FormInternalsMixin-CSixOKbK.js";import"./query-DXShiZ7f.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-5n2-mkV5.js";import"./index-a057cAEn.js";import"./iframe-CMLBCrpv.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./popover.component-B7gte4U1.js";import"./toggle.constants-BfjbOmuC.js";import"./index-VsWj02oa.js";const g=["Maria Simpson","Diana Rees","Fiona Wallace","Abigail Reid","Theresa Miller","Andrea Wright","Natalie Hunter","Bernadette Carr","Samantha Robertson","Deirdre Clark"],I=a=>r`
  <mdc-list header-text="${a["header-text"]}" data-aria-label="${a["data-aria-label"]}">
    ${n(g,m=>r`<mdc-listitem
      @click="${t("onclick")}" label="${m}" variant="${$.INSET_PILL}"
    >
      <mdc-checkbox slot="leading-controls" data-aria-label="mock label"></mdc-checkbox>
      <mdc-avatar slot="leading-controls"
        initials="${[m.split(" ")[0][0],m.split(" ")[1][0]].join("")}"
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
  </mdc-list>`,gt={title:"Components/list",tags:["autodocs"],component:"mdc-list",render:I,parameters:{badges:["stable"]},argTypes:{"header-text":{control:"text"},"data-aria-label":{control:"text"},...L(["role","listItems","default"]),...b,...k}},i={args:{"header-text":"Participants List","data-aria-label":"View all participants"}},e={render:()=>r`
    <mdc-list>
      <mdc-listitem @click=${t("onclick")} label="List Item 1"></mdc-listitem>
      <mdc-listitem @click=${t("onclick")} label="List Item 2"></mdc-listitem>
      <mdc-listitem @click=${t("onclick")} label="List Item 3"></mdc-listitem>
      <mdc-divider></mdc-divider>
      <mdc-listitem @click=${t("onclick")} label="List Item 4"></mdc-listitem>
      <mdc-listitem @click=${t("onclick")} label="List Item 5"></mdc-listitem>
      <mdc-listitem @click=${t("onclick")} label="List Item 6"></mdc-listitem>
    </mdc-list>
  `};var l,c,o;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    'header-text': 'Participants List',
    'data-aria-label': 'View all participants'
  }
}`,...(o=(c=i.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};var s,d,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const It=["Example","ListWithDivider"];export{i as Example,e as ListWithDivider,It as __namedExportsOrder,gt as default};
