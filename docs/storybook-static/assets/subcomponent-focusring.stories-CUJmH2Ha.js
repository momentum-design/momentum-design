import{k as p}from"./iframe-B1KWnZCh.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-DA4rsKpa.js";import"./index-DQhXiEMI.js";import"./index-rEzeggyU.js";import"./index-CJuRjUyP.js";import"./index-DI4Tp0xO.js";import"./index-BL8TDt2y.js";import"./index-CXbN1nHg.js";import"./index-H4C35ZQP.js";import"./index-C1lJx2AT.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CxpgxfLQ.js";import"./buttonsimple.component-BJjFCTIb.js";import"./DisabledMixin-NZHSsDXC.js";import"./KeyDownHandledMixin-Dn46iWHe.js";import"./index-Cr7Y8Kyi.js";import"./button.utils-rNW36Ji7.js";import"./index-BHIwljMD.js";import"./index-DTrDRi1E.js";import"./if-defined-BzRT1tOp.js";import"./index-CFnxWq7n.js";import"./IconNameMixin-QdESaiT8.js";import"./index-4f4w7Q4G.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-CPa9wSXD.js";import"./linksimple.component-CWUMsh3c.js";import"./DataAriaLabelMixin-C5iVKoFj.js";import"./link.constants-Bipb7-xj.js";import"./index-BbmFNrjC.js";import"./v4-CmTdKEVZ.js";import"./index-CufX1EF0.js";import"./popover.component-Bj4AE6Sa.js";import"./BackdropMixin-DZnxeAl5.js";import"./popover.constants-DROErG_h.js";import"./input.component-DkCg-Moh.js";import"./directive-Ctav8iJK.js";import"./index-DhiI6xB8.js";import"./formfieldwrapper.component-Dya_05av.js";import"./formfieldwrapper.constants-DNbD5Qme.js";import"./FormInternalsMixin-Bo-WEX2i.js";import"./input.constants-CoISl_er.js";import"./index-CtqlukqR.js";import"./index-NBiWmdA7.js";import"./radio.constants-DDA9npYv.js";import"./index-CzQfyirc.js";import"./toggle.constants-DA53sY85.js";import"./ControlTypeMixin-CMKJkLSr.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
