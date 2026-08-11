import{k as p}from"./iframe-BQGMC8oL.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-Ca4Q2wHP.js";import"./index-C4GMjzIl.js";import"./index-SfW88Fpg.js";import"./index-C4vQR4qz.js";import"./index-PCkpFXpW.js";import"./index-Dt5EzQE3.js";import"./index-AiSgsKGB.js";import"./index-Zy4ouU0J.js";import"./index-CltaT-Ye.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-Bt-ZTuZH.js";import"./buttonsimple.component-CRZaFpn7.js";import"./DisabledMixin-B94U0yzj.js";import"./KeyDownHandledMixin-D92IkIKR.js";import"./index-DYZ0bkDC.js";import"./button.utils-rNW36Ji7.js";import"./index-BMA4C4IF.js";import"./index-DTrDRi1E.js";import"./index-BJiJ-4PR.js";import"./IconNameMixin-BqS9hUOk.js";import"./index-DbtTREBG.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-BirrSeMs.js";import"./linksimple.component-Xm_Ofwnj.js";import"./DataAriaLabelMixin-SOHNi4PA.js";import"./link.constants-DmiEplUK.js";import"./index-a28Ol7e_.js";import"./index-DHraBnsI.js";import"./popover.component-BIyGGxEI.js";import"./BackdropMixin-r0_gKnDt.js";import"./FocusTrapMixin-Dl6cxHJW.js";import"./popover.constants-DqFxxFNF.js";import"./input.component-CRFhoxBn.js";import"./index-CBhGXbYM.js";import"./index-B0N383Zm.js";import"./statusmessage.constants-Bue8bpYA.js";import"./formfieldwrapper.component-Dpa_SkG3.js";import"./formfieldwrapper.constants-DWPbQzgb.js";import"./FormInternalsMixin-Bbcv7RC_.js";import"./input.constants-Bs68LU54.js";import"./index-BcmAZmSt.js";import"./index-CNfCHP82.js";import"./radio.constants-CZ3xIDyL.js";import"./index-CVbBKmZ-.js";import"./toggle.constants-BMpmHAky.js";import"./ControlTypeMixin-DKFRcWOi.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
