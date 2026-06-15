import{k as p}from"./iframe-K3793TQ_.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-2Le8Q7vM.js";import"./index-2OVlt6RL.js";import"./index-CpOgsM48.js";import"./index-CL0xKPqN.js";import"./index-BaqBAJb5.js";import"./index-DDms2mom.js";import"./index-Dlk74rMv.js";import"./index-BmOP-FIK.js";import"./index-povi4Pyy.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-DHuwTHgZ.js";import"./buttonsimple.component-Co7mmT7W.js";import"./DisabledMixin-BC25uM5G.js";import"./KeyDownHandledMixin-acswgJOJ.js";import"./index-CjzTMaKK.js";import"./button.utils-rNW36Ji7.js";import"./index-B9Hx66pQ.js";import"./index-DTrDRi1E.js";import"./if-defined-D-9eRdag.js";import"./index-BSA2otww.js";import"./IconNameMixin-DegWXCrH.js";import"./index-bjS1OMao.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-DJywzB2G.js";import"./linksimple.component-Cun-PqXK.js";import"./DataAriaLabelMixin-CYmi6L3f.js";import"./link.constants-CIQqeXvb.js";import"./index-DmoqzO3M.js";import"./v4-CmTdKEVZ.js";import"./index-BOtS6plM.js";import"./popover.component-Bof5cLB0.js";import"./BackdropMixin-C087wFST.js";import"./popover.constants-VdJzSeM1.js";import"./input.component-BNCfIi6I.js";import"./directive-Ctav8iJK.js";import"./index-DqoEmkRf.js";import"./formfieldwrapper.component-iW-uJnyU.js";import"./formfieldwrapper.constants-Bb5xZEZv.js";import"./FormInternalsMixin-CwBeraCC.js";import"./input.constants-cIxwTE5i.js";import"./index-DlUshFpD.js";import"./index-BRAocQfF.js";import"./radio.constants-MrAurulB.js";import"./index-tBU2qV3j.js";import"./toggle.constants-23UOgzO_.js";import"./ControlTypeMixin-qY1Q2o_2.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
