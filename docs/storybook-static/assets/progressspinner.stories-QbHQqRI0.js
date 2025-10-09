import{u as f,S as b,k as a,W as $,E as A}from"./iframe-gl2AV23u.js";import{P as O}from"./progressbar.component-B6knXzmi.js";import"./index-DIedxVcG.js";import{c as N,s as k}from"./commonArgTypes-BluK8w5L.js";import{a as T}from"./utils-Dd_sfl9-.js";import"./preload-helper-C1FmrZbK.js";import"./index-CpCMGgJc.js";import"./index-CktAzwkY.js";import"./button.component-BMiiox-z.js";import"./buttonsimple.component-CmqAkDIS.js";import"./keys-hFXe221I.js";import"./DisabledMixin-Da9HdG9U.js";import"./TabIndexMixin-eMCoa_9l.js";import"./button.utils-rNW36Ji7.js";import"./index-BtDrW3bQ.js";import"./popover.component-CNuAeCjP.js";import"./base-DIkkzJ-c.js";import"./if-defined-D_Raxwq5.js";import"./BackdropMixin-BFaCZz5f.js";import"./index-CLGY1Y6i.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-D7ur8at_.js";import"./DataAriaLabelMixin-Cp1kK3jb.js";import"./index-B0EZfEBL.js";import"./index-DTrDRi1E.js";const x=f.constructTagName("progressspinner"),r={RADIUS:20,CIRCUMFERENCE:2*Math.PI*20,STROKE_WIDTH:4,GAP_SIZE:7.5,ERROR_ICON_SIZE:2,SUCCESS_ICON_SIZE:3,ICON_LENGTH_UNIT:"em"},p={CHECK_CIRCLE_BOLD:"check-circle-bold",ERROR_LEGACY_FILLED:"error-legacy-filled"},R=e=>{if(e===0)return 0;const s=e/100*r.CIRCUMFERENCE-r.GAP_SIZE;return Math.max(s,.1*e)},y=e=>{const s=r.CIRCUMFERENCE-R(e)-2*r.GAP_SIZE;return e===0?r.CIRCUMFERENCE:s<0?0:s},L=e=>e===0?0:r.GAP_SIZE*.5,U=(e,s)=>{const t=s+r.GAP_SIZE*1.5;return e===0?0:t},G=b`
  :host {
    --mdc-spinner-size: 3rem;
    --mdc-track-color: var(--mds-color-theme-control-indicator-inactive-normal);
    --mdc-progress-color: var(--mds-color-theme-control-active-normal);
    --mdc-progress-success-color: var(--mds-color-theme-text-success-normal);
    --mdc-progress-error-color: var(--mds-color-theme-text-error-normal);

    display: block;
  }

  :host::part(spinner-container) {
    width: var(--mdc-spinner-size);
    height: var(--mdc-spinner-size);
    position: relative;
  }

  :host::part(spinner-base) {
    width: 100%;
    height: 100%;
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
    --mdc-icon-size: var(--mdc-spinner-size);
    color: var(--mdc-progress-success-color);
  }

  :host::part(error-icon) {
    --mdc-icon-size: calc(2 / 3 * var(--mdc-spinner-size));

    color: var(--mdc-progress-error-color);
    margin: calc(1 / 6 * var(--mdc-spinner-size));
  }
`,D=[G],l=class l extends O{connectedCallback(){super.connectedCallback(),this.id="",this.disabled=void 0,this.helpTextType=void 0,this.helpText=void 0,this.required=void 0,this.variant=void 0,this.label=void 0}renderProgressSpinner(){const s=R(this.clampedValue),t=y(this.clampedValue),I=L(this.clampedValue),_=U(this.clampedValue,s);return a`
      <div
        part="spinner-container ${this.variant}"
        role="${$.PROGRESSBAR}"
        aria-valuenow="${this.clampedValue}"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="${this.dataAriaLabel??""}"
      >
        <svg part="spinner-base" viewBox="0 0 48 48">
          <circle
            part="spinner-track"
            cx="24"
            cy="24"
            r="${r.RADIUS}"
            stroke-width="${t===0?0:r.STROKE_WIDTH}"
            stroke-dasharray="${t} ${r.CIRCUMFERENCE}"
            stroke-dashoffset="-${_}"
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
        length-unit="${r.ICON_LENGTH_UNIT}"
      ></mdc-icon>
    `}renderSuccessState(){return a`
      <mdc-icon
        part="success-icon"
        aria-label="${this.dataAriaLabel??""}"
        name="${p.CHECK_CIRCLE_BOLD}"
        size="${r.SUCCESS_ICON_SIZE}"
        length-unit="${r.ICON_LENGTH_UNIT}"
      ></mdc-icon>
    `}render(){return this.error?this.renderErrorState():this.clampedValue===100?this.renderSuccessState():a` ${this.renderProgressSpinner()}`}};l.styles=[...A.styles,...D];let c=l;c.register(x);const P=e=>a` <mdc-progressspinner value="${e.value}" ?error="${e.error}" data-aria-label="${e["data-aria-label"]}">
  </mdc-progressspinner>`,lr={title:"Components/progressspinner",tags:["autodocs"],component:"mdc-progressspinner",render:P,argTypes:{value:{control:"number"},error:{control:"boolean"},"data-aria-label":{control:"text"},...T(["help-text-type","required","label","disabled","help-text","toggletip-text","toggletip-placement","toggletip-strategy","info-icon-aria-label","variant","id"]),...N,...k}},o={args:{value:0,"data-aria-label":"progress spinner"}},i={args:{value:25,error:!0,"data-aria-label":"Error progress spinner"}},n={args:{value:100,error:!1,"data-aria-label":"Success progress spinner"}};var m,d,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    value: 0,
    'data-aria-label': 'progress spinner'
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var E,g,h;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    value: 25,
    error: true,
    'data-aria-label': 'Error progress spinner'
  }
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var C,v,S;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    value: 100,
    error: false,
    'data-aria-label': 'Success progress spinner'
  }
}`,...(S=(v=n.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const pr=["Example","Error","Success"];export{i as Error,o as Example,n as Success,pr as __namedExportsOrder,lr as default};
