import{k as d}from"./iframe-Ckq14th5.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-BbKtROZO.js";import"./index-B5HoreC9.js";import"./index-D04xYYxs.js";import"./index-C_yFV9if.js";import"./index-DISdwaaG.js";import"./index-DofUjJMa.js";import"./index-zTGelzIu.js";import"./index-NHaQJUvz.js";import"./index-CoGEXHSh.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-BBjCZ0hb.js";import"./buttonsimple.component-DsGx8Kzo.js";import"./keys-hFXe221I.js";import"./DisabledMixin-D9zNYipp.js";import"./TabIndexMixin-CQNowTQO.js";import"./button.utils-rNW36Ji7.js";import"./index-BYN-6AzR.js";import"./index-CA7IxMHH.js";import"./index-DTrDRi1E.js";import"./if-defined-C2yKogSI.js";import"./index-amWgHVzs.js";import"./IconNameMixin-CQU99Aea.js";import"./index-D7Pxxc1o.js";import"./badge.constants-BdEP84EL.js";import"./linksimple.component-BzDKxV7L.js";import"./DataAriaLabelMixin-RBz0EvxW.js";import"./link.constants-DYiflz21.js";import"./index-CeVtzbpP.js";import"./popover.component-LsJ17w6R.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-5r_Kas7U.js";import"./index-1KcePALo.js";import"./v4-CmTdKEVZ.js";import"./input.component-BRpWyVtJ.js";import"./directive-Ctav8iJK.js";import"./index-BhHR0NSa.js";import"./formfieldwrapper.component-xC5JGhos.js";import"./FormInternalsMixin-C-UkDWxp.js";import"./query-DXShiZ7f.js";import"./input.constants-l5oH9B0k.js";import"./index-BGvpGGuM.js";import"./index-Dy0O2_kC.js";import"./radio.constants-KnhR35Pd.js";import"./index-D5gEjVRF.js";import"./toggle.constants-C1CUmDX5.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
