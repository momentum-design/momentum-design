import{k as d}from"./iframe-DoNkonBK.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-1OHNifC4.js";import"./index-CyZyQzyA.js";import"./index-BqQd6u7r.js";import"./index-D9mvOTq8.js";import"./index-BJXbYgNL.js";import"./index-DVGR9-Ai.js";import"./index-CxrNs4pI.js";import"./index-OSIUk5MI.js";import"./index-CMhUAsfm.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CUXnbZWa.js";import"./buttonsimple.component-DnM31Gat.js";import"./DisabledMixin-CrQfIA6t.js";import"./KeyDownHandledMixin-CHVndGqH.js";import"./index-BOEpt90i.js";import"./button.utils-rNW36Ji7.js";import"./index-ChETWKIm.js";import"./index-DTrDRi1E.js";import"./if-defined-B36DAkUP.js";import"./index-BD1m1UIL.js";import"./IconNameMixin-Cwwdx_Br.js";import"./index-BbihIlLj.js";import"./badge.constants-BxoXbUj6.js";import"./linksimple.component-5w6_GCix.js";import"./DataAriaLabelMixin-BGH72T46.js";import"./link.constants-DeGWtkgD.js";import"./index-QLKcSaEB.js";import"./popover.component-CPMBaGtO.js";import"./BackdropMixin-DhDi1luQ.js";import"./popover.constants-B9PQSOY9.js";import"./index-CqdCAA0Q.js";import"./v4-CmTdKEVZ.js";import"./input.component-BRYDYRBg.js";import"./directive-Ctav8iJK.js";import"./index-XSN66Wj0.js";import"./formfieldwrapper.component-DINNXoO0.js";import"./formfieldwrapper.constants-Bqn78fRr.js";import"./FormInternalsMixin-CD_aVtDf.js";import"./input.constants-BgZ0kUU9.js";import"./index-CyZHfdZh.js";import"./index-DpSCxgnF.js";import"./radio.constants-BuvMYT7u.js";import"./index-DEiHPT4K.js";import"./toggle.constants-CsbfSglP.js";import"./ControlTypeMixin-Cq8VshPZ.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
