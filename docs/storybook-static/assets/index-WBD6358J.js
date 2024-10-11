import{u,P as n,n as f}from"./index-fQJcZKNb.js";import{r as v}from"./state-GClRgdp0.js";import{i as y}from"./lit-element-CPYlYYac.js";import{n as C}from"./create-context-89xeped_.js";const p=u.constructTagName("themeprovider"),i={THEMECLASS:"mds-theme-stable-darkWebex",TYPOGRAPHYCLASS:"mds-typography"},c=class c{constructor(t){this.themeclass=t}};c.context=C(p);let e=c;const S=y`
  :host {
    --mdc-themeprovider-font-family: var(--mds-font-family-primary);
    --mdc-themeprovider-color-default: var(--mds-color-theme-text-primary-normal);

    font-family: var(--mdc-themeprovider-font-family);
    color: var(--mdc-themeprovider-color-default);
  }
`;var x=Object.defineProperty,d=(o,t,m,L)=>{for(var s=void 0,r=o.length-1,h;r>=0;r--)(h=o[r])&&(s=h(t,m,s)||s);return s&&x(t,m,s),s};const l=class l extends n{constructor(){super({context:e.context,initialValue:new e(i.THEMECLASS)}),this.themeclass=i.THEMECLASS}static get Context(){return e.context}connectedCallback(){super.connectedCallback(),this.classList.add(i.TYPOGRAPHYCLASS)}updated(t){super.updated(t),t.has("themeclass")&&(this.setThemeInClassList(),this.currentThemeClass=this.themeclass)}updateContext(){this.context.value.themeclass!==this.themeclass&&(this.context.value.themeclass=this.themeclass,this.context.updateObservers())}setThemeInClassList(){this.currentThemeClass&&this.classList.remove(...this.currentThemeClass.split(" ")),this.themeclass&&this.classList.add(...this.themeclass.split(" "))}};l.styles=[...n.styles,S];let a=l;d([v()],a.prototype,"currentThemeClass");d([f({type:String})],a.prototype,"themeclass");a.register(p);export{a as T};
