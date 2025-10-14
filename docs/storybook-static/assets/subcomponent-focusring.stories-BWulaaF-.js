import{k as d}from"./iframe-RgXKid-6.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-X946cmRL.js";import"./index-DgcsdlFb.js";import"./index-D-HNiTuj.js";import"./index-uKobVIff.js";import"./index-9IodcOKs.js";import"./index-C8fwvhBQ.js";import"./index-C7zc39I-.js";import"./index-BeedA9Rn.js";import"./index-Cep17tKw.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CTsxgoaj.js";import"./buttonsimple.component-B-som85a.js";import"./keys-hFXe221I.js";import"./DisabledMixin-pDeD_hZP.js";import"./TabIndexMixin-FGokwLhn.js";import"./button.utils-rNW36Ji7.js";import"./index-BXKzNGcC.js";import"./index-CHjwiPzJ.js";import"./index-DTrDRi1E.js";import"./if-defined-s8sYxEiT.js";import"./index-DAcxB7-_.js";import"./IconNameMixin-Bb6Ecb3-.js";import"./index-DBn_lx4K.js";import"./badge.constants-z28LOyJq.js";import"./linksimple.component-CC5CaJmy.js";import"./DataAriaLabelMixin-6BwteFsj.js";import"./link.constants-Bjqb8lIe.js";import"./index-3nbfBoje.js";import"./popover.component-DJXvzUTW.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-DuiyJkUH.js";import"./index-BjxyWZTe.js";import"./v4-CmTdKEVZ.js";import"./input.component-B-MG2ede.js";import"./directive-Ctav8iJK.js";import"./index-BMa28h62.js";import"./formfieldwrapper.component-BQyBThGl.js";import"./FormInternalsMixin-DOBgA3UG.js";import"./query-DXShiZ7f.js";import"./input.constants-BuMiMRfJ.js";import"./index-eHD9T47T.js";import"./index-DXcu3vP8.js";import"./radio.constants-BPC4cWOP.js";import"./index-BqVKTYEU.js";import"./toggle.constants-a6MPxfre.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
