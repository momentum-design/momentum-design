import{k as d}from"./iframe-D_OBz_bG.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-DzZ6eEjy.js";import"./index-CPOW6eL_.js";import"./index-030gplBJ.js";import"./index-CSN79H25.js";import"./index-Pw73JDxg.js";import"./index-DfYY0S2s.js";import"./index-DDjM3HQX.js";import"./index-BXkrFiZT.js";import"./index-C1nAKndv.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-B6CDaYuY.js";import"./buttonsimple.component-Ceyq7I6B.js";import"./DisabledMixin-DDjLwMnk.js";import"./KeyDownHandledMixin-Bf7ScF39.js";import"./index-qc1F6ytw.js";import"./button.utils-rNW36Ji7.js";import"./index-BXNYm2SZ.js";import"./index-DTrDRi1E.js";import"./if-defined-B1zBGTv3.js";import"./index-B3GOuy8M.js";import"./IconNameMixin-D0FgGs2k.js";import"./index-DzRtrGOl.js";import"./badge.constants-Bbp8rUbZ.js";import"./linksimple.component-Cvp_cRZU.js";import"./DataAriaLabelMixin-CrMsxxhA.js";import"./link.constants-ZLKRSKZO.js";import"./index-BouxnyFg.js";import"./popover.component-zxg-yDDh.js";import"./BackdropMixin-D7CNQAPi.js";import"./popover.constants-DoO5igJ1.js";import"./index-A18oPdSP.js";import"./v4-CmTdKEVZ.js";import"./input.component-SiiqQULa.js";import"./directive-Ctav8iJK.js";import"./index-BjDo4pCs.js";import"./formfieldwrapper.component-Dl40hP0S.js";import"./formfieldwrapper.constants-B6PA0dqn.js";import"./FormInternalsMixin-owIM5H5M.js";import"./input.constants-ChOR9n4q.js";import"./index-Bu6lg6bJ.js";import"./index-COaLUGD6.js";import"./radio.constants-BcqKKy37.js";import"./index-0b83RDnP.js";import"./toggle.constants-Dy_3qy0r.js";import"./ControlTypeMixin-j4080Lwi.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
