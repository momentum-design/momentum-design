import{k as p}from"./iframe-D5_nhDxE.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-d89jH2I6.js";import"./index-iVuZdEWH.js";import"./index-YlaFfM8k.js";import"./index-C_sQyQmw.js";import"./index-BxXPVMr2.js";import"./index-BGiQ3rgD.js";import"./index-gv8SZfC0.js";import"./index-DxWGa5l2.js";import"./index-KDvsmk7M.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-D8k_U0MV.js";import"./buttonsimple.component-C1KDmBVv.js";import"./DisabledMixin-BAU8JVJU.js";import"./KeyDownHandledMixin-sL_lJMjH.js";import"./index-CuCAJ8l7.js";import"./button.utils-rNW36Ji7.js";import"./index-JE5oisxl.js";import"./index-DTrDRi1E.js";import"./if-defined-DPoTFAdO.js";import"./index-D11P6_fm.js";import"./IconNameMixin-Vb2yY-ds.js";import"./index-ZQNDxLXA.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-yA514_0b.js";import"./linksimple.component-BJA-7LFv.js";import"./DataAriaLabelMixin-HyXe-YiN.js";import"./link.constants-DOOC4ePZ.js";import"./index-BN5jFS0Y.js";import"./popover.component-BxLUNmCo.js";import"./BackdropMixin-74BKBgmd.js";import"./popover.constants-DWb8CL7J.js";import"./index-bFP8etn_.js";import"./v4-CmTdKEVZ.js";import"./input.component-CAM2QRpy.js";import"./directive-Ctav8iJK.js";import"./index-C9Z0Buey.js";import"./formfieldwrapper.component-CLrG9WiN.js";import"./formfieldwrapper.constants-DQfsjwj-.js";import"./FormInternalsMixin-C85XOVkD.js";import"./input.constants-mVrdHMDK.js";import"./index-DRY2GWNQ.js";import"./index-C0MGa-5P.js";import"./radio.constants-CvhPlJsP.js";import"./index-RSYGqNYH.js";import"./toggle.constants-BahRn1dG.js";import"./ControlTypeMixin-m6v70e6Y.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
