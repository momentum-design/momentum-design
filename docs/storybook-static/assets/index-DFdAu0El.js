import{u as T,n as f}from"./provider.component-BaQC7CJH.js";import{a as h,P as c,n as u}from"./popover.component-LefqH8IC.js";import{R as b}from"./roles-DU0xbrD4.js";import{i as E}from"./lit-element-D5KKan5q.js";import{v as g}from"./v4-CmTdKEVZ.js";const y=T.constructTagName("tooltip"),e={DESCRIPTION:"description",LABEL:"label",NONE:"none"},s={BACKDROP:!1,DELAY:"0,0",OFFSET:4,PLACEMENT:h.TOP,SHOW_ARROW:!0,TOOLTIP_TYPE:e.DESCRIPTION},O=E`
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
`,v=[O];var P=Object.defineProperty,m=(d,t,i,r)=>{for(var o=void 0,l=d.length-1,n;l>=0;l--)(n=d[l])&&(o=n(t,i,o)||o);return o&&P(t,i,o),o};const p=class p extends c{constructor(){super(...arguments),this.tooltipType=s.TOOLTIP_TYPE}connectedCallback(){super.connectedCallback(),this.backdrop=!1,this.delay=this.delay||s.DELAY,this.focusTrap=!1,this.hideOnBlur=!0,this.hideOnEscape=!0,this.interactive=!1,this.offset=this.offset||s.OFFSET,this.placement=this.placement||s.PLACEMENT,this.role=b.TOOLTIP,this.trigger="mouseenter focusin",this.preventScroll=!1,this.flip=!0,this.preventScroll=!1,this.closeButton=!1,this.hideOnOutsideClick=!1,this.focusBackToTrigger=!1,this.size=!1,this.disableAriaExpanded=!0}getTooltipText(){var t,i;return((i=(t=this.defaultSlotNodes)==null?void 0:t.map(r=>r.textContent).join(" "))==null?void 0:i.trim())||""}setTooltipType(t){this.setAttribute("tooltip-type",Object.values(e).includes(t)?t:s.TOOLTIP_TYPE)}async onIdUpdated(){if(this.id.length===0&&(this.id=`mdc-tooltip-${g()}`),await this.updateComplete,this.triggerElement)switch(this.tooltipType){case e.DESCRIPTION:this.triggerElement.setAttribute("aria-describedby",this.id);break;case e.LABEL:this.triggerElement.setAttribute("aria-labelledby",this.id);break}}onPlacementUpdated(){Object.values(h).includes(this.placement)||(this.placement=s.PLACEMENT)}onTooltipTypeUpdated(t){const i=t.get("tooltipType");if(Object.values(e).includes(this.tooltipType)||this.setTooltipType(s.TOOLTIP_TYPE),this.triggerElement){const r=this.getTooltipText();switch(this.tooltipType){case e.DESCRIPTION:i===e.LABEL&&this.triggerElement.removeAttribute("aria-labelledby"),this.triggerElement.setAttribute("aria-describedby",this.id);break;case e.LABEL:i===e.DESCRIPTION&&this.triggerElement.removeAttribute("aria-describedby"),this.triggerElement.setAttribute("aria-labelledby",this.id);break;default:i===e.DESCRIPTION?this.triggerElement.removeAttribute("aria-describedby"):i===e.LABEL&&this.triggerElement.removeAttribute("aria-labelledby");break}r.length>0&&this.tooltipType!==e.NONE&&!this.ariaLabel&&(this.ariaLabel=r)}}async update(t){super.update(t),t.has("id")&&await this.onIdUpdated(),t.has("placement")&&this.onPlacementUpdated(),t.has("tooltipType")&&this.onTooltipTypeUpdated(t)}};p.styles=[...c.styles,...v];let a=p;m([f({type:String,attribute:"tooltip-type",reflect:!0})],a.prototype,"tooltipType");m([u()],a.prototype,"defaultSlotNodes");a.register(y);export{s as D,e as T,y as a};
