import"./index-0x1cEnDv.js";import"./index-Bbl3QEBF.js";import"./index-CkHjLRxb.js";import"./index-B5lafZhI.js";import"./index-H6h6eQUB.js";import{u as _,X as S,af as v,k as p,R as b,h as w,n as a,s as C,a1 as V}from"./iframe-DPiEtQC6.js";import{o as D}from"./query-assigned-elements-Cszj43US.js";import{t as h}from"./if-defined-BBKKqPaV.js";import{F as x,I as F}from"./input.component-CSoe_npN.js";import{C as k,E as R}from"./CaptureDestroyEventForChildElement-BgG7pc1p.js";import{A as N}from"./buttonsimple.component-DsF8ypJf.js";import{D as P}from"./DataAriaLabelMixin-q02ETwny.js";import{F as L}from"./FormInternalsMixin-Di-erJ9l.js";import{b as M}from"./listitem.component-Cz7_3HRG.js";import{F as f}from"./formfieldwrapper.component-D6wHe3xF.js";import{V as c,D as y}from"./formfieldwrapper.constants-BPye36mV.js";import{a as g}from"./input.constants-CUaC8xH8.js";import{T as E}from"./optgroup.constants-B2rItsCj.js";import{T as A}from"./index-n0AJdw5i.js";import{P as G,D as O,a as B}from"./popover.constants-Cp404HBT.js";import{T as U}from"./index-Bpxaal1a.js";import{K as W,A as n}from"./KeyToActionMixin-C0pScinA.js";const H=_.constructTagName("combobox"),I={ARROW_UP:"arrow-up-bold",ARROW_DOWN:"arrow-down-bold"},q="list",T="combobox-trigger-id";class ${static dispatchComboboxEvent(t,e,i,o=!0){t.dispatchEvent(new CustomEvent(e,{detail:{value:i==null?void 0:i.value,label:i==null?void 0:i.label},composed:!0,bubbles:o}))}static onInputCombobox(t,e){this.dispatchComboboxEvent(t,"input",e)}static onChangeCombobox(t,e){this.dispatchComboboxEvent(t,"change",e)}}const z=S`
  :host {
    --mdc-combobox-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-combobox-icon-color: var(--mds-color-theme-text-primary-normal);
    --mdc-combobox-width: 100%;
    --mdc-combobox-listbox-width: var(--mdc-combobox-width);
    --mdc-combobox-listbox-height: auto;
    --mdc-combobox-text-color-disabled: var(--mds-color-theme-text-primary-disabled);
    --mdc-combobox-hover-background-color: var(--mds-color-theme-background-primary-hover);

    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    width: var(--mdc-combobox-width);
  }
  :host::part(combobox__base) {
    width: 100%;
    display: flex;
    position: relative;
    border-radius: 0.5rem;
  }
  :host(:dir(ltr))::part(combobox__button) {
    background-color: unset;
    border-radius: 0 0.5rem 0.5rem 0;
    border-left: 1px solid var(--mdc-combobox-border-color);
    position: absolute;
    padding: 0.5rem;
    right: 0;
  }
  :host(:dir(rtl))::part(combobox__button) {
    background-color: unset;
    border-radius: 0.5rem 0 0 0.5rem;
    border-right: 1px solid var(--mdc-combobox-border-color);
    position: absolute;
    padding: 0.5rem;
    left: 0;
  }
  :host([disabled])::part(combobox__button) {
    cursor: unset;
  }
  :host(:focus-within)::part(combobox__button) {
    border-inline-start-color: var(--mdc-combobox-border-color);
  }
  :host(:not([disabled]))::part(combobox__base):hover {
    background-color: var(--mdc-combobox-hover-background-color);
  }
  :host([help-text-type='error'])::part(combobox__button),
  :host([help-text-type='warning'])::part(combobox__button),
  :host([help-text-type='success'])::part(combobox__button),
  :host([help-text-type='priority'])::part(combobox__button) {
    border-color: var(--mdc-help-text-color);
  }
  :host([disabled])::part(combobox__button) {
    border-inline-start-color: var(--mdc-combobox-text-color-disabled);
  }
  :host::part(combobox__button-icon) {
    --mdc-icon-fill-color: var(--mdc-combobox-icon-color);
  }
  :host([disabled])::part(combobox__button-icon) {
    --mdc-icon-fill-color: var(--mdc-combobox-text-color-disabled);
  }
  :host::part(no-result-text) {
    pointer-events: none;
  }
  :host::part(input-text) {
    /* 2rem is the complete width of dropdown button */
    width: calc(100% - 2rem);
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
    :host::part(combobox__button-icon) {
      --mdc-icon-fill-color: ButtonText;
    }
  }
`,K=[z];var X=Object.defineProperty,r=(u,t,e,i)=>{for(var o=void 0,l=u.length-1,d;l>=0;l--)(d=u[l])&&(o=d(t,e,o)||o);return o&&X(t,e,o),o};const m=class m extends W(k(N(L(P(f))))){constructor(){super(),this.placement=G.BOTTOM_START,this.boundary=O.BOUNDARY,this.strategy=O.STRATEGY,this.popoverZIndex=void 0,this.isOpen=!1,this.filteredValue="",this.initialSelectedOption=null,this.handleUpdateError=t=>{this.onerror&&this.onerror(t)},this.handleDestroyEvent=t=>{const e=t.detail.originalTarget;if(e&&(!this.isValidItem(e)||e.tabIndex!==0))return;const i=this.navItems.findIndex(l=>l===e);if(i===-1)return;let o=i+1;o>=this.navItems.length&&(o=i-1)},this.addEventListener(M.DESTROYED,this.handleDestroyEvent),this.itemsStore=new R(this,{isValidItem:this.isValidItem})}get navItems(){return this.itemsStore.items}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.inputElement&&(this.setInputValidity(),this.internals.setFormValue(this.inputElement.value))}).catch(this.handleUpdateError)}isValidItem(t){return t.matches(`${A}:not([disabled])`)}openPopover(){this.isOpen=!0}closePopover(){this.isOpen=!1}toggleDropdown(){this.isOpen=!this.isOpen}compareOptionWithValue(t,e){return(t.getAttribute("label")||"").toLowerCase().startsWith(e==null?void 0:e.toLowerCase())}getFirstSelectedOption(){return this.navItems.find(t=>t.hasAttribute("selected"))}getVisibleOptions(t){return this.navItems.filter(e=>this.compareOptionWithValue(e,t))}setSelectedValue(t){this.value=(t==null?void 0:t.getAttribute("value"))||"",this.filteredValue=(t==null?void 0:t.getAttribute("label"))||"",this.internals.setFormValue(this.value),this.updateHiddenOptions(),this.updateSelectedOption(t),this.setInputValidity(),this.resetHelpText(),$.onInputCombobox(this,t),$.onChangeCombobox(this,t)}resetSelectedValue(){this.value="",this.internals.setFormValue(this.value),this.resetHelpText()}resetHelpText(){this.invalidCustomValueText&&this.helpText===this.invalidCustomValueText&&(this.helpText="",this.helpTextType=c.DEFAULT)}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),t==="validation-message"&&this.updateComplete.then(()=>{this.setInputValidity()}).catch(this.handleUpdateError)}async firstUpdated(t){await this.updateComplete,this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(t);const e=this.getFirstSelectedOption();if(e)this.initialSelectedOption=e,this.setSelectedValue(e);else if(this.value){const i=this.navItems.find(o=>o.value===this.value);this.setSelectedValue(i)}else this.placeholder&&this.setInputValidity();this.navItems.forEach(i=>{i.setAttribute("tabindex","-1")})}updated(t){super.updated(t),(t.has("slottedListboxes")||t.has("isOpen"))&&(this.visualCombobox&&"ariaControlsElements"in this.visualCombobox&&(this.visualCombobox.ariaControlsElements=this.slottedListboxes),this.dropDownButton&&"ariaControlsElements"in this.dropDownButton&&(this.dropDownButton.ariaControlsElements=this.slottedListboxes)),(t.has("disabled")||t.has("readonly"))&&(this.disabled||this.readonly)&&this.closePopover()}setInputValidity(){var t,e;!this.value&&this.required?(this.validationMessage?(t=this.inputElement)==null||t.setCustomValidity(this.validationMessage):(e=this.inputElement)==null||e.setCustomValidity(""),this.setValidity()):this.internals.setValidity({})}formResetCallback(){const t=this.initialSelectedOption||null;this.setSelectedValue(t),this.filteredValue=(t==null?void 0:t.label)??"",this.setInputValidity()}formStateRestoreCallback(t){const e=this.navItems.find(i=>i.value===t||i.label===t);this.setSelectedValue(e||null)}handleNativeInputFocus(){this.visualCombobox.focus()}resetFocusedOption(){this.navItems.filter(t=>t.hasAttribute("data-focused")).forEach(t=>this.updateOptionAttributes(t,!1))}updateSelectedOption(t){this.navItems.forEach(e=>{e.removeAttribute("selected")}),t==null||t.setAttribute("selected","")}updateOptionAttributes(t,e){t!==void 0&&(e?t.setAttribute("data-focused",""):t.removeAttribute("data-focused"),t.setAttribute("aria-selected",e.toString()))}handleBlurChange(){const t=this.getVisibleOptions(this.filteredValue),e=t.findIndex(i=>i.hasAttribute("data-focused"));if(e!==-1){this.setSelectedValue(t[e]),this.closePopover();return}e===-1&&this.filteredValue!==""&&this.invalidCustomValueText&&!this.getFirstSelectedOption()&&(this.helpText=this.invalidCustomValueText,this.helpTextType=c.ERROR),this.setInputValidity()}updateFocusAndScrollIntoView(t,e,i){var o;this.updateOptionAttributes(t[e],!1),this.updateOptionAttributes(t[i],!0),(o=t[i])==null||o.scrollIntoView({block:"nearest"})}handleInputKeydown(t){const e=this.getVisibleOptions(this.filteredValue),i=e.findIndex(o=>o.hasAttribute("data-focused"));switch(this.getActionForKeyEvent(t)){case n.DOWN:{this.openPopover();const o=e.length-1===i?0:i+1;this.updateFocusAndScrollIntoView(e,i,o),t.preventDefault();break}case n.UP:{this.openPopover();const o=i===-1||i===0?e.length-1:i-1;this.updateFocusAndScrollIntoView(e,i,o),t.preventDefault();break}case n.ENTER:{if(i===-1)return;this.setSelectedValue(e[i]),this.isOpen&&this.closePopover();break}case n.ESCAPE:{i!==-1&&this.updateOptionAttributes(e[i],!1),e.length&&this.shouldDisplayPopover(e.length)||(this.resetSelectedValue(),this.filteredValue="");break}case n.TAB:{this.closePopover();break}case n.HOME:case n.END:{this.resetFocusedOption();break}}}updateHiddenOptions(){this.navItems.forEach(t=>{this.compareOptionWithValue(t,this.filteredValue)?(t.removeAttribute("data-hidden"),this.showOptionGroupAndDivider(t)):(t.setAttribute("data-hidden",""),this.hideOptionGroupAndDivider(t))})}hideOptionGroupAndDivider(t){var e,i,o;(e=t.parentElement)!=null&&e.matches(E)&&((i=Array.from(t.parentElement.children))==null?void 0:i.filter(d=>!d.hasAttribute("data-hidden"))).length===0&&(t.parentElement.setAttribute("data-hidden",""),(o=t.parentElement.nextElementSibling)!=null&&o.matches(v)&&t.parentElement.nextElementSibling.setAttribute("data-hidden",""))}showOptionGroupAndDivider(t){var e,i,o;(e=t.parentElement)!=null&&e.matches(E)&&((i=Array.from(t.parentElement.children))==null?void 0:i.filter(d=>!d.hasAttribute("data-hidden"))).length>0&&(t.parentElement.removeAttribute("data-hidden"),(o=t.parentElement.nextElementSibling)!=null&&o.matches(v)&&t.parentElement.nextElementSibling.removeAttribute("data-hidden"))}handleInputChange(t){var e;this.filteredValue=t.target.value,this.resetSelectedValue(),this.resetFocusedOption(),this.updateHiddenOptions(),(e=this.getFirstSelectedOption())==null||e.removeAttribute("selected"),this.isOpen===!1&&this.openPopover()}handleOptionsClick(t){const e=t.target.closest(A)??null;e&&!e.hasAttribute("disabled")&&(this.setSelectedValue(e),this.closePopover(),this.updateComplete.then(()=>this.handleNativeInputFocus()).catch(this.handleUpdateError))}shouldDisplayPopover(t){return this.disabled||this.readonly?!1:t?this.isOpen:!!this.noResultText}renderNativeInput(){return p`
      <input
        id="${this.inputId}"
        name="${this.name}"
        type="text"
        .value="${x(this.value)}"
        aria-hidden="true"
        part="internal-native-input"
        tabindex="-1"
        ?required=${this.required}
        ?disabled=${this.disabled}
        ?readonly=${this.readonly}
        autocomplete="${g.OFF}"
        @focus=${this.handleNativeInputFocus}
        @invalid=${this.setInputValidity}
      />
    `}renderBaseInput(){return p`
      <input
        id="${this.id}"
        slot="input"
        ?disabled="${this.disabled}"
        .value="${x(this.filteredValue)}"
        autocomplete="${g.OFF}"
        part="input-text"
        placeholder="${h(this.placeholder)}"
        role="${b.COMBOBOX}"
        ?readonly="${this.readonly}"
        ?required="${this.required}"
        @input=${this.handleInputChange}
        @keydown=${this.handleInputKeydown}
        @blur="${this.handleBlurChange}"
        aria-autocomplete="${q}"
        aria-describedby="${h(this.helpText?y.HELPER_TEXT_ID:"")}"
        aria-disabled="${this.disabled?"true":"false"}"
        aria-expanded="${this.isOpen?"true":"false"}"
        aria-haspopup="${b.LISTBOX}"
        aria-invalid="${this.helpTextType===c.ERROR?"true":"false"}"
        aria-label="${this.dataAriaLabel??""}"
        aria-labelledby="${this.label?y.HEADING_ID:""}"
        aria-readonly="${this.readonly?"true":"false"}"
        aria-required="${this.required?"true":"false"}"
      />
    `}renderNoResultsText(t){return t===0&&this.noResultText?p`<mdc-listitem part="no-result-text" tabindex="-1" role="" label="${this.noResultText}"></mdc-listitem>`:w}render(){const t=this.getVisibleOptions(this.filteredValue);return p`
      ${this.renderLabel()}
      <div part="combobox__base" id="${T}">
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
          part="combobox__button"
          ?disabled="${this.disabled}"
          tabindex="-1"
          aria-expanded="${this.isOpen?"true":"false"}"
          aria-label="${this.dataAriaLabel??""}"
        >
          <mdc-icon
            part="combobox__button-icon"
            name="${this.shouldDisplayPopover(t.length)?I.ARROW_UP:I.ARROW_DOWN}"
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
          trigger="${B.MANUAL}"
          triggerid="${T}"
          z-index="${h(this.popoverZIndex)}"
        >
          ${this.renderNoResultsText(t.length)}
          <slot @click="${this.handleOptionsClick}"></slot>
        </mdc-popover>
      </div>
      ${this.renderHelperText()}
    `}};m.styles=[...F.styles,...f.styles,...K];let s=m;r([a({type:String})],s.prototype,"placeholder");r([a({type:String,reflect:!0})],s.prototype,"placement");r([a({type:String,attribute:"no-result-text",reflect:!0})],s.prototype,"noResultText");r([a({type:String,attribute:"invalid-custom-value-text",reflect:!0})],s.prototype,"invalidCustomValueText");r([a({type:String,reflect:!0})],s.prototype,"boundary");r([a({type:String,reflect:!0})],s.prototype,"strategy");r([a({type:Number,reflect:!0,attribute:"popover-z-index"})],s.prototype,"popoverZIndex");r([a({type:String,reflect:!0,attribute:"backdrop-append-to"})],s.prototype,"backdropAppendTo");r([C(`[role="${b.COMBOBOX}"]`)],s.prototype,"visualCombobox");r([C('[part="combobox__button"]')],s.prototype,"dropDownButton");r([D({selector:U})],s.prototype,"slottedListboxes");r([V()],s.prototype,"isOpen");r([V()],s.prototype,"filteredValue");s.register(H);
