import"./index-DyUOsQox.js";import"./index-wwme6ITP.js";import"./index-XBmyQgMv.js";import{T as S,V as E}from"./index-BnjtOTfP.js";import"./index-ByPqDEhQ.js";import{u as $,i as A,k as y,D as C,n as o,z as k}from"./iframe-DbFhe1C8.js";import{e as D}from"./query-DXShiZ7f.js";import{t as l}from"./if-defined-D0TzS11l.js";import{C as w,E as T}from"./CaptureDestroyEventForChildElement-DLNhIPp1.js";import{K as n}from"./keys-hFXe221I.js";import{A as P}from"./buttonsimple.component-DXSlxVmF.js";import{D as R}from"./DataAriaLabelMixin-DtwoeGMi.js";import{F}from"./FormInternalsMixin-BHLJ3gDi.js";import{b as _}from"./listitem.component-DRoTy_NQ.js";import{L as N}from"./ListNavigationMixin-DgCStHq0.js";import{R as g}from"./roles-CJI3JVG-.js";import{D as M,V as L,F as x}from"./formfieldwrapper.component-C8gtv1jz.js";import{T as O}from"./index-Cw6knxpO.js";import{P as V,D as m}from"./popover.component-Evq03FS9.js";import{a as U}from"./index-CO0us3Ia.js";const W=$.constructTagName("select"),I={ARROW_UP:"arrow-up-bold",ARROW_DOWN:"arrow-down-bold"},b="select-base-triggerid",B="select-listbox",G=A`
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
    --mdc-select-listbox-width: var(--mdc-select-width);
    --mdc-select-listbox-height: auto;

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

  /* Popover height, width & padding overrides */
  :host mdc-popover {
    --mdc-popover-max-width: var(--mdc-select-listbox-width);
    --mdc-popover-max-height: var(--mdc-select-listbox-height);
  }
  :host mdc-popover::part(popover-content) {
    max-height: var(--mdc-popover-max-height);
    min-width: auto;
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
`,z=[G,...U(!0)];var Y=Object.defineProperty,a=(v,e,t,s)=>{for(var i=void 0,d=v.length-1,c;d>=0;d--)(c=v[d])&&(i=c(e,t,i)||i);return i&&Y(e,t,i),i};const u=class u extends N(w(P(F(R(x))))){constructor(){super(),this.readonly=!1,this.placement=V.BOTTOM_START,this.boundary=m.BOUNDARY,this.strategy=m.STRATEGY,this.popoverZIndex=m.Z_INDEX,this.displayPopover=!1,this.initialSelectedOption=null,this.itemsStore=new T(this,{isValidItem:this.isValidItem,onStoreUpdate:this.onStoreUpdate}),this.addEventListener(_.MODIFIED,this.handleModifiedEvent)}connectedCallback(){super.connectedCallback(),this.loop="false",this.initialFocus=0}get navItems(){return this.itemsStore.items}attributeChangedCallback(e,t,s){var i;if(super.attributeChangedCallback(e,t,s),e==="value"&&s!==""&&s!==t&&s!==((i=this.selectedOption)==null?void 0:i.value)&&this.navItems.length){const d=this.getFirstSelectedOption(),c=this.getFirstOption(),f=this.navItems.find(h=>h.value===s);let p=null;if(f)p=f;else if(this.placeholder)p=null;else if(c)p=c;else if(d)p=d;else return;this.updateComplete.then(()=>{this.setSelectedOption(p)}).catch(h=>{this.onerror&&this.onerror(h)})}}onStoreUpdate(e,t,s){switch(t){case"added":e.setAttribute("tabindex","-1");break;case"removed":{if(s===-1||e.tabIndex!==0)return;let i=s+1;if(i>=this.navItems.length&&(i=s-1),i===-1){this.displayPopover=!1,this.handleNativeInputFocus();return}this.resetTabIndexes(i);break}}}isValidItem(e){return e.matches(`${O}:not([disabled])`)}getFirstSelectedOption(){return this.navItems.find(e=>e.hasAttribute("selected"))}getFirstOption(){return this.navItems[0]}handleModifiedEvent(e){const t=e.target,s=this.getFirstSelectedOption();switch(e.detail.change){case"selected":{s?this.setSelectedOption(s):this.setSelectedOption(t);break}case"unselected":{s?this.setSelectedOption(s):this.setSelectedOption(this.placeholder?null:this.getFirstOption());break}case"enabled":{this.itemsStore.add(t);break}case"disabled":{this.itemsStore.delete(t);break}}}async firstUpdated(e){await this.updateComplete;const t=this.getFirstSelectedOption();if(t)this.initialSelectedOption=t,this.setSelectedOption(t);else if(this.placeholder)this.placeholder&&this.setInputValidity();else{const s=this.getFirstOption();this.setSelectedOption(s),this.fireEvents()}this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(e)}updated(e){super.updated(e),(e.has("disabled")||e.has("softDisabled")||e.has("readonly"))&&(this.disabled||this.softDisabled||this.readonly)&&(this.displayPopover=!1)}handleOptionsClick(e){const t=e.target;t&&t.tagName===O.toUpperCase()&&!t.hasAttribute("disabled")&&!t.hasAttribute("soft-disabled")&&(this.setSelectedOption(t),this.displayPopover=!1,this.fireEvents())}setSelectedOption(e){var t,s;e!==this.selectedOption&&(this.updateSelectedInChildOptions(e),this.resetTabIndexes(this.navItems.indexOf(e)),this.selectedOption=e,this.value=((t=this.selectedOption)==null?void 0:t.value)??"",this.internals.setFormValue(this.value),(s=this.inputElement)==null||s.setAttribute("value",this.value),this.setInputValidity())}updateSelectedInChildOptions(e){e==null||e.setAttribute("selected","true"),this.navItems.forEach(t=>{t!==e&&t.removeAttribute("selected")})}fireEvents(){this.dispatchInput(this.selectedOption),this.dispatchChange(this.selectedOption)}setInputValidity(){var e,t;!this.selectedOption&&this.required&&this.validationMessage?(e=this.inputElement)==null||e.setCustomValidity(this.validationMessage):(t=this.inputElement)==null||t.setCustomValidity(""),this.setValidity()}formResetCallback(){var t;const e=this.initialSelectedOption||null;((t=this.selectedOption)==null?void 0:t.value)!==(e==null?void 0:e.value)&&(this.setSelectedOption(e),this.fireEvents())}formStateRestoreCallback(e){var s;const t=this.navItems.find(i=>i.value===e||i.label===e);((s=this.selectedOption)==null?void 0:s.value)!==(t==null?void 0:t.value)&&(this.setSelectedOption(t||null),this.fireEvents())}dispatchChange(e){this.dispatchEvent(new CustomEvent("change",{detail:{value:e==null?void 0:e.value,label:e==null?void 0:e.label},composed:!0,bubbles:!0}))}dispatchInput(e){this.dispatchEvent(new CustomEvent("input",{detail:{value:e==null?void 0:e.value,label:e==null?void 0:e.label},composed:!0,bubbles:!0}))}handleClickCombobox(e){this.disabled||this.softDisabled||this.readonly||(this.displayPopover=!this.displayPopover,e.stopPropagation())}handleKeydownCombobox(e){if(!(this.disabled||this.softDisabled||this.readonly))switch(e.key){case n.ARROW_DOWN:case n.ARROW_UP:this.displayPopover=!0,e.preventDefault(),e.stopPropagation();break;case n.ENTER:case n.SPACE:this.displayPopover=!0,e.preventDefault(),e.stopPropagation();break;case n.HOME:{this.displayPopover=!0,this.resetTabIndexAndSetFocus(0),e.preventDefault();break}case n.END:{this.displayPopover=!0,this.resetTabIndexAndSetFocus(this.navItems.length-1),e.preventDefault();break}}}handleNativeInputFocus(){this.visualCombobox.focus()}render(){var e,t,s,i;return y`
      ${this.renderLabel()}
      <div part="container">
        <div
          id="${b}"
          part="base-container"
          @click="${this.handleClickCombobox}"
          @keydown="${this.handleKeydownCombobox}"
          tabindex="${this.disabled?"-1":"0"}"
          class="${this.disabled?"":"mdc-focus-ring"}"
          role="${g.COMBOBOX}"
          aria-controls="${B}"
          aria-label="${this.dataAriaLabel??""}"
          aria-labelledby="${this.label?M.HEADING_ID:""}"
          aria-expanded="${this.displayPopover?"true":"false"}"
          aria-haspopup="${g.LISTBOX}"
          aria-required="${this.required?"true":"false"}"
          aria-invalid="${this.helpTextType===L.ERROR?"true":"false"}"
          aria-disabled="${l(this.disabled||this.softDisabled)}"
          aria-readonly="${l(this.readonly)}"
        >
          ${(e=this.selectedOption)!=null&&e.prefixIcon?y`<mdc-icon
                length-unit="rem"
                size="1"
                name="${(t=this.selectedOption)==null?void 0:t.prefixIcon}"
                part="selected-icon"
              ></mdc-icon>`:C}
          <mdc-text
            part="base-text ${(s=this.selectedOption)!=null&&s.label?"selected":""}"
            type="${S.BODY_MIDSIZE_REGULAR}"
            tagname="${E.SPAN}"
          >
            ${((i=this.selectedOption)==null?void 0:i.label)??this.placeholder}
          </mdc-text>
          <div part="icon-container">
            <mdc-icon
              size="1"
              length-unit="rem"
              name="${this.displayPopover?I.ARROW_UP:I.ARROW_DOWN}"
            ></mdc-icon>
          </div>
        </div>
        <input
          id="${this.inputId}"
          part="native-input"
          name="${this.name}"
          type="text"
          ?disabled=${this.disabled}
          ?required=${this.required}
          ?readonly=${this.readonly}
          tabindex="-1"
          aria-hidden="true"
          @focus=${this.handleNativeInputFocus}
          @invalid=${this.setInputValidity}
          aria-disabled="${l(this.disabled||this.softDisabled)}"
        />
        <mdc-popover
          trigger="manual"
          triggerid="${b}"
          interactive
          ?visible="${this.displayPopover}"
          role=""
          backdrop
          backdrop-append-to="${l(this.backdropAppendTo)}"
          hide-on-outside-click
          hide-on-escape
          focus-back-to-trigger
          focus-trap
          size
          boundary="${l(this.boundary)}"
          strategy="${l(this.strategy)}"
          placement="${this.placement}"
          @closebyescape="${()=>{this.displayPopover=!1}}"
          @closebyoutsideclick="${()=>{this.displayPopover=!1}}"
          z-index="${l(this.popoverZIndex)}"
          exportparts="popover-content"
        >
          <slot @click="${this.handleOptionsClick}"></slot>
        </mdc-popover>
      </div>
      ${this.renderHelperText()}
    `}};u.styles=[...x.styles,...z];let r=u;a([o({type:String})],r.prototype,"placeholder");a([o({type:Boolean})],r.prototype,"readonly");a([o({type:String,reflect:!0})],r.prototype,"placement");a([o({type:Boolean,attribute:"soft-disabled",reflect:!0})],r.prototype,"softDisabled");a([o({type:String,reflect:!0,attribute:"boundary"})],r.prototype,"boundary");a([o({type:String,reflect:!0,attribute:"strategy"})],r.prototype,"strategy");a([o({type:Number,reflect:!0,attribute:"popover-z-index"})],r.prototype,"popoverZIndex");a([o({type:String,reflect:!0,attribute:"backdrop-append-to"})],r.prototype,"backdropAppendTo");a([D(`[id="${b}"]`)],r.prototype,"visualCombobox");a([k()],r.prototype,"selectedOption");a([k()],r.prototype,"displayPopover");r.register(W);
