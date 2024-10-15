import{u,P as h,n as f}from"./index-BLShQaRP.js";import{r as v}from"./state-I_twzcUk.js";import{n as y}from"./create-context-89xeped_.js";import{i as C}from"./lit-element-CPYlYYac.js";const d=u.constructTagName("themeprovider"),i={THEMECLASS:"mds-theme-stable-darkWebex",TYPOGRAPHYCLASS:"mds-typography"},c=class c{constructor(t){this.themeclass=t}};c.context=y(d);let s=c;const S=C`
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
`,g=[S];var x=Object.defineProperty,p=(l,t,m,L)=>{for(var e=void 0,a=l.length-1,n;a>=0;a--)(n=l[a])&&(e=n(t,m,e)||e);return e&&x(t,m,e),e};const o=class o extends h{constructor(){super({context:s.context,initialValue:new s(i.THEMECLASS)}),this.themeclass=i.THEMECLASS}static get Context(){return s.context}connectedCallback(){super.connectedCallback(),this.classList.add(i.TYPOGRAPHYCLASS)}updated(t){super.updated(t),t.has("themeclass")&&(this.setThemeInClassList(),this.currentThemeClass=this.themeclass)}updateContext(){this.context.value.themeclass!==this.themeclass&&(this.context.value.themeclass=this.themeclass,this.context.updateObservers())}setThemeInClassList(){this.currentThemeClass&&this.classList.remove(...this.currentThemeClass.split(" ")),this.themeclass&&this.classList.add(...this.themeclass.split(" "))}};o.styles=[...h.styles,...g];let r=o;p([v()],r.prototype,"currentThemeClass");p([f({type:String})],r.prototype,"themeclass");r.register(d);export{r as T};
