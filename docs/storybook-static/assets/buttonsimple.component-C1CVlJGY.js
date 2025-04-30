import{i as u,k as f}from"./lit-element-D5KKan5q.js";import{C as c,n as r}from"./index-C9z9WAEj.js";import{D as p}from"./DisabledMixin-BZruwOeC.js";import{T as v}from"./TabIndexMixin-CsrHswKP.js";import{D as a,B as b}from"./buttonsimple.constants-CGc1uJX6.js";import{h as g,a as y}from"./index-CcXofQbA.js";const z=[g,u`
  :host {
    border: 0.0625rem solid transparent;
    cursor: pointer;
    user-select: none;
    
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
`,...y()];var E=Object.defineProperty,h=(n,t,i,m)=>{for(var e=void 0,d=n.length-1,l;d>=0;d--)(l=n[d])&&(e=l(t,i,e)||e);return e&&E(t,i,e),e};const o=class o extends v(p(c)){constructor(){super(),this.size=a.SIZE,this.role=a.ROLE,this.type=a.TYPE,this.prevTabindex=0,this.internals=this.attachInternals(),this.addEventListener("click",this.executeAction.bind(this)),this.addEventListener("keydown",this.handleKeyDown.bind(this)),this.addEventListener("keyup",this.handleKeyUp.bind(this)),this.addEventListener("blur",this.handleBlur.bind(this))}get form(){return this.internals.form}update(t){super.update(t),t.has("disabled")&&this.setDisabled(this,this.disabled),t.has("softDisabled")&&this.setSoftDisabled(this,this.softDisabled),t.has("active")&&(this.active!==void 0&&(this.ariaStateKey=this.ariaStateKey||a.ARIA_STATE_KEY),this.setActive(this,this.active))}executeAction(){this.type===b.SUBMIT&&this.form&&this.form.requestSubmit(),this.type===b.RESET&&this.form&&this.form.reset()}setActive(t,i){this.ariaStateKey&&this.ariaStateKey.split(",").filter(e=>e.trim().startsWith("aria-")).forEach(e=>{i===!0?t.setAttribute(e.trim(),"true"):i===!1?t.setAttribute(e.trim(),"false"):t.removeAttribute(e.trim())})}setSoftDisabled(t,i){i?t.setAttribute("aria-disabled","true"):t.removeAttribute("aria-disabled")}setDisabled(t,i){i?(t.setAttribute("aria-disabled","true"),this.prevTabindex=this.tabIndex,this.tabIndex=-1):(this.tabIndex===-1&&(this.tabIndex=this.prevTabindex),t.removeAttribute("aria-disabled"))}triggerClickEvent(){const t=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});this.dispatchEvent(t)}handleBlur(){this.classList.contains("pressed")&&this.classList.remove("pressed")}handleKeyDown(t){["Enter"," "].includes(t.key)&&(this.classList.add("pressed"),t.key==="Enter"&&this.triggerClickEvent(),t.preventDefault())}handleKeyUp(t){["Enter"," "].includes(t.key)&&(this.classList.remove("pressed"),t.key===" "&&this.triggerClickEvent())}render(){return f` <slot></slot> `}};o.formAssociated=!0,o.styles=[...c.styles,...z];let s=o;h([r({type:Boolean,reflect:!0})],s.prototype,"active");h([r({type:Boolean,attribute:"soft-disabled",reflect:!0})],s.prototype,"softDisabled");h([r({type:Number,reflect:!0})],s.prototype,"size");h([r({type:String,reflect:!0})],s.prototype,"role");h([r({type:String,reflect:!0})],s.prototype,"ariaStateKey");h([r({reflect:!0})],s.prototype,"type");export{s as B};
