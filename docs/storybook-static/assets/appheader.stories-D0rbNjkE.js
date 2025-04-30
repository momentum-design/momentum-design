import{i as l,k as a}from"./lit-element-D5KKan5q.js";import{C as r,u as c}from"./index-C9z9WAEj.js";import{c as d,s as m}from"./commonArgTypes-BluK8w5L.js";import"./index-RuBbIAJj.js";import"./index-DOlRi1Un.js";import"./index-CMqPqRAT.js";import"./index-aO7j7ZPJ.js";import"./button.component-DF6F2T9a.js";import"./state-CSSggq2n.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./buttonsimple.component-C1CVlJGY.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-CcXofQbA.js";import"./button.utils-rNW36Ji7.js";import"./index-Bz3paHlu.js";import"./iframe-CJYnf_PP.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./chip.component-BE5KG_N4.js";import"./IconNameMixin-CujGSn0t.js";import"./text.constants-ZF0jM5wn.js";import"./index-D3DhXfcW.js";import"./if-defined-D5BV9-c0.js";import"./index-C8DDgg-9.js";const b=l`
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
`,h=[b],i=class i extends r{render(){return a`
      <header part="container">
        <div part="leading-section">
          <slot name="leading"></slot>
        </div>
        <div part="center-section">
          <slot name="center"></slot>
        </div>
        <div part="trailing-section">
          <slot name="trailing"></slot>
        </div>
      </header>`}};i.styles=[...r.styles,...h];let e=i;const u=c.constructTagName("appheader");e.register(u);const g=p=>a`
  <mdc-appheader args.property="${p.property}"></mdc-appheader>`,P={title:"Components/appheader",tags:["autodocs"],component:"mdc-appheader",render:g,parameters:{badges:["stable"]},argTypes:{...d,...m}},t={render:()=>a`
    <mdc-appheader>
      <div slot="leading" style="display: flex; align-items: center; gap: 8px">
        <mdc-button variant="tertiary" size="32" prefix-icon="application-panel-bold"
        type="button" role="button" tabindex="0" aria-label="icon button"></mdc-button>
        <mdc-brandvisual name="momentum-design-logo-dark-color-horizontal" 
        style="display: block"></mdc-brandvisual>
        <mdc-chip color="cobalt" label="cobalt" icon-name=""></mdc-chip>
      </div>
      <div slot="center">Center Search Icon placeholder</div>
      <div slot="trailing" style="display: flex; align-items: center; gap: 8px">
        <mdc-avatar size="32" name="avatar" src="https://picsum.photos/id/8/5000/3333"></mdc-avatar>
        <mdc-button variant="tertiary" size="32" prefix-icon="waffle-menu-bold"
        type="button" role="button" tabindex="0" aria-label="icon button"></mdc-button>
      </div>
    </mdc-appheader>`};var o,n,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-appheader>
      <div slot="leading" style="display: flex; align-items: center; gap: 8px">
        <mdc-button variant="tertiary" size="32" prefix-icon="application-panel-bold"
        type="button" role="button" tabindex="0" aria-label="icon button"></mdc-button>
        <mdc-brandvisual name="momentum-design-logo-dark-color-horizontal" 
        style="display: block"></mdc-brandvisual>
        <mdc-chip color="cobalt" label="cobalt" icon-name=""></mdc-chip>
      </div>
      <div slot="center">Center Search Icon placeholder</div>
      <div slot="trailing" style="display: flex; align-items: center; gap: 8px">
        <mdc-avatar size="32" name="avatar" src="https://picsum.photos/id/8/5000/3333"></mdc-avatar>
        <mdc-button variant="tertiary" size="32" prefix-icon="waffle-menu-bold"
        type="button" role="button" tabindex="0" aria-label="icon button"></mdc-button>
      </div>
    </mdc-appheader>\`
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const Q=["Example"];export{t as Example,Q as __namedExportsOrder,P as default};
