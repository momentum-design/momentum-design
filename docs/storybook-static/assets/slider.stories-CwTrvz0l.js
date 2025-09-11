import{a as T}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{i as te,k as d,D as c}from"./lit-element-D5KKan5q.js";import"./index-XT4ftmUQ.js";import{n as l}from"./property-Bj3TGwkg.js";import{r as ee}from"./state-CmYk530Z.js";import{e as ae}from"./base-DIkkzJ-c.js";import{Q as re}from"./repeat-CNQ7t7Vw.js";import{u as ie,C as N}from"./provider.component-DrWB4byV.js";import{K as le}from"./keys-hFXe221I.js";import{f as E,b as se}from"./index-CqVtAZCJ.js";import{c as ne,s as oe}from"./commonArgTypes-BluK8w5L.js";import{t as de}from"./utils-CFOyPOhY.js";import"./v4-CQkTLCs1.js";import"./iframe-DdgBuJNz.js";import"../sb-preview/runtime.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-Bb6vhctq.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ue;function me(r){return(e,t)=>ae(e,t,{get(){return(this.renderRoot??ue??(ue=document.createDocumentFragment())).querySelectorAll(r)}})}const ce=ie.constructTagName("slider"),he={START:"start",END:"end",UNDEFINED:void 0},m={MIN:0,MAX:100,STEP:1,STATE:he.UNDEFINED,ICON_SIZE:1.25,ICON_LENGTH_UNIT:"rem"},be=te`
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
`,pe=[se,be];var ve=Object.defineProperty,i=(r,e,t,s)=>{for(var o=void 0,n=r.length-1,u;n>=0;n--)(u=r[n])&&(o=u(e,t,o)||o);return o&&ve(e,t,o),o};const k=class k extends N{constructor(){super(),this.thumbFocused=m.STATE,this.thumbHovered=m.STATE,this.range=!1,this.min=m.MIN,this.max=m.MAX,this.step=m.STEP,this.addEventListener("keydown",this.preventChange.bind(this)),this.addEventListener("mousedown",this.preventChange.bind(this))}updated(e){super.updated(e),(e.has("value")||e.has("step")||e.has("min")||e.has("max")||e.has("disabled")||e.has("softDisabled")||e.has("range")||e.has("valueStart")||e.has("valueEnd"))&&this.updateTrackStyling(),e.has("softDisabled")&&this.setSoftDisabled(),(e.has("range")||e.has("valueStart")||e.has("valueEnd"))&&this.initializeRangeSlider()}preventChange(e){this.softDisabled&&(e instanceof KeyboardEvent&&e.key!==le.TAB||!(e instanceof KeyboardEvent))&&(e.preventDefault(),e.stopPropagation())}setSoftDisabled(){this.inputElements.forEach(e=>{const t=e;this.softDisabled?t.setAttribute("aria-disabled","true"):t.removeAttribute("aria-disabled")})}initializeRangeSlider(){this.valueStart===void 0&&(this.valueStart=this.min),this.valueEnd===void 0&&(this.valueEnd=this.max),this.handleInput(0),this.handleInput(1)}handleInput(e){const t=this.inputElements[e];if(t)if(e===0){if(!this.valueEnd)return;const s=Number(t.value);s>this.valueEnd?(t.value=String(this.valueEnd),this.valueStart=this.valueEnd):s>=this.min&&s<this.valueEnd?this.valueStart=s:s<this.min&&(t.value=String(this.min),this.valueStart=this.min)}else{if(!this.valueStart)return;const s=Number(t.value);s<this.valueStart?(t.value=String(this.valueStart),this.valueEnd=this.valueStart):s<=this.max&&s>this.valueStart?this.valueEnd=s:s>this.max&&(t.value=String(this.max),this.valueEnd=this.max)}}iconTemplate(e,t){return typeof e=="string"&&e.length>0?d`<mdc-icon
          name="${e}"
          part="${t}"
          length-unit="${m.ICON_LENGTH_UNIT}"
          size="${m.ICON_SIZE}"
        ></mdc-icon>`:null}tooltipTemplate(e,t){const[s,o]=this.inputElements,n=t==="end"?o:s,u=Number(n==null?void 0:n.value);if(typeof u!="number"||Number.isNaN(u)||this.max===this.min||this.disabled)return c;const h=(u-this.min)/(this.max-this.min);return d`<div part="slider-tooltip" aria-hidden="true" style="--mdc-slider-tooltip-left: ${h}">
      ${e||u}
    </div> `}updateTrackStyling(){let e="var(--mdc-slider-progress-color)",t="var(--mdc-slider-track-color)";if((this.disabled||this.softDisabled)&&(e="var(--mds-color-theme-control-active-disabled)",t="var(--mds-color-theme-control-inactive-disabled)"),this.range){if(!this.inputElements[1])return;const s=Number(this.inputElements[0].value),o=Number(this.inputElements[1].value),n=Number(this.inputElements[0].max)||1,u=Math.max(0,Math.min(100,(s-this.min)/(n-this.min)*100)),h=Math.max(0,Math.min(100,(o-this.min)/(n-this.min)*100));this.inputElements[1].style.background=`linear-gradient(
        to right,
        ${t} 0%,
        ${t} ${u}%,
        ${e} ${u}%,
        ${e} ${h}%,
        ${t} ${h}%,
        ${t} 100%
      )`}else{if(!this.inputElements[0])return;const s=Number(this.inputElements[0].value),o=Number(this.inputElements[0].max)||1,n=Math.max(0,Math.min(100,(s-this.min)/(o-this.min)*100));this.inputElements[0].style.background=`linear-gradient(to right, ${e} ${n}%, ${t} ${n}%)`}}onInput(e){const t=e.target;this.value=Number(t.value)}onChange(e){const t=e.target;this.value=Number(t.value),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))}onChangeStart(e){const t=e.target;this.valueStart=Number(t.value),this.dispatchEvent(new CustomEvent("change",{detail:{valueStart:this.valueStart,valueEnd:this.valueEnd}}))}onChangeEnd(e){const t=e.target;this.valueEnd=Number(t.value),this.dispatchEvent(new CustomEvent("change",{detail:{valueEnd:this.valueEnd,valueStart:this.valueStart}}))}getTickStyles(e){if(this.max===this.min)return"";const t=(e-this.min)/(this.max-this.min),s=[];if(this.inputElements[0]){const n=(Number(this.inputElements[0].value)-this.min)/(this.max-this.min);s.push(n)}if(this.range&&this.inputElements[1]){const n=(Number(this.inputElements[1].value)-this.min)/(this.max-this.min);s.push(n)}return s.includes(t)?"display:none;":`--mdc-slider-tick-left:${t};`}renderTicks(){const e=[];if(this.step&&this.step>1)for(let t=this.min;t<=this.max;t+=this.step)e.push(t);return this.step>1?d` <div part="slider-ticks">
        ${re(e,t=>t,t=>d`<span part="slider-tick" style=${this.getTickStyles(t)}></span>`)}
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
                  @input=${()=>this.handleInput(0)}
                  @change=${this.onChangeStart}
                  @focus=${()=>{this.thumbFocused="start"}}
                  @blur=${()=>{this.thumbFocused=void 0}}
                  @mouseenter=${()=>{this.disabled||(this.thumbHovered="start")}}
                  @mouseleave=${()=>{this.thumbHovered=void 0}}
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
                  @input=${()=>this.handleInput(1)}
                  @change=${this.onChangeEnd}
                  @focus=${()=>{this.thumbFocused="end"}}
                  @blur=${()=>{this.thumbFocused=void 0}}
                  @mouseenter=${()=>{this.disabled||(this.thumbHovered="end")}}
                  @mouseleave=${()=>{this.thumbHovered=void 0}}
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
                  @blur=${()=>{this.thumbFocused=void 0}}
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
    `}};k.styles=[...N.styles,...pe];let a=k;i([ee()],a.prototype,"thumbFocused");i([ee()],a.prototype,"thumbHovered");i([l({reflect:!0,type:Boolean})],a.prototype,"range");i([l({reflect:!0,type:Number})],a.prototype,"min");i([l({reflect:!0,type:Number})],a.prototype,"max");i([l({reflect:!0,type:Boolean})],a.prototype,"disabled");i([l({reflect:!0,type:Boolean,attribute:"soft-disabled"})],a.prototype,"softDisabled");i([l({reflect:!0,type:String,attribute:"leading-icon"})],a.prototype,"leadingIcon");i([l({reflect:!0,type:String,attribute:"trailing-icon"})],a.prototype,"trailingIcon");i([l({reflect:!0,type:Number})],a.prototype,"value");i([l({reflect:!0,type:Number,attribute:"value-start"})],a.prototype,"valueStart");i([l({reflect:!0,type:Number,attribute:"value-end"})],a.prototype,"valueEnd");i([l({reflect:!0,type:Number})],a.prototype,"step");i([l({reflect:!0,type:String})],a.prototype,"label");i([l({reflect:!0,type:String,attribute:"label-start"})],a.prototype,"labelStart");i([l({reflect:!0,type:String,attribute:"label-end"})],a.prototype,"labelEnd");i([l({reflect:!0,type:String,attribute:"value-label"})],a.prototype,"valueLabel");i([l({reflect:!0,type:String,attribute:"value-label-start"})],a.prototype,"valueLabelStart");i([l({reflect:!0,type:String,attribute:"value-label-end"})],a.prototype,"valueLabelEnd");i([l({reflect:!0,type:String})],a.prototype,"name");i([l({reflect:!0,type:String,attribute:"name-start"})],a.prototype,"nameStart");i([l({reflect:!0,type:String,attribute:"name-end"})],a.prototype,"nameEnd");i([l({reflect:!0,type:String,attribute:"data-aria-label"})],a.prototype,"dataAriaLabel");i([l({reflect:!0,type:String,attribute:"start-aria-label"})],a.prototype,"startAriaLabel");i([l({reflect:!0,type:String,attribute:"end-aria-label"})],a.prototype,"endAriaLabel");i([l({reflect:!0,type:String,attribute:"data-aria-valuetext"})],a.prototype,"dataAriaValuetext");i([l({reflect:!0,type:String,attribute:"start-aria-valuetext"})],a.prototype,"startAriaValuetext");i([l({reflect:!0,type:String,attribute:"end-aria-valuetext"})],a.prototype,"endAriaValueText");i([me('input[type="range"]')],a.prototype,"inputElements");a.register(ce);const ge=r=>d`
  <mdc-slider
    @input="${T("input")}"
    @change="${T("change")}"
    min="${r.min}"
    max="${r.max}"
    step="${r.step}"
    value="${r.value}"
    value-start="${r["value-start"]}"
    value-end="${r["value-end"]}"
    ?range="${r.range}"
    ?disabled="${r.disabled}"
    ?soft-disabled="${r["soft-disabled"]}"
    leading-icon="${r["leading-icon"]}"
    trailing-icon="${r["trailing-icon"]}"
    label="${r.label}"
    label-start="${r["label-start"]}"
    label-end="${r["label-end"]}"
    value-label="${r["value-label"]}"
    value-label-start="${r["value-label-start"]}"
    value-label-end="${r["value-label-end"]}"
    start-aria-label="${r["start-aria-label"]}"
    start-aria-valuetext="${r["start-aria-valuetext"]}"
    end-aria-label="${r["end-aria-label"]}"
    end-aria-valuetext="${r["end-aria-valuetext"]}"
    name="${r.name}"
    name-start="${r["name-start"]}"
    name-end="${r["name-end"]}"
    data-aria-valuetext="${r["data-aria-valuetext"]}"
    data-aria-label="${r["data-aria-label"]}"
  ></mdc-slider>
`,He={title:"Components/slider",tags:["autodocs"],component:"mdc-slider",render:ge,parameters:{badges:["stable"]},argTypes:{min:{control:"number"},max:{control:"number"},step:{control:"number"},value:{control:"number",if:{arg:"range",eq:!1}},"value-start":{control:"number",if:{arg:"range",eq:!0}},"value-end":{control:"number",if:{arg:"range",eq:!0}},range:{control:"boolean"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},"leading-icon":{control:"text"},"trailing-icon":{control:"text"},label:{control:"text"},"label-start":{control:"text"},"label-end":{control:"text"},"value-label":{control:"text",if:{arg:"range",eq:!1}},"value-label-start":{control:"text",if:{arg:"range",eq:!0}},"value-label-end":{control:"text",if:{arg:"range",eq:!0}},"start-aria-label":{control:"text",if:{arg:"range",eq:!0}},"start-aria-valuetext":{control:"text",if:{arg:"range",eq:!0}},"end-aria-label":{control:"text",if:{arg:"range",eq:!0}},"end-aria-valuetext":{control:"text",if:{arg:"range",eq:!0}},name:{control:"text",if:{arg:"range",eq:!1}},"name-start":{control:"text",if:{arg:"range",eq:!0}},"name-end":{control:"text",if:{arg:"range",eq:!0}},"data-aria-valuetext":{control:"text",if:{arg:"range",eq:!1}},"data-aria-label":{control:"text"},...de(["--mdc-slider-thumb-color","--mdc-slider-thumb-border-color","--mdc-slider-thumb-size","--mdc-slider-input-size","--mdc-slider-tick-size","--mdc-slider-track-height","--mdc-slider-tick-color","--mdc-slider-progress-color","--mdc-slider-track-color","--mdc-slider-tooltip-left","--mdc-slider-tick-left"]),...ne,...oe}},b={args:{min:0,max:100,step:1,value:50,range:!1,disabled:!1,"soft-disabled":!1,"leading-icon":"placeholder-bold","trailing-icon":"placeholder-bold",label:"Volume","label-start":"Min","label-end":"Max","value-label":"","value-label-start":"","value-label-end":"","start-aria-label":"","start-aria-valuetext":"","end-aria-label":"","end-aria-valuetext":"",name:"","name-start":"","name-end":"","data-aria-valuetext":"","data-aria-label":"",class:"",style:""}},p={args:{min:0,max:100,step:5,range:!1,value:20,"label-start":"Start","label-end":"End",label:"Steps"}},v={args:{min:0,max:100,range:!1,value:50,disabled:!0,label:"Disabled"}},g={args:{min:0,max:100,value:50,range:!1,"leading-icon":"speaker-muted-bold","trailing-icon":"speaker-bold",label:"Volume"}},f={args:{min:0,max:100,value:30,range:!1,label:"Timeline with labels","label-start":"00:00","label-end":"03:00","value-label":"00:30","soft-disabled":!0}},x={args:{min:0,max:100,step:1,"value-start":20,"value-end":80,range:!0,label:"Range","label-start":"Min","label-end":"Max"}},y={args:{min:0,max:100,step:12,"value-start":38,"value-end":90,range:!0,label:"Range","label-start":"Min","label-end":"Max"}},$={args:{min:0,max:100,step:1,"value-start":20,"value-end":80,range:!0,label:"Range","label-start":"Min","label-end":"Max",disabled:!0}},S={args:{min:0,max:100,step:1,"value-start":20,"value-end":80,range:!0,label:"Range","label-start":"Min","label-end":"Max","soft-disabled":!0}};var z,w,M;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(L=(R=v.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var V,F,H;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    value: 50,
    range: false,
    'leading-icon': 'speaker-muted-bold',
    'trailing-icon': 'speaker-bold',
    label: 'Volume'
  }
}`,...(H=(F=g.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var q,_,B;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(B=(_=f.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var O,U,W;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(j=(X=y.parameters)==null?void 0:X.docs)==null?void 0:j.source}}};var G,Q,Z;$.parameters={...$.parameters,docs:{...(G=$.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Z=(Q=$.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var Y,J,P;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(P=(J=S.parameters)==null?void 0:J.docs)==null?void 0:P.source}}};const qe=["Example","SliderWithTicks","DisabledSlider","SliderWithIcons","SoftDisabledSlider","RangeSlider","RangeSliderWithTicks","DisabledRangeSlider","SoftDisabledRangeSlider"];export{$ as DisabledRangeSlider,v as DisabledSlider,b as Example,x as RangeSlider,y as RangeSliderWithTicks,g as SliderWithIcons,p as SliderWithTicks,S as SoftDisabledRangeSlider,f as SoftDisabledSlider,qe as __namedExportsOrder,He as default};
