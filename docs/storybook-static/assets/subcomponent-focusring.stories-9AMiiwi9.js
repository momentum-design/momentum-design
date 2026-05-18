import{k as p}from"./iframe-DVF1nujO.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-Bqau_mk0.js";import"./index-D6VzLeE9.js";import"./index-Dx8dZmbi.js";import"./index-iny5CIN-.js";import"./index-DL03mIps.js";import"./index-DVdSHbn6.js";import"./index-Dsy9gihN.js";import"./index-D_LUCSxF.js";import"./index-BPWndrxl.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-B2aXzf_0.js";import"./buttonsimple.component-BazHFseR.js";import"./DisabledMixin-DkCdV4MU.js";import"./KeyDownHandledMixin-VaCWmTcy.js";import"./index-RtGtO6Cx.js";import"./button.utils-rNW36Ji7.js";import"./index-D8XrbL9C.js";import"./index-DTrDRi1E.js";import"./if-defined-BUEc_hfM.js";import"./index-BZJISOW2.js";import"./IconNameMixin-CsJwvxpY.js";import"./index-DGk3Swud.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-Fw7IFEzv.js";import"./linksimple.component-DRoiFApw.js";import"./DataAriaLabelMixin-C2ztD2tM.js";import"./link.constants-wRxgqm21.js";import"./index-Cu_PdfjR.js";import"./v4-CmTdKEVZ.js";import"./index-BlCCNpjQ.js";import"./popover.component-BNDnp2Wu.js";import"./BackdropMixin-DDmRMs6K.js";import"./popover.constants-CN4krwz9.js";import"./input.component-BLt_uAbO.js";import"./directive-Ctav8iJK.js";import"./index-BiIt0YzK.js";import"./formfieldwrapper.component-60V3TOOo.js";import"./formfieldwrapper.constants-BUwVu_lL.js";import"./FormInternalsMixin-BAmWW6tA.js";import"./input.constants-Cf6x7-6z.js";import"./index-BFwQe1kS.js";import"./index-CpcKktYE.js";import"./radio.constants-CoV32cQg.js";import"./index-BBpcGU98.js";import"./toggle.constants-B7AkMPJP.js";import"./ControlTypeMixin-BYw7SmGm.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
