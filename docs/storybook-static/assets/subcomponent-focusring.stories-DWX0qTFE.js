import{k as d}from"./iframe-Dxl5JR04.js";import{h as p}from"./utils-D6nie9pS.js";import"./index-A4-hMiqu.js";import"./index-rJ3sAYrc.js";import"./index-D3kIiIcR.js";import"./index-C69kMOyR.js";import"./index-D2fN-bpL.js";import"./index-Da8EPWdy.js";import"./index-Cl_oUFMV.js";import"./index-Daw14Oxs.js";import"./index-DKpO2GHt.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CjD-zRkO.js";import"./buttonsimple.component-IBnNJfn4.js";import"./DisabledMixin-CidSUaWv.js";import"./KeyToActionMixin-C-lGXqvj.js";import"./button.utils-rNW36Ji7.js";import"./index-BW7z8kIE.js";import"./index-D7Hd0FkL.js";import"./index-DTrDRi1E.js";import"./if-defined-C0_rihGE.js";import"./index-BVMSegmN.js";import"./IconNameMixin-D83RjdhH.js";import"./index-J68manxv.js";import"./badge.constants-dXAGZ4Lq.js";import"./linksimple.component-DBXb3ps3.js";import"./DataAriaLabelMixin-DbDPbvRw.js";import"./link.constants-DYgnf30x.js";import"./index-DMef7Qum.js";import"./popover.component-DmBzfHXE.js";import"./BackdropMixin-B9iwA8Pd.js";import"./dom-BlZvhF8F.js";import"./popover.constants-DQzcjyKr.js";import"./index-DWDpxMjS.js";import"./v4-CmTdKEVZ.js";import"./input.component-Ce8-mPhJ.js";import"./directive-Ctav8iJK.js";import"./index-yGT5mSci.js";import"./formfieldwrapper.component-qHydAREt.js";import"./formfieldwrapper.constants-IAapizAX.js";import"./FormInternalsMixin-njmefpbi.js";import"./input.constants-DSN2mnK3.js";import"./index-ClFyQQlA.js";import"./index-DTURrGDY.js";import"./radio.constants-lk0i8mzV.js";import"./index-Df8-sJh5.js";import"./toggle.constants-Ac89mhTE.js";import"./ControlTypeMixin-Cp2nkdbC.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
