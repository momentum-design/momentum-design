import{i as K,k as l}from"./lit-element-CHllvULs.js";import{R as E}from"./class-map-DVSk4OQh.js";import{u as Q,C as _,n}from"./index-HW6KrQZO.js";import{t as rr}from"./if-defined-C4tJgJ33.js";import{T as er,V as or}from"./text.constants-DJu2q-6E.js";import{h as ar}from"./index-MYSkQ1zX.js";import"./index-BUvIMixM.js";import"./index-BGkqZMsC.js";import{c as cr,s as tr}from"./commonArgTypes-BluK8w5L.js";import{d as nr}from"./utils-D1SE5bce.js";import"./directive-Ctav8iJK.js";import"./state-CWckTc1X.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-CvArfi6w.js";import"./create-context-89xeped_.js";const dr=Q.constructTagName("badge"),r={DOT:"dot",ICON:"icon",COUNTER:"counter",SUCCESS:"success",WARNING:"warning",ERROR:"error"},C={SUCCESS_ICON_NAME:"check-circle-badge-filled",WARNING_ICON_NAME:"warning-badge-filled",ERROR_ICON_NAME:"error-legacy-badge-filled"},N={PRIMARY:"primary",SECONDARY:"secondary"},f={SUCCESS:"success",WARNING:"warning",ERROR:"error"},c={TYPE:r.DOT,MAX_COUNTER:99,MAX_COUNTER_LIMIT:999,VARIANT:N.PRIMARY,ICON_SIZE:1},sr=[ar,K`
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
  `];var lr=Object.defineProperty,d=(e,o,a,A)=>{for(var s=void 0,R=e.length-1,O;R>=0;R--)(O=e[R])&&(s=O(o,a,s)||s);return s&&lr(o,a,s),s};const I=class I extends _{constructor(){super(...arguments),this.variant=c.VARIANT,this.maxCounter=c.MAX_COUNTER,this.overlay=!1,this.ariaLabel=null}getCounterText(o,a){return a===void 0||typeof a!="number"||o===0?"":a>o?`${o}+`:o>c.MAX_COUNTER_LIMIT||a>c.MAX_COUNTER_LIMIT?`${c.MAX_COUNTER_LIMIT}+`:a.toString()}getBadgeIcon(o,a){return l`
      <mdc-icon
        class="mdc-badge-icon ${E({"mdc-badge-overlay":this.overlay,[`mdc-badge-icon__${a}`]:!0})}"
        name="${rr(o)}"
        size="${c.ICON_SIZE}"
      ></mdc-icon>
    `}getBadgeDot(){return l`<div class="mdc-badge-dot ${E({"mdc-badge-overlay":this.overlay})}"></div>`}getBadgeCounterText(){return l`
      <mdc-text
        type="${er.BODY_SMALL_MEDIUM}"
        tagname="${or.DIV}"
        class="mdc-badge-text ${E({"mdc-badge-overlay":this.overlay})}"
      >
        ${this.getCounterText(this.maxCounter,this.counter)}
      </mdc-text>
    `}setRoleByAriaLabel(){this.ariaLabel?this.role="img":this.role=null}getBadgeContentBasedOnType(){this.variant&&!Object.values(N).includes(this.variant)&&(this.variant=c.VARIANT);const{iconName:o,type:a,variant:A}=this;switch(a){case r.ICON:return this.getBadgeIcon(o||"",A);case r.COUNTER:return this.getBadgeCounterText();case r.SUCCESS:return this.getBadgeIcon(C.SUCCESS_ICON_NAME,f.SUCCESS);case r.WARNING:return this.getBadgeIcon(C.WARNING_ICON_NAME,f.WARNING);case r.ERROR:return this.getBadgeIcon(C.ERROR_ICON_NAME,f.ERROR);case r.DOT:default:return this.type=r.DOT,this.getBadgeDot()}}update(o){super.update(o),o.has("ariaLabel")&&this.setRoleByAriaLabel()}render(){return this.getBadgeContentBasedOnType()}};I.styles=[..._.styles,...sr];let t=I;d([n({type:String,reflect:!0})],t.prototype,"type");d([n({type:String,attribute:"icon-name"})],t.prototype,"iconName");d([n({type:String,reflect:!0})],t.prototype,"variant");d([n({type:Number})],t.prototype,"counter");d([n({type:Number,attribute:"max-counter",reflect:!0})],t.prototype,"maxCounter");d([n({type:Boolean})],t.prototype,"overlay");d([n({type:String,attribute:"aria-label"})],t.prototype,"ariaLabel");t.register(dr);const m=[9,99,999],mr=e=>l`
<mdc-badge
  type="${e.type}"
  icon-name="${e["icon-name"]}"
  counter="${e.counter}"
  max-counter="${e["max-counter"]}"
  variant="${e.variant}"
  ?overlay=${e.overlay}
  aria-label="${e["aria-label"]}"
></mdc-badge>
`,ir=e=>l`
<div style="background-color: var(--mds-color-theme-inverted-background-normal); padding: 5px;">
  <mdc-badge
    type="${e.type}"
    icon-name="${e["icon-name"]}"
    counter="${e.counter}"
    max-counter="${e["max-counter"]}"
    variant="${e.variant}"
    ?overlay=${e.overlay}
    aria-label="${e["aria-label"]}"
  ></mdc-badge>
</div>
`,_r={title:"Components/badge",tags:["autodocs"],component:"mdc-badge",render:mr,parameters:{badges:["stable"]},argTypes:{type:{control:"select",options:Object.values(r)},overlay:{control:"boolean"},counter:{if:{arg:"type",eq:r.COUNTER},control:"number"},"max-counter":{if:{arg:"type",eq:r.COUNTER},control:"select",options:m},"icon-name":{if:{arg:"type",eq:r.ICON},control:"text"},variant:{if:{arg:"type",eq:r.ICON},control:"select",options:Object.values(N)},"aria-label":{control:"text"},...nr(["--mdc-badge-primary-foreground-color","--mdc-badge-primary-background-color","--mdc-badge-secondary-foreground-color","--mdc-badge-secondary-background-color","--mdc-badge-success-foreground-color","--mdc-badge-success-background-color","--mdc-badge-warning-foreground-color","--mdc-badge-warning-background-color","--mdc-badge-error-foreground-color","--mdc-badge-error-background-color","--mdc-badge-overlay-background-color"]),...cr,...tr}},i={args:{type:c.TYPE,"icon-name":"placeholder-bold",variant:c.VARIANT,counter:1,"max-counter":m[1],overlay:!1}},g={args:{type:c.TYPE,"icon-name":"placeholder-bold",variant:c.VARIANT,counter:1,"max-counter":m[1],overlay:!1}},u={args:{type:r.ICON,"icon-name":"placeholder-bold",variant:N.PRIMARY,overlay:!1}},p={args:{type:r.COUNTER,counter:10,"max-counter":m[1],overlay:!1}},b={args:{type:r.SUCCESS,overlay:!1}},y={args:{type:r.WARNING,overlay:!1}},v={args:{type:r.ERROR,overlay:!1}},T={render:ir,args:{type:r.COUNTER,counter:1e3,"max-counter":m[2],overlay:!0}};var S,h,k;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: DEFAULTS.TYPE,
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    counter: 1,
    'max-counter': MAX_COUNTER_LIST[1],
    overlay: false
  }
}`,...(k=(h=i.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var x,U,M;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: DEFAULTS.TYPE,
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    counter: 1,
    'max-counter': MAX_COUNTER_LIST[1],
    overlay: false
  }
}`,...(M=(U=g.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var $,L,Y;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    type: TYPE.ICON,
    'icon-name': 'placeholder-bold',
    variant: ICON_VARIANT.PRIMARY,
    overlay: false
  }
}`,...(Y=(L=u.parameters)==null?void 0:L.docs)==null?void 0:Y.source}}};var D,P,w;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    type: TYPE.COUNTER,
    counter: 10,
    'max-counter': MAX_COUNTER_LIST[1],
    overlay: false
  }
}`,...(w=(P=p.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var B,V,X;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(J=(H=T.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const Sr=["Example","Dot","Icon","Counter","Success","Warning","Error","Overlay"];export{p as Counter,g as Dot,v as Error,i as Example,u as Icon,T as Overlay,b as Success,y as Warning,Sr as __namedExportsOrder,_r as default};
