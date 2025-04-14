import{i as v,k as f}from"./lit-element-D5KKan5q.js";import{u as g,C as u,n as d}from"./index-C9z9WAEj.js";import{D as b}from"./DisabledMixin-BZruwOeC.js";import{I as x}from"./IconNameMixin-CujGSn0t.js";import{a as y,h as z}from"./index-MA1r3zrt.js";import"./index-CZwpp7wD.js";const k=g.constructTagName("link"),l={LARGE:"large",MIDSIZE:"midsize",SMALL:"small"},a={LARGE:1,MIDSIZE:.875,SMALL:.75},s={INLINE:!1,INVERTED:!1,LINK_SIZE:l.LARGE},I=[y,v`

  :host {

    --mdc-link-border-radius: 0.25rem;
    --mdc-link-color-active: var(--mds-color-theme-text-accent-active);
    --mdc-link-color-disabled: var(--mds-color-theme-text-primary-disabled);
    --mdc-link-color-hover: var(--mds-color-theme-text-accent-hover);
    --mdc-link-color-normal: var(--mds-color-theme-text-accent-normal);
    --mdc-link-icon-margin-left: 0.25rem;
    --mdc-link-inverted-color-active: var(--mds-color-theme-inverted-text-accent-active);
    --mdc-link-inverted-color-disabled: var(--mds-color-theme-inverted-text-primary-disabled);
    --mdc-link-inverted-color-hover: var(--mds-color-theme-inverted-text-accent-hover);
    --mdc-link-inverted-color-normal: var(--mds-color-theme-inverted-text-accent-normal);
    --mdc-link-text-decoration-disabled: underline;
  }

  :host::part(link-container){
    border-radius: var(--mdc-link-border-radius);
    color: var(--mdc-link-color-normal);
  }

  ::slotted(a) {
    outline: none;
    align-items: center;
    color: inherit;
    display: flex;
    gap: var(--mdc-link-icon-margin-left);
    text-decoration: inherit;
    text-underline-offset: auto;
    text-underline-position: from-font;
  }

  :host(:hover)::part(link-container) {
    color: var(--mdc-link-color-hover);
  }

  :host(:active)::part(link-container) {
    color: var(--mdc-link-color-active);
  }

  :host([inline]) {
    display: inline-flex;
  }

  :host([inverted])::part(link-container) {
    color: var(--mdc-link-inverted-color-normal);
  }

  :host([inverted]:hover)::part(link-container) {
    color: var(--mdc-link-inverted-color-hover);
  }

  :host([inverted]:active)::part(link-container) {
    color: var(--mdc-link-inverted-color-active);
  }

  :host([size="large"])::part(link-container) {
    font-size: var(--mds-font-apps-body-large-regular-font-size);
    font-weight: var(--mds-font-apps-body-large-regular-font-weight);
    line-height: var(--mds-font-apps-body-large-regular-line-height);
    text-decoration: var(--mds-font-apps-body-large-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-large-regular-text-case);
  }

  :host([size="midsize"])::part(link-container) {
    font-size: var(--mds-font-apps-body-midsize-regular-font-size);
    font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
    line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-regular-text-case);
  }

  :host([size="small"])::part(link-container) {
    font-size: var(--mds-font-apps-body-small-regular-font-size);
    font-weight: var(--mds-font-apps-body-small-regular-font-weight);
    line-height: var(--mds-font-apps-body-small-regular-line-height);
    text-decoration: var(--mds-font-apps-body-small-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-small-regular-text-case);
  }

  :host([size="large"]:hover)::part(link-container),
  :host([size="large"]:active)::part(link-container),
  :host([size="large"][inline])::part(link-container) {
    font-size: var(--mds-font-apps-body-large-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-large-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-large-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-large-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-large-regular-underline-text-case);
  }

  :host([size="midsize"]:hover)::part(link-container),
  :host([size="midsize"]:active)::part(link-container),
  :host([size="midsize"][inline])::part(link-container) {
    font-size: var(--mds-font-apps-body-midsize-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-midsize-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-midsize-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-regular-underline-text-case);
  }

  :host([size="small"]:hover)::part(link-container),
  :host([size="small"]:active)::part(link-container),
  :host([size="small"][inline])::part(link-container) {
    font-size: var(--mds-font-apps-body-small-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-small-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-small-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-small-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-small-regular-underline-text-case);
  }

  :host([disabled])::part(link-container) {
    color: var(--mdc-link-color-disabled);
    pointer-events: none;
  }

  :host([inverted][disabled])::part(link-container) {
    color: var(--mdc-link-inverted-color-disabled);
  }
`,...z(!0),v`
  :host(:active)::part(link-container) {
    box-shadow: none;
  }
`];var E=Object.defineProperty,c=(p,e,n,o)=>{for(var r=void 0,t=p.length-1,h;t>=0;t--)(h=p[t])&&(r=h(e,n,r)||r);return r&&E(e,n,r),r};const m=class m extends b(x(u)){constructor(){super(...arguments),this.inline=s.INLINE,this.inverted=s.INVERTED,this.size=s.LINK_SIZE,this.prevTabindex=null}getIconSize(){switch(this.size){case l.SMALL:return a.SMALL;case l.MIDSIZE:return a.MIDSIZE;default:return a.LARGE}}setDisabled(e){e?(this.prevTabindex=this.hasAttribute("tabindex")?this.tabIndex:null,this.tabIndex=-1,this.setAttribute("aria-disabled","true")):this.prevTabindex===null?(this.removeAttribute("tabindex"),this.removeAttribute("aria-disabled")):(this.tabIndex=this.prevTabindex,this.removeAttribute("aria-disabled"))}updateTrailingIcon(){var o,r;const e=(r=(o=this.shadowRoot)==null?void 0:o.querySelector("slot"))==null?void 0:r.assignedElements({flatten:!0}).find(t=>t.tagName==="A"),n=this.getIconSize();if(this.iconName&&e){const t=document.createElement("mdc-icon");t.setAttribute("name",this.iconName),t.setAttribute("size",`${n}`),t.setAttribute("length-unit","rem"),e.appendChild(t)}}update(e){super.update(e),e.has("disabled")&&this.setDisabled(this.disabled)}render(){return f`
      <div part='link-container' class='mdc-focus-ring'>
        <slot @slotchange=${this.updateTrailingIcon}></slot>
      </div>
    `}};m.styles=[...u.styles,...I];let i=m;c([d({type:Boolean,reflect:!0})],i.prototype,"inline");c([d({type:Boolean,reflect:!0})],i.prototype,"inverted");c([d({type:String,reflect:!0})],i.prototype,"size");i.register(k);export{l as L};
