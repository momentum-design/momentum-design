import{u as r,a2 as p,U as O,W as I,a3 as R,R as v,k as u,F as m,n as N}from"./iframe-C1wx72SK.js";const f={COMPLETE:"complete",INCOMPLETE:"incomplete"},h={VERTICAL:"vertical",HORIZONTAL:"horizontal"},k={STATUS:f.INCOMPLETE,ORIENTATION:h.HORIZONTAL},_=r.constructTagName("stepperconnector"),D=r.constructTagName("stepperitem"),E={INLINE:"inline",STACKED:"stacked"},L={COMPLETED:"completed",CURRENT:"current",ERROR_CURRENT:"error-current",ERROR_INCOMPLETE:"error-incomplete",NOT_STARTED:"not-started"},M={COMPLETED:"check-bold",ERROR:"error-legacy-badge-filled",PENCIL:"edit-bold"},P={VARIANT:E.INLINE,STATUS:L.NOT_STARTED},C=r.constructTagName("stepper"),a={ORIENTATION:h.HORIZONTAL,VARIANT:E.INLINE},c=class c{constructor(t,o){this.orientation=t,this.variant=o}};c.context=p(C);let n=c;const x=O`
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
`,S=[I,x];var g=Object.defineProperty,A=(T,t,o,y)=>{for(var e=void 0,i=T.length-1,d;i>=0;i--)(d=T[i])&&(e=d(t,o,e)||e);return e&&g(t,o,e),e};const l=class l extends R{constructor(){super({context:n.context,initialValue:new n(a.ORIENTATION,a.VARIANT)}),this.orientation=a.ORIENTATION,this.variant=a.VARIANT}connectedCallback(){super.connectedCallback(),this.role=v.LIST}static get Context(){return n.context}updated(t){(t.has("orientation")||t.has("variant"))&&this.updateContext()}updateContext(){(this.context.value.variant!==this.variant||this.context.value.orientation!==this.orientation)&&(this.context.value.variant=this.variant,this.context.value.orientation=this.orientation,this.context.updateObservers())}render(){return u` <slot></slot> `}};l.styles=[...m.styles,...S];let s=l;A([N({type:String,reflect:!0})],s.prototype,"orientation");A([N({type:String,reflect:!0})],s.prototype,"variant");export{P as D,h as O,f as S,C as T,E as V,L as a,s as b,M as c,D as d,k as e,_ as f};
