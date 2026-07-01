import{u as ae,N as re,ao as k,an as ie,k as d,r as c,Q as le,C as T,U as te,n,as as se}from"./iframe-BrN8x_Z0.js";import"./index-D5lPBL37.js";import{K as ne,a as oe,N as de,A as m}from"./KeyDownHandledMixin-lEQrVlT7.js";import"./index-CUDtTPD0.js";import{c as ue,s as me}from"./commonArgTypes-BG7EqI50.js";import"./preload-helper-C1FmrZbK.js";import"./index-CuaFIEeJ.js";import"./index-DTrDRi1E.js";import"./popover.component-BtH5R005.js";import"./BackdropMixin-C1JBgKdc.js";import"./popover.constants-DWapbakJ.js";import"./index-BDHBrWNs.js";import"./button.component-Duy2Fx_8.js";import"./buttonsimple.component-C085WkLc.js";import"./DisabledMixin-DjI3Wyw_.js";import"./button.utils-rNW36Ji7.js";const he=ae.constructTagName("slider"),ce={START:"start",END:"end",UNDEFINED:void 0},h={MIN:0,MAX:100,STEP:1,STATE:ce.UNDEFINED,ICON_SIZE:1.25,ICON_LENGTH_UNIT:"rem"},be=re`
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
`,pe=[ie,be];var ve=Object.defineProperty,s=(i,e,t,o)=>{for(var a=void 0,l=i.length-1,u;l>=0;l--)(u=i[l])&&(a=u(e,t,a)||a);return a&&ve(e,t,a),a};const N=class N extends ne(oe(T)){constructor(){super(),this.thumbFocused=h.STATE,this.thumbHovered=h.STATE,this.range=!1,this.min=h.MIN,this.max=h.MAX,this.step=h.STEP,this.spatialNavEditMode=!1,this.addEventListener("keydown",this.handleKeyEvent.bind(this)),this.addEventListener("mousedown",this.preventChange.bind(this))}updated(e){super.updated(e),(e.has("value")||e.has("step")||e.has("min")||e.has("max")||e.has("disabled")||e.has("softDisabled")||e.has("range")||e.has("valueStart")||e.has("valueEnd"))&&this.updateTrackStyling(),e.has("softDisabled")&&this.setSoftDisabled(),(e.has("range")||e.has("valueStart")||e.has("valueEnd"))&&this.initializeRangeSlider()}preventChange(e){this.softDisabled&&(e.preventDefault(),e.stopPropagation())}handleKeyEvent(e){var o;const t=this.getActionForKeyEvent(e);if(this.getKeyboardNavMode()===de.SPATIAL){if(this.softDisabled)return;const a=(o=this.shadowRoot)==null?void 0:o.activeElement,l=(a==null?void 0:a.tagName)==="INPUT";if(e.preventDefault(),!l){this.spatialNavEditMode=!1;return}if(!this.spatialNavEditMode&&t===m.ENTER){this.spatialNavEditMode=!0,this.keyDownEventHandled();return}this.spatialNavEditMode&&((t===m.ENTER||t===m.ESCAPE||t===m.UP||t===m.DOWN)&&(this.spatialNavEditMode=!1,(t===m.ENTER||t===m.ESCAPE)&&this.keyDownEventHandled()),t===m.LEFT&&(a==null||a.stepDown(),this.keyDownEventHandled(),this.handleInput(a)),t===m.RIGHT&&(a==null||a.stepUp(),this.keyDownEventHandled(),this.handleInput(a)))}else this.softDisabled&&t!==m.TAB&&(e.preventDefault(),e.stopPropagation())}setSoftDisabled(){this.inputElements.forEach(e=>{const t=e;this.softDisabled?t.setAttribute("aria-disabled","true"):t.removeAttribute("aria-disabled")})}initializeRangeSlider(){this.valueStart===void 0&&(this.valueStart=this.min),this.valueEnd===void 0&&(this.valueEnd=this.max),this.inputElements.forEach(this.handleInput,this)}handleInput(e){const t=Array.from(this.inputElements);if(!t.includes(e))return;if(t.length===1){this.value=Number(e.value);return}const o=t.indexOf(e),a=t[o];if(o===0){if(!this.valueEnd)return;const l=Number(a.value);l>this.valueEnd?(a.value=String(this.valueEnd),this.valueStart=this.valueEnd):l>=this.min&&l<this.valueEnd?this.valueStart=l:l<this.min&&(a.value=String(this.min),this.valueStart=this.min)}else{if(!this.valueStart)return;const l=Number(a.value);l<this.valueStart?(a.value=String(this.valueStart),this.valueEnd=this.valueStart):l<=this.max&&l>this.valueStart?this.valueEnd=l:l>this.max&&(a.value=String(this.max),this.valueEnd=this.max)}}iconTemplate(e,t){return typeof e=="string"&&e.length>0?d`<mdc-icon
          name="${e}"
          part="${t}"
          length-unit="${h.ICON_LENGTH_UNIT}"
          size="${h.ICON_SIZE}"
        ></mdc-icon>`:null}tooltipTemplate(e,t){const[o,a]=this.inputElements,l=t==="end"?a:o,u=Number(l==null?void 0:l.value);if(typeof u!="number"||Number.isNaN(u)||this.max===this.min||this.disabled||this.hideTooltip)return c;const b=(u-this.min)/(this.max-this.min);return d`<div part="slider-tooltip" aria-hidden="true" style="--mdc-slider-tooltip-left: ${b}">
      ${e||u}
    </div> `}updateTrackStyling(){let e="var(--mdc-slider-progress-color)",t="var(--mdc-slider-track-color)";if((this.disabled||this.softDisabled)&&(e="var(--mds-color-theme-control-active-disabled)",t="var(--mds-color-theme-control-inactive-disabled)"),this.range){if(!this.inputElements[1])return;const o=Number(this.inputElements[0].value),a=Number(this.inputElements[1].value),l=Number(this.inputElements[0].max)||1,u=Math.max(0,Math.min(100,(o-this.min)/(l-this.min)*100)),b=Math.max(0,Math.min(100,(a-this.min)/(l-this.min)*100));this.inputElements[1].style.background=`linear-gradient(
        to right,
        ${t} 0%,
        ${t} ${u}%,
        ${e} ${u}%,
        ${e} ${b}%,
        ${t} ${b}%,
        ${t} 100%
      )`}else{if(!this.inputElements[0])return;const o=Number(this.inputElements[0].value),a=Number(this.inputElements[0].max)||1,l=Math.max(0,Math.min(100,(o-this.min)/(a-this.min)*100));this.inputElements[0].style.background=`linear-gradient(to right, ${e} ${l}%, ${t} ${l}%)`}}onInput(e){const t=e.target;this.handleInput(t)}onChange(e){const t=e.target;this.value=Number(t.value),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))}onChangeStart(e){const t=e.target;this.valueStart=Number(t.value),this.dispatchEvent(new CustomEvent("change",{detail:{valueStart:this.valueStart,valueEnd:this.valueEnd}}))}onChangeEnd(e){const t=e.target;this.valueEnd=Number(t.value),this.dispatchEvent(new CustomEvent("change",{detail:{valueEnd:this.valueEnd,valueStart:this.valueStart}}))}getTickStyles(e){if(this.max===this.min)return"";const t=(e-this.min)/(this.max-this.min),o=[];if(this.inputElements[0]){const l=(Number(this.inputElements[0].value)-this.min)/(this.max-this.min);o.push(l)}if(this.range&&this.inputElements[1]){const l=(Number(this.inputElements[1].value)-this.min)/(this.max-this.min);o.push(l)}return o.includes(t)?"display:none;":`--mdc-slider-tick-left:${t};`}renderTicks(){const e=[];if(this.step&&this.step>1)for(let t=this.min;t<=this.max;t+=this.step)e.push(t);return this.step>1?d` <div part="slider-ticks">
        ${le(e,t=>t,t=>d`<span part="slider-tick" style=${this.getTickStyles(t)}></span>`)}
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
    `}};N.styles=[...T.styles,...pe];let r=N;s([te()],r.prototype,"thumbFocused");s([te()],r.prototype,"thumbHovered");s([n({reflect:!0,type:Boolean})],r.prototype,"range");s([n({reflect:!0,type:Number})],r.prototype,"min");s([n({reflect:!0,type:Number})],r.prototype,"max");s([n({reflect:!0,type:Boolean})],r.prototype,"disabled");s([n({reflect:!0,type:Boolean,attribute:"soft-disabled"})],r.prototype,"softDisabled");s([n({reflect:!0,type:String,attribute:"leading-icon"})],r.prototype,"leadingIcon");s([n({reflect:!0,type:String,attribute:"trailing-icon"})],r.prototype,"trailingIcon");s([n({reflect:!0,type:Number})],r.prototype,"value");s([n({reflect:!0,type:Number,attribute:"value-start"})],r.prototype,"valueStart");s([n({reflect:!0,type:Number,attribute:"value-end"})],r.prototype,"valueEnd");s([n({reflect:!0,type:Number})],r.prototype,"step");s([n({reflect:!0,type:String})],r.prototype,"label");s([n({reflect:!0,type:String,attribute:"label-start"})],r.prototype,"labelStart");s([n({reflect:!0,type:String,attribute:"label-end"})],r.prototype,"labelEnd");s([n({reflect:!0,type:String,attribute:"value-label"})],r.prototype,"valueLabel");s([n({reflect:!0,type:String,attribute:"value-label-start"})],r.prototype,"valueLabelStart");s([n({reflect:!0,type:String,attribute:"value-label-end"})],r.prototype,"valueLabelEnd");s([n({reflect:!0,type:String})],r.prototype,"name");s([n({reflect:!0,type:String,attribute:"name-start"})],r.prototype,"nameStart");s([n({reflect:!0,type:String,attribute:"name-end"})],r.prototype,"nameEnd");s([n({reflect:!0,type:String,attribute:"data-aria-label"})],r.prototype,"dataAriaLabel");s([n({reflect:!0,type:String,attribute:"start-aria-label"})],r.prototype,"startAriaLabel");s([n({reflect:!0,type:String,attribute:"end-aria-label"})],r.prototype,"endAriaLabel");s([n({reflect:!0,type:String,attribute:"data-aria-valuetext"})],r.prototype,"dataAriaValuetext");s([n({reflect:!0,type:String,attribute:"start-aria-valuetext"})],r.prototype,"startAriaValuetext");s([n({reflect:!0,type:String,attribute:"end-aria-valuetext"})],r.prototype,"endAriaValueText");s([n({reflect:!0,type:Boolean,attribute:"hide-tooltip"})],r.prototype,"hideTooltip");s([se('input[type="range"]')],r.prototype,"inputElements");r.register(he);const{action:M}=__STORYBOOK_MODULE_ACTIONS__,ge=i=>d`
  <mdc-slider
    @input="${M("input")}"
    @change="${M("change")}"
    min="${i.min}"
    max="${i.max}"
    step="${i.step}"
    value="${i.value}"
    value-start="${i["value-start"]}"
    value-end="${i["value-end"]}"
    ?range="${i.range}"
    ?disabled="${i.disabled}"
    ?soft-disabled="${i["soft-disabled"]}"
    leading-icon="${i["leading-icon"]}"
    trailing-icon="${i["trailing-icon"]}"
    label="${i.label}"
    label-start="${i["label-start"]}"
    label-end="${i["label-end"]}"
    value-label="${i["value-label"]}"
    value-label-start="${i["value-label-start"]}"
    value-label-end="${i["value-label-end"]}"
    start-aria-label="${i["start-aria-label"]}"
    start-aria-valuetext="${i["start-aria-valuetext"]}"
    end-aria-label="${i["end-aria-label"]}"
    end-aria-valuetext="${i["end-aria-valuetext"]}"
    name="${i.name}"
    name-start="${i["name-start"]}"
    name-end="${i["name-end"]}"
    data-aria-valuetext="${i["data-aria-valuetext"]}"
    data-aria-label="${i["data-aria-label"]}"
    ?hide-tooltip="${i["hide-tooltip"]}"
    class="${i.class}"
    style="${i.style}"
  ></mdc-slider>
`,Ce={title:"Components/slider",tags:["autodocs"],component:"mdc-slider",render:ge,argTypes:{min:{control:"number"},max:{control:"number"},step:{control:"number"},value:{control:"number",if:{arg:"range",eq:!1}},"value-start":{control:"number",if:{arg:"range",eq:!0}},"value-end":{control:"number",if:{arg:"range",eq:!0}},range:{control:"boolean"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},"leading-icon":{control:"text"},"trailing-icon":{control:"text"},label:{control:"text"},"label-start":{control:"text"},"label-end":{control:"text"},"value-label":{control:"text",if:{arg:"range",eq:!1}},"value-label-start":{control:"text",if:{arg:"range",eq:!0}},"value-label-end":{control:"text",if:{arg:"range",eq:!0}},"start-aria-label":{control:"text",if:{arg:"range",eq:!0}},"start-aria-valuetext":{control:"text",if:{arg:"range",eq:!0}},"end-aria-label":{control:"text",if:{arg:"range",eq:!0}},"end-aria-valuetext":{control:"text",if:{arg:"range",eq:!0}},name:{control:"text",if:{arg:"range",eq:!1}},"name-start":{control:"text",if:{arg:"range",eq:!0}},"name-end":{control:"text",if:{arg:"range",eq:!0}},"data-aria-valuetext":{control:"text",if:{arg:"range",eq:!1}},"data-aria-label":{control:"text"},"hide-tooltip":{control:"boolean"},...ue,...me}},p={args:{min:0,max:100,step:1,value:50,range:!1,disabled:!1,"soft-disabled":!1,"leading-icon":"placeholder-bold","trailing-icon":"placeholder-bold",label:"Volume","label-start":"Min","label-end":"Max","value-label":"","value-label-start":"","value-label-end":"","start-aria-label":"","start-aria-valuetext":"","end-aria-label":"","end-aria-valuetext":"",name:"","name-start":"","name-end":"","data-aria-valuetext":"","data-aria-label":"","hide-tooltip":!1,class:"",style:""}},v={args:{min:0,max:100,step:5,range:!1,value:20,"label-start":"Start","label-end":"End",label:"Steps"}},g={args:{min:0,max:100,range:!1,value:50,disabled:!0,label:"Disabled"}},f={args:{min:0,max:100,value:50,range:!1,"leading-icon":"speaker-muted-bold","trailing-icon":"speaker-bold",label:"Volume"}},x={args:{min:0,max:100,value:30,range:!1,label:"Timeline with labels","label-start":"00:00","label-end":"03:00","value-label":"00:30","soft-disabled":!0}},y={args:{min:0,max:100,step:1,"value-start":20,"value-end":80,range:!0,label:"Range","label-start":"Min","label-end":"Max"}},$={args:{min:0,max:100,step:12,"value-start":38,"value-end":90,range:!0,label:"Range","label-start":"Min","label-end":"Max"}},S={args:{min:0,max:100,step:1,"value-start":20,"value-end":80,range:!0,label:"Range","label-start":"Min","label-end":"Max",disabled:!0}},E={args:{min:0,max:100,step:1,"value-start":20,"value-end":80,range:!0,label:"Range","label-start":"Min","label-end":"Max","soft-disabled":!0}};var w,D,A;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(H=(L=g.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var _,F,V;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    value: 50,
    range: false,
    'leading-icon': 'speaker-muted-bold',
    'trailing-icon': 'speaker-bold',
    label: 'Volume'
  }
}`,...(V=(F=f.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var O,q,U;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(U=(q=x.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var B,K,W;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(W=(K=y.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var G,X,j;$.parameters={...$.parameters,docs:{...(G=$.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(j=(X=$.parameters)==null?void 0:X.docs)==null?void 0:j.source}}};var Q,Z,Y;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(P=E.parameters)==null?void 0:P.docs)==null?void 0:ee.source}}};const Le=["Example","SliderWithTicks","DisabledSlider","SliderWithIcons","SoftDisabledSlider","RangeSlider","RangeSliderWithTicks","DisabledRangeSlider","SoftDisabledRangeSlider"];export{S as DisabledRangeSlider,g as DisabledSlider,p as Example,y as RangeSlider,$ as RangeSliderWithTicks,f as SliderWithIcons,v as SliderWithTicks,E as SoftDisabledRangeSlider,x as SoftDisabledSlider,Le as __namedExportsOrder,Ce as default};
