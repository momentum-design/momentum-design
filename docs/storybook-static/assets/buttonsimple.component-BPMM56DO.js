import{i as m,k as f}from"./lit-element-CHllvULs.js";import{u as p,n as o,C as b}from"./index-HW6KrQZO.js";import{D as v}from"./DisabledMixin-DBt9didn.js";import{h as g,a as z}from"./index-BGjwsboe.js";const C=p.constructTagName("buttonsimple"),y={20:20,24:24,28:28,32:32,40:40,48:48,52:52,64:64,72:72,88:88,124:124},c={BUTTON:"button",SUBMIT:"submit",RESET:"reset"},l={SIZE:y[32],TYPE:c.BUTTON,ROLE:"button"};var E=Object.defineProperty,T=(i,t,s,u)=>{for(var e=void 0,r=i.length-1,a;r>=0;r--)(a=i[r])&&(e=a(t,s,e)||e);return e&&E(t,s,e),e};const x=i=>{class t extends i{constructor(){super(...arguments),this.tabIndex=0}}return T([o({reflect:!0,type:Number})],t.prototype,"tabIndex"),t},k=[g,m`
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
`,...z()];var S=Object.defineProperty,n=(i,t,s,u)=>{for(var e=void 0,r=i.length-1,a;r>=0;r--)(a=i[r])&&(e=a(t,s,e)||e);return e&&S(t,s,e),e};const d=class d extends x(v(b)){constructor(){super(),this.active=!1,this.softDisabled=!1,this.size=l.SIZE,this.role=l.ROLE,this.type=l.TYPE,this.prevTabindex=0,this.internals=this.attachInternals(),this.addEventListener("click",this.executeAction.bind(this)),this.addEventListener("keydown",this.handleKeyDown.bind(this)),this.addEventListener("keyup",this.handleKeyUp.bind(this)),this.addEventListener("blur",this.handleBlur.bind(this))}get form(){return this.internals.form}update(t){super.update(t),t.has("disabled")&&this.setDisabled(this,this.disabled),t.has("softDisabled")&&this.setSoftDisabled(this,this.softDisabled),t.has("active")&&this.setActive(this,this.active)}executeAction(){this.type===c.SUBMIT&&this.form&&this.form.requestSubmit(),this.type===c.RESET&&this.form&&this.form.reset()}setActive(t,s){s?t.setAttribute("aria-pressed","true"):t.removeAttribute("aria-pressed")}setSoftDisabled(t,s){s?t.setAttribute("aria-disabled","true"):t.removeAttribute("aria-disabled")}setDisabled(t,s){s?(t.setAttribute("aria-disabled","true"),this.prevTabindex=this.tabIndex,this.tabIndex=-1):(this.tabIndex===-1&&(this.tabIndex=this.prevTabindex),t.removeAttribute("aria-disabled"))}triggerClickEvent(){const t=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});this.dispatchEvent(t)}handleBlur(){this.classList.contains("pressed")&&this.classList.remove("pressed")}handleKeyDown(t){["Enter"," "].includes(t.key)&&(this.classList.add("pressed"),t.key==="Enter"&&this.triggerClickEvent())}handleKeyUp(t){["Enter"," "].includes(t.key)&&(this.classList.remove("pressed"),t.key===" "&&this.triggerClickEvent())}render(){return f`
      <slot></slot>
    `}};d.formAssociated=!0,d.styles=[...b.styles,...k];let h=d;n([o({type:Boolean,reflect:!0})],h.prototype,"active");n([o({type:Boolean,attribute:"soft-disabled"})],h.prototype,"softDisabled");n([o({type:Number,reflect:!0})],h.prototype,"size");n([o({type:String,reflect:!0})],h.prototype,"role");n([o({reflect:!0})],h.prototype,"type");export{c as B,l as D,C as T,h as a,y as b,x as c};
