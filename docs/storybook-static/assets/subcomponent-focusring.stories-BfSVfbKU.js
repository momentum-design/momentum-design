import{k as d}from"./iframe-D-ciOeUr.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-CjcKmpFu.js";import"./index-DhRB2sak.js";import"./index-DXj7asZW.js";import"./index-hC7pPHX-.js";import"./index-DwAp9rS3.js";import"./index-Cq57nUXI.js";import"./index-B8MW1_zJ.js";import"./index-CI9aDfyw.js";import"./index-CbV_ALKl.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-DCHC4cBd.js";import"./buttonsimple.component-Dwj0Qoje.js";import"./DisabledMixin-B71E26tS.js";import"./KeyDownHandledMixin-C2xnG8gd.js";import"./index-mHg59Eox.js";import"./button.utils-rNW36Ji7.js";import"./index-KW1aVgBN.js";import"./index-DTrDRi1E.js";import"./if-defined-Vfrg044X.js";import"./index-BEFo43Hk.js";import"./IconNameMixin-C81ATEuJ.js";import"./index-CTyrL7j-.js";import"./badge.constants-ll9naB6j.js";import"./linksimple.component-BAV0ZpoD.js";import"./DataAriaLabelMixin-CcQpfuVQ.js";import"./link.constants-BJLHNxIk.js";import"./index-CRdMnItg.js";import"./popover.component-BY902V5J.js";import"./BackdropMixin-DbleJJpK.js";import"./popover.constants-BVdfqmrA.js";import"./index-CSs1EUg4.js";import"./v4-CmTdKEVZ.js";import"./input.component-B1vvp1w7.js";import"./directive-Ctav8iJK.js";import"./index-DdRh3tR6.js";import"./formfieldwrapper.component-CRcyxynC.js";import"./formfieldwrapper.constants-nSv8udFn.js";import"./FormInternalsMixin-CHdKdGVn.js";import"./input.constants-BzeEhTZd.js";import"./index-CauWLfnm.js";import"./index-DvaplSfk.js";import"./radio.constants-OEYuuqCV.js";import"./index-B2O8Hdja.js";import"./toggle.constants-DhS9s0su.js";import"./ControlTypeMixin-D-CFuRLq.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
    <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-button>Button</mdc-button>
      <mdc-avatarbutton
        initials="MD"
        size="48"
        src="https://picsum.photos/id/63/256"
        aria-label="Avatar Button"
      ></mdc-avatarbutton>
      <mdc-tab icon-name="placeholder-bold" tabindex="0" text="Tab 1" variant="pill">
        <mdc-badge slot="badge" type="counter" counter="1"></mdc-badge>
      </mdc-tab>
    </div>
  `},o={argTypes:{...p(["shape"])},render:()=>d` <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-link icon-name="placeholder-bold"><a href="#">Link</a></mdc-link>
      <mdc-input value="Input" trailing-button></mdc-input>
      <mdc-radio name="radio" value="radio" label="Radio"></mdc-radio>
      <mdc-checkbox label="Checkbox"></mdc-checkbox>
      <mdc-toggle label="Toggle"></mdc-toggle>
    </div>`};var e,r,i;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
        <mdc-badge slot="badge" type="counter" counter="1"></mdc-badge>
      </mdc-tab>
    </div>
  \`
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var a,m,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const it=["Example","FocusRingWithinHost"];export{t as Example,o as FocusRingWithinHost,it as __namedExportsOrder,rt as default};
