import{k as p}from"./iframe-DJ5UPLED.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-1fyfKArS.js";import"./index-BxcltRH8.js";import"./index-tmfvzJdc.js";import"./index-CHn7_ml9.js";import"./index-zIpllvEF.js";import"./index-BUpKE3Oj.js";import"./index-BdrXY6cR.js";import"./index-B3dFzdEA.js";import"./index-BMH5puni.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-BzC1eIk_.js";import"./buttonsimple.component-BO6azjPo.js";import"./DisabledMixin-CfNlg7hc.js";import"./KeyDownHandledMixin-B2k6SFGH.js";import"./index-DLz7mNzh.js";import"./button.utils-rNW36Ji7.js";import"./index-CryCLZ7k.js";import"./index-DTrDRi1E.js";import"./if-defined-CyaRW62x.js";import"./index-CVoLFiSC.js";import"./IconNameMixin-D4J49597.js";import"./index-BKb4o5EZ.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-BIPlW69-.js";import"./linksimple.component-psO9eOqd.js";import"./DataAriaLabelMixin-B0ZyC_9E.js";import"./link.constants-BbbRArC0.js";import"./index-D68SW9mg.js";import"./popover.component-Dytlq9qF.js";import"./BackdropMixin-CjBgvgG6.js";import"./popover.constants-CTmp0KIb.js";import"./index-DXB8P9IB.js";import"./v4-CmTdKEVZ.js";import"./input.component-6UBS246f.js";import"./directive-Ctav8iJK.js";import"./index-CTV9tC6R.js";import"./formfieldwrapper.component-DPyMNbpI.js";import"./formfieldwrapper.constants-D7-8vPlE.js";import"./FormInternalsMixin-DZXP8ozr.js";import"./input.constants-DRDJvNI3.js";import"./index-1taC3S42.js";import"./index-wwiukTSo.js";import"./radio.constants-Ru9vYm_Y.js";import"./index-OnH7yAyQ.js";import"./toggle.constants-CVZIHT_Y.js";import"./ControlTypeMixin-BCHZsAf1.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
