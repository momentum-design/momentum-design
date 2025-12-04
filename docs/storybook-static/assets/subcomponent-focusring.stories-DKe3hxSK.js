import{k as d}from"./iframe-BgYPXA4a.js";import{h as p}from"./utils-D6nie9pS.js";import"./index-yJT_xYwg.js";import"./index-8pW0j_MR.js";import"./index-BRssao-K.js";import"./index-C1j1vCLQ.js";import"./index-BNQPhuYq.js";import"./index-DHthOA2S.js";import"./index-BJAMiBXp.js";import"./index-cUl-A-NH.js";import"./index-BpyQK5km.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-Bss2EqAG.js";import"./buttonsimple.component-BwXd4-Es.js";import"./TabIndexMixin-cV3aLDAV.js";import"./DisabledMixin-ypDYNgI1.js";import"./button.utils-rNW36Ji7.js";import"./index-8NRRzbu7.js";import"./index-BZB1R1_f.js";import"./index-DTrDRi1E.js";import"./if-defined-BUbG2hnJ.js";import"./index-B7TAA85w.js";import"./IconNameMixin-De-RzJpl.js";import"./index-fiBEXerg.js";import"./badge.constants-DvS3kqTh.js";import"./linksimple.component--l-Uszvl.js";import"./DataAriaLabelMixin-8AIEbDMd.js";import"./link.constants-BLBQW-W8.js";import"./index-CtCMWOZp.js";import"./base-DIkkzJ-c.js";import"./popover.component-o6ueIemh.js";import"./BackdropMixin-9TMZO38l.js";import"./popover.constants-BFdknXTk.js";import"./index-TUQshzq0.js";import"./v4-CmTdKEVZ.js";import"./input.component-BUUWCaDR.js";import"./directive-Ctav8iJK.js";import"./index-BNNDTKQS.js";import"./formfieldwrapper.component-DB2KBwdI.js";import"./formfieldwrapper.constants-eGbH7GEC.js";import"./FormInternalsMixin-DfNiglB1.js";import"./query-BPxBhMfF.js";import"./input.constants-BOx7WlZn.js";import"./index-CE3UObgY.js";import"./index-Dx69dXFf.js";import"./radio.constants-Br4EqqvU.js";import"./index-DoCLuFxg.js";import"./toggle.constants-DYKuh1j9.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
