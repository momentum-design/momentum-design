import{k as d}from"./iframe-BfLztatZ.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-DzT_ni0q.js";import"./index-D10JDrIr.js";import"./index-D84P94rY.js";import"./index-DmIaBg7_.js";import"./index-eMFwNbjW.js";import"./index-HBiamYEL.js";import"./index-Cw5HK099.js";import"./index-D92gd8qQ.js";import"./index-CuT3stmX.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-DLTOMM7E.js";import"./buttonsimple.component-DOTFGcz9.js";import"./TabIndexMixin-BdI_GF1t.js";import"./DisabledMixin-nYMYrGUf.js";import"./button.utils-rNW36Ji7.js";import"./index-B4y05MQQ.js";import"./index-FOhkjjRI.js";import"./index-DTrDRi1E.js";import"./if-defined-D9kF3aOg.js";import"./index-Dvc47sWl.js";import"./IconNameMixin-DK5lKFF5.js";import"./index-CxvKQKTo.js";import"./badge.constants-0rdHintS.js";import"./linksimple.component-138GGNN2.js";import"./DataAriaLabelMixin-CrrpWauq.js";import"./link.constants-C6EtrMxz.js";import"./index-C3LT2Lar.js";import"./base-DIkkzJ-c.js";import"./popover.component-DEekPGAe.js";import"./BackdropMixin-DvKy5aHK.js";import"./index-C2Q1Hn1e.js";import"./v4-CmTdKEVZ.js";import"./input.component-CNol4mgr.js";import"./directive-Ctav8iJK.js";import"./index-Dyb5UM7q.js";import"./formfieldwrapper.component-C8XhzocO.js";import"./formfieldwrapper.constants--gmH-nPR.js";import"./FormInternalsMixin-CB3pFV3T.js";import"./query-BPxBhMfF.js";import"./input.constants-GT2jL8l0.js";import"./index-ConmkMru.js";import"./index-E5cshU7M.js";import"./radio.constants-DAMU5MaF.js";import"./index-YQoxqS1Y.js";import"./toggle.constants-D3uQ1QiH.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
