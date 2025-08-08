import"./index-OoZ5KnDV.js";import"./index-D38jSS5Q.js";import"./index-BZuoC9MH.js";import{T as O,V as A}from"./index-riA1qVWu.js";import"./index-CfZlUfVJ.js";import{i as I,k as m,D as k}from"./lit-element-D5KKan5q.js";import{u as $,n as d}from"./provider.component-BaQC7CJH.js";import{r as g}from"./state-C0WmBOuD.js";import{e as w}from"./query-DXShiZ7f.js";import{o as D}from"./query-assigned-elements-uEuc3rg8.js";import{t as c}from"./if-defined-D5BV9-c0.js";import{K as a}from"./keys-hFXe221I.js";import{D as E}from"./DataAriaLabelMixin-Cpdy3gUS.js";import{F as S}from"./FormInternalsMixin-BIoSiX4k.js";import{R as f}from"./roles-DU0xbrD4.js";import{D as T,V as P,F as v}from"./formfieldwrapper.component-C-SgLT80.js";import{T as p}from"./index-CkcrWLOl.js";import{a as R}from"./popover.component-BeJYT0F1.js";import{a as V}from"./index-B-GnYs90.js";const C=$.constructTagName("select"),x={ARROW_UP:"arrow-up-bold",ARROW_DOWN:"arrow-down-bold"},n="select-base-triggerid",y="select-listbox",L=I`
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
    width: 100%;
    position: relative;
  }
  :host ::slotted(mdc-selectlistbox) {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: var(--mdc-popover-internal-available-height);
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
  :host mdc-popover::part(popover-content) {
    min-width: auto;
    max-height: var(--mdc-popover-max-height);
    padding: 0.75rem 0.5rem;
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
`,_=[L,...V(!0)];var F=Object.defineProperty,l=(b,e,t,i)=>{for(var s=void 0,r=b.length-1,u;r>=0;r--)(u=b[r])&&(s=u(e,t,s)||s);return s&&F(e,t,s),s};const h=class h extends S(E(v)){constructor(){super(...arguments),this.readonly=!1,this.height="auto",this.placement=R.BOTTOM_START,this.displayPopover=!1,this.initialSelectedOption=null}getAllValidOptions(){var e;return Array.from(((e=this.slottedListboxes[0])==null?void 0:e.querySelectorAll(p))||[])}getFirstValidOption(){var e;return(e=this.slottedListboxes[0])==null?void 0:e.querySelector(p)}getLastValidOption(){const e=this.getAllValidOptions();return e.length>0?e[e.length-1]:null}getFirstSelectedOption(){var e;return(e=this.slottedListboxes[0])==null?void 0:e.querySelector(`${p}[selected]`)}async firstUpdated(){await this.updateComplete,this.modifyListBoxWrapper();const e=this.getFirstSelectedOption();if(e)this.initialSelectedOption=e,this.setSelectedOption(e);else if(this.placeholder)this.placeholder&&this.setInputValidity();else{const t=this.getFirstValidOption();this.setSelectedOption(t),this.fireEvents()}}updated(e){super.updated(e),(e.has("disabled")||e.has("softDisabled")||e.has("readonly"))&&(this.disabled||this.softDisabled||this.readonly)&&(this.displayPopover=!1),e.has("dataAriaLabel")&&this.modifyListBoxWrapper()}modifyListBoxWrapper(){const e=this.slottedListboxes[0];e&&(e.setAttribute("id",y),e.setAttribute("aria-label",this.dataAriaLabel||""),e.setAttribute("aria-labelledby",n))}handleOptionsClick(e){this.setSelectedOption(e.target),this.displayPopover=!1,this.fireEvents()}setSelectedOption(e){var t;this.updateSelectedInChildOptions(e),this.updateTabIndexForAllOptions(e),this.selectedOption=e,this.value=((t=this.selectedOption)==null?void 0:t.value)??"",this.internals.setFormValue(this.value),this.inputElement.setAttribute("value",this.value),this.setInputValidity()}updateTabIndexForAllOptions(e){const t=this.getAllValidOptions(),i=e||t[0];t.forEach(s=>{s.setAttribute("tabindex",s===i?"0":"-1")})}updateSelectedInChildOptions(e){e==null||e.setAttribute("selected","true"),this.getAllValidOptions().forEach(i=>{i!==e&&i.removeAttribute("selected")})}fireEvents(){this.dispatchInput(this.selectedOption),this.dispatchChange(this.selectedOption)}setInputValidity(){!this.selectedOption&&this.required&&this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()}formResetCallback(){var t;const e=this.initialSelectedOption||null;((t=this.selectedOption)==null?void 0:t.value)!==(e==null?void 0:e.value)&&(this.setSelectedOption(e),this.fireEvents())}formStateRestoreCallback(e){var i;const t=this.getAllValidOptions().find(s=>s.value===e||s.label===e);((i=this.selectedOption)==null?void 0:i.value)!==(t==null?void 0:t.value)&&(this.setSelectedOption(t||null),this.fireEvents())}dispatchChange(e){this.dispatchEvent(new CustomEvent("change",{detail:{value:e==null?void 0:e.value,label:e==null?void 0:e.label},composed:!0,bubbles:!0}))}dispatchInput(e){this.dispatchEvent(new CustomEvent("input",{detail:{value:e==null?void 0:e.value,label:e==null?void 0:e.label},composed:!0,bubbles:!0}))}handleClickCombobox(e){this.disabled||this.softDisabled||this.readonly||(this.displayPopover=!this.displayPopover,e.stopPropagation())}handleKeydownCombobox(e){if(!(this.disabled||this.softDisabled||this.readonly))switch(e.key){case a.ARROW_DOWN:case a.ARROW_UP:this.displayPopover=!0,e.preventDefault(),e.stopPropagation();break;case a.ENTER:case a.SPACE:this.displayPopover=!0,e.preventDefault(),e.stopPropagation();break;case a.HOME:{this.displayPopover=!0;const t=this.getFirstValidOption();t&&(t==null||t.focus(),this.updateTabIndexForAllOptions(t)),e.preventDefault();break}case a.END:{this.displayPopover=!0;const t=this.getLastValidOption();t&&(t.focus(),this.updateTabIndexForAllOptions(t)),e.preventDefault();break}}}handlePopoverKeydown(e){switch(e.key){case a.HOME:{const t=this.getFirstValidOption();this.focusAndUpdateTabIndexes(t),e.preventDefault();break}case a.END:{const t=this.getLastValidOption();this.focusAndUpdateTabIndexes(t),e.preventDefault();break}case a.ARROW_DOWN:{const t=this.getAllValidOptions(),i=t.findIndex(r=>r===e.target),s=Math.min(i+1,t.length-1);this.focusAndUpdateTabIndexes(t[s]),e.preventDefault();break}case a.ARROW_UP:{const t=this.getAllValidOptions(),i=t.findIndex(r=>r===e.target),s=Math.max(i-1,0);this.focusAndUpdateTabIndexes(t[s]),e.preventDefault();break}case a.PAGE_DOWN:{const t=this.getAllValidOptions(),i=t.findIndex(r=>r===e.target),s=Math.min(i+10,t.length-1);this.focusAndUpdateTabIndexes(t[s]),e.preventDefault();break}case a.PAGE_UP:{const t=this.getAllValidOptions(),i=t.findIndex(r=>r===e.target),s=Math.max(i-10,0);this.focusAndUpdateTabIndexes(t[s]),e.preventDefault();break}}}focusAndUpdateTabIndexes(e){e&&(e.focus(),this.updateTabIndexForAllOptions(e))}handleNativeInputFocus(){this.visualCombobox.focus()}updateState(){var t;const e=this.getFirstSelectedOption();e?((t=this.selectedOption)==null?void 0:t.value)!==e.value&&this.setSelectedOption(e):this.setSelectedOption(this.placeholder?null:this.getFirstValidOption())}render(){var e,t,i,s;return m`
      ${this.renderLabel()}
      <div part="container">
        <div
          id="${n}"
          part="base-container"
          @click="${this.handleClickCombobox}"
          @keydown="${this.handleKeydownCombobox}"
          tabindex="${this.disabled?"-1":"0"}"
          class="${this.disabled?"":"mdc-focus-ring"}"
          role="${f.COMBOBOX}"
          aria-controls="${y}"
          aria-label="${this.dataAriaLabel??""}"
          aria-labelledby="${this.label?T.HEADING_ID:""}"
          aria-expanded="${this.displayPopover?"true":"false"}"
          aria-haspopup="${f.LISTBOX}"
          aria-required="${this.required?"true":"false"}"
          aria-invalid="${this.helpTextType===P.ERROR?"true":"false"}"
          aria-disabled="${c(this.disabled||this.softDisabled)}"
          aria-readonly="${c(this.readonly)}"
        >
          ${(e=this.selectedOption)!=null&&e.prefixIcon?m`<mdc-icon
                length-unit="rem"
                size="1"
                name="${(t=this.selectedOption)==null?void 0:t.prefixIcon}"
                part="selected-icon"
              ></mdc-icon>`:k}
          <mdc-text
            part="base-text ${(i=this.selectedOption)!=null&&i.label?"selected":""}"
            type="${O.BODY_MIDSIZE_REGULAR}"
            tagname="${A.SPAN}"
          >
            ${((s=this.selectedOption)==null?void 0:s.label)??this.placeholder}
          </mdc-text>
          <div part="icon-container">
            <mdc-icon
              size="1"
              length-unit="rem"
              name="${this.displayPopover?x.ARROW_UP:x.ARROW_DOWN}"
            ></mdc-icon>
          </div>
        </div>
        <input
          id="${this.id}"
          part="native-input"
          name="${this.name}"
          type="text"
          ?autofocus="${this.autofocus}"
          ?disabled=${this.disabled}
          ?required=${this.required}
          ?readonly=${this.readonly}
          tabindex="-1"
          aria-hidden="true"
          @focus=${this.handleNativeInputFocus}
          @invalid=${this.setInputValidity}
          aria-disabled="${c(this.disabled||this.softDisabled)}"
        />
        <mdc-popover
          trigger="manual"
          triggerid="${n}"
          @keydown="${this.handlePopoverKeydown}"
          interactive
          ?visible="${this.displayPopover}"
          role=""
          backdrop
          hide-on-outside-click
          hide-on-escape
          focus-back-to-trigger
          focus-trap
          size
          placement="${this.placement}"
          @closebyescape="${()=>{this.displayPopover=!1}}"
          @closebyoutsideclick="${()=>{this.displayPopover=!1}}"
          style="--mdc-popover-max-width: 100%; --mdc-popover-max-height: ${this.height};"
        >
          <slot @click="${this.handleOptionsClick}"></slot>
        </mdc-popover>
      </div>
      ${this.renderHelperText()}
    `}};h.styles=[...v.styles,..._];let o=h;l([d({type:String})],o.prototype,"placeholder");l([d({type:Boolean})],o.prototype,"readonly");l([d({type:String})],o.prototype,"height");l([d({type:String,reflect:!0})],o.prototype,"placement");l([d({type:Boolean,attribute:"soft-disabled"})],o.prototype,"softDisabled");l([D({selector:"mdc-selectlistbox"})],o.prototype,"slottedListboxes");l([w(`[id="${n}"]`)],o.prototype,"visualCombobox");l([g()],o.prototype,"selectedOption");l([g()],o.prototype,"displayPopover");o.register(C);
