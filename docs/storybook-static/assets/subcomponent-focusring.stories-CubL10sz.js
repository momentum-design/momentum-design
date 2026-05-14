import{k as p}from"./iframe-BPbifbZ6.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-CWwnxpRa.js";import"./index-BXzB4_qN.js";import"./index-AFceTovq.js";import"./index-Dy6ZFBQi.js";import"./index-Dk7scXKY.js";import"./index-DvB1Rm7N.js";import"./index-BZRgwqQP.js";import"./index-BuDLCAe1.js";import"./index-CxVF8JcW.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-7MsGLFii.js";import"./buttonsimple.component-DrCb5gFl.js";import"./DisabledMixin-DXVt4omm.js";import"./KeyDownHandledMixin-DC3-fTWE.js";import"./index-D9IMk-9a.js";import"./button.utils-rNW36Ji7.js";import"./index-DD6e1RlO.js";import"./index-DTrDRi1E.js";import"./if-defined-BPb3-yOa.js";import"./index-D2JMskNH.js";import"./IconNameMixin-DkbVENn9.js";import"./index-CAYElQgy.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-D2eG34AG.js";import"./linksimple.component-DaiiL01Q.js";import"./DataAriaLabelMixin-DTM8lXIn.js";import"./link.constants-BJzGOjsg.js";import"./index-CebEN0lm.js";import"./v4-CmTdKEVZ.js";import"./index-DbwzlX-w.js";import"./popover.component-CCt9muab.js";import"./BackdropMixin-Bw0wmUrb.js";import"./popover.constants-DNr2_g2Z.js";import"./input.component-B3tywSEJ.js";import"./directive-Ctav8iJK.js";import"./index-Jea2kRO4.js";import"./formfieldwrapper.component-DjGHw3ee.js";import"./formfieldwrapper.constants-BNzCVXEY.js";import"./FormInternalsMixin-29X15Sju.js";import"./input.constants-BqrewAty.js";import"./index-DiQEQH_V.js";import"./index-0eMIICrp.js";import"./radio.constants-lASdmjYP.js";import"./index-dX1ltdlF.js";import"./toggle.constants-zkCSvTYh.js";import"./ControlTypeMixin-DcOMMwOW.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
