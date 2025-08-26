import{a as l}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as i}from"./lit-element-D5KKan5q.js";import"./index-C8-ziWMZ.js";import"./index-D6YxUDcd.js";import{c as v,s as D}from"./commonArgTypes-BluK8w5L.js";import{a as W,d as L,h as O}from"./utils-CFOyPOhY.js";import{a as M}from"./popover.component-CWSuSUni.js";import{I as c}from"./menuitemcheckbox.constants-dhHMuWzH.js";import"./v4-CQkTLCs1.js";import"./index-Co-ZSarP.js";import"./property-Bj3TGwkg.js";import"./provider.component-DrWB4byV.js";import"./DisabledMixin-B-Cnza7-.js";import"./toggle.constants-r1of4vm5.js";import"./index-DeEenWCE.js";import"./index-DM9rY9pk.js";import"./roles-CJI3JVG-.js";import"./v4-CmTdKEVZ.js";import"./class-map-BcCVsMyu.js";import"./directive-Ctav8iJK.js";import"./menuitem.component--hosc4Py.js";import"./listitem.component-moTyXfIR.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./keys-hFXe221I.js";import"./TabIndexMixin-DEwGeIeI.js";import"./index-B-GnYs90.js";import"./iframe-Dzy9pE1X.js";import"../sb-preview/runtime.js";import"./state-CmYk530Z.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./if-defined-D5BV9-c0.js";const f=e=>i`<div role="menu" style="width: 25rem;">${e}</div>`,U=e=>f(i` <mdc-menuitemcheckbox
      @change="${l("onchange")}"
      @click="${l("onclick")}"
      @focus="${l("onfocus")}"
      ?disabled="${e.disabled}"
      ?checked="${e.checked}"
      label="${e.label}"
      indicator="${e.indicator}"
      secondary-label="${e["secondary-label"]}"
      tooltip-text="${e["tooltip-text"]}"
      tooltip-placement="${e["tooltip-placement"]}"
    >
      ${e.children}
    </mdc-menuitemcheckbox>`),se={title:"Components/menupopover/menuitemcheckbox",tags:["autodocs"],component:"mdc-menuitemcheckbox",render:U,parameters:{badges:["stable"]},argTypes:{checked:{control:"boolean"},indicator:{control:"select",options:Object.values(c)},disabled:{control:"boolean"},label:{control:"text"},"secondary-label":{control:"text"},"tooltip-text":{control:"text"},"tooltip-placement":{control:"select",options:Object.values(M)},...W(["data-aria-label","variant","tertiary-label","side-header-text","subline-text","keydown","keyup","leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-text-side-header","trailing-text-subline","trailing-controls","arrow-position","arrow-direction","--mdc-listitem-default-background-color","--mdc-listitem-background-color-hover","--mdc-listitem-background-color-active","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color","--mdc-listitem-column-gap","--mdc-listitem-padding-left-and-right"]),...L(["change","click","focus"]),...v,...D}},t={args:{indicator:c.CHECKBOX,checked:!1,label:"Menu Item",disabled:!1,"secondary-label":"","tooltip-text":"","tooltip-placement":M.TOP,children:i`<mdc-icon length-unit="rem" name="alert-muted-bold" slot="leading-controls"></mdc-icon>`}},o={args:{checked:!0,indicator:c.TOGGLE,label:"Menu Item With Toggle",disabled:!1,"secondary-label":""}},m={args:{checked:!0,indicator:c.CHECKBOX,label:"Menu Item With Checkbox",disabled:!1,"secondary-label":""}},n={args:{checked:!0,indicator:c.CHECKMARK,label:"Menu Item With Checkmark",disabled:!1,"secondary-label":""}},d={render:()=>f(i`
      <div role="menu" style="display: flex; gap: 1rem;">
        <mdc-menusection headerText="Menu Item Checkboxes">
          <mdc-menuitemcheckbox checked label="Selected Checkbox"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox disabled checked label="Disabled Selected Checkbox"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox label="Unselected Checkbox"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox disabled label="Disabled Unselected Checkbox"></mdc-menuitemcheckbox>
        </mdc-menusection>
        <mdc-menusection headerText="Menu Item Toggles">
          <mdc-menuitemcheckbox checked indicator="toggle" label="Selected Toggle"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox disabled checked indicator="toggle" label="Disabled Selected Toggle">
          </mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="toggle" label="Unselected Toggle"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox disabled indicator="toggle" label="Disabled Unselected Toggle"> </mdc-menuitemcheckbox>
        </mdc-menusection>
        <mdc-menusection headerText="Menu Item Checkmarks">
          <mdc-menuitemcheckbox checked indicator="checkmark" label="Selected Checkmark"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox disabled checked indicator="checkmark" label="Disabled Selected Checkmark">
          </mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="checkmark" label="Unselected Checkmark"> </mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox disabled indicator="checkmark" label="Disabled Unselected Checkmark">
          </mdc-menuitemcheckbox>
        </mdc-menusection>
        <mdc-menusection headerText="Menu Item Checkbox with custom indicator">
          <style>
            mdc-menuitemcheckbox[indicator='none'] mdc-icon {
              width: 5rem;
              height: auto;
              aspect-ratio: 16/9;
              padding: 0.75rem;
            }
            mdc-menuitemcheckbox[indicator='none'][checked]:not([disabled]) mdc-icon {
              color: var(--mds-color-theme-text-accent-normal);
              background: var(--mdc-listitem-background-color-active);
            }
            mdc-menuitemcheckbox[indicator='none'][checked][disabled] mdc-icon {
              background: var(--mdc-listitem-background-color-hover);
            }
            mdc-menuitemcheckbox[indicator='none'][checked]::part(leading-text-primary-label) {
              font-weight: bold;
              color: inherit;
            }
          </style>
          <mdc-menuitemcheckbox name="group3" checked indicator="none" label="Selected No indicator">
            <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
          </mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox name="group3" disabled checked indicator="none" label="Disabled Selected No indicator">
            <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
          </mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox name="group3" indicator="none" label="Unselected No indicator">
            <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
          </mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox name="group3" disabled indicator="none" label="Disabled Unselected No indicator">
            <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
          </mdc-menuitemcheckbox>
        </mdc-menusection>

        <mdc-menusection headerText="Menu Item Checkboxes with secondary label">
          <mdc-menuitemcheckbox
            checked
            label="Selected Menu Item With Secondary Label"
            secondary-label="Secondary Label"
          ></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox
            label="Unselected Menu Item With Secondary Label"
            secondary-label="Secondary Label"
          ></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox
            checked
            indicator="toggle"
            label="Selected Menu Item With Secondary Label"
            secondary-label="Secondary Label"
          ></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox
            indicator="toggle"
            label="Unselected Menu Item With Secondary Label"
            secondary-label="Secondary Label"
          ></mdc-menuitemcheckbox>
        </mdc-menusection>
      </div>
    `),...O()};var a,r,b;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    indicator: INDICATOR.CHECKBOX,
    checked: false,
    label: 'Menu Item',
    disabled: false,
    'secondary-label': '',
    'tooltip-text': '',
    'tooltip-placement': POPOVER_PLACEMENT.TOP,
    children: html\`<mdc-icon length-unit="rem" name="alert-muted-bold" slot="leading-controls"></mdc-icon>\`
  }
}`,...(b=(r=t.parameters)==null?void 0:r.docs)==null?void 0:b.source}}};var s,h,u;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    checked: true,
    indicator: INDICATOR.TOGGLE,
    label: 'Menu Item With Toggle',
    disabled: false,
    'secondary-label': ''
  }
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var k,x,g;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    checked: true,
    indicator: INDICATOR.CHECKBOX,
    label: 'Menu Item With Checkbox',
    disabled: false,
    'secondary-label': ''
  }
}`,...(g=(x=m.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var p,y,C;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    checked: true,
    indicator: INDICATOR.CHECKMARK,
    label: 'Menu Item With Checkmark',
    disabled: false,
    'secondary-label': ''
  }
}`,...(C=(y=n.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var I,S,T;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <div role="menu" style="display: flex; gap: 1rem;">
        <mdc-menusection headerText="Menu Item Checkboxes">
          <mdc-menuitemcheckbox checked label="Selected Checkbox"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox disabled checked label="Disabled Selected Checkbox"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox label="Unselected Checkbox"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox disabled label="Disabled Unselected Checkbox"></mdc-menuitemcheckbox>
        </mdc-menusection>
        <mdc-menusection headerText="Menu Item Toggles">
          <mdc-menuitemcheckbox checked indicator="toggle" label="Selected Toggle"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox disabled checked indicator="toggle" label="Disabled Selected Toggle">
          </mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="toggle" label="Unselected Toggle"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox disabled indicator="toggle" label="Disabled Unselected Toggle"> </mdc-menuitemcheckbox>
        </mdc-menusection>
        <mdc-menusection headerText="Menu Item Checkmarks">
          <mdc-menuitemcheckbox checked indicator="checkmark" label="Selected Checkmark"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox disabled checked indicator="checkmark" label="Disabled Selected Checkmark">
          </mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox indicator="checkmark" label="Unselected Checkmark"> </mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox disabled indicator="checkmark" label="Disabled Unselected Checkmark">
          </mdc-menuitemcheckbox>
        </mdc-menusection>
        <mdc-menusection headerText="Menu Item Checkbox with custom indicator">
          <style>
            mdc-menuitemcheckbox[indicator='none'] mdc-icon {
              width: 5rem;
              height: auto;
              aspect-ratio: 16/9;
              padding: 0.75rem;
            }
            mdc-menuitemcheckbox[indicator='none'][checked]:not([disabled]) mdc-icon {
              color: var(--mds-color-theme-text-accent-normal);
              background: var(--mdc-listitem-background-color-active);
            }
            mdc-menuitemcheckbox[indicator='none'][checked][disabled] mdc-icon {
              background: var(--mdc-listitem-background-color-hover);
            }
            mdc-menuitemcheckbox[indicator='none'][checked]::part(leading-text-primary-label) {
              font-weight: bold;
              color: inherit;
            }
          </style>
          <mdc-menuitemcheckbox name="group3" checked indicator="none" label="Selected No indicator">
            <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
          </mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox name="group3" disabled checked indicator="none" label="Disabled Selected No indicator">
            <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
          </mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox name="group3" indicator="none" label="Unselected No indicator">
            <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
          </mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox name="group3" disabled indicator="none" label="Disabled Unselected No indicator">
            <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
          </mdc-menuitemcheckbox>
        </mdc-menusection>

        <mdc-menusection headerText="Menu Item Checkboxes with secondary label">
          <mdc-menuitemcheckbox
            checked
            label="Selected Menu Item With Secondary Label"
            secondary-label="Secondary Label"
          ></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox
            label="Unselected Menu Item With Secondary Label"
            secondary-label="Secondary Label"
          ></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox
            checked
            indicator="toggle"
            label="Selected Menu Item With Secondary Label"
            secondary-label="Secondary Label"
          ></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox
            indicator="toggle"
            label="Unselected Menu Item With Secondary Label"
            secondary-label="Secondary Label"
          ></mdc-menuitemcheckbox>
        </mdc-menusection>
      </div>
    \`),
  ...hideAllControls()
}`,...(T=(S=d.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const he=["Example","ToggleWithMenuItem","CheckboxWithMenuItem","CheckmarkWithMenuItem","AllVariants"];export{d as AllVariants,m as CheckboxWithMenuItem,n as CheckmarkWithMenuItem,t as Example,o as ToggleWithMenuItem,he as __namedExportsOrder,se as default};
