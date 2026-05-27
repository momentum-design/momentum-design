import{k as o}from"./iframe-C-ScMBWt.js";import{t as b}from"./if-defined-BNUT9LZm.js";import"./index-CioKxal4.js";import{c as h,s as p}from"./commonArgTypes-BG7EqI50.js";import{h as k,a as g}from"./utils-B5QUENNQ.js";import"./index-YgZL9VvF.js";import{V as y}from"./ControlTypeMixin-Dz0DWNbw.js";import{I as s}from"./menuitemradio.constants-C-dzEWS8.js";import"./preload-helper-C1FmrZbK.js";import"./index-CpnsRmMk.js";import"./index-Bzx2pL7c.js";import"./index-DTrDRi1E.js";import"./index-BUqYR5vy.js";import"./DisabledMixin-Bd0Kod_E.js";import"./index-DLedpESV.js";import"./popover.component-BpKHG_KS.js";import"./BackdropMixin-CRKbfqZD.js";import"./KeyDownHandledMixin-B13HiPnP.js";import"./popover.constants-BMO7-Q45.js";import"./v4-CmTdKEVZ.js";import"./class-map-CaNaj-qx.js";import"./directive-Ctav8iJK.js";import"./menuitem.component-B5vk-MAU.js";import"./listitem.component-Dss2ph7H.js";import"./query-assigned-elements-Cq-zjaBr.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-CkMg_zck.js";import"./menupopover.constants-BEYWGim_.js";import"./badge.constants-DUpt4vEh.js";import"./sidenavigation.component-D4QYtukI.js";import"./index-DeMUSsrX.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,u=e=>o`<div role="menu" style="width: 25rem;">${e}</div>`,v=e=>u(o` <mdc-menuitemradio
      @change="${a("onchange")}"
      @click="${a("onclick")}"
      @focus="${a("onfocus")}"
      ?checked="${e.checked}"
      ?disabled="${e.disabled}"
      ?soft-disabled="${e["soft-disabled"]}"
      indicator="${e.indicator}"
      label="${e.label}"
      secondary-label="${e["secondary-label"]}"
      control-type="${b(e["control-type"])}"
    ></mdc-menuitemradio>`),Q={title:"Components/menupopover/menuitemradio",tags:["autodocs"],component:"mdc-menuitemradio",render:v,argTypes:{checked:{control:"boolean"},indicator:{control:"select",options:Object.values(s)},disabled:{control:"boolean"},label:{control:"text"},"secondary-label":{control:"text"},"soft-disabled":{control:"boolean"},"control-type":{control:"select",options:[void 0,...y]},...k(["data-aria-label","variant","tertiary-label","side-header-text","subline-text","leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-text-side-header","trailing-text-subline","trailing-controls","arrow-position","arrow-direction"]),...h,...p}},d={args:{checked:!1,disabled:!1,label:"Menu Item",indicator:s.RADIO,"secondary-label":""}},i={render:()=>u(o`
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
    `),...g()};var m,c,n;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    label: 'Menu Item',
    indicator: INDICATOR.RADIO,
    'secondary-label': ''
  }
}`,...(n=(c=d.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var r,t,l;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(l=(t=i.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const X=["Example","AllVariants"];export{i as AllVariants,d as Example,X as __namedExportsOrder,Q as default};
