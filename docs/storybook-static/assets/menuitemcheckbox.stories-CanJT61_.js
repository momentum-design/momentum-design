import{k as i}from"./lit-element-D5KKan5q.js";import"./index-DbXgh-_c.js";import"./index-D38jSS5Q.js";import{c as v,s as f}from"./commonArgTypes-BluK8w5L.js";import{a as D,d as W,h as L}from"./utils-CFOyPOhY.js";import{a as T}from"./popover.component-BeJYT0F1.js";import{I as c}from"./menuitemcheckbox.constants-CWk8F82j.js";import"./index-CMIHSbqc.js";import"./provider.component-BaQC7CJH.js";import"./DisabledMixin-DcYwkKYf.js";import"./toggle.constants-D7xoKPn9.js";import"./index-riA1qVWu.js";import"./index-DYRxW7oy.js";import"./roles-DU0xbrD4.js";import"./v4-CmTdKEVZ.js";import"./class-map-BcCVsMyu.js";import"./directive-Ctav8iJK.js";import"./menuitem.component-CtCANyEv.js";import"./listitem.component-CqDx-T5W.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./keys-hFXe221I.js";import"./TabIndexMixin-TvgH_pmh.js";import"./index-B-GnYs90.js";import"./iframe-ie6jbfXq.js";import"../sb-preview/runtime.js";import"./state-C0WmBOuD.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-ChWiF_5p.js";import"./create-context-89xeped_.js";import"./if-defined-D5BV9-c0.js";const M=e=>i`<div role="menu" style="width: 25rem;">${e}</div>`,O=e=>M(i` <mdc-menuitemcheckbox
      ?disabled="${e.disabled}"
      ?checked="${e.checked}"
      label="${e.label}"
      indicator="${e.indicator}"
      secondary-label="${e["secondary-label"]}"
      tooltip-text="${e["tooltip-text"]}"
      tooltip-placement="${e["tooltip-placement"]}"
    >
      ${e.children}
    </mdc-menuitemcheckbox>`),le={title:"Components/menupopover/menuitemcheckbox",tags:["autodocs"],component:"mdc-menuitemcheckbox",render:O,parameters:{badges:["stable"]},argTypes:{checked:{control:"boolean"},indicator:{control:"select",options:Object.values(c)},disabled:{control:"boolean"},label:{control:"text"},"secondary-label":{control:"text"},"tooltip-text":{control:"text"},"tooltip-placement":{control:"select",options:Object.values(T)},...D(["data-aria-label","variant","tertiary-label","side-header-text","subline-text","keydown","keyup","leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-text-side-header","trailing-text-subline","trailing-controls","arrow-position","arrow-direction","--mdc-listitem-default-background-color","--mdc-listitem-background-color-hover","--mdc-listitem-background-color-active","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color","--mdc-listitem-column-gap","--mdc-listitem-padding-left-and-right"]),...W(["change","click","focus"]),...v,...f}},t={args:{indicator:c.CHECKBOX,checked:!1,label:"Menu Item",disabled:!1,"secondary-label":"","tooltip-text":"","tooltip-placement":T.TOP,children:i`<mdc-icon length-unit="rem" name="alert-muted-bold" slot="leading-controls"></mdc-icon>`}},o={args:{checked:!0,indicator:c.TOGGLE,label:"Menu Item With Toggle",disabled:!1,"secondary-label":""}},m={args:{checked:!0,indicator:c.CHECKBOX,label:"Menu Item With Checkbox",disabled:!1,"secondary-label":""}},n={args:{checked:!0,indicator:c.CHECKMARK,label:"Menu Item With Checkmark",disabled:!1,"secondary-label":""}},d={render:()=>M(i`
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
    `),...L()};var l,a,r;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var b,s,h;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    checked: true,
    indicator: INDICATOR.TOGGLE,
    label: 'Menu Item With Toggle',
    disabled: false,
    'secondary-label': ''
  }
}`,...(h=(s=o.parameters)==null?void 0:s.docs)==null?void 0:h.source}}};var u,k,x;m.parameters={...m.parameters,docs:{...(u=m.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    checked: true,
    indicator: INDICATOR.CHECKBOX,
    label: 'Menu Item With Checkbox',
    disabled: false,
    'secondary-label': ''
  }
}`,...(x=(k=m.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var g,p,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    checked: true,
    indicator: INDICATOR.CHECKMARK,
    label: 'Menu Item With Checkmark',
    disabled: false,
    'secondary-label': ''
  }
}`,...(y=(p=n.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var C,I,S;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(S=(I=d.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};const ae=["Example","ToggleWithMenuItem","CheckboxWithMenuItem","CheckmarkWithMenuItem","AllVariants"];export{d as AllVariants,m as CheckboxWithMenuItem,n as CheckmarkWithMenuItem,t as Example,o as ToggleWithMenuItem,ae as __namedExportsOrder,le as default};
