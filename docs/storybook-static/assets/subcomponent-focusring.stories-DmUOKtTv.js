import{k as d}from"./iframe-C252fD8g.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-B4oCoTdq.js";import"./index-DFod9-Fw.js";import"./index-DSR97rBs.js";import"./index-D_ZJFmgd.js";import"./index-BoWZuO9T.js";import"./index-tuxiHfAn.js";import"./index-But4gao7.js";import"./index-UsKmxEym.js";import"./index-D-TI0mdB.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-C2f2OCHJ.js";import"./buttonsimple.component-C-HII-nz.js";import"./DisabledMixin-DVtDJQvO.js";import"./KeyDownHandledMixin-DzpgmDKR.js";import"./index-YE1ol78E.js";import"./button.utils-rNW36Ji7.js";import"./index-DlsJDHpW.js";import"./index-DTrDRi1E.js";import"./if-defined-JuF83bhN.js";import"./index-PfWN-OyL.js";import"./IconNameMixin-vzCUOe54.js";import"./index-CsrAxBCn.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-FhdwAMLd.js";import"./linksimple.component-C2eK6vjA.js";import"./DataAriaLabelMixin-qqDg6DtS.js";import"./link.constants-B-IsihnL.js";import"./index-CmJB1Msd.js";import"./popover.component-pHXCH2yn.js";import"./BackdropMixin-GHaayvZg.js";import"./popover.constants-RYfYgu80.js";import"./index-DjL1EH8h.js";import"./v4-CmTdKEVZ.js";import"./input.component-C-vxMN_s.js";import"./directive-Ctav8iJK.js";import"./index-CCKLgJPN.js";import"./formfieldwrapper.component-DqUkBCBw.js";import"./formfieldwrapper.constants-CjTwgvqw.js";import"./FormInternalsMixin-Dfg8iEd3.js";import"./input.constants-DGuXkbPo.js";import"./index-QLwm36FX.js";import"./index-BFRAsZ3k.js";import"./radio.constants-Dbu3pbYS.js";import"./index-Bm0X7mQk.js";import"./toggle.constants-rIgr8saw.js";import"./ControlTypeMixin-CLZ8Hz7G.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
