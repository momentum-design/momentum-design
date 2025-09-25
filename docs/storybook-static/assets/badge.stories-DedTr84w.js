import"./index-Qcl8cDHS.js";import{k as D}from"./iframe-CXwaMhTJ.js";import{c as M,s as V}from"./commonArgTypes-BluK8w5L.js";import{t as F}from"./utils-CFOyPOhY.js";import{T as r,I as h,D as p}from"./badge.constants-DQX_u8K0.js";import"./class-map-ChUhqX3N.js";import"./directive-Ctav8iJK.js";import"./if-defined-DIAx6F34.js";import"./IconNameMixin-CCAHuPWp.js";import"./roles-CJI3JVG-.js";import"./index-DSOBsR-q.js";import"./index-BH7b8QFc.js";import"./index-BhZLYGY0.js";import"./preload-helper-C1FmrZbK.js";import"./index-D0R6A-G4.js";import"./index-DTrDRi1E.js";const o=[9,99,999],X=e=>D`
  <mdc-badge
    type="${e.type}"
    icon-name="${e["icon-name"]}"
    counter="${e.counter}"
    max-counter="${e["max-counter"]}"
    variant="${e.variant}"
    ?overlay=${e.overlay}
    aria-label="${e["aria-label"]}"
  ></mdc-badge>
`,q=e=>D`
  <div style="background-color: var(--mds-color-theme-inverted-background-normal); padding: 5px;">
    <mdc-badge
      type="${e.type}"
      icon-name="${e["icon-name"]}"
      counter="${e.counter}"
      max-counter="${e["max-counter"]}"
      variant="${e.variant}"
      ?overlay=${e.overlay}
      aria-label="${e["aria-label"]}"
    ></mdc-badge>
  </div>
`,ce={title:"Components/badge",tags:["autodocs"],component:"mdc-badge",render:X,argTypes:{type:{control:"select",options:Object.values(r)},overlay:{control:"boolean"},counter:{if:{arg:"type",eq:r.COUNTER},control:"number"},"max-counter":{if:{arg:"type",eq:r.COUNTER},control:"select",options:o},"icon-name":{if:{arg:"type",eq:r.ICON},control:"text"},variant:{if:{arg:"type",eq:r.ICON},control:"select",options:Object.values(h)},"aria-label":{control:"text"},...F(["--mdc-badge-primary-foreground-color","--mdc-badge-primary-background-color","--mdc-badge-secondary-foreground-color","--mdc-badge-secondary-background-color","--mdc-badge-success-foreground-color","--mdc-badge-success-background-color","--mdc-badge-warning-foreground-color","--mdc-badge-warning-background-color","--mdc-badge-error-foreground-color","--mdc-badge-error-background-color","--mdc-badge-overlay-background-color"]),...M,...V}},a={args:{type:p.TYPE,"icon-name":"placeholder-bold",variant:p.VARIANT,counter:1,"max-counter":o[1],overlay:!1}},n={args:{type:p.TYPE,"icon-name":"placeholder-bold",variant:p.VARIANT,counter:1,"max-counter":o[1],overlay:!1}},c={args:{type:r.ICON,"icon-name":"placeholder-bold",variant:h.PRIMARY,overlay:!1}},t={args:{type:r.COUNTER,counter:10,"max-counter":o[1],overlay:!1}},s={args:{type:r.SUCCESS,overlay:!1}},l={args:{type:r.WARNING,overlay:!1}},m={args:{type:r.ERROR,overlay:!1}},d={render:q,args:{type:r.COUNTER,counter:1e3,"max-counter":o[2],overlay:!0}};var i,u,y;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: DEFAULTS.TYPE,
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    counter: 1,
    'max-counter': MAX_COUNTER_LIST[1],
    overlay: false
  }
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var g,v,T;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: DEFAULTS.TYPE,
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    counter: 1,
    'max-counter': MAX_COUNTER_LIST[1],
    overlay: false
  }
}`,...(T=(v=n.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var b,E,R;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: TYPE.ICON,
    'icon-name': 'placeholder-bold',
    variant: ICON_VARIANT.PRIMARY,
    overlay: false
  }
}`,...(R=(E=c.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var f,A,N;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: TYPE.COUNTER,
    counter: 10,
    'max-counter': MAX_COUNTER_LIST[1],
    overlay: false
  }
}`,...(N=(A=t.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var O,S,C;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    type: TYPE.SUCCESS,
    overlay: false
  }
}`,...(C=(S=s.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var I,x,U;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    type: TYPE.WARNING,
    overlay: false
  }
}`,...(U=(x=l.parameters)==null?void 0:x.docs)==null?void 0:U.source}}};var _,$,P;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    type: TYPE.ERROR,
    overlay: false
  }
}`,...(P=($=m.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var Y,k,L;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: renderOverlay,
  args: {
    type: TYPE.COUNTER,
    counter: 1000,
    'max-counter': MAX_COUNTER_LIST[2],
    overlay: true
  }
}`,...(L=(k=d.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};const te=["Example","Dot","Icon","Counter","Success","Warning","Error","Overlay"];export{t as Counter,n as Dot,m as Error,a as Example,c as Icon,d as Overlay,s as Success,l as Warning,te as __namedExportsOrder,ce as default};
