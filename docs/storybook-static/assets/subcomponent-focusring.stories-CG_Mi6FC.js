import{k as d}from"./iframe-g0r6a1kN.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-CWa8RnZd.js";import"./index-D_ird2ri.js";import"./index-BNV8LDOi.js";import"./index-aZ_Iir7z.js";import"./index-CEZMr8ke.js";import"./index-DyWfump1.js";import"./index-DfOcrlFF.js";import"./index-ce4VfagE.js";import"./index-CqUYbUAn.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-DAwQBT6R.js";import"./buttonsimple.component-zFyrTG2O.js";import"./DisabledMixin-jst5IV03.js";import"./KeyDownHandledMixin-Xf5xuIHd.js";import"./index-BsTi84pG.js";import"./button.utils-rNW36Ji7.js";import"./index-CWlNr1hK.js";import"./index-DTrDRi1E.js";import"./if-defined-9wIIfuKU.js";import"./index-CK-l_fGt.js";import"./IconNameMixin-BVAoZXBK.js";import"./index-BNEElfAm.js";import"./badge.constants-B8gBPNEs.js";import"./linksimple.component-CPz4LgiH.js";import"./DataAriaLabelMixin-CF3K278-.js";import"./link.constants-C28hDlkz.js";import"./index-C5AKGRvO.js";import"./popover.component-DYgAbp-A.js";import"./BackdropMixin-CMqK9JKf.js";import"./popover.constants-DaojcK4c.js";import"./index-D_BNpgh-.js";import"./v4-CmTdKEVZ.js";import"./input.component-r-IoWGAX.js";import"./directive-Ctav8iJK.js";import"./index-ChJfZ65K.js";import"./formfieldwrapper.component-DsOKzkP2.js";import"./formfieldwrapper.constants-vgBQbaDf.js";import"./FormInternalsMixin-DxkI3I1r.js";import"./input.constants-BZ5jVBgR.js";import"./index-CU5ZaEKv.js";import"./index-C19OeCOJ.js";import"./radio.constants-D2LuYRIB.js";import"./index-qim7nATA.js";import"./toggle.constants-C9ihRvbf.js";import"./ControlTypeMixin-D2hxAK35.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
