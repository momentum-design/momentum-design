import{k as d}from"./iframe-D59qSDLK.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-CMQPxFTJ.js";import"./index-BNfJRCpI.js";import"./index-DSb4utaD.js";import"./index-DgXx6y28.js";import"./index-Cpoxsmin.js";import"./index-rziTyZRD.js";import"./index-D_4-p2wz.js";import"./index-CNPUj14s.js";import"./index-YUJapzt5.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CEygHlAT.js";import"./buttonsimple.component-Ccjreym8.js";import"./keys-hFXe221I.js";import"./DisabledMixin-MuPyaYa1.js";import"./TabIndexMixin-B1WUQql5.js";import"./button.utils-rNW36Ji7.js";import"./index-CwGSQ9Yn.js";import"./index-xT-JkSuE.js";import"./index-DTrDRi1E.js";import"./if-defined-olcxDW8P.js";import"./index-BupRh853.js";import"./IconNameMixin-BUUFvwy-.js";import"./index-XFOOUkt5.js";import"./badge.constants-ClKtO23F.js";import"./linksimple.component-BOGiiIpL.js";import"./DataAriaLabelMixin-B-q0EJoW.js";import"./link.constants-B64TbC-H.js";import"./index-B_bHtNwH.js";import"./popover.component-DgpXvbs2.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-COtaol9r.js";import"./index-EMiAHnq6.js";import"./v4-CmTdKEVZ.js";import"./input.component-CVYBeLkV.js";import"./directive-Ctav8iJK.js";import"./index-DJQ6rmK0.js";import"./formfieldwrapper.component-CGA_i2Rj.js";import"./FormInternalsMixin-DNHt4erd.js";import"./query-DXShiZ7f.js";import"./input.constants-CCG55Suf.js";import"./index-rnlThXhF.js";import"./index-D_0tXJjY.js";import"./radio.constants-DIW_CDLM.js";import"./index-B8prAcGk.js";import"./toggle.constants-DQktxk_8.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
