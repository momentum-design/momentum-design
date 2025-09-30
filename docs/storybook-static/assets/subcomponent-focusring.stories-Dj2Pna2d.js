import{k as p}from"./iframe-KY1Pl7Qi.js";import{a as d}from"./utils-CFOyPOhY.js";import"./index-CMXqM5n4.js";import"./index-B8NlsRzO.js";import"./index-D5j-zyoL.js";import"./index-CKE_kP1u.js";import"./index-D_uliLFM.js";import"./index-80ruUfSG.js";import"./index-DWZMHJ85.js";import"./index-DBPIL9TV.js";import"./index-BMyaVCjk.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-C7IYGuN9.js";import"./button.constants-DjiiKMdJ.js";import"./buttonsimple.constants-BhhkB2Lp.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-iM8fAVes.js";import"./keys-hFXe221I.js";import"./DisabledMixin-bUQ9ncpk.js";import"./TabIndexMixin-B5cbZbwC.js";import"./index-C-R_kWER.js";import"./button.utils-rNW36Ji7.js";import"./index-CBH-afrD.js";import"./index-CbdPMEyu.js";import"./index-DTrDRi1E.js";import"./if-defined-C_zMbcwl.js";import"./index-C0XsoYl7.js";import"./IconNameMixin-I6YxuUG8.js";import"./index-B1Dbcs-T.js";import"./index-C2qjAplw.js";import"./badge.constants-Cpj88xbr.js";import"./linksimple.component-NFlV2CU0.js";import"./DataAriaLabelMixin-DBaEHTgg.js";import"./link.constants-xdiy7Ok7.js";import"./index-DGKTlLJP.js";import"./popover.component-Du2HpKJy.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-CgxFYzna.js";import"./index-V7gD-Sb0.js";import"./v4-CmTdKEVZ.js";import"./input.component-DIEW03ch.js";import"./directive-Ctav8iJK.js";import"./index-BB2IUl_d.js";import"./formfieldwrapper.component-CODnkLVv.js";import"./FormInternalsMixin-cQrmfLTQ.js";import"./query-DXShiZ7f.js";import"./input.constants-eSZQEaWQ.js";import"./index-jkKQ-Fs8.js";import"./index-DPJsMMZy.js";import"./radio.constants-BChRDNsp.js";import"./index-4wl3ctst.js";import"./toggle.constants-CWmWhlKq.js";const pt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
