import{k as p}from"./iframe-5H9qcZJ2.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-C0fVPY5n.js";import"./index-CI4X305X.js";import"./index-CQ9VcoX4.js";import"./index-ne8WS1d5.js";import"./index-mDZBmXg_.js";import"./index-BzpsYOE_.js";import"./index-BpABV1Nf.js";import"./index-CHZjLqcl.js";import"./index-D7NADhEs.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CmBOfdYv.js";import"./buttonsimple.component-BF0CN3Td.js";import"./DisabledMixin-C3uKy2QQ.js";import"./KeyDownHandledMixin-DQIM2UJ1.js";import"./index-5C1genq1.js";import"./button.utils-rNW36Ji7.js";import"./index-Bfir4c11.js";import"./index-DTrDRi1E.js";import"./if-defined-B-PVuCb_.js";import"./index-CPbtQyMJ.js";import"./IconNameMixin-Biw2Ao94.js";import"./index-DFj5y2QE.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-_Me8byx_.js";import"./linksimple.component-psmjpEui.js";import"./DataAriaLabelMixin-9ouzFIjs.js";import"./link.constants-BGJxwuln.js";import"./index-B-7nu1F2.js";import"./v4-CmTdKEVZ.js";import"./index-BtI5VSZA.js";import"./popover.component-BHo8a8XX.js";import"./BackdropMixin-Dm0DvBnm.js";import"./popover.constants-CHOT-eA8.js";import"./input.component-DCVZ5-ff.js";import"./directive-Ctav8iJK.js";import"./index-BCvmrAy_.js";import"./formfieldwrapper.component-CanFg917.js";import"./formfieldwrapper.constants-C1aC3iz-.js";import"./FormInternalsMixin-zGkd97u6.js";import"./input.constants-icMW-Vg1.js";import"./index-KJt-LcyH.js";import"./index-DK_O2bM9.js";import"./radio.constants-B4AD_9i2.js";import"./index-wSWuWW3Y.js";import"./toggle.constants-DL5oMnWQ.js";import"./ControlTypeMixin-CpiBIGvh.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
