import{k as p}from"./iframe-n_pPM-AH.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-DKUdKCPs.js";import"./index-CMIvoe5T.js";import"./index-DJkvmJor.js";import"./index-CIiJTSbx.js";import"./index-DgxUhXNC.js";import"./index-TV_fzXSP.js";import"./index-BgXwjcvQ.js";import"./index-Bd46ay4h.js";import"./index-CbvyNuZv.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CRCj3cYz.js";import"./buttonsimple.component-BhVhD8WC.js";import"./DisabledMixin-CSX0_rm2.js";import"./KeyDownHandledMixin-DZIjQ3jq.js";import"./index-Mza85U84.js";import"./button.utils-rNW36Ji7.js";import"./index-DPX8NBux.js";import"./index-DTrDRi1E.js";import"./if-defined-Ci9G1PLj.js";import"./index-CS22aGLn.js";import"./IconNameMixin-CyphjDlg.js";import"./index-VgxoeULe.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-4T4IFTMT.js";import"./linksimple.component-DaKhB9Eg.js";import"./DataAriaLabelMixin-Dt_BbD17.js";import"./link.constants-DQvgOPdM.js";import"./index-CrDKkI09.js";import"./popover.component-BsPvCrCV.js";import"./BackdropMixin-B0-id4DG.js";import"./popover.constants-BG8BtsK7.js";import"./index-DM6ySEXD.js";import"./v4-CmTdKEVZ.js";import"./input.component-BayaHJBh.js";import"./directive-Ctav8iJK.js";import"./index-8Toh1Id-.js";import"./formfieldwrapper.component-BYJupr26.js";import"./formfieldwrapper.constants-B8ILkPv5.js";import"./FormInternalsMixin-BqXwtiBI.js";import"./input.constants-DyLSFv7t.js";import"./index-CBP3N6H-.js";import"./index-CU9w1pWm.js";import"./radio.constants-CDct4Z5Y.js";import"./index-BaB97zpC.js";import"./toggle.constants-DK1NqveL.js";import"./ControlTypeMixin-CXx4ka7u.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
