import{k as d}from"./iframe-DFrHSZxm.js";import{h as p}from"./utils-D6nie9pS.js";import"./index-D6px4Lzi.js";import"./index-BKGNP8gy.js";import"./index-BgDrUR3q.js";import"./index-C5pskllx.js";import"./index-8zU4cTxj.js";import"./index-ChibkQqf.js";import"./index-BRRBuEHS.js";import"./index-Cus0eZvH.js";import"./index-DMykH2jb.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-B6ku1aV1.js";import"./buttonsimple.component-BeJxtkv8.js";import"./TabIndexMixin-DfTHADxN.js";import"./DisabledMixin-BzNLu-18.js";import"./button.utils-rNW36Ji7.js";import"./index-Dyqoh_OX.js";import"./index-aTQOAzgn.js";import"./index-DTrDRi1E.js";import"./if-defined-DsJ518vR.js";import"./index-Ceb0cXcV.js";import"./IconNameMixin-DK28WrrE.js";import"./index-BY4HBZxy.js";import"./badge.constants-Cd92rpMF.js";import"./linksimple.component-Dhn8qkOq.js";import"./DataAriaLabelMixin-B3y4ISit.js";import"./link.constants-JTZdFlQK.js";import"./index-B09yGPvc.js";import"./base-DIkkzJ-c.js";import"./popover.component-Bv1Tr3uL.js";import"./BackdropMixin-CHNgtpch.js";import"./popover.constants-BwM_FtyM.js";import"./index-I4KSJWbN.js";import"./v4-CmTdKEVZ.js";import"./input.component-2-0uIi9B.js";import"./directive-Ctav8iJK.js";import"./index-sD4KzJzg.js";import"./formfieldwrapper.component-CkiV5l_f.js";import"./formfieldwrapper.constants-CZ5U_A4c.js";import"./FormInternalsMixin-h7x5Lyn8.js";import"./query-BPxBhMfF.js";import"./input.constants-DFEbyA20.js";import"./index-Dj4I0zlf.js";import"./index-BIrROami.js";import"./radio.constants-DSCpPKLM.js";import"./index-D1QTfFJR.js";import"./toggle.constants-Cl5wINCD.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
