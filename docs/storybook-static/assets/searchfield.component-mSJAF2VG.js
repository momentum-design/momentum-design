import{S as d,u as f,k as m,$ as c}from"./iframe-D498-k7l.js";import{o as I}from"./query-assigned-elements-uEuc3rg8.js";import{R as v}from"./class-map-BAKSKn3M.js";import{I as u}from"./input.component-C2Vhz6n_.js";import{K as o}from"./TabIndexMixin-DnY-shag.js";import{I as E}from"./input.constants-CD-KMLRV.js";import{T as C}from"./index-D6Dc3LQw.js";const T=d`
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
`,y=[T],A=f.constructTagName("searchfield"),n={TYPE:E.SEARCH,ICON:"search-bold",CLOSE_BTN:!0,INPUT_CHIP_TAG:C};var b=Object.defineProperty,p=(h,t,e,w)=>{for(var s=void 0,r=h.length-1,l;r>=0;r--)(l=h[r])&&(s=l(t,e,s)||s);return s&&b(t,e,s),s};const a=class a extends u{constructor(){super(...arguments),this.isInputFocused=!1,this.hasInputChips=!1}handleKeyDown(t){super.handleKeyDown(t),t.key===o.ESCAPE&&this.clearInputText()}connectedCallback(){super.connectedCallback(),this.leadingIcon=n.ICON,this.trailingButton=n.CLOSE_BTN,this.helpText=void 0,this.helpTextType=void 0,this.required=void 0,this.validationMessage=void 0,this.prefixText=void 0}renderInputChips(){var t;this.hasInputChips=!!((t=this.inputChips)!=null&&t.length),this.inputChips&&this.inputChips.forEach(e=>{e.matches(n.INPUT_CHIP_TAG)||e.remove()})}firstUpdated(t){this.inputElement.onfocus=()=>{this.isInputFocused=!0},this.inputElement.onblur=()=>{this.isInputFocused=!1},super.firstUpdated(t)}clearInputText(){var t;super.clearInputText(),(t=this.inputChips)==null||t.forEach(e=>{e.dispatchEvent(new CustomEvent("remove",{bubbles:!0,composed:!0}))})}render(){return m`
      ${this.renderLabelElement()}
      <div
        class="${v({"mdc-focus-ring":this.isInputFocused})}"
        part="input-container"
      >
        ${this.renderLeadingIcon()}
        <div part="scrollable-container" tabindex="-1">
          <div
            part="filters-container"
            @click=${()=>this.inputElement.focus()}
            @keydown=${t=>t.key===o.ENTER?this.inputElement.focus():null}
            @keyup=${t=>t.key===o.SPACE?this.inputElement.focus():null}
          >
            <slot name="filters" @slotchange=${this.renderInputChips}></slot>
          </div>
          ${this.renderInputElement(n.TYPE,this.hasInputChips)}
        </div>
        ${this.renderTrailingButton(this.hasInputChips)}
      </div>
    `}};a.styles=[...u.styles,...y];let i=a;p([I({slot:"filters"})],i.prototype,"inputChips");p([c()],i.prototype,"isInputFocused");p([c()],i.prototype,"hasInputChips");export{i as S,A as T};
