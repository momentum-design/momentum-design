import{k as d}from"./iframe-CEKo-JXY.js";import{h as p}from"./utils-CO8B6ZcN.js";import"./index-BDaZpXwS.js";import"./index-D-yMrZPF.js";import"./index-esFLwjb_.js";import"./index-CtphwW-2.js";import"./index-DWwl4JJd.js";import"./index-Ddv5ntx9.js";import"./index-pkfhGvX3.js";import"./index-CX-53TKl.js";import"./index-COECrBih.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-B27S1t5Z.js";import"./buttonsimple.component-Cy86Wmzd.js";import"./TabIndexMixin-CdhXJLRg.js";import"./DisabledMixin-BaIDnvgN.js";import"./button.utils-rNW36Ji7.js";import"./index-6vUjwAdH.js";import"./index-CFCvY7gN.js";import"./index-DTrDRi1E.js";import"./if-defined-D_LYpS0s.js";import"./index-hMsJm5q8.js";import"./IconNameMixin-D-f4BQyq.js";import"./index-DSQSFBJN.js";import"./badge.constants-DEEB-5l2.js";import"./linksimple.component-C2tmAfin.js";import"./DataAriaLabelMixin-BrraWAhi.js";import"./link.constants-C265IM5U.js";import"./index-2zL_bbD5.js";import"./base-DIkkzJ-c.js";import"./popover.component-CY1GZ30k.js";import"./BackdropMixin-CY_oOpXT.js";import"./index-CFtCIruB.js";import"./v4-CmTdKEVZ.js";import"./input.component-BOJoiJSw.js";import"./directive-Ctav8iJK.js";import"./index-DABkyhXI.js";import"./formfieldwrapper.component-s2FMycJM.js";import"./formfieldwrapper.constants-rsoZlaBJ.js";import"./FormInternalsMixin-CVtnrGtQ.js";import"./query-BPxBhMfF.js";import"./input.constants-DEjBFBIS.js";import"./index-Ddlkrx38.js";import"./index-B9IRq2YG.js";import"./radio.constants-DsZ5b7EF.js";import"./index-Wy6atEKy.js";import"./toggle.constants-DKg0y9eE.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
