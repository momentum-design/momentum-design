import{i as u,k as m}from"./lit-element-D5KKan5q.js";import{u as f,C as c,n as r}from"./index-C9z9WAEj.js";import{D as p}from"./DisabledMixin-BZruwOeC.js";import{T as v}from"./TabIndexMixin-CsrHswKP.js";import{a as g,h as z}from"./index-MA1r3zrt.js";const L=f.constructTagName("buttonsimple"),y={20:20,24:24,28:28,32:32,40:40,48:48,52:52,64:64,72:72,88:88,124:124},n={BUTTON:"button",SUBMIT:"submit",RESET:"reset"},d={SIZE:y[32],TYPE:n.BUTTON,ROLE:"button"},E=[g,u`
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
`,...z()];var T=Object.defineProperty,h=(l,t,e,k)=>{for(var i=void 0,a=l.length-1,b;a>=0;a--)(b=l[a])&&(i=b(t,e,i)||i);return i&&T(t,e,i),i};const o=class o extends v(p(c)){constructor(){super(),this.active=!1,this.softDisabled=!1,this.size=d.SIZE,this.role=d.ROLE,this.type=d.TYPE,this.prevTabindex=0,this.internals=this.attachInternals(),this.addEventListener("click",this.executeAction.bind(this)),this.addEventListener("keydown",this.handleKeyDown.bind(this)),this.addEventListener("keyup",this.handleKeyUp.bind(this)),this.addEventListener("blur",this.handleBlur.bind(this))}get form(){return this.internals.form}update(t){super.update(t),t.has("disabled")&&this.setDisabled(this,this.disabled),t.has("softDisabled")&&this.setSoftDisabled(this,this.softDisabled),t.has("active")&&this.setActive(this,this.active)}executeAction(){this.type===n.SUBMIT&&this.form&&this.form.requestSubmit(),this.type===n.RESET&&this.form&&this.form.reset()}setActive(t,e){e?t.setAttribute("aria-pressed","true"):t.removeAttribute("aria-pressed")}setSoftDisabled(t,e){e?t.setAttribute("aria-disabled","true"):t.removeAttribute("aria-disabled")}setDisabled(t,e){e?(t.setAttribute("aria-disabled","true"),this.prevTabindex=this.tabIndex,this.tabIndex=-1):(this.tabIndex===-1&&(this.tabIndex=this.prevTabindex),t.removeAttribute("aria-disabled"))}triggerClickEvent(){const t=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});this.dispatchEvent(t)}handleBlur(){this.classList.contains("pressed")&&this.classList.remove("pressed")}handleKeyDown(t){["Enter"," "].includes(t.key)&&(this.classList.add("pressed"),t.key==="Enter"&&this.triggerClickEvent(),t.key===" "&&t.preventDefault())}handleKeyUp(t){["Enter"," "].includes(t.key)&&(this.classList.remove("pressed"),t.key===" "&&this.triggerClickEvent())}render(){return m`
      <slot></slot>
    `}};o.formAssociated=!0,o.styles=[...c.styles,...E];let s=o;h([r({type:Boolean,reflect:!0})],s.prototype,"active");h([r({type:Boolean,attribute:"soft-disabled"})],s.prototype,"softDisabled");h([r({type:Number,reflect:!0})],s.prototype,"size");h([r({type:String,reflect:!0})],s.prototype,"role");h([r({reflect:!0})],s.prototype,"type");export{n as B,d as D,L as T,s as a,y as b};
