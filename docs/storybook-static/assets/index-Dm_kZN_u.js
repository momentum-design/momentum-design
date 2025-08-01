import{u as v,C as y,n as d}from"./provider.component-BaQC7CJH.js";import{i as A}from"./lit-element-D5KKan5q.js";import{v as f}from"./v4-CmTdKEVZ.js";const L=v.constructTagName("screenreaderannouncer"),T={ASSERTIVE:"assertive",POLITE:"polite",OFF:"off"},a={ARIA_LIVE:T.POLITE,DELAY:150,IDENTITY:"mdc-screenreaderannouncer-identity",TIMEOUT:2e4},g=[A`
    :host {
      display: none;
      visibility: hidden;
    }
  `];var C=Object.defineProperty,c=(m,e,t,l)=>{for(var n=void 0,s=m.length-1,o;s>=0;s--)(o=m[s])&&(n=o(e,t,n)||n);return n&&C(e,t,n),n};const u=class u extends y{constructor(){super(...arguments),this.announcement="",this.identity="",this.dataAriaLive=a.ARIA_LIVE,this.delay=a.DELAY,this.timeout=a.TIMEOUT,this.timeOutIds=[],this.ariaLiveAnnouncementIds=[]}announce(e,t,l,n){var s;if(e.length>0){const o=`mdc-screenreaderannouncer-announcement-${f()}`,r=document.createElement("div");r.id=o,r.ariaLive=n,(s=document.getElementById(this.identity))==null||s.appendChild(r);const I=window.setTimeout(()=>{const h=document.createElement("p");h.textContent=e,r.appendChild(h),this.ariaLiveAnnouncementIds.push(o);const E=window.setTimeout(()=>{var p;(p=document.getElementById(o))==null||p.remove()},l);this.timeOutIds.push(E)},t);this.timeOutIds.push(I)}}clearTimeOutsAndAnnouncements(){this.timeOutIds.forEach(e=>{window.clearTimeout(e)}),this.ariaLiveAnnouncementIds.forEach(e=>{var t;(t=document.getElementById(e))==null||t.remove()})}createAnnouncementAriaLiveRegion(){let e=document.getElementById(this.identity);if(!e){e=document.createElement("div"),e.id=this.identity;const t=document.createElement("style");t.textContent=`
        .mdc-screenreaderannouncer__visually-hidden {
          clip: rect(0 0 0 0);
          clip-path: inset(50%);
          height: 1px;
          overflow: hidden;
          position: absolute;
          white-space: nowrap;
          width: 1px;
        }
      `,e.appendChild(t),e.classList.add("mdc-screenreaderannouncer__visually-hidden"),document.body.appendChild(e)}}connectedCallback(){super.connectedCallback(),this.identity.length===0&&(this.identity=a.IDENTITY),this.createAnnouncementAriaLiveRegion()}disconnectedCallback(){super.disconnectedCallback(),this.clearTimeOutsAndAnnouncements()}updated(e){e.has("identity")&&this.identity.length===0&&(this.identity=a.IDENTITY,this.createAnnouncementAriaLiveRegion()),e.has("announcement")&&this.announcement.length>0&&(this.announce(this.announcement,this.delay,this.timeout,this.dataAriaLive),this.announcement="")}};u.styles=[...y.styles,...g];let i=u;c([d({type:String,reflect:!0})],i.prototype,"announcement");c([d({type:String,reflect:!0})],i.prototype,"identity");c([d({type:String,reflect:!0,attribute:"data-aria-live"})],i.prototype,"dataAriaLive");c([d({type:Number,reflect:!0})],i.prototype,"delay");c([d({type:Number,reflect:!0})],i.prototype,"timeout");i.register(L);export{T as A,a as D};
