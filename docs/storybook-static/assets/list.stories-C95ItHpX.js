import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as r}from"./lit-element-D5KKan5q.js";import{Q as n}from"./repeat-CNQ7t7Vw.js";import"./index-B4QZ2VpB.js";import{c as b,s as k}from"./commonArgTypes-BluK8w5L.js";import{h as L}from"./utils-CF1irry3.js";import"./index-DdbcqXWy.js";import"./index-sdC4q46b.js";import"./index-BSF1GxeV.js";import"./index-BqMbwpsf.js";import"./index-DCZdzMqH.js";import"./index-CKu-pFgs.js";import"./index-BCi5wcp3.js";import{L as $}from"./listitem.component-BsXDfNEd.js";import"./index-Bmx8_ic5.js";import"./v4-CQkTLCs1.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-Bb6vhctq.js";import"./index-C9z9WAEj.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./keys-Hz01Ianf.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./roles-BH_hBfTz.js";import"./index-BrLJ_9IK.js";import"./index-DWRtudfj.js";import"./popover.component-b3MZdLOz.js";import"./if-defined-D5BV9-c0.js";import"./v4-CmTdKEVZ.js";import"./state-CSSggq2n.js";import"./IconNameMixin-CujGSn0t.js";import"./index-B-GnYs90.js";import"./index-DYkwZRlJ.js";import"./button.constants-ld6CW6g-.js";import"./buttonsimple.constants-wHSLNcjv.js";import"./buttonsimple.component-CHHctxKG.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./class-map-BcCVsMyu.js";import"./badge.constants-B-xnQ0yZ.js";import"./button.component-CzH-VU4W.js";import"./button.utils-rNW36Ji7.js";import"./index-WexvvS10.js";import"./index-Cs7A1LnK.js";import"./index-96ToHBu8.js";import"./FormInternalsMixin-CqDKsEWP.js";import"./query-DXShiZ7f.js";import"./formfieldwrapper.component-nmLPHhLb.js";import"./divider.constants-DyEGqhgz.js";import"./iframe-DUofq7Yr.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./toggle.constants-Bq8GYsb9.js";import"./index-DgfR5KE5.js";const g=["Maria Simpson","Diana Rees","Fiona Wallace","Abigail Reid","Theresa Miller","Andrea Wright","Natalie Hunter","Bernadette Carr","Samantha Robertson","Deirdre Clark"],I=a=>r` <mdc-list header-text="${a["header-text"]}" data-aria-label="${a["data-aria-label"]}">
    ${n(g,m=>r`<mdc-listitem @click="${t("onclick")}" label="${m}" variant="${$.INSET_PILL}">
          <mdc-checkbox slot="leading-controls" data-aria-label="mock label"></mdc-checkbox>
          <mdc-avatar
            slot="leading-controls"
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
        </mdc-listitem> `)}
  </mdc-list>`,xt={title:"Components/list",tags:["autodocs"],component:"mdc-list",render:I,parameters:{badges:["stable"]},argTypes:{"header-text":{control:"text"},"data-aria-label":{control:"text"},...L(["role","listItems","default"]),...b,...k}},i={args:{"header-text":"Participants List","data-aria-label":"View all participants"}},e={render:()=>r`
    <mdc-list>
      <mdc-listitem @click=${t("onclick")} label="List Item 1"></mdc-listitem>
      <mdc-listitem @click=${t("onclick")} label="List Item 2"></mdc-listitem>
      <mdc-listitem @click=${t("onclick")} label="List Item 3"></mdc-listitem>
      <mdc-divider></mdc-divider>
      <mdc-listitem @click=${t("onclick")} label="List Item 4"></mdc-listitem>
      <mdc-listitem @click=${t("onclick")} label="List Item 5"></mdc-listitem>
      <mdc-listitem @click=${t("onclick")} label="List Item 6"></mdc-listitem>
    </mdc-list>
  `};var o,l,c;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    'header-text': 'Participants List',
    'data-aria-label': 'View all participants'
  }
}`,...(c=(l=i.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var s,d,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const vt=["Example","ListWithDivider"];export{i as Example,e as ListWithDivider,vt as __namedExportsOrder,xt as default};
