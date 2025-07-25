import{k as o}from"./lit-element-D5KKan5q.js";import{c as l,s as b}from"./commonArgTypes-BluK8w5L.js";import{a as s}from"./utils-CF1irry3.js";import"./index-dnKY570y.js";import"./index-CT6ohuYF.js";import"./index-D74fadQc.js";import"./index-CaHle-69.js";import"./index-CKu-pFgs.js";import"./index-C9z9WAEj.js";import"./if-defined-D5BV9-c0.js";import"./index-2PiEGcHV.js";import"./roles-BH_hBfTz.js";import"./sidenavigation.component-CWM_hoY5.js";import"./state-CSSggq2n.js";import"./index-BrLJ_9IK.js";import"./buttonsimple.constants-wHSLNcjv.js";import"./badge.constants-B-xnQ0yZ.js";import"./divider.constants-DyEGqhgz.js";import"./keys-Hz01Ianf.js";import"./create-context-89xeped_.js";import"./menupopover.constants-DCojDLmX.js";import"./popover.component-b3MZdLOz.js";import"./base-DIkkzJ-c.js";import"./menuitemradio.constants-BhdhQZcn.js";import"./index-CnhP07iX.js";import"./index-B1F6ryiU.js";import"./iframe-DbyPoBUR.js";import"../sb-preview/runtime.js";import"./iconprovider.component-Bvm-70EG.js";import"./index-B-GnYs90.js";import"./index-DWRtudfj.js";import"./v4-CmTdKEVZ.js";import"./menuitem.component-BdpRv_DR.js";import"./listitem.component-BsXDfNEd.js";import"./query-assigned-elements-uEuc3rg8.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-zDFpppiy.js";import"./toggle.constants-za2bC1t8.js";import"./class-map-BcCVsMyu.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DmrkQGAP.js";import"./index-Cdz8MLaY.js";import"./button.constants-ld6CW6g-.js";const u=e=>o`<div role="menubar" style="width: 25rem;">${e}</div>`,h=e=>u(o` <mdc-menusection
      header-text="${e["header-text"]}"
      aria-label="${e["aria-label"]}"
      prefix-icon="${e["prefix-icon"]}"
      ?show-divider="${e["show-divider"]}"
    >
      <mdc-menuitem label="Menu item 1"></mdc-menuitem>
      <mdc-menuitem label="Menu item 2"></mdc-menuitem>
      <mdc-menuitem label="Menu item 3"></mdc-menuitem>
    </mdc-menusection>`),de={title:"Components/menupopover/menusection",tags:["autodocs"],component:"mdc-menusection",parameters:{badges:["stable"]},argTypes:{"header-text":{control:"text"},"aria-label":{control:"text"},"prefix-icon":{control:"text"},"show-divider":{control:"boolean"},...l,...b}},m={render:h,args:{"header-text":"Menu Section label","prefix-icon":"placeholder-bold","show-divider":!1}},i={render:()=>u(o`
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
}`,...(r=(a=i.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const ne=["Example","MultipleMenuSections"];export{m as Example,i as MultipleMenuSections,ne as __namedExportsOrder,de as default};
