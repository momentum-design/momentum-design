import{k as p}from"./iframe-C10VdK12.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-DrXeBu3F.js";import"./index-CsJiNRoZ.js";import"./index-Blmx9JHV.js";import"./index-DgsZidso.js";import"./index-2swfmv10.js";import"./index-D4QfuZ43.js";import"./index-BqaCXvkV.js";import"./index-CY0ocrp_.js";import"./index-CWHAwSbF.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-BS2_ofa4.js";import"./buttonsimple.component-BQP7AR8u.js";import"./DisabledMixin-CO3LfEsk.js";import"./KeyDownHandledMixin-hNSgEOZt.js";import"./index-C6ZeKbPJ.js";import"./button.utils-rNW36Ji7.js";import"./index-Bqh1to7c.js";import"./index-DTrDRi1E.js";import"./if-defined-CWVcm-XG.js";import"./index-DqYYpPsP.js";import"./IconNameMixin-Su28yxyx.js";import"./index-CPMpBQMb.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-qLcMkrfy.js";import"./linksimple.component-TzbuMsHh.js";import"./DataAriaLabelMixin-C5nwRFWb.js";import"./link.constants-Pk8dyP_G.js";import"./index-DpUn21am.js";import"./popover.component-Cm61NnT4.js";import"./BackdropMixin-LFMVB-On.js";import"./popover.constants-4s_E9pps.js";import"./index-B0siHg68.js";import"./v4-CmTdKEVZ.js";import"./input.component-BkDgZNJk.js";import"./directive-Ctav8iJK.js";import"./index-BDs7HHlL.js";import"./formfieldwrapper.component-KQbzXg8B.js";import"./formfieldwrapper.constants-BAbWPppI.js";import"./FormInternalsMixin-CsMjxjzs.js";import"./input.constants-B4hf1t6y.js";import"./index-DYUbxvsz.js";import"./index-CbHlblxI.js";import"./radio.constants-D_OqZ0sV.js";import"./index-DWcQ_rVx.js";import"./toggle.constants-Ece6dFXp.js";import"./ControlTypeMixin-ClHmfRqt.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
