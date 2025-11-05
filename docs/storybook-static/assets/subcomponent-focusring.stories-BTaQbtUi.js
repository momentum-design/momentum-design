import{k as d}from"./iframe-90-I_5hJ.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-DOzlyq0R.js";import"./index-Cyp4mEon.js";import"./index-BeoGY0P-.js";import"./index-CrXNrJrY.js";import"./index-C4gqSSqO.js";import"./index-ScLcWFwz.js";import"./index-cAMBIsNk.js";import"./index-Cj1E6n5U.js";import"./index-brdMGU2e.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-DQMwXTvh.js";import"./buttonsimple.component-CUklU10b.js";import"./TabIndexMixin-uGYPuDgk.js";import"./DisabledMixin-C2N4hX1w.js";import"./button.utils-rNW36Ji7.js";import"./index-CRf9Q6Hs.js";import"./index-B7esldGe.js";import"./index-DTrDRi1E.js";import"./if-defined-Cfxg63nt.js";import"./index-C6TjdM2D.js";import"./IconNameMixin-DFE_HHFc.js";import"./index-ZUqO-0lT.js";import"./badge.constants-DX4RQh0r.js";import"./linksimple.component-DonXND48.js";import"./DataAriaLabelMixin-tAiSAk31.js";import"./link.constants-B9q_RpXI.js";import"./index-CfKGEZke.js";import"./base-DIkkzJ-c.js";import"./popover.component-Cy46nVMi.js";import"./BackdropMixin-CBN1W_mX.js";import"./index-BYwDdQiJ.js";import"./v4-CmTdKEVZ.js";import"./input.component-Bb7ix1fF.js";import"./directive-Ctav8iJK.js";import"./index-BhFYL2yl.js";import"./formfieldwrapper.component-CKmakhdV.js";import"./formfieldwrapper.constants-xO-3oHa7.js";import"./FormInternalsMixin-DVkWh6NU.js";import"./query-BPxBhMfF.js";import"./input.constants-DTiu95Fd.js";import"./index-sXOAnpTl.js";import"./index-7OE3nLhR.js";import"./radio.constants-kalnwOJ8.js";import"./index-lUbZts-7.js";import"./toggle.constants-RFMtmDEa.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
