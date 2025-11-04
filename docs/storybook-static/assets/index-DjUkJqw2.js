import{U as p,S as h,k as g,q as y,V as v,W as f,E as u,n as c}from"./iframe-DcL-7sZw.js";import{t as I}from"./if-defined-ClgKFGqt.js";import{I as k}from"./IconNameMixin-CL5DG6kY.js";import{D as a,I as T,T as t,a as i,b as N}from"./badge.constants-D4PUNF4K.js";import"./index-CMzlICtV.js";const C=[p,h`
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

      --mdc-badge-dot-width: 0.75rem;
      --mdc-badge-dot-height: 0.75rem;

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
      width: var(--mdc-badge-dot-width);
      height: var(--mdc-badge-dot-height);
      border-radius: 50%;
      background-color: var(--mdc-badge-primary-background-color);
    }
    :host::part(badge-icon) {
      padding: 2px;
      border-radius: 50%;
    }
    :host([type='icon'][variant='primary'])::part(badge-icon) {
      background-color: var(--mdc-badge-primary-background-color);
      color: var(--mdc-badge-primary-foreground-color);
    }
    :host([type='icon'][variant='secondary'])::part(badge-icon) {
      background-color: var(--mdc-badge-secondary-background-color);
      color: var(--mdc-badge-secondary-foreground-color);
    }
    :host([type='success'])::part(badge-icon) {
      background-color: var(--mdc-badge-success-background-color);
      color: var(--mdc-badge-success-foreground-color);
    }
    :host([type='warning'])::part(badge-icon) {
      background-color: var(--mdc-badge-warning-background-color);
      color: var(--mdc-badge-warning-foreground-color);
    }
    :host([type='error'])::part(badge-icon) {
      background-color: var(--mdc-badge-error-background-color);
      color: var(--mdc-badge-error-foreground-color);
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
  `];var _=Object.defineProperty,n=(m,r,e,A)=>{for(var d=void 0,s=m.length-1,b;s>=0;s--)(b=m[s])&&(d=b(r,e,d)||d);return d&&_(r,e,d),d};const l=class l extends k(u){constructor(){super(...arguments),this.variant=a.VARIANT,this.maxCounter=a.MAX_COUNTER,this.overlay=!1,this.ariaLabel=null}getCounterText(r,e){return e===void 0||typeof e!="number"||r===0?"":e>r?`${r}+`:r>a.MAX_COUNTER_LIMIT||e>a.MAX_COUNTER_LIMIT?`${a.MAX_COUNTER_LIMIT}+`:e.toString()}getBadgeIcon(r){return g`
      <mdc-icon
        part="badge-icon ${this.overlay?"badge-overlay":""}"
        name="${I(r)}"
        size="${a.ICON_SIZE}"
      ></mdc-icon>
    `}getBadgeDot(){return g`<div part="badge-dot ${this.overlay?"badge-overlay":""}"></div>`}getBadgeCounterText(){return g`
      <mdc-text
        type="${y.BODY_SMALL_MEDIUM}"
        tagname="${v.DIV}"
        part="badge-text ${this.overlay?"badge-overlay":""}"
      >
        ${this.getCounterText(this.maxCounter,this.counter)}
      </mdc-text>
    `}setRoleByAriaLabel(){this.ariaLabel?this.role=f.IMG:this.role=null}getBadgeContentBasedOnType(){this.variant&&!Object.values(T).includes(this.variant)&&(this.variant=a.VARIANT);const{iconName:r,type:e}=this;switch(e){case t.ICON:return this.getBadgeIcon(r||"");case t.COUNTER:return this.getBadgeCounterText();case t.SUCCESS:return this.getBadgeIcon(i.SUCCESS_ICON_NAME);case t.WARNING:return this.getBadgeIcon(i.WARNING_ICON_NAME);case t.ERROR:return this.getBadgeIcon(i.ERROR_ICON_NAME);case t.DOT:default:return this.type=t.DOT,this.getBadgeDot()}}update(r){super.update(r),r.has("ariaLabel")&&this.setRoleByAriaLabel()}render(){return this.getBadgeContentBasedOnType()}};l.styles=[...u.styles,...C];let o=l;n([c({type:String,reflect:!0})],o.prototype,"type");n([c({type:String,reflect:!0})],o.prototype,"variant");n([c({type:Number})],o.prototype,"counter");n([c({type:Number,attribute:"max-counter",reflect:!0})],o.prototype,"maxCounter");n([c({type:Boolean})],o.prototype,"overlay");n([c({type:String,attribute:"aria-label"})],o.prototype,"ariaLabel");o.register(N);
