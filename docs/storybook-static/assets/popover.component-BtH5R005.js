import{N as I,u as A,C as E,R as w,at as k,au as x,av as C,aw as L,ax as S,ay as D,az as P,aA as B,k as y,t as R,r as O,aB as F,n as s}from"./iframe-BrN8x_Z0.js";import{B as N,P as _,F as H,D as M}from"./BackdropMixin-C1JBgKdc.js";import{K as $,a as U,A as z}from"./KeyDownHandledMixin-lEQrVlT7.js";import{D as p,a as G,b as m,P as d,C as K}from"./popover.constants-DWapbakJ.js";class j{constructor(e){this.nameToIntervalId=new Map,this.nameToTimeoutId=new Map,e.addController(this)}hostDisconnected(){[...this.nameToIntervalId.values()].forEach(clearInterval),this.nameToIntervalId.clear(),[...this.nameToTimeoutId.values()].forEach(clearTimeout),this.nameToTimeoutId.clear()}setInterval(e,t,o,...r){this.nameToIntervalId.has(e)&&clearInterval(this.nameToIntervalId.get(e));const l=window.setInterval(t,o,...r);return this.nameToIntervalId.set(e,l),l}clearInterval(e){const[t,o]=this.getNameAndIdFromIdentifier(this.nameToIntervalId,e);o!==void 0&&clearInterval(o),t&&this.nameToIntervalId.delete(t)}setTimeout(e,t,o,...r){this.nameToTimeoutId.has(e)&&clearTimeout(this.nameToTimeoutId.get(e));const l=window.setTimeout((...n)=>{t(...n),this.nameToTimeoutId.delete(e)},o,...r);return this.nameToTimeoutId.set(e,l),l}clearTimeout(e){const[t,o]=this.getNameAndIdFromIdentifier(this.nameToTimeoutId,e);o!==void 0&&window.clearTimeout(o),t&&this.nameToTimeoutId.delete(t)}getNameAndIdFromIdentifier(e,t){var o;if(typeof t=="number"){const r=t;return[(o=[...e.entries()].find(([,n])=>n===t))==null?void 0:o[0],r]}return[t,e.get(t)]}}class f{static dispatchPopoverEvent(e,t){t.dispatchEvent(new CustomEvent(e,{detail:{show:t.visible},composed:!0,bubbles:!0}))}static onShowPopover(e){this.dispatchPopoverEvent("shown",e)}static onHidePopover(e){this.dispatchPopoverEvent("hidden",e)}static onCreatedPopover(e){this.dispatchPopoverEvent("created",e)}static onDestroyedPopover(e){this.dispatchPopoverEvent("destroyed",e)}static onEscapeKeyPressed(e){this.dispatchPopoverEvent("closebyescape",e)}static onClickOutside(e){this.dispatchPopoverEvent("closebyoutsideclick",e)}}const q=I`
  :host {
    --mdc-popover-arrow-border-radius: 0.1875rem;
    --mdc-popover-arrow-border: 0.0625rem solid var(--mds-color-theme-outline-secondary-normal);

    --mdc-popover-primary-background-color: var(--mds-color-theme-background-solid-primary-normal);
    --mdc-popover-border-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-popover-inverted-background-color: var(--mds-color-theme-inverted-background-normal);
    --mdc-popover-inverted-border-color: var(--mds-color-theme-inverted-outline-primary-normal);
    --mdc-popover-inverted-text-color: var(--mds-color-theme-inverted-text-primary-normal);
    --mdc-popover-elevation-3: var(--mds-elevation-3);
    --mdc-popover-width: unset;
    --mdc-popover-max-width: max-content;
    --mdc-popover-max-height: auto;
    --mdc-popover-backdrop-color: var(--mds-color-theme-common-overlays-secondary-normal);
    --mdc-backdrop-mixin-background-color: var(--mdc-popover-backdrop-color);

    display: none;
    position: absolute;
    top: 0;
    left: 0;

    box-sizing: content-box;
    background-color: var(--mdc-popover-primary-background-color);
    border-radius: 0.5rem;
    border: 0.0625rem solid var(--mdc-popover-border-color);
    filter: var(--mdc-popover-elevation-3);
    max-width: var(--mdc-popover-max-width);
    width: var(--mdc-popover-width, var(--mdc-popover-max-width));
  }

  :host([strategy='absolute']) {
    position: absolute;
  }

  :host([strategy='fixed']) {
    position: fixed;
  }

  :host([visible]) {
    display: block;
  }

  :host([color='contrast']) {
    background-color: var(--mdc-popover-inverted-background-color);
    border-color: var(--mdc-popover-inverted-border-color);
    color: var(--mdc-popover-inverted-text-color);
  }

  :host([color='contrast']) .popover-arrow {
    background-color: var(--mdc-popover-inverted-background-color);
    border-color: var(--mdc-popover-inverted-border-color);
  }

  :host([color='contrast'])::part(popover-close) {
    color: var(--mdc-popover-inverted-text-color);
  }

  :host::part(popover-content) {
    position: relative;
    cursor: default;
    padding: 0.75rem;
    z-index: 9998;
    max-height: var(--mdc-popover-max-height);
  }

  :host::part(popover-hover-bridge) {
    position: absolute;
    transform: translateX(-50%);
    background: transparent;
    pointer-events: auto;
  }

  :host::part(popover-close) {
    box-sizing: border-box;
    position: absolute;
    right: 0.75rem;
    top: 0.75rem;
    cursor: pointer;
    z-index: 9999;
  }

  :host(:dir(rtl))::part(popover-close) {
    right: auto;
    left: 0.75rem;
  }

  .popover-arrow {
    position: absolute;
    width: 1rem;
    height: 1rem;
    background-color: var(--mdc-popover-primary-background-color);
    transform: rotate(45deg);
    pointer-events: none;
    border: var(--mdc-popover-arrow-border);
  }

  .popover-arrow[data-side='top'] {
    border-top: none;
    border-left: none;
    border-bottom-right-radius: var(--mdc-popover-arrow-border-radius);
    border-top-left-radius: 100%;
  }

  .popover-arrow[data-side='bottom'] {
    border-bottom: none;
    border-right: none;
    border-top-left-radius: var(--mdc-popover-arrow-border-radius);
    border-bottom-right-radius: 100%;
  }

  .popover-arrow[data-side='right'] {
    border-top: none;
    border-right: none;
    border-bottom-left-radius: var(--mdc-popover-arrow-border-radius);
    border-top-right-radius: 100%;
  }

  .popover-arrow[data-side='left'] {
    border-bottom: none;
    border-left: none;
    border-top-right-radius: var(--mdc-popover-arrow-border-radius);
    border-bottom-left-radius: 100%;
  }
`,V=[q],W=A.constructTagName("popoverportal");class oe extends E{connectedCallback(){super.connectedCallback(),this.ariaHidden="true",this.style.display="none"}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.onDisconnect)==null||e.call(this)}}class Y{constructor(e){this.portalElement=null,this.disconnectAfterAppendTo=!1,this.arrowPixelChange=!1,this.popover=e}setupDelay(){try{const[e,t]=this.popover.delay.split(",").map(o=>{const r=parseInt(o,10);if(Number.isNaN(r)||r<0)throw new Error(`Invalid delay value: ${o}`);return r});return[e,t]}catch{return this.popover.delay="0,0",[0,0]}}setupHoverBridge(e){const t=this.popover.renderRoot.querySelector('div[part="popover-hover-bridge"]');Object.assign(t.style,{top:"",left:"",right:"",bottom:""});const o=this.popover.triggerElement;if(t&&o){const r=this.popover.getBoundingClientRect(),l=o.getBoundingClientRect();let n=0;if(!l)return;const h=this.popover.offsetHeight||0,c=this.popover.offsetWidth||0,v=e.split("-")[0];switch(v==="top"||v==="bottom"?n=Math.max(0,Math.max(r.top-l.bottom,l.top-r.bottom)):(v==="left"||v==="right")&&(n=Math.max(0,Math.max(l.left-r.right,r.left-l.right))),n+=1,v){case"top":t.style.height=`${n}px`,t.style.bottom=`calc(-1 * (${n}px))`,t.style.left="50%",t.style.width=`${c}px`;break;case"left":t.style.height=`${h}px`,t.style.width=`${n}px`,t.style.right=`calc(-1.5 * (${n}px))`;break;case"right":t.style.height=`${h}px`,t.style.width=`${n}px`,t.style.left=`calc(-0.5 * (${n}px))`;break;case"bottom":default:t.style.height=`${n}px`,t.style.top=`calc(-1 * (${n}px))`,t.style.left="50%",t.style.width=`${c}px`;break}}}setupAppendTo(){var e,t;if(this.popover.appendTo){const o=document.getElementById(this.popover.appendTo);o&&!Array.from(o.children).includes(this.popover)&&(this.disconnectAfterAppendTo=!0,this.portalElement=document.createElement(W),this.portalElement.onDisconnect=()=>{this.popover.remove(),this.portalElement=null},(t=(e=this.popover.parentElement)==null?void 0:e.appendChild)==null||t.call(e,this.portalElement),o.appendChild(this.popover))}}cleanupAppendTo(){!this.disconnectAfterAppendTo&&this.portalElement&&this.portalElement.remove(),this.disconnectAfterAppendTo=!1}updateAriaLabels(){var e,t,o;this.popover.interactive&&this.popover.role&&(this.popover.ariaLabel||(this.popover.ariaLabel=((e=this.popover.triggerElement)==null?void 0:e.ariaLabel)||((t=this.popover.triggerElement)==null?void 0:t.textContent)||""),!this.popover.ariaLabelledby&&!this.popover.ariaLabel&&(this.popover.ariaLabelledby=((o=this.popover.triggerElement)==null?void 0:o.id)||""))}updateAriaModal(){this.popover.role===w.DIALOG||this.popover.role===w.ALERTDIALOG?this.popover.setAttribute("aria-modal","true"):this.popover.removeAttribute("aria-modal")}updateAriaExpandedAttribute(){var e,t,o;this.popover.disableAriaExpanded||((e=this.popover.triggerElement)==null||e.setAttribute("aria-expanded",`${this.popover.visible}`),(o=this.popover.triggerElement)==null||o.setAttribute("aria-haspopup",((t=this.popover.triggerElement)==null?void 0:t.getAttribute("aria-haspopup"))||this.popover.role||"dialog"))}updateArrowStyle(e,t){var g;if(!this.popover.arrowElement)return;const o=t.split("-")[0],r={top:"bottom",right:"left",bottom:"top",left:"right"}[o],{x:l,y:n}=e,h=this.popover.arrowElement.getBoundingClientRect(),c=(g=this.popover.arrowElement.offsetParent)==null?void 0:g.getBoundingClientRect();if(!this.arrowPixelChange){const b=c!=null&&c[r]?12-Math.abs(h[r]-c[r]):0;Math.round(b)===1?this.arrowPixelChange=!0:this.arrowPixelChange=!1}const v=this.arrowPixelChange?.5:0;this.popover.arrowElement.setAttribute("data-side",o),Object.assign(this.popover.arrowElement.style,{left:l!=null?`${l}px`:"",top:n!=null?`${n}px`:"",[r]:`${-this.popover.arrowElement.offsetHeight/2-v}px`})}updatePopoverStyle(e,t){Object.assign(this.popover.style,{left:`${e}px`,top:`${t}px`})}}var Z=Object.defineProperty,X=Object.getOwnPropertyDescriptor,a=(u,e,t,o)=>{for(var r=o>1?void 0:o?X(e,t):e,l=u.length-1,n;l>=0;l--)(n=u[l])&&(r=(o?n(e,t,r):n(r))||r);return o&&r&&Z(e,t,r),r};const T=class T extends $(U(N(_(H(E))))){constructor(){super(),this.depthManager=new M(this),this.id="",this.triggerID="",this.trigger=p.TRIGGER,this.placement=p.PLACEMENT,this.color=p.COLOR,this.visible=p.VISIBLE,this.offset=p.OFFSET,this.boundary=p.BOUNDARY,this.boundaryRoot=p.BOUNDARY_ROOT,this.focusTrap=p.FOCUS_TRAP,this.preventScroll=p.PREVENT_SCROLL,this.showArrow=p.ARROW,this.closeButton=p.CLOSE_BUTTON,this.interactive=p.INTERACTIVE,this.delay=p.DELAY,this.hideOnEscape=p.HIDE_ON_ESCAPE,this.propagateEventOnEscape=p.PROPAGATE_EVENT_ON_ESCAPE,this.hideOnBlur=p.HIDE_ON_BLUR,this.hideOnOutsideClick=p.HIDE_ON_CLICK_OUTSIDE,this.focusBackToTrigger=p.FOCUS_BACK,this.backdrop=p.BACKDROP,this.isBackdropInvisible=p.IS_BACKDROP_INVISIBLE,this.disableFlip=p.DISABLE_FLIP,this.size=p.SIZE,this.closeButtonAriaLabel=null,this.strategy=p.STRATEGY,this.role=p.ROLE,this.ariaLabelledby=null,this.ariaDescribedby=null,this.disableAriaExpanded=p.DISABLE_ARIA_EXPANDED,this.keepConnectedTooltipOpen=p.KEEP_CONNECTED_TOOLTIP_OPEN,this.animationFrame=p.ANIMATION_FRAME,this.inline=p.INLINE,this.elementIndexToReceiveFocus=null,this.stackGroupName="",this.arrowElement=null,this.isHovered=!1,this.openDelay=0,this.closeDelay=0,this.floatingUICleanupFunction=null,this.shouldSuppressOpening=!1,this.timers=new j(this),this.parseTrigger=()=>{var r;let o=(((r=this.trigger)==null?void 0:r.split(" "))||[]).filter(l=>Object.values(G).includes(l)).length>0?this.trigger:p.TRIGGER;o==="mouseenter"&&(this.interactive?o="mouseenter click":o="mouseenter focusin"),this.trigger=o},this.setupTriggerListeners=()=>{if(this.trigger.includes("click")&&(document.addEventListener("click",this.togglePopoverVisible,{capture:!0}),this.hideOnBlur&&document.addEventListener("focusout",this.handleFocusOut,{capture:!0})),this.trigger.includes("mouseenter")){const e=this.renderRoot.querySelector('div[part="popover-hover-bridge"]');e==null||e.addEventListener("mouseenter",this.show),this.addEventListener("mouseenter",this.cancelCloseDelay),this.addEventListener("mouseleave",this.startCloseDelay),document.addEventListener("mouseover",this.handleMouseEnter,{capture:!0}),document.addEventListener("mouseout",this.handleMouseLeave,{capture:!0})}this.trigger.includes("focusin")&&(document.addEventListener("focusin",this.handleFocusIn,{capture:!0}),this.interactive||document.addEventListener("focusout",this.handleFocusOut,{capture:!0}))},this.removeTriggerListeners=()=>{document.removeEventListener("click",this.togglePopoverVisible,{capture:!0});const e=this.renderRoot.querySelector('div[part="popover-hover-bridge"]');e==null||e.removeEventListener("mouseenter",this.show),document.removeEventListener("mouseover",this.handleMouseEnter,{capture:!0}),document.removeEventListener("mouseout",this.handleMouseLeave,{capture:!0}),this.removeEventListener("mouseenter",this.cancelCloseDelay),this.removeEventListener("mouseleave",this.startCloseDelay),document.removeEventListener("focusin",this.handleFocusIn,{capture:!0}),document.removeEventListener("focusout",this.handleFocusOut,{capture:!0})},this.removeAllListeners=()=>{this.removeTriggerListeners(),this.hideOnOutsideClick&&document.removeEventListener("click",this.onOutsidePopoverClick,{capture:!0}),this.hideOnEscape&&(this.removeEventListener("keydown",this.onEscapeKeydown),document.removeEventListener("keydown",this.onEscapeKeydown)),this.hideOnBlur&&this.removeEventListener("focusout",this.onPopoverFocusOut)},this.onOutsidePopoverClick=e=>{if(!this.depthManager.isHostOnTop())return;const t=e.composedPath(),o=this.contains(e.target)||t.includes(this.triggerElement)||t.includes(this),r=this.backdropElement?t.includes(this.backdropElement):!1;(!o||r)&&(this.hide(),f.onClickOutside(this),r&&e.stopPropagation())},this.onEscapeKeydown=e=>{!this.visible||this.getActionForKeyEvent(e)!==z.ESCAPE||!this.depthManager.isHostOnTop()||(this.propagateEventOnEscape||e.stopPropagation(),e.preventDefault(),this.hide(),f.onEscapeKeyPressed(this),this.keyDownEventHandled())},this.onPopoverFocusOut=e=>{this.contains(e.relatedTarget)||this.hide()},this.isHoverWithinTrigger=e=>{const{triggerElement:t}=this,{relatedTarget:o}=e;return t&&o instanceof Element?k(o).includes(t):!1},this.handleMouseEnter=e=>{this.isEventFromTrigger(e)&&(this.isHoverWithinTrigger(e)||(this.isHovered=!0,this.show()))},this.handleMouseLeave=e=>{this.isEventFromTrigger(e)&&(this.isHoverWithinTrigger(e)||(this.isHovered=!1,this.startCloseDelay()))},this.handleFocusOut=e=>{if(this.isEventFromTrigger(e)){if(this.hideOnBlur){const{relatedTarget:t}=e;this.contains(t)||this.hide();return}this.isHovered||this.hide()}},this.handleFocusIn=e=>{var t,o,r,l;this.isEventFromTrigger(e)&&((t=this.triggerElement)!=null&&t.matches(":focus-visible")||(l=(r=(o=this.triggerElement)==null?void 0:o.shadowRoot)==null?void 0:r.querySelector(".mdc-focus-ring"))!=null&&l.matches(":focus-visible")||this.isHovered)&&this.show()},this.cancelOpenDelay=()=>{this.timers.clearTimeout(m.OPEN)},this.startCloseDelay=()=>{this.cancelOpenDelay(),this.interactive?this.timers.setTimeout(m.HOVER,()=>{this.visible=!1},this.closeDelay):this.hide()},this.cancelCloseDelay=()=>{this.timers.clearTimeout(m.HOVER),this.timers.clearTimeout(m.CLOSE)},this.hide=()=>{this.cancelOpenDelay();const e=()=>{this.visible=!1};this.closeDelay>0?this.timers.setTimeout(m.CLOSE,e,this.closeDelay):(this.timers.clearTimeout(m.CLOSE),e())},this.togglePopoverVisible=e=>{this.isEventFromTrigger(e)&&(this.visible?this.hide():this.show())},this.positionPopover=()=>{const{triggerElement:e}=this;if(!e)return;const t=!this.boundary||this.boundary==="clippingAncestors"?"clippingAncestors":Array.from(document.querySelectorAll(this.boundary)),o=this.boundaryRoot,r=[];if(this.inline&&r.push(F()),r.push(x({boundary:t,rootBoundary:o,padding:this.boundaryPadding})),this.disableFlip||r.push(C({boundary:t,rootBoundary:o})),this.size){const n=c=>{this.style.setProperty("--mdc-popover-internal-available-height",`${c}px`)},h=this.renderRoot.querySelector('[part="popover-content"]');r.push(L({boundary:t,rootBoundary:o,apply({availableHeight:c}){h&&(Object.assign(h.style,{maxHeight:`${c}px`,overflowY:"auto"}),n(c))},padding:50}))}let l=0;if(this.showArrow&&(this.arrowElement=this.renderRoot.querySelector('div[part="popover-arrow"]'),this.arrowElement)){const n=this.arrowElement.offsetHeight;l=Math.sqrt(2*n**2)/2,r.push(S({element:this.arrowElement,padding:12}))}r.push(D(typeof this.offset=="number"?this.offset+l:this.offset)),this.floatingUICleanupFunction=P(e,this,async()=>{const{triggerElement:n}=this;if(!n)return;const h=this.adjustPlacementForRtl(this.placement),{x:c,y:v,middlewareData:g,placement:b}=await B(n,this,{placement:h,middleware:r,strategy:this.strategy});this.utils.updatePopoverStyle(c,v),g.arrow&&this.arrowElement&&this.utils.updateArrowStyle(g.arrow,b),this.trigger.includes("mouseenter")&&this.utils.setupHoverBridge(b)},{animationFrame:this.animationFrame})},this.show=this.show.bind(this),this.utils=new Y(this),this.parseTrigger(),[this.openDelay,this.closeDelay]=this.utils.setupDelay()}get zIndex(){return Number.isInteger(this.internalZIndex)?this.internalZIndex:this.depthManager.getHostZIndex()}set zIndex(e){this.internalZIndex=e}get connectedTooltip(){const e=this.getRootNode().querySelectorAll(`mdc-tooltip[triggerID="${this.triggerID}"]`);return Array.from(e).find(t=>t!==this)}get triggerElement(){return this.getRootNode().querySelector(`[id="${this.triggerID}"]`)}async firstUpdated(e){super.firstUpdated(e),f.onCreatedPopover(this)}connectedCallback(){super.connectedCallback(),this.utils.setupAppendTo(),this.setupTriggerListeners()}async disconnectedCallback(){var e,t;super.disconnectedCallback(),this.removeAllListeners(),(e=this.deactivateFocusTrap)==null||e.call(this),this.deactivatePreventScroll(),this.moveElementBackAfterBackdropRemoval(this.triggerElement),this.removeBackdrop(),(t=this.floatingUICleanupFunction)==null||t.call(this),this.keepConnectedTooltipOpen||this.connectedTooltip&&(this.connectedTooltip.shouldSuppressOpening=!1),this.utils.cleanupAppendTo(),f.onDestroyedPopover(this)}async updated(e){if(super.updated(e),e.has("visible")){const t=e.get("visible")||!1;await this.isOpenUpdated(t,this.visible),this.utils.updateAriaExpandedAttribute()}e.has("trigger")&&(this.parseTrigger(),this.removeTriggerListeners(),this.setupTriggerListeners()),e.has("placement")&&this.setAttribute("placement",Object.values(d).includes(this.placement)?this.placement:p.PLACEMENT),e.has("delay")&&([this.openDelay,this.closeDelay]=this.utils.setupDelay()),e.has("color")&&this.setAttribute("color",Object.values(K).includes(this.color)?this.color:p.COLOR),e.has("appendTo")&&(this.appendTo&&this.isConnected?this.utils.setupAppendTo():this.utils.cleanupAppendTo()),(e.has("interactive")||e.has("aria-label")||e.has("aria-labelledby"))&&this.utils.updateAriaLabels(),e.has("role")&&(this.role===""&&(this.role=null),this.utils.updateAriaModal()),e.has("disableAriaExpanded")&&this.utils.updateAriaExpandedAttribute(),e.has("focusTrap")&&!this.focusTrap&&this.visible&&this.deactivateFocusTrap(),e.has("preventScroll")&&(!this.preventScroll&&this.visible?this.deactivatePreventScroll():this.preventScroll&&this.visible&&this.activatePreventScroll())}onComponentStackChanged(e){e==="removed"?this.hide():e==="moved"&&this.requestUpdate("zIndex")}async isOpenUpdated(e,t){var r,l;const{triggerElement:o}=this;e===t||!o||(t&&!this.shouldSuppressOpening?(this.depthManager.pushHost()&&this.requestUpdate("zIndex"),this.keepConnectedTooltipOpen||this.connectedTooltip&&(this.connectedTooltip.visible=!1,this.connectedTooltip.shouldSuppressOpening=!0),this.backdrop&&!this.backdropElement&&(this.createBackdrop("popover"),this.keepElementAboveBackdrop(o)),this.positionPopover(),this.hideOnBlur&&(this.addEventListener("focusout",this.onPopoverFocusOut),this.trigger==="click"&&(o.style.pointerEvents="none")),this.hideOnEscape&&(this.addEventListener("keydown",this.onEscapeKeydown),document.addEventListener("keydown",this.onEscapeKeydown)),this.activatePreventScroll(),this.hideOnOutsideClick&&document.addEventListener("click",this.onOutsidePopoverClick,{capture:!0}),setTimeout(()=>{var n,h;this.interactive&&this.focusTrap&&((n=this.activateFocusTrap)==null||n.call(this),(h=this.setInitialFocus)==null||h.call(this,this.elementIndexToReceiveFocus??0))},0),f.onShowPopover(this)):(this.depthManager.popHost(),(r=this.floatingUICleanupFunction)==null||r.call(this),this.backdrop&&(this.moveElementBackAfterBackdropRemoval(o),this.removeBackdrop()),this.hideOnBlur&&(this.removeEventListener("focusout",this.onPopoverFocusOut),this.trigger==="click"&&(o.style.pointerEvents="")),this.hideOnOutsideClick&&document.removeEventListener("click",this.onOutsidePopoverClick,{capture:!0}),this.hideOnEscape&&(this.removeEventListener("keydown",this.onEscapeKeydown),document.removeEventListener("keydown",this.onEscapeKeydown)),this.deactivatePreventScroll(),(l=this.deactivateFocusTrap)==null||l.call(this),this.focusBackToTrigger&&(o==null||o.focus()),this.keepConnectedTooltipOpen||this.connectedTooltip&&(this.connectedTooltip.shouldSuppressOpening=!1),f.onHidePopover(this)))}show(){if(this.shouldSuppressOpening||(this.cancelCloseDelay(),this.visible))return;const e=()=>{this.visible=!0};this.openDelay>0?this.timers.setTimeout(m.OPEN,e,this.openDelay):(this.timers.clearTimeout(m.OPEN),e())}isEventFromTrigger(e){var t;return this.triggerID?e.composed?e.composedPath().some(o=>(o==null?void 0:o.id)===this.triggerID):((t=e.target)==null?void 0:t.id)===this.triggerID:!1}isRtl(){return window.getComputedStyle(this).direction==="rtl"}adjustPlacementForRtl(e){if(!this.isRtl())return e;switch(e){case d.LEFT:return d.RIGHT;case d.LEFT_START:return d.RIGHT_START;case d.LEFT_END:return d.RIGHT_END;case d.RIGHT:return d.LEFT;case d.RIGHT_START:return d.LEFT_START;case d.RIGHT_END:return d.LEFT_END;default:return e}}render(){return this.style.zIndex=`${this.zIndex}`,y`
      <div part="popover-hover-bridge"></div>
      ${this.closeButton?y` <mdc-button
            part="popover-close"
            prefix-icon="cancel-bold"
            variant="tertiary"
            size="20"
            aria-label=${R(this.closeButtonAriaLabel)||""}
            @click="${this.hide}"
          ></mdc-button>`:O}
      ${this.showArrow?y`<div class="popover-arrow" part="popover-arrow"></div>`:O}
      <div part="popover-content">
        <slot></slot>
      </div>
    `}};T.styles=[...E.styles,...V];let i=T;a([s({type:String,reflect:!0})],i.prototype,"id",2);a([s({type:String,reflect:!0})],i.prototype,"triggerID",2);a([s({type:String,reflect:!0})],i.prototype,"trigger",2);a([s({type:String,reflect:!0})],i.prototype,"placement",2);a([s({type:String,reflect:!0})],i.prototype,"color",2);a([s({type:Boolean,reflect:!0})],i.prototype,"visible",2);a([s({type:Number,reflect:!0,converter:{toAttribute(u){return typeof u=="number"?u.toString():""}}})],i.prototype,"offset",2);a([s({type:String,reflect:!0,attribute:"boundary"})],i.prototype,"boundary",2);a([s({type:String,reflect:!0,attribute:"boundary-root"})],i.prototype,"boundaryRoot",2);a([s({type:Number,reflect:!0,attribute:"boundary-padding"})],i.prototype,"boundaryPadding",2);a([s({type:Boolean,reflect:!0,attribute:"focus-trap"})],i.prototype,"focusTrap",2);a([s({type:Boolean,reflect:!0,attribute:"prevent-scroll"})],i.prototype,"preventScroll",2);a([s({type:Boolean,reflect:!0,attribute:"show-arrow"})],i.prototype,"showArrow",2);a([s({type:Boolean,reflect:!0,attribute:"close-button"})],i.prototype,"closeButton",2);a([s({type:Boolean,reflect:!0})],i.prototype,"interactive",2);a([s({type:String,reflect:!0})],i.prototype,"delay",2);a([s({type:Boolean,reflect:!0,attribute:"hide-on-escape"})],i.prototype,"hideOnEscape",2);a([s({type:Boolean,reflect:!0,attribute:"propagate-event-on-escape"})],i.prototype,"propagateEventOnEscape",2);a([s({type:Boolean,reflect:!0,attribute:"hide-on-blur"})],i.prototype,"hideOnBlur",2);a([s({type:Boolean,reflect:!0,attribute:"hide-on-outside-click"})],i.prototype,"hideOnOutsideClick",2);a([s({type:Boolean,reflect:!0,attribute:"focus-back-to-trigger"})],i.prototype,"focusBackToTrigger",2);a([s({type:Boolean,reflect:!0})],i.prototype,"backdrop",2);a([s({type:String,reflect:!0,attribute:"backdrop-append-to"})],i.prototype,"backdropAppendTo",2);a([s({type:Boolean,reflect:!0,attribute:"is-backdrop-invisible"})],i.prototype,"isBackdropInvisible",2);a([s({type:Boolean,reflect:!0,attribute:"disable-flip"})],i.prototype,"disableFlip",2);a([s({type:Boolean,reflect:!0})],i.prototype,"size",2);a([s({type:Number,reflect:!0,attribute:"z-index"})],i.prototype,"zIndex",1);a([s({type:String,reflect:!0,attribute:"append-to"})],i.prototype,"appendTo",2);a([s({type:String,attribute:"close-button-aria-label",reflect:!0})],i.prototype,"closeButtonAriaLabel",2);a([s({type:String,reflect:!0})],i.prototype,"strategy",2);a([s({type:String,reflect:!0})],i.prototype,"role",2);a([s({type:String,reflect:!0,attribute:"aria-labelledby"})],i.prototype,"ariaLabelledby",2);a([s({type:String,reflect:!0,attribute:"aria-describedby"})],i.prototype,"ariaDescribedby",2);a([s({type:Boolean,reflect:!0,attribute:"disable-aria-expanded"})],i.prototype,"disableAriaExpanded",2);a([s({type:Boolean,reflect:!0,attribute:"keep-connected-tooltip-open"})],i.prototype,"keepConnectedTooltipOpen",2);a([s({type:Boolean,reflect:!0,attribute:"animation-frame"})],i.prototype,"animationFrame",2);a([s({type:Boolean,reflect:!0})],i.prototype,"inline",2);a([s({type:Number,attribute:"element-index-to-receive-focus",reflect:!0})],i.prototype,"elementIndexToReceiveFocus",2);a([s({type:String,attribute:"stack-group-name",reflect:!0})],i.prototype,"stackGroupName",2);export{i as P,W as T,oe as a};
