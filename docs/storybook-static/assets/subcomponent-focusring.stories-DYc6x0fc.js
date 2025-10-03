import{k as d}from"./iframe-Bmqk5ncS.js";import{a as p}from"./utils-CFOyPOhY.js";import"./index-9jv0kyio.js";import"./index-CBBmg3BG.js";import"./index-SwjAfTIZ.js";import"./index-B6-svA1Y.js";import"./index-CuS5ovLg.js";import"./index-BcL_aMLk.js";import"./index-BnirQmsW.js";import"./index-C2-ENav3.js";import"./index-CiAdaCEH.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-DOKkPvZM.js";import"./buttonsimple.component-DJ5naDiX.js";import"./keys-hFXe221I.js";import"./DisabledMixin-CJC0_YR8.js";import"./TabIndexMixin-CoFbKfFN.js";import"./button.utils-rNW36Ji7.js";import"./index-BMN--PIx.js";import"./index-Bo7GamiG.js";import"./index-DTrDRi1E.js";import"./if-defined-CEMHl27f.js";import"./index-Dlc1GpMM.js";import"./IconNameMixin-BxH3CgDw.js";import"./index-Buxhf2Fz.js";import"./badge.constants-Dzi09ZT-.js";import"./linksimple.component-Bm4Rk7Z-.js";import"./DataAriaLabelMixin-C9ZcLuvp.js";import"./link.constants-CRDwEYBm.js";import"./index-BltIwT_C.js";import"./popover.component-CpCRqOFZ.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-DDe36BUy.js";import"./index-CvgpI4tf.js";import"./v4-CmTdKEVZ.js";import"./input.component-B6uz-9kz.js";import"./directive-Ctav8iJK.js";import"./index-Cp423qIv.js";import"./formfieldwrapper.component-DgTSXZHj.js";import"./FormInternalsMixin-GQemRFrQ.js";import"./query-DXShiZ7f.js";import"./input.constants-BWFnE7gJ.js";import"./index-CRnfDU32.js";import"./index-CZK9p1cf.js";import"./radio.constants-BafNvAFI.js";import"./index-8oex4yMZ.js";import"./toggle.constants-BxCXKLBX.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
