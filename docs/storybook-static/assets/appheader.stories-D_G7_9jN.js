import{i as p,C as i,k as a,u as c}from"./iframe-D1RGJO9g.js";import{c as d,s as m}from"./commonArgTypes-BluK8w5L.js";import"./index-B4ra579S.js";import"./index-DFBxXtO-.js";import"./index-B4UQvp-W.js";import"./index-9d93yxHz.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-DqAqkrM0.js";import"./button.constants-ctBMf0Nr.js";import"./buttonsimple.constants-DiW5GZvm.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-bVzR6LPV.js";import"./keys-hFXe221I.js";import"./DisabledMixin-CFnJTGkD.js";import"./TabIndexMixin-Bl7-LDRA.js";import"./index-CQUTSyim.js";import"./button.utils-rNW36Ji7.js";import"./index-DGuVKFIz.js";import"./index-0dAn93WX.js";import"./index-DTrDRi1E.js";import"./chip.component-CHu4ykqw.js";import"./IconNameMixin-DzAM8Ocl.js";import"./staticchip.component-BOFS66gB.js";import"./index-DcbpN_bp.js";import"./if-defined-CEt-h5rX.js";import"./index-DI_rnAfg.js";const b=p`
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
    `}};n.styles=[...i.styles,...h];let e=n;const u=c.constructTagName("appheader");e.register(u);const g=l=>a` <mdc-appheader args.property="${l.property}"></mdc-appheader>`,K={title:"Components/appheader",tags:["autodocs"],component:"mdc-appheader",render:g,argTypes:{...d,...m}},t={render:()=>a` <mdc-appheader>
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
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const L=["Example"];export{t as Example,L as __namedExportsOrder,K as default};
