import{i as U,k as M}from"./lit-element-D5KKan5q.js";import{u as V,C as O,n as x}from"./index-C9z9WAEj.js";import{c as Z,s as z}from"./commonArgTypes-BluK8w5L.js";const e={COMPLETE:"complete",INCOMPLETE:"incomplete"},o={VERTICAL:"vertical",HORIZONTAL:"horizontal"},E={STATUS:e.INCOMPLETE,ORIENTATION:o.HORIZONTAL},_=V.constructTagName("stepperconnector"),w=U`
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
`,$=[w];var j=Object.defineProperty,H=(t,s,T,F)=>{for(var r=void 0,m=t.length-1,u;m>=0;m--)(u=t[m])&&(r=u(s,T,r)||r);return r&&j(s,T,r),r};const d=class d extends O{constructor(){super(...arguments),this.status=E.STATUS,this.orientation=E.ORIENTATION}updated(s){super.updated(s),s.has("orientation")&&(this.ariaOrientation=this.orientation)}render(){return M` <div part="connector"></div> `}};d.styles=[...O.styles,...$];let n=d;H([x({type:String,reflect:!0})],n.prototype,"status");H([x({type:String,reflect:!0})],n.prototype,"orientation");n.register(_);const D=t=>M`
  <div style="width: 200px; height: 200px; display: flex; align-items: center;">
    <mdc-stepperconnector
      status="${t.status}"
      orientation="${t.orientation}"
      style="${t.style}"
      class="${t.class}"
    ></mdc-stepperconnector>
  </div>
`,B={title:"Work In Progress/stepper/connector",tags:["autodocs"],component:"mdc-stepperconnector",render:D,parameters:{badges:["wip"]},argTypes:{status:{control:"radio",options:Object.values(e)},orientation:{control:"radio",options:Object.values(o)},...Z,...z}},a={args:{status:e.INCOMPLETE,orientation:o.HORIZONTAL}},c={args:{status:e.INCOMPLETE,orientation:o.HORIZONTAL}},i={args:{status:e.COMPLETE,orientation:o.HORIZONTAL}},p={args:{status:e.INCOMPLETE,orientation:o.VERTICAL}},l={args:{status:e.COMPLETE,orientation:o.VERTICAL}};var I,g,A;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    status: STATUS.INCOMPLETE,
    orientation: ORIENTATION.HORIZONTAL
  }
}`,...(A=(g=a.parameters)==null?void 0:g.docs)==null?void 0:A.source}}};var N,h,L;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    status: STATUS.INCOMPLETE,
    orientation: ORIENTATION.HORIZONTAL
  }
}`,...(L=(h=c.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};var v,C,S;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    status: STATUS.COMPLETE,
    orientation: ORIENTATION.HORIZONTAL
  }
}`,...(S=(C=i.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var R,b,y;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    status: STATUS.INCOMPLETE,
    orientation: ORIENTATION.VERTICAL
  }
}`,...(y=(b=p.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,P,k;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    status: STATUS.COMPLETE,
    orientation: ORIENTATION.VERTICAL
  }
}`,...(k=(P=l.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};const J=["Example","IncompleteHorizontal","CompleteHorizontal","IncompleteVertical","CompleteVertical"];export{i as CompleteHorizontal,l as CompleteVertical,a as Example,c as IncompleteHorizontal,p as IncompleteVertical,J as __namedExportsOrder,B as default};
