import{k as p}from"./iframe-CYySQeiU.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-SMprG-ob.js";import"./index-Fj-004kU.js";import"./index-DichZI9z.js";import"./index-CV0JN4Tr.js";import"./index-UnF-x0Ay.js";import"./index-BqznSArS.js";import"./index-CC63v5h5.js";import"./index-CCKfDUkY.js";import"./index-BtaSbRlE.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-Cc9q5v1b.js";import"./buttonsimple.component-qK8KUuS6.js";import"./DisabledMixin-CYuDVwJu.js";import"./KeyDownHandledMixin-DujuZV6P.js";import"./index-BSeEq29C.js";import"./button.utils-rNW36Ji7.js";import"./index-D_SvQ1mC.js";import"./index-DTrDRi1E.js";import"./if-defined-B3Si03Tk.js";import"./index-DFI-t2BG.js";import"./IconNameMixin-Bp5UaAVr.js";import"./index-CwvCp58v.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-CSPSV42F.js";import"./linksimple.component-zJBOzPz9.js";import"./DataAriaLabelMixin-9u5KtbR3.js";import"./link.constants-rpdiaUn0.js";import"./index-CT_jdhD0.js";import"./popover.component-CBz2QjxT.js";import"./BackdropMixin-BFpROQkD.js";import"./popover.constants-Cr6pC7ge.js";import"./index-DhJvVutS.js";import"./v4-CmTdKEVZ.js";import"./input.component-D5erkunu.js";import"./directive-Ctav8iJK.js";import"./index-ByGqfq6Q.js";import"./formfieldwrapper.component-DfHb6RbF.js";import"./formfieldwrapper.constants-B92ezA2m.js";import"./FormInternalsMixin-CvSTjONf.js";import"./input.constants-s6s34WwR.js";import"./index-BWrrTcP5.js";import"./index-Bs1uirj6.js";import"./radio.constants-B-bn_WfZ.js";import"./index-CDUJr4YF.js";import"./toggle.constants-B39K9hrh.js";import"./ControlTypeMixin-CG0yxrNo.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
