import{k as d}from"./iframe-BKJ51hQM.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-Ba7TUpD0.js";import"./index-CaaKZzMG.js";import"./index-BxUoa_0M.js";import"./index-BOUHRbnc.js";import"./index-ComtYKnp.js";import"./index-C4HrM0J-.js";import"./index-C_fsPhCY.js";import"./index-faderJUB.js";import"./index-B1VRq945.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CEROEUrv.js";import"./buttonsimple.component-KTE97oP8.js";import"./keys-hFXe221I.js";import"./DisabledMixin-CnnibooD.js";import"./TabIndexMixin-ily2Utfw.js";import"./button.utils-rNW36Ji7.js";import"./index-BBQ_6ykY.js";import"./index-DPBdYyMW.js";import"./index-DTrDRi1E.js";import"./if-defined-D70R_B9V.js";import"./index-CprnGGvm.js";import"./IconNameMixin-BjFZILZE.js";import"./index-L3ISTbLV.js";import"./badge.constants-DDx_u9Xz.js";import"./linksimple.component-CQ2xjpBV.js";import"./DataAriaLabelMixin-DXaALHd5.js";import"./link.constants-CBjYPk9F.js";import"./index-BqsUasDE.js";import"./popover.component-dqhteWsf.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-De56hHnv.js";import"./index-pNGN32b0.js";import"./v4-CmTdKEVZ.js";import"./input.component-DYCGruQd.js";import"./directive-Ctav8iJK.js";import"./index-DhkrKP1l.js";import"./formfieldwrapper.component-D_IJxfRP.js";import"./FormInternalsMixin-BWpa4LNI.js";import"./query-DXShiZ7f.js";import"./input.constants-XJ1dGAVk.js";import"./index-BC_kgaHT.js";import"./index-DFQtLY57.js";import"./radio.constants-CwTwCjLQ.js";import"./index-zSAU1zSJ.js";import"./toggle.constants-DhjbRK-G.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
