import{k as i}from"./lit-element-D5KKan5q.js";import"./index-DvEnhULI.js";import{c as b,s as p}from"./commonArgTypes-BluK8w5L.js";import{h,d as y,a as k}from"./utils-CF1irry3.js";import{P as n}from"./popover.component-Bw5zQP8M.js";import{A as s}from"./menusection.constants-CectB7Mc.js";import"./index-Cdz8MLaY.js";import"./index-C9z9WAEj.js";import"./DisabledMixin-BZruwOeC.js";import"./index-BrLJ_9IK.js";import"./index-DfhuLnrm.js";import"./roles-BH_hBfTz.js";import"./v4-CmTdKEVZ.js";import"./menuitem.component-BoKm6qLY.js";import"./listitem.component-Bh3_BYs0.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-Cx7wvr8C.js";import"./menupopover.constants-Df21F9dQ.js";import"./menuitemradio.constants-DzN5_ujm.js";import"./if-defined-D5BV9-c0.js";const u=e=>i`<div role="menu" style="width: 25rem;">${e}</div>`,S=e=>u(i` <mdc-menuitemradio
      aria-checked="${e["aria-checked"]}"
      ?disabled="${e.disabled}"
      label="${e.label}"
      secondary-label="${e["secondary-label"]}"
      tooltip-text="${e["tooltip-text"]}"
      tooltip-placement="${e["tooltip-placement"]}"
    ></mdc-menuitemradio>`),F={title:"Work In Progress/menu/menuitemradio",tags:["autodocs"],component:"mdc-menuitemradio",render:S,parameters:{badges:["wip"]},argTypes:{"aria-checked":{control:"select",options:Object.values(s)},disabled:{control:"boolean"},label:{control:"text"},"secondary-label":{control:"text"},"tooltip-text":{control:"text"},"tooltip-placement":{control:"select",options:Object.values(n)},...h(["data-aria-label","variant","tertiary-label","side-header-text","subline-text","keydown","keyup","leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-text-side-header","trailing-text-subline","trailing-controls","arrow-position","arrow-direction","--mdc-listitem-default-background-color","--mdc-listitem-background-color-hover","--mdc-listitem-background-color-active","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color","--mdc-listitem-column-gap","--mdc-listitem-padding-left-and-right"]),...y(["change","click","focus"]),...b,...p}},a={args:{"aria-checked":s.FALSE,disabled:!1,label:"Menu Item","secondary-label":"","tooltip-text":"","tooltip-placement":n.TOP}},t={render:()=>u(i`
      <mdc-menuitemradio aria-checked="true" label="Selected Menu Item"></mdc-menuitemradio>
      <mdc-menuitemradio disabled aria-checked="true" label="Disabled Selected Menu Item"></mdc-menuitemradio>
      <mdc-menuitemradio aria-checked="false" label="Unselected Menu Item"></mdc-menuitemradio>
      <mdc-menuitemradio disabled aria-checked="false" label="Disabled Unselected Menu Item"></mdc-menuitemradio>
      <mdc-menuitemradio
        aria-checked="true"
        label="Selected Menu Item With Secondary Label"
        secondary-label="Secondary Label"
      ></mdc-menuitemradio>
      <mdc-menuitemradio
        aria-checked="false"
        label="Unselected Menu Item With Secondary Label"
        secondary-label="Secondary Label"
      ></mdc-menuitemradio>
    `),...k()};var l,r,o;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    'aria-checked': ARIA_CHECKED_STATES.FALSE,
    disabled: false,
    label: 'Menu Item',
    'secondary-label': '',
    'tooltip-text': '',
    'tooltip-placement': POPOVER_PLACEMENT.TOP
  }
}`,...(o=(r=a.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var d,m,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-menuitemradio aria-checked="true" label="Selected Menu Item"></mdc-menuitemradio>
      <mdc-menuitemradio disabled aria-checked="true" label="Disabled Selected Menu Item"></mdc-menuitemradio>
      <mdc-menuitemradio aria-checked="false" label="Unselected Menu Item"></mdc-menuitemradio>
      <mdc-menuitemradio disabled aria-checked="false" label="Disabled Unselected Menu Item"></mdc-menuitemradio>
      <mdc-menuitemradio
        aria-checked="true"
        label="Selected Menu Item With Secondary Label"
        secondary-label="Secondary Label"
      ></mdc-menuitemradio>
      <mdc-menuitemradio
        aria-checked="false"
        label="Unselected Menu Item With Secondary Label"
        secondary-label="Secondary Label"
      ></mdc-menuitemradio>
    \`),
  ...hideAllControls()
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const H=["Example","AllVariants"];export{t as AllVariants,a as Example,H as __namedExportsOrder,F as default};
