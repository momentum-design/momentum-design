import{k as d}from"./iframe-8tieyzIg.js";import{h as p}from"./utils-D6nie9pS.js";import"./index-CvgOT0Ao.js";import"./index-BTd_uHp3.js";import"./index-Dml7uPFZ.js";import"./index-E28s_LEB.js";import"./index-BHUu5iTX.js";import"./index-Dz-oQPAH.js";import"./index-Nr9VyN18.js";import"./index-DvdDDdwt.js";import"./index-D2h_2lSv.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-BEdcqSDi.js";import"./buttonsimple.component-BFNsYIkl.js";import"./DisabledMixin-B_AM2ryx.js";import"./KeyToActionMixin-l8VQhGET.js";import"./button.utils-rNW36Ji7.js";import"./index-DblcVKBa.js";import"./index-dkiGSyFD.js";import"./index-DTrDRi1E.js";import"./if-defined-PlGgwzOZ.js";import"./index-BFj37K7a.js";import"./IconNameMixin-Lj-tEd40.js";import"./index-D8JCm-Xy.js";import"./badge.constants-BwJXu4Yj.js";import"./linksimple.component-C61F0xXv.js";import"./DataAriaLabelMixin-C8OIRJOz.js";import"./link.constants-kpK1EMBr.js";import"./index-BBiV8-3C.js";import"./popover.component-Di6QrzZj.js";import"./BackdropMixin-D8V_vC-j.js";import"./dom-BlZvhF8F.js";import"./popover.constants-UaVl6CR-.js";import"./index-Du2v310m.js";import"./v4-CmTdKEVZ.js";import"./input.component-DB9wkCKs.js";import"./directive-Ctav8iJK.js";import"./index-CKl6A6WC.js";import"./formfieldwrapper.component-D8G_2JYv.js";import"./formfieldwrapper.constants-7kWDrmiy.js";import"./FormInternalsMixin-wrTfCCd2.js";import"./input.constants-V9bmLinB.js";import"./index-R2pGWK3o.js";import"./index-C10VHij3.js";import"./radio.constants-DT7fG8IL.js";import"./index-B5UpHdtH.js";import"./toggle.constants-Q_xbiVha.js";import"./ControlTypeMixin-CPkpn-mU.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
