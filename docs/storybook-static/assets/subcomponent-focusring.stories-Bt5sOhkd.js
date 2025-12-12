import{k as d}from"./iframe-CBhtCltk.js";import{h as p}from"./utils-D6nie9pS.js";import"./index-CR97pz9t.js";import"./index-Cvpv5gZH.js";import"./index-B1kd5Bf2.js";import"./index-DcdcJ9je.js";import"./index-KprACAKh.js";import"./index-BVlh2s6f.js";import"./index-EaOE9MVl.js";import"./index-BqijHNVa.js";import"./index-D0X89uEI.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-C-hay0FV.js";import"./buttonsimple.component-D3Lnkf39.js";import"./TabIndexMixin-NmQKMLp7.js";import"./DisabledMixin-CwbipW_f.js";import"./button.utils-rNW36Ji7.js";import"./index-Bmp3b_DV.js";import"./index-DxZr9Rp5.js";import"./index-DTrDRi1E.js";import"./if-defined-D9uZU33L.js";import"./index-NjM9y31f.js";import"./IconNameMixin-CCfyPCOi.js";import"./index-DzX9loVo.js";import"./badge.constants-DJ7NpA7A.js";import"./linksimple.component-LFEyuWUY.js";import"./DataAriaLabelMixin-CEHNes8k.js";import"./link.constants-BmVPwh7Z.js";import"./index-Cbf7snHL.js";import"./base-DIkkzJ-c.js";import"./popover.component-5kB4kAoJ.js";import"./BackdropMixin-DmZd3V3u.js";import"./popover.constants-Do622m-w.js";import"./index-BPAzlUCk.js";import"./v4-CmTdKEVZ.js";import"./input.component-D6s9gq4g.js";import"./directive-Ctav8iJK.js";import"./index-BosaVD1T.js";import"./formfieldwrapper.component-BSUNOB1r.js";import"./formfieldwrapper.constants-qifjnvBp.js";import"./FormInternalsMixin-DI8LDMGT.js";import"./query-BPxBhMfF.js";import"./input.constants-RTPe-x46.js";import"./index-CxTxzgAP.js";import"./index-CNb2fJdb.js";import"./radio.constants-C0Kr2kII.js";import"./index-BUxjeqzR.js";import"./toggle.constants-WtMv91Dx.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
