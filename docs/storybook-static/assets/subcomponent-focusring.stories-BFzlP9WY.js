import{k as p}from"./iframe-BZzdMAZp.js";import{a as d}from"./utils-CFOyPOhY.js";import"./index-DVr7PYE6.js";import"./index-CrfHg8-E.js";import"./index-B9R8vxy0.js";import"./index-PFJWMqDn.js";import"./index-DLRzCSSr.js";import"./index-BlFN6bu1.js";import"./index-9nIqoGiW.js";import"./index-5R3KucBn.js";import"./index-Di-L43hM.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-DoeRgBbi.js";import"./button.constants-XDh12voX.js";import"./buttonsimple.constants-CLFrJb8-.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-CR61XUh9.js";import"./keys-hFXe221I.js";import"./DisabledMixin-FFwZPyaL.js";import"./TabIndexMixin-BZbJwgjr.js";import"./index-CWcLttKP.js";import"./button.utils-rNW36Ji7.js";import"./index-9-OsRZK_.js";import"./index-MnuDyUBt.js";import"./index-DTrDRi1E.js";import"./if-defined-DZZrGFtM.js";import"./index-D8ixbLG1.js";import"./IconNameMixin-CUV-2rpQ.js";import"./index-BJ-ZSZ36.js";import"./index-BjB2ba7z.js";import"./badge.constants-Bg1UIHKH.js";import"./linksimple.component-Gwhq6y72.js";import"./DataAriaLabelMixin-Con2Dv41.js";import"./link.constants-BTWUGKxE.js";import"./index-BrHvQWhu.js";import"./popover.component-Boo_DYe1.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-sWGUFycW.js";import"./index--K6VXkND.js";import"./v4-CmTdKEVZ.js";import"./input.component-Ly5C-NTu.js";import"./directive-Ctav8iJK.js";import"./index-CawV12T7.js";import"./formfieldwrapper.component-DuRDxB8e.js";import"./FormInternalsMixin-BtVKRgDd.js";import"./query-DXShiZ7f.js";import"./input.constants-CbBwtsCt.js";import"./index-nu-kLbf6.js";import"./index-5V4b9aqG.js";import"./radio.constants-Dtf8qIiQ.js";import"./index-6ylhXoF8.js";import"./toggle.constants-DsZjNSQv.js";const pt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
    <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-button>Button</mdc-button>
      <mdc-avatarbutton
        initials="MD"
        size="48"
        src="https://picsum.photos/id/63/256"
        aria-label="Avatar Button"
      ></mdc-avatarbutton>
      <mdc-tab icon-name="placeholder-bold" tabindex="0" text="Tab 1" variant="pill">
        <mdc-badge slot="badge" type="counter" counter="1"></mdc-badge>
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
        <mdc-badge slot="badge" type="counter" counter="1"></mdc-badge>
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
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const dt=["Example","FocusRingWithinHost"];export{t as Example,o as FocusRingWithinHost,dt as __namedExportsOrder,pt as default};
