import{k as d}from"./iframe-DopKAP5L.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-B5UHMyr0.js";import"./index-aqJG3xjd.js";import"./index-MvpOsBcs.js";import"./index-BhO7RntH.js";import"./index-C72UwmLe.js";import"./index-BKxXp6Er.js";import"./index-D4071q81.js";import"./index-Bp-0tJDZ.js";import"./index-B3gDjf2C.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-ByTPnIad.js";import"./buttonsimple.component-B7XrDwpV.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DZzfc1Nn.js";import"./TabIndexMixin-C_YnZCga.js";import"./button.utils-rNW36Ji7.js";import"./index-CE42psa3.js";import"./index-Dcpf18em.js";import"./index-DTrDRi1E.js";import"./if-defined-DqsAC6OU.js";import"./index-V2-726sr.js";import"./IconNameMixin-QUofRkPE.js";import"./index-nzfDwe9E.js";import"./badge.constants-BsFpVviV.js";import"./linksimple.component-YeIQbv1V.js";import"./DataAriaLabelMixin-DMnUhncW.js";import"./link.constants-B72UCQuN.js";import"./index-DwtUpKF_.js";import"./popover.component-DCbmlhSn.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-y49YoCYn.js";import"./index-DBi3Z20D.js";import"./v4-CmTdKEVZ.js";import"./input.component-Dd52bZ78.js";import"./directive-Ctav8iJK.js";import"./index-DrXWiW3e.js";import"./formfieldwrapper.component-YB8mSnQi.js";import"./FormInternalsMixin-BhRCm80K.js";import"./query-DXShiZ7f.js";import"./input.constants-BxTo8vUL.js";import"./index-BZL8fbsy.js";import"./index-DvYjTfJ2.js";import"./radio.constants-BfLDrBvF.js";import"./index-lOuGaI2e.js";import"./toggle.constants-CcqVHtSG.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
