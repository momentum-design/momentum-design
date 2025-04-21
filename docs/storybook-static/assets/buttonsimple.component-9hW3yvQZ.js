import{i as m,k as f}from"./lit-element-D5KKan5q.js";import{u as p,C as b,n as r}from"./index-C9z9WAEj.js";import{D as v}from"./DisabledMixin-BZruwOeC.js";import{T as g}from"./TabIndexMixin-CsrHswKP.js";import{a as y,h as z}from"./index-MA1r3zrt.js";const K=p.constructTagName("buttonsimple"),E={20:20,24:24,28:28,32:32,40:40,48:48,52:52,64:64,72:72,88:88,124:124},d={BUTTON:"button",SUBMIT:"submit",RESET:"reset"},h={SIZE:E[32],TYPE:d.BUTTON,ROLE:"button",ARIA_STATE_KEY:"aria-pressed"},T=[y,m`
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
`,...z()];var S=Object.defineProperty,a=(l,t,i,u)=>{for(var e=void 0,n=l.length-1,c;n>=0;n--)(c=l[n])&&(e=c(t,i,e)||e);return e&&S(t,i,e),e};const o=class o extends g(v(b)){constructor(){super(),this.size=h.SIZE,this.role=h.ROLE,this.type=h.TYPE,this.prevTabindex=0,this.internals=this.attachInternals(),this.addEventListener("click",this.executeAction.bind(this)),this.addEventListener("keydown",this.handleKeyDown.bind(this)),this.addEventListener("keyup",this.handleKeyUp.bind(this)),this.addEventListener("blur",this.handleBlur.bind(this))}get form(){return this.internals.form}update(t){super.update(t),t.has("disabled")&&this.setDisabled(this,this.disabled),t.has("softDisabled")&&this.setSoftDisabled(this,this.softDisabled),t.has("active")&&(this.active!==void 0&&(this.ariaStateKey=this.ariaStateKey||h.ARIA_STATE_KEY),this.setActive(this,this.active))}executeAction(){this.type===d.SUBMIT&&this.form&&this.form.requestSubmit(),this.type===d.RESET&&this.form&&this.form.reset()}setActive(t,i){this.ariaStateKey&&this.ariaStateKey.split(",").filter(e=>e.trim().startsWith("aria-")).forEach(e=>{i===!0?t.setAttribute(e.trim(),"true"):i===!1?t.setAttribute(e.trim(),"false"):t.removeAttribute(e.trim())})}setSoftDisabled(t,i){i?t.setAttribute("aria-disabled","true"):t.removeAttribute("aria-disabled")}setDisabled(t,i){i?(t.setAttribute("aria-disabled","true"),this.prevTabindex=this.tabIndex,this.tabIndex=-1):(this.tabIndex===-1&&(this.tabIndex=this.prevTabindex),t.removeAttribute("aria-disabled"))}triggerClickEvent(){const t=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});this.dispatchEvent(t)}handleBlur(){this.classList.contains("pressed")&&this.classList.remove("pressed")}handleKeyDown(t){["Enter"," "].includes(t.key)&&(this.classList.add("pressed"),t.key==="Enter"&&this.triggerClickEvent(),t.key===" "&&t.preventDefault())}handleKeyUp(t){["Enter"," "].includes(t.key)&&(this.classList.remove("pressed"),t.key===" "&&this.triggerClickEvent())}render(){return f` <slot></slot> `}};o.formAssociated=!0,o.styles=[...b.styles,...T];let s=o;a([r({type:Boolean,reflect:!0})],s.prototype,"active");a([r({type:Boolean,attribute:"soft-disabled"})],s.prototype,"softDisabled");a([r({type:Number,reflect:!0})],s.prototype,"size");a([r({type:String,reflect:!0})],s.prototype,"role");a([r({type:String,reflect:!0})],s.prototype,"ariaStateKey");a([r({reflect:!0})],s.prototype,"type");export{d as B,h as D,K as T,s as a,E as b};
