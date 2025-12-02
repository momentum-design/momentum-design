import{k as d}from"./iframe-bzVLHCLd.js";import{h as p}from"./utils-CO8B6ZcN.js";import"./index-B6jbyeDI.js";import"./index-CA_mXHMm.js";import"./index-BnmzkmvL.js";import"./index-DlTn5_KS.js";import"./index-B7gdB1KK.js";import"./index-CLtAhojy.js";import"./index-DPEKcFpr.js";import"./index-CC4FhnDu.js";import"./index-ClhDqyKI.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-vuKgk0hu.js";import"./buttonsimple.component-Banm6OrG.js";import"./TabIndexMixin-BTpQ0FPl.js";import"./DisabledMixin-D3qipKRq.js";import"./button.utils-rNW36Ji7.js";import"./index-BU65HlhD.js";import"./index-BpeILGLU.js";import"./index-DTrDRi1E.js";import"./if-defined-N96FXNFV.js";import"./index-ByImjhny.js";import"./IconNameMixin-D2qTzt4c.js";import"./index-I1hI_Eqp.js";import"./badge.constants-Ceuji9gr.js";import"./linksimple.component-CQcnggdX.js";import"./DataAriaLabelMixin-CZgyIvjm.js";import"./link.constants-D7xoc0-j.js";import"./index-DhgUYqIt.js";import"./base-DIkkzJ-c.js";import"./popover.component-BQxCRDrC.js";import"./BackdropMixin-B3nCByry.js";import"./index-Dqc2eaTR.js";import"./v4-CmTdKEVZ.js";import"./input.component-Dr5dp-9W.js";import"./directive-Ctav8iJK.js";import"./index-DmfOk-AK.js";import"./formfieldwrapper.component-DXmDQwE_.js";import"./formfieldwrapper.constants-CigjiCT9.js";import"./FormInternalsMixin-aPEBOL9L.js";import"./query-BPxBhMfF.js";import"./input.constants-DGNXoskV.js";import"./index-DCeCW94j.js";import"./index-BxO0Hljk.js";import"./radio.constants-nD6H-r93.js";import"./index-DKrrGfZt.js";import"./toggle.constants-DUoqydzc.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const it=["Example","FocusRingWithinHost"];export{t as Example,o as FocusRingWithinHost,it as __namedExportsOrder,rt as default};
