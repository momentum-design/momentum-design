import{i as u,k as h}from"./lit-element-D5KKan5q.js";import{u as g,n as f}from"./index-C9z9WAEj.js";import{r as v}from"./state-CSSggq2n.js";import{P as m,b as A,a as p,n as T}from"./popover.component-2fUXsfxE.js";import{t as O}from"./if-defined-D5BV9-c0.js";import"./index-BoSqLdGF.js";import"./index-CWUJHaLg.js";const E=g.constructTagName("toggletip"),r={CLOSE_BUTTON:!0,CLOSE_BUTTON_ARIA_LABEL:"Close",OFFSET:4,PLACEMENT:m.TOP,CLICK:A.CLICK,SHOW_ARROW:!0},x=u`
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
`,y=[x];var C=Object.defineProperty,i=(c,t,n,d)=>{for(var e=void 0,s=c.length-1,l;s>=0;s--)(l=c[s])&&(e=l(t,n,e)||e);return e&&C(t,n,e),e};const a=class a extends p{constructor(){super(...arguments),this.currentAnnouncement=""}connectedCallback(){super.connectedCallback(),this.closeButton=this.closeButton??r.CLOSE_BUTTON,this.closeButtonAriaLabel=r.CLOSE_BUTTON_ARIA_LABEL,this.placement=r.PLACEMENT,this.trigger=r.CLICK,this.showArrow=r.SHOW_ARROW,this.interactive=!0,this.backdrop=!0,this.hideOnBlur=!0,this.hideOnEscape=!0,this.hideOnOutsideClick=!0,this.disableAriaExpanded=!1,this.focusBackToTrigger=!0,this.focusTrap=!0}getToggleTipText(){var t,n;return((n=(t=this.defaultSlotNodes)==null?void 0:t.map(d=>d.textContent).join(" "))==null?void 0:n.trim())||""}onPlacementUpdated(){Object.values(m).includes(this.placement)||(this.placement=r.PLACEMENT)}update(t){super.update(t),t.has("placement")&&this.onPlacementUpdated(),t.has("visible")&&(this.currentAnnouncement=this.visible?this.getToggleTipText():"")}render(){return h`
      ${super.render()}
      <mdc-screenreaderannouncer
        identity="${O(this.screenreaderAnnouncerIdentity)}"
        announcement="${this.currentAnnouncement}"
        delay="300">
      </mdc-screenreaderannouncer>
    `}};a.styles=[...p.styles,...y];let o=a;i([T()],o.prototype,"defaultSlotNodes");i([v()],o.prototype,"currentAnnouncement");i([f({type:String,reflect:!0,attribute:"screenreader-announcer-identity"})],o.prototype,"screenreaderAnnouncerIdentity");o.register(E);export{r as D};
