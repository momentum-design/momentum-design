import{a as m}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as c}from"./lit-element-D5KKan5q.js";import{c as h,s as b}from"./commonArgTypes-BluK8w5L.js";import{h as s}from"./utils-CFOyPOhY.js";import"./index-Dp-XjBk2.js";import"./index-BTUvQWul.js";import"./index-J4baTmuG.js";import"./index-yu6dJsVh.js";import"./index-BaUwcf4A.js";import"./v4-CQkTLCs1.js";import"./provider.component-BaQC7CJH.js";import"./if-defined-D5BV9-c0.js";import"./index-CbmtUAjA.js";import"./roles-CJI3JVG-.js";import"./sidenavigation.component-CIQen2Pm.js";import"./index-DHsMOcdX.js";import"./menupopover.constants-CbRDXt5a.js";import"./buttonsimple.constants-An7St6B1.js";import"./badge.constants-Cr-5n44e.js";import"./popover.component-CgG8O1N4.js";import"./base-DIkkzJ-c.js";import"./divider.constants-DBMTjDho.js";import"./keys-hFXe221I.js";import"./create-context-89xeped_.js";import"./menuitemradio.constants-HxwjPhBY.js";import"./index-DUfhJ7kd.js";import"./index-DyTlZ_IO.js";import"./iframe-BUpju6j_.js";import"../sb-preview/runtime.js";import"./state-C0WmBOuD.js";import"./iconprovider.component-DWn5NkGG.js";import"./index-CqVtAZCJ.js";import"./index-DTrDRi1E.js";import"./menuitem.component-Dws3iiL_.js";import"./listitem.component-Cy9hWtov.js";import"./query-assigned-elements-uEuc3rg8.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";import"./index-CqIM0fgK.js";import"./toggle.constants-f3i6qnJX.js";import"./index-DQ1Hv4sq.js";import"./v4-CmTdKEVZ.js";import"./class-map-BcCVsMyu.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CWk8F82j.js";import"./index-CeWuhPGb.js";import"./button.constants-B6suqA4v.js";const l=e=>c`<div role="menubar" style="width: 25rem;">${e}</div>`,p=e=>l(c` <mdc-menusection
      header-text="${e["header-text"]}"
      aria-label="${e["aria-label"]}"
      prefix-icon="${e["prefix-icon"]}"
      ?show-divider="${e["show-divider"]}"
    >
      <mdc-menuitem label="Menu item 1"></mdc-menuitem>
      <mdc-menuitem label="Menu item 2"></mdc-menuitem>
      <mdc-menuitem label="Menu item 3"></mdc-menuitem>
    </mdc-menusection>`),re={title:"Components/menupopover/menusection",tags:["autodocs"],component:"mdc-menusection",parameters:{badges:["stable"]},argTypes:{"header-text":{control:"text"},"aria-label":{control:"text"},"prefix-icon":{control:"text"},"show-divider":{control:"boolean"},...h,...b}},i={render:p,args:{"header-text":"Menu Section label","prefix-icon":"placeholder-bold","show-divider":!1}},o={render:()=>l(c`
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
}`,...(u=(r=o.parameters)==null?void 0:r.docs)==null?void 0:u.source}}};const ue=["Example","MultipleMenuSections"];export{i as Example,o as MultipleMenuSections,ue as __namedExportsOrder,re as default};
