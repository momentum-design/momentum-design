import{S as c,G as i,k as a,u as p}from"./iframe-Bmqk5ncS.js";import{c as d,s as m}from"./commonArgTypes-BluK8w5L.js";import"./index-9jv0kyio.js";import"./index-1b-q4QD8.js";import"./index-DvJEFrSG.js";import"./index-Dlc1GpMM.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-DOKkPvZM.js";import"./buttonsimple.component-DJ5naDiX.js";import"./keys-hFXe221I.js";import"./DisabledMixin-CJC0_YR8.js";import"./TabIndexMixin-CoFbKfFN.js";import"./button.utils-rNW36Ji7.js";import"./index-BMN--PIx.js";import"./index-Bo7GamiG.js";import"./index-DTrDRi1E.js";import"./chip.component-CyBpZhTU.js";import"./IconNameMixin-BxH3CgDw.js";import"./staticchip.component-CbjF9bAm.js";import"./if-defined-CEMHl27f.js";import"./index-Buxhf2Fz.js";const b=c`
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
`,h=[b],n=class n extends i{render(){return a`
      <header part="container">
        <div part="leading-section">
          <slot name="leading"></slot>
        </div>
        <div part="center-section"><slot name="center"></slot></div>
        <div part="trailing-section">
          <slot name="trailing"></slot>
        </div>
      </header>
    `}};n.styles=[...i.styles,...h];let e=n;const u=p.constructTagName("appheader");e.register(u);const g=l=>a` <mdc-appheader args.property="${l.property}"></mdc-appheader>`,B={title:"Components/appheader",tags:["autodocs"],component:"mdc-appheader",render:g,argTypes:{...d,...m}},t={render:()=>a` <mdc-appheader>
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
    </mdc-appheader>`};var r,o,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const D=["Example"];export{t as Example,D as __namedExportsOrder,B as default};
