import{k as d}from"./iframe-DgAYNH_H.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-BL8ntjSc.js";import"./index-D2xFaqOt.js";import"./index-CglQeZJT.js";import"./index-CIHcGRKJ.js";import"./index-Sh8fZEWh.js";import"./index-voZ271xq.js";import"./index-hrseoNkf.js";import"./index-OPozMN2I.js";import"./index-9Xoo61vW.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-uD1VDEQ4.js";import"./buttonsimple.component-CSzenvJx.js";import"./keys-hFXe221I.js";import"./DisabledMixin-BD5X2mNA.js";import"./TabIndexMixin-CUWuhQpq.js";import"./button.utils-rNW36Ji7.js";import"./index-C_10niB2.js";import"./index-B67k6wQg.js";import"./index-DTrDRi1E.js";import"./if-defined-BTodBEDH.js";import"./index-D8E24dOJ.js";import"./IconNameMixin-BtI3SVIs.js";import"./index-BKOVtRtb.js";import"./badge.constants-B0INPm1g.js";import"./linksimple.component-BF1KX1gj.js";import"./DataAriaLabelMixin-B234y6ay.js";import"./link.constants-WgX1s056.js";import"./index-BD8V6fTg.js";import"./popover.component-xDX88cvH.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-DbM-rXKf.js";import"./index-f-ClGrh5.js";import"./v4-CmTdKEVZ.js";import"./input.component-Bpp9krM9.js";import"./directive-Ctav8iJK.js";import"./index-bW7kTY-e.js";import"./formfieldwrapper.component-DPx1UzeY.js";import"./FormInternalsMixin-lLmnIMb3.js";import"./query-DXShiZ7f.js";import"./input.constants-DdprW7Hg.js";import"./index-CQ5ISbcK.js";import"./index-0JcsNDq6.js";import"./radio.constants-CAkdoppr.js";import"./index-DWA76WLK.js";import"./toggle.constants-DI7YsVxf.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
