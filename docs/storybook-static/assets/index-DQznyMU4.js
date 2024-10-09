import{u as d,P as f,n as u}from"./index-CFYjfE6c.js";import{r as v}from"./state-CxB-wGrk.js";import{i as y}from"./lit-element-CPYlYYac.js";import{n as C}from"./create-context-89xeped_.js";const n=d.constructTagName("themeprovider"),i={THEMECLASS:"mds-theme-stable-darkWebex",TYPOGRAPHYCLASS:"mds-typography"},c=class c{constructor(t){this.themeclass=t}};c.context=C(n);let e=c;const S=y`
  :host {
    --mdc-themeprovider-font-family: var(--mds-font-family-primary);
    --mdc-themeprovider-color-default: var(--mds-color-theme-text-primary-normal);

    font-family: var(--mdc-themeprovider-font-family);
    color: var(--mdc-themeprovider-color-default);
  }
`;var x=Object.defineProperty,p=(o,t,m,L)=>{for(var s=void 0,r=o.length-1,h;r>=0;r--)(h=o[r])&&(s=h(t,m,s)||s);return s&&x(t,m,s),s};const l=class l extends f{constructor(){super({context:e.context,initialValue:new e(i.THEMECLASS)}),this.themeclass=i.THEMECLASS,this.classList.add(i.TYPOGRAPHYCLASS)}static get Context(){return e.context}updated(t){super.updated(t),t.has("themeclass")&&(this.setThemeInClassList(),this.currentThemeClass=this.themeclass)}updateContext(){this.context.value.themeclass!==this.themeclass&&(this.context.value.themeclass=this.themeclass,this.context.updateObservers())}setThemeInClassList(){this.currentThemeClass&&this.classList.remove(...this.currentThemeClass.split(" ")),this.themeclass&&this.classList.add(...this.themeclass.split(" "))}};l.styles=S;let a=l;p([v()],a.prototype,"currentThemeClass");p([u({type:String})],a.prototype,"themeclass");a.register(n);export{a as T};
