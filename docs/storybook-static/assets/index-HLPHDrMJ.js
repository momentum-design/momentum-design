import"./index-CHbRNK_L.js";import"./index-NDaHquKD.js";import"./index-gf9bccyL.js";import"./index-BRVp4QXx.js";import"./index-B3JutLcq.js";import{u as w,a2 as F,an as x,k as b,R as f,h as D,a4 as S,n,t as $}from"./iframe-DyOAHjNf.js";import{o as R}from"./query-assigned-elements-D6RvelBl.js";import{t as c}from"./if-defined-BEvGEaEj.js";import{F as g,I as M}from"./input.component-DZQGSihY.js";import{C as N,E as L}from"./CaptureDestroyEventForChildElement-CjW-poxG.js";import{A as P}from"./buttonsimple.component-BAb4hqAJ.js";import{D as _}from"./DataAriaLabelMixin-6CnB7Dxp.js";import{F as B}from"./FormInternalsMixin-BIu3KSu9.js";import{L as H}from"./LifeCycleMixin-CkFTW4AQ.js";import{F as y}from"./formfieldwrapper.component-gFlop3k9.js";import{V as m,D as A}from"./formfieldwrapper.constants-Dwy-a1Wn.js";import{a as T}from"./input.constants-brtby-jc.js";import{T as U}from"./optgroup.constants-CvabmG_i.js";import{T as I}from"./index-l2d6szJK.js";import{P as W,D as E,a as G}from"./popover.constants-CThX5JGE.js";import{T as q}from"./index-C6Va9nr1.js";import{a as K}from"./ControlTypeMixin-UNO05gMx.js";import{K as z,a as X,N as Y,A as d}from"./KeyDownHandledMixin-BCqzWN8b.js";const Z=w.constructTagName("combobox"),O={ARROW_UP:"arrow-up-bold",ARROW_DOWN:"arrow-down-bold"},C={MATCH_STARTS_WITH:"match-starts-with",NONE:"none"},j="list",V="combobox-trigger-id";class u{static dispatchComboboxEvent(t,e,i,s=!0){t.dispatchEvent(new CustomEvent(e,{detail:{value:i==null?void 0:i.value,label:i==null?void 0:i.label},composed:!0,bubbles:s}))}static onInputCombobox(t,e){this.dispatchComboboxEvent(t,"input",e)}static onChangeCombobox(t,e){this.dispatchComboboxEvent(t,"change",e)}}const J=F`
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
`,Q=[J];var tt=Object.defineProperty,a=(h,t,e,i)=>{for(var s=void 0,o=h.length-1,l;o>=0;o--)(l=h[o])&&(s=l(t,e,s)||s);return s&&tt(t,e,s),s};const v=class v extends z(X(N(P(B(_(K(y))))))){constructor(){super(),this.lastCommittedValue="",this.placement=W.BOTTOM_START,this.boundary=E.BOUNDARY,this.strategy=E.STRATEGY,this.popoverZIndex=void 0,this.filter=C.MATCH_STARTS_WITH,this.isOpen=!1,this.filteredValue="",this.initialSelectedOption=null,this.handleUpdateError=t=>{this.onerror&&this.onerror(t)},this.onStoreUpdate=(t,e,i,s)=>{switch(e){case"added":t.setAttribute("tabindex",i===0&&s.length===0?"0":"-1"),t.hasAttribute("selected")&&(this.navItems.forEach(o=>o.setAttribute("tabindex","-1")),t.setAttribute("tabindex","0"));break;case"removed":{const o=t;if(o&&(!this.isValidItem(o)||o.tabIndex!==0))return;const l=this.navItems.findIndex(k=>k===o);if(l===-1)return;let p=l+1;p>=this.navItems.length&&(p=l-1)}break}},this.handleModifiedEvent=t=>{if(this.controlType==="controlled"){this.updateHiddenOptions();return}const e=this.getFirstSelectedOption();switch(t.detail.change){case"selected":{if(t.target.hasAttribute("disabled"))return;e&&e.value!==this.value&&this.setSelectedValue(e,!1);break}case"unselected":{e&&this.setSelectedValue(e,!1);break}}},this.addEventListener(H.MODIFIED,this.handleModifiedEvent),this.itemsStore=new L(this,{isValidItem:this.isValidItem,onStoreUpdate:this.onStoreUpdate})}get navItems(){return this.itemsStore.items}get listboxId(){return`${this.inputId}-listbox`}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.inputElement&&(this.setInputValidity(),this.internals.setFormValue(this.inputElement.value))}).catch(this.handleUpdateError)}isValidItem(t){return t.matches(I)}openPopover(){this.isOpen=!0}closePopover(){this.isOpen=!1}compareOptionWithValue(t,e){return(t.getAttribute("label")||"").toLowerCase().startsWith(e==null?void 0:e.toLowerCase())}matchesFilter(t,e){return typeof this.filter=="function"?this.filter(t,e):this.filter===C.NONE?!0:this.compareOptionWithValue(t,e)}getFirstSelectedOption(){return this.navItems.find(t=>t.hasAttribute("selected"))}getVisibleOptions(t){return this.navItems.filter(e=>this.matchesFilter(e,t))}focusComboboxBase(){this.disabled||this.updateComplete.then(()=>{var t;(t=this.visualCombobox)==null||t.focus({preventScroll:!0})}).catch(this.handleUpdateError)}handleTriggerClick(){this.disabled||(this.isOpen=!this.isOpen,this.focusComboboxBase())}setSelectedValue(t,e=!0,i=!1){const s=(t==null?void 0:t.getAttribute("label"))||"",o=(t==null?void 0:t.getAttribute("value"))||"";if(!(this.value===o&&this.filteredValue===s)){if(this.controlType==="controlled"&&!i){e&&(u.onInputCombobox(this,t),u.onChangeCombobox(this,t));return}this.filteredValue=s,this.value=o,this.lastCommittedValue=o,this.internals.setFormValue(this.value),this.updateHiddenOptions(),this.updateSelectedOption(t),this.resetFocusedOption(),this.setInputValidity(),this.resetHelpText(),e&&!i&&t&&(u.onInputCombobox(this,t),u.onChangeCombobox(this,t))}}resetSelectedValue(){this.controlType!=="controlled"&&(this.value=""),this.internals.setFormValue(this.value),this.resetHelpText()}resetHelpText(){this.invalidCustomValueText&&this.helpText===this.invalidCustomValueText&&(this.helpText="",this.helpTextType=m.DEFAULT)}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),t==="value"&&this.navItems.length&&!(e===null&&i==="")){let s=null;if(i!==""){const o=this.getFirstSelectedOption(),l=this.navItems.find(p=>p.value===i);if(l)s=l;else if(o)s=o;else if(this.placeholder)s=null;else return}this.updateComplete.then(()=>{this.setSelectedValue(s,!1,!0)}).catch(this.handleUpdateError)}t==="validation-message"&&this.updateComplete.then(()=>{this.setInputValidity()}).catch(this.handleUpdateError)}async firstUpdated(t){await this.updateComplete,this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(t);const e=this.getFirstSelectedOption();e&&this.controlType!=="controlled"?(this.initialSelectedOption=e,this.setSelectedValue(e)):this.value?this.updateValueBasedSelection():this.placeholder&&this.setInputValidity(),this.lastCommittedValue=this.value,this.navItems.forEach(i=>{i.setAttribute("tabindex","-1")})}updateValueBasedSelection(){const t=this.navItems.find(e=>e.value===this.value);t&&this.setSelectedValue(t,!1,!0)}updated(t){var i,s;super.updated(t),(t.has("slottedListboxes")||t.has("isOpen"))&&(this.visualCombobox&&"ariaControlsElements"in this.visualCombobox&&(this.visualCombobox.ariaControlsElements=this.slottedListboxes),this.dropDownButton&&"ariaControlsElements"in this.dropDownButton&&(this.dropDownButton.ariaControlsElements=this.slottedListboxes));const e=(i=this.slottedListboxes)==null?void 0:i[0];e&&(e.id=this.listboxId,e.setAttribute("aria-label",this.label||this.dataAriaLabel||""),(s=this.visualCombobox)==null||s.setAttribute("aria-controls",this.listboxId)),(t.has("disabled")||t.has("readonly"))&&(this.disabled||this.readonly)&&this.closePopover(),t.has("value")&&this.updateValueBasedSelection()}setInputValidity(){var t,e;!this.value&&this.required?(this.validationMessage?(t=this.inputElement)==null||t.setCustomValidity(this.validationMessage):(e=this.inputElement)==null||e.setCustomValidity(""),this.setValidity()):this.internals.setValidity({})}formResetCallback(){const t=this.initialSelectedOption||null;this.setSelectedValue(t,!1,!0),this.controlType!=="controlled"&&(this.filteredValue=(t==null?void 0:t.label)??""),this.setInputValidity()}formStateRestoreCallback(t){const e=this.navItems.find(i=>i.value===t||i.label===t);this.setSelectedValue(e||null,!1,!0)}handleNativeInputFocus(){this.visualCombobox.focus()}resetFocusedOption(){this.navItems.filter(t=>t.hasAttribute("data-focused")).forEach(t=>this.updateOptionAttributes(t,!1))}updateSelectedOption(t){this.navItems.forEach(e=>{e.removeAttribute("selected")}),t==null||t.setAttribute("selected","")}updateOptionAttributes(t,e){t!==void 0&&(e?(t.setAttribute("data-focused",""),this.openTooltipIfExists(t)):(t.removeAttribute("data-focused"),this.closeTooltipIfExists(t)),t.setAttribute("aria-selected",e.toString()))}openTooltipIfExists(t){const e=t.getAttribute("id");if(!e)return;const i=this.querySelector(`mdc-tooltip[triggerid="${e}"]`);i==null||i.setAttribute("visible","")}closeTooltipIfExists(t){const e=t.getAttribute("id");if(!e)return;const i=this.querySelector(`mdc-tooltip[triggerid="${e}"][visible]`);i&&i.removeAttribute("visible")}handleBlurChange(){const t=this.getVisibleOptions(this.filteredValue),e=t.findIndex(s=>s.hasAttribute("data-focused"));if(e!==-1){this.setSelectedValue(t[e]),this.closePopover();return}const i=this.navItems.find(s=>(s.getAttribute("label")||"").toLowerCase()===this.filteredValue.toLowerCase());if(i){this.setSelectedValue(i),this.closePopover();return}if(this.filteredValue!=="")if(this.lastCommittedValue){const s=this.navItems.find(o=>o.value===this.lastCommittedValue);this.setSelectedValue(s)}else this.invalidCustomValueText&&!this.getFirstSelectedOption()&&(this.helpText=this.invalidCustomValueText,this.helpTextType=m.ERROR,this.setInputValidity());else this.setSelectedValue(null);this.closePopover()}updateFocusAndScrollIntoView(t,e,i){var s;this.updateOptionAttributes(t[e],!1),this.updateOptionAttributes(t[i],!0),(s=t[i])==null||s.scrollIntoView({block:"nearest"})}handleInputKeydown(t){const e=this.getVisibleOptions(this.filteredValue).filter(o=>!o.hasAttribute("disabled")),i=e.findIndex(o=>o.hasAttribute("data-focused")),s=this.getKeyboardNavMode()===Y.SPATIAL;switch(this.getActionForKeyEvent(t)){case d.DOWN:{if(!s)this.openPopover();else if(!this.isOpen)break;const o=e.length-1===i?0:i+1;this.updateFocusAndScrollIntoView(e,i,o),t.preventDefault(),this.keyDownEventHandled();break}case d.UP:{if(!s)this.openPopover();else if(!this.isOpen)break;const o=i===-1||i===0?e.length-1:i-1;this.updateFocusAndScrollIntoView(e,i,o),t.preventDefault(),this.keyDownEventHandled();break}case d.ENTER:{if(s&&!this.isOpen)this.openPopover();else{if(i===-1)return;this.setSelectedValue(e[i]),this.isOpen&&this.closePopover()}this.keyDownEventHandled();break}case d.ESCAPE:{i!==-1&&this.updateOptionAttributes(e[i],!1),e.length&&this.shouldDisplayPopover(e.length)||(this.resetSelectedValue(),this.controlType!=="controlled"&&(this.filteredValue="")),this.keyDownEventHandled();break}case d.TAB:{this.closePopover(),this.keyDownEventHandled();break}case d.HOME:case d.END:{this.resetFocusedOption(),this.keyDownEventHandled();break}}}updateHiddenOptions(){const t=new Map,e=new Set;this.navItems.forEach(i=>{const s=this.matchesFilter(i,this.filteredValue);s?i.removeAttribute("data-hidden"):i.setAttribute("data-hidden","");const o=i.parentElement;if(o&&o.matches(U)){const l=o;e.add(l),s&&t.set(l,(t.get(l)??0)+1)}}),e.forEach(i=>{const s=(t.get(i)??0)>0,o=i.nextElementSibling;s?(i.removeAttribute("data-hidden"),o&&o.matches(x)&&o.removeAttribute("data-hidden")):(i.setAttribute("data-hidden",""),o&&o.matches(x)&&o.setAttribute("data-hidden",""))})}handleInputChange(t){var e;t.preventDefault(),t.stopPropagation(),this.filteredValue=t.target.value,this.resetFocusedOption(),this.updateHiddenOptions(),(e=this.getFirstSelectedOption())==null||e.removeAttribute("selected"),this.isOpen===!1&&this.openPopover(),u.onInputCombobox(this,{value:this.filteredValue})}handleOptionsClick(t){t.preventDefault(),t.stopPropagation();const e=t.target.closest(I)??null;e&&!e.hasAttribute("disabled")&&(this.setSelectedValue(e),this.closePopover(),this.focusComboboxBase())}shouldDisplayPopover(t){return this.disabled||this.readonly?!1:t||this.noResultText?this.isOpen:!1}renderNativeInput(){return b`
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
        autocomplete="${T.OFF}"
        @focus=${this.handleNativeInputFocus}
        @invalid=${this.setInputValidity}
      />
    `}renderBaseInput(){return b`
      <input
        id="${this.id}"
        slot="input"
        ?disabled="${this.disabled}"
        tabindex="${this.disabled?-1:0}"
        .value="${g(this.filteredValue)}"
        autocomplete="${T.OFF}"
        part="input-text"
        placeholder="${c(this.placeholder)}"
        role="${f.COMBOBOX}"
        ?readonly="${this.readonly}"
        ?required="${this.required}"
        @input=${this.handleInputChange}
        @keydown=${this.handleInputKeydown}
        @blur="${this.handleBlurChange}"
        aria-autocomplete="${j}"
        aria-controls=""
        aria-describedby="${c(this.helpText?A.HELPER_TEXT_ID:"")}"
        aria-disabled="${this.disabled?"true":"false"}"
        aria-expanded="${this.isOpen?"true":"false"}"
        aria-haspopup="${f.LISTBOX}"
        aria-invalid="${this.helpTextType===m.ERROR?"true":"false"}"
        aria-label="${this.dataAriaLabel??""}"
        aria-labelledby="${this.label?A.HEADING_ID:""}"
        aria-readonly="${this.readonly?"true":"false"}"
        aria-required="${this.required?"true":"false"}"
      />
    `}renderNoResultsText(t){return t===0&&this.noResultText?b`<mdc-listitem part="no-result-text" tabindex="-1" role="" label="${this.noResultText}"></mdc-listitem>`:D}render(){const t=this.getVisibleOptions(this.filteredValue);return b`
      ${this.renderLabel()}
      <div part="combobox-base" id="${V}">
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
            name="${this.shouldDisplayPopover(t.length)?O.ARROW_UP:O.ARROW_DOWN}"
            size="1"
            length-unit="rem"
          ></mdc-icon>
        </mdc-buttonsimple>
        <mdc-popover
          ?visible="${this.shouldDisplayPopover(t.length)}"
          @closebyescape="${()=>{this.closePopover()}}"
          @closebyoutsideclick="${()=>{this.closePopover(),this.focusComboboxBase()}}"
          backdrop
          backdrop-append-to="${c(this.backdropAppendTo)}"
          boundary="${c(this.boundary)}"
          disable-aria-expanded
          exportparts="popover-content"
          hide-on-escape
          hide-on-outside-click
          is-backdrop-invisible
          placement="${this.placement}"
          role=""
          size
          strategy="${c(this.strategy)}"
          trigger="${G.MANUAL}"
          triggerid="${V}"
          z-index="${c(this.popoverZIndex)}"
        >
          ${this.renderNoResultsText(t.length)}
          <slot @mousedown="${this.handleOptionsClick}"></slot>
        </mdc-popover>
      </div>
      ${this.renderHelperText()}
    `}};v.styles=[...M.styles,...y.styles,...Q];let r=v;a([n({type:String})],r.prototype,"placeholder");a([n({type:String,reflect:!0})],r.prototype,"placement");a([n({type:String,attribute:"no-result-text",reflect:!0})],r.prototype,"noResultText");a([n({type:String,attribute:"invalid-custom-value-text",reflect:!0})],r.prototype,"invalidCustomValueText");a([n({type:String,reflect:!0})],r.prototype,"boundary");a([n({type:String,reflect:!0})],r.prototype,"strategy");a([n({type:Number,reflect:!0,attribute:"popover-z-index"})],r.prototype,"popoverZIndex");a([n({type:String,reflect:!0,converter:{toAttribute(h){return typeof h=="string"?h:null}}})],r.prototype,"filter");a([n({type:String,reflect:!0,attribute:"backdrop-append-to"})],r.prototype,"backdropAppendTo");a([$(`[role="${f.COMBOBOX}"]`)],r.prototype,"visualCombobox");a([$('[part="combobox-button"]')],r.prototype,"dropDownButton");a([R({selector:q})],r.prototype,"slottedListboxes");a([S()],r.prototype,"isOpen");a([S()],r.prototype,"filteredValue");r.register(Z);export{C as F};
