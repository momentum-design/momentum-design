import{a2 as C,u as g,k as m,a4 as d}from"./iframe-DMKvmg4g.js";import{o as I}from"./query-assigned-elements-RO4OkMl_.js";import{R as T}from"./class-map-Cfajzu6t.js";import{I as u}from"./input.component-fGn0KAJK.js";import{A as h,K as E}from"./KeyDownHandledMixin-7ucnFMsl.js";import{a as v}from"./ControlTypeMixin-Di3jPuAV.js";import{T as f}from"./index-SAYBtQ6e.js";import{I as x}from"./input.constants-BBXzSedK.js";import{T as y}from"./chip.component-sBvNMaud.js";import{T as F}from"./alertchip.constants-C-vWTfJo.js";const A=C`
  :host::part(input-text) {
    white-space: nowrap;
    flex: 0 0 auto;
    min-width: 4rem;
  }

  input[type='search']::-webkit-search-cancel-button {
    -webkit-appearance: none;
    pointer-events: none;
  }

  input[type='search']:hover::-webkit-search-cancel-button {
    -webkit-appearance: none;
    pointer-events: none;
  }

  :host::part(input-container) {
    gap: 0.5rem;
  }

  :host::part(searchfield-container) {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    width: 100%;
    gap: 0.25rem;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;
    height: var(--mdc-input-height);
  }

  :host::part(searchfield-container)::-webkit-scrollbar {
    display: none;
  }

  slot[name='filters']::slotted(:first-child) {
    margin-left: 0.25rem;
  }
`,w=[A],$=g.constructTagName("searchfield"),r={TYPE:x.SEARCH,ICON:"search-bold",CLOSE_BTN:!0},b=[y,f,F],k=b.join(", ");var L=Object.defineProperty,c=(p,t,e,i)=>{for(var s=void 0,n=p.length-1,l;n>=0;n--)(l=p[n])&&(s=l(t,e,s)||s);return s&&L(t,e,s),s};const a=class a extends v(E(u)){constructor(){super(...arguments),this.isInputFocused=!1,this.hasChips=!1,this.focusedChipIndex=-1,this.navigatingToInput=!1,this.chipsWithListeners=new WeakMap,this.handleChipKeyDown=t=>{const e=this.getActionForKeyEvent(t);if(t.key==="Backspace"||t.key==="Delete"){t.preventDefault(),this.removeChipAtIndex(this.focusedChipIndex);return}if(e===h.LEFT){t.preventDefault(),this.focusedChipIndex>0&&this.focusChipAtIndex(this.focusedChipIndex-1);return}if(e===h.RIGHT){t.preventDefault(),this.chips&&this.focusedChipIndex<this.chips.length-1?this.focusChipAtIndex(this.focusedChipIndex+1):this.focusInputField();return}if(e===h.ESCAPE){t.preventDefault(),this.clearInputText(),this.keyDownEventHandled();return}if(e===h.HOME){t.preventDefault(),this.focusChipAtIndex(0);return}if(e===h.END){t.preventDefault(),this.focusInputField();const i=this.inputElement,s=i.value.length;i.setSelectionRange(s,s),this.scrollContainerToEnd();return}t.key.length===1&&!t.ctrlKey&&!t.metaKey&&!t.altKey&&this.focusInputField()},this.handleChipFocus=t=>{var n;const e=t.currentTarget,i=this.getChipForFocusTarget(e),s=i?((n=this.chips)==null?void 0:n.indexOf(i))??-1:-1;s>=0&&(this.focusedChipIndex=s,this.isInputFocused=!0)},this.handleFilterContainerClick=()=>{this.inputElement.focus()}}handleKeyDown(t){var n;super.handleKeyDown(t);const e=this.getActionForKeyEvent(t);if(e===h.ESCAPE){this.clearInputText(),this.keyDownEventHandled();return}if(!this.hasChips||!((n=this.chips)!=null&&n.length))return;const i=this.inputElement,s=i.selectionStart===0&&i.selectionEnd===0;if(e===h.BACKSPACE&&s){t.preventDefault(),this.removeChipAtIndex(this.chips.length-1),this.keyDownEventHandled();return}if(e===h.LEFT&&s){t.preventDefault(),this.focusChipAtIndex(this.chips.length-1),this.keyDownEventHandled();return}e===h.HOME&&(t.preventDefault(),this.focusChipAtIndex(0),this.keyDownEventHandled())}focus(t){var e;(e=this.inputElement)==null||e.focus(t)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.chips)==null||t.forEach(e=>this.removeChipListeners(e))}connectedCallback(){super.connectedCallback(),this.leadingIcon=r.ICON,this.trailingButton=r.CLOSE_BTN,this.helpText=void 0,this.helpTextType=void 0,this.required=void 0,this.validationMessage=void 0,this.prefixText=void 0}renderChips(){var t;this.hasChips=!!((t=this.chips)!=null&&t.length),this.chips&&this.chips.forEach(e=>{if(!e.matches(k)){this.removeChip(e);return}if(e.setAttribute("tabindex","-1"),!this.chipsWithListeners.has(e)){const i=this.getFocusTargetForChip(e);i.addEventListener("keydown",this.handleChipKeyDown),i.addEventListener("focus",this.handleChipFocus),this.chipsWithListeners.set(e,i)}}),this.focusedChipIndex=-1}firstUpdated(t){this.inputElement.onfocus=()=>{if(this.isInputFocused=!0,this.focusedChipIndex=-1,this.resetChipTabIndices(),!this.navigatingToInput&&this.hasChips){const e=this.scrollContainer;e&&(e.scrollLeft=0)}this.navigatingToInput=!1},this.inputElement.onblur=()=>{requestAnimationFrame(()=>{this.focusedChipIndex<0&&(this.isInputFocused=!1)})},super.firstUpdated(t)}removeChip(t){this.dispatchEvent(new CustomEvent("chipRemove",{detail:{chip:t},bubbles:!0,composed:!0})),this.controlType!=="controlled"&&t.remove()}clearInputText(){super.clearInputText(),[...this.chips??[]].forEach(e=>{this.removeChip(e)})}removeChipListeners(t){const e=this.chipsWithListeners.get(t);e&&(e.removeEventListener("keydown",this.handleChipKeyDown),e.removeEventListener("focus",this.handleChipFocus),this.chipsWithListeners.delete(t))}focusChipAtIndex(t){if(!this.chips||t<0||t>=this.chips.length)return;this.focusedChipIndex=t,this.resetChipTabIndices();const e=this.chips[t],i=this.getFocusTargetForChip(e);i.setAttribute("tabindex","0"),i.focus({preventScroll:!0}),this.scrollChipIntoView(e),this.isInputFocused=!1}focusInputField(){this.focusedChipIndex=-1,this.resetChipTabIndices(),this.navigatingToInput=!0,this.inputElement.focus({preventScroll:!0})}removeChipAtIndex(t){if(!this.chips||t<0||t>=this.chips.length)return;const e=this.chips[t];this.removeChipListeners(e),this.removeChip(e),requestAnimationFrame(()=>{if(this.chips&&this.chips.length>0){const i=Math.min(t,this.chips.length-1);this.focusChipAtIndex(i)}else this.focusInputField()})}resetChipTabIndices(){var t;(t=this.chips)==null||t.forEach(e=>{this.getFocusTargetForChip(e).setAttribute("tabindex","-1")})}getFocusTargetForChip(t){var e;if(t.matches(f)){const i=(e=t.shadowRoot)==null?void 0:e.querySelector('[part="close-icon"]');if(i)return i}return t}getChipForFocusTarget(t){var i,s,n;if((i=this.chips)!=null&&i.includes(t))return t;const e=(s=t.getRootNode())==null?void 0:s.host;return e&&((n=this.chips)!=null&&n.includes(e))?e:null}get scrollContainer(){var t;return((t=this.shadowRoot)==null?void 0:t.querySelector('[part="searchfield-container"]'))??null}scrollChipIntoView(t){const e=this.scrollContainer;if(!e)return;if(this.chips&&this.chips.indexOf(t)===0){e.scrollLeft=0;return}const i=e.getBoundingClientRect(),s=t.getBoundingClientRect();s.left<i.left?e.scrollLeft-=i.left-s.left:s.right>i.right&&(e.scrollLeft+=s.right-i.right)}scrollContainerToEnd(){const t=this.scrollContainer,e=this.inputElement;if(!t||!e)return;const s=e.offsetLeft+e.offsetWidth-t.clientWidth;t.scrollLeft=Math.max(0,s)}render(){return m`
      ${this.renderLabelElement()}
      <div
        class="${T({"mdc-focus-ring":this.isInputFocused})}"
        part="input-container"
      >
        ${this.renderLeadingIcon()}
        <div part="searchfield-container" @click=${this.handleFilterContainerClick} tabindex="-1">
          <slot name="filters" @slotchange=${this.renderChips}></slot>
          ${this.renderInputElement(r.TYPE,this.hasChips)}
        </div>
        ${this.renderTrailingButton(this.hasChips)}
      </div>
    `}};a.styles=[...u.styles,...w];let o=a;c([I({slot:"filters"})],o.prototype,"chips");c([d()],o.prototype,"isInputFocused");c([d()],o.prototype,"hasChips");export{o as S,$ as T};
