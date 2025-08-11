import"./index-CySF3PjJ.js";import"./index-Bu3GQSTz.js";import"./index-Bv1THqO0.js";import{T as A,V as $}from"./index-riA1qVWu.js";import"./index-DgfhnsNA.js";import{i as I,k as m,D as k}from"./lit-element-D5KKan5q.js";import{u as w,n}from"./provider.component-BaQC7CJH.js";import{r as O}from"./state-C0WmBOuD.js";import{e as E}from"./query-DXShiZ7f.js";import{o as S}from"./query-assigned-elements-uEuc3rg8.js";import{t as c}from"./if-defined-D5BV9-c0.js";import{K as o}from"./keys-hFXe221I.js";import{D}from"./DataAriaLabelMixin-Cpdy3gUS.js";import{F as R}from"./FormInternalsMixin-BIoSiX4k.js";import{R as f}from"./roles-DU0xbrD4.js";import{D as P,V as T,F as y}from"./formfieldwrapper.component-C-SgLT80.js";import{T as p}from"./index-B3UBs9F8.js";import{a as V,D as v}from"./popover.component-BcWkwQje.js";import{a as C}from"./index-B-GnYs90.js";const L=w.constructTagName("select"),g={ARROW_UP:"arrow-up-bold",ARROW_DOWN:"arrow-down-bold"},h="select-base-triggerid",x="select-listbox",_=I`
  :host {
    --mdc-select-background-color: var(--mds-color-theme-background-primary-ghost);
    --mdc-select-background-color-hover: var(--mds-color-theme-background-primary-hover);
    --mdc-select-background-color-active: var(--mds-color-theme-background-primary-active);
    --mdc-select-background-color-disabled: var(--mds-color-theme-background-input-disabled);
    --mdc-select-text-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-select-text-color-selected: var(--mds-color-theme-text-primary-normal);
    --mdc-select-text-color-disabled: var(--mds-color-theme-text-primary-disabled);
    --mdc-select-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-select-border-color-disabled: var(--mds-color-theme-outline-primary-disabled);
    --mdc-select-border-color-success: var(--mds-color-theme-text-success-normal);
    --mdc-select-border-color-warning: var(--mds-color-theme-text-warning-normal);
    --mdc-select-border-color-error: var(--mds-color-theme-text-error-normal);
    --mdc-select-width: 100%;

    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    align-items: unset;
    width: var(--mdc-select-width);
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
    border: 1px solid var(--mdc-select-border-color);
    background: var(--mdc-select-background-color);
    display: flex;
    gap: 0.375rem;
    align-items: center;
    user-select: none;
  }
  :host::part(base-container):hover {
    background-color: var(--mdc-select-background-color-hover);
  }
  :host::part(base-container):active {
    background-color: var(--mdc-select-background-color-active);
  }
  :host::part(base-text) {
    height: 1.3125rem;
    width: 100%;
    color: var(--mdc-select-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  :host::part(selected) {
    color: var(--mdc-select-text-color-selected);
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
    width: var(--mdc-select-width);
    max-height: var(--mdc-popover-max-height);
    padding: 0.75rem 0.5rem;
  }

  /* Help text border colors */
  :host([help-text-type='success'])::part(base-container) {
    border-color: var(--mdc-select-border-color-success);
  }
  :host([help-text-type='warning'])::part(base-container) {
    border-color: var(--mdc-select-border-color-warning);
  }
  :host([help-text-type='error'])::part(base-container) {
    border-color: var(--mdc-select-border-color-error);
  }

  /* Disabled, soft-disabled */
  :host([disabled])::part(base-container),
  :host([soft-disabled])::part(base-container),
  :host([readonly])::part(base-container),
  :host([help-text-type='success'][disabled])::part(base-container),
  :host([help-text-type='error'][disabled])::part(base-container),
  :host([help-text-type='warning'][disabled])::part(base-container),
  :host([help-text-type='success'][readonly])::part(base-container),
  :host([help-text-type='error'][readonly])::part(base-container),
  :host([help-text-type='warning'][readonly])::part(base-container) {
    border-color: var(--mdc-select-border-color-disabled);
    background: var(--mdc-select-background-color-disabled);
  }
  :host([disabled])::part(base-text),
  :host([soft-disabled])::part(base-text) {
    color: var(--mdc-select-text-color-disabled);
  }
`,F=[_,...C(!0)];var N=Object.defineProperty,l=(u,e,t,s)=>{for(var i=void 0,r=u.length-1,d;r>=0;r--)(d=u[r])&&(i=d(e,t,i)||i);return i&&N(e,t,i),i};const b=class b extends R(D(y)){constructor(){super(...arguments),this.readonly=!1,this.height="auto",this.placement=V.BOTTOM_START,this.boundary=v.BOUNDARY,this.strategy=v.STRATEGY,this.displayPopover=!1,this.initialSelectedOption=null}getAllValidOptions(){var e;return Array.from(((e=this.slottedListboxes[0])==null?void 0:e.querySelectorAll(`${p}:not([disabled])`))||[])}getFirstValidOption(){var e;return(e=this.slottedListboxes[0])==null?void 0:e.querySelector(`${p}:not([disabled])`)}getLastValidOption(){const e=this.getAllValidOptions();return e.length>0?e[e.length-1]:null}getFirstSelectedOption(){var e;return(e=this.slottedListboxes[0])==null?void 0:e.querySelector(`${p}[selected]:not([disabled])`)}async firstUpdated(){await this.updateComplete,this.modifyListBoxWrapper();const e=this.getFirstSelectedOption();if(e)this.initialSelectedOption=e,this.setSelectedOption(e);else if(this.placeholder)this.placeholder&&this.setInputValidity();else{const t=this.getFirstValidOption();this.setSelectedOption(t),this.fireEvents()}}updated(e){super.updated(e),(e.has("disabled")||e.has("softDisabled")||e.has("readonly"))&&(this.disabled||this.softDisabled||this.readonly)&&(this.displayPopover=!1),e.has("dataAriaLabel")&&this.modifyListBoxWrapper()}modifyListBoxWrapper(){const e=this.slottedListboxes[0];e&&(e.setAttribute("id",x),e.setAttribute("aria-label",this.dataAriaLabel||""),e.setAttribute("aria-labelledby",h))}handleOptionsClick(e){const t=e.target;t&&t.tagName===p.toUpperCase()&&!t.hasAttribute("disabled")&&!t.hasAttribute("soft-disabled")&&(this.setSelectedOption(t),this.displayPopover=!1,this.fireEvents())}setSelectedOption(e){var t;this.updateSelectedInChildOptions(e),this.updateTabIndexForAllOptions(e),this.selectedOption=e,this.value=((t=this.selectedOption)==null?void 0:t.value)??"",this.internals.setFormValue(this.value),this.inputElement.setAttribute("value",this.value),this.setInputValidity()}updateTabIndexForAllOptions(e){const t=this.getAllValidOptions(),s=e||t[0];t.forEach(i=>{i.setAttribute("tabindex",i===s?"0":"-1")})}updateSelectedInChildOptions(e){e==null||e.setAttribute("selected","true"),this.getAllValidOptions().forEach(s=>{s!==e&&s.removeAttribute("selected")})}fireEvents(){this.dispatchInput(this.selectedOption),this.dispatchChange(this.selectedOption)}setInputValidity(){!this.selectedOption&&this.required&&this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()}formResetCallback(){var t;const e=this.initialSelectedOption||null;((t=this.selectedOption)==null?void 0:t.value)!==(e==null?void 0:e.value)&&(this.setSelectedOption(e),this.fireEvents())}formStateRestoreCallback(e){var s;const t=this.getAllValidOptions().find(i=>i.value===e||i.label===e);((s=this.selectedOption)==null?void 0:s.value)!==(t==null?void 0:t.value)&&(this.setSelectedOption(t||null),this.fireEvents())}dispatchChange(e){this.dispatchEvent(new CustomEvent("change",{detail:{value:e==null?void 0:e.value,label:e==null?void 0:e.label},composed:!0,bubbles:!0}))}dispatchInput(e){this.dispatchEvent(new CustomEvent("input",{detail:{value:e==null?void 0:e.value,label:e==null?void 0:e.label},composed:!0,bubbles:!0}))}handleClickCombobox(e){this.disabled||this.softDisabled||this.readonly||(this.displayPopover=!this.displayPopover,e.stopPropagation())}handleKeydownCombobox(e){if(!(this.disabled||this.softDisabled||this.readonly))switch(e.key){case o.ARROW_DOWN:case o.ARROW_UP:this.displayPopover=!0,e.preventDefault(),e.stopPropagation();break;case o.ENTER:case o.SPACE:this.displayPopover=!0,e.preventDefault(),e.stopPropagation();break;case o.HOME:{this.displayPopover=!0;const t=this.getFirstValidOption();t&&(t==null||t.focus(),this.updateTabIndexForAllOptions(t)),e.preventDefault();break}case o.END:{this.displayPopover=!0;const t=this.getLastValidOption();t&&(t.focus(),this.updateTabIndexForAllOptions(t)),e.preventDefault();break}}}handlePopoverKeydown(e){let t=null;switch(e.key){case o.HOME:{t=this.getFirstValidOption();break}case o.END:{t=this.getLastValidOption();break}case o.ARROW_DOWN:{const s=this.getAllValidOptions(),i=s.findIndex(d=>d===e.target),r=Math.min(i+1,s.length-1);t=s[r];break}case o.ARROW_UP:{const s=this.getAllValidOptions(),i=s.findIndex(d=>d===e.target),r=Math.max(i-1,0);t=s[r];break}case o.PAGE_DOWN:{const s=this.getAllValidOptions(),i=s.findIndex(d=>d===e.target),r=Math.min(i+10,s.length-1);t=s[r];break}case o.PAGE_UP:{const s=this.getAllValidOptions(),i=s.findIndex(d=>d===e.target),r=Math.max(i-10,0);t=s[r];break}}t&&(this.focusAndUpdateTabIndexes(t),e.preventDefault(),e.stopPropagation())}focusAndUpdateTabIndexes(e){e&&(e.focus(),this.updateTabIndexForAllOptions(e))}handleNativeInputFocus(){this.visualCombobox.focus()}updateState(){var t;const e=this.getFirstSelectedOption();e?((t=this.selectedOption)==null?void 0:t.value)!==e.value&&this.setSelectedOption(e):this.setSelectedOption(this.placeholder?null:this.getFirstValidOption())}render(){var e,t,s,i;return m`
      ${this.renderLabel()}
      <div part="container">
        <div
          id="${h}"
          part="base-container"
          @click="${this.handleClickCombobox}"
          @keydown="${this.handleKeydownCombobox}"
          tabindex="${this.disabled?"-1":"0"}"
          class="${this.disabled?"":"mdc-focus-ring"}"
          role="${f.COMBOBOX}"
          aria-controls="${x}"
          aria-label="${this.dataAriaLabel??""}"
          aria-labelledby="${this.label?P.HEADING_ID:""}"
          aria-expanded="${this.displayPopover?"true":"false"}"
          aria-haspopup="${f.LISTBOX}"
          aria-required="${this.required?"true":"false"}"
          aria-invalid="${this.helpTextType===T.ERROR?"true":"false"}"
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
            part="base-text ${(s=this.selectedOption)!=null&&s.label?"selected":""}"
            type="${A.BODY_MIDSIZE_REGULAR}"
            tagname="${$.SPAN}"
          >
            ${((i=this.selectedOption)==null?void 0:i.label)??this.placeholder}
          </mdc-text>
          <div part="icon-container">
            <mdc-icon
              size="1"
              length-unit="rem"
              name="${this.displayPopover?g.ARROW_UP:g.ARROW_DOWN}"
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
          triggerid="${h}"
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
          boundary="${c(this.boundary)}"
          strategy="${c(this.strategy)}"
          placement="${this.placement}"
          @closebyescape="${()=>{this.displayPopover=!1}}"
          @closebyoutsideclick="${()=>{this.displayPopover=!1}}"
          style="--mdc-popover-max-width: var(--mdc-select-width); --mdc-popover-max-height: ${this.height};"
        >
          <slot @click="${this.handleOptionsClick}"></slot>
        </mdc-popover>
      </div>
      ${this.renderHelperText()}
    `}};b.styles=[...y.styles,...F];let a=b;l([n({type:String})],a.prototype,"placeholder");l([n({type:Boolean})],a.prototype,"readonly");l([n({type:String})],a.prototype,"height");l([n({type:String,reflect:!0})],a.prototype,"placement");l([n({type:Boolean,attribute:"soft-disabled"})],a.prototype,"softDisabled");l([n({type:String,reflect:!0,attribute:"boundary"})],a.prototype,"boundary");l([n({type:String,reflect:!0,attribute:"strategy"})],a.prototype,"strategy");l([S({selector:"mdc-selectlistbox"})],a.prototype,"slottedListboxes");l([E(`[id="${h}"]`)],a.prototype,"visualCombobox");l([O()],a.prototype,"selectedOption");l([O()],a.prototype,"displayPopover");a.register(L);
