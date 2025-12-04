import{U as m,F as c,R as u,k as n,n as a}from"./iframe-BgYPXA4a.js";import{t as v}from"./if-defined-BUbG2hnJ.js";import{p as x}from"./index-BZB1R1_f.js";import{S as f}from"./sidenavigation.component-MD-84Poo.js";import{b,T as g}from"./menuitemradio.constants-BUUFXpD2.js";import"./index-C7i7YO9e.js";const y=m`
  :host {
    --mdc-menusection-divider-margin-block: 0.25rem;
    --mdc-menusection-gap: 0rem;
    --mdc-menusection-divider-width: 100%;
    --mdc-menusection-header-padding: 0.5rem 1.75rem;

    display: flex;
    flex-direction: column;
    height: 100%;
    gap: var(--mdc-menusection-gap);
  }

  :host::part(divider) {
    width: var(--mdc-menusection-divider-width);
    margin-block: var(--mdc-menusection-divider-margin-block);
  }

  :host::part(align-header) {
    --mdc-listheader-padding: var(--mdc-menusection-header-padding);
  }
`,T=[y];var C=Object.defineProperty,d=(h,e,r,l)=>{for(var t=void 0,s=h.length-1,p;s>=0;s--)(p=h[s])&&(t=p(e,r,t)||t);return t&&C(e,r,t),t};const o=class o extends c{constructor(){super(...arguments),this.ariaLabel=null,this.headerText=null,this.showDivider=!1,this.dividerVariant=b.DIVIDER_VARIANT,this.hideHeaderText=!1,this.sideNavigationContext=x.consume({host:this,context:f.Context})}connectedCallback(){super.connectedCallback(),this.setAttribute("role",u.GROUP)}update(e){var t;super.update(e),(e.has("ariaLabel")||e.has("headerText"))&&(!this.ariaLabel||this.ariaLabel===e.get("headerText"))&&(this.ariaLabel=this.headerText||"");const r=(t=this.sideNavigationContext)==null?void 0:t.value;if(!r)return;const{expanded:l}=r;this.hideHeaderText=!l}renderHeader(){var e,r;return this.headerText?n` <mdc-listheader
        part="header ${(r=(e=this.sideNavigationContext)==null?void 0:e.value)!=null&&r.expanded?"align-header":""}"
        header-text="${this.headerText}"
        prefix-icon="${v(this.prefixIcon)}"
      >
      </mdc-listheader>`:null}render(){return n`
      ${this.hideHeaderText?null:this.renderHeader()}
      <slot part="container"></slot>
      ${this.showDivider?n`<mdc-divider variant="${this.dividerVariant}" part="divider"></mdc-divider>`:null}
    `}};o.styles=[...c.styles,...T];let i=o;d([a({type:String,reflect:!0,attribute:"aria-label"})],i.prototype,"ariaLabel");d([a({type:String,reflect:!0,attribute:"header-text"})],i.prototype,"headerText");d([a({type:String,attribute:"prefix-icon"})],i.prototype,"prefixIcon");d([a({type:Boolean,reflect:!0,attribute:"show-divider"})],i.prototype,"showDivider");d([a({type:String,reflect:!0,attribute:"divider-variant"})],i.prototype,"dividerVariant");d([a({type:Boolean,reflect:!0,attribute:"hide-header-text"})],i.prototype,"hideHeaderText");i.register(g);
