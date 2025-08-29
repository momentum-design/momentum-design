import{a as o}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as m}from"./lit-element-D5KKan5q.js";import"./index-C7X6u7ba.js";import{c as p,s as h}from"./commonArgTypes-BluK8w5L.js";import{a as k,d as g,h as y}from"./utils-CFOyPOhY.js";import{a as s}from"./popover.component-CWSuSUni.js";import"./index-PvxRUtL3.js";import"./index-CbIlSgnN.js";import{I as u}from"./menuitemradio.constants-CB6EqhSm.js";import"./v4-CQkTLCs1.js";import"./index-tOnQ0SVm.js";import"./iframe-BJ42zrWS.js";import"../sb-preview/runtime.js";import"./property-Bj3TGwkg.js";import"./state-CmYk530Z.js";import"./provider.component-DrWB4byV.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./index-B-GnYs90.js";import"./index-CY9PwAYn.js";import"./DisabledMixin-B-Cnza7-.js";import"./index-D2VIkDCb.js";import"./index-DM9rY9pk.js";import"./roles-CJI3JVG-.js";import"./v4-CmTdKEVZ.js";import"./class-map-BcCVsMyu.js";import"./directive-Ctav8iJK.js";import"./menuitem.component-PJZiprN0.js";import"./listitem.component-D_1lkCxZ.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./keys-hFXe221I.js";import"./TabIndexMixin-DEwGeIeI.js";import"./menupopover.constants-jFPXqSMW.js";import"./buttonsimple.constants-CVV9o_W6.js";import"./badge.constants-C6WKiCnx.js";import"./if-defined-D5BV9-c0.js";import"./sidenavigation.component-CVa5-2vd.js";import"./divider.constants-DXWnBz1m.js";import"./index-Bekq_xbr.js";import"./button.constants-BBlkZKjZ.js";const b=e=>m`<div role="menu" style="width: 25rem;">${e}</div>`,v=e=>b(m` <mdc-menuitemradio     
      @change="${o("onchange")}"
      @click="${o("onclick")}"
      @focus="${o("onfocus")}"
      ?checked="${e.checked}"
      ?disabled="${e.disabled}"
      indicator="${e.indicator}"
      label="${e.label}"
      secondary-label="${e["secondary-label"]}"
      tooltip-text="${e["tooltip-text"]}"
      tooltip-placement="${e["tooltip-placement"]}"
    ></mdc-menuitemradio>`),re={title:"Components/menupopover/menuitemradio",tags:["autodocs"],component:"mdc-menuitemradio",render:v,parameters:{badges:["stable"]},argTypes:{checked:{control:"boolean"},indicator:{control:"select",options:Object.values(u)},disabled:{control:"boolean"},label:{control:"text"},"secondary-label":{control:"text"},"tooltip-text":{control:"text"},"tooltip-placement":{control:"select",options:Object.values(s)},...k(["data-aria-label","variant","tertiary-label","side-header-text","subline-text","keydown","keyup","leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-text-side-header","trailing-text-subline","trailing-controls","arrow-position","arrow-direction","--mdc-listitem-default-background-color","--mdc-listitem-background-color-hover","--mdc-listitem-background-color-active","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color","--mdc-listitem-column-gap","--mdc-listitem-padding-left-and-right"]),...g(["change","click","focus"]),...p,...h}},i={args:{checked:!1,disabled:!1,label:"Menu Item",indicator:u.RADIO,"secondary-label":"","tooltip-text":"","tooltip-placement":s.TOP}},d={render:()=>b(m`
      <div role="menu" style="display: flex; gap: 0.5rem;">
        <mdc-menusection headerText="Menu Item Radios">
          <mdc-menuitemradio name="group1" checked label="Selected radio"></mdc-menuitemradio>
          <mdc-menuitemradio name="group1" disabled checked label="Disabled Selected radio"></mdc-menuitemradio>
          <mdc-menuitemradio name="group1" label="Unselected radio"></mdc-menuitemradio>
          <mdc-menuitemradio name="group1" disabled label="Disabled Unselected radio"></mdc-menuitemradio>
        </mdc-menusection>
        <mdc-divider></mdc-divider>
        <mdc-divider></mdc-divider>
        <mdc-menusection headerText="Menu Item Radios with checkmark indicator">
          <mdc-menuitemradio name="group2" checked indicator="checkmark" label="Selected Checkmark"></mdc-menuitemradio>
          <mdc-menuitemradio name="group2" disabled checked indicator="checkmark" label="Disabled Selected Checkmark">
          </mdc-menuitemradio>
          <mdc-menuitemradio name="group2" indicator="checkmark" label="Unselected Checkmark"> </mdc-menuitemradio>
          <mdc-menuitemradio name="group2" disabled indicator="checkmark" label="Disabled Unselected Checkmark">
          </mdc-menuitemradio>
        </mdc-menusection>
        <mdc-divider></mdc-divider>
        <mdc-menusection headerText="Menu Item Radios with custom indicator">
          <style>
            mdc-menuitemradio[indicator='none'] mdc-icon {
              width: 5rem;
              height: auto;
              aspect-ratio: 16/9;
              padding: 0.75rem;
            }
            mdc-menuitemradio[indicator='none'][checked]:not([disabled]) mdc-icon {
              color: var(--mds-color-theme-text-accent-normal);
              background: var(--mdc-listitem-background-color-active);
            }
            mdc-menuitemradio[indicator='none'][checked][disabled] mdc-icon {
              background: var(--mdc-listitem-background-color-hover);
            }
            mdc-menuitemradio[indicator='none'][checked]::part(leading-text-primary-label) {
              font-weight: bold;
              color: inherit;
            }
          </style>
          <mdc-menuitemradio name="group3" checked indicator="none" label="Selected No indicator">
            <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
          </mdc-menuitemradio>
          <mdc-menuitemradio name="group3" disabled checked indicator="none" label="Disabled Selected No indicator">
            <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
          </mdc-menuitemradio>
          <mdc-menuitemradio name="group3" indicator="none" label="Unselected No indicator">
            <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
          </mdc-menuitemradio>
          <mdc-menuitemradio name="group3" disabled indicator="none" label="Disabled Unselected No indicator">
            <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
          </mdc-menuitemradio>
        </mdc-menusection>
        <mdc-divider></mdc-divider>
        <mdc-menusection headerText="Menu Item Radios with secondary label">
          <mdc-menuitemradio
            name="group4"
            checked
            label="Selected Menu Item With Secondary Label"
            secondary-label="Secondary Label"
          ></mdc-menuitemradio>
          <mdc-menuitemradio
            name="group4"
            label="Unselected Menu Item With Secondary Label"
            secondary-label="Secondary Label"
          ></mdc-menuitemradio>
          <mdc-menuitemradio
            name="group4"
            checked
            indicator="checkmark"
            label="Selected Menu Item With Secondary Label"
            secondary-label="Secondary Label"
          ></mdc-menuitemradio>
          <mdc-menuitemradio
            name="group4"
            indicator="checkmark"
            label="Unselected Menu Item With Secondary Label"
            secondary-label="Secondary Label"
          ></mdc-menuitemradio>
        </mdc-menusection>
      </div>
    `),...y()};var a,c,t;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    label: 'Menu Item',
    indicator: INDICATOR.RADIO,
    'secondary-label': '',
    'tooltip-text': '',
    'tooltip-placement': POPOVER_PLACEMENT.TOP
  }
}`,...(t=(c=i.parameters)==null?void 0:c.docs)==null?void 0:t.source}}};var r,n,l;d.parameters={...d.parameters,docs:{...(r=d.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <div role="menu" style="display: flex; gap: 0.5rem;">
        <mdc-menusection headerText="Menu Item Radios">
          <mdc-menuitemradio name="group1" checked label="Selected radio"></mdc-menuitemradio>
          <mdc-menuitemradio name="group1" disabled checked label="Disabled Selected radio"></mdc-menuitemradio>
          <mdc-menuitemradio name="group1" label="Unselected radio"></mdc-menuitemradio>
          <mdc-menuitemradio name="group1" disabled label="Disabled Unselected radio"></mdc-menuitemradio>
        </mdc-menusection>
        <mdc-divider></mdc-divider>
        <mdc-divider></mdc-divider>
        <mdc-menusection headerText="Menu Item Radios with checkmark indicator">
          <mdc-menuitemradio name="group2" checked indicator="checkmark" label="Selected Checkmark"></mdc-menuitemradio>
          <mdc-menuitemradio name="group2" disabled checked indicator="checkmark" label="Disabled Selected Checkmark">
          </mdc-menuitemradio>
          <mdc-menuitemradio name="group2" indicator="checkmark" label="Unselected Checkmark"> </mdc-menuitemradio>
          <mdc-menuitemradio name="group2" disabled indicator="checkmark" label="Disabled Unselected Checkmark">
          </mdc-menuitemradio>
        </mdc-menusection>
        <mdc-divider></mdc-divider>
        <mdc-menusection headerText="Menu Item Radios with custom indicator">
          <style>
            mdc-menuitemradio[indicator='none'] mdc-icon {
              width: 5rem;
              height: auto;
              aspect-ratio: 16/9;
              padding: 0.75rem;
            }
            mdc-menuitemradio[indicator='none'][checked]:not([disabled]) mdc-icon {
              color: var(--mds-color-theme-text-accent-normal);
              background: var(--mdc-listitem-background-color-active);
            }
            mdc-menuitemradio[indicator='none'][checked][disabled] mdc-icon {
              background: var(--mdc-listitem-background-color-hover);
            }
            mdc-menuitemradio[indicator='none'][checked]::part(leading-text-primary-label) {
              font-weight: bold;
              color: inherit;
            }
          </style>
          <mdc-menuitemradio name="group3" checked indicator="none" label="Selected No indicator">
            <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
          </mdc-menuitemradio>
          <mdc-menuitemradio name="group3" disabled checked indicator="none" label="Disabled Selected No indicator">
            <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
          </mdc-menuitemradio>
          <mdc-menuitemradio name="group3" indicator="none" label="Unselected No indicator">
            <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
          </mdc-menuitemradio>
          <mdc-menuitemradio name="group3" disabled indicator="none" label="Disabled Unselected No indicator">
            <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
          </mdc-menuitemradio>
        </mdc-menusection>
        <mdc-divider></mdc-divider>
        <mdc-menusection headerText="Menu Item Radios with secondary label">
          <mdc-menuitemradio
            name="group4"
            checked
            label="Selected Menu Item With Secondary Label"
            secondary-label="Secondary Label"
          ></mdc-menuitemradio>
          <mdc-menuitemradio
            name="group4"
            label="Unselected Menu Item With Secondary Label"
            secondary-label="Secondary Label"
          ></mdc-menuitemradio>
          <mdc-menuitemradio
            name="group4"
            checked
            indicator="checkmark"
            label="Selected Menu Item With Secondary Label"
            secondary-label="Secondary Label"
          ></mdc-menuitemradio>
          <mdc-menuitemradio
            name="group4"
            indicator="checkmark"
            label="Unselected Menu Item With Secondary Label"
            secondary-label="Secondary Label"
          ></mdc-menuitemradio>
        </mdc-menusection>
      </div>
    \`),
  ...hideAllControls()
}`,...(l=(n=d.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const ne=["Example","AllVariants"];export{d as AllVariants,i as Example,ne as __namedExportsOrder,re as default};
