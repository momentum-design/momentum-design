import{u as h,S as m,W as T,n as f}from"./iframe-DMX3WSm5.js";import{P as c,a as n}from"./popover.component-D2BHNvza.js";import{v as u}from"./v4-CmTdKEVZ.js";const b=h.constructTagName("tooltip"),e={DESCRIPTION:"description",LABEL:"label",NONE:"none"},s={BACKDROP:!1,DELAY:"0,0",OFFSET:4,PLACEMENT:c.TOP,SHOW_ARROW:!0,TOOLTIP_TYPE:e.DESCRIPTION},E=m`
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
`,g=[E];var y=Object.defineProperty,O=(d,t,i,v)=>{for(var o=void 0,r=d.length-1,p;r>=0;r--)(p=d[r])&&(o=p(t,i,o)||o);return o&&y(t,i,o),o};const l=class l extends n{constructor(){super(...arguments),this.tooltipType=s.TOOLTIP_TYPE}connectedCallback(){super.connectedCallback(),this.backdrop=!1,this.delay=this.delay||s.DELAY,this.focusTrap=!1,this.hideOnBlur=!0,this.hideOnEscape=!0,this.interactive=!1,this.offset=this.offset||s.OFFSET,this.placement=this.placement||s.PLACEMENT,this.role=T.TOOLTIP,this.trigger="mouseenter focusin",this.preventScroll=!1,this.disableFlip=!1,this.preventScroll=!1,this.closeButton=!1,this.hideOnOutsideClick=!1,this.focusBackToTrigger=!1,this.size=!1,this.disableAriaExpanded=!0}setTooltipType(t){this.setAttribute("tooltip-type",Object.values(e).includes(t)?t:s.TOOLTIP_TYPE)}async onIdUpdated(){if(this.id.length===0&&(this.id=`mdc-tooltip-${u()}`),await this.updateComplete,this.triggerElement)switch(this.tooltipType){case e.DESCRIPTION:this.triggerElement.setAttribute("aria-describedby",this.id);break;case e.LABEL:this.triggerElement.setAttribute("aria-labelledby",this.id);break}}onPlacementUpdated(){Object.values(c).includes(this.placement)||(this.placement=s.PLACEMENT)}onTooltipTypeUpdated(t){const i=t.get("tooltipType");if(Object.values(e).includes(this.tooltipType)||this.setTooltipType(s.TOOLTIP_TYPE),this.triggerElement)switch(this.tooltipType){case e.DESCRIPTION:i===e.LABEL&&this.triggerElement.removeAttribute("aria-labelledby"),this.triggerElement.setAttribute("aria-describedby",this.id);break;case e.LABEL:i===e.DESCRIPTION&&this.triggerElement.removeAttribute("aria-describedby"),this.triggerElement.setAttribute("aria-labelledby",this.id);break;default:i===e.DESCRIPTION?this.triggerElement.removeAttribute("aria-describedby"):i===e.LABEL&&this.triggerElement.removeAttribute("aria-labelledby");break}}async update(t){super.update(t),t.has("id")&&await this.onIdUpdated(),t.has("placement")&&this.onPlacementUpdated(),t.has("tooltipType")&&this.onTooltipTypeUpdated(t)}};l.styles=[...n.styles,...g];let a=l;O([f({type:String,attribute:"tooltip-type",reflect:!0})],a.prototype,"tooltipType");a.register(b);export{s as D,e as T,b as a};
