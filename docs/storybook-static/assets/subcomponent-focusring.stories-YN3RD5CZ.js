import{k as p}from"./iframe-DDdyYKcM.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-Dkhvg0JF.js";import"./index-C3Qiz35x.js";import"./index-aOkBX8S1.js";import"./index-CCYSE85y.js";import"./index-BX2kQlo3.js";import"./index-D4YP6ALN.js";import"./index-C1iJaPhx.js";import"./index-CiAFQMdv.js";import"./index-BzOkHaGF.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-3Cp68A6B.js";import"./buttonsimple.component-2qLehltN.js";import"./DisabledMixin-xgzT86Kg.js";import"./KeyDownHandledMixin-D_BymDsx.js";import"./index-BhcY06jc.js";import"./button.utils-rNW36Ji7.js";import"./index-SSEGGe-_.js";import"./index-DTrDRi1E.js";import"./if-defined-BbSBl4wr.js";import"./index-BE89OOzt.js";import"./IconNameMixin-BMkvk5fD.js";import"./index-CN1l1ZDj.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-BSXwCKJE.js";import"./linksimple.component-Bl5CwU9Y.js";import"./DataAriaLabelMixin-B3sLV5oj.js";import"./link.constants-CIoBgJ5I.js";import"./index-D-XWXgEY.js";import"./popover.component-AncBSVYA.js";import"./BackdropMixin-DAdP3NzV.js";import"./popover.constants-C7NqURGA.js";import"./index-Dmlr0iWX.js";import"./v4-CmTdKEVZ.js";import"./input.component-BrDFQNMX.js";import"./directive-Ctav8iJK.js";import"./index-CyNsFN6p.js";import"./formfieldwrapper.component-feyKecto.js";import"./formfieldwrapper.constants-Bvn-bJEY.js";import"./FormInternalsMixin-C0VnpdlX.js";import"./input.constants-CnK5P-ar.js";import"./index-DkZVeETZ.js";import"./index-Ds8z8EDj.js";import"./radio.constants-D3mkb6Cd.js";import"./index-DWEWJa3j.js";import"./toggle.constants-dfu-WE9s.js";import"./ControlTypeMixin-D1r9XbcW.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
