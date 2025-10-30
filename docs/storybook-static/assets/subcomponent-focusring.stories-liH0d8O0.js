import{k as d}from"./iframe-DvKTogpS.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-8GlPoR5o.js";import"./index-DVZurVvM.js";import"./index-DEm8lOw0.js";import"./index-C92MSCte.js";import"./index-BBhO0T9S.js";import"./index-Bm9TPcS7.js";import"./index-Dg6U9SFs.js";import"./index-39sGwM9u.js";import"./index-CIa4x5A_.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-B_pLwDRF.js";import"./buttonsimple.component-DItyu1KU.js";import"./TabIndexMixin-Di14qESw.js";import"./DisabledMixin-BcJ9Lxra.js";import"./button.utils-rNW36Ji7.js";import"./index-Dr0GIaqi.js";import"./index-9TWjxWg1.js";import"./index-DTrDRi1E.js";import"./if-defined-wAsZU8hK.js";import"./index-Cmo1-m1E.js";import"./IconNameMixin-DVZC_Z-P.js";import"./index-DBXw3FCy.js";import"./badge.constants-CHAkPO7c.js";import"./linksimple.component-Dqr8oP5_.js";import"./DataAriaLabelMixin-DUmrKq_t.js";import"./link.constants-fZPzMVhX.js";import"./index-DCAccROA.js";import"./base-DIkkzJ-c.js";import"./popover.component-DMR4UXvN.js";import"./BackdropMixin-Cv9imm8x.js";import"./index-DKTS5syX.js";import"./v4-CmTdKEVZ.js";import"./input.component-DR24_Phr.js";import"./directive-Ctav8iJK.js";import"./index-DL03KfaT.js";import"./formfieldwrapper.component-BVRoGDdF.js";import"./formfieldwrapper.constants-DhJLFAX6.js";import"./FormInternalsMixin-DbB_0DeU.js";import"./query-BPxBhMfF.js";import"./input.constants-Bz1aqrVG.js";import"./index-CMczrtMK.js";import"./index-ytaKLw35.js";import"./radio.constants-yn3rlJmX.js";import"./index-B21sGM_L.js";import"./toggle.constants-wmAGSEb3.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
