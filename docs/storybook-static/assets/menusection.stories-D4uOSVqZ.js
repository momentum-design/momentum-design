import{k as o}from"./iframe-Bxc2R5W_.js";import{c as h,s as b}from"./commonArgTypes-BluK8w5L.js";import{h as s}from"./utils-CFOyPOhY.js";import"./index-C9hPmy4i.js";import"./index-BXd-qJaD.js";import"./index-Besjta4b.js";import"./index-Dnr9yS5c.js";import"./index-B4W6Nqdx.js";import"./preload-helper-C1FmrZbK.js";import"./if-defined-DVfQj5LO.js";import"./index-5AgTE8RP.js";import"./roles-CJI3JVG-.js";import"./sidenavigation.component-DA3WDWuD.js";import"./index-CRnj0VF_.js";import"./menupopover.constants-BIuiI4lG.js";import"./buttonsimple.constants-CXkLv1x2.js";import"./badge.constants-ClpRYMtS.js";import"./popover.component-DH063M9E.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-OeS-cD5e.js";import"./divider.constants-CeGrtozS.js";import"./keys-hFXe221I.js";import"./menuitemradio.constants-Lr6fQM1c.js";import"./index-BdtKrMGj.js";import"./index-DG364haw.js";import"./index-D1dgoSI_.js";import"./index-DTrDRi1E.js";import"./menuitem.component-hhBTEAcz.js";import"./listitem.component-ojE5n416.js";import"./query-assigned-elements-uEuc3rg8.js";import"./DisabledMixin-EWLkxMJG.js";import"./TabIndexMixin-DviywP-V.js";import"./index-D78lDN14.js";import"./toggle.constants-DJtgE_sI.js";import"./index-b29ct9BB.js";import"./v4-CmTdKEVZ.js";import"./class-map-D583CaxS.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants--C2WD6I0.js";import"./index-U2yDKL__.js";import"./button.constants-Cm7ClJ2o.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,l=e=>o`<div role="menubar" style="width: 25rem;">${e}</div>`,x=e=>l(o` <mdc-menusection
      header-text="${e["header-text"]}"
      aria-label="${e["aria-label"]}"
      prefix-icon="${e["prefix-icon"]}"
      ?show-divider="${e["show-divider"]}"
    >
      <mdc-menuitem label="Menu item 1"></mdc-menuitem>
      <mdc-menuitem label="Menu item 2"></mdc-menuitem>
      <mdc-menuitem label="Menu item 3"></mdc-menuitem>
    </mdc-menusection>`),ce={title:"Components/menupopover/menusection",tags:["autodocs"],component:"mdc-menusection",argTypes:{"header-text":{control:"text"},"aria-label":{control:"text"},"prefix-icon":{control:"text"},"show-divider":{control:"boolean"},...h,...b}},i={render:x,args:{"header-text":"Menu Section label","prefix-icon":"placeholder-bold","show-divider":!1}},c={render:()=>l(o`
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
    `),...s()};var d,n,t;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render,
  args: {
    'header-text': 'Menu Section label',
    'prefix-icon': 'placeholder-bold',
    'show-divider': false
  }
}`,...(t=(n=i.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var a,r,u;c.parameters={...c.parameters,docs:{...(a=c.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(u=(r=c.parameters)==null?void 0:r.docs)==null?void 0:u.source}}};const oe=["Example","MultipleMenuSections"];export{i as Example,c as MultipleMenuSections,oe as __namedExportsOrder,ce as default};
