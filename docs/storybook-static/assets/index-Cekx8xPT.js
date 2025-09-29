import{i as h,C as p,k as u,n as l}from"./iframe-Bwqyin4n.js";import{p as v}from"./index-BEBak02X.js";import{e as d,b,f as g}from"./stepper.component-ooJ2nTEI.js";const f=h`
  :host {
    --mdc-stepperconnector-complete-background: var(--mds-color-theme-outline-theme-normal);
    --mdc-stepperconnector-incomplete-background: var(--mds-color-theme-outline-primary-normal);
    display: block;
    width: 100%;
    height: 100%;
  }
  :host::part(connector) {
    width: 100%;
    height: 0.0625rem;
    background: var(--mdc-stepperconnector-incomplete-background);
  }
  :host([status='complete'])::part(connector) {
    background: var(--mdc-stepperconnector-complete-background);
  }
  :host([orientation='vertical'])::part(connector) {
    width: 0.0625rem;
    height: 100%;
  }

  @media (forced-colors: active) {
    :host([orientation='horizontal'])::part(connector) {
      border-top: 1px solid var(--mdc-stepperconnector-incomplete-background);
    }
    :host([status='complete'][orientation='horizontal'])::part(connector) {
      border-top: 1px solid var(--mdc-stepperconnector-complete-background);
    }
    :host([orientation='vertical'])::part(connector) {
      border-left: 1px solid var(--mdc-stepperconnector-incomplete-background);
    }
    :host([status='complete'][orientation='vertical'])::part(connector) {
      border-left: 1px solid var(--mdc-stepperconnector-complete-background);
    }
  }
`,k=[f];var x=Object.defineProperty,m=(i,r,t,n)=>{for(var e=void 0,c=i.length-1,a;c>=0;c--)(a=i[c])&&(e=a(r,t,e)||e);return e&&x(r,t,e),e};const s=class s extends p{constructor(){super(...arguments),this.status=d.STATUS,this.orientation=d.ORIENTATION,this.stepperContext=v.consume({host:this,context:b.Context})}updated(r){var n;super.updated(r);const t=(n=this.stepperContext)==null?void 0:n.value;!t||!t.orientation||(this.orientation=t.orientation)}render(){return u` <div part="connector"></div> `}};s.styles=[...p.styles,...k];let o=s;m([l({type:String,reflect:!0})],o.prototype,"status");m([l({type:String,reflect:!0})],o.prototype,"orientation");o.register(g);
