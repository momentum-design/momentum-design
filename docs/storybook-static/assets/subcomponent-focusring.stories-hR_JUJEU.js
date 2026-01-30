import{k as d}from"./iframe-C2GM4z_-.js";import{h as p}from"./utils-D6nie9pS.js";import"./index-C6CVqyJi.js";import"./index-Jb1Pu-fO.js";import"./index-BV0D5YkQ.js";import"./index-Dkw7U_oG.js";import"./index-CzrZG9Rj.js";import"./index-DEwqE26s.js";import"./index-d4xtNL0G.js";import"./index-C4y7S8o_.js";import"./index-aEj_rZQJ.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-dWt_NMIt.js";import"./buttonsimple.component-DNa7wBY6.js";import"./DisabledMixin-CaMNUysA.js";import"./KeyToActionMixin-CWAxPGPA.js";import"./button.utils-rNW36Ji7.js";import"./index-EiWAZQ2W.js";import"./index-OPhLQNUs.js";import"./index-DTrDRi1E.js";import"./if-defined-zqg5dXF4.js";import"./index-BTCcfu3Y.js";import"./IconNameMixin-BKbJND3k.js";import"./index-Be-H2Meu.js";import"./badge.constants-Cl85Jy0s.js";import"./linksimple.component-DleR1nEu.js";import"./DataAriaLabelMixin-Dzuwkg0N.js";import"./link.constants-BmlphXUC.js";import"./index-9X0eSCAd.js";import"./popover.component-DIw5MWM4.js";import"./BackdropMixin-w4WbXy0U.js";import"./dom-BlZvhF8F.js";import"./popover.constants-4CPcFDrY.js";import"./index-DdtxLpio.js";import"./v4-CmTdKEVZ.js";import"./input.component-BF7ZwuSE.js";import"./directive-Ctav8iJK.js";import"./index-BMPxqp1z.js";import"./formfieldwrapper.component-C1QS8g1J.js";import"./formfieldwrapper.constants-CNozHpaY.js";import"./FormInternalsMixin-C4uquTc5.js";import"./input.constants-bVTWAk0P.js";import"./index-CF0vVX1u.js";import"./index-CQyrZXrJ.js";import"./radio.constants-DoilIg5t.js";import"./index-CBxl-y8t.js";import"./toggle.constants-CIhnXMbL.js";import"./ControlTypeMixin-BsOEy-PX.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
