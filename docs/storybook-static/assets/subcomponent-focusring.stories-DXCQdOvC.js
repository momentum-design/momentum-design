import{k as d}from"./iframe-BV5DWP9v.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-YCvhlFMa.js";import"./index-Bmwhe1ys.js";import"./index-Bu3iopWb.js";import"./index-BcsrSSIM.js";import"./index-D3_RQkYX.js";import"./index-B1pzylmV.js";import"./index-B1j3Ku0S.js";import"./index-u0__TGw4.js";import"./index-Caa9b8ni.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CR8tiFQC.js";import"./buttonsimple.component-D_Fe5ZUz.js";import"./TabIndexMixin-CzgsI75_.js";import"./DisabledMixin-4l6RL3Et.js";import"./button.utils-rNW36Ji7.js";import"./index-ZSNJZ3qa.js";import"./index-DVU4gHUE.js";import"./index-DTrDRi1E.js";import"./if-defined-D2_Zq9Ec.js";import"./index-CDixn9Gk.js";import"./IconNameMixin-Bfeul72n.js";import"./index-BXQok_-U.js";import"./badge.constants-CAm4ACHV.js";import"./linksimple.component-Bls_0-tD.js";import"./DataAriaLabelMixin-9T8QQ5GU.js";import"./link.constants-C9NDbczg.js";import"./index-DZmtHulG.js";import"./base-DIkkzJ-c.js";import"./popover.component-B4ffFb1U.js";import"./BackdropMixin-DS-9bUP-.js";import"./index-CPTTc5X-.js";import"./v4-CmTdKEVZ.js";import"./input.component-DENKDzkj.js";import"./directive-Ctav8iJK.js";import"./index-Bit1UX6t.js";import"./formfieldwrapper.component-DodX1ff3.js";import"./formfieldwrapper.constants-DWC10nYc.js";import"./FormInternalsMixin-BSZLv0yW.js";import"./query-BPxBhMfF.js";import"./input.constants-BbyCBAG5.js";import"./index-DoU49y4g.js";import"./index-DWTClZG3.js";import"./radio.constants-6NLZ5ICO.js";import"./index-Ctsmhk11.js";import"./toggle.constants-AagfxmDa.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
