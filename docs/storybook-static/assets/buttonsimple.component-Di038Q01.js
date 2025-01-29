import{i as m,k as f}from"./lit-element-CHllvULs.js";import{n as o,C as b}from"./index-HW6KrQZO.js";import{h as p,a as v}from"./index-BNZgxKMr.js";import{D as l,B as c}from"./buttonsimple.constants-Biy6Bznc.js";import{D as g}from"./chunk-D5ZWXAHU-Cy56BkwE.js";const z=[p,m`
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
`,...v()];var y=Object.defineProperty,x=(s,t,i,u)=>{for(var e=void 0,r=s.length-1,a;r>=0;r--)(a=s[r])&&(e=a(t,i,e)||e);return e&&y(t,i,e),e};const E=s=>{class t extends s{constructor(){super(...arguments),this.tabIndex=0}}return x([o({reflect:!0,type:Number})],t.prototype,"tabIndex"),t};var k=Object.defineProperty,n=(s,t,i,u)=>{for(var e=void 0,r=s.length-1,a;r>=0;r--)(a=s[r])&&(e=a(t,i,e)||e);return e&&k(t,i,e),e};const d=class d extends E(g(b)){constructor(){super(),this.active=!1,this.softDisabled=!1,this.size=l.SIZE,this.role=l.ROLE,this.type=l.TYPE,this.prevTabindex=0,this.addEventListener("click",this.executeAction.bind(this)),this.addEventListener("keydown",this.handleKeyDown.bind(this)),this.addEventListener("keyup",this.handleKeyUp.bind(this)),this.internals=this.attachInternals()}get form(){return this.internals.form}update(t){super.update(t),t.has("disabled")&&this.setDisabled(this,this.disabled),t.has("softDisabled")&&this.setSoftDisabled(this,this.softDisabled),t.has("active")&&this.setAriaPressed(this,this.active)}executeAction(){this.type===c.SUBMIT&&this.internals.form&&this.internals.form.requestSubmit(),this.type===c.RESET&&this.internals.form&&this.internals.form.reset()}setAriaPressed(t,i){i?t.setAttribute("aria-pressed","true"):t.removeAttribute("aria-pressed")}setSoftDisabled(t,i){i?t.setAttribute("aria-disabled","true"):t.removeAttribute("aria-disabled")}setDisabled(t,i){i?(t.setAttribute("aria-disabled","true"),this.prevTabindex=this.tabIndex,this.tabIndex=-1):(this.tabIndex=this.prevTabindex,t.removeAttribute("aria-disabled"))}triggerClickEvent(){const t=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});this.dispatchEvent(t),this.executeAction()}handleKeyDown(t){["Enter"," "].includes(t.key)&&(this.classList.add("pressed"),t.key==="Enter"&&this.triggerClickEvent())}handleKeyUp(t){["Enter"," "].includes(t.key)&&(this.classList.remove("pressed"),t.key===" "&&this.triggerClickEvent())}render(){return f`
      <slot></slot>
    `}};d.formAssociated=!0,d.styles=[...b.styles,...z];let h=d;n([o({type:Boolean})],h.prototype,"active");n([o({type:Boolean,attribute:"soft-disabled"})],h.prototype,"softDisabled");n([o({type:Number,reflect:!0})],h.prototype,"size");n([o({type:String,reflect:!0})],h.prototype,"role");n([o({reflect:!0})],h.prototype,"type");export{h as B};
