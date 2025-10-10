import{k as o}from"./iframe-D59qSDLK.js";import{c as h,s as b}from"./commonArgTypes-BluK8w5L.js";import{h as s}from"./utils-Dd_sfl9-.js";import"./index-Cw3AqnVp.js";import"./index-CJk6f9Ih.js";import"./index-BDbed4lb.js";import"./index-BSR3MSvz.js";import"./preload-helper-C1FmrZbK.js";import"./if-defined-olcxDW8P.js";import"./index-xT-JkSuE.js";import"./sidenavigation.component-DvO57cM_.js";import"./menupopover.constants-B2TfksGT.js";import"./badge.constants-ClKtO23F.js";import"./popover.component-DgpXvbs2.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-COtaol9r.js";import"./keys-hFXe221I.js";import"./menuitemradio.constants-B6POiuOZ.js";import"./index-DICnOcV1.js";import"./index-CwGSQ9Yn.js";import"./index-DTrDRi1E.js";import"./menuitem.component-m-yFwMRd.js";import"./listitem.component-C2G9DK_r.js";import"./query-assigned-elements-uEuc3rg8.js";import"./DisabledMixin-MuPyaYa1.js";import"./TabIndexMixin-B1WUQql5.js";import"./index-B8prAcGk.js";import"./toggle.constants-DQktxk_8.js";import"./index-D_0tXJjY.js";import"./v4-CmTdKEVZ.js";import"./class-map-D9dGwWKp.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DqP4_peh.js";import"./index-rnlThXhF.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,l=e=>o`<div role="menubar" style="width: 25rem;">${e}</div>`,x=e=>l(o` <mdc-menusection
      header-text="${e["header-text"]}"
      aria-label="${e["aria-label"]}"
      prefix-icon="${e["prefix-icon"]}"
      ?show-divider="${e["show-divider"]}"
    >
      <mdc-menuitem label="Menu item 1"></mdc-menuitem>
      <mdc-menuitem label="Menu item 2"></mdc-menuitem>
      <mdc-menuitem label="Menu item 3"></mdc-menuitem>
    </mdc-menusection>`),Q={title:"Components/menupopover/menusection",tags:["autodocs"],component:"mdc-menusection",argTypes:{"header-text":{control:"text"},"aria-label":{control:"text"},"prefix-icon":{control:"text"},"show-divider":{control:"boolean"},...h,...b}},i={render:x,args:{"header-text":"Menu Section label","prefix-icon":"placeholder-bold","show-divider":!1}},c={render:()=>l(o`
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
}`,...(u=(r=c.parameters)==null?void 0:r.docs)==null?void 0:u.source}}};const V=["Example","MultipleMenuSections"];export{i as Example,c as MultipleMenuSections,V as __namedExportsOrder,Q as default};
