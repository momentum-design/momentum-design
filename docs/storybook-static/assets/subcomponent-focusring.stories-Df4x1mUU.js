import{k as d}from"./iframe-CrnImR4G.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-DaWfXzJH.js";import"./index-DTcH7PKg.js";import"./index-B3nPmFJj.js";import"./index-DLFIxbVD.js";import"./index-B8AK7oqR.js";import"./index-DZSytDvx.js";import"./index-Bh3Zhq0W.js";import"./index-DjfizofE.js";import"./index-B-wB2hbX.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-_X1-1Cl-.js";import"./buttonsimple.component-DktXvV2-.js";import"./TabIndexMixin-BpHFDf7-.js";import"./DisabledMixin-BmiKlCWv.js";import"./button.utils-rNW36Ji7.js";import"./index-DP53CESZ.js";import"./index-BPg1OG9M.js";import"./index-DTrDRi1E.js";import"./if-defined-DCu-IhVE.js";import"./index-BMrc6f7w.js";import"./IconNameMixin-8qu3hifq.js";import"./index--KwZils9.js";import"./badge.constants-Dh8bbx5k.js";import"./linksimple.component-C4JBcJXG.js";import"./DataAriaLabelMixin-DsK-d1g_.js";import"./link.constants-Bris_OAn.js";import"./index-D6qtz3hF.js";import"./base-DIkkzJ-c.js";import"./popover.component-B78cd_EW.js";import"./BackdropMixin-Dde3aBbE.js";import"./index-NFGKo2_b.js";import"./v4-CmTdKEVZ.js";import"./input.component-5qX0h_Hf.js";import"./directive-Ctav8iJK.js";import"./index-Bhkd8XCG.js";import"./formfieldwrapper.component-Dg08Jbay.js";import"./formfieldwrapper.constants-D0Da9cl0.js";import"./FormInternalsMixin-Cu1AE0ZP.js";import"./query-BPxBhMfF.js";import"./input.constants-pcw0xdy3.js";import"./index-C1e-Svab.js";import"./index-gSGaTv6H.js";import"./radio.constants-DbnJTT26.js";import"./index-DEYwI-78.js";import"./toggle.constants-CzJ9rU_m.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
