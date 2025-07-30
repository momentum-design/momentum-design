import{D as m,k as l,i as g}from"./lit-element-D5KKan5q.js";import{o as f}from"./query-assigned-elements-uEuc3rg8.js";import{n as o,C as h}from"./index-C9z9WAEj.js";import{B as b}from"./button.constants-Bee4ioCR.js";import{D as a,F as y}from"./FooterMixin-Dvth3EaW.js";import{h as v}from"./index-B-GnYs90.js";var T=Object.defineProperty,i=(n,t,r,u)=>{for(var e=void 0,s=n.length-1,d;s>=0;s--)(d=n[s])&&(e=d(t,r,e)||e);return e&&T(t,r,e),e};const x=n=>{class t extends n{constructor(){super(...arguments),this.cardTitle="",this.subtitle="",this.imageSrc="",this.imageAlt="",this.variant=a.VARIANT,this.orientation=a.ORIENTATION,this.titleTagName=a.TAGNAME,this.subtitleTagName=a.TAGNAME}renderImage(){return this.imageSrc?l`<img part="image" src="${this.imageSrc}" alt="${this.imageAlt}" />`:m}renderIcon(){return this.iconName?l`<mdc-icon
            part="icon"
            size="${a.ICON_SIZE}"
            length-unit="${a.ICON_LENGTH_UNIT}"
            name="${this.iconName}"
          ></mdc-icon>`:m}renderTitle(){return l`<div part="title-container">
        <mdc-text part="title" type="${a.TITLE_TYPE}" tagname="${this.titleTagName}">${this.cardTitle}</mdc-text>
        ${this.subtitle?l`<mdc-text part="subtitle" type="${a.SUBTITLE_TYPE}" tagname="${this.subtitleTagName}"
              >${this.subtitle}</mdc-text
            >`:m}
      </div>`}}return i([o({type:String,attribute:"card-title",reflect:!0})],t.prototype,"cardTitle"),i([o({type:String,reflect:!0})],t.prototype,"subtitle"),i([o({type:String,attribute:"image-src",reflect:!0})],t.prototype,"imageSrc"),i([o({type:String,attribute:"image-alt",reflect:!0})],t.prototype,"imageAlt"),i([o({type:String,reflect:!0})],t.prototype,"variant"),i([o({type:String,reflect:!0})],t.prototype,"orientation"),i([o({type:String,attribute:"title-tag-name",reflect:!0})],t.prototype,"titleTagName"),i([o({type:String,attribute:"subtitle-tag-name",reflect:!0})],t.prototype,"subtitleTagName"),i([o({type:String,attribute:"icon-name",reflect:!0})],t.prototype,"iconName"),t},N=g`
  :host {
    --mdc-card-width: 20rem;
    align-items: flex-start;
    border-radius: 0.5rem;
    border: 1px solid var(--mds-color-theme-outline-primary-normal);
    box-shadow: none;
    transition: box-shadow 0.2s;
    width: var(--mdc-card-width);
  }

  :host([variant='ghost']) {
    border-color: transparent;
  }

  :host([orientation='horizontal']) {
    min-width: 40rem;
    --mdc-card-width: 40rem;
  }

  :host([orientation='vertical']) {
    min-width: 20rem;
    flex-direction: column;
  }

  :host([orientation='vertical'])::part(image) {
    object-fit: cover;
    height: 12.5rem;
    width: 100%;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  :host([orientation='horizontal'])::part(image) {
    object-fit: cover;
    width: 10rem;
    height: 100%;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  :host::part(text-content) {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  :host::part(header) {
    display: flex;
    gap: 0.5rem;
  }

  :host::part(icon) {
    margin-top: 0.25rem;
  }

  :host::part(body) {
    width: 100%;
    height: inherit;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
  }

  ::slotted([slot='body']) {
    padding-bottom: 0.5rem;
    margin-top: 0.75rem;
  }

  :host([variant='promotional']) {
    border-color: var(--mds-color-theme-outline-promotion-normal);
  }

  :host(:dir(ltr))::part(icon-button),
  :host(:dir(ltr))::part(footer) {
    margin-left: auto;
  }

  :host(:dir(rtl))::part(icon-button),
  :host(:dir(rtl))::part(footer) {
    margin-right: auto;
  }

  :host::part(icon-button),
  :host::part(footer) {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }

  :host::part(footer) {
    gap: 1rem;
  }

  ::slotted([slot='before-body']),
  ::slotted([slot='after-body']) {
    margin-top: 1rem;
  }

  ::slotted([slot='footer-link']),
  ::slotted([slot='footer-button-primary']),
  ::slotted([slot='footer-button-secondary']) {
    margin-bottom: 0.5rem;
  }

  :host::part(text) {
    margin: unset;
  }
`,$=[v,N];var I=Object.defineProperty,S=(n,t,r,u)=>{for(var e=void 0,s=n.length-1,d;s>=0;s--)(d=n[s])&&(e=d(t,r,e)||e);return e&&I(t,r,e),e};const c=class c extends x(y(h)){constructor(){super(...arguments),this.handleIconButtons=()=>{var t;(t=this.iconButtons)==null||t.forEach(r=>{r.matches(a.BUTTON)&&(r.setAttribute("variant",b.TERTIARY),r.setAttribute("size","32"))})}}update(t){super.update(t),t.has("variant")&&this.updateFooterButtonColors(this.variant)}renderHeader(){return this.cardTitle?l`<div part="header">
      ${this.renderIcon()} ${this.renderTitle()}
      <div part="icon-button"><slot name="icon-button" @slotchange=${this.handleIconButtons}></slot></div>
    </div>`:m}render(){return l`
      ${this.renderImage()}
      <div part="body">
        ${this.renderHeader()}
        <div part="text-content">
          <slot name="before-body"></slot>
          <slot name="body"></slot>
          <slot name="after-body"></slot>
        </div>
        ${this.renderFooter()}
      </div>
    `}};c.styles=[...h.styles,...$];let p=c;S([f({slot:"icon-button"})],p.prototype,"iconButtons");export{p as C,x as a};
