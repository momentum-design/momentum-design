import{k as d}from"./iframe-C04-hoFI.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-BI927QTQ.js";import"./index-CqyzMt75.js";import"./index-DhMWhgnK.js";import"./index-D41Yq_1D.js";import"./index-eqclggOi.js";import"./index-BvQfU5NQ.js";import"./index-7-rGn3e_.js";import"./index-CxPPT29N.js";import"./index-Diql0W71.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-BcgzDoCv.js";import"./buttonsimple.component-BCIGzD6E.js";import"./TabIndexMixin-cA5miIyS.js";import"./DisabledMixin-CDu4-Y_U.js";import"./button.utils-rNW36Ji7.js";import"./index-BLKZNFlU.js";import"./index-AVq5LYaO.js";import"./index-DTrDRi1E.js";import"./if-defined-DpBddC9E.js";import"./index-Qjp9XeLB.js";import"./IconNameMixin-o9kkigjR.js";import"./index-Drxl7Qg0.js";import"./badge.constants-BPAqj_WX.js";import"./linksimple.component-DgTNUrMN.js";import"./DataAriaLabelMixin-B0LNkVX4.js";import"./link.constants-FjARsVD_.js";import"./index-BE_jEW3o.js";import"./query-assigned-nodes-DgnTQRYW.js";import"./base-DIkkzJ-c.js";import"./popover.component-BlSYNTaC.js";import"./BackdropMixin-ALWWDBDR.js";import"./index-BzDxPFa8.js";import"./v4-CmTdKEVZ.js";import"./input.component-buJZyvH5.js";import"./directive-Ctav8iJK.js";import"./index-DF46gOJZ.js";import"./formfieldwrapper.component-C2P2oodu.js";import"./formfieldwrapper.constants-732dEaKr.js";import"./FormInternalsMixin-wAR2FpQo.js";import"./query-BPxBhMfF.js";import"./input.constants-DFV4-utg.js";import"./index-CldbMdf5.js";import"./index-CaiHPdYa.js";import"./radio.constants-Db7tr-Uy.js";import"./index-DcK9IwlX.js";import"./toggle.constants-2__0HoA-.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
