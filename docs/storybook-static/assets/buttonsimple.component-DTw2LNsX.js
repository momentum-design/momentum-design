import{i as f,k as m}from"./lit-element-D5KKan5q.js";import{n as o,C as c}from"./index-C9z9WAEj.js";import{D as p}from"./DisabledMixin-BZruwOeC.js";import{T as v}from"./TabIndexMixin-CsrHswKP.js";import{D as l,B as b}from"./buttonsimple.constants-CGc1uJX6.js";import{a as y,h as g}from"./index-Cx7wvr8C.js";var z=Object.defineProperty,E=(r,t,i,d)=>{for(var e=void 0,a=r.length-1,n;a>=0;a--)(n=r[a])&&(e=n(t,i,e)||e);return e&&z(t,i,e),e};const x=r=>{class t extends r{constructor(){super(...arguments),this.autofocus=!1}firstUpdated(d){super.firstUpdated(d),this.autofocus&&this.focus()}}return E([o({type:Boolean,reflect:!0})],t.prototype,"autofocus"),t},S=[y,f`
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

    :host([disabled]),
    :host([soft-disabled]) {
      background-color: var(--mds-color-theme-text-primary-disabled);
    }
    :host([size='124']) {
      height: var(--mdc-button-height-size-124);
    }
    :host([size='88']) {
      height: var(--mdc-button-height-size-88);
    }
    :host([size='72']) {
      height: var(--mdc-button-height-size-72);
    }
    :host([size='64']) {
      height: var(--mdc-button-height-size-64);
    }
    :host([size='52']) {
      height: var(--mdc-button-height-size-52);
    }
    :host([size='40']) {
      height: var(--mdc-button-height-size-40);
    }
    :host([size='32']) {
      height: var(--mdc-button-height-size-32);
    }
    :host([size='28']) {
      height: var(--mdc-button-height-size-28);
      font-size: var(--mds-font-size-body-midsize);
    }
    :host([size='24']) {
      height: var(--mdc-button-height-size-24);
    }
    :host([size='20']) {
      height: var(--mdc-button-height-size-20);
    }
  `,...g()];var A=Object.defineProperty,h=(r,t,i,d)=>{for(var e=void 0,a=r.length-1,n;a>=0;a--)(n=r[a])&&(e=n(t,i,e)||e);return e&&A(t,i,e),e};const u=class u extends x(v(p(c))){constructor(){super(),this.size=l.SIZE,this.role=l.ROLE,this.type=l.TYPE,this.prevTabindex=0,this.internals=this.attachInternals(),this.addEventListener("click",this.executeAction.bind(this)),this.addEventListener("keydown",this.handleKeyDown.bind(this)),this.addEventListener("keyup",this.handleKeyUp.bind(this)),this.addEventListener("blur",this.handleBlur.bind(this))}get form(){return this.internals.form}update(t){super.update(t),t.has("disabled")&&this.setDisabled(this,this.disabled),t.has("softDisabled")&&this.setSoftDisabled(this,this.softDisabled),t.has("active")&&(this.active!==void 0&&(this.ariaStateKey=this.ariaStateKey||l.ARIA_STATE_KEY),this.setActive(this,this.active))}executeAction(){this.type===b.SUBMIT&&this.form&&this.form.requestSubmit(),this.type===b.RESET&&this.form&&this.form.reset()}setActive(t,i){this.ariaStateKey&&this.ariaStateKey.split(",").filter(e=>e.trim().startsWith("aria-")).forEach(e=>{i===!0?t.setAttribute(e.trim(),"true"):i===!1?t.setAttribute(e.trim(),"false"):t.removeAttribute(e.trim())})}setSoftDisabled(t,i){i?t.setAttribute("aria-disabled","true"):t.removeAttribute("aria-disabled")}setDisabled(t,i){i?(t.setAttribute("aria-disabled","true"),this.prevTabindex=this.tabIndex,this.tabIndex=-1):(this.tabIndex===-1&&(this.tabIndex=this.prevTabindex),t.removeAttribute("aria-disabled"))}triggerClickEvent(){const t=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});this.dispatchEvent(t)}handleBlur(){this.classList.contains("pressed")&&this.classList.remove("pressed")}handleKeyDown(t){["Enter"," "].includes(t.key)&&(this.classList.add("pressed"),t.key==="Enter"&&this.triggerClickEvent(),t.preventDefault())}handleKeyUp(t){["Enter"," "].includes(t.key)&&(this.classList.remove("pressed"),t.key===" "&&this.triggerClickEvent())}render(){return m` <slot></slot> `}};u.formAssociated=!0,u.styles=[...c.styles,...S];let s=u;h([o({type:Boolean,reflect:!0})],s.prototype,"active");h([o({type:Boolean,attribute:"soft-disabled",reflect:!0})],s.prototype,"softDisabled");h([o({type:Number,reflect:!0})],s.prototype,"size");h([o({type:String,reflect:!0})],s.prototype,"role");h([o({type:String,reflect:!0})],s.prototype,"ariaStateKey");h([o({reflect:!0})],s.prototype,"type");export{s as B};
