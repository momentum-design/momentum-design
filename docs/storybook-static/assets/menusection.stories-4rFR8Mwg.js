import{k as o}from"./iframe-CAPDL6NR.js";import{c as h,s as b}from"./commonArgTypes-BluK8w5L.js";import{h as s}from"./utils-CFOyPOhY.js";import"./index-DJgJBoGJ.js";import"./index-vSN81kWu.js";import"./index-CNMT6sPA.js";import"./index-BV4_9LRs.js";import"./index-Cu_DegyV.js";import"./preload-helper-C1FmrZbK.js";import"./if-defined-CZl5EkiP.js";import"./index-gxLeJpQ8.js";import"./roles-CJI3JVG-.js";import"./sidenavigation.component-DUHM3aSy.js";import"./index-C88XNpuE.js";import"./menupopover.constants-n2vYOLhM.js";import"./buttonsimple.constants-DfngC-nr.js";import"./badge.constants-gB88RvyY.js";import"./popover.component-Ce708NOL.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-Ca8FniGz.js";import"./divider.constants-Bfkeqj3s.js";import"./keys-hFXe221I.js";import"./menuitemradio.constants-DD6cMWb3.js";import"./index-7OCdmjBy.js";import"./index-Bsauk3ns.js";import"./index-D0E8q322.js";import"./index-DTrDRi1E.js";import"./menuitem.component-T97T8m6F.js";import"./listitem.component-BRu3j3sB.js";import"./query-assigned-elements-uEuc3rg8.js";import"./DisabledMixin-CMR8O10r.js";import"./TabIndexMixin-CPdktGlp.js";import"./index-Cn9nOsbX.js";import"./toggle.constants-B0BpPEl6.js";import"./index-BhULMgZA.js";import"./v4-CmTdKEVZ.js";import"./class-map-BvQauR2d.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-Cz2jHjMC.js";import"./index-BIimKPgo.js";import"./button.constants-DBKgnBVW.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,l=e=>o`<div role="menubar" style="width: 25rem;">${e}</div>`,x=e=>l(o` <mdc-menusection
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
