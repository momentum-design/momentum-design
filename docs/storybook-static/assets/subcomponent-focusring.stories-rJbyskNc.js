import{k as d}from"./iframe-DpdbTchC.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-CVC1Opnc.js";import"./index-N3uDqlr7.js";import"./index-DEtacJwz.js";import"./index-DQmjjIYV.js";import"./index-WxIZNUjL.js";import"./index-Bg_ouFUE.js";import"./index-DlMey03s.js";import"./index-Baa5e3K7.js";import"./index-CjXFC7SB.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-Dwk5ELvx.js";import"./buttonsimple.component-DvdPzY7N.js";import"./DisabledMixin-CrZP289j.js";import"./KeyDownHandledMixin-B9W1g_ZS.js";import"./index-CyXF7i9z.js";import"./button.utils-rNW36Ji7.js";import"./index-DZDhbmdk.js";import"./index-DTrDRi1E.js";import"./if-defined-C59PxhCj.js";import"./index-B-ofodwc.js";import"./IconNameMixin-C4P1ftjN.js";import"./index-DcyNVWai.js";import"./badge.constants-ClpcuJCl.js";import"./linksimple.component-B8G33e4v.js";import"./DataAriaLabelMixin-DyzknH4g.js";import"./link.constants-CRxP_aLu.js";import"./index-UBWk2yWP.js";import"./popover.component--_-x2H2w.js";import"./BackdropMixin-BnOO9B-T.js";import"./popover.constants-abFICW6O.js";import"./index-CMTzBlPh.js";import"./v4-CmTdKEVZ.js";import"./input.component-BOWyWp-x.js";import"./directive-Ctav8iJK.js";import"./index-8Nbeqt_Y.js";import"./formfieldwrapper.component-8t1k0Ea1.js";import"./formfieldwrapper.constants-uQ-VKUm9.js";import"./FormInternalsMixin-BHsfjJBF.js";import"./input.constants-BQhc89G3.js";import"./index-Bbq7j14x.js";import"./index-rUmcA6It.js";import"./radio.constants-DAcisZJG.js";import"./index-CPSVn_7g.js";import"./toggle.constants-gS8_FMpV.js";import"./ControlTypeMixin-BqYUs702.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
