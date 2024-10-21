import{u as f,P as h,n as u}from"./index-BLShQaRP.js";import{r as v}from"./state-I_twzcUk.js";import{n as y}from"./create-context-89xeped_.js";import{i as x}from"./lit-element-CPYlYYac.js";const d=f.constructTagName("themeprovider"),n={THEMECLASS:"mds-theme-stable-darkWebex"},i=class i{constructor(t){this.themeclass=t}};i.context=y(d);let s=i;const g=x`
  :host {
    --mdc-themeprovider-color-default: var(--mds-color-theme-text-primary-normal);
    --mdc-themeprovider-font-family: var(--mds-font-family-primary);
    --mdc-themeprovider-font-weight: 400;
    /* adjusting Inter's letter spacing to better match the old CiscoSans */
    --mdc-themeprovider-letter-spacing-adjustment: -0.25px;

    color: var(--mdc-themeprovider-color-default);
    font-family: var(--mdc-themeprovider-font-family);
    font-weight: var(--mdc-themeprovider-font-weight);
    letter-spacing: var(--mdc-themeprovider-letter-spacing-adjustment);
  }
`,C=[g];var S=Object.defineProperty,p=(o,t,m,T)=>{for(var e=void 0,a=o.length-1,l;a>=0;a--)(l=o[a])&&(e=l(t,m,e)||e);return e&&S(t,m,e),e};const c=class c extends h{constructor(){super({context:s.context,initialValue:new s(n.THEMECLASS)}),this.themeclass=n.THEMECLASS}static get Context(){return s.context}updated(t){super.updated(t),t.has("themeclass")&&(this.setThemeInClassList(),this.currentThemeClass=this.themeclass)}updateContext(){this.context.value.themeclass!==this.themeclass&&(this.context.value.themeclass=this.themeclass,this.context.updateObservers())}setThemeInClassList(){this.currentThemeClass&&this.classList.remove(...this.currentThemeClass.split(" ")),this.themeclass&&this.classList.add(...this.themeclass.split(" "))}};c.styles=[...h.styles,...C];let r=c;p([v()],r.prototype,"currentThemeClass");p([u({type:String})],r.prototype,"themeclass");r.register(d);export{r as T};
