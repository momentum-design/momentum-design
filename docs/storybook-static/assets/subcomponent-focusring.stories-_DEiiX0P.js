import{k as d}from"./iframe-Bqf88308.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-FaBbnpsO.js";import"./index-DdPwe868.js";import"./index-DxgvNVn1.js";import"./index-CkoO2pFp.js";import"./index-kUPx1LRF.js";import"./index-BkoshLjT.js";import"./index-Jok7erGI.js";import"./index-DTLVJqEJ.js";import"./index-DXJ7fdnG.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-DXoDWDqo.js";import"./buttonsimple.component-fIOro7uk.js";import"./keys-hFXe221I.js";import"./DisabledMixin-BwGISW2n.js";import"./TabIndexMixin-BsWEKPpY.js";import"./button.utils-rNW36Ji7.js";import"./index-DXecxXAr.js";import"./index-BJ3Sr74G.js";import"./index-DTrDRi1E.js";import"./if-defined-C0m_AGun.js";import"./index-vi1VpAqJ.js";import"./IconNameMixin-Djapols9.js";import"./index-P3qL5xz4.js";import"./badge.constants-Bju0k0i7.js";import"./linksimple.component-sYJ2eWq8.js";import"./DataAriaLabelMixin-Dcj_NjFP.js";import"./link.constants-BRjxu7aJ.js";import"./index-D63UYWrx.js";import"./popover.component-BopJpw99.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-7xpWO8I-.js";import"./index-Z5kyTy4d.js";import"./v4-CmTdKEVZ.js";import"./input.component-B8PWEag1.js";import"./directive-Ctav8iJK.js";import"./index-BxaA1xRi.js";import"./formfieldwrapper.component-BxYT_7iW.js";import"./FormInternalsMixin-C43UBdI6.js";import"./query-DXShiZ7f.js";import"./input.constants-RlzTrFL7.js";import"./index-DG1vCWry.js";import"./index-tCDtFuY6.js";import"./radio.constants-NHeX6IRO.js";import"./index-DXYwwiol.js";import"./toggle.constants-B-7YQOaM.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
