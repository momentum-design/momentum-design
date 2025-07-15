import{i as x,k as o}from"./lit-element-D5KKan5q.js";import{C as u,n as a}from"./index-C9z9WAEj.js";import{t as f}from"./if-defined-D5BV9-c0.js";import{p as c}from"./index-2PiEGcHV.js";import{R as m}from"./roles-BH_hBfTz.js";import{S as v}from"./sidenavigation.component-B4h9Ez7b.js";import{T as b}from"./menusection.constants-BCYXL6dH.js";import"./index-DthwOXmb.js";const g=x`
  :host {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  :host::part(divider) {
    margin-block: 0.25rem;
  }

  :host(:dir(ltr))::part(align-header) {
    padding-left: 1.75rem;
  }

  :host(:dir(rtl))::part(align-header) {
    padding-right: 1.75rem;
  }
`,y=[g];var T=Object.defineProperty,s=(n,e,r,h)=>{for(var t=void 0,d=n.length-1,p;d>=0;d--)(p=n[d])&&(t=p(e,r,t)||t);return t&&T(e,r,t),t};const l=class l extends u{constructor(){super(...arguments),this.ariaLabel=null,this.headerText=null,this.showDivider=!1,this.hideHeaderText=!1,this.sideNavigationContext=c.consume({host:this,context:v.Context})}connectedCallback(){super.connectedCallback(),this.setAttribute("role",m.GROUP)}update(e){var t;super.update(e),(e.has("ariaLabel")||e.has("headerText"))&&(!this.ariaLabel||this.ariaLabel===e.get("headerText"))&&(this.ariaLabel=this.headerText||"");const r=(t=this.sideNavigationContext)==null?void 0:t.value;if(!r)return;const{expanded:h}=r;this.hideHeaderText=!h}renderHeader(){var e,r;return this.headerText?o` <mdc-listheader
        part="header ${(r=(e=this.sideNavigationContext)==null?void 0:e.value)!=null&&r.expanded?"align-header":""}"
        header-text="${this.headerText}"
        prefix-icon="${f(this.prefixIcon)}"
      >
      </mdc-listheader>`:null}render(){return o`
      ${this.hideHeaderText?null:this.renderHeader()}
      <slot></slot>
      ${this.showDivider?o`<mdc-divider variant="gradient" part="divider"></mdc-divider>`:null}
    `}};l.styles=[...u.styles,...y];let i=l;s([a({type:String,reflect:!0,attribute:"aria-label"})],i.prototype,"ariaLabel");s([a({type:String,reflect:!0,attribute:"header-text"})],i.prototype,"headerText");s([a({type:String,attribute:"prefix-icon"})],i.prototype,"prefixIcon");s([a({type:Boolean,reflect:!0,attribute:"show-divider"})],i.prototype,"showDivider");s([a({type:Boolean,reflect:!0,attribute:"hide-header-text"})],i.prototype,"hideHeaderText");i.register(b);
