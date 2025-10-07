import{k as d}from"./iframe-C9ziMOfg.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-DbVRkeHC.js";import"./index-Bpv3QRSl.js";import"./index-DyKEZkWi.js";import"./index-B4pni22S.js";import"./index-BFm8i0bc.js";import"./index-CB_tLyis.js";import"./index-DYgFCd7-.js";import"./index-D79v0hH1.js";import"./index-Bve2JtVH.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-BPUw42-p.js";import"./buttonsimple.component-DLBbqUc-.js";import"./keys-hFXe221I.js";import"./DisabledMixin-jcMExzk_.js";import"./TabIndexMixin-B_DR2DU9.js";import"./button.utils-rNW36Ji7.js";import"./index-BGDsqEaU.js";import"./index-DYoDbKlx.js";import"./index-DTrDRi1E.js";import"./if-defined-Ci9mZRDF.js";import"./index-B_Jg4NCp.js";import"./IconNameMixin-BrpWHbku.js";import"./index-CF42Q-tM.js";import"./badge.constants-k9HSCRNA.js";import"./linksimple.component-CnEZ0Sk5.js";import"./DataAriaLabelMixin-tN7xFgo0.js";import"./link.constants-e2VRYt35.js";import"./index-Cd5cxzJm.js";import"./popover.component-DaSBSdIU.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-BIXjeH0L.js";import"./index-Ci_rJSTd.js";import"./v4-CmTdKEVZ.js";import"./input.component-Bzu2VSMg.js";import"./directive-Ctav8iJK.js";import"./index-B2wtpefw.js";import"./formfieldwrapper.component-Bj1YI7gc.js";import"./FormInternalsMixin-BJy-GHFY.js";import"./query-DXShiZ7f.js";import"./input.constants-D99PUaIh.js";import"./index-fuwDzpEG.js";import"./index-DM6miQiE.js";import"./radio.constants-fCLh3hIT.js";import"./index-C8A2RC1D.js";import"./toggle.constants-DixUE7pA.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
