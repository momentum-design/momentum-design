import{k as d}from"./iframe-DPiEtQC6.js";import{h as p}from"./utils-D6nie9pS.js";import"./index-DrGUfC8Z.js";import"./index-BRqmM75E.js";import"./index-D2vig7Br.js";import"./index-CZ4lspuL.js";import"./index-DXYmrV-D.js";import"./index-CkHjLRxb.js";import"./index-DOl_Zlvn.js";import"./index-B4UVSJa2.js";import"./index-Bf-UsGRW.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-BfZBc0p6.js";import"./buttonsimple.component-DsF8ypJf.js";import"./DisabledMixin-DcbfFkR8.js";import"./KeyToActionMixin-C0pScinA.js";import"./button.utils-rNW36Ji7.js";import"./index-Bbl3QEBF.js";import"./index-DVeu7BgX.js";import"./index-DTrDRi1E.js";import"./if-defined-BBKKqPaV.js";import"./index-CXVD6FW0.js";import"./IconNameMixin-CToWFxos.js";import"./index-DUNSMfR8.js";import"./badge.constants-3mCLp-ia.js";import"./linksimple.component-DWfMLvLE.js";import"./DataAriaLabelMixin-q02ETwny.js";import"./link.constants-AzLg3Psz.js";import"./index-BMIejsKK.js";import"./popover.component-CKPUSr3G.js";import"./BackdropMixin-8KzPOV1J.js";import"./dom-BlZvhF8F.js";import"./popover.constants-Cp404HBT.js";import"./index-Db2uiM3r.js";import"./v4-CmTdKEVZ.js";import"./input.component-CSoe_npN.js";import"./directive-Ctav8iJK.js";import"./index-DI8cObQR.js";import"./formfieldwrapper.component-D6wHe3xF.js";import"./formfieldwrapper.constants-BPye36mV.js";import"./FormInternalsMixin-Di-erJ9l.js";import"./input.constants-CUaC8xH8.js";import"./index-CzN-tBj6.js";import"./index-PwQcXGaF.js";import"./radio.constants-B8JVjskX.js";import"./index-ClSnUyQn.js";import"./toggle.constants-BvtyAHtZ.js";import"./ControlTypeMixin-C3ScRry_.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
