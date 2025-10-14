import{k as d}from"./iframe-CZp7GZ56.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-D8NVkVuJ.js";import"./index-CiRAQrqm.js";import"./index-9nstsSqo.js";import"./index-DVMkIWdi.js";import"./index-BsxkHZFf.js";import"./index-Cklub3mj.js";import"./index-BoDHYqyO.js";import"./index-C6NS-d2r.js";import"./index-SlDDhYYq.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-ASZCKdv2.js";import"./buttonsimple.component-C_yE73pe.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DHpM1y9t.js";import"./TabIndexMixin-Dv9-xBmB.js";import"./button.utils-rNW36Ji7.js";import"./index-DiXljgf2.js";import"./index-caAjh5dE.js";import"./index-DTrDRi1E.js";import"./if-defined-lk-75_Ux.js";import"./index-BXHSNQ8Z.js";import"./IconNameMixin-vNMIxreL.js";import"./index-CrDw-UPb.js";import"./badge.constants-CzJYSBM-.js";import"./linksimple.component-BAk3yoMs.js";import"./DataAriaLabelMixin-igi6CYL9.js";import"./link.constants-BGocVFdy.js";import"./index-C58vfr5L.js";import"./popover.component-DiknLMhL.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-DvCgBs9L.js";import"./index-BtbBtuyT.js";import"./v4-CmTdKEVZ.js";import"./input.component-iuvBlImi.js";import"./directive-Ctav8iJK.js";import"./index-F0UPNtGm.js";import"./formfieldwrapper.component-BzqVINj4.js";import"./FormInternalsMixin-Bxt6RlE0.js";import"./query-DXShiZ7f.js";import"./input.constants-PYdCjBpE.js";import"./index-B6WelXg3.js";import"./index-BmMz5bub.js";import"./radio.constants-1wqip-Yq.js";import"./index-9Xd0qcv5.js";import"./toggle.constants-8HVPqGqv.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
