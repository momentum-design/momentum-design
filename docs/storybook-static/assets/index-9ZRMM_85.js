import{u,P as d,n as f}from"./index-CFYjfE6c.js";import{r as v}from"./state-CxB-wGrk.js";import{i as x}from"./lit-element-CPYlYYac.js";import{n as C}from"./create-context-89xeped_.js";const n=u.constructTagName("themeprovider"),h={THEMECLASS:"mds-theme-stable-darkWebex"},i=class i{constructor(t){this.themeclass=t}};i.context=C(n);let e=i;const y=x`
  :host {
    --mdc-themeprovider-font-family: "Momentum";
    --mdc-themeprovider-color-default: var(--mds-color-theme-text-primary-normal);

    font-family: var(--mdc-themeprovider-font-family);
    color: var(--mdc-themeprovider-color-default);
  }
`;var T=Object.defineProperty,p=(o,t,l,E)=>{for(var s=void 0,a=o.length-1,m;a>=0;a--)(m=o[a])&&(s=m(t,l,s)||s);return s&&T(t,l,s),s};const c=class c extends d{constructor(){super({context:e.context,initialValue:new e(h.THEMECLASS)}),this.themeclass=h.THEMECLASS}static get Context(){return e.context}updated(t){super.updated(t),t.has("themeclass")&&(this.setThemeInClassList(),this.currentThemeClass=this.themeclass)}updateContext(){this.context.value.themeclass!==this.themeclass&&(this.context.value.themeclass=this.themeclass,this.context.updateObservers())}setThemeInClassList(){this.currentThemeClass&&this.classList.remove(...this.currentThemeClass.split(" ")),this.themeclass&&this.classList.add(...this.themeclass.split(" "))}};c.styles=y;let r=c;p([v()],r.prototype,"currentThemeClass");p([f({type:String})],r.prototype,"themeclass");r.register(n);export{r as T};
