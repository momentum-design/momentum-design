import{k as d}from"./iframe-C_acqUys.js";import{h as p}from"./utils-CO8B6ZcN.js";import"./index-CiTyl3tU.js";import"./index-q6oFmBcG.js";import"./index-v5S9iqKS.js";import"./index-BS8svJDZ.js";import"./index-DiPSNrl8.js";import"./index-Br1DuePe.js";import"./index-CM_-gfAu.js";import"./index-BweHWJlN.js";import"./index-Ux8OfXjD.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-DDn5cu32.js";import"./buttonsimple.component-GKQH0xTW.js";import"./TabIndexMixin-CJ4BfYJM.js";import"./DisabledMixin-CXWNIArP.js";import"./button.utils-rNW36Ji7.js";import"./index-QTNPF7LG.js";import"./index-CrQpdXBI.js";import"./index-DTrDRi1E.js";import"./if-defined-5ZqpHmyY.js";import"./index-ffJ9kEPo.js";import"./IconNameMixin-DsVkfwyA.js";import"./index-CRAgqOVj.js";import"./badge.constants-D5tRX84q.js";import"./linksimple.component-DyxaXDKa.js";import"./DataAriaLabelMixin-SpDE5BNL.js";import"./link.constants-Cg3P2yCp.js";import"./index-CSjc4FqR.js";import"./base-DIkkzJ-c.js";import"./popover.component-ijlEMbpG.js";import"./BackdropMixin-CiOz4kDY.js";import"./index-DRo4Ff7Y.js";import"./v4-CmTdKEVZ.js";import"./input.component-BV1kmvFB.js";import"./directive-Ctav8iJK.js";import"./index-RiEyftIQ.js";import"./formfieldwrapper.component-DRN2DIIK.js";import"./formfieldwrapper.constants-DdjyEB24.js";import"./FormInternalsMixin-CsSTJLKi.js";import"./query-BPxBhMfF.js";import"./input.constants-DOOfH7-f.js";import"./index-DfAl9MLD.js";import"./index-DZrOWZ7e.js";import"./radio.constants-CiSOvsgS.js";import"./index-cW81xtiw.js";import"./toggle.constants-BAauZWiy.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
