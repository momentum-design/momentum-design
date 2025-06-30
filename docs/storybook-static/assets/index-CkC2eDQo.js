import{u as T,n as f}from"./index-C9z9WAEj.js";import{P as h,a as c,n as u}from"./popover.component-8bxwjTLA.js";import{R as b}from"./roles-BH_hBfTz.js";import{i as y}from"./lit-element-D5KKan5q.js";import{v as E}from"./v4-CmTdKEVZ.js";const O=T.constructTagName("tooltip"),e={DESCRIPTION:"description",LABEL:"label",NONE:"none"},a={BACKDROP:!1,DELAY:"0,0",OFFSET:4,PLACEMENT:h.TOP,SHOW_ARROW:!0,TOOLTIP_TYPE:e.DESCRIPTION},v=y`
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
`,g=[v];var P=Object.defineProperty,m=(p,t,i,o)=>{for(var s=void 0,l=p.length-1,n;l>=0;l--)(n=p[l])&&(s=n(t,i,s)||s);return s&&P(t,i,s),s};const d=class d extends c{constructor(){super(...arguments),this.tooltipType=a.TOOLTIP_TYPE}connectedCallback(){super.connectedCallback(),this.backdrop=!1,this.delay=this.delay||a.DELAY,this.focusTrap=!1,this.hideOnBlur=!0,this.hideOnEscape=!0,this.interactive=!1,this.offset=this.offset||a.OFFSET,this.placement=this.placement||a.PLACEMENT,this.role=b.TOOLTIP,this.trigger="mouseenter focusin",this.preventScroll=!1,this.flip=!0,this.preventScroll=!1,this.closeButton=!1,this.hideOnOutsideClick=!1,this.focusBackToTrigger=!1,this.size=!1,this.disableAriaExpanded=!0}getTooltipText(){var t,i;return((i=(t=this.defaultSlotNodes)==null?void 0:t.map(o=>o.textContent).join(" "))==null?void 0:i.trim())||""}setTooltipType(t){this.setAttribute("tooltip-type",Object.values(e).includes(t)?t:a.TOOLTIP_TYPE)}onIdUpdated(){this.id.length===0&&(this.id=`mdc-tooltip-${E()}`);const t=document.getElementById(this.triggerID);if(t)switch(this.tooltipType){case e.DESCRIPTION:t.setAttribute("aria-describedby",this.id);break;case e.LABEL:t.setAttribute("aria-labelledby",this.id);break}}onPlacementUpdated(){Object.values(h).includes(this.placement)||(this.placement=a.PLACEMENT)}onTooltipTypeUpdated(t){const i=t.get("tooltipType");Object.values(e).includes(this.tooltipType)||this.setTooltipType(a.TOOLTIP_TYPE);const o=document.getElementById(this.triggerID);if(o){const s=this.getTooltipText();switch(this.tooltipType){case e.DESCRIPTION:i===e.LABEL&&o.removeAttribute("aria-labelledby"),o.setAttribute("aria-describedby",this.id);break;case e.LABEL:i===e.DESCRIPTION&&o.removeAttribute("aria-describedby"),o.setAttribute("aria-labelledby",this.id);break;default:i===e.DESCRIPTION?o.removeAttribute("aria-describedby"):i===e.LABEL&&o.removeAttribute("aria-labelledby");break}s.length>0&&this.tooltipType!==e.NONE&&!this.ariaLabel&&(this.ariaLabel=s)}}update(t){super.update(t),t.has("id")&&this.onIdUpdated(),t.has("placement")&&this.onPlacementUpdated(),t.has("tooltipType")&&this.onTooltipTypeUpdated(t)}};d.styles=[...c.styles,...g];let r=d;m([f({type:String,attribute:"tooltip-type",reflect:!0})],r.prototype,"tooltipType");m([u()],r.prototype,"defaultSlotNodes");r.register(O);export{a as D,e as T,O as a};
