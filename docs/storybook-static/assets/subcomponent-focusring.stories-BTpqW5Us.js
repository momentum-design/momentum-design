import{k as p}from"./iframe-JA1YSOwM.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-BB8FVGFT.js";import"./index-D5LJ_7m0.js";import"./index-BtSmPXWC.js";import"./index-DJAJbDg5.js";import"./index-ChSR6-X_.js";import"./index-DZvXcV70.js";import"./index-y_3iprnc.js";import"./index-CLnoVrPL.js";import"./index-ChOw0ppI.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-BWBvG0lZ.js";import"./buttonsimple.component-BPSy_mcn.js";import"./DisabledMixin-FIsRwQNV.js";import"./KeyDownHandledMixin-zdCFlya9.js";import"./index-Jqvz7ibo.js";import"./button.utils-rNW36Ji7.js";import"./index-BtNw0XcG.js";import"./index-DTrDRi1E.js";import"./index-CMhHwe9H.js";import"./IconNameMixin-_4wOV5M1.js";import"./index-8hCsFlB3.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-DThSkfmD.js";import"./linksimple.component-D1l6pyKD.js";import"./DataAriaLabelMixin-Dwys_5eh.js";import"./link.constants-BbDp5T_e.js";import"./index-BbMnBqvq.js";import"./index-BsfQracr.js";import"./popover.component-BsRmE7FT.js";import"./BackdropMixin-BBcRIEHq.js";import"./popover.constants-ob2f6-37.js";import"./input.component-cgVCPI8c.js";import"./index-Bh2a1Rfu.js";import"./index-DGbDXS9f.js";import"./statusmessage.constants-CLqfjLFC.js";import"./formfieldwrapper.component-CNzvF0xy.js";import"./formfieldwrapper.constants-CHNcNMN3.js";import"./FormInternalsMixin-DopMAEqR.js";import"./input.constants-BHouzzlH.js";import"./index-mnyrszSF.js";import"./index-XCdy5sCM.js";import"./radio.constants-DZZe5qGq.js";import"./index-CT28qUZs.js";import"./toggle.constants-D8uULFC_.js";import"./ControlTypeMixin-DBMgC1m8.js";const et={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
    <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-button>Button</mdc-button>
      <mdc-avatarbutton
        initials="MD"
        size="48"
        src="https://picsum.photos/id/63/256"
        aria-label="Avatar Button"
      ></mdc-avatarbutton>
      <mdc-tab icon-name="placeholder-bold" tabindex="0" text="Tab 1" variant="pill">
        <mdc-badge slot="postfix" type="counter" counter="1"></mdc-badge>
      </mdc-tab>
    </div>
  `},o={argTypes:{...d(["shape"])},render:()=>p` <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-link icon-name="placeholder-bold"><a href="#">Link</a></mdc-link>
      <mdc-input value="Input" trailing-button></mdc-input>
      <mdc-radio name="radio" value="radio" label="Radio"></mdc-radio>
      <mdc-checkbox label="Checkbox"></mdc-checkbox>
      <mdc-toggle label="Toggle"></mdc-toggle>
    </div>`};var r,e,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
        <mdc-badge slot="postfix" type="counter" counter="1"></mdc-badge>
      </mdc-tab>
    </div>
  \`
}`,...(i=(e=t.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};var a,m,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const it=["Example","FocusRingWithinHost"];export{t as Example,o as FocusRingWithinHost,it as __namedExportsOrder,et as default};
