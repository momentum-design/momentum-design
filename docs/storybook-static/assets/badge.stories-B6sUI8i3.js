import{i as j,k as R}from"./lit-element-CPYlYYac.js";import{R as E}from"./class-map-CXre9d5K.js";import{u as F,C as A,n as l}from"./index-BLShQaRP.js";import{t as q}from"./if-defined-4GS2c12S.js";import{F as H,V as Z}from"./index-DUhjq5I_.js";import{h as z}from"./index-yOpQnEvF.js";import"./index-DkGCxfPr.js";import{c as J,s as K}from"./commonArgTypes-BluK8w5L.js";import"./state-I_twzcUk.js";import"./index-BGH6lGYG.js";import"./iconprovider.component-DlI5gUhJ.js";import"./create-context-89xeped_.js";const Q=F.constructTagName("badge"),e={DOT:"dot",ICON:"icon",COUNTER:"counter",SUCCESS:"success",WARNING:"warning",ERROR:"error"},C={SUCCESS_ICON_NAME:"check-circle-filled",WARNING_ICON_NAME:"warning-filled",ERROR_ICON_NAME:"error-legacy-filled"},m={PRIMARY:"primary",SECONDARY:"secondary"},u={SUCCESS:"success",WARNING:"warning",ERROR:"error"},t={TYPE:e.DOT,LENGTH_UNIT:"rem",MAX_COUNTER:99,MAX_COUNTER_LIMIT:999,VARIANT:m.PRIMARY,ICON_SIZE:1},rr=[z,j`
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
  `];var er=Object.defineProperty,i=(c,r,o,s)=>{for(var a=void 0,d=c.length-1,g;d>=0;d--)(g=c[d])&&(a=g(r,o,a)||a);return a&&er(r,o,a),a};const _=class _ extends A{constructor(){super(...arguments),this.variant=t.VARIANT,this.maxCounter=t.MAX_COUNTER,this.overlay=!1,this.ariaLabel=null}getCounterText(r,o){return o===void 0||typeof o!="number"||r===0?"":o>r?`${r}+`:r>t.MAX_COUNTER_LIMIT||o>t.MAX_COUNTER_LIMIT?`${t.MAX_COUNTER_LIMIT}+`:o.toString()}getBadgeIcon(r,o,s,a){return R`
      <mdc-icon
        class="mdc-badge-icon ${E(this.getIconClasses(o,s,a))}"
        name="${q(r)}"
        length-unit="${t.LENGTH_UNIT}"
        size="${t.ICON_SIZE}"
      ></mdc-icon>
    `}getBadgeDot(r){return R`<div class="mdc-badge-dot ${E({"mdc-badge-overlay":r})}"></div>`}getIconClasses(r,o,s){const a={"mdc-badge-overlay":r},d=s===e.ICON?m:u,X={[`mdc-badge-icon__${Object.values(d).includes(o)?o:t.VARIANT}`]:!0};return{...a,...X}}getBadgeCounterText(r,o,s){return R`
      <mdc-text
        type="${H.BODY_SMALL_MEDIUM}"
        tagname="${Z.DIV}"
        class="mdc-badge-text ${E({"mdc-badge-overlay":o})}"
      >
        ${this.getCounterText(r,s)}
      </mdc-text>
    `}setRoleByAriaLabel(){this.ariaLabel?this.role="img":this.role=null}getBadgeContentBasedOnType(){this.variant&&!Object.values(m).includes(this.variant)&&(this.variant=m.PRIMARY);const{counter:r,iconName:o,maxCounter:s,overlay:a,type:d,variant:g}=this;switch(d){case e.ICON:return this.getBadgeIcon(o||"",a,g,d);case e.COUNTER:return this.getBadgeCounterText(s,a,r);case e.SUCCESS:return this.getBadgeIcon(C.SUCCESS_ICON_NAME,a,u.SUCCESS);case e.WARNING:return this.getBadgeIcon(C.WARNING_ICON_NAME,a,u.WARNING);case e.ERROR:return this.getBadgeIcon(C.ERROR_ICON_NAME,a,u.ERROR);case e.DOT:default:return this.type=e.DOT,this.getBadgeDot(a)}}update(r){super.update(r),r.has("ariaLabel")&&this.setRoleByAriaLabel()}render(){return this.getBadgeContentBasedOnType()}};_.styles=[...A.styles,...rr];let n=_;i([l({type:String,reflect:!0})],n.prototype,"type");i([l({type:String,attribute:"icon-name"})],n.prototype,"iconName");i([l({type:String,reflect:!0})],n.prototype,"variant");i([l({type:Number})],n.prototype,"counter");i([l({type:Number,attribute:"max-counter",reflect:!0})],n.prototype,"maxCounter");i([l({type:Boolean})],n.prototype,"overlay");i([l({type:String,attribute:"aria-label"})],n.prototype,"ariaLabel");n.register(Q);const I=[9,99,999],or=c=>R`
  <mdc-badge
    type="${c.type}"
    icon-name="${c["icon-name"]}"
    counter="${c.counter}"
    max-counter="${c["max-counter"]}"
    variant="${c.variant}"
    ?overlay=${c.overlay}
    aria-label="${c["aria-label"]}"
  ></mdc-badge>
`,br={title:"Components/badge",tags:["autodocs"],component:"mdc-badge",render:or,parameters:{badges:["stable"]},argTypes:{type:{control:"select",options:Object.values(e)},overlay:{control:"boolean"},counter:{if:{arg:"type",eq:e.COUNTER},control:"number"},"max-counter":{if:{arg:"type",eq:e.COUNTER},control:"select",options:I},"icon-name":{if:{arg:"type",eq:e.ICON},control:"text"},variant:{if:{arg:"type",eq:e.ICON},control:"select",options:Object.values(m),table:{defaultValue:{summary:t.VARIANT}}},"aria-label":{control:"text"},...J,...K}},p={args:{type:t.TYPE,"icon-name":"error-legacy-filled",variant:t.VARIANT,counter:1,"max-counter":I[1],overlay:!1}},b={args:{type:e.ICON,"icon-name":"accessibility-regular",variant:m.PRIMARY,overlay:!1}},y={args:{type:e.COUNTER,counter:10,"max-counter":I[1],overlay:!1}},N={args:{type:e.SUCCESS,overlay:!1}},v={args:{type:e.WARNING,overlay:!1}},T={args:{type:e.ERROR,overlay:!1}};var f,O,S;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: DEFAULTS.TYPE,
    'icon-name': 'error-legacy-filled',
    variant: DEFAULTS.VARIANT,
    counter: 1,
    'max-counter': MAX_COUNTER_LIST[1],
    overlay: false
  }
}`,...(S=(O=p.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var h,k,M;b.parameters={...b.parameters,docs:{...(h=b.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: BADGE_TYPE.ICON,
    'icon-name': 'accessibility-regular',
    variant: ICON_VARIANT.PRIMARY,
    overlay: false
  }
}`,...(M=(k=b.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var U,x,L;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    type: BADGE_TYPE.COUNTER,
    counter: 10,
    'max-counter': MAX_COUNTER_LIST[1],
    overlay: false
  }
}`,...(L=(x=y.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var D,B,$;N.parameters={...N.parameters,docs:{...(D=N.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    type: BADGE_TYPE.SUCCESS,
    overlay: false
  }
}`,...($=(B=N.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var G,Y,P;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    type: BADGE_TYPE.WARNING,
    overlay: false
  }
}`,...(P=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:P.source}}};var w,V,W;T.parameters={...T.parameters,docs:{...(w=T.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    type: BADGE_TYPE.ERROR,
    overlay: false
  }
}`,...(W=(V=T.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const yr=["Dot","Icon","Counter","Success","Warning","Error"];export{y as Counter,p as Dot,T as Error,b as Icon,N as Success,v as Warning,yr as __namedExportsOrder,br as default};
