import{k as p}from"./iframe-1qtKO-Lg.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-COF7F5FP.js";import"./index-Bk00We3q.js";import"./index-BglND1Ed.js";import"./index-Bip0-ViU.js";import"./index-Cwge5-kr.js";import"./index-Ivww2crJ.js";import"./index-DoiGUZy6.js";import"./index-Bfmh-OCD.js";import"./index-BWoH5uAk.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-C7Mafc85.js";import"./buttonsimple.component-1vETQOFY.js";import"./DisabledMixin-EZ3FaG-P.js";import"./KeyDownHandledMixin-PeN-ExeF.js";import"./index-BO4dBBLN.js";import"./button.utils-rNW36Ji7.js";import"./index-DLG2Bts2.js";import"./index-DTrDRi1E.js";import"./index-BteqlA0B.js";import"./IconNameMixin-Bt_MDmpj.js";import"./index-FggEv4ao.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-ZeKLcCbW.js";import"./linksimple.component-DsYrC5qQ.js";import"./DataAriaLabelMixin-DdX1l2k6.js";import"./link.constants-Ci_ZgWAc.js";import"./index-oKJ2P2mQ.js";import"./index-BToP_IFm.js";import"./popover.component-DAOGcM_b.js";import"./BackdropMixin-r0_gKnDt.js";import"./FocusTrapMixin-C1IlKQwV.js";import"./popover.constants-Dt14UCyo.js";import"./input.component-CK2oOfKb.js";import"./index-fZXnYEch.js";import"./index-D27fwOgd.js";import"./statusmessage.constants-2R5eb7Yt.js";import"./formfieldwrapper.component-BhUsVs1K.js";import"./formfieldwrapper.constants-BOQ57ywo.js";import"./FormInternalsMixin-BtoAQfWM.js";import"./input.constants-BjdotiVj.js";import"./index-Ci8JFAFE.js";import"./index-BT7Y2-Np.js";import"./radio.constants-M1R88GjP.js";import"./index-DGk6W4ya.js";import"./toggle.constants-BfB2PAEd.js";import"./ControlTypeMixin-C9GHifQj.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
