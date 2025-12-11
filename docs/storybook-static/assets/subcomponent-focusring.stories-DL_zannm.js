import{k as d}from"./iframe-DqI8R0T6.js";import{h as p}from"./utils-D6nie9pS.js";import"./index-D6ttOyno.js";import"./index-Ca1gI013.js";import"./index-CfFsXKoB.js";import"./index-IoESEQyE.js";import"./index-BN6Idvbt.js";import"./index-DwCUcF1a.js";import"./index-BFWroGpg.js";import"./index-y_7GNs9B.js";import"./index-D-AVk6EV.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-DNAuirvW.js";import"./buttonsimple.component-Dx5XsFID.js";import"./TabIndexMixin-eZI_-HVg.js";import"./DisabledMixin-DFXWJxZV.js";import"./button.utils-rNW36Ji7.js";import"./index-ByoG7FEj.js";import"./index-DJBXnCCu.js";import"./index-DTrDRi1E.js";import"./if-defined-1FKA9-0t.js";import"./index-DJU-TrtA.js";import"./IconNameMixin--8ZKzNYl.js";import"./index-BF_ngcWZ.js";import"./badge.constants-Cznz9phM.js";import"./linksimple.component-BXuBDpTB.js";import"./DataAriaLabelMixin-BPTWCNDN.js";import"./link.constants-nuDLVa8O.js";import"./index-CSF4IDSN.js";import"./base-DIkkzJ-c.js";import"./popover.component-DjSQM3rI.js";import"./BackdropMixin-BplkIKcn.js";import"./popover.constants-D4yggTO2.js";import"./index-u7le3bOL.js";import"./v4-CmTdKEVZ.js";import"./input.component-C1sR0e0i.js";import"./directive-Ctav8iJK.js";import"./index-CyJ7x0yO.js";import"./formfieldwrapper.component-CmV8Sb6L.js";import"./formfieldwrapper.constants-CEGUuN8v.js";import"./FormInternalsMixin-D3QOTzSb.js";import"./query-BPxBhMfF.js";import"./input.constants-BTN9cnfQ.js";import"./index-CXsgdYxN.js";import"./index-Dnxbd2H6.js";import"./radio.constants-J1l98uxl.js";import"./index-BbP1lZ47.js";import"./toggle.constants-CT0ulFaP.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
  `},o={argTypes:{...p(["shape"])},render:()=>d` <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-link icon-name="placeholder-bold"><a href="#">Link</a></mdc-link>
      <mdc-input value="Input" trailing-button></mdc-input>
      <mdc-radio name="radio" value="radio" label="Radio"></mdc-radio>
      <mdc-checkbox label="Checkbox"></mdc-checkbox>
      <mdc-toggle label="Toggle"></mdc-toggle>
    </div>`};var e,r,i;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var a,m,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
