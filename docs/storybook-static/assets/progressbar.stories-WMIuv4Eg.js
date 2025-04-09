import{i as V,k as a}from"./lit-element-D5KKan5q.js";import{u as L,n as c}from"./index-C9z9WAEj.js";import"./index-Bb5mKIPt.js";import{V as p,F as v}from"./formfieldwrapper.component-DWkrE3Yi.js";import{D as N}from"./DataAriaLabelMixin-D53Z5CZ7.js";import{v as I}from"./v4-CmTdKEVZ.js";import"./index-BuqrN50_.js";import"./index-D3DhXfcW.js";import{c as E,s as k}from"./commonArgTypes-BluK8w5L.js";import{h as D,d as w}from"./utils-CO8B6ZcN.js";import"./DisabledMixin-BZruwOeC.js";import"./text.constants-ZF0jM5wn.js";import"./index-MA1r3zrt.js";import"./iframe-CkcfxWHJ.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";const F=[V`
:host {
  --mdc-progressbar-background-color: var(--mds-color-theme-control-indicator-inactive-normal);
  --mdc-progressbar-active-background-color: var(--mds-color-theme-control-active-normal);
  --mdc-progressbar-success-color: var(--mds-color-theme-indicator-stable);
  --mdc-progressbar-error-color: var(--mds-color-theme-indicator-attention);
  --mdc-progressbar-height: 0.25rem;
  --mdc-progressbar-border: 0.5px solid transparent;
  --mdc-progressbar-border-radius: var(--mdc-progressbar-height);

  --mdc-progressbar-label-color: var(--mds-color-theme-text-primary-normal);
  --mdc-progressbar-label-line-height: var(--mds-font-lineheight-body-midsize);
  --mdc-progressbar-label-font-size: var(--mds-font-size-body-midsize);
  --mdc-progressbar-label-font-weight: var(--mds-font-weight-regular);
  --mdc-progressbar-help-text-color: var(--mds-color-theme-text-secondary-normal);

  display: block;
  width: 100%;
}

:host::part(label-container) {
  display: flex;
  justify-content: space-between;
}

:host::part(inline-label-container) {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

:host::part(progress-container) {
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--mdc-progressbar-height);
  margin: 0.5rem 0;
}

:host::part(gap) {
  gap: 0.25rem;
}

:host([variant="inline"])::part(label) {
  overflow: unset;
}

:host::part(progress-bar) {
  height: 100%;
  background-color: var(--mdc-progressbar-active-background-color);
  border-radius: var(--mdc-progressbar-border-radius);
  transition: width 0.3s ease-in-out;
}

:host::part(success) {
  background-color: var(--mdc-progressbar-success-color);
}

:host::part(error) {
  background-color: var(--mdc-progressbar-error-color);
}

:host::part(remaining) {
  height: 100%;
  flex-grow: 1;
  background-color: var(--mdc-progressbar-background-color);
  border-radius: var(--mdc-progressbar-border-radius);
}

:host::part(label-text), :host::part(help-text), :host::part(percentage) {
  font-size: var(--mdc-progressbar-label-font-size);
  font-weight: var(--mdc-progressbar-label-font-weight);
  line-height: var(--mdc-progressbar-label-line-height);
}

:host([help-text-type="default"])::part(help-text) {
  color: var(--mdc-progressbar-help-text-color);
}

@media (forced-colors: active) {
  :host::part(progress-container), :host::part(progress-bar) {
    border: var(--mdc-progressbar-border);
  }
`],R=L.constructTagName("progressbar"),s={DEFAULT:"default",INLINE:"inline"},A={VARIANT:s.DEFAULT,VALIDATION:p.DEFAULT};var U=Object.defineProperty,m=(r,e,l,g)=>{for(var t=void 0,d=r.length-1,h;d>=0;d--)(h=r[d])&&(t=h(e,l,t)||t);return t&&U(e,l,t),t};const b=class b extends N(v){constructor(){super(...arguments),this.variant=A.VARIANT,this.value="0",this.error=!1,this.renderProgressbar=()=>{const e=this.getValidationVariant(),l=this.clampedValue>0&&this.clampedValue<100,g=this.error?"100":`${this.clampedValue}`;return a`
      <div
        part="progress-container ${l?"gap":""}"
        role="progressbar"
        aria-valuenow="${this.clampedValue}"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="${this.dataAriaLabel??""}"
      >
        <div part="progress-bar ${e}" style="width: ${g}%"></div>
        <div part="remaining"></div>
      </div>
    `}}connectedCallback(){super.connectedCallback(),this.id=`mdc-progressbar-${I()}`,this.disabled=void 0}get clampedValue(){const e=Number(this.value);return Number.isNaN(e)?0:Math.max(0,Math.min(100,e))}getValidationVariant(){return this.error?this.helpTextType=p.ERROR:this.clampedValue===100?this.helpTextType=p.SUCCESS:this.helpTextType=p.DEFAULT,this.helpTextType}render(){const e=this.variant===s.INLINE;return a`
      ${e?a`<div part="inline-label-container">${this.renderLabelElement()} ${this.renderProgressbar()}</div>`:a`
            <div part="label-container">
              ${this.renderLabelElement()}
              ${this.variant===s.DEFAULT&&this.label?a`<span part="percentage">${this.clampedValue}%</span>`:""}
            </div>
            ${this.renderProgressbar()}
            ${this.renderHelperText()}
          `}
    `}};b.styles=[...v.styles,...F];let o=b;m([c({type:String,reflect:!0})],o.prototype,"variant");m([c({type:String,reflect:!0})],o.prototype,"value");m([c({type:Boolean,attribute:"error"})],o.prototype,"error");o.register(R);const S=r=>a`
  <mdc-progressbar
    value="${r.value}"
    variant="${r.variant}"
    label="${r.label}"
    ?error="${r.error}"
    help-text="${r["help-text"]}"
    data-aria-label="${r["data-aria-label"]}"
  ></mdc-progressbar>
`,er={title:"Components/progressbar",tags:["autodocs"],component:"mdc-progressbar",render:S,parameters:{badges:["stable"]},argTypes:{value:{control:"text"},variant:{control:{type:"inline-radio"},options:Object.values(s)},label:{control:"text"},error:{control:"boolean"},"help-text":{control:"text"},"data-aria-label":{control:"text"},...D(["help-text-type","required-label","label-info","name","disabled","validation-message"]),...w(["--mdc-progressbar-default-background-color","--mdc-progressbar-default-active-background-color","--mdc-progressbar-success-background-color","--mdc-progressbar-error-background-color","--mdc-progressbar-height","--mdc-progressbar-border-radius","--mdc-progressbar-label-color","--mdc-progressbar-label-lineheight","--mdc-progressbar-label-fontsize","--mdc-progressbar-label-fontweight","--mdc-progressbar-help-text-color"]),...E,...k}},i={args:{value:"0",variant:A.VARIANT,label:"Label",error:!1,"help-text":"Helper text","data-aria-label":"This is a progressbar"}},n={render:()=>a`
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8rem;">
      <div>
        <h3>Default Variant</h3>
        ${[!1,!0].map(r=>(r?[100]:[0,25,50,75,100]).map(e=>a`
              <mdc-progressbar
                value="${e}"
                variant="${s.DEFAULT}"
                label="Label"
                ?error="${r}"
                help-text="Helper text"
                data-aria-label='This is a progressbar'
                style="margin-bottom: 1rem"
              ></mdc-progressbar>
            `))}
      </div>
      <div>
        <h3>Inline Variant</h3>
        ${[!1,!0].map(r=>(r?[100]:[0,25,50,75,100]).map(e=>a`
              <mdc-progressbar
                value="${e}"
                variant="${s.INLINE}"
                label="Label"
                ?error="${r}"
                help-text="Helper text"
                data-aria-label='This is a progressbar'
                style="margin-bottom: 1rem"
              ></mdc-progressbar>
            `))}
      </div>
    </div>
  `};var u,f,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    value: '0',
    variant: DEFAULTS.VARIANT,
    label: 'Label',
    error: false,
    'help-text': 'Helper text',
    'data-aria-label': 'This is a progressbar'
  }
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,T,$;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8rem;">
      <div>
        <h3>Default Variant</h3>
        \${[false, true].map(error => (error ? [100] : [0, 25, 50, 75, 100]).map(value => html\`
              <mdc-progressbar
                value="\${value}"
                variant="\${VARIANT.DEFAULT}"
                label="Label"
                ?error="\${error}"
                help-text="Helper text"
                data-aria-label='This is a progressbar'
                style="margin-bottom: 1rem"
              ></mdc-progressbar>
            \`))}
      </div>
      <div>
        <h3>Inline Variant</h3>
        \${[false, true].map(error => (error ? [100] : [0, 25, 50, 75, 100]).map(value => html\`
              <mdc-progressbar
                value="\${value}"
                variant="\${VARIANT.INLINE}"
                label="Label"
                ?error="\${error}"
                help-text="Helper text"
                data-aria-label='This is a progressbar'
                style="margin-bottom: 1rem"
              ></mdc-progressbar>
            \`))}
      </div>
    </div>
  \`
}`,...($=(T=n.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};const ar=["Example","AllVariants"];export{n as AllVariants,i as Example,ar as __namedExportsOrder,er as default};
