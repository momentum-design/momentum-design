import{k as p}from"./iframe-QSDyrAdE.js";import{a as d}from"./utils-CFOyPOhY.js";import"./index-BNatOgDM.js";import"./index-C-9vWaoK.js";import"./index-DyaYI6b-.js";import"./index-D4o3cWJ9.js";import"./index-ChB68JX8.js";import"./index-5JQB91D9.js";import"./index-B_ByluRm.js";import"./index-Dxpo7PDP.js";import"./index-DIca0CXO.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-C1j5LlK8.js";import"./button.constants-WVm7tXwE.js";import"./buttonsimple.constants-DOebIZq9.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-_HsIFC4Q.js";import"./keys-hFXe221I.js";import"./DisabledMixin-D6enQAXq.js";import"./TabIndexMixin-BVjLDI6m.js";import"./index-EVhd65vU.js";import"./button.utils-rNW36Ji7.js";import"./index-fgDsCE7Q.js";import"./index-B0QaVnKo.js";import"./index-DTrDRi1E.js";import"./if-defined-ClteKkfF.js";import"./index-B0X5ddH-.js";import"./IconNameMixin-CSqyg41M.js";import"./index-B3jK4bXP.js";import"./index-COmTsnFb.js";import"./badge.constants-Btxp5gds.js";import"./linksimple.component-C8R79UXv.js";import"./DataAriaLabelMixin-Dtxn4H1o.js";import"./link.constants-B_8rDj9z.js";import"./index-yYnH3jAH.js";import"./popover.component-BWPdzp8n.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-Aq_yjMkc.js";import"./index-Cn4Do0r8.js";import"./v4-CmTdKEVZ.js";import"./input.component-Djl3KwXP.js";import"./directive-Ctav8iJK.js";import"./index-8pjD56Ib.js";import"./formfieldwrapper.component-fDryl_uM.js";import"./FormInternalsMixin-CYosLjK8.js";import"./query-DXShiZ7f.js";import"./input.constants-CkJ9kjRu.js";import"./index-BWkcJ4jv.js";import"./index-Bed5B1gj.js";import"./radio.constants-_y5ziPb1.js";import"./index-0itY_JWB.js";import"./toggle.constants-CfnzaBZE.js";const pt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
        <mdc-badge slot="badge" type="counter" counter="1"></mdc-badge>
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
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const dt=["Example","FocusRingWithinHost"];export{t as Example,o as FocusRingWithinHost,dt as __namedExportsOrder,pt as default};
