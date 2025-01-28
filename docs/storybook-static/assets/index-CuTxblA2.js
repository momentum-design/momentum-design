import{u as f,P as l,n as u}from"./index-HW6KrQZO.js";import{r as v}from"./state-CWckTc1X.js";import{n as g}from"./create-context-89xeped_.js";import{i as y}from"./lit-element-CHllvULs.js";const d=f.constructTagName("themeprovider"),h={THEMECLASS:"mds-theme-stable-darkWebex"},i=class i{constructor(t){this.themeclass=t}};i.context=g(d);let s=i;const x=y`
  :host {
    --mdc-themeprovider-color-default: var(--mds-color-theme-text-primary-normal);
    --mdc-themeprovider-font-family: var(--mds-font-family-primary);
    --mdc-themeprovider-font-weight: 400;
    /* adjusting Inter's letter spacing to better match the old CiscoSans */
    --mdc-themeprovider-letter-spacing-adjustment: -0.25px;
    /* Adjusting font feature settings for accessibility reasons */
    --mdc-themeprovider-font-feature-settings: "ss02" on;

    color: var(--mdc-themeprovider-color-default);
    font-family: var(--mdc-themeprovider-font-family);
    font-weight: var(--mdc-themeprovider-font-weight);
    letter-spacing: var(--mdc-themeprovider-letter-spacing-adjustment);

    font-feature-settings: var(--mdc-themeprovider-font-feature-settings);
  }
`,C=[x];var S=Object.defineProperty,p=(c,t,m,T)=>{for(var e=void 0,a=c.length-1,n;a>=0;a--)(n=c[a])&&(e=n(t,m,e)||e);return e&&S(t,m,e),e};const o=class o extends l{constructor(){super({context:s.context,initialValue:new s(h.THEMECLASS)}),this.themeclass=h.THEMECLASS}static get Context(){return s.context}updated(t){super.updated(t),t.has("themeclass")&&(this.setThemeInClassList(),this.currentThemeClass=this.themeclass)}updateContext(){this.context.value.themeclass!==this.themeclass&&(this.context.value.themeclass=this.themeclass,this.context.updateObservers())}setThemeInClassList(){this.currentThemeClass&&this.classList.remove(...this.currentThemeClass.split(" ")),this.themeclass&&this.classList.add(...this.themeclass.split(" "))}};o.styles=[...l.styles,...C];let r=o;p([v()],r.prototype,"currentThemeClass");p([u({type:String})],r.prototype,"themeclass");r.register(d);export{r as T};
