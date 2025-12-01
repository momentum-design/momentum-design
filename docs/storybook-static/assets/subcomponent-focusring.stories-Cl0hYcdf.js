import{k as d}from"./iframe-R3L7UhRQ.js";import{h as p}from"./utils-CO8B6ZcN.js";import"./index-CKoCYaJI.js";import"./index-DyCtAInN.js";import"./index-DCFYjBlT.js";import"./index-CpABOf89.js";import"./index-B01-xKPd.js";import"./index-94pbdCFj.js";import"./index-CTeRdvSR.js";import"./index-DRvqLkr6.js";import"./index-0bl64kQh.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-D8ytciRr.js";import"./buttonsimple.component-DQsC6Waa.js";import"./TabIndexMixin-217vQpdp.js";import"./DisabledMixin-8iYeFgf6.js";import"./button.utils-rNW36Ji7.js";import"./index-D2rYsLua.js";import"./index-DlOFhpRI.js";import"./index-DTrDRi1E.js";import"./if-defined-Cp5jgcRU.js";import"./index-BmbQGxdf.js";import"./IconNameMixin-CC_3odhz.js";import"./index-BRqbYYtp.js";import"./badge.constants-VbrwtEmW.js";import"./linksimple.component-DKC-VzfF.js";import"./DataAriaLabelMixin-DSN93tx2.js";import"./link.constants-C4xD8J-W.js";import"./index-C64fG2EJ.js";import"./base-DIkkzJ-c.js";import"./popover.component-Cy6To2aI.js";import"./BackdropMixin-DLlIpirq.js";import"./index-C-4vjAf9.js";import"./v4-CmTdKEVZ.js";import"./input.component-CWK6ujY9.js";import"./directive-Ctav8iJK.js";import"./index-BOG_k0yt.js";import"./formfieldwrapper.component-g6_CIoCp.js";import"./formfieldwrapper.constants-CuM-QC6e.js";import"./FormInternalsMixin-DO1cmoUO.js";import"./query-BPxBhMfF.js";import"./input.constants-DdEkmhST.js";import"./index-BTLfa9U3.js";import"./index-DtnIrGKk.js";import"./radio.constants-C9ovIMGG.js";import"./index-CJjRsySC.js";import"./toggle.constants-D5JJb8Va.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
