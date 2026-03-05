import{k as d}from"./iframe-DZY0Eneb.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-WZNQ_ujb.js";import"./index-Cmhii6BJ.js";import"./index-eUFAHDFv.js";import"./index-DNZmXVPn.js";import"./index-CmHpb4NA.js";import"./index-CsFT2XZU.js";import"./index-YHWoxez2.js";import"./index-BcW_mB4i.js";import"./index-Hg1v28vr.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-Bk8cQmfj.js";import"./buttonsimple.component-Dqd-pY9p.js";import"./DisabledMixin-De6kEZSq.js";import"./KeyDownHandledMixin-VmShO6VS.js";import"./index-DsN-JZ3k.js";import"./button.utils-rNW36Ji7.js";import"./index-CIxqs-bu.js";import"./index-DTrDRi1E.js";import"./if-defined-BZtiOCUR.js";import"./index-BJ2i2pw9.js";import"./IconNameMixin-CEJJWqof.js";import"./index-ClNURrwT.js";import"./badge.constants-BSI4YfJY.js";import"./linksimple.component-Dr9NXAD_.js";import"./DataAriaLabelMixin-DG8G3EPU.js";import"./link.constants-DEp0CZuO.js";import"./index-Dv9RV-3Z.js";import"./popover.component-Ifa_UUGN.js";import"./BackdropMixin-Cy6oTdnk.js";import"./popover.constants-VlfpgApo.js";import"./index-BJ1EF000.js";import"./v4-CmTdKEVZ.js";import"./input.component-CD9UGXeH.js";import"./directive-Ctav8iJK.js";import"./index-OjXwg3vk.js";import"./formfieldwrapper.component-YK377WO-.js";import"./formfieldwrapper.constants-CwgWaoNM.js";import"./FormInternalsMixin-ClvOgUew.js";import"./input.constants-cUH4UbZW.js";import"./index-BCoFeXi6.js";import"./index-DGDTVGZ2.js";import"./radio.constants-CNoF5xvC.js";import"./index-CTPYDnAY.js";import"./toggle.constants-Bqga2lKY.js";import"./ControlTypeMixin-M4FFqoRO.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
