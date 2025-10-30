import{u as h,S as g,k as f,$ as v,n as u}from"./iframe-BV5DWP9v.js";import{e as A}from"./base-DIkkzJ-c.js";import{t as y}from"./if-defined-D2_Zq9Ec.js";import{P as m,d as T,a as p}from"./popover.component-B4ffFb1U.js";import"./index-YCvhlFMa.js";import"./index-CPTTc5X-.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function O(c){return(t,r)=>{const{slot:i}={},e="slot"+(i?`[name=${i}]`:":not([name])");return A(t,r,{get(){var a;const o=(a=this.renderRoot)==null?void 0:a.querySelector(e);return(o==null?void 0:o.assignedNodes(c))??[]}})}}const E=h.constructTagName("toggletip"),s={CLOSE_BUTTON:!0,CLOSE_BUTTON_ARIA_LABEL:"Close",OFFSET:4,PLACEMENT:m.TOP,CLICK:T.CLICK,SHOW_ARROW:!0},x=g`
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
`,C=[x];var b=Object.defineProperty,d=(c,t,r,i)=>{for(var e=void 0,o=c.length-1,a;o>=0;o--)(a=c[o])&&(e=a(t,r,e)||e);return e&&b(t,r,e),e};const l=class l extends p{constructor(){super(...arguments),this.currentAnnouncement="",this.placement=s.PLACEMENT}connectedCallback(){super.connectedCallback(),this.closeButton=this.closeButton??s.CLOSE_BUTTON,this.closeButtonAriaLabel=s.CLOSE_BUTTON_ARIA_LABEL,this.trigger=s.CLICK,this.showArrow=s.SHOW_ARROW,this.interactive=!0,this.backdrop=!0,this.hideOnBlur=!0,this.hideOnEscape=!0,this.hideOnOutsideClick=!0,this.disableAriaExpanded=!1,this.focusBackToTrigger=!0,this.focusTrap=!0}getToggleTipText(){var t,r;return((r=(t=this.defaultSlotNodes)==null?void 0:t.map(i=>i.textContent).join(" "))==null?void 0:r.trim())||""}onPlacementUpdated(){Object.values(m).includes(this.placement)||(this.placement=s.PLACEMENT)}update(t){super.update(t),t.has("placement")&&this.onPlacementUpdated(),t.has("visible")&&(this.currentAnnouncement=this.visible?this.getToggleTipText():"")}render(){return f`
      ${super.render()}
      <mdc-screenreaderannouncer
        identity="${y(this.screenreaderAnnouncerIdentity)}"
        announcement="${this.currentAnnouncement}"
        delay="300"
      >
      </mdc-screenreaderannouncer>
    `}};l.styles=[...p.styles,...C];let n=l;d([O()],n.prototype,"defaultSlotNodes");d([v()],n.prototype,"currentAnnouncement");d([u({type:String,reflect:!0,attribute:"screenreader-announcer-identity"})],n.prototype,"screenreaderAnnouncerIdentity");d([u({type:String,reflect:!0})],n.prototype,"placement");n.register(E);export{s as D};
