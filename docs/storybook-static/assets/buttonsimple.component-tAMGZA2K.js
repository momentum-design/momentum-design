import{n as r,W as p,U as m,X as y,D as l,c as b,k as v,F as f}from"./iframe-E1lunX_E.js";import{T as E,K as d}from"./TabIndexMixin-EvA1cca2.js";import{D as g}from"./DisabledMixin-DutBLYdm.js";var S=Object.defineProperty,A=(a,t,s,u)=>{for(var e=void 0,n=a.length-1,h;n>=0;n--)(h=a[n])&&(e=h(t,s,e)||e);return e&&S(t,s,e),e};const x=a=>{class t extends a{constructor(){super(...arguments),this.elementToAutoFocus=null,this.autoFocusOnMount=!1}async firstUpdated(u){super.firstUpdated(u),this.autoFocusOnMount&&(await this.updateComplete,(this.elementToAutoFocus||this).focus())}}return A([r({type:Boolean,reflect:!0,attribute:"auto-focus-on-mount"})],t.prototype,"autoFocusOnMount"),t},T=[p,m`
    :host {
      --mdc-button-height: unset;
      --mdc-button-background: transparent;
      --mdc-button-border-color: transparent;
      --mdc-button-text-color: unset;

      border: 0.0625rem solid var(--mdc-button-border-color);
      cursor: pointer;
      user-select: none;

      background-color: var(--mdc-button-background);
      color: var(--mdc-button-text-color);
      font-size: var(--mds-font-apps-body-midsize-regular-font-size);
      height: var(--mdc-button-height);
      outline: none;
    }

    :host([disabled]),
    :host([soft-disabled]) {
      --mdc-button-background: var(--mds-color-theme-text-primary-disabled);
    }
    :host([size='124']) {
      --mdc-button-height: 7.75rem;
    }
    :host([size='88']) {
      --mdc-button-height: 5.5rem;
    }
    :host([size='72']) {
      --mdc-button-height: 4.5rem;
    }
    :host([size='64']) {
      --mdc-button-height: 4rem;
    }
    :host([size='52']) {
      --mdc-button-height: 3.25rem;
    }
    :host([size='40']) {
      --mdc-button-height: 2.5rem;
    }
    :host([size='32']) {
      --mdc-button-height: 2rem;
    }
    :host([size='28']) {
      --mdc-button-height: 1.75rem;
      font-size: var(--mds-font-size-body-midsize);
    }
    :host([size='24']) {
      --mdc-button-height: 1.5rem;
    }
    :host([size='20']) {
      --mdc-button-height: 1.25rem;
    }
  `,...y()];var z=Object.defineProperty,o=(a,t,s,u)=>{for(var e=void 0,n=a.length-1,h;n>=0;n--)(h=a[n])&&(e=h(t,s,e)||e);return e&&z(t,s,e),e};const c=class c extends x(E(g(f))){constructor(){super(),this.size=l.SIZE,this.role=l.ROLE,this.type=l.TYPE,this.prevTabindex=0,this.internals=this.attachInternals(),this.addEventListener("click",this.executeAction.bind(this)),this.addEventListener("keydown",this.handleKeyDown.bind(this)),this.addEventListener("keyup",this.handleKeyUp.bind(this)),this.addEventListener("blur",this.handleBlur.bind(this))}get form(){return this.internals.form}update(t){super.update(t),t.has("disabled")&&this.setDisabled(this,this.disabled),t.has("softDisabled")&&this.setSoftDisabled(this,this.softDisabled),t.has("active")&&(this.active!==void 0&&(this.ariaStateKey=this.ariaStateKey||l.ARIA_STATE_KEY),this.setActive(this,this.active))}executeAction(){this.type===b.SUBMIT&&this.form&&this.form.requestSubmit(),this.type===b.RESET&&this.form&&this.form.reset()}setActive(t,s){this.ariaStateKey&&this.ariaStateKey.split(",").filter(e=>e.trim().startsWith("aria-")).forEach(e=>{s===!0?t.setAttribute(e.trim(),"true"):s===!1?t.setAttribute(e.trim(),"false"):t.removeAttribute(e.trim())})}setSoftDisabled(t,s){s?t.setAttribute("aria-disabled","true"):t.removeAttribute("aria-disabled")}setDisabled(t,s){s?(t.setAttribute("aria-disabled","true"),this.prevTabindex=this.tabIndex,this.tabIndex=-1):(this.tabIndex===-1&&(this.tabIndex=this.prevTabindex),t.removeAttribute("aria-disabled"))}triggerClickEvent(){const t=new MouseEvent("click",{bubbles:!0,cancelable:!0,composed:!0,view:window});this.dispatchEvent(t)}handleBlur(){this.classList.contains("pressed")&&this.classList.remove("pressed")}handleKeyDown(t){[d.ENTER,d.SPACE].includes(t.key)&&(this.classList.add("pressed"),t.key===d.ENTER&&this.triggerClickEvent(),t.preventDefault())}handleKeyUp(t){[d.ENTER,d.SPACE].includes(t.key)&&(this.classList.remove("pressed"),t.key===d.SPACE&&this.triggerClickEvent())}render(){return v` <slot></slot> `}};c.formAssociated=!0,c.styles=[...f.styles,...T];let i=c;o([r({type:Boolean,reflect:!0})],i.prototype,"active");o([r({type:Boolean,attribute:"soft-disabled",reflect:!0})],i.prototype,"softDisabled");o([r({type:Number,reflect:!0})],i.prototype,"size");o([r({type:String,reflect:!0})],i.prototype,"role");o([r({type:String,reflect:!0})],i.prototype,"ariaStateKey");o([r({reflect:!0})],i.prototype,"type");o([r({type:String,reflect:!0})],i.prototype,"name");o([r({type:String,reflect:!0})],i.prototype,"value");export{x as A,i as B};
