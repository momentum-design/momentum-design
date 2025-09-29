import{k as p}from"./iframe-BG4I9E_r.js";import{a as d}from"./utils-CFOyPOhY.js";import"./index-CQdQ2kap.js";import"./index-hK1eGUnc.js";import"./index-Bytp71PD.js";import"./index-DLkgJWJ4.js";import"./index-WtydHjsr.js";import"./index-LlAYtjmX.js";import"./index-DI7QQqA7.js";import"./index-CxAPzy5g.js";import"./index-BPKHHrMs.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-XfMpF_Gc.js";import"./button.constants-DKx22iDf.js";import"./buttonsimple.constants-DSY_UmUp.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-CWbGizk1.js";import"./keys-hFXe221I.js";import"./DisabledMixin-CNoOU8v-.js";import"./TabIndexMixin-dp86jvDC.js";import"./index-B1GIzs4g.js";import"./button.utils-rNW36Ji7.js";import"./index-lO-Bt-J2.js";import"./index-CAgqPbz6.js";import"./index-DTrDRi1E.js";import"./if-defined-Kq1WkYsV.js";import"./index-QIOq_e8e.js";import"./IconNameMixin-gV0lxWw6.js";import"./index-CPlGVCn3.js";import"./index-DnKEC-v0.js";import"./badge.constants-BMpvXXdY.js";import"./linksimple.component-hlSTMxgS.js";import"./DataAriaLabelMixin-bf9n18Pa.js";import"./link.constants-CbR7Q52V.js";import"./index-BfWTl3qL.js";import"./popover.component-DR2D20Id.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-mSpOgh6O.js";import"./index-1c1JRL1L.js";import"./v4-CmTdKEVZ.js";import"./input.component-tR0KopfS.js";import"./directive-Ctav8iJK.js";import"./index-BUGggf7T.js";import"./formfieldwrapper.component-FO6jtjfy.js";import"./FormInternalsMixin-BqRvT3fz.js";import"./query-DXShiZ7f.js";import"./input.constants-B8yc9CI-.js";import"./index-BuPfi1w5.js";import"./index-qMk_awzm.js";import"./radio.constants-CIEsAmHS.js";import"./index-CcvWE2cc.js";import"./toggle.constants-CWi9MDuR.js";const pt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
        <mdc-badge slot="badge" type="counter" counter="1"></mdc-badge>
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
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const dt=["Example","FocusRingWithinHost"];export{t as Example,o as FocusRingWithinHost,dt as __namedExportsOrder,pt as default};
