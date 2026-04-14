import{k as p}from"./iframe-CwzjigLR.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-BU3Decq1.js";import"./index-6J5bZqq5.js";import"./index-vES3Z_B_.js";import"./index-6cLj4Wk0.js";import"./index-Dwd0Wuza.js";import"./index-BL5ZaR11.js";import"./index-AbK1qMou.js";import"./index-DIwj7Vra.js";import"./index-D3ra9DtO.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-Vge6WQAi.js";import"./buttonsimple.component-CdMd1YH_.js";import"./DisabledMixin-CyJRAUwj.js";import"./KeyDownHandledMixin-BvzLbuqF.js";import"./index-D1bVmVCM.js";import"./button.utils-rNW36Ji7.js";import"./index-BtzM2KCC.js";import"./index-DTrDRi1E.js";import"./if-defined-DG6qR9lA.js";import"./index-DTOyzjM7.js";import"./IconNameMixin-5C37L7yw.js";import"./index-D9DaMS_2.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-CritO197.js";import"./linksimple.component-D6aTxlKT.js";import"./DataAriaLabelMixin-C0KmAD55.js";import"./link.constants-BYro7FQz.js";import"./index-ClGChjIO.js";import"./popover.component-BI_scSJb.js";import"./BackdropMixin-tEZx2kG9.js";import"./popover.constants-BAxIiEoR.js";import"./index-D5ilL6Bk.js";import"./v4-CmTdKEVZ.js";import"./input.component-DeaehYl-.js";import"./directive-Ctav8iJK.js";import"./index-BCgjU0qo.js";import"./formfieldwrapper.component-CEuxSLRV.js";import"./formfieldwrapper.constants-BvfjrLPP.js";import"./FormInternalsMixin-D1wnGe2J.js";import"./input.constants-ChimKSHs.js";import"./index-BWHYE1Ae.js";import"./index-Bo1xoi9A.js";import"./radio.constants-GNfbZ2B_.js";import"./index-BJdx7qbP.js";import"./toggle.constants-CmIth3CS.js";import"./ControlTypeMixin-CWQl9GP4.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
