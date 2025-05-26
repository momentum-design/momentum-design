import{k as d}from"./lit-element-D5KKan5q.js";import"./index-CkbfJ035.js";import"./index-BJl9Jo7l.js";import{c as A,s as M}from"./commonArgTypes-BluK8w5L.js";import{h as D,d as W,a as L}from"./utils-CO8B6ZcN.js";import{a as I}from"./popover.component-BTxIb0E7.js";import{I as c}from"./menuitemcheckbox.constants-Cja4JgF_.js";import{A as a}from"./menusection.constants-CectB7Mc.js";import"./index-CVEyIGvE.js";import"./index-C9z9WAEj.js";import"./DisabledMixin-BZruwOeC.js";import"./toggle.constants-DFbn5Xu4.js";import"./index-D3DhXfcW.js";import"./text.constants-ZF0jM5wn.js";import"./index-w8B2CBxb.js";import"./roles-DMFGbP5t.js";import"./v4-CmTdKEVZ.js";import"./menuitem.component-v1R5LTQT.js";import"./listitem.component-CJpRoKE-.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-CcXofQbA.js";import"./iframe-njJ5EuDf.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./if-defined-D5BV9-c0.js";import"./FocusTrapMixin-SA_WaGa6.js";const f=e=>d`<div role="menu" style="width: 25rem;">${e}</div>`,U=e=>f(d`
  <mdc-menuitemcheckbox
    ?disabled="${e.disabled}"
    aria-checked="${e["aria-checked"]}"
    label="${e.label}"
    indicator="${e.indicator}"
    secondary-label="${e["secondary-label"]}"
    tooltip-text="${e["tooltip-text"]}"
    tooltip-placement="${e["tooltip-placement"]}"
  >
    ${e.children}
  </mdc-menuitemcheckbox>`),re={title:"Work In Progress/menu/menuitemcheckbox",tags:["autodocs"],component:"mdc-menuitemcheckbox",render:U,parameters:{badges:["wip"]},argTypes:{"aria-checked":{control:"select",options:Object.values(a)},indicator:{control:"select",options:Object.values(c)},disabled:{control:"boolean"},label:{control:"text"},"secondary-label":{control:"text"},"tooltip-text":{control:"text"},"tooltip-placement":{control:"select",options:Object.values(I)},...D(["data-aria-label","variant","tertiary-label","side-header-text","subline-text","keydown","keyup","leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-text-side-header","trailing-text-subline","trailing-controls","arrow-position","arrow-direction","--mdc-listitem-default-background-color","--mdc-listitem-background-color-hover","--mdc-listitem-background-color-active","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color","--mdc-listitem-column-gap","--mdc-listitem-padding-left-and-right"]),...W(["change","click","focus","--mdc-checkmark-indicator-color"]),...A,...M}},t={args:{indicator:c.CHECKBOX,"aria-checked":a.FALSE,label:"Menu Item",disabled:!1,"secondary-label":"","tooltip-text":"","tooltip-placement":I.TOP,children:d`<mdc-icon length-unit="rem" name="alert-muted-bold" slot="leading-controls"></mdc-icon>`}},l={args:{"aria-checked":a.TRUE,indicator:c.TOGGLE,label:"Menu Item With Toggle",disabled:!1,"secondary-label":""}},i={args:{"aria-checked":a.TRUE,indicator:c.CHECKBOX,label:"Menu Item With Checkbox",disabled:!1,"secondary-label":""}},o={args:{"aria-checked":a.TRUE,indicator:c.CHECKMARK,label:"Menu Item With Checkmark",disabled:!1,"secondary-label":""}},m={render:()=>f(d`
    <mdc-menuitemcheckbox aria-checked="true" label="Selected Checkbox"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="true" label="Disabled Selected Checkbox"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox aria-checked="false" label="Unselected Checkbox"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="false" label="Disabled Unselected Checkbox"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox aria-checked="true" indicator="toggle" label="Selected Toggle"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="true" indicator="toggle" label="Disabled Selected Toggle">
    </mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox aria-checked="false" indicator="toggle" label="Unselected Toggle"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="false" indicator="toggle" label="Disabled Unselected Toggle">
    </mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox aria-checked="true" indicator="checkmark" label="Selected Checkmark"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="true" indicator="checkmark" label="Disabled Selected Checkmark">
    </mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox aria-checked="false" indicator="checkmark" label="Unselected Checkmark">
    </mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="false" indicator="checkmark" label="Disabled Unselected Checkmark">
    </mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox
      aria-checked="true" label="Selected Menu Item With Secondary Label" secondary-label="Secondary Label"
    ></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox
      aria-checked="false" label="Unselected Menu Item With Secondary Label" secondary-label="Secondary Label"
    ></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox
      aria-checked="true" indicator="toggle"
      label="Selected Menu Item With Secondary Label" secondary-label="Secondary Label"
    ></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox
      aria-checked="false" indicator="toggle"
      label="Unselected Menu Item With Secondary Label" secondary-label="Secondary Label"
    ></mdc-menuitemcheckbox>
  `),...L()};var r,n,b;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    indicator: INDICATOR.CHECKBOX,
    'aria-checked': ARIA_CHECKED_STATES.FALSE,
    label: 'Menu Item',
    disabled: false,
    'secondary-label': '',
    'tooltip-text': '',
    'tooltip-placement': POPOVER_PLACEMENT.TOP,
    children: html\`<mdc-icon length-unit="rem" name="alert-muted-bold" slot="leading-controls"></mdc-icon>\`
  }
}`,...(b=(n=t.parameters)==null?void 0:n.docs)==null?void 0:b.source}}};var s,h,k;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    'aria-checked': ARIA_CHECKED_STATES.TRUE,
    indicator: INDICATOR.TOGGLE,
    label: 'Menu Item With Toggle',
    disabled: false,
    'secondary-label': ''
  }
}`,...(k=(h=l.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var u,x,p;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    'aria-checked': ARIA_CHECKED_STATES.TRUE,
    indicator: INDICATOR.CHECKBOX,
    label: 'Menu Item With Checkbox',
    disabled: false,
    'secondary-label': ''
  }
}`,...(p=(x=i.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};var g,C,S;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    'aria-checked': ARIA_CHECKED_STATES.TRUE,
    indicator: INDICATOR.CHECKMARK,
    label: 'Menu Item With Checkmark',
    disabled: false,
    'secondary-label': ''
  }
}`,...(S=(C=o.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var y,T,E;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitemcheckbox aria-checked="true" label="Selected Checkbox"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="true" label="Disabled Selected Checkbox"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox aria-checked="false" label="Unselected Checkbox"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="false" label="Disabled Unselected Checkbox"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox aria-checked="true" indicator="toggle" label="Selected Toggle"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="true" indicator="toggle" label="Disabled Selected Toggle">
    </mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox aria-checked="false" indicator="toggle" label="Unselected Toggle"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="false" indicator="toggle" label="Disabled Unselected Toggle">
    </mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox aria-checked="true" indicator="checkmark" label="Selected Checkmark"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="true" indicator="checkmark" label="Disabled Selected Checkmark">
    </mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox aria-checked="false" indicator="checkmark" label="Unselected Checkmark">
    </mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="false" indicator="checkmark" label="Disabled Unselected Checkmark">
    </mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox
      aria-checked="true" label="Selected Menu Item With Secondary Label" secondary-label="Secondary Label"
    ></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox
      aria-checked="false" label="Unselected Menu Item With Secondary Label" secondary-label="Secondary Label"
    ></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox
      aria-checked="true" indicator="toggle"
      label="Selected Menu Item With Secondary Label" secondary-label="Secondary Label"
    ></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox
      aria-checked="false" indicator="toggle"
      label="Unselected Menu Item With Secondary Label" secondary-label="Secondary Label"
    ></mdc-menuitemcheckbox>
  \`),
  ...hideAllControls()
}`,...(E=(T=m.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};const ne=["Example","ToggleWithMenuItem","CheckboxWithMenuItem","CheckmarkWithMenuItem","AllVariants"];export{m as AllVariants,i as CheckboxWithMenuItem,o as CheckmarkWithMenuItem,t as Example,l as ToggleWithMenuItem,ne as __namedExportsOrder,re as default};
