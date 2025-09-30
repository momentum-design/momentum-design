import{k as p}from"./iframe-CAPDL6NR.js";import{a as d}from"./utils-CFOyPOhY.js";import"./index-Duh8ikqK.js";import"./index-CVsv9ZkR.js";import"./index-00o3kaUO.js";import"./index-D-2TNXh9.js";import"./index-CjRJOeEN.js";import"./index-CISzZouY.js";import"./index-BhQ9307M.js";import"./index-Dcprt3ZS.js";import"./index-CF7WGRK5.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-HKUijv0F.js";import"./button.constants-DBKgnBVW.js";import"./buttonsimple.constants-DfngC-nr.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-DZ5Vgbpt.js";import"./keys-hFXe221I.js";import"./DisabledMixin-CMR8O10r.js";import"./TabIndexMixin-CPdktGlp.js";import"./index-D0E8q322.js";import"./button.utils-rNW36Ji7.js";import"./index-Bsauk3ns.js";import"./index-gxLeJpQ8.js";import"./index-DTrDRi1E.js";import"./if-defined-CZl5EkiP.js";import"./index-BLCWEveX.js";import"./IconNameMixin-B4P7RgBU.js";import"./index-Cv-dgvR2.js";import"./index-C88XNpuE.js";import"./badge.constants-gB88RvyY.js";import"./linksimple.component-QAB_DZzO.js";import"./DataAriaLabelMixin-DKyP6cE4.js";import"./link.constants-Prf5Ha_y.js";import"./index-f0VWlluM.js";import"./popover.component-Ce708NOL.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-Ca8FniGz.js";import"./index-JZUK6NSW.js";import"./v4-CmTdKEVZ.js";import"./input.component-BIStrLWt.js";import"./directive-Ctav8iJK.js";import"./index-D9YcicNP.js";import"./formfieldwrapper.component-DNPOqpRQ.js";import"./FormInternalsMixin-BS6YDVe6.js";import"./query-DXShiZ7f.js";import"./input.constants-CtJzTyLd.js";import"./index-BIimKPgo.js";import"./index-BhULMgZA.js";import"./radio.constants-CQmv5pa-.js";import"./index-Cn9nOsbX.js";import"./toggle.constants-B0BpPEl6.js";const pt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
