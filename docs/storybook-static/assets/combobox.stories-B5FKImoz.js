import{a as d}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{i as re,k as c,D as ne}from"./lit-element-D5KKan5q.js";import"./index-ByhtR4jH.js";import"./index-ibTCk7Bz.js";import"./index-C0_hgFuk.js";import"./index-DGdosPEB.js";import"./index-DsicUHl7.js";import{u as se,n as m}from"./provider.component-BaQC7CJH.js";import{r as ae}from"./state-C0WmBOuD.js";import{e as le}from"./query-DXShiZ7f.js";import{o as ce}from"./query-assigned-elements-uEuc3rg8.js";import{t as u}from"./if-defined-D5BV9-c0.js";import{F as w,I as de}from"./input.component-BA6899xh.js";import{C as me,E as pe}from"./CaptureDestroyEventForChildElement-qq7X9vNO.js";import{K as p}from"./keys-hFXe221I.js";import{A as be}from"./buttonsimple.component-CKyEWPbX.js";import{D as ue}from"./DataAriaLabelMixin-Cpdy3gUS.js";import{F as he}from"./FormInternalsMixin-CvUI0OX_.js";import{b as xe}from"./listitem.component-Cy9hWtov.js";import{R as $}from"./roles-CJI3JVG-.js";import{T as C}from"./divider.constants-DBMTjDho.js";import{V as n,D as E,F as O}from"./formfieldwrapper.component-Bh3Mxn5K.js";import{a as V}from"./input.constants-z5HAYAGU.js";import{T as k}from"./index-DXxAvG-Y.js";import{T as R}from"./index-BQrGWkkj.js";import{a as h,D as T,b as ve,S as ye}from"./popover.component-CgG8O1N4.js";import{T as fe}from"./index-B67QVy8k.js";import"./index-CJG-eVXM.js";import"./index-BaUwcf4A.js";import"./index-DQ1Hv4sq.js";import{c as ge,s as Se}from"./commonArgTypes-BluK8w5L.js";import{a as Ae,t as Te,h as $e}from"./utils-CFOyPOhY.js";import"./v4-CQkTLCs1.js";import"./buttonsimple.constants-An7St6B1.js";import"./iframe-BCa7iKqm.js";import"../sb-preview/runtime.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-DWn5NkGG.js";import"./create-context-89xeped_.js";import"./index-CqVtAZCJ.js";import"./index-DTrDRi1E.js";import"./index-DHsMOcdX.js";import"./index-Cw1O1FfO.js";import"./index-Dm_kZN_u.js";import"./v4-CmTdKEVZ.js";import"./base-DIkkzJ-c.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-Bb6vhctq.js";import"./index-Y9yrQU66.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";import"./button.constants-B6suqA4v.js";import"./button.component-D5eG231X.js";import"./button.utils-rNW36Ji7.js";const Ie=se.constructTagName("combobox"),D={ARROW_UP:"arrow-up-bold",ARROW_DOWN:"arrow-down-bold"},we="list",_="combobox-trigger-id";class F{static dispatchComboboxEvent(e,t,o,l=!0){e.dispatchEvent(new CustomEvent(t,{detail:{value:o==null?void 0:o.value,label:o==null?void 0:o.label},composed:!0,bubbles:l}))}static onInputCombobox(e,t){this.dispatchComboboxEvent(e,"input",t)}static onChangeCombobox(e,t){this.dispatchComboboxEvent(e,"change",t)}}const Ce=re`
  :host {
    --mdc-combobox-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-combobox-icon-color: var(--mds-color-theme-text-primary-normal);
    --mdc-combobox-width: 100%;
    --mdc-combobox-listbox-width: var(--mdc-combobox-width);
    --mdc-combobox-listbox-height: auto;
    --mdc-combobox-text-color-disabled: var(--mds-color-theme-text-primary-disabled);
    --mdc-combobox-hover-background-color: var(--mds-color-theme-background-primary-hover);
    --mdc-combobox-error-border-color: var(--mds-color-theme-text-error-normal);
    --mdc-combobox-warning-border-color: var(--mds-color-theme-text-warning-normal);
    --mdc-combobox-success-border-color: var(--mds-color-theme-text-success-normal);
    --mdc-combobox-primary-border-color: var(--mds-color-theme-text-accent-normal);
    --mdc-combobox-focused-background-color: var(--mds-color-theme-background-primary-ghost);
    --mdc-combobox-focused-border-color: var(--mds-color-theme-outline-input-active);

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
  :host mdc-input {
    --mdc-input-error-border-color: var(--mdc-combobox-error-border-color);
    --mdc-input-warning-border-color: var(--mdc-combobox-warning-border-color);
    --mdc-input-success-border-color: var(--mdc-combobox-success-border-color);
    --mdc-input-primary-border-color: var(--mdc-combobox-primary-border-color);
    --mdc-input-focused-border-color: var(--mdc-combobox-focused-border-color);
    --mdc-input-focused-background-color: var(--mdc-combobox-focused-background-color);
  }
  :host(:focus-within)::part(combobox__button) {
    border-left: 1px solid var(--mdc-combobox-focused-border-color);
  }
  :host(:not([disabled]))::part(combobox__base):hover {
    background-color: var(--mdc-combobox-hover-background-color);
  }
  :host([help-text-type='error'])::part(combobox__button) {
    border-color: var(--mdc-combobox-error-border-color);
  }
  :host([help-text-type='warning'])::part(combobox__button) {
    border-color: var(--mdc-combobox-warning-border-color);
  }
  :host([help-text-type='success'])::part(combobox__button) {
    border-color: var(--mdc-combobox-success-border-color);
  }
  :host([help-text-type='priority'])::part(combobox__button) {
    border-color: var(--mdc-combobox-primary-border-color);
  }
  :host([disabled])::part(combobox__button) {
    border-left: 1px solid var(--mdc-combobox-text-color-disabled);
  }
  :host::part(mdc-input) {
    width: calc(100% - 1.5rem);
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
`,Ee=[Ce];var Oe=Object.defineProperty,s=(a,e,t,o)=>{for(var l=void 0,i=a.length-1,b;i>=0;i--)(b=a[i])&&(l=b(e,t,l)||l);return l&&Oe(e,t,l),l};const I=class I extends me(be(he(ue(O)))){constructor(){super(),this.readonly=!1,this.placement=h.BOTTOM_START,this.boundary=T.BOUNDARY,this.strategy=T.STRATEGY,this.popoverZIndex=T.Z_INDEX,this.isOpen=!1,this.filteredValue="",this.initialSelectedOption=null,this.handleUpdateError=e=>{this.onerror&&this.onerror(e)},this.handleDestroyEvent=e=>{const t=e.target;if(!this.isValidItem(t)||t.tabIndex!==0)return;const o=this.navItems.findIndex(i=>i===t);if(o===-1)return;let l=o+1;l>=this.navItems.length&&(l=o-1)},this.addEventListener(xe.DESTROYED,this.handleDestroyEvent),this.itemsStore=new pe(this,{isValidItem:this.isValidItem})}get navItems(){return this.itemsStore.items}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.inputElement&&(this.setInputValidity(),this.internals.setFormValue(this.inputElement.value))}).catch(this.handleUpdateError)}isValidItem(e){return e.matches(`${R}:not([disabled])`)}openPopover(){this.isOpen=!0}closePopover(){this.isOpen=!1}toggleDropdown(){this.isOpen=!this.isOpen}compareOptionWithValue(e,t){return(e.getAttribute("label")||"").toLowerCase().startsWith(t==null?void 0:t.toLowerCase())}getFirstSelectedOption(){return this.navItems.find(e=>e.hasAttribute("selected"))}getVisibleOptions(e){return this.navItems.filter(t=>this.compareOptionWithValue(t,e))}setSelectedValue(e){this.value=(e==null?void 0:e.getAttribute("value"))||"",this.filteredValue=(e==null?void 0:e.getAttribute("label"))||"",this.internals.setFormValue(this.value),this.updateHiddenOptions(),this.updateSelectedOption(e),this.setInputValidity(),this.resetHelpText(),F.onInputCombobox(this,e),F.onChangeCombobox(this,e)}resetSelectedValue(){this.value="",this.internals.setFormValue(this.value),this.resetHelpText()}resetHelpText(){this.invalidCustomValueText&&this.helpText===this.invalidCustomValueText&&(this.helpText="",this.helpTextType=n.DEFAULT)}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),e==="validation-message"&&this.updateComplete.then(()=>{this.setInputValidity()}).catch(this.handleUpdateError)}async firstUpdated(e){await this.updateComplete,this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(e);const t=this.getFirstSelectedOption();if(t)this.initialSelectedOption=t,this.setSelectedValue(t);else if(this.value){const o=this.navItems.find(l=>l.value===this.value);this.setSelectedValue(o)}else this.placeholder&&this.setInputValidity();this.navItems.forEach(o=>{o.setAttribute("tabindex","-1")})}updated(e){super.updated(e),(e.has("slottedListboxes")||e.has("isOpen"))&&(this.visualCombobox&&"ariaControlsElements"in this.visualCombobox&&(this.visualCombobox.ariaControlsElements=this.slottedListboxes),this.dropDownButton&&"ariaControlsElements"in this.dropDownButton&&(this.dropDownButton.ariaControlsElements=this.slottedListboxes)),(e.has("disabled")||e.has("readonly"))&&(this.disabled||this.readonly)&&this.closePopover()}setInputValidity(){var e,t;!this.value&&this.required?(this.validationMessage?(e=this.inputElement)==null||e.setCustomValidity(this.validationMessage):(t=this.inputElement)==null||t.setCustomValidity(""),this.setValidity()):this.internals.setValidity({})}formResetCallback(){const e=this.initialSelectedOption||null;this.setSelectedValue(e),this.filteredValue=(e==null?void 0:e.label)??"",this.setInputValidity()}formStateRestoreCallback(e){const t=this.navItems.find(o=>o.value===e||o.label===e);this.setSelectedValue(t||null)}handleNativeInputFocus(){this.visualCombobox.focus()}resetFocusedOption(){this.navItems.filter(e=>e.hasAttribute("data-focused")).forEach(e=>this.updateOptionAttributes(e,!1))}updateSelectedOption(e){this.navItems.forEach(t=>{t.removeAttribute("selected")}),e==null||e.setAttribute("selected","")}updateOptionAttributes(e,t){e!==void 0&&(t?e.setAttribute("data-focused",""):e.removeAttribute("data-focused"),e.setAttribute("aria-selected",t.toString()))}handleBlurChange(){const e=this.getVisibleOptions(this.filteredValue),t=e.findIndex(o=>o.hasAttribute("data-focused"));if(t!==-1){this.setSelectedValue(e[t]),this.closePopover();return}t===-1&&this.filteredValue!==""&&this.invalidCustomValueText&&!this.getFirstSelectedOption()&&(this.helpText=this.invalidCustomValueText,this.helpTextType=n.ERROR),this.setInputValidity()}updateFocusAndScrollIntoView(e,t,o){var l;this.updateOptionAttributes(e[t],!1),this.updateOptionAttributes(e[o],!0),(l=e[o])==null||l.scrollIntoView({block:"nearest"})}handleInputKeydown(e){const t=this.getVisibleOptions(this.filteredValue),o=t.findIndex(l=>l.hasAttribute("data-focused"));switch(e.key){case p.ARROW_DOWN:{this.openPopover();const l=t.length-1===o?0:o+1;this.updateFocusAndScrollIntoView(t,o,l),e.preventDefault();break}case p.ARROW_UP:{this.openPopover();const l=o===-1||o===0?t.length-1:o-1;this.updateFocusAndScrollIntoView(t,o,l),e.preventDefault();break}case p.ENTER:{if(o===-1)return;this.setSelectedValue(t[o]),this.isOpen===!0&&this.closePopover();break}case p.ESCAPE:{o!==-1&&this.updateOptionAttributes(t[o],!1),t.length&&this.shouldDisplayPopover(t.length)?this.closePopover():(this.resetSelectedValue(),this.filteredValue="");break}case p.TAB:{this.closePopover();break}case p.HOME:case p.END:{this.resetFocusedOption();break}}}updateHiddenOptions(){this.navItems.forEach(e=>{this.compareOptionWithValue(e,this.filteredValue)?(e.removeAttribute("data-hidden"),this.showOptionGroupAndDivider(e)):(e.setAttribute("data-hidden",""),this.hideOptionGroupAndDivider(e))})}hideOptionGroupAndDivider(e){var t,o,l;(t=e.parentElement)!=null&&t.matches(k)&&((o=Array.from(e.parentElement.children))==null?void 0:o.filter(b=>!b.hasAttribute("data-hidden"))).length===0&&(e.parentElement.setAttribute("data-hidden",""),(l=e.parentElement.nextElementSibling)!=null&&l.matches(C)&&e.parentElement.nextElementSibling.setAttribute("data-hidden",""))}showOptionGroupAndDivider(e){var t,o,l;(t=e.parentElement)!=null&&t.matches(k)&&((o=Array.from(e.parentElement.children))==null?void 0:o.filter(b=>!b.hasAttribute("data-hidden"))).length>0&&(e.parentElement.removeAttribute("data-hidden"),(l=e.parentElement.nextElementSibling)!=null&&l.matches(C)&&e.parentElement.nextElementSibling.removeAttribute("data-hidden"))}handleInputChange(e){var t;this.filteredValue=e.target.value,this.resetSelectedValue(),this.resetFocusedOption(),this.updateHiddenOptions(),(t=this.getFirstSelectedOption())==null||t.removeAttribute("selected"),this.isOpen===!1&&this.openPopover()}handleOptionsClick(e){const t=e.target.closest(R)??null;t&&!t.hasAttribute("disabled")&&(this.setSelectedValue(t),this.closePopover(),this.updateComplete.then(()=>this.handleNativeInputFocus()).catch(this.handleUpdateError))}shouldDisplayPopover(e){return this.disabled||this.readonly?!1:e?this.isOpen:!!this.noResultText}renderNativeInput(){return c`
      <input
        id="${this.inputId}"
        name="${this.name}"
        type="text"
        .value="${w(this.value)}"
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
    `}renderBaseInput(){return c`
      <input
        id="${this.id}"
        slot="input"
        ?disabled="${this.disabled}"
        .value="${w(this.filteredValue)}"
        autocomplete="${V.OFF}"
        class="input"
        part="mdc-input"
        placeholder="${u(this.placeholder)}"
        role="${$.COMBOBOX}"
        ?readonly="${this.readonly}"
        ?required="${this.required}"
        @input=${this.handleInputChange}
        @keydown=${this.handleInputKeydown}
        @blur="${this.handleBlurChange}"
        aria-autocomplete="${we}"
        aria-describedby="${u(this.helpText?E.HELPER_TEXT_ID:"")}"
        aria-disabled="${this.disabled?"true":"false"}"
        aria-expanded="${this.isOpen?"true":"false"}"
        aria-haspopup="${$.LISTBOX}"
        aria-invalid="${this.helpTextType===n.ERROR?"true":"false"}"
        aria-label="${this.dataAriaLabel??""}"
        aria-labelledby="${this.label?E.HEADING_ID:""}"
        aria-readonly="${this.readonly?"true":"false"}"
        aria-required="${this.required?"true":"false"}"
      />
    `}renderNoResultsText(e){return e===0&&this.noResultText?c`<mdc-listitem part="no-result-text" tabindex="-1" role="" label="${this.noResultText}"></mdc-listitem>`:ne}render(){const e=this.getVisibleOptions(this.filteredValue);return c`
      ${this.renderLabel()}
      <div part="combobox__base" id="${_}">
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
            name="${this.shouldDisplayPopover(e.length)?D.ARROW_UP:D.ARROW_DOWN}"
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
          trigger="${ve.MANUAL}"
          triggerid="${_}"
          z-index="${u(this.popoverZIndex)}"
        >
          ${this.renderNoResultsText(e.length)}
          <slot @click="${this.handleOptionsClick}"></slot>
        </mdc-popover>
      </div>
      ${this.renderHelperText()}
    `}};I.styles=[...O.styles,...de.styles,...Ee];let r=I;s([m({type:String})],r.prototype,"placeholder");s([m({type:Boolean})],r.prototype,"readonly");s([m({type:String,reflect:!0})],r.prototype,"placement");s([m({type:String,attribute:"no-result-text",reflect:!0})],r.prototype,"noResultText");s([m({type:String,attribute:"invalid-custom-value-text",reflect:!0})],r.prototype,"invalidCustomValueText");s([m({type:String,reflect:!0})],r.prototype,"boundary");s([m({type:String,reflect:!0})],r.prototype,"strategy");s([m({type:Number,reflect:!0,attribute:"popover-z-index"})],r.prototype,"popoverZIndex");s([m({type:String,reflect:!0,attribute:"backdrop-append-to"})],r.prototype,"backdropAppendTo");s([le(`[role="${$.COMBOBOX}"]`)],r.prototype,"visualCombobox");s([le('[part="combobox__button"]')],r.prototype,"dropDownButton");s([ce({selector:fe})],r.prototype,"slottedListboxes");s([ae()],r.prototype,"isOpen");s([ae()],r.prototype,"filteredValue");r.register(Ie);const Ve=a=>c`<div style="width: 25rem; height: 100%; display: flex; align-items: center;">${a}</div>`,ie=a=>c` <mdc-combobox
    @change="${d("onchange")}"
    @click="${d("onclick")}"
    @input="${d("oninput")}"
    @keydown="${d("onkeydown")}"
    @focus="${d("onfocus")}"
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
    validation-message="${a["validation-message"]}"
    invalid-custom-value-text="${a["invalid-custom-value-text"]}"
  >
    ${a.children}
  </mdc-combobox>`,kt={title:"Components/combobox",tags:["autodocs"],component:"mdc-combobox",render:ie,parameters:{badges:["stable"]},argTypes:{"auto-focus-on-mount":{control:"boolean"},"backdrop-append-to":{control:"text"},boundary:{control:"text"},"data-aria-label":{control:"text"},disabled:{control:"boolean"},"help-text":{control:"text"},"help-text-type":{control:"select",options:Object.values(n)},"info-icon-aria-label":{control:"text"},label:{control:"text"},name:{control:"text"},"no-result-text":{control:"text"},placeholder:{control:"text"},placement:{control:"select",options:[h.BOTTOM_START,h.TOP_START]},"popover-z-index":{control:"number"},readonly:{control:"boolean"},required:{control:"boolean"},strategy:{control:"select",options:Object.values(ye)},value:{control:"text"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(h)},"validation-message":{control:"text"},"invalid-custom-value-text":{control:"text"},...Ae(["id","value","validity","willValidate","default","itemsStore","handleUpdateError"]),...Te(["--mdc-combobox-border-color","--mdc-combobox-icon-color","--mdc-combobox-width","--mdc-combobox-listbox-width","--mdc-combobox-listbox-height","--mdc-combobox-text-color-disabled","--mdc-combobox-hover-background-color","--mdc-combobox-error-border-color","--mdc-combobox-warning-border-color","--mdc-combobox-success-border-color","--mdc-combobox-primary-border-color","--mdc-combobox-focused-background-color","--mdc-combobox-focused-border-color"]),...ge,...Se}},x={args:{value:"",label:"Top Countries",name:"country","help-text":"Select a country","help-text-type":n.DEFAULT,disabled:!1,readonly:!1,"no-result-text":"",placeholder:"Start typing","data-aria-label":"Select a country","info-icon-aria-label":"Required icon label",placement:h.BOTTOM_START,"invalid-custom-value-text":"Custom values are not allowed",children:c`
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
    `},render:a=>Ve(ie(a))},v={render:()=>c`
      <mdc-combobox
        name="country"
        label="Top Countries"
        placeholder="Start typing"
        help-text="Select a country"
        help-text-type="${n.SUCCESS}"
        data-aria-label="Select a country"
        required
      >
        <mdc-selectlistbox>
          <mdc-option value="usa" selected label="America"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
      <mdc-combobox
        help-text="Selecting this number may cause a security risk because it is not properly setup."
        help-text-type="${n.WARNING}"
        label="Select phone number"
        data-aria-label="Select phone number"
        required
      >
        <mdc-selectlistbox>
          <mdc-option selected value="456-198-0253" label="456-198-0253"></mdc-option>
        </mdc-selectlistbox>
      </mdc-combobox>
      <mdc-combobox
        help-text-type="${n.ERROR}"
        help-text="You must select the total number of Infinity Stones."
        label="How many Infinity Stones exist?"
        placeholder="Select the total number of Infinity Stones"
        data-aria-label="How many Infinity Stones exist?"
        required
      ></mdc-combobox>
      <mdc-combobox
        help-text-type="${n.PRIORITY}"
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
  `},y={args:{label:"Fruits and Vegetables",placeholder:"Type a fruit or vegetable","no-result-text":"No results found","data-aria-label":"Fruits and Vegetables",children:c` <mdc-selectlistbox>
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
    </mdc-selectlistbox>`}},f={args:{name:"avengers-name",placeholder:"Select the avenger",label:"Who is your favorite Avenger?",value:"hulk",required:!0,"data-aria-label":"Who is your favorite Avenger?",children:c`
      <mdc-selectlistbox>
        <mdc-option value="ironman" label="Iron Man"></mdc-option>
        <mdc-option value="captainamerica" label="Captain America"></mdc-option>
        <mdc-option value="thor" label="Thor"></mdc-option>
        <mdc-option value="hulk" selected label="Hulk"></mdc-option>
        <mdc-option value="blackwidow" label="Black Widow"></mdc-option>
        <mdc-option value="hawkeye" label="Hawkeye"></mdc-option>
      </mdc-selectlistbox>
    `}},g={render:()=>c`
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
  `},S={render:()=>c`
      <form @submit=${e=>{e.preventDefault();const t=new FormData(e.target),o=t.get("avengers-name"),l=t.get("stone-count");d("Form Submitted")({value:{selectedAvengers:o,selectedStones:l}})}}>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem; height: 20rem; width: 20rem;">
          <mdc-combobox
            id="avenger-form"
            name="avengers-name"
            placeholder="Type the avenger name"
            label="Who is your favorite Avenger?"
            required
            @change=${d("avengers combobox onchange")}
            @input=${d("avengers combobox oninput")}
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
            @change=${d("stones combobox onchange")}
            @input=${d("stones combobox oninput")}
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
    `,...$e()},A={render:a=>{const e=l=>{const i=l.querySelector("mdc-combobox");return i.value===""?(i.setAttribute("help-text","This field is required"),i.setAttribute("help-text-type",n.ERROR),!1):i.value!=="super-strength"?(i.setAttribute("help-text","Please select the Super Strength option"),i.setAttribute("help-text-type",n.WARNING),!1):(i.setAttribute("help-text","You now have Super Strength!"),i.setAttribute("help-text-type",n.SUCCESS),!0)};return c`
      <form @submit=${l=>{l.preventDefault();const i=l.target;e(i)&&d("Form Submitted")({value:{selectedOption:"super-power"}})}} @reset=${l=>{const i=(l==null?void 0:l.target).querySelector("mdc-combobox");i.setAttribute("help-text",""),i.setAttribute("help-text-type",n.DEFAULT)}} novalidate>
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
    `},args:{name:"super-power",label:"Super Power",placeholder:"Type super power",required:!0,"help-text":"","help-text-type":n.DEFAULT,"data-aria-label":"Select a super power"}};var L,N,W;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(W=(N=x.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var B,q,H;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(H=(q=v.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var M,P,G;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(G=(P=y.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var U,z,Y;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(z=f.parameters)==null?void 0:z.docs)==null?void 0:Y.source}}};var X,j,K;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(K=(j=g.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};var Z,J,Q;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(Q=(J=S.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var ee,te,oe;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(oe=(te=A.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};const Rt=["Example","AllVariants","ComboboxWithOptionGroups","ComboboxWithSelectedValue","ComboboxWithLongOptionText","ComboboxWithForm","ComboboxWithHelpTextValidation"];export{v as AllVariants,S as ComboboxWithForm,A as ComboboxWithHelpTextValidation,g as ComboboxWithLongOptionText,y as ComboboxWithOptionGroups,f as ComboboxWithSelectedValue,x as Example,Rt as __namedExportsOrder,kt as default};
