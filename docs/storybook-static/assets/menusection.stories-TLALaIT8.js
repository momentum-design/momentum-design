import{k as c}from"./lit-element-D5KKan5q.js";import{c as u,s as b}from"./commonArgTypes-BluK8w5L.js";import{a as s}from"./utils-CF1irry3.js";import"./index-DQsK-nZJ.js";import"./index-c9szE-SX.js";import"./index-ksB9TxAy.js";import"./index-BvDNJyPW.js";import"./index-CvI8uLgO.js";import"./iframe-DqLWW5Nb.js";import"../sb-preview/runtime.js";import"./index-C9z9WAEj.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./index-B-GnYs90.js";import"./index-Cdz8MLaY.js";import"./DisabledMixin-BZruwOeC.js";import"./index-BrLJ_9IK.js";import"./index-C1oDvCyf.js";import"./popover.component-gG75l09H.js";import"./base-DIkkzJ-c.js";import"./if-defined-D5BV9-c0.js";import"./roles-BH_hBfTz.js";import"./v4-CmTdKEVZ.js";import"./menuitem.component-D7F5qKBY.js";import"./listitem.component-CHPaF0Zk.js";import"./query-assigned-elements-uEuc3rg8.js";import"./TabIndexMixin-CsrHswKP.js";import"./menusection.constants-BCYXL6dH.js";import"./menupopover.constants-CVQbBb-g.js";import"./menuitemradio.constants-CPWIpsqE.js";import"./index-DhZg2np4.js";import"./index-C4_racbf.js";import"./toggle.constants-D0hNFw52.js";import"./menuitemcheckbox.constants-DmrkQGAP.js";import"./divider.constants-DyEGqhgz.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";const l=e=>c`<div role="menubar" style="width: 25rem;">${e}</div>`,p=e=>l(c` <mdc-menusection
      header-text="${e["header-text"]}"
      aria-label="${e["aria-label"]}"
      prefix-icon="${e["prefix-icon"]}"
    >
      <mdc-menuitem label="Menu item 1"></mdc-menuitem>
      <mdc-menuitem label="Menu item 2"></mdc-menuitem>
      <mdc-menuitem label="Menu item 3"></mdc-menuitem>
    </mdc-menusection>`),ee={title:"Components/menupopover/menusection",tags:["autodocs"],component:"mdc-menusection",parameters:{badges:["stable"]},argTypes:{"header-text":{control:"text"},"aria-label":{control:"text"},"prefix-icon":{control:"text"},...u,...b}},m={render:p,args:{"header-text":"Menu Section label","prefix-icon":"placeholder-bold"}},i={render:()=>l(c`<mdc-menusection header-text="Section with menu items">
          <mdc-menuitem label="MenuItem1"></mdc-menuitem>
          <mdc-menuitem label="MenuItem2"></mdc-menuitem>
          <mdc-divider></mdc-divider>
        </mdc-menusection>
        <mdc-menusection header-text="Section with checkboxes and radio buttons">
          <mdc-menuitemcheckbox label="Toggle6" indicator="toggle"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox label="Checkmark7" indicator="checkmark" aria-label="Checkbox 7"></mdc-menuitemcheckbox>
          <mdc-divider></mdc-divider>
        </mdc-menusection>
        <mdc-menusection>
          <mdc-menuitemcheckbox name="checkbox" label="Checkbox1"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox name="checkbox" label="Checkbox2"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox name="checkbox" label="Checkbox3"></mdc-menuitemcheckbox>
          <mdc-menuitemradio name="radio" label="Radio1"></mdc-menuitemradio>
          <mdc-menuitemradio name="radio" label="Radio2"></mdc-menuitemradio>
          <mdc-menuitemradio name="radio" label="Radio3"></mdc-menuitemradio>
          <mdc-divider></mdc-divider>
        </mdc-menusection>
        <mdc-menusection>
          <mdc-menuitemradio name="radio" label="Radio1"></mdc-menuitemradio>
          <mdc-menuitemradio name="radio" label="Radio2"></mdc-menuitemradio>
          <mdc-menuitemradio name="radio" label="Radio3"></mdc-menuitemradio>
        </mdc-menusection>`),...s()};var o,t,n;m.parameters={...m.parameters,docs:{...(o=m.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render,
  args: {
    'header-text': 'Menu Section label',
    'prefix-icon': 'placeholder-bold'
  }
}`,...(n=(t=m.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var d,a,r;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`<mdc-menusection header-text="Section with menu items">
          <mdc-menuitem label="MenuItem1"></mdc-menuitem>
          <mdc-menuitem label="MenuItem2"></mdc-menuitem>
          <mdc-divider></mdc-divider>
        </mdc-menusection>
        <mdc-menusection header-text="Section with checkboxes and radio buttons">
          <mdc-menuitemcheckbox label="Toggle6" indicator="toggle"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox label="Checkmark7" indicator="checkmark" aria-label="Checkbox 7"></mdc-menuitemcheckbox>
          <mdc-divider></mdc-divider>
        </mdc-menusection>
        <mdc-menusection>
          <mdc-menuitemcheckbox name="checkbox" label="Checkbox1"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox name="checkbox" label="Checkbox2"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox name="checkbox" label="Checkbox3"></mdc-menuitemcheckbox>
          <mdc-menuitemradio name="radio" label="Radio1"></mdc-menuitemradio>
          <mdc-menuitemradio name="radio" label="Radio2"></mdc-menuitemradio>
          <mdc-menuitemradio name="radio" label="Radio3"></mdc-menuitemradio>
          <mdc-divider></mdc-divider>
        </mdc-menusection>
        <mdc-menusection>
          <mdc-menuitemradio name="radio" label="Radio1"></mdc-menuitemradio>
          <mdc-menuitemradio name="radio" label="Radio2"></mdc-menuitemradio>
          <mdc-menuitemradio name="radio" label="Radio3"></mdc-menuitemradio>
        </mdc-menusection>\`),
  ...hideAllControls()
}`,...(r=(a=i.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const me=["Example","MultipleMenuSections"];export{m as Example,i as MultipleMenuSections,me as __namedExportsOrder,ee as default};
