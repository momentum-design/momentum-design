import{n as r,$ as p,X as m,a0 as v,D as c,c as b,k as y,H as f}from"./iframe-BsSOvdiI.js";import{D as E}from"./DisabledMixin-fjLCGnVB.js";import{K as g,T as A,A as h}from"./KeyToActionMixin-NJAwsg8D.js";var S=Object.defineProperty,x=(a,t,e,u)=>{for(var s=void 0,n=a.length-1,d;n>=0;n--)(d=a[n])&&(s=d(t,e,s)||s);return s&&S(t,e,s),s};const T=a=>{class t extends a{constructor(){super(...arguments),this.elementToAutoFocus=null,this.autoFocusOnMount=!1}async firstUpdated(u){super.firstUpdated(u),this.autoFocusOnMount&&(await this.updateComplete,(this.elementToAutoFocus||this).focus())}}return x([r({type:Boolean,reflect:!0,attribute:"auto-focus-on-mount"})],t.prototype,"autoFocusOnMount"),t},z=[p,m`
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
  `,...v()];var K=Object.defineProperty,o=(a,t,e,u)=>{for(var s=void 0,n=a.length-1,d;n>=0;n--)(d=a[n])&&(s=d(t,e,s)||s);return s&&K(t,e,s),s};const l=class l extends g(T(A(E(f)))){constructor(){super(),this.size=c.SIZE,this.role=c.ROLE,this.type=c.TYPE,this.prevTabindex=0,this.internals=this.attachInternals(),this.addEventListener("click",this.executeAction.bind(this)),this.addEventListener("keydown",this.handleKeyDown.bind(this)),this.addEventListener("keyup",this.handleKeyUp.bind(this)),this.addEventListener("blur",this.handleBlur.bind(this))}get form(){return this.internals.form}update(t){super.update(t),t.has("disabled")&&this.setDisabled(this,this.disabled),t.has("softDisabled")&&this.setSoftDisabled(this,this.softDisabled),t.has("active")&&(this.active!==void 0&&(this.ariaStateKey=this.ariaStateKey||c.ARIA_STATE_KEY),this.setActive(this,this.active))}executeAction(){this.type===b.SUBMIT&&this.form&&this.form.requestSubmit(),this.type===b.RESET&&this.form&&this.form.reset()}setActive(t,e){this.ariaStateKey&&this.ariaStateKey.split(",").filter(s=>s.trim().startsWith("aria-")).forEach(s=>{e===!0?t.setAttribute(s.trim(),"true"):e===!1?t.setAttribute(s.trim(),"false"):t.removeAttribute(s.trim())})}setSoftDisabled(t,e){e?t.setAttribute("aria-disabled","true"):t.removeAttribute("aria-disabled")}setDisabled(t,e){e?(t.setAttribute("aria-disabled","true"),this.prevTabindex=this.tabIndex,this.tabIndex=-1):(this.tabIndex===-1&&(this.tabIndex=this.prevTabindex),t.removeAttribute("aria-disabled"))}triggerClickEvent(){const t=new MouseEvent("click",{bubbles:!0,cancelable:!0,composed:!0,view:window});this.dispatchEvent(t)}handleBlur(){this.classList.contains("pressed")&&this.classList.remove("pressed")}handleKeyDown(t){const e=this.getActionForKeyEvent(t);(e===h.ENTER||e===h.SPACE)&&(this.classList.add("pressed"),e===h.ENTER&&this.triggerClickEvent(),t.preventDefault())}handleKeyUp(t){const e=this.getActionForKeyEvent(t);(e===h.ENTER||e===h.SPACE)&&(this.classList.remove("pressed"),e===h.SPACE&&this.triggerClickEvent())}render(){return y` <slot></slot> `}};l.formAssociated=!0,l.styles=[...f.styles,...z];let i=l;o([r({type:Boolean,reflect:!0})],i.prototype,"active");o([r({type:Boolean,attribute:"soft-disabled",reflect:!0})],i.prototype,"softDisabled");o([r({type:Number,reflect:!0})],i.prototype,"size");o([r({type:String,reflect:!0})],i.prototype,"role");o([r({type:String,reflect:!0})],i.prototype,"ariaStateKey");o([r({reflect:!0})],i.prototype,"type");o([r({type:String,reflect:!0})],i.prototype,"name");o([r({type:String,reflect:!0})],i.prototype,"value");export{T as A,i as B};
