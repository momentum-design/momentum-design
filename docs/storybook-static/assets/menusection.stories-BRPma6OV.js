import{a as m}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as c}from"./lit-element-D5KKan5q.js";import{c as h,s as b}from"./commonArgTypes-BluK8w5L.js";import{h as s}from"./utils-CFOyPOhY.js";import"./index-D4-ZeDhd.js";import"./index-E1nXRIHA.js";import"./index-CaaCHut2.js";import"./index-Dfs5t35S.js";import"./index-BWIpxT1l.js";import"./v4-CQkTLCs1.js";import"./provider.component-BaQC7CJH.js";import"./if-defined-D5BV9-c0.js";import"./index-CbmtUAjA.js";import"./roles-DU0xbrD4.js";import"./sidenavigation.component-CaG7ofly.js";import"./state-C0WmBOuD.js";import"./index-riA1qVWu.js";import"./buttonsimple.constants-CNAgWCp2.js";import"./badge.constants-Cr-5n44e.js";import"./divider.constants-DBMTjDho.js";import"./keys-hFXe221I.js";import"./create-context-89xeped_.js";import"./menupopover.constants-D4HZx52I.js";import"./popover.component-BcWkwQje.js";import"./base-DIkkzJ-c.js";import"./menuitemradio.constants-HxwjPhBY.js";import"./index-CKRvB9G7.js";import"./index-8wZU13aH.js";import"./iframe-BRXZhsn0.js";import"../sb-preview/runtime.js";import"./iconprovider.component-ChWiF_5p.js";import"./index-B-GnYs90.js";import"./index-ChH4-Or7.js";import"./v4-CmTdKEVZ.js";import"./menuitem.component-Ba-rkWJ-.js";import"./listitem.component-BeuoLqO-.js";import"./query-assigned-elements-uEuc3rg8.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";import"./index-D9JXPOKE.js";import"./toggle.constants-CiTZI7Vj.js";import"./class-map-BcCVsMyu.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CWk8F82j.js";import"./index-CeWuhPGb.js";import"./button.constants-BpS-4nLb.js";const l=e=>c`<div role="menubar" style="width: 25rem;">${e}</div>`,p=e=>l(c` <mdc-menusection
      header-text="${e["header-text"]}"
      aria-label="${e["aria-label"]}"
      prefix-icon="${e["prefix-icon"]}"
      ?show-divider="${e["show-divider"]}"
    >
      <mdc-menuitem label="Menu item 1"></mdc-menuitem>
      <mdc-menuitem label="Menu item 2"></mdc-menuitem>
      <mdc-menuitem label="Menu item 3"></mdc-menuitem>
    </mdc-menusection>`),ae={title:"Components/menupopover/menusection",tags:["autodocs"],component:"mdc-menusection",parameters:{badges:["stable"]},argTypes:{"header-text":{control:"text"},"aria-label":{control:"text"},"prefix-icon":{control:"text"},"show-divider":{control:"boolean"},...h,...b}},i={render:p,args:{"header-text":"Menu Section label","prefix-icon":"placeholder-bold","show-divider":!1}},o={render:()=>l(c`
      <mdc-menusection show-divider @change="${m("onchange")}">
        <mdc-menuitemcheckbox label="Checkbox1"></mdc-menuitemcheckbox>
        <mdc-menuitemcheckbox label="Checkbox2"></mdc-menuitemcheckbox>
        <mdc-menuitemcheckbox label="Checkbox3"></mdc-menuitemcheckbox>
        <mdc-menuitemradio label="Radio1"></mdc-menuitemradio>
        <mdc-menuitemradio label="Radio2"></mdc-menuitemradio>
        <mdc-menuitemradio label="Radio3"></mdc-menuitemradio>
      </mdc-menusection>
      <mdc-menusection show-divider @change="${m("onchange")}">
        <mdc-menuitemradio label="Radio1"></mdc-menuitemradio>
        <mdc-menuitemradio label="Radio2"></mdc-menuitemradio>
        <mdc-menuitemradio label="Radio3"></mdc-menuitemradio>
      </mdc-menusection>
      <mdc-menusection show-divider header-text="Section with menu items" @change="${m("onchange")}">
        <mdc-menuitem label="MenuItem1"></mdc-menuitem>
        <mdc-menuitem label="MenuItem2"></mdc-menuitem>
      </mdc-menusection>
      <mdc-menusection show-divider @change="${m("onchange")}">
        <mdc-menuitemcheckbox label="Toggle6" indicator="toggle"></mdc-menuitemcheckbox>
        <mdc-menuitemcheckbox
          label="Checkmark7"
          indicator="checkmark"
          aria-label="Checkbox 7"
        ></mdc-menuitemcheckbox> </mdc-menusection
      ><mdc-menusection show-divider header-text="Section with checkboxes and radio buttons" @change="${m("onchange")}">
        <mdc-menuitemcheckbox name="checkbox" label="Checkbox1"></mdc-menuitemcheckbox>
        <mdc-menuitemcheckbox name="checkbox" label="Checkbox2"></mdc-menuitemcheckbox>
        <mdc-menuitemcheckbox name="checkbox" label="Checkbox3"></mdc-menuitemcheckbox>
        <mdc-menuitemradio name="radio" label="Radio1"></mdc-menuitemradio>
        <mdc-menuitemradio name="radio" label="Radio2"></mdc-menuitemradio>
        <mdc-menuitemradio name="radio" label="Radio3"></mdc-menuitemradio>
      </mdc-menusection>
      <mdc-menusection show-divider @change="${m("onchange")}">
        <mdc-menuitemradio name="radio" label="Radio1"></mdc-menuitemradio>
        <mdc-menuitemradio name="radio" label="Radio2"></mdc-menuitemradio>
        <mdc-menuitemradio name="radio" label="Radio3"></mdc-menuitemradio>
      </mdc-menusection>
    `),...s()};var d,n,t;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render,
  args: {
    'header-text': 'Menu Section label',
    'prefix-icon': 'placeholder-bold',
    'show-divider': false
  }
}`,...(t=(n=i.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var a,r,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-menusection show-divider @change="\${action('onchange')}">
        <mdc-menuitemcheckbox label="Checkbox1"></mdc-menuitemcheckbox>
        <mdc-menuitemcheckbox label="Checkbox2"></mdc-menuitemcheckbox>
        <mdc-menuitemcheckbox label="Checkbox3"></mdc-menuitemcheckbox>
        <mdc-menuitemradio label="Radio1"></mdc-menuitemradio>
        <mdc-menuitemradio label="Radio2"></mdc-menuitemradio>
        <mdc-menuitemradio label="Radio3"></mdc-menuitemradio>
      </mdc-menusection>
      <mdc-menusection show-divider @change="\${action('onchange')}">
        <mdc-menuitemradio label="Radio1"></mdc-menuitemradio>
        <mdc-menuitemradio label="Radio2"></mdc-menuitemradio>
        <mdc-menuitemradio label="Radio3"></mdc-menuitemradio>
      </mdc-menusection>
      <mdc-menusection show-divider header-text="Section with menu items" @change="\${action('onchange')}">
        <mdc-menuitem label="MenuItem1"></mdc-menuitem>
        <mdc-menuitem label="MenuItem2"></mdc-menuitem>
      </mdc-menusection>
      <mdc-menusection show-divider @change="\${action('onchange')}">
        <mdc-menuitemcheckbox label="Toggle6" indicator="toggle"></mdc-menuitemcheckbox>
        <mdc-menuitemcheckbox
          label="Checkmark7"
          indicator="checkmark"
          aria-label="Checkbox 7"
        ></mdc-menuitemcheckbox> </mdc-menusection
      ><mdc-menusection show-divider header-text="Section with checkboxes and radio buttons" @change="\${action('onchange')}">
        <mdc-menuitemcheckbox name="checkbox" label="Checkbox1"></mdc-menuitemcheckbox>
        <mdc-menuitemcheckbox name="checkbox" label="Checkbox2"></mdc-menuitemcheckbox>
        <mdc-menuitemcheckbox name="checkbox" label="Checkbox3"></mdc-menuitemcheckbox>
        <mdc-menuitemradio name="radio" label="Radio1"></mdc-menuitemradio>
        <mdc-menuitemradio name="radio" label="Radio2"></mdc-menuitemradio>
        <mdc-menuitemradio name="radio" label="Radio3"></mdc-menuitemradio>
      </mdc-menusection>
      <mdc-menusection show-divider @change="\${action('onchange')}">
        <mdc-menuitemradio name="radio" label="Radio1"></mdc-menuitemradio>
        <mdc-menuitemradio name="radio" label="Radio2"></mdc-menuitemradio>
        <mdc-menuitemradio name="radio" label="Radio3"></mdc-menuitemradio>
      </mdc-menusection>
    \`),
  ...hideAllControls()
}`,...(u=(r=o.parameters)==null?void 0:r.docs)==null?void 0:u.source}}};const re=["Example","MultipleMenuSections"];export{i as Example,o as MultipleMenuSections,re as __namedExportsOrder,ae as default};
