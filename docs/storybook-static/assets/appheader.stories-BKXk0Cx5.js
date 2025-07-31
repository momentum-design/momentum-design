import{i as l,k as a}from"./lit-element-D5KKan5q.js";import{C as i,u as c}from"./index-C9z9WAEj.js";import{c as d,s as m}from"./commonArgTypes-BluK8w5L.js";import"./index-Be4ea6O2.js";import"./index-DPaR44d7.js";import"./index-P9KeQZLU.js";import"./index-CVU4Yycf.js";import"./button.component-D2q6UH7t.js";import"./state-CSSggq2n.js";import"./button.constants-Bee4ioCR.js";import"./buttonsimple.constants-BcidWKgH.js";import"./roles-BH_hBfTz.js";import"./buttonsimple.component-VcDu9Hac.js";import"./keys-Hz01Ianf.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-B-GnYs90.js";import"./button.utils-rNW36Ji7.js";import"./index-C1srVIr4.js";import"./iframe-DelgwV04.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./chip.component-xd7hRp3y.js";import"./IconNameMixin-CujGSn0t.js";import"./index-BrLJ_9IK.js";import"./if-defined-D5BV9-c0.js";import"./index-CoWwupmo.js";const b=l`
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
    flex: 1;
    display: flex;
    height: 100%;
  }

  :host::part(leading-section) {
    justify-content: flex-start;
  }

  :host::part(center-section) {
    justify-content: center;
    align-items: center;
  }

  :host::part(trailing-section) {
    justify-content: flex-end;
  }
`,h=[b],n=class n extends i{render(){return a` <header part="container">
      <div part="leading-section">
        <slot name="leading"></slot>
      </div>
      <div part="center-section">
        <slot name="center"></slot>
      </div>
      <div part="trailing-section">
        <slot name="trailing"></slot>
      </div>
    </header>`}};n.styles=[...i.styles,...h];let e=n;const u=c.constructTagName("appheader");e.register(u);const g=p=>a` <mdc-appheader args.property="${p.property}"></mdc-appheader>`,Q={title:"Components/appheader",tags:["autodocs"],component:"mdc-appheader",render:g,parameters:{badges:["stable"]},argTypes:{...d,...m}},t={render:()=>a` <mdc-appheader>
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
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const R=["Example"];export{t as Example,R as __namedExportsOrder,Q as default};
