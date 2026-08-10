import{k as p}from"./iframe-D5qwq8cl.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-CdBP_yce.js";import"./index-Xr_7TbmU.js";import"./index-D-8r7E0l.js";import"./index-HcbBEhiF.js";import"./index-DSn4ohHU.js";import"./index-D5Qf2TD9.js";import"./index-QaNmAGEv.js";import"./index-pB4lx96R.js";import"./index-61YnigNs.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CvBqu9kP.js";import"./buttonsimple.component-Ue29ahk0.js";import"./DisabledMixin-D03aknaA.js";import"./KeyDownHandledMixin-BhPsZOr4.js";import"./index-BqZiOeq9.js";import"./button.utils-rNW36Ji7.js";import"./index-BfDwIRea.js";import"./index-DTrDRi1E.js";import"./index-BaU8vzyn.js";import"./IconNameMixin-BlijQY6W.js";import"./index-CunRoCbR.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-9hZz1a9Y.js";import"./linksimple.component-BP8ZZzU6.js";import"./DataAriaLabelMixin-4A7j5SiP.js";import"./link.constants-BZaZTMe1.js";import"./index-DeVpvDYk.js";import"./index-DPyT6VyS.js";import"./popover.component-CwItGqRa.js";import"./BackdropMixin-r0_gKnDt.js";import"./FocusTrapMixin-cSDKf3hj.js";import"./popover.constants-BzuTErsF.js";import"./input.component-B7WSQx8B.js";import"./index-nLWbnffY.js";import"./index-7_hC65Lx.js";import"./statusmessage.constants-vPXjPzcT.js";import"./formfieldwrapper.component-HySpgXY6.js";import"./formfieldwrapper.constants-DOz-i57s.js";import"./FormInternalsMixin-DvgSkvpm.js";import"./input.constants-CZtqNOCa.js";import"./index-DAxpA-PN.js";import"./index-BeiOiDoq.js";import"./radio.constants-DLEzFFy2.js";import"./index-DkpPdBRj.js";import"./toggle.constants-C3dGJVF9.js";import"./ControlTypeMixin-CZet9tp6.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
