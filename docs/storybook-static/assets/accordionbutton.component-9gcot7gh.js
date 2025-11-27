import{u as E,S as f,X as x,k as i,h as s,q as I,V as R,W as l,E as m,n as o}from"./iframe-DHOQtyml.js";import{K as v}from"./TabIndexMixin-CJnrukpa.js";import{D as S}from"./DisabledMixin-DvdaRsAD.js";import{v as A}from"./v4-CmTdKEVZ.js";const C=E.constructTagName("accordiongroup"),y={SMALL:"small",LARGE:"large"},T={BORDERLESS:"borderless",CONTAINED:"contained",STACKED:"stacked"},V={SIZE:y.SMALL,VARIANT:T.STACKED},z=E.constructTagName("accordionbutton"),n={ARROW_UP:"arrow-up-bold",ARROW_DOWN:"arrow-down-bold"},g={DEFAULT:"default",BORDERLESS:"borderless"},r={EXPANDED:!1,SIZE:y.SMALL,DATA_ARIA_LEVEL:3,VARIANT:g.DEFAULT,ICON_NAME:n.ARROW_UP},L=f`
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

  :host::part(trailing-header__icon) {
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
`,D=[L,...x(!0)];var N=Object.defineProperty,d=(p,e,b,$)=>{for(var a=void 0,c=p.length-1,u;c>=0;c--)(u=p[c])&&(a=u(e,b,a)||a);return a&&N(e,b,a),a};const h=class h extends S(m){constructor(){super(...arguments),this.size=r.SIZE,this.variant=r.VARIANT,this.dataAriaLevel=r.DATA_ARIA_LEVEL,this.expanded=r.EXPANDED,this.headSectionId=`head-section-${A()}`,this.bodySectionId=`body-section-${A()}`}handleHeaderClick(){this.disabled||(this.expanded=!this.expanded,this.dispatchHeaderClickEvent())}dispatchHeaderClickEvent(){const e=new CustomEvent("shown",{bubbles:!0,cancelable:!0,detail:{expanded:this.expanded}});this.dispatchEvent(e)}handleKeyDown(e){(e.key===v.ENTER||e.key===v.SPACE)&&this.handleHeaderClick()}renderIcon(e){return e?i`<mdc-icon name="${e}" length-unit="rem" size="1"></mdc-icon>`:s}renderHeadingText(){return this.headerText?i`<mdc-text id="${this.headSectionId}" type="${I.BODY_LARGE_REGULAR}" tagname=${R.SPAN}
          >${this.headerText}</mdc-text
        >`:s}renderHeader(){return i`
      <div
        part="header-section"
        class="mdc-focus-ring"
        @click="${this.handleHeaderClick}"
        @keydown="${this.handleKeyDown}"
        role="${l.HEADING}"
        aria-level="${this.dataAriaLevel}"
        tabindex="${this.disabled?-1:0}"
      >
        <div
          part="header-button-section"
          role="${l.BUTTON}"
          aria-expanded="${this.expanded}"
          aria-controls="${this.bodySectionId}"
        >
          <div part="leading-header">${this.renderIcon(this.prefixIcon)} ${this.renderHeadingText()}</div>
          <div part="trailing-header">
            <div part="trailing-header__icon">${this.renderIcon(this.getArrowIconName())}</div>
          </div>
        </div>
      </div>
    `}getArrowIconName(){return this.disabled?n.ARROW_DOWN:this.expanded?n.ARROW_UP:n.ARROW_DOWN}renderBody(){return this.disabled?s:this.expanded?i`<div
        id="${this.bodySectionId}"
        aria-labelledby="${this.headSectionId}"
        part="body-section"
        role="${l.REGION}"
      >
        <slot></slot>
      </div>`:s}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",`${this.disabled}`),e.has("dataAriaLevel")&&!this.dataAriaLevel&&(this.dataAriaLevel=r.DATA_ARIA_LEVEL),e.has("size")&&!this.size&&(this.size=r.SIZE),e.has("variant")&&!this.variant&&(this.variant=r.VARIANT)}render(){return i` ${this.renderHeader()} ${this.renderBody()} `}};h.styles=[...m.styles,...D];let t=h;d([o({type:String,reflect:!0})],t.prototype,"size");d([o({type:String,reflect:!0})],t.prototype,"variant");d([o({type:Number,reflect:!0,attribute:"data-aria-level"})],t.prototype,"dataAriaLevel");d([o({type:Boolean,reflect:!0})],t.prototype,"expanded");d([o({type:String,reflect:!0,attribute:"header-text"})],t.prototype,"headerText");d([o({type:String,attribute:"prefix-icon"})],t.prototype,"prefixIcon");export{t as A,V as D,y as S,z as T,g as V,C as a,T as b};
