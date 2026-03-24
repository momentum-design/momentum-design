import{k as p}from"./iframe-q5YgjDld.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-BcEEePcu.js";import"./index-CfbCI5UE.js";import"./index-LpISv18X.js";import"./index-Be0m5Z6k.js";import"./index-DvYTTN02.js";import"./index-DuE4Inmk.js";import"./index-Hd65ZbXZ.js";import"./index-B51YjMVS.js";import"./index-Cu-VqWe8.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-rHS9HpdE.js";import"./buttonsimple.component-D5vIGevR.js";import"./DisabledMixin-fbiLTt1z.js";import"./KeyDownHandledMixin-C-TUEG1Q.js";import"./index-BAndwYFW.js";import"./button.utils-rNW36Ji7.js";import"./index-CEMlnyZJ.js";import"./index-DTrDRi1E.js";import"./if-defined-CcLsQsCq.js";import"./index-E-HxBEa2.js";import"./IconNameMixin-DPkRvt5Q.js";import"./index-nhcMgldk.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-Ds7qPExn.js";import"./linksimple.component-QNDd3Y_-.js";import"./DataAriaLabelMixin-F_qF3igS.js";import"./link.constants-BW9_n-4F.js";import"./index-BNkDDT40.js";import"./popover.component-BM1Ac3-w.js";import"./BackdropMixin-DjC6jDwl.js";import"./popover.constants-BXXJvqk9.js";import"./index-BL9jYc0X.js";import"./v4-CmTdKEVZ.js";import"./input.component-Do98jjGc.js";import"./directive-Ctav8iJK.js";import"./index-1POYyp6c.js";import"./formfieldwrapper.component-D-pSsTfD.js";import"./formfieldwrapper.constants-BjDZM3sR.js";import"./FormInternalsMixin-BA5P1Osz.js";import"./input.constants-BzdslCo4.js";import"./index-D1aLW-6k.js";import"./index-BqaSPv-Y.js";import"./radio.constants-B0DZs2TJ.js";import"./index-U4aVLzOZ.js";import"./toggle.constants-DjJIfmEJ.js";import"./ControlTypeMixin-CjP9XwYR.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
