import{k as p}from"./iframe-Ckh9e4At.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-CD3Yto0K.js";import"./index-C4qiUbH8.js";import"./index-CjRGmlRv.js";import"./index-B4hUcWiH.js";import"./index-BUkaAS3Q.js";import"./index-CpdVtlFw.js";import"./index-BPIy3JHR.js";import"./index-B0MaVyzY.js";import"./index-CuAG6O7p.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-BbHCzvOo.js";import"./buttonsimple.component-x_m__gMZ.js";import"./DisabledMixin-iesT_1WC.js";import"./KeyDownHandledMixin-DdkMwtj7.js";import"./index-CsitbVGN.js";import"./button.utils-rNW36Ji7.js";import"./index-CjtIbAH_.js";import"./index-DTrDRi1E.js";import"./index-C-SRMMEn.js";import"./IconNameMixin-BhKPZr7y.js";import"./index-ZyDXCzHK.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-C7Ku0jIX.js";import"./linksimple.component-ChZbzv4Q.js";import"./DataAriaLabelMixin-CSpCeYtV.js";import"./link.constants-CNfDxgim.js";import"./index-CDDpxmqR.js";import"./index-CUEZnBdb.js";import"./popover.component-DHv30t0m.js";import"./BackdropMixin-r0_gKnDt.js";import"./FocusTrapMixin-CWADEV9d.js";import"./popover.constants-TUWgROoJ.js";import"./input.component-FBXvCf72.js";import"./index-7wW_9_n9.js";import"./index-Cdz-w2ZR.js";import"./statusmessage.constants-Demx4hCY.js";import"./formfieldwrapper.component-CWTxwPaV.js";import"./formfieldwrapper.constants-CeNmKobS.js";import"./FormInternalsMixin-BsTI4uYY.js";import"./input.constants-B7437Gay.js";import"./index-aLGEbb7q.js";import"./index-Dh85vevO.js";import"./radio.constants-DGdEotgZ.js";import"./index-8jREt5Pe.js";import"./toggle.constants-CjvJDo9N.js";import"./ControlTypeMixin-B1cWMQXv.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
