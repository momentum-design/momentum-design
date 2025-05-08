import{i as g,D as d,k as l}from"./lit-element-D5KKan5q.js";import{o as b}from"./query-assigned-elements-uEuc3rg8.js";import{h as f}from"./index-CcXofQbA.js";import{n as o,C as c}from"./index-C9z9WAEj.js";import{D as a,C as y}from"./CardAndDialogFooterMixin-COm20Ox1.js";import{B as T}from"./button.constants-D0QAbDxL.js";const v=g`
  :host {
    align-items: flex-start;
    border-radius: 0.5rem;
    border: 1px solid var(--mds-color-theme-outline-primary-normal);
    box-shadow: none;
  transition: box-shadow 0.2s;
  }
  :host([variant='ghost']){
    border-color: transparent;
  }
  :host([orientation="horizontal"]){
    width: 40rem;
  }

  :host([orientation="vertical"]){
    width: 20rem;
    flex-direction: column;
  }
  
  :host([orientation="vertical"])::part(image){
    height: 12.5rem;
    width: 100%;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
  
  :host([orientation="horizontal"])::part(image){
    width: 10rem;
    height: 100%;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  :host::part(header){
    display: flex;
    gap: 0.5rem;
  }

  :host::part(icon){
    margin-top: 0.25rem;
  }

  :host::part(body){
    width: 100%;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
  }

  ::slotted([slot='body']){
    padding-bottom: 0.5rem;
    margin-top: 0.75rem;
  }

  :host([variant='promotional']){
    border-color: var(--mds-color-theme-outline-promotion-normal);
  }

  :host::part(icon-button), :host::part(footer) {
    margin-left: auto;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }
  :host::part(footer){
    gap: 1rem;
  }
  ::slotted([slot='footer-link']), 
  ::slotted([slot='footer-button-primary']), 
  ::slotted([slot='footer-button-secondary']){
    margin-bottom: 0.5rem;
  }

`,N=[f,v];var $=Object.defineProperty,i=(n,t,e,u)=>{for(var r=void 0,s=n.length-1,m;s>=0;s--)(m=n[s])&&(r=m(t,e,r)||r);return r&&$(t,e,r),r};const x=n=>{class t extends n{constructor(){super(...arguments),this.cardTitle="",this.subtitle="",this.imageSrc="",this.imageAlt="",this.variant=a.VARIANT,this.orientation=a.ORIENTATION,this.titleTagName=a.TAGNAME,this.subtitleTagName=a.TAGNAME}renderImage(){return this.imageSrc?l`<img part="image" src="${this.imageSrc}" alt="${this.imageAlt}" />`:d}renderIcon(){return this.iconName?l`<mdc-icon
            part="icon"
            size="${a.ICON_SIZE}"
            length-unit="${a.ICON_LENGTH_UNIT}"
            name="${this.iconName}"
          ></mdc-icon>`:d}renderTitle(){return l`<div part="title-container">
        <mdc-text part="title" type="${a.TITLE_TYPE}" tagname="${this.titleTagName}">${this.cardTitle}</mdc-text>
        ${this.subtitle?l`<mdc-text part="subtitle" type="${a.SUBTITLE_TYPE}" tagname="${this.subtitleTagName}"
              >${this.subtitle}</mdc-text
            >`:d}
      </div>`}}return i([o({type:String,attribute:"card-title"})],t.prototype,"cardTitle"),i([o({type:String})],t.prototype,"subtitle"),i([o({type:String,attribute:"image-src"})],t.prototype,"imageSrc"),i([o({type:String,attribute:"image-alt"})],t.prototype,"imageAlt"),i([o({type:String})],t.prototype,"variant"),i([o({type:String,reflect:!0})],t.prototype,"orientation"),i([o({type:String,attribute:"title-tag-name"})],t.prototype,"titleTagName"),i([o({type:String,attribute:"subtitle-tag-name"})],t.prototype,"subtitleTagName"),i([o({type:String,attribute:"icon-name"})],t.prototype,"iconName"),t};var A=Object.defineProperty,I=(n,t,e,u)=>{for(var r=void 0,s=n.length-1,m;s>=0;s--)(m=n[s])&&(r=m(t,e,r)||r);return r&&A(t,e,r),r};const h=class h extends x(y(c)){constructor(){super(...arguments),this.handleIconButtons=()=>{var t;if((t=this.iconButtons)==null||t.forEach(e=>{!e.matches(a.BUTTON)&&e.getAttribute("data-btn-type")!=="icon"?e.remove():(e.setAttribute("variant",T.TERTIARY),e.setAttribute("size","32"))}),this.iconButtons&&this.iconButtons.length>3)for(let e=3;e<this.iconButtons.length;e+=1)this.iconButtons[e].remove()}}update(t){super.update(t),t.has("variant")&&this.updateFooterButtonColors(this.variant)}renderHeader(){return this.cardTitle?l`<div part="header">
      ${this.renderIcon()}
      ${this.renderTitle()}
      <div part="icon-button"><slot name="icon-button" @slotchange=${this.handleIconButtons}></slot></div>
    </div>`:d}render(){return l`
  ${this.renderImage()}
    <div part="body">
    ${this.renderHeader()}
      <slot name="before-body"></slot>
      <slot name="body"></slot>
      <slot name="after-body"></slot>
      ${this.renderFooter()}
    </div>
    `}};h.styles=[...c.styles,...N];let p=h;I([b({slot:"icon-button"})],p.prototype,"iconButtons");export{p as C,x as a};
