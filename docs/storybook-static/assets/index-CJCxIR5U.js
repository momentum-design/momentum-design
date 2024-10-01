import{u as f,P as v,n}from"./index-CFYjfE6c.js";import{i as T}from"./lit-element-CPYlYYac.js";import{n as x}from"./create-context-89xeped_.js";const A="mds-theme-stable",_="-",y=e=>[A,e].join(_),u={getFullQualifiedTheme:y},d=f.constructTagName("themeprovider"),p={DARK_WEBEX:"darkWebex",LIGHT_WEBEX:"lightWebex"},M=Object.values(p).map(e=>u.getFullQualifiedTheme(e)),h={THEME:u.getFullQualifiedTheme(p.DARK_WEBEX)},r=class r{constructor(t){this.theme=t}};r.context=x(d);let i=r;const S=T`
  :host {
    --mdc-themeprovider-font-family: "Momentum";
    --mdc-themeprovider-color-default: var(--mds-color-theme-text-primary-normal);

    font-family: var(--mdc-themeprovider-font-family);
    color: var(--mdc-themeprovider-color-default);
  }
`;var g=Object.defineProperty,E=(e,t,m,H)=>{for(var s=void 0,a=e.length-1,c;a>=0;a--)(c=e[a])&&(s=c(t,m,s)||s);return s&&g(t,m,s),s};const l=class l extends v{constructor(){super({context:i.context,initialValue:new i(h.THEME)}),this.themes=M.join(" "),this.theme=h.THEME}static get Context(){return i.context}updated(t){super.updated(t),t.has("theme")&&this.updateActiveThemeClass()}updateContext(){let t=!1;this.context.value.theme!==this.theme&&(this.context.value.theme=this.theme,t=!0),t&&this.context.updateObservers()}updateActiveThemeClass(){this.classList.remove(...this.themes.split(" ")),this.classList.add(this.theme)}};l.styles=S;let o=l;E([n({type:String})],o.prototype,"themes");E([n({type:String})],o.prototype,"theme");o.register(d);export{o as T,M as a};
