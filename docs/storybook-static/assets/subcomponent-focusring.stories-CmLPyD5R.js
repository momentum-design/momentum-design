import{k as d}from"./iframe-C1Rm-ZyG.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-CTGz_DG7.js";import"./index-bQ1O_Mnw.js";import"./index-8ymGwBQU.js";import"./index-CGxiUBx5.js";import"./index-DK24qN07.js";import"./index-wGIU4Z4i.js";import"./index-JtF8l7tO.js";import"./index-COEPcIeo.js";import"./index-jgp1u9LU.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CGqnAPiD.js";import"./buttonsimple.component-CE6iZ7ok.js";import"./TabIndexMixin-CHWXeSIH.js";import"./DisabledMixin-CpNZKoNP.js";import"./button.utils-rNW36Ji7.js";import"./index-CIWNyVoT.js";import"./index-BdqHAH0n.js";import"./index-DTrDRi1E.js";import"./if-defined-CQYAGgbL.js";import"./index-D0yFm7Aq.js";import"./IconNameMixin-N6o8iVCE.js";import"./index-CQG1h-ty.js";import"./badge.constants-D5z0gI2f.js";import"./linksimple.component-DAL9E8cn.js";import"./DataAriaLabelMixin-CVDPBToW.js";import"./link.constants-CZ0SDkCF.js";import"./index-BUGr4ZLa.js";import"./base-DIkkzJ-c.js";import"./popover.component-DnlDjIsj.js";import"./BackdropMixin-BpNXNAF1.js";import"./index-CxoURWC0.js";import"./v4-CmTdKEVZ.js";import"./input.component-DvAQeTi9.js";import"./directive-Ctav8iJK.js";import"./index-CGd3IU9o.js";import"./formfieldwrapper.component-Cw55vyeZ.js";import"./formfieldwrapper.constants-oZgESqtS.js";import"./FormInternalsMixin-T_DInI4K.js";import"./query-BPxBhMfF.js";import"./input.constants-C8Crxrr5.js";import"./index-CZm2NtIk.js";import"./index-D3Rg1jAq.js";import"./radio.constants-DLAG9eu2.js";import"./index-CSPfwD1w.js";import"./toggle.constants-d6KQzvpE.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
