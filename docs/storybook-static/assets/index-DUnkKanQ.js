import"./index-C5XHBhP8.js";import"./index-D1jPjw4Q.js";import"./index-DqXkvm2Q.js";import{u as E,a2 as k,a4 as $,k as v,R as y,h as D,T as w,V as F,a5 as A,n as h,t as T}from"./iframe-DdxUAY1B.js";import"./index-CtCujbG3.js";import{t as n}from"./if-defined-Dx73VnWw.js";import{C,E as P}from"./CaptureDestroyEventForChildElement-CWdjSqXw.js";import{A as N}from"./buttonsimple.component-CnciPr00.js";import{D as L}from"./DataAriaLabelMixin-B6s65u7G.js";import{F as R}from"./FormInternalsMixin-CuxWN4XA.js";import{a as _}from"./listitem.component-Dghsd2oP.js";import{L as M}from"./ListNavigationMixin-BlyZUgyf.js";import{F as g}from"./formfieldwrapper.component-Cn786d3I.js";import{D as U,V as B}from"./formfieldwrapper.constants-DIgFZEkP.js";import{T as O}from"./index-DKiplhPb.js";import{P as K,D as x,a as V}from"./popover.constants-CxG_396l.js";import{d as W}from"./index-DkwgF5yz.js";import{a as G,N as S,A as c}from"./KeyDownHandledMixin-BChvhqno.js";const H=E.constructTagName("select"),I={ARROW_UP:"arrow-up-bold",ARROW_DOWN:"arrow-down-bold"},m="select-base-triggerid",q="select-listbox",z={DISABLE_FLIP:!1},Y=k`
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
    height: 2rem;
    width: 100%;
    position: relative;
    display: flex;
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
    width: 100%;
  }
  :host::part(base-container):hover {
    --mdc-select-background-color: var(--mds-color-theme-background-primary-hover);
  }
  :host::part(base-container):active {
    --mdc-select-background-color: var(--mds-color-theme-background-primary-active);
  }
  :host::part(base-text) {
    /* 2rem is the complete width of dropdown icon */
    width: calc(100% - 2rem);
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
    padding: 0.5rem;
    position: absolute;
    inset-inline-end: 0%;
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
`,X=[Y,...$(!0)];var Z=Object.defineProperty,l=(f,e,t,i)=>{for(var s=void 0,a=f.length-1,r;a>=0;a--)(r=f[a])&&(s=r(e,t,s)||s);return s&&Z(e,t,s),s};const b=class b extends M(G(C(N(R(L(g)))))){constructor(){super(),this.placement=K.BOTTOM_START,this.boundary=x.BOUNDARY,this.strategy=x.STRATEGY,this.popoverZIndex=void 0,this.disableFlip=z.DISABLE_FLIP,this.displayPopover=!1,this.initialSelectedOption=null,this.debounceTime=500,this.searchString="",this.onStoreUpdate=(e,t,i,s)=>{switch(t){case"added":e.setAttribute("tabindex",i===0&&s.length===0?"0":"-1"),e.hasAttribute("selected")&&this.resetTabIndexes(i);break;case"removed":{if(i===-1||s.length===0)return;let a=i+1;if(a>=s.length&&(a=i-1),a===-1&&this.displayPopover){this.displayPopover=!1,this.handleNativeInputFocus();return}if(e.tabIndex===0&&this.resetTabIndexes(a),e.hasAttribute("selected")){let r=null;this.placeholder||(r=i===0?s[a]:s[0]),this.setSelectedOption(r)}break}}},this.isValidItem=e=>e.matches(`${O}:not([disabled])`),this.addEventListener(_.MODIFIED,this.handleModifiedEvent),this.itemsStore=new P(this,{isValidItem:this.isValidItem,onStoreUpdate:this.onStoreUpdate})}connectedCallback(){super.connectedCallback(),this.loop="false",this.initialFocus=0,this.setupDebounceSearch()}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.debounceSearch)==null||e.cancel(),window.cancelAnimationFrame(this.animationFrameId)}get navItems(){return this.itemsStore.items}attributeChangedCallback(e,t,i){var s;if(super.attributeChangedCallback(e,t,i),e==="value"&&i!==""&&i!==t&&i!==((s=this.selectedOption)==null?void 0:s.value)&&this.navItems.length){const a=this.getFirstSelectedOption(),r=this.getFirstOption(),p=this.navItems.find(u=>u.value===i);let d=null;if(p)d=p;else if(this.placeholder)d=null;else if(r)d=r;else if(a)d=a;else return;this.updateComplete.then(()=>{this.setSelectedOption(d)}).catch(u=>{this.onerror&&this.onerror(u)})}}getFirstSelectedOption(){return this.navItems.find(e=>e.hasAttribute("selected"))}getFirstOption(){return this.navItems[0]}handleModifiedEvent(e){const t=e.target,i=this.getFirstSelectedOption();switch(e.detail.change){case"selected":{i&&i!==this.selectedOption?this.setSelectedOption(i):this.setSelectedOption(t);break}case"unselected":{i?this.setSelectedOption(i):this.setSelectedOption(this.placeholder?null:this.getFirstOption());break}case"enabled":{this.itemsStore.add(t);break}case"disabled":{this.itemsStore.delete(t);break}}}async firstUpdated(e){await this.updateComplete;const t=this.getFirstSelectedOption();if(t)this.initialSelectedOption=t,this.setSelectedOption(t);else if(this.placeholder)this.placeholder&&this.setInputValidity();else{const i=this.getFirstOption();this.setSelectedOption(i),this.fireEvents()}this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(e)}updated(e){super.updated(e),(e.has("disabled")||e.has("softDisabled")||e.has("readonly"))&&(this.disabled||this.softDisabled||this.readonly)&&(this.displayPopover=!1)}handleOptionsClick(e){const t=e.target;t&&t.tagName===O.toUpperCase()&&!t.hasAttribute("disabled")&&!t.hasAttribute("soft-disabled")&&(this.setSelectedOption(t),t.isKeyDownEventHandled&&this.keyDownEventHandled(),this.displayPopover=!1,this.fireEvents())}setSelectedOption(e){var t,i;e!==this.selectedOption&&(this.updateSelectedInChildOptions(e),this.resetTabIndexes(this.navItems.indexOf(e)),this.selectedOption=e,this.value=((t=this.selectedOption)==null?void 0:t.value)??"",this.internals.setFormValue(this.value),(i=this.inputElement)==null||i.setAttribute("value",this.value),this.setInputValidity())}updateSelectedInChildOptions(e){e==null||e.setAttribute("selected","true"),this.navItems.forEach(t=>{t!==e&&t.removeAttribute("selected")})}fireEvents(){this.dispatchInput(this.selectedOption),this.dispatchChange(this.selectedOption)}setInputValidity(){var e,t;!this.selectedOption&&this.required&&this.validationMessage?(e=this.inputElement)==null||e.setCustomValidity(this.validationMessage):(t=this.inputElement)==null||t.setCustomValidity(""),this.setValidity()}formResetCallback(){var t;const e=this.initialSelectedOption||null;((t=this.selectedOption)==null?void 0:t.value)!==(e==null?void 0:e.value)&&(this.setSelectedOption(e),this.fireEvents())}formStateRestoreCallback(e){var i;const t=this.navItems.find(s=>s.value===e||s.label===e);((i=this.selectedOption)==null?void 0:i.value)!==(t==null?void 0:t.value)&&(this.setSelectedOption(t||null),this.fireEvents())}dispatchChange(e){this.dispatchEvent(new CustomEvent("change",{detail:{value:e==null?void 0:e.value,label:e==null?void 0:e.label},composed:!0,bubbles:!0}))}dispatchInput(e){this.dispatchEvent(new CustomEvent("input",{detail:{value:e==null?void 0:e.value,label:e==null?void 0:e.label},composed:!0,bubbles:!0}))}handleClickCombobox(e){this.disabled||this.softDisabled||this.readonly||(this.displayPopover=!this.displayPopover,e.stopPropagation())}setupDebounceSearch(){this.debounceSearch=W(()=>{this.searchString=""},this.debounceTime)}debounceSearchKey(e){var t;return(t=this.debounceSearch)==null||t.call(this),this.searchString+=e,this.searchString}filterOptionsBySearchKey(e,t){return e.filter(i=>{var s;return(s=i.getAttribute("label"))==null?void 0:s.toLowerCase().startsWith(t.toLowerCase())})}handleSelectedOptionBasedOnFilter(e){const t=this.navItems.findIndex(r=>r.tabIndex===0)+1,i=[...this.navItems.slice(t),...this.navItems.slice(0,t)],s=this.filterOptionsBySearchKey(i,e);let a=null;if(s.length)[a]=s;else if(e.split("").every(r=>r===e[0])){const r=this.navItems[t],p=this.filterOptionsBySearchKey(i,e[0]),d=p.filter(u=>u===r);a=d.length?d[0]:p[0]}this.navItems.indexOf(a)!==-1&&this.resetTabIndexAndSetFocusAfterUpdate(this.navItems.indexOf(a))}handleKeydownCombobox(e){if(this.disabled||this.softDisabled||this.readonly)return;const t=this.getActionForKeyEvent(e);if(this.getKeyboardNavMode()===S.DEFAULT)switch(t){case c.DOWN:case c.UP:case c.ENTER:case c.SPACE:this.displayPopover||this.keyDownEventHandled(),this.displayPopover=!0,e.preventDefault(),e.stopPropagation();break;case c.HOME:{this.displayPopover=!0,this.resetTabIndexAndSetFocusAfterUpdate(0),e.preventDefault(),e.stopPropagation();break}case c.END:{this.displayPopover=!0,this.resetTabIndexAndSetFocusAfterUpdate(this.navItems.length-1),e.preventDefault(),e.stopPropagation();break}default:{e.key.length===1&&!e.metaKey&&!e.ctrlKey&&!e.altKey&&(this.displayPopover=!0,this.handleSelectedOptionByKeyInput(e.key),e.preventDefault(),e.stopPropagation());break}}else t===c.ENTER&&(this.displayPopover=!0,e.preventDefault(),e.stopPropagation())}resetTabIndexAndSetFocusAfterUpdate(e){this.displayPopover&&(this.animationFrameId=window.requestAnimationFrame(()=>{this.resetTabIndexAndSetFocus(e)}))}handleNativeInputFocus(){this.visualCombobox.focus()}handleSelectedOptionByKeyInput(e){const t=this.debounceSearchKey(e);this.handleSelectedOptionBasedOnFilter(t)}handleKeydownPopover(e){this.getKeyboardNavMode()===S.DEFAULT&&e.key.length===1&&this.handleSelectedOptionByKeyInput(e.key)}render(){var e,t,i,s;return v`
      ${this.renderLabel()}
      <div part="container">
        <div
          id="${m}"
          part="base-container"
          @click="${this.handleClickCombobox}"
          @keydown="${this.handleKeydownCombobox}"
          tabindex="${this.disabled?"-1":"0"}"
          class="${this.disabled?"":"mdc-focus-ring"}"
          role="${y.COMBOBOX}"
          aria-controls="${q}"
          aria-label="${this.dataAriaLabel??""}"
          aria-labelledby="${this.label?U.HEADING_ID:""}"
          aria-expanded="${this.displayPopover?"true":"false"}"
          aria-haspopup="${y.LISTBOX}"
          aria-required="${this.required?"true":"false"}"
          aria-invalid="${this.helpTextType===B.ERROR?"true":"false"}"
          aria-disabled="${n(this.disabled||this.softDisabled)}"
          aria-readonly="${n(this.readonly)}"
        >
          ${(e=this.selectedOption)!=null&&e.prefixIcon?v`<mdc-icon
                length-unit="rem"
                size="1"
                name="${(t=this.selectedOption)==null?void 0:t.prefixIcon}"
                part="selected-icon"
              ></mdc-icon>`:D}
          <mdc-text
            part="base-text ${(i=this.selectedOption)!=null&&i.label?"selected":""}"
            type="${w.BODY_MIDSIZE_REGULAR}"
            tagname="${F.SPAN}"
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
          aria-disabled="${n(this.disabled||this.softDisabled)}"
        />
        <mdc-popover
          trigger="${V.MANUAL}"
          triggerid="${m}"
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
          ?disable-flip="${this.disableFlip}"
          boundary="${n(this.boundary)}"
          strategy="${n(this.strategy)}"
          placement="${this.placement}"
          @closebyescape="${a=>{a.target===a.currentTarget&&(this.displayPopover=!1)}}"
          @closebyoutsideclick="${()=>{this.displayPopover=!1}}"
          z-index="${n(this.popoverZIndex)}"
          exportparts="popover-content"
        >
          <slot @click="${this.handleOptionsClick}"></slot>
        </mdc-popover>
      </div>
      ${this.renderHelperText()}
    `}};b.styles=[...g.styles,...X];let o=b;l([h({type:String})],o.prototype,"placeholder");l([h({type:String,reflect:!0})],o.prototype,"placement");l([h({type:String,reflect:!0,attribute:"boundary"})],o.prototype,"boundary");l([h({type:String,reflect:!0,attribute:"strategy"})],o.prototype,"strategy");l([h({type:Number,reflect:!0,attribute:"popover-z-index"})],o.prototype,"popoverZIndex");l([h({type:Boolean,reflect:!0,attribute:"disable-flip"})],o.prototype,"disableFlip");l([h({type:String,reflect:!0,attribute:"backdrop-append-to"})],o.prototype,"backdropAppendTo");l([T(`[id="${m}"]`)],o.prototype,"visualCombobox");l([A()],o.prototype,"selectedOption");l([A()],o.prototype,"displayPopover");o.register(H);
