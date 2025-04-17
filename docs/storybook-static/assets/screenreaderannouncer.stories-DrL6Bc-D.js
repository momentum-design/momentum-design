import{u as k,C as A,n as s}from"./index-C9z9WAEj.js";import{i as R,k as x}from"./lit-element-D5KKan5q.js";import{v as S}from"./v4-CmTdKEVZ.js";import"./index-B0PcEMoO.js";import"./index-D3DhXfcW.js";import"./state-CSSggq2n.js";import"./buttonsimple.component-PSrQpcnn.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-MA1r3zrt.js";import"./button.constants-DagSuLvr.js";import"./button.utils-rNW36Ji7.js";import"./index-DBbv-KjP.js";import"./iframe-CgnbuESd.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./text.constants-ZF0jM5wn.js";const D=k.constructTagName("screenreaderannouncer"),C={ASSERTIVE:"assertive",POLITE:"polite",OFF:"off"},o={ARIA_LIVE:C.POLITE,DELAY:150,IDENTITY:"mdc-screenreaderannouncer-identity",TIMEOUT:2e4},N=[R`
  :host {
    display: none;
    visibility: hidden;
  }
`];var $=Object.defineProperty,d=(t,e,n,y)=>{for(var i=void 0,a=t.length-1,c;a>=0;a--)(c=t[a])&&(i=c(e,n,i)||i);return i&&$(e,n,i),i};const h=class h extends A{constructor(){super(...arguments),this.announcement="",this.identity="",this.dataAriaLive=o.ARIA_LIVE,this.delay=o.DELAY,this.timeout=o.TIMEOUT,this.timeOutIds=[],this.ariaLiveAnnouncementIds=[]}announce(e,n,y,i){var a;if(e.length>0){const c=`mdc-screenreaderannouncer-announcement-${S()}`,m=document.createElement("div");m.id=c,m.ariaLive=i,(a=document.getElementById(this.identity))==null||a.appendChild(m);const w=window.setTimeout(()=>{const v=document.createElement("p");v.textContent=e,m.appendChild(v),this.ariaLiveAnnouncementIds.push(c);const _=window.setTimeout(()=>{var I;(I=document.getElementById(c))==null||I.remove()},y);this.timeOutIds.push(_)},n);this.timeOutIds.push(w)}}clearTimeOutsAndAnnouncements(){this.timeOutIds.forEach(e=>{window.clearTimeout(e)}),this.ariaLiveAnnouncementIds.forEach(e=>{var n;(n=document.getElementById(e))==null||n.remove()})}createAnnouncementAriaLiveRegion(){let e=document.getElementById(this.identity);if(!e){e=document.createElement("div"),e.id=this.identity;const n=document.createElement("style");n.textContent=`
        .mdc-screenreaderannouncer__visually-hidden {
          clip: rect(0 0 0 0);
          clip-path: inset(50%);
          height: 1px;
          overflow: hidden;
          position: absolute;
          white-space: nowrap;
          width: 1px;
        }
      `,e.appendChild(n),e.classList.add("mdc-screenreaderannouncer__visually-hidden"),document.body.appendChild(e)}}connectedCallback(){super.connectedCallback(),this.identity.length===0&&(this.identity=o.IDENTITY),this.createAnnouncementAriaLiveRegion()}disconnectedCallback(){super.disconnectedCallback(),this.clearTimeOutsAndAnnouncements()}updated(e){e.has("identity")&&this.identity.length===0&&(this.identity=o.IDENTITY,this.createAnnouncementAriaLiveRegion()),e.has("announcement")&&this.announcement.length>0&&(this.announce(this.announcement,this.delay,this.timeout,this.dataAriaLive),this.announcement="")}};h.styles=[...A.styles,...N];let r=h;d([s({type:String,reflect:!0})],r.prototype,"announcement");d([s({type:String,reflect:!0})],r.prototype,"identity");d([s({type:String,reflect:!0,attribute:"data-aria-live"})],r.prototype,"dataAriaLive");d([s({type:Number,reflect:!0})],r.prototype,"delay");d([s({type:Number,reflect:!0})],r.prototype,"timeout");r.register(D);const p=t=>x`
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <mdc-text
      type="body-midsize-regular">
      Click following button for Screen Reader to announce '${t.announcement}'
  </mdc-text>
  <mdc-button @click="${()=>{const e=document.querySelector("mdc-screenreaderannouncer");e&&e.setAttribute("announcement",t.announcement)}}">Announce</mdc-button>
  </div>
  <mdc-screenreaderannouncer
    data-aria-live="${t["data-aria-live"]}"
    delay="${t.delay}"
    identity="${t.identity}"
    timeout="${t.timeout}">
  </mdc-screenreaderannouncer>
  <mdc-text type="body-midsize-regular">Note: SR may read the announcement twice in storybook.
    Click on 'Open canvas in new tab' in Storybook, to read it once.</mdc-text>
`,V=t=>x`
  <div id="announcements-container" style="
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  "></div>
  ${p(t)}
  `,ne={title:"Components/screenreaderannouncer",tags:["autodocs"],component:"mdc-screenreaderannouncer",render:p,parameters:{badges:["stable"]},argTypes:{announcement:{control:"text"},"data-aria-live":{control:"select",options:Object.values(C)},delay:{control:"number"},identity:{control:"text"},timeout:{control:"number"}}},O={announcement:"Momentum Design Components","data-aria-live":o.ARIA_LIVE,delay:o.DELAY,identity:"",timeout:o.TIMEOUT},u={render:p,args:{...O}},l={render:V,args:{...O,identity:"announcements-container"}};var E,f,g;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs
  }
}`,...(g=(f=u.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var b,T,L;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: renderWithIdentity,
  args: {
    ...defaultArgs,
    identity: 'announcements-container'
  }
}`,...(L=(T=l.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};const ie=["Example","WithIdentity"];export{u as Example,l as WithIdentity,ie as __namedExportsOrder,ne as default};
