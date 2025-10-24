import{k as d}from"./iframe-Bs8uddEG.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-Ce-9h3_H.js";import"./index-BcY7nuZu.js";import"./index-CaQJ6W12.js";import"./index-CErKIR5p.js";import"./index-CJ10lYPf.js";import"./index-BRlr9T63.js";import"./index-C1ihEgbk.js";import"./index-DbtIQyOK.js";import"./index-CFY0_vst.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CeL9h79B.js";import"./buttonsimple.component-DcJTresP.js";import"./TabIndexMixin-DckpiKus.js";import"./DisabledMixin-CzSD-kW5.js";import"./button.utils-rNW36Ji7.js";import"./index-hKPuI3J9.js";import"./index-BM2uiyS-.js";import"./index-DTrDRi1E.js";import"./if-defined-CMSkq6NC.js";import"./index-DXZeIPcC.js";import"./IconNameMixin-BVyXBQIv.js";import"./index-CcxlECp4.js";import"./badge.constants-CLeAUmVO.js";import"./linksimple.component-utq0zqjj.js";import"./DataAriaLabelMixin-DEZCOtT5.js";import"./link.constants-0BtKHnO8.js";import"./index-0bn4pu3-.js";import"./query-assigned-nodes-DgnTQRYW.js";import"./base-DIkkzJ-c.js";import"./popover.component-HSCmiqb-.js";import"./BackdropMixin-Dqvw5Q9p.js";import"./index-W7OcVQwb.js";import"./v4-CmTdKEVZ.js";import"./input.component-kddVMcsI.js";import"./directive-Ctav8iJK.js";import"./index-Ds6Y53vb.js";import"./formfieldwrapper.component-D0Q14iK4.js";import"./formfieldwrapper.constants-CySZkHQJ.js";import"./FormInternalsMixin-hXBRe0fj.js";import"./query-DXShiZ7f.js";import"./input.constants-e4N2pKbZ.js";import"./index-DF1Gz-lH.js";import"./index-BfmaLmHT.js";import"./radio.constants-DbrQu7xd.js";import"./index-Dobkyozi.js";import"./toggle.constants-bx4ixf98.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
