import{i as K,k as l}from"./lit-element-CHllvULs.js";import{R as E}from"./class-map-DVSk4OQh.js";import{u as Q,C as _,n}from"./index-HW6KrQZO.js";import{t as ee}from"./if-defined-C4tJgJ33.js";import{T as re,V as oe}from"./text.constants-DJu2q-6E.js";import{h as ae}from"./index-BNZgxKMr.js";import"./index-BOBIh5Rr.js";import"./index-BGkqZMsC.js";import{c as te,s as ce}from"./commonArgTypes-BluK8w5L.js";import"./directive-Ctav8iJK.js";import"./state-CWckTc1X.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-CWYw8J7d.js";import"./create-context-89xeped_.js";const ne=Q.constructTagName("badge"),e={DOT:"dot",ICON:"icon",COUNTER:"counter",SUCCESS:"success",WARNING:"warning",ERROR:"error"},C={SUCCESS_ICON_NAME:"check-circle-badge-filled",WARNING_ICON_NAME:"warning-badge-filled",ERROR_ICON_NAME:"error-legacy-badge-filled"},N={PRIMARY:"primary",SECONDARY:"secondary"},I={SUCCESS:"success",WARNING:"warning",ERROR:"error"},t={TYPE:e.DOT,MAX_COUNTER:99,MAX_COUNTER_LIMIT:999,VARIANT:N.PRIMARY,ICON_SIZE:1},se=[ae,K`
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
  `];var de=Object.defineProperty,s=(r,o,a,O)=>{for(var d=void 0,R=r.length-1,f;R>=0;R--)(f=r[R])&&(d=f(o,a,d)||d);return d&&de(o,a,d),d};const A=class A extends _{constructor(){super(...arguments),this.variant=t.VARIANT,this.maxCounter=t.MAX_COUNTER,this.overlay=!1,this.ariaLabel=null}getCounterText(o,a){return a===void 0||typeof a!="number"||o===0?"":a>o?`${o}+`:o>t.MAX_COUNTER_LIMIT||a>t.MAX_COUNTER_LIMIT?`${t.MAX_COUNTER_LIMIT}+`:a.toString()}getBadgeIcon(o,a){return l`
      <mdc-icon
        class="mdc-badge-icon ${E({"mdc-badge-overlay":this.overlay,[`mdc-badge-icon__${a}`]:!0})}"
        name="${ee(o)}"
        size="${t.ICON_SIZE}"
      ></mdc-icon>
    `}getBadgeDot(){return l`<div class="mdc-badge-dot ${E({"mdc-badge-overlay":this.overlay})}"></div>`}getBadgeCounterText(){return l`
      <mdc-text
        type="${re.BODY_SMALL_MEDIUM}"
        tagname="${oe.DIV}"
        class="mdc-badge-text ${E({"mdc-badge-overlay":this.overlay})}"
      >
        ${this.getCounterText(this.maxCounter,this.counter)}
      </mdc-text>
    `}setRoleByAriaLabel(){this.ariaLabel?this.role="img":this.role=null}getBadgeContentBasedOnType(){this.variant&&!Object.values(N).includes(this.variant)&&(this.variant=t.VARIANT);const{iconName:o,type:a,variant:O}=this;switch(a){case e.ICON:return this.getBadgeIcon(o||"",O);case e.COUNTER:return this.getBadgeCounterText();case e.SUCCESS:return this.getBadgeIcon(C.SUCCESS_ICON_NAME,I.SUCCESS);case e.WARNING:return this.getBadgeIcon(C.WARNING_ICON_NAME,I.WARNING);case e.ERROR:return this.getBadgeIcon(C.ERROR_ICON_NAME,I.ERROR);case e.DOT:default:return this.type=e.DOT,this.getBadgeDot()}}update(o){super.update(o),o.has("ariaLabel")&&this.setRoleByAriaLabel()}render(){return this.getBadgeContentBasedOnType()}};A.styles=[..._.styles,...se];let c=A;s([n({type:String,reflect:!0})],c.prototype,"type");s([n({type:String,attribute:"icon-name"})],c.prototype,"iconName");s([n({type:String,reflect:!0})],c.prototype,"variant");s([n({type:Number})],c.prototype,"counter");s([n({type:Number,attribute:"max-counter",reflect:!0})],c.prototype,"maxCounter");s([n({type:Boolean})],c.prototype,"overlay");s([n({type:String,attribute:"aria-label"})],c.prototype,"ariaLabel");c.register(ne);const m=[9,99,999],le=r=>l`
<mdc-badge
  type="${r.type}"
  icon-name="${r["icon-name"]}"
  counter="${r.counter}"
  max-counter="${r["max-counter"]}"
  variant="${r.variant}"
  ?overlay=${r.overlay}
  aria-label="${r["aria-label"]}"
></mdc-badge>
`,me=r=>l`
<div style="background-color: var(--mds-color-theme-inverted-background-normal); padding: 5px;">
  <mdc-badge
    type="${r.type}"
    icon-name="${r["icon-name"]}"
    counter="${r.counter}"
    max-counter="${r["max-counter"]}"
    variant="${r.variant}"
    ?overlay=${r.overlay}
    aria-label="${r["aria-label"]}"
  ></mdc-badge>
</div>
`,Oe={title:"Components/badge",tags:["autodocs"],component:"mdc-badge",render:le,parameters:{badges:["stable"]},argTypes:{type:{control:"select",options:Object.values(e)},overlay:{control:"boolean"},counter:{if:{arg:"type",eq:e.COUNTER},control:"number"},"max-counter":{if:{arg:"type",eq:e.COUNTER},control:"select",options:m},"icon-name":{if:{arg:"type",eq:e.ICON},control:"text"},variant:{if:{arg:"type",eq:e.ICON},control:"select",options:Object.values(N)},"aria-label":{control:"text"},...te,...ce}},i={args:{type:t.TYPE,"icon-name":"placeholder-bold",variant:t.VARIANT,counter:1,"max-counter":m[1],overlay:!1}},g={args:{type:t.TYPE,"icon-name":"placeholder-bold",variant:t.VARIANT,counter:1,"max-counter":m[1],overlay:!1}},u={args:{type:e.ICON,"icon-name":"placeholder-bold",variant:N.PRIMARY,overlay:!1}},p={args:{type:e.COUNTER,counter:10,"max-counter":m[1],overlay:!1}},b={args:{type:e.SUCCESS,overlay:!1}},y={args:{type:e.WARNING,overlay:!1}},v={args:{type:e.ERROR,overlay:!1}},T={render:me,args:{type:e.COUNTER,counter:1e3,"max-counter":m[2],overlay:!0}};var S,h,x;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: DEFAULTS.TYPE,
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    counter: 1,
    'max-counter': MAX_COUNTER_LIST[1],
    overlay: false
  }
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var U,k,M;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    type: DEFAULTS.TYPE,
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    counter: 1,
    'max-counter': MAX_COUNTER_LIST[1],
    overlay: false
  }
}`,...(M=(k=g.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var $,L,Y;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    type: TYPE.ICON,
    'icon-name': 'placeholder-bold',
    variant: ICON_VARIANT.PRIMARY,
    overlay: false
  }
}`,...(Y=(L=u.parameters)==null?void 0:L.docs)==null?void 0:Y.source}}};var D,P,B;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    type: TYPE.COUNTER,
    counter: 10,
    'max-counter': MAX_COUNTER_LIST[1],
    overlay: false
  }
}`,...(B=(P=p.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var w,V,X;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    type: TYPE.SUCCESS,
    overlay: false
  }
}`,...(X=(V=b.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var G,W,F;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    type: TYPE.WARNING,
    overlay: false
  }
}`,...(F=(W=y.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var j,q,Z;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    type: TYPE.ERROR,
    overlay: false
  }
}`,...(Z=(q=v.parameters)==null?void 0:q.docs)==null?void 0:Z.source}}};var z,H,J;T.parameters={...T.parameters,docs:{...(z=T.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: renderOverlay,
  args: {
    type: TYPE.COUNTER,
    counter: 1000,
    'max-counter': MAX_COUNTER_LIST[2],
    overlay: true
  }
}`,...(J=(H=T.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const fe=["Example","Dot","Icon","Counter","Success","Warning","Error","Overlay"];export{p as Counter,g as Dot,v as Error,i as Example,u as Icon,T as Overlay,b as Success,y as Warning,fe as __namedExportsOrder,Oe as default};
