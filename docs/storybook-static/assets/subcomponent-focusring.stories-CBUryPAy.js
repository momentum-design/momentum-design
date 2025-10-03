import{k as d}from"./iframe-DlUA9Lme.js";import{a as p}from"./utils-CFOyPOhY.js";import"./index-CUuLJ370.js";import"./index-DtWQTaJq.js";import"./index-mZvLyFg4.js";import"./index-C0wlaNSK.js";import"./index-ORZoBlyZ.js";import"./index-D5tGwqQ-.js";import"./index-CxcY8T0v.js";import"./index-BJUHQKd4.js";import"./index-BNq6IC1y.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-B-Pn-UIi.js";import"./buttonsimple.component-DbCI_knu.js";import"./keys-hFXe221I.js";import"./DisabledMixin-CAO-9s6U.js";import"./TabIndexMixin-D2-rjBj7.js";import"./button.utils-rNW36Ji7.js";import"./index-DWTl0clH.js";import"./index-BLWS0bNq.js";import"./index-DTrDRi1E.js";import"./if-defined-sRFM4mFi.js";import"./index-CHpM0iuM.js";import"./IconNameMixin-BxglfIEY.js";import"./index-EHRHj1AM.js";import"./badge.constants-9IRrQcki.js";import"./linksimple.component-l3FnsRqu.js";import"./DataAriaLabelMixin-zzpBu2FW.js";import"./link.constants-CPcGYzjc.js";import"./index-DBsvpO9c.js";import"./popover.component-BBliWbI3.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-B37S2fZg.js";import"./index-DNlVfzVs.js";import"./v4-CmTdKEVZ.js";import"./input.component-MW7g-kIU.js";import"./directive-Ctav8iJK.js";import"./index-4agTb2Xy.js";import"./formfieldwrapper.component-D1y10-Nw.js";import"./FormInternalsMixin-CcahIxch.js";import"./query-DXShiZ7f.js";import"./input.constants-CXDx7tmI.js";import"./index-DteJdtLE.js";import"./index-n4BNhymp.js";import"./radio.constants-D_JWgtru.js";import"./index-CgnIPo8p.js";import"./toggle.constants-CbqXTGHL.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
