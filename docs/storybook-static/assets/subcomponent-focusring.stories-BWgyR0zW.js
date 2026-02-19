import{k as d}from"./iframe-M3ijzwy0.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-DWCYdM_5.js";import"./index-B8hadIjA.js";import"./index-DKw1HP-L.js";import"./index-Cnj2AI4u.js";import"./index-CAtDIWiw.js";import"./index-C7IMtnOI.js";import"./index-D6NuJwAL.js";import"./index-ZA_zkJd8.js";import"./index-Bb7rs6L2.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-C4UfzUmj.js";import"./buttonsimple.component-DWNQU9p4.js";import"./DisabledMixin-7EXHhexm.js";import"./KeyDownHandledMixin-CnuZvsMv.js";import"./index-BbwzIs6v.js";import"./button.utils-rNW36Ji7.js";import"./index-JPpbG9nX.js";import"./index-DTrDRi1E.js";import"./if-defined-D0L9-6S-.js";import"./index-XEXiAHBa.js";import"./IconNameMixin-CwMrXxQY.js";import"./index-3cxKMfsG.js";import"./badge.constants-CE6lYwGp.js";import"./linksimple.component-DpaRLaNu.js";import"./DataAriaLabelMixin-By13sHn4.js";import"./link.constants-4iAX0gtL.js";import"./index-C6RLDR4F.js";import"./popover.component-8kUPUpQF.js";import"./BackdropMixin-snl_Hu5n.js";import"./popover.constants-53Sbideg.js";import"./index-D1JK9EFs.js";import"./v4-CmTdKEVZ.js";import"./input.component-DbR5ZNlb.js";import"./directive-Ctav8iJK.js";import"./index-DI4lBf13.js";import"./formfieldwrapper.component-BawKyVHf.js";import"./formfieldwrapper.constants-BayEAJRs.js";import"./FormInternalsMixin-CqOscAxO.js";import"./input.constants-CXoegrn_.js";import"./index-6c1vxYtr.js";import"./index-DibiTw7k.js";import"./radio.constants-DmHwXD3C.js";import"./index-UmCxYoX7.js";import"./toggle.constants-Drp3JzyF.js";import"./ControlTypeMixin-_-zX3Tiu.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
