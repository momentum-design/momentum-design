import{k as d}from"./iframe-D4-7yPtR.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-Dnx6etS4.js";import"./index-IviprEgL.js";import"./index-BaJ7KRtq.js";import"./index-DtGJvyl-.js";import"./index-DfPBc4PJ.js";import"./index-oAbkG-8_.js";import"./index-DvWXLIrZ.js";import"./index-CggBM55l.js";import"./index-CRZZsjTz.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-Bx8liHru.js";import"./buttonsimple.component-CHkoRPZ-.js";import"./keys-hFXe221I.js";import"./DisabledMixin-C3-q3_TG.js";import"./TabIndexMixin-RAlRKjZE.js";import"./button.utils-rNW36Ji7.js";import"./index-DXK1NqDr.js";import"./index-BuyizWMg.js";import"./index-DTrDRi1E.js";import"./if-defined-ClFTYvOP.js";import"./index-D4ctdf-b.js";import"./IconNameMixin-DqTpjkhv.js";import"./index-CczYBaVH.js";import"./badge.constants-CFLdmdsP.js";import"./linksimple.component-CYwp7MQw.js";import"./DataAriaLabelMixin-DyyI_9zZ.js";import"./link.constants-nhjkyD5P.js";import"./index-B9oFsK2L.js";import"./popover.component-TL5Gwzij.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-B_Du2Jnd.js";import"./index-CiZdVXvY.js";import"./v4-CmTdKEVZ.js";import"./input.component-BAx8xWQh.js";import"./directive-Ctav8iJK.js";import"./index-DXEZR100.js";import"./formfieldwrapper.component-KLDuKJS3.js";import"./formfieldwrapper.constants-DE35OIE7.js";import"./FormInternalsMixin-SZACaLk3.js";import"./query-DXShiZ7f.js";import"./input.constants-CbG7irjc.js";import"./index-DnNppdkN.js";import"./index-D6ohCnzh.js";import"./radio.constants-CHSBWX_d.js";import"./index-D0zPY5co.js";import"./toggle.constants-BkwTA68t.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
