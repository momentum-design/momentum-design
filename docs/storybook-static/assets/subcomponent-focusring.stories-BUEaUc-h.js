import{k as d}from"./iframe-YytTiSpJ.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-3vnqsi31.js";import"./index-Cd4CpOp-.js";import"./index-B9x2_URL.js";import"./index-BKDRU-Iq.js";import"./index-DC7WpzF9.js";import"./index-CfGvBCAX.js";import"./index-BegD2xSC.js";import"./index-CEKBZ2PO.js";import"./index-2OPH86X_.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-B9UM6DlY.js";import"./buttonsimple.component-BVakejB1.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DFP3Cra7.js";import"./TabIndexMixin-CouquMWg.js";import"./button.utils-rNW36Ji7.js";import"./index-CqFh5GF_.js";import"./index-DT0cuXBy.js";import"./index-DTrDRi1E.js";import"./if-defined-B7MbqA45.js";import"./index-DSjB-0BG.js";import"./IconNameMixin-CAyVf3NO.js";import"./index-VKRmUIws.js";import"./badge.constants-CW727v3H.js";import"./linksimple.component-Bm7Hp-28.js";import"./DataAriaLabelMixin-BTdwV6Zu.js";import"./link.constants-CoiVQrx6.js";import"./index-DatT1WNs.js";import"./popover.component-C34wNqFB.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-Bcbw72ym.js";import"./index-Bph6XZCf.js";import"./v4-CmTdKEVZ.js";import"./input.component-DxtiVLIT.js";import"./directive-Ctav8iJK.js";import"./index-4TZ61q8Q.js";import"./formfieldwrapper.component-DLuLx3Vb.js";import"./FormInternalsMixin-Cr6DhtiY.js";import"./query-DXShiZ7f.js";import"./input.constants-YhnupSdH.js";import"./index-7_mOXLfY.js";import"./index-DwfFoCbH.js";import"./radio.constants-Bkn4RrVS.js";import"./index-B3wmhCDb.js";import"./toggle.constants-BP6-3DWi.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
