import{k as p}from"./iframe-BZP6WX1W.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-yihpdQft.js";import"./index-D0-lzQmo.js";import"./index-CTBFEJuR.js";import"./index-AZ8p4WbM.js";import"./index-BfJ0CqRT.js";import"./index-Cf9rqDIS.js";import"./index-IZi5m_ui.js";import"./index-Bz_0gHa5.js";import"./index-Cl3_9Td9.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CrURP83W.js";import"./buttonsimple.component-BK054w_c.js";import"./DisabledMixin-BJwARYIU.js";import"./KeyDownHandledMixin-DzRyYMsy.js";import"./index-G4UkceUF.js";import"./button.utils-rNW36Ji7.js";import"./index-BVHEHSJG.js";import"./index-DTrDRi1E.js";import"./if-defined-5PTGeIjh.js";import"./index-D7jo_zMJ.js";import"./IconNameMixin-BlXomgDz.js";import"./index-BYy9Ha9y.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-DUFFxuiJ.js";import"./linksimple.component-HSJBDH_V.js";import"./DataAriaLabelMixin-Dn_vQb5h.js";import"./link.constants-9VG_gct-.js";import"./index-D492wUL5.js";import"./popover.component-K86JqyjF.js";import"./BackdropMixin-D9hVbecZ.js";import"./popover.constants-BYlCbcKi.js";import"./index-CI31g2NK.js";import"./v4-CmTdKEVZ.js";import"./input.component-DZdP_TDC.js";import"./directive-Ctav8iJK.js";import"./index-BPzRlnN2.js";import"./formfieldwrapper.component-Crsudd7H.js";import"./formfieldwrapper.constants-Lhx4J_yp.js";import"./FormInternalsMixin-Mor8BiHy.js";import"./input.constants-8Y3UXm_b.js";import"./index-BYP4Ze0N.js";import"./index-Ct2kOdRt.js";import"./radio.constants-j4KSuzNd.js";import"./index-DBefrgzI.js";import"./toggle.constants-dQPhRBxJ.js";import"./ControlTypeMixin-swPRswUA.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
