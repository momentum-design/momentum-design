import{k as d}from"./iframe-ACfHlgAt.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-CmISrYbS.js";import"./index-BTIMhpHx.js";import"./index-wSISREdG.js";import"./index-B5Lkz606.js";import"./index-hIxZI6iU.js";import"./index-CuUwxLnx.js";import"./index-CsacYeq5.js";import"./index-ZaF3QfrX.js";import"./index-C1wOMqm8.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-HcBbIjIR.js";import"./buttonsimple.component-BDxGeVsb.js";import"./TabIndexMixin-BOdQCpqa.js";import"./DisabledMixin-CgeF7q_1.js";import"./button.utils-rNW36Ji7.js";import"./index-SmfaqG6U.js";import"./index-B5OxTlB5.js";import"./index-DTrDRi1E.js";import"./if-defined-u6dUZ6oa.js";import"./index-Bc5OMU4f.js";import"./IconNameMixin-B6znGo7a.js";import"./index-Djocf-y-.js";import"./badge.constants-Blyu0jPz.js";import"./linksimple.component-XpdwT6zG.js";import"./DataAriaLabelMixin-0jNUc5dP.js";import"./link.constants-GXpser9a.js";import"./index-CBMAsi-2.js";import"./base-DIkkzJ-c.js";import"./popover.component-DeO2v1Xo.js";import"./BackdropMixin-CYmMzNhk.js";import"./index-V-DUfJrY.js";import"./v4-CmTdKEVZ.js";import"./input.component-Bwoqj0AD.js";import"./directive-Ctav8iJK.js";import"./index-BMA0S53x.js";import"./formfieldwrapper.component-CHcK-jlW.js";import"./formfieldwrapper.constants-Cswf4D4X.js";import"./FormInternalsMixin-Wl-jr6aR.js";import"./query-BPxBhMfF.js";import"./input.constants-TNrGMv-H.js";import"./index-DKLnbJ4p.js";import"./index-B0oHHZPr.js";import"./radio.constants-BWt-qaFM.js";import"./index-D9R3h5EI.js";import"./toggle.constants-DSD8pIed.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
