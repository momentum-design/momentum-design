import{k as p}from"./iframe-BXXRt26c.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-4MecsPhr.js";import"./index-C2HWOHL9.js";import"./index-DRlzuJe8.js";import"./index-AykONe8O.js";import"./index-DW41eMDY.js";import"./index-D68Y7ajZ.js";import"./index-CahRHwA6.js";import"./index-DHRYdchf.js";import"./index-dcQj3u7s.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CJ7mjdOb.js";import"./buttonsimple.component-B5eiTLFS.js";import"./DisabledMixin-DmQBdKn0.js";import"./KeyDownHandledMixin-DyMMi3Cc.js";import"./index-PlotTZx3.js";import"./button.utils-rNW36Ji7.js";import"./index-Bb1LhfgT.js";import"./index-DTrDRi1E.js";import"./if-defined-DZNWkkOE.js";import"./index-DGS2xyId.js";import"./IconNameMixin-CUULXc7I.js";import"./index-DVdEjn4a.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-CovGv-G_.js";import"./linksimple.component-CugL-NHA.js";import"./DataAriaLabelMixin-4XZGIabN.js";import"./link.constants-D10cEciV.js";import"./index-G6MQE4dN.js";import"./v4-CmTdKEVZ.js";import"./index-BACUNHYp.js";import"./popover.component-DCJB8Wy7.js";import"./BackdropMixin-Dk40FQFW.js";import"./popover.constants-CNTbSxwh.js";import"./input.component-B3hqpLIr.js";import"./directive-Ctav8iJK.js";import"./index-CNrkYUFC.js";import"./formfieldwrapper.component-9D2zZBE5.js";import"./formfieldwrapper.constants-opyaq2lk.js";import"./FormInternalsMixin-CBPtEqvf.js";import"./input.constants-C7Axl9Wg.js";import"./index-CqkExNZi.js";import"./index-CiphLQ_O.js";import"./radio.constants-DWUllnk0.js";import"./index-DScPYvi_.js";import"./toggle.constants-Dz7MGBWk.js";import"./ControlTypeMixin-Dks5iFxh.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
    <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-button>Button</mdc-button>
      <mdc-avatarbutton
        initials="MD"
        size="48"
        src="https://picsum.photos/id/63/256"
        aria-label="Avatar Button"
      ></mdc-avatarbutton>
      <mdc-tab icon-name="placeholder-bold" tabindex="0" text="Tab 1" variant="pill">
        <mdc-badge slot="postfix" type="counter" counter="1"></mdc-badge>
      </mdc-tab>
    </div>
  `},o={argTypes:{...d(["shape"])},render:()=>p` <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-link icon-name="placeholder-bold"><a href="#">Link</a></mdc-link>
      <mdc-input value="Input" trailing-button></mdc-input>
      <mdc-radio name="radio" value="radio" label="Radio"></mdc-radio>
      <mdc-checkbox label="Checkbox"></mdc-checkbox>
      <mdc-toggle label="Toggle"></mdc-toggle>
    </div>`};var r,e,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-button>Button</mdc-button>
      <mdc-avatarbutton
        initials="MD"
        size="48"
        src="https://picsum.photos/id/63/256"
        aria-label="Avatar Button"
      ></mdc-avatarbutton>
      <mdc-tab icon-name="placeholder-bold" tabindex="0" text="Tab 1" variant="pill">
        <mdc-badge slot="postfix" type="counter" counter="1"></mdc-badge>
      </mdc-tab>
    </div>
  \`
}`,...(i=(e=t.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};var a,m,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  argTypes: {
    ...hideControls(['shape'])
  },
  render: () => html\` <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-link icon-name="placeholder-bold"><a href="#">Link</a></mdc-link>
      <mdc-input value="Input" trailing-button></mdc-input>
      <mdc-radio name="radio" value="radio" label="Radio"></mdc-radio>
      <mdc-checkbox label="Checkbox"></mdc-checkbox>
      <mdc-toggle label="Toggle"></mdc-toggle>
    </div>\`
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const at=["Example","FocusRingWithinHost"];export{t as Example,o as FocusRingWithinHost,at as __namedExportsOrder,it as default};
