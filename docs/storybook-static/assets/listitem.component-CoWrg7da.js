import{u as L,n as l,C as T}from"./index-C9z9WAEj.js";import{P as b,a as f,n as _}from"./popover.component-Dx75vo8o.js";import{R as A}from"./roles-DCpIf2k8.js";import{i as O,D as C,k as y}from"./lit-element-D5KKan5q.js";import{v as k}from"./v4-CmTdKEVZ.js";import{o as I}from"./query-assigned-elements-uEuc3rg8.js";import{D}from"./DisabledMixin-BZruwOeC.js";import{T as N}from"./TabIndexMixin-CsrHswKP.js";import{V as R,T as h}from"./text.constants-ZF0jM5wn.js";import{a as w}from"./index-CcXofQbA.js";const S=L.constructTagName("tooltip"),o={DESCRIPTION:"description",LABEL:"label",NONE:"none"},n={BACKDROP:!1,DELAY:"0,0",OFFSET:4,PLACEMENT:b.TOP,SHOW_ARROW:!0,TOOLTIP_TYPE:o.DESCRIPTION},$=O`

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
`,M=[$];var B=Object.defineProperty,P=(c,t,e,r)=>{for(var i=void 0,d=c.length-1,p;d>=0;d--)(p=c[d])&&(i=p(t,e,i)||i);return i&&B(t,e,i),i};const u=class u extends f{constructor(){super(...arguments),this.tooltipType=n.TOOLTIP_TYPE}connectedCallback(){super.connectedCallback(),this.backdrop=!1,this.delay=this.delay||n.DELAY,this.focusTrap=!1,this.hideOnBlur=!0,this.hideOnEscape=!0,this.interactive=!1,this.offset=this.offset||n.OFFSET,this.placement=this.placement||n.PLACEMENT,this.role=A.TOOLTIP,this.trigger="mouseenter focusin",this.enabledFocusTrap=!1,this.enabledPreventScroll=!1,this.flip=!0,this.focusTrap=!1,this.preventScroll=!1,this.closeButton=!1,this.hideOnOutsideClick=!1,this.focusBackToTrigger=!1,this.size=!1,this.disableAriaExpanded=!0}getTooltipText(){var t,e;return((e=(t=this.defaultSlotNodes)==null?void 0:t.map(r=>r.textContent).join(" "))==null?void 0:e.trim())||""}setTooltipType(t){this.setAttribute("tooltip-type",Object.values(o).includes(t)?t:n.TOOLTIP_TYPE)}onIdUpdated(){this.id.length===0&&(this.id=`mdc-tooltip-${k()}`);const t=document.getElementById(this.triggerID);if(t)switch(this.tooltipType){case o.DESCRIPTION:t.setAttribute("aria-describedby",this.id);break;case o.LABEL:t.setAttribute("aria-labelledby",this.id);break}}onPlacementUpdated(){Object.values(b).includes(this.placement)||(this.placement=n.PLACEMENT)}onTooltipTypeUpdated(t){const e=t.get("tooltipType");Object.values(o).includes(this.tooltipType)||this.setTooltipType(n.TOOLTIP_TYPE);const r=document.getElementById(this.triggerID);if(r){const i=this.getTooltipText();switch(this.tooltipType){case o.DESCRIPTION:e===o.LABEL&&r.removeAttribute("aria-labelledby"),r.setAttribute("aria-describedby",this.id);break;case o.LABEL:e===o.DESCRIPTION&&r.removeAttribute("aria-describedby"),r.setAttribute("aria-labelledby",this.id);break;default:e===o.DESCRIPTION?r.removeAttribute("aria-describedby"):e===o.LABEL&&r.removeAttribute("aria-labelledby");break}i.length>0&&this.tooltipType!==o.NONE&&!this.ariaLabel&&(this.ariaLabel=i)}}update(t){super.update(t),t.has("id")&&this.onIdUpdated(),t.has("placement")&&this.onPlacementUpdated(),t.has("tooltipType")&&this.onTooltipTypeUpdated(t)}};u.styles=[...f.styles,...M];let m=u;P([l({type:String,attribute:"tooltip-type",reflect:!0})],m.prototype,"tooltipType");P([_()],m.prototype,"defaultSlotNodes");m.register(S);const Q=L.constructTagName("listitem"),v="dynamic-listitem-tooltip-popover",x="dynamic-listitem-tooltip-triggerid",U={FULL_WIDTH:"full-width",INSET_PILL:"inset-pill",INSET_RECTANGLE:"inset-rectangle"},E={VARIANT:U.FULL_WIDTH,TOOLTIP_PLACEMENT:b.TOP},F=O`
  :host {
    --mdc-listitem-default-background-color: var(--mds-color-theme-background-primary-ghost);
    --mdc-listitem-background-color-hover: var(--mds-color-theme-background-primary-hover);
    --mdc-listitem-background-color-active: var(--mds-color-theme-background-primary-active);
    --mdc-listitem-primary-label-color: var(--mds-color-theme-text-primary-normal);
    --mdc-listitem-secondary-label-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-listitem-disabled-color: var(--mds-color-theme-text-primary-disabled);
    --mdc-listitem-column-gap: 0.75rem;
    --mdc-listitem-padding-left-and-right: 0.75rem;
  }
  :host {
    background-color: var(--mdc-listitem-default-background-color);
    column-gap: var(--mdc-listitem-column-gap);
    cursor: pointer;
    display: flex;
    flex-direction: row;
    padding: 0.5rem var(--mdc-listitem-padding-left-and-right);
    width: 100%;
  }
  :host([variant="inset-rectangle"]) {
    border-radius: 0.5rem;
  }
  :host([variant="inset-pill"]) {
    border-radius: 3.125rem;
  }
  :host::part(leading-text) {
    flex: 1;
    /** 2x of column gap on both ends of the listitem - 100% width */
    width: calc(100% - (2 * var(--mdc-listitem-padding-left-and-right)));
  }
  :host::part(leading-text-primary-label),
  :host::part(leading-text-secondary-label),
  :host::part(leading-text-tertiary-label),
  :host::part(trailing-text-side-header),
  :host::part(trailing-text-subline) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  :host([disabled]),
  :host([disabled]:hover),
  :host([disabled]:active),
  :host([disabled])::part(leading-text-secondary-label),
  :host([disabled])::part(leading-text-tertiary-label),
  :host([disabled])::part(leading-text-primary-label),
  :host([disabled])::part(trailing-text-side-header),
  :host([disabled])::part(trailing-text-subline) {
    background-color: unset;
    color: var(--mdc-listitem-disabled-color);
    cursor: default;
  }
  :host(:hover) {
    background-color: var(--mdc-listitem-background-color-hover);
  }
  :host(:active) {
    background-color: var(--mdc-listitem-background-color-active);
  }
  :host::part(leading), :host::part(trailing) {
    align-items: center;
    column-gap: var(--mdc-listitem-column-gap);
    display: flex;
    width: 100%;
  }
  :host::part(trailing) {
    justify-content: flex-end;
  }
  :host::part(leading-text-secondary-label), :host::part(leading-text-tertiary-label) {
    color: var(--mdc-listitem-secondary-label-color);
  }
  :host::part(leading-text-primary-label), :host::part(trailing-text-side-header), :host::part(trailing-text-subline) {
    color: var(--mdc-listitem-primary-label-color);
  }
  :host::part(trailing-text) {
    text-align: right;
  }
  ::slotted([slot="leading-controls"]), ::slotted([slot="trailing-controls"]) {
    align-items: center;
    column-gap: var(--mdc-listitem-column-gap);
    display: flex;
    flex-direction: row;
  }
`,Y=[F,...w()];var G=Object.defineProperty,s=(c,t,e,r)=>{for(var i=void 0,d=c.length-1,p;d>=0;d--)(p=c[d])&&(i=p(t,e,i)||i);return i&&G(t,e,i),i};const g=class g extends D(N(T)){constructor(){super(),this.variant=E.VARIANT,this.tooltipPlacement=E.TOOLTIP_PLACEMENT,this.addEventListener("focusin",this.displayTooltipForLongText),this.addEventListener("mouseover",this.displayTooltipForLongText),this.addEventListener("focusout",this.hideTooltipOnLeave),this.addEventListener("mouseout",this.hideTooltipOnLeave),this.addEventListener("click",this.handleClick)}connectedCallback(){super.connectedCallback(),this.role=this.role||A.LISTITEM}handleClick(){this.hideTooltipOnLeave()}displayTooltipForLongText(){var e;if(!this.tooltipText)return;this.id=this.id||x;const t=document.createElement(S);t.id=v,t.textContent=this.tooltipText,t.setAttribute("triggerid",this.id),t.setAttribute("placement",this.tooltipPlacement),t.setAttribute("visible",""),t.setAttribute("show-arrow",""),(e=this.parentElement)==null||e.after(t)}hideTooltipOnLeave(){this.id=this.id===x?"":this.id;const t=document.querySelector(`#${v}`);t==null||t.remove()}getText(t,e,r){return r?y`
      <slot name="${t}">
        <mdc-text part="${t}" type="${e}" tagname="${R.SPAN}">${r}</mdc-text>
      </slot>
    `:C}disableSlottedChildren(t){[...this.leadingControlsSlot,...this.trailingControlsSlot].forEach(e=>{t?e.setAttribute("disabled",""):e.removeAttribute("disabled")})}update(t){super.update(t),t.has("disabled")&&(this.tabIndex=this.disabled?-1:0,this.disableSlottedChildren(this.disabled),this.setAttribute("aria-disabled",`${this.disabled}`))}render(){return y`
      <div part="leading">
        <slot name="leading-controls"></slot>
        <div part="leading-text">
          ${this.getText("leading-text-primary-label",h.BODY_MIDSIZE_REGULAR,this.label)}
          ${this.getText("leading-text-secondary-label",h.BODY_SMALL_REGULAR,this.secondaryLabel)}
          ${this.getText("leading-text-tertiary-label",h.BODY_SMALL_REGULAR,this.tertiaryLabel)}
        </div>
      </div>
      <div part="trailing">
        <div part="trailing-text">
          ${this.getText("trailing-text-side-header",h.BODY_MIDSIZE_REGULAR,this.sideHeaderText)}
          ${this.getText("trailing-text-subline",h.BODY_SMALL_REGULAR,this.sublineText)}
        </div>
        <slot name="trailing-controls"></slot>
      </div>
    `}};g.styles=[...T.styles,...Y];let a=g;s([I({slot:"leading-controls"})],a.prototype,"leadingControlsSlot");s([I({slot:"trailing-controls"})],a.prototype,"trailingControlsSlot");s([l({type:String,reflect:!0})],a.prototype,"variant");s([l({type:String,reflect:!0})],a.prototype,"label");s([l({type:String,reflect:!0,attribute:"secondary-label"})],a.prototype,"secondaryLabel");s([l({type:String,reflect:!0,attribute:"tertiary-label"})],a.prototype,"tertiaryLabel");s([l({type:String,reflect:!0,attribute:"side-header-text"})],a.prototype,"sideHeaderText");s([l({type:String,reflect:!0,attribute:"subline-text"})],a.prototype,"sublineText");s([l({type:String,reflect:!0,attribute:"tooltip-text"})],a.prototype,"tooltipText");s([l({type:String,reflect:!0,attribute:"tooltip-placement"})],a.prototype,"tooltipPlacement");export{n as D,U as L,o as T,a,Q as b};
