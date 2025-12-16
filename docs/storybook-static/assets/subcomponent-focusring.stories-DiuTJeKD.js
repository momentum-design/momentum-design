import{k as d}from"./iframe-CqrI13U9.js";import{h as p}from"./utils-D6nie9pS.js";import"./index-DTqic_Td.js";import"./index-D4dzTy8r.js";import"./index-CbDaCYwL.js";import"./index-DbC-XMMW.js";import"./index-AxyL0oz_.js";import"./index-CVLPdS98.js";import"./index-7sk8cLAs.js";import"./index-DyKuy7qc.js";import"./index-CkATiqbS.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-03COms2Y.js";import"./buttonsimple.component-C0XShElB.js";import"./TabIndexMixin-cy2_g44-.js";import"./DisabledMixin-DlWJY35l.js";import"./button.utils-rNW36Ji7.js";import"./index-Bwut11Ud.js";import"./index-CeZqJBJZ.js";import"./index-DTrDRi1E.js";import"./if-defined-Cxn4X8l_.js";import"./index-ChePAQx5.js";import"./IconNameMixin-C-ohK6SQ.js";import"./index-BMGon_0X.js";import"./badge.constants-Cd5lNEAf.js";import"./linksimple.component-CP-Nkaqv.js";import"./DataAriaLabelMixin-Deqp14ZC.js";import"./link.constants-DFTH45oE.js";import"./index-D4HqM3w_.js";import"./base-DIkkzJ-c.js";import"./popover.component-DlOdf4gZ.js";import"./BackdropMixin-CyfveceT.js";import"./popover.constants-B-drNLuh.js";import"./index-DyFAfT9A.js";import"./v4-CmTdKEVZ.js";import"./input.component-Bu8-gS3U.js";import"./directive-Ctav8iJK.js";import"./index-BOhFYPSW.js";import"./formfieldwrapper.component-CvVk4FtN.js";import"./formfieldwrapper.constants-CJzTakq_.js";import"./FormInternalsMixin-CpzHQg1q.js";import"./query-BPxBhMfF.js";import"./input.constants-JKDyBjEx.js";import"./index-DbxPJgz6.js";import"./index-co31YXdg.js";import"./radio.constants-D-HCS9pN.js";import"./index-CqhwrAWb.js";import"./toggle.constants-CVX-Qld7.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
