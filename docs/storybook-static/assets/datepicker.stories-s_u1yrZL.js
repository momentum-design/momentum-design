import"./index-CdBP_yce.js";import{g as L,p as F,d as R,t as ke,c as $e,S as h,i as Ie,a as Me,b as Ee,f as Y,e as Ae}from"./index-DF5B-sA8.js";import"./index-BfDwIRea.js";import"./index-BWS3WZef.js";import{u as Ve,S as Ne,U as Fe,k as m,t as s,v as G,n as d,m as C,X as w}from"./iframe-D5qwq8cl.js";import"./index-DPyT6VyS.js";import{D as we}from"./DataAriaLabelMixin-4A7j5SiP.js";import{F as Pe}from"./FormInternalsMixin-DvgSkvpm.js";import{b as g}from"./KeyDownHandledMixin-BhPsZOr4.js";import{F as _}from"./formfieldwrapper.component-HySpgXY6.js";import{P as Re,D as Le,a as Ce}from"./popover.constants-BzuTErsF.js";import{c as Oe,s as Ue}from"./commonArgTypes-BG7EqI50.js";import{h as Ye,a as O}from"./utils-B5QUENNQ.js";import{V as Ge}from"./formfieldwrapper.constants-DOz-i57s.js";import"./button.component-CvBqu9kP.js";import"./buttonsimple.component-Ue29ahk0.js";import"./DisabledMixin-D03aknaA.js";import"./button.utils-rNW36Ji7.js";import"./preload-helper-C1FmrZbK.js";import"./index-BqZiOeq9.js";import"./index-DTrDRi1E.js";import"./popover.component-CwItGqRa.js";import"./BackdropMixin-r0_gKnDt.js";import"./FocusTrapMixin-cSDKf3hj.js";import"./index-DeVpvDYk.js";import"./statusmessage.constants-vPXjPzcT.js";const _e=Ve.constructTagName("datepicker"),b={DEFAULT:"default",INPUT:"input"},q="calendar-empty-bold",v="datepicker-triggerid",P={VARIANT:b.INPUT,LOCALE:"en-US",DISABLE_FLIP:!1},qe=Ne`
  :host {
    --mdc-datepicker-background-color: var(--mds-color-theme-background-primary-ghost);
    --mdc-datepicker-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-datepicker-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-datepicker-height: 2rem;
    --mdc-datepicker-width: fit-content;

    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    align-items: unset;
    width: var(--mdc-datepicker-width);
  }

  :host::part(native-input) {
    margin: 0;
    opacity: 0.1%;
    overflow: visible;
    padding: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }

  :host::part(container) {
    height: var(--mdc-datepicker-height);
    width: 100%;
    position: relative;
    display: flex;
  }

  :host::part(base-container) {
    border-radius: 0.5rem;
    padding: 0.34375rem 0.375rem 0.34375rem 0.75rem;
    border: 1px solid var(--mdc-datepicker-border-color);
    background: var(--mdc-datepicker-background-color);
    display: flex;
    gap: 0.25rem;
    align-items: center;
    user-select: none;
    width: 100%;
    cursor: default;
  }

  :host::part(base-container):hover {
    --mdc-datepicker-background-color: var(--mds-color-theme-background-primary-hover);
  }

  :host::part(base-container):active {
    --mdc-datepicker-background-color: var(--mds-color-theme-background-primary-active);
  }

  :host::part(spinbutton-group) {
    display: flex;
    align-items: center;
    gap: 0;
    flex: 1;
    min-width: 0;
  }

  :host::part(spinbutton) {
    background: transparent;
    border: none;
    color: var(--mdc-datepicker-text-color);
    font-family: inherit;
    font-size: var(--mds-font-apps-body-midsize-regular-font-size);
    line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    text-align: center;
    outline: none;
    padding: 0;
    margin: 0;
    cursor: text;
    -moz-appearance: textfield;
  }

  :host::part(spinbutton)::-webkit-inner-spin-button,
  :host::part(spinbutton)::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  :host::part(spinbutton):focus {
    background: var(--mds-color-theme-background-accent-normal);
    color: var(--mds-color-theme-common-text-primary-normal);
    border-radius: 0.125rem;
  }

  :host::part(spinbutton-month),
  :host::part(spinbutton-day) {
    min-width: 1.5rem;
    width: 1.5rem;
  }

  :host::part(spinbutton-year) {
    min-width: 2.5rem;
    width: 2.5rem;
  }

  :host::part(separator) {
    color: var(--mdc-datepicker-text-color);
    font-size: var(--mds-font-apps-body-midsize-regular-font-size);
    line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    user-select: none;
    pointer-events: none;
    padding: 0 0.0625rem;
  }

  :host::part(icon-container) {
    flex-shrink: 0;
    border-radius: 100px;
  }

  /* Select variant */
  :host::part(select-text) {
    flex: 1;
    color: var(--mdc-datepicker-text-color);
    font-size: var(--mds-font-apps-body-midsize-regular-font-size);
    line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  :host::part(select-placeholder) {
    color: var(--mds-color-theme-text-secondary-normal);
  }

  /* Popover overrides */
  :host mdc-popover {
    min-width: max-content;
  }
  :host mdc-popover::part(popover-content) {
    min-width: auto;
    padding: 0;
  }

  /* Validation border colors */
  :host([help-text-type='success'])::part(base-container),
  :host([help-text-type='warning'])::part(base-container),
  :host([help-text-type='error'])::part(base-container) {
    --mdc-datepicker-border-color: var(--mdc-help-text-color);
  }

  :host([readonly])::part(help-text-container) {
    --mdc-help-text-color: var(--mds-color-theme-text-secondary-normal);
  }

  /* Disabled, soft-disabled, readonly */
  :host([disabled])::part(base-container),
  :host([soft-disabled])::part(base-container),
  :host([readonly])::part(base-container) {
    --mdc-datepicker-border-color: var(--mds-color-theme-outline-primary-disabled);
    --mdc-datepicker-background-color: var(--mds-color-theme-background-input-disabled);
  }
  :host([disabled])::part(base-container):hover,
  :host([soft-disabled])::part(base-container):hover,
  :host([readonly])::part(base-container):hover {
    --mdc-datepicker-background-color: var(--mds-color-theme-background-input-disabled);
  }
  :host([disabled])::part(spinbutton),
  :host([soft-disabled])::part(spinbutton),
  :host([disabled])::part(separator),
  :host([soft-disabled])::part(separator),
  :host([disabled])::part(select-text),
  :host([soft-disabled])::part(select-text) {
    --mdc-datepicker-text-color: var(--mds-color-theme-text-primary-disabled);
    color: var(--mds-color-theme-text-primary-disabled);
  }
`,We=[qe,...Fe(!0)];function f(n){return L(n).order}function ze(n){return L(n).separator}function Ke(n){if(!n)return null;const e=F(n);return e?{month:String(e.getMonth()+1).padStart(2,"0"),day:String(e.getDate()).padStart(2,"0"),year:String(e.getFullYear()).padStart(4,"0")}:null}function Be(n,e,t){const a=parseInt(n,10),l=parseInt(e,10),o=parseInt(t,10);if(Number.isNaN(a)||Number.isNaN(l)||Number.isNaN(o)||a<1||a>12||l<1||l>31||o<1)return"";const r=R(o,a);if(l>r)return"";const u=$e(o,a,l);return ke(u)}function He(n,e=!1){const{order:t,separator:a}=L(n),l={month:"mm",day:"dd",year:"yyyy"},o=t.map(r=>l[r]).join(` ${a} `);return e?`${o} - ${o}`:o}function je(n,e,t){switch(n){case"month":return 12;case"day":return e&&t?R(t,e):e?R(2e3,e):31;case"year":return 9999;default:return 0}}function Je(n){switch(n){case"month":return 1;case"day":return 1;case"year":return 1;default:return 0}}var Xe=Object.defineProperty,c=(n,e,t,a)=>{for(var l=void 0,o=n.length-1,r;o>=0;o--)(r=n[o])&&(l=r(e,t,l)||l);return l&&Xe(e,t,l),l};const U=class U extends Pe(we(_)){constructor(){super(...arguments),this.variant=P.VARIANT,this.value="",this.selectionMode=h.SINGLE,this.locale=P.LOCALE,this.placement=Re.BOTTOM_START,this.strategy=Le.STRATEGY,this.disableFlip=P.DISABLE_FLIP,this.localeMonthLabel="",this.localeDayLabel="",this.localeYearLabel="",this.localeCalendarLabel="",this.localeSpinbuttonDescription="",this.localeTodayLabel="",this.localePrevMonthLabel="",this.localeNextMonthLabel="",this.displayPopover=!1,this.internalMonth="",this.internalDay="",this.internalYear="",this.endValue="",this.pendingDigits=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.parseValueToInternal(),this.syncFormValue()}).catch(e=>{this.onerror&&this.onerror(e)})}disconnectedCallback(){super.disconnectedCallback(),this.pendingDigitTimeout&&clearTimeout(this.pendingDigitTimeout)}willUpdate(e){super.willUpdate(e),e.has("value")&&!this.displayPopover?(this.parseValueToInternal(),this.syncFormValue()):e.has("endValue")&&!this.displayPopover&&this.syncFormValue()}parseValueToInternal(e=this.value){const t=Ke(e);t?(this.internalMonth=t.month,this.internalDay=t.day,this.internalYear=t.year):(this.internalMonth="",this.internalDay="",this.internalYear="")}internalToValue(){return Be(this.internalMonth,this.internalDay,this.internalYear)}getParsedMin(){return this.min?F(this.min)??void 0:void 0}getParsedMax(){return this.max?F(this.max)??void 0:void 0}clampValueToRange(e){const t=F(e);if(!t)return e;const a=this.getParsedMin(),l=this.getParsedMax();return a&&Ie(t,a)?this.min??e:l&&Me(t,l)?this.max??e:e}getFieldRange(e){const t=parseInt(this.internalMonth,10)||void 0,a=parseInt(this.internalYear,10)||void 0,l=Je(e),o=je(e,t,a);let r=l,u=o;const p=this.getParsedMin(),y=this.getParsedMax();return e==="year"?(p&&(r=Math.max(r,p.getFullYear())),y&&(u=Math.min(u,y.getFullYear()))):e==="month"&&a?(p&&a===p.getFullYear()&&(r=Math.max(r,p.getMonth()+1)),y&&a===y.getFullYear()&&(u=Math.min(u,y.getMonth()+1))):e==="day"&&t&&a&&(p&&a===p.getFullYear()&&t===p.getMonth()+1&&(r=Math.max(r,p.getDate())),y&&a===y.getFullYear()&&t===y.getMonth()+1&&(u=Math.min(u,y.getDate()))),r>u?{min:l,max:o,isMinConstrained:!1,isMaxConstrained:!1}:{min:r,max:u,isMinConstrained:r!==l,isMaxConstrained:u!==o}}getNextSpinbuttonValue(e,t,a){return a?e<t.min?t.min:e>=t.max?t.isMaxConstrained?t.max:t.min:e+1:e>t.max?t.max:e<=t.min?t.isMinConstrained?t.min:t.max:e-1}syncFormValue(){const e=this.value||this.internalToValue();if(this.internals)if(this.name&&this.endValue){const t=new FormData;t.append(this.name,e||""),t.append(`${this.name}-end`,this.endValue),this.internals.setFormValue(t)}else this.internals.setFormValue(e||null)}commitValue(){const e=this.internalToValue();if(e){const t=this.clampValueToRange(e);if(t!==e&&this.parseValueToInternal(t),t===this.value)return;this.value=t,this.syncFormValue(),this.notifyValueChange()}}notifyValueChange(){const e={value:this.value,endValue:this.endValue};this.dispatchEvent(new CustomEvent("input",{detail:e,bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:e,bubbles:!0,composed:!0}))}flushPendingInput(){this.pendingDigitTimeout&&(clearTimeout(this.pendingDigitTimeout),this.pendingDigitTimeout=void 0),this.pendingDigits="",this.commitValue()}formResetCallback(){this.value="",this.endValue="",this.parseValueToInternal(),this.syncFormValue()}formStateRestoreCallback(e){if(e instanceof FormData){const t=this.name||"";this.value=e.get(t)||"",this.endValue=e.get(`${t}-end`)||""}else typeof e=="string"&&(this.value=e,this.endValue="");this.parseValueToInternal(),this.syncFormValue()}handleCalendarButtonClick(){this.disabled||this.readonly||(this.displayPopover||this.flushPendingInput(),this.displayPopover=!this.displayPopover)}handleSelectTriggerClick(){this.disabled||this.readonly||(this.displayPopover=!this.displayPopover)}handleSelectKeydown(e){this.disabled||this.readonly||(e.key===g.ENTER||e.key===g.SPACE||e.key===g.ARROW_DOWN)&&(e.preventDefault(),this.displayPopover=!0)}focusCalendarGrid(){setTimeout(()=>{var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("mdc-calendar");if(e!=null&&e.shadowRoot){const a=e.shadowRoot.querySelector('.calendar-day[tabindex="0"]');a==null||a.focus()}},0)}handleDateSelected(e){const{detail:t}=e,a=this.effectiveSelectionMode;a===h.WEEK||a===h.RANGE?t.startDate&&t.endDate?(this.value=t.startDate,this.endValue=t.endDate):(this.value=t.date,this.endValue=""):(this.value=t.date,this.endValue=""),this.parseValueToInternal(),this.syncFormValue(),this.notifyValueChange();const l=a===h.RANGE&&this.value&&this.endValue;(a!==h.RANGE||l)&&(this.displayPopover=!1,this.focusBackToTrigger())}getSpinbuttonInput(e){switch(e){case"month":return this.monthInput;case"day":return this.dayInput;case"year":return this.yearInput;default:return null}}getFieldValue(e){switch(e){case"month":return this.internalMonth;case"day":return this.internalDay;case"year":return this.internalYear;default:return""}}setFieldValue(e,t){const a=e==="year"?4:2,l=String(t).padStart(a,"0");switch(e){case"month":this.internalMonth=l;break;case"day":this.internalDay=l;break;case"year":this.internalYear=l;break}this.requestUpdate()}handleSpinbuttonKeydown(e,t){if(this.readonly)return;const a=this.getFieldRange(t),l=parseInt(this.getFieldValue(t),10)||0;switch(e.key){case g.ARROW_UP:{e.preventDefault();const o=this.getNextSpinbuttonValue(l,a,!0);this.setFieldValue(t,o),this.commitValue();break}case g.ARROW_DOWN:{e.preventDefault();const o=this.getNextSpinbuttonValue(l,a,!1);this.setFieldValue(t,o),this.commitValue();break}case g.ARROW_LEFT:{e.preventDefault(),this.advanceToPrevField(t);break}case g.ARROW_RIGHT:{e.preventDefault(),this.advanceToNextField(t);break}case g.TAB:break;default:{/^\d$/.test(e.key)?(e.preventDefault(),this.handleDigitInput(e.key,t,a.min,a.max)):e.preventDefault();break}}}handleDigitInput(e,t,a,l){this.pendingDigitTimeout&&clearTimeout(this.pendingDigitTimeout),this.pendingDigits+=e;const o=t==="year"?4:2;if(this.pendingDigits.length>=o){let r=parseInt(this.pendingDigits,10);r>l&&(r=l),r<a&&(r=a),this.setFieldValue(t,r),this.pendingDigits="",this.commitValue(),this.advanceToNextField(t)}else if(t!=="year"){const r=parseInt(this.pendingDigits,10),u=Math.floor(l/10);if(r>u){let p=r;p>l&&(p=l),p<a&&(p=a),this.setFieldValue(t,p),this.pendingDigits="",this.commitValue(),this.advanceToNextField(t)}else this.setFieldValue(t,r),this.pendingDigitTimeout=setTimeout(()=>{let p=r;p<a&&(p=a),this.setFieldValue(t,p),this.pendingDigits="",this.commitValue(),this.advanceToNextField(t)},1e3)}else{const r=parseInt(this.pendingDigits,10);this.setFieldValue(t,r),this.pendingDigitTimeout=setTimeout(()=>{this.pendingDigits="",this.commitValue()},1e3)}}advanceToNextField(e){const t=f(this.locale),a=t.indexOf(e);if(a<t.length-1){const l=t[a+1];this.updateComplete.then(()=>{const o=this.getSpinbuttonInput(l);o==null||o.focus(),o==null||o.select()}).catch(()=>{})}}advanceToPrevField(e){const t=f(this.locale),a=t.indexOf(e);if(a>0){const l=t[a-1];this.updateComplete.then(()=>{const o=this.getSpinbuttonInput(l);o==null||o.focus(),o==null||o.select()}).catch(()=>{})}}handleSpinbuttonFocus(e){e.target.select(),this.pendingDigits="",this.pendingDigitTimeout&&clearTimeout(this.pendingDigitTimeout)}handleSpinbuttonAreaClick(e){if(e.target.getAttribute("role")!=="spinbutton"){const a=f(this.locale),l=this.getSpinbuttonInput(a[0]);l==null||l.focus(),l==null||l.select()}}handleBaseKeydown(e){e.key===g.ESCAPE&&this.displayPopover&&(this.displayPopover=!1)}focusBackToTrigger(){this.updateComplete.then(()=>{var e,t;if(this.variant===b.INPUT){const a=(e=this.shadowRoot)==null?void 0:e.querySelector('[part~="icon-container"]');a==null||a.focus()}else{const a=(t=this.shadowRoot)==null?void 0:t.getElementById(v);a==null||a.focus()}}).catch(()=>{})}get effectiveSelectionMode(){return this.selectionMode===h.WEEK?h.WEEK:this.variant===b.DEFAULT?h.RANGE:this.selectionMode}getDisplayText(){if(!this.value)return"";if(this.effectiveSelectionMode===h.WEEK){const{start:e,end:t}=Ee(this.value,this.locale);return Y(e,t,this.locale)}return this.effectiveSelectionMode===h.RANGE&&this.endValue?Y(this.value,this.endValue,this.locale):Ae(this.value,this.locale)}renderSpinbutton(e){const t=this.getFieldValue(e),a=this.getFieldRange(e),l={month:this.localeMonthLabel,day:this.localeDayLabel,year:this.localeYearLabel},o={month:"mm",day:"dd",year:"yyyy"};return m`
      <input
        id="${e}-spinbutton"
        part="spinbutton spinbutton-${e}"
        role="spinbutton"
        aria-label="${l[e]}"
        aria-valuemin="${a.min}"
        aria-valuemax="${a.max}"
        aria-valuenow="${s(t?parseInt(t,10):void 0)}"
        aria-description="${this.localeSpinbuttonDescription}"
        .value="${t}"
        placeholder="${o[e]}"
        autocomplete="off"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        tabindex="${this.disabled?"-1":"0"}"
        @keydown="${r=>this.handleSpinbuttonKeydown(r,e)}"
        @focus="${this.handleSpinbuttonFocus}"
      />
    `}renderInputVariant(){const e=f(this.locale),t=ze(this.locale);return m`
      <div
        id="${v}"
        part="base-container"
        class="mdc-focus-ring"
        @click="${this.handleSpinbuttonAreaClick}"
        @keydown="${this.handleBaseKeydown}"
      >
        <div part="spinbutton-group">
          ${e.map((a,l)=>m`
              ${this.renderSpinbutton(a)}
              ${l<e.length-1?m`<span part="separator">${t}</span>`:G}
            `)}
        </div>
        <mdc-button
          part="icon-container"
          class="own-focus-ring"
          variant="tertiary"
          prefix-icon="${q}"
          aria-label="${this.localeCalendarLabel}"
          aria-expanded="${this.displayPopover?"true":"false"}"
          aria-haspopup="dialog"
          ?disabled="${this.disabled}"
          size="20"
          @click="${this.handleCalendarButtonClick}"
        ></mdc-button>
      </div>
    `}renderDefaultVariant(){const e=this.getDisplayText(),t=this.effectiveSelectionMode,a=He(this.locale,t===h.RANGE||t===h.WEEK);return m`
      <div
        id="${v}"
        part="base-container"
        class="mdc-focus-ring"
        role="combobox"
        aria-expanded="${this.displayPopover?"true":"false"}"
        aria-haspopup="dialog"
        aria-label="${this.localeCalendarLabel}"
        tabindex="${this.disabled?"-1":"0"}"
        @click="${this.handleSelectTriggerClick}"
        @keydown="${this.handleSelectKeydown}"
      >
        ${e?m`<span part="select-text">${e}</span>`:m`<span part="select-text select-placeholder">${a}</span>`}
        <mdc-icon part="icon-container" name="${q}" size="1" aria-hidden="true"></mdc-icon>
      </div>
    `}renderPopover(){const e=this.effectiveSelectionMode;return m`
      <mdc-popover
        trigger="${Ce.MANUAL}"
        triggerid="${v}"
        interactive
        ?visible="${this.displayPopover}"
        backdrop
        backdrop-append-to="${s(this.backdropAppendTo)}"
        append-to="${s(this.appendTo)}"
        hide-on-outside-click
        hide-on-escape
        focus-trap
        disable-aria-expanded
        ?disable-flip="${this.disableFlip}"
        placement="${this.placement}"
        strategy="${s(this.strategy)}"
        @shown="${()=>this.focusCalendarGrid()}"
        @closebyescape="${t=>{t.target===t.currentTarget&&(this.displayPopover=!1,this.focusBackToTrigger())}}"
        @closebyoutsideclick="${()=>{this.displayPopover=!1,this.focusBackToTrigger()}}"
        exportparts="popover-content"
      >
        <mdc-calendar
          value="${s(this.value||void 0)}"
          end-value="${s(this.endValue||void 0)}"
          selection-mode="${e}"
          locale="${this.locale}"
          min="${s(this.min)}"
          max="${s(this.max)}"
          locale-today-label="${this.localeTodayLabel}"
          locale-prev-month-label="${this.localePrevMonthLabel}"
          locale-next-month-label="${this.localeNextMonthLabel}"
          @date-selected="${this.handleDateSelected}"
        ></mdc-calendar>
      </mdc-popover>
    `}render(){return m`
      ${this.renderLabel()}
      <div part="container">
        ${this.variant===b.INPUT?this.renderInputVariant():this.renderDefaultVariant()}
        <input
          id="${this.inputId}"
          part="native-input"
          name="${this.name}"
          type="text"
          ?disabled="${this.disabled}"
          ?required="${this.required}"
          ?readonly="${this.readonly}"
          tabindex="-1"
          aria-hidden="true"
          aria-disabled="${s(this.disabled||this.softDisabled)}"
        />
        ${this.renderPopover()}
      </div>
      ${this.helpText?this.renderHelperText():G}
    `}};U.styles=[..._.styles,...We];let i=U;c([d({type:String,reflect:!0})],i.prototype,"variant");c([d({type:String,reflect:!0})],i.prototype,"value");c([d({type:String,reflect:!0,attribute:"selection-mode"})],i.prototype,"selectionMode");c([d({type:String,reflect:!0})],i.prototype,"locale");c([d({type:String,reflect:!0})],i.prototype,"min");c([d({type:String,reflect:!0})],i.prototype,"max");c([d({type:String,reflect:!0})],i.prototype,"placement");c([d({type:String,reflect:!0})],i.prototype,"strategy");c([d({type:Boolean,reflect:!0,attribute:"disable-flip"})],i.prototype,"disableFlip");c([d({type:String,reflect:!0,attribute:"append-to"})],i.prototype,"appendTo");c([d({type:String,reflect:!0,attribute:"backdrop-append-to"})],i.prototype,"backdropAppendTo");c([d({type:String,attribute:"locale-month-label"})],i.prototype,"localeMonthLabel");c([d({type:String,attribute:"locale-day-label"})],i.prototype,"localeDayLabel");c([d({type:String,attribute:"locale-year-label"})],i.prototype,"localeYearLabel");c([d({type:String,attribute:"locale-calendar-label"})],i.prototype,"localeCalendarLabel");c([d({type:String,attribute:"locale-spinbutton-description"})],i.prototype,"localeSpinbuttonDescription");c([d({type:String,attribute:"locale-today-label"})],i.prototype,"localeTodayLabel");c([d({type:String,attribute:"locale-prev-month-label"})],i.prototype,"localePrevMonthLabel");c([d({type:String,attribute:"locale-next-month-label"})],i.prototype,"localeNextMonthLabel");c([C("#month-spinbutton")],i.prototype,"monthInput");c([C("#day-spinbutton")],i.prototype,"dayInput");c([C("#year-spinbutton")],i.prototype,"yearInput");c([w()],i.prototype,"displayPopover");c([w()],i.prototype,"internalMonth");c([w()],i.prototype,"internalDay");c([w()],i.prototype,"internalYear");c([d({type:String,reflect:!0,attribute:"end-value"})],i.prototype,"endValue");i.register(_e);const{action:x}=__STORYBOOK_MODULE_ACTIONS__,W=Object.values(Ge).filter(n=>n!=="priority"),Qe=n=>m`
  <mdc-datepicker
    @change="${x("onchange")}"
    @input="${x("oninput")}"
    @focus="${x("onfocus")}"
    @blur="${x("onblur")}"
    label="${s(n.label)}"
    value="${s(n.value)}"
    end-value="${s(n["end-value"])}"
    variant="${s(n.variant)}"
    selection-mode="${s(n["selection-mode"])}"
    locale="${s(n.locale)}"
    ?required="${n.required}"
    ?disabled="${n.disabled}"
    ?readonly="${n.readonly}"
    help-text="${s(n["help-text"])}"
    help-text-type="${s(n["help-text-type"])}"
    min="${s(n.min)}"
    max="${s(n.max)}"
    locale-month-label="${s(n["locale-month-label"])}"
    locale-day-label="${s(n["locale-day-label"])}"
    locale-year-label="${s(n["locale-year-label"])}"
    locale-calendar-label="${s(n["locale-calendar-label"])}"
    locale-today-label="${s(n["locale-today-label"])}"
    locale-spinbutton-description="${s(n["locale-spinbutton-description"])}"
    locale-prev-month-label="${s(n["locale-prev-month-label"])}"
    locale-next-month-label="${s(n["locale-next-month-label"])}"
    append-to="${s(n["append-to"])}"
    backdrop-append-to="${s(n["backdrop-append-to"])}"
  ></mdc-datepicker>
`,$t={title:"Components/datepicker",tags:["autodocs"],component:"mdc-datepicker",render:Qe,argTypes:{label:{control:"text"},value:{control:"text",description:"Selected date as ISO string (yyyy-mm-dd)"},"end-value":{control:"text",description:"Range end date as an ISO string (yyyy-mm-dd)"},variant:{control:"select",options:Object.values(b),description:"Variant: input (spinbuttons) or default (select trigger)"},"selection-mode":{control:"select",options:Object.values(h)},locale:{control:"text",description:"BCP 47 locale string"},required:{control:"boolean"},disabled:{control:"boolean"},readonly:{control:"boolean"},"help-text":{control:"text"},"help-text-type":{control:"select",description:`The type of help text. It can be ${W.map(n=>`'${n}'`).join(", ")}.`,options:W},min:{control:"text",description:"Minimum selectable date (ISO string)"},max:{control:"text",description:"Maximum selectable date (ISO string)"},"locale-month-label":{control:"text"},"locale-day-label":{control:"text"},"locale-year-label":{control:"text"},"locale-calendar-label":{control:"text"},"locale-today-label":{control:"text"},"locale-spinbutton-description":{control:"text"},"locale-prev-month-label":{control:"text"},"locale-next-month-label":{control:"text"},"append-to":{control:"text"},"backdrop-append-to":{control:"text"},...Ye(["validation-message","validity","willValidate","dayInput","monthInput","yearInput","displayPopover","internalMonth","internalDay","internalYear","effectiveSelectionMode","pendingDigits","pendingDigitTimeout"]),...Oe,...Ue}},S={args:{label:"Start date",variant:b.INPUT,"selection-mode":h.SINGLE,locale:"en-US",required:!0,"help-text":"Helper text","locale-month-label":"Month","locale-day-label":"Day","locale-year-label":"Year","locale-calendar-label":"Open calendar","locale-today-label":"Today","locale-spinbutton-description":"Use arrow keys to change the value or type a number"}},T={args:{label:"Start date",value:"2025-07-15",variant:b.INPUT,locale:"en-US",required:!0,"help-text":"Helper text","locale-month-label":"Month","locale-day-label":"Day","locale-year-label":"Year","locale-calendar-label":"Open calendar","locale-today-label":"Today"}},D={args:{label:"Date range",variant:b.DEFAULT,"selection-mode":h.RANGE,locale:"en-US",required:!0,"help-text":"Select a start and end date","locale-today-label":"Today"}},k={args:{label:"Date range",value:"2025-07-13","end-value":"2025-07-19",variant:b.DEFAULT,"selection-mode":h.RANGE,locale:"en-US",required:!0,"help-text":"Helper text","locale-today-label":"Today"}},$={args:{label:"Select week",variant:b.DEFAULT,"selection-mode":h.WEEK,locale:"en-US","help-text":"Click a date to select its week","locale-today-label":"Today","locale-prev-month-label":"Go to previous month","locale-next-month-label":"Go to next month"}},I={args:{label:"Start date",value:"2025-07-15",variant:b.INPUT,disabled:!0,locale:"en-US","help-text":"Helper text","locale-month-label":"Month","locale-day-label":"Day","locale-year-label":"Year"}},M={args:{label:"Start date",value:"2025-07-15",variant:b.INPUT,readonly:!0,locale:"en-US","help-text":"Helper text","locale-month-label":"Month","locale-day-label":"Day","locale-year-label":"Year"}},E={args:{label:"End date",value:"2025-07-14",variant:b.INPUT,locale:"en-US",required:!0,"help-text":"End date must occur after start date","help-text-type":"error","locale-month-label":"Month","locale-day-label":"Day","locale-year-label":"Year"}},A={render:()=>m`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <mdc-datepicker
        label="Start date"
        value="2025-07-15"
        variant="input"
        locale="en-US"
        required
        locale-month-label="Month"
        locale-day-label="Day"
        locale-year-label="Year"
        locale-calendar-label="Open calendar"
        locale-today-label="Today"
      ></mdc-datepicker>
      <mdc-datepicker
        label="End date"
        value="2025-07-23"
        variant="input"
        locale="en-US"
        required
        locale-month-label="Month"
        locale-day-label="Day"
        locale-year-label="Year"
        locale-calendar-label="Open calendar"
        locale-today-label="Today"
      ></mdc-datepicker>
    </div>
  `,...O()},V={render:()=>m`
    <mdc-datepicker
      label="Startdatum"
      variant="input"
      locale="de-DE"
      required
      help-text="Hilfetexte"
      locale-month-label="Monat"
      locale-day-label="Tag"
      locale-year-label="Jahr"
      locale-calendar-label="Kalender öffnen"
      locale-today-label="Heute"
      locale-prev-month-label="Vorheriger Monat"
      locale-next-month-label="Nächster Monat"
      locale-spinbutton-description="Verwenden Sie Pfeiltasten, um den Wert zu ändern"
    ></mdc-datepicker>
  `,...O()},N={render:()=>m`
    <mdc-datepicker
      label="開始日"
      variant="input"
      locale="ja-JP"
      required
      locale-month-label="月"
      locale-day-label="日"
      locale-year-label="年"
      locale-calendar-label="カレンダーを開く"
      locale-today-label="今日"
    ></mdc-datepicker>
  `,...O()};var z,K,B;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
  // AI-Assisted
  args: {
    label: 'Start date',
    variant: VARIANT.INPUT,
    'selection-mode': SELECTION_MODE.SINGLE,
    locale: 'en-US',
    required: true,
    'help-text': 'Helper text',
    'locale-month-label': 'Month',
    'locale-day-label': 'Day',
    'locale-year-label': 'Year',
    'locale-calendar-label': 'Open calendar',
    'locale-today-label': 'Today',
    'locale-spinbutton-description': 'Use arrow keys to change the value or type a number'
  }
  // End AI-Assisted
}`,...(B=(K=S.parameters)==null?void 0:K.docs)==null?void 0:B.source}}};var H,j,J;T.parameters={...T.parameters,docs:{...(H=T.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Start date',
    value: '2025-07-15',
    variant: VARIANT.INPUT,
    locale: 'en-US',
    required: true,
    'help-text': 'Helper text',
    'locale-month-label': 'Month',
    'locale-day-label': 'Day',
    'locale-year-label': 'Year',
    'locale-calendar-label': 'Open calendar',
    'locale-today-label': 'Today'
  }
}`,...(J=(j=T.parameters)==null?void 0:j.docs)==null?void 0:J.source}}};var X,Q,Z;D.parameters={...D.parameters,docs:{...(X=D.parameters)==null?void 0:X.docs,source:{originalSource:`{
  // AI-Assisted
  args: {
    label: 'Date range',
    variant: VARIANT.DEFAULT,
    'selection-mode': SELECTION_MODE.RANGE,
    locale: 'en-US',
    required: true,
    'help-text': 'Select a start and end date',
    'locale-today-label': 'Today'
  }
  // End AI-Assisted
}`,...(Z=(Q=D.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,te,ae;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  // AI-Assisted
  args: {
    label: 'Date range',
    value: '2025-07-13',
    'end-value': '2025-07-19',
    variant: VARIANT.DEFAULT,
    'selection-mode': SELECTION_MODE.RANGE,
    locale: 'en-US',
    required: true,
    'help-text': 'Helper text',
    'locale-today-label': 'Today'
  }
  // End AI-Assisted
}`,...(ae=(te=k.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var le,ne,oe;$.parameters={...$.parameters,docs:{...(le=$.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    label: 'Select week',
    variant: VARIANT.DEFAULT,
    'selection-mode': SELECTION_MODE.WEEK,
    locale: 'en-US',
    'help-text': 'Click a date to select its week',
    'locale-today-label': 'Today',
    'locale-prev-month-label': 'Go to previous month',
    'locale-next-month-label': 'Go to next month'
  }
}`,...(oe=(ne=$.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var re,ie,se;I.parameters={...I.parameters,docs:{...(re=I.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    label: 'Start date',
    value: '2025-07-15',
    variant: VARIANT.INPUT,
    disabled: true,
    locale: 'en-US',
    'help-text': 'Helper text',
    'locale-month-label': 'Month',
    'locale-day-label': 'Day',
    'locale-year-label': 'Year'
  }
}`,...(se=(ie=I.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var ce,de,pe;M.parameters={...M.parameters,docs:{...(ce=M.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    label: 'Start date',
    value: '2025-07-15',
    variant: VARIANT.INPUT,
    readonly: true,
    locale: 'en-US',
    'help-text': 'Helper text',
    'locale-month-label': 'Month',
    'locale-day-label': 'Day',
    'locale-year-label': 'Year'
  }
}`,...(pe=(de=M.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var he,ue,me;E.parameters={...E.parameters,docs:{...(he=E.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    label: 'End date',
    value: '2025-07-14',
    variant: VARIANT.INPUT,
    locale: 'en-US',
    required: true,
    'help-text': 'End date must occur after start date',
    'help-text-type': 'error',
    'locale-month-label': 'Month',
    'locale-day-label': 'Day',
    'locale-year-label': 'Year'
  }
}`,...(me=(ue=E.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var be,ye,ge;A.parameters={...A.parameters,docs:{...(be=A.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <mdc-datepicker
        label="Start date"
        value="2025-07-15"
        variant="input"
        locale="en-US"
        required
        locale-month-label="Month"
        locale-day-label="Day"
        locale-year-label="Year"
        locale-calendar-label="Open calendar"
        locale-today-label="Today"
      ></mdc-datepicker>
      <mdc-datepicker
        label="End date"
        value="2025-07-23"
        variant="input"
        locale="en-US"
        required
        locale-month-label="Month"
        locale-day-label="Day"
        locale-year-label="Year"
        locale-calendar-label="Open calendar"
        locale-today-label="Today"
      ></mdc-datepicker>
    </div>
  \`,
  ...hideAllControls()
}`,...(ge=(ye=A.parameters)==null?void 0:ye.docs)==null?void 0:ge.source}}};var ve,fe,xe;V.parameters={...V.parameters,docs:{...(ve=V.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-datepicker
      label="Startdatum"
      variant="input"
      locale="de-DE"
      required
      help-text="Hilfetexte"
      locale-month-label="Monat"
      locale-day-label="Tag"
      locale-year-label="Jahr"
      locale-calendar-label="Kalender öffnen"
      locale-today-label="Heute"
      locale-prev-month-label="Vorheriger Monat"
      locale-next-month-label="Nächster Monat"
      locale-spinbutton-description="Verwenden Sie Pfeiltasten, um den Wert zu ändern"
    ></mdc-datepicker>
  \`,
  ...hideAllControls()
}`,...(xe=(fe=V.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var Se,Te,De;N.parameters={...N.parameters,docs:{...(Se=N.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-datepicker
      label="開始日"
      variant="input"
      locale="ja-JP"
      required
      locale-month-label="月"
      locale-day-label="日"
      locale-year-label="年"
      locale-calendar-label="カレンダーを開く"
      locale-today-label="今日"
    ></mdc-datepicker>
  \`,
  ...hideAllControls()
}`,...(De=(Te=N.parameters)==null?void 0:Te.docs)==null?void 0:De.source}}};const It=["Example","InputWithValue","DefaultVariant","DefaultWithValue","WeekSelection","Disabled","ReadOnly","ErrorState","DateRange","LocalizedGerman","LocalizedJapanese"];export{A as DateRange,D as DefaultVariant,k as DefaultWithValue,I as Disabled,E as ErrorState,S as Example,T as InputWithValue,V as LocalizedGerman,N as LocalizedJapanese,M as ReadOnly,$ as WeekSelection,It as __namedExportsOrder,$t as default};
