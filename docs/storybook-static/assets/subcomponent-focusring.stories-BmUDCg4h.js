import{k as p}from"./iframe-CAHFTIFZ.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-CWH_MNuG.js";import"./index-Cq6bEmTD.js";import"./index-B2Gl8LCE.js";import"./index-BGebBKe2.js";import"./index-DDFFvldZ.js";import"./index-BCz24Kai.js";import"./index-BCkGBnb8.js";import"./index-DmKVUYoc.js";import"./index-DGJNQURD.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-DKikowwC.js";import"./buttonsimple.component-DwRE44XV.js";import"./DisabledMixin-ewgcLnDl.js";import"./KeyDownHandledMixin-CX1B0M_i.js";import"./index-BwlLeB6I.js";import"./button.utils-rNW36Ji7.js";import"./index-C7quVIEm.js";import"./index-DTrDRi1E.js";import"./if-defined-C24tLpCC.js";import"./index-Dpi4Oe-6.js";import"./IconNameMixin-C-UBDGJg.js";import"./index-CAuVk5lN.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-CFSu4oFk.js";import"./linksimple.component-SQunwQiC.js";import"./DataAriaLabelMixin-CC31jWEx.js";import"./link.constants-Cxn3BAVL.js";import"./index-CHU0UUlo.js";import"./popover.component-Bn95pX0F.js";import"./BackdropMixin-RCwbzfna.js";import"./popover.constants-CA5vr5Xo.js";import"./index-BXqC-uJb.js";import"./v4-CmTdKEVZ.js";import"./input.component-B9iIMUZh.js";import"./directive-Ctav8iJK.js";import"./index-CI5Z2k7t.js";import"./formfieldwrapper.component-D8OmS-M2.js";import"./formfieldwrapper.constants-CAqVW9kD.js";import"./FormInternalsMixin-qtrj_VGT.js";import"./input.constants-CdiKM7Oz.js";import"./index-Dp6hnL39.js";import"./index-NDOovxP5.js";import"./radio.constants-BAdGjqxO.js";import"./index-Bxprx8XQ.js";import"./toggle.constants-CgB7orZi.js";import"./ControlTypeMixin-nqT5m4nn.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
