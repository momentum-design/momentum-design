import{k as p}from"./iframe-BV7DidLN.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-XKop87vG.js";import"./index-M7aQLfGx.js";import"./index-CPcc0HoF.js";import"./index-cMa5fiqb.js";import"./index-CWEgBn5V.js";import"./index-C9_ozEUR.js";import"./index-BeAmLY3p.js";import"./index-C-NKApRH.js";import"./index-D3lMgKTx.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-D2tHkEU_.js";import"./buttonsimple.component-DCTArt_2.js";import"./DisabledMixin-CFB-Ad_A.js";import"./KeyDownHandledMixin-DOYn_X21.js";import"./index-DaTwCGbh.js";import"./button.utils-rNW36Ji7.js";import"./index-D1Qet_wC.js";import"./index-DTrDRi1E.js";import"./if-defined-CldWBRdg.js";import"./index-CGAh1vSe.js";import"./IconNameMixin-BztT4GY0.js";import"./index-_5ulFiCN.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-CRNEoonn.js";import"./linksimple.component-BxJSV21z.js";import"./DataAriaLabelMixin-BHvhAZgM.js";import"./link.constants-DqgfcN9s.js";import"./index-mZKUOJSu.js";import"./popover.component-B7wtNSM3.js";import"./BackdropMixin-Gl5vXIzD.js";import"./popover.constants-DiPcIeLp.js";import"./index-BdXIsvzB.js";import"./v4-CmTdKEVZ.js";import"./input.component-C4GN6SVU.js";import"./directive-Ctav8iJK.js";import"./index-BM-e7Rqz.js";import"./formfieldwrapper.component-C54ckH2I.js";import"./formfieldwrapper.constants-DPxzLosz.js";import"./FormInternalsMixin-Bbmt5uTH.js";import"./input.constants-DK3A2Fzp.js";import"./index-E3OAs72E.js";import"./index-D87L6Rya.js";import"./radio.constants-CLUr89Mk.js";import"./index-CXk1oEcJ.js";import"./toggle.constants-CJk2pR45.js";import"./ControlTypeMixin-BAOZ3y8Z.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
