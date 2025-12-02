import{k as o}from"./iframe-DHJOsveJ.js";import{c as h,s as b}from"./commonArgTypes-BluK8w5L.js";import{a as s}from"./utils-CO8B6ZcN.js";import"./index-DtBcMKeb.js";import"./index-yR3HdAFI.js";import"./index-BrafdE7V.js";import"./index-DTPlFvLF.js";import"./preload-helper-C1FmrZbK.js";import"./if-defined-BYhhUcmE.js";import"./index-wR2DKYge.js";import"./sidenavigation.component-CiumcWql.js";import"./menupopover.constants-DC1zAT2f.js";import"./badge.constants-BLtgowpx.js";import"./popover.component-W_G0z3tn.js";import"./BackdropMixin-2zdGgwKw.js";import"./TabIndexMixin-CtEo0PZs.js";import"./menuitemradio.constants-srwta_Sy.js";import"./index-vBLczhp3.js";import"./index-FToFinYD.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CjbbTFBO.js";import"./listitem.component-CXEJexCH.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./DisabledMixin-DjSARQtc.js";import"./index-DxytTFHH.js";import"./formfieldwrapper.constants-GQJVx4BE.js";import"./toggle.constants-DxaYMNDZ.js";import"./index-DhL3Hx6l.js";import"./v4-CmTdKEVZ.js";import"./class-map-BhAGFLhF.js";import"./directive-Ctav8iJK.js";import"./ControlTypeMixin-BvWsz2Vd.js";import"./menuitemcheckbox.constants-CH7AzyFD.js";import"./index-_u6fvwJ7.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,l=e=>o`<div role="menubar" style="width: 25rem;">${e}</div>`,x=e=>l(o` <mdc-menusection
      header-text="${e["header-text"]}"
      aria-label="${e["aria-label"]}"
      prefix-icon="${e["prefix-icon"]}"
      ?show-divider="${e["show-divider"]}"
    >
      <mdc-menuitem label="Menu item 1"></mdc-menuitem>
      <mdc-menuitem label="Menu item 2"></mdc-menuitem>
      <mdc-menuitem label="Menu item 3"></mdc-menuitem>
    </mdc-menusection>`),V={title:"Components/menupopover/menusection",tags:["autodocs"],component:"mdc-menusection",argTypes:{"header-text":{control:"text"},"aria-label":{control:"text"},"prefix-icon":{control:"text"},"show-divider":{control:"boolean"},...h,...b}},i={render:x,args:{"header-text":"Menu Section label","prefix-icon":"placeholder-bold","show-divider":!1}},c={render:()=>l(o`
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
      ><mdc-menusection
        show-divider
        header-text="Section with checkboxes and radio buttons"
        @change="${m("onchange")}"
      >
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
    `),...s()};var d,n,a;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render,
  args: {
    'header-text': 'Menu Section label',
    'prefix-icon': 'placeholder-bold',
    'show-divider': false
  }
}`,...(a=(n=i.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var t,r,u;c.parameters={...c.parameters,docs:{...(t=c.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
      ><mdc-menusection
        show-divider
        header-text="Section with checkboxes and radio buttons"
        @change="\${action('onchange')}"
      >
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
}`,...(u=(r=c.parameters)==null?void 0:r.docs)==null?void 0:u.source}}};const X=["Example","MultipleMenuSections"];export{i as Example,c as MultipleMenuSections,X as __namedExportsOrder,V as default};
