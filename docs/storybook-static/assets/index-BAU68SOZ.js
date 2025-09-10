import{i as f,k as o}from"./lit-element-D5KKan5q.js";import{n as a}from"./property-Bj3TGwkg.js";import{t as c}from"./if-defined-D5BV9-c0.js";import{C as u}from"./provider.component-DrWB4byV.js";import{p as m}from"./index-CwZu4Wnd.js";import{R as x}from"./roles-CJI3JVG-.js";import{S as v}from"./sidenavigation.component-Bu2qGlnw.js";import{b,T as y}from"./menuitemradio.constants-CB6EqhSm.js";import"./index-CxGzlGeU.js";const g=f`
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
`,T=[g];var C=Object.defineProperty,d=(l,e,i,h)=>{for(var t=void 0,s=l.length-1,p;s>=0;s--)(p=l[s])&&(t=p(e,i,t)||t);return t&&C(e,i,t),t};const n=class n extends u{constructor(){super(...arguments),this.ariaLabel=null,this.headerText=null,this.showDivider=!1,this.dividerVariant=b.DIVIDER_VARIANT,this.hideHeaderText=!1,this.sideNavigationContext=m.consume({host:this,context:v.Context})}connectedCallback(){super.connectedCallback(),this.setAttribute("role",x.GROUP)}update(e){var t;super.update(e),(e.has("ariaLabel")||e.has("headerText"))&&(!this.ariaLabel||this.ariaLabel===e.get("headerText"))&&(this.ariaLabel=this.headerText||"");const i=(t=this.sideNavigationContext)==null?void 0:t.value;if(!i)return;const{expanded:h}=i;this.hideHeaderText=!h}renderHeader(){var e,i;return this.headerText?o` <mdc-listheader
        part="header ${(i=(e=this.sideNavigationContext)==null?void 0:e.value)!=null&&i.expanded?"align-header":""}"
        header-text="${this.headerText}"
        prefix-icon="${c(this.prefixIcon)}"
      >
      </mdc-listheader>`:null}render(){return o`
      ${this.hideHeaderText?null:this.renderHeader()}
      <slot part="container"></slot>
      ${this.showDivider?o`<mdc-divider variant="${this.dividerVariant}" part="divider"></mdc-divider>`:null}
    `}};n.styles=[...u.styles,...T];let r=n;d([a({type:String,reflect:!0,attribute:"aria-label"})],r.prototype,"ariaLabel");d([a({type:String,reflect:!0,attribute:"header-text"})],r.prototype,"headerText");d([a({type:String,attribute:"prefix-icon"})],r.prototype,"prefixIcon");d([a({type:Boolean,reflect:!0,attribute:"show-divider"})],r.prototype,"showDivider");d([a({type:String,reflect:!0,attribute:"divider-variant"})],r.prototype,"dividerVariant");d([a({type:Boolean,reflect:!0,attribute:"hide-header-text"})],r.prototype,"hideHeaderText");r.register(y);
