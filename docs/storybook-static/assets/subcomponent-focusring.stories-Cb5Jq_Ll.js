import{k as d}from"./iframe-BW4UmAgY.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-CXkVKGnb.js";import"./index-Bmzg7bd-.js";import"./index-ol_-J9KP.js";import"./index-BG6dhJLK.js";import"./index-FxR68Mml.js";import"./index-D78BUOJH.js";import"./index-BVOTnUvJ.js";import"./index-CzpHmC8J.js";import"./index-DVU7Suxl.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-BUkRrMDW.js";import"./buttonsimple.component-CPieHeSw.js";import"./DisabledMixin-XtsmlmBf.js";import"./KeyDownHandledMixin-XcCAz2Ph.js";import"./index-NIe0uuEb.js";import"./button.utils-rNW36Ji7.js";import"./index-vmvGAwgO.js";import"./index-DTrDRi1E.js";import"./if-defined-BjnxAPOE.js";import"./index-CxXZvKag.js";import"./IconNameMixin-Xkia27pJ.js";import"./index-BRqbEc0S.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-C13eqP34.js";import"./linksimple.component-Dxo6UqI0.js";import"./DataAriaLabelMixin-DTF8YUvz.js";import"./link.constants-CEHomozG.js";import"./index-DH2YrraQ.js";import"./popover.component-DNI6mjdI.js";import"./BackdropMixin-DK8BpFJ5.js";import"./popover.constants-B6EWQTcd.js";import"./index-C7RV9N6r.js";import"./v4-CmTdKEVZ.js";import"./input.component-MntFRVjB.js";import"./directive-Ctav8iJK.js";import"./index-BL4smMBg.js";import"./formfieldwrapper.component-BIdq2PlC.js";import"./formfieldwrapper.constants-BousYEk9.js";import"./FormInternalsMixin-_SN12oGz.js";import"./input.constants-Cl_x_qiB.js";import"./index-C4ZNXRtl.js";import"./index-B4Slc8_H.js";import"./radio.constants-BI7ia9um.js";import"./index-DLgU5JH9.js";import"./toggle.constants-BmLgoTI7.js";import"./ControlTypeMixin-DakG43-W.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const at=["Example","FocusRingWithinHost"];export{t as Example,o as FocusRingWithinHost,at as __namedExportsOrder,it as default};
