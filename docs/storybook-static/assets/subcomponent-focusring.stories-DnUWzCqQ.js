import{k as d}from"./iframe-BtkPwD7j.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-D5i9PN5c.js";import"./index-DcRk466q.js";import"./index-SCKdeDax.js";import"./index-Dx4mdHXR.js";import"./index-DtELWoGj.js";import"./index-Bue80ls5.js";import"./index-JU1ZOSR9.js";import"./index-nRSPSAiW.js";import"./index-CPADLmzQ.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CTWLHGQw.js";import"./buttonsimple.component-D1YQZgrB.js";import"./DisabledMixin-Dt4Z3yf0.js";import"./KeyDownHandledMixin-BBk9G6iG.js";import"./index-Bjbavagu.js";import"./button.utils-rNW36Ji7.js";import"./index-DMVaZqHt.js";import"./index-DTrDRi1E.js";import"./if-defined-CRPsi96p.js";import"./index-BYD2QD5c.js";import"./IconNameMixin-CuSLCQ5t.js";import"./index-CWSynvcy.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-DPtBIVtW.js";import"./linksimple.component-C4R3HXYX.js";import"./DataAriaLabelMixin-vKL0c_au.js";import"./link.constants-DXMQ-bza.js";import"./index-BfgTlmLk.js";import"./popover.component-CsknWiHS.js";import"./BackdropMixin-v_CGG5fB.js";import"./popover.constants-BnL-ohWH.js";import"./index-Cyzogn-_.js";import"./v4-CmTdKEVZ.js";import"./input.component-ByphB0GQ.js";import"./directive-Ctav8iJK.js";import"./index-Bnas0WJZ.js";import"./formfieldwrapper.component-BEGkdnOz.js";import"./formfieldwrapper.constants-CillUOcz.js";import"./FormInternalsMixin-CExXZArL.js";import"./input.constants-BZp-vlxF.js";import"./index-CejywQZV.js";import"./index-DDM10k4m.js";import"./radio.constants-uEtb6-tZ.js";import"./index-DsKxlhKb.js";import"./toggle.constants-D8-RVKOL.js";import"./ControlTypeMixin-BUWQp4qg.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
