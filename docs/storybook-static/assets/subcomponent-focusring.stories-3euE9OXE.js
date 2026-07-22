import{k as p}from"./iframe-BYyr5gNp.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-Bdy1NKzE.js";import"./index-B1g2KAjD.js";import"./index-DOaaJxst.js";import"./index-CWI4nV7P.js";import"./index-DI_3Xja9.js";import"./index-DrctI2rP.js";import"./index-Bg6OA0Ss.js";import"./index-Di3m3PYQ.js";import"./index-Dnj2gkVb.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-4UJiEdnP.js";import"./buttonsimple.component-DC6EccVh.js";import"./DisabledMixin-DZUS_xf8.js";import"./KeyDownHandledMixin-BMQ2cMPK.js";import"./index-C5nfEzuL.js";import"./button.utils-rNW36Ji7.js";import"./index-Bcr4ur2A.js";import"./index-DTrDRi1E.js";import"./index-CWcGC4Il.js";import"./IconNameMixin-B8cpmMLS.js";import"./index-BQjZmtJa.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-qgTZ8B_G.js";import"./linksimple.component-BsBBvf3S.js";import"./DataAriaLabelMixin--hk8j5yY.js";import"./link.constants-zOLK7B5y.js";import"./index-HRcqidkp.js";import"./index-Bh74xFuH.js";import"./popover.component-CQ_b2JRM.js";import"./BackdropMixin-BQNyMO99.js";import"./popover.constants-0gP1D5zx.js";import"./input.component-CJmAdio0.js";import"./index-Bw-TG4Ag.js";import"./index-CQIWiHKa.js";import"./statusmessage.constants-Db7Uwmrl.js";import"./formfieldwrapper.component-Di6cng8h.js";import"./formfieldwrapper.constants-CueJun4P.js";import"./FormInternalsMixin-BktvnlBs.js";import"./input.constants-2BKKD2Lm.js";import"./index-CB-3jJVd.js";import"./index-DhIzWYP3.js";import"./radio.constants-DdRFeyAg.js";import"./index-DB1P2g9l.js";import"./toggle.constants-B6Skbu-T.js";import"./ControlTypeMixin-B9h3zr20.js";const et={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
    <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-button>Button</mdc-button>
      <mdc-avatarbutton
        initials="MD"
        size="48"
        src="https://picsum.photos/id/63/256"
        aria-label="Avatar Button"
      ></mdc-avatarbutton>
      <mdc-tab icon-name="placeholder-bold" tabindex="0" text="Tab 1" variant="pill">
        <mdc-badge slot="postfix" type="counter" counter="1"></mdc-badge>
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
        <mdc-badge slot="postfix" type="counter" counter="1"></mdc-badge>
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
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const it=["Example","FocusRingWithinHost"];export{t as Example,o as FocusRingWithinHost,it as __namedExportsOrder,et as default};
