import{k as o}from"./lit-element-D5KKan5q.js";import{c as l,s as b}from"./commonArgTypes-BluK8w5L.js";import{a as s}from"./utils-CF1irry3.js";import"./index-DyHoTS4p.js";import"./index-C4T65yx6.js";import"./index-kZUFehXP.js";import"./index-CCbYzI8p.js";import"./index-BvDNJyPW.js";import"./index-C9z9WAEj.js";import"./if-defined-D5BV9-c0.js";import"./index-2PiEGcHV.js";import"./roles-BH_hBfTz.js";import"./sidenavigation.component-B4h9Ez7b.js";import"./state-CSSggq2n.js";import"./index-BrLJ_9IK.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./badge.constants-B-xnQ0yZ.js";import"./divider.constants-DyEGqhgz.js";import"./listitem.component-BsBmhI_c.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-DPX8nO8h.js";import"./popover.component-DRVNZbmp.js";import"./v4-CmTdKEVZ.js";import"./index-B-GnYs90.js";import"./create-context-89xeped_.js";import"./menupopover.constants-9M2YGSKC.js";import"./menusection.constants-BCYXL6dH.js";import"./index-eeoPeXT-.js";import"./index-B50FLi9R.js";import"./iframe-DRFGPQtp.js";import"../sb-preview/runtime.js";import"./iconprovider.component-Bvm-70EG.js";import"./menuitem.component-BMelh1qR.js";import"./index-BR-dVFEf.js";import"./toggle.constants-meYRl7Xn.js";import"./index-Cdz8MLaY.js";import"./button.constants-D0QAbDxL.js";const u=e=>o`<div role="menubar" style="width: 25rem;">${e}</div>`,h=e=>u(o` <mdc-menusection
      header-text="${e["header-text"]}"
      aria-label="${e["aria-label"]}"
      prefix-icon="${e["prefix-icon"]}"
      ?show-divider="${e["show-divider"]}"
    >
      <mdc-menuitem label="Menu item 1"></mdc-menuitem>
      <mdc-menuitem label="Menu item 2"></mdc-menuitem>
      <mdc-menuitem label="Menu item 3"></mdc-menuitem>
    </mdc-menusection>`),me={title:"Components/menupopover/menusection",tags:["autodocs"],component:"mdc-menusection",parameters:{badges:["stable"]},argTypes:{"header-text":{control:"text"},"aria-label":{control:"text"},"prefix-icon":{control:"text"},"show-divider":{control:"boolean"},...l,...b}},m={render:h,args:{"header-text":"Menu Section label","prefix-icon":"placeholder-bold","show-divider":!1}},i={render:()=>u(o`
      <mdc-menusection show-divider>
        <mdc-menuitemcheckbox label="Checkbox1"></mdc-menuitemcheckbox>
        <mdc-menuitemcheckbox label="Checkbox2"></mdc-menuitemcheckbox>
        <mdc-menuitemcheckbox label="Checkbox3"></mdc-menuitemcheckbox>
        <mdc-menuitemradio label="Radio1"></mdc-menuitemradio>
        <mdc-menuitemradio label="Radio2"></mdc-menuitemradio>
        <mdc-menuitemradio label="Radio3"></mdc-menuitemradio>
      </mdc-menusection>
      <mdc-menusection show-divider>
        <mdc-menuitemradio label="Radio1"></mdc-menuitemradio>
        <mdc-menuitemradio label="Radio2"></mdc-menuitemradio>
        <mdc-menuitemradio label="Radio3"></mdc-menuitemradio>
      </mdc-menusection>
      <mdc-menusection show-divider header-text="Section with menu items">
        <mdc-menuitem label="MenuItem1"></mdc-menuitem>
        <mdc-menuitem label="MenuItem2"></mdc-menuitem>
      </mdc-menusection>
      <mdc-menusection show-divider>
        <mdc-menuitemcheckbox label="Toggle6" indicator="toggle"></mdc-menuitemcheckbox>
        <mdc-menuitemcheckbox
          label="Checkmark7"
          indicator="checkmark"
          aria-label="Checkbox 7"
        ></mdc-menuitemcheckbox> </mdc-menusection
      ><mdc-menusection show-divider header-text="Section with checkboxes and radio buttons">
        <mdc-menuitemcheckbox name="checkbox" label="Checkbox1"></mdc-menuitemcheckbox>
        <mdc-menuitemcheckbox name="checkbox" label="Checkbox2"></mdc-menuitemcheckbox>
        <mdc-menuitemcheckbox name="checkbox" label="Checkbox3"></mdc-menuitemcheckbox>
        <mdc-menuitemradio name="radio" label="Radio1"></mdc-menuitemradio>
        <mdc-menuitemradio name="radio" label="Radio2"></mdc-menuitemradio>
        <mdc-menuitemradio name="radio" label="Radio3"></mdc-menuitemradio>
      </mdc-menusection>
      <mdc-menusection show-divider>
        <mdc-menuitemradio name="radio" label="Radio1"></mdc-menuitemradio>
        <mdc-menuitemradio name="radio" label="Radio2"></mdc-menuitemradio>
        <mdc-menuitemradio name="radio" label="Radio3"></mdc-menuitemradio>
      </mdc-menusection>
    `),...s()};var c,d,n;m.parameters={...m.parameters,docs:{...(c=m.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render,
  args: {
    'header-text': 'Menu Section label',
    'prefix-icon': 'placeholder-bold',
    'show-divider': false
  }
}`,...(n=(d=m.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var t,a,r;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-menusection show-divider>
        <mdc-menuitemcheckbox label="Checkbox1"></mdc-menuitemcheckbox>
        <mdc-menuitemcheckbox label="Checkbox2"></mdc-menuitemcheckbox>
        <mdc-menuitemcheckbox label="Checkbox3"></mdc-menuitemcheckbox>
        <mdc-menuitemradio label="Radio1"></mdc-menuitemradio>
        <mdc-menuitemradio label="Radio2"></mdc-menuitemradio>
        <mdc-menuitemradio label="Radio3"></mdc-menuitemradio>
      </mdc-menusection>
      <mdc-menusection show-divider>
        <mdc-menuitemradio label="Radio1"></mdc-menuitemradio>
        <mdc-menuitemradio label="Radio2"></mdc-menuitemradio>
        <mdc-menuitemradio label="Radio3"></mdc-menuitemradio>
      </mdc-menusection>
      <mdc-menusection show-divider header-text="Section with menu items">
        <mdc-menuitem label="MenuItem1"></mdc-menuitem>
        <mdc-menuitem label="MenuItem2"></mdc-menuitem>
      </mdc-menusection>
      <mdc-menusection show-divider>
        <mdc-menuitemcheckbox label="Toggle6" indicator="toggle"></mdc-menuitemcheckbox>
        <mdc-menuitemcheckbox
          label="Checkmark7"
          indicator="checkmark"
          aria-label="Checkbox 7"
        ></mdc-menuitemcheckbox> </mdc-menusection
      ><mdc-menusection show-divider header-text="Section with checkboxes and radio buttons">
        <mdc-menuitemcheckbox name="checkbox" label="Checkbox1"></mdc-menuitemcheckbox>
        <mdc-menuitemcheckbox name="checkbox" label="Checkbox2"></mdc-menuitemcheckbox>
        <mdc-menuitemcheckbox name="checkbox" label="Checkbox3"></mdc-menuitemcheckbox>
        <mdc-menuitemradio name="radio" label="Radio1"></mdc-menuitemradio>
        <mdc-menuitemradio name="radio" label="Radio2"></mdc-menuitemradio>
        <mdc-menuitemradio name="radio" label="Radio3"></mdc-menuitemradio>
      </mdc-menusection>
      <mdc-menusection show-divider>
        <mdc-menuitemradio name="radio" label="Radio1"></mdc-menuitemradio>
        <mdc-menuitemradio name="radio" label="Radio2"></mdc-menuitemradio>
        <mdc-menuitemradio name="radio" label="Radio3"></mdc-menuitemradio>
      </mdc-menusection>
    \`),
  ...hideAllControls()
}`,...(r=(a=i.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const ie=["Example","MultipleMenuSections"];export{m as Example,i as MultipleMenuSections,ie as __namedExportsOrder,me as default};
