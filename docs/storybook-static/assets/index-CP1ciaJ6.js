import{U as p,S as h,k as g,q as y,V as v,W as f,E as b,n as c}from"./iframe-NlBABg4Q.js";import{t as I}from"./if-defined-CBNUrURk.js";import{I as k}from"./IconNameMixin-M2KTIy-9.js";import{D as a,I as T,T as t,a as i,b as N}from"./badge.constants-Cz2AzGT7.js";import"./index-BxtcjKKj.js";const C=[p,h`
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
  `];var _=Object.defineProperty,n=(m,r,o,A)=>{for(var d=void 0,s=m.length-1,u;s>=0;s--)(u=m[s])&&(d=u(r,o,d)||d);return d&&_(r,o,d),d};const l=class l extends k(b){constructor(){super(...arguments),this.variant=a.VARIANT,this.maxCounter=a.MAX_COUNTER,this.overlay=!1,this.ariaLabel=null}getCounterText(r,o){return o===void 0||typeof o!="number"||r===0?"":o>r?`${r}+`:r>a.MAX_COUNTER_LIMIT||o>a.MAX_COUNTER_LIMIT?`${a.MAX_COUNTER_LIMIT}+`:o.toString()}getBadgeIcon(r){return g`
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
    `}setRoleByAriaLabel(){this.ariaLabel?this.role=f.IMG:this.role=null}getBadgeContentBasedOnType(){this.variant&&!Object.values(T).includes(this.variant)&&(this.variant=a.VARIANT);const{iconName:r,type:o}=this;switch(o){case t.ICON:return this.getBadgeIcon(r||"");case t.COUNTER:return this.getBadgeCounterText();case t.SUCCESS:return this.getBadgeIcon(i.SUCCESS_ICON_NAME);case t.WARNING:return this.getBadgeIcon(i.WARNING_ICON_NAME);case t.ERROR:return this.getBadgeIcon(i.ERROR_ICON_NAME);case t.DOT:default:return this.type=t.DOT,this.getBadgeDot()}}update(r){super.update(r),r.has("ariaLabel")&&this.setRoleByAriaLabel()}render(){return this.getBadgeContentBasedOnType()}};l.styles=[...b.styles,...C];let e=l;n([c({type:String,reflect:!0})],e.prototype,"type");n([c({type:String,reflect:!0})],e.prototype,"variant");n([c({type:Number})],e.prototype,"counter");n([c({type:Number,attribute:"max-counter",reflect:!0})],e.prototype,"maxCounter");n([c({type:Boolean})],e.prototype,"overlay");n([c({type:String,attribute:"aria-label"})],e.prototype,"ariaLabel");e.register(N);
