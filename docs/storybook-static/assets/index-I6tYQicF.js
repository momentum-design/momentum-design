import{i as h,k as m}from"./lit-element-D5KKan5q.js";import{R as i}from"./class-map-BcCVsMyu.js";import{C as v,n as c}from"./provider.component-BaQC7CJH.js";import{t as f}from"./if-defined-D5BV9-c0.js";import{I as _}from"./IconNameMixin-CRlZlTtq.js";import{R as I}from"./roles-DU0xbrD4.js";import{T,V as N}from"./index-riA1qVWu.js";import{D as a,I as k,T as t,a as g,b as l,c as C}from"./badge.constants-Cr-5n44e.js";import{h as A}from"./index-B-GnYs90.js";import"./index-CUNu2ww3.js";const R=[A,h`
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
  `];var E=Object.defineProperty,n=(b,r,e,p)=>{for(var d=void 0,s=b.length-1,y;s>=0;s--)(y=b[s])&&(d=y(r,e,d)||d);return d&&E(r,e,d),d};const u=class u extends _(v){constructor(){super(...arguments),this.variant=a.VARIANT,this.maxCounter=a.MAX_COUNTER,this.overlay=!1,this.ariaLabel=null}getCounterText(r,e){return e===void 0||typeof e!="number"||r===0?"":e>r?`${r}+`:r>a.MAX_COUNTER_LIMIT||e>a.MAX_COUNTER_LIMIT?`${a.MAX_COUNTER_LIMIT}+`:e.toString()}getBadgeIcon(r,e){return m`
      <mdc-icon
        class="mdc-badge-icon ${i({"mdc-badge-overlay":this.overlay,[`mdc-badge-icon__${e}`]:!0})}"
        name="${f(r)}"
        size="${a.ICON_SIZE}"
      ></mdc-icon>
    `}getBadgeDot(){return m`<div class="mdc-badge-dot ${i({"mdc-badge-overlay":this.overlay})}"></div>`}getBadgeCounterText(){return m`
      <mdc-text
        type="${T.BODY_SMALL_MEDIUM}"
        tagname="${N.DIV}"
        class="mdc-badge-text ${i({"mdc-badge-overlay":this.overlay})}"
      >
        ${this.getCounterText(this.maxCounter,this.counter)}
      </mdc-text>
    `}setRoleByAriaLabel(){this.ariaLabel?this.role=I.IMG:this.role=null}getBadgeContentBasedOnType(){this.variant&&!Object.values(k).includes(this.variant)&&(this.variant=a.VARIANT);const{iconName:r,type:e,variant:p}=this;switch(e){case t.ICON:return this.getBadgeIcon(r||"",p);case t.COUNTER:return this.getBadgeCounterText();case t.SUCCESS:return this.getBadgeIcon(g.SUCCESS_ICON_NAME,l.SUCCESS);case t.WARNING:return this.getBadgeIcon(g.WARNING_ICON_NAME,l.WARNING);case t.ERROR:return this.getBadgeIcon(g.ERROR_ICON_NAME,l.ERROR);case t.DOT:default:return this.type=t.DOT,this.getBadgeDot()}}update(r){super.update(r),r.has("ariaLabel")&&this.setRoleByAriaLabel()}render(){return this.getBadgeContentBasedOnType()}};u.styles=[...v.styles,...R];let o=u;n([c({type:String,reflect:!0})],o.prototype,"type");n([c({type:String,reflect:!0})],o.prototype,"variant");n([c({type:Number})],o.prototype,"counter");n([c({type:Number,attribute:"max-counter",reflect:!0})],o.prototype,"maxCounter");n([c({type:Boolean})],o.prototype,"overlay");n([c({type:String,attribute:"aria-label"})],o.prototype,"ariaLabel");o.register(C);
