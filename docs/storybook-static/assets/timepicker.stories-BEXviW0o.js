import"./index-1OHNifC4.js";import"./index-ChETWKIm.js";import"./index-B2rOd_ug.js";import"./index-DgFVlAdE.js";import{u as He,a2 as De,a4 as Ue,k as f,h as C,a5 as v,n as p,t as U}from"./iframe-DoNkonBK.js";import"./index-QLKcSaEB.js";import{t as n}from"./if-defined-B36DAkUP.js";import{D as Ve}from"./DataAriaLabelMixin-BGH72T46.js";import{F as Fe}from"./FormInternalsMixin-CD_aVtDf.js";import{b as h}from"./KeyDownHandledMixin-CHVndGqH.js";import{F as q}from"./formfieldwrapper.component-DINNXoO0.js";import{P as We,D as Ce,a as qe}from"./popover.constants-B9PQSOY9.js";import{c as Ne,s as Ke}from"./commonArgTypes-BG7EqI50.js";import{h as Be,a as V}from"./utils-B5QUENNQ.js";import{V as ze}from"./formfieldwrapper.constants-Bqn78fRr.js";import"./button.component-CUXnbZWa.js";import"./buttonsimple.component-DnM31Gat.js";import"./DisabledMixin-CrQfIA6t.js";import"./button.utils-rNW36Ji7.js";import"./preload-helper-C1FmrZbK.js";import"./index-BOEpt90i.js";import"./index-DTrDRi1E.js";import"./listitem.component-CSKpMlhF.js";import"./query-assigned-elements-C5HXlrtD.js";import"./popover.component-CPMBaGtO.js";import"./BackdropMixin-DhDi1luQ.js";import"./index-CqdCAA0Q.js";import"./v4-CmTdKEVZ.js";const Xe=He.constructTagName("timepicker"),N={ARROW_UP:"arrow-up-bold",ARROW_DOWN:"arrow-down-bold"},d={TWELVE_HOUR:"12h",TWENTY_FOUR_HOUR:"24h"},K="timepicker-triggerid",B="timepicker-listbox",u={TIME_FORMAT:d.TWELVE_HOUR,INTERVAL:30,MIN_HOUR_12:1,MAX_HOUR_12:12,MIN_HOUR_24:0,MAX_HOUR_24:23,MIN_MINUTE:0,MAX_MINUTE:59,DISABLE_FLIP:!1},je=De`
  :host {
    --mdc-timepicker-background-color: var(--mds-color-theme-background-primary-ghost);
    --mdc-timepicker-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-timepicker-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-timepicker-width: fit-content;
    --mdc-timepicker-listbox-width: 100%;

    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    align-items: unset;
    width: var(--mdc-timepicker-width);
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
    height: 2rem;
    width: 100%;
    position: relative;
    display: flex;
  }

  :host::part(base-container) {
    border-radius: 0.5rem;
    padding: 0.34375rem 0.375rem 0.34375rem 0.75rem;
    border: 1px solid var(--mdc-timepicker-border-color);
    background: var(--mdc-timepicker-background-color);
    display: flex;
    gap: 0.25rem;
    align-items: center;
    user-select: none;
    width: 100%;
    cursor: default;
  }

  :host::part(base-container):hover {
    --mdc-timepicker-background-color: var(--mds-color-theme-background-primary-hover);
  }

  :host::part(base-container):active {
    --mdc-timepicker-background-color: var(--mds-color-theme-background-primary-active);
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
    color: var(--mdc-timepicker-text-color);
    font-family: inherit;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: center;
    outline: none;
    padding: 0;
    margin: 0;
    min-width: 1.25rem;
    width: 1.25rem;
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

  :host::part(separator) {
    color: var(--mdc-timepicker-text-color);
    font-size: 0.875rem;
    line-height: 1.25rem;
    user-select: none;
    pointer-events: none;
    padding: 0 0.0625rem;
  }

  :host::part(period) {
    background: transparent;
    border: none;
    color: var(--mdc-timepicker-text-color);
    font-family: inherit;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: center;
    outline: none;
    padding: 0;
    margin: 0 0 0 0.25rem;
    min-width: 1.5rem;
    width: 1.5rem;
    cursor: text;
  }

  :host::part(period):focus {
    background: var(--mds-color-theme-background-accent-normal);
    color: var(--mds-color-theme-common-text-primary-normal);
    border-radius: 0.125rem;
  }

  :host::part(icon-container) {
    flex-shrink: 0;
    border-radius: 100px;
  }

  /* Popover height, width & padding overrides */
  :host mdc-popover::part(popover-content) {
    max-height: var(--mdc-popover-max-height);
    min-width: var(--mdc-timepicker-listbox-width);
    padding: 0.75rem 0.5rem;
  }

  /* Listbox container */
  :host::part(listbox) {
    display: flex;
    flex-direction: column;
    max-height: var(--mdc-popover-internal-available-height);
  }

  /* Help text border colors */
  :host([help-text-type='success'])::part(base-container),
  :host([help-text-type='warning'])::part(base-container),
  :host([help-text-type='error'])::part(base-container) {
    --mdc-timepicker-border-color: var(--mdc-help-text-color);
  }

  :host([readonly])::part(help-text-container) {
    --mdc-help-text-color: var(--mds-color-theme-text-secondary-normal);
  }

  /* Disabled, soft-disabled, readonly */
  :host([disabled])::part(base-container),
  :host([soft-disabled])::part(base-container),
  :host([readonly])::part(base-container) {
    --mdc-timepicker-border-color: var(--mds-color-theme-outline-primary-disabled);
    --mdc-timepicker-background-color: var(--mds-color-theme-background-input-disabled);
  }
  :host([disabled])::part(base-container):hover,
  :host([soft-disabled])::part(base-container):hover,
  :host([readonly])::part(base-container):hover {
    --mdc-timepicker-background-color: var(--mds-color-theme-background-input-disabled);
  }
  :host([disabled])::part(spinbutton),
  :host([soft-disabled])::part(spinbutton),
  :host([disabled])::part(period),
  :host([soft-disabled])::part(period),
  :host([disabled])::part(separator),
  :host([soft-disabled])::part(separator) {
    --mdc-timepicker-text-color: var(--mds-color-theme-text-primary-disabled);
    color: var(--mds-color-theme-text-primary-disabled);
  }
`,Ge=[je,...Ue(!0)];var Ye=Object.defineProperty,r=(i,e,t,o)=>{for(var a=void 0,s=i.length-1,m;s>=0;s--)(m=i[s])&&(a=m(e,t,a)||a);return a&&Ye(e,t,a),a};const F=class F extends Fe(Ve(q)){constructor(){super(...arguments),this.timeFormat=u.TIME_FORMAT,this.interval=u.INTERVAL,this.placement=We.BOTTOM_START,this.strategy=Ce.STRATEGY,this.disableFlip=u.DISABLE_FLIP,this.localeHoursLabel="",this.localeMinutesLabel="",this.localePeriodLabel="",this.localeHoursPlaceholder="",this.localeMinutesPlaceholder="",this.localePeriodPlaceholder="",this.localeAmLabel="",this.localePmLabel="",this.localeShowTimePickerLabel="",this.localeTimeOptionsLabel="",this.localeSpinbuttonDescription="",this.displayPopover=!1,this.internalHours="",this.internalMinutes="",this.internalPeriod="AM",this.focusedOptionIndex=-1,this.pendingDigits=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.parseValueToInternal(),this.syncFormValue()}).catch(e=>{this.onerror&&this.onerror(e)})}disconnectedCallback(){super.disconnectedCallback(),this.pendingDigitTimeout&&clearTimeout(this.pendingDigitTimeout)}willUpdate(e){super.willUpdate(e),e.has("value")&&!this.displayPopover&&(this.parseValueToInternal(),this.syncFormValue()),(e.has("disabled")||e.has("softDisabled")||e.has("readonly"))&&(this.disabled||this.softDisabled||this.readonly)&&(this.displayPopover=!1)}updated(e){super.updated(e),e.has("displayPopover")&&this.displayPopover&&this.focusMenuItemOnOpen()}focusMenuItemOnOpen(){const e=this.getTimeOptions(),t=this.internalToValue(),o=e.findIndex(a=>a.value===t);this.focusedOptionIndex=o>=0?o:0,this.updateComplete.then(()=>{this.focusCurrentMenuItem()}).catch(()=>{})}focusCurrentMenuItem(){var o;const e=(o=this.shadowRoot)==null?void 0:o.querySelector(`#${B}`);if(!e)return;const t=e.querySelectorAll("mdc-option");t[this.focusedOptionIndex]&&t[this.focusedOptionIndex].focus()}formResetCallback(){this.value="",this.internalHours="",this.internalMinutes="",this.internalPeriod="AM",this.syncFormValue(),this.requestUpdate()}formStateRestoreCallback(e){this.value=e,this.parseValueToInternal()}parseValueToInternal(){if(!this.value){this.internalHours="",this.internalMinutes="",this.internalPeriod="AM";return}const e=this.value.match(/^(\d{1,2}):(\d{2})$/);if(!e)return;const t=parseInt(e[1],10),o=parseInt(e[2],10);t<0||t>23||o<0||o>59||(this.internalMinutes=String(o).padStart(2,"0"),this.timeFormat===d.TWELVE_HOUR?t===0?(this.internalPeriod="AM",this.internalHours="12"):t<12?(this.internalPeriod="AM",this.internalHours=String(t).padStart(2,"0")):t===12?(this.internalPeriod="PM",this.internalHours="12"):(this.internalPeriod="PM",this.internalHours=String(t-12).padStart(2,"0")):this.internalHours=String(t).padStart(2,"0"))}internalToValue(){if(!this.internalHours||!this.internalMinutes)return"";let e=parseInt(this.internalHours,10);return this.timeFormat===d.TWELVE_HOUR&&(this.internalPeriod==="AM"?e=e===12?0:e:e=e===12?12:e+12),`${String(e).padStart(2,"0")}:${this.internalMinutes}`}syncFormValue(){const e=this.internalToValue();this.internals.setFormValue(e||this.value)}commitValue(){const e=this.internalToValue();e&&e!==this.value&&(this.value=e,this.syncFormValue(),this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},composed:!0,bubbles:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},composed:!0,bubbles:!0})))}getTimeOptions(){const e=[],t=Math.max(1,Math.min(this.interval,60));for(let o=0;o<24*60;o+=t){const a=Math.floor(o/60),s=o%60,m=`${String(a).padStart(2,"0")}:${String(s).padStart(2,"0")}`;let c;if(this.timeFormat===d.TWELVE_HOUR){const T=a<12?this.localeAmLabel:this.localePmLabel;let y=a%12;y===0&&(y=12);const x=s===0?"00":String(s);c=`${y}:${x} ${T}`}else c=`${a}:${String(s).padStart(2,"0")}`;const g=!this.min||m>=this.min,k=!this.max||m<=this.max;g&&k&&e.push({label:c,value:m})}return e}handleOptionClick(e){var t;this.value=e,this.parseValueToInternal(),this.displayPopover=!1,this.syncFormValue(),this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},composed:!0,bubbles:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},composed:!0,bubbles:!0})),(t=this.dropdownButton)==null||t.focus()}handleDropdownClick(e){this.disabled||this.softDisabled||this.readonly||(this.displayPopover=!this.displayPopover,e.stopPropagation())}handleSpinbuttonAreaClick(e){var o,a;this.disabled||this.softDisabled||this.readonly||e.target.getAttribute("role")==="spinbutton"||((o=this.hoursInput)==null||o.focus(),(a=this.hoursInput)==null||a.select())}handleBaseKeydown(e){var t;this.disabled||this.softDisabled||this.readonly||e.key===h.ESCAPE&&this.displayPopover&&(this.displayPopover=!1,(t=this.dropdownButton)==null||t.focus(),e.preventDefault(),e.stopPropagation())}handleListboxKeydown(e){var a;const t=this.getTimeOptions(),o=t.length;if(o!==0)switch(e.key){case h.ARROW_DOWN:{e.preventDefault(),e.stopPropagation(),this.focusedOptionIndex=(this.focusedOptionIndex+1)%o,this.focusCurrentMenuItem();break}case h.ARROW_UP:{e.preventDefault(),e.stopPropagation(),this.focusedOptionIndex=(this.focusedOptionIndex-1+o)%o,this.focusCurrentMenuItem();break}case h.ENTER:{e.preventDefault(),e.stopPropagation(),this.focusedOptionIndex>=0&&this.focusedOptionIndex<o&&this.handleOptionClick(t[this.focusedOptionIndex].value);break}case h.ESCAPE:{e.preventDefault(),e.stopPropagation(),this.displayPopover=!1,(a=this.dropdownButton)==null||a.focus();break}}}handleHoursKeydown(e){this.handleSpinbuttonKeydown(e,"hours")}handleMinutesKeydown(e){this.handleSpinbuttonKeydown(e,"minutes")}handlePeriodKeydown(e){var t,o;switch(e.key){case h.ARROW_UP:case h.ARROW_DOWN:e.preventDefault(),this.internalPeriod=this.internalPeriod==="AM"?"PM":"AM",this.commitValue(),this.requestUpdate();break;case h.TAB:break;case h.ARROW_LEFT:e.preventDefault(),(t=this.minutesInput)==null||t.focus(),(o=this.minutesInput)==null||o.select();break;default:{e.preventDefault();const a=this.localeAmLabel.charAt(0).toLowerCase(),s=this.localePmLabel.charAt(0).toLowerCase(),m=e.key.toLowerCase();m===a?(this.internalPeriod="AM",this.commitValue(),this.requestUpdate()):m===s&&(this.internalPeriod="PM",this.commitValue(),this.requestUpdate());break}}}handleSpinbuttonKeydown(e,t){var g,k,T,y,x,W;const o=this.timeFormat===d.TWELVE_HOUR;let a,s;t==="hours"?(a=o?u.MIN_HOUR_12:u.MIN_HOUR_24,s=o?u.MAX_HOUR_12:u.MAX_HOUR_24):(a=u.MIN_MINUTE,s=u.MAX_MINUTE);const m=t==="hours"?this.internalHours:this.internalMinutes;let c=m?parseInt(m,10):a;switch(e.key){case h.ARROW_UP:{e.preventDefault(),c=c>=s?a:c+1,this.setSpinbuttonValue(t,c),this.commitValue();break}case h.ARROW_DOWN:{e.preventDefault(),c=c<=a?s:c-1,this.setSpinbuttonValue(t,c),this.commitValue();break}case h.ARROW_RIGHT:{e.preventDefault(),t==="hours"?((g=this.minutesInput)==null||g.focus(),(k=this.minutesInput)==null||k.select()):o&&((T=this.periodInput)==null||T.focus(),(y=this.periodInput)==null||y.select());break}case h.ARROW_LEFT:{e.preventDefault(),t==="minutes"&&((x=this.hoursInput)==null||x.focus(),(W=this.hoursInput)==null||W.select());break}case h.TAB:break;default:{/^\d$/.test(e.key)?(e.preventDefault(),this.handleDigitInput(e.key,t,a,s)):e.preventDefault();break}}}handleDigitInput(e,t,o,a){if(this.pendingDigitTimeout&&clearTimeout(this.pendingDigitTimeout),this.pendingDigits+=e,this.pendingDigits.length>=2){let s=parseInt(this.pendingDigits,10);s>a&&(s=a),s<o&&(s=o),this.setSpinbuttonValue(t,s),this.pendingDigits="",this.commitValue(),this.advanceToNextField(t)}else{const s=parseInt(this.pendingDigits,10),m=Math.floor(a/10);if(s>m){let c=s;c>a&&(c=a),c<o&&(c=o),this.setSpinbuttonValue(t,c),this.pendingDigits="",this.commitValue(),this.advanceToNextField(t)}else this.setSpinbuttonValue(t,s),this.pendingDigitTimeout=setTimeout(()=>{let c=s;c<o&&(c=o),this.setSpinbuttonValue(t,c),this.pendingDigits="",this.commitValue(),this.advanceToNextField(t)},1e3)}}setSpinbuttonValue(e,t){const o=String(t).padStart(2,"0");e==="hours"?this.internalHours=o:this.internalMinutes=o,this.requestUpdate()}advanceToNextField(e){e==="hours"?this.updateComplete.then(()=>{var t,o;(t=this.minutesInput)==null||t.focus(),(o=this.minutesInput)==null||o.select()}).catch(()=>{}):this.timeFormat===d.TWELVE_HOUR&&this.updateComplete.then(()=>{var t,o;(t=this.periodInput)==null||t.focus(),(o=this.periodInput)==null||o.select()}).catch(()=>{})}handleSpinbuttonFocus(e){e.target.select(),this.pendingDigits="",this.pendingDigitTimeout&&clearTimeout(this.pendingDigitTimeout)}get displayPeriod(){return this.internalPeriod==="AM"?this.localeAmLabel:this.localePmLabel}get hoursPlaceholder(){return this.localeHoursPlaceholder}get minutesPlaceholder(){return this.localeMinutesPlaceholder}get periodPlaceholder(){return this.localePeriodPlaceholder}renderTimeOptions(){const e=this.getTimeOptions(),t=this.internalToValue();return e.map(o=>f`
        <mdc-option
          label="${o.label}"
          ?selected="${o.value===t}"
          aria-selected="${o.value===t?"true":"false"}"
          @click="${()=>this.handleOptionClick(o.value)}"
        ></mdc-option>
      `)}render(){const e=this.timeFormat===d.TWELVE_HOUR,t=e?u.MIN_HOUR_12:u.MIN_HOUR_24,o=e?u.MAX_HOUR_12:u.MAX_HOUR_24;return f`
      ${this.renderLabel()}
      <div part="container">
        <div
          id="${K}"
          part="base-container"
          class="mdc-focus-ring"
          @click="${this.handleSpinbuttonAreaClick}"
          @keydown="${this.handleBaseKeydown}"
        >
          <div part="spinbutton-group">
            <input
              id="hours-spinbutton"
              part="spinbutton"
              role="spinbutton"
              aria-label="${this.localeHoursLabel}"
              aria-valuemin="${t}"
              aria-valuemax="${o}"
              aria-valuenow="${this.internalHours?parseInt(this.internalHours,10):""}"
              aria-description="${this.localeSpinbuttonDescription}"
              .value="${this.internalHours}"
              placeholder="${this.hoursPlaceholder}"
              ?disabled="${this.disabled}"
              ?readonly="${this.readonly}"
              tabindex="${this.disabled?"-1":"0"}"
              @keydown="${this.handleHoursKeydown}"
              @focus="${this.handleSpinbuttonFocus}"
            />
            <span part="separator">:</span>
            <input
              id="minutes-spinbutton"
              part="spinbutton"
              role="spinbutton"
              aria-label="${this.localeMinutesLabel}"
              aria-valuemin="${u.MIN_MINUTE}"
              aria-valuemax="${u.MAX_MINUTE}"
              aria-valuenow="${this.internalMinutes?parseInt(this.internalMinutes,10):""}"
              aria-description="${this.localeSpinbuttonDescription}"
              .value="${this.internalMinutes}"
              placeholder="${this.minutesPlaceholder}"
              ?disabled="${this.disabled}"
              ?readonly="${this.readonly}"
              tabindex="${this.disabled?"-1":"0"}"
              @keydown="${this.handleMinutesKeydown}"
              @focus="${this.handleSpinbuttonFocus}"
            />
            ${e?f`
                  <input
                    id="period-spinbutton"
                    part="period"
                    role="spinbutton"
                    aria-label="${this.localePeriodLabel}"
                    aria-valuetext="${this.displayPeriod}"
                    aria-description="${this.localeSpinbuttonDescription}"
                    .value="${this.displayPeriod||""}"
                    placeholder="${this.periodPlaceholder}"
                    ?disabled="${this.disabled}"
                    ?readonly="${this.readonly}"
                    tabindex="${this.disabled?"-1":"0"}"
                    @keydown="${this.handlePeriodKeydown}"
                    @focus="${this.handleSpinbuttonFocus}"
                  />
                `:C}
          </div>
          <mdc-button
            part="icon-container"
            class="own-focus-ring"
            variant="tertiary"
            prefix-icon="${this.displayPopover?N.ARROW_UP:N.ARROW_DOWN}"
            aria-label="${this.localeShowTimePickerLabel}"
            aria-expanded="${this.displayPopover?"true":"false"}"
            aria-haspopup="true"
            ?disabled="${this.disabled}"
            size="20"
            @click="${this.handleDropdownClick}"
          ></mdc-button>
        </div>
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
          aria-disabled="${n(this.disabled||this.softDisabled)}"
        />
        <mdc-popover
          trigger="${qe.MANUAL}"
          triggerid="${K}"
          interactive
          ?visible="${this.displayPopover}"
          role=""
          backdrop
          backdrop-append-to="${n(this.backdropAppendTo)}"
          append-to="${n(this.appendTo)}"
          hide-on-outside-click
          hide-on-escape
          focus-back-to-trigger
          focus-trap
          disable-aria-expanded
          size
          ?disable-flip="${this.disableFlip}"
          placement="${this.placement}"
          strategy="${n(this.strategy)}"
          @closebyescape="${a=>{a.target===a.currentTarget&&(this.displayPopover=!1)}}"
          @closebyoutsideclick="${()=>{this.displayPopover=!1}}"
          exportparts="popover-content"
        >
          <div
            id="${B}"
            part="listbox"
            role="listbox"
            aria-label="${this.localeTimeOptionsLabel}"
            @keydown="${this.handleListboxKeydown}"
          >
            ${this.renderTimeOptions()}
          </div>
        </mdc-popover>
      </div>
      ${this.helpText?this.renderHelperText():C}
    `}};F.styles=[...q.styles,...Ge];let l=F;r([p({type:String,reflect:!0,attribute:"time-format"})],l.prototype,"timeFormat");r([p({type:Number,reflect:!0})],l.prototype,"interval");r([p({type:String,reflect:!0})],l.prototype,"placement");r([p({type:String,reflect:!0})],l.prototype,"strategy");r([p({type:Boolean,reflect:!0,attribute:"disable-flip"})],l.prototype,"disableFlip");r([p({type:String,reflect:!0,attribute:"append-to"})],l.prototype,"appendTo");r([p({type:String,reflect:!0,attribute:"backdrop-append-to"})],l.prototype,"backdropAppendTo");r([p({type:String,reflect:!0})],l.prototype,"min");r([p({type:String,reflect:!0})],l.prototype,"max");r([p({type:String,attribute:"locale-hours-label"})],l.prototype,"localeHoursLabel");r([p({type:String,attribute:"locale-minutes-label"})],l.prototype,"localeMinutesLabel");r([p({type:String,attribute:"locale-period-label"})],l.prototype,"localePeriodLabel");r([p({type:String,attribute:"locale-hours-placeholder"})],l.prototype,"localeHoursPlaceholder");r([p({type:String,attribute:"locale-minutes-placeholder"})],l.prototype,"localeMinutesPlaceholder");r([p({type:String,attribute:"locale-period-placeholder"})],l.prototype,"localePeriodPlaceholder");r([p({type:String,attribute:"locale-am-label"})],l.prototype,"localeAmLabel");r([p({type:String,attribute:"locale-pm-label"})],l.prototype,"localePmLabel");r([p({type:String,attribute:"locale-show-time-picker-label"})],l.prototype,"localeShowTimePickerLabel");r([p({type:String,attribute:"locale-time-options-label"})],l.prototype,"localeTimeOptionsLabel");r([p({type:String,attribute:"locale-spinbutton-description"})],l.prototype,"localeSpinbuttonDescription");r([U('mdc-button[part="icon-container"]')],l.prototype,"dropdownButton");r([U("#hours-spinbutton")],l.prototype,"hoursInput");r([U("#minutes-spinbutton")],l.prototype,"minutesInput");r([U("#period-spinbutton")],l.prototype,"periodInput");r([v()],l.prototype,"displayPopover");r([v()],l.prototype,"internalHours");r([v()],l.prototype,"internalMinutes");r([v()],l.prototype,"internalPeriod");r([v()],l.prototype,"focusedOptionIndex");l.register(Xe);const z=Object.values(ze).filter(i=>i!=="priority"),Je=i=>f`
  <mdc-timepicker
    label="${n(i.label)}"
    value="${n(i.value)}"
    time-format="${n(i["time-format"])}"
    interval="${n(i.interval)}"
    ?required="${i.required}"
    ?disabled="${i.disabled}"
    ?readonly="${i.readonly}"
    help-text="${n(i["help-text"])}"
    help-text-type="${n(i["help-text-type"])}"
    min="${n(i.min)}"
    max="${n(i.max)}"
    append-to="${n(i["append-to"])}"
    backdrop-append-to="${n(i["backdrop-append-to"])}"
    locale-hours-label="${n(i["locale-hours-label"])}"
    locale-minutes-label="${n(i["locale-minutes-label"])}"
    locale-period-label="${n(i["locale-period-label"])}"
    locale-hours-placeholder="${n(i["locale-hours-placeholder"])}"
    locale-minutes-placeholder="${n(i["locale-minutes-placeholder"])}"
    locale-period-placeholder="${n(i["locale-period-placeholder"])}"
    locale-am-label="${n(i["locale-am-label"])}"
    locale-pm-label="${n(i["locale-pm-label"])}"
    locale-show-time-picker-label="${n(i["locale-show-time-picker-label"])}"
    locale-time-options-label="${n(i["locale-time-options-label"])}"
    locale-spinbutton-description="${n(i["locale-spinbutton-description"])}"
  ></mdc-timepicker>
`,Ot={title:"Components/timepicker",tags:["autodocs"],component:"mdc-timepicker",render:Je,argTypes:{label:{control:"text"},"time-format":{control:"select",options:Object.values(d)},interval:{control:"number"},required:{control:"boolean"},disabled:{control:"boolean"},readonly:{control:"boolean"},"help-text":{control:"text"},"help-text-type":{control:"select",description:`The type of help text. It can be ${z.map(i=>`'${i}'`).join(", ")}.`,options:z},min:{control:"text"},max:{control:"text"},"append-to":{control:"text"},"backdrop-append-to":{control:"text"},"locale-hours-label":{control:"text"},"locale-minutes-label":{control:"text"},"locale-period-label":{control:"text"},"locale-hours-placeholder":{control:"text"},"locale-minutes-placeholder":{control:"text"},"locale-period-placeholder":{control:"text"},"locale-am-label":{control:"text"},"locale-pm-label":{control:"text"},"locale-show-time-picker-label":{control:"text"},"locale-time-options-label":{control:"text"},"locale-spinbutton-description":{control:"text"},...Be(["value","validation-message","validity","willValidate"]),...Ne,...Ke}},b={"locale-hours-label":"hours","locale-minutes-label":"minutes","locale-period-label":"period","locale-hours-placeholder":"hh","locale-minutes-placeholder":"mm","locale-period-placeholder":"--","locale-am-label":"AM","locale-pm-label":"PM","locale-show-time-picker-label":"Show time picker","locale-time-options-label":"Time options","locale-spinbutton-description":"To set value, use the up/down arrow keys or type a value"},M={args:{label:"Start time",value:"08:30","time-format":d.TWELVE_HOUR,interval:30,required:!0,...b}},w={args:{label:"Start time",value:"20:30","time-format":d.TWENTY_FOUR_HOUR,interval:30,required:!0,...b}},S={args:{label:"Start time",value:"08:30","time-format":d.TWELVE_HOUR,interval:15,required:!0,...b}},O={args:{label:"Start time",value:"08:30","time-format":d.TWELVE_HOUR,required:!0,"help-text":"Time will be adjusted to attendee's timezone",...b}},E={args:{label:"Start time",value:"08:30","time-format":d.TWELVE_HOUR,required:!0,"help-text":"Please select a valid time","help-text-type":"error",...b}},A={args:{label:"Start time",value:"08:30","time-format":d.TWELVE_HOUR,required:!0,"help-text":"This time may conflict with another event","help-text-type":"warning",...b}},$={args:{label:"Start time",value:"08:30","time-format":d.TWELVE_HOUR,required:!0,"help-text":"Time confirmed","help-text-type":"success",...b}},R={args:{label:"Start time",value:"08:30","time-format":d.TWELVE_HOUR,disabled:!0,...b}},P={args:{label:"Start time",value:"08:30","time-format":d.TWELVE_HOUR,readonly:!0,...b}},_={args:{label:"Meeting time",value:"09:00","time-format":d.TWELVE_HOUR,required:!0,min:"08:00",max:"17:00","help-text":"Select a time between 8:00 AM and 5:00 PM",...b}},I={render:()=>f`
    <div style="width: 300px;">
      <mdc-timepicker
        label="Start time"
        value="08:30"
        time-format="12h"
        required
        locale-hours-label="hours"
        locale-minutes-label="minutes"
        locale-period-label="period"
        locale-hours-placeholder="hh"
        locale-minutes-placeholder="mm"
        locale-period-placeholder="--"
        locale-am-label="AM"
        locale-pm-label="PM"
        locale-show-time-picker-label="Show time picker"
        locale-time-options-label="Time options"
        locale-spinbutton-description="To set value, use the up/down arrow keys or type a value"
        style="--mdc-timepicker-width: 100%;"
      ></mdc-timepicker>
    </div>
  `,...V()},L={render:()=>f`
    <div style="display: flex; gap: 1rem;">
      <mdc-timepicker
        label="Start time"
        value="08:30"
        time-format="12h"
        required
        locale-hours-label="hours"
        locale-minutes-label="minutes"
        locale-period-label="period"
        locale-hours-placeholder="hh"
        locale-minutes-placeholder="mm"
        locale-period-placeholder="--"
        locale-am-label="AM"
        locale-pm-label="PM"
        locale-show-time-picker-label="Show time picker"
        locale-time-options-label="Time options"
        locale-spinbutton-description="To set value, use the up/down arrow keys or type a value"
      ></mdc-timepicker>
      <mdc-timepicker
        label="End time"
        value="09:30"
        time-format="12h"
        required
        locale-hours-label="hours"
        locale-minutes-label="minutes"
        locale-period-label="period"
        locale-hours-placeholder="hh"
        locale-minutes-placeholder="mm"
        locale-period-placeholder="--"
        locale-am-label="AM"
        locale-pm-label="PM"
        locale-show-time-picker-label="Show time picker"
        locale-time-options-label="Time options"
        locale-spinbutton-description="To set value, use the up/down arrow keys or type a value"
      ></mdc-timepicker>
    </div>
  `,...V()},H={render:()=>f`
    <mdc-timepicker
      label="Hora de inicio"
      value="14:30"
      time-format="12h"
      required
      locale-hours-label="horas"
      locale-minutes-label="minutos"
      locale-period-label="período"
      locale-hours-placeholder="hh"
      locale-minutes-placeholder="mm"
      locale-period-placeholder="--"
      locale-am-label="a.m."
      locale-pm-label="p.m."
      locale-show-time-picker-label="Mostrar selector de hora"
      locale-time-options-label="Opciones de hora"
      locale-spinbutton-description="Para establecer el valor, use las teclas de flecha arriba/abajo o escriba un valor"
      help-text="Seleccione una hora de inicio"
    ></mdc-timepicker>
  `,...V()},D={render:()=>f`
    <div style="display: flex; flex-direction: column; gap: 1rem; width: 300px;">
      <mdc-timepicker
        label="Start time"
        value="08:30"
        time-format="12h"
        required
        locale-hours-label="hours"
        locale-minutes-label="minutes"
        locale-period-label="period"
        locale-hours-placeholder="hh"
        locale-minutes-placeholder="mm"
        locale-period-placeholder="--"
        locale-am-label="AM"
        locale-pm-label="PM"
        locale-show-time-picker-label="Show time picker"
        locale-time-options-label="Time options"
        locale-spinbutton-description="To set value, use the up/down arrow keys or type a value"
        style="--mdc-timepicker-width: 100%;"
      ></mdc-timepicker>
      <mdc-timepicker
        label="End time"
        value="09:30"
        time-format="12h"
        required
        locale-hours-label="hours"
        locale-minutes-label="minutes"
        locale-period-label="period"
        locale-hours-placeholder="hh"
        locale-minutes-placeholder="mm"
        locale-period-placeholder="--"
        locale-am-label="AM"
        locale-pm-label="PM"
        locale-show-time-picker-label="Show time picker"
        locale-time-options-label="Time options"
        locale-spinbutton-description="To set value, use the up/down arrow keys or type a value"
        style="--mdc-timepicker-width: 100%;"
      ></mdc-timepicker>
    </div>
  `,...V()};var X,j,G;M.parameters={...M.parameters,docs:{...(X=M.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    value: '08:30',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    interval: 30,
    required: true,
    ...defaultLocaleArgs
  }
}`,...(G=(j=M.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var Y,J,Q;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    value: '20:30',
    'time-format': TIME_FORMAT.TWENTY_FOUR_HOUR,
    interval: 30,
    required: true,
    ...defaultLocaleArgs
  }
}`,...(Q=(J=w.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,ee,te;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    value: '08:30',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    interval: 15,
    required: true,
    ...defaultLocaleArgs
  }
}`,...(te=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,ae,le;O.parameters={...O.parameters,docs:{...(oe=O.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    value: '08:30',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    required: true,
    'help-text': "Time will be adjusted to attendee's timezone",
    ...defaultLocaleArgs
  }
}`,...(le=(ae=O.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var ie,re,se;E.parameters={...E.parameters,docs:{...(ie=E.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    value: '08:30',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    required: true,
    'help-text': 'Please select a valid time',
    'help-text-type': 'error',
    ...defaultLocaleArgs
  }
}`,...(se=(re=E.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ne,ce,pe;A.parameters={...A.parameters,docs:{...(ne=A.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    value: '08:30',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    required: true,
    'help-text': 'This time may conflict with another event',
    'help-text-type': 'warning',
    ...defaultLocaleArgs
  }
}`,...(pe=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var de,ue,me;$.parameters={...$.parameters,docs:{...(de=$.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    value: '08:30',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    required: true,
    'help-text': 'Time confirmed',
    'help-text-type': 'success',
    ...defaultLocaleArgs
  }
}`,...(me=(ue=$.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var he,be,fe;R.parameters={...R.parameters,docs:{...(he=R.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    value: '08:30',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    disabled: true,
    ...defaultLocaleArgs
  }
}`,...(fe=(be=R.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var ye,ve,ge;P.parameters={...P.parameters,docs:{...(ye=P.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    value: '08:30',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    readonly: true,
    ...defaultLocaleArgs
  }
}`,...(ge=(ve=P.parameters)==null?void 0:ve.docs)==null?void 0:ge.source}}};var ke,Te,xe;_.parameters={..._.parameters,docs:{...(ke=_.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    label: 'Meeting time',
    value: '09:00',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    required: true,
    min: '08:00',
    max: '17:00',
    'help-text': 'Select a time between 8:00 AM and 5:00 PM',
    ...defaultLocaleArgs
  }
}`,...(xe=(Te=_.parameters)==null?void 0:Te.docs)==null?void 0:xe.source}}};var Me,we,Se;I.parameters={...I.parameters,docs:{...(Me=I.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: () => html\`
    <div style="width: 300px;">
      <mdc-timepicker
        label="Start time"
        value="08:30"
        time-format="12h"
        required
        locale-hours-label="hours"
        locale-minutes-label="minutes"
        locale-period-label="period"
        locale-hours-placeholder="hh"
        locale-minutes-placeholder="mm"
        locale-period-placeholder="--"
        locale-am-label="AM"
        locale-pm-label="PM"
        locale-show-time-picker-label="Show time picker"
        locale-time-options-label="Time options"
        locale-spinbutton-description="To set value, use the up/down arrow keys or type a value"
        style="--mdc-timepicker-width: 100%;"
      ></mdc-timepicker>
    </div>
  \`,
  ...hideAllControls()
}`,...(Se=(we=I.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};var Oe,Ee,Ae;L.parameters={...L.parameters,docs:{...(Oe=L.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; gap: 1rem;">
      <mdc-timepicker
        label="Start time"
        value="08:30"
        time-format="12h"
        required
        locale-hours-label="hours"
        locale-minutes-label="minutes"
        locale-period-label="period"
        locale-hours-placeholder="hh"
        locale-minutes-placeholder="mm"
        locale-period-placeholder="--"
        locale-am-label="AM"
        locale-pm-label="PM"
        locale-show-time-picker-label="Show time picker"
        locale-time-options-label="Time options"
        locale-spinbutton-description="To set value, use the up/down arrow keys or type a value"
      ></mdc-timepicker>
      <mdc-timepicker
        label="End time"
        value="09:30"
        time-format="12h"
        required
        locale-hours-label="hours"
        locale-minutes-label="minutes"
        locale-period-label="period"
        locale-hours-placeholder="hh"
        locale-minutes-placeholder="mm"
        locale-period-placeholder="--"
        locale-am-label="AM"
        locale-pm-label="PM"
        locale-show-time-picker-label="Show time picker"
        locale-time-options-label="Time options"
        locale-spinbutton-description="To set value, use the up/down arrow keys or type a value"
      ></mdc-timepicker>
    </div>
  \`,
  ...hideAllControls()
}`,...(Ae=(Ee=L.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source}}};var $e,Re,Pe;H.parameters={...H.parameters,docs:{...($e=H.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-timepicker
      label="Hora de inicio"
      value="14:30"
      time-format="12h"
      required
      locale-hours-label="horas"
      locale-minutes-label="minutos"
      locale-period-label="período"
      locale-hours-placeholder="hh"
      locale-minutes-placeholder="mm"
      locale-period-placeholder="--"
      locale-am-label="a.m."
      locale-pm-label="p.m."
      locale-show-time-picker-label="Mostrar selector de hora"
      locale-time-options-label="Opciones de hora"
      locale-spinbutton-description="Para establecer el valor, use las teclas de flecha arriba/abajo o escriba un valor"
      help-text="Seleccione una hora de inicio"
    ></mdc-timepicker>
  \`,
  ...hideAllControls()
}`,...(Pe=(Re=H.parameters)==null?void 0:Re.docs)==null?void 0:Pe.source}}};var _e,Ie,Le;D.parameters={...D.parameters,docs:{...(_e=D.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 1rem; width: 300px;">
      <mdc-timepicker
        label="Start time"
        value="08:30"
        time-format="12h"
        required
        locale-hours-label="hours"
        locale-minutes-label="minutes"
        locale-period-label="period"
        locale-hours-placeholder="hh"
        locale-minutes-placeholder="mm"
        locale-period-placeholder="--"
        locale-am-label="AM"
        locale-pm-label="PM"
        locale-show-time-picker-label="Show time picker"
        locale-time-options-label="Time options"
        locale-spinbutton-description="To set value, use the up/down arrow keys or type a value"
        style="--mdc-timepicker-width: 100%;"
      ></mdc-timepicker>
      <mdc-timepicker
        label="End time"
        value="09:30"
        time-format="12h"
        required
        locale-hours-label="hours"
        locale-minutes-label="minutes"
        locale-period-label="period"
        locale-hours-placeholder="hh"
        locale-minutes-placeholder="mm"
        locale-period-placeholder="--"
        locale-am-label="AM"
        locale-pm-label="PM"
        locale-show-time-picker-label="Show time picker"
        locale-time-options-label="Time options"
        locale-spinbutton-description="To set value, use the up/down arrow keys or type a value"
        style="--mdc-timepicker-width: 100%;"
      ></mdc-timepicker>
    </div>
  \`,
  ...hideAllControls()
}`,...(Le=(Ie=D.parameters)==null?void 0:Ie.docs)==null?void 0:Le.source}}};const Et=["Example","TwentyFourHourFormat","FifteenMinuteInterval","WithHelpText","ErrorState","WarningState","SuccessState","Disabled","Readonly","WithMinMax","StretchedWidth","StartAndEndTime","Localized","VerticalLayout"];export{R as Disabled,E as ErrorState,M as Example,S as FifteenMinuteInterval,H as Localized,P as Readonly,L as StartAndEndTime,I as StretchedWidth,$ as SuccessState,w as TwentyFourHourFormat,D as VerticalLayout,A as WarningState,O as WithHelpText,_ as WithMinMax,Et as __namedExportsOrder,Ot as default};
