import{u,P as h,n as v}from"./index-C9z9WAEj.js";import{r as f}from"./state-CSSggq2n.js";import{n as b}from"./create-context-89xeped_.js";import{i as g}from"./lit-element-D5KKan5q.js";const d=u.constructTagName("themeprovider"),n={THEMECLASS:"mds-theme-stable-darkWebex"},a=class a{constructor(t){this.themeclass=t}};a.context=b(d);let r=a;const y=g`
  :host {
    --mdc-themeprovider-color-default: var(--mds-color-theme-text-primary-normal);
    --mdc-themeprovider-font-family: var(--mds-font-family-primary);
    --mdc-themeprovider-font-weight: 400;
    /* adjusting Inter's letter spacing to better match the old CiscoSans */
    --mdc-themeprovider-letter-spacing-adjustment: -0.25px;
    /* Adjusting font feature settings for accessibility reasons */
    --mdc-themeprovider-font-feature-settings: 'ss02' on;

    /* Custom scrollbar variables */
    --mdc-themeprovider-scrollbar-track-color: var(--mds-color-theme-background-secondary-normal);
    --mdc-themeprovider-scrollbar-thumb-color: var(--mds-color-theme-scrollbar-button-normal);
    --mdc-themeprovider-scrollbar-thumb-hover-color: var(--mds-color-theme-scrollbar-button-hover);
    --mdc-themeprovider-scrollbar-thumb-active-color: var(--mds-color-theme-scrollbar-button-pressed);

    color: var(--mdc-themeprovider-color-default);
    font-family: var(--mdc-themeprovider-font-family);
    font-weight: var(--mdc-themeprovider-font-weight);
    letter-spacing: var(--mdc-themeprovider-letter-spacing-adjustment);

    font-feature-settings: var(--mdc-themeprovider-font-feature-settings);
  }

  /** Scrollbar Theme for Chrome, Edge, and Firefox. This has limited support on other browsers.
    https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color for more details */
  * {
    scrollbar-color: var(--mdc-themeprovider-scrollbar-thumb-color) var(--mdc-themeprovider-scrollbar-track-color);
  }
`,C=[y];var x=Object.defineProperty,p=(c,t,m,S)=>{for(var e=void 0,o=c.length-1,i;o>=0;o--)(i=c[o])&&(e=i(t,m,e)||e);return e&&x(t,m,e),e};const l=class l extends h{constructor(){super({context:r.context,initialValue:new r(n.THEMECLASS)}),this.themeclass=n.THEMECLASS}static get Context(){return r.context}updated(t){super.updated(t),t.has("themeclass")&&(this.setThemeInClassList(),this.currentThemeClass=this.themeclass)}updateContext(){this.context.value.themeclass!==this.themeclass&&(this.context.value.themeclass=this.themeclass,this.context.updateObservers())}setThemeInClassList(){this.currentThemeClass&&this.classList.remove(...this.currentThemeClass.split(" ")),this.themeclass&&this.classList.add(...this.themeclass.split(" "))}};l.styles=[...h.styles,...C];let s=l;p([f()],s.prototype,"currentThemeClass");p([v({type:String})],s.prototype,"themeclass");s.register(d);export{s as T};
