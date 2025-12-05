import{u as m,U as T,R as O,n as u}from"./iframe-Hv7IoejM.js";import{P as c}from"./popover.component-C-5plnw-.js";import{a as E,P as h,D as s}from"./popover.constants-KmOmTc4A.js";import{v as b}from"./v4-CmTdKEVZ.js";const A=m.constructTagName("tooltip"),i={DESCRIPTION:"description",LABEL:"label",NONE:"none"},e={ARIA_HIDDEN:"true",BACKDROP:!1,DELAY:"0,0",DISABLE_ARIA_EXPANDED:!0,HIDE_ON_BLUR:!0,HIDE_ON_ESCAPE:!0,TRIGGER:`${E.MOUSEENTER} ${E.FOCUSIN}`,OFFSET:4,PLACEMENT:h.TOP,SHOW_ARROW:!0,TOOLTIP_TYPE:i.DESCRIPTION},I=T`
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
`,f=[I];var g=Object.defineProperty,y=(p,t,r,P)=>{for(var o=void 0,l=p.length-1,n;l>=0;l--)(n=p[l])&&(o=n(t,r,o)||o);return o&&g(t,r,o),o};const d=class d extends c{constructor(){super(...arguments),this.tooltipType=e.TOOLTIP_TYPE}connectedCallback(){super.connectedCallback(),this.role=O.TOOLTIP,this.ariaHidden=e.ARIA_HIDDEN,this.backdrop=e.BACKDROP,this.delay=this.delay||e.DELAY,this.disableAriaExpanded=e.DISABLE_ARIA_EXPANDED,this.hideOnBlur=e.HIDE_ON_BLUR,this.hideOnEscape=e.HIDE_ON_ESCAPE,this.offset=this.offset||e.OFFSET,this.placement=this.placement||e.PLACEMENT,this.trigger=e.TRIGGER,this.closeButton=s.CLOSE_BUTTON,this.disableFlip=s.DISABLE_FLIP,this.focusBackToTrigger=s.FOCUS_BACK,this.focusTrap=s.FOCUS_TRAP,this.hideOnOutsideClick=s.HIDE_ON_CLICK_OUTSIDE,this.interactive=s.INTERACTIVE,this.preventScroll=s.PREVENT_SCROLL,this.size=s.SIZE}setTooltipType(t){this.setAttribute("tooltip-type",Object.values(i).includes(t)?t:e.TOOLTIP_TYPE)}async onIdUpdated(){if(this.id.length===0&&(this.id=`mdc-tooltip-${b()}`),await this.updateComplete,this.triggerElement)switch(this.tooltipType){case i.DESCRIPTION:this.triggerElement.setAttribute("aria-describedby",this.id);break;case i.LABEL:this.triggerElement.setAttribute("aria-labelledby",this.id);break}}onPlacementUpdated(){Object.values(h).includes(this.placement)||(this.placement=e.PLACEMENT)}onTooltipTypeUpdated(t){const r=t.get("tooltipType");if(Object.values(i).includes(this.tooltipType)||this.setTooltipType(e.TOOLTIP_TYPE),this.triggerElement)switch(this.tooltipType){case i.DESCRIPTION:r===i.LABEL&&this.triggerElement.removeAttribute("aria-labelledby"),this.triggerElement.setAttribute("aria-describedby",this.id);break;case i.LABEL:r===i.DESCRIPTION&&this.triggerElement.removeAttribute("aria-describedby"),this.triggerElement.setAttribute("aria-labelledby",this.id);break;default:r===i.DESCRIPTION?this.triggerElement.removeAttribute("aria-describedby"):r===i.LABEL&&this.triggerElement.removeAttribute("aria-labelledby");break}}async update(t){super.update(t),t.has("id")&&await this.onIdUpdated(),t.has("placement")&&this.onPlacementUpdated(),t.has("tooltipType")&&this.onTooltipTypeUpdated(t)}};d.styles=[...c.styles,...f];let a=d;y([u({type:String,attribute:"tooltip-type",reflect:!0})],a.prototype,"tooltipType");a.register(A);export{e as D,i as T,A as a};
