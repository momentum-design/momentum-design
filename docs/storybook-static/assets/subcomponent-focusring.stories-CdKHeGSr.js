import{k as d}from"./iframe-94edI9Bn.js";import{h as p}from"./utils-CO8B6ZcN.js";import"./index-GOLCrGtf.js";import"./index-CUs9uW2l.js";import"./index-Dwa9jjs-.js";import"./index-Bvc6LaYC.js";import"./index-8f-z_kj0.js";import"./index-C42dnPq8.js";import"./index-DzqJlAgJ.js";import"./index-CfF44MAl.js";import"./index-DkjK_RS6.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-frVe9Iet.js";import"./buttonsimple.component-C9qlWVBh.js";import"./TabIndexMixin-Cn5LRx6N.js";import"./DisabledMixin-4QzHCmn4.js";import"./button.utils-rNW36Ji7.js";import"./index-BuQoTsdy.js";import"./index-C1gOSA31.js";import"./index-DTrDRi1E.js";import"./if-defined-DWyWhGEy.js";import"./index-ACOmCpyg.js";import"./IconNameMixin-BJWr8nEf.js";import"./index-DJ82MDqu.js";import"./badge.constants-CpJRaicy.js";import"./linksimple.component-ByZeq9X0.js";import"./DataAriaLabelMixin-eUOhPIZy.js";import"./link.constants-B7GzGt3O.js";import"./index-BX1jiO30.js";import"./base-DIkkzJ-c.js";import"./popover.component-DnnwrNGO.js";import"./BackdropMixin-CB2iojJF.js";import"./index--um2QT2V.js";import"./v4-CmTdKEVZ.js";import"./input.component-BqCJ99hw.js";import"./directive-Ctav8iJK.js";import"./index-CV6UyVxn.js";import"./formfieldwrapper.component-DZ7UP3yv.js";import"./formfieldwrapper.constants-CAzzNiUa.js";import"./FormInternalsMixin-BVf9YUBj.js";import"./query-BPxBhMfF.js";import"./input.constants-CbhVqlii.js";import"./index-CVddWMaU.js";import"./index-bcKzYxnx.js";import"./radio.constants-DoUwtZ8m.js";import"./index-cuZeCKBd.js";import"./toggle.constants-BJpEoxbr.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
