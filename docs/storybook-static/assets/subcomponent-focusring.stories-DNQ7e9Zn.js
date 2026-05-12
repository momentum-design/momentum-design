import{k as p}from"./iframe-h-8-pYpG.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-dwpMsz7t.js";import"./index-BwW0pSbp.js";import"./index-DuRcfOQO.js";import"./index-BGgJeET6.js";import"./index-BoMhTdG3.js";import"./index-BwyfgEGj.js";import"./index-CGIxLjZ-.js";import"./index-DhlfnfBf.js";import"./index-BbfsS1Dh.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-HVZgs1DE.js";import"./buttonsimple.component-BXm36R6t.js";import"./DisabledMixin-DNaExcQz.js";import"./KeyDownHandledMixin-GlAlsUtB.js";import"./index-_57btw-C.js";import"./button.utils-rNW36Ji7.js";import"./index-B2rM4TaK.js";import"./index-DTrDRi1E.js";import"./if-defined-BFv5gqaQ.js";import"./index-DkidAcsV.js";import"./IconNameMixin-DjtoD3C4.js";import"./index-CbgnWfUR.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-DtIPpIxQ.js";import"./linksimple.component-BK_0dx0D.js";import"./DataAriaLabelMixin-DFoYBU-S.js";import"./link.constants-7VA1Rh-8.js";import"./index-DuLLzZQ9.js";import"./v4-CmTdKEVZ.js";import"./index-DUzIglYf.js";import"./popover.component-Cv8PbZAY.js";import"./BackdropMixin-DuNZeoSK.js";import"./popover.constants-BQH42geS.js";import"./input.component-DbXa0jPs.js";import"./directive-Ctav8iJK.js";import"./index-C2zwt-Fj.js";import"./formfieldwrapper.component-lZr7ErIN.js";import"./formfieldwrapper.constants-CZuh8amp.js";import"./FormInternalsMixin-FUWt5Tsn.js";import"./input.constants-D47TyruX.js";import"./index-BduQBMaa.js";import"./index-BvY2thpJ.js";import"./radio.constants-CMaGfZrX.js";import"./index-ChedO7Ld.js";import"./toggle.constants-CcMnS5Kq.js";import"./ControlTypeMixin-7e0XLmHz.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
