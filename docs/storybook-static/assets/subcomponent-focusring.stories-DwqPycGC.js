import{k as d}from"./iframe-DlYFcFkv.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-XXbF6TDh.js";import"./index-CBgQPaEn.js";import"./index-DrVqZ1ci.js";import"./index-D_pLGG0s.js";import"./index-Bz12lWXc.js";import"./index-DHfLiTDL.js";import"./index-5e7hGTix.js";import"./index-BK2N1lOi.js";import"./index-DONlAEgE.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-D50XUZ2H.js";import"./buttonsimple.component-BCLbFvyA.js";import"./TabIndexMixin-Dbb9xvTN.js";import"./DisabledMixin-CDRkWdxM.js";import"./button.utils-rNW36Ji7.js";import"./index-DXhJXG4u.js";import"./index-CJmbjNWj.js";import"./index-DTrDRi1E.js";import"./if-defined-Ck0VLQTE.js";import"./index-j7s1nv3q.js";import"./IconNameMixin-1_yAQ9sX.js";import"./index-DalzBNft.js";import"./badge.constants-VrM62_FU.js";import"./linksimple.component-Bq10n5WY.js";import"./DataAriaLabelMixin-BzMN2hf5.js";import"./link.constants-4QSFm7x-.js";import"./index-CEUSSPnU.js";import"./base-DIkkzJ-c.js";import"./popover.component-98Mj_MN-.js";import"./BackdropMixin-DZ16Oa_V.js";import"./index-B6fOsvgy.js";import"./v4-CmTdKEVZ.js";import"./input.component-ZBezJLpv.js";import"./directive-Ctav8iJK.js";import"./index-CuG_QStX.js";import"./formfieldwrapper.component-DUKkp2I8.js";import"./formfieldwrapper.constants-CdwW2maq.js";import"./FormInternalsMixin-JpwDI4FA.js";import"./query-BPxBhMfF.js";import"./input.constants-9sPUAMm8.js";import"./index-B2kZDoR5.js";import"./index-Bc-6aRCS.js";import"./radio.constants-D9alPYtv.js";import"./index-DjijFqop.js";import"./toggle.constants-CmjVr-i8.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
