import{k as d}from"./iframe-BsSOvdiI.js";import{h as p}from"./utils-D6nie9pS.js";import"./index-CDpY4Xpy.js";import"./index-DDt7Q2JC.js";import"./index-f1NlefAP.js";import"./index-CCcgc9Yi.js";import"./index-DBXfNPvn.js";import"./index-DQAC-XuF.js";import"./index-BndtYNuR.js";import"./index-DloYxUDO.js";import"./index-Dc-m7sMP.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-lOqoOFxR.js";import"./buttonsimple.component-DIoIQKM2.js";import"./DisabledMixin-fjLCGnVB.js";import"./KeyToActionMixin-NJAwsg8D.js";import"./button.utils-rNW36Ji7.js";import"./index-D5ySaiVt.js";import"./index-BD9j_4IV.js";import"./index-DTrDRi1E.js";import"./if-defined-Cv7J1nAi.js";import"./index-DCy74A_6.js";import"./IconNameMixin-Bds9UP_C.js";import"./index-DjIf1Oru.js";import"./badge.constants-B0GfG8W4.js";import"./linksimple.component-DyAKhscJ.js";import"./DataAriaLabelMixin-Bdk731Yz.js";import"./link.constants-Tv0Ple2n.js";import"./index-BcO7BA_0.js";import"./popover.component-D6Eqefys.js";import"./BackdropMixin-DzXuwf05.js";import"./dom-BlZvhF8F.js";import"./popover.constants-BSWNBOE7.js";import"./index-CyshhQF0.js";import"./v4-CmTdKEVZ.js";import"./input.component-Cs-q75j7.js";import"./directive-Ctav8iJK.js";import"./index-DZQWiz7U.js";import"./formfieldwrapper.component-4yFeXsB_.js";import"./formfieldwrapper.constants-D9evYn07.js";import"./FormInternalsMixin-BuhlSliP.js";import"./input.constants-BxRTsBv0.js";import"./index-BmHPd2z-.js";import"./index-CKo2dFLX.js";import"./radio.constants-CSftk0-N.js";import"./index-CWxvf523.js";import"./toggle.constants-Cm3YnLid.js";import"./ControlTypeMixin-CXJAs0H1.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
