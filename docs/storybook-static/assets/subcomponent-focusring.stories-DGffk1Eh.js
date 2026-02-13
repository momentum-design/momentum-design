import{k as d}from"./iframe-CqwCe3Q0.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-C19Sfj5I.js";import"./index-CQWkrZS_.js";import"./index-DrgCES0o.js";import"./index-C7_-x8i2.js";import"./index-ByGH73qA.js";import"./index-Chsp_v-8.js";import"./index-CawCQzjB.js";import"./index-DW-rUSDw.js";import"./index-BnHKZJkT.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-DlQLMH2u.js";import"./buttonsimple.component-COLuKxW2.js";import"./DisabledMixin-BRuycW9g.js";import"./KeyDownHandledMixin-Bkh1Su5p.js";import"./index-DESrcBLY.js";import"./button.utils-rNW36Ji7.js";import"./index-DRulujdx.js";import"./index-DTrDRi1E.js";import"./if-defined-B0TSLC8I.js";import"./index-BXgOYmTh.js";import"./IconNameMixin-DzFtIjVD.js";import"./index-CrP0N4Pb.js";import"./badge.constants-Dju43_QT.js";import"./linksimple.component-CTsY7UMn.js";import"./DataAriaLabelMixin-hRansJtn.js";import"./link.constants-DjFQ84qL.js";import"./index-zOKbbMXe.js";import"./popover.component-DE9NPdOb.js";import"./BackdropMixin-BYVSUiL3.js";import"./popover.constants-Bb23WcUU.js";import"./index-DvPP2JBR.js";import"./v4-CmTdKEVZ.js";import"./input.component-D1Ga5-Oa.js";import"./directive-Ctav8iJK.js";import"./index-BoqokdDn.js";import"./formfieldwrapper.component-D6zfMnXH.js";import"./formfieldwrapper.constants-Cd3rVNgt.js";import"./FormInternalsMixin-BH8nwPtm.js";import"./input.constants-eZ5JsV4Q.js";import"./index-ro-Ip-6Z.js";import"./index-DzjHR3Ir.js";import"./radio.constants-kRuDAmU8.js";import"./index-TUh5u3sg.js";import"./toggle.constants-T2F7857L.js";import"./ControlTypeMixin-7XvloUtp.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
