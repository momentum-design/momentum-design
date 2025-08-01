import{u as f,P as n,n as u}from"./provider.component-BaQC7CJH.js";import{r as v}from"./state-C0WmBOuD.js";import{n as b}from"./create-context-89xeped_.js";import{i as g}from"./lit-element-D5KKan5q.js";const d=f.constructTagName("themeprovider"),h={THEMECLASS:"mds-theme-stable-darkWebex"},a=class a{constructor(t){this.themeclass=t}};a.context=b(d);let s=a;const y=g`
  :host {
    --mdc-themeprovider-color-default: var(--mds-color-theme-text-primary-normal);
    --mdc-themeprovider-font-family: var(--mds-font-family-primary);
    --mdc-themeprovider-font-weight: 400;
    /* adjusting Inter's letter spacing to better match the old CiscoSans */
    --mdc-themeprovider-letter-spacing-adjustment: -0.25px;
    /* Adjusting font feature settings for accessibility reasons */
    --mdc-themeprovider-font-feature-settings: 'ss02' on;

    /* Custom scrollbar variables */
    --mdc-themeprovider-scrollbar-track-color: transparent;
    --mdc-themeprovider-scrollbar-thumb-color: var(--mds-color-theme-scrollbar-button-normal);

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
`,C=[y];var x=Object.defineProperty,p=(l,t,c,S)=>{for(var e=void 0,o=l.length-1,m;o>=0;o--)(m=l[o])&&(e=m(t,c,e)||e);return e&&x(t,c,e),e};const i=class i extends n{constructor(){super({context:s.context,initialValue:new s(h.THEMECLASS)}),this.themeclass=h.THEMECLASS}static get Context(){return s.context}updated(t){super.updated(t),t.has("themeclass")&&(this.setThemeInClassList(),this.currentThemeClass=this.themeclass)}updateContext(){this.context.value.themeclass!==this.themeclass&&(this.context.value.themeclass=this.themeclass,this.context.updateObservers())}setThemeInClassList(){this.currentThemeClass&&this.classList.remove(...this.currentThemeClass.split(" ")),this.themeclass&&this.classList.add(...this.themeclass.split(" "))}};i.styles=[...n.styles,...C];let r=i;p([v()],r.prototype,"currentThemeClass");p([u({type:String})],r.prototype,"themeclass");r.register(d);export{r as T};
