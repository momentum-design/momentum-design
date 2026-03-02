import{k as d}from"./iframe-BfXYEz0b.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-CSPw1E2K.js";import"./index-_YIMx2-w.js";import"./index-Dpw7AFv4.js";import"./index-C-IisT7Z.js";import"./index-S7h4eQQ_.js";import"./index-B154AvmV.js";import"./index-CLv2NRHO.js";import"./index-BZlFUSTD.js";import"./index-00x3fZt1.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CNqE9az2.js";import"./buttonsimple.component-BGV-DOCQ.js";import"./DisabledMixin-DWEdz6jx.js";import"./KeyDownHandledMixin-Ctc8K9Ft.js";import"./index-By6KyR5o.js";import"./button.utils-rNW36Ji7.js";import"./index-8OoRc4Un.js";import"./index-DTrDRi1E.js";import"./if-defined-DZxbqxdG.js";import"./index-lPHDwo9V.js";import"./IconNameMixin-BoNF7byh.js";import"./index-DOUJ7gWh.js";import"./badge.constants-CBqhiMcb.js";import"./linksimple.component--bn4Ee1B.js";import"./DataAriaLabelMixin-4Iurz-x0.js";import"./link.constants-Da1qifxO.js";import"./index-BJg1YpmP.js";import"./popover.component-ZuTtkvh-.js";import"./BackdropMixin-Brg5K91Y.js";import"./popover.constants-CCNFUeJ5.js";import"./index-_sSeOWsB.js";import"./v4-CmTdKEVZ.js";import"./input.component-Dr_eOXwl.js";import"./directive-Ctav8iJK.js";import"./index-sNCbmgS7.js";import"./formfieldwrapper.component-BQya6FVe.js";import"./formfieldwrapper.constants-D56O1qEy.js";import"./FormInternalsMixin-CGRDjgyD.js";import"./input.constants-BFs6ED5u.js";import"./index-Bp1p52Cb.js";import"./index-Cx5prO_d.js";import"./radio.constants-BB4c4SBz.js";import"./index-uQlaPB9e.js";import"./toggle.constants-WgJY2-Lz.js";import"./ControlTypeMixin-CZ4dXNQK.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
