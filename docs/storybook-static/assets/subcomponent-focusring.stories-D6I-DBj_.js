import{k as d}from"./iframe-nms-y5_X.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-qXllGbP4.js";import"./index-DxaaBXTJ.js";import"./index-DfdJjMB1.js";import"./index-6OECeUt7.js";import"./index-CpXLLYLj.js";import"./index-DskFKDES.js";import"./index-zkM_QkHy.js";import"./index-JbVJAZzx.js";import"./index-BbPoaZbk.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-DONEdR8p.js";import"./buttonsimple.component-av-wHDrC.js";import"./TabIndexMixin-BkmkYcT3.js";import"./DisabledMixin-DCQQyJqL.js";import"./button.utils-rNW36Ji7.js";import"./index-wwPCPOLP.js";import"./index-DyCqEDpJ.js";import"./index-DTrDRi1E.js";import"./if-defined-CrGxwZ5x.js";import"./index-Cr4ILdLR.js";import"./IconNameMixin-Dghxa5Eb.js";import"./index-DP9sB99Y.js";import"./badge.constants-CiiK4iJ1.js";import"./linksimple.component-oDW3PVKy.js";import"./DataAriaLabelMixin-DT3bTF7E.js";import"./link.constants-DaGyZbf4.js";import"./index-DnZphiI-.js";import"./base-DIkkzJ-c.js";import"./popover.component-SURJ6KsT.js";import"./BackdropMixin-DTViKQK_.js";import"./index-kez2keVb.js";import"./v4-CmTdKEVZ.js";import"./input.component-D6QQMT7b.js";import"./directive-Ctav8iJK.js";import"./index-DNlFZYXd.js";import"./formfieldwrapper.component-DkDosAJT.js";import"./formfieldwrapper.constants-NS-cyK4Z.js";import"./FormInternalsMixin-0eeEZTpS.js";import"./query-BPxBhMfF.js";import"./input.constants-Vl5uKVQd.js";import"./index-C7hmwZBW.js";import"./index-CXa8f8z1.js";import"./radio.constants-C4_bwwZN.js";import"./index-I2p-ucsr.js";import"./toggle.constants-BvtvSEUN.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
