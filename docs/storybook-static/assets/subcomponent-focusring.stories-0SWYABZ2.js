import{k as p}from"./iframe-CJ86bTna.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-BQQ7K66O.js";import"./index-DnzsBQDm.js";import"./index-BGNcGy62.js";import"./index-C7s-kZ60.js";import"./index-DPEpa5bE.js";import"./index-B1UL8t1c.js";import"./index-Cmr8HPS6.js";import"./index-D2B4XM8O.js";import"./index-BmX4ULLG.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CP9OgUSV.js";import"./buttonsimple.component-DvYUczPD.js";import"./DisabledMixin-DrN7r3Wp.js";import"./KeyDownHandledMixin-C8kKWPJI.js";import"./index-CH0PMzLh.js";import"./button.utils-rNW36Ji7.js";import"./index-bcYgerky.js";import"./index-DTrDRi1E.js";import"./if-defined-CPZ8iztr.js";import"./index-kuSvvgCt.js";import"./IconNameMixin-CYcPEI5X.js";import"./index-DtQDE_F8.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-Dltd2J6E.js";import"./linksimple.component-BDjIBsbI.js";import"./DataAriaLabelMixin-BvcoNyzy.js";import"./link.constants-Bi72KruL.js";import"./index-DSwLJtfD.js";import"./popover.component-6DMLCom0.js";import"./BackdropMixin-Dp6CD5NG.js";import"./popover.constants-Bhj3IDTv.js";import"./index-2nK1GJ91.js";import"./v4-CmTdKEVZ.js";import"./input.component-B0cppnCD.js";import"./directive-Ctav8iJK.js";import"./index-BKmQEAkc.js";import"./formfieldwrapper.component-Bd2d4uDu.js";import"./formfieldwrapper.constants-BgJ3XOYb.js";import"./FormInternalsMixin-D9dgBmo9.js";import"./input.constants-DLLi-EUj.js";import"./index-56ZiPZo4.js";import"./index-DU9wrsHp.js";import"./radio.constants-BDe7t4Zm.js";import"./index-CCdhu_H4.js";import"./toggle.constants-BrtbNcM6.js";import"./ControlTypeMixin-cXfxe4Vu.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
    <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-button>Button</mdc-button>
      <mdc-avatarbutton
        initials="MD"
        size="48"
        src="https://picsum.photos/id/63/256"
        aria-label="Avatar Button"
      ></mdc-avatarbutton>
      <mdc-tab icon-name="placeholder-bold" tabindex="0" text="Tab 1" variant="pill">
        <mdc-badge slot="postfix" type="counter" counter="1"></mdc-badge>
      </mdc-tab>
    </div>
  `},o={argTypes:{...d(["shape"])},render:()=>p` <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-link icon-name="placeholder-bold"><a href="#">Link</a></mdc-link>
      <mdc-input value="Input" trailing-button></mdc-input>
      <mdc-radio name="radio" value="radio" label="Radio"></mdc-radio>
      <mdc-checkbox label="Checkbox"></mdc-checkbox>
      <mdc-toggle label="Toggle"></mdc-toggle>
    </div>`};var r,e,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
        <mdc-badge slot="postfix" type="counter" counter="1"></mdc-badge>
      </mdc-tab>
    </div>
  \`
}`,...(i=(e=t.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};var a,m,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
