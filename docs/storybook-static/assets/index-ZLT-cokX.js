import"./index-Ca0dCGZ7.js";import"./index-BE-lPGGb.js";import"./index-BNzWzLzB.js";import{T as A,V as O}from"./index-BrLJ_9IK.js";import"./index-BzzPYPpO.js";import{i as $,k as h,D as T}from"./lit-element-D5KKan5q.js";import{u as V,n as d}from"./index-C9z9WAEj.js";import{r as c}from"./state-CSSggq2n.js";import{e as D}from"./query-DXShiZ7f.js";import{o as R}from"./query-assigned-elements-uEuc3rg8.js";import{t as p}from"./if-defined-D5BV9-c0.js";import{F as k}from"./live-Cwq7YsO4.js";import{K as r}from"./listitem.component-CBHzYYeL.js";import{D as P}from"./DataAriaLabelMixin-D53Z5CZ7.js";import{F as E}from"./FormInternalsMixin-CqDKsEWP.js";import{R as x}from"./roles-BH_hBfTz.js";import{D as I,V as w,F as v}from"./formfieldwrapper.component-Bto_JnzL.js";import{T as N}from"./optgroup.constants-CwoRKCZY.js";import{T as g}from"./index-CopjEffM.js";import{P as C}from"./popover.component-q7gOo8Yi.js";import{h as _}from"./index-Cx7wvr8C.js";const W=V.constructTagName("select"),b={ARROW_UP:"arrow-up-bold",ARROW_DOWN:"arrow-down-bold"},u="select-base-triggerid",y="select-listbox",F=$`
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
  :host::part(popover-content) {
    min-width: auto;
    overflow-y: auto;
  }

  /* Help text border colors */
  :host([help-text-type='success'])::part(base-container) {
    border-color: var(--mdc-select-success-border-color);
  }
  :host([help-text-type='error'])::part(base-container) {
    border-color: var(--mdc-select-error-border-color);
  }
  :host([help-text-type='warning'])::part(base-container) {
    border-color: var(--mdc-select-warning-border-color);
  }

  /* Disabled, readonly, soft-disabled */
  :host([disabled])::part(base-container),
  :host([soft-disabled])::part(base-container),
  :host([readonly])::part(base-container),
  :host([help-text-type='success'][disabled])::part(base-container),
  :host([help-text-type='error'][disabled])::part(base-container),
  :host([help-text-type='warning'][disabled])::part(base-container),
  :host([help-text-type='success'][readonly])::part(base-container),
  :host([help-text-type='error'][readonly])::part(base-container),
  :host([help-text-type='warning'][readonly])::part(base-container) {
    border-color: var(--mdc-select-disabled-border-color);
    background: var(--mdc-select-disabled-background-color);
  }
  :host([readonly])::part(base-text) {
    color: var(--mdc-select-selected-text-color);
  }
  :host([disabled])::part(base-text),
  :host([soft-disabled])::part(base-text) {
    color: var(--mdc-select-disabled-text-color);
  }
  :host([soft-disabled])::part(icon-container),
  :host([readonly])::part(icon-container) {
    color: var(--mdc-select-disabled-text-color);
  }
`,L=[F,..._(!0)];var S=Object.defineProperty,o=(f,e,t,a)=>{for(var s=void 0,l=f.length-1,n;l>=0;l--)(n=f[l])&&(s=n(e,t,s)||s);return s&&S(e,t,s),s};const m=class m extends E(P(v)){constructor(){super(...arguments),this.readonly=!1,this.height="auto",this.placement=C.BOTTOM_START,this.baseIconName=b.ARROW_DOWN,this.selectedValue="",this.displayPopover=!1}modifyListBoxWrapper(){const e=this.slottedListboxes[0];e&&(e.setAttribute("id",y),e.setAttribute("aria-label",this.dataAriaLabel||""),e.setAttribute("aria-labelledby",u))}getAllValidOptions(){var t;const e=Array.from(((t=this.slottedListboxes[0])==null?void 0:t.children)||[]);return(e==null?void 0:e.map(a=>a.tagName.toLowerCase()===g?a:a.tagName.toLowerCase()===N?Array.from(a.children).filter(s=>s.tagName.toLowerCase()===g):[]).flat())||[]}updateTabIndexForAllOptions(e){var a;let t=!1;this.getAllValidOptions().forEach(s=>{s===e?(this.setSelectedValue(s),t=!0,s.setAttribute("selected",""),s.setAttribute("tabindex","0")):(s==null||s.setAttribute("tabindex","-1"),s==null||s.removeAttribute("selected"))}),t||(a=this.getAllValidOptions()[0])==null||a.setAttribute("tabindex","0")}handleOptionsClick(e){this.updateTabIndexForAllOptions(e.target)}setSelectedValue(e){this.selectedValueText=(e==null?void 0:e.getAttribute("label"))??(e==null?void 0:e.textContent)??"",this.selectedIcon=e==null?void 0:e.getAttribute("prefix-icon"),this.selectedValue=(e==null?void 0:e.getAttribute("value"))??(e==null?void 0:e.textContent)??"",this.value=this.selectedValue,this.internals.setFormValue(this.selectedValue),this.manageRequired(),this.dispatchInput(this.selectedValue),this.dispatchChange(this.selectedValue)}manageRequired(){!this.selectedValue&&this.required&&(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity("")),this.setValidity()}formResetCallback(){this.selectedValue="",this.selectedValueText=void 0,this.selectedIcon=null,this.internals.setFormValue(this.selectedValue),this.updateTabIndexForAllOptions(),this.requestUpdate()}formStateRestoreCallback(e){this.selectedValue=e,this.selectedValueText=e}dispatchChange(e){e&&this.dispatchEvent(new CustomEvent("change",{detail:{value:e},composed:!0,bubbles:!0}))}dispatchInput(e){e&&this.dispatchEvent(new CustomEvent("input",{detail:{value:e},composed:!0,bubbles:!0}))}handlePopoverOnOpen(e){var t;switch(e.key){case r.TAB:{const a=this.getAllValidOptions().findIndex(s=>s===e.target);this.setFocusAndTabIndex(a),e.preventDefault();break}case r.SPACE:this.closePopover(),e.preventDefault();break;case r.ENTER:this.closePopover(),e.preventDefault(),(t=this.form)==null||t.requestSubmit();break;case r.HOME:this.setFocusAndTabIndex(0),e.preventDefault();break;case r.END:this.setFocusAndTabIndex(this.getAllValidOptions().length-1),e.preventDefault();break;case r.ARROW_DOWN:case r.ARROW_UP:case r.PAGE_DOWN:case r.PAGE_UP:this.handleOptionsNavigation(e),e.preventDefault();break}}handleClickCombobox(e){this.disabled||this.softDisabled||this.readonly||(this.displayPopover?this.closePopover():this.openPopover(),e.stopPropagation())}handleKeydownCombobox(e){if(!(this.disabled||this.softDisabled||this.readonly))switch(e.key){case r.ARROW_DOWN:case r.ARROW_UP:this.openPopover(),e.preventDefault();break;case r.ENTER:case r.SPACE:this.openPopover(),e.preventDefault(),e.stopPropagation();break;case r.HOME:this.openPopover(),this.setFocusAndTabIndex(0),e.preventDefault();break;case r.END:this.openPopover(),this.setFocusAndTabIndex(this.getAllValidOptions().length-1),e.preventDefault();break}}handleOptionsNavigation(e){const t=this.getAllValidOptions(),a=t.findIndex(l=>l===e.target),s=this.getNewIndexBasedOnKey(e.key,a,t.length);s!==-1&&(this.setFocusAndTabIndex(s),e.preventDefault())}getNewIndexBasedOnKey(e,t,a){return e===r.ARROW_DOWN&&t!==a-1?t+1:e===r.ARROW_UP&&t>0?t-1:e===r.PAGE_DOWN?t+10>a?a-1:t+10:e===r.PAGE_UP?t-10<0?0:t-10:-1}setFocusAndTabIndex(e){const t=this.getAllValidOptions(),a=t[e];a&&(a.focus(),t.forEach((s,l)=>{const n=e===l?"0":"-1";s==null||s.setAttribute("tabindex",n)}))}openPopover(){this.displayPopover=!0,this.baseIconName=b.ARROW_UP}closePopover(){this.displayPopover=!1,this.baseIconName=b.ARROW_DOWN}async firstUpdated(){await this.updateComplete,this.modifyListBoxWrapper();const e=this.getAllValidOptions(),t=e.findIndex(a=>a==null?void 0:a.hasAttribute("selected"));t!==-1?(this.setSelectedValue(e[t]),this.updateTabIndexForAllOptions(e[t])):this.placeholder?this.placeholder&&this.manageRequired():(this.setSelectedValue(e[0]),this.updateTabIndexForAllOptions())}updated(e){super.updated(e),(e.has("disabled")||e.has("softDisabled")||e.has("readonly"))&&(this.disabled||this.softDisabled||this.readonly)&&this.closePopover(),e.has("dataAriaLabel")&&this.modifyListBoxWrapper()}handleOnChange(){this.selectedValue=this.inputElement.value,this.internals.setFormValue(this.selectedValue)}render(){return h`
      ${this.renderLabel()}
      <div part="container">
        <select
          part="native-select"
          id="${this.id}"
          tabindex="-1"
          aria-hidden="true"
          name="${this.name}"
          size="1"
          .value="${k(this.selectedValue)}"
          ?autofocus="${this.autofocus}"
          ?disabled="${this.disabled}"
          ?required="${this.required}"
          aria-disabled="${p(this.disabled||this.softDisabled)}"
          @change="${this.handleOnChange}"
          @mousedown="${e=>e.preventDefault()}"
        >
          ${this.getAllValidOptions().map(e=>h`
              <option
                part="native-select"
                value="${e.getAttribute("value")??""}"
                label="${e.getAttribute("label")??""}"
                ?disabled="${!!e.hasAttribute("disabled")}"
                ?selected="${!!e.hasAttribute("selected")}"
              >
                ${e.textContent}
              </option>
            `)}
        </select>
        <div
          id="${u}"
          part="base-container"
          @click="${this.handleClickCombobox}"
          @keydown="${this.handleKeydownCombobox}"
          tabindex="${this.disabled?"-1":"0"}"
          class="${this.disabled?"":"mdc-focus-ring"}"
          role="${x.COMBOBOX}"
          aria-controls="${y}"
          aria-label="${this.dataAriaLabel??""}"
          aria-labelledby="${this.label?I.HEADING_ID:""}"
          aria-expanded="${this.displayPopover?"true":"false"}"
          aria-haspopup="${x.LISTBOX}"
          aria-required="${this.required?"true":"false"}"
          aria-invalid="${this.helpTextType===w.ERROR?"true":"false"}"
          aria-disabled="${p(this.disabled||this.softDisabled)}"
          aria-readonly="${p(this.readonly)}"
        >
          ${this.selectedIcon?h`<mdc-icon length-unit="rem" size="1" name="${this.selectedIcon}" part="selected-icon"></mdc-icon>`:T}
          <mdc-text
            part="base-text ${this.selectedValueText?"selected":""}"
            type="${A.BODY_MIDSIZE_REGULAR}"
            tagname="${O.SPAN}"
          >
            ${this.selectedValueText??this.placeholder}
          </mdc-text>
          <div part="icon-container">
            <mdc-icon size="1" length-unit="rem" name="${this.baseIconName}"></mdc-icon>
          </div>
        </div>
        <mdc-popover
          trigger="manual"
          triggerid="${u}"
          @keydown="${this.handlePopoverOnOpen}"
          interactive
          ?visible="${this.displayPopover}"
          role=""
          hide-on-outside-click
          hide-on-escape
          focus-back-to-trigger
          focus-trap
          size
          placement="${this.placement}"
          @closebyescape="${this.closePopover}"
          @closebyoutsideclick="${this.closePopover}"
          style="--mdc-popover-max-width: 100%; --mdc-popover-max-height: ${this.height};"
        >
          <slot @click="${this.handleOptionsClick}"></slot>
        </mdc-popover>
      </div>
      ${this.renderHelperText()}
    `}};m.styles=[...v.styles,...L];let i=m;o([d({type:String})],i.prototype,"placeholder");o([d({type:Boolean})],i.prototype,"readonly");o([d({type:String})],i.prototype,"height");o([d({type:String,reflect:!0})],i.prototype,"placement");o([d({type:Boolean,attribute:"soft-disabled"})],i.prototype,"softDisabled");o([R({selector:"mdc-selectlistbox"})],i.prototype,"slottedListboxes");o([c()],i.prototype,"baseIconName");o([c()],i.prototype,"selectedValueText");o([c()],i.prototype,"selectedIcon");o([c()],i.prototype,"selectedValue");o([c()],i.prototype,"displayPopover");o([D("select")],i.prototype,"inputElement");i.register(W);
