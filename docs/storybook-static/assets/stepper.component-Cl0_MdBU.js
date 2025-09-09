import{i as A,k as m}from"./lit-element-D5KKan5q.js";import{n as N}from"./property-Bj3TGwkg.js";import{u as s,P as O,C as I}from"./provider.component-DrWB4byV.js";import{R}from"./roles-CJI3JVG-.js";import{n as v}from"./create-context-89xeped_.js";import{h as u}from"./index-CqVtAZCJ.js";const f={COMPLETE:"complete",INCOMPLETE:"incomplete"},h={VERTICAL:"vertical",HORIZONTAL:"horizontal"},b={STATUS:f.INCOMPLETE,ORIENTATION:h.HORIZONTAL},V=s.constructTagName("stepperconnector"),$=s.constructTagName("stepperitem"),p={INLINE:"inline",STACKED:"stacked"},C={COMPLETED:"completed",CURRENT:"current",ERROR_CURRENT:"error-current",ERROR_INCOMPLETE:"error-incomplete",NOT_STARTED:"not-started"},z={COMPLETED:"check-bold",ERROR:"error-legacy-badge-filled",PENCIL:"edit-bold"},F={VARIANT:p.INLINE,STATUS:C.NOT_STARTED},L=s.constructTagName("stepper"),i={ORIENTATION:h.HORIZONTAL,VARIANT:p.INLINE},c=class c{constructor(t,n){this.orientation=t,this.variant=n}};c.context=v(L);let o=c;const x=A`
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
`,S=[u,x];var g=Object.defineProperty,E=(T,t,n,y)=>{for(var e=void 0,r=T.length-1,d;r>=0;r--)(d=T[r])&&(e=d(t,n,e)||e);return e&&g(t,n,e),e};const l=class l extends O{constructor(){super({context:o.context,initialValue:new o(i.ORIENTATION,i.VARIANT)}),this.orientation=i.ORIENTATION,this.variant=i.VARIANT}connectedCallback(){super.connectedCallback(),this.role=R.LIST}static get Context(){return o.context}updated(t){(t.has("orientation")||t.has("variant"))&&this.updateContext()}updateContext(){(this.context.value.variant!==this.variant||this.context.value.orientation!==this.orientation)&&(this.context.value.variant=this.variant,this.context.value.orientation=this.orientation,this.context.updateObservers())}render(){return m` <slot></slot> `}};l.styles=[...I.styles,...S];let a=l;E([N({type:String,reflect:!0})],a.prototype,"orientation");E([N({type:String,reflect:!0})],a.prototype,"variant");export{F as D,h as O,f as S,L as T,p as V,C as a,a as b,z as c,$ as d,b as e,V as f};
