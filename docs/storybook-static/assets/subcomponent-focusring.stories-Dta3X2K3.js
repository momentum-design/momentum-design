import{k as d}from"./iframe-qMFey-4N.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-BYKCq07G.js";import"./index-bmTCOFRK.js";import"./index-vLMWQIwm.js";import"./index-C5AaSmAb.js";import"./index-D87NJK7B.js";import"./index-CjtiDz07.js";import"./index-CamoIQI4.js";import"./index-CmYDuwPh.js";import"./index-Cr2P6n5z.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-BqxneIo6.js";import"./buttonsimple.component-Ln2-quGn.js";import"./DisabledMixin-DFNWVipU.js";import"./KeyDownHandledMixin-Ca_tehqy.js";import"./index-D5rpDK7t.js";import"./button.utils-rNW36Ji7.js";import"./index-YlSjVWT7.js";import"./index-DTrDRi1E.js";import"./if-defined-Dt3SjqsG.js";import"./index-BePpRdnz.js";import"./IconNameMixin-zFMom21O.js";import"./index-BVL1LGIG.js";import"./badge.constants-C08eaz73.js";import"./linksimple.component-DtylQ_dm.js";import"./DataAriaLabelMixin-Be1-okds.js";import"./link.constants-DJ_aomI7.js";import"./index-B_0lydvg.js";import"./popover.component-Dfapqifq.js";import"./BackdropMixin-B92BGwqe.js";import"./popover.constants-6GVt1Dsr.js";import"./index-DRwaCzf-.js";import"./v4-CmTdKEVZ.js";import"./input.component-CzbcjXbh.js";import"./directive-Ctav8iJK.js";import"./index-Di1g4lpB.js";import"./formfieldwrapper.component-Do6qAl61.js";import"./formfieldwrapper.constants-B53b75Aj.js";import"./FormInternalsMixin-BpdJtg5B.js";import"./input.constants-rpXcxsbU.js";import"./index-DqxhetMX.js";import"./index-5FMwEcS2.js";import"./radio.constants-CehNc5lR.js";import"./index-CuAVrMqq.js";import"./toggle.constants-CDS-OLau.js";import"./ControlTypeMixin-Cyd48YZJ.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
