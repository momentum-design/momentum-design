import{k as d}from"./iframe-BRqcXwoo.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-BD99F07H.js";import"./index-BHYtXn49.js";import"./index-DaPVPv2-.js";import"./index-z3RptJlO.js";import"./index-Ca_6_Txv.js";import"./index-BC_VyEr5.js";import"./index-Dwqj2c0U.js";import"./index-CNLNHOKl.js";import"./index-C4ORAjt-.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-Dkn1xoYG.js";import"./buttonsimple.component-e8SW3nIi.js";import"./DisabledMixin-MRxWtlyu.js";import"./KeyDownHandledMixin-CG-B7sf7.js";import"./index-BGL0QfrZ.js";import"./button.utils-rNW36Ji7.js";import"./index-Cj3omeN_.js";import"./index-DTrDRi1E.js";import"./if-defined-BJKCYMNO.js";import"./index-B5MfkqyB.js";import"./IconNameMixin-BujFEbLw.js";import"./index-Bz2YXkah.js";import"./badge.constants-DNP-W00W.js";import"./linksimple.component-D0k1BPvd.js";import"./DataAriaLabelMixin-CKrPoW62.js";import"./link.constants-FsNIw6FZ.js";import"./index-CVGoNNQa.js";import"./popover.component-DzZbPPLl.js";import"./BackdropMixin-CRfvYDCd.js";import"./popover.constants-Cu7rgEpR.js";import"./index-DuJyZzi4.js";import"./v4-CmTdKEVZ.js";import"./input.component-B50Gkyje.js";import"./directive-Ctav8iJK.js";import"./index-fUTc-Uow.js";import"./formfieldwrapper.component-D4MTJpa7.js";import"./formfieldwrapper.constants-WFR8Tzpb.js";import"./FormInternalsMixin-CBfwyUrS.js";import"./input.constants-DGJaKOHR.js";import"./index-TMgWEeXk.js";import"./index-CiOU8icv.js";import"./radio.constants-D-5oYCcj.js";import"./index-BrKkvp5j.js";import"./toggle.constants-BUSDoQAG.js";import"./ControlTypeMixin-BiaznRr-.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
