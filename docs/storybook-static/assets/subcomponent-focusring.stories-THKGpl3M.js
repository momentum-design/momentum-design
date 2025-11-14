import{k as d}from"./iframe-B6TSCLlU.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-J80jAx4o.js";import"./index-BRARAi6g.js";import"./index-DNluvVt4.js";import"./index-DOhoYTXk.js";import"./index-C-zyrLoB.js";import"./index-D8QrRjwp.js";import"./index-BBKn-Ts7.js";import"./index-CPQePg6L.js";import"./index-D_B5wE54.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-LkMXi7RJ.js";import"./buttonsimple.component-BteSHQ_j.js";import"./TabIndexMixin-B0rMAGJz.js";import"./DisabledMixin-6dbjgJnq.js";import"./button.utils-rNW36Ji7.js";import"./index-C_tS0rqd.js";import"./index-PSUTFcz0.js";import"./index-DTrDRi1E.js";import"./if-defined-BXl5P2tt.js";import"./index--O7It0TT.js";import"./IconNameMixin-B1TmFXgY.js";import"./index-ZW-_Zj-J.js";import"./badge.constants-BOmUbo8r.js";import"./linksimple.component-BCTHDR-q.js";import"./DataAriaLabelMixin-BO8JSxcF.js";import"./link.constants-C8UuZGmq.js";import"./index-Dz2fvLvN.js";import"./base-DIkkzJ-c.js";import"./popover.component-BPuLEaRX.js";import"./BackdropMixin-w7orPsJg.js";import"./index-B1XkskeQ.js";import"./v4-CmTdKEVZ.js";import"./input.component-ChZxDn-I.js";import"./directive-Ctav8iJK.js";import"./index-DgfkBSWc.js";import"./formfieldwrapper.component-BFVYLVfv.js";import"./formfieldwrapper.constants-BcCAU07E.js";import"./FormInternalsMixin-BOgIByaA.js";import"./query-BPxBhMfF.js";import"./input.constants-Ci1Fe7Tu.js";import"./index-Cm7RCXvu.js";import"./index-B9VVKLqO.js";import"./radio.constants-CaSHEiy5.js";import"./index-C1BGRrOv.js";import"./toggle.constants-CMpdHJFq.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
