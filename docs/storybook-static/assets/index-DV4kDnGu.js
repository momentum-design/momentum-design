import{u,n as f}from"./index-C9z9WAEj.js";import{e as T}from"./base-DIkkzJ-c.js";import{P as h,a as c}from"./popover.component-MSr1o-8H.js";import{i as b}from"./lit-element-D5KKan5q.js";import{v as y}from"./v4-CmTdKEVZ.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function E(d){return(t,i)=>{const{slot:e}={},s="slot"+(e?`[name=${e}]`:":not([name])");return T(t,i,{get(){var l;const r=(l=this.renderRoot)==null?void 0:l.querySelector(s);return(r==null?void 0:r.assignedNodes(d))??[]}})}}const O=u.constructTagName("tooltip"),o={DESCRIPTION:"description",LABEL:"label",NONE:"none"},a={BACKDROP:!1,DELAY:"0,0",OFFSET:4,PLACEMENT:h.TOP,SHOW_ARROW:!0,TOOLTIP_TYPE:o.DESCRIPTION},g=b`

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
`,v=[g];var P=Object.defineProperty,m=(d,t,i,e)=>{for(var s=void 0,r=d.length-1,l;r>=0;r--)(l=d[r])&&(s=l(t,i,s)||s);return s&&P(t,i,s),s};const p=class p extends c{constructor(){super(...arguments),this.tooltipType=a.TOOLTIP_TYPE}connectedCallback(){super.connectedCallback(),this.backdrop=!1,this.delay=a.DELAY,this.focusTrap=!1,this.hideOnBlur=!0,this.hideOnEscape=!0,this.interactive=!1,this.offset=a.OFFSET,this.placement=a.PLACEMENT,this.role="tooltip",this.trigger="mouseenter focusin",this.enabledFocusTrap=!1,this.enabledPreventScroll=!1,this.flip=!0,this.focusTrap=!1,this.preventScroll=!1,this.closeButton=!1,this.hideOnOutsideClick=!1,this.focusBackToTrigger=!1,this.size=!1,this.disableAriaExpanded=!0}getTooltipText(){var t,i;return((i=(t=this.defaultSlotNodes)==null?void 0:t.map(e=>e.textContent).join(" "))==null?void 0:i.trim())||""}setTooltipType(t){this.setAttribute("tooltip-type",Object.values(o).includes(t)?t:a.TOOLTIP_TYPE)}onIdUpdated(){this.id.length===0&&(this.id=`mdc-tooltip-${y()}`);const t=document.getElementById(this.triggerID);if(t)switch(this.tooltipType){case o.DESCRIPTION:t.setAttribute("aria-describedby",this.id);break;case o.LABEL:t.setAttribute("aria-labelledby",this.id);break}}onPlacementUpdated(){Object.values(h).includes(this.placement)||(this.placement=a.PLACEMENT)}onTooltipTypeUpdated(t){const i=t.get("tooltipType");Object.values(o).includes(this.tooltipType)||this.setTooltipType(a.TOOLTIP_TYPE);const e=document.getElementById(this.triggerID);if(e){const s=this.getTooltipText();switch(this.tooltipType){case o.DESCRIPTION:i===o.LABEL&&e.removeAttribute("aria-labelledby"),e.setAttribute("aria-describedby",this.id);break;case o.LABEL:i===o.DESCRIPTION&&e.removeAttribute("aria-describedby"),e.setAttribute("aria-labelledby",this.id);break;default:i===o.DESCRIPTION?e.removeAttribute("aria-describedby"):i===o.LABEL&&e.removeAttribute("aria-labelledby");break}s.length>0&&this.tooltipType!==o.NONE&&!this.ariaLabel&&(this.ariaLabel=s)}}update(t){super.update(t),t.has("id")&&this.onIdUpdated(),t.has("placement")&&this.onPlacementUpdated(),t.has("tooltipType")&&this.onTooltipTypeUpdated(t)}};p.styles=[...c.styles,...v];let n=p;m([f({type:String,attribute:"tooltip-type",reflect:!0})],n.prototype,"tooltipType");m([E()],n.prototype,"defaultSlotNodes");n.register(O);export{a as D,o as T,O as a};
