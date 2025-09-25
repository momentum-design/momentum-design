import{k as p}from"./iframe-CXwaMhTJ.js";import{a as d}from"./utils-CFOyPOhY.js";import"./index-EVm3eBrJ.js";import"./index-CCBTAYig.js";import"./index-5jdU31fE.js";import"./index-Qcl8cDHS.js";import"./index-jVzAF9oM.js";import"./index-DaoyljGr.js";import"./index-CRWB4sdT.js";import"./index-C-KUEJgc.js";import"./index-m66Phzl8.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-tJYu4dOM.js";import"./button.constants-BYi0TZnF.js";import"./buttonsimple.constants-BOMNYkoG.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-uJ9ziZ_h.js";import"./keys-hFXe221I.js";import"./DisabledMixin-8BMo0Dt6.js";import"./TabIndexMixin-Ckq1KLgg.js";import"./index-BH7b8QFc.js";import"./button.utils-rNW36Ji7.js";import"./index-BhZLYGY0.js";import"./index-D0R6A-G4.js";import"./index-DTrDRi1E.js";import"./if-defined-DIAx6F34.js";import"./index-ee18ge0k.js";import"./IconNameMixin-CCAHuPWp.js";import"./index-CGDlVniS.js";import"./index-DSOBsR-q.js";import"./class-map-ChUhqX3N.js";import"./directive-Ctav8iJK.js";import"./badge.constants-DQX_u8K0.js";import"./linksimple.component-Z3tjdL50.js";import"./DataAriaLabelMixin-CZlwpjd5.js";import"./link.constants-C_JmbjYp.js";import"./index-BK5yXCrl.js";import"./popover.component-BM5b_g0o.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-DMklMvmm.js";import"./index-Co7v1cxJ.js";import"./v4-CmTdKEVZ.js";import"./input.component-DUY0GTE5.js";import"./index-CjaarUXF.js";import"./formfieldwrapper.component-Sh7HGLAl.js";import"./FormInternalsMixin-DIm9lRFP.js";import"./query-DXShiZ7f.js";import"./input.constants-BsmnXCYR.js";import"./index-CJIgg8vs.js";import"./index-D0ey81XC.js";import"./radio.constants-CiuKgLeD.js";import"./index-D64r8LHg.js";import"./toggle.constants-C5x0ys9N.js";const dt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
  `},o={argTypes:{...d(["shape"])},render:()=>p` <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-link icon-name="placeholder-bold"><a href="#">Link</a></mdc-link>
      <mdc-input value="Input" trailing-button></mdc-input>
      <mdc-radio name="radio" value="radio" label="Radio"></mdc-radio>
      <mdc-checkbox label="Checkbox"></mdc-checkbox>
      <mdc-toggle label="Toggle"></mdc-toggle>
    </div>`};var r,i,e;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(e=(i=t.parameters)==null?void 0:i.docs)==null?void 0:e.source}}};var a,m,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const ct=["Example","FocusRingWithinHost"];export{t as Example,o as FocusRingWithinHost,ct as __namedExportsOrder,dt as default};
