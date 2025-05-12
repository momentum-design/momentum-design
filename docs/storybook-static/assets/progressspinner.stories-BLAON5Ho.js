import{i as R,k as a}from"./lit-element-D5KKan5q.js";import{u as _,C as k}from"./index-C9z9WAEj.js";import{P as $}from"./progressbar.component-COLOBlQK.js";import"./index-BSoBtipA.js";import{c as A,s as N}from"./commonArgTypes-BluK8w5L.js";import{h as O,d as T}from"./utils-CO8B6ZcN.js";import"./index-CCRpv70I.js";import"./formfieldwrapper.component-5n2-mkV5.js";import"./DisabledMixin-BZruwOeC.js";import"./text.constants-ZF0jM5wn.js";import"./index-CcXofQbA.js";import"./index-D3DhXfcW.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./v4-CmTdKEVZ.js";import"./iframe-D4ut1yO_.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";const L=R`
  :host {
    --mdc-spinner-size: 3rem;
    --mdc-track-color: var(--mds-color-theme-control-indicator-inactive-normal);
    --mdc-progress-color: var(--mds-color-theme-control-active-normal);
    --mdc-progress-success-color: var(--mds-color-theme-text-success-normal);
    --mdc-progress-error-color: var(--mds-color-theme-text-error-normal);

    display: block;
  }

  :host::part(spinner-container) {
    width: 3rem;
    height: 3rem;
    position: relative;
  }

  :host::part(spinner-base) {
    width: var(--mdc-spinner-size);
    height: var(--mdc-spinner-size);
    rotate: -90deg;
  }

  :host::part(spinner-track) {
    stroke: var(--mdc-track-color);
    stroke-linecap: round;
    fill: none;
  }

  :host::part(spinner-progress) {
    stroke: var(--mdc-progress-color);
    stroke-linecap: round;
    fill: none;
    transition: stroke-dasharray 0.3s ease-in-out;
  }

  :host::part(success-icon) {
    color: var(--mdc-progress-success-color);
}

  :host::part(error-icon) {
    color: var(--mdc-progress-error-color);
    margin: 0.5rem;
  }
`,x=[L],y=_.constructTagName("progressspinner"),r={RADIUS:20,CIRCUMFERENCE:2*Math.PI*20,STROKE_WIDTH:4,GAP_SIZE:7.5,ERROR_ICON_SIZE:2,SUCCESS_ICON_SIZE:3,ICON_LENGTH_UNIT:"em"},p={CHECK_CIRCLE_BOLD:"check-circle-bold",ERROR_LEGACY_FILLED:"error-legacy-filled"},f=e=>{if(e===0)return 0;const s=e/100*r.CIRCUMFERENCE-r.GAP_SIZE;return Math.max(s,.1*e)},U=e=>{const s=r.CIRCUMFERENCE-f(e)-2*r.GAP_SIZE;return e===0?r.CIRCUMFERENCE:s<0?0:s},D=e=>e===0?0:r.GAP_SIZE*.5,G=(e,s)=>{const o=s+r.GAP_SIZE*1.5;return e===0?0:o},l=class l extends ${connectedCallback(){super.connectedCallback(),this.id="",this.disabled=void 0,this.helpTextType=void 0,this.helpText=void 0,this.requiredLabel=void 0,this.variant=void 0,this.label=void 0}renderProgressSpinner(){const s=f(this.clampedValue),o=U(this.clampedValue),I=D(this.clampedValue),S=G(this.clampedValue,s);return a`
      <div
        part="spinner-container ${this.variant}"
        role="progressbar"
        aria-valuenow="${this.clampedValue}"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="${this.dataAriaLabel??""}"
      >
      <svg part="spinner-base">
        <circle
          part="spinner-track"
          cx="24"
          cy="24"
          r="${r.RADIUS}"
          stroke-width="${o===0?0:r.STROKE_WIDTH}"
          stroke-dasharray="${o} ${r.CIRCUMFERENCE}"
          stroke-dashoffset="-${S}"
        />
        <circle
          part="spinner-progress"
          cx="24"
          cy="24"
          r="${r.RADIUS}"
          stroke-width="${s===0?0:r.STROKE_WIDTH}"
          stroke-dasharray="${s} ${r.CIRCUMFERENCE}"
          stroke-dashoffset="-${I}"
        />
      </svg>
      </div>
    `}renderErrorState(){return a`
      <mdc-icon 
      part="error-icon"
      aria-label="${this.dataAriaLabel??""}" 
      name="${p.ERROR_LEGACY_FILLED}"
      size="${r.ERROR_ICON_SIZE}"  
      length-unit="${r.ICON_LENGTH_UNIT}"></mdc-icon>
    `}renderSuccessState(){return a`
      <mdc-icon 
      part="success-icon"
      aria-label="${this.dataAriaLabel??""}" 
      name="${p.CHECK_CIRCLE_BOLD}"
      size="${r.SUCCESS_ICON_SIZE}"  
      length-unit="${r.ICON_LENGTH_UNIT}"></mdc-icon>
    `}render(){return this.error?this.renderErrorState():this.clampedValue===100?this.renderSuccessState():a`
      ${this.renderProgressSpinner()}`}};l.styles=[...k.styles,...x];let i=l;i.register(y);const M=e=>a`
  <mdc-progressspinner
   value="${e.value}" 
   ?error="${e.error}" 
   data-aria-label="${e["data-aria-label"]}">
  </mdc-progressspinner>`,or={title:"Components/progressspinner",tags:["autodocs"],component:"mdc-progressspinner",render:M,parameters:{badges:["stable"]},argTypes:{value:{control:"number"},error:{control:"boolean"},"data-aria-label":{control:"text"},...O(["help-text-type","required-label","label","disabled","help-text","variant","id","label-info","--mdc-progressbar-default-background-color","--mdc-progressbar-default-active-background-color","--mdc-progressbar-success-background-color","--mdc-progressbar-error-background-color","--mdc-progressbar-height","--mdc-progressbar-border-radius","--mdc-progressbar-label-color","--mdc-progressbar-label-lineheight","--mdc-progressbar-label-fontsize","--mdc-progressbar-label-fontweight","--mdc-progressbar-help-text-color"]),...T(["--mdc-spinner-size","--mdc-track-color","--mdc-progress-color","--mdc-progress-success-color","--mdc-progress-error-color"]),...A,...N}},t={args:{value:0,"data-aria-label":"progress spinner"}},n={args:{value:25,error:!0,"data-aria-label":"Error progress spinner"}},c={args:{value:100,error:!1,"data-aria-label":"Success progress spinner"}};var d,m,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    value: 0,
    'data-aria-label': 'progress spinner'
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,h,E;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: 25,
    error: true,
    'data-aria-label': 'Error progress spinner'
  }
}`,...(E=(h=n.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var b,C,v;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: 100,
    error: false,
    'data-aria-label': 'Success progress spinner'
  }
}`,...(v=(C=c.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};const tr=["Example","Error","Success"];export{n as Error,t as Example,c as Success,tr as __namedExportsOrder,or as default};
