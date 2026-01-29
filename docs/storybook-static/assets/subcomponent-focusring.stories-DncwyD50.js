import{k as d}from"./iframe-CkDSCEjt.js";import{h as p}from"./utils-D6nie9pS.js";import"./index-dsSja--j.js";import"./index-BytZTLk1.js";import"./index-_BoR4Rk6.js";import"./index-B_9Pq66y.js";import"./index-DW7UkUR8.js";import"./index-BxNdCxQl.js";import"./index-B4IshVwL.js";import"./index-DJl6ddM7.js";import"./index-B5bMRP8c.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-31LctTbG.js";import"./buttonsimple.component-B1oyJoTu.js";import"./DisabledMixin-B2HXIz_U.js";import"./KeyToActionMixin-D50HlRl3.js";import"./button.utils-rNW36Ji7.js";import"./index-BZE8OXC2.js";import"./index-BkxbWL5q.js";import"./index-DTrDRi1E.js";import"./if-defined-0j_0xcOz.js";import"./index-N6iiZFed.js";import"./IconNameMixin-Og7SJoHn.js";import"./index-0hebyj-W.js";import"./badge.constants-D-i_GVjQ.js";import"./linksimple.component-CcBmn7Ty.js";import"./DataAriaLabelMixin-CPm-Jsle.js";import"./link.constants-DTTi86oY.js";import"./index-mpb0ji78.js";import"./popover.component-5KK-aGWf.js";import"./BackdropMixin-BNxF4h03.js";import"./dom-BlZvhF8F.js";import"./popover.constants-CBMvGRXF.js";import"./index-yGNnt03p.js";import"./v4-CmTdKEVZ.js";import"./input.component-B2DbJDW1.js";import"./directive-Ctav8iJK.js";import"./index-DMD83nR_.js";import"./formfieldwrapper.component-D0lMjeBa.js";import"./formfieldwrapper.constants--P7WD5m-.js";import"./FormInternalsMixin-BomV-1fz.js";import"./input.constants-rt1tyElu.js";import"./index-CD5UsQAp.js";import"./index-j2dVkqlS.js";import"./radio.constants-B5egH6eR.js";import"./index-9_6q8fdB.js";import"./toggle.constants-D4y2GVT6.js";import"./ControlTypeMixin-BoBfraXU.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
