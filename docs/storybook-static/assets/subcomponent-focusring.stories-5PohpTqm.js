import{k as d}from"./iframe-CUghFjdA.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-DwlzuMZ2.js";import"./index-AvoNpL89.js";import"./index-39svIYLM.js";import"./index-DuaRFfyJ.js";import"./index-Dfhib5sz.js";import"./index-B0k_epVT.js";import"./index-Bs4JKvUh.js";import"./index-C6XDwGzy.js";import"./index-_PGRDVe4.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CehbKb1x.js";import"./buttonsimple.component-Bf7JySwp.js";import"./keys-hFXe221I.js";import"./DisabledMixin-HSK_t65h.js";import"./TabIndexMixin-G4Hua4Vu.js";import"./button.utils-rNW36Ji7.js";import"./index-k8oNqj63.js";import"./index-CJ6gGTSC.js";import"./index-DTrDRi1E.js";import"./if-defined-eyDUxJLO.js";import"./index-BWQjjW7J.js";import"./IconNameMixin-D595DvWQ.js";import"./index-Dh-T0w0a.js";import"./badge.constants-BtRtl9-0.js";import"./linksimple.component-BAlr1Cf4.js";import"./DataAriaLabelMixin-C98iEc92.js";import"./link.constants-Dv_dWsOt.js";import"./index-ClEq9B_7.js";import"./popover.component-B772IDeB.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-D8acTXmY.js";import"./index-BaJmbiS_.js";import"./v4-CmTdKEVZ.js";import"./input.component-BduxIKP9.js";import"./directive-Ctav8iJK.js";import"./index-CJm9JSgm.js";import"./formfieldwrapper.component-KO9kryvP.js";import"./FormInternalsMixin-BxKUwAHl.js";import"./query-DXShiZ7f.js";import"./input.constants-D9L92WNq.js";import"./index-WuHKyYwc.js";import"./index-DgAG9eSD.js";import"./radio.constants-D8O6zHgU.js";import"./index-D0t9CQJ_.js";import"./toggle.constants-PeEgg6A2.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
