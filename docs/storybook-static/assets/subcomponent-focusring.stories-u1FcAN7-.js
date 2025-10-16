import{k as d}from"./iframe-06xQzbmP.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-IT3M2fYd.js";import"./index-24_DiQvl.js";import"./index-CHUVJD0M.js";import"./index-C4R5oqF0.js";import"./index-B8UDMyZx.js";import"./index-CvwlKno8.js";import"./index-BMZzAfR4.js";import"./index-D2RR2Z-5.js";import"./index-BY8QI23X.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-BMhmcEaY.js";import"./buttonsimple.component-DLC1Z_Ox.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DAkplytX.js";import"./TabIndexMixin-DzWllGfn.js";import"./button.utils-rNW36Ji7.js";import"./index-htwxrKSI.js";import"./index-DVrzMypz.js";import"./index-DTrDRi1E.js";import"./if-defined-DwgySn5g.js";import"./index-Bh0cHo-8.js";import"./IconNameMixin-BMT0d64v.js";import"./index-B629ihY_.js";import"./badge.constants-DwzWNkxd.js";import"./linksimple.component-Bw6U7vot.js";import"./DataAriaLabelMixin-B8GUNbxU.js";import"./link.constants-PYzHdO6V.js";import"./index-BfVew_gx.js";import"./popover.component-bpc5lpv1.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-CAtrTjJW.js";import"./index-D7qSZYiu.js";import"./v4-CmTdKEVZ.js";import"./input.component-DwCsex7S.js";import"./directive-Ctav8iJK.js";import"./index-BN5rCGSO.js";import"./formfieldwrapper.component-BeeBqWjW.js";import"./formfieldwrapper.constants-BHWUoKTa.js";import"./FormInternalsMixin-CalTfceH.js";import"./query-DXShiZ7f.js";import"./input.constants-aAbU1v38.js";import"./index-DbL-83hl.js";import"./index-DyJYrp4u.js";import"./radio.constants-BRDexfRW.js";import"./index-B1DqFgGK.js";import"./toggle.constants-DWzGg1IL.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
