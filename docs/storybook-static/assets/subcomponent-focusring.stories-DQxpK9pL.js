import{k as p}from"./iframe-0HVjsxx2.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-D1spIdNP.js";import"./index-DQk0zvAB.js";import"./index-B7qjNWi4.js";import"./index-CDMdA4ff.js";import"./index-DiXZIrON.js";import"./index-kQ58csEF.js";import"./index-Ctgm8WeQ.js";import"./index-C-xwKd95.js";import"./index-DOtQxgz-.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-m_Ls23Rv.js";import"./buttonsimple.component-D5Ep8JpP.js";import"./DisabledMixin-DmXZKRQb.js";import"./KeyDownHandledMixin-TMs2ITqw.js";import"./index-DEZAMiau.js";import"./button.utils-rNW36Ji7.js";import"./index-BjAK6fzr.js";import"./index-DTrDRi1E.js";import"./index-BvFU1Pzs.js";import"./IconNameMixin-kP1OG2_2.js";import"./index-B1gp5dMg.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-EfWCfMop.js";import"./linksimple.component-Dx5PTkBZ.js";import"./DataAriaLabelMixin-B7Mf4XDy.js";import"./link.constants-NYLEh7aH.js";import"./index-rAWkAjCa.js";import"./index-pDc5vmAQ.js";import"./popover.component-HD8-GG2P.js";import"./BackdropMixin-CJCU5qMH.js";import"./popover.constants-C0Zq9_Tm.js";import"./input.component-DvthAHYs.js";import"./index-DmBqYEQi.js";import"./index-BFdlVR2x.js";import"./statusmessage.constants-CENKFbWN.js";import"./formfieldwrapper.component-2jqpvPpc.js";import"./formfieldwrapper.constants-DqIZVwSn.js";import"./FormInternalsMixin-CgPmKVeH.js";import"./input.constants-Dn6lB05K.js";import"./index-9D_tcErH.js";import"./index-aznniXHb.js";import"./radio.constants-BZPCZNaQ.js";import"./index-AT75GEQW.js";import"./toggle.constants-CoT3H2F4.js";import"./ControlTypeMixin-Cm-pP7ww.js";const et={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const it=["Example","FocusRingWithinHost"];export{t as Example,o as FocusRingWithinHost,it as __namedExportsOrder,et as default};
