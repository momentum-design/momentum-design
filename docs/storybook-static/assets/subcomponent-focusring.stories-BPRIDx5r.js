import{k as p}from"./iframe-C6gz75uu.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-DQ4jECvl.js";import"./index-8SNtIiPB.js";import"./index-DNi--4Lp.js";import"./index-8qW2nxAP.js";import"./index-C_2UFOyf.js";import"./index-C1XtUDmC.js";import"./index-BU1FCQrb.js";import"./index-a4HuLtEf.js";import"./index-XwVDUXHg.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-B1o2fJAQ.js";import"./buttonsimple.component-Cq3liiCN.js";import"./DisabledMixin-B_w9ZmxY.js";import"./KeyDownHandledMixin-Dnjzip49.js";import"./index-Buz5Gdoh.js";import"./button.utils-rNW36Ji7.js";import"./index-Bjb1ds6w.js";import"./index-DTrDRi1E.js";import"./if-defined-C_NTEn5h.js";import"./index-DMQspWzX.js";import"./IconNameMixin-fK157EiE.js";import"./index-DTzG9iAi.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-B-M99ScR.js";import"./linksimple.component-BnmsExx0.js";import"./DataAriaLabelMixin-7hoqcNwQ.js";import"./link.constants-Cqn3WjKn.js";import"./index-B437gW9k.js";import"./popover.component-V2556_qJ.js";import"./BackdropMixin-Bk7p9vkY.js";import"./popover.constants-C4uKivHV.js";import"./index-CyrQRgjZ.js";import"./v4-CmTdKEVZ.js";import"./input.component-QO0cwBKa.js";import"./directive-Ctav8iJK.js";import"./index-CfVxGs9s.js";import"./formfieldwrapper.component-mN0Uvyd0.js";import"./formfieldwrapper.constants-DxhYJqmT.js";import"./FormInternalsMixin-Nbe1RIoq.js";import"./input.constants-D9hk7TXR.js";import"./index-BdNuEONF.js";import"./index-CyY7LePq.js";import"./radio.constants-DjtKEFpw.js";import"./index-u-ne-Yo4.js";import"./toggle.constants-kEqR5SE_.js";import"./ControlTypeMixin-C3V1YGfY.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const at=["Example","FocusRingWithinHost"];export{t as Example,o as FocusRingWithinHost,at as __namedExportsOrder,it as default};
