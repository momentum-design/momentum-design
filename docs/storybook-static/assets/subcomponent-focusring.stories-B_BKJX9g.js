import{k as p}from"./iframe-CbqKEQKG.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-DKGxwuav.js";import"./index-Bpleqt3n.js";import"./index-DC7zGGte.js";import"./index--YxXpUy2.js";import"./index-CJ1aw2ku.js";import"./index-C94szTyv.js";import"./index-DMBHv-3d.js";import"./index-cCr9KV-G.js";import"./index-sBqHoF9B.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-8VdzbyVb.js";import"./buttonsimple.component-AN_udt06.js";import"./DisabledMixin-D1J5BuaC.js";import"./KeyDownHandledMixin-CLghnFpp.js";import"./index-D1XjZZCX.js";import"./button.utils-rNW36Ji7.js";import"./index-CzVF39R2.js";import"./index-DTrDRi1E.js";import"./if-defined-DdfCTP6H.js";import"./index-sJBAcWxt.js";import"./IconNameMixin-BguT8tNO.js";import"./index-CLnszHBb.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-DH2bAmWW.js";import"./linksimple.component-BYnopXNW.js";import"./DataAriaLabelMixin-CV9OUUhl.js";import"./link.constants-Dv3NiqKZ.js";import"./index-f9HYzY4X.js";import"./v4-CmTdKEVZ.js";import"./index-suda_e0N.js";import"./popover.component-BVSl45k9.js";import"./BackdropMixin-DrGhvh8B.js";import"./popover.constants-BKTxyAYa.js";import"./input.component-D1ibX-z8.js";import"./directive-Ctav8iJK.js";import"./index-CjwOnWpi.js";import"./formfieldwrapper.component-I2Hnuxxz.js";import"./formfieldwrapper.constants-CyVlc3qN.js";import"./FormInternalsMixin-B0Q5IqFn.js";import"./input.constants-BcAHFxFh.js";import"./index-Be-uq05l.js";import"./index-vdTb8CMo.js";import"./radio.constants-CFxRZCIR.js";import"./index-BoUiyjit.js";import"./toggle.constants-Ct7kgqRT.js";import"./ControlTypeMixin-DvmDO6qJ.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
