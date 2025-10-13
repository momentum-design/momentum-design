import{k as d}from"./iframe-CrBatVCQ.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-BpW_6P7D.js";import"./index-CFYZD46n.js";import"./index-BWZjkWjY.js";import"./index-BStJfKBG.js";import"./index-CyYiqz4X.js";import"./index-D06DVLZA.js";import"./index-ubn8N_54.js";import"./index-DkHziK0N.js";import"./index-BhuWYa8T.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-rhaucX9n.js";import"./buttonsimple.component-B5wEJljM.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DnkG3zmJ.js";import"./TabIndexMixin-Ca95DdOZ.js";import"./button.utils-rNW36Ji7.js";import"./index-BZedEIB5.js";import"./index-DmnTGDGJ.js";import"./index-DTrDRi1E.js";import"./if-defined-BeA6fpdh.js";import"./index-DQsTEkKS.js";import"./IconNameMixin-Bjml2q2s.js";import"./index-DbmIHbvm.js";import"./badge.constants-BsL0FUnp.js";import"./linksimple.component-BgQscXHR.js";import"./DataAriaLabelMixin-BIfSlCgc.js";import"./link.constants-Ck1iD8RR.js";import"./index-4qTbzpyc.js";import"./popover.component-DoMGn_er.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-BMYpxaBf.js";import"./index-IVXdn-a8.js";import"./v4-CmTdKEVZ.js";import"./input.component-BiNp7eQ9.js";import"./directive-Ctav8iJK.js";import"./index-JRc_r8Ij.js";import"./formfieldwrapper.component-BKv62IKc.js";import"./FormInternalsMixin-Dw0eqyBK.js";import"./query-DXShiZ7f.js";import"./input.constants-BDlJJLeW.js";import"./index-D6IEfLxO.js";import"./index-CwbIce-3.js";import"./radio.constants-B02uGyS-.js";import"./index-BVQNG2IG.js";import"./toggle.constants-Do8nHwA2.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
