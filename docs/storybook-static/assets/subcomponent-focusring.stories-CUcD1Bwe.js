import{k as p}from"./iframe-MUwcZo0b.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-CnQkMBHG.js";import"./index-YGhjQXVQ.js";import"./index-raaEgG6H.js";import"./index-DshkS7ZR.js";import"./index-DYcFXAqK.js";import"./index-DWf-M28b.js";import"./index-C1gZinqT.js";import"./index-DQPrtVfw.js";import"./index-Dhj3rYXS.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CNVpqDLh.js";import"./buttonsimple.component-DYqenrt3.js";import"./DisabledMixin-BEHthWuB.js";import"./KeyDownHandledMixin-uwD7VgE6.js";import"./index-BYMw0T9A.js";import"./button.utils-rNW36Ji7.js";import"./index-DfCx3ynW.js";import"./index-DTrDRi1E.js";import"./index-CdK_E1WG.js";import"./IconNameMixin-DnB3UGUc.js";import"./index-D3neiHCc.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-BZS7LPJN.js";import"./linksimple.component-_HnMiNCR.js";import"./DataAriaLabelMixin-C-2TZlLS.js";import"./link.constants-CEwV9WLr.js";import"./index-DQMRY-xY.js";import"./index-3XHoKH8t.js";import"./popover.component-dm0I6DUg.js";import"./BackdropMixin-BlAgh6Ha.js";import"./popover.constants-CXPU2R0X.js";import"./input.component-BWZvd2pC.js";import"./index-DoRS_DRP.js";import"./index-CJdKEMrz.js";import"./statusmessage.constants-DSmYPQIN.js";import"./formfieldwrapper.component-CUmkCvSW.js";import"./formfieldwrapper.constants-BWh6JG58.js";import"./FormInternalsMixin-DZGalUeH.js";import"./input.constants-DwqHDsBr.js";import"./index-B-t5_clK.js";import"./index-CB9t7gid.js";import"./radio.constants-CRLkXoGR.js";import"./index-C-TwOts7.js";import"./toggle.constants-BWJhRirK.js";import"./ControlTypeMixin-CQLmNGmq.js";const et={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const it=["Example","FocusRingWithinHost"];export{t as Example,o as FocusRingWithinHost,it as __namedExportsOrder,et as default};
