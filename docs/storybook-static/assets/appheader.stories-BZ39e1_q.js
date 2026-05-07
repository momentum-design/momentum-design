import{a2 as l,C as n,k as s,u as c}from"./iframe-C3hfbzB2.js";import{c as d,s as p}from"./commonArgTypes-BG7EqI50.js";import"./index-BbseEcuH.js";import"./index-AxbzUEtt.js";import"./index-BlL7wWPB.js";import"./index-ChACsW6p.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-B8IY-5bN.js";import"./buttonsimple.component-BVbZv0Ok.js";import"./DisabledMixin-DlPI71mV.js";import"./KeyDownHandledMixin-CH4eF85E.js";import"./index-CTNWDOHR.js";import"./button.utils-rNW36Ji7.js";import"./index-C_xp-PMw.js";import"./index-DTrDRi1E.js";import"./chip.component-DZ3ef2kR.js";import"./IconNameMixin-C1-thCxt.js";import"./staticchip.component-ClnbfdUX.js";import"./if-defined-xbn7Vu_G.js";import"./index-CGNOvakY.js";const m=l`
  :host {
    --mdc-appheader-height: 4rem;
  }

  :host::part(container) {
    display: flex;
    align-items: center;
    width: 100%;
    height: var(--mdc-appheader-height);
    padding: 1rem;
  }

  :host::part(leading-section),
  :host::part(center-section),
  :host::part(trailing-section) {
    display: flex;
    height: 100%;
  }

  :host::part(leading-section) {
    justify-content: flex-start;
    flex: 1;
  }

  :host::part(center-section) {
    justify-content: center;
    align-items: center;
  }

  :host::part(trailing-section) {
    justify-content: flex-end;
    flex: 1;
  }
`,b=[m],a=class a extends n{render(){return s`
      <header part="container">
        <div part="leading-section">
          <slot name="leading"></slot>
        </div>
        <div part="center-section"><slot name="center"></slot></div>
        <div part="trailing-section">
          <slot name="trailing"></slot>
        </div>
      </header>
    `}};a.styles=[...n.styles,...b];let e=a;const h=c.constructTagName("appheader");e.register(h);const O={title:"Components/appheader",tags:["autodocs"],component:"mdc-appheader",argTypes:{...d,...p}},t={render:()=>s` <mdc-appheader>
      <div slot="leading" style="display: flex; align-items: center; gap: 8px">
        <mdc-button
          variant="tertiary"
          size="32"
          prefix-icon="application-panel-bold"
          type="button"
          role="button"
          tabindex="0"
          aria-label="icon button"
        ></mdc-button>
        <mdc-brandvisual name="momentum-design-logo-dark-color-horizontal" style="display: block"></mdc-brandvisual>
        <mdc-chip color="cobalt" label="cobalt" icon-name=""></mdc-chip>
      </div>
      <div slot="center">Center Search Icon placeholder</div>
      <div slot="trailing" style="display: flex; align-items: center; gap: 8px">
        <mdc-avatar size="32" name="avatar" src="https://picsum.photos/id/8/5000/3333"></mdc-avatar>
        <mdc-button
          variant="tertiary"
          size="32"
          prefix-icon="waffle-menu-bold"
          type="button"
          role="button"
          tabindex="0"
          aria-label="icon button"
        ></mdc-button>
      </div>
    </mdc-appheader>`};var i,o,r;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => html\` <mdc-appheader>
      <div slot="leading" style="display: flex; align-items: center; gap: 8px">
        <mdc-button
          variant="tertiary"
          size="32"
          prefix-icon="application-panel-bold"
          type="button"
          role="button"
          tabindex="0"
          aria-label="icon button"
        ></mdc-button>
        <mdc-brandvisual name="momentum-design-logo-dark-color-horizontal" style="display: block"></mdc-brandvisual>
        <mdc-chip color="cobalt" label="cobalt" icon-name=""></mdc-chip>
      </div>
      <div slot="center">Center Search Icon placeholder</div>
      <div slot="trailing" style="display: flex; align-items: center; gap: 8px">
        <mdc-avatar size="32" name="avatar" src="https://picsum.photos/id/8/5000/3333"></mdc-avatar>
        <mdc-button
          variant="tertiary"
          size="32"
          prefix-icon="waffle-menu-bold"
          type="button"
          role="button"
          tabindex="0"
          aria-label="icon button"
        ></mdc-button>
      </div>
    </mdc-appheader>\`
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const $=["Example"];export{t as Example,$ as __namedExportsOrder,O as default};
