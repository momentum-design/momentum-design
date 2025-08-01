import{i as h,k as u}from"./lit-element-D5KKan5q.js";import{C as p,n as l}from"./provider.component-BaQC7CJH.js";import{p as v}from"./index-CbmtUAjA.js";import{e as d,b,f}from"./stepper.component-BGHjrCyu.js";const g=h`
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
`,k=[g];var x=Object.defineProperty,m=(s,e,t,n)=>{for(var o=void 0,c=s.length-1,a;c>=0;c--)(a=s[c])&&(o=a(e,t,o)||o);return o&&x(e,t,o),o};const i=class i extends p{constructor(){super(...arguments),this.status=d.STATUS,this.orientation=d.ORIENTATION,this.stepperContext=v.consume({host:this,context:b.Context})}updated(e){var n;super.updated(e),e.has("orientation")&&(this.ariaOrientation=this.orientation);const t=(n=this.stepperContext)==null?void 0:n.value;!t||!t.orientation||(this.orientation=t.orientation)}render(){return u` <div part="connector"></div> `}};i.styles=[...p.styles,...k];let r=i;m([l({type:String,reflect:!0})],r.prototype,"status");m([l({type:String,reflect:!0})],r.prototype,"orientation");r.register(f);
