import{u as g,a2 as T,a8 as y,k as a,h as s,T as f,V as x,R as h,C as A,n as o}from"./iframe-XWsxOvFK.js";import{D as L}from"./DisabledMixin-ChexUNpd.js";import{K as N,a as S,A as v}from"./KeyDownHandledMixin-D8wZ24Zf.js";import{v as m}from"./v4-CmTdKEVZ.js";const H=g.constructTagName("accordiongroup"),E={SMALL:"small",LARGE:"large"},R={BORDERLESS:"borderless",CONTAINED:"contained",STACKED:"stacked"},V={SIZE:E.SMALL,VARIANT:R.STACKED},z=g.constructTagName("accordionbutton"),c={ARROW_UP:"arrow-up-bold",ARROW_DOWN:"arrow-down-bold"},D={DEFAULT:"default",BORDERLESS:"borderless"},I={LEADING:"leading",TRAILING:"trailing"},t={EXPANDED:!1,SIZE:E.SMALL,DATA_ARIA_LEVEL:3,VARIANT:D.DEFAULT,ICON_NAME:c.ARROW_UP,TOGGLE_POSITION:I.TRAILING},O=T`
  :host {
    --mdc-accordionbutton-border-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-accordionbutton-hover-color: var(--mds-color-theme-background-primary-hover);
    --mdc-accordionbutton-active-color: var(--mds-color-theme-background-primary-active);
    --mdc-accordionbutton-disabled-color: var(--mds-color-theme-text-primary-disabled);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  }

  :host::part(header-section) {
    width: 100%;
    cursor: pointer;
    user-select: none;
    display: flex;
  }

  :host::part(header-button-section) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  :host::part(body-section) {
    width: 100%;
  }

  :host([variant='default'][expanded])::part(header-section) {
    border-radius: 0.5rem 0.5rem 0 0;
  }

  :host::part(header-section):hover {
    background-color: var(--mdc-accordionbutton-hover-color);
  }

  :host::part(header-section):active {
    background-color: var(--mdc-accordionbutton-active-color);
  }

  :host([disabled])::part(header-section) {
    color: var(--mdc-accordionbutton-disabled-color);
  }

  :host([disabled][expanded])::part(header-section) {
    border-bottom: unset;
  }

  :host([disabled])::part(header-section):active,
  :host([disabled])::part(header-section):hover {
    background-color: unset;
  }

  :host([size='small'])::part(header-section),
  :host([size='small'])::part(body-section) {
    padding: 1rem;
  }

  :host([size='large'])::part(header-section),
  :host([size='large'])::part(body-section) {
    padding: 1.5rem;
  }

  :host::part(leading-header),
  :host::part(trailing-header) {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
  }

  :host::part(toggle-icon) {
    padding: 0.25rem;
  }

  :host([variant='default']) {
    border: 1px solid var(--mdc-accordionbutton-border-color);
    border-radius: 0.5rem;
  }

  :host([expanded])::part(header-section) {
    border-bottom: 1px solid var(--mdc-accordionbutton-border-color);
    border-radius: 0.5rem 0.5rem 0 0;
  }

  :host(:is([variant='default'], [variant='stacked']):not([expanded]))::part(header-section) {
    border-radius: 0.5rem;
  }

  :host([variant='contained'])::part(header-section) {
    border-radius: inherit;
  }

  :host([variant='default'])::part(header-section) {
    border-radius: 0.5rem;
  }

  :host([variant='borderless']) {
    border: none;
    border-radius: 0;
  }

  :host([variant='borderless'])::part(header-section) {
    border-radius: 0;
  }

  :host([variant='borderless']:not([expanded]))::part(header-section) {
    border-bottom: 1px solid var(--mdc-accordionbutton-border-color);
    border-radius: 0;
  }

  :host([variant='default']:not([expanded]))::part(header-section) {
    border-bottom: none;
  }
`,$=[O,...y(!0)];var _=Object.defineProperty,i=(b,e,n,k)=>{for(var d=void 0,l=b.length-1,u;l>=0;l--)(u=b[l])&&(d=u(e,n,d)||d);return d&&_(e,n,d),d};const p=class p extends N(S(L(A))){constructor(){super(...arguments),this.size=t.SIZE,this.variant=t.VARIANT,this.dataAriaLevel=t.DATA_ARIA_LEVEL,this.expanded=t.EXPANDED,this.togglePosition=t.TOGGLE_POSITION,this.headSectionId=`head-section-${m()}`,this.bodySectionId=`body-section-${m()}`}handleHeaderClick(){this.disabled||(this.expanded=!this.expanded,this.dispatchHeaderClickEvent())}click(){this.disabled||(super.click(),this.handleHeaderClick())}dispatchHeaderClickEvent(){const e=new CustomEvent("shown",{bubbles:!0,cancelable:!0,detail:{expanded:this.expanded}});this.dispatchEvent(e)}handleKeyDown(e){const n=this.getActionForKeyEvent(e);(n===v.ENTER||n===v.SPACE)&&(this.handleHeaderClick(),this.keyDownEventHandled())}renderIcon(e){return e?a`<mdc-icon name="${e}" length-unit="rem" size="1"></mdc-icon>`:s}renderHeadingText(){return this.headerText?a`<mdc-text
          id="${this.headSectionId}"
          type="${f.BODY_LARGE_REGULAR}"
          tagname=${x.SPAN}
          part="leading-header-text"
          >${this.headerText}</mdc-text
        >`:s}renderToggleIcon(){return a`<div part="toggle-icon">${this.renderIcon(this.getArrowIconName())}</div>`}renderHeader(){const e=this.togglePosition===I.LEADING;return a`
      <div
        part="header-section"
        class="mdc-focus-ring"
        @click="${this.handleHeaderClick}"
        @keydown="${this.handleKeyDown}"
        role="${h.HEADING}"
        aria-level="${this.dataAriaLevel}"
        tabindex="${this.disabled?-1:0}"
      >
        <div
          part="header-button-section"
          role="${h.BUTTON}"
          aria-expanded="${this.expanded}"
          aria-controls="${this.bodySectionId}"
        >
          <div part="leading-header">
            ${e?this.renderToggleIcon():s} ${this.renderIcon(this.prefixIcon)}
            ${this.renderHeadingText()}
          </div>
          ${e?s:a`<div part="trailing-header">${this.renderToggleIcon()}</div>`}
        </div>
      </div>
    `}getArrowIconName(){return this.disabled?c.ARROW_DOWN:this.expanded?c.ARROW_UP:c.ARROW_DOWN}renderBody(){return this.disabled?s:this.expanded?a`<div
        id="${this.bodySectionId}"
        aria-labelledby="${this.headSectionId}"
        part="body-section"
        role="${h.REGION}"
      >
        <slot></slot>
      </div>`:s}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",`${this.disabled}`),e.has("dataAriaLevel")&&!this.dataAriaLevel&&(this.dataAriaLevel=t.DATA_ARIA_LEVEL),e.has("size")&&!this.size&&(this.size=t.SIZE),e.has("variant")&&!this.variant&&(this.variant=t.VARIANT),e.has("togglePosition")&&!this.togglePosition&&(this.togglePosition=t.TOGGLE_POSITION)}render(){return a` ${this.renderHeader()} ${this.renderBody()} `}};p.styles=[...A.styles,...$];let r=p;i([o({type:String,reflect:!0})],r.prototype,"size");i([o({type:String,reflect:!0})],r.prototype,"variant");i([o({type:Number,reflect:!0,attribute:"data-aria-level"})],r.prototype,"dataAriaLevel");i([o({type:Boolean,reflect:!0})],r.prototype,"expanded");i([o({type:String,reflect:!0,attribute:"header-text"})],r.prototype,"headerText");i([o({type:String,attribute:"prefix-icon"})],r.prototype,"prefixIcon");i([o({type:String,reflect:!0,attribute:"toggle-position"})],r.prototype,"togglePosition");export{r as A,V as D,E as S,I as T,D as V,z as a,H as b,R as c};
