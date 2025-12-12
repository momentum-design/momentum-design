import{k as d}from"./iframe-E1lunX_E.js";import{h as p}from"./utils-D6nie9pS.js";import"./index-4XAof5NQ.js";import"./index-Bla713fR.js";import"./index-DN7Iz4yo.js";import"./index-Cp265SLx.js";import"./index-PNarJtdf.js";import"./index-DzEYd-zS.js";import"./index-Ckxl3Mk8.js";import"./index-GMMRLyZs.js";import"./index-B82n25ai.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-D4S8tPM8.js";import"./buttonsimple.component-tAMGZA2K.js";import"./TabIndexMixin-EvA1cca2.js";import"./DisabledMixin-DutBLYdm.js";import"./button.utils-rNW36Ji7.js";import"./index-D_vVtYUN.js";import"./index-T1WrLezj.js";import"./index-DTrDRi1E.js";import"./if-defined-CeOZCovI.js";import"./index-CeJb-Z6W.js";import"./IconNameMixin-iux4HhSo.js";import"./index-Ca--EzD6.js";import"./badge.constants-CCKcBYlt.js";import"./linksimple.component-BY5f_o7n.js";import"./DataAriaLabelMixin-Sr3iQzQE.js";import"./link.constants-Btu3udwU.js";import"./index-eIMx10hO.js";import"./base-DIkkzJ-c.js";import"./popover.component-oiHJ_bnY.js";import"./BackdropMixin-DtZZ-ijw.js";import"./popover.constants-COEDd5UF.js";import"./index-CabWCfBv.js";import"./v4-CmTdKEVZ.js";import"./input.component-BXabHjaD.js";import"./directive-Ctav8iJK.js";import"./index-C6BFb9wc.js";import"./formfieldwrapper.component-BEvotpjQ.js";import"./formfieldwrapper.constants-DG5De6w4.js";import"./FormInternalsMixin-BdeCmsy_.js";import"./query-BPxBhMfF.js";import"./input.constants-D9USyHzu.js";import"./index-njvCxNPr.js";import"./index-CNOb5arp.js";import"./radio.constants-DjXwje48.js";import"./index-BtCtbknQ.js";import"./toggle.constants-BuI8R28t.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
