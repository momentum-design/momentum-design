import{k as d}from"./iframe-B0XJYlue.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-CPYc7yBX.js";import"./index-Dxfld6t3.js";import"./index-B-LzVNU2.js";import"./index-BfoVRRkf.js";import"./index-22PtIQgj.js";import"./index-C4UJu0XS.js";import"./index-CBB97mLk.js";import"./index-BC7slXBp.js";import"./index-C6xygR9C.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-sq8jxxk-.js";import"./buttonsimple.component-77TCSDqF.js";import"./keys-hFXe221I.js";import"./DisabledMixin-CGwTkMmF.js";import"./TabIndexMixin-BzXSi42v.js";import"./button.utils-rNW36Ji7.js";import"./index-_Nv-YJw_.js";import"./index-gtapvZLB.js";import"./index-DTrDRi1E.js";import"./if-defined-CgS7PUg_.js";import"./index-B5bURO5S.js";import"./IconNameMixin-C01Kp1Fu.js";import"./index-BowTQzyA.js";import"./badge.constants-CH3KpAmt.js";import"./linksimple.component-CzdOq4OV.js";import"./DataAriaLabelMixin-q8-JYHmv.js";import"./link.constants-DbmXIs9Y.js";import"./index-B1gYlhaJ.js";import"./popover.component-Dzdx_YbA.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-Dq1K0DBu.js";import"./index-B8FNU2x9.js";import"./v4-CmTdKEVZ.js";import"./input.component-B0bUNy9U.js";import"./directive-Ctav8iJK.js";import"./index-CCi29IdW.js";import"./formfieldwrapper.component-DBwQYHP6.js";import"./FormInternalsMixin-BYcWRybM.js";import"./query-DXShiZ7f.js";import"./input.constants-B1SQU6yg.js";import"./index-hhK32C7O.js";import"./index-BE0yEgkU.js";import"./radio.constants-CwfyEJW5.js";import"./index-D2QUMchj.js";import"./toggle.constants-BWtu9WLE.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
