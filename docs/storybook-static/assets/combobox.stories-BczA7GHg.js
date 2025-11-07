import{u as re,S as se,ac as O,k as s,W as $,h as de,n as m,$ as le}from"./iframe-D-wtYgP4.js";import"./index-ERfArr-e.js";import"./index-R2uCROWE.js";import"./index-D0yX2Vwg.js";import"./index-DMkhll1r.js";import"./index-BVob5N4b.js";import{e as ie}from"./query-BPxBhMfF.js";import{o as ce}from"./query-assigned-elements-uEuc3rg8.js";import{t as u}from"./if-defined-CgebNzyn.js";import{F as C,I as me}from"./input.component-CLZqcJd4.js";import{C as pe,E as be}from"./CaptureDestroyEventForChildElement-DGco7M62.js";import{K as p}from"./TabIndexMixin-8R5zBaJM.js";import{A as ue}from"./buttonsimple.component-BhoVFfPX.js";import{D as he}from"./DataAriaLabelMixin-008vVYaB.js";import{F as xe}from"./FormInternalsMixin-DZlIr-NT.js";import{b as ve}from"./listitem.component-BICw8Ubh.js";import{F as E}from"./formfieldwrapper.component-BTrEtnOG.js";import{V as r,D as w}from"./formfieldwrapper.constants-CiRnuiYm.js";import{a as V}from"./input.constants-CtjPzl_U.js";import{T as k}from"./index-OUh_pe4t.js";import{T as R}from"./index-BvjIQwvy.js";import{P as h,D as T,d as ye,S as D}from"./popover.component-DXo1Q79I.js";import{T as ge}from"./index-Bgu6tig5.js";import"./index-BNNuxFcN.js";import"./index-DkuuYiqN.js";import{c as fe,s as Se}from"./commonArgTypes-BluK8w5L.js";import{a as Ae,h as Te}from"./utils-Dd_sfl9-.js";import"./preload-helper-C1FmrZbK.js";import"./index-Nn1cdab0.js";import"./index-DTrDRi1E.js";import"./index-BgVBsRrr.js";import"./base-DIkkzJ-c.js";import"./index-BcrmARF7.js";import"./v4-CmTdKEVZ.js";import"./directive-Ctav8iJK.js";import"./index-B96Q8fqx.js";import"./DisabledMixin-DZ9F4VFG.js";import"./BackdropMixin-DuBcFtIs.js";import"./button.component-L5eFM7wO.js";import"./button.utils-rNW36Ji7.js";const $e=re.constructTagName("combobox"),_={ARROW_UP:"arrow-up-bold",ARROW_DOWN:"arrow-down-bold"},Ie="list",F="combobox-trigger-id";class L{static dispatchComboboxEvent(e,t,o,l=!0){e.dispatchEvent(new CustomEvent(t,{detail:{value:o==null?void 0:o.value,label:o==null?void 0:o.label},composed:!0,bubbles:l}))}static onInputCombobox(e,t){this.dispatchComboboxEvent(e,"input",t)}static onChangeCombobox(e,t){this.dispatchComboboxEvent(e,"change",t)}}const Oe=se`
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
`,Ce=[Oe];var Ee=Object.defineProperty,d=(a,e,t,o)=>{for(var l=void 0,i=a.length-1,b;i>=0;i--)(b=a[i])&&(l=b(e,t,l)||l);return l&&Ee(e,t,l),l};const I=class I extends pe(ue(xe(he(E)))){constructor(){super(),this.placement=h.BOTTOM_START,this.boundary=T.BOUNDARY,this.strategy=T.STRATEGY,this.popoverZIndex=T.Z_INDEX,this.isOpen=!1,this.filteredValue="",this.initialSelectedOption=null,this.handleUpdateError=e=>{this.onerror&&this.onerror(e)},this.handleDestroyEvent=e=>{const t=e.detail.originalTarget;if(t&&(!this.isValidItem(t)||t.tabIndex!==0))return;const o=this.navItems.findIndex(i=>i===t);if(o===-1)return;let l=o+1;l>=this.navItems.length&&(l=o-1)},this.addEventListener(ve.DESTROYED,this.handleDestroyEvent),this.itemsStore=new be(this,{isValidItem:this.isValidItem})}get navItems(){return this.itemsStore.items}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.inputElement&&(this.setInputValidity(),this.internals.setFormValue(this.inputElement.value))}).catch(this.handleUpdateError)}isValidItem(e){return e.matches(`${R}:not([disabled])`)}openPopover(){this.isOpen=!0}closePopover(){this.isOpen=!1}toggleDropdown(){this.isOpen=!this.isOpen}compareOptionWithValue(e,t){return(e.getAttribute("label")||"").toLowerCase().startsWith(t==null?void 0:t.toLowerCase())}getFirstSelectedOption(){return this.navItems.find(e=>e.hasAttribute("selected"))}getVisibleOptions(e){return this.navItems.filter(t=>this.compareOptionWithValue(t,e))}setSelectedValue(e){this.value=(e==null?void 0:e.getAttribute("value"))||"",this.filteredValue=(e==null?void 0:e.getAttribute("label"))||"",this.internals.setFormValue(this.value),this.updateHiddenOptions(),this.updateSelectedOption(e),this.setInputValidity(),this.resetHelpText(),L.onInputCombobox(this,e),L.onChangeCombobox(this,e)}resetSelectedValue(){this.value="",this.internals.setFormValue(this.value),this.resetHelpText()}resetHelpText(){this.invalidCustomValueText&&this.helpText===this.invalidCustomValueText&&(this.helpText="",this.helpTextType=r.DEFAULT)}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),e==="validation-message"&&this.updateComplete.then(()=>{this.setInputValidity()}).catch(this.handleUpdateError)}async firstUpdated(e){await this.updateComplete,this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(e);const t=this.getFirstSelectedOption();if(t)this.initialSelectedOption=t,this.setSelectedValue(t);else if(this.value){const o=this.navItems.find(l=>l.value===this.value);this.setSelectedValue(o)}else this.placeholder&&this.setInputValidity();this.navItems.forEach(o=>{o.setAttribute("tabindex","-1")})}updated(e){super.updated(e),(e.has("slottedListboxes")||e.has("isOpen"))&&(this.visualCombobox&&"ariaControlsElements"in this.visualCombobox&&(this.visualCombobox.ariaControlsElements=this.slottedListboxes),this.dropDownButton&&"ariaControlsElements"in this.dropDownButton&&(this.dropDownButton.ariaControlsElements=this.slottedListboxes)),(e.has("disabled")||e.has("readonly"))&&(this.disabled||this.readonly)&&this.closePopover()}setInputValidity(){var e,t;!this.value&&this.required?(this.validationMessage?(e=this.inputElement)==null||e.setCustomValidity(this.validationMessage):(t=this.inputElement)==null||t.setCustomValidity(""),this.setValidity()):this.internals.setValidity({})}formResetCallback(){const e=this.initialSelectedOption||null;this.setSelectedValue(e),this.filteredValue=(e==null?void 0:e.label)??"",this.setInputValidity()}formStateRestoreCallback(e){const t=this.navItems.find(o=>o.value===e||o.label===e);this.setSelectedValue(t||null)}handleNativeInputFocus(){this.visualCombobox.focus()}resetFocusedOption(){this.navItems.filter(e=>e.hasAttribute("data-focused")).forEach(e=>this.updateOptionAttributes(e,!1))}updateSelectedOption(e){this.navItems.forEach(t=>{t.removeAttribute("selected")}),e==null||e.setAttribute("selected","")}updateOptionAttributes(e,t){e!==void 0&&(t?e.setAttribute("data-focused",""):e.removeAttribute("data-focused"),e.setAttribute("aria-selected",t.toString()))}handleBlurChange(){const e=this.getVisibleOptions(this.filteredValue),t=e.findIndex(o=>o.hasAttribute("data-focused"));if(t!==-1){this.setSelectedValue(e[t]),this.closePopover();return}t===-1&&this.filteredValue!==""&&this.invalidCustomValueText&&!this.getFirstSelectedOption()&&(this.helpText=this.invalidCustomValueText,this.helpTextType=r.ERROR),this.setInputValidity()}updateFocusAndScrollIntoView(e,t,o){var l;this.updateOptionAttributes(e[t],!1),this.updateOptionAttributes(e[o],!0),(l=e[o])==null||l.scrollIntoView({block:"nearest"})}handleInputKeydown(e){const t=this.getVisibleOptions(this.filteredValue),o=t.findIndex(l=>l.hasAttribute("data-focused"));switch(e.key){case p.ARROW_DOWN:{this.openPopover();const l=t.length-1===o?0:o+1;this.updateFocusAndScrollIntoView(t,o,l),e.preventDefault();break}case p.ARROW_UP:{this.openPopover();const l=o===-1||o===0?t.length-1:o-1;this.updateFocusAndScrollIntoView(t,o,l),e.preventDefault();break}case p.ENTER:{if(o===-1)return;this.setSelectedValue(t[o]),this.isOpen===!0&&this.closePopover();break}case p.ESCAPE:{o!==-1&&this.updateOptionAttributes(t[o],!1),t.length&&this.shouldDisplayPopover(t.length)?this.closePopover():(this.resetSelectedValue(),this.filteredValue="");break}case p.TAB:{this.closePopover();break}case p.HOME:case p.END:{this.resetFocusedOption();break}}}updateHiddenOptions(){this.navItems.forEach(e=>{this.compareOptionWithValue(e,this.filteredValue)?(e.removeAttribute("data-hidden"),this.showOptionGroupAndDivider(e)):(e.setAttribute("data-hidden",""),this.hideOptionGroupAndDivider(e))})}hideOptionGroupAndDivider(e){var t,o,l;(t=e.parentElement)!=null&&t.matches(k)&&((o=Array.from(e.parentElement.children))==null?void 0:o.filter(b=>!b.hasAttribute("data-hidden"))).length===0&&(e.parentElement.setAttribute("data-hidden",""),(l=e.parentElement.nextElementSibling)!=null&&l.matches(O)&&e.parentElement.nextElementSibling.setAttribute("data-hidden",""))}showOptionGroupAndDivider(e){var t,o,l;(t=e.parentElement)!=null&&t.matches(k)&&((o=Array.from(e.parentElement.children))==null?void 0:o.filter(b=>!b.hasAttribute("data-hidden"))).length>0&&(e.parentElement.removeAttribute("data-hidden"),(l=e.parentElement.nextElementSibling)!=null&&l.matches(O)&&e.parentElement.nextElementSibling.removeAttribute("data-hidden"))}handleInputChange(e){var t;this.filteredValue=e.target.value,this.resetSelectedValue(),this.resetFocusedOption(),this.updateHiddenOptions(),(t=this.getFirstSelectedOption())==null||t.removeAttribute("selected"),this.isOpen===!1&&this.openPopover()}handleOptionsClick(e){const t=e.target.closest(R)??null;t&&!t.hasAttribute("disabled")&&(this.setSelectedValue(t),this.closePopover(),this.updateComplete.then(()=>this.handleNativeInputFocus()).catch(this.handleUpdateError))}shouldDisplayPopover(e){return this.disabled||this.readonly?!1:e?this.isOpen:!!this.noResultText}renderNativeInput(){return s`
      <input
        id="${this.inputId}"
        name="${this.name}"
        type="text"
        .value="${C(this.value)}"
        aria-hidden="true"
        part="internal-native-input"
        tabindex="-1"
        ?required=${this.required}
        ?disabled=${this.disabled}
        ?readonly=${this.readonly}
        autocomplete="${V.OFF}"
        @focus=${this.handleNativeInputFocus}
        @invalid=${this.setInputValidity}
      />
    `}renderBaseInput(){return s`
      <input
        id="${this.id}"
        slot="input"
        ?disabled="${this.disabled}"
        .value="${C(this.filteredValue)}"
        autocomplete="${V.OFF}"
        part="input-text"
        placeholder="${u(this.placeholder)}"
        role="${$.COMBOBOX}"
        ?readonly="${this.readonly}"
        ?required="${this.required}"
        @input=${this.handleInputChange}
        @keydown=${this.handleInputKeydown}
        @blur="${this.handleBlurChange}"
        aria-autocomplete="${Ie}"
        aria-describedby="${u(this.helpText?w.HELPER_TEXT_ID:"")}"
        aria-disabled="${this.disabled?"true":"false"}"
        aria-expanded="${this.isOpen?"true":"false"}"
        aria-haspopup="${$.LISTBOX}"
        aria-invalid="${this.helpTextType===r.ERROR?"true":"false"}"
        aria-label="${this.dataAriaLabel??""}"
        aria-labelledby="${this.label?w.HEADING_ID:""}"
        aria-readonly="${this.readonly?"true":"false"}"
        aria-required="${this.required?"true":"false"}"
      />
    `}renderNoResultsText(e){return e===0&&this.noResultText?s`<mdc-listitem part="no-result-text" tabindex="-1" role="" label="${this.noResultText}"></mdc-listitem>`:de}render(){const e=this.getVisibleOptions(this.filteredValue);return s`
      ${this.renderLabel()}
      <div part="combobox__base" id="${F}">
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
            name="${this.shouldDisplayPopover(e.length)?_.ARROW_UP:_.ARROW_DOWN}"
            size="1"
            length-unit="rem"
          ></mdc-icon>
        </mdc-buttonsimple>
        <mdc-popover
          ?visible="${this.shouldDisplayPopover(e.length)}"
          @closebyescape="${()=>{this.closePopover()}}"
          @closebyoutsideclick="${()=>{this.closePopover(),this.handleNativeInputFocus()}}"
          backdrop
          backdrop-append-to="${u(this.backdropAppendTo)}"
          boundary="${u(this.boundary)}"
          disable-aria-expanded
          exportparts="popover-content"
          hide-on-escape
          hide-on-outside-click
          is-backdrop-invisible
          placement="${this.placement}"
          role=""
          size
          strategy="${u(this.strategy)}"
          trigger="${ye.MANUAL}"
          triggerid="${F}"
          z-index="${u(this.popoverZIndex)}"
        >
          ${this.renderNoResultsText(e.length)}
          <slot @click="${this.handleOptionsClick}"></slot>
        </mdc-popover>
      </div>
      ${this.renderHelperText()}
    `}};I.styles=[...me.styles,...E.styles,...Ce];let n=I;d([m({type:String})],n.prototype,"placeholder");d([m({type:String,reflect:!0})],n.prototype,"placement");d([m({type:String,attribute:"no-result-text",reflect:!0})],n.prototype,"noResultText");d([m({type:String,attribute:"invalid-custom-value-text",reflect:!0})],n.prototype,"invalidCustomValueText");d([m({type:String,reflect:!0})],n.prototype,"boundary");d([m({type:String,reflect:!0})],n.prototype,"strategy");d([m({type:Number,reflect:!0,attribute:"popover-z-index"})],n.prototype,"popoverZIndex");d([m({type:String,reflect:!0,attribute:"backdrop-append-to"})],n.prototype,"backdropAppendTo");d([ie(`[role="${$.COMBOBOX}"]`)],n.prototype,"visualCombobox");d([ie('[part="combobox__button"]')],n.prototype,"dropDownButton");d([ce({selector:ge})],n.prototype,"slottedListboxes");d([le()],n.prototype,"isOpen");d([le()],n.prototype,"filteredValue");n.register($e);const{action:c}=__STORYBOOK_MODULE_ACTIONS__,we=a=>s`<div style="width: 25rem; height: 100%; display: flex; align-items: center;">${a}</div>`,ne=a=>s` <mdc-combobox
    @change="${c("onchange")}"
    @click="${c("onclick")}"
    @input="${c("oninput")}"
    @keydown="${c("onkeydown")}"
    @focus="${c("onfocus")}"
    backdrop-append-to="${a["backdrop-append-to"]}"
    boundary="${a.boundary}"
    data-aria-label="${a["data-aria-label"]}"
    ?disabled="${a.disabled}"
    help-text="${a["help-text"]}"
    help-text-type="${a["help-text-type"]}"
    info-icon-aria-label="${a["info-icon-aria-label"]}"
    label="${a.label}"
    name="${a.name}"
    no-result-text="${a["no-result-text"]}"
    placeholder="${a.placeholder}"
    placement="${a.placement}"
    popover-z-index="${a["popover-z-index"]}"
    ?required="${a.required}"
    ?readonly="${a.readonly}"
    strategy="${a.strategy}"
    value="${a.value}"
    ?auto-focus-on-mount="${a["auto-focus-on-mount"]}"
    toggletip-text="${a["toggletip-text"]}"
    toggletip-placement="${a["toggletip-placement"]}"
    toggletip-strategy="${a["toggletip-strategy"]}"
    validation-message="${a["validation-message"]}"
    invalid-custom-value-text="${a["invalid-custom-value-text"]}"
  >
    ${a.children}
  </mdc-combobox>`,xt={title:"Components/combobox",tags:["autodocs"],component:"mdc-combobox",render:ne,parameters:{badges:["stable"]},argTypes:{"auto-focus-on-mount":{control:"boolean"},"backdrop-append-to":{control:"text"},boundary:{control:"text"},"data-aria-label":{control:"text"},disabled:{control:"boolean"},"help-text":{control:"text"},"help-text-type":{control:"select",options:Object.values(r)},"info-icon-aria-label":{control:"text"},label:{control:"text"},name:{control:"text"},"no-result-text":{control:"text"},placeholder:{control:"text"},placement:{control:"select",options:[h.BOTTOM_START,h.TOP_START]},"popover-z-index":{control:"number"},readonly:{control:"boolean"},required:{control:"boolean"},strategy:{control:"select",options:Object.values(D)},value:{control:"text"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(h)},"toggletip-strategy":{control:"select",options:Object.values(D)},"validation-message":{control:"text"},"invalid-custom-value-text":{control:"text"},...Ae(["id","value","validity","willValidate","default","itemsStore","handleUpdateError"]),...fe,...Se}},x={args:{value:"",label:"Top Countries",name:"country","help-text":"Select a country","help-text-type":r.DEFAULT,disabled:!1,readonly:!1,"no-result-text":"",placeholder:"Start typing","data-aria-label":"Select a country","info-icon-aria-label":"Required icon label",placement:h.BOTTOM_START,"invalid-custom-value-text":"Custom values are not allowed",children:s`
      <mdc-selectlistbox>
        <mdc-option value="arg" label="Argentina"></mdc-option>
        <mdc-option value="aus" label="Australia"></mdc-option>
        <mdc-option value="au" label="Austria"></mdc-option>
        <mdc-option value="ban" label="Bangladesh"></mdc-option>
        <mdc-option value="bel" label="Belgium"></mdc-option>
        <mdc-option value="bra" label="Brazil"></mdc-option>
        <mdc-option value="can" label="Canada"></mdc-option>
        <mdc-option value="chi" label="China"></mdc-option>
        <mdc-option value="col" label="Colombia"></mdc-option>
        <mdc-option value="den" label="Denmark"></mdc-option>
      </mdc-selectlistbox>
    `},render:a=>we(ne(a))},v={render:()=>s`
      <mdc-combobox
        name="country"
        label="Top Countries"
        placeholder="Start typing"
        help-text="Select a country"
        help-text-type="${r.SUCCESS}"
        data-aria-label="Select a country"
        required
      >
        <mdc-selectlistbox>
          <mdc-option value="usa" selected label="America"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
      <mdc-combobox
        help-text="Selecting this number may cause a security risk because it is not properly setup."
        help-text-type="${r.WARNING}"
        label="Select phone number"
        data-aria-label="Select phone number"
        required
      >
        <mdc-selectlistbox>
          <mdc-option selected value="456-198-0253" label="456-198-0253"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
      <mdc-combobox
        help-text-type="${r.ERROR}"
        help-text="You must select the total number of Infinity Stones."
        label="How many Infinity Stones exist?"
        placeholder="Select the total number of Infinity Stones"
        data-aria-label="How many Infinity Stones exist?"
        required
      ></mdc-combobox>
      <mdc-combobox
        help-text-type="${r.PRIORITY}"
        help-text="You must select the total number of Infinity Stones."
        label="How many Infinity Stones exist?"
        placeholder="Select the total number of Infinity Stones"
        data-aria-label="How many Infinity Stones exist?"
        required
      ></mdc-combobox>
      <mdc-combobox help-text="This is a disabled text." label="Label" data-aria-label="This is a disabled text." placeholder="Disabled text" disabled>
        <mdc-selectlistbox>
          <mdc-option value="avenger" selected label="Avengers"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
      <mdc-combobox help-text="This is a readonly text." label="Label" data-aria-label="This is a readonly text." placeholder="Readonly text" readonly>
        <mdc-selectlistbox>
          <mdc-option value="avenger" selected label="Avengers"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
    </div>
  `},y={args:{label:"Fruits and Vegetables",placeholder:"Type a fruit or vegetable","no-result-text":"No results found","data-aria-label":"Fruits and Vegetables",children:s` <mdc-selectlistbox>
      <mdc-optgroup label="Fruit">
        <mdc-option value="apple" label="Apples"></mdc-option>
        <mdc-option value="banana" label="Bananas"></mdc-option>
        <mdc-option value="cherry" label="Cherries"></mdc-option>
        <mdc-option value="tomato" label="Tomato"></mdc-option>
      </mdc-optgroup>
      <mdc-divider></mdc-divider>
      <mdc-optgroup label="Vegetables">
        <mdc-option value="artichoke" label="Artichokes"></mdc-option>
        <mdc-option value="broccoli" label="Broccoli"></mdc-option>
        <mdc-option value="cabbage" label="Cabbages"></mdc-option>
      </mdc-optgroup>
      <mdc-divider></mdc-divider>
      <mdc-optgroup label="Fish">
        <mdc-option value="tuna" label="Tuna"></mdc-option>
        <mdc-option value="salmon" label="Salmon"></mdc-option>
      </mdc-optgroup>
    </mdc-selectlistbox>`}},g={args:{name:"avengers-name",placeholder:"Select the avenger",label:"Who is your favorite Avenger?",value:"hulk",required:!0,"data-aria-label":"Who is your favorite Avenger?",children:s`
      <mdc-selectlistbox>
        <mdc-option value="ironman" label="Iron Man"></mdc-option>
        <mdc-option value="captainamerica" label="Captain America"></mdc-option>
        <mdc-option value="thor" label="Thor"></mdc-option>
        <mdc-option value="hulk" selected label="Hulk"></mdc-option>
        <mdc-option value="blackwidow" label="Black Widow"></mdc-option>
        <mdc-option value="hawkeye" label="Hawkeye"></mdc-option>
      </mdc-selectlistbox>
    `}},f={render:()=>s`
    <mdc-combobox
      placeholder="Type a color"
      label="Select one color"
      data-aria-label="Select one color"
      style="width: 300px;"
    >
      <mdc-selectlistbox>
        <mdc-option label="Red"></mdc-option>
        <mdc-option label="Yellow" id="trigger-option"></mdc-option>
        <mdc-option id="option-3" label="White and Black are the biggest colors on the spectrum"></mdc-option>
        <mdc-option label="Green"></mdc-option>
      </mdc-selectlistbox>
    </mdc-combobox>
    <mdc-tooltip triggerid="option-3" show-arrow> White and Black are the biggest colors on the spectrum </mdc-tooltip>
  `},S={render:()=>s`
      <form @submit=${e=>{e.preventDefault();const t=new FormData(e.target),o=t.get("avengers-name"),l=t.get("stone-count");c("Form Submitted")({value:{selectedAvengers:o,selectedStones:l}})}}>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem; height: 20rem; width: 20rem;">
          <mdc-combobox
            id="avenger-form"
            name="avengers-name"
            placeholder="Type the avenger name"
            label="Who is your favorite Avenger?"
            required
            @change=${c("avengers combobox onchange")}
            @input=${c("avengers combobox oninput")}
            data-aria-label="Select the avenger"
            validation-message="You must select an Avenger"
          >
            <mdc-selectlistbox>
              <mdc-option value="ironman" label="Iron Man"></mdc-option>
              <mdc-option value="captainamerica" label="Captain America"></mdc-option>
              <mdc-option value="thor" label="Thor"></mdc-option>
              <mdc-option value="hulk" selected label="Hulk"></mdc-option>
              <mdc-option value="blackwidow" label="Black Widow"></mdc-option>
              <mdc-option value="hawkeye" label="Hawkeye"></mdc-option>
            </mdc-selectlistbox>
          </mdc-combobox>
          <mdc-combobox
            name="stone-count"
            placeholder="Type the count"
            label="How many Infinity Stones exist?"
            required
            @change=${c("stones combobox onchange")}
            @input=${c("stones combobox oninput")}
            data-aria-label="How many Infinity Stones exist?"
            invalid-custom-value-text="Custom values are not allowed."
          >
            <mdc-selectlistbox>
              <mdc-option value="two" label="Two"></mdc-option>
              <mdc-option value="three" label="Three"></mdc-option>
              <mdc-option value="four" label="Four"></mdc-option>
              <mdc-option value="five" label="Five"></mdc-option>
              <mdc-option value="six" label="Six"></mdc-option>
            </mdc-selectlistbox>
          </mdc-combobox>
          <div style="display: flex; gap: 3rem; margin-top: 1rem;">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `,...Te()},A={render:a=>{const e=l=>{const i=l.querySelector("mdc-combobox");return i.value===""?(i.setAttribute("help-text","This field is required"),i.setAttribute("help-text-type",r.ERROR),!1):i.value!=="super-strength"?(i.setAttribute("help-text","Please select the Super Strength option"),i.setAttribute("help-text-type",r.WARNING),!1):(i.setAttribute("help-text","You now have Super Strength!"),i.setAttribute("help-text-type",r.SUCCESS),!0)};return s`
      <form @submit=${l=>{l.preventDefault();const i=l.target;e(i)&&c("Form Submitted")({value:{selectedOption:"super-power"}})}} @reset=${l=>{const i=(l==null?void 0:l.target).querySelector("mdc-combobox");i.setAttribute("help-text",""),i.setAttribute("help-text-type",r.DEFAULT)}} novalidate>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem;">
          <legend>Select your super hero power (with custom validation)</legend>
          <mdc-combobox
            name="${a.name}"
            label="${a.label}"
            placeholder="${a.placeholder}"
            data-aria-label="${a["data-aria-label"]}"
            ?required=${a.required}
            help-text="${a["help-text"]}"
            help-text-type="${a["help-text-type"]}"
          >
            <mdc-selectlistbox>
              <mdc-option value="flight" label="Flight"></mdc-option>
              <mdc-option value="mind-control" label="Mind Control"></mdc-option>
              <mdc-option value="super-strength" label="Super strength"></mdc-option>
              <mdc-option value="tactics" label="Tactics"></mdc-option>
            </mdc-selectlistbox>
          </mdc-combobox>
          <div style="display: flex; gap: 0.25rem;">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `},args:{name:"super-power",label:"Super Power",placeholder:"Type super power",required:!0,"help-text":"","help-text-type":r.DEFAULT,"data-aria-label":"Select a super power"}};var N,W,B;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    value: '',
    label: 'Top Countries',
    name: 'country',
    'help-text': 'Select a country',
    'help-text-type': VALIDATION.DEFAULT,
    disabled: false,
    readonly: false,
    'no-result-text': '',
    placeholder: 'Start typing',
    'data-aria-label': 'Select a country',
    'info-icon-aria-label': 'Required icon label',
    placement: POPOVER_PLACEMENT.BOTTOM_START,
    'invalid-custom-value-text': 'Custom values are not allowed',
    children: html\`
      <mdc-selectlistbox>
        <mdc-option value="arg" label="Argentina"></mdc-option>
        <mdc-option value="aus" label="Australia"></mdc-option>
        <mdc-option value="au" label="Austria"></mdc-option>
        <mdc-option value="ban" label="Bangladesh"></mdc-option>
        <mdc-option value="bel" label="Belgium"></mdc-option>
        <mdc-option value="bra" label="Brazil"></mdc-option>
        <mdc-option value="can" label="Canada"></mdc-option>
        <mdc-option value="chi" label="China"></mdc-option>
        <mdc-option value="col" label="Colombia"></mdc-option>
        <mdc-option value="den" label="Denmark"></mdc-option>
      </mdc-selectlistbox>
    \`
  },
  render: args => wrapper(render(args))
}`,...(B=(W=x.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var q,M,H;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => html\`
      <mdc-combobox
        name="country"
        label="Top Countries"
        placeholder="Start typing"
        help-text="Select a country"
        help-text-type="\${VALIDATION.SUCCESS}"
        data-aria-label="Select a country"
        required
      >
        <mdc-selectlistbox>
          <mdc-option value="usa" selected label="America"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
      <mdc-combobox
        help-text="Selecting this number may cause a security risk because it is not properly setup."
        help-text-type="\${VALIDATION.WARNING}"
        label="Select phone number"
        data-aria-label="Select phone number"
        required
      >
        <mdc-selectlistbox>
          <mdc-option selected value="456-198-0253" label="456-198-0253"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
      <mdc-combobox
        help-text-type="\${VALIDATION.ERROR}"
        help-text="You must select the total number of Infinity Stones."
        label="How many Infinity Stones exist?"
        placeholder="Select the total number of Infinity Stones"
        data-aria-label="How many Infinity Stones exist?"
        required
      ></mdc-combobox>
      <mdc-combobox
        help-text-type="\${VALIDATION.PRIORITY}"
        help-text="You must select the total number of Infinity Stones."
        label="How many Infinity Stones exist?"
        placeholder="Select the total number of Infinity Stones"
        data-aria-label="How many Infinity Stones exist?"
        required
      ></mdc-combobox>
      <mdc-combobox help-text="This is a disabled text." label="Label" data-aria-label="This is a disabled text." placeholder="Disabled text" disabled>
        <mdc-selectlistbox>
          <mdc-option value="avenger" selected label="Avengers"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
      <mdc-combobox help-text="This is a readonly text." label="Label" data-aria-label="This is a readonly text." placeholder="Readonly text" readonly>
        <mdc-selectlistbox>
          <mdc-option value="avenger" selected label="Avengers"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
    </div>
  \`
}`,...(H=(M=v.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var P,G,U;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Fruits and Vegetables',
    placeholder: 'Type a fruit or vegetable',
    'no-result-text': 'No results found',
    'data-aria-label': 'Fruits and Vegetables',
    children: html\` <mdc-selectlistbox>
      <mdc-optgroup label="Fruit">
        <mdc-option value="apple" label="Apples"></mdc-option>
        <mdc-option value="banana" label="Bananas"></mdc-option>
        <mdc-option value="cherry" label="Cherries"></mdc-option>
        <mdc-option value="tomato" label="Tomato"></mdc-option>
      </mdc-optgroup>
      <mdc-divider></mdc-divider>
      <mdc-optgroup label="Vegetables">
        <mdc-option value="artichoke" label="Artichokes"></mdc-option>
        <mdc-option value="broccoli" label="Broccoli"></mdc-option>
        <mdc-option value="cabbage" label="Cabbages"></mdc-option>
      </mdc-optgroup>
      <mdc-divider></mdc-divider>
      <mdc-optgroup label="Fish">
        <mdc-option value="tuna" label="Tuna"></mdc-option>
        <mdc-option value="salmon" label="Salmon"></mdc-option>
      </mdc-optgroup>
    </mdc-selectlistbox>\`
  }
}`,...(U=(G=y.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var Y,z,j;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    name: 'avengers-name',
    placeholder: 'Select the avenger',
    label: 'Who is your favorite Avenger?',
    value: 'hulk',
    required: true,
    'data-aria-label': 'Who is your favorite Avenger?',
    children: html\`
      <mdc-selectlistbox>
        <mdc-option value="ironman" label="Iron Man"></mdc-option>
        <mdc-option value="captainamerica" label="Captain America"></mdc-option>
        <mdc-option value="thor" label="Thor"></mdc-option>
        <mdc-option value="hulk" selected label="Hulk"></mdc-option>
        <mdc-option value="blackwidow" label="Black Widow"></mdc-option>
        <mdc-option value="hawkeye" label="Hawkeye"></mdc-option>
      </mdc-selectlistbox>
    \`
  }
}`,...(j=(z=g.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var K,X,Z;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-combobox
      placeholder="Type a color"
      label="Select one color"
      data-aria-label="Select one color"
      style="width: 300px;"
    >
      <mdc-selectlistbox>
        <mdc-option label="Red"></mdc-option>
        <mdc-option label="Yellow" id="trigger-option"></mdc-option>
        <mdc-option id="option-3" label="White and Black are the biggest colors on the spectrum"></mdc-option>
        <mdc-option label="Green"></mdc-option>
      </mdc-selectlistbox>
    </mdc-combobox>
    <mdc-tooltip triggerid="option-3" show-arrow> White and Black are the biggest colors on the spectrum </mdc-tooltip>
  \`
}`,...(Z=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var J,Q,ee;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedAvengers = formData.get('avengers-name');
      const selectedStones = formData.get('stone-count');
      action('Form Submitted')({
        value: {
          selectedAvengers,
          selectedStones
        }
      });
    };
    return html\`
      <form @submit=\${handleSubmit}>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem; height: 20rem; width: 20rem;">
          <mdc-combobox
            id="avenger-form"
            name="avengers-name"
            placeholder="Type the avenger name"
            label="Who is your favorite Avenger?"
            required
            @change=\${action('avengers combobox onchange')}
            @input=\${action('avengers combobox oninput')}
            data-aria-label="Select the avenger"
            validation-message="You must select an Avenger"
          >
            <mdc-selectlistbox>
              <mdc-option value="ironman" label="Iron Man"></mdc-option>
              <mdc-option value="captainamerica" label="Captain America"></mdc-option>
              <mdc-option value="thor" label="Thor"></mdc-option>
              <mdc-option value="hulk" selected label="Hulk"></mdc-option>
              <mdc-option value="blackwidow" label="Black Widow"></mdc-option>
              <mdc-option value="hawkeye" label="Hawkeye"></mdc-option>
            </mdc-selectlistbox>
          </mdc-combobox>
          <mdc-combobox
            name="stone-count"
            placeholder="Type the count"
            label="How many Infinity Stones exist?"
            required
            @change=\${action('stones combobox onchange')}
            @input=\${action('stones combobox oninput')}
            data-aria-label="How many Infinity Stones exist?"
            invalid-custom-value-text="Custom values are not allowed."
          >
            <mdc-selectlistbox>
              <mdc-option value="two" label="Two"></mdc-option>
              <mdc-option value="three" label="Three"></mdc-option>
              <mdc-option value="four" label="Four"></mdc-option>
              <mdc-option value="five" label="Five"></mdc-option>
              <mdc-option value="six" label="Six"></mdc-option>
            </mdc-selectlistbox>
          </mdc-combobox>
          <div style="display: flex; gap: 3rem; margin-top: 1rem;">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    \`;
  },
  ...hideAllControls()
}`,...(ee=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var te,oe,ae;A.parameters={...A.parameters,docs:{...(te=A.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: (args: Args) => {
    const validateCombobox = (formData: HTMLFormElement): boolean => {
      const combobox = formData.querySelector('mdc-combobox') as Combobox;
      if (combobox.value === '') {
        combobox.setAttribute('help-text', 'This field is required');
        combobox.setAttribute('help-text-type', VALIDATION.ERROR);
        return false;
      }
      if (combobox.value !== 'super-strength') {
        combobox.setAttribute('help-text', 'Please select the Super Strength option');
        combobox.setAttribute('help-text-type', VALIDATION.WARNING);
        return false;
      }
      combobox.setAttribute('help-text', 'You now have Super Strength!');
      combobox.setAttribute('help-text-type', VALIDATION.SUCCESS);
      return true;
    };
    const handleReset = (event: Event) => {
      const combobox = (event?.target as HTMLFormElement).querySelector('mdc-combobox') as Combobox;
      combobox.setAttribute('help-text', '');
      combobox.setAttribute('help-text-type', VALIDATION.DEFAULT);
    };
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const formData = event.target as HTMLFormElement;
      if (!validateCombobox(formData)) return;
      action('Form Submitted')({
        value: {
          selectedOption: 'super-power'
        }
      });
    };
    return html\`
      <form @submit=\${handleSubmit} @reset=\${handleReset} novalidate>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem;">
          <legend>Select your super hero power (with custom validation)</legend>
          <mdc-combobox
            name="\${args.name}"
            label="\${args.label}"
            placeholder="\${args.placeholder}"
            data-aria-label="\${args['data-aria-label']}"
            ?required=\${args.required}
            help-text="\${args['help-text']}"
            help-text-type="\${args['help-text-type']}"
          >
            <mdc-selectlistbox>
              <mdc-option value="flight" label="Flight"></mdc-option>
              <mdc-option value="mind-control" label="Mind Control"></mdc-option>
              <mdc-option value="super-strength" label="Super strength"></mdc-option>
              <mdc-option value="tactics" label="Tactics"></mdc-option>
            </mdc-selectlistbox>
          </mdc-combobox>
          <div style="display: flex; gap: 0.25rem;">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    \`;
  },
  args: {
    name: 'super-power',
    label: 'Super Power',
    placeholder: 'Type super power',
    required: true,
    'help-text': '',
    'help-text-type': VALIDATION.DEFAULT,
    'data-aria-label': 'Select a super power'
  }
}`,...(ae=(oe=A.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};const vt=["Example","AllVariants","ComboboxWithOptionGroups","ComboboxWithSelectedValue","ComboboxWithLongOptionText","ComboboxWithForm","ComboboxWithHelpTextValidation"];export{v as AllVariants,S as ComboboxWithForm,A as ComboboxWithHelpTextValidation,f as ComboboxWithLongOptionText,y as ComboboxWithOptionGroups,g as ComboboxWithSelectedValue,x as Example,vt as __namedExportsOrder,xt as default};
