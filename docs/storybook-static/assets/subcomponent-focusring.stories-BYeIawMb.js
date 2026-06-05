import{k as p}from"./iframe-BWUGX0Bu.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-CrCSX7cE.js";import"./index-B5r19uzg.js";import"./index-B1xPARZU.js";import"./index-D_2KS0QJ.js";import"./index-BMYtw_Fm.js";import"./index-DlnluqIH.js";import"./index-B3_kqP4P.js";import"./index-BjyGDsHj.js";import"./index-BdQ-nMHY.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-B3QgfcjJ.js";import"./buttonsimple.component-B8E-5iLi.js";import"./DisabledMixin-DroOoHnv.js";import"./KeyDownHandledMixin-BR5Dt47J.js";import"./index-lIa3bVCT.js";import"./button.utils-rNW36Ji7.js";import"./index-CrKWLrX9.js";import"./index-DTrDRi1E.js";import"./if-defined-DYeAHZdU.js";import"./index-BxFx8aRa.js";import"./IconNameMixin-C6yDI_nB.js";import"./index-rDPQSQXU.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-sX0fmINe.js";import"./linksimple.component-CL8gEmP7.js";import"./DataAriaLabelMixin-B579ZDqQ.js";import"./link.constants-DewgLXrS.js";import"./index-B9VuuNex.js";import"./v4-CmTdKEVZ.js";import"./index-CSD7U5Np.js";import"./popover.component-bdJWF8J-.js";import"./BackdropMixin--4n8bBhz.js";import"./popover.constants-TwoWXAp6.js";import"./input.component-BinRgIB5.js";import"./directive-Ctav8iJK.js";import"./index-DPOkXbfQ.js";import"./formfieldwrapper.component-COQ7QjXI.js";import"./formfieldwrapper.constants-D-N-MIu_.js";import"./FormInternalsMixin-BKgd8BEe.js";import"./input.constants-LjFujH6B.js";import"./index-apBpdQPh.js";import"./index-BIaw6DDB.js";import"./radio.constants-CKFccITP.js";import"./index-CWhBc6mR.js";import"./toggle.constants-D_QDYYti.js";import"./ControlTypeMixin-CxdsmWZ6.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
