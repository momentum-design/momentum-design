import"./index-B4oCoTdq.js";import"./index-DlsJDHpW.js";import"./index-Bp6VsS0m.js";import{u as E,a2 as D,a8 as k,k as y,R as g,h as $,T as F,V as w,n as c,t as C,a4 as A}from"./iframe-C252fD8g.js";import"./index-CmJB1Msd.js";import{t as h}from"./if-defined-JuF83bhN.js";import{C as P,E as T}from"./CaptureDestroyEventForChildElement-D6LkNmrO.js";import{A as N}from"./buttonsimple.component-C-HII-nz.js";import{D as L}from"./DataAriaLabelMixin-qqDg6DtS.js";import{F as R}from"./FormInternalsMixin-Dfg8iEd3.js";import{L as M}from"./LifeCycleMixin-CkFTW4AQ.js";import{L as _}from"./ListNavigationMixin-BlYbrw07.js";import{F as O}from"./formfieldwrapper.component-DqUkBCBw.js";import{D as U,V as K}from"./formfieldwrapper.constants-CjTwgvqw.js";import{T as x}from"./index-BeNKt3V6.js";import{P as B,D as S,a as V}from"./popover.constants-RYfYgu80.js";import{d as W}from"./index-DjL1EH8h.js";import{a as G,N as m,A as n}from"./KeyDownHandledMixin-DzpgmDKR.js";const H=E.constructTagName("select"),I={ARROW_UP:"arrow-up-bold",ARROW_DOWN:"arrow-down-bold"},b="select-base-triggerid",q="select-listbox",z={DISABLE_FLIP:!1},Y=D`
  :host {
    --mdc-select-background-color: var(--mds-color-theme-background-primary-ghost);
    --mdc-select-text-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-select-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-select-height: 2rem;
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
    height: var(--mdc-select-height);
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
`,X=[Y,...k(!0)];var Z=Object.defineProperty,l=(v,e,t,i)=>{for(var s=void 0,a=v.length-1,o;a>=0;a--)(o=v[a])&&(s=o(e,t,s)||s);return s&&Z(e,t,s),s};const f=class f extends _(G(P(N(R(L(O)))))){constructor(){super(),this.placement=B.BOTTOM_START,this.boundary=S.BOUNDARY,this.strategy=S.STRATEGY,this.popoverZIndex=void 0,this.disableFlip=z.DISABLE_FLIP,this.displayPopover=!1,this.initialSelectedOption=null,this.debounceTime=500,this.searchString="",this.onStoreUpdate=(e,t,i,s)=>{switch(t){case"added":e.setAttribute("tabindex",i===0&&s.length===0?"0":"-1"),e.hasAttribute("selected")&&this.resetTabIndexes(i);break;case"removed":{if(i===-1||s.length===0)return;let a=i+1;if(a>=s.length&&(a=i-1),a===-1&&this.displayPopover){this.displayPopover=!1,this.handleNativeInputFocus();return}if(e.tabIndex===0&&this.resetTabIndexes(a),e.hasAttribute("selected")){let o=null;this.placeholder||(o=i===0?s[a]:s[0]),this.setSelectedOption(o)}break}}},this.isValidItem=e=>e.matches(`${x}:not([disabled])`),this.addEventListener(M.MODIFIED,this.handleModifiedEvent),this.itemsStore=new T(this,{isValidItem:this.isValidItem,onStoreUpdate:this.onStoreUpdate})}connectedCallback(){super.connectedCallback(),this.loop="false",this.initialFocus=0,this.setupDebounceSearch()}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.debounceSearch)==null||e.cancel(),window.cancelAnimationFrame(this.animationFrameId)}get navItems(){return this.itemsStore.items}attributeChangedCallback(e,t,i){var s;if(super.attributeChangedCallback(e,t,i),e==="value"&&i!==""&&i!==t&&i!==((s=this.selectedOption)==null?void 0:s.value)&&this.navItems.length){const a=this.getFirstSelectedOption(),o=this.getFirstOption(),p=this.navItems.find(u=>u.value===i);let d=null;if(p)d=p;else if(this.placeholder)d=null;else if(o)d=o;else if(a)d=a;else return;this.updateComplete.then(()=>{this.setSelectedOption(d)}).catch(u=>{this.onerror&&this.onerror(u)})}}getFirstSelectedOption(){return this.navItems.find(e=>e.hasAttribute("selected"))}getFirstOption(){return this.navItems[0]}handleModifiedEvent(e){const t=e.target,i=this.getFirstSelectedOption();switch(e.detail.change){case"selected":{i&&i!==this.selectedOption?this.setSelectedOption(i):this.setSelectedOption(t);break}case"unselected":{i?this.setSelectedOption(i):this.setSelectedOption(this.placeholder?null:this.getFirstOption());break}case"enabled":{this.itemsStore.add(t);break}case"disabled":{this.itemsStore.delete(t);break}}}async firstUpdated(e){await this.updateComplete;const t=this.getFirstSelectedOption();if(t)this.initialSelectedOption=t,this.setSelectedOption(t);else if(this.placeholder)this.placeholder&&this.setInputValidity();else{const i=this.getFirstOption();this.setSelectedOption(i),this.fireEvents()}this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(e)}updated(e){super.updated(e),(e.has("disabled")||e.has("softDisabled")||e.has("readonly"))&&(this.disabled||this.softDisabled||this.readonly)&&(this.displayPopover=!1)}handleOptionsClick(e){const t=e.target;t&&t.tagName===x.toUpperCase()&&!t.hasAttribute("disabled")&&!t.hasAttribute("soft-disabled")&&(this.setSelectedOption(t),t.isKeyDownEventHandled&&this.keyDownEventHandled(),this.displayPopover=!1,this.fireEvents())}setSelectedOption(e){var t,i;e!==this.selectedOption&&(this.updateSelectedInChildOptions(e),this.resetTabIndexes(this.navItems.indexOf(e)),this.selectedOption=e,this.value=((t=this.selectedOption)==null?void 0:t.value)??"",this.internals.setFormValue(this.value),(i=this.inputElement)==null||i.setAttribute("value",this.value),this.setInputValidity())}updateSelectedInChildOptions(e){e==null||e.setAttribute("selected","true"),this.navItems.forEach(t=>{t!==e&&t.removeAttribute("selected")})}fireEvents(){this.dispatchInput(this.selectedOption),this.dispatchChange(this.selectedOption)}setInputValidity(){var e,t;!this.selectedOption&&this.required&&this.validationMessage?(e=this.inputElement)==null||e.setCustomValidity(this.validationMessage):(t=this.inputElement)==null||t.setCustomValidity(""),this.setValidity()}formResetCallback(){var t;const e=this.initialSelectedOption||null;((t=this.selectedOption)==null?void 0:t.value)!==(e==null?void 0:e.value)&&(this.setSelectedOption(e),this.fireEvents())}formStateRestoreCallback(e){var i;const t=this.navItems.find(s=>s.value===e||s.label===e);((i=this.selectedOption)==null?void 0:i.value)!==(t==null?void 0:t.value)&&(this.setSelectedOption(t||null),this.fireEvents())}dispatchChange(e){this.dispatchEvent(new CustomEvent("change",{detail:{value:e==null?void 0:e.value,label:e==null?void 0:e.label},composed:!0,bubbles:!0}))}dispatchInput(e){this.dispatchEvent(new CustomEvent("input",{detail:{value:e==null?void 0:e.value,label:e==null?void 0:e.label},composed:!0,bubbles:!0}))}handleClickCombobox(e){this.disabled||this.softDisabled||this.readonly||(this.displayPopover=!this.displayPopover,e.stopPropagation())}setupDebounceSearch(){this.debounceSearch=W(()=>{this.searchString=""},this.debounceTime)}debounceSearchKey(e){var t;return(t=this.debounceSearch)==null||t.call(this),this.searchString+=e,this.searchString}filterOptionsBySearchKey(e,t){return e.filter(i=>{var s;return(s=i.getAttribute("label"))==null?void 0:s.toLowerCase().startsWith(t.toLowerCase())})}handleSelectedOptionBasedOnFilter(e){const t=this.navItems.findIndex(o=>o.tabIndex===0)+1,i=[...this.navItems.slice(t),...this.navItems.slice(0,t)],s=this.filterOptionsBySearchKey(i,e);let a=null;if(s.length)[a]=s;else if(e.split("").every(o=>o===e[0])){const o=this.navItems[t],p=this.filterOptionsBySearchKey(i,e[0]),d=p.filter(u=>u===o);a=d.length?d[0]:p[0]}this.navItems.indexOf(a)!==-1&&this.resetTabIndexAndSetFocusAfterUpdate(this.navItems.indexOf(a))}handleKeydownCombobox(e){if(this.disabled||this.softDisabled||this.readonly)return;const t=this.getActionForKeyEvent(e);if(this.getKeyboardNavMode()===m.DEFAULT)switch(t){case n.DOWN:case n.UP:case n.ENTER:this.displayPopover||this.keyDownEventHandled(),this.displayPopover=!0,e.preventDefault(),e.stopPropagation();break;case n.SPACE:e.preventDefault(),e.stopPropagation();break;case n.HOME:{this.displayPopover=!0,this.resetTabIndexAndSetFocusAfterUpdate(0),e.preventDefault(),e.stopPropagation();break}case n.END:{this.displayPopover=!0,this.resetTabIndexAndSetFocusAfterUpdate(this.navItems.length-1),e.preventDefault(),e.stopPropagation();break}default:{e.key.length===1&&!e.metaKey&&!e.ctrlKey&&!e.altKey&&(this.displayPopover=!0,this.handleSelectedOptionByKeyInput(e.key),e.preventDefault(),e.stopPropagation());break}}else t===n.ENTER&&(this.displayPopover=!0,e.preventDefault(),e.stopPropagation())}handleKeyupCombobox(e){if(this.disabled||this.softDisabled||this.readonly)return;const t=this.getActionForKeyEvent(e);this.getKeyboardNavMode()===m.DEFAULT&&t===n.SPACE&&(this.displayPopover||this.keyDownEventHandled(),this.displayPopover=!0,e.preventDefault(),e.stopPropagation())}resetTabIndexAndSetFocusAfterUpdate(e){this.displayPopover&&(this.animationFrameId=window.requestAnimationFrame(()=>{this.resetTabIndexAndSetFocus(e)}))}handleNativeInputFocus(){this.visualCombobox.focus()}handleSelectedOptionByKeyInput(e){const t=this.debounceSearchKey(e);this.handleSelectedOptionBasedOnFilter(t)}handleKeydownPopover(e){this.getKeyboardNavMode()===m.DEFAULT&&e.key.length===1&&this.handleSelectedOptionByKeyInput(e.key)}render(){var e,t,i,s;return y`
      ${this.renderLabel()}
      <div part="container">
        <div
          id="${b}"
          part="base-container"
          @click="${this.handleClickCombobox}"
          @keydown="${this.handleKeydownCombobox}"
          @keyup="${this.handleKeyupCombobox}"
          tabindex="${this.disabled?"-1":"0"}"
          class="${this.disabled?"":"mdc-focus-ring"}"
          role="${g.COMBOBOX}"
          aria-controls="${q}"
          aria-label="${this.dataAriaLabel??""}"
          aria-labelledby="${this.label?U.HEADING_ID:""}"
          aria-expanded="${this.displayPopover?"true":"false"}"
          aria-haspopup="${g.LISTBOX}"
          aria-required="${this.required?"true":"false"}"
          aria-invalid="${this.helpTextType===K.ERROR?"true":"false"}"
          aria-disabled="${h(this.disabled||this.softDisabled)}"
          aria-readonly="${h(this.readonly)}"
        >
          ${(e=this.selectedOption)!=null&&e.prefixIcon?y`<mdc-icon
                length-unit="rem"
                size="1"
                name="${(t=this.selectedOption)==null?void 0:t.prefixIcon}"
                part="selected-icon"
              ></mdc-icon>`:$}
          <mdc-text
            part="base-text ${(i=this.selectedOption)!=null&&i.label?"selected":""}"
            type="${F.BODY_MIDSIZE_REGULAR}"
            tagname="${w.SPAN}"
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
          aria-disabled="${h(this.disabled||this.softDisabled)}"
        />
        <mdc-popover
          trigger="${V.MANUAL}"
          triggerid="${b}"
          interactive
          ?visible="${this.displayPopover}"
          role=""
          backdrop
          backdrop-append-to="${h(this.backdropAppendTo)}"
          hide-on-outside-click
          hide-on-escape
          focus-back-to-trigger
          focus-trap
          size
          @keydown="${this.handleKeydownPopover}"
          ?disable-flip="${this.disableFlip}"
          boundary="${h(this.boundary)}"
          strategy="${h(this.strategy)}"
          placement="${this.placement}"
          @closebyescape="${a=>{a.target===a.currentTarget&&(this.displayPopover=!1)}}"
          @closebyoutsideclick="${()=>{this.displayPopover=!1}}"
          z-index="${h(this.popoverZIndex)}"
          exportparts="popover-content"
        >
          <slot @click="${this.handleOptionsClick}"></slot>
        </mdc-popover>
      </div>
      ${this.renderHelperText()}
    `}};f.styles=[...O.styles,...X];let r=f;l([c({type:String})],r.prototype,"placeholder");l([c({type:String,reflect:!0})],r.prototype,"placement");l([c({type:String,reflect:!0,attribute:"boundary"})],r.prototype,"boundary");l([c({type:String,reflect:!0,attribute:"strategy"})],r.prototype,"strategy");l([c({type:Number,reflect:!0,attribute:"popover-z-index"})],r.prototype,"popoverZIndex");l([c({type:Boolean,reflect:!0,attribute:"disable-flip"})],r.prototype,"disableFlip");l([c({type:String,reflect:!0,attribute:"backdrop-append-to"})],r.prototype,"backdropAppendTo");l([C(`[id="${b}"]`)],r.prototype,"visualCombobox");l([A()],r.prototype,"selectedOption");l([A()],r.prototype,"displayPopover");r.register(H);
