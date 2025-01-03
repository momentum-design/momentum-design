import{i as u,k as m}from"./lit-element-CHllvULs.js";import{C as b,n as i}from"./index-HW6KrQZO.js";import{h as f,a as p}from"./index-CcvxQn6k.js";import{D as d,a as c,T as g}from"./buttonsimple.constants-5FOanXlE.js";const v=[f,u`
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
`,p];var z=Object.defineProperty,r=(n,t,s,y)=>{for(var h=void 0,a=n.length-1,l;a>=0;a--)(l=n[a])&&(h=l(t,s,h)||h);return h&&z(t,s,h),h};const o=class o extends b{constructor(){super(),this.active=!1,this.disabled=!1,this.softDisabled=!1,this.size=d.SIZE,this.tabIndex=0,this.role=d.ROLE,this.type=d.TYPE,this.prevTabindex=0,this.addEventListener("click",this.executeAction.bind(this)),this.addEventListener("keydown",this.handleKeyDown.bind(this)),this.addEventListener("keyup",this.handleKeyUp.bind(this)),this.internals=this.attachInternals()}get form(){return this.internals.form}update(t){super.update(t),t.has("disabled")&&this.setDisabled(this,this.disabled),t.has("softDisabled")&&this.setSoftDisabled(this,this.softDisabled),t.has("active")&&this.setAriaPressed(this,this.active)}executeAction(){this.type===c.SUBMIT&&this.internals.form&&this.internals.form.requestSubmit(),this.type===c.RESET&&this.internals.form&&this.internals.form.reset()}setAriaPressed(t,s){s?t.setAttribute("aria-pressed","true"):t.setAttribute("aria-pressed","false")}setSoftDisabled(t,s){s?t.setAttribute("aria-disabled","true"):t.setAttribute("aria-disabled","false")}setDisabled(t,s){s?(t.setAttribute("aria-disabled","true"),this.prevTabindex=this.tabIndex,this.tabIndex=-1):(this.tabIndex=this.prevTabindex,t.removeAttribute("aria-disabled"))}triggerClickEvent(){const t=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});this.dispatchEvent(t),this.executeAction()}handleKeyDown(t){["Enter"," "].includes(t.key)&&(this.classList.add("pressed"),t.key==="Enter"&&this.triggerClickEvent())}handleKeyUp(t){["Enter"," "].includes(t.key)&&(this.classList.remove("pressed"),t.key===" "&&this.triggerClickEvent())}render(){return m`
      <slot></slot>
    `}};o.formAssociated=!0,o.styles=[...b.styles,...v];let e=o;r([i({type:Boolean})],e.prototype,"active");r([i({type:Boolean})],e.prototype,"disabled");r([i({type:Boolean,attribute:"soft-disabled"})],e.prototype,"softDisabled");r([i({type:Number,reflect:!0})],e.prototype,"size");r([i({type:Number,reflect:!0})],e.prototype,"tabIndex");r([i({type:String,reflect:!0})],e.prototype,"role");r([i({reflect:!0})],e.prototype,"type");e.register(g);export{e as B};
