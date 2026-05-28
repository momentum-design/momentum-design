import{k as p}from"./iframe-Bh94Y8e_.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-B_jOHuGC.js";import"./index-Dt6B_VK1.js";import"./index-BG8uDtmc.js";import"./index-CIV6VnUy.js";import"./index-BsAM-jxd.js";import"./index-DBUUeBR_.js";import"./index-BumLliS_.js";import"./index-CFldBAgk.js";import"./index-z79ECcWm.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-Ds91mOwr.js";import"./buttonsimple.component-D7OLEyQU.js";import"./DisabledMixin-B3aljkDD.js";import"./KeyDownHandledMixin-FpcqYAeI.js";import"./index-B41KwG2V.js";import"./button.utils-rNW36Ji7.js";import"./index-Dd-1mXtm.js";import"./index-DTrDRi1E.js";import"./if-defined-CQwAQ_Nn.js";import"./index-BUeo726Q.js";import"./IconNameMixin-cVHTp9jf.js";import"./index-BhahqH6I.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-C-YYjbdx.js";import"./linksimple.component-BAXKhTlY.js";import"./DataAriaLabelMixin-DClF4MYX.js";import"./link.constants-CVmGuxPe.js";import"./index-pzW78DhT.js";import"./v4-CmTdKEVZ.js";import"./index-JsoQT0vf.js";import"./popover.component-Dih5jeiu.js";import"./BackdropMixin-B5eIbOpG.js";import"./popover.constants-rDFa6XC5.js";import"./input.component-BTIteEL-.js";import"./directive-Ctav8iJK.js";import"./index-8ZbZPCAL.js";import"./formfieldwrapper.component-DmqlWIco.js";import"./formfieldwrapper.constants-Cf3FNus8.js";import"./FormInternalsMixin-Bp3v849P.js";import"./input.constants-CjPMXE9w.js";import"./index-CLsqPk4O.js";import"./index-BIL5liCa.js";import"./radio.constants-Ldh9Q7mR.js";import"./index-Dzlq9PQd.js";import"./toggle.constants-DHKSi0ZW.js";import"./ControlTypeMixin-CGtXbBmF.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
