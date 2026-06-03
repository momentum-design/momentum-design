import{k as p}from"./iframe-CWop6vmJ.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-B9yzqxdT.js";import"./index-DHoCBBY6.js";import"./index-Cl17iISa.js";import"./index-fC1w73y6.js";import"./index-Dg6CQ1Bb.js";import"./index-DYSrUn1D.js";import"./index-yTIqkRgB.js";import"./index-DA-3LPvO.js";import"./index-brGsS0AB.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-DGuuQQgf.js";import"./buttonsimple.component-DI4Gh7GW.js";import"./DisabledMixin-DHRFWeSP.js";import"./KeyDownHandledMixin-BAjN28Su.js";import"./index-CENdKjzB.js";import"./button.utils-rNW36Ji7.js";import"./index-CgKZfptj.js";import"./index-DTrDRi1E.js";import"./if-defined-z4oxgOfa.js";import"./index-CVmEL3xw.js";import"./IconNameMixin-C5aZbUYK.js";import"./index-DrtGAbYF.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-BowJ4hzd.js";import"./linksimple.component-gL5jlA3Q.js";import"./DataAriaLabelMixin-aAonhGVb.js";import"./link.constants-CbbqDWrC.js";import"./index-BybiE5By.js";import"./v4-CmTdKEVZ.js";import"./index-C8s911zs.js";import"./popover.component-BzrVhga7.js";import"./BackdropMixin-0j6R75Iw.js";import"./popover.constants-eVE2hyUN.js";import"./input.component-BWOHbApN.js";import"./directive-Ctav8iJK.js";import"./index-CgGzCCHU.js";import"./formfieldwrapper.component-BIhXM9AE.js";import"./formfieldwrapper.constants-DwMgFPnZ.js";import"./FormInternalsMixin-CbRB0kFh.js";import"./input.constants-3gNJAkbC.js";import"./index-SLcNyzgP.js";import"./index-Dps_d_pH.js";import"./radio.constants-D7s40iyA.js";import"./index-DU1sI5Vl.js";import"./toggle.constants-CaJCN9aX.js";import"./ControlTypeMixin-Cs3IBwAn.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
