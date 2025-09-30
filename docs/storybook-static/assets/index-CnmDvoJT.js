import{i as y,k as g,C as h,n as c}from"./iframe-B0KTrzx9.js";import{t as v}from"./if-defined-DNHI_5dY.js";import{I as f}from"./IconNameMixin-jtNeYPHJ.js";import{R as _}from"./roles-CJI3JVG-.js";import{T as I,V as T}from"./index-B0BwlIJd.js";import{D as a,I as N,T as t,a as i,b as l,c as k}from"./badge.constants-DUedW9V1.js";import{h as C}from"./index-fannbufq.js";import"./index-DNweNtkz.js";const A=[C,y`
    :host {
      --mdc-badge-primary-foreground-color: var(--mds-color-theme-common-text-primary-normal);
      --mdc-badge-primary-background-color: var(--mds-color-theme-background-accent-normal);

      --mdc-badge-secondary-foreground-color: var(--mds-color-theme-text-secondary-normal);
      --mdc-badge-secondary-background-color: var(--mds-color-theme-background-alert-default-normal);

      --mdc-badge-success-foreground-color: var(--mds-color-theme-text-success-normal);
      --mdc-badge-success-background-color: var(--mds-color-theme-background-alert-success-normal);

      --mdc-badge-warning-foreground-color: var(--mds-color-theme-text-warning-normal);
      --mdc-badge-warning-background-color: var(--mds-color-theme-background-alert-warning-normal);

      --mdc-badge-error-foreground-color: var(--mds-color-theme-text-error-normal);
      --mdc-badge-error-background-color: var(--mds-color-theme-background-alert-error-normal);

      --mdc-badge-overlay-background-color: var(--mds-color-theme-background-solid-primary-normal);

      color: var(--mdc-badge-primary-foreground-color);
    }
    :host::part(badge-overlay) {
      outline: 0.0625rem solid var(--mdc-badge-overlay-background-color);
    }
    :host::part(badge-text) {
      padding: 0 0.25rem;
      border-radius: 6.25rem;
      min-width: 1rem;
      display: flex;
      justify-content: center;
      background-color: var(--mdc-badge-primary-background-color);
    }
    :host::part(badge-dot) {
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 50%;
      background-color: var(--mdc-badge-primary-background-color);
    }
    :host::part(badge-icon) {
      padding: 2px;
      border-radius: 50%;
    }
    :host::part(badge-icon__primary) {
      background-color: var(--mdc-badge-primary-background-color);
      color: var(--mdc-badge-primary-foreground-color);
    }
    :host::part(badge-icon__success) {
      background-color: var(--mdc-badge-success-background-color);
      color: var(--mdc-badge-success-foreground-color);
    }
    :host::part(badge-icon__warning) {
      background-color: var(--mdc-badge-warning-background-color);
      color: var(--mdc-badge-warning-foreground-color);
    }
    :host::part(badge-icon__error) {
      background-color: var(--mdc-badge-error-background-color);
      color: var(--mdc-badge-error-foreground-color);
    }
    :host::part(badge-icon__secondary) {
      background-color: var(--mdc-badge-secondary-background-color);
      color: var(--mdc-badge-secondary-foreground-color);
    }

    /* High Contrast Mode */
    @media (forced-colors: active) {
      :host::part(badge-dot),
      :host::part(badge-icon),
      :host::part(badge-text) {
        outline: 0.125rem solid;
      }

      :host::part(badge-dot) {
        background-color: ButtonText;
        outline: none;
      }
    }
  `];var E=Object.defineProperty,n=(u,r,o,b)=>{for(var d=void 0,s=u.length-1,p;s>=0;s--)(p=u[s])&&(d=p(r,o,d)||d);return d&&E(r,o,d),d};const m=class m extends f(h){constructor(){super(...arguments),this.variant=a.VARIANT,this.maxCounter=a.MAX_COUNTER,this.overlay=!1,this.ariaLabel=null}getCounterText(r,o){return o===void 0||typeof o!="number"||r===0?"":o>r?`${r}+`:r>a.MAX_COUNTER_LIMIT||o>a.MAX_COUNTER_LIMIT?`${a.MAX_COUNTER_LIMIT}+`:o.toString()}getBadgeIcon(r,o){return g`
      <mdc-icon
        part="badge-icon ${this.overlay?"badge-overlay":""} badge-icon__${o}"
        name="${v(r)}"
        size="${a.ICON_SIZE}"
      ></mdc-icon>
    `}getBadgeDot(){return g`<div part="badge-dot ${this.overlay?"badge-overlay":""}"></div>`}getBadgeCounterText(){return g`
      <mdc-text
        type="${I.BODY_SMALL_MEDIUM}"
        tagname="${T.DIV}"
        part="badge-text ${this.overlay?"badge-overlay":""}"
      >
        ${this.getCounterText(this.maxCounter,this.counter)}
      </mdc-text>
    `}setRoleByAriaLabel(){this.ariaLabel?this.role=_.IMG:this.role=null}getBadgeContentBasedOnType(){this.variant&&!Object.values(N).includes(this.variant)&&(this.variant=a.VARIANT);const{iconName:r,type:o,variant:b}=this;switch(o){case t.ICON:return this.getBadgeIcon(r||"",b);case t.COUNTER:return this.getBadgeCounterText();case t.SUCCESS:return this.getBadgeIcon(i.SUCCESS_ICON_NAME,l.SUCCESS);case t.WARNING:return this.getBadgeIcon(i.WARNING_ICON_NAME,l.WARNING);case t.ERROR:return this.getBadgeIcon(i.ERROR_ICON_NAME,l.ERROR);case t.DOT:default:return this.type=t.DOT,this.getBadgeDot()}}update(r){super.update(r),r.has("ariaLabel")&&this.setRoleByAriaLabel()}render(){return this.getBadgeContentBasedOnType()}};m.styles=[...h.styles,...A];let e=m;n([c({type:String,reflect:!0})],e.prototype,"type");n([c({type:String,reflect:!0})],e.prototype,"variant");n([c({type:Number})],e.prototype,"counter");n([c({type:Number,attribute:"max-counter",reflect:!0})],e.prototype,"maxCounter");n([c({type:Boolean})],e.prototype,"overlay");n([c({type:String,attribute:"aria-label"})],e.prototype,"ariaLabel");e.register(k);
