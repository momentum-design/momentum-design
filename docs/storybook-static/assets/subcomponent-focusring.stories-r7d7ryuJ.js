import{k as d}from"./iframe-D61tWz88.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-D-Yfb6iE.js";import"./index-CIOEEhQe.js";import"./index-DttbfYka.js";import"./index-D_4vI_1J.js";import"./index-CkHQ264X.js";import"./index-YFXTahyb.js";import"./index-Br7jyxF-.js";import"./index-CkAqybCu.js";import"./index-XCzE3T8i.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-DSWfF5RH.js";import"./buttonsimple.component-BRbAtBP3.js";import"./DisabledMixin-BDA2PSvQ.js";import"./KeyDownHandledMixin-D8247ZP6.js";import"./index-wGikyYLb.js";import"./button.utils-rNW36Ji7.js";import"./index-kFvPAsPu.js";import"./index-DTrDRi1E.js";import"./if-defined-DQn5XqUV.js";import"./index-Bd3sGL5y.js";import"./IconNameMixin-BJyHPfat.js";import"./index-CiS9VlHz.js";import"./badge.constants-DmFR5b24.js";import"./linksimple.component-Lhaethmu.js";import"./DataAriaLabelMixin-D0KcN3zt.js";import"./link.constants-DSQAB3YK.js";import"./index-WN8KZR1W.js";import"./popover.component-CnHf7fLd.js";import"./BackdropMixin-Do-_Tcp8.js";import"./popover.constants-D3jXDIUN.js";import"./index-DgBLKyw9.js";import"./v4-CmTdKEVZ.js";import"./input.component-Cq95kl-c.js";import"./directive-Ctav8iJK.js";import"./index-zDN-QyE8.js";import"./formfieldwrapper.component-Ddm3Hh8u.js";import"./formfieldwrapper.constants-Cw393Iyz.js";import"./FormInternalsMixin-DHu3f7EO.js";import"./input.constants-COvM7YVu.js";import"./index-Ct5e3BLF.js";import"./index-B2kwo2vi.js";import"./radio.constants-czqrTxP6.js";import"./index-ztt1-ThW.js";import"./toggle.constants-ZobIs9YK.js";import"./ControlTypeMixin-CrJq0z8t.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
