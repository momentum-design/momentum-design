import{k as p}from"./iframe-CWZHLpSW.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-DXIfpZ1p.js";import"./index-Bshvy1xj.js";import"./index-DCsg0iVb.js";import"./index-DdUQaD9k.js";import"./index-Bh5eeWPj.js";import"./index-B0g2T0LB.js";import"./index-BgBZfqaR.js";import"./index-Cik3W2n-.js";import"./index-CTQK873y.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-B2ddBvE5.js";import"./buttonsimple.component-Bp2RVek_.js";import"./DisabledMixin-C-G1XPVm.js";import"./KeyDownHandledMixin-e2YdyScp.js";import"./index-BTHDyICb.js";import"./button.utils-rNW36Ji7.js";import"./index-gcvzhn-G.js";import"./index-DTrDRi1E.js";import"./if-defined-BHKaK788.js";import"./index-ZP7ypSbz.js";import"./IconNameMixin-nWlrx_gZ.js";import"./index-DL_Rm5Pr.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-C6BZO_HH.js";import"./linksimple.component-BEYlek1_.js";import"./DataAriaLabelMixin-I5Wy54UX.js";import"./link.constants-0dYGzE-d.js";import"./index-COZKbKrV.js";import"./popover.component-3-Wjd7rt.js";import"./BackdropMixin-D8jWkK2i.js";import"./popover.constants-Dbh1flcN.js";import"./index-BaKcb3bP.js";import"./v4-CmTdKEVZ.js";import"./input.component-DQ-1F-PV.js";import"./directive-Ctav8iJK.js";import"./index-C4jcgqvp.js";import"./formfieldwrapper.component-CXOccMpp.js";import"./formfieldwrapper.constants-BPP3OG5h.js";import"./FormInternalsMixin-CYsEtoBR.js";import"./input.constants-B4Ens4LS.js";import"./index-DPH1uoKq.js";import"./index-D_nb7hvo.js";import"./radio.constants-DEyAoG8j.js";import"./index-hAC2WWr2.js";import"./toggle.constants-DysbdJJ0.js";import"./ControlTypeMixin-BOkRawkV.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
    <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-button>Button</mdc-button>
      <mdc-avatarbutton
        initials="MD"
        size="48"
        src="https://picsum.photos/id/63/256"
        aria-label="Avatar Button"
      ></mdc-avatarbutton>
      <mdc-tab icon-name="placeholder-bold" tabindex="0" text="Tab 1" variant="pill">
        <mdc-badge slot="postfix" type="counter" counter="1"></mdc-badge>
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
        <mdc-badge slot="postfix" type="counter" counter="1"></mdc-badge>
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
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const at=["Example","FocusRingWithinHost"];export{t as Example,o as FocusRingWithinHost,at as __namedExportsOrder,it as default};
