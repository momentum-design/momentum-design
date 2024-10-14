import{u,P as n,n as f}from"./index-fQJcZKNb.js";import{r as v}from"./state-GClRgdp0.js";import{i as C}from"./lit-element-CPYlYYac.js";import{n as y}from"./create-context-89xeped_.js";const d=u.constructTagName("themeprovider"),i={THEMECLASS:"mds-theme-stable-darkWebex",TYPOGRAPHYCLASS:"mds-typography"},c=class c{constructor(t){this.themeclass=t}};c.context=y(d);let s=c;const S=C`
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
`;var g=Object.defineProperty,p=(l,t,m,x)=>{for(var e=void 0,a=l.length-1,h;a>=0;a--)(h=l[a])&&(e=h(t,m,e)||e);return e&&g(t,m,e),e};const o=class o extends n{constructor(){super({context:s.context,initialValue:new s(i.THEMECLASS)}),this.themeclass=i.THEMECLASS}static get Context(){return s.context}connectedCallback(){super.connectedCallback(),this.classList.add(i.TYPOGRAPHYCLASS)}updated(t){super.updated(t),t.has("themeclass")&&(this.setThemeInClassList(),this.currentThemeClass=this.themeclass)}updateContext(){this.context.value.themeclass!==this.themeclass&&(this.context.value.themeclass=this.themeclass,this.context.updateObservers())}setThemeInClassList(){this.currentThemeClass&&this.classList.remove(...this.currentThemeClass.split(" ")),this.themeclass&&this.classList.add(...this.themeclass.split(" "))}};o.styles=[...n.styles,S];let r=o;p([v()],r.prototype,"currentThemeClass");p([f({type:String})],r.prototype,"themeclass");r.register(d);export{r as T};
