import"./index-BgeT-gjx.js";import"./index-BxtcjKKj.js";import"./index-D6x0ascg.js";import{u as E,S as $,X as k,k as y,W as g,h as A,q as C,V as D,$ as S,n}from"./iframe-NlBABg4Q.js";import"./index-BWLIheuT.js";import{e as w}from"./query-BPxBhMfF.js";import{t as o}from"./if-defined-CBNUrURk.js";import{C as T,E as P}from"./CaptureDestroyEventForChildElement-Bo_3FBfH.js";import{K as d}from"./TabIndexMixin-Ca5qNIVF.js";import{A as F}from"./buttonsimple.component-CKm-s21K.js";import{D as R}from"./DataAriaLabelMixin-Cx0nKj3a.js";import{F as _}from"./FormInternalsMixin-6DtegLPW.js";import{b as N}from"./listitem.component-JeiMCdBy.js";import{L as M}from"./ListNavigationMixin-C47VvcZ9.js";import{F as x}from"./formfieldwrapper.component-DM5qVts5.js";import{D as L,V}from"./formfieldwrapper.constants-DU1I0PVj.js";import{T as O}from"./index-DklEyyY-.js";import{P as U,D as m}from"./popover.component-DGAgtcyA.js";const W=E.constructTagName("select"),I={ARROW_UP:"arrow-up-bold",ARROW_DOWN:"arrow-down-bold"},u="select-base-triggerid",B="select-listbox",G=$`
  :host {
    --mdc-select-background-color: var(--mds-color-theme-background-primary-ghost);
    --mdc-select-text-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-select-border-color: var(--mds-color-theme-outline-input-normal);
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
    --mdc-select-background-color: var(--mds-color-theme-background-primary-hover);
  }
  :host::part(base-container):active {
    --mdc-select-background-color: var(--mds-color-theme-background-primary-active);
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
    --mdc-select-text-color: var(--mds-color-theme-text-primary-normal);
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
  :host([help-text-type='success'])::part(base-container),
  :host([help-text-type='warning'])::part(base-container),
  :host([help-text-type='error'])::part(base-container) {
    --mdc-select-border-color: var(--mdc-help-text-color);
  }

  :host([readonly])::part(help-text-container) {
    --mdc-help-text-color: var(--mds-color-theme-text-secondary-normal);
  }

  /* Disabled, soft-disabled */
  :host([disabled])::part(base-container),
  :host([soft-disabled])::part(base-container),
  :host([readonly])::part(base-container) {
    --mdc-select-border-color: var(--mds-color-theme-outline-primary-disabled);
    --mdc-select-background-color: var(--mds-color-theme-background-input-disabled);
  }
  :host([disabled])::part(base-text),
  :host([soft-disabled])::part(base-text) {
    --mdc-select-text-color: var(--mds-color-theme-text-primary-disabled);
  }
`,q=[G,...k(!0)];var z=Object.defineProperty,r=(v,e,t,i)=>{for(var s=void 0,l=v.length-1,c;l>=0;l--)(c=v[l])&&(s=c(e,t,s)||s);return s&&z(e,t,s),s};const b=class b extends M(T(F(_(R(x))))){constructor(){super(),this.placement=U.BOTTOM_START,this.boundary=m.BOUNDARY,this.strategy=m.STRATEGY,this.popoverZIndex=m.Z_INDEX,this.displayPopover=!1,this.initialSelectedOption=null,this.itemsStore=new P(this,{isValidItem:this.isValidItem,onStoreUpdate:this.onStoreUpdate}),this.addEventListener(N.MODIFIED,this.handleModifiedEvent)}connectedCallback(){super.connectedCallback(),this.loop="false",this.initialFocus=0}get navItems(){return this.itemsStore.items}attributeChangedCallback(e,t,i){var s;if(super.attributeChangedCallback(e,t,i),e==="value"&&i!==""&&i!==t&&i!==((s=this.selectedOption)==null?void 0:s.value)&&this.navItems.length){const l=this.getFirstSelectedOption(),c=this.getFirstOption(),f=this.navItems.find(h=>h.value===i);let p=null;if(f)p=f;else if(this.placeholder)p=null;else if(c)p=c;else if(l)p=l;else return;this.updateComplete.then(()=>{this.setSelectedOption(p)}).catch(h=>{this.onerror&&this.onerror(h)})}}onStoreUpdate(e,t,i){switch(t){case"added":e.setAttribute("tabindex","-1");break;case"removed":{if(i===-1||e.tabIndex!==0)return;let s=i+1;if(s>=this.navItems.length&&(s=i-1),s===-1){this.displayPopover=!1,this.handleNativeInputFocus();return}this.resetTabIndexes(s);break}}}isValidItem(e){return e.matches(`${O}:not([disabled])`)}getFirstSelectedOption(){return this.navItems.find(e=>e.hasAttribute("selected"))}getFirstOption(){return this.navItems[0]}handleModifiedEvent(e){const t=e.target,i=this.getFirstSelectedOption();switch(e.detail.change){case"selected":{i?this.setSelectedOption(i):this.setSelectedOption(t);break}case"unselected":{i?this.setSelectedOption(i):this.setSelectedOption(this.placeholder?null:this.getFirstOption());break}case"enabled":{this.itemsStore.add(t);break}case"disabled":{this.itemsStore.delete(t);break}}}async firstUpdated(e){await this.updateComplete;const t=this.getFirstSelectedOption();if(t)this.initialSelectedOption=t,this.setSelectedOption(t);else if(this.placeholder)this.placeholder&&this.setInputValidity();else{const i=this.getFirstOption();this.setSelectedOption(i),this.fireEvents()}this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(e)}updated(e){super.updated(e),(e.has("disabled")||e.has("softDisabled")||e.has("readonly"))&&(this.disabled||this.softDisabled||this.readonly)&&(this.displayPopover=!1)}handleOptionsClick(e){const t=e.target;t&&t.tagName===O.toUpperCase()&&!t.hasAttribute("disabled")&&!t.hasAttribute("soft-disabled")&&(this.setSelectedOption(t),this.displayPopover=!1,this.fireEvents())}setSelectedOption(e){var t,i;e!==this.selectedOption&&(this.updateSelectedInChildOptions(e),this.resetTabIndexes(this.navItems.indexOf(e)),this.selectedOption=e,this.value=((t=this.selectedOption)==null?void 0:t.value)??"",this.internals.setFormValue(this.value),(i=this.inputElement)==null||i.setAttribute("value",this.value),this.setInputValidity())}updateSelectedInChildOptions(e){e==null||e.setAttribute("selected","true"),this.navItems.forEach(t=>{t!==e&&t.removeAttribute("selected")})}fireEvents(){this.dispatchInput(this.selectedOption),this.dispatchChange(this.selectedOption)}setInputValidity(){var e,t;!this.selectedOption&&this.required&&this.validationMessage?(e=this.inputElement)==null||e.setCustomValidity(this.validationMessage):(t=this.inputElement)==null||t.setCustomValidity(""),this.setValidity()}formResetCallback(){var t;const e=this.initialSelectedOption||null;((t=this.selectedOption)==null?void 0:t.value)!==(e==null?void 0:e.value)&&(this.setSelectedOption(e),this.fireEvents())}formStateRestoreCallback(e){var i;const t=this.navItems.find(s=>s.value===e||s.label===e);((i=this.selectedOption)==null?void 0:i.value)!==(t==null?void 0:t.value)&&(this.setSelectedOption(t||null),this.fireEvents())}dispatchChange(e){this.dispatchEvent(new CustomEvent("change",{detail:{value:e==null?void 0:e.value,label:e==null?void 0:e.label},composed:!0,bubbles:!0}))}dispatchInput(e){this.dispatchEvent(new CustomEvent("input",{detail:{value:e==null?void 0:e.value,label:e==null?void 0:e.label},composed:!0,bubbles:!0}))}handleClickCombobox(e){this.disabled||this.softDisabled||this.readonly||(this.displayPopover=!this.displayPopover,e.stopPropagation())}handleKeydownCombobox(e){if(!(this.disabled||this.softDisabled||this.readonly))switch(e.key){case d.ARROW_DOWN:case d.ARROW_UP:this.displayPopover=!0,e.preventDefault(),e.stopPropagation();break;case d.ENTER:case d.SPACE:this.displayPopover=!0,e.preventDefault(),e.stopPropagation();break;case d.HOME:{this.displayPopover=!0,this.resetTabIndexAndSetFocus(0),e.preventDefault();break}case d.END:{this.displayPopover=!0,this.resetTabIndexAndSetFocus(this.navItems.length-1),e.preventDefault();break}}}handleNativeInputFocus(){this.visualCombobox.focus()}render(){var e,t,i,s;return y`
      ${this.renderLabel()}
      <div part="container">
        <div
          id="${u}"
          part="base-container"
          @click="${this.handleClickCombobox}"
          @keydown="${this.handleKeydownCombobox}"
          tabindex="${this.disabled?"-1":"0"}"
          class="${this.disabled?"":"mdc-focus-ring"}"
          role="${g.COMBOBOX}"
          aria-controls="${B}"
          aria-label="${this.dataAriaLabel??""}"
          aria-labelledby="${this.label?L.HEADING_ID:""}"
          aria-expanded="${this.displayPopover?"true":"false"}"
          aria-haspopup="${g.LISTBOX}"
          aria-required="${this.required?"true":"false"}"
          aria-invalid="${this.helpTextType===V.ERROR?"true":"false"}"
          aria-disabled="${o(this.disabled||this.softDisabled)}"
          aria-readonly="${o(this.readonly)}"
        >
          ${(e=this.selectedOption)!=null&&e.prefixIcon?y`<mdc-icon
                length-unit="rem"
                size="1"
                name="${(t=this.selectedOption)==null?void 0:t.prefixIcon}"
                part="selected-icon"
              ></mdc-icon>`:A}
          <mdc-text
            part="base-text ${(i=this.selectedOption)!=null&&i.label?"selected":""}"
            type="${C.BODY_MIDSIZE_REGULAR}"
            tagname="${D.SPAN}"
          >
            ${((s=this.selectedOption)==null?void 0:s.label)??this.placeholder}
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
          aria-disabled="${o(this.disabled||this.softDisabled)}"
        />
        <mdc-popover
          trigger="manual"
          triggerid="${u}"
          interactive
          ?visible="${this.displayPopover}"
          role=""
          backdrop
          backdrop-append-to="${o(this.backdropAppendTo)}"
          hide-on-outside-click
          hide-on-escape
          focus-back-to-trigger
          focus-trap
          size
          boundary="${o(this.boundary)}"
          strategy="${o(this.strategy)}"
          placement="${this.placement}"
          @closebyescape="${()=>{this.displayPopover=!1}}"
          @closebyoutsideclick="${()=>{this.displayPopover=!1}}"
          z-index="${o(this.popoverZIndex)}"
          exportparts="popover-content"
        >
          <slot @click="${this.handleOptionsClick}"></slot>
        </mdc-popover>
      </div>
      ${this.renderHelperText()}
    `}};b.styles=[...x.styles,...q];let a=b;r([n({type:String})],a.prototype,"placeholder");r([n({type:String,reflect:!0})],a.prototype,"placement");r([n({type:String,reflect:!0,attribute:"boundary"})],a.prototype,"boundary");r([n({type:String,reflect:!0,attribute:"strategy"})],a.prototype,"strategy");r([n({type:Number,reflect:!0,attribute:"popover-z-index"})],a.prototype,"popoverZIndex");r([n({type:String,reflect:!0,attribute:"backdrop-append-to"})],a.prototype,"backdropAppendTo");r([w(`[id="${u}"]`)],a.prototype,"visualCombobox");r([S()],a.prototype,"selectedOption");r([S()],a.prototype,"displayPopover");a.register(W);
