import{a2 as l,C as n,k as s,u as c}from"./iframe-z54V7R-I.js";import{c as d,s as p}from"./commonArgTypes-BG7EqI50.js";import"./index-DVSZoP5w.js";import"./index-CBEOpwNU.js";import"./index-DbexEsLW.js";import"./index-DUXo3SbP.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-Dxa6i38J.js";import"./buttonsimple.component-CUu1iVGZ.js";import"./DisabledMixin-BPk196UL.js";import"./KeyDownHandledMixin-DzCOe6p0.js";import"./index-BxJNj_9N.js";import"./button.utils-rNW36Ji7.js";import"./index-B5KrUTtI.js";import"./index-DTrDRi1E.js";import"./chip.component-DkinOKuO.js";import"./IconNameMixin-CNPqIZ3u.js";import"./staticchip.component-CjJ8d5pU.js";import"./if-defined-tLTANQnt.js";import"./index-D3D2ApvG.js";const m=l`
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
