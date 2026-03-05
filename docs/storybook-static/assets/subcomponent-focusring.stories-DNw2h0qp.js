import{k as d}from"./iframe-DsWoryHe.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-CR1EQvns.js";import"./index-D9n_R3Jc.js";import"./index-BbGqKUZw.js";import"./index-CWabPCIR.js";import"./index-CsQo5ZYT.js";import"./index-k0-SMlbI.js";import"./index-Cn8hgIKO.js";import"./index-CE4UUAvC.js";import"./index-Cji4LIYp.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-D5cDGCC6.js";import"./buttonsimple.component-DhA4IjhU.js";import"./DisabledMixin-B9yKoiUn.js";import"./KeyDownHandledMixin-BF4r5Kkx.js";import"./index-GGaP-Pa6.js";import"./button.utils-rNW36Ji7.js";import"./index-lON8L3bz.js";import"./index-DTrDRi1E.js";import"./if-defined-CG4Y3qK1.js";import"./index-CkcdR9ok.js";import"./IconNameMixin-CRrmK536.js";import"./index-DZuUvVVx.js";import"./badge.constants-C2PxCVce.js";import"./linksimple.component-BlwoI0Kp.js";import"./DataAriaLabelMixin-9WnyDwQy.js";import"./link.constants-nUxdwyLW.js";import"./index-DfKt8S0i.js";import"./popover.component-DFc__XFi.js";import"./BackdropMixin-B8k75P2r.js";import"./popover.constants-BWJNAg7I.js";import"./index-B2f-z9SD.js";import"./v4-CmTdKEVZ.js";import"./input.component-CIOYMdVo.js";import"./directive-Ctav8iJK.js";import"./index-BpaX8xKe.js";import"./formfieldwrapper.component-CGyWiWU_.js";import"./formfieldwrapper.constants-DyzdpwzF.js";import"./FormInternalsMixin-CP3x556m.js";import"./input.constants-C6USv4ok.js";import"./index-CYnILYAd.js";import"./index-skZThrit.js";import"./radio.constants-DoMt_Hd_.js";import"./index-RXfCFVPC.js";import"./toggle.constants-BqisOQbz.js";import"./ControlTypeMixin-CgnMbVdj.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
    <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-button>Button</mdc-button>
      <mdc-avatarbutton
        initials="MD"
        size="48"
        src="https://picsum.photos/id/63/256"
        aria-label="Avatar Button"
      ></mdc-avatarbutton>
      <mdc-tab icon-name="placeholder-bold" tabindex="0" text="Tab 1" variant="pill">
        <mdc-badge slot="badge" type="counter" counter="1"></mdc-badge>
      </mdc-tab>
    </div>
  `},o={argTypes:{...p(["shape"])},render:()=>d` <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-link icon-name="placeholder-bold"><a href="#">Link</a></mdc-link>
      <mdc-input value="Input" trailing-button></mdc-input>
      <mdc-radio name="radio" value="radio" label="Radio"></mdc-radio>
      <mdc-checkbox label="Checkbox"></mdc-checkbox>
      <mdc-toggle label="Toggle"></mdc-toggle>
    </div>`};var e,r,i;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
        <mdc-badge slot="badge" type="counter" counter="1"></mdc-badge>
      </mdc-tab>
    </div>
  \`
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var a,m,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const it=["Example","FocusRingWithinHost"];export{t as Example,o as FocusRingWithinHost,it as __namedExportsOrder,rt as default};
