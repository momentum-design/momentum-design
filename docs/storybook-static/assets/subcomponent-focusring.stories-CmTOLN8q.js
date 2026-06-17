import{k as p}from"./iframe-rWdaJlOd.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-CYAR76Xc.js";import"./index-JUiwHUyi.js";import"./index-ClBS9lxh.js";import"./index-slzjr1at.js";import"./index-DTy_9lY0.js";import"./index-a1k9DXMK.js";import"./index-CCXgOJxg.js";import"./index-2NuKwpAL.js";import"./index-LxqUziTS.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-DiXcZOpS.js";import"./buttonsimple.component-CR_61M33.js";import"./DisabledMixin-BXKdzVeB.js";import"./KeyDownHandledMixin-DEGPFLrO.js";import"./index-CETtjk-e.js";import"./button.utils-rNW36Ji7.js";import"./index-CcPXd9fF.js";import"./index-DTrDRi1E.js";import"./index-BcweUB7x.js";import"./IconNameMixin-Z6R9i97L.js";import"./index-BsAaDkqD.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-C4fosCCv.js";import"./linksimple.component-ODeVjVBB.js";import"./DataAriaLabelMixin-DZP2SP9k.js";import"./link.constants-xVdpHhbL.js";import"./index-9JPE-7Yb.js";import"./v4-CmTdKEVZ.js";import"./index-D_61lH_P.js";import"./popover.component--4xRavKH.js";import"./BackdropMixin-C5KQqgMy.js";import"./popover.constants-BcS6MLW2.js";import"./input.component-oaUNEBLz.js";import"./directive-Ctav8iJK.js";import"./index-D3YXU-Re.js";import"./formfieldwrapper.component-B9Y6bipN.js";import"./formfieldwrapper.constants-DVLlnXP5.js";import"./FormInternalsMixin-DBmfMdXN.js";import"./input.constants-LyS83pVN.js";import"./index-DTaIzi6b.js";import"./index--sM_c4_u.js";import"./radio.constants-6Dda01Mn.js";import"./index-BJ7z-Obn.js";import"./toggle.constants-BBhLBCq4.js";import"./ControlTypeMixin-Bm_hmVQG.js";const et={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const it=["Example","FocusRingWithinHost"];export{t as Example,o as FocusRingWithinHost,it as __namedExportsOrder,et as default};
