import{i as T,k as g}from"./lit-element-CPYlYYac.js";import{R as p}from"./class-map-CXre9d5K.js";import{u as E,C,n as m}from"./index-BLShQaRP.js";import{t as A}from"./if-defined-4GS2c12S.js";import{h as f}from"./index-yOpQnEvF.js";import"./index-DkGCxfPr.js";import"./index-C323DCv2.js";import"./state-I_twzcUk.js";import"./index-BGH6lGYG.js";import"./iconprovider.component-DlI5gUhJ.js";import"./create-context-89xeped_.js";const O=E.constructTagName("badge"),s={DOT:"dot",ICON:"icon",COUNTER:"counter",SUCCESS:"success",WARNING:"warning",ERROR:"error"},y={SUCCESS_ICON_NAME:"check-circle-filled",WARNING_ICON_NAME:"warning-filled",ERROR_ICON_NAME:"error-legacy-filled"},h={PRIMARY:"primary",SECONDARY:"secondary"},u={SUCCESS:"success",WARNING:"warning",ERROR:"error"},t={TYPE:s.DOT,LENGTH_UNIT:"rem",MAX_COUNTER:99,MAX_COUNTER_LIMIT:999,VARIANT:h.PRIMARY,ICON_SIZE:1},S=[f,T`
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
  `];var k=Object.defineProperty,i=(a,r,e,n)=>{for(var o=void 0,d=a.length-1,l;d>=0;d--)(l=a[d])&&(o=l(r,e,o)||o);return o&&k(r,e,o),o};const N=class N extends C{constructor(){super(...arguments),this.type=t.TYPE,this.variant=t.VARIANT,this.maxCounter=t.MAX_COUNTER,this.overlay=!1,this.ariaLabel=null}getCounterText(r,e){return e===void 0||typeof e!="number"?"":e>t.MAX_COUNTER_LIMIT?`${t.MAX_COUNTER_LIMIT}+`:e>r?`${r}+`:e.toString()}getBadgeIcon(r,e,n,o){return g`
      <mdc-icon
        class="mdc-badge-icon ${p(this.getIconClasses(e,n,o))}"
        name="${A(r)}"
        length-unit="${t.LENGTH_UNIT}"
        size="${t.ICON_SIZE}"
      ></mdc-icon>
    `}getBadgeDot(r){return g`<div class="mdc-badge-dot ${p({"mdc-badge-overlay":r})}"></div>`}getIconClasses(r,e,n){const o={"mdc-badge-overlay":r},d=n===s.ICON?h:u,R={[`mdc-badge-icon__${Object.values(d).includes(e)?e:t.VARIANT}`]:!0};return{...o,...R}}getBadgeCounterText(r,e,n){return g`
      <mdc-text
        type="body-small-medium"
        tagname="div"
        class="mdc-badge-text ${p({"mdc-badge-overlay":e})}"
      >
        ${this.getCounterText(r,n)}
      </mdc-text>
    `}setRoleByAriaLabel(){this.ariaLabel?this.role="img":this.role=null}getBadgeContentBasedOnType(){const{counter:r,iconName:e,maxCounter:n,overlay:o,type:d,variant:l}=this;switch(d){case s.DOT:return this.getBadgeDot(o);case s.ICON:return this.getBadgeIcon(e||"",o,l,d);case s.COUNTER:return this.getBadgeCounterText(n,o,r);case s.SUCCESS:return this.getBadgeIcon(y.SUCCESS_ICON_NAME,o,u.SUCCESS);case s.WARNING:return this.getBadgeIcon(y.WARNING_ICON_NAME,o,u.WARNING);case s.ERROR:return this.getBadgeIcon(y.ERROR_ICON_NAME,o,u.ERROR);default:return g``}}update(r){super.update(r),r.has("ariaLabel")&&this.setRoleByAriaLabel()}render(){return this.getBadgeContentBasedOnType()}};N.styles=[...C.styles,...S];let c=N;i([m({type:String,reflect:!0})],c.prototype,"type");i([m({type:String,attribute:"icon-name"})],c.prototype,"iconName");i([m({type:String})],c.prototype,"variant");i([m({type:Number})],c.prototype,"counter");i([m({type:Number,attribute:"max-counter"})],c.prototype,"maxCounter");i([m({type:Boolean})],c.prototype,"overlay");i([m({type:String,attribute:"aria-label"})],c.prototype,"ariaLabel");c.register(O);const x=a=>g`
  <mdc-badge
    type="${a.type}"
    icon-name="${a.iconName}"
    size="${a.size}"
    length-unit="${a.lengthUnit}"
    counter="${a.counter}"
    maxCounter="${a.maxCounter}"
    variant="${a.variant}"
  ></mdc-badge>
`,W={title:"Work In Progress/badge",tags:["autodocs"],component:"mdc-badge",render:x,parameters:{badges:["wip"]},argTypes:{}},b={args:{type:t.TYPE,iconName:"error-legacy-filled",size:1,lengthUnit:"rem",counter:1,maxCounter:99,variant:t.VARIANT}};var v,I,_;b.parameters={...b.parameters,docs:{...(v=b.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: DEFAULTS.TYPE,
    iconName: 'error-legacy-filled',
    size: 1,
    lengthUnit: 'rem',
    counter: 1,
    maxCounter: 99,
    variant: DEFAULTS.VARIANT
  }
}`,...(_=(I=b.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};const z=["Primary"];export{b as Primary,z as __namedExportsOrder,W as default};
