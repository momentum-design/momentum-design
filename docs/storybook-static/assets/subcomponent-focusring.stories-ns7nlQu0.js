import{k as p}from"./iframe-D6Vt3Vpp.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-C6n8aXpV.js";import"./index-yLmsVsWb.js";import"./index-BKwMtwxN.js";import"./index-DapLi3GI.js";import"./index-DL4tsH6K.js";import"./index-DC8sGZ9O.js";import"./index-BrsFjG8k.js";import"./index-BOywj70A.js";import"./index-BdT3zdrh.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-Ni16t2C8.js";import"./buttonsimple.component-Be7p_Jn5.js";import"./DisabledMixin-BJe3KyEd.js";import"./KeyDownHandledMixin-B9erL2XF.js";import"./index-C52gGSIp.js";import"./button.utils-rNW36Ji7.js";import"./index-BZJA5iau.js";import"./index-DTrDRi1E.js";import"./index-BjKoYgbe.js";import"./IconNameMixin-xIYi3gBa.js";import"./index-CjNpr5fy.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-hQEzpmR4.js";import"./linksimple.component-B7xQUjOV.js";import"./DataAriaLabelMixin-BKzwc_Ub.js";import"./link.constants-CARqgTSJ.js";import"./index-DZTsGaPn.js";import"./index-Bu33xZQp.js";import"./popover.component-CHomPK2p.js";import"./BackdropMixin-DiB--SsI.js";import"./popover.constants-qgU1I1Ql.js";import"./input.component-iB6R4Jfo.js";import"./index-883Sf1Au.js";import"./index-Bo52aqSo.js";import"./statusmessage.constants-CcABXQC5.js";import"./formfieldwrapper.component-1GOGDdtp.js";import"./formfieldwrapper.constants-BDK9tktt.js";import"./FormInternalsMixin-z5PM_b8X.js";import"./input.constants-DSmWnNvv.js";import"./index-C_83UmDy.js";import"./index-BehYJbfO.js";import"./radio.constants-NDEE_Y-S.js";import"./index-fukmER6b.js";import"./toggle.constants-BPSL7v83.js";import"./ControlTypeMixin-FDt0rgZ2.js";const et={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
