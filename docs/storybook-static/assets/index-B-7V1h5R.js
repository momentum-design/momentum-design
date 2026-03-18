import"./index-BF3s_P38.js";import"./index-C4pU2kcn.js";import"./index-Bu8pNbl1.js";import"./index-2xzyg-Q1.js";import"./index-BriFlvnf.js";import{u as k,a2 as w,an as x,k as p,R as f,h as D,a4 as V,n,t as S}from"./iframe-XWsxOvFK.js";import{o as F}from"./query-assigned-elements-BbTu6B6t.js";import{t as h}from"./if-defined-DU1Fw2i1.js";import{F as g,I as R}from"./input.component-BhO0eFwk.js";import{C as M,E as L}from"./CaptureDestroyEventForChildElement-DD5krVjx.js";import{A as N}from"./buttonsimple.component-CBy5pgmT.js";import{D as P}from"./DataAriaLabelMixin-BPSk4IJ7.js";import{F as B}from"./FormInternalsMixin-B8q975VL.js";import{L as _}from"./LifeCycleMixin-CkFTW4AQ.js";import{F as y}from"./formfieldwrapper.component-CJQ2aEyE.js";import{V as m,D as O}from"./formfieldwrapper.constants-CafgdQ5g.js";import{a as A}from"./input.constants-C6K_vXc0.js";import{T as U}from"./optgroup.constants-eoGaaj7r.js";import{T as E}from"./index-CJju4tbl.js";import{P as H,D as C,a as W}from"./popover.constants-Bf0xwOfr.js";import{T as G}from"./index-DkzcJVms.js";import{a as q}from"./ControlTypeMixin-DgCqVvlA.js";import{K,a as z,N as X,A as d}from"./KeyDownHandledMixin-D8wZ24Zf.js";const Y=k.constructTagName("combobox"),I={ARROW_UP:"arrow-up-bold",ARROW_DOWN:"arrow-down-bold"},Z="list",T="combobox-trigger-id";class c{static dispatchComboboxEvent(t,e,i,o=!0){t.dispatchEvent(new CustomEvent(e,{detail:{value:i==null?void 0:i.value,label:i==null?void 0:i.label},composed:!0,bubbles:o}))}static onInputCombobox(t,e){this.dispatchComboboxEvent(t,"input",e)}static onChangeCombobox(t,e){this.dispatchComboboxEvent(t,"change",e)}}const j=w`
  :host {
    --mdc-combobox-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-combobox-icon-color: var(--mds-color-theme-text-primary-normal);
    --mdc-combobox-height: 2rem;
    --mdc-combobox-width: 100%;
    --mdc-combobox-listbox-width: var(--mdc-combobox-width);
    --mdc-combobox-listbox-height: auto;
    --mdc-combobox-hover-background-color: var(--mds-color-theme-background-primary-hover);

    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    width: var(--mdc-combobox-width);
  }
  :host::part(combobox-base) {
    width: 100%;
    display: flex;
    position: relative;
    border-radius: 0.5rem;
  }
  :host(:dir(ltr))::part(combobox-button) {
    background-color: unset;
    border-radius: 0 0.5rem 0.5rem 0;
    border-left: 1px solid var(--mdc-combobox-border-color);
    position: absolute;
    height: var(--mdc-combobox-height);
    padding: 0.5rem;
    right: 0;
  }
  :host(:dir(rtl))::part(combobox-button) {
    background-color: unset;
    border-radius: 0.5rem 0 0 0.5rem;
    border-right: 1px solid var(--mdc-combobox-border-color);
    position: absolute;
    height: var(--mdc-combobox-height);
    padding: 0.5rem;
    left: 0;
  }
  :host([disabled])::part(combobox-button) {
    cursor: unset;
  }
  :host(:focus-within)::part(combobox-button) {
    border-inline-start-color: var(--mdc-combobox-border-color);
  }
  :host(:not([disabled]))::part(combobox-base):hover {
    background-color: var(--mdc-combobox-hover-background-color);
  }
  :host([help-text-type='error'])::part(combobox-button),
  :host([help-text-type='warning'])::part(combobox-button),
  :host([help-text-type='success'])::part(combobox-button),
  :host([help-text-type='priority'])::part(combobox-button) {
    border-color: var(--mdc-help-text-color);
  }
  :host::part(combobox-button-icon) {
    --mdc-icon-fill-color: var(--mdc-combobox-icon-color);
  }
  :host([disabled])::part(combobox-button-icon) {
    --mdc-icon-fill-color: var(--mds-color-theme-text-primary-disabled);
  }
  :host::part(no-result-text) {
    pointer-events: none;
  }
  :host::part(input-text) {
    /* 2rem is the complete width of dropdown button */
    width: calc(100% - 2rem);
  }
  mdc-input {
    --mdc-input-border-color: var(--mdc-combobox-border-color);
    --mdc-input-height: var(--mdc-combobox-height);
  }
  :host([disabled]) input,
  :host([disabled]) mdc-input {
    user-select: none;
    pointer-events: none;
  }
  :host::part(internal-native-input) {
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
  :host ::slotted(mdc-selectlistbox) {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: var(--mdc-popover-internal-available-height);
  }
  /* Popover height & width overrides */
  :host mdc-popover {
    --mdc-popover-max-height: var(--mdc-combobox-listbox-height);
    --mdc-popover-max-width: var(--mdc-combobox-listbox-width);
  }
  :host mdc-popover::part(popover-content) {
    max-height: var(--mdc-popover-max-height);
    outline: none;
  }
  /* High Contrast Mode */
  @media (forced-colors: active) {
    :host::part(combobox-button-icon) {
      --mdc-icon-fill-color: ButtonText;
    }
  }
`,J=[j];var Q=Object.defineProperty,l=(b,t,e,i)=>{for(var o=void 0,s=b.length-1,a;s>=0;s--)(a=b[s])&&(o=a(t,e,o)||o);return o&&Q(t,e,o),o};const v=class v extends K(z(M(N(B(P(q(y))))))){constructor(){super(),this.lastCommittedValue="",this.placement=H.BOTTOM_START,this.boundary=C.BOUNDARY,this.strategy=C.STRATEGY,this.popoverZIndex=void 0,this.isOpen=!1,this.filteredValue="",this.initialSelectedOption=null,this.handleUpdateError=t=>{this.onerror&&this.onerror(t)},this.onStoreUpdate=(t,e,i,o)=>{switch(e){case"added":t.setAttribute("tabindex",i===0&&o.length===0?"0":"-1"),t.hasAttribute("selected")&&(this.navItems.forEach(s=>s.setAttribute("tabindex","-1")),t.setAttribute("tabindex","0"));break;case"removed":{const s=t;if(s&&(!this.isValidItem(s)||s.tabIndex!==0))return;const a=this.navItems.findIndex($=>$===s);if(a===-1)return;let u=a+1;u>=this.navItems.length&&(u=a-1)}break}},this.handleModifiedEvent=t=>{if(this.controlType==="controlled"){this.updateHiddenOptions();return}const e=this.getFirstSelectedOption();switch(t.detail.change){case"selected":{if(t.target.hasAttribute("disabled"))return;e&&e.value!==this.value&&this.setSelectedValue(e,!1);break}case"unselected":{e&&this.setSelectedValue(e,!1);break}}},this.addEventListener(_.MODIFIED,this.handleModifiedEvent),this.itemsStore=new L(this,{isValidItem:this.isValidItem,onStoreUpdate:this.onStoreUpdate})}get navItems(){return this.itemsStore.items}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.inputElement&&(this.setInputValidity(),this.internals.setFormValue(this.inputElement.value))}).catch(this.handleUpdateError)}isValidItem(t){return t.matches(E)}openPopover(){this.isOpen=!0}closePopover(){this.isOpen=!1}compareOptionWithValue(t,e){return(t.getAttribute("label")||"").toLowerCase().startsWith(e==null?void 0:e.toLowerCase())}getFirstSelectedOption(){return this.navItems.find(t=>t.hasAttribute("selected"))}getVisibleOptions(t){return this.navItems.filter(e=>this.compareOptionWithValue(e,t))}focusComboboxBase(){this.disabled||this.updateComplete.then(()=>{var t;(t=this.visualCombobox)==null||t.focus({preventScroll:!0})}).catch(this.handleUpdateError)}handleTriggerClick(){this.disabled||(this.isOpen=!this.isOpen,this.focusComboboxBase())}setSelectedValue(t,e=!0,i=!1){const o=(t==null?void 0:t.getAttribute("label"))||"",s=(t==null?void 0:t.getAttribute("value"))||"";if(!(this.value===s&&this.filteredValue===o)){if(this.controlType==="controlled"&&!i){e&&(c.onInputCombobox(this,t),c.onChangeCombobox(this,t));return}this.filteredValue=o,this.value=s,this.lastCommittedValue=s,this.internals.setFormValue(this.value),this.updateHiddenOptions(),this.updateSelectedOption(t),this.resetFocusedOption(),this.setInputValidity(),this.resetHelpText(),e&&!i&&t&&(c.onInputCombobox(this,t),c.onChangeCombobox(this,t))}}resetSelectedValue(){this.controlType!=="controlled"&&(this.value=""),this.internals.setFormValue(this.value),this.resetHelpText()}resetHelpText(){this.invalidCustomValueText&&this.helpText===this.invalidCustomValueText&&(this.helpText="",this.helpTextType=m.DEFAULT)}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),t==="value"&&this.navItems.length&&!(e===null&&i==="")){let o=null;if(i!==""){const s=this.getFirstSelectedOption(),a=this.navItems.find(u=>u.value===i);if(a)o=a;else if(s)o=s;else if(this.placeholder)o=null;else return}this.updateComplete.then(()=>{this.setSelectedValue(o,!1,!0)}).catch(this.handleUpdateError)}t==="validation-message"&&this.updateComplete.then(()=>{this.setInputValidity()}).catch(this.handleUpdateError)}async firstUpdated(t){await this.updateComplete,this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(t);const e=this.getFirstSelectedOption();e&&this.controlType!=="controlled"?(this.initialSelectedOption=e,this.setSelectedValue(e)):this.value?this.updateValueBasedSelection():this.placeholder&&this.setInputValidity(),this.lastCommittedValue=this.value,this.navItems.forEach(i=>{i.setAttribute("tabindex","-1")})}updateValueBasedSelection(){const t=this.navItems.find(e=>e.value===this.value);t&&this.setSelectedValue(t,!1,!0)}updated(t){super.updated(t),(t.has("slottedListboxes")||t.has("isOpen"))&&(this.visualCombobox&&"ariaControlsElements"in this.visualCombobox&&(this.visualCombobox.ariaControlsElements=this.slottedListboxes),this.dropDownButton&&"ariaControlsElements"in this.dropDownButton&&(this.dropDownButton.ariaControlsElements=this.slottedListboxes)),(t.has("disabled")||t.has("readonly"))&&(this.disabled||this.readonly)&&this.closePopover(),t.has("value")&&this.updateValueBasedSelection()}setInputValidity(){var t,e;!this.value&&this.required?(this.validationMessage?(t=this.inputElement)==null||t.setCustomValidity(this.validationMessage):(e=this.inputElement)==null||e.setCustomValidity(""),this.setValidity()):this.internals.setValidity({})}formResetCallback(){const t=this.initialSelectedOption||null;this.setSelectedValue(t,!1,!0),this.controlType!=="controlled"&&(this.filteredValue=(t==null?void 0:t.label)??""),this.setInputValidity()}formStateRestoreCallback(t){const e=this.navItems.find(i=>i.value===t||i.label===t);this.setSelectedValue(e||null,!1,!0)}handleNativeInputFocus(){this.visualCombobox.focus()}resetFocusedOption(){this.navItems.filter(t=>t.hasAttribute("data-focused")).forEach(t=>this.updateOptionAttributes(t,!1))}updateSelectedOption(t){this.navItems.forEach(e=>{e.removeAttribute("selected")}),t==null||t.setAttribute("selected","")}updateOptionAttributes(t,e){t!==void 0&&(e?(t.setAttribute("data-focused",""),this.openTooltipIfExists(t)):(t.removeAttribute("data-focused"),this.closeTooltipIfExists(t)),t.setAttribute("aria-selected",e.toString()))}openTooltipIfExists(t){const e=t.getAttribute("id");if(!e)return;const i=this.querySelector(`mdc-tooltip[triggerid="${e}"]`);i==null||i.setAttribute("visible","")}closeTooltipIfExists(t){const e=t.getAttribute("id");if(!e)return;const i=this.querySelector(`mdc-tooltip[triggerid="${e}"][visible]`);i&&i.removeAttribute("visible")}handleBlurChange(){const t=this.getVisibleOptions(this.filteredValue),e=t.findIndex(o=>o.hasAttribute("data-focused"));if(e!==-1){this.setSelectedValue(t[e]),this.closePopover();return}const i=this.navItems.find(o=>(o.getAttribute("label")||"").toLowerCase()===this.filteredValue.toLowerCase());if(i){this.setSelectedValue(i),this.closePopover();return}if(this.filteredValue!=="")if(this.lastCommittedValue){const o=this.navItems.find(s=>s.value===this.lastCommittedValue);this.setSelectedValue(o)}else this.invalidCustomValueText&&!this.getFirstSelectedOption()&&(this.helpText=this.invalidCustomValueText,this.helpTextType=m.ERROR,this.setInputValidity());else this.setSelectedValue(null);this.closePopover()}updateFocusAndScrollIntoView(t,e,i){var o;this.updateOptionAttributes(t[e],!1),this.updateOptionAttributes(t[i],!0),(o=t[i])==null||o.scrollIntoView({block:"nearest"})}handleInputKeydown(t){const e=this.getVisibleOptions(this.filteredValue).filter(s=>!s.hasAttribute("disabled")),i=e.findIndex(s=>s.hasAttribute("data-focused")),o=this.getKeyboardNavMode()===X.SPATIAL;switch(this.getActionForKeyEvent(t)){case d.DOWN:{if(!o)this.openPopover();else if(!this.isOpen)break;const s=e.length-1===i?0:i+1;this.updateFocusAndScrollIntoView(e,i,s),t.preventDefault(),this.keyDownEventHandled();break}case d.UP:{if(!o)this.openPopover();else if(!this.isOpen)break;const s=i===-1||i===0?e.length-1:i-1;this.updateFocusAndScrollIntoView(e,i,s),t.preventDefault(),this.keyDownEventHandled();break}case d.ENTER:{if(o&&!this.isOpen)this.openPopover();else{if(i===-1)return;this.setSelectedValue(e[i]),this.isOpen&&this.closePopover()}this.keyDownEventHandled();break}case d.ESCAPE:{i!==-1&&this.updateOptionAttributes(e[i],!1),e.length&&this.shouldDisplayPopover(e.length)||(this.resetSelectedValue(),this.controlType!=="controlled"&&(this.filteredValue="")),this.keyDownEventHandled();break}case d.TAB:{this.closePopover(),this.keyDownEventHandled();break}case d.HOME:case d.END:{this.resetFocusedOption(),this.keyDownEventHandled();break}}}updateHiddenOptions(){const t=new Map,e=new Set;this.navItems.forEach(i=>{const o=this.compareOptionWithValue(i,this.filteredValue);o?i.removeAttribute("data-hidden"):i.setAttribute("data-hidden","");const s=i.parentElement;if(s&&s.matches(U)){const a=s;e.add(a),o&&t.set(a,(t.get(a)??0)+1)}}),e.forEach(i=>{const o=(t.get(i)??0)>0,s=i.nextElementSibling;o?(i.removeAttribute("data-hidden"),s&&s.matches(x)&&s.removeAttribute("data-hidden")):(i.setAttribute("data-hidden",""),s&&s.matches(x)&&s.setAttribute("data-hidden",""))})}handleInputChange(t){var e;t.preventDefault(),t.stopPropagation(),this.filteredValue=t.target.value,this.resetFocusedOption(),this.updateHiddenOptions(),(e=this.getFirstSelectedOption())==null||e.removeAttribute("selected"),this.isOpen===!1&&this.openPopover(),c.onInputCombobox(this,{value:this.filteredValue})}handleOptionsClick(t){t.preventDefault(),t.stopPropagation();const e=t.target.closest(E)??null;e&&!e.hasAttribute("disabled")&&(this.setSelectedValue(e),this.closePopover(),this.focusComboboxBase())}shouldDisplayPopover(t){return this.disabled||this.readonly?!1:t||this.noResultText?this.isOpen:!1}renderNativeInput(){return p`
      <input
        id="${this.inputId}"
        name="${this.name}"
        type="text"
        .value="${g(this.value)}"
        aria-hidden="true"
        part="internal-native-input"
        tabindex="-1"
        ?required=${this.required}
        ?disabled=${this.disabled}
        ?readonly=${this.readonly}
        autocomplete="${A.OFF}"
        @focus=${this.handleNativeInputFocus}
        @invalid=${this.setInputValidity}
      />
    `}renderBaseInput(){return p`
      <input
        id="${this.id}"
        slot="input"
        ?disabled="${this.disabled}"
        tabindex="${this.disabled?-1:0}"
        .value="${g(this.filteredValue)}"
        autocomplete="${A.OFF}"
        part="input-text"
        placeholder="${h(this.placeholder)}"
        role="${f.COMBOBOX}"
        ?readonly="${this.readonly}"
        ?required="${this.required}"
        @input=${this.handleInputChange}
        @keydown=${this.handleInputKeydown}
        @blur="${this.handleBlurChange}"
        aria-autocomplete="${Z}"
        aria-describedby="${h(this.helpText?O.HELPER_TEXT_ID:"")}"
        aria-disabled="${this.disabled?"true":"false"}"
        aria-expanded="${this.isOpen?"true":"false"}"
        aria-haspopup="${f.LISTBOX}"
        aria-invalid="${this.helpTextType===m.ERROR?"true":"false"}"
        aria-label="${this.dataAriaLabel??""}"
        aria-labelledby="${this.label?O.HEADING_ID:""}"
        aria-readonly="${this.readonly?"true":"false"}"
        aria-required="${this.required?"true":"false"}"
      />
    `}renderNoResultsText(t){return t===0&&this.noResultText?p`<mdc-listitem part="no-result-text" tabindex="-1" role="" label="${this.noResultText}"></mdc-listitem>`:D}render(){const t=this.getVisibleOptions(this.filteredValue);return p`
      ${this.renderLabel()}
      <div part="combobox-base" id="${T}">
        ${this.renderNativeInput()}
        <mdc-input
          @click="${this.handleTriggerClick}"
          ?disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          help-text-type="${this.helpTextType}"
        >
          ${this.renderBaseInput()}
        </mdc-input>
        <mdc-buttonsimple
          @click="${this.handleTriggerClick}"
          part="combobox-button"
          ?disabled="${this.disabled}"
          tabindex="-1"
          aria-expanded="${this.isOpen?"true":"false"}"
          aria-label="${this.dataAriaLabel??""}"
        >
          <mdc-icon
            part="combobox-button-icon"
            name="${this.shouldDisplayPopover(t.length)?I.ARROW_UP:I.ARROW_DOWN}"
            size="1"
            length-unit="rem"
          ></mdc-icon>
        </mdc-buttonsimple>
        <mdc-popover
          ?visible="${this.shouldDisplayPopover(t.length)}"
          @closebyescape="${()=>{this.closePopover()}}"
          @closebyoutsideclick="${()=>{this.closePopover(),this.focusComboboxBase()}}"
          backdrop
          backdrop-append-to="${h(this.backdropAppendTo)}"
          boundary="${h(this.boundary)}"
          disable-aria-expanded
          exportparts="popover-content"
          hide-on-escape
          hide-on-outside-click
          is-backdrop-invisible
          placement="${this.placement}"
          role=""
          size
          strategy="${h(this.strategy)}"
          trigger="${W.MANUAL}"
          triggerid="${T}"
          z-index="${h(this.popoverZIndex)}"
        >
          ${this.renderNoResultsText(t.length)}
          <slot @mousedown="${this.handleOptionsClick}"></slot>
        </mdc-popover>
      </div>
      ${this.renderHelperText()}
    `}};v.styles=[...R.styles,...y.styles,...J];let r=v;l([n({type:String})],r.prototype,"placeholder");l([n({type:String,reflect:!0})],r.prototype,"placement");l([n({type:String,attribute:"no-result-text",reflect:!0})],r.prototype,"noResultText");l([n({type:String,attribute:"invalid-custom-value-text",reflect:!0})],r.prototype,"invalidCustomValueText");l([n({type:String,reflect:!0})],r.prototype,"boundary");l([n({type:String,reflect:!0})],r.prototype,"strategy");l([n({type:Number,reflect:!0,attribute:"popover-z-index"})],r.prototype,"popoverZIndex");l([n({type:String,reflect:!0,attribute:"backdrop-append-to"})],r.prototype,"backdropAppendTo");l([S(`[role="${f.COMBOBOX}"]`)],r.prototype,"visualCombobox");l([S('[part="combobox-button"]')],r.prototype,"dropDownButton");l([F({selector:G})],r.prototype,"slottedListboxes");l([V()],r.prototype,"isOpen");l([V()],r.prototype,"filteredValue");r.register(Y);
