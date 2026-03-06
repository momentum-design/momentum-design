import"./index-CH2LuNfX.js";import{g as L,p as w,d as P,t as Ve,c as Ie,S as m,i as Ae,a as Ee,b as Me,f as O,e as we}from"./index-DwZuADmT.js";import"./index-iIqfqlkl.js";import"./index-BXCi8mAW.js";import{u as Ne,a2 as Fe,a8 as Pe,k as h,h as Y,a4 as N,n as d,t as U}from"./iframe-BNuhQAvW.js";import"./index-D7xFWSWE.js";import{t as i}from"./if-defined-Bt1okdpN.js";import{D as Le}from"./DataAriaLabelMixin-DwsiJRfS.js";import{F as Ue}from"./FormInternalsMixin-R8RLpIU5.js";import{b as y}from"./KeyDownHandledMixin-BVzuX7IE.js";import{F as q}from"./formfieldwrapper.component-Cy9c6mqC.js";import{P as Re,D as Ce,a as Oe}from"./popover.constants-DB5lx9bc.js";import{c as Ye,s as qe}from"./commonArgTypes-BG7EqI50.js";import{h as _e,a as R}from"./utils-B5QUENNQ.js";import{V as We}from"./formfieldwrapper.constants-b7sJde5e.js";import"./button.component-Du11asli.js";import"./buttonsimple.component-DrbHQSP4.js";import"./DisabledMixin-Cz75y2XI.js";import"./button.utils-rNW36Ji7.js";import"./class-map-Dn52rBMK.js";import"./directive-Ctav8iJK.js";import"./preload-helper-C1FmrZbK.js";import"./index-D8bbfbgA.js";import"./index-DTrDRi1E.js";import"./popover.component-4F5xown_.js";import"./BackdropMixin-B0OYQyQK.js";import"./index-DEmRlprY.js";import"./v4-CmTdKEVZ.js";const ze=Ne.constructTagName("datepicker"),u={DEFAULT:"default",INPUT:"input"},_="calendar-empty-bold",g="datepicker-triggerid",F={VARIANT:u.INPUT,LOCALE:"en-US",DISABLE_FLIP:!1},Ge=Fe`
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
`,Be=[Ge,...Pe(!0)];function v(o){return L(o).order}function He(o){return L(o).separator}function Ke(o){if(!o)return null;const e=w(o);return e?{month:String(e.getMonth()+1).padStart(2,"0"),day:String(e.getDate()).padStart(2,"0"),year:String(e.getFullYear()).padStart(4,"0")}:null}function je(o,e,t){const a=parseInt(o,10),l=parseInt(e,10),r=parseInt(t,10);if(Number.isNaN(a)||Number.isNaN(l)||Number.isNaN(r)||a<1||a>12||l<1||l>31||r<1)return"";const c=P(r,a);if(l>c)return"";const b=Ie(r,a,l);return Ve(b)}function Je(o){const{order:e,separator:t}=L(o),a={month:"mm",day:"dd",year:"yyyy"};return e.map(l=>a[l]).join(` ${t} `)}function W(o,e,t){switch(o){case"month":return 12;case"day":return e&&t?P(t,e):e?P(2e3,e):31;case"year":return 9999;default:return 0}}function z(o){switch(o){case"month":return 1;case"day":return 1;case"year":return 1;default:return 0}}var Qe=Object.defineProperty,s=(o,e,t,a)=>{for(var l=void 0,r=o.length-1,c;r>=0;r--)(c=o[r])&&(l=c(e,t,l)||l);return l&&Qe(e,t,l),l};const C=class C extends Ue(Le(q)){constructor(){super(...arguments),this.variant=F.VARIANT,this.value="",this.selectionMode=m.SINGLE,this.locale=F.LOCALE,this.placement=Re.BOTTOM_START,this.strategy=Ce.STRATEGY,this.disableFlip=F.DISABLE_FLIP,this.localeMonthLabel="",this.localeDayLabel="",this.localeYearLabel="",this.localeCalendarLabel="",this.localeSpinbuttonDescription="",this.localeTodayLabel="",this.localePrevMonthLabel="",this.localeNextMonthLabel="",this.displayPopover=!1,this.internalMonth="",this.internalDay="",this.internalYear="",this.endValue="",this.pendingDigits=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.parseValueToInternal(),this.syncFormValue()}).catch(e=>{this.onerror&&this.onerror(e)})}disconnectedCallback(){super.disconnectedCallback(),this.pendingDigitTimeout&&clearTimeout(this.pendingDigitTimeout)}willUpdate(e){super.willUpdate(e),e.has("value")&&!this.displayPopover?(this.parseValueToInternal(),this.syncFormValue()):e.has("endValue")&&!this.displayPopover&&this.syncFormValue()}parseValueToInternal(){const e=Ke(this.value);e?(this.internalMonth=e.month,this.internalDay=e.day,this.internalYear=e.year):(this.internalMonth="",this.internalDay="",this.internalYear="")}internalToValue(){return je(this.internalMonth,this.internalDay,this.internalYear)}syncFormValue(){const e=this.value||this.internalToValue();if(this.internals)if(this.name&&this.endValue){const t=new FormData;t.append(this.name,e||""),t.append(`${this.name}-end`,this.endValue),this.internals.setFormValue(t)}else this.internals.setFormValue(e||null)}commitValue(){const e=this.internalToValue();if(e&&e!==this.value){const t=w(e);if(t){const a=this.min?w(this.min):void 0,l=this.max?w(this.max):void 0;if(a&&Ae(t,a)||l&&Ee(t,l))return}this.value=e,this.syncFormValue(),this.notifyValueChange()}}notifyValueChange(){const e={value:this.value,endValue:this.endValue};this.dispatchEvent(new CustomEvent("input",{detail:e,bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:e,bubbles:!0,composed:!0}))}flushPendingInput(){this.pendingDigitTimeout&&(clearTimeout(this.pendingDigitTimeout),this.pendingDigitTimeout=void 0),this.pendingDigits="",this.commitValue()}formResetCallback(){this.value="",this.endValue="",this.parseValueToInternal(),this.syncFormValue()}formStateRestoreCallback(e){if(e instanceof FormData){const t=this.name||"";this.value=e.get(t)||"",this.endValue=e.get(`${t}-end`)||""}else typeof e=="string"&&(this.value=e,this.endValue="");this.parseValueToInternal(),this.syncFormValue()}handleCalendarButtonClick(){this.disabled||this.readonly||(this.displayPopover||this.flushPendingInput(),this.displayPopover=!this.displayPopover)}handleSelectTriggerClick(){this.disabled||this.readonly||(this.displayPopover=!this.displayPopover)}handleSelectKeydown(e){this.disabled||this.readonly||(e.key===y.ENTER||e.key===y.SPACE||e.key===y.ARROW_DOWN)&&(e.preventDefault(),this.displayPopover=!0)}focusCalendarGrid(){setTimeout(()=>{var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("mdc-calendar");if(e!=null&&e.shadowRoot){const a=e.shadowRoot.querySelector('.calendar-day[tabindex="0"]');a==null||a.focus()}},0)}handleDateSelected(e){const{detail:t}=e,a=this.effectiveSelectionMode;a===m.WEEK||a===m.RANGE?t.startDate&&t.endDate?(this.value=t.startDate,this.endValue=t.endDate):(this.value=t.date,this.endValue=""):(this.value=t.date,this.endValue=""),this.parseValueToInternal(),this.syncFormValue(),this.notifyValueChange();const l=a===m.RANGE&&this.value&&this.endValue;(a!==m.RANGE||l)&&(this.displayPopover=!1,this.focusBackToTrigger())}getSpinbuttonInput(e){switch(e){case"month":return this.monthInput;case"day":return this.dayInput;case"year":return this.yearInput;default:return null}}getFieldValue(e){switch(e){case"month":return this.internalMonth;case"day":return this.internalDay;case"year":return this.internalYear;default:return""}}setFieldValue(e,t){const a=e==="year"?4:2,l=String(t).padStart(a,"0");switch(e){case"month":this.internalMonth=l;break;case"day":this.internalDay=l;break;case"year":this.internalYear=l;break}this.requestUpdate()}handleSpinbuttonKeydown(e,t){if(this.readonly)return;const a=parseInt(this.internalMonth,10)||void 0,l=parseInt(this.internalYear,10)||void 0,r=z(t),c=W(t,a,l),b=parseInt(this.getFieldValue(t),10)||0;switch(e.key){case y.ARROW_UP:{e.preventDefault();const p=b>=c?r:b+1;this.setFieldValue(t,p),this.commitValue();break}case y.ARROW_DOWN:{e.preventDefault();const p=b<=r?c:b-1;this.setFieldValue(t,p),this.commitValue();break}case y.ARROW_LEFT:{e.preventDefault(),this.advanceToPrevField(t);break}case y.ARROW_RIGHT:{e.preventDefault(),this.advanceToNextField(t);break}case y.TAB:break;default:{/^\d$/.test(e.key)?(e.preventDefault(),this.handleDigitInput(e.key,t,r,c)):e.preventDefault();break}}}handleDigitInput(e,t,a,l){this.pendingDigitTimeout&&clearTimeout(this.pendingDigitTimeout),this.pendingDigits+=e;const r=t==="year"?4:2;if(this.pendingDigits.length>=r){let c=parseInt(this.pendingDigits,10);c>l&&(c=l),c<a&&(c=a),this.setFieldValue(t,c),this.pendingDigits="",this.commitValue(),this.advanceToNextField(t)}else if(t!=="year"){const c=parseInt(this.pendingDigits,10),b=Math.floor(l/10);if(c>b){let p=c;p>l&&(p=l),p<a&&(p=a),this.setFieldValue(t,p),this.pendingDigits="",this.commitValue(),this.advanceToNextField(t)}else this.setFieldValue(t,c),this.pendingDigitTimeout=setTimeout(()=>{let p=c;p<a&&(p=a),this.setFieldValue(t,p),this.pendingDigits="",this.commitValue(),this.advanceToNextField(t)},1e3)}else{const c=parseInt(this.pendingDigits,10);this.setFieldValue(t,c),this.pendingDigitTimeout=setTimeout(()=>{this.pendingDigits="",this.commitValue()},1e3)}}advanceToNextField(e){const t=v(this.locale),a=t.indexOf(e);if(a<t.length-1){const l=t[a+1];this.updateComplete.then(()=>{const r=this.getSpinbuttonInput(l);r==null||r.focus(),r==null||r.select()}).catch(()=>{})}}advanceToPrevField(e){const t=v(this.locale),a=t.indexOf(e);if(a>0){const l=t[a-1];this.updateComplete.then(()=>{const r=this.getSpinbuttonInput(l);r==null||r.focus(),r==null||r.select()}).catch(()=>{})}}handleSpinbuttonFocus(e){e.target.select(),this.pendingDigits="",this.pendingDigitTimeout&&clearTimeout(this.pendingDigitTimeout)}handleSpinbuttonAreaClick(e){if(e.target.getAttribute("role")!=="spinbutton"){const a=v(this.locale),l=this.getSpinbuttonInput(a[0]);l==null||l.focus(),l==null||l.select()}}handleBaseKeydown(e){e.key===y.ESCAPE&&this.displayPopover&&(this.displayPopover=!1)}focusBackToTrigger(){this.updateComplete.then(()=>{var e,t;if(this.variant===u.INPUT){const a=(e=this.shadowRoot)==null?void 0:e.querySelector('[part~="icon-container"]');a==null||a.focus()}else{const a=(t=this.shadowRoot)==null?void 0:t.getElementById(g);a==null||a.focus()}}).catch(()=>{})}get effectiveSelectionMode(){return this.selectionMode===m.WEEK?m.WEEK:this.variant===u.DEFAULT?m.RANGE:this.selectionMode}getDisplayText(){if(!this.value)return"";if(this.effectiveSelectionMode===m.WEEK){const{start:e,end:t}=Me(this.value,this.locale);return O(e,t,this.locale)}return this.effectiveSelectionMode===m.RANGE&&this.endValue?O(this.value,this.endValue,this.locale):we(this.value,this.locale)}renderSpinbutton(e){const t=this.getFieldValue(e),a=parseInt(this.internalMonth,10)||void 0,l=parseInt(this.internalYear,10)||void 0,r=z(e),c=W(e,a,l),b={month:this.localeMonthLabel,day:this.localeDayLabel,year:this.localeYearLabel},p={month:"mm",day:"dd",year:"yyyy"};return h`
      <input
        id="${e}-spinbutton"
        part="spinbutton spinbutton-${e}"
        role="spinbutton"
        aria-label="${b[e]}"
        aria-valuemin="${r}"
        aria-valuemax="${c}"
        aria-valuenow="${i(t?parseInt(t,10):void 0)}"
        aria-description="${this.localeSpinbuttonDescription}"
        .value="${t}"
        placeholder="${p[e]}"
        autocomplete="off"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        tabindex="${this.disabled?"-1":"0"}"
        @keydown="${$e=>this.handleSpinbuttonKeydown($e,e)}"
        @focus="${this.handleSpinbuttonFocus}"
      />
    `}renderInputVariant(){const e=v(this.locale),t=He(this.locale);return h`
      <div
        id="${g}"
        part="base-container"
        class="mdc-focus-ring"
        @click="${this.handleSpinbuttonAreaClick}"
        @keydown="${this.handleBaseKeydown}"
      >
        <div part="spinbutton-group">
          ${e.map((a,l)=>h`
              ${this.renderSpinbutton(a)}
              ${l<e.length-1?h`<span part="separator">${t}</span>`:Y}
            `)}
        </div>
        <mdc-button
          part="icon-container"
          class="own-focus-ring"
          variant="tertiary"
          prefix-icon="${_}"
          aria-label="${this.localeCalendarLabel}"
          aria-expanded="${this.displayPopover?"true":"false"}"
          aria-haspopup="dialog"
          ?disabled="${this.disabled}"
          size="20"
          @click="${this.handleCalendarButtonClick}"
        ></mdc-button>
      </div>
    `}renderDefaultVariant(){const e=this.getDisplayText(),t=Je(this.locale);return h`
      <div
        id="${g}"
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
        ${e?h`<span part="select-text">${e}</span>`:h`<span part="select-text select-placeholder">${t}</span>`}
        <mdc-icon part="icon-container" name="${_}" size="1" aria-hidden="true"></mdc-icon>
      </div>
    `}renderPopover(){const e=this.effectiveSelectionMode;return h`
      <mdc-popover
        trigger="${Oe.MANUAL}"
        triggerid="${g}"
        interactive
        ?visible="${this.displayPopover}"
        backdrop
        backdrop-append-to="${i(this.backdropAppendTo)}"
        append-to="${i(this.appendTo)}"
        hide-on-outside-click
        hide-on-escape
        focus-trap
        disable-aria-expanded
        ?disable-flip="${this.disableFlip}"
        placement="${this.placement}"
        strategy="${i(this.strategy)}"
        @shown="${()=>this.focusCalendarGrid()}"
        @closebyescape="${t=>{t.target===t.currentTarget&&(this.displayPopover=!1,this.focusBackToTrigger())}}"
        @closebyoutsideclick="${()=>{this.displayPopover=!1,this.focusBackToTrigger()}}"
        exportparts="popover-content"
      >
        <mdc-calendar
          value="${i(this.value||void 0)}"
          end-value="${i(this.endValue||void 0)}"
          selection-mode="${e}"
          locale="${this.locale}"
          min="${i(this.min)}"
          max="${i(this.max)}"
          locale-today-label="${this.localeTodayLabel}"
          locale-prev-month-label="${this.localePrevMonthLabel}"
          locale-next-month-label="${this.localeNextMonthLabel}"
          @date-selected="${this.handleDateSelected}"
        ></mdc-calendar>
      </mdc-popover>
    `}render(){return h`
      ${this.renderLabel()}
      <div part="container">
        ${this.variant===u.INPUT?this.renderInputVariant():this.renderDefaultVariant()}
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
          aria-disabled="${i(this.disabled||this.softDisabled)}"
        />
        ${this.renderPopover()}
      </div>
      ${this.helpText?this.renderHelperText():Y}
    `}};C.styles=[...q.styles,...Be];let n=C;s([d({type:String,reflect:!0})],n.prototype,"variant");s([d({type:String,reflect:!0})],n.prototype,"value");s([d({type:String,reflect:!0,attribute:"selection-mode"})],n.prototype,"selectionMode");s([d({type:String,reflect:!0})],n.prototype,"locale");s([d({type:String,reflect:!0})],n.prototype,"min");s([d({type:String,reflect:!0})],n.prototype,"max");s([d({type:String,reflect:!0})],n.prototype,"placement");s([d({type:String,reflect:!0})],n.prototype,"strategy");s([d({type:Boolean,reflect:!0,attribute:"disable-flip"})],n.prototype,"disableFlip");s([d({type:String,reflect:!0,attribute:"append-to"})],n.prototype,"appendTo");s([d({type:String,reflect:!0,attribute:"backdrop-append-to"})],n.prototype,"backdropAppendTo");s([d({type:String,attribute:"locale-month-label"})],n.prototype,"localeMonthLabel");s([d({type:String,attribute:"locale-day-label"})],n.prototype,"localeDayLabel");s([d({type:String,attribute:"locale-year-label"})],n.prototype,"localeYearLabel");s([d({type:String,attribute:"locale-calendar-label"})],n.prototype,"localeCalendarLabel");s([d({type:String,attribute:"locale-spinbutton-description"})],n.prototype,"localeSpinbuttonDescription");s([d({type:String,attribute:"locale-today-label"})],n.prototype,"localeTodayLabel");s([d({type:String,attribute:"locale-prev-month-label"})],n.prototype,"localePrevMonthLabel");s([d({type:String,attribute:"locale-next-month-label"})],n.prototype,"localeNextMonthLabel");s([U("#month-spinbutton")],n.prototype,"monthInput");s([U("#day-spinbutton")],n.prototype,"dayInput");s([U("#year-spinbutton")],n.prototype,"yearInput");s([N()],n.prototype,"displayPopover");s([N()],n.prototype,"internalMonth");s([N()],n.prototype,"internalDay");s([N()],n.prototype,"internalYear");s([d({type:String,reflect:!0,attribute:"end-value"})],n.prototype,"endValue");n.register(ze);const{action:f}=__STORYBOOK_MODULE_ACTIONS__,G=Object.values(We).filter(o=>o!=="priority"),Xe=o=>h`
  <mdc-datepicker
    @change="${f("onchange")}"
    @input="${f("oninput")}"
    @focus="${f("onfocus")}"
    @blur="${f("onblur")}"
    label="${i(o.label)}"
    value="${i(o.value)}"
    variant="${i(o.variant)}"
    selection-mode="${i(o["selection-mode"])}"
    locale="${i(o.locale)}"
    ?required="${o.required}"
    ?disabled="${o.disabled}"
    ?readonly="${o.readonly}"
    help-text="${i(o["help-text"])}"
    help-text-type="${i(o["help-text-type"])}"
    min="${i(o.min)}"
    max="${i(o.max)}"
    locale-month-label="${i(o["locale-month-label"])}"
    locale-day-label="${i(o["locale-day-label"])}"
    locale-year-label="${i(o["locale-year-label"])}"
    locale-calendar-label="${i(o["locale-calendar-label"])}"
    locale-today-label="${i(o["locale-today-label"])}"
    locale-spinbutton-description="${i(o["locale-spinbutton-description"])}"
    locale-prev-month-label="${i(o["locale-prev-month-label"])}"
    locale-next-month-label="${i(o["locale-next-month-label"])}"
    append-to="${i(o["append-to"])}"
    backdrop-append-to="${i(o["backdrop-append-to"])}"
  ></mdc-datepicker>
`,It={title:"Components/datepicker",tags:["autodocs"],component:"mdc-datepicker",render:Xe,argTypes:{label:{control:"text"},value:{control:"text",description:"Selected date as ISO string (yyyy-mm-dd)"},variant:{control:"select",options:Object.values(u),description:"Variant: input (spinbuttons) or default (select trigger)"},"selection-mode":{control:"select",options:Object.values(m)},locale:{control:"text",description:"BCP 47 locale string"},required:{control:"boolean"},disabled:{control:"boolean"},readonly:{control:"boolean"},"help-text":{control:"text"},"help-text-type":{control:"select",description:`The type of help text. It can be ${G.map(o=>`'${o}'`).join(", ")}.`,options:G},min:{control:"text"},max:{control:"text"},"locale-month-label":{control:"text"},"locale-day-label":{control:"text"},"locale-year-label":{control:"text"},"locale-calendar-label":{control:"text"},"locale-today-label":{control:"text"},"locale-spinbutton-description":{control:"text"},"locale-prev-month-label":{control:"text"},"locale-next-month-label":{control:"text"},"append-to":{control:"text"},"backdrop-append-to":{control:"text"},..._e(["validation-message","validity","willValidate","dayInput","monthInput","yearInput","displayPopover","internalMonth","internalDay","internalYear","effectiveSelectionMode","pendingDigits","pendingDigitTimeout"]),...Ye,...qe}},x={args:{label:"Start date",variant:u.INPUT,locale:"en-US",required:!0,"help-text":"Helper text","locale-month-label":"Month","locale-day-label":"Day","locale-year-label":"Year","locale-calendar-label":"Open calendar","locale-today-label":"Today","locale-spinbutton-description":"Use arrow keys to change the value or type a number"}},S={args:{label:"Start date",value:"2025-07-15",variant:u.INPUT,locale:"en-US",required:!0,"help-text":"Helper text","locale-month-label":"Month","locale-day-label":"Day","locale-year-label":"Year","locale-calendar-label":"Open calendar","locale-today-label":"Today"}},T={args:{label:"Date range",variant:u.DEFAULT,locale:"en-US",required:!0,"help-text":"Select a start and end date","locale-today-label":"Today"}},D={args:{label:"Date range",value:"2025-07-13",variant:u.DEFAULT,locale:"en-US",required:!0,"help-text":"Helper text","locale-today-label":"Today"}},k={args:{label:"Select week",variant:u.DEFAULT,"selection-mode":m.WEEK,locale:"en-US","help-text":"Click a date to select its week","locale-today-label":"Today","locale-prev-month-label":"Go to previous month","locale-next-month-label":"Go to next month"}},$={args:{label:"Start date",value:"2025-07-15",variant:u.INPUT,disabled:!0,locale:"en-US","help-text":"Helper text","locale-month-label":"Month","locale-day-label":"Day","locale-year-label":"Year"}},V={args:{label:"Start date",value:"2025-07-15",variant:u.INPUT,readonly:!0,locale:"en-US","help-text":"Helper text","locale-month-label":"Month","locale-day-label":"Day","locale-year-label":"Year"}},I={args:{label:"End date",value:"2025-07-14",variant:u.INPUT,locale:"en-US",required:!0,"help-text":"End date must occur after start date","help-text-type":"error","locale-month-label":"Month","locale-day-label":"Day","locale-year-label":"Year"}},A={render:()=>h`
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
  `,...R()},E={render:()=>h`
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
  `,...R()},M={render:()=>h`
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
  `,...R()};var B,H,K;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(K=(H=x.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var j,J,Q;S.parameters={...S.parameters,docs:{...(j=S.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(Q=(J=S.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,ee;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'Date range',
    variant: VARIANT.DEFAULT,
    locale: 'en-US',
    required: true,
    'help-text': 'Select a start and end date',
    'locale-today-label': 'Today'
  }
}`,...(ee=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,le;D.parameters={...D.parameters,docs:{...(te=D.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    label: 'Date range',
    value: '2025-07-13',
    variant: VARIANT.DEFAULT,
    locale: 'en-US',
    required: true,
    'help-text': 'Helper text',
    'locale-today-label': 'Today'
  }
}`,...(le=(ae=D.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var oe,re,ne;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ne=(re=k.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ie,se,ce;$.parameters={...$.parameters,docs:{...(ie=$.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(se=$.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var de,pe,he;V.parameters={...V.parameters,docs:{...(de=V.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(he=(pe=V.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var ue,me,be;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(be=(me=I.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};var ye,ge,ve;A.parameters={...A.parameters,docs:{...(ye=A.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ve=(ge=A.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var fe,xe,Se;E.parameters={...E.parameters,docs:{...(fe=E.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Se=(xe=E.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var Te,De,ke;M.parameters={...M.parameters,docs:{...(Te=M.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(ke=(De=M.parameters)==null?void 0:De.docs)==null?void 0:ke.source}}};const At=["Example","InputWithValue","DefaultVariant","DefaultWithValue","WeekSelection","Disabled","ReadOnly","ErrorState","DateRange","LocalizedGerman","LocalizedJapanese"];export{A as DateRange,T as DefaultVariant,D as DefaultWithValue,$ as Disabled,I as ErrorState,x as Example,S as InputWithValue,E as LocalizedGerman,M as LocalizedJapanese,V as ReadOnly,k as WeekSelection,At as __namedExportsOrder,It as default};
