import{i as p,k as b}from"./lit-element-CHllvULs.js";import{u as v,C as u,n as c}from"./index-HW6KrQZO.js";import{r as h}from"./state-CWckTc1X.js";import{h as C}from"./index-BW6Y21yA.js";import{p as f}from"./index-BYMLCX4c.js";import{I as g}from"./iconprovider.component-CWYw8J7d.js";const y=[C,p`
    :host {
      --mdc-icon-fill-color: currentColor;
      --mdc-icon-computed-size: var(--computed-icon-size);

      height: var(--mdc-icon-computed-size);
      width: var(--mdc-icon-computed-size);
    }
    :host::part(icon) {
      height: 100%;
      width: 100%;
      fill: var(--mdc-icon-fill-color);
    }
  `],x=async(l,t,e,n)=>{const i=await fetch(`${l}/${t}.${e}`,{signal:n});if(!i.ok)throw new Error("There was a problem while fetching the icon!");const s=await i.text(),r=new DOMParser().parseFromString(s,"text/html").body.children[0];return r.setAttribute("data-name",t),r.setAttribute("part","icon"),r},I=v.constructTagName("icon"),m={NAME:void 0,SIZE:1};var z=Object.defineProperty,a=(l,t,e,n)=>{for(var i=void 0,s=l.length-1,r;s>=0;s--)(r=l[s])&&(i=r(t,e,i)||i);return i&&z(t,e,i),i};const d=class d extends u{constructor(){super(),this.name=m.NAME,this.ariaLabel=null,this.iconProviderContext=f.consume({host:this,context:g.Context}),this.abortController=new AbortController}triggerIconLoaded(){const t=new Event("load",{bubbles:!0,cancelable:!0});this.dispatchEvent(t)}async getIconData(){if(this.iconProviderContext.value){const{fileExtension:t,url:e}=this.iconProviderContext.value;if(e&&t&&this.name){this.abortController.abort(),this.abortController=new AbortController;try{const n=await x(e,this.name,t,this.abortController.signal);this.handleIconLoadedSuccess(n)}catch(n){this.handleIconLoadedFailure(n)}}}}handleIconLoadedSuccess(t){this.iconData=t,this.setRoleOnIcon(),this.setAriaLabelOnIcon(),this.setAriaHiddenOnIcon(),this.triggerIconLoaded()}handleIconLoadedFailure(t){const e=new CustomEvent("error",{bubbles:!0,cancelable:!0,detail:{error:t}});this.dispatchEvent(e)}updateSize(){if(this.computedIconSize&&(this.lengthUnit||this.lengthUnitFromContext)){const t=`${this.computedIconSize}${this.lengthUnit??this.lengthUnitFromContext}`;this.style.setProperty("--computed-icon-size",t)}}setRoleOnIcon(){this.role=this.ariaLabel?"img":null}setAriaHiddenOnIcon(){var t;(t=this.iconData)==null||t.setAttribute("aria-hidden","true")}setAriaLabelOnIcon(){var t,e;this.ariaLabel?(t=this.iconData)==null||t.setAttribute("aria-label",this.ariaLabel):(e=this.iconData)==null||e.removeAttribute("aria-label")}get computedIconSize(){return this.size??this.sizeFromContext??m.SIZE}updated(t){var e,n,i,s;super.updated(t),t.has("name")&&this.getIconData().catch(r=>{r.name!=="AbortError"&&this.onerror&&this.onerror(r)}),t.has("ariaLabel")&&(this.setRoleOnIcon(),this.setAriaLabelOnIcon()),(t.has("size")||t.has("lengthUnit"))&&this.updateSize(),this.lengthUnitFromContext!==((e=this.iconProviderContext.value)==null?void 0:e.lengthUnit)&&(this.lengthUnitFromContext=(n=this.iconProviderContext.value)==null?void 0:n.lengthUnit,this.updateSize()),this.sizeFromContext!==((i=this.iconProviderContext.value)==null?void 0:i.size)&&(this.sizeFromContext=(s=this.iconProviderContext.value)==null?void 0:s.size,this.updateSize())}render(){return b` ${this.iconData} `}};d.styles=[...u.styles,...y];let o=d;a([h()],o.prototype,"iconData");a([h()],o.prototype,"lengthUnitFromContext");a([h()],o.prototype,"sizeFromContext");a([c({type:String,reflect:!0})],o.prototype,"name");a([c({type:Number})],o.prototype,"size");a([c({type:String,attribute:"length-unit"})],o.prototype,"lengthUnit");a([c({type:String,attribute:"aria-label"})],o.prototype,"ariaLabel");a([h()],o.prototype,"abortController");o.register(I);
