import{k as d}from"./iframe-5_Zofx-s.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-ClGudl5J.js";import"./index-dKP_yq0y.js";import"./index-BxxBXDQV.js";import"./index-B01dCqee.js";import"./index-DcxCpWQG.js";import"./index-BEh-9XkQ.js";import"./index-Bv1VzjxM.js";import"./index-DuMeJ6pN.js";import"./index-B5gmNXXD.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-B1YgcC8N.js";import"./buttonsimple.component-Bo2li7IW.js";import"./keys-hFXe221I.js";import"./DisabledMixin-ix_5w-H5.js";import"./TabIndexMixin-BOFxZ9yP.js";import"./button.utils-rNW36Ji7.js";import"./index-BcUHjabB.js";import"./index-CtvQTQMC.js";import"./index-DTrDRi1E.js";import"./if-defined-COqBqGKO.js";import"./index-CfAH8lHE.js";import"./IconNameMixin-DzqmhgBU.js";import"./index-DB6v4U9x.js";import"./badge.constants-B3JvxLYy.js";import"./linksimple.component-B22-4XzH.js";import"./DataAriaLabelMixin-Doxi_5D_.js";import"./link.constants-BmzdSAp3.js";import"./index-C0M1JJLc.js";import"./popover.component-Czy4ctab.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-DkHMciZi.js";import"./index-B8wGOemS.js";import"./v4-CmTdKEVZ.js";import"./input.component-DMkMtRpy.js";import"./directive-Ctav8iJK.js";import"./index-mPqbbQtN.js";import"./formfieldwrapper.component-DupRscxy.js";import"./FormInternalsMixin-BKOErRQw.js";import"./query-DXShiZ7f.js";import"./input.constants-GwvmFIkn.js";import"./index-ya3fB1Mg.js";import"./index-BRypSt2Z.js";import"./radio.constants-BJO78vNY.js";import"./index-e8UKJI6M.js";import"./toggle.constants-C7ofK9oP.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
