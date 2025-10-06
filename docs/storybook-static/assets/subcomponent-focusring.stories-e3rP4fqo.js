import{k as d}from"./iframe-Dqi1znBL.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-BgHTBFgU.js";import"./index-CbQhF-NX.js";import"./index-BiHPKdco.js";import"./index-8HHGytQs.js";import"./index-CfubMq0L.js";import"./index-kPE_vj_i.js";import"./index-C8nWVv3Y.js";import"./index-Dl30Qd3u.js";import"./index-wfCFY7Dg.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-xYCXZiqO.js";import"./buttonsimple.component-LvCb317g.js";import"./keys-hFXe221I.js";import"./DisabledMixin-BBBcOPXh.js";import"./TabIndexMixin-ZLzuhBZK.js";import"./button.utils-rNW36Ji7.js";import"./index-B1nOY4fG.js";import"./index-DGYPCJg1.js";import"./index-DTrDRi1E.js";import"./if-defined-DBaEJSn3.js";import"./index-B-Yi0p1I.js";import"./IconNameMixin-B3pAQP38.js";import"./index-DWeOPygL.js";import"./badge.constants-VZXKZ_rI.js";import"./linksimple.component-jS0P7kNT.js";import"./DataAriaLabelMixin-BY65oQD9.js";import"./link.constants-Csh6yoHS.js";import"./index-DC0NsiVV.js";import"./popover.component-bUfFPcWv.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-RE41TDyT.js";import"./index-Cl_5oUeg.js";import"./v4-CmTdKEVZ.js";import"./input.component-CNQJER4o.js";import"./directive-Ctav8iJK.js";import"./index-DJEY3pWW.js";import"./formfieldwrapper.component-Bs1ZCSMn.js";import"./FormInternalsMixin-BALd1K8Z.js";import"./query-DXShiZ7f.js";import"./input.constants-iqmwTg24.js";import"./index-CnAnINb9.js";import"./index-BWSZCGHI.js";import"./radio.constants-Cj1YnDKj.js";import"./index-BXhy66aT.js";import"./toggle.constants-mtIMbQHx.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
