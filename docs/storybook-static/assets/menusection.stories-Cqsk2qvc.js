import{k as o}from"./lit-element-D5KKan5q.js";import{c as l,s as b}from"./commonArgTypes-BluK8w5L.js";import{h as s}from"./utils-CFOyPOhY.js";import"./index-LYo_uAk_.js";import"./index-BwpcOVea.js";import"./index-BEjMBEDk.js";import"./index-CB9QMvZ-.js";import"./index-BWIpxT1l.js";import"./provider.component-BaQC7CJH.js";import"./if-defined-D5BV9-c0.js";import"./index-CbmtUAjA.js";import"./roles-DU0xbrD4.js";import"./sidenavigation.component-WnGbxCva.js";import"./state-C0WmBOuD.js";import"./index-riA1qVWu.js";import"./buttonsimple.constants-CNAgWCp2.js";import"./badge.constants-Cr-5n44e.js";import"./divider.constants-DBMTjDho.js";import"./keys-hFXe221I.js";import"./create-context-89xeped_.js";import"./menupopover.constants-MVr-WLVc.js";import"./popover.component-BeJYT0F1.js";import"./base-DIkkzJ-c.js";import"./menuitemradio.constants-HxwjPhBY.js";import"./index-BZotrPhu.js";import"./index-CUNu2ww3.js";import"./iframe-CW83yb_1.js";import"../sb-preview/runtime.js";import"./iconprovider.component-ChWiF_5p.js";import"./index-B-GnYs90.js";import"./index-DYRxW7oy.js";import"./v4-CmTdKEVZ.js";import"./menuitem.component-CtCANyEv.js";import"./listitem.component-CqDx-T5W.js";import"./query-assigned-elements-uEuc3rg8.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";import"./index-DhdHJrO2.js";import"./toggle.constants-0xfxme08.js";import"./class-map-BcCVsMyu.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CWk8F82j.js";import"./index-CeWuhPGb.js";import"./button.constants-BpS-4nLb.js";const u=e=>o`<div role="menubar" style="width: 25rem;">${e}</div>`,h=e=>u(o` <mdc-menusection
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
