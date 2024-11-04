import{i as E,k as l}from"./lit-element-CPYlYYac.js";import{R as p}from"./class-map-CXre9d5K.js";import{u as R,C,n as m}from"./index-BLShQaRP.js";import{t as A}from"./if-defined-4GS2c12S.js";import{F as f,V as O}from"./index-DUhjq5I_.js";import{h as S}from"./index-yOpQnEvF.js";import"./index-DkGCxfPr.js";import"./state-I_twzcUk.js";import"./index-BGH6lGYG.js";import"./iconprovider.component-DlI5gUhJ.js";import"./create-context-89xeped_.js";const k=R.constructTagName("badge"),s={DOT:"dot",ICON:"icon",COUNTER:"counter",SUCCESS:"success",WARNING:"warning",ERROR:"error"},y={SUCCESS_ICON_NAME:"check-circle-filled",WARNING_ICON_NAME:"warning-filled",ERROR_ICON_NAME:"error-legacy-filled"},I={PRIMARY:"primary",SECONDARY:"secondary"},u={SUCCESS:"success",WARNING:"warning",ERROR:"error"},t={TYPE:s.DOT,LENGTH_UNIT:"rem",MAX_COUNTER:99,MAX_COUNTER_LIMIT:999,VARIANT:I.PRIMARY,ICON_SIZE:1},x=[S,E`
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
  `];var U=Object.defineProperty,i=(a,r,e,n)=>{for(var o=void 0,d=a.length-1,g;d>=0;d--)(g=a[d])&&(o=g(r,e,o)||o);return o&&U(r,e,o),o};const N=class N extends C{constructor(){super(...arguments),this.type=t.TYPE,this.variant=t.VARIANT,this.maxCounter=t.MAX_COUNTER,this.overlay=!1,this.ariaLabel=null}getCounterText(r,e){return e===void 0||typeof e!="number"?"":e>t.MAX_COUNTER_LIMIT?`${t.MAX_COUNTER_LIMIT}+`:e>r?`${r}+`:e.toString()}getBadgeIcon(r,e,n,o){return l`
      <mdc-icon
        class="mdc-badge-icon ${p(this.getIconClasses(e,n,o))}"
        name="${A(r)}"
        length-unit="${t.LENGTH_UNIT}"
        size="${t.ICON_SIZE}"
      ></mdc-icon>
    `}getBadgeDot(r){return l`<div class="mdc-badge-dot ${p({"mdc-badge-overlay":r})}"></div>`}getIconClasses(r,e,n){const o={"mdc-badge-overlay":r},d=n===s.ICON?I:u,h={[`mdc-badge-icon__${Object.values(d).includes(e)?e:t.VARIANT}`]:!0};return{...o,...h}}getBadgeCounterText(r,e,n){return l`
      <mdc-text
        type="${f.BODY_SMALL_MEDIUM}"
        tagname="${O.DIV}"
        class="mdc-badge-text ${p({"mdc-badge-overlay":e})}"
      >
        ${this.getCounterText(r,n)}
      </mdc-text>
    `}setRoleByAriaLabel(){this.ariaLabel?this.role="img":this.role=null}getBadgeContentBasedOnType(){const{counter:r,iconName:e,maxCounter:n,overlay:o,type:d,variant:g}=this;switch(d){case s.DOT:return this.getBadgeDot(o);case s.ICON:return this.getBadgeIcon(e||"",o,g,d);case s.COUNTER:return this.getBadgeCounterText(n,o,r);case s.SUCCESS:return this.getBadgeIcon(y.SUCCESS_ICON_NAME,o,u.SUCCESS);case s.WARNING:return this.getBadgeIcon(y.WARNING_ICON_NAME,o,u.WARNING);case s.ERROR:return this.getBadgeIcon(y.ERROR_ICON_NAME,o,u.ERROR);default:return l``}}update(r){super.update(r),r.has("ariaLabel")&&this.setRoleByAriaLabel()}render(){return this.getBadgeContentBasedOnType()}};N.styles=[...C.styles,...x];let c=N;i([m({type:String,reflect:!0})],c.prototype,"type");i([m({type:String,attribute:"icon-name"})],c.prototype,"iconName");i([m({type:String})],c.prototype,"variant");i([m({type:Number})],c.prototype,"counter");i([m({type:Number,attribute:"max-counter"})],c.prototype,"maxCounter");i([m({type:Boolean})],c.prototype,"overlay");i([m({type:String,attribute:"aria-label"})],c.prototype,"ariaLabel");c.register(k);const M=a=>l`
  <mdc-badge
    type="${a.type}"
    icon-name="${a.iconName}"
    size="${a.size}"
    length-unit="${a.lengthUnit}"
    counter="${a.counter}"
    maxCounter="${a.maxCounter}"
    variant="${a.variant}"
  ></mdc-badge>
`,X={title:"Work In Progress/badge",tags:["autodocs"],component:"mdc-badge",render:M,parameters:{badges:["wip"]},argTypes:{}},b={args:{type:t.TYPE,iconName:"error-legacy-filled",size:1,lengthUnit:"rem",counter:1,maxCounter:99,variant:t.VARIANT}};var _,v,T;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    type: DEFAULTS.TYPE,
    iconName: 'error-legacy-filled',
    size: 1,
    lengthUnit: 'rem',
    counter: 1,
    maxCounter: 99,
    variant: DEFAULTS.VARIANT
  }
}`,...(T=(v=b.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const z=["Primary"];export{b as Primary,z as __namedExportsOrder,X as default};
