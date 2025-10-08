import{k as d}from"./iframe-DWK8UCtP.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-W2b61mwu.js";import"./index-BXp-jhZ7.js";import"./index-DcbroJoo.js";import"./index-DX0Z8d_5.js";import"./index-7vOnODQC.js";import"./index-CYIHVB11.js";import"./index-BG_D4qeB.js";import"./index-CQ6JDj8_.js";import"./index-BWUrNJne.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-DYAeauwX.js";import"./buttonsimple.component-CqlJsUBS.js";import"./keys-hFXe221I.js";import"./DisabledMixin-BRiIDRqE.js";import"./TabIndexMixin-7HtW7l8s.js";import"./button.utils-rNW36Ji7.js";import"./index-C89dEGRO.js";import"./index-h2GBNkqy.js";import"./index-DTrDRi1E.js";import"./if-defined-52D-HVLI.js";import"./index-D6mEiBES.js";import"./IconNameMixin-BjulLWXA.js";import"./index-CSGhIBhP.js";import"./badge.constants-Diggym7-.js";import"./linksimple.component-yqh1QmTY.js";import"./DataAriaLabelMixin-BnvzY6YS.js";import"./link.constants-DIFub-Cs.js";import"./index-DF_DiMBQ.js";import"./popover.component-nXIfqqDq.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-Dd2kUUbD.js";import"./index-jzDAMS02.js";import"./v4-CmTdKEVZ.js";import"./input.component-zFKCaVhG.js";import"./directive-Ctav8iJK.js";import"./index-Fx6tcuS-.js";import"./formfieldwrapper.component-CTuthxQv.js";import"./FormInternalsMixin-SDx74w_R.js";import"./query-DXShiZ7f.js";import"./input.constants-D6Dhh8s6.js";import"./index-DRY08GaG.js";import"./index-BJyhs_Sg.js";import"./radio.constants-Bv5157f-.js";import"./index-C6IVpqnW.js";import"./toggle.constants-Bj5kHcid.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
