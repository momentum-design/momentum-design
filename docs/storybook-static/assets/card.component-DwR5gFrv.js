import{i as I,D as u,k as d}from"./lit-element-D5KKan5q.js";import{o as T}from"./query-assigned-elements-uEuc3rg8.js";import{h as O}from"./index-CcXofQbA.js";import{u as E,n as s,C as y}from"./index-C9z9WAEj.js";import{T as b,V as S}from"./text.constants-ZF0jM5wn.js";import{T as v,B as c,a as N}from"./button.constants-D0QAbDxL.js";import{T as B}from"./link.constants-CqyNsepP.js";const _=I`
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

`,R=[O,_],V=E.constructTagName("card"),A={BORDER:"border",GHOST:"ghost",PROMOTIONAL:"promotional"},L={HORIZONTAL:"horizontal",VERTICAL:"vertical"},r={VARIANT:A.BORDER,ORIENTATION:L.VERTICAL,TITLE_TYPE:b.HEADING_SMALL_BOLD,SUBTITLE_TYPE:b.BODY_MIDSIZE_MEDIUM,TAGNAME:S.SPAN,ICON_SIZE:1.5,ICON_LENGTH_UNIT:"rem",LINK:B,BUTTON:v};var $=Object.defineProperty,a=(h,t,o,n)=>{for(var e=void 0,i=h.length-1,l;i>=0;i--)(l=h[i])&&(e=l(t,o,e)||e);return e&&$(t,o,e),e};const x=h=>{class t extends h{constructor(){super(...arguments),this.cardTitle="",this.subtitle="",this.imageSrc="",this.imageAlt="",this.variant=r.VARIANT,this.orientation=r.ORIENTATION,this.titleTagName=r.TAGNAME,this.subtitleTagName=r.TAGNAME}renderImage(){return this.imageSrc?d`<img part="image" src="${this.imageSrc}" alt="${this.imageAlt}"/>`:u}renderIcon(){return this.iconName?d`<mdc-icon part="icon"
       size="${r.ICON_SIZE}" 
       length-unit="${r.ICON_LENGTH_UNIT}" 
       name="${this.iconName}"></mdc-icon>`:u}renderTitle(){return d`<div part="title-container">
        <mdc-text part="title" type="${r.TITLE_TYPE}" tagname="${this.titleTagName}">${this.cardTitle}</mdc-text>
        ${this.subtitle?d`<mdc-text part="subtitle"
            type="${r.SUBTITLE_TYPE}" 
            tagname="${this.subtitleTagName}">${this.subtitle}</mdc-text>`:u}
        </div>`}}return a([s({type:String,attribute:"card-title"})],t.prototype,"cardTitle"),a([s({type:String})],t.prototype,"subtitle"),a([s({type:String,attribute:"image-src"})],t.prototype,"imageSrc"),a([s({type:String,attribute:"image-alt"})],t.prototype,"imageAlt"),a([s({type:String})],t.prototype,"variant"),a([s({type:String,reflect:!0})],t.prototype,"orientation"),a([s({type:String,attribute:"title-tag-name"})],t.prototype,"titleTagName"),a([s({type:String,attribute:"subtitle-tag-name"})],t.prototype,"subtitleTagName"),a([s({type:String,attribute:"icon-name"})],t.prototype,"iconName"),t};var C=Object.defineProperty,f=(h,t,o,n)=>{for(var e=void 0,i=h.length-1,l;i>=0;i--)(l=h[i])&&(e=l(t,o,e)||e);return e&&C(t,o,e),e};const g=class g extends x(y){constructor(){super(...arguments),this.handleIconButtons=()=>{var t;if((t=this.iconButtons)==null||t.forEach(o=>{!o.matches(r.BUTTON)&&o.getAttribute("data-btn-type")!=="icon"?o.remove():(o.setAttribute("variant",c.TERTIARY),o.setAttribute("size","32"))}),this.iconButtons&&this.iconButtons.length>3)for(let o=3;o<this.iconButtons.length;o+=1)this.iconButtons[o].remove()},this.handleFooterSlot=(t,o="")=>{var e,i,l;let n=[];t===r.LINK&&((e=this.footerLink)!=null&&e.length)?n=this.footerLink:t===r.BUTTON&&o===c.PRIMARY&&((i=this.footerButtonPrimary)!=null&&i.length)?n=this.footerButtonPrimary:t===r.BUTTON&&o===c.SECONDARY&&((l=this.footerButtonSecondary)!=null&&l.length)&&(n=this.footerButtonSecondary);for(let m=1;m<n.length;m+=1)n[m].remove();n.forEach(m=>{m.matches(t)||m.remove(),o&&m.setAttribute("variant",o)})},this.updateFooterButtonColors=()=>{const t=[...this.footerButtonPrimary||[],...this.footerButtonSecondary||[]];t==null||t.forEach(o=>{this.variant===A.PROMOTIONAL?o.setAttribute("color",N.PROMOTIONAL):o.setAttribute("color",N.DEFAULT)})}}update(t){super.update(t),t.has("variant")&&this.updateFooterButtonColors()}renderHeader(){return this.cardTitle?d`<div part="header">
      ${this.renderIcon()}
      ${this.renderTitle()}
      <div part="icon-button"><slot name="icon-button" @slotchange=${this.handleIconButtons}></slot></div>
    </div>`:u}render(){return d`
  ${this.renderImage()}
    <div part="body">
    ${this.renderHeader()}
      <slot name="before-body"></slot>
      <slot name="body"></slot>
      <slot name="after-body"></slot>
      <div part="footer">
        <slot name="footer-link" @slotchange=${()=>this.handleFooterSlot(r.LINK)}></slot>
        <slot name="footer-button-secondary" 
        @slotchange=${()=>this.handleFooterSlot(r.BUTTON,c.SECONDARY)}></slot>
        <slot name="footer-button-primary" 
        @slotchange=${()=>this.handleFooterSlot(r.BUTTON,c.PRIMARY)}></slot>
      </div>
    </div>
    `}};g.styles=[...y.styles,...R];let p=g;f([T({slot:"icon-button"})],p.prototype,"iconButtons");f([T({slot:"footer-link"})],p.prototype,"footerLink");f([T({slot:"footer-button-primary"})],p.prototype,"footerButtonPrimary");f([T({slot:"footer-button-secondary"})],p.prototype,"footerButtonSecondary");export{p as C,r as D,L as O,V as T,A as V,x as a};
