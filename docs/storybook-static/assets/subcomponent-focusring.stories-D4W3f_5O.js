import{k as p}from"./iframe-BJBhCjFe.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-CpSpvrl1.js";import"./index-BMOwtXCF.js";import"./index-CcOQa8zr.js";import"./index-Bd_hFNkz.js";import"./index-C6UdVvZ4.js";import"./index-DrrAqTb2.js";import"./index-Di-n3UZ_.js";import"./index-CCGLmy19.js";import"./index-C9k1urvy.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-B7VEfYMk.js";import"./buttonsimple.component-CW5UUyhT.js";import"./DisabledMixin-B2hR8WV5.js";import"./KeyDownHandledMixin-BLspWFvk.js";import"./index-cTx9WVWq.js";import"./button.utils-rNW36Ji7.js";import"./index-B2sfePBq.js";import"./index-DTrDRi1E.js";import"./index-DmFiw10N.js";import"./IconNameMixin-BYY19QNz.js";import"./index-CBBkHGLl.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-DiUIuAFM.js";import"./linksimple.component-CVLiahWN.js";import"./DataAriaLabelMixin-D7zNnUhE.js";import"./link.constants-CH0oJ8Kb.js";import"./index-Cs6pmN8x.js";import"./index-BdfJx604.js";import"./popover.component-C1gNgjl9.js";import"./BackdropMixin-r0_gKnDt.js";import"./FocusTrapMixin-DYc95HfF.js";import"./popover.constants-DWw4zCs4.js";import"./input.component-BzEGw4y8.js";import"./index-BrmWeSqo.js";import"./index-8Y86vkDl.js";import"./statusmessage.constants-MTPI6JU4.js";import"./formfieldwrapper.component-TakDoasp.js";import"./formfieldwrapper.constants-CVJnfWHe.js";import"./FormInternalsMixin-BsRJVD6q.js";import"./input.constants-C6GUyv-9.js";import"./index-Bd5GYoX_.js";import"./index-l5f5o1_h.js";import"./radio.constants-BQtLcFfj.js";import"./index-BoAIimHQ.js";import"./toggle.constants-HmujIvGV.js";import"./ControlTypeMixin-i8Zx4Qye.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
