import{a2 as p,u as g,k as c,h,V as v,T as b,n as m}from"./iframe-Dhby1e8T.js";import{t as f}from"./if-defined-7wnCbGQ7.js";import{d,b as y}from"./dialog.component-D9YMVMFp.js";import"./index-BvK2EiOp.js";const x=p`
  :host {
    --mdc-announcementdialog-illustration-background-color: var(--mds-color-theme-background-solid-secondary-normal);

    background-image: linear-gradient(
      var(--mdc-announcementdialog-illustration-background-color) 0%,
      var(--mdc-announcementdialog-illustration-background-color) 100%
    );
    background-size: 50% 100%;
    background-position: left;
    background-repeat: no-repeat;
    max-height: 100vh;
  }
  :host(:dir(rtl)) {
    background-position: right;
  }
  :host::part(body) {
    padding-top: 2rem !important;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0px, 1fr));
  }
  :host::part(illustration-container) {
    width: auto;
  }

  :host mdc-illustration {
    width: auto;
    margin-inline-start: 1rem;
    margin-inline-end: 2rem;
  }
  :host::part(content-container) {
    color: var(--mdc-dialog-description-text-color);
    width: auto;
    margin-inline-start: 2rem;
    margin-inline-end: 1rem;
  }

  @media (max-width: 27rem) {
    :host {
      background-size: 0% 100%;
    }
    :host::part(illustration-container) {
      display: none;
    }
    :host::part(content-container) {
      margin-inline-start: 0;
      margin-inline-end: 0;
    }
  }
`,E=[x],T=g.constructTagName("announcementdialog"),z=["medium","large","xlarge","fullscreen"],_={SIZE:"medium"};var D=Object.defineProperty,S=Object.getOwnPropertyDescriptor,u=(l,t,r,a)=>{for(var e=a>1?void 0:a?S(t,r):t,i=l.length-1,o;i>=0;i--)(o=l[i])&&(e=(a?o(t,r,e):o(e))||e);return a&&e&&D(t,r,e),e};const s=class s extends d{get size(){var t,r;return(r=(t=this.responsiveSettingsContext)==null?void 0:t.value)!=null&&r.forceFullscreenDialog?"fullscreen":this.internalSize}set size(t){this.internalSize=t}constructor(){super(),this.internalSize=_.SIZE}connectedCallback(){super.connectedCallback(),this.variant=y.DEFAULT}renderHeader(){return c`${h}`}renderBody(){return c`
      <div part="body">
        <div part="illustration-container">
          <slot name="illustration-container">
            <mdc-illustration name="${f(this.illustration)}"></mdc-illustration>
          </slot>
        </div>
        <div part="content-container">
          <slot name="content-container">
            <mdc-text
              part="header-text"
              tagname="${v[this.headerTagName.toUpperCase()]}"
              type="${b.HEADING_MIDSIZE_MEDIUM}"
            >
              ${this.headerText}
            </mdc-text>
            <slot name="description-container"> </slot>
          </slot>
        </div>
      </div>
    `}};s.styles=[...d.styles,...E];let n=s;u([m({type:String,reflect:!0})],n.prototype,"illustration",2);u([m({type:String,reflect:!0})],n.prototype,"size",1);n.register(T);export{z as A,_ as D};
