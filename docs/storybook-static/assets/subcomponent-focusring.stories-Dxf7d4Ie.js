import{k as d}from"./iframe-ojQsro1_.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-BQ2PLB_I.js";import"./index-PguEFH_o.js";import"./index-DNJOxm5m.js";import"./index-o75eRLvi.js";import"./index-D5axwy0W.js";import"./index-I6ePd5K6.js";import"./index-Dwcm01Ih.js";import"./index-_h-WwyRP.js";import"./index-VWDrAA9G.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-DWDgEEeQ.js";import"./buttonsimple.component-y4d96y3m.js";import"./DisabledMixin-DFNBhceF.js";import"./KeyDownHandledMixin-CwWe2bID.js";import"./index-CWGsCnx3.js";import"./button.utils-rNW36Ji7.js";import"./index-CBfQUMDE.js";import"./index-DTrDRi1E.js";import"./if-defined-CVMw9D_D.js";import"./index-DsVwo08u.js";import"./IconNameMixin-BUn9T64S.js";import"./index-BG5SK3LQ.js";import"./badge.constants-CBN5bkQe.js";import"./linksimple.component-Cc1SJZ_Y.js";import"./DataAriaLabelMixin-BDsf-JHW.js";import"./link.constants-CGnoDHCi.js";import"./index-DsUi5e9a.js";import"./popover.component-CgI2Li1_.js";import"./BackdropMixin-wwWxqvnp.js";import"./popover.constants-Bk1cvuYk.js";import"./index-DxZ1GeMr.js";import"./v4-CmTdKEVZ.js";import"./input.component-CP4wn9Gj.js";import"./directive-Ctav8iJK.js";import"./index-CrxYT9af.js";import"./formfieldwrapper.component-NfHYx8j2.js";import"./formfieldwrapper.constants-DLC9PYne.js";import"./FormInternalsMixin-TCbF8GsZ.js";import"./input.constants-ocL32L6L.js";import"./index-C1MefYaG.js";import"./index-CPcbJ-7I.js";import"./radio.constants-ajeGeiUW.js";import"./index-CFdOomjf.js";import"./toggle.constants-BS_emkYJ.js";import"./ControlTypeMixin-DsFusjWS.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
