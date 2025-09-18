import{i as h,k as g}from"./lit-element-D5KKan5q.js";import{u as f,n as m}from"./provider.component-BaQC7CJH.js";import{r as v}from"./state-C0WmBOuD.js";import{a as u,b as A,P as p,n as T}from"./popover.component-CgG8O1N4.js";import{t as y}from"./if-defined-D5BV9-c0.js";import"./index-BubpR6fk.js";import"./index-Dm_kZN_u.js";const O=f.constructTagName("toggletip"),o={CLOSE_BUTTON:!0,CLOSE_BUTTON_ARIA_LABEL:"Close",OFFSET:4,PLACEMENT:u.TOP,CLICK:A.CLICK,SHOW_ARROW:!0},E=h`
  :host {
    --mdc-toggletip-max-width: 400px;
    --mdc-toggletip-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-toggletip-text-color-contrast: var(--mds-color-theme-inverted-text-primary-normal);
  }

  :host::part(popover-content) {
    color: var(--mdc-toggletip-text-color);
    min-width: fit-content;
    max-width: var(--mdc-toggletip-max-width);

    font-size: var(--mds-font-apps-body-midsize-regular-font-size);
    font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
    line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-regular-text-case);
  }

  :host([color='contrast'])::part(popover-content) {
    color: var(--mdc-toggletip-text-color-contrast);
  }

  :host([close-button]:dir(ltr))::part(popover-content) {
    margin-right: 2rem;
  }

  :host([close-button]:dir(rtl))::part(popover-content) {
    margin-left: 2rem;
  }
`,x=[E];var C=Object.defineProperty,s=(c,t,n,l)=>{for(var r=void 0,i=c.length-1,d;i>=0;i--)(d=c[i])&&(r=d(t,n,r)||r);return r&&C(t,n,r),r};const a=class a extends p{constructor(){super(...arguments),this.currentAnnouncement="",this.placement=o.PLACEMENT}connectedCallback(){super.connectedCallback(),this.closeButton=this.closeButton??o.CLOSE_BUTTON,this.closeButtonAriaLabel=o.CLOSE_BUTTON_ARIA_LABEL,this.trigger=o.CLICK,this.showArrow=o.SHOW_ARROW,this.interactive=!0,this.backdrop=!0,this.hideOnBlur=!0,this.hideOnEscape=!0,this.hideOnOutsideClick=!0,this.disableAriaExpanded=!1,this.focusBackToTrigger=!0,this.focusTrap=!0}getToggleTipText(){var t,n;return((n=(t=this.defaultSlotNodes)==null?void 0:t.map(l=>l.textContent).join(" "))==null?void 0:n.trim())||""}onPlacementUpdated(){Object.values(u).includes(this.placement)||(this.placement=o.PLACEMENT)}update(t){super.update(t),t.has("placement")&&this.onPlacementUpdated(),t.has("visible")&&(this.currentAnnouncement=this.visible?this.getToggleTipText():"")}render(){return g`
      ${super.render()}
      <mdc-screenreaderannouncer
        identity="${y(this.screenreaderAnnouncerIdentity)}"
        announcement="${this.currentAnnouncement}"
        delay="300"
      >
      </mdc-screenreaderannouncer>
    `}};a.styles=[...p.styles,...x];let e=a;s([T()],e.prototype,"defaultSlotNodes");s([v()],e.prototype,"currentAnnouncement");s([m({type:String,reflect:!0,attribute:"screenreader-announcer-identity"})],e.prototype,"screenreaderAnnouncerIdentity");s([m({type:String,reflect:!0})],e.prototype,"placement");e.register(O);export{o as D};
