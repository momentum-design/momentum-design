import{k as d}from"./iframe-Hv7IoejM.js";import{h as p}from"./utils-D6nie9pS.js";import"./index-Ds2qIooY.js";import"./index-CRYg-sVY.js";import"./index-HKWI9xsm.js";import"./index-tzsXTYtB.js";import"./index-PTUzdpZe.js";import"./index-BCEsOxvI.js";import"./index-p7Y8_j5x.js";import"./index-DHTzVmSG.js";import"./index-MO1Nxmsm.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-W_pV0dDc.js";import"./buttonsimple.component-D4b6CpKl.js";import"./TabIndexMixin-C3SjIrcs.js";import"./DisabledMixin-CqYnabgB.js";import"./button.utils-rNW36Ji7.js";import"./index-DWkFIevN.js";import"./index-CIODf6mm.js";import"./index-DTrDRi1E.js";import"./if-defined-DHscNqNO.js";import"./index-DOHg-uKf.js";import"./IconNameMixin-BBNEv9ix.js";import"./index-qPjKd1Mm.js";import"./badge.constants-CyyfD38A.js";import"./linksimple.component-DYoU4u2M.js";import"./DataAriaLabelMixin-CVlRlWZI.js";import"./link.constants-DeWtYn7y.js";import"./index-CAySyOG8.js";import"./base-DIkkzJ-c.js";import"./popover.component-C-5plnw-.js";import"./BackdropMixin-BfdLdJ7Y.js";import"./popover.constants-KmOmTc4A.js";import"./index-BzA0tNwW.js";import"./v4-CmTdKEVZ.js";import"./input.component-BjPxaPMV.js";import"./directive-Ctav8iJK.js";import"./index-CCauE3iX.js";import"./formfieldwrapper.component-B7k1jbKr.js";import"./formfieldwrapper.constants-DXvpCjUn.js";import"./FormInternalsMixin-D0yaPAPx.js";import"./query-BPxBhMfF.js";import"./input.constants-uGzTolK4.js";import"./index-yxPhA_Hd.js";import"./index-DWR5G48I.js";import"./radio.constants-BABmDV6F.js";import"./index-DOQr8Rpk.js";import"./toggle.constants-C5LCVAtU.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
