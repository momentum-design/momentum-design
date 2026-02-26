import{k as d}from"./iframe-DLfB9FYH.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-BRD8Rseq.js";import"./index-0C46TEuO.js";import"./index-OYk_nRcT.js";import"./index-D6QKEnSF.js";import"./index-BK-Yqni0.js";import"./index-DNrySHAc.js";import"./index-BjWv0mIa.js";import"./index-tGiu6csp.js";import"./index-M94mMMIK.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-BDgJYVC_.js";import"./buttonsimple.component-BXtWBmk2.js";import"./DisabledMixin-B8bLtRzX.js";import"./KeyDownHandledMixin-D8dzwUl5.js";import"./index-CilSaSXZ.js";import"./button.utils-rNW36Ji7.js";import"./index-Bo7bDdtg.js";import"./index-DTrDRi1E.js";import"./if-defined-CdnasZhd.js";import"./index-DnqTiFEQ.js";import"./IconNameMixin-C5nCp9gN.js";import"./index-DDLYJa6o.js";import"./badge.constants-9IEgOgC7.js";import"./linksimple.component-B7EnXYTi.js";import"./DataAriaLabelMixin-C6AhHgC4.js";import"./link.constants-CI-sOk1B.js";import"./index-B9c5OvsR.js";import"./popover.component-D2cBzAI3.js";import"./BackdropMixin-Bz48HOOx.js";import"./popover.constants-Dz9-II2W.js";import"./index-BPYvMU4t.js";import"./v4-CmTdKEVZ.js";import"./input.component-BlyJVoys.js";import"./directive-Ctav8iJK.js";import"./index-uUQ2uvC0.js";import"./formfieldwrapper.component-DKHfEnLF.js";import"./formfieldwrapper.constants-CZrVRtIg.js";import"./FormInternalsMixin-D_WVFFN8.js";import"./input.constants-CZ-oP2xG.js";import"./index-D3rwN-F-.js";import"./index-DuKU1llb.js";import"./radio.constants-CEHBXR3h.js";import"./index-CRJhc-la.js";import"./toggle.constants-Bh_aYUp_.js";import"./ControlTypeMixin-BRTiQ_0x.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const it=["Example","FocusRingWithinHost"];export{t as Example,o as FocusRingWithinHost,it as __namedExportsOrder,rt as default};
