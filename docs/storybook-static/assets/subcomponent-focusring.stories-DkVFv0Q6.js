import{k as p}from"./iframe-Ce3flZ0s.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-DXzoTAFJ.js";import"./index-7ZpZzXe_.js";import"./index-CDFoi0Jv.js";import"./index-CDrCEzUI.js";import"./index-DZ1zFpx9.js";import"./index-CM3VNbpR.js";import"./index-BRaAGrcJ.js";import"./index-C8QCnBXZ.js";import"./index-B__PrvJL.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-NbZrQPyn.js";import"./buttonsimple.component-C2bEkW43.js";import"./DisabledMixin-Db1GaAks.js";import"./KeyDownHandledMixin-rpP34O3I.js";import"./index-BfBG_HRl.js";import"./button.utils-rNW36Ji7.js";import"./index-B_K7Z56W.js";import"./index-DTrDRi1E.js";import"./if-defined-JThcPmUN.js";import"./index-Ce5GdVPO.js";import"./IconNameMixin-DWuySNLN.js";import"./index-Cm_IOIBL.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-BKZX0x_y.js";import"./linksimple.component-AK3Zodiy.js";import"./DataAriaLabelMixin-9aUIRlmB.js";import"./link.constants-DGMU0wh0.js";import"./index-DSdK99NU.js";import"./popover.component-DTSOzoa7.js";import"./BackdropMixin-CeL5ZTkG.js";import"./popover.constants-BlIC3Ggo.js";import"./index-CvkB63dL.js";import"./v4-CmTdKEVZ.js";import"./input.component-BXqnrNg7.js";import"./directive-Ctav8iJK.js";import"./index-C_qHXu4l.js";import"./formfieldwrapper.component-BPRfB_nQ.js";import"./formfieldwrapper.constants-Cg1k6GXX.js";import"./FormInternalsMixin-CT9x4hVJ.js";import"./input.constants-N_5QFh3F.js";import"./index-Bts6imt2.js";import"./index-CLYGyRzD.js";import"./radio.constants-CYL6OhGf.js";import"./index-Bk80YP04.js";import"./toggle.constants-DsydDT7e.js";import"./ControlTypeMixin-BnuvZful.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
