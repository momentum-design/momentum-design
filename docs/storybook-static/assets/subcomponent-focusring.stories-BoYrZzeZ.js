import{k as d}from"./iframe-Cbrh-sUn.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-YlVeS-Ks.js";import"./index-CPtpxouN.js";import"./index-Dlne2dwD.js";import"./index-BeuU-wuM.js";import"./index-D4oigDOy.js";import"./index-BN-QZtof.js";import"./index-DKK98qNX.js";import"./index-CbToIuc7.js";import"./index-sYbEiEWB.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-FZQK40Ue.js";import"./buttonsimple.component-DV4247Hl.js";import"./DisabledMixin-DKrq-z8B.js";import"./KeyDownHandledMixin-B7vGZBpX.js";import"./index-vz56whK2.js";import"./button.utils-rNW36Ji7.js";import"./index-CaoLEN1R.js";import"./index-DTrDRi1E.js";import"./if-defined-C8uxVHlc.js";import"./index-0BaKAiBS.js";import"./IconNameMixin-J_vf2V4q.js";import"./index-DupIQ9BI.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-BgjQ_Swf.js";import"./linksimple.component-bmRcTCnU.js";import"./DataAriaLabelMixin-Bc6AbCT6.js";import"./link.constants-C_W5QXq-.js";import"./index-CrPtr8Ep.js";import"./popover.component-DGnoNTJg.js";import"./BackdropMixin-5M9qBEEB.js";import"./popover.constants-DRCr98nE.js";import"./index-B_pawO2M.js";import"./v4-CmTdKEVZ.js";import"./input.component-BFC9Qok9.js";import"./directive-Ctav8iJK.js";import"./index-yH7_VD-0.js";import"./formfieldwrapper.component-B4Ux8pOd.js";import"./formfieldwrapper.constants-DDtmNnYT.js";import"./FormInternalsMixin-K-COY2Gn.js";import"./input.constants-Cc4LP_mI.js";import"./index-Z_6FAINk.js";import"./index-DgNrOuaH.js";import"./radio.constants-C53lyVnw.js";import"./index-CbDOBCJj.js";import"./toggle.constants-CGMUTp-A.js";import"./ControlTypeMixin-oJIIS6Sw.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
