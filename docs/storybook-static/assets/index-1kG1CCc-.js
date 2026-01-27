import{u as g,X as f,R as u,n as m}from"./iframe-CfitjWUE.js";import{P as E}from"./popover.component-5fveDtIW.js";import{a as c,P as T,D as r}from"./popover.constants-BfURR8Av.js";import{h as b}from"./dom-BlZvhF8F.js";import{v as A}from"./v4-CmTdKEVZ.js";const I=g.constructTagName("tooltip"),s={DESCRIPTION:"description",LABEL:"label",NONE:"none"},e={ARIA_HIDDEN:"true",BACKDROP:!1,DELAY:"0,0",DISABLE_ARIA_EXPANDED:!0,HIDE_ON_BLUR:!0,HIDE_ON_ESCAPE:!0,TRIGGER:`${c.MOUSEENTER} ${c.FOCUSIN}`,OFFSET:4,PLACEMENT:T.TOP,SHOW_ARROW:!0,TOOLTIP_TYPE:s.DESCRIPTION,ONLY_SHOW_WHEN_TRIGGER_OVERFLOWS:!1},y=f`
  :host {
    --mdc-tooltip-max-width: 400px;
    --mdc-tooltip-padding: 0.75rem;
    --mdc-tooltip-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-tooltip-text-color-contrast: var(--mds-color-theme-inverted-text-primary-normal);
  }

  :host::part(popover-content) {
    padding: var(--mdc-tooltip-padding);
    color: var(--mdc-tooltip-text-color);
    min-width: fit-content;
    max-width: var(--mdc-tooltip-max-width);

    font-size: var(--mds-font-apps-body-midsize-regular-font-size);
    font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
    line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-regular-text-case);
  }

  :host([color='contrast'])::part(popover-content) {
    color: var(--mdc-tooltip-text-color-contrast);
  }
`,_=[y];var v=Object.defineProperty,O=(p,t,i,d)=>{for(var o=void 0,l=p.length-1,h;l>=0;l--)(h=p[l])&&(o=h(t,i,o)||o);return o&&v(t,i,o),o};const n=class n extends E{constructor(){super(...arguments),this.tooltipType=e.TOOLTIP_TYPE,this.onlyShowWhenTriggerOverflows=e.ONLY_SHOW_WHEN_TRIGGER_OVERFLOWS}connectedCallback(){super.connectedCallback(),this.role=u.TOOLTIP,this.ariaHidden=e.ARIA_HIDDEN,this.backdrop=e.BACKDROP,this.delay=this.delay||e.DELAY,this.disableAriaExpanded=e.DISABLE_ARIA_EXPANDED,this.hideOnBlur=e.HIDE_ON_BLUR,this.hideOnEscape=e.HIDE_ON_ESCAPE,this.offset=this.offset||e.OFFSET,this.placement=this.placement||e.PLACEMENT,this.trigger=e.TRIGGER,this.closeButton=r.CLOSE_BUTTON,this.disableFlip=r.DISABLE_FLIP,this.focusBackToTrigger=r.FOCUS_BACK,this.focusTrap=r.FOCUS_TRAP,this.hideOnOutsideClick=r.HIDE_ON_CLICK_OUTSIDE,this.interactive=r.INTERACTIVE,this.preventScroll=r.PREVENT_SCROLL,this.size=r.SIZE}setTooltipType(t){this.setAttribute("tooltip-type",Object.values(s).includes(t)?t:e.TOOLTIP_TYPE)}async onIdUpdated(){if(this.id.length===0&&(this.id=`mdc-tooltip-${A()}`),await this.updateComplete,this.triggerElement)switch(this.tooltipType){case s.DESCRIPTION:this.triggerElement.setAttribute("aria-describedby",this.id);break;case s.LABEL:this.triggerElement.setAttribute("aria-labelledby",this.id);break}}onPlacementUpdated(){Object.values(T).includes(this.placement)||(this.placement=e.PLACEMENT)}onTooltipTypeUpdated(t){const i=t.get("tooltipType");if(Object.values(s).includes(this.tooltipType)||this.setTooltipType(e.TOOLTIP_TYPE),this.triggerElement)switch(this.tooltipType){case s.DESCRIPTION:i===s.LABEL&&this.triggerElement.removeAttribute("aria-labelledby"),this.triggerElement.setAttribute("aria-describedby",this.id);break;case s.LABEL:i===s.DESCRIPTION&&this.triggerElement.removeAttribute("aria-describedby"),this.triggerElement.setAttribute("aria-labelledby",this.id);break;default:i===s.DESCRIPTION?this.triggerElement.removeAttribute("aria-describedby"):i===s.LABEL&&this.triggerElement.removeAttribute("aria-labelledby");break}}async isOpenUpdated(t,i){const{triggerElement:d}=this;t===i||!d||(i||this.depthManager.remove([this]),await super.isOpenUpdated(t,i))}async update(t){super.update(t),t.has("id")&&await this.onIdUpdated(),t.has("placement")&&this.onPlacementUpdated(),t.has("tooltipType")&&this.onTooltipTypeUpdated(t)}show(){this.onlyShowWhenTriggerOverflows&&this.triggerElement&&b(this.triggerElement)&&!this.triggerElement.isWidthOverflowing()||super.show()}};n.styles=[...E.styles,..._];let a=n;O([m({type:String,attribute:"tooltip-type",reflect:!0})],a.prototype,"tooltipType");O([m({type:Boolean,attribute:"only-show-when-trigger-overflows",reflect:!0})],a.prototype,"onlyShowWhenTriggerOverflows");a.register(I);export{e as D,s as T,I as a};
