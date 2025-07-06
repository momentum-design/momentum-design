import{k as c}from"./lit-element-D5KKan5q.js";import{c as s,s as b}from"./commonArgTypes-BluK8w5L.js";import{a as u}from"./utils-CF1irry3.js";import"./index-hFelCdMA.js";import"./index-BwTiLgmE.js";import"./index-BOaRIeI8.js";import"./index-BmHe-T6f.js";import"./index-Cdz8MLaY.js";import"./index-C9z9WAEj.js";import"./DisabledMixin-BZruwOeC.js";import"./index-BrLJ_9IK.js";import"./index-DfhuLnrm.js";import"./popover.component-Bw5zQP8M.js";import"./base-DIkkzJ-c.js";import"./if-defined-D5BV9-c0.js";import"./roles-BH_hBfTz.js";import"./v4-CmTdKEVZ.js";import"./menuitem.component-C82Go1iM.js";import"./listitem.component-Bh3_BYs0.js";import"./query-assigned-elements-uEuc3rg8.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-Cx7wvr8C.js";import"./menusection.constants-BCYXL6dH.js";import"./menupopover.constants-Df21F9dQ.js";import"./menuitemradio.constants-CPWIpsqE.js";import"./index-DiQBAA7b.js";import"./iframe-B2-KmsL9.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./index-DxELvD6O.js";import"./toggle.constants-3Y_9QpGb.js";import"./menuitemcheckbox.constants-DmrkQGAP.js";import"./divider.constants-DyEGqhgz.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";const l=e=>c`<div role="menubar" style="width: 25rem;">${e}</div>`,p=e=>l(c` <mdc-menusection headerText="${e.headerText}" aria-label="${e["aria-label"]}">
      <mdc-menuitem label="Menu item 1"></mdc-menuitem>
      <mdc-menuitem label="Menu item 2"></mdc-menuitem>
      <mdc-menuitem label="Menu item 3"></mdc-menuitem>
    </mdc-menusection>`),Z={title:"Work In Progress/menu/menusection",tags:["autodocs"],component:"mdc-menusection",parameters:{badges:["wip"]},argTypes:{headerText:{control:"text"},"aria-label":{control:"text"},...s,...b}},m={render:p,args:{headerText:"Section label"},...u()},i={render:()=>l(c` <mdc-menusection>
          <mdc-menuitemcheckbox label="Checkbox1"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox label="Checkbox2"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox label="Checkbox3"></mdc-menuitemcheckbox>
          <mdc-menuitemradio label="Radio1"></mdc-menuitemradio>
          <mdc-menuitemradio label="Radio2"></mdc-menuitemradio>
          <mdc-menuitemradio label="Radio3"></mdc-menuitemradio>
        </mdc-menusection>
        <mdc-divider></mdc-divider>
        <mdc-menusection>
          <mdc-menuitemradio label="Radio1"></mdc-menuitemradio>
          <mdc-menuitemradio label="Radio2"></mdc-menuitemradio>
          <mdc-menuitemradio label="Radio3"></mdc-menuitemradio>
        </mdc-menusection>
        <mdc-divider></mdc-divider>
        <mdc-menusection headerText="Section with menu items">
          <mdc-menuitem label="MenuItem1"></mdc-menuitem>
          <mdc-menuitem label="MenuItem2"></mdc-menuitem>
        </mdc-menusection>
        <mdc-divider></mdc-divider>
        <mdc-menusection headerText="Section with checkboxes and radio buttons">
          <mdc-menuitemcheckbox label="Toggle6" indicator="toggle"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox label="Checkmark7" indicator="checkmark" aria-label="Checkbox 7"></mdc-menuitemcheckbox>
        </mdc-menusection>`),...u()};var t,d,o;m.parameters={...m.parameters,docs:{...(t=m.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render,
  args: {
    headerText: 'Section label'
  },
  ...hideAllControls()
}`,...(o=(d=m.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};var n,r,a;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\` <mdc-menusection>
          <mdc-menuitemcheckbox label="Checkbox1"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox label="Checkbox2"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox label="Checkbox3"></mdc-menuitemcheckbox>
          <mdc-menuitemradio label="Radio1"></mdc-menuitemradio>
          <mdc-menuitemradio label="Radio2"></mdc-menuitemradio>
          <mdc-menuitemradio label="Radio3"></mdc-menuitemradio>
        </mdc-menusection>
        <mdc-divider></mdc-divider>
        <mdc-menusection>
          <mdc-menuitemradio label="Radio1"></mdc-menuitemradio>
          <mdc-menuitemradio label="Radio2"></mdc-menuitemradio>
          <mdc-menuitemradio label="Radio3"></mdc-menuitemradio>
        </mdc-menusection>
        <mdc-divider></mdc-divider>
        <mdc-menusection headerText="Section with menu items">
          <mdc-menuitem label="MenuItem1"></mdc-menuitem>
          <mdc-menuitem label="MenuItem2"></mdc-menuitem>
        </mdc-menusection>
        <mdc-divider></mdc-divider>
        <mdc-menusection headerText="Section with checkboxes and radio buttons">
          <mdc-menuitemcheckbox label="Toggle6" indicator="toggle"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox label="Checkmark7" indicator="checkmark" aria-label="Checkbox 7"></mdc-menuitemcheckbox>
        </mdc-menusection>\`),
  ...hideAllControls()
}`,...(a=(r=i.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const ee=["Example","MultipleMenuSections"];export{m as Example,i as MultipleMenuSections,ee as __namedExportsOrder,Z as default};
