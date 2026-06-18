import"./index-DM419G9w.js";import"./index-C-a6jsM_.js";import"./index-DZpKCd0q.js";import"./index-BzXIsb3j.js";import"./index-CKWj35Yf.js";import{u as Xe,a4 as je,aa as Ge,k as v,z as N,t as c,U as x,n as p,v as C}from"./iframe-CYZ064vw.js";import"./index-z2OdZlVq.js";import{D as Ye}from"./DataAriaLabelMixin-BjIJ89BI.js";import{F as Je}from"./FormInternalsMixin-B818aAc-.js";import{b as h}from"./KeyDownHandledMixin-DGzJ0rYO.js";import{F as K}from"./formfieldwrapper.component-BfRcMfn_.js";import{P as Qe,D as Ze,a as et}from"./popover.constants-gNuL8rzb.js";import{c as tt,s as ot}from"./commonArgTypes-BG7EqI50.js";import{h as lt,a as T}from"./utils-B5QUENNQ.js";import{V as at}from"./formfieldwrapper.constants-pFvOs8lW.js";import"./button.component-DTdegw5n.js";import"./buttonsimple.component-DfTyNmtt.js";import"./DisabledMixin-CjuLaMSD.js";import"./button.utils-rNW36Ji7.js";import"./preload-helper-C1FmrZbK.js";import"./index-Cm4DuzN6.js";import"./index-DTrDRi1E.js";import"./listitem.component-Db8W56sD.js";import"./query-assigned-elements-D2XoKueq.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-CBNLPVQ0.js";import"./popover.component-BIUkn_Yc.js";import"./BackdropMixin-DDg7Q_Id.js";import"./index-BiMq2Xfh.js";import"./v4-CmTdKEVZ.js";const it=Xe.constructTagName("timepicker"),z={ARROW_UP:"arrow-up-bold",ARROW_DOWN:"arrow-down-bold"},m={TWELVE_HOUR:"12h",TWENTY_FOUR_HOUR:"24h"},X="timepicker-triggerid",j="timepicker-listbox",u={TIME_FORMAT:m.TWELVE_HOUR,INTERVAL:30,MIN_HOUR_12:1,MAX_HOUR_12:12,MIN_HOUR_24:0,MAX_HOUR_24:23,MIN_MINUTE:0,MAX_MINUTE:59,DISABLE_FLIP:!1},rt=je`
  :host {
    --mdc-timepicker-background-color: var(--mds-color-theme-background-primary-ghost);
    --mdc-timepicker-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-timepicker-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-timepicker-height: 2rem;
    --mdc-timepicker-width: fit-content;
    --mdc-timepicker-listbox-width: 100%;
    --mdc-timepicker-listbox-height: 15rem;
    --mdc-timepicker-option-scroll-margin: 0.25rem;

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
    height: var(--mdc-timepicker-height);
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
  :host mdc-popover {
    --mdc-popover-max-width: var(--mdc-timepicker-listbox-width);
    --mdc-popover-max-height: var(--mdc-timepicker-listbox-height);
    min-width: max-content;
  }
  :host mdc-popover::part(popover-content) {
    max-height: var(--mdc-popover-max-height);
    min-width: auto;
    padding: 0.75rem 0.5rem;
  }

  /* Listbox container */
  :host::part(listbox) {
    display: flex;
    flex-direction: column;
    max-height: var(--mdc-popover-internal-available-height);
  }

  :host mdc-option {
    scroll-margin-block: var(--mdc-timepicker-option-scroll-margin);
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
`,nt=[rt,...Ge(!0)];var st=Object.defineProperty,n=(a,e,t,o)=>{for(var l=void 0,r=a.length-1,d;r>=0;r--)(d=a[r])&&(l=d(e,t,l)||l);return l&&st(e,t,l),l};const q=class q extends Je(Ye(K)){constructor(){super(...arguments),this.timeFormat=u.TIME_FORMAT,this.interval=u.INTERVAL,this.placement=Qe.BOTTOM_START,this.strategy=Ze.STRATEGY,this.disableFlip=u.DISABLE_FLIP,this.localeHoursLabel="",this.localeMinutesLabel="",this.localePeriodLabel="",this.localeHoursPlaceholder="",this.localeMinutesPlaceholder="",this.localePeriodPlaceholder="",this.localeAmLabel="",this.localePmLabel="",this.localeShowTimePickerLabel="",this.localeTimeOptionsLabel="",this.localeSpinbuttonDescription="",this.displayPopover=!1,this.internalHours="",this.internalMinutes="",this.internalPeriod="AM",this.focusedOptionIndex=-1,this.pendingDigits=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.parseValueToInternal(),this.syncFormValue()}).catch(e=>{this.onerror&&this.onerror(e)})}disconnectedCallback(){super.disconnectedCallback(),this.pendingDigitTimeout&&clearTimeout(this.pendingDigitTimeout)}willUpdate(e){super.willUpdate(e),e.has("value")&&!this.displayPopover&&(this.parseValueToInternal(),this.syncFormValue()),(e.has("disabled")||e.has("softDisabled")||e.has("readonly"))&&(this.disabled||this.softDisabled||this.readonly)&&(this.displayPopover=!1)}updated(e){super.updated(e),e.has("displayPopover")&&this.displayPopover&&this.focusMenuItemOnOpen()}focusMenuItemOnOpen(){this.focusedOptionIndex=this.getMenuItemFocusIndex(),this.updateComplete.then(()=>{window.requestAnimationFrame(()=>{this.focusCurrentMenuItem()})}).catch(()=>{})}getMenuItemFocusIndex(){const e=this.getTimeOptions(),t=this.internalToValue(),o=e.findIndex(l=>l.value===t);return o>=0?o:0}focusCurrentMenuItem(){var l;const e=(l=this.shadowRoot)==null?void 0:l.querySelector(`#${j}`);if(!e)return;const o=e.querySelectorAll("mdc-option")[this.focusedOptionIndex];o&&(o.focus({preventScroll:!0}),o.scrollIntoView({block:"nearest"}))}formResetCallback(){this.value="",this.internalHours="",this.internalMinutes="",this.internalPeriod="AM",this.syncFormValue(),this.requestUpdate()}formStateRestoreCallback(e){this.value=e,this.parseValueToInternal()}parseValueToInternal(){if(!this.value){this.internalHours="",this.internalMinutes="",this.internalPeriod="AM";return}const e=this.value.match(/^(\d{1,2}):(\d{2})$/);if(!e)return;const t=parseInt(e[1],10),o=parseInt(e[2],10);t<0||t>23||o<0||o>59||(this.internalMinutes=String(o).padStart(2,"0"),this.timeFormat===m.TWELVE_HOUR?t===0?(this.internalPeriod="AM",this.internalHours="12"):t<12?(this.internalPeriod="AM",this.internalHours=String(t).padStart(2,"0")):t===12?(this.internalPeriod="PM",this.internalHours="12"):(this.internalPeriod="PM",this.internalHours=String(t-12).padStart(2,"0")):this.internalHours=String(t).padStart(2,"0"))}internalToValue(){if(!this.internalHours||!this.internalMinutes)return"";let e=parseInt(this.internalHours,10);return this.timeFormat===m.TWELVE_HOUR&&(this.internalPeriod==="AM"?e=e===12?0:e:e=e===12?12:e+12),`${String(e).padStart(2,"0")}:${this.internalMinutes}`}syncFormValue(){const e=this.internalToValue();this.internals.setFormValue(e||this.value)}commitValue(){const e=this.internalToValue();e&&e!==this.value&&(this.value=e,this.syncFormValue(),this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},composed:!0,bubbles:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},composed:!0,bubbles:!0})))}getTimeOptions(){const e=[],t=Math.max(1,Math.min(this.interval,60));for(let o=0;o<24*60;o+=t){const l=Math.floor(o/60),r=o%60,d=`${String(l).padStart(2,"0")}:${String(r).padStart(2,"0")}`;let s;if(this.timeFormat===m.TWELVE_HOUR){const f=l<12?this.localeAmLabel:this.localePmLabel;let g=l%12;g===0&&(g=12);const M=String(r).padStart(2,"0");s=`${g}:${M} ${f}`}else s=`${l}:${String(r).padStart(2,"0")}`;const b=!this.min||d>=this.min,y=!this.max||d<=this.max;b&&y&&e.push({label:s,value:d})}return e}handleOptionClick(e){var t;this.value=e,this.parseValueToInternal(),this.displayPopover=!1,this.syncFormValue(),this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},composed:!0,bubbles:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},composed:!0,bubbles:!0})),(t=this.dropdownButton)==null||t.focus()}handleDropdownClick(e){this.disabled||this.softDisabled||this.readonly||(this.displayPopover=!this.displayPopover,e.stopPropagation())}handleBaseContainerClick(e){var o,l,r;if(this.disabled||this.softDisabled||this.readonly)return;const t=e.target;if(t.getAttribute("role")!=="spinbutton"){if(t.getAttribute("part")==="base-container"||t.getAttribute("part")==="spinbutton-group"){this.displayPopover=!this.displayPopover,(o=this.dropdownButton)==null||o.focus(),e.stopPropagation();return}(l=this.hoursInput)==null||l.focus(),(r=this.hoursInput)==null||r.select()}}handleBaseKeydown(e){var t;this.disabled||this.softDisabled||this.readonly||e.key===h.ESCAPE&&this.displayPopover&&(this.displayPopover=!1,(t=this.dropdownButton)==null||t.focus(),e.preventDefault(),e.stopPropagation())}handleListboxKeydown(e){var l;const t=this.getTimeOptions(),o=t.length;if(o!==0)switch(e.key){case h.ARROW_DOWN:{e.preventDefault(),e.stopPropagation(),this.focusedOptionIndex=(this.focusedOptionIndex+1)%o,this.focusCurrentMenuItem();break}case h.ARROW_UP:{e.preventDefault(),e.stopPropagation(),this.focusedOptionIndex=(this.focusedOptionIndex-1+o)%o,this.focusCurrentMenuItem();break}case h.ENTER:{e.preventDefault(),e.stopPropagation(),this.focusedOptionIndex>=0&&this.focusedOptionIndex<o&&this.handleOptionClick(t[this.focusedOptionIndex].value);break}case h.ESCAPE:{e.preventDefault(),e.stopPropagation(),this.displayPopover=!1,(l=this.dropdownButton)==null||l.focus();break}}}handleHoursKeydown(e){this.handleSpinbuttonKeydown(e,"hours")}handleMinutesKeydown(e){this.handleSpinbuttonKeydown(e,"minutes")}handlePeriodKeydown(e){var t,o;switch(e.key){case h.ARROW_UP:case h.ARROW_DOWN:e.preventDefault(),this.internalPeriod=this.internalPeriod==="AM"?"PM":"AM",this.commitValue(),this.requestUpdate();break;case h.TAB:break;case h.ARROW_LEFT:e.preventDefault(),(t=this.minutesInput)==null||t.focus(),(o=this.minutesInput)==null||o.select();break;default:{e.preventDefault();const l=this.localeAmLabel.charAt(0).toLowerCase(),r=this.localePmLabel.charAt(0).toLowerCase(),d=e.key.toLowerCase();d===l?(this.internalPeriod="AM",this.commitValue(),this.requestUpdate()):d===r&&(this.internalPeriod="PM",this.commitValue(),this.requestUpdate());break}}}handleSpinbuttonKeydown(e,t){var b,y,f,g,M,B;const o=this.timeFormat===m.TWELVE_HOUR;let l,r;t==="hours"?(l=o?u.MIN_HOUR_12:u.MIN_HOUR_24,r=o?u.MAX_HOUR_12:u.MAX_HOUR_24):(l=u.MIN_MINUTE,r=u.MAX_MINUTE);const d=t==="hours"?this.internalHours:this.internalMinutes;let s=d?parseInt(d,10):l;switch(e.key){case h.ARROW_UP:{e.preventDefault(),s=s>=r?l:s+1,this.setSpinbuttonValue(t,s),this.commitValue();break}case h.ARROW_DOWN:{e.preventDefault(),s=s<=l?r:s-1,this.setSpinbuttonValue(t,s),this.commitValue();break}case h.ARROW_RIGHT:{e.preventDefault(),t==="hours"?((b=this.minutesInput)==null||b.focus(),(y=this.minutesInput)==null||y.select()):o&&((f=this.periodInput)==null||f.focus(),(g=this.periodInput)==null||g.select());break}case h.ARROW_LEFT:{e.preventDefault(),t==="minutes"&&((M=this.hoursInput)==null||M.focus(),(B=this.hoursInput)==null||B.select());break}case h.TAB:break;default:{/^\d$/.test(e.key)?(e.preventDefault(),this.handleDigitInput(e.key,t,l,r)):e.preventDefault();break}}}handleDigitInput(e,t,o,l){if(this.pendingDigitTimeout&&clearTimeout(this.pendingDigitTimeout),this.pendingDigits+=e,this.pendingDigits.length>=2){let r=parseInt(this.pendingDigits,10);r>l&&(r=l),r<o&&(r=o),this.setSpinbuttonValue(t,r),this.pendingDigits="",this.commitValue(),this.advanceToNextField(t)}else{const r=parseInt(this.pendingDigits,10),d=Math.floor(l/10);if(r>d){let s=r;s>l&&(s=l),s<o&&(s=o),this.setSpinbuttonValue(t,s),this.pendingDigits="",this.commitValue(),this.advanceToNextField(t)}else this.setSpinbuttonValue(t,r),this.pendingDigitTimeout=setTimeout(()=>{let s=r;s<o&&(s=o),this.setSpinbuttonValue(t,s),this.pendingDigits="",this.commitValue(),this.advanceToNextField(t)},1e3)}}setSpinbuttonValue(e,t){const o=String(t).padStart(2,"0");e==="hours"?this.internalHours=o:this.internalMinutes=o,this.requestUpdate()}advanceToNextField(e){e==="hours"?this.updateComplete.then(()=>{var t,o;(t=this.minutesInput)==null||t.focus(),(o=this.minutesInput)==null||o.select()}).catch(()=>{}):this.timeFormat===m.TWELVE_HOUR&&this.updateComplete.then(()=>{var t,o;(t=this.periodInput)==null||t.focus(),(o=this.periodInput)==null||o.select()}).catch(()=>{})}handleSpinbuttonFocus(e){e.target.select(),this.pendingDigits="",this.pendingDigitTimeout&&clearTimeout(this.pendingDigitTimeout)}get displayPeriod(){return this.internalPeriod==="AM"?this.localeAmLabel:this.localePmLabel}get hoursPlaceholder(){return this.localeHoursPlaceholder}get minutesPlaceholder(){return this.localeMinutesPlaceholder}get periodPlaceholder(){return this.localePeriodPlaceholder}renderTimeOptions(){const e=this.getTimeOptions(),t=this.internalToValue();return e.map(o=>v`
        <mdc-option
          label="${this.optionLabelFormatter?this.optionLabelFormatter(o.label,o.value):o.label}"
          ?selected="${o.value===t}"
          aria-selected="${o.value===t?"true":"false"}"
          @click="${()=>this.handleOptionClick(o.value)}"
        ></mdc-option>
      `)}render(){const e=this.timeFormat===m.TWELVE_HOUR,t=e?u.MIN_HOUR_12:u.MIN_HOUR_24,o=e?u.MAX_HOUR_12:u.MAX_HOUR_24;return v`
      ${this.renderLabel()}
      <div part="container">
        <div
          id="${X}"
          part="base-container"
          class="mdc-focus-ring"
          @click="${this.handleBaseContainerClick}"
          @keydown="${this.handleBaseKeydown}"
        >
          ${this.prefixIcon?v`<mdc-icon part="leading-icon" name="${this.prefixIcon}" size="1"></mdc-icon>`:N}
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
            ${e?v`
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
                `:N}
          </div>
          <mdc-button
            part="icon-container"
            class="own-focus-ring"
            variant="tertiary"
            prefix-icon="${this.displayPopover?z.ARROW_UP:z.ARROW_DOWN}"
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
          aria-disabled="${c(this.disabled||this.softDisabled)}"
        />
        <mdc-popover
          trigger="${et.MANUAL}"
          triggerid="${X}"
          interactive
          ?visible="${this.displayPopover}"
          role=""
          backdrop
          backdrop-append-to="${c(this.backdropAppendTo)}"
          append-to="${c(this.appendTo)}"
          hide-on-outside-click
          hide-on-escape
          focus-back-to-trigger
          focus-trap
          element-index-to-receive-focus="${this.getMenuItemFocusIndex()}"
          disable-aria-expanded
          size
          ?disable-flip="${this.disableFlip}"
          placement="${this.placement}"
          strategy="${c(this.strategy)}"
          @closebyescape="${l=>{l.target===l.currentTarget&&(this.displayPopover=!1)}}"
          @closebyoutsideclick="${()=>{this.displayPopover=!1}}"
          exportparts="popover-content"
        >
          <mdc-selectlistbox
            id="${j}"
            part="listbox"
            aria-label="${this.localeTimeOptionsLabel}"
            @keydown="${this.handleListboxKeydown}"
          >
            ${this.renderTimeOptions()}
          </mdc-selectlistbox>
        </mdc-popover>
      </div>
      ${this.helpText?this.renderHelperText():N}
    `}};q.styles=[...K.styles,...nt];let i=q;n([p({type:String,reflect:!0,attribute:"time-format"})],i.prototype,"timeFormat");n([p({type:Number,reflect:!0})],i.prototype,"interval");n([p({type:String,reflect:!0})],i.prototype,"placement");n([p({type:String,reflect:!0})],i.prototype,"strategy");n([p({type:Boolean,reflect:!0,attribute:"disable-flip"})],i.prototype,"disableFlip");n([p({type:String,reflect:!0,attribute:"append-to"})],i.prototype,"appendTo");n([p({type:String,reflect:!0,attribute:"backdrop-append-to"})],i.prototype,"backdropAppendTo");n([p({type:String,reflect:!0})],i.prototype,"min");n([p({type:String,reflect:!0})],i.prototype,"max");n([p({type:String,attribute:"locale-hours-label"})],i.prototype,"localeHoursLabel");n([p({type:String,attribute:"locale-minutes-label"})],i.prototype,"localeMinutesLabel");n([p({type:String,attribute:"locale-period-label"})],i.prototype,"localePeriodLabel");n([p({type:String,attribute:"locale-hours-placeholder"})],i.prototype,"localeHoursPlaceholder");n([p({type:String,attribute:"locale-minutes-placeholder"})],i.prototype,"localeMinutesPlaceholder");n([p({type:String,attribute:"locale-period-placeholder"})],i.prototype,"localePeriodPlaceholder");n([p({type:String,attribute:"locale-am-label"})],i.prototype,"localeAmLabel");n([p({type:String,attribute:"locale-pm-label"})],i.prototype,"localePmLabel");n([p({type:String,reflect:!0,attribute:"prefix-icon"})],i.prototype,"prefixIcon");n([p({attribute:!1})],i.prototype,"optionLabelFormatter");n([p({type:String,attribute:"locale-show-time-picker-label"})],i.prototype,"localeShowTimePickerLabel");n([p({type:String,attribute:"locale-time-options-label"})],i.prototype,"localeTimeOptionsLabel");n([p({type:String,attribute:"locale-spinbutton-description"})],i.prototype,"localeSpinbuttonDescription");n([C('mdc-button[part="icon-container"]')],i.prototype,"dropdownButton");n([C("#hours-spinbutton")],i.prototype,"hoursInput");n([C("#minutes-spinbutton")],i.prototype,"minutesInput");n([C("#period-spinbutton")],i.prototype,"periodInput");n([x()],i.prototype,"displayPopover");n([x()],i.prototype,"internalHours");n([x()],i.prototype,"internalMinutes");n([x()],i.prototype,"internalPeriod");n([x()],i.prototype,"focusedOptionIndex");i.register(it);const G=Object.values(at).filter(a=>a!=="priority"),ct=a=>v`
  <mdc-timepicker
    label="${c(a.label)}"
    value="${c(a.value)}"
    time-format="${c(a["time-format"])}"
    interval="${c(a.interval)}"
    ?required="${a.required}"
    ?disabled="${a.disabled}"
    ?readonly="${a.readonly}"
    help-text="${c(a["help-text"])}"
    help-text-type="${c(a["help-text-type"])}"
    min="${c(a.min)}"
    max="${c(a.max)}"
    append-to="${c(a["append-to"])}"
    backdrop-append-to="${c(a["backdrop-append-to"])}"
    locale-hours-label="${c(a["locale-hours-label"])}"
    locale-minutes-label="${c(a["locale-minutes-label"])}"
    locale-period-label="${c(a["locale-period-label"])}"
    locale-hours-placeholder="${c(a["locale-hours-placeholder"])}"
    locale-minutes-placeholder="${c(a["locale-minutes-placeholder"])}"
    locale-period-placeholder="${c(a["locale-period-placeholder"])}"
    locale-am-label="${c(a["locale-am-label"])}"
    locale-pm-label="${c(a["locale-pm-label"])}"
    locale-show-time-picker-label="${c(a["locale-show-time-picker-label"])}"
    locale-time-options-label="${c(a["locale-time-options-label"])}"
    locale-spinbutton-description="${c(a["locale-spinbutton-description"])}"
  ></mdc-timepicker>
`,Wt={title:"Components/timepicker",tags:["autodocs"],component:"mdc-timepicker",render:ct,argTypes:{label:{control:"text"},"time-format":{control:"select",options:Object.values(m)},interval:{control:"number"},required:{control:"boolean"},disabled:{control:"boolean"},readonly:{control:"boolean"},"help-text":{control:"text"},"help-text-type":{control:"select",description:`The type of help text. It can be ${G.map(a=>`'${a}'`).join(", ")}.`,options:G},min:{control:"text"},max:{control:"text"},"append-to":{control:"text"},"backdrop-append-to":{control:"text"},"locale-hours-label":{control:"text"},"locale-minutes-label":{control:"text"},"locale-period-label":{control:"text"},"locale-hours-placeholder":{control:"text"},"locale-minutes-placeholder":{control:"text"},"locale-period-placeholder":{control:"text"},"locale-am-label":{control:"text"},"locale-pm-label":{control:"text"},"locale-show-time-picker-label":{control:"text"},"locale-time-options-label":{control:"text"},"locale-spinbutton-description":{control:"text"},...lt(["value","validation-message","validity","willValidate"]),...tt,...ot}},k={"locale-hours-label":"hours","locale-minutes-label":"minutes","locale-period-label":"period","locale-hours-placeholder":"hh","locale-minutes-placeholder":"mm","locale-period-placeholder":"--","locale-am-label":"AM","locale-pm-label":"PM","locale-show-time-picker-label":"Show time picker","locale-time-options-label":"Time options","locale-spinbutton-description":"To set value, use the up/down arrow keys or type a value"},w={args:{label:"Start time",value:"08:30","time-format":m.TWELVE_HOUR,interval:30,required:!0,...k}},S={args:{label:"Start time",value:"20:30","time-format":m.TWENTY_FOUR_HOUR,interval:30,required:!0,...k}},$={args:{label:"Start time",value:"08:30","time-format":m.TWELVE_HOUR,interval:15,required:!0,...k}},A={args:{label:"Start time",value:"08:30","time-format":m.TWELVE_HOUR,required:!0,"help-text":"Time will be adjusted to attendee's timezone",...k}},E={args:{label:"Start time",value:"08:30","time-format":m.TWELVE_HOUR,required:!0,"help-text":"Please select a valid time","help-text-type":"error",...k}},O={args:{label:"Start time",value:"08:30","time-format":m.TWELVE_HOUR,required:!0,"help-text":"This time may conflict with another event","help-text-type":"warning",...k}},P={args:{label:"Start time",value:"08:30","time-format":m.TWELVE_HOUR,required:!0,"help-text":"Time confirmed","help-text-type":"success",...k}},I={args:{label:"Start time",value:"08:30","time-format":m.TWELVE_HOUR,disabled:!0,...k}},R={args:{label:"Start time",value:"08:30","time-format":m.TWELVE_HOUR,readonly:!0,...k}},_={args:{label:"Meeting time",value:"09:00","time-format":m.TWELVE_HOUR,required:!0,min:"08:00",max:"17:00","help-text":"Select a time between 8:00 AM and 5:00 PM",...k}},L={render:()=>v`
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
  `,...T()},H={render:()=>v`
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
  `,...T()},F={render:()=>v`
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
  `,...T()},D={render:()=>v`
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
  `,...T()},U={render:()=>v`
    <mdc-timepicker
      label="Start time"
      value="08:30"
      time-format="12h"
      prefix-icon="recents-bold"
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
  `,...T()},V={render:()=>{const a="08:30";return v`
      <mdc-timepicker
        label="End time"
        value="09:00"
        time-format="12h"
        min="08:30"
        max="17:00"
        .optionLabelFormatter="${(t,o)=>{const[l,r]=a.split(":").map(Number),[d,s]=o.split(":").map(Number),b=d*60+s-(l*60+r);if(b<=0)return t;const y=Math.floor(b/60),f=b%60,g=y>0?`${y}h ${f>0?`${f}m`:""}`.trim():`${f}m`;return`${t} (${g})`}}"
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
    `},...T()},W={render:()=>{const a="08:30";return v`
      <mdc-timepicker
        label="End time"
        value="09:00"
        time-format="12h"
        min="08:30"
        max="17:00"
        prefix-icon="recents-bold"
        .optionLabelFormatter="${(t,o)=>{const[l,r]=a.split(":").map(Number),[d,s]=o.split(":").map(Number),b=d*60+s-(l*60+r);if(b<=0)return t;const y=Math.floor(b/60),f=b%60,g=y>0?`${y}h ${f>0?`${f}m`:""}`.trim():`${f}m`;return`${t} (${g})`}}"
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
    `},...T()};var Y,J,Q;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    value: '08:30',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    interval: 30,
    required: true,
    ...defaultLocaleArgs
  }
}`,...(Q=(J=w.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,ee,te;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    value: '20:30',
    'time-format': TIME_FORMAT.TWENTY_FOUR_HOUR,
    interval: 30,
    required: true,
    ...defaultLocaleArgs
  }
}`,...(te=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,le,ae;$.parameters={...$.parameters,docs:{...(oe=$.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    value: '08:30',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    interval: 15,
    required: true,
    ...defaultLocaleArgs
  }
}`,...(ae=(le=$.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var ie,re,ne;A.parameters={...A.parameters,docs:{...(ie=A.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    value: '08:30',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    required: true,
    'help-text': "Time will be adjusted to attendee's timezone",
    ...defaultLocaleArgs
  }
}`,...(ne=(re=A.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var se,ce,pe;E.parameters={...E.parameters,docs:{...(se=E.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    value: '08:30',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    required: true,
    'help-text': 'Please select a valid time',
    'help-text-type': 'error',
    ...defaultLocaleArgs
  }
}`,...(pe=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var de,me,ue;O.parameters={...O.parameters,docs:{...(de=O.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    value: '08:30',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    required: true,
    'help-text': 'This time may conflict with another event',
    'help-text-type': 'warning',
    ...defaultLocaleArgs
  }
}`,...(ue=(me=O.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var he,be,fe;P.parameters={...P.parameters,docs:{...(he=P.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    value: '08:30',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    required: true,
    'help-text': 'Time confirmed',
    'help-text-type': 'success',
    ...defaultLocaleArgs
  }
}`,...(fe=(be=P.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var ve,ye,ge;I.parameters={...I.parameters,docs:{...(ve=I.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    value: '08:30',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    disabled: true,
    ...defaultLocaleArgs
  }
}`,...(ge=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:ge.source}}};var ke,Te,xe;R.parameters={...R.parameters,docs:{...(ke=R.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    value: '08:30',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    readonly: true,
    ...defaultLocaleArgs
  }
}`,...(xe=(Te=R.parameters)==null?void 0:Te.docs)==null?void 0:xe.source}}};var Me,we,Se;_.parameters={..._.parameters,docs:{...(Me=_.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Se=(we=_.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};var $e,Ae,Ee;L.parameters={...L.parameters,docs:{...($e=L.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Ee=(Ae=L.parameters)==null?void 0:Ae.docs)==null?void 0:Ee.source}}};var Oe,Pe,Ie;H.parameters={...H.parameters,docs:{...(Oe=H.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Ie=(Pe=H.parameters)==null?void 0:Pe.docs)==null?void 0:Ie.source}}};var Re,_e,Le;F.parameters={...F.parameters,docs:{...(Re=F.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Le=(_e=F.parameters)==null?void 0:_e.docs)==null?void 0:Le.source}}};var He,Fe,De;D.parameters={...D.parameters,docs:{...(He=D.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(De=(Fe=D.parameters)==null?void 0:Fe.docs)==null?void 0:De.source}}};var Ue,Ve,We;U.parameters={...U.parameters,docs:{...(Ue=U.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-timepicker
      label="Start time"
      value="08:30"
      time-format="12h"
      prefix-icon="recents-bold"
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
  \`,
  ...hideAllControls()
}`,...(We=(Ve=U.parameters)==null?void 0:Ve.docs)==null?void 0:We.source}}};var Ce,Ne,qe;V.parameters={...V.parameters,docs:{...(Ce=V.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => {
    const startTime = '08:30';
    const formatter = (label: string, value: string) => {
      const [startH, startM] = startTime.split(':').map(Number);
      const [h, m] = value.split(':').map(Number);
      const diffMinutes = h * 60 + m - (startH * 60 + startM);
      if (diffMinutes <= 0) return label;
      const hours = Math.floor(diffMinutes / 60);
      const mins = diffMinutes % 60;
      const duration = hours > 0 ? \`\${hours}h \${mins > 0 ? \`\${mins}m\` : ''}\`.trim() : \`\${mins}m\`;
      return \`\${label} (\${duration})\`;
    };
    return html\`
      <mdc-timepicker
        label="End time"
        value="09:00"
        time-format="12h"
        min="08:30"
        max="17:00"
        .optionLabelFormatter="\${formatter}"
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
    \`;
  },
  ...hideAllControls()
}`,...(qe=(Ne=V.parameters)==null?void 0:Ne.docs)==null?void 0:qe.source}}};var Be,Ke,ze;W.parameters={...W.parameters,docs:{...(Be=W.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => {
    const startTime = '08:30';
    const formatter = (label: string, value: string) => {
      const [startH, startM] = startTime.split(':').map(Number);
      const [h, m] = value.split(':').map(Number);
      const diffMinutes = h * 60 + m - (startH * 60 + startM);
      if (diffMinutes <= 0) return label;
      const hours = Math.floor(diffMinutes / 60);
      const mins = diffMinutes % 60;
      const duration = hours > 0 ? \`\${hours}h \${mins > 0 ? \`\${mins}m\` : ''}\`.trim() : \`\${mins}m\`;
      return \`\${label} (\${duration})\`;
    };
    return html\`
      <mdc-timepicker
        label="End time"
        value="09:00"
        time-format="12h"
        min="08:30"
        max="17:00"
        prefix-icon="recents-bold"
        .optionLabelFormatter="\${formatter}"
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
    \`;
  },
  ...hideAllControls()
}`,...(ze=(Ke=W.parameters)==null?void 0:Ke.docs)==null?void 0:ze.source}}};const Ct=["Example","TwentyFourHourFormat","FifteenMinuteInterval","WithHelpText","ErrorState","WarningState","SuccessState","Disabled","Readonly","WithMinMax","StretchedWidth","StartAndEndTime","Localized","VerticalLayout","WithPrefixIcon","WithOptionLabelFormatter","WithPrefixIconAndFormatter"];export{I as Disabled,E as ErrorState,w as Example,$ as FifteenMinuteInterval,F as Localized,R as Readonly,H as StartAndEndTime,L as StretchedWidth,P as SuccessState,S as TwentyFourHourFormat,D as VerticalLayout,O as WarningState,A as WithHelpText,_ as WithMinMax,V as WithOptionLabelFormatter,U as WithPrefixIcon,W as WithPrefixIconAndFormatter,Ct as __namedExportsOrder,Wt as default};
