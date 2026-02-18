import{j as ae,u as re,a2 as ie,am as k,al as le,k as d,h as c,C as T,a5 as te,n}from"./iframe-DoNkonBK.js";import"./index-ChETWKIm.js";import{Q as se}from"./repeat-C8mKwpV1.js";import{K as ne,a as oe,N as de,A as m}from"./KeyDownHandledMixin-CHVndGqH.js";import"./index-DgFVlAdE.js";import{c as ue,s as me}from"./commonArgTypes-BG7EqI50.js";import"./preload-helper-C1FmrZbK.js";import"./index-BOEpt90i.js";import"./index-DTrDRi1E.js";import"./directive-Ctav8iJK.js";import"./popover.component-CPMBaGtO.js";import"./if-defined-B36DAkUP.js";import"./BackdropMixin-DhDi1luQ.js";import"./popover.constants-B9PQSOY9.js";import"./index-1OHNifC4.js";import"./button.component-CUXnbZWa.js";import"./buttonsimple.component-DnM31Gat.js";import"./DisabledMixin-CrQfIA6t.js";import"./button.utils-rNW36Ji7.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let he;function ce(a){return(e,t)=>ae(e,t,{get(){return(this.renderRoot??he??(he=document.createDocumentFragment())).querySelectorAll(a)}})}const be=re.constructTagName("slider"),pe={START:"start",END:"end",UNDEFINED:void 0},h={MIN:0,MAX:100,STEP:1,STATE:pe.UNDEFINED,ICON_SIZE:1.25,ICON_LENGTH_UNIT:"rem"},ve=ie`
  :host {
    width: 100%;
    --mdc-slider-tooltip-left: 0;
    --mdc-slider-tick-left: 0;
    --mdc-slider-input-size: 0.5rem;
    --mdc-slider-thumb-size: 1.5rem;
    --mdc-slider-tick-size: 0.25rem;
    --mdc-slider-track-height: 2rem;
    --mdc-slider-thumb-color: var(--mds-color-theme-overlay-button-secondary-normal);
    --mdc-slider-thumb-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-slider-tick-color: var(--mds-color-theme-inverted-text-primary-normal);
    --mdc-slider-progress-color: var(--mds-color-theme-control-active-normal);
    --mdc-slider-track-color: var(--mds-color-theme-control-indicator-inactive-normal);
  }

  :host([disabled]),
  :host([soft-disabled]) {
    --mdc-slider-progress-color: var(--mds-color-theme-control-active-disabled);
    --mdc-slider-track-color: var(--mds-color-theme-control-inactive-disabled);
  }

  :host::part(slider-label),
  :host::part(slider-label-start),
  :host::part(slider-label-end) {
    color: var(--mds-color-theme-text-primary-normal);
    font-size: var(--mds-font-apps-body-midsize-medium-font-size);
    font-weight: var(--mds-font-apps-body-midsize-medium-font-weight);
    line-height: var(--mds-font-apps-body-midsize-medium-line-height);
  }

  :host([disabled])::part(leading-icon),
  :host([disabled])::part(trailing-icon),
  :host([soft-disabled])::part(leading-icon),
  :host([soft-disabled])::part(trailing-icon),
  :host([disabled])::part(slider-label),
  :host([disabled])::part(slider-label-start),
  :host([disabled])::part(slider-label-end),
  :host([soft-disabled])::part(slider-label),
  :host([soft-disabled])::part(slider-label-start),
  :host([soft-disabled])::part(slider-label-end) {
    color: var(--mds-color-theme-text-primary-disabled);
  }

  :host::part(slider-label) {
    margin-bottom: 0.5rem;
    display: block;
  }

  :host::part(slider-track) {
    width: 100%;
    height: var(--mdc-slider-track-height);
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  :host::part(slider-wrapper) {
    position: relative;
    width: 100%;
    height: var(--mdc-slider-track-height);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host::part(slider-labels) {
    display: flex;
    justify-content: space-between;
  }

  :host::part(leading-icon),
  :host::part(trailing-icon) {
    flex-shrink: 0;
  }

  #start-slider {
    height: 0;
    z-index: 1;
  }

  input[type='range'] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: var(--mdc-slider-input-size);
    border-radius: 0.25rem;
    outline: none;
    margin: 0;
    position: absolute;
    pointer-events: none;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    pointer-events: all;
    cursor: pointer;
    width: var(--mdc-slider-thumb-size);
    height: var(--mdc-slider-thumb-size);
    background: var(--mdc-slider-thumb-color);
    border-radius: 50%;
    border: 1px solid var(--mdc-slider-thumb-border-color);
  }

  input[type='range']::-moz-range-thumb {
    pointer-events: all;
    cursor: pointer;
    width: var(--mdc-slider-thumb-size);
    height: var(--mdc-slider-thumb-size);
    background: var(--mdc-slider-thumb-color);
    border-radius: 50%;
    border: 1px solid var(--mdc-slider-thumb-border-color);
  }

  input[type='range']::-ms-thumb {
    pointer-events: all;
    cursor: pointer;
    width: var(--mdc-slider-thumb-size);
    height: var(--mdc-slider-thumb-size);
    background: var(--mdc-slider-thumb-color);
    border-radius: 50%;
    border: 1px solid var(--mdc-slider-thumb-border-color);
  }

  :host([disabled]) input[type='range']::-webkit-slider-thumb {
    cursor: unset;
  }

  :host([disabled]) input[type='range']::-moz-range-thumb {
    cursor: unset;
  }

  :host([disabled]) input[type='range']::-ms-thumb {
    cursor: unset;
  }

  :host(:not([soft-disabled])) input[type='range']:not(:disabled):hover::-webkit-slider-thumb {
    --mdc-slider-thumb-color: var(--mds-color-theme-overlay-button-secondary-hover);
    --mdc-slider-thumb-border-color: var(--mds-color-theme-outline-input-active);
  }

  :host(:not([soft-disabled])) input[type='range']:not(:disabled):active::-webkit-slider-thumb {
    --mdc-slider-thumb-color: var(--mds-color-theme-overlay-button-secondary-pressed);
    --mdc-slider-thumb-border-color: var(--mds-color-theme-outline-input-active);
  }

  :host(:not([soft-disabled])) input[type='range']:not(:disabled):hover::-moz-range-thumb {
    --mdc-slider-thumb-color: var(--mds-color-theme-overlay-button-secondary-hover);
    --mdc-slider-thumb-border-color: var(--mds-color-theme-outline-input-active);
  }

  :host(:not([soft-disabled])) input[type='range']:not(:disabled):active::-moz-range-thumb {
    --mdc-slider-thumb-color: var(--mds-color-theme-overlay-button-secondary-pressed);
    --mdc-slider-thumb-border-color: var(--mds-color-theme-outline-input-active);
  }

  :host(:not([soft-disabled])) input[type='range']:not(:disabled):hover::-ms-thumb {
    --mdc-slider-thumb-color: var(--mds-color-theme-overlay-button-secondary-hover);
    --mdc-slider-thumb-border-color: var(--mds-color-theme-outline-input-active);
  }

  :host(:not([soft-disabled])) input[type='range']:not(:disabled):active::-ms-thumb {
    --mdc-slider-thumb-color: var(--mds-color-theme-overlay-button-secondary-pressed);
    --mdc-slider-thumb-border-color: var(--mds-color-theme-outline-input-active);
  }

  input[type='range']:focus::-webkit-slider-thumb {
    box-shadow: ${k};
  }

  input[type='range']:focus::-moz-range-thumb {
    box-shadow: ${k};
  }

  input[type='range']:focus::-ms-thumb {
    box-shadow: ${k};
  }

  :host::part(slider-tooltip) {
    position: absolute;
    bottom: 120%;
    border-radius: 0.5rem;
    border: 1px solid var(--mds-color-theme-outline-secondary-normal);
    background-color: var(--mds-color-theme-background-solid-primary-normal);
    filter: var(--mds-elevation-3);
    padding: 0.5rem;
    transform: translateX(-50%);
    left: calc(
      var(--mdc-slider-tooltip-left) * (100% - var(--mdc-slider-thumb-size)) + (var(--mdc-slider-thumb-size) / 2)
    );
  }

  :host::part(slider-ticks) {
    position: absolute;
    bottom: 7%;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }

  :host::part(slider-tick) {
    position: absolute;
    top: 50%;
    width: var(--mdc-slider-tick-size);
    height: var(--mdc-slider-tick-size);
    background: var(--mdc-slider-tick-color);
    border-radius: 50%;
    transform: translateX(-50%);
    left: calc(
      var(--mdc-slider-tick-left) * (100% - var(--mdc-slider-thumb-size)) + (var(--mdc-slider-thumb-size) / 2)
    );
  }

  @media (forced-colors: active) {
    :host::part(end-slider),
    :host::part(single-slider),
    :host::part(slider-tick) {
      border: 1px solid;
    }
  }
`,ge=[le,ve];var fe=Object.defineProperty,s=(a,e,t,o)=>{for(var r=void 0,l=a.length-1,u;l>=0;l--)(u=a[l])&&(r=u(e,t,r)||r);return r&&fe(e,t,r),r};const N=class N extends ne(oe(T)){constructor(){super(),this.thumbFocused=h.STATE,this.thumbHovered=h.STATE,this.range=!1,this.min=h.MIN,this.max=h.MAX,this.step=h.STEP,this.spatialNavEditMode=!1,this.addEventListener("keydown",this.handleKeyEvent.bind(this)),this.addEventListener("mousedown",this.preventChange.bind(this))}updated(e){super.updated(e),(e.has("value")||e.has("step")||e.has("min")||e.has("max")||e.has("disabled")||e.has("softDisabled")||e.has("range")||e.has("valueStart")||e.has("valueEnd"))&&this.updateTrackStyling(),e.has("softDisabled")&&this.setSoftDisabled(),(e.has("range")||e.has("valueStart")||e.has("valueEnd"))&&this.initializeRangeSlider()}preventChange(e){this.softDisabled&&(e.preventDefault(),e.stopPropagation())}handleKeyEvent(e){var o;const t=this.getActionForKeyEvent(e);if(this.getKeyboardNavMode()===de.SPATIAL){if(this.softDisabled)return;const r=(o=this.shadowRoot)==null?void 0:o.activeElement,l=(r==null?void 0:r.tagName)==="INPUT";if(e.preventDefault(),!l){this.spatialNavEditMode=!1;return}if(!this.spatialNavEditMode&&t===m.ENTER){this.spatialNavEditMode=!0,this.keyDownEventHandled();return}this.spatialNavEditMode&&((t===m.ENTER||t===m.ESCAPE||t===m.UP||t===m.DOWN)&&(this.spatialNavEditMode=!1,(t===m.ENTER||t===m.ESCAPE)&&this.keyDownEventHandled()),t===m.LEFT&&(r==null||r.stepDown(),this.keyDownEventHandled(),this.handleInput(r)),t===m.RIGHT&&(r==null||r.stepUp(),this.keyDownEventHandled(),this.handleInput(r)))}else this.softDisabled&&t!==m.TAB&&(e.preventDefault(),e.stopPropagation())}setSoftDisabled(){this.inputElements.forEach(e=>{const t=e;this.softDisabled?t.setAttribute("aria-disabled","true"):t.removeAttribute("aria-disabled")})}initializeRangeSlider(){this.valueStart===void 0&&(this.valueStart=this.min),this.valueEnd===void 0&&(this.valueEnd=this.max),this.inputElements.forEach(this.handleInput,this)}handleInput(e){const t=Array.from(this.inputElements);if(!t.includes(e))return;if(t.length===1){this.value=Number(e.value);return}const o=t.indexOf(e),r=t[o];if(o===0){if(!this.valueEnd)return;const l=Number(r.value);l>this.valueEnd?(r.value=String(this.valueEnd),this.valueStart=this.valueEnd):l>=this.min&&l<this.valueEnd?this.valueStart=l:l<this.min&&(r.value=String(this.min),this.valueStart=this.min)}else{if(!this.valueStart)return;const l=Number(r.value);l<this.valueStart?(r.value=String(this.valueStart),this.valueEnd=this.valueStart):l<=this.max&&l>this.valueStart?this.valueEnd=l:l>this.max&&(r.value=String(this.max),this.valueEnd=this.max)}}iconTemplate(e,t){return typeof e=="string"&&e.length>0?d`<mdc-icon
          name="${e}"
          part="${t}"
          length-unit="${h.ICON_LENGTH_UNIT}"
          size="${h.ICON_SIZE}"
        ></mdc-icon>`:null}tooltipTemplate(e,t){const[o,r]=this.inputElements,l=t==="end"?r:o,u=Number(l==null?void 0:l.value);if(typeof u!="number"||Number.isNaN(u)||this.max===this.min||this.disabled||this.hideTooltip)return c;const b=(u-this.min)/(this.max-this.min);return d`<div part="slider-tooltip" aria-hidden="true" style="--mdc-slider-tooltip-left: ${b}">
      ${e||u}
    </div> `}updateTrackStyling(){let e="var(--mdc-slider-progress-color)",t="var(--mdc-slider-track-color)";if((this.disabled||this.softDisabled)&&(e="var(--mds-color-theme-control-active-disabled)",t="var(--mds-color-theme-control-inactive-disabled)"),this.range){if(!this.inputElements[1])return;const o=Number(this.inputElements[0].value),r=Number(this.inputElements[1].value),l=Number(this.inputElements[0].max)||1,u=Math.max(0,Math.min(100,(o-this.min)/(l-this.min)*100)),b=Math.max(0,Math.min(100,(r-this.min)/(l-this.min)*100));this.inputElements[1].style.background=`linear-gradient(
        to right,
        ${t} 0%,
        ${t} ${u}%,
        ${e} ${u}%,
        ${e} ${b}%,
        ${t} ${b}%,
        ${t} 100%
      )`}else{if(!this.inputElements[0])return;const o=Number(this.inputElements[0].value),r=Number(this.inputElements[0].max)||1,l=Math.max(0,Math.min(100,(o-this.min)/(r-this.min)*100));this.inputElements[0].style.background=`linear-gradient(to right, ${e} ${l}%, ${t} ${l}%)`}}onInput(e){const t=e.target;this.handleInput(t)}onChange(e){const t=e.target;this.value=Number(t.value),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))}onChangeStart(e){const t=e.target;this.valueStart=Number(t.value),this.dispatchEvent(new CustomEvent("change",{detail:{valueStart:this.valueStart,valueEnd:this.valueEnd}}))}onChangeEnd(e){const t=e.target;this.valueEnd=Number(t.value),this.dispatchEvent(new CustomEvent("change",{detail:{valueEnd:this.valueEnd,valueStart:this.valueStart}}))}getTickStyles(e){if(this.max===this.min)return"";const t=(e-this.min)/(this.max-this.min),o=[];if(this.inputElements[0]){const l=(Number(this.inputElements[0].value)-this.min)/(this.max-this.min);o.push(l)}if(this.range&&this.inputElements[1]){const l=(Number(this.inputElements[1].value)-this.min)/(this.max-this.min);o.push(l)}return o.includes(t)?"display:none;":`--mdc-slider-tick-left:${t};`}renderTicks(){const e=[];if(this.step&&this.step>1)for(let t=this.min;t<=this.max;t+=this.step)e.push(t);return this.step>1?d` <div part="slider-ticks">
        ${se(e,t=>t,t=>d`<span part="slider-tick" style=${this.getTickStyles(t)}></span>`)}
      </div>`:c}render(){return d`
      ${this.label?d`<label part="slider-label" for="single-slider">${this.label}</label>`:null}
      <div part="slider-track">
        ${this.iconTemplate(this.leadingIcon,"leading-icon")}
        <div part="slider-wrapper">
          ${this.renderTicks()}
          ${this.range?d`
                <input
                  id="start-slider"
                  part="start-slider"
                  type="range"
                  min="${this.min}"
                  max="${this.max}"
                  step="${this.step??1}"
                  .value="${String(this.valueStart??this.min)}"
                  ?disabled="${this.disabled}"
                  name="${this.nameStart??""}"
                  aria-valuemin="${this.min}"
                  aria-valuemax="${this.max}"
                  aria-valuenow="${this.valueStart??this.min}"
                  aria-label="${this.startAriaLabel||this.label||""}"
                  aria-valuetext="${this.startAriaValuetext||this.valueLabelStart||this.valueStart||""}"
                  tabindex="${this.disabled?-1:0}"
                  @input=${this.onInput}
                  @change=${this.onChangeStart}
                  @focus=${()=>{this.thumbFocused="start"}}
                  @blur=${()=>{this.thumbFocused=void 0,this.spatialNavEditMode=!1}}
                  @mouseenter=${()=>{this.disabled||(this.thumbHovered="start")}}
                  @mouseleave=${()=>{this.thumbHovered=void 0}}
                  data-spatial-right="end-slider"
                />
                ${this.thumbFocused==="start"||this.thumbHovered==="start"?this.tooltipTemplate(this.valueLabelStart):c}
                <input
                  id="end-slider"
                  part="end-slider"
                  type="range"
                  min="${this.min}"
                  max="${this.max}"
                  step="${this.step??1}"
                  .value="${String(this.valueEnd??this.max)}"
                  ?disabled="${this.disabled}"
                  name="${this.nameEnd??""}"
                  aria-valuemin="${this.min}"
                  aria-valuemax="${this.max}"
                  aria-valuenow="${this.valueEnd??this.max}"
                  aria-label="${this.endAriaLabel||this.label||""}"
                  aria-valuetext="${this.endAriaValueText||this.valueLabelEnd||this.valueEnd||""}"
                  tabindex="${this.disabled?-1:0}"
                  @input=${this.onInput}
                  @change=${this.onChangeEnd}
                  @focus=${()=>{this.thumbFocused="end"}}
                  @blur=${()=>{this.thumbFocused=void 0,this.spatialNavEditMode=!1}}
                  @mouseenter=${()=>{this.disabled||(this.thumbHovered="end")}}
                  @mouseleave=${()=>{this.thumbHovered=void 0}}
                  data-spatial-left="start-slider"
                />
                ${this.thumbFocused==="end"||this.thumbHovered==="end"?this.tooltipTemplate(this.valueLabelEnd,this.thumbFocused||this.thumbHovered):c}
              `:d`
                <input
                  id="single-slider"
                  part="single-slider"
                  type="range"
                  min="${this.min}"
                  max="${this.max}"
                  step="${this.step??1}"
                  .value="${String(this.value??this.min)}"
                  ?disabled="${this.disabled}"
                  name="${this.name??""}"
                  aria-valuemin="${this.min}"
                  aria-valuemax="${this.max}"
                  aria-valuenow="${this.value??this.min}"
                  aria-label="${this.dataAriaLabel??this.label??""}"
                  aria-valuetext="${this.dataAriaValuetext??this.valueLabel??String(this.value??"")}"
                  tabindex="${this.disabled?-1:0}"
                  @input=${this.onInput}
                  @change=${this.onChange}
                  @focus=${()=>{this.thumbFocused="start"}}
                  @blur=${()=>{this.thumbFocused=void 0,this.spatialNavEditMode=!1}}
                  @mouseenter=${()=>{this.disabled||(this.thumbHovered="start")}}
                  @mouseleave=${()=>{this.thumbHovered=void 0}}
                />
                ${this.thumbFocused==="start"||this.thumbHovered==="start"?this.tooltipTemplate(this.valueLabel):c}
              `}
        </div>
        ${this.iconTemplate(this.trailingIcon,"trailing-icon")}
      </div>
      <div part="slider-labels">
        ${this.labelStart?d`<span part="slider-label-start">${this.labelStart}</span>`:null}
        ${this.labelEnd?d`<span part="slider-label-end">${this.labelEnd}</span>`:null}
      </div>
    `}};N.styles=[...T.styles,...ge];let i=N;s([te()],i.prototype,"thumbFocused");s([te()],i.prototype,"thumbHovered");s([n({reflect:!0,type:Boolean})],i.prototype,"range");s([n({reflect:!0,type:Number})],i.prototype,"min");s([n({reflect:!0,type:Number})],i.prototype,"max");s([n({reflect:!0,type:Boolean})],i.prototype,"disabled");s([n({reflect:!0,type:Boolean,attribute:"soft-disabled"})],i.prototype,"softDisabled");s([n({reflect:!0,type:String,attribute:"leading-icon"})],i.prototype,"leadingIcon");s([n({reflect:!0,type:String,attribute:"trailing-icon"})],i.prototype,"trailingIcon");s([n({reflect:!0,type:Number})],i.prototype,"value");s([n({reflect:!0,type:Number,attribute:"value-start"})],i.prototype,"valueStart");s([n({reflect:!0,type:Number,attribute:"value-end"})],i.prototype,"valueEnd");s([n({reflect:!0,type:Number})],i.prototype,"step");s([n({reflect:!0,type:String})],i.prototype,"label");s([n({reflect:!0,type:String,attribute:"label-start"})],i.prototype,"labelStart");s([n({reflect:!0,type:String,attribute:"label-end"})],i.prototype,"labelEnd");s([n({reflect:!0,type:String,attribute:"value-label"})],i.prototype,"valueLabel");s([n({reflect:!0,type:String,attribute:"value-label-start"})],i.prototype,"valueLabelStart");s([n({reflect:!0,type:String,attribute:"value-label-end"})],i.prototype,"valueLabelEnd");s([n({reflect:!0,type:String})],i.prototype,"name");s([n({reflect:!0,type:String,attribute:"name-start"})],i.prototype,"nameStart");s([n({reflect:!0,type:String,attribute:"name-end"})],i.prototype,"nameEnd");s([n({reflect:!0,type:String,attribute:"data-aria-label"})],i.prototype,"dataAriaLabel");s([n({reflect:!0,type:String,attribute:"start-aria-label"})],i.prototype,"startAriaLabel");s([n({reflect:!0,type:String,attribute:"end-aria-label"})],i.prototype,"endAriaLabel");s([n({reflect:!0,type:String,attribute:"data-aria-valuetext"})],i.prototype,"dataAriaValuetext");s([n({reflect:!0,type:String,attribute:"start-aria-valuetext"})],i.prototype,"startAriaValuetext");s([n({reflect:!0,type:String,attribute:"end-aria-valuetext"})],i.prototype,"endAriaValueText");s([n({reflect:!0,type:Boolean,attribute:"hide-tooltip"})],i.prototype,"hideTooltip");s([ce('input[type="range"]')],i.prototype,"inputElements");i.register(be);const{action:M}=__STORYBOOK_MODULE_ACTIONS__,ye=a=>d`
  <mdc-slider
    @input="${M("input")}"
    @change="${M("change")}"
    min="${a.min}"
    max="${a.max}"
    step="${a.step}"
    value="${a.value}"
    value-start="${a["value-start"]}"
    value-end="${a["value-end"]}"
    ?range="${a.range}"
    ?disabled="${a.disabled}"
    ?soft-disabled="${a["soft-disabled"]}"
    leading-icon="${a["leading-icon"]}"
    trailing-icon="${a["trailing-icon"]}"
    label="${a.label}"
    label-start="${a["label-start"]}"
    label-end="${a["label-end"]}"
    value-label="${a["value-label"]}"
    value-label-start="${a["value-label-start"]}"
    value-label-end="${a["value-label-end"]}"
    start-aria-label="${a["start-aria-label"]}"
    start-aria-valuetext="${a["start-aria-valuetext"]}"
    end-aria-label="${a["end-aria-label"]}"
    end-aria-valuetext="${a["end-aria-valuetext"]}"
    name="${a.name}"
    name-start="${a["name-start"]}"
    name-end="${a["name-end"]}"
    data-aria-valuetext="${a["data-aria-valuetext"]}"
    data-aria-label="${a["data-aria-label"]}"
    ?hide-tooltip="${a["hide-tooltip"]}"
    class="${a.class}"
    style="${a.style}"
  ></mdc-slider>
`,Ve={title:"Components/slider",tags:["autodocs"],component:"mdc-slider",render:ye,argTypes:{min:{control:"number"},max:{control:"number"},step:{control:"number"},value:{control:"number",if:{arg:"range",eq:!1}},"value-start":{control:"number",if:{arg:"range",eq:!0}},"value-end":{control:"number",if:{arg:"range",eq:!0}},range:{control:"boolean"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},"leading-icon":{control:"text"},"trailing-icon":{control:"text"},label:{control:"text"},"label-start":{control:"text"},"label-end":{control:"text"},"value-label":{control:"text",if:{arg:"range",eq:!1}},"value-label-start":{control:"text",if:{arg:"range",eq:!0}},"value-label-end":{control:"text",if:{arg:"range",eq:!0}},"start-aria-label":{control:"text",if:{arg:"range",eq:!0}},"start-aria-valuetext":{control:"text",if:{arg:"range",eq:!0}},"end-aria-label":{control:"text",if:{arg:"range",eq:!0}},"end-aria-valuetext":{control:"text",if:{arg:"range",eq:!0}},name:{control:"text",if:{arg:"range",eq:!1}},"name-start":{control:"text",if:{arg:"range",eq:!0}},"name-end":{control:"text",if:{arg:"range",eq:!0}},"data-aria-valuetext":{control:"text",if:{arg:"range",eq:!1}},"data-aria-label":{control:"text"},"hide-tooltip":{control:"boolean"},...ue,...me}},p={args:{min:0,max:100,step:1,value:50,range:!1,disabled:!1,"soft-disabled":!1,"leading-icon":"placeholder-bold","trailing-icon":"placeholder-bold",label:"Volume","label-start":"Min","label-end":"Max","value-label":"","value-label-start":"","value-label-end":"","start-aria-label":"","start-aria-valuetext":"","end-aria-label":"","end-aria-valuetext":"",name:"","name-start":"","name-end":"","data-aria-valuetext":"","data-aria-label":"","hide-tooltip":!1,class:"",style:""}},v={args:{min:0,max:100,step:5,range:!1,value:20,"label-start":"Start","label-end":"End",label:"Steps"}},g={args:{min:0,max:100,range:!1,value:50,disabled:!0,label:"Disabled"}},f={args:{min:0,max:100,value:50,range:!1,"leading-icon":"speaker-muted-bold","trailing-icon":"speaker-bold",label:"Volume"}},y={args:{min:0,max:100,value:30,range:!1,label:"Timeline with labels","label-start":"00:00","label-end":"03:00","value-label":"00:30","soft-disabled":!0}},x={args:{min:0,max:100,step:1,"value-start":20,"value-end":80,range:!0,label:"Range","label-start":"Min","label-end":"Max"}},$={args:{min:0,max:100,step:12,"value-start":38,"value-end":90,range:!0,label:"Range","label-start":"Min","label-end":"Max"}},S={args:{min:0,max:100,step:1,"value-start":20,"value-end":80,range:!0,label:"Range","label-start":"Min","label-end":"Max",disabled:!0}},E={args:{min:0,max:100,step:1,"value-start":20,"value-end":80,range:!0,label:"Range","label-start":"Min","label-end":"Max","soft-disabled":!0}};var w,D,A;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    range: false,
    disabled: false,
    'soft-disabled': false,
    'leading-icon': 'placeholder-bold',
    'trailing-icon': 'placeholder-bold',
    label: 'Volume',
    'label-start': 'Min',
    'label-end': 'Max',
    'value-label': '',
    'value-label-start': '',
    'value-label-end': '',
    'start-aria-label': '',
    'start-aria-valuetext': '',
    'end-aria-label': '',
    'end-aria-valuetext': '',
    name: '',
    'name-start': '',
    'name-end': '',
    'data-aria-valuetext': '',
    'data-aria-label': '',
    'hide-tooltip': false,
    class: '',
    style: ''
  }
}`,...(A=(D=p.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var z,I,R;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 5,
    range: false,
    value: 20,
    'label-start': 'Start',
    'label-end': 'End',
    label: 'Steps'
  }
}`,...(R=(I=v.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var C,L,H;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    range: false,
    value: 50,
    disabled: true,
    label: 'Disabled'
  }
}`,...(H=(L=g.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var F,_,V;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    value: 50,
    range: false,
    'leading-icon': 'speaker-muted-bold',
    'trailing-icon': 'speaker-bold',
    label: 'Volume'
  }
}`,...(V=(_=f.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var q,O,U;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    value: 30,
    range: false,
    label: 'Timeline with labels',
    'label-start': '00:00',
    'label-end': '03:00',
    'value-label': \`00:30\`,
    'soft-disabled': true
  }
}`,...(U=(O=y.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var B,K,W;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 1,
    'value-start': 20,
    'value-end': 80,
    range: true,
    label: 'Range',
    'label-start': 'Min',
    'label-end': 'Max'
  }
}`,...(W=(K=x.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var j,G,X;$.parameters={...$.parameters,docs:{...(j=$.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 12,
    'value-start': 38,
    'value-end': 90,
    range: true,
    label: 'Range',
    'label-start': 'Min',
    'label-end': 'Max'
  }
}`,...(X=(G=$.parameters)==null?void 0:G.docs)==null?void 0:X.source}}};var Q,Z,Y;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 1,
    'value-start': 20,
    'value-end': 80,
    range: true,
    label: 'Range',
    'label-start': 'Min',
    'label-end': 'Max',
    disabled: true
  }
}`,...(Y=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:Y.source}}};var J,P,ee;E.parameters={...E.parameters,docs:{...(J=E.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 1,
    'value-start': 20,
    'value-end': 80,
    range: true,
    label: 'Range',
    'label-start': 'Min',
    'label-end': 'Max',
    'soft-disabled': true
  }
}`,...(ee=(P=E.parameters)==null?void 0:P.docs)==null?void 0:ee.source}}};const qe=["Example","SliderWithTicks","DisabledSlider","SliderWithIcons","SoftDisabledSlider","RangeSlider","RangeSliderWithTicks","DisabledRangeSlider","SoftDisabledRangeSlider"];export{S as DisabledRangeSlider,g as DisabledSlider,p as Example,x as RangeSlider,$ as RangeSliderWithTicks,f as SliderWithIcons,v as SliderWithTicks,E as SoftDisabledRangeSlider,y as SoftDisabledSlider,qe as __namedExportsOrder,Ve as default};
