import{i as I,k as o}from"./lit-element-D5KKan5q.js";import{u as _,C as $}from"./provider.component-BaQC7CJH.js";import{P as k}from"./progressbar.component-DC9r2KtN.js";import{R as A}from"./roles-CJI3JVG-.js";import"./index-CdEYfb87.js";import{c as O,s as N}from"./commonArgTypes-BluK8w5L.js";import{a as T,t as x}from"./utils-CFOyPOhY.js";import"./index-PHC1UUG3.js";import"./index-NksyJu3_.js";import"./button.component-D5eG231X.js";import"./state-C0WmBOuD.js";import"./button.constants-B6suqA4v.js";import"./buttonsimple.constants-An7St6B1.js";import"./buttonsimple.component-CKyEWPbX.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";import"./index-CqVtAZCJ.js";import"./button.utils-rNW36Ji7.js";import"./index-DHsMOcdX.js";import"./index-4dZIr9oz.js";import"./popover.component-CgG8O1N4.js";import"./base-DIkkzJ-c.js";import"./if-defined-D5BV9-c0.js";import"./index-Dm_kZN_u.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-Bh3Mxn5K.js";import"./DataAriaLabelMixin-Cpdy3gUS.js";import"./iframe-DHkLyGiB.js";import"../sb-preview/runtime.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-ChWiF_5p.js";import"./create-context-89xeped_.js";const L=_.constructTagName("progressspinner"),r={RADIUS:20,CIRCUMFERENCE:2*Math.PI*20,STROKE_WIDTH:4,GAP_SIZE:7.5,ERROR_ICON_SIZE:2,SUCCESS_ICON_SIZE:3,ICON_LENGTH_UNIT:"em"},p={CHECK_CIRCLE_BOLD:"check-circle-bold",ERROR_LEGACY_FILLED:"error-legacy-filled"},R=e=>{if(e===0)return 0;const s=e/100*r.CIRCUMFERENCE-r.GAP_SIZE;return Math.max(s,.1*e)},y=e=>{const s=r.CIRCUMFERENCE-R(e)-2*r.GAP_SIZE;return e===0?r.CIRCUMFERENCE:s<0?0:s},U=e=>e===0?0:r.GAP_SIZE*.5,z=(e,s)=>{const a=s+r.GAP_SIZE*1.5;return e===0?0:a},G=I`
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
`,D=[G],l=class l extends k{connectedCallback(){super.connectedCallback(),this.id="",this.disabled=void 0,this.helpTextType=void 0,this.helpText=void 0,this.required=void 0,this.variant=void 0,this.label=void 0}renderProgressSpinner(){const s=R(this.clampedValue),a=y(this.clampedValue),S=U(this.clampedValue),f=z(this.clampedValue,s);return o`
      <div
        part="spinner-container ${this.variant}"
        role="${A.PROGRESSBAR}"
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
            stroke-width="${a===0?0:r.STROKE_WIDTH}"
            stroke-dasharray="${a} ${r.CIRCUMFERENCE}"
            stroke-dashoffset="-${f}"
          />
          <circle
            part="spinner-progress"
            cx="24"
            cy="24"
            r="${r.RADIUS}"
            stroke-width="${s===0?0:r.STROKE_WIDTH}"
            stroke-dasharray="${s} ${r.CIRCUMFERENCE}"
            stroke-dashoffset="-${S}"
          />
        </svg>
      </div>
    `}renderErrorState(){return o`
      <mdc-icon
        part="error-icon"
        aria-label="${this.dataAriaLabel??""}"
        name="${p.ERROR_LEGACY_FILLED}"
        size="${r.ERROR_ICON_SIZE}"
        length-unit="${r.ICON_LENGTH_UNIT}"
      ></mdc-icon>
    `}renderSuccessState(){return o`
      <mdc-icon
        part="success-icon"
        aria-label="${this.dataAriaLabel??""}"
        name="${p.CHECK_CIRCLE_BOLD}"
        size="${r.SUCCESS_ICON_SIZE}"
        length-unit="${r.ICON_LENGTH_UNIT}"
      ></mdc-icon>
    `}render(){return this.error?this.renderErrorState():this.clampedValue===100?this.renderSuccessState():o` ${this.renderProgressSpinner()}`}};l.styles=[...$.styles,...D];let n=l;n.register(L);const P=e=>o` <mdc-progressspinner value="${e.value}" ?error="${e.error}" data-aria-label="${e["data-aria-label"]}">
  </mdc-progressspinner>`,Cr={title:"Components/progressspinner",tags:["autodocs"],component:"mdc-progressspinner",render:P,parameters:{badges:["stable"]},argTypes:{value:{control:"number"},error:{control:"boolean"},"data-aria-label":{control:"text"},...T(["help-text-type","required","label","disabled","help-text","toggletip-text","toggletip-placement","info-icon-aria-label","variant","id"]),...x(["--mdc-spinner-size","--mdc-track-color","--mdc-progress-color","--mdc-progress-success-color","--mdc-progress-error-color","--mdc-progressbar-default-background-color","--mdc-progressbar-default-active-background-color","--mdc-progressbar-success-background-color","--mdc-progressbar-error-background-color","--mdc-progressbar-height","--mdc-progressbar-border-radius","--mdc-progressbar-label-color","--mdc-progressbar-label-lineheight","--mdc-progressbar-label-fontsize","--mdc-progressbar-label-fontweight","--mdc-progressbar-help-text-color"]),...O,...N}},t={args:{value:0,"data-aria-label":"progress spinner"}},i={args:{value:25,error:!0,"data-aria-label":"Error progress spinner"}},c={args:{value:100,error:!1,"data-aria-label":"Success progress spinner"}};var m,d,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    value: 0,
    'data-aria-label': 'progress spinner'
  }
}`,...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var u,h,E;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    value: 25,
    error: true,
    'data-aria-label': 'Error progress spinner'
  }
}`,...(E=(h=i.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var b,C,v;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: 100,
    error: false,
    'data-aria-label': 'Success progress spinner'
  }
}`,...(v=(C=c.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};const vr=["Example","Error","Success"];export{i as Error,t as Example,c as Success,vr as __namedExportsOrder,Cr as default};
