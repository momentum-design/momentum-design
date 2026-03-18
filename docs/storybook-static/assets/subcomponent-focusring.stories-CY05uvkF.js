import{k as p}from"./iframe-XWsxOvFK.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-Ba2SwKN7.js";import"./index-CTImfTYJ.js";import"./index-D5ZArwTo.js";import"./index-C-26LaU-.js";import"./index-BVOzsTwR.js";import"./index-Bu8pNbl1.js";import"./index-yF-GF6Nm.js";import"./index-Dpex_gPZ.js";import"./index-DwyPbl2i.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-DpsEcbkG.js";import"./buttonsimple.component-CBy5pgmT.js";import"./DisabledMixin-ChexUNpd.js";import"./KeyDownHandledMixin-D8wZ24Zf.js";import"./index-Bi8v92hK.js";import"./button.utils-rNW36Ji7.js";import"./index-C4pU2kcn.js";import"./index-DTrDRi1E.js";import"./if-defined-DU1Fw2i1.js";import"./index-Ca5zPO-2.js";import"./IconNameMixin-s_1K9LN0.js";import"./index-DQvzotNk.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-BO-dobb2.js";import"./linksimple.component-CO4-wzNO.js";import"./DataAriaLabelMixin-BPSk4IJ7.js";import"./link.constants-XUcTaAil.js";import"./index-BZEE-nIQ.js";import"./popover.component-NpFfedEQ.js";import"./BackdropMixin-q2kIVIns.js";import"./popover.constants-Bf0xwOfr.js";import"./index-DcfOV_PC.js";import"./v4-CmTdKEVZ.js";import"./input.component-BhO0eFwk.js";import"./directive-Ctav8iJK.js";import"./index-D_vtvcOR.js";import"./formfieldwrapper.component-CJQ2aEyE.js";import"./formfieldwrapper.constants-CafgdQ5g.js";import"./FormInternalsMixin-B8q975VL.js";import"./input.constants-C6K_vXc0.js";import"./index-DP30hXgY.js";import"./index-DjuUYLAy.js";import"./radio.constants-SRjoVA5d.js";import"./index-D1HNSmhZ.js";import"./toggle.constants-CD_oDVuM.js";import"./ControlTypeMixin-DgCqVvlA.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
