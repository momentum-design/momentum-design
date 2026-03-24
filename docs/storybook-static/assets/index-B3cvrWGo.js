import"./index-BcEEePcu.js";import{u as ce,a2 as ue,am as he,al as me,k as p,B as F,h as N,C as q,a4 as E,n as m}from"./iframe-q5YgjDld.js";import{R as J}from"./class-map-CbMcLV6r.js";import{K as ye,a as ge,b as Q,A as g}from"./KeyDownHandledMixin-C-TUEG1Q.js";function y(a){const e=a.getFullYear(),t=String(a.getMonth()+1).padStart(2,"0"),r=String(a.getDate()).padStart(2,"0");return`${e}-${t}-${r}`}function o(a){if(!a||!/^\d{4}-\d{2}-\d{2}$/.test(a))return null;const e=a.split("-"),t=parseInt(e[0],10),r=parseInt(e[1],10),n=parseInt(e[2],10),s=new Date(t,r-1,n);return s.getFullYear()!==t||s.getMonth()!==r-1||s.getDate()!==n?null:s}function f(a,e,t=1){return new Date(a,e-1,t)}function v(){const a=new Date;return new Date(a.getFullYear(),a.getMonth(),a.getDate())}function h(a,e){const t=new Date(a);return t.setDate(t.getDate()+e),t}function C(a,e){const t=a.getMonth()+e,r=new Date(a.getFullYear(),t,1),n=new Date(r.getFullYear(),r.getMonth()+1,0).getDate();return r.setDate(Math.min(a.getDate(),n)),r}function X(a,e){const t=a.getFullYear()+e,r=new Date(t,a.getMonth(),1),n=new Date(r.getFullYear(),r.getMonth()+1,0).getDate();return r.setDate(Math.min(a.getDate(),n)),r}function L(a,e){return a.getFullYear()===e.getFullYear()&&a.getMonth()===e.getMonth()&&a.getDate()===e.getDate()}function w(a,e){return a.getTime()<e.getTime()}function x(a,e){return a.getTime()>e.getTime()}function O(a,e){return a.getTime()<=e.getTime()}function pe(a){return new Date(a.getFullYear(),a.getMonth(),1)}function Z(a){return new Date(a.getFullYear(),a.getMonth()+1,0)}function Ge(a,e){return new Date(a,e,0).getDate()}function fe(a){const e=a.getDay();return e===0?7:e}function G(a,e=1){const t=a.getDay(),s=((t===0?7:t)-(e===7?7:e)+7)%7;return h(a,-s)}function be(a,e="narrow"){const t=new Intl.DateTimeFormat(a,{weekday:e}),r=new Date(2026,0,5),n=[];for(let s=0;s<7;s+=1)n.push(t.format(h(r,s)));return n}function M(a){var n;try{const s=new Intl.Locale(a),d=s.weekInfo??((n=s.getWeekInfo)==null?void 0:n.call(s));if(d!=null&&d.firstDay)return d.firstDay}catch{}const e=["en","ja","ko","zh","pt-BR"],t=a.split("-")[0].toLowerCase(),r=a.toLowerCase();return e.includes(t)||e.includes(r)?7:1}function De(a,e,t){const r=f(a,e,1);return new Intl.DateTimeFormat(t,{month:"long",year:"numeric"}).format(r)}function ve(a,e){const t=o(a);return t?new Intl.DateTimeFormat(e,{dateStyle:"full"}).format(t):""}function A(a,e){const t=o(a);return t?new Intl.DateTimeFormat(e,{dateStyle:"medium"}).format(t):""}function we(a,e,t){const r=o(a),n=o(e);if(!r||!n)return"";try{return new Intl.DateTimeFormat(t,{year:"numeric",month:"long",day:"numeric"}).formatRange(r,n)}catch{return`${A(a,t)} – ${A(e,t)}`}}function Ae(a){const t=new Intl.DateTimeFormat(a,{year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date(2e3,11,31)),r=[];let n="/";for(const s of t)s.type==="month"&&!r.includes("month")&&r.push("month"),s.type==="day"&&!r.includes("day")&&r.push("day"),s.type==="year"&&!r.includes("year")&&r.push("year"),s.type==="literal"&&s.value.trim()&&(n=s.value.trim());return r.length!==3?{order:["month","day","year"],separator:n}:{order:r,separator:n}}const Me=ce.constructTagName("calendar"),u={SINGLE:"single",WEEK:"week",RANGE:"range"},ee={CHEVRON_LEFT:"arrow-left-bold",CHEVRON_RIGHT:"arrow-right-bold"},Ee=6,te=7,ae={SELECTION_MODE:u.SINGLE,LOCALE:"en-US"},xe=ue`
  :host {
    --mdc-calendar-background-color: var(--mds-color-theme-background-solid-primary-normal);
    --mdc-calendar-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-calendar-header-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-calendar-day-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-calendar-day-hover-bg: var(--mds-color-theme-background-primary-hover);
    --mdc-calendar-day-selected-bg: var(--mds-color-theme-background-accent-active);
    --mdc-calendar-day-selected-text-color: var(--mds-color-theme-inverted-text-primary-normal);
    --mdc-calendar-day-today-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-calendar-day-outside-month-text-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-calendar-day-disabled-text-color: var(--mds-color-theme-text-primary-disabled);
    --mdc-calendar-range-bg: var(--mds-color-theme-background-accent-active);

    display: flex;
    flex-direction: column;
    background: var(--mdc-calendar-background-color);
    padding: 0.75rem;
    width: 17.5rem;
    border-radius: 0.5rem;
    overflow: hidden;
  }

  .calendar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    padding-block: 0.5rem;
    padding-inline-start: 0.75rem;
    padding-inline-end: 0;
  }

  .calendar-header mdc-text {
    color: var(--mdc-calendar-header-text-color);
  }

  .calendar-header-nav {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  :host(:dir(rtl)) .calendar-header-nav mdc-button {
    transform: rotate(180deg);
  }

  .calendar-weekday {
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: var(--mds-font-apps-body-small-regular-font-weight);
    color: var(--mdc-calendar-day-outside-month-text-color);
    padding: 0.25rem 0;
    text-align: center;
  }

  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-auto-rows: 1.75rem;
    row-gap: 0.125rem;
    outline: none;
  }

  .calendar-row {
    display: contents;
  }

  .calendar-day-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible;
    position: relative;
  }

  .calendar-day-wrapper.in-range {
    background: var(--mdc-calendar-range-bg);
    border-top: 1px solid var(--mdc-calendar-day-selected-bg);
    border-bottom: 1px solid var(--mdc-calendar-day-selected-bg);
  }

  .calendar-day-wrapper.range-start,
  .calendar-day-wrapper.in-range:first-child {
    border-start-start-radius: 1.125rem;
    border-end-start-radius: 1.125rem;
    border-inline-start: 1px solid var(--mdc-calendar-day-selected-bg);
  }

  .calendar-day-wrapper.range-end,
  .calendar-day-wrapper.in-range:last-child {
    border-start-end-radius: 1.125rem;
    border-end-end-radius: 1.125rem;
    border-inline-end: 1px solid var(--mdc-calendar-day-selected-bg);
  }

  .calendar-day {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.75rem;
    height: 1.75rem;
    font-size: 0.875rem;
    line-height: 0.75rem;
    color: var(--mdc-calendar-day-text-color);
    border: none;
    background: transparent;
    cursor: pointer;
    border-radius: 50%;
    padding: 0;
    position: relative;
    outline: none;
    font-family: inherit;
    box-sizing: border-box;
  }

  .calendar-day:hover:not(.disabled):not(.outside-month):not(.selected) {
    background: var(--mdc-calendar-day-hover-bg);
  }

  .calendar-day:focus-visible,
  .calendar-day.focused {
    outline: none;
    z-index: 1;
    box-shadow: ${he};
  }

  @media (forced-colors: active) {
    .calendar-day:focus-visible,
    .calendar-day.focused {
      outline: 0.125rem solid var(--mds-color-theme-focus-default-0);
    }
  }

  .calendar-day.outside-month {
    color: var(--mdc-calendar-day-outside-month-text-color);
  }

  .calendar-day.today {
    border: 1px solid var(--mdc-calendar-day-today-border-color);
  }

  .calendar-day.selected {
    background: var(--mdc-calendar-day-selected-bg);
    color: var(--mdc-calendar-day-selected-text-color);
    font-weight: var(--mds-font-apps-body-small-bold-font-weight);
  }

  .calendar-day.selected.today {
    border-color: transparent;
  }

  .calendar-day-wrapper.in-range .calendar-day.today {
    border-color: var(--mdc-calendar-day-selected-text-color);
  }

  .calendar-day-wrapper.in-range .calendar-day {
    color: var(--mdc-calendar-day-selected-text-color);
    font-weight: var(--mds-font-apps-body-small-bold-font-weight);
  }

  .calendar-day.disabled {
    color: var(--mdc-calendar-day-disabled-text-color);
    cursor: not-allowed;
    pointer-events: none;
  }

  .calendar-today-button {
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
  }

  .calendar-today-button mdc-button {
    width: auto;
  }
`,Se=[me,xe];function ke(a){const e=be(a,"narrow"),t=M(a),r=t===7?6:t-1;return r===0?e:[...e.slice(r),...e.slice(0,r)]}function Te(a,e,t,r,n,s,d,b){const H=f(a,e,1),ne=v(),V=M(t),S=fe(H);let D;V===7?D=S===7?0:S:(D=S-V,D<0&&(D+=7));const se=h(H,-D),_=d?o(d):void 0,W=b?o(b):void 0,k=n?o(n):void 0,T=s?o(s):void 0,oe=new Set(r),K=[];for(let $=0;$<Ee;$+=1){const I=[];for(let Y=0;Y<te;Y+=1){const c=h(se,$*te+Y),B=y(c),ie=c.getMonth()+1===e&&c.getFullYear()===a,de=L(c,ne),le=oe.has(B);let R=!1;_&&w(c,_)&&(R=!0),W&&x(c,W)&&(R=!0);let z=!1,j=!1,U=!1;k&&T&&(j=L(c,k),U=L(c,T),z=O(k,c)&&O(c,T)),I.push({date:B,day:c.getDate(),isCurrentMonth:ie,isToday:de,isSelected:le,isInRange:z,isRangeStart:j,isRangeEnd:U,isDisabled:R})}K.push({days:I})}return K}function $e(a,e){const t=o(a);if(!t)return{start:"",end:""};const r=G(t,M(e)),n=h(r,6);return{start:y(r),end:y(n)}}function re(a,e,t){return De(a,e,t)}function Ye(a,e){const t=o(a),r=o(e);if(!t||!r)return[];const n=[];let s=t;for(;O(s,r);)n.push(y(s)),s=h(s,1);return n}function Pe(a,e){return A(a,e)}function Re(a,e,t){return we(a,e,t)}var Fe=Object.defineProperty,l=(a,e,t,r)=>{for(var n=void 0,s=a.length-1,d;s>=0;s--)(d=a[s])&&(n=d(e,t,n)||n);return n&&Fe(e,t,n),n};const P=class P extends ye(ge(q)){constructor(){super(...arguments),this.value="",this.endValue="",this.selectionMode=ae.SELECTION_MODE,this.locale=ae.LOCALE,this.showTodayButton=!1,this.localeTodayLabel="",this.localePrevMonthLabel="",this.localeNextMonthLabel="",this.displayMonth=new Date().getMonth()+1,this.displayYear=new Date().getFullYear(),this.focusedDate="",this.gridHasFocus=!1,this.rangeSelectionPhase="start"}connectedCallback(){super.connectedCallback(),this.initializeDisplay()}willUpdate(e){if(super.willUpdate(e),e.has("selectionMode")&&(this.rangeSelectionPhase="start"),e.has("value")&&this.value){const t=o(this.value);t&&(this.displayMonth=t.getMonth()+1,this.displayYear=t.getFullYear())}}initializeDisplay(){if(this.value){const s=o(this.value);if(s){this.displayMonth=s.getMonth()+1,this.displayYear=s.getFullYear(),this.focusedDate=this.value;return}}const e=v(),t=this.min?o(this.min):void 0,r=this.max?o(this.max):void 0;let n=e;t&&w(e,t)?n=t:r&&x(e,r)&&(n=r),this.displayMonth=n.getMonth()+1,this.displayYear=n.getFullYear(),this.focusedDate=y(n)}get calendarGrid(){const e=this.getSelectedDates(),t=this.getRangeStart(),r=this.getRangeEnd();return Te(this.displayYear,this.displayMonth,this.locale,e,t,r,this.min,this.max)}getSelectedDates(){return this.value?(this.selectionMode===u.WEEK||this.selectionMode===u.RANGE)&&this.value&&this.endValue?Ye(this.value,this.endValue):[this.value]:[]}getRangeStart(){if((this.selectionMode===u.WEEK||this.selectionMode===u.RANGE)&&this.value)return this.value}getRangeEnd(){if((this.selectionMode===u.WEEK||this.selectionMode===u.RANGE)&&this.endValue)return this.endValue}canNavigatePrev(){if(!this.min)return!0;const e=f(this.displayYear,this.displayMonth,1),t=o(this.min);return t?x(e,pe(t)):!0}canNavigateNext(){if(!this.max)return!0;const e=Z(f(this.displayYear,this.displayMonth,1)),t=o(this.max);return t?w(e,Z(t)):!0}navigateMonth(e){if(e<0&&!this.canNavigatePrev()||e>0&&!this.canNavigateNext())return;const t=C(f(this.displayYear,this.displayMonth,1),e);this.displayMonth=t.getMonth()+1,this.displayYear=t.getFullYear(),this.focusedDate=y(f(this.displayYear,this.displayMonth,1)),this.dispatchEvent(new CustomEvent("month-changed",{detail:{month:this.displayMonth,year:this.displayYear},bubbles:!0,composed:!0}))}handleDayClick(e){e.isDisabled||this.selectDate(e.date)}selectDate(e){switch(this.selectionMode){case u.SINGLE:{this.value=e,this.focusedDate=e,this.dispatchDateSelected(e);break}case u.WEEK:{const{start:t,end:r}=$e(e,this.locale);this.value=t,this.endValue=r,this.focusedDate=e,this.dispatchEvent(new CustomEvent("date-selected",{detail:{date:e,startDate:t,endDate:r},bubbles:!0,composed:!0}));break}case u.RANGE:{if(this.rangeSelectionPhase==="start")this.value=e,this.endValue="",this.rangeSelectionPhase="end",this.focusedDate=e;else{const t=o(this.value),r=o(e);t&&r&&w(r,t)?(this.endValue=this.value,this.value=e):this.endValue=e,this.rangeSelectionPhase="start",this.focusedDate=e,this.dispatchEvent(new CustomEvent("date-selected",{detail:{date:e,startDate:this.value,endDate:this.endValue},bubbles:!0,composed:!0}))}break}}}dispatchDateSelected(e){this.dispatchEvent(new CustomEvent("date-selected",{detail:{date:e},bubbles:!0,composed:!0}))}handleGridKeydown(e){const t=this.focusedDate?o(this.focusedDate):v();if(!t)return;const r=this.getActionForKeyEvent(e);let n;switch(r){case g.LEFT:e.preventDefault(),n=h(t,-1);break;case g.RIGHT:e.preventDefault(),n=h(t,1);break;case g.UP:e.preventDefault(),n=h(t,-7);break;case g.DOWN:e.preventDefault(),n=h(t,7);break;case g.HOME:{e.preventDefault();const s=M(this.locale);n=G(t,s);break}case g.END:{e.preventDefault();const s=M(this.locale);n=h(G(t,s),6);break}case g.ENTER:case g.SPACE:e.preventDefault(),this.keyDownEventHandled(),this.focusedDate&&!this.isDateDisabled(this.focusedDate)&&this.selectDate(this.focusedDate);return;default:if(e.key===Q.PAGE_UP){e.preventDefault(),n=e.shiftKey?X(t,-1):C(t,-1);break}if(e.key===Q.PAGE_DOWN){e.preventDefault(),n=e.shiftKey?X(t,1):C(t,1);break}return}if(this.keyDownEventHandled(),n){const s=y(n);if(this.isDateDisabled(s))return;this.focusedDate=s,(n.getMonth()+1!==this.displayMonth||n.getFullYear()!==this.displayYear)&&(this.displayMonth=n.getMonth()+1,this.displayYear=n.getFullYear()),this.updateComplete.then(()=>{var b;const d=(b=this.shadowRoot)==null?void 0:b.querySelector(`[data-date="${s}"]`);d==null||d.focus()}).catch(()=>{})}}getGridAriaLabel(){return this.selectionMode===u.WEEK&&this.value&&this.endValue?`Calendar, ${Re(this.value,this.endValue,this.locale)}`:`Calendar, ${re(this.displayYear,this.displayMonth,this.locale)}`}renderHeader(){const e=re(this.displayYear,this.displayMonth,this.locale),t=!this.canNavigatePrev(),r=!this.canNavigateNext();return p`
      <div class="calendar-header">
        <mdc-text type="body-midsize-bold" tagname="span">${e}</mdc-text>
        <div class="calendar-header-nav">
          <mdc-button
            variant="${F.TERTIARY}"
            prefix-icon="${ee.CHEVRON_LEFT}"
            aria-label="${this.localePrevMonthLabel}"
            size="24"
            ?disabled="${t}"
            @click="${()=>this.navigateMonth(-1)}"
          ></mdc-button>
          <mdc-button
            variant="${F.TERTIARY}"
            prefix-icon="${ee.CHEVRON_RIGHT}"
            aria-label="${this.localeNextMonthLabel}"
            size="24"
            ?disabled="${r}"
            @click="${()=>this.navigateMonth(1)}"
          ></mdc-button>
        </div>
      </div>
    `}renderDay(e){const t=e.date===this.focusedDate,r={"calendar-day":!0,"outside-month":!e.isCurrentMonth,today:e.isToday,selected:e.isSelected&&!e.isInRange,disabled:e.isDisabled,focused:t&&this.gridHasFocus},n={"calendar-day-wrapper":!0,"in-range":e.isInRange,"range-start":e.isRangeStart,"range-end":e.isRangeEnd},s=t?0:-1,d=e.isSelected||e.isInRange;return p`
      <div class="${J(n)}">
        <button
          class="${J(r)}"
          role="gridcell"
          tabindex="${s}"
          data-date="${e.date}"
          aria-selected="${d?"true":"false"}"
          aria-disabled="${e.isDisabled?"true":N}"
          aria-current="${e.isToday?"date":N}"
          aria-label="${ve(e.date,this.locale)}"
          @click="${()=>this.handleDayClick(e)}"
        >
          ${e.day}
        </button>
      </div>
    `}handleGridFocusIn(){this.gridHasFocus=!0}handleGridFocusOut(){this.gridHasFocus=!1}renderGrid(){const e=this.calendarGrid,t=ke(this.locale);return p`
      <div
        class="calendar-grid"
        role="grid"
        aria-label="${this.getGridAriaLabel()}"
        @keydown="${this.handleGridKeydown}"
        @focusin="${this.handleGridFocusIn}"
        @focusout="${this.handleGridFocusOut}"
      >
        <div class="calendar-row calendar-weekdays" role="row">
          ${t.map(r=>p`<span class="calendar-weekday" role="columnheader">${r}</span>`)}
        </div>
        ${e.map(r=>p` <div class="calendar-row" role="row">${r.days.map(n=>this.renderDay(n))}</div> `)}
      </div>
    `}isDateDisabled(e){const t=o(e);if(!t)return!0;const r=this.min?o(this.min):void 0,n=this.max?o(this.max):void 0;return!!(r&&w(t,r)||n&&x(t,n))}isTodayDisabled(){return this.isDateDisabled(y(v()))}handleTodayClick(){const e=v(),t=y(e);this.displayMonth=e.getMonth()+1,this.displayYear=e.getFullYear(),this.selectDate(t)}renderTodayButton(){if(!this.showTodayButton)return N;const e=this.isTodayDisabled();return p`
      <div class="calendar-today-button">
        <mdc-button
          variant="${F.TERTIARY}"
          aria-label="${this.localeTodayLabel}"
          size="24"
          ?disabled="${e}"
          @click="${this.handleTodayClick}"
          >${this.localeTodayLabel}</mdc-button
        >
      </div>
    `}render(){return p` ${this.renderHeader()} ${this.renderGrid()} ${this.renderTodayButton()} `}};P.styles=[...q.styles,...Se];let i=P;l([m({type:String,reflect:!0})],i.prototype,"value");l([m({type:String,reflect:!0,attribute:"end-value"})],i.prototype,"endValue");l([m({type:String,reflect:!0,attribute:"selection-mode"})],i.prototype,"selectionMode");l([m({type:String,reflect:!0})],i.prototype,"locale");l([m({type:String,reflect:!0})],i.prototype,"min");l([m({type:String,reflect:!0})],i.prototype,"max");l([m({type:Boolean,reflect:!0,attribute:"show-today-button"})],i.prototype,"showTodayButton");l([m({type:String,attribute:"locale-today-label"})],i.prototype,"localeTodayLabel");l([m({type:String,attribute:"locale-prev-month-label"})],i.prototype,"localePrevMonthLabel");l([m({type:String,attribute:"locale-next-month-label"})],i.prototype,"localeNextMonthLabel");l([E()],i.prototype,"displayMonth");l([E()],i.prototype,"displayYear");l([E()],i.prototype,"focusedDate");l([E()],i.prototype,"gridHasFocus");l([E()],i.prototype,"rangeSelectionPhase");i.register(Me);export{u as S,x as a,$e as b,f as c,Ge as d,Pe as e,Re as f,Ae as g,w as i,o as p,y as t};
