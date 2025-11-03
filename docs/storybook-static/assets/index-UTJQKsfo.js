import"./index-DpKNC7b1.js";import"./index-CZmWnR20.js";import"./index-C3uyxmiy.js";import{u as k,S as A,X as E,k as y,W as g,h as $,q as C,V as w,n as h,$ as I}from"./iframe-5GhuLSNT.js";import"./index-CGKgMaJk.js";import{e as F}from"./query-BPxBhMfF.js";import{t as n}from"./if-defined-Brvanskx.js";import{C as T,E as D}from"./CaptureDestroyEventForChildElement-BUCnt5kb.js";import{K as c}from"./TabIndexMixin-ChM3fVPx.js";import{A as P}from"./buttonsimple.component-Lr2LsVPI.js";import{D as R}from"./DataAriaLabelMixin-BMsKWw_k.js";import{F as _}from"./FormInternalsMixin-CFkD-wFC.js";import{b as N}from"./listitem.component-DDFieoUI.js";import{L}from"./ListNavigationMixin-DtCIMLmv.js";import{F as O}from"./formfieldwrapper.component-CDeMqzKe.js";import{D as M,V as U}from"./formfieldwrapper.constants-DmA4-VpO.js";import{T as x}from"./index-DGQe9c2O.js";import{P as B,D as u}from"./popover.component-CLHl6xNb.js";import{d as W}from"./index-BqqZxVGc.js";const V=k.constructTagName("select"),S={ARROW_UP:"arrow-up-bold",ARROW_DOWN:"arrow-down-bold"},b="select-base-triggerid",K="select-listbox",G=A`
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
`,q=[G,...E(!0)];var z=Object.defineProperty,l=(v,e,t,i)=>{for(var s=void 0,a=v.length-1,r;a>=0;a--)(r=v[a])&&(s=r(e,t,s)||s);return s&&z(e,t,s),s};const f=class f extends L(T(P(_(R(O))))){constructor(){super(),this.placement=B.BOTTOM_START,this.boundary=u.BOUNDARY,this.strategy=u.STRATEGY,this.popoverZIndex=u.Z_INDEX,this.displayPopover=!1,this.initialSelectedOption=null,this.debounceTime=500,this.searchString="",this.onStoreUpdate=(e,t,i,s)=>{switch(t){case"added":e.setAttribute("tabindex","-1");break;case"removed":{if(i===-1||s.length===0)return;let a=i+1;if(a>=s.length&&(a=i-1),a===-1&&this.displayPopover){this.displayPopover=!1,this.handleNativeInputFocus();return}if(e.tabIndex===0&&this.resetTabIndexes(a),e.hasAttribute("selected")){let r=null;this.placeholder||(r=i===0?s[a]:s[0]),this.setSelectedOption(r)}break}}},this.isValidItem=e=>e.matches(`${x}:not([disabled])`),this.addEventListener(N.MODIFIED,this.handleModifiedEvent),this.itemsStore=new D(this,{isValidItem:this.isValidItem,onStoreUpdate:this.onStoreUpdate})}connectedCallback(){super.connectedCallback(),this.loop="false",this.initialFocus=0,this.setupDebounceSearch()}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.debounceSearch)==null||e.cancel(),window.cancelAnimationFrame(this.animationFrameId)}get navItems(){return this.itemsStore.items}attributeChangedCallback(e,t,i){var s;if(super.attributeChangedCallback(e,t,i),e==="value"&&i!==""&&i!==t&&i!==((s=this.selectedOption)==null?void 0:s.value)&&this.navItems.length){const a=this.getFirstSelectedOption(),r=this.getFirstOption(),p=this.navItems.find(m=>m.value===i);let d=null;if(p)d=p;else if(this.placeholder)d=null;else if(r)d=r;else if(a)d=a;else return;this.updateComplete.then(()=>{this.setSelectedOption(d)}).catch(m=>{this.onerror&&this.onerror(m)})}}getFirstSelectedOption(){return this.navItems.find(e=>e.hasAttribute("selected"))}getFirstOption(){return this.navItems[0]}handleModifiedEvent(e){const t=e.target,i=this.getFirstSelectedOption();switch(e.detail.change){case"selected":{i?this.setSelectedOption(i):this.setSelectedOption(t);break}case"unselected":{i?this.setSelectedOption(i):this.setSelectedOption(this.placeholder?null:this.getFirstOption());break}case"enabled":{this.itemsStore.add(t);break}case"disabled":{this.itemsStore.delete(t);break}}}async firstUpdated(e){await this.updateComplete;const t=this.getFirstSelectedOption();if(t)this.initialSelectedOption=t,this.setSelectedOption(t);else if(this.placeholder)this.placeholder&&this.setInputValidity();else{const i=this.getFirstOption();this.setSelectedOption(i),this.fireEvents()}this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(e)}updated(e){super.updated(e),(e.has("disabled")||e.has("softDisabled")||e.has("readonly"))&&(this.disabled||this.softDisabled||this.readonly)&&(this.displayPopover=!1)}handleOptionsClick(e){const t=e.target;t&&t.tagName===x.toUpperCase()&&!t.hasAttribute("disabled")&&!t.hasAttribute("soft-disabled")&&(this.setSelectedOption(t),this.displayPopover=!1,this.fireEvents())}setSelectedOption(e){var t,i;e!==this.selectedOption&&(this.updateSelectedInChildOptions(e),this.resetTabIndexes(this.navItems.indexOf(e)),this.selectedOption=e,this.value=((t=this.selectedOption)==null?void 0:t.value)??"",this.internals.setFormValue(this.value),(i=this.inputElement)==null||i.setAttribute("value",this.value),this.setInputValidity())}updateSelectedInChildOptions(e){e==null||e.setAttribute("selected","true"),this.navItems.forEach(t=>{t!==e&&t.removeAttribute("selected")})}fireEvents(){this.dispatchInput(this.selectedOption),this.dispatchChange(this.selectedOption)}setInputValidity(){var e,t;!this.selectedOption&&this.required&&this.validationMessage?(e=this.inputElement)==null||e.setCustomValidity(this.validationMessage):(t=this.inputElement)==null||t.setCustomValidity(""),this.setValidity()}formResetCallback(){var t;const e=this.initialSelectedOption||null;((t=this.selectedOption)==null?void 0:t.value)!==(e==null?void 0:e.value)&&(this.setSelectedOption(e),this.fireEvents())}formStateRestoreCallback(e){var i;const t=this.navItems.find(s=>s.value===e||s.label===e);((i=this.selectedOption)==null?void 0:i.value)!==(t==null?void 0:t.value)&&(this.setSelectedOption(t||null),this.fireEvents())}dispatchChange(e){this.dispatchEvent(new CustomEvent("change",{detail:{value:e==null?void 0:e.value,label:e==null?void 0:e.label},composed:!0,bubbles:!0}))}dispatchInput(e){this.dispatchEvent(new CustomEvent("input",{detail:{value:e==null?void 0:e.value,label:e==null?void 0:e.label},composed:!0,bubbles:!0}))}handleClickCombobox(e){this.disabled||this.softDisabled||this.readonly||(this.displayPopover=!this.displayPopover,e.stopPropagation())}setupDebounceSearch(){this.debounceSearch=W(()=>{this.searchString=""},this.debounceTime)}debounceSearchKey(e){var t;return(t=this.debounceSearch)==null||t.call(this),this.searchString+=e,this.searchString}filterOptionsBySearchKey(e,t){return e.filter(i=>{var s;return(s=i.getAttribute("label"))==null?void 0:s.toLowerCase().startsWith(t.toLowerCase())})}handleSelectedOptionBasedOnFilter(e){const t=this.navItems.findIndex(r=>r.tabIndex===0)+1,i=[...this.navItems.slice(t),...this.navItems.slice(0,t)],s=this.filterOptionsBySearchKey(i,e);let a=null;if(s.length)[a]=s;else if(e.split("").every(r=>r===e[0])){const r=this.navItems[t],p=this.filterOptionsBySearchKey(i,e[0]),d=p.filter(m=>m===r);a=d.length?d[0]:p[0]}this.navItems.indexOf(a)!==-1&&this.resetTabIndexAndSetFocusAfterUpdate(this.navItems.indexOf(a))}handleKeydownCombobox(e){if(!(this.disabled||this.softDisabled||this.readonly)){switch(e.key){case c.ARROW_DOWN:case c.ARROW_UP:case c.ENTER:case c.SPACE:this.displayPopover=!0,e.stopPropagation();break;case c.HOME:{this.displayPopover=!0,this.resetTabIndexAndSetFocusAfterUpdate(0);break}case c.END:{this.displayPopover=!0,this.resetTabIndexAndSetFocusAfterUpdate(this.navItems.length-1);break}default:{e.key.length===1&&(this.displayPopover=!0,this.handleSelectedOptionByKeyInput(e.key));break}}e.preventDefault(),e.stopPropagation()}}resetTabIndexAndSetFocusAfterUpdate(e){this.displayPopover&&(this.animationFrameId=window.requestAnimationFrame(()=>{this.resetTabIndexAndSetFocus(e)}))}handleNativeInputFocus(){this.visualCombobox.focus()}handleSelectedOptionByKeyInput(e){const t=this.debounceSearchKey(e);this.handleSelectedOptionBasedOnFilter(t)}handleKeydownPopover(e){e.key.length===1&&this.handleSelectedOptionByKeyInput(e.key)}render(){var e,t,i,s;return y`
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
          aria-controls="${K}"
          aria-label="${this.dataAriaLabel??""}"
          aria-labelledby="${this.label?M.HEADING_ID:""}"
          aria-expanded="${this.displayPopover?"true":"false"}"
          aria-haspopup="${g.LISTBOX}"
          aria-required="${this.required?"true":"false"}"
          aria-invalid="${this.helpTextType===U.ERROR?"true":"false"}"
          aria-disabled="${n(this.disabled||this.softDisabled)}"
          aria-readonly="${n(this.readonly)}"
        >
          ${(e=this.selectedOption)!=null&&e.prefixIcon?y`<mdc-icon
                length-unit="rem"
                size="1"
                name="${(t=this.selectedOption)==null?void 0:t.prefixIcon}"
                part="selected-icon"
              ></mdc-icon>`:$}
          <mdc-text
            part="base-text ${(i=this.selectedOption)!=null&&i.label?"selected":""}"
            type="${C.BODY_MIDSIZE_REGULAR}"
            tagname="${w.SPAN}"
          >
            ${((s=this.selectedOption)==null?void 0:s.label)??this.placeholder}
          </mdc-text>
          <div part="icon-container">
            <mdc-icon
              size="1"
              length-unit="rem"
              name="${this.displayPopover?S.ARROW_UP:S.ARROW_DOWN}"
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
          aria-disabled="${n(this.disabled||this.softDisabled)}"
        />
        <mdc-popover
          trigger="manual"
          triggerid="${b}"
          interactive
          ?visible="${this.displayPopover}"
          role=""
          backdrop
          backdrop-append-to="${n(this.backdropAppendTo)}"
          hide-on-outside-click
          hide-on-escape
          focus-back-to-trigger
          focus-trap
          size
          @keydown="${this.handleKeydownPopover}"
          boundary="${n(this.boundary)}"
          strategy="${n(this.strategy)}"
          placement="${this.placement}"
          @closebyescape="${()=>{this.displayPopover=!1}}"
          @closebyoutsideclick="${()=>{this.displayPopover=!1}}"
          z-index="${n(this.popoverZIndex)}"
          exportparts="popover-content"
        >
          <slot @click="${this.handleOptionsClick}"></slot>
        </mdc-popover>
      </div>
      ${this.renderHelperText()}
    `}};f.styles=[...O.styles,...q];let o=f;l([h({type:String})],o.prototype,"placeholder");l([h({type:String,reflect:!0})],o.prototype,"placement");l([h({type:String,reflect:!0,attribute:"boundary"})],o.prototype,"boundary");l([h({type:String,reflect:!0,attribute:"strategy"})],o.prototype,"strategy");l([h({type:Number,reflect:!0,attribute:"popover-z-index"})],o.prototype,"popoverZIndex");l([h({type:String,reflect:!0,attribute:"backdrop-append-to"})],o.prototype,"backdropAppendTo");l([F(`[id="${b}"]`)],o.prototype,"visualCombobox");l([I()],o.prototype,"selectedOption");l([I()],o.prototype,"displayPopover");o.register(V);
