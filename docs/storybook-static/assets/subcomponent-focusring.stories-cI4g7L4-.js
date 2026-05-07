import{k as p}from"./iframe-C9ATrnz3.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-Bz31w0Iu.js";import"./index-BMtwGskn.js";import"./index-YKALQFVZ.js";import"./index-0kNeQpnl.js";import"./index-DuW5m_12.js";import"./index-B6LnPJo7.js";import"./index-DrYrguAs.js";import"./index-BAsOt9WG.js";import"./index-Ciq3LHJg.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-IZbKzNT2.js";import"./buttonsimple.component-BZw3jwiQ.js";import"./DisabledMixin-BoW9hNfQ.js";import"./KeyDownHandledMixin-CRIKOp1z.js";import"./index-BxljQXDw.js";import"./button.utils-rNW36Ji7.js";import"./index-B_NhK6Rp.js";import"./index-DTrDRi1E.js";import"./if-defined-B-BKLdpQ.js";import"./index-BIMJjvgT.js";import"./IconNameMixin-CVFStuni.js";import"./index-CPNp3T_C.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-Cj6waL65.js";import"./linksimple.component-ZtYECAcW.js";import"./DataAriaLabelMixin-DLtQFpZy.js";import"./link.constants-fDn8Qa1C.js";import"./index-B5JtsWxO.js";import"./popover.component-CLbC8nDk.js";import"./BackdropMixin-BwMUi7GY.js";import"./popover.constants-DkhUpiqR.js";import"./index-BacFC44t.js";import"./v4-CmTdKEVZ.js";import"./input.component-CBFZ3Xw-.js";import"./directive-Ctav8iJK.js";import"./index-AOjTsVQ_.js";import"./formfieldwrapper.component-oxBC9Crs.js";import"./formfieldwrapper.constants-DSMQwLac.js";import"./FormInternalsMixin-CXwIRecP.js";import"./input.constants-DeY7n19c.js";import"./index-zA6JB7PU.js";import"./index-Cdb5XXtn.js";import"./radio.constants-DoFeYgqm.js";import"./index-rQuuuZQq.js";import"./toggle.constants-D35r1zun.js";import"./ControlTypeMixin-CgCAcEJS.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
