import{k as p}from"./iframe-Ca6rX5AR.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-I6cHyO8r.js";import"./index-BmrqHl0q.js";import"./index-BNgkIIvC.js";import"./index-DDN6Suso.js";import"./index-CtPPDSvW.js";import"./index-iM9RFdrN.js";import"./index-C31qx0AJ.js";import"./index-Bc-Zi4kp.js";import"./index-C8r1310X.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CCi1AO4h.js";import"./buttonsimple.component-_r51QkX9.js";import"./DisabledMixin-B0YeDoL0.js";import"./KeyDownHandledMixin-Cu7q3axw.js";import"./index-1d99oUaA.js";import"./button.utils-rNW36Ji7.js";import"./index-CEPldZjp.js";import"./index-DTrDRi1E.js";import"./if-defined-DgZfPEcJ.js";import"./index-DSW8rvvG.js";import"./IconNameMixin-EAbYGDFy.js";import"./index-DB2M3pgU.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-h3FpKrWk.js";import"./linksimple.component-HCJ7_4ea.js";import"./DataAriaLabelMixin-COiHZ2ax.js";import"./link.constants-m79iuoF7.js";import"./index-WwqsquV9.js";import"./popover.component-W5REBPXX.js";import"./BackdropMixin-Cph7LUXG.js";import"./popover.constants-CIal_de7.js";import"./index-CyxhZss1.js";import"./v4-CmTdKEVZ.js";import"./input.component-C0DCE1j-.js";import"./directive-Ctav8iJK.js";import"./index-4S0d2H2d.js";import"./formfieldwrapper.component-DRwAg4rF.js";import"./formfieldwrapper.constants-h8eGswk8.js";import"./FormInternalsMixin-BCsH286L.js";import"./input.constants-Ph-PYyC7.js";import"./index-Bo-_Do5E.js";import"./index-CmRGQdAR.js";import"./radio.constants-zfuryF1K.js";import"./index-D_t_HPYP.js";import"./toggle.constants-CMbJ5q3e.js";import"./ControlTypeMixin-BMbczHbx.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
