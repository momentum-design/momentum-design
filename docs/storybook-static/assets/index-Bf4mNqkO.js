import{i as h,k as i}from"./lit-element-D5KKan5q.js";import{R as g}from"./class-map-BcCVsMyu.js";import{u as _,C as v,n as d}from"./index-C9z9WAEj.js";import{t as I}from"./if-defined-D5BV9-c0.js";import{I as C}from"./IconNameMixin-CujGSn0t.js";import{T as R,V as f}from"./text.constants-ZF0jM5wn.js";import{h as T}from"./index-CcXofQbA.js";import"./index-Gvtn2Gcx.js";import"./index-D3DhXfcW.js";const A=_.constructTagName("badge"),a={DOT:"dot",ICON:"icon",COUNTER:"counter",SUCCESS:"success",WARNING:"warning",ERROR:"error"},m={SUCCESS_ICON_NAME:"check-circle-badge-filled",WARNING_ICON_NAME:"warning-badge-filled",ERROR_ICON_NAME:"error-legacy-badge-filled"},N={PRIMARY:"primary",SECONDARY:"secondary"},l={SUCCESS:"success",WARNING:"warning",ERROR:"error"},t={TYPE:a.DOT,MAX_COUNTER:99,MAX_COUNTER_LIMIT:999,VARIANT:N.PRIMARY,ICON_SIZE:1},E=[T,h`
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
    .mdc-badge-dot, .mdc-badge-icon, .mdc-badge-text {
      outline: 0.125rem solid;
    }
  }
  `];var O=Object.defineProperty,n=(b,r,e,y)=>{for(var c=void 0,s=b.length-1,p;s>=0;s--)(p=b[s])&&(c=p(r,e,c)||c);return c&&O(r,e,c),c};const u=class u extends C(v){constructor(){super(...arguments),this.variant=t.VARIANT,this.maxCounter=t.MAX_COUNTER,this.overlay=!1,this.ariaLabel=null}getCounterText(r,e){return e===void 0||typeof e!="number"||r===0?"":e>r?`${r}+`:r>t.MAX_COUNTER_LIMIT||e>t.MAX_COUNTER_LIMIT?`${t.MAX_COUNTER_LIMIT}+`:e.toString()}getBadgeIcon(r,e){return i`
      <mdc-icon
        class="mdc-badge-icon ${g({"mdc-badge-overlay":this.overlay,[`mdc-badge-icon__${e}`]:!0})}"
        name="${I(r)}"
        size="${t.ICON_SIZE}"
      ></mdc-icon>
    `}getBadgeDot(){return i`<div class="mdc-badge-dot ${g({"mdc-badge-overlay":this.overlay})}"></div>`}getBadgeCounterText(){return i`
      <mdc-text
        type="${R.BODY_SMALL_MEDIUM}"
        tagname="${f.DIV}"
        class="mdc-badge-text ${g({"mdc-badge-overlay":this.overlay})}"
      >
        ${this.getCounterText(this.maxCounter,this.counter)}
      </mdc-text>
    `}setRoleByAriaLabel(){this.ariaLabel?this.role="img":this.role=null}getBadgeContentBasedOnType(){this.variant&&!Object.values(N).includes(this.variant)&&(this.variant=t.VARIANT);const{iconName:r,type:e,variant:y}=this;switch(e){case a.ICON:return this.getBadgeIcon(r||"",y);case a.COUNTER:return this.getBadgeCounterText();case a.SUCCESS:return this.getBadgeIcon(m.SUCCESS_ICON_NAME,l.SUCCESS);case a.WARNING:return this.getBadgeIcon(m.WARNING_ICON_NAME,l.WARNING);case a.ERROR:return this.getBadgeIcon(m.ERROR_ICON_NAME,l.ERROR);case a.DOT:default:return this.type=a.DOT,this.getBadgeDot()}}update(r){super.update(r),r.has("ariaLabel")&&this.setRoleByAriaLabel()}render(){return this.getBadgeContentBasedOnType()}};u.styles=[...v.styles,...E];let o=u;n([d({type:String,reflect:!0})],o.prototype,"type");n([d({type:String,reflect:!0})],o.prototype,"variant");n([d({type:Number})],o.prototype,"counter");n([d({type:Number,attribute:"max-counter",reflect:!0})],o.prototype,"maxCounter");n([d({type:Boolean})],o.prototype,"overlay");n([d({type:String,attribute:"aria-label"})],o.prototype,"ariaLabel");o.register(A);export{t as D,N as I,a as T};
