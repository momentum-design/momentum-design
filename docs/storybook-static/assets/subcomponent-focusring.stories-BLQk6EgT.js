import{k as d}from"./iframe-B_1iNO5L.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-PGJF2JnM.js";import"./index-tuUqWdxl.js";import"./index-BsLS8Ihn.js";import"./index-CtnXn2v9.js";import"./index-urkzwUra.js";import"./index-CFQxuF4g.js";import"./index-DHmufUoR.js";import"./index-B1OvrNvt.js";import"./index-ggfI-Qt9.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-ByujdhTG.js";import"./buttonsimple.component-s3QeWMgo.js";import"./DisabledMixin-Y2ty_K_n.js";import"./KeyDownHandledMixin-BZXys10u.js";import"./index-DbWVkAPk.js";import"./button.utils-rNW36Ji7.js";import"./index-BKUw_YBw.js";import"./index-DTrDRi1E.js";import"./if-defined-CEYFYNWi.js";import"./index-ItKVc17-.js";import"./IconNameMixin-C4ruz3Co.js";import"./index-CNMGye1Z.js";import"./badge.constants-Bvj8Scwj.js";import"./linksimple.component-Bx6DAYTg.js";import"./DataAriaLabelMixin-B4zEqVdi.js";import"./link.constants-C9375if9.js";import"./index-CK-Lsdwh.js";import"./popover.component-BkrvNi7V.js";import"./BackdropMixin-CAVnleeZ.js";import"./popover.constants-DjAP9hMj.js";import"./index-2oz8JV_l.js";import"./v4-CmTdKEVZ.js";import"./input.component-5I16KAmj.js";import"./directive-Ctav8iJK.js";import"./index-BRLFlRBW.js";import"./formfieldwrapper.component-CZwsL5v_.js";import"./formfieldwrapper.constants-Brb9kI2s.js";import"./FormInternalsMixin-B92HvHyZ.js";import"./input.constants-C_ebLXri.js";import"./index-Dg19Ltfq.js";import"./index-DC2aHQ8V.js";import"./radio.constants-C9rQc_E-.js";import"./index-D8IHeGMn.js";import"./toggle.constants-Dv71i2XB.js";import"./ControlTypeMixin-DT5KlnaZ.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
