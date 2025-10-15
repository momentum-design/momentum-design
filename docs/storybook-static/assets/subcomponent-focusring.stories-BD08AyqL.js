import{k as d}from"./iframe-Jn7RecH3.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-Ct9ahQwI.js";import"./index-DY6ThFyb.js";import"./index-D0qCs80Y.js";import"./index-CREmb9Wx.js";import"./index-Bt0QgDe4.js";import"./index-8FGaOi2U.js";import"./index-CzsjUfn4.js";import"./index-DNjDg084.js";import"./index-CgE8ysNU.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CV58RRI2.js";import"./buttonsimple.component-F0YeC2Jz.js";import"./keys-hFXe221I.js";import"./DisabledMixin-CGJfw_7W.js";import"./TabIndexMixin-Y1wIO-IA.js";import"./button.utils-rNW36Ji7.js";import"./index-r0xkQCBZ.js";import"./index-CE7S_vkO.js";import"./index-DTrDRi1E.js";import"./if-defined-DcDceuTE.js";import"./index-CuLaIeK0.js";import"./IconNameMixin-Bj7oPHQD.js";import"./index-BS_ZVv-R.js";import"./badge.constants-BWqKvHNB.js";import"./linksimple.component-B4UUYqHL.js";import"./DataAriaLabelMixin-mdjsGCeI.js";import"./link.constants-D9aLvh3q.js";import"./index-DhEV7KbK.js";import"./popover.component-DQfa1r8x.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-wdp8ZrNp.js";import"./index-Bi_Bh07c.js";import"./v4-CmTdKEVZ.js";import"./input.component-BksqaR_l.js";import"./directive-Ctav8iJK.js";import"./index-26Ewd6aS.js";import"./formfieldwrapper.component-BRcHqy7h.js";import"./formfieldwrapper.constants-CKwF0M7N.js";import"./FormInternalsMixin-BQiZwp-o.js";import"./query-DXShiZ7f.js";import"./input.constants-DAEn5CZz.js";import"./index-BRvdd3be.js";import"./index-DxwEiYix.js";import"./radio.constants-Bo8kwaVl.js";import"./index-9bv-5hSj.js";import"./toggle.constants-HPesm7cP.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
