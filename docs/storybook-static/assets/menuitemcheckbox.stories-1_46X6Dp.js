import{k as i}from"./iframe-DhGqAUJy.js";import{t as f}from"./if-defined-CSf8oUlc.js";import"./index-Cobu6QUy.js";import"./index-DviT2LAi.js";import{c as D,s as v}from"./commonArgTypes-BluK8w5L.js";import{a as U,h as W}from"./utils-Dd_sfl9-.js";import{V as L}from"./ControlTypeMixin-BoP5Djbv.js";import{I as c}from"./menuitemcheckbox.constants-D0P0OuYl.js";import"./preload-helper-C1FmrZbK.js";import"./index-vjPNsj29.js";import"./DisabledMixin-CrYPrAlK.js";import"./formfieldwrapper.constants-ByYhGwl9.js";import"./toggle.constants-BG1I6fzl.js";import"./index-BAWtdVoN.js";import"./query-assigned-nodes-DgnTQRYW.js";import"./base-DIkkzJ-c.js";import"./popover.component-oRta-e5F.js";import"./BackdropMixin-DwiTpNLe.js";import"./v4-CmTdKEVZ.js";import"./class-map-WKHBl-hA.js";import"./directive-Ctav8iJK.js";import"./menuitem.component-C_hEdIlb.js";import"./listitem.component-C1MVtq8W.js";import"./query-assigned-elements-uEuc3rg8.js";import"./TabIndexMixin-Bv4GD8lE.js";import"./index-DLnXiPEA.js";import"./index-DTrDRi1E.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,M=e=>i`<div role="menu" style="width: 25rem;">${e}</div>`,O=e=>M(i` <mdc-menuitemcheckbox
      @change="${l("onchange")}"
      @click="${l("onclick")}"
      @focus="${l("onfocus")}"
      ?disabled="${e.disabled}"
      ?checked="${e.checked}"
      label="${e.label}"
      indicator="${e.indicator}"
      secondary-label="${e["secondary-label"]}"
      control-type="${f(e["control-type"])}"
      ?soft-disabled="${e["soft-disabled"]}"
    >
      ${e.children}
    </mdc-menuitemcheckbox>`),ne={title:"Components/menupopover/menuitemcheckbox",tags:["autodocs"],component:"mdc-menuitemcheckbox",render:O,argTypes:{checked:{control:"boolean"},indicator:{control:"select",options:Object.values(c)},disabled:{control:"boolean"},label:{control:"text"},"secondary-label":{control:"text"},"control-type":{control:"select",options:[void 0,...L]},"soft-disabled":{control:"boolean"},...U(["data-aria-label","variant","tertiary-label","side-header-text","subline-text","leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-text-side-header","trailing-text-subline","trailing-controls","arrow-position","arrow-direction"]),...D,...v}},o={args:{indicator:c.CHECKBOX,checked:!1,label:"Menu Item",disabled:!1,"secondary-label":"",children:i`<mdc-icon length-unit="rem" name="alert-muted-bold" slot="leading-controls"></mdc-icon>`}},t={args:{checked:!0,indicator:c.TOGGLE,label:"Menu Item With Toggle",disabled:!1,"secondary-label":""}},m={args:{checked:!0,indicator:c.CHECKBOX,label:"Menu Item With Checkbox",disabled:!1,"secondary-label":""}},n={args:{checked:!0,indicator:c.CHECKMARK,label:"Menu Item With Checkmark",disabled:!1,"secondary-label":""}},d={render:()=>M(i`
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
    `),...W()};var a,r,b;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    indicator: INDICATOR.CHECKBOX,
    checked: false,
    label: 'Menu Item',
    disabled: false,
    'secondary-label': '',
    children: html\`<mdc-icon length-unit="rem" name="alert-muted-bold" slot="leading-controls"></mdc-icon>\`
  }
}`,...(b=(r=o.parameters)==null?void 0:r.docs)==null?void 0:b.source}}};var s,h,u;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    checked: true,
    indicator: INDICATOR.TOGGLE,
    label: 'Menu Item With Toggle',
    disabled: false,
    'secondary-label': ''
  }
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var k,x,g;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(T=(S=d.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const de=["Example","ToggleWithMenuItem","CheckboxWithMenuItem","CheckmarkWithMenuItem","AllVariants"];export{d as AllVariants,m as CheckboxWithMenuItem,n as CheckmarkWithMenuItem,o as Example,t as ToggleWithMenuItem,de as __namedExportsOrder,ne as default};
