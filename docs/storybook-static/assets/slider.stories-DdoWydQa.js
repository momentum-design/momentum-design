import{u as te,S as ae,ab as E,aa as re,E as T,k as d,h,$ as ee,n as l}from"./iframe-D-wtYgP4.js";import"./index-R2uCROWE.js";import{e as ie}from"./base-DIkkzJ-c.js";import{Q as le}from"./repeat-DQNSm5tf.js";import{K as se}from"./TabIndexMixin-8R5zBaJM.js";import"./index-BVob5N4b.js";import{c as ne,s as oe}from"./commonArgTypes-BluK8w5L.js";import"./preload-helper-C1FmrZbK.js";import"./index-Nn1cdab0.js";import"./index-DTrDRi1E.js";import"./directive-Ctav8iJK.js";import"./popover.component-DXo1Q79I.js";import"./if-defined-CgebNzyn.js";import"./BackdropMixin-DuBcFtIs.js";import"./index-BNNuxFcN.js";import"./button.component-L5eFM7wO.js";import"./buttonsimple.component-BhoVFfPX.js";import"./DisabledMixin-DZ9F4VFG.js";import"./button.utils-rNW36Ji7.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let de;function ue(a){return(e,t)=>ie(e,t,{get(){return(this.renderRoot??de??(de=document.createDocumentFragment())).querySelectorAll(a)}})}const me=te.constructTagName("slider"),he={START:"start",END:"end",UNDEFINED:void 0},m={MIN:0,MAX:100,STEP:1,STATE:he.UNDEFINED,ICON_SIZE:1.25,ICON_LENGTH_UNIT:"rem"},ce=ae`
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
    box-shadow: ${E};
  }

  input[type='range']:focus::-moz-range-thumb {
    box-shadow: ${E};
  }

  input[type='range']:focus::-ms-thumb {
    box-shadow: ${E};
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
`,be=[re,ce];var pe=Object.defineProperty,i=(a,e,t,s)=>{for(var o=void 0,n=a.length-1,u;n>=0;n--)(u=a[n])&&(o=u(e,t,o)||o);return o&&pe(e,t,o),o};const k=class k extends T{constructor(){super(),this.thumbFocused=m.STATE,this.thumbHovered=m.STATE,this.range=!1,this.min=m.MIN,this.max=m.MAX,this.step=m.STEP,this.addEventListener("keydown",this.preventChange.bind(this)),this.addEventListener("mousedown",this.preventChange.bind(this))}updated(e){super.updated(e),(e.has("value")||e.has("step")||e.has("min")||e.has("max")||e.has("disabled")||e.has("softDisabled")||e.has("range")||e.has("valueStart")||e.has("valueEnd"))&&this.updateTrackStyling(),e.has("softDisabled")&&this.setSoftDisabled(),(e.has("range")||e.has("valueStart")||e.has("valueEnd"))&&this.initializeRangeSlider()}preventChange(e){this.softDisabled&&(e instanceof KeyboardEvent&&e.key!==se.TAB||!(e instanceof KeyboardEvent))&&(e.preventDefault(),e.stopPropagation())}setSoftDisabled(){this.inputElements.forEach(e=>{const t=e;this.softDisabled?t.setAttribute("aria-disabled","true"):t.removeAttribute("aria-disabled")})}initializeRangeSlider(){this.valueStart===void 0&&(this.valueStart=this.min),this.valueEnd===void 0&&(this.valueEnd=this.max),this.handleInput(0),this.handleInput(1)}handleInput(e){const t=this.inputElements[e];if(t)if(e===0){if(!this.valueEnd)return;const s=Number(t.value);s>this.valueEnd?(t.value=String(this.valueEnd),this.valueStart=this.valueEnd):s>=this.min&&s<this.valueEnd?this.valueStart=s:s<this.min&&(t.value=String(this.min),this.valueStart=this.min)}else{if(!this.valueStart)return;const s=Number(t.value);s<this.valueStart?(t.value=String(this.valueStart),this.valueEnd=this.valueStart):s<=this.max&&s>this.valueStart?this.valueEnd=s:s>this.max&&(t.value=String(this.max),this.valueEnd=this.max)}}iconTemplate(e,t){return typeof e=="string"&&e.length>0?d`<mdc-icon
          name="${e}"
          part="${t}"
          length-unit="${m.ICON_LENGTH_UNIT}"
          size="${m.ICON_SIZE}"
        ></mdc-icon>`:null}tooltipTemplate(e,t){const[s,o]=this.inputElements,n=t==="end"?o:s,u=Number(n==null?void 0:n.value);if(typeof u!="number"||Number.isNaN(u)||this.max===this.min||this.disabled||this.hideTooltip)return h;const c=(u-this.min)/(this.max-this.min);return d`<div part="slider-tooltip" aria-hidden="true" style="--mdc-slider-tooltip-left: ${c}">
      ${e||u}
    </div> `}updateTrackStyling(){let e="var(--mdc-slider-progress-color)",t="var(--mdc-slider-track-color)";if((this.disabled||this.softDisabled)&&(e="var(--mds-color-theme-control-active-disabled)",t="var(--mds-color-theme-control-inactive-disabled)"),this.range){if(!this.inputElements[1])return;const s=Number(this.inputElements[0].value),o=Number(this.inputElements[1].value),n=Number(this.inputElements[0].max)||1,u=Math.max(0,Math.min(100,(s-this.min)/(n-this.min)*100)),c=Math.max(0,Math.min(100,(o-this.min)/(n-this.min)*100));this.inputElements[1].style.background=`linear-gradient(
        to right,
        ${t} 0%,
        ${t} ${u}%,
        ${e} ${u}%,
        ${e} ${c}%,
        ${t} ${c}%,
        ${t} 100%
      )`}else{if(!this.inputElements[0])return;const s=Number(this.inputElements[0].value),o=Number(this.inputElements[0].max)||1,n=Math.max(0,Math.min(100,(s-this.min)/(o-this.min)*100));this.inputElements[0].style.background=`linear-gradient(to right, ${e} ${n}%, ${t} ${n}%)`}}onInput(e){const t=e.target;this.value=Number(t.value)}onChange(e){const t=e.target;this.value=Number(t.value),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))}onChangeStart(e){const t=e.target;this.valueStart=Number(t.value),this.dispatchEvent(new CustomEvent("change",{detail:{valueStart:this.valueStart,valueEnd:this.valueEnd}}))}onChangeEnd(e){const t=e.target;this.valueEnd=Number(t.value),this.dispatchEvent(new CustomEvent("change",{detail:{valueEnd:this.valueEnd,valueStart:this.valueStart}}))}getTickStyles(e){if(this.max===this.min)return"";const t=(e-this.min)/(this.max-this.min),s=[];if(this.inputElements[0]){const n=(Number(this.inputElements[0].value)-this.min)/(this.max-this.min);s.push(n)}if(this.range&&this.inputElements[1]){const n=(Number(this.inputElements[1].value)-this.min)/(this.max-this.min);s.push(n)}return s.includes(t)?"display:none;":`--mdc-slider-tick-left:${t};`}renderTicks(){const e=[];if(this.step&&this.step>1)for(let t=this.min;t<=this.max;t+=this.step)e.push(t);return this.step>1?d` <div part="slider-ticks">
        ${le(e,t=>t,t=>d`<span part="slider-tick" style=${this.getTickStyles(t)}></span>`)}
      </div>`:h}render(){return d`
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
                  @input=${()=>this.handleInput(0)}
                  @change=${this.onChangeStart}
                  @focus=${()=>{this.thumbFocused="start"}}
                  @blur=${()=>{this.thumbFocused=void 0}}
                  @mouseenter=${()=>{this.disabled||(this.thumbHovered="start")}}
                  @mouseleave=${()=>{this.thumbHovered=void 0}}
                />
                ${this.thumbFocused==="start"||this.thumbHovered==="start"?this.tooltipTemplate(this.valueLabelStart):h}
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
                  @input=${()=>this.handleInput(1)}
                  @change=${this.onChangeEnd}
                  @focus=${()=>{this.thumbFocused="end"}}
                  @blur=${()=>{this.thumbFocused=void 0}}
                  @mouseenter=${()=>{this.disabled||(this.thumbHovered="end")}}
                  @mouseleave=${()=>{this.thumbHovered=void 0}}
                />
                ${this.thumbFocused==="end"||this.thumbHovered==="end"?this.tooltipTemplate(this.valueLabelEnd,this.thumbFocused||this.thumbHovered):h}
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
                  @blur=${()=>{this.thumbFocused=void 0}}
                  @mouseenter=${()=>{this.disabled||(this.thumbHovered="start")}}
                  @mouseleave=${()=>{this.thumbHovered=void 0}}
                />
                ${this.thumbFocused==="start"||this.thumbHovered==="start"?this.tooltipTemplate(this.valueLabel):h}
              `}
        </div>
        ${this.iconTemplate(this.trailingIcon,"trailing-icon")}
      </div>
      <div part="slider-labels">
        ${this.labelStart?d`<span part="slider-label-start">${this.labelStart}</span>`:null}
        ${this.labelEnd?d`<span part="slider-label-end">${this.labelEnd}</span>`:null}
      </div>
    `}};k.styles=[...T.styles,...be];let r=k;i([ee()],r.prototype,"thumbFocused");i([ee()],r.prototype,"thumbHovered");i([l({reflect:!0,type:Boolean})],r.prototype,"range");i([l({reflect:!0,type:Number})],r.prototype,"min");i([l({reflect:!0,type:Number})],r.prototype,"max");i([l({reflect:!0,type:Boolean})],r.prototype,"disabled");i([l({reflect:!0,type:Boolean,attribute:"soft-disabled"})],r.prototype,"softDisabled");i([l({reflect:!0,type:String,attribute:"leading-icon"})],r.prototype,"leadingIcon");i([l({reflect:!0,type:String,attribute:"trailing-icon"})],r.prototype,"trailingIcon");i([l({reflect:!0,type:Number})],r.prototype,"value");i([l({reflect:!0,type:Number,attribute:"value-start"})],r.prototype,"valueStart");i([l({reflect:!0,type:Number,attribute:"value-end"})],r.prototype,"valueEnd");i([l({reflect:!0,type:Number})],r.prototype,"step");i([l({reflect:!0,type:String})],r.prototype,"label");i([l({reflect:!0,type:String,attribute:"label-start"})],r.prototype,"labelStart");i([l({reflect:!0,type:String,attribute:"label-end"})],r.prototype,"labelEnd");i([l({reflect:!0,type:String,attribute:"value-label"})],r.prototype,"valueLabel");i([l({reflect:!0,type:String,attribute:"value-label-start"})],r.prototype,"valueLabelStart");i([l({reflect:!0,type:String,attribute:"value-label-end"})],r.prototype,"valueLabelEnd");i([l({reflect:!0,type:String})],r.prototype,"name");i([l({reflect:!0,type:String,attribute:"name-start"})],r.prototype,"nameStart");i([l({reflect:!0,type:String,attribute:"name-end"})],r.prototype,"nameEnd");i([l({reflect:!0,type:String,attribute:"data-aria-label"})],r.prototype,"dataAriaLabel");i([l({reflect:!0,type:String,attribute:"start-aria-label"})],r.prototype,"startAriaLabel");i([l({reflect:!0,type:String,attribute:"end-aria-label"})],r.prototype,"endAriaLabel");i([l({reflect:!0,type:String,attribute:"data-aria-valuetext"})],r.prototype,"dataAriaValuetext");i([l({reflect:!0,type:String,attribute:"start-aria-valuetext"})],r.prototype,"startAriaValuetext");i([l({reflect:!0,type:String,attribute:"end-aria-valuetext"})],r.prototype,"endAriaValueText");i([l({reflect:!0,type:Boolean,attribute:"hide-tooltip"})],r.prototype,"hideTooltip");i([ue('input[type="range"]')],r.prototype,"inputElements");r.register(me);const{action:N}=__STORYBOOK_MODULE_ACTIONS__,ve=a=>d`
  <mdc-slider
    @input="${N("input")}"
    @change="${N("change")}"
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
`,_e={title:"Components/slider",tags:["autodocs"],component:"mdc-slider",render:ve,argTypes:{min:{control:"number"},max:{control:"number"},step:{control:"number"},value:{control:"number",if:{arg:"range",eq:!1}},"value-start":{control:"number",if:{arg:"range",eq:!0}},"value-end":{control:"number",if:{arg:"range",eq:!0}},range:{control:"boolean"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},"leading-icon":{control:"text"},"trailing-icon":{control:"text"},label:{control:"text"},"label-start":{control:"text"},"label-end":{control:"text"},"value-label":{control:"text",if:{arg:"range",eq:!1}},"value-label-start":{control:"text",if:{arg:"range",eq:!0}},"value-label-end":{control:"text",if:{arg:"range",eq:!0}},"start-aria-label":{control:"text",if:{arg:"range",eq:!0}},"start-aria-valuetext":{control:"text",if:{arg:"range",eq:!0}},"end-aria-label":{control:"text",if:{arg:"range",eq:!0}},"end-aria-valuetext":{control:"text",if:{arg:"range",eq:!0}},name:{control:"text",if:{arg:"range",eq:!1}},"name-start":{control:"text",if:{arg:"range",eq:!0}},"name-end":{control:"text",if:{arg:"range",eq:!0}},"data-aria-valuetext":{control:"text",if:{arg:"range",eq:!1}},"data-aria-label":{control:"text"},"hide-tooltip":{control:"boolean"},...ne,...oe}},b={args:{min:0,max:100,step:1,value:50,range:!1,disabled:!1,"soft-disabled":!1,"leading-icon":"placeholder-bold","trailing-icon":"placeholder-bold",label:"Volume","label-start":"Min","label-end":"Max","value-label":"","value-label-start":"","value-label-end":"","start-aria-label":"","start-aria-valuetext":"","end-aria-label":"","end-aria-valuetext":"",name:"","name-start":"","name-end":"","data-aria-valuetext":"","data-aria-label":"","hide-tooltip":!1,class:"",style:""}},p={args:{min:0,max:100,step:5,range:!1,value:20,"label-start":"Start","label-end":"End",label:"Steps"}},v={args:{min:0,max:100,range:!1,value:50,disabled:!0,label:"Disabled"}},g={args:{min:0,max:100,value:50,range:!1,"leading-icon":"speaker-muted-bold","trailing-icon":"speaker-bold",label:"Volume"}},f={args:{min:0,max:100,value:30,range:!1,label:"Timeline with labels","label-start":"00:00","label-end":"03:00","value-label":"00:30","soft-disabled":!0}},x={args:{min:0,max:100,step:1,"value-start":20,"value-end":80,range:!0,label:"Range","label-start":"Min","label-end":"Max"}},y={args:{min:0,max:100,step:12,"value-start":38,"value-end":90,range:!0,label:"Range","label-start":"Min","label-end":"Max"}},$={args:{min:0,max:100,step:1,"value-start":20,"value-end":80,range:!0,label:"Range","label-start":"Min","label-end":"Max",disabled:!0}},S={args:{min:0,max:100,step:1,"value-start":20,"value-end":80,range:!0,label:"Range","label-start":"Min","label-end":"Max","soft-disabled":!0}};var z,w,M;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(M=(w=b.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var A,D,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(D=p.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var C,R,L;v.parameters={...v.parameters,docs:{...(C=v.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    range: false,
    value: 50,
    disabled: true,
    label: 'Disabled'
  }
}`,...(L=(R=v.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var _,V,F;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    value: 50,
    range: false,
    'leading-icon': 'speaker-muted-bold',
    'trailing-icon': 'speaker-bold',
    label: 'Volume'
  }
}`,...(F=(V=g.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var H,q,O;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(O=(q=f.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var B,U,W;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(W=(U=x.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var K,X,j;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(j=(X=y.parameters)==null?void 0:X.docs)==null?void 0:j.source}}};var G,Q,Y;$.parameters={...$.parameters,docs:{...(G=$.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Y=(Q=$.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,J,P;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(P=(J=S.parameters)==null?void 0:J.docs)==null?void 0:P.source}}};const Ve=["Example","SliderWithTicks","DisabledSlider","SliderWithIcons","SoftDisabledSlider","RangeSlider","RangeSliderWithTicks","DisabledRangeSlider","SoftDisabledRangeSlider"];export{$ as DisabledRangeSlider,v as DisabledSlider,b as Example,x as RangeSlider,y as RangeSliderWithTicks,g as SliderWithIcons,p as SliderWithTicks,S as SoftDisabledRangeSlider,f as SoftDisabledSlider,Ve as __namedExportsOrder,_e as default};
