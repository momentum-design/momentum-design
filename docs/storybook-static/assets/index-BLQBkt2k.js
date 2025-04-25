import"./index-C6ZUhO09.js";import"./index-BjxoIv0g.js";import"./index-D3DhXfcW.js";import{i as g,k as c,D as x}from"./lit-element-D5KKan5q.js";import{n as h}from"./index-C9z9WAEj.js";import{r as d}from"./state-CSSggq2n.js";import{e as f}from"./query-DXShiZ7f.js";import{o as A}from"./query-assigned-elements-uEuc3rg8.js";import{K as r}from"./keys-CuA-OPmH.js";import{D as y}from"./DataAriaLabelMixin-D53Z5CZ7.js";import{F as O}from"./FormInternalsMixin-CSixOKbK.js";import{D as P,F as m}from"./formfieldwrapper.component-DNKMXI01.js";import{T as k}from"./optgroup.constants-CwoRKCZY.js";import{A as n,T as v,a as V}from"./index-CrXJZaHf.js";import{P as T}from"./popover.component-B7gte4U1.js";import{T as E,V as $}from"./text.constants-ZF0jM5wn.js";import{h as w}from"./index-MA1r3zrt.js";const C=g`
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
    height: 1px;
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
`,D=[C,...w(!0)];var N=Object.defineProperty,i=(b,e,t,a)=>{for(var s=void 0,l=b.length-1,u;l>=0;l--)(u=b[l])&&(s=u(e,t,s)||s);return s&&N(e,t,s),s};const p=class p extends O(y(m)){constructor(){super(...arguments),this.readonly=!1,this.height="auto",this.baseIconName=n.ARROW_DOWN,this.selectedValue="",this.displayPopover=!1,this.activeDescendant="",this.popoverWidth="100%"}connectedCallback(){super.connectedCallback(),this.value=void 0,this.addEventListener("keydown",this.handleKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.handleKeydown)}getAllValidOptions(){var e;return((e=this.optionsList)==null?void 0:e.map(t=>t.tagName.toLowerCase()===v?t:t.tagName.toLowerCase()===k?Array.from(t.children).filter(a=>a.tagName.toLowerCase()===v):[]).flat())||[]}handlePopoverOpen(){this.displayPopover=!0,this.baseIconName=n.ARROW_UP}handlePopoverClose(){this.displayPopover=!1,this.baseIconName=n.ARROW_DOWN}updateTabIndexForAllOptions(e){var a;let t=!1;this.getAllValidOptions().forEach(s=>{s===e?(this.setSelectedValue(s),t=!0,s.setAttribute("selected",""),s.setAttribute("tabindex","0")):(s==null||s.setAttribute("tabindex","-1"),s==null||s.removeAttribute("selected"))}),!t&&((a=this.getAllValidOptions()[0])==null||a.setAttribute("tabindex","0"))}handleOptionsClick(e){this.updateTabIndexForAllOptions(e.target)}setSelectedValue(e){this.selectedValueText=(e==null?void 0:e.getAttribute("label"))??(e==null?void 0:e.textContent)??"",this.selectedValue=(e==null?void 0:e.getAttribute("value"))??(e==null?void 0:e.textContent)??"",this.internals.setFormValue(this.selectedValue),this.manageRequired(),this.dispatchChange(this.selectedValue)}manageRequired(){!this.selectedValue&&this.requiredLabel?(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()):this.internals.setValidity({})}formResetCallback(){this.selectedValue="",this.selectedValueText=void 0,this.internals.setFormValue(this.selectedValue),this.updateTabIndexForAllOptions()}formStateRestoreCallback(e){this.selectedValue=e,this.selectedValueText=e}dispatchChange(e){e&&this.dispatchEvent(new CustomEvent("change",{detail:{value:e},composed:!0,bubbles:!0}))}handleKeydown(e){this.displayPopover?this.handlePopoverOnOpen(e):this.handlePopoverOnClose(e)}handlePopoverOnOpen(e){var t;switch(e.key){case r.SPACE:this.updateTabIndexForAllOptions(e.target),this.closePopover(),e.preventDefault();break;case r.ENTER:this.updateTabIndexForAllOptions(e.target),this.closePopover(),e.preventDefault(),(t=this.form)==null||t.requestSubmit();break;case r.ESCAPE:this.closePopover(),e.stopPropagation();break;case r.HOME:this.setFocusAndTabIndex(0),e.preventDefault();break;case r.END:this.setFocusAndTabIndex(this.getAllValidOptions().length-1),e.preventDefault();break;case r.ARROW_DOWN:case r.ARROW_UP:case r.PAGE_DOWN:case r.PAGE_UP:this.handleOptionsNavigation(e),this.updateActivedescendant(e.target);break}}handlePopoverOnClose(e){switch(e.key){case r.ARROW_DOWN:case r.ARROW_UP:case r.ENTER:case r.SPACE:this.openPopover(),e.preventDefault();break;case r.HOME:this.openPopover(),this.setFocusAndTabIndex(0),e.preventDefault();break;case r.END:this.openPopover(),this.setFocusAndTabIndex(this.getAllValidOptions().length-1),e.preventDefault();break}}handleOptionsNavigation(e){const t=this.getAllValidOptions(),a=t.findIndex(l=>l===e.target),s=this.getNewIndexBasedOnKey(e.key,a,t.length);s!==-1&&(this.setFocusAndTabIndex(s),e.preventDefault())}getNewIndexBasedOnKey(e,t,a){return e===r.ARROW_DOWN&&t!==a-1?t+1:e===r.ARROW_UP&&t>0?t-1:e===r.PAGE_DOWN?t+10>a?a-1:t+10:e===r.PAGE_UP?t-10<0?0:t-10:-1}updateActivedescendant(e){var a;const t=this.getAllValidOptions().findIndex(s=>s===e);this.activeDescendant=((a=this.getAllValidOptions()[t])==null?void 0:a.id)??""}resetActivedescendant(){this.activeDescendant=""}setFocusAndTabIndex(e){var t;(t=this.getAllValidOptions()[e])==null||t.focus(),this.getAllValidOptions().forEach((a,s)=>{const l=e===s?"0":"-1";a==null||a.setAttribute("tabindex",l)})}openPopover(){this.displayPopover=!0,this.resetActivedescendant()}closePopover(){this.displayPopover=!1,this.resetActivedescendant()}firstUpdated(){const e=this.getAllValidOptions(),t=e.findIndex(a=>a==null?void 0:a.hasAttribute("selected"));t!==-1?(this.setSelectedValue(e[t]),this.updateTabIndexForAllOptions(e[t])):this.placeholder?this.placeholder&&this.manageRequired():(this.setSelectedValue(e[0]),this.updateTabIndexForAllOptions())}getNativeSelect(){return c`
      <select
        part="native-select"
        id="${this.id}"
        tabindex="-1"
        name="${this.name}"
        size="1"
        .value="${this.selectedValue}"
        ?autofocus="${this.autofocus}"
        ?disabled="${this.disabled}"
        ?required="${!!this.requiredLabel}"
        @mousedown="${e=>e.preventDefault()}"
      >
        ${this.getOptionsContentFromSlot()}
      </select>
    `}getOptionsContentFromSlot(){return this.getAllValidOptions().map(e=>c`
        <option
          part="native-select"
          value="${e.getAttribute("value")??""}"
          label="${e.getAttribute("label")??""}"
          ?disabled="${!!e.hasAttribute("disabled")}"
          ?selected="${!!e.hasAttribute("selected")}"
        >
          ${e.textContent}
        </option>
    `)}getPopoverContent(){return this.disabled||this.readonly?x:c`
      <mdc-popover
        id="options-popover"
        triggerid="select-base-triggerid"
        interactive
        ?visible="${this.displayPopover}"
        hide-on-outside-click
        focus-back-to-trigger
        focus-trap
        role="listbox"
        placement="${T.BOTTOM_START}"
        @shown="${this.handlePopoverOpen}"
        @hidden="${this.handlePopoverClose}"
        style="--mdc-popover-max-width: ${this.popoverWidth}; --mdc-popover-max-height: ${this.height};"
      >
        <slot @click="${this.handleOptionsClick}"></slot>
      </mdc-popover>
    `}updated(e){super.updated(e),(e.has("disabled")||e.has("readonly"))&&(this.closePopover(),this.handlePopoverClose())}render(){return c`
      ${this.renderLabel()}
      <div part="container">
        <div
          id="select-base-triggerid"
          part="base-container"
          tabindex="${this.disabled?"-1":"0"}"
          class="${this.disabled?"":"mdc-focus-ring"}"
          role="combobox"
          aria-activedescendant="${this.activeDescendant}"
          aria-haspopup="listbox"
          aria-label="${this.dataAriaLabel??""}"
          aria-labelledby="${this.label?P.HEADING_ID:""}"
          aria-expanded="${this.displayPopover?"true":"false"}"
        >
          <mdc-text
            part="base-text ${this.selectedValueText?"selected":""}"
            type="${E.BODY_MIDSIZE_REGULAR}"
            tagname="${$.SPAN}"
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
    `}};p.styles=[...m.styles,...D];let o=p;i([h({type:String})],o.prototype,"placeholder");i([h({type:Boolean})],o.prototype,"readonly");i([h({type:String})],o.prototype,"height");i([A()],o.prototype,"optionsList");i([d()],o.prototype,"baseIconName");i([d()],o.prototype,"selectedValueText");i([d()],o.prototype,"selectedValue");i([d()],o.prototype,"displayPopover");i([d()],o.prototype,"activeDescendant");i([d()],o.prototype,"popoverWidth");i([f("select")],o.prototype,"inputElement");o.register(V);
