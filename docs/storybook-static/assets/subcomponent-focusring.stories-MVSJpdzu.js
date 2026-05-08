import{k as p}from"./iframe-BZjKjG2c.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-DUuKm3YC.js";import"./index-BSM-XJnK.js";import"./index-B3doV1ld.js";import"./index-DK_qNKGb.js";import"./index-1JNKrUoq.js";import"./index-CicpZFAd.js";import"./index-u35io4wC.js";import"./index-D3-Ck28x.js";import"./index-BukGYTTZ.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CD6ljViP.js";import"./buttonsimple.component-C-wcfyHY.js";import"./DisabledMixin-CqOXMscq.js";import"./KeyDownHandledMixin-4r_Jgvb_.js";import"./index-BybxLmDQ.js";import"./button.utils-rNW36Ji7.js";import"./index-BjJp-4mg.js";import"./index-DTrDRi1E.js";import"./if-defined-CfVvwyf2.js";import"./index-BbvFknaN.js";import"./IconNameMixin-B78d9uD6.js";import"./index-BFPwxLSW.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-BsmCmkQR.js";import"./linksimple.component-BFopq4mk.js";import"./DataAriaLabelMixin-BzAohLoh.js";import"./link.constants-CqSvjY3s.js";import"./index-NM-1b9kC.js";import"./popover.component-B42sikfe.js";import"./BackdropMixin-D5eL69U5.js";import"./popover.constants-BqHC-G-n.js";import"./index-DuPnrdyn.js";import"./v4-CmTdKEVZ.js";import"./input.component-EA86LMNB.js";import"./directive-Ctav8iJK.js";import"./index-C7iS7P5u.js";import"./formfieldwrapper.component-DLrWZNJ5.js";import"./formfieldwrapper.constants-mPzxkARA.js";import"./FormInternalsMixin-D8sV6vXH.js";import"./input.constants-DN29_ljn.js";import"./index-BDL-03c3.js";import"./index-DEgYyjwt.js";import"./radio.constants-DfFlV5UM.js";import"./index-fmuktbxD.js";import"./toggle.constants-DGMxXREg.js";import"./ControlTypeMixin-By2VJpU5.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
