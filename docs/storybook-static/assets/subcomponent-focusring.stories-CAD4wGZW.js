import{k as p}from"./iframe-D0yPktIr.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-BmpH_0tC.js";import"./index-_g6aIEFZ.js";import"./index-8j7neEUZ.js";import"./index-BwEIhdeE.js";import"./index-DGx34Yqb.js";import"./index-BXF5AxRv.js";import"./index-Ck7AcKI8.js";import"./index-Dr3kLpXT.js";import"./index-CEZ0Viwz.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-DB6zMJ4H.js";import"./buttonsimple.component-CUsllOPv.js";import"./DisabledMixin-BQzZeYPM.js";import"./KeyDownHandledMixin-BZZQUmsN.js";import"./index-BHN0bjuT.js";import"./button.utils-rNW36Ji7.js";import"./index-C2ikfZSH.js";import"./index-DTrDRi1E.js";import"./if-defined-BQWKbkiE.js";import"./index-DJWV0snG.js";import"./IconNameMixin-D7dTY1MQ.js";import"./index-C4mY-6cH.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-CEeWiW_z.js";import"./linksimple.component-CLC_fT3r.js";import"./DataAriaLabelMixin-D5V9c7RW.js";import"./link.constants-DHbEYJVR.js";import"./index-BuYl360i.js";import"./v4-CmTdKEVZ.js";import"./index-Cc_uw-Nd.js";import"./popover.component-sGhtH1Hh.js";import"./BackdropMixin-LppfRq51.js";import"./popover.constants-B8BCLxgL.js";import"./input.component-DIOkFlVt.js";import"./directive-Ctav8iJK.js";import"./index-C5ReYEPS.js";import"./formfieldwrapper.component-DhPw0ur5.js";import"./formfieldwrapper.constants-Bj-aq5_G.js";import"./FormInternalsMixin-D0f6_WZt.js";import"./input.constants-TFZG6Jqm.js";import"./index-Rjyg4gSN.js";import"./index-DvYqzKH8.js";import"./radio.constants-Dp31QzTA.js";import"./index-VPp4HlaC.js";import"./toggle.constants-_cWakYDw.js";import"./ControlTypeMixin-7TZ9GSK9.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
