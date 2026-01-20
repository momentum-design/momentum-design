import{U as d,u as C,k as f,$ as u}from"./iframe-DD1qd397.js";import{o as m}from"./query-assigned-elements-uEuc3rg8.js";import{R as v}from"./class-map-B-EmtZ-w.js";import{I as c}from"./input.component-CjzHk8ea.js";import{A as o}from"./KeyToActionMixin-D7mKMv1X.js";import{I}from"./input.constants-yGv-vVLZ.js";import{T as E}from"./index-CUHCrceW.js";const T=d`
  :host::part(filters-container) {
    display: flex;
    gap: 0.25rem;
    margin: 0.25rem 0;
  }

  :host::part(input-text) {
    white-space: nowrap;
    min-width: 90%;
  }

  input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
    pointer-events: none;
  }

  input[type="search"]:hover::-webkit-search-cancel-button {
    -webkit-appearance: none;
    pointer-events: none;
  }

  :host::part(scrollable-container) {
    display: flex;
    flex-grow: 1;
    overflow-x: scroll;
    overflow-y: hidden;
    position: relative;
    scrollbar-width: none;
  }
`,y=[T],_=C.constructTagName("searchfield"),n={TYPE:I.SEARCH,ICON:"search-bold",CLOSE_BTN:!0,INPUT_CHIP_TAG:E};var b=Object.defineProperty,a=(h,t,e,w)=>{for(var i=void 0,r=h.length-1,l;r>=0;r--)(l=h[r])&&(i=l(t,e,i)||i);return i&&b(t,e,i),i};const p=class p extends c{constructor(){super(...arguments),this.isInputFocused=!1,this.hasInputChips=!1,this.handleFilterContainerClick=()=>{this.inputElement.focus()},this.handleFilterContainerKeyDown=t=>{this.getActionForKeyEvent(t)===o.ENTER&&this.handleFilterContainerClick()},this.handleFilterContainerKeyUp=t=>{this.getActionForKeyEvent(t)===o.SPACE&&this.handleFilterContainerClick()}}handleKeyDown(t){super.handleKeyDown(t),this.getActionForKeyEvent(t)===o.ESCAPE&&this.clearInputText()}connectedCallback(){super.connectedCallback(),this.leadingIcon=n.ICON,this.trailingButton=n.CLOSE_BTN,this.helpText=void 0,this.helpTextType=void 0,this.required=void 0,this.validationMessage=void 0,this.prefixText=void 0}renderInputChips(){var t;this.hasInputChips=!!((t=this.inputChips)!=null&&t.length),this.inputChips&&this.inputChips.forEach(e=>{e.matches(n.INPUT_CHIP_TAG)||e.remove()})}firstUpdated(t){this.inputElement.onfocus=()=>{this.isInputFocused=!0},this.inputElement.onblur=()=>{this.isInputFocused=!1},super.firstUpdated(t)}clearInputText(){var t;super.clearInputText(),(t=this.inputChips)==null||t.forEach(e=>{e.dispatchEvent(new CustomEvent("remove",{bubbles:!0,composed:!0}))})}render(){return f`
      ${this.renderLabelElement()}
      <div
        class="${v({"mdc-focus-ring":this.isInputFocused})}"
        part="input-container"
      >
        ${this.renderLeadingIcon()}
        <div part="scrollable-container" tabindex="-1">
          <div
            part="filters-container"
            @click=${this.handleFilterContainerClick}
            @keydown=${this.handleFilterContainerKeyDown}
            @keyup=${this.handleFilterContainerKeyUp}
          >
            <slot name="filters" @slotchange=${this.renderInputChips}></slot>
          </div>
          ${this.renderInputElement(n.TYPE,this.hasInputChips)}
        </div>
        ${this.renderTrailingButton(this.hasInputChips)}
      </div>
    `}};p.styles=[...c.styles,...y];let s=p;a([m({slot:"filters"})],s.prototype,"inputChips");a([u()],s.prototype,"isInputFocused");a([u()],s.prototype,"hasInputChips");export{s as S,_ as T};
