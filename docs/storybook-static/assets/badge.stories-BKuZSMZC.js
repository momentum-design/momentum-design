import"./index-BWJq7EVP.js";import{k as h}from"./iframe-xgMm-O8k.js";import{c as V,s as F}from"./commonArgTypes-BluK8w5L.js";import{T as r,I as M,D as i}from"./badge.constants-I9ffWtla.js";import"./if-defined-dadJY7mK.js";import"./IconNameMixin-D_wQTr3R.js";import"./index-DyQO_HeE.js";import"./preload-helper-C1FmrZbK.js";import"./index-aIhsmGD_.js";import"./index-DTrDRi1E.js";const a=[9,99,999],X=e=>h`
  <mdc-badge
    type="${e.type}"
    icon-name="${e["icon-name"]}"
    counter="${e.counter}"
    max-counter="${e["max-counter"]}"
    variant="${e.variant}"
    ?overlay=${e.overlay}
    aria-label="${e["aria-label"]}"
  ></mdc-badge>
`,k=e=>h`
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
`,Q={title:"Components/badge",tags:["autodocs"],component:"mdc-badge",render:X,argTypes:{type:{control:"select",options:Object.values(r)},overlay:{control:"boolean"},counter:{if:{arg:"type",eq:r.COUNTER},control:"number"},"max-counter":{if:{arg:"type",eq:r.COUNTER},control:"select",options:a},"icon-name":{if:{arg:"type",eq:r.ICON},control:"text"},variant:{if:{arg:"type",eq:r.ICON},control:"select",options:Object.values(M)},"aria-label":{control:"text"},...V,...F}},o={args:{type:i.TYPE,"icon-name":"placeholder-bold",variant:i.VARIANT,counter:1,"max-counter":a[1],overlay:!1}},n={args:{type:i.TYPE,"icon-name":"placeholder-bold",variant:i.VARIANT,counter:1,"max-counter":a[1],overlay:!1}},t={args:{type:r.ICON,"icon-name":"placeholder-bold",variant:M.PRIMARY,overlay:!1}},c={args:{type:r.COUNTER,counter:10,"max-counter":a[1],overlay:!1}},s={args:{type:r.SUCCESS,overlay:!1}},l={args:{type:r.WARNING,overlay:!1}},p={args:{type:r.ERROR,overlay:!1}},m={render:k,args:{type:r.COUNTER,counter:1e3,"max-counter":a[2],overlay:!0}};var d,u,y;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: DEFAULTS.TYPE,
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    counter: 1,
    'max-counter': MAX_COUNTER_LIST[1],
    overlay: false
  }
}`,...(y=(u=o.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var v,T,E;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: DEFAULTS.TYPE,
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    counter: 1,
    'max-counter': MAX_COUNTER_LIST[1],
    overlay: false
  }
}`,...(E=(T=n.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var g,R,A;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: TYPE.ICON,
    'icon-name': 'placeholder-bold',
    variant: ICON_VARIANT.PRIMARY,
    overlay: false
  }
}`,...(A=(R=t.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var N,O,S;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    type: TYPE.COUNTER,
    counter: 10,
    'max-counter': MAX_COUNTER_LIST[1],
    overlay: false
  }
}`,...(S=(O=c.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var C,I,b;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: TYPE.SUCCESS,
    overlay: false
  }
}`,...(b=(I=s.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var f,x,U;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: TYPE.WARNING,
    overlay: false
  }
}`,...(U=(x=l.parameters)==null?void 0:x.docs)==null?void 0:U.source}}};var _,$,P;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    type: TYPE.ERROR,
    overlay: false
  }
}`,...(P=($=p.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var Y,L,D;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: renderOverlay,
  args: {
    type: TYPE.COUNTER,
    counter: 1000,
    'max-counter': MAX_COUNTER_LIST[2],
    overlay: true
  }
}`,...(D=(L=m.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};const Z=["Example","Dot","Icon","Counter","Success","Warning","Error","Overlay"];export{c as Counter,n as Dot,p as Error,o as Example,t as Icon,m as Overlay,s as Success,l as Warning,Z as __namedExportsOrder,Q as default};
