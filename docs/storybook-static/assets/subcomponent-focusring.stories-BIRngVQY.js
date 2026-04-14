import{k as p}from"./iframe-BMQAO-1d.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-D7xTBYHY.js";import"./index-FSpbCrWb.js";import"./index-ftzgobA6.js";import"./index-D9gI0NS0.js";import"./index-xCEJJMR4.js";import"./index-DKJGxbtV.js";import"./index-D_p3KyRs.js";import"./index-BupZvFGp.js";import"./index-wg4IQZj3.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-BKfCPW1e.js";import"./buttonsimple.component-CywH7ZQb.js";import"./DisabledMixin-B6ArWvcr.js";import"./KeyDownHandledMixin-D5ID8XRZ.js";import"./index-DzaT7ri-.js";import"./button.utils-rNW36Ji7.js";import"./index-Ty40rxEB.js";import"./index-DTrDRi1E.js";import"./if-defined-DjrVqlJq.js";import"./index-BFm7PzvW.js";import"./IconNameMixin-5UtXPSY7.js";import"./index-ByVHXJfN.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-FD7lZVje.js";import"./linksimple.component-Wa33mAF4.js";import"./DataAriaLabelMixin-DapGYaYX.js";import"./link.constants-LDZsNm0w.js";import"./index-FkfV73gj.js";import"./popover.component-BWvZeF9F.js";import"./BackdropMixin-DJbsX_HG.js";import"./popover.constants-BEuc21JW.js";import"./index-BkZAyxzx.js";import"./v4-CmTdKEVZ.js";import"./input.component-Bbojqy0i.js";import"./directive-Ctav8iJK.js";import"./index-sTeWfxI5.js";import"./formfieldwrapper.component-BsecmuTY.js";import"./formfieldwrapper.constants-DYQj1U_c.js";import"./FormInternalsMixin-B-_ePyXw.js";import"./input.constants-CfVR7PRx.js";import"./index-pv5Lu9M7.js";import"./index-Dgy9qw7e.js";import"./radio.constants-DFF8TDbr.js";import"./index-BMsNEBJ0.js";import"./toggle.constants-_Brpuanq.js";import"./ControlTypeMixin-BzrbIgkT.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
