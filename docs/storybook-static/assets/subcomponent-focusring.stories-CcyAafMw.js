import{k as d}from"./iframe-Bay37rkC.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-ChQ3YjQ7.js";import"./index-DsAnyiLT.js";import"./index-jWCD7nXl.js";import"./index-wA-ai2wQ.js";import"./index-DEGTXeJ3.js";import"./index-vIg28Wp2.js";import"./index-Cw80n4Bv.js";import"./index-DcobIjcL.js";import"./index-SvrXsTnj.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-DB_CENJ3.js";import"./buttonsimple.component-sTpFrykf.js";import"./DisabledMixin-DGD1GTFB.js";import"./KeyToActionMixin-C8CPt1j6.js";import"./button.utils-rNW36Ji7.js";import"./index-Dzd9niSE.js";import"./index-Dw0XfBY4.js";import"./index-DTrDRi1E.js";import"./if-defined-D3HSOGID.js";import"./index-_gB8x1RO.js";import"./IconNameMixin-ZygOYxbJ.js";import"./index-BO0AR-wa.js";import"./badge.constants-DD4omEZP.js";import"./linksimple.component-ClLjrYh5.js";import"./DataAriaLabelMixin-CGUBvNd2.js";import"./link.constants-D5X7rwvN.js";import"./index-NNOvbOoq.js";import"./popover.component-BqP-76wV.js";import"./BackdropMixin-B7-JS3DU.js";import"./dom-BlZvhF8F.js";import"./popover.constants-CBMdmYuI.js";import"./index-CKDZBj7b.js";import"./v4-CmTdKEVZ.js";import"./input.component-DpUsNT2D.js";import"./directive-Ctav8iJK.js";import"./index-Da3L_uff.js";import"./formfieldwrapper.component-BCOUS2eo.js";import"./formfieldwrapper.constants-MFXRhHOi.js";import"./FormInternalsMixin-BHIsr-X0.js";import"./input.constants-rVgNB0vy.js";import"./index-DMMCEEbh.js";import"./index-gy-EpfP4.js";import"./radio.constants-C45NCUY0.js";import"./index-ld5LYfa8.js";import"./toggle.constants-CLOroqKo.js";import"./ControlTypeMixin-BumuUoRA.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
