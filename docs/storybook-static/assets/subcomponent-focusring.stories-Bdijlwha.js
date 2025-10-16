import{k as d}from"./iframe-Bf6-IwAq.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-CUTflbsM.js";import"./index-P36pK_RX.js";import"./index-BVW1ROww.js";import"./index-DSKDI5Bd.js";import"./index-BMvN6qMt.js";import"./index-BrCgZeb3.js";import"./index-BShp3q90.js";import"./index-3GT3Y7uX.js";import"./index-ClJQ-dA9.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CQzCH_PC.js";import"./buttonsimple.component-BDbkvrcc.js";import"./keys-hFXe221I.js";import"./DisabledMixin-VQPUxNBU.js";import"./TabIndexMixin-DwRLYS46.js";import"./button.utils-rNW36Ji7.js";import"./index-D_ECVX3R.js";import"./index-7U_I6KX4.js";import"./index-DTrDRi1E.js";import"./if-defined-DdJfs53F.js";import"./index-rQTrpvbY.js";import"./IconNameMixin-D-VuWImk.js";import"./index-_BWJT4bk.js";import"./badge.constants-jSWaOn1O.js";import"./linksimple.component-CQH0_ONJ.js";import"./DataAriaLabelMixin-nR37qCN2.js";import"./link.constants-CltrA98W.js";import"./index-NSkDcpgY.js";import"./popover.component-4uKr9v9E.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-C2wU_3qk.js";import"./index-Dt-pvUnY.js";import"./v4-CmTdKEVZ.js";import"./input.component-Devt5OCv.js";import"./directive-Ctav8iJK.js";import"./index-CxTr3Ctt.js";import"./formfieldwrapper.component-CTBZmkz9.js";import"./formfieldwrapper.constants-COFz-Mjg.js";import"./FormInternalsMixin-ubfhXjzJ.js";import"./query-DXShiZ7f.js";import"./input.constants-BpW6-kGD.js";import"./index-DRGiz0E7.js";import"./index-BeK5xPCr.js";import"./radio.constants-8OiaEAkP.js";import"./index-CdOQCQfF.js";import"./toggle.constants-DBt1BDuf.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const at=["Example","FocusRingWithinHost"];export{t as Example,o as FocusRingWithinHost,at as __namedExportsOrder,it as default};
