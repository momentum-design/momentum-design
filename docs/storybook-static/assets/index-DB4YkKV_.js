import{u as O,X as g,R as f,n as c}from"./iframe-CUGe0MVU.js";import{P as h}from"./popover.component-Bz6JsDKL.js";import{a as E,P as m,D as r}from"./popover.constants-DgvrlIqZ.js";import{h as u}from"./dom-BlZvhF8F.js";import{v as b}from"./v4-CmTdKEVZ.js";const A=O.constructTagName("tooltip"),i={DESCRIPTION:"description",LABEL:"label",NONE:"none"},t={ARIA_HIDDEN:"true",BACKDROP:!1,DELAY:"0,0",DISABLE_ARIA_EXPANDED:!0,HIDE_ON_BLUR:!0,HIDE_ON_ESCAPE:!0,TRIGGER:`${E.MOUSEENTER} ${E.FOCUSIN}`,OFFSET:4,PLACEMENT:m.TOP,SHOW_ARROW:!0,TOOLTIP_TYPE:i.DESCRIPTION,ONLY_SHOW_WHEN_TRIGGER_OVERFLOWS:!1},I=g`
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
`,y=[I];var _=Object.defineProperty,T=(d,e,s,L)=>{for(var o=void 0,l=d.length-1,p;l>=0;l--)(p=d[l])&&(o=p(e,s,o)||o);return o&&_(e,s,o),o};const n=class n extends h{constructor(){super(...arguments),this.tooltipType=t.TOOLTIP_TYPE,this.onlyShowWhenTriggerOverflows=t.ONLY_SHOW_WHEN_TRIGGER_OVERFLOWS}connectedCallback(){super.connectedCallback(),this.role=f.TOOLTIP,this.ariaHidden=t.ARIA_HIDDEN,this.backdrop=t.BACKDROP,this.delay=this.delay||t.DELAY,this.disableAriaExpanded=t.DISABLE_ARIA_EXPANDED,this.hideOnBlur=t.HIDE_ON_BLUR,this.hideOnEscape=t.HIDE_ON_ESCAPE,this.offset=this.offset||t.OFFSET,this.placement=this.placement||t.PLACEMENT,this.trigger=t.TRIGGER,this.closeButton=r.CLOSE_BUTTON,this.disableFlip=r.DISABLE_FLIP,this.focusBackToTrigger=r.FOCUS_BACK,this.focusTrap=r.FOCUS_TRAP,this.hideOnOutsideClick=r.HIDE_ON_CLICK_OUTSIDE,this.interactive=r.INTERACTIVE,this.preventScroll=r.PREVENT_SCROLL,this.size=r.SIZE}setTooltipType(e){this.setAttribute("tooltip-type",Object.values(i).includes(e)?e:t.TOOLTIP_TYPE)}async onIdUpdated(){if(this.id.length===0&&(this.id=`mdc-tooltip-${b()}`),await this.updateComplete,this.triggerElement)switch(this.tooltipType){case i.DESCRIPTION:this.triggerElement.setAttribute("aria-describedby",this.id);break;case i.LABEL:this.triggerElement.setAttribute("aria-labelledby",this.id);break}}onPlacementUpdated(){Object.values(m).includes(this.placement)||(this.placement=t.PLACEMENT)}onTooltipTypeUpdated(e){const s=e.get("tooltipType");if(Object.values(i).includes(this.tooltipType)||this.setTooltipType(t.TOOLTIP_TYPE),this.triggerElement)switch(this.tooltipType){case i.DESCRIPTION:s===i.LABEL&&this.triggerElement.removeAttribute("aria-labelledby"),this.triggerElement.setAttribute("aria-describedby",this.id);break;case i.LABEL:s===i.DESCRIPTION&&this.triggerElement.removeAttribute("aria-describedby"),this.triggerElement.setAttribute("aria-labelledby",this.id);break;default:s===i.DESCRIPTION?this.triggerElement.removeAttribute("aria-describedby"):s===i.LABEL&&this.triggerElement.removeAttribute("aria-labelledby");break}}async update(e){super.update(e),e.has("id")&&await this.onIdUpdated(),e.has("placement")&&this.onPlacementUpdated(),e.has("tooltipType")&&this.onTooltipTypeUpdated(e)}show(){this.onlyShowWhenTriggerOverflows&&this.triggerElement&&u(this.triggerElement)&&!this.triggerElement.isWidthOverflowing()||super.show()}};n.styles=[...h.styles,...y];let a=n;T([c({type:String,attribute:"tooltip-type",reflect:!0})],a.prototype,"tooltipType");T([c({type:Boolean,attribute:"only-show-when-trigger-overflows",reflect:!0})],a.prototype,"onlyShowWhenTriggerOverflows");a.register(A);export{t as D,i as T,A as a};
