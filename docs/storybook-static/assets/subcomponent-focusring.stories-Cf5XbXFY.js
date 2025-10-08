import{k as d}from"./iframe-DzqYamvY.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-DVmokl_z.js";import"./index-CywcJtKP.js";import"./index-D5OtWpeb.js";import"./index-DE_zjGXE.js";import"./index-DpcIN5tC.js";import"./index-CuweaHMN.js";import"./index-BF9KY7hc.js";import"./index-B63OsyFr.js";import"./index-Cl--HiTc.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-JM48jMh5.js";import"./buttonsimple.component-BMAPDSrY.js";import"./keys-hFXe221I.js";import"./DisabledMixin-CpkDI-ME.js";import"./TabIndexMixin-CNVX9vbi.js";import"./button.utils-rNW36Ji7.js";import"./index-CaEHn3uW.js";import"./index-BTP5H-oT.js";import"./index-DTrDRi1E.js";import"./if-defined-B9rnUTwp.js";import"./index-BeTuAVfE.js";import"./IconNameMixin-C_rnZhjQ.js";import"./index-BErQTl-r.js";import"./badge.constants-DT835ByS.js";import"./linksimple.component-J8x7gHq7.js";import"./DataAriaLabelMixin-07IRiZHm.js";import"./link.constants-yJLtvBAt.js";import"./index-Jy-u2t89.js";import"./popover.component-DFpP0uJF.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-B9sShFWL.js";import"./index-BcpSaVSs.js";import"./v4-CmTdKEVZ.js";import"./input.component-CuZ75eyE.js";import"./directive-Ctav8iJK.js";import"./index-CsmfXr1s.js";import"./formfieldwrapper.component-BAf6ovel.js";import"./FormInternalsMixin-BRm3A9Xu.js";import"./query-DXShiZ7f.js";import"./input.constants-CpT-XkeP.js";import"./index-Deb_GHRt.js";import"./index-B7wkTwDe.js";import"./radio.constants-GcxSWaUN.js";import"./index-APXzi980.js";import"./toggle.constants-CVUhAdcK.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
