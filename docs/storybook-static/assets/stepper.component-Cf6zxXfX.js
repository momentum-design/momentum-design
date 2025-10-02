import{u as r,B as p,i as O,P as I,k as R,C as v,n as N}from"./iframe-5RFEiZ85.js";import{R as u}from"./roles-CJI3JVG-.js";import{h as m}from"./index-BldB1hzz.js";const f={COMPLETE:"complete",INCOMPLETE:"incomplete"},h={VERTICAL:"vertical",HORIZONTAL:"horizontal"},_={STATUS:f.INCOMPLETE,ORIENTATION:h.HORIZONTAL},D=r.constructTagName("stepperconnector"),M=r.constructTagName("stepperitem"),E={INLINE:"inline",STACKED:"stacked"},C={COMPLETED:"completed",CURRENT:"current",ERROR_CURRENT:"error-current",ERROR_INCOMPLETE:"error-incomplete",NOT_STARTED:"not-started"},b={COMPLETED:"check-bold",ERROR:"error-legacy-badge-filled",PENCIL:"edit-bold"},V={VARIANT:E.INLINE,STATUS:C.NOT_STARTED},L=r.constructTagName("stepper"),a={ORIENTATION:h.HORIZONTAL,VARIANT:E.INLINE},c=class c{constructor(t,o){this.orientation=t,this.variant=o}};c.context=p(L);let n=c;const x=O`
  :host {
    gap: 0.5rem;
  }

  ::slotted(mdc-stepperitem) {
    flex-shrink: 0;
  }

  :host([orientation='horizontal']) {
    width: 100%;
  }

  :host([orientation='vertical']) {
    flex-direction: column;
    height: 100%;
  }

  :host([orientation='vertical'][variant='inline']),
  :host([orientation='horizontal'][variant='stacked']) {
    align-items: flex-start;
  }

  :host([orientation='vertical'][variant='stacked']) ::slotted(mdc-stepperconnector) {
    display: flex;
    justify-content: center;
  }

  :host([orientation='vertical'][variant='inline']) ::slotted(mdc-stepperconnector) {
    display: flex;
    padding-left: 0.875rem;
  }

  :host([orientation='horizontal'][variant='stacked']) ::slotted(mdc-stepperconnector) {
    padding-top: 0.9375rem;
    margin: 0 -3rem;
  }
`,S=[m,x];var g=Object.defineProperty,A=(T,t,o,y)=>{for(var e=void 0,s=T.length-1,d;s>=0;s--)(d=T[s])&&(e=d(t,o,e)||e);return e&&g(t,o,e),e};const l=class l extends I{constructor(){super({context:n.context,initialValue:new n(a.ORIENTATION,a.VARIANT)}),this.orientation=a.ORIENTATION,this.variant=a.VARIANT}connectedCallback(){super.connectedCallback(),this.role=u.LIST}static get Context(){return n.context}updated(t){(t.has("orientation")||t.has("variant"))&&this.updateContext()}updateContext(){(this.context.value.variant!==this.variant||this.context.value.orientation!==this.orientation)&&(this.context.value.variant=this.variant,this.context.value.orientation=this.orientation,this.context.updateObservers())}render(){return R` <slot></slot> `}};l.styles=[...v.styles,...S];let i=l;A([N({type:String,reflect:!0})],i.prototype,"orientation");A([N({type:String,reflect:!0})],i.prototype,"variant");export{V as D,h as O,f as S,L as T,E as V,C as a,i as b,b as c,M as d,_ as e,D as f};
