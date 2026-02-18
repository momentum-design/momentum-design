import"./index-DpV9ikVS.js";import"./index-ChETWKIm.js";import"./index-DVGR9-Ai.js";import"./index-DhxQWzYa.js";import"./index-DgFVlAdE.js";import{u as w,a2 as D,an as y,k as c,R as f,h as F,n,t as $,a5 as v}from"./iframe-DoNkonBK.js";import{o as R}from"./query-assigned-elements-C5HXlrtD.js";import{t as h}from"./if-defined-B36DAkUP.js";import{F as g,I as N}from"./input.component-BRYDYRBg.js";import{C as M,E as P}from"./CaptureDestroyEventForChildElement-CzoWFGK_.js";import{A as L}from"./buttonsimple.component-DnM31Gat.js";import{D as U}from"./DataAriaLabelMixin-BGH72T46.js";import{F as _}from"./FormInternalsMixin-CD_aVtDf.js";import{a as B}from"./listitem.component-CSKpMlhF.js";import{F as E}from"./formfieldwrapper.component-DINNXoO0.js";import{V as b,D as A}from"./formfieldwrapper.constants-Bqn78fRr.js";import{a as O}from"./input.constants-BgZ0kUU9.js";import{T as I}from"./optgroup.constants-Co_YBcQa.js";import{T}from"./index-B2rOd_ug.js";import{P as G,D as V,a as H}from"./popover.constants-B9PQSOY9.js";import{T as W}from"./index-D3KmC7Vi.js";import{a as q}from"./ControlTypeMixin-Cq8VshPZ.js";import{K,a as z,N as X,A as d}from"./KeyDownHandledMixin-CHVndGqH.js";const Y=w.constructTagName("combobox"),C={ARROW_UP:"arrow-up-bold",ARROW_DOWN:"arrow-down-bold"},Z="list",S="combobox-trigger-id";class m{static dispatchComboboxEvent(t,e,i,o=!0){t.dispatchEvent(new CustomEvent(e,{detail:{value:i==null?void 0:i.value,label:i==null?void 0:i.label},composed:!0,bubbles:o}))}static onInputCombobox(t,e){this.dispatchComboboxEvent(t,"input",e)}static onChangeCombobox(t,e){this.dispatchComboboxEvent(t,"change",e)}}const j=D`
  :host {
    --mdc-combobox-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-combobox-icon-color: var(--mds-color-theme-text-primary-normal);
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
    padding: 0.5rem;
    right: 0;
  }
  :host(:dir(rtl))::part(combobox-button) {
    background-color: unset;
    border-radius: 0.5rem 0 0 0.5rem;
    border-right: 1px solid var(--mdc-combobox-border-color);
    position: absolute;
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
`,J=[j];var Q=Object.defineProperty,l=(u,t,e,i)=>{for(var o=void 0,s=u.length-1,a;s>=0;s--)(a=u[s])&&(o=a(t,e,o)||o);return o&&Q(t,e,o),o};const x=class x extends K(z(M(L(_(U(q(E))))))){constructor(){super(),this.placement=G.BOTTOM_START,this.boundary=V.BOUNDARY,this.strategy=V.STRATEGY,this.popoverZIndex=void 0,this.isOpen=!1,this.filteredValue="",this.forceValueUpdate=!1,this.initialSelectedOption=null,this.handleUpdateError=t=>{this.onerror&&this.onerror(t)},this.onStoreUpdate=(t,e,i,o)=>{switch(e){case"added":t.setAttribute("tabindex",i===0&&o.length===0?"0":"-1"),t.hasAttribute("selected")&&(this.navItems.forEach(s=>s.setAttribute("tabindex","-1")),t.setAttribute("tabindex","0"));break;case"removed":{const s=t;if(s&&(!this.isValidItem(s)||s.tabIndex!==0))return;const a=this.navItems.findIndex(k=>k===s);if(a===-1)return;let p=a+1;p>=this.navItems.length&&(p=a-1)}break}},this.handleModifiedEvent=t=>{if(this.controlType==="controlled")return;const e=this.getFirstSelectedOption();switch(t.detail.change){case"selected":{if(t.target.hasAttribute("disabled"))return;e&&e.value!==this.value&&this.setSelectedValue(e,!1);break}case"unselected":{e&&this.setSelectedValue(e,!1);break}}},this.addEventListener(B.MODIFIED,this.handleModifiedEvent),this.itemsStore=new P(this,{isValidItem:this.isValidItem,onStoreUpdate:this.onStoreUpdate})}get navItems(){return this.itemsStore.items}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.inputElement&&(this.setInputValidity(),this.internals.setFormValue(this.inputElement.value))}).catch(this.handleUpdateError)}isValidItem(t){return t.matches(T)}openPopover(){this.isOpen=!0}closePopover(){this.isOpen=!1}toggleDropdown(){this.isOpen=!this.isOpen}compareOptionWithValue(t,e){return(t.getAttribute("label")||"").toLowerCase().startsWith(e==null?void 0:e.toLowerCase())}getFirstSelectedOption(){return this.navItems.find(t=>t.hasAttribute("selected"))}getVisibleOptions(t){return this.navItems.filter(e=>this.compareOptionWithValue(e,t))}setSelectedValue(t,e=!0){if(this.controlType==="controlled"&&!this.forceValueUpdate){m.onChangeCombobox(this,t);return}this.forceValueUpdate=!1,this.filteredValue=(t==null?void 0:t.getAttribute("label"))||"",this.value=(t==null?void 0:t.getAttribute("value"))||"",this.internals.setFormValue(this.value),this.updateHiddenOptions(),this.updateSelectedOption(t),this.setInputValidity(),this.resetHelpText(),e&&(m.onInputCombobox(this,t),m.onChangeCombobox(this,t))}resetSelectedValue(){this.controlType!=="controlled"&&(this.value=""),this.internals.setFormValue(this.value),this.resetHelpText()}resetHelpText(){this.invalidCustomValueText&&this.helpText===this.invalidCustomValueText&&(this.helpText="",this.helpTextType=b.DEFAULT)}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),t==="value"&&i!==""&&i!==e&&this.navItems.length&&this.controlType!=="controlled"){const o=this.getFirstSelectedOption(),s=this.navItems.find(p=>p.value===i);let a=null;if(s)a=s;else if(this.placeholder)a=null;else if(o)a=o;else return;this.updateComplete.then(()=>{this.setSelectedValue(a)}).catch(this.handleUpdateError)}t==="validation-message"&&this.updateComplete.then(()=>{this.setInputValidity()}).catch(this.handleUpdateError)}async firstUpdated(t){await this.updateComplete,this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(t);const e=this.getFirstSelectedOption();e&&this.controlType!=="controlled"?(this.initialSelectedOption=e,this.setSelectedValue(e)):this.value?this.updateValueBasedSelection():this.placeholder&&this.setInputValidity(),this.navItems.forEach(i=>{i.setAttribute("tabindex","-1")})}updateValueBasedSelection(){this.forceValueUpdate=!0;const t=this.navItems.find(e=>e.value===this.value);t&&this.setSelectedValue(t)}updated(t){super.updated(t),(t.has("slottedListboxes")||t.has("isOpen"))&&(this.visualCombobox&&"ariaControlsElements"in this.visualCombobox&&(this.visualCombobox.ariaControlsElements=this.slottedListboxes),this.dropDownButton&&"ariaControlsElements"in this.dropDownButton&&(this.dropDownButton.ariaControlsElements=this.slottedListboxes)),(t.has("disabled")||t.has("readonly"))&&(this.disabled||this.readonly)&&this.closePopover(),t.has("value")&&this.updateValueBasedSelection()}setInputValidity(){var t,e;!this.value&&this.required?(this.validationMessage?(t=this.inputElement)==null||t.setCustomValidity(this.validationMessage):(e=this.inputElement)==null||e.setCustomValidity(""),this.setValidity()):this.internals.setValidity({})}formResetCallback(){const t=this.initialSelectedOption||null;this.setSelectedValue(t),this.controlType!=="controlled"&&(this.filteredValue=(t==null?void 0:t.label)??""),this.setInputValidity()}formStateRestoreCallback(t){const e=this.navItems.find(i=>i.value===t||i.label===t);this.setSelectedValue(e||null)}handleNativeInputFocus(){this.visualCombobox.focus()}resetFocusedOption(){this.navItems.filter(t=>t.hasAttribute("data-focused")).forEach(t=>this.updateOptionAttributes(t,!1))}updateSelectedOption(t){this.navItems.forEach(e=>{e.removeAttribute("selected")}),t==null||t.setAttribute("selected","")}updateOptionAttributes(t,e){t!==void 0&&(e?t.setAttribute("data-focused",""):t.removeAttribute("data-focused"),t.setAttribute("aria-selected",e.toString()))}handleBlurChange(){const t=this.getVisibleOptions(this.filteredValue),e=t.findIndex(i=>i.hasAttribute("data-focused"));if(e!==-1){this.setSelectedValue(t[e]),this.closePopover();return}e===-1&&this.filteredValue!==""&&this.invalidCustomValueText&&!this.getFirstSelectedOption()&&(this.helpText=this.invalidCustomValueText,this.helpTextType=b.ERROR),this.setInputValidity()}updateFocusAndScrollIntoView(t,e,i){var o;this.updateOptionAttributes(t[e],!1),this.updateOptionAttributes(t[i],!0),(o=t[i])==null||o.scrollIntoView({block:"nearest"})}handleInputKeydown(t){const e=this.getVisibleOptions(this.filteredValue).filter(s=>!s.hasAttribute("disabled")),i=e.findIndex(s=>s.hasAttribute("data-focused")),o=this.getKeyboardNavMode()===X.SPATIAL;switch(this.getActionForKeyEvent(t)){case d.DOWN:{if(!o)this.openPopover();else if(!this.isOpen)break;const s=e.length-1===i?0:i+1;this.updateFocusAndScrollIntoView(e,i,s),t.preventDefault(),this.keyDownEventHandled();break}case d.UP:{if(!o)this.openPopover();else if(!this.isOpen)break;const s=i===-1||i===0?e.length-1:i-1;this.updateFocusAndScrollIntoView(e,i,s),t.preventDefault(),this.keyDownEventHandled();break}case d.ENTER:{if(o&&!this.isOpen)this.openPopover();else{if(i===-1)return;this.setSelectedValue(e[i]),this.isOpen&&this.closePopover()}this.keyDownEventHandled();break}case d.ESCAPE:{i!==-1&&this.updateOptionAttributes(e[i],!1),e.length&&this.shouldDisplayPopover(e.length)||(this.resetSelectedValue(),this.controlType!=="controlled"&&(this.filteredValue="")),this.keyDownEventHandled();break}case d.TAB:{this.closePopover(),this.keyDownEventHandled();break}case d.HOME:case d.END:{this.resetFocusedOption(),this.keyDownEventHandled();break}}}updateHiddenOptions(){this.navItems.forEach(t=>{this.compareOptionWithValue(t,this.filteredValue)?(t.removeAttribute("data-hidden"),this.showOptionGroupAndDivider(t)):(t.setAttribute("data-hidden",""),this.hideOptionGroupAndDivider(t))})}hideOptionGroupAndDivider(t){var e,i,o;(e=t.parentElement)!=null&&e.matches(I)&&((i=Array.from(t.parentElement.children))==null?void 0:i.filter(a=>!a.hasAttribute("data-hidden"))).length===0&&(t.parentElement.setAttribute("data-hidden",""),(o=t.parentElement.nextElementSibling)!=null&&o.matches(y)&&t.parentElement.nextElementSibling.setAttribute("data-hidden",""))}showOptionGroupAndDivider(t){var e,i,o;(e=t.parentElement)!=null&&e.matches(I)&&((i=Array.from(t.parentElement.children))==null?void 0:i.filter(a=>!a.hasAttribute("data-hidden"))).length>0&&(t.parentElement.removeAttribute("data-hidden"),(o=t.parentElement.nextElementSibling)!=null&&o.matches(y)&&t.parentElement.nextElementSibling.removeAttribute("data-hidden"))}handleInputChange(t){var e;this.controlType!=="controlled"&&(this.filteredValue=t.target.value),this.resetSelectedValue(),this.resetFocusedOption(),this.updateHiddenOptions(),(e=this.getFirstSelectedOption())==null||e.removeAttribute("selected"),this.isOpen===!1&&this.openPopover()}handleOptionsClick(t){const e=t.target.closest(T)??null;e&&!e.hasAttribute("disabled")&&(this.setSelectedValue(e),this.closePopover(),this.updateComplete.then(()=>this.handleNativeInputFocus()).catch(this.handleUpdateError))}shouldDisplayPopover(t){return this.disabled||this.readonly?!1:t?this.isOpen:!!this.noResultText}renderNativeInput(){return c`
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
        autocomplete="${O.OFF}"
        @focus=${this.handleNativeInputFocus}
        @invalid=${this.setInputValidity}
      />
    `}renderBaseInput(){return c`
      <input
        id="${this.id}"
        slot="input"
        ?disabled="${this.disabled}"
        .value="${g(this.filteredValue)}"
        autocomplete="${O.OFF}"
        part="input-text"
        placeholder="${h(this.placeholder)}"
        role="${f.COMBOBOX}"
        ?readonly="${this.readonly}"
        ?required="${this.required}"
        @input=${this.handleInputChange}
        @keydown=${this.handleInputKeydown}
        @blur="${this.handleBlurChange}"
        aria-autocomplete="${Z}"
        aria-describedby="${h(this.helpText?A.HELPER_TEXT_ID:"")}"
        aria-disabled="${this.disabled?"true":"false"}"
        aria-expanded="${this.isOpen?"true":"false"}"
        aria-haspopup="${f.LISTBOX}"
        aria-invalid="${this.helpTextType===b.ERROR?"true":"false"}"
        aria-label="${this.dataAriaLabel??""}"
        aria-labelledby="${this.label?A.HEADING_ID:""}"
        aria-readonly="${this.readonly?"true":"false"}"
        aria-required="${this.required?"true":"false"}"
      />
    `}renderNoResultsText(t){return t===0&&this.noResultText?c`<mdc-listitem part="no-result-text" tabindex="-1" role="" label="${this.noResultText}"></mdc-listitem>`:F}render(){const t=this.getVisibleOptions(this.filteredValue);return c`
      ${this.renderLabel()}
      <div part="combobox-base" id="${S}">
        ${this.renderNativeInput()}
        <mdc-input
          @click="${()=>this.toggleDropdown()}"
          ?disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          help-text-type="${this.helpTextType}"
        >
          ${this.renderBaseInput()}
        </mdc-input>
        <mdc-buttonsimple
          @click="${()=>this.toggleDropdown()}"
          part="combobox-button"
          ?disabled="${this.disabled}"
          tabindex="-1"
          aria-expanded="${this.isOpen?"true":"false"}"
          aria-label="${this.dataAriaLabel??""}"
        >
          <mdc-icon
            part="combobox-button-icon"
            name="${this.shouldDisplayPopover(t.length)?C.ARROW_UP:C.ARROW_DOWN}"
            size="1"
            length-unit="rem"
          ></mdc-icon>
        </mdc-buttonsimple>
        <mdc-popover
          ?visible="${this.shouldDisplayPopover(t.length)}"
          @closebyescape="${()=>{this.closePopover()}}"
          @closebyoutsideclick="${()=>{this.closePopover(),this.handleNativeInputFocus()}}"
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
          trigger="${H.MANUAL}"
          triggerid="${S}"
          z-index="${h(this.popoverZIndex)}"
        >
          ${this.renderNoResultsText(t.length)}
          <slot @click="${this.handleOptionsClick}"></slot>
        </mdc-popover>
      </div>
      ${this.renderHelperText()}
    `}};x.styles=[...N.styles,...E.styles,...J];let r=x;l([n({type:String})],r.prototype,"placeholder");l([n({type:String,reflect:!0})],r.prototype,"placement");l([n({type:String,attribute:"no-result-text",reflect:!0})],r.prototype,"noResultText");l([n({type:String,attribute:"invalid-custom-value-text",reflect:!0})],r.prototype,"invalidCustomValueText");l([n({type:String,reflect:!0})],r.prototype,"boundary");l([n({type:String,reflect:!0})],r.prototype,"strategy");l([n({type:Number,reflect:!0,attribute:"popover-z-index"})],r.prototype,"popoverZIndex");l([n({type:String,reflect:!0,attribute:"backdrop-append-to"})],r.prototype,"backdropAppendTo");l([$(`[role="${f.COMBOBOX}"]`)],r.prototype,"visualCombobox");l([$('[part="combobox-button"]')],r.prototype,"dropDownButton");l([R({selector:W})],r.prototype,"slottedListboxes");l([v()],r.prototype,"isOpen");l([v()],r.prototype,"filteredValue");l([v()],r.prototype,"forceValueUpdate");r.register(Y);
