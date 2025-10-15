import{k as d}from"./iframe-D7ojHcDY.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-DJoupV1n.js";import"./index-DT09an5i.js";import"./index-Bq96R-h5.js";import"./index-I77ubFN8.js";import"./index-BBjsy6NJ.js";import"./index-BpsWapMT.js";import"./index-DMmWK6B-.js";import"./index-BmGIwfxk.js";import"./index-AE7XCBw6.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-Dg3nNDMo.js";import"./buttonsimple.component-BUxT79Gg.js";import"./keys-hFXe221I.js";import"./DisabledMixin-CRYIZU9q.js";import"./TabIndexMixin-B5U5o4yE.js";import"./button.utils-rNW36Ji7.js";import"./index-DEeT7GJd.js";import"./index-BVPWEBMj.js";import"./index-DTrDRi1E.js";import"./if-defined-BS4u7X0m.js";import"./index-BInytBrJ.js";import"./IconNameMixin-Bb546RjP.js";import"./index-fMKL1NnB.js";import"./badge.constants-Dcgz7GoA.js";import"./linksimple.component-DNu3dkRr.js";import"./DataAriaLabelMixin-D_naP_x4.js";import"./link.constants-DrSWUquw.js";import"./index-BbVbYshc.js";import"./popover.component-DQAFYQYE.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-DmZOp8zy.js";import"./index-ltGwazI3.js";import"./v4-CmTdKEVZ.js";import"./input.component-DHr8klyg.js";import"./directive-Ctav8iJK.js";import"./index-CoOABYN6.js";import"./formfieldwrapper.component-BzpRQhgw.js";import"./formfieldwrapper.constants-CQftVIFF.js";import"./FormInternalsMixin-ChBFABbf.js";import"./query-DXShiZ7f.js";import"./input.constants-DykgkYXP.js";import"./index-yllqrXC3.js";import"./index-qlvzcsBZ.js";import"./radio.constants-By3L_1Q0.js";import"./index-A1n0EOKA.js";import"./toggle.constants-DIBorXhz.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const at=["Example","FocusRingWithinHost"];export{t as Example,o as FocusRingWithinHost,at as __namedExportsOrder,it as default};
