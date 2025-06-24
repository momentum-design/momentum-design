import"./index-xtIShB-p.js";import"./index-Cotu0jE8.js";import"./index-CdEWBYL6.js";import{T as O,V as y}from"./index-D1yLszQ-.js";import"./index-fne2UIX8.js";import{i as P,k as n,D as b}from"./lit-element-D5KKan5q.js";import{u as T,n as p}from"./index-C9z9WAEj.js";import{r as c}from"./state-CSSggq2n.js";import{e as $}from"./query-DXShiZ7f.js";import{o as R}from"./query-assigned-elements-uEuc3rg8.js";import{t as v}from"./if-defined-D5BV9-c0.js";import{K as r}from"./listitem.component-BP6_bvq3.js";import{D as V}from"./DataAriaLabelMixin-D53Z5CZ7.js";import{F as D}from"./FormInternalsMixin-CqDKsEWP.js";import{R as g}from"./roles-BH_hBfTz.js";import{D as k,V as I,F as f}from"./formfieldwrapper.component-B1RGcmSz.js";import{T as E}from"./optgroup.constants-CwoRKCZY.js";import{T as x}from"./index-CYT4ZVrD.js";import{P as w}from"./popover.component-q_n7VcSj.js";import{h as N}from"./index-MA1r3zrt.js";const C=T.constructTagName("select"),h={ARROW_UP:"arrow-up-bold",ARROW_DOWN:"arrow-down-bold"},A="select-base-triggerid",_=P`
  :host {
    --mdc-select-background-color: var(--mds-color-theme-background-primary-ghost);
    --mdc-select-icon-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-select-base-text-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-select-selected-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-select-disabled-border-color: var(--mds-color-theme-outline-primary-disabled);
    --mdc-select-disabled-background-color: var(--mds-color-theme-background-input-disabled);
    --mdc-select-disabled-text-color: var(--mds-color-theme-text-primary-disabled);
    --mdc-select-error-border-color: var(--mds-color-theme-text-error-normal);
    --mdc-select-warning-border-color: var(--mds-color-theme-text-warning-normal);
    --mdc-select-success-border-color: var(--mds-color-theme-text-success-normal);
    --mdc-select-background-hover: var(--mds-color-theme-background-primary-hover);
    --mdc-select-background-active: var(--mds-color-theme-background-primary-active);

    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    align-items: unset;
    width: unset;
  }
  :host::part(native-select) {
    margin: 0;
    opacity: 0.1%;
    overflow: visible;
    padding: 0;
    position: absolute;
    width: 100%;
    height: 0;
    z-index: -1;
  }
  :host::part(container) {
    width: 100%;
    position: relative;
  }
  :host::part(base-container) {
    border-radius: 0.5rem;
    padding: 5.5px 6px 5.5px 12px;
    border: 1px solid var(--mdc-select-icon-border-color);
    background: var(--mdc-select-background-color);
    display: flex;
    gap: 0.375rem;
    align-items: center;
    user-select: none;
  }
  :host::part(base-container):hover {
    background-color: var(--mdc-select-background-hover);
  }
  :host::part(base-container):active {
    background-color: var(--mdc-select-background-active);
  }
  :host::part(base-text) {
    height: 1.3125rem;
    width: 100%;
    color: var(--mdc-select-base-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  :host::part(selected) {
    color: var(--mdc-select-selected-text-color);
  }
  :host::part(selected-icon) {
    flex-shrink: 0;
  }
  :host::part(icon-container) {
    margin-left: auto;
    display: flex;
    padding: 2px;
  }
  :host([readonly])::part(icon-container) {
    color: var(--mdc-select-disabled-text-color);
  }
  :host::part(popover-content) {
    min-width: auto;
    overflow: scroll;
  }
  :host([disabled])::part(base-container),
  :host([readonly])::part(base-container),
  :host([help-text-type="success"][disabled])::part(base-container),
  :host([help-text-type="error"][disabled])::part(base-container),
  :host([help-text-type="warning"][disabled])::part(base-container),
  :host([help-text-type="success"][readonly])::part(base-container),
  :host([help-text-type="error"][readonly])::part(base-container),
  :host([help-text-type="warning"][readonly])::part(base-container) {
    border-color: var(--mdc-select-disabled-border-color);
    background: var(--mdc-select-disabled-background-color);
  }
  :host([disabled]:hover)::part(base-container),
  :host([readonly]:hover)::part(base-container) {
    background-color: unset;
  }
  :host([readonly])::part(base-text) {
    color: var(--mdc-select-selected-text-color);
  }
  :host([disabled])::part(base-text) {
    color: var(--mdc-select-disabled-text-color);
  }
  :host([help-text-type="success"])::part(base-container) {
    border-color: var(--mdc-select-success-border-color);
  }
  :host([help-text-type="error"])::part(base-container) {
    border-color: var(--mdc-select-error-border-color);
  }
  :host([help-text-type="warning"])::part(base-container) {
    border-color: var(--mdc-select-warning-border-color);
  }
`,F=[_,...N(!0)];var S=Object.defineProperty,l=(m,e,t,a)=>{for(var s=void 0,o=m.length-1,d;o>=0;o--)(d=m[o])&&(s=d(e,t,s)||s);return s&&S(e,t,s),s};const u=class u extends D(V(f)){constructor(){super(...arguments),this.readonly=!1,this.height="auto",this.baseIconName=h.ARROW_DOWN,this.selectedValue="",this.displayPopover=!1,this.activeDescendant=""}connectedCallback(){super.connectedCallback(),this.value=void 0}getAllValidOptions(){var e;return((e=this.optionsList)==null?void 0:e.map(t=>t.tagName.toLowerCase()===x?t:t.tagName.toLowerCase()===E?Array.from(t.children).filter(a=>a.tagName.toLowerCase()===x):[]).flat())||[]}handlePopoverOpen(){this.displayPopover=!0,this.baseIconName=h.ARROW_UP,this.updateActivedescendant()}handlePopoverClose(){this.displayPopover=!1,this.baseIconName=h.ARROW_DOWN}updateTabIndexForAllOptions(e){var a;let t=!1;this.getAllValidOptions().forEach(s=>{s===e?(this.setSelectedValue(s),t=!0,s.setAttribute("selected",""),s.setAttribute("tabindex","0")):(s==null||s.setAttribute("tabindex","-1"),s==null||s.removeAttribute("selected"))}),t||(a=this.getAllValidOptions()[0])==null||a.setAttribute("tabindex","0")}handleOptionsClick(e){this.updateTabIndexForAllOptions(e.target)}setSelectedValue(e){this.selectedValueText=(e==null?void 0:e.getAttribute("label"))??(e==null?void 0:e.textContent)??"",this.selectedIcon=e==null?void 0:e.getAttribute("prefix-icon"),this.selectedValue=(e==null?void 0:e.getAttribute("value"))??(e==null?void 0:e.textContent)??"",this.internals.setFormValue(this.selectedValue),this.manageRequired(),this.dispatchChange(this.selectedValue)}manageRequired(){!this.selectedValue&&this.required?(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()):this.internals.setValidity({})}formResetCallback(){this.selectedValue="",this.selectedValueText=void 0,this.selectedIcon=null,this.internals.setFormValue(this.selectedValue),this.updateTabIndexForAllOptions()}formStateRestoreCallback(e){this.selectedValue=e,this.selectedValueText=e}dispatchChange(e){e&&this.dispatchEvent(new CustomEvent("change",{detail:{value:e},composed:!0,bubbles:!0}))}handlePopoverOnOpen(e){var t;switch(e.key){case r.TAB:{const a=this.getAllValidOptions().findIndex(s=>s===e.target);this.setFocusAndTabIndex(a),e.preventDefault();break}case r.SPACE:this.updateTabIndexForAllOptions(e.target),this.closePopover(),e.preventDefault();break;case r.ENTER:this.updateTabIndexForAllOptions(e.target),this.closePopover(),e.preventDefault(),(t=this.form)==null||t.requestSubmit();break;case r.HOME:this.setFocusAndTabIndex(0),e.preventDefault();break;case r.END:this.setFocusAndTabIndex(this.getAllValidOptions().length-1),e.preventDefault();break;case r.ARROW_DOWN:case r.ARROW_UP:case r.PAGE_DOWN:case r.PAGE_UP:this.handleOptionsNavigation(e),e.preventDefault();break}}handlePopoverOnClose(e){switch(e.key){case r.ARROW_DOWN:case r.ARROW_UP:case r.ENTER:case r.SPACE:this.openPopover(),e.preventDefault();break;case r.HOME:this.openPopover(),this.setFocusAndTabIndex(0),e.preventDefault();break;case r.END:this.openPopover(),this.setFocusAndTabIndex(this.getAllValidOptions().length-1),e.preventDefault();break}}handleOptionsNavigation(e){const t=this.getAllValidOptions(),a=t.findIndex(o=>o===e.target),s=this.getNewIndexBasedOnKey(e.key,a,t.length);s!==-1&&(this.setFocusAndTabIndex(s),e.preventDefault())}getNewIndexBasedOnKey(e,t,a){return e===r.ARROW_DOWN&&t!==a-1?t+1:e===r.ARROW_UP&&t>0?t-1:e===r.PAGE_DOWN?t+10>a?a-1:t+10:e===r.PAGE_UP?t-10<0?0:t-10:-1}updateActivedescendant(e){var a,s;const t=this.getAllValidOptions();if(e){const o=t.findIndex(d=>d===e);this.activeDescendant=((a=t[o])==null?void 0:a.id)??""}else{const o=t.find(d=>d.getAttribute("tabindex")==="0");this.activeDescendant=(o==null?void 0:o.id)??((s=t[0])==null?void 0:s.id)??""}}resetActivedescendant(){this.activeDescendant=""}setFocusAndTabIndex(e){const t=this.getAllValidOptions(),a=t[e];a&&(a.focus(),t.forEach((s,o)=>{const d=e===o?"0":"-1";s==null||s.setAttribute("tabindex",d)}),this.activeDescendant=a.id??"")}openPopover(){var s;this.displayPopover=!0;const e=this.getAllValidOptions(),t=e.find(o=>o.hasAttribute("selected")),a=e.find(o=>o.getAttribute("tabindex")==="0");this.activeDescendant=((s=t||a||e[0])==null?void 0:s.id)??""}closePopover(){this.displayPopover=!1,this.resetActivedescendant()}firstUpdated(){const e=this.getAllValidOptions(),t=e.findIndex(a=>a==null?void 0:a.hasAttribute("selected"));t!==-1?(this.setSelectedValue(e[t]),this.updateTabIndexForAllOptions(e[t])):this.placeholder?this.placeholder&&this.manageRequired():(this.setSelectedValue(e[0]),this.updateTabIndexForAllOptions())}getNativeSelect(){return n`
      <select
        part="native-select"
        id="${this.id}"
        tabindex="-1"
        aria-hidden="true"
        name="${this.name}"
        size="1"
        .value="${this.selectedValue}"
        ?autofocus="${this.autofocus}"
        ?disabled="${this.disabled}"
        ?required="${this.required}"
        @mousedown="${e=>e.preventDefault()}"
      >
        ${this.getOptionsContentFromSlot()}
      </select>
    `}getOptionsContentFromSlot(){return this.getAllValidOptions().map(e=>n`
        <option
          part="native-select"
          value="${e.getAttribute("value")??""}"
          label="${e.getAttribute("label")??""}"
          ?disabled="${!!e.hasAttribute("disabled")}"
          ?selected="${!!e.hasAttribute("selected")}"
        >
          ${e.textContent}
        </option>
    `)}getPopoverContent(){return this.disabled||this.readonly?b:n`
      <mdc-popover
        id="options-popover"
        triggerid="${A}"
        @keydown="${this.handlePopoverOnOpen}"
        interactive
        ?visible="${this.displayPopover}"
        hide-on-outside-click
        hide-on-escape
        focus-back-to-trigger
        focus-trap
        role="${g.LISTBOX}"
        placement="${w.BOTTOM_START}"
        @shown="${this.handlePopoverOpen}"
        @hidden="${this.handlePopoverClose}"
        style="--mdc-popover-max-width: 100%; --mdc-popover-max-height: ${this.height};"
      >
           <slot 
           @click="${this.handleOptionsClick}"></slot>
          </mdc-popover>
    `}updated(e){super.updated(e),(e.has("disabled")||e.has("readonly"))&&(this.closePopover(),this.handlePopoverClose()),e.has("displayPopover")&&(this.displayPopover?this.openPopover():this.closePopover())}render(){return n`
      ${this.renderLabel()}
      <div part="container">
        <div
          id="${A}"
          part="base-container"
          @keydown="${this.handlePopoverOnClose}"
          tabindex="${this.disabled?"-1":"0"}"
          class="${this.disabled?"":"mdc-focus-ring"}"
          role="${g.COMBOBOX}"
          aria-activedescendant="${v(this.activeDescendant||void 0)}"
          aria-controls="${v(this.displayPopover?"options-popover":void 0)}"
          aria-label="${this.dataAriaLabel??""}"
          aria-labelledby="${this.label?k.HEADING_ID:""}"
          aria-expanded="${this.displayPopover?"true":"false"}"
          aria-required="${this.required?"true":"false"}"
          aria-invalid="${this.helpTextType===I.ERROR?"true":"false"}"
        >
      ${this.selectedIcon?n`<mdc-icon length-unit="rem" size="1" name="${this.selectedIcon}" part="selected-icon"></mdc-icon>`:b}
          <mdc-text
            part="base-text ${this.selectedValueText?"selected":""}"
            type="${O.BODY_MIDSIZE_REGULAR}"
            tagname="${y.SPAN}"
          >
            ${this.selectedValueText??this.placeholder}
          </mdc-text>
          <div part="icon-container">
            <mdc-icon size="1" length-unit="rem" name="${this.baseIconName}"></mdc-icon>
          </div>
        </div>
        ${this.getNativeSelect()}
        ${this.getPopoverContent()}
      </div>
      ${this.renderHelperText()}
    `}};u.styles=[...f.styles,...F];let i=u;l([p({type:String})],i.prototype,"placeholder");l([p({type:Boolean})],i.prototype,"readonly");l([p({type:String})],i.prototype,"height");l([R()],i.prototype,"optionsList");l([c()],i.prototype,"baseIconName");l([c()],i.prototype,"selectedValueText");l([c()],i.prototype,"selectedIcon");l([c()],i.prototype,"selectedValue");l([c()],i.prototype,"displayPopover");l([c()],i.prototype,"activeDescendant");l([$("select")],i.prototype,"inputElement");i.register(C);
