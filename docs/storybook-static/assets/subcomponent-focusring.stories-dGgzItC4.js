import{k as d}from"./iframe-DBGUNv4F.js";import{h as p}from"./utils-D6nie9pS.js";import"./index-C4Fa2Q6W.js";import"./index-D31Khb_o.js";import"./index-CrDNp3aE.js";import"./index-CzUFsFNh.js";import"./index-CmqAk0xh.js";import"./index-7BIABxXN.js";import"./index-DsuP5pnN.js";import"./index-C1zHCt6r.js";import"./index-B3AJ-Oom.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-DHSQJTRA.js";import"./buttonsimple.component-D4MYEviQ.js";import"./DisabledMixin-toBsO7Rw.js";import"./KeyToActionMixin-CyA1a_rM.js";import"./button.utils-rNW36Ji7.js";import"./index-C-v37Hmt.js";import"./index-DYxC4i4C.js";import"./index-DTrDRi1E.js";import"./if-defined-ByroiDkB.js";import"./index-CLPLZtHk.js";import"./IconNameMixin-CxLugZjS.js";import"./index-e1t5X52H.js";import"./badge.constants-DjEq2W5Q.js";import"./linksimple.component-D0KEdZCk.js";import"./DataAriaLabelMixin-1_uyFcu6.js";import"./link.constants-Dzjhk71S.js";import"./index-DPycxoRr.js";import"./popover.component-BSR9kose.js";import"./BackdropMixin-pu4YriUi.js";import"./dom-BlZvhF8F.js";import"./popover.constants-CQwJjFEb.js";import"./index-BY9gZPFl.js";import"./v4-CmTdKEVZ.js";import"./input.component-Cihd9HQ9.js";import"./directive-Ctav8iJK.js";import"./index-rEqnp4Jx.js";import"./formfieldwrapper.component-7FRpi-mD.js";import"./formfieldwrapper.constants-CtuU3XED.js";import"./FormInternalsMixin-C7tSfuKP.js";import"./input.constants-CP5i1nWH.js";import"./index-Vbt82wXk.js";import"./index-BjgVzaWt.js";import"./radio.constants-BMizd5Hg.js";import"./index-BtJf69YP.js";import"./toggle.constants-C6Lwe8K8.js";import"./ControlTypeMixin-BwE4686w.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
