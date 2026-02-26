import{k as d}from"./iframe-B0GLZx71.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-CHf92Gj_.js";import"./index-hfWHVumP.js";import"./index-CtNCPh6K.js";import"./index-IuriPd0N.js";import"./index-Bnzt6M8S.js";import"./index-BUQEQWMv.js";import"./index-DUbfX4lC.js";import"./index-DE3Ffs8X.js";import"./index-Cn44icVq.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-BMCPmfwo.js";import"./buttonsimple.component-CQ-hy_4V.js";import"./DisabledMixin-DDkP--Xd.js";import"./KeyDownHandledMixin-DggBWhai.js";import"./index-BOeCKDkX.js";import"./button.utils-rNW36Ji7.js";import"./index-CX3WNM4k.js";import"./index-DTrDRi1E.js";import"./if-defined-CLQPwvwC.js";import"./index-DMEqsypz.js";import"./IconNameMixin-BcV59Fd4.js";import"./index-BNrUcszw.js";import"./badge.constants-B2xSlQLT.js";import"./linksimple.component-Dd4I-gVV.js";import"./DataAriaLabelMixin-DrW1rpFN.js";import"./link.constants-Df4RacQX.js";import"./index-D-YVHckC.js";import"./popover.component-B9GqNTPM.js";import"./BackdropMixin-IEg3y-JH.js";import"./popover.constants-R0T_vP8J.js";import"./index-DiT-VE6X.js";import"./v4-CmTdKEVZ.js";import"./input.component-BQ9fCvuv.js";import"./directive-Ctav8iJK.js";import"./index-Cs_Yg2kY.js";import"./formfieldwrapper.component-l-J2rZUJ.js";import"./formfieldwrapper.constants-C64nU1od.js";import"./FormInternalsMixin-jJCk0K3a.js";import"./input.constants-5FuK9Iak.js";import"./index-OvMdgann.js";import"./index-0scu5c9F.js";import"./radio.constants-CK7PobCE.js";import"./index-wAl9HJdm.js";import"./toggle.constants-BFHjU7Po.js";import"./ControlTypeMixin-BZrBCImz.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
