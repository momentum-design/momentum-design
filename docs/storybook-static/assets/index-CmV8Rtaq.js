import{i as h,k as s}from"./lit-element-D5KKan5q.js";import{R as i}from"./class-map-BcCVsMyu.js";import{n as c}from"./property-Bj3TGwkg.js";import{t as f}from"./if-defined-D5BV9-c0.js";import{C as v}from"./provider.component-DrWB4byV.js";import{I as _}from"./IconNameMixin-Bk-Z_FTS.js";import{R as I}from"./roles-CJI3JVG-.js";import{T,V as N}from"./index-DeEenWCE.js";import{D as a,I as k,T as t,a as g,b as l,c as C}from"./badge.constants-C6WKiCnx.js";import{h as A}from"./index-B-GnYs90.js";import"./index-DFQLLYx5.js";const R=[A,h`
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
    .mdc-badge-overlay {
      outline: 0.0625rem solid var(--mdc-badge-overlay-background-color);
    }
    .mdc-badge-text {
      padding: 0 0.25rem;
      border-radius: 6.25rem;
      min-width: 1rem;
      display: flex;
      justify-content: center;
      background-color: var(--mdc-badge-primary-background-color);
    }
    .mdc-badge-dot {
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 50%;
      background-color: var(--mdc-badge-primary-background-color);
    }
    .mdc-badge-icon {
      padding: 2px;
      border-radius: 50%;
    }
    .mdc-badge-icon__primary {
      background-color: var(--mdc-badge-primary-background-color);
      color: var(--mdc-badge-primary-foreground-color);
    }
    .mdc-badge-icon__success {
      background-color: var(--mdc-badge-success-background-color);
      color: var(--mdc-badge-success-foreground-color);
    }
    .mdc-badge-icon__warning {
      background-color: var(--mdc-badge-warning-background-color);
      color: var(--mdc-badge-warning-foreground-color);
    }
    .mdc-badge-icon__error {
      background-color: var(--mdc-badge-error-background-color);
      color: var(--mdc-badge-error-foreground-color);
    }
    .mdc-badge-icon__secondary {
      background-color: var(--mdc-badge-secondary-background-color);
      color: var(--mdc-badge-secondary-foreground-color);
    }

    /* High Contrast Mode */
    @media (forced-colors: active) {
      .mdc-badge-dot,
      .mdc-badge-icon,
      .mdc-badge-text {
        outline: 0.125rem solid;
      }

      .mdc-badge-dot {
        background-color: ButtonText;
        outline: none;
      }
    }
  `];var E=Object.defineProperty,n=(b,r,o,p)=>{for(var d=void 0,m=b.length-1,y;m>=0;m--)(y=b[m])&&(d=y(r,o,d)||d);return d&&E(r,o,d),d};const u=class u extends _(v){constructor(){super(...arguments),this.variant=a.VARIANT,this.maxCounter=a.MAX_COUNTER,this.overlay=!1,this.ariaLabel=null}getCounterText(r,o){return o===void 0||typeof o!="number"||r===0?"":o>r?`${r}+`:r>a.MAX_COUNTER_LIMIT||o>a.MAX_COUNTER_LIMIT?`${a.MAX_COUNTER_LIMIT}+`:o.toString()}getBadgeIcon(r,o){return s`
      <mdc-icon
        class="mdc-badge-icon ${i({"mdc-badge-overlay":this.overlay,[`mdc-badge-icon__${o}`]:!0})}"
        name="${f(r)}"
        size="${a.ICON_SIZE}"
      ></mdc-icon>
    `}getBadgeDot(){return s`<div class="mdc-badge-dot ${i({"mdc-badge-overlay":this.overlay})}"></div>`}getBadgeCounterText(){return s`
      <mdc-text
        type="${T.BODY_SMALL_MEDIUM}"
        tagname="${N.DIV}"
        class="mdc-badge-text ${i({"mdc-badge-overlay":this.overlay})}"
      >
        ${this.getCounterText(this.maxCounter,this.counter)}
      </mdc-text>
    `}setRoleByAriaLabel(){this.ariaLabel?this.role=I.IMG:this.role=null}getBadgeContentBasedOnType(){this.variant&&!Object.values(k).includes(this.variant)&&(this.variant=a.VARIANT);const{iconName:r,type:o,variant:p}=this;switch(o){case t.ICON:return this.getBadgeIcon(r||"",p);case t.COUNTER:return this.getBadgeCounterText();case t.SUCCESS:return this.getBadgeIcon(g.SUCCESS_ICON_NAME,l.SUCCESS);case t.WARNING:return this.getBadgeIcon(g.WARNING_ICON_NAME,l.WARNING);case t.ERROR:return this.getBadgeIcon(g.ERROR_ICON_NAME,l.ERROR);case t.DOT:default:return this.type=t.DOT,this.getBadgeDot()}}update(r){super.update(r),r.has("ariaLabel")&&this.setRoleByAriaLabel()}render(){return this.getBadgeContentBasedOnType()}};u.styles=[...v.styles,...R];let e=u;n([c({type:String,reflect:!0})],e.prototype,"type");n([c({type:String,reflect:!0})],e.prototype,"variant");n([c({type:Number})],e.prototype,"counter");n([c({type:Number,attribute:"max-counter",reflect:!0})],e.prototype,"maxCounter");n([c({type:Boolean})],e.prototype,"overlay");n([c({type:String,attribute:"aria-label"})],e.prototype,"ariaLabel");e.register(C);
