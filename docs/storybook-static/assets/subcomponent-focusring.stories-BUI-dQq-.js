import{k as d}from"./iframe-8kqUpADA.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-BeSTKg-K.js";import"./index-DV3kWR4y.js";import"./index-C6YYSV7J.js";import"./index-CKY1SYJs.js";import"./index-DCTFI95U.js";import"./index-SfB_-qn8.js";import"./index-Ba7mLhsF.js";import"./index-S9lqdTPm.js";import"./index-BED_uyvV.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-BGuIz_Hj.js";import"./buttonsimple.component-CXxcIbAO.js";import"./keys-hFXe221I.js";import"./DisabledMixin-CF3InGaq.js";import"./TabIndexMixin-B0wX-7IC.js";import"./button.utils-rNW36Ji7.js";import"./index-DDoXQLKD.js";import"./index-CelDXb3G.js";import"./index-DTrDRi1E.js";import"./if-defined-BsU8Vqar.js";import"./index-WeEHwwTd.js";import"./IconNameMixin-D9gDNF1X.js";import"./index-DlQypX-6.js";import"./badge.constants-CtRS-9Sz.js";import"./linksimple.component-BazoQ6hO.js";import"./DataAriaLabelMixin-D1hWArok.js";import"./link.constants-BEb0yFDD.js";import"./index-BEZj4IiB.js";import"./popover.component-DJCvoBjJ.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-C9PuOA7g.js";import"./index-CxJSGY1i.js";import"./v4-CmTdKEVZ.js";import"./input.component-Cy8Wf6t_.js";import"./directive-Ctav8iJK.js";import"./index-D06CRrUO.js";import"./formfieldwrapper.component-CCzdDUHv.js";import"./FormInternalsMixin-Cf7922Kc.js";import"./query-DXShiZ7f.js";import"./input.constants-DZk4vHpc.js";import"./index-BxtezZON.js";import"./index-CQAMrxRF.js";import"./radio.constants-1WEwXpb8.js";import"./index-DjVwH2rm.js";import"./toggle.constants-FOpweFLD.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
