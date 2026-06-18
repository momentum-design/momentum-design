import"./index-DM419G9w.js";import{g as R,p as N,d as L,t as ke,c as $e,S as b,i as Me,a as Ie,b as Ve,f as Y,e as Ae}from"./index-BkGiw2CW.js";import"./index-C-a6jsM_.js";import"./index-BzXIsb3j.js";import{u as Ee,a4 as Fe,aa as Ne,k as u,t as s,z as q,n as d,v as C,U as w}from"./iframe-CYZ064vw.js";import"./index-z2OdZlVq.js";import{D as we}from"./DataAriaLabelMixin-BjIJ89BI.js";import{F as Pe}from"./FormInternalsMixin-B818aAc-.js";import{b as g}from"./KeyDownHandledMixin-DGzJ0rYO.js";import{F as _}from"./formfieldwrapper.component-BfRcMfn_.js";import{P as Le,D as Re,a as Ce}from"./popover.constants-gNuL8rzb.js";import{c as Ue,s as Oe}from"./commonArgTypes-BG7EqI50.js";import{h as Ye,a as U}from"./utils-B5QUENNQ.js";import{V as qe}from"./formfieldwrapper.constants-pFvOs8lW.js";import"./button.component-DTdegw5n.js";import"./buttonsimple.component-DfTyNmtt.js";import"./DisabledMixin-CjuLaMSD.js";import"./button.utils-rNW36Ji7.js";import"./class-map-NhK100-6.js";import"./directive-Ctav8iJK.js";import"./preload-helper-C1FmrZbK.js";import"./index-Cm4DuzN6.js";import"./index-DTrDRi1E.js";import"./popover.component-BIUkn_Yc.js";import"./BackdropMixin-DDg7Q_Id.js";import"./index-BiMq2Xfh.js";import"./v4-CmTdKEVZ.js";const _e=Ee.constructTagName("datepicker"),m={DEFAULT:"default",INPUT:"input"},z="calendar-empty-bold",v="datepicker-triggerid",P={VARIANT:m.INPUT,LOCALE:"en-US",DISABLE_FLIP:!1},ze=Fe`
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
`,We=[ze,...Ne(!0)];function f(n){return R(n).order}function Ge(n){return R(n).separator}function Be(n){if(!n)return null;const e=N(n);return e?{month:String(e.getMonth()+1).padStart(2,"0"),day:String(e.getDate()).padStart(2,"0"),year:String(e.getFullYear()).padStart(4,"0")}:null}function He(n,e,t){const a=parseInt(n,10),l=parseInt(e,10),r=parseInt(t,10);if(Number.isNaN(a)||Number.isNaN(l)||Number.isNaN(r)||a<1||a>12||l<1||l>31||r<1)return"";const i=L(r,a);if(l>i)return"";const h=$e(r,a,l);return ke(h)}function Ke(n){const{order:e,separator:t}=R(n),a={month:"mm",day:"dd",year:"yyyy"};return e.map(l=>a[l]).join(` ${t} `)}function je(n,e,t){switch(n){case"month":return 12;case"day":return e&&t?L(t,e):e?L(2e3,e):31;case"year":return 9999;default:return 0}}function Je(n){switch(n){case"month":return 1;case"day":return 1;case"year":return 1;default:return 0}}var Qe=Object.defineProperty,c=(n,e,t,a)=>{for(var l=void 0,r=n.length-1,i;r>=0;r--)(i=n[r])&&(l=i(e,t,l)||l);return l&&Qe(e,t,l),l};const O=class O extends Pe(we(_)){constructor(){super(...arguments),this.variant=P.VARIANT,this.value="",this.selectionMode=b.SINGLE,this.locale=P.LOCALE,this.placement=Le.BOTTOM_START,this.strategy=Re.STRATEGY,this.disableFlip=P.DISABLE_FLIP,this.localeMonthLabel="",this.localeDayLabel="",this.localeYearLabel="",this.localeCalendarLabel="",this.localeSpinbuttonDescription="",this.localeTodayLabel="",this.localePrevMonthLabel="",this.localeNextMonthLabel="",this.displayPopover=!1,this.internalMonth="",this.internalDay="",this.internalYear="",this.endValue="",this.pendingDigits=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.parseValueToInternal(),this.syncFormValue()}).catch(e=>{this.onerror&&this.onerror(e)})}disconnectedCallback(){super.disconnectedCallback(),this.pendingDigitTimeout&&clearTimeout(this.pendingDigitTimeout)}willUpdate(e){super.willUpdate(e),e.has("value")&&!this.displayPopover?(this.parseValueToInternal(),this.syncFormValue()):e.has("endValue")&&!this.displayPopover&&this.syncFormValue()}parseValueToInternal(e=this.value){const t=Be(e);t?(this.internalMonth=t.month,this.internalDay=t.day,this.internalYear=t.year):(this.internalMonth="",this.internalDay="",this.internalYear="")}internalToValue(){return He(this.internalMonth,this.internalDay,this.internalYear)}getParsedMin(){return this.min?N(this.min)??void 0:void 0}getParsedMax(){return this.max?N(this.max)??void 0:void 0}clampValueToRange(e){const t=N(e);if(!t)return e;const a=this.getParsedMin(),l=this.getParsedMax();return a&&Me(t,a)?this.min??e:l&&Ie(t,l)?this.max??e:e}getFieldRange(e){const t=parseInt(this.internalMonth,10)||void 0,a=parseInt(this.internalYear,10)||void 0,l=Je(e),r=je(e,t,a);let i=l,h=r;const p=this.getParsedMin(),y=this.getParsedMax();return e==="year"?(p&&(i=Math.max(i,p.getFullYear())),y&&(h=Math.min(h,y.getFullYear()))):e==="month"&&a?(p&&a===p.getFullYear()&&(i=Math.max(i,p.getMonth()+1)),y&&a===y.getFullYear()&&(h=Math.min(h,y.getMonth()+1))):e==="day"&&t&&a&&(p&&a===p.getFullYear()&&t===p.getMonth()+1&&(i=Math.max(i,p.getDate())),y&&a===y.getFullYear()&&t===y.getMonth()+1&&(h=Math.min(h,y.getDate()))),i>h?{min:l,max:r,isMinConstrained:!1,isMaxConstrained:!1}:{min:i,max:h,isMinConstrained:i!==l,isMaxConstrained:h!==r}}getNextSpinbuttonValue(e,t,a){return a?e<t.min?t.min:e>=t.max?t.isMaxConstrained?t.max:t.min:e+1:e>t.max?t.max:e<=t.min?t.isMinConstrained?t.min:t.max:e-1}syncFormValue(){const e=this.value||this.internalToValue();if(this.internals)if(this.name&&this.endValue){const t=new FormData;t.append(this.name,e||""),t.append(`${this.name}-end`,this.endValue),this.internals.setFormValue(t)}else this.internals.setFormValue(e||null)}commitValue(){const e=this.internalToValue();if(e){const t=this.clampValueToRange(e);if(t!==e&&this.parseValueToInternal(t),t===this.value)return;this.value=t,this.syncFormValue(),this.notifyValueChange()}}notifyValueChange(){const e={value:this.value,endValue:this.endValue};this.dispatchEvent(new CustomEvent("input",{detail:e,bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:e,bubbles:!0,composed:!0}))}flushPendingInput(){this.pendingDigitTimeout&&(clearTimeout(this.pendingDigitTimeout),this.pendingDigitTimeout=void 0),this.pendingDigits="",this.commitValue()}formResetCallback(){this.value="",this.endValue="",this.parseValueToInternal(),this.syncFormValue()}formStateRestoreCallback(e){if(e instanceof FormData){const t=this.name||"";this.value=e.get(t)||"",this.endValue=e.get(`${t}-end`)||""}else typeof e=="string"&&(this.value=e,this.endValue="");this.parseValueToInternal(),this.syncFormValue()}handleCalendarButtonClick(){this.disabled||this.readonly||(this.displayPopover||this.flushPendingInput(),this.displayPopover=!this.displayPopover)}handleSelectTriggerClick(){this.disabled||this.readonly||(this.displayPopover=!this.displayPopover)}handleSelectKeydown(e){this.disabled||this.readonly||(e.key===g.ENTER||e.key===g.SPACE||e.key===g.ARROW_DOWN)&&(e.preventDefault(),this.displayPopover=!0)}focusCalendarGrid(){setTimeout(()=>{var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("mdc-calendar");if(e!=null&&e.shadowRoot){const a=e.shadowRoot.querySelector('.calendar-day[tabindex="0"]');a==null||a.focus()}},0)}handleDateSelected(e){const{detail:t}=e,a=this.effectiveSelectionMode;a===b.WEEK||a===b.RANGE?t.startDate&&t.endDate?(this.value=t.startDate,this.endValue=t.endDate):(this.value=t.date,this.endValue=""):(this.value=t.date,this.endValue=""),this.parseValueToInternal(),this.syncFormValue(),this.notifyValueChange();const l=a===b.RANGE&&this.value&&this.endValue;(a!==b.RANGE||l)&&(this.displayPopover=!1,this.focusBackToTrigger())}getSpinbuttonInput(e){switch(e){case"month":return this.monthInput;case"day":return this.dayInput;case"year":return this.yearInput;default:return null}}getFieldValue(e){switch(e){case"month":return this.internalMonth;case"day":return this.internalDay;case"year":return this.internalYear;default:return""}}setFieldValue(e,t){const a=e==="year"?4:2,l=String(t).padStart(a,"0");switch(e){case"month":this.internalMonth=l;break;case"day":this.internalDay=l;break;case"year":this.internalYear=l;break}this.requestUpdate()}handleSpinbuttonKeydown(e,t){if(this.readonly)return;const a=this.getFieldRange(t),l=parseInt(this.getFieldValue(t),10)||0;switch(e.key){case g.ARROW_UP:{e.preventDefault();const r=this.getNextSpinbuttonValue(l,a,!0);this.setFieldValue(t,r),this.commitValue();break}case g.ARROW_DOWN:{e.preventDefault();const r=this.getNextSpinbuttonValue(l,a,!1);this.setFieldValue(t,r),this.commitValue();break}case g.ARROW_LEFT:{e.preventDefault(),this.advanceToPrevField(t);break}case g.ARROW_RIGHT:{e.preventDefault(),this.advanceToNextField(t);break}case g.TAB:break;default:{/^\d$/.test(e.key)?(e.preventDefault(),this.handleDigitInput(e.key,t,a.min,a.max)):e.preventDefault();break}}}handleDigitInput(e,t,a,l){this.pendingDigitTimeout&&clearTimeout(this.pendingDigitTimeout),this.pendingDigits+=e;const r=t==="year"?4:2;if(this.pendingDigits.length>=r){let i=parseInt(this.pendingDigits,10);i>l&&(i=l),i<a&&(i=a),this.setFieldValue(t,i),this.pendingDigits="",this.commitValue(),this.advanceToNextField(t)}else if(t!=="year"){const i=parseInt(this.pendingDigits,10),h=Math.floor(l/10);if(i>h){let p=i;p>l&&(p=l),p<a&&(p=a),this.setFieldValue(t,p),this.pendingDigits="",this.commitValue(),this.advanceToNextField(t)}else this.setFieldValue(t,i),this.pendingDigitTimeout=setTimeout(()=>{let p=i;p<a&&(p=a),this.setFieldValue(t,p),this.pendingDigits="",this.commitValue(),this.advanceToNextField(t)},1e3)}else{const i=parseInt(this.pendingDigits,10);this.setFieldValue(t,i),this.pendingDigitTimeout=setTimeout(()=>{this.pendingDigits="",this.commitValue()},1e3)}}advanceToNextField(e){const t=f(this.locale),a=t.indexOf(e);if(a<t.length-1){const l=t[a+1];this.updateComplete.then(()=>{const r=this.getSpinbuttonInput(l);r==null||r.focus(),r==null||r.select()}).catch(()=>{})}}advanceToPrevField(e){const t=f(this.locale),a=t.indexOf(e);if(a>0){const l=t[a-1];this.updateComplete.then(()=>{const r=this.getSpinbuttonInput(l);r==null||r.focus(),r==null||r.select()}).catch(()=>{})}}handleSpinbuttonFocus(e){e.target.select(),this.pendingDigits="",this.pendingDigitTimeout&&clearTimeout(this.pendingDigitTimeout)}handleSpinbuttonAreaClick(e){if(e.target.getAttribute("role")!=="spinbutton"){const a=f(this.locale),l=this.getSpinbuttonInput(a[0]);l==null||l.focus(),l==null||l.select()}}handleBaseKeydown(e){e.key===g.ESCAPE&&this.displayPopover&&(this.displayPopover=!1)}focusBackToTrigger(){this.updateComplete.then(()=>{var e,t;if(this.variant===m.INPUT){const a=(e=this.shadowRoot)==null?void 0:e.querySelector('[part~="icon-container"]');a==null||a.focus()}else{const a=(t=this.shadowRoot)==null?void 0:t.getElementById(v);a==null||a.focus()}}).catch(()=>{})}get effectiveSelectionMode(){return this.selectionMode===b.WEEK?b.WEEK:this.variant===m.DEFAULT?b.RANGE:this.selectionMode}getDisplayText(){if(!this.value)return"";if(this.effectiveSelectionMode===b.WEEK){const{start:e,end:t}=Ve(this.value,this.locale);return Y(e,t,this.locale)}return this.effectiveSelectionMode===b.RANGE&&this.endValue?Y(this.value,this.endValue,this.locale):Ae(this.value,this.locale)}renderSpinbutton(e){const t=this.getFieldValue(e),a=this.getFieldRange(e),l={month:this.localeMonthLabel,day:this.localeDayLabel,year:this.localeYearLabel},r={month:"mm",day:"dd",year:"yyyy"};return u`
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
        placeholder="${r[e]}"
        autocomplete="off"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        tabindex="${this.disabled?"-1":"0"}"
        @keydown="${i=>this.handleSpinbuttonKeydown(i,e)}"
        @focus="${this.handleSpinbuttonFocus}"
      />
    `}renderInputVariant(){const e=f(this.locale),t=Ge(this.locale);return u`
      <div
        id="${v}"
        part="base-container"
        class="mdc-focus-ring"
        @click="${this.handleSpinbuttonAreaClick}"
        @keydown="${this.handleBaseKeydown}"
      >
        <div part="spinbutton-group">
          ${e.map((a,l)=>u`
              ${this.renderSpinbutton(a)}
              ${l<e.length-1?u`<span part="separator">${t}</span>`:q}
            `)}
        </div>
        <mdc-button
          part="icon-container"
          class="own-focus-ring"
          variant="tertiary"
          prefix-icon="${z}"
          aria-label="${this.localeCalendarLabel}"
          aria-expanded="${this.displayPopover?"true":"false"}"
          aria-haspopup="dialog"
          ?disabled="${this.disabled}"
          size="20"
          @click="${this.handleCalendarButtonClick}"
        ></mdc-button>
      </div>
    `}renderDefaultVariant(){const e=this.getDisplayText(),t=Ke(this.locale);return u`
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
        ${e?u`<span part="select-text">${e}</span>`:u`<span part="select-text select-placeholder">${t}</span>`}
        <mdc-icon part="icon-container" name="${z}" size="1" aria-hidden="true"></mdc-icon>
      </div>
    `}renderPopover(){const e=this.effectiveSelectionMode;return u`
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
    `}render(){return u`
      ${this.renderLabel()}
      <div part="container">
        ${this.variant===m.INPUT?this.renderInputVariant():this.renderDefaultVariant()}
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
      ${this.helpText?this.renderHelperText():q}
    `}};O.styles=[..._.styles,...We];let o=O;c([d({type:String,reflect:!0})],o.prototype,"variant");c([d({type:String,reflect:!0})],o.prototype,"value");c([d({type:String,reflect:!0,attribute:"selection-mode"})],o.prototype,"selectionMode");c([d({type:String,reflect:!0})],o.prototype,"locale");c([d({type:String,reflect:!0})],o.prototype,"min");c([d({type:String,reflect:!0})],o.prototype,"max");c([d({type:String,reflect:!0})],o.prototype,"placement");c([d({type:String,reflect:!0})],o.prototype,"strategy");c([d({type:Boolean,reflect:!0,attribute:"disable-flip"})],o.prototype,"disableFlip");c([d({type:String,reflect:!0,attribute:"append-to"})],o.prototype,"appendTo");c([d({type:String,reflect:!0,attribute:"backdrop-append-to"})],o.prototype,"backdropAppendTo");c([d({type:String,attribute:"locale-month-label"})],o.prototype,"localeMonthLabel");c([d({type:String,attribute:"locale-day-label"})],o.prototype,"localeDayLabel");c([d({type:String,attribute:"locale-year-label"})],o.prototype,"localeYearLabel");c([d({type:String,attribute:"locale-calendar-label"})],o.prototype,"localeCalendarLabel");c([d({type:String,attribute:"locale-spinbutton-description"})],o.prototype,"localeSpinbuttonDescription");c([d({type:String,attribute:"locale-today-label"})],o.prototype,"localeTodayLabel");c([d({type:String,attribute:"locale-prev-month-label"})],o.prototype,"localePrevMonthLabel");c([d({type:String,attribute:"locale-next-month-label"})],o.prototype,"localeNextMonthLabel");c([C("#month-spinbutton")],o.prototype,"monthInput");c([C("#day-spinbutton")],o.prototype,"dayInput");c([C("#year-spinbutton")],o.prototype,"yearInput");c([w()],o.prototype,"displayPopover");c([w()],o.prototype,"internalMonth");c([w()],o.prototype,"internalDay");c([w()],o.prototype,"internalYear");c([d({type:String,reflect:!0,attribute:"end-value"})],o.prototype,"endValue");o.register(_e);const{action:x}=__STORYBOOK_MODULE_ACTIONS__,W=Object.values(qe).filter(n=>n!=="priority"),Xe=n=>u`
  <mdc-datepicker
    @change="${x("onchange")}"
    @input="${x("oninput")}"
    @focus="${x("onfocus")}"
    @blur="${x("onblur")}"
    label="${s(n.label)}"
    value="${s(n.value)}"
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
`,Mt={title:"Components/datepicker",tags:["autodocs"],component:"mdc-datepicker",render:Xe,argTypes:{label:{control:"text"},value:{control:"text",description:"Selected date as ISO string (yyyy-mm-dd)"},variant:{control:"select",options:Object.values(m),description:"Variant: input (spinbuttons) or default (select trigger)"},"selection-mode":{control:"select",options:Object.values(b)},locale:{control:"text",description:"BCP 47 locale string"},required:{control:"boolean"},disabled:{control:"boolean"},readonly:{control:"boolean"},"help-text":{control:"text"},"help-text-type":{control:"select",description:`The type of help text. It can be ${W.map(n=>`'${n}'`).join(", ")}.`,options:W},min:{control:"text",description:"Minimum selectable date (ISO string)"},max:{control:"text",description:"Maximum selectable date (ISO string)"},"locale-month-label":{control:"text"},"locale-day-label":{control:"text"},"locale-year-label":{control:"text"},"locale-calendar-label":{control:"text"},"locale-today-label":{control:"text"},"locale-spinbutton-description":{control:"text"},"locale-prev-month-label":{control:"text"},"locale-next-month-label":{control:"text"},"append-to":{control:"text"},"backdrop-append-to":{control:"text"},...Ye(["validation-message","validity","willValidate","dayInput","monthInput","yearInput","displayPopover","internalMonth","internalDay","internalYear","effectiveSelectionMode","pendingDigits","pendingDigitTimeout"]),...Ue,...Oe}},S={args:{label:"Start date",variant:m.INPUT,locale:"en-US",required:!0,"help-text":"Helper text","locale-month-label":"Month","locale-day-label":"Day","locale-year-label":"Year","locale-calendar-label":"Open calendar","locale-today-label":"Today","locale-spinbutton-description":"Use arrow keys to change the value or type a number"}},T={args:{label:"Start date",value:"2025-07-15",variant:m.INPUT,locale:"en-US",required:!0,"help-text":"Helper text","locale-month-label":"Month","locale-day-label":"Day","locale-year-label":"Year","locale-calendar-label":"Open calendar","locale-today-label":"Today"}},D={args:{label:"Date range",variant:m.DEFAULT,locale:"en-US",required:!0,"help-text":"Select a start and end date","locale-today-label":"Today"}},k={args:{label:"Date range",value:"2025-07-13",variant:m.DEFAULT,locale:"en-US",required:!0,"help-text":"Helper text","locale-today-label":"Today"}},$={args:{label:"Select week",variant:m.DEFAULT,"selection-mode":b.WEEK,locale:"en-US","help-text":"Click a date to select its week","locale-today-label":"Today","locale-prev-month-label":"Go to previous month","locale-next-month-label":"Go to next month"}},M={args:{label:"Start date",value:"2025-07-15",variant:m.INPUT,disabled:!0,locale:"en-US","help-text":"Helper text","locale-month-label":"Month","locale-day-label":"Day","locale-year-label":"Year"}},I={args:{label:"Start date",value:"2025-07-15",variant:m.INPUT,readonly:!0,locale:"en-US","help-text":"Helper text","locale-month-label":"Month","locale-day-label":"Day","locale-year-label":"Year"}},V={args:{label:"End date",value:"2025-07-14",variant:m.INPUT,locale:"en-US",required:!0,"help-text":"End date must occur after start date","help-text-type":"error","locale-month-label":"Month","locale-day-label":"Day","locale-year-label":"Year"}},A={render:()=>u`
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
  `,...U()},E={render:()=>u`
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
  `,...U()},F={render:()=>u`
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
  `,...U()};var G,B,H;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'Start date',
    variant: VARIANT.INPUT,
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
}`,...(H=(B=S.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var K,j,J;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(J=(j=T.parameters)==null?void 0:j.docs)==null?void 0:J.source}}};var Q,X,Z;D.parameters={...D.parameters,docs:{...(Q=D.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: 'Date range',
    variant: VARIANT.DEFAULT,
    locale: 'en-US',
    required: true,
    'help-text': 'Select a start and end date',
    'locale-today-label': 'Today'
  }
}`,...(Z=(X=D.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,ae;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    label: 'Date range',
    value: '2025-07-13',
    variant: VARIANT.DEFAULT,
    locale: 'en-US',
    required: true,
    'help-text': 'Helper text',
    'locale-today-label': 'Today'
  }
}`,...(ae=(te=k.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var le,ne,re;$.parameters={...$.parameters,docs:{...(le=$.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(re=(ne=$.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var oe,ie,se;M.parameters={...M.parameters,docs:{...(oe=M.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(se=(ie=M.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var ce,de,pe;I.parameters={...I.parameters,docs:{...(ce=I.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(de=I.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var he,ue,me;V.parameters={...V.parameters,docs:{...(he=V.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(me=(ue=V.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var be,ye,ge;A.parameters={...A.parameters,docs:{...(be=A.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ge=(ye=A.parameters)==null?void 0:ye.docs)==null?void 0:ge.source}}};var ve,fe,xe;E.parameters={...E.parameters,docs:{...(ve=E.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(xe=(fe=E.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var Se,Te,De;F.parameters={...F.parameters,docs:{...(Se=F.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(De=(Te=F.parameters)==null?void 0:Te.docs)==null?void 0:De.source}}};const It=["Example","InputWithValue","DefaultVariant","DefaultWithValue","WeekSelection","Disabled","ReadOnly","ErrorState","DateRange","LocalizedGerman","LocalizedJapanese"];export{A as DateRange,D as DefaultVariant,k as DefaultWithValue,M as Disabled,V as ErrorState,S as Example,T as InputWithValue,E as LocalizedGerman,F as LocalizedJapanese,I as ReadOnly,$ as WeekSelection,It as __namedExportsOrder,Mt as default};
