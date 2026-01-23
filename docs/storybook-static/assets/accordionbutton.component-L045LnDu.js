import{u as E,X as y,a0 as f,k as s,h as n,T,V as g,R as h,H as v,n as o}from"./iframe-BsSOvdiI.js";import{D as I}from"./DisabledMixin-fjLCGnVB.js";import{K as R,A}from"./KeyToActionMixin-NJAwsg8D.js";import{v as m}from"./v4-CmTdKEVZ.js";const V=E.constructTagName("accordiongroup"),x={SMALL:"small",LARGE:"large"},S={BORDERLESS:"borderless",CONTAINED:"contained",STACKED:"stacked"},H={SIZE:x.SMALL,VARIANT:S.STACKED},z=E.constructTagName("accordionbutton"),c={ARROW_UP:"arrow-up-bold",ARROW_DOWN:"arrow-down-bold"},L={DEFAULT:"default",BORDERLESS:"borderless"},r={EXPANDED:!1,SIZE:x.SMALL,DATA_ARIA_LEVEL:3,VARIANT:L.DEFAULT,ICON_NAME:c.ARROW_UP},N=y`
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
`,D=[N,...f(!0)];var $=Object.defineProperty,d=(b,e,i,_)=>{for(var a=void 0,l=b.length-1,u;l>=0;l--)(u=b[l])&&(a=u(e,i,a)||a);return a&&$(e,i,a),a};const p=class p extends R(I(v)){constructor(){super(...arguments),this.size=r.SIZE,this.variant=r.VARIANT,this.dataAriaLevel=r.DATA_ARIA_LEVEL,this.expanded=r.EXPANDED,this.headSectionId=`head-section-${m()}`,this.bodySectionId=`body-section-${m()}`}handleHeaderClick(){this.disabled||(this.expanded=!this.expanded,this.dispatchHeaderClickEvent())}dispatchHeaderClickEvent(){const e=new CustomEvent("shown",{bubbles:!0,cancelable:!0,detail:{expanded:this.expanded}});this.dispatchEvent(e)}handleKeyDown(e){const i=this.getActionForKeyEvent(e);(i===A.ENTER||i===A.SPACE)&&this.handleHeaderClick()}renderIcon(e){return e?s`<mdc-icon name="${e}" length-unit="rem" size="1"></mdc-icon>`:n}renderHeadingText(){return this.headerText?s`<mdc-text
          id="${this.headSectionId}"
          type="${T.BODY_LARGE_REGULAR}"
          tagname=${g.SPAN}
          part="leading-header-text"
          >${this.headerText}</mdc-text
        >`:n}renderHeader(){return s`
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
          <div part="leading-header">${this.renderIcon(this.prefixIcon)} ${this.renderHeadingText()}</div>
          <div part="trailing-header">
            <div part="trailing-header__icon">${this.renderIcon(this.getArrowIconName())}</div>
          </div>
        </div>
      </div>
    `}getArrowIconName(){return this.disabled?c.ARROW_DOWN:this.expanded?c.ARROW_UP:c.ARROW_DOWN}renderBody(){return this.disabled?n:this.expanded?s`<div
        id="${this.bodySectionId}"
        aria-labelledby="${this.headSectionId}"
        part="body-section"
        role="${h.REGION}"
      >
        <slot></slot>
      </div>`:n}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",`${this.disabled}`),e.has("dataAriaLevel")&&!this.dataAriaLevel&&(this.dataAriaLevel=r.DATA_ARIA_LEVEL),e.has("size")&&!this.size&&(this.size=r.SIZE),e.has("variant")&&!this.variant&&(this.variant=r.VARIANT)}render(){return s` ${this.renderHeader()} ${this.renderBody()} `}};p.styles=[...v.styles,...D];let t=p;d([o({type:String,reflect:!0})],t.prototype,"size");d([o({type:String,reflect:!0})],t.prototype,"variant");d([o({type:Number,reflect:!0,attribute:"data-aria-level"})],t.prototype,"dataAriaLevel");d([o({type:Boolean,reflect:!0})],t.prototype,"expanded");d([o({type:String,reflect:!0,attribute:"header-text"})],t.prototype,"headerText");d([o({type:String,attribute:"prefix-icon"})],t.prototype,"prefixIcon");export{t as A,H as D,x as S,z as T,L as V,V as a,S as b};
