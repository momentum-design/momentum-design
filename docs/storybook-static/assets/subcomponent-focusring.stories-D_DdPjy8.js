import{k as d}from"./iframe-gl2AV23u.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-CktAzwkY.js";import"./index-BN0sHnmG.js";import"./index-Do7IXip2.js";import"./index-xx15BIGy.js";import"./index-C_cEAAa4.js";import"./index-DXLU7DGz.js";import"./index-D6hLuvok.js";import"./index-Duaal36-.js";import"./index-DQ3lP44O.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-BMiiox-z.js";import"./buttonsimple.component-CmqAkDIS.js";import"./keys-hFXe221I.js";import"./DisabledMixin-Da9HdG9U.js";import"./TabIndexMixin-eMCoa_9l.js";import"./button.utils-rNW36Ji7.js";import"./index-DIedxVcG.js";import"./index-B0EZfEBL.js";import"./index-DTrDRi1E.js";import"./if-defined-D_Raxwq5.js";import"./index-DabSSrrg.js";import"./IconNameMixin-DZFHyJB7.js";import"./index-DtgdJLn8.js";import"./badge.constants-D87dGOTG.js";import"./linksimple.component-BkgwQMjz.js";import"./DataAriaLabelMixin-Cp1kK3jb.js";import"./link.constants-DbGheP9L.js";import"./index-BtDrW3bQ.js";import"./popover.component-CNuAeCjP.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-BFaCZz5f.js";import"./index-CLGY1Y6i.js";import"./v4-CmTdKEVZ.js";import"./input.component-y1lJ6zVq.js";import"./directive-Ctav8iJK.js";import"./index-CpCMGgJc.js";import"./formfieldwrapper.component-D7ur8at_.js";import"./FormInternalsMixin-D2L4XRX8.js";import"./query-DXShiZ7f.js";import"./input.constants-DylpHrgx.js";import"./index-BTiZiMV-.js";import"./index-DkWjAK6H.js";import"./radio.constants-B8orMhUf.js";import"./index-YLB2FcmG.js";import"./toggle.constants-OqVHygED.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
