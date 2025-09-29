import{k as p}from"./iframe-CjQ7Po3D.js";import{a as d}from"./utils-CFOyPOhY.js";import"./index-Bw1IfTEA.js";import"./index-C945Q8jU.js";import"./index-EIouphrQ.js";import"./index-5L_Io860.js";import"./index-DQuYwwGa.js";import"./index-D1-FPlb0.js";import"./index-BqirH0TZ.js";import"./index-5j4EmX-f.js";import"./index-CbJZXp90.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-5CwjGCoO.js";import"./button.constants-BFmXBtee.js";import"./buttonsimple.constants-BFJZbNAy.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-zxBeWk1U.js";import"./keys-hFXe221I.js";import"./DisabledMixin-C9Z8HYNo.js";import"./TabIndexMixin-CF3kEJc5.js";import"./index-DD4vGOEX.js";import"./button.utils-rNW36Ji7.js";import"./index-B_ibqgwr.js";import"./index-BUV9ka-C.js";import"./index-DTrDRi1E.js";import"./if-defined-nrQrlDVv.js";import"./index-BB9z4gfx.js";import"./IconNameMixin-CTkF2V4Z.js";import"./index-DjknB3gi.js";import"./index-Bl9rWpTe.js";import"./badge.constants-DjZ9Xi3h.js";import"./linksimple.component-O917qZMR.js";import"./DataAriaLabelMixin-ClVLmbfi.js";import"./link.constants-D-Xbj6Xd.js";import"./index-DeWLkwz2.js";import"./popover.component-CER3cVht.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-C-zwi_2t.js";import"./index-BXjLymTv.js";import"./v4-CmTdKEVZ.js";import"./input.component-836X9-e-.js";import"./directive-Ctav8iJK.js";import"./index-DctLzBgJ.js";import"./formfieldwrapper.component-DPfA9KHN.js";import"./FormInternalsMixin-CAPsdovu.js";import"./query-DXShiZ7f.js";import"./input.constants-BOH-h8Ak.js";import"./index-DC3fzT9K.js";import"./index-DpwEhJ2T.js";import"./radio.constants-CGfEOB2d.js";import"./index-CnwaRxtz.js";import"./toggle.constants-D0I7gkzJ.js";const pt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
        <mdc-badge slot="badge" type="counter" counter="1"></mdc-badge>
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
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const dt=["Example","FocusRingWithinHost"];export{t as Example,o as FocusRingWithinHost,dt as __namedExportsOrder,pt as default};
