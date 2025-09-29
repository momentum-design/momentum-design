import{i as g,C as h,k as p,n as c}from"./iframe-Bwqyin4n.js";import{c as a,a as y,D as m,b as n,A as s,T as f}from"./divider.constants-BNR8aVdl.js";import{h as T}from"./index-B9nS4jim.js";import{a as A}from"./index-BOLOs5jY.js";import{T as k}from"./button.constants-B5vgp3PA.js";const w=[T,g`
    :host {
      --mdc-divider-background-color: var(--mds-color-theme-outline-secondary-normal);
      --mdc-divider-width: 0.0625rem;
      --mdc-divider-horizontal-gradient: var(--mds-color-theme-gradientdivider-default-normal);
      --mdc-divider-vertical-gradient: var(--mds-color-theme-gradientdivider-vertical-normal);
      --mdc-divider-text-size: var(--mds-font-size-body-midsize);
      --mdc-divider-text-color: var(--mds-color-theme-text-secondary-normal);
      --mdc-divider-text-line-height: var(--mds-font-lineheight-body-midsize);
      --mdc-divider-text-margin: 1.5rem;
      --mdc-divider-grabber-button-border-radius: 0.5rem;
      --mdc-divider-grabber-button-border-color: var(--mds-color-theme-outline-secondary-normal);
      --mdc-divider-grabber-button-background-color-normal: var(--mds-color-theme-overlay-button-secondary-normal);
      --mdc-divider-grabber-button-background-color-hover: var(--mds-color-theme-overlay-button-secondary-hover);
      --mdc-divider-grabber-button-background-color-pressed: var(--mds-color-theme-overlay-button-secondary-pressed);

      display: flex;
      justify-content: center;
    }

    /* Primary and grabber divider styles */
    :host([data-type='mdc-primary-divider']),
    :host([data-type='mdc-grabber-divider']) {
      background-color: var(--mdc-divider-background-color);
    }

    @media (forced-colors: active) {
      /* Primary and grabber divider styles */
      :host([data-type='mdc-primary-divider'][button-position='positive']),
      :host([data-type='mdc-grabber-divider'][button-position='positive']) {
        border: 0;
        border-top: var(--mdc-divider-width) solid var(--mdc-divider-background-color);
      }

      :host([data-type='mdc-primary-divider'][button-position='negative']),
      :host([data-type='mdc-grabber-divider'][button-position='negative']) {
        border: 0;
        border-bottom: var(--mdc-divider-width) solid var(--mdc-divider-background-color);
      }

      :host([data-type='mdc-primary-divider'][orientation='vertical'][button-position='positive']),
      :host([data-type='mdc-grabber-divider'][orientation='vertical'][button-position='positive']),
      :host([data-type='mdc-primary-divider'][orientation='vertical'][button-position='negative']:dir(rtl)),
      :host([data-type='mdc-grabber-divider'][orientation='vertical'][button-position='negative']:dir(rtl)) {
        border: 0;
        border-right: var(--mdc-divider-width) solid var(--mdc-divider-background-color);
      }

      :host([data-type='mdc-primary-divider'][orientation='vertical'][button-position='negative']),
      :host([data-type='mdc-grabber-divider'][orientation='vertical'][button-position='negative']),
      :host([data-type='mdc-primary-divider'][orientation='vertical'][button-position='positive']:dir(rtl)),
      :host([data-type='mdc-grabber-divider'][orientation='vertical'][button-position='positive']:dir(rtl)) {
        border: 0;
        border-left: var(--mdc-divider-width) solid var(--mdc-divider-background-color);
      }
    }

    /* Orientation-specific styles */
    :host([orientation='horizontal']) {
      flex-direction: row;
      height: var(--mdc-divider-width);
      width: 100%;
    }

    :host([orientation='vertical']:not([data-type='mdc-text-divider'])) {
      flex-direction: column;
      height: 100%;
      width: var(--mdc-divider-width);
    }

    /* Gradient styles for primary and grabber dividers */
    :host([orientation='horizontal'][variant='gradient'][data-type='mdc-primary-divider']),
    :host([orientation='horizontal'][variant='gradient'][data-type='mdc-grabber-divider']) {
      background: var(--mdc-divider-horizontal-gradient);
    }

    :host([orientation='vertical'][variant='gradient'][data-type='mdc-primary-divider']),
    :host([orientation='vertical'][variant='gradient'][data-type='mdc-grabber-divider']) {
      background: var(--mdc-divider-vertical-gradient);
    }

    /* Hiding slotted content for primary dividers */
    :host([data-type='mdc-primary-divider']) ::slotted(*) {
      display: none;
    }

    /** Button divider styles */

    ::slotted(mdc-button) {
      background-color: var(--mdc-divider-grabber-button-background-color-normal);
      border-color: var(--mdc-divider-grabber-button-border-color);
    }

    ::slotted(mdc-button:hover) {
      background-color: var(--mdc-divider-grabber-button-background-color-hover);
    }

    ::slotted(mdc-button:active) {
      background-color: var(--mdc-divider-grabber-button-background-color-pressed);
    }

    :host([orientation='vertical']) ::slotted(mdc-button) {
      width: 1.25rem;
      height: 2.5rem;
      border-radius: 0 var(--mdc-divider-grabber-button-border-radius) var(--mdc-divider-grabber-button-border-radius) 0;
    }

    :host([orientation='horizontal']) ::slotted(mdc-button) {
      height: 1.25rem;
      width: 2.5rem;
      border-radius: 0 0 var(--mdc-divider-grabber-button-border-radius) var(--mdc-divider-grabber-button-border-radius);
    }

    :host([orientation='horizontal'][button-position='positive']),
    :host([orientation='vertical'][button-position='negative']) {
      align-items: end;
    }

    :host([orientation='horizontal'][button-position='negative']),
    :host([orientation='vertical'][button-position='positive']) {
      align-items: start;
    }

    :host([orientation='horizontal'][button-position='positive']) ::slotted(mdc-button) {
      border-radius: var(--mdc-divider-grabber-button-border-radius) var(--mdc-divider-grabber-button-border-radius) 0 0;
      margin: 0;
      margin-bottom: var(--mdc-divider-width);
      border-bottom: 0;
    }

    :host([orientation='horizontal'][button-position='negative']) ::slotted(mdc-button) {
      margin: 0;
      margin-top: var(--mdc-divider-width);
      border-top: 0;
    }

    :host([orientation='vertical'][button-position='negative']:dir(ltr)) ::slotted(mdc-button),
    :host([orientation='vertical'][button-position='negative']:dir(rtl)) ::slotted(mdc-button) {
      border-radius: var(--mdc-divider-grabber-button-border-radius) 0 0 var(--mdc-divider-grabber-button-border-radius);
      margin: 0;
      margin-right: var(--mdc-divider-width);
      border-right: 0;
    }

    :host([orientation='vertical'][button-position='positive']:dir(ltr)) ::slotted(mdc-button),
    :host([orientation='vertical'][button-position='positive']:dir(rtl)) ::slotted(mdc-button) {
      margin: 0;
      margin-left: var(--mdc-divider-width);
      border-left: 0;
    }

    :host([orientation='vertical'][button-position='positive']:dir(rtl)) ::slotted(mdc-button) {
      border-radius: 0 var(--mdc-divider-grabber-button-border-radius) var(--mdc-divider-grabber-button-border-radius) 0;
      transform: rotate(180deg);
      margin: 0;
      margin-right: var(--mdc-divider-width);
    }

    :host([orientation='vertical'][button-position='negative']:dir(rtl)) ::slotted(mdc-button) {
      transform: rotate(180deg);
      margin: 0;
      margin-left: var(--mdc-divider-width);
    }

    /** Text divider styles */
    :host([orientation='horizontal'][variant='gradient'][data-type='mdc-text-divider']),
    :host([orientation='horizontal'][variant='solid'][data-type='mdc-text-divider']) {
      align-items: center;
    }

    :host([data-type='mdc-text-divider']) > div {
      width: 100%;
      height: 100%;
      background-color: var(--mdc-divider-background-color);
    }

    @media (forced-colors: active) {
      :host([data-type='mdc-text-divider']) > div {
        border-bottom: var(--mdc-divider-width) solid var(--mdc-divider-background-color);
      }
    }

    :host([orientation='horizontal'][variant='gradient'][data-type='mdc-text-divider']) > div:first-of-type {
      background: linear-gradient(to right, transparent, 30%, var(--mdc-divider-background-color));
    }

    :host([orientation='horizontal'][variant='gradient'][data-type='mdc-text-divider']) > div:last-of-type {
      background: linear-gradient(to left, transparent, 30%, var(--mdc-divider-background-color));
    }

    :host([data-type='mdc-text-divider']) ::slotted(mdc-text) {
      margin: 0 var(--mdc-divider-text-margin);
      color: var(--mdc-divider-text-color);
      font-size: var(--mdc-divider-text-size);
      line-height: var(--mdc-divider-text-line-height);
      flex-shrink: 0;
    }

    :host([data-hidden]) {
      display: none;
    }
  `];var I=Object.defineProperty,v=(u,t,r,b)=>{for(var i=void 0,o=u.length-1,d;o>=0;o--)(d=u[o])&&(i=d(t,r,i)||i);return i&&I(t,r,i),i};const l=class l extends h{constructor(){super(...arguments),this.orientation=a.ORIENTATION,this.variant=a.VARIANT,this.arrowDirection=a.ARROW_DIRECTION,this.buttonPosition=a.BUTTON_DIRECTION}setVariant(t){this.setAttribute("variant",Object.values(y).includes(t)?t:a.VARIANT)}setOrientation(t){this.setAttribute("orientation",Object.values(m).includes(t)?t:a.ORIENTATION)}ensureValidDirections(){const t=this.orientation===m.HORIZONTAL?n.NEGATIVE:n.POSITIVE;Object.values(n).includes(this.buttonPosition)||(this.buttonPosition=t),Object.values(n).includes(this.arrowDirection)||(this.arrowDirection=t)}setGrabberButton(){this.ensureValidDirections();const t=this.querySelector("mdc-button");if(t){const r=this.getArrowIcon();t.setAttribute("variant","secondary"),t.setAttribute("prefix-icon",r)}}getArrowIcon(){const t=this.orientation===m.HORIZONTAL,r=this.arrowDirection===n.POSITIVE;return t?r?s.UP:s.DOWN:r?s.RIGHT:s.LEFT}update(t){super.update(t),t.has("orientation")&&this.setOrientation(this.orientation),t.has("variant")&&this.setVariant(this.variant),(t.has("orientation")||t.has("arrowDirection")||t.has("buttonPosition"))&&this.setGrabberButton()}inferDividerType(){var o;const t=(o=this.shadowRoot)==null?void 0:o.querySelector("slot"),r=(t==null?void 0:t.assignedElements({flatten:!0}))||[];if(r.length>1)return;const b=r.some(d=>d.tagName===A.toUpperCase()),i=r.some(d=>d.tagName===k.toUpperCase());b&&!i?this.setAttribute("data-type","mdc-text-divider"):!b&&i&&(this.setAttribute("data-type","mdc-grabber-divider"),this.setGrabberButton())}connectedCallback(){super.connectedCallback(),this.setAttribute("data-type","mdc-primary-divider")}render(){return p`
      <div></div>
      <slot @slotchange=${this.inferDividerType}></slot>
      <div></div>
    `}};l.styles=[...h.styles,...w];let e=l;v([c({type:String,reflect:!0})],e.prototype,"orientation");v([c({type:String,reflect:!0})],e.prototype,"variant");v([c({type:String,attribute:"arrow-direction",reflect:!0})],e.prototype,"arrowDirection");v([c({type:String,attribute:"button-position",reflect:!0})],e.prototype,"buttonPosition");e.register(f);
