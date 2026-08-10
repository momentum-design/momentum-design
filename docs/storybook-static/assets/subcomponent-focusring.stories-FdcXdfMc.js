import{k as p}from"./iframe-CfqIV4SZ.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-DgS5sAK5.js";import"./index-BjY-mMZu.js";import"./index-BynhcWBR.js";import"./index-DosarJ4R.js";import"./index-DgUhHM-g.js";import"./index-DZwnueAF.js";import"./index-Dr3P-3F3.js";import"./index-BaXfNeDR.js";import"./index-NH_6gXYS.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-DAePTriX.js";import"./buttonsimple.component-BP3oeg87.js";import"./DisabledMixin-CkfGSezk.js";import"./KeyDownHandledMixin-D2pESj_U.js";import"./index-At6cFAL_.js";import"./button.utils-rNW36Ji7.js";import"./index-Cp5pBF37.js";import"./index-DTrDRi1E.js";import"./index-CqU4BCsN.js";import"./IconNameMixin-PP5J0T42.js";import"./index-iYON44Lr.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-DanrfSrb.js";import"./linksimple.component-CPzlTCrx.js";import"./DataAriaLabelMixin-DtyBWCgx.js";import"./link.constants-CQW4NgLv.js";import"./index-ByA_feq3.js";import"./index-m-rHsK4F.js";import"./popover.component-94gWWMV6.js";import"./BackdropMixin-r0_gKnDt.js";import"./FocusTrapMixin-gN7h5H5c.js";import"./popover.constants-B5dJ7W8v.js";import"./input.component-DUTTUtqq.js";import"./index-CI2Gz6JO.js";import"./index-ZORnzZ1t.js";import"./statusmessage.constants-EF8kOIHY.js";import"./formfieldwrapper.component-a_HqAONL.js";import"./formfieldwrapper.constants-C06B5g95.js";import"./FormInternalsMixin-BvXsH9rr.js";import"./input.constants-3oB3Jx38.js";import"./index-B9vL_ymB.js";import"./index-D2d_qjSV.js";import"./radio.constants-DNSKs8er.js";import"./index-Bk_1fDvL.js";import"./toggle.constants-B6_F4sco.js";import"./ControlTypeMixin-D-dsqdXp.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
