import{k as d}from"./iframe-DHn6Ee_A.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-BBHZwm3b.js";import"./index-D9tujjQM.js";import"./index--l3T9A_3.js";import"./index-Cr7jh6fd.js";import"./index-CfexQLgJ.js";import"./index-EnSJhWv9.js";import"./index-X-FtA4RY.js";import"./index-CU8-rLxA.js";import"./index-in2gDrRW.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-B0j7KV_Z.js";import"./buttonsimple.component-CPe3GND-.js";import"./TabIndexMixin-D5q92WWd.js";import"./DisabledMixin-Jski02El.js";import"./button.utils-rNW36Ji7.js";import"./index-C6Jxcuu6.js";import"./index-DI_4by51.js";import"./index-DTrDRi1E.js";import"./if-defined-CS8lg2EF.js";import"./index-BY8-QcQA.js";import"./IconNameMixin-BGrH9ieQ.js";import"./index-C8OOOSyT.js";import"./badge.constants-D4E8hm94.js";import"./linksimple.component-CLZZYHd2.js";import"./DataAriaLabelMixin-BGnkVoDG.js";import"./link.constants-SiI9ONaI.js";import"./index-DytdwZVt.js";import"./base-DIkkzJ-c.js";import"./popover.component-Dp0P1zST.js";import"./BackdropMixin-COjXSisI.js";import"./index-PM684xlO.js";import"./v4-CmTdKEVZ.js";import"./input.component-D4Mw7ke8.js";import"./directive-Ctav8iJK.js";import"./index-DG2wBFBA.js";import"./formfieldwrapper.component-4juMZ_yV.js";import"./formfieldwrapper.constants-K_L7bLIy.js";import"./FormInternalsMixin-DTiwtpL1.js";import"./query-BPxBhMfF.js";import"./input.constants-DXEhVZLv.js";import"./index-DQdSKlP3.js";import"./index-12vE6GL9.js";import"./radio.constants-J89eBJ21.js";import"./index-BDmkWuR5.js";import"./toggle.constants-B0Xuc2zj.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
