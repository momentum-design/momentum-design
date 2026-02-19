import{k as d}from"./iframe-CwHTiZJN.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-DDl8sHRr.js";import"./index-DOMFif7H.js";import"./index-D4ThCa45.js";import"./index-DSccXv3W.js";import"./index-DFWP5hNL.js";import"./index-JwIceeKG.js";import"./index-BFVA_KiW.js";import"./index-CN02QngG.js";import"./index-Br3BC6ns.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-C-UfOBWB.js";import"./buttonsimple.component-ByWHaeLA.js";import"./DisabledMixin-DQyYsE82.js";import"./KeyDownHandledMixin-Bi1OpRtF.js";import"./index-C4lrFjaQ.js";import"./button.utils-rNW36Ji7.js";import"./index-C25PLri4.js";import"./index-DTrDRi1E.js";import"./if-defined-cR5VEbI-.js";import"./index-ZSv8Uxo7.js";import"./IconNameMixin-Bu2Vh7fw.js";import"./index-DSbTwgOi.js";import"./badge.constants-Dh-eGRPz.js";import"./linksimple.component-BO5Z1H0H.js";import"./DataAriaLabelMixin-DZkBLSLT.js";import"./link.constants-CLRpavVY.js";import"./index-CsE5tdP5.js";import"./popover.component-D4Y1Pkpc.js";import"./BackdropMixin-BHavjDL8.js";import"./popover.constants-BfA1Xze9.js";import"./index-CJlvDD_-.js";import"./v4-CmTdKEVZ.js";import"./input.component-DC2P3tGP.js";import"./directive-Ctav8iJK.js";import"./index-YZty-EXJ.js";import"./formfieldwrapper.component-DmE-UnHn.js";import"./formfieldwrapper.constants-DtQHVjJp.js";import"./FormInternalsMixin-R3m_-J0w.js";import"./input.constants-CPpebx6R.js";import"./index-CW7_ivne.js";import"./index-Q1rlZkQa.js";import"./radio.constants-DkBuN8tw.js";import"./index-DqEDHtQ_.js";import"./toggle.constants-BkILPjhY.js";import"./ControlTypeMixin-pYlK6YSw.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
