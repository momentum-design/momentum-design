import{i as A,k as x}from"./lit-element-CHllvULs.js";import{n as h,C as v}from"./index-HW6KrQZO.js";import{h as R,a as S}from"./index-BW6Y21yA.js";import{D as u,a as y,T as I}from"./buttonsimple.constants-5FOanXlE.js";import{v as T}from"./v4-CQkTLCs1.js";const w=[R,A`
  :host {
    border: 0.0625rem solid transparent;
    cursor: pointer;
    
    background-color: var(--mds-color-theme-text-primary-normal); 
    color: var(--mds-color-theme-inverted-text-secondary-normal);
    font-size: var(--mds-font-apps-body-midsize-regular-font-size);
    outline: none;

    --mdc-button-height-size-124: 7.75rem;
    --mdc-button-height-size-88: 5.5rem;
    --mdc-button-height-size-72: 4.5rem;
    --mdc-button-height-size-64: 4rem;
    --mdc-button-height-size-52: 3.25rem;
    --mdc-button-height-size-40: 2.5rem;
    --mdc-button-height-size-32: 2rem;
    --mdc-button-height-size-28: 1.75rem;
    --mdc-button-height-size-24: 1.5rem;
    --mdc-button-height-size-20: 1.25rem;
  }
  
  :host([disabled]), :host([soft-disabled]){
    background-color: var(--mds-color-theme-text-primary-disabled);
  }
  :host([size="124"]){
    height: var(--mdc-button-height-size-124);
  }
  :host([size="88"]){
    height: var(--mdc-button-height-size-88);
  }
  :host([size="72"]){
    height: var(--mdc-button-height-size-72);
  }
  :host([size="64"]){
    height: var(--mdc-button-height-size-64);
  }
  :host([size="52"]){
    height: var(--mdc-button-height-size-52);
  }
  :host([size="40"]){
    height: var(--mdc-button-height-size-40);
  }
  :host([size="32"]){
    height: var(--mdc-button-height-size-32);
  }
  :host([size="28"]){
    height: var(--mdc-button-height-size-28);
    font-size: var(--mds-font-size-body-midsize);
  }
  :host([size="24"]){
    height: var(--mdc-button-height-size-24);
  }
  :host([size="20"]){
    height: var(--mdc-button-height-size-20);
  }
`,...S()];var P=Object.defineProperty,k=(i,t,e,o)=>{for(var s=void 0,r=i.length-1,n;r>=0;r--)(n=i[r])&&(s=n(t,e,s)||s);return s&&P(t,e,s),s};const C=i=>{class t extends i{constructor(){super(...arguments),this.disabled=!1}}return k([h({reflect:!0,type:Boolean})],t.prototype,"disabled"),t};var j=Object.defineProperty,L=(i,t,e,o)=>{for(var s=void 0,r=i.length-1,n;r>=0;r--)(n=i[r])&&(s=n(t,e,s)||s);return s&&j(t,e,s),s};const M=i=>{class t extends i{constructor(){super(...arguments),this.tabIndex=0}}return L([h({reflect:!0,type:Number})],t.prototype,"tabIndex"),t};var B=Object.defineProperty,c=(i,t,e,o)=>{for(var s=void 0,r=i.length-1,n;r>=0;r--)(n=i[r])&&(s=n(t,e,s)||s);return s&&B(t,e,s),s};const l=class l extends M(C(v)){constructor(){super(),this.active=!1,this.softDisabled=!1,this.size=u.SIZE,this.role=u.ROLE,this.type=u.TYPE,this.prevTabindex=0,this.addEventListener("click",this.executeAction.bind(this)),this.addEventListener("keydown",this.handleKeyDown.bind(this)),this.addEventListener("keyup",this.handleKeyUp.bind(this)),this.internals=this.attachInternals()}get form(){return this.internals.form}update(t){super.update(t),t.has("disabled")&&this.setDisabled(this,this.disabled),t.has("softDisabled")&&this.setSoftDisabled(this,this.softDisabled),t.has("active")&&this.setAriaPressed(this,this.active)}executeAction(){this.type===y.SUBMIT&&this.internals.form&&this.internals.form.requestSubmit(),this.type===y.RESET&&this.internals.form&&this.internals.form.reset()}setAriaPressed(t,e){e?t.setAttribute("aria-pressed","true"):t.setAttribute("aria-pressed","false")}setSoftDisabled(t,e){e?t.setAttribute("aria-disabled","true"):t.setAttribute("aria-disabled","false")}setDisabled(t,e){e?(t.setAttribute("aria-disabled","true"),this.prevTabindex=this.tabIndex,this.tabIndex=-1):(this.tabIndex=this.prevTabindex,t.removeAttribute("aria-disabled"))}triggerClickEvent(){const t=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});this.dispatchEvent(t),this.executeAction()}handleKeyDown(t){["Enter"," "].includes(t.key)&&(this.classList.add("pressed"),t.key==="Enter"&&this.triggerClickEvent())}handleKeyUp(t){["Enter"," "].includes(t.key)&&(this.classList.remove("pressed"),t.key===" "&&this.triggerClickEvent())}render(){return x`
      <slot></slot>
    `}};l.formAssociated=!0,l.styles=[...v.styles,...w];let a=l;c([h({type:Boolean})],a.prototype,"active");c([h({type:Boolean,attribute:"soft-disabled"})],a.prototype,"softDisabled");c([h({type:Number,reflect:!0})],a.prototype,"size");c([h({type:String,reflect:!0})],a.prototype,"role");c([h({reflect:!0})],a.prototype,"type");a.register(I);const{addons:K}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:U}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:_}=__STORYBOOK_MODULE_GLOBAL__;var V="storybook/actions",N=`${V}/action-event`,Y={depth:10,clearOnStoryChange:!0,limit:50},E=(i,t)=>{let e=Object.getPrototypeOf(i);return!e||t(e)?e:E(e,t)},F=i=>!!(typeof i=="object"&&i&&E(i,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof i.persist=="function"),$=i=>{if(F(i)){let t=Object.create(i.constructor.prototype,Object.getOwnPropertyDescriptors(i));t.persist();let e=Object.getOwnPropertyDescriptor(t,"view"),o=e==null?void 0:e.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...e,value:Object.create(o.constructor.prototype)}),t}return i},W=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?T():Date.now().toString(36)+Math.random().toString(36).substring(2);function Q(i,t={}){let e={...Y,...t},o=function(...s){var b,f;if(t.implicit){let m=(b="__STORYBOOK_PREVIEW__"in _?_.__STORYBOOK_PREVIEW__:void 0)==null?void 0:b.storyRenders.find(d=>d.phase==="playing"||d.phase==="rendering");if(m){let d=!((f=window==null?void 0:window.FEATURES)!=null&&f.disallowImplicitActionsInRenderV8),g=new U({phase:m.phase,name:i,deprecated:d});if(d)console.warn(g);else throw g}}let r=K.getChannel(),n=W(),z=5,p=s.map($),O=s.length>1?p:p[0],D={id:n,count:0,data:{name:i,args:O},options:{...e,maxDepth:z+(e.depth||3),allowFunction:e.allowFunction||!1}};r.emit(N,D)};return o.isAction=!0,o.implicit=t.implicit,o}export{a as B,Q as a};
