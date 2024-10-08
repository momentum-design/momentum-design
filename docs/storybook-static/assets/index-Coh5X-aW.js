import{u,P as d,n as f}from"./index-CFYjfE6c.js";import{r as v}from"./state-CxB-wGrk.js";import{i as x}from"./lit-element-CPYlYYac.js";import{n as y}from"./create-context-89xeped_.js";const n=u.constructTagName("themeprovider"),h={THEMECLASS:"mds-theme-stable-darkWebex"},i=class i{constructor(t){this.themeclass=t}};i.context=y(n);let e=i;const C=x`
  :host {
    // todo: use type tokens once the full set with fallbacks is available
    --mdc-themeprovider-font-family: "Momentum";
    --mdc-themeprovider-color-default: var(--mds-color-theme-text-primary-normal);

    font-family: var(--mdc-themeprovider-font-family);
    color: var(--mdc-themeprovider-color-default);
  }
`;var T=Object.defineProperty,p=(o,t,c,E)=>{for(var s=void 0,r=o.length-1,m;r>=0;r--)(m=o[r])&&(s=m(t,c,s)||s);return s&&T(t,c,s),s};const l=class l extends d{constructor(){super({context:e.context,initialValue:new e(h.THEMECLASS)}),this.themeclass=h.THEMECLASS}static get Context(){return e.context}updated(t){super.updated(t),t.has("themeclass")&&(this.setThemeInClassList(),this.currentThemeClass=this.themeclass)}updateContext(){this.context.value.themeclass!==this.themeclass&&(this.context.value.themeclass=this.themeclass,this.context.updateObservers())}setThemeInClassList(){this.currentThemeClass&&this.classList.remove(...this.currentThemeClass.split(" ")),this.themeclass&&this.classList.add(...this.themeclass.split(" "))}};l.styles=C;let a=l;p([v()],a.prototype,"currentThemeClass");p([f({type:String})],a.prototype,"themeclass");a.register(n);export{a as T};
