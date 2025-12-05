import"./index-tzsXTYtB.js";import{k as g}from"./iframe-Hv7IoejM.js";import{i as G}from"./manifest-BmzYojFK.js";import{c as F,s as X}from"./commonArgTypes-BG7EqI50.js";import{a as q}from"./utils-D6nie9pS.js";import{T as e,I as V,D as i}from"./badge.constants-CyyfD38A.js";import"./if-defined-DHscNqNO.js";import"./IconNameMixin-BBNEv9ix.js";import"./index-DWkFIevN.js";import"./preload-helper-C1FmrZbK.js";import"./index-CIODf6mm.js";import"./index-DTrDRi1E.js";const r=[9,99,999],j=a=>g`
  <mdc-badge
    type="${a.type}"
    icon-name="${a["icon-name"]}"
    counter="${a.counter}"
    max-counter="${a["max-counter"]}"
    variant="${a.variant}"
    ?overlay="${a.overlay}"
    aria-label="${a["aria-label"]}"
  ></mdc-badge>
`,z=a=>g`
  <div style="background-color: var(--mds-color-theme-inverted-background-normal); padding: 5px;">${j(a)}</div>
`,ce={title:"Components/badge",tags:["autodocs"],component:"mdc-badge",render:j,argTypes:{type:{control:"select",options:Object.values(e)},overlay:{control:"boolean"},counter:{if:{arg:"type",eq:e.COUNTER},control:"number"},"max-counter":{if:{arg:"type",eq:e.COUNTER},control:"select",options:r},"icon-name":{if:{arg:"type",eq:e.ICON},control:"select",options:Object.keys(G)},variant:{if:{arg:"type",eq:e.ICON},control:"select",options:Object.values(V)},"aria-label":{control:"text"},...F,...X}},o={args:{type:i.TYPE,"icon-name":"placeholder-bold",variant:i.VARIANT,counter:1,"max-counter":r[1],overlay:!1}},n={args:{type:i.TYPE,"icon-name":"placeholder-bold",variant:i.VARIANT,counter:1,"max-counter":r[1]}},t={args:{type:e.ICON,"icon-name":"placeholder-bold",variant:V.PRIMARY}},c={args:{type:e.COUNTER,counter:10,"max-counter":r[1]}},d={args:{type:e.SUCCESS}},s={args:{type:e.WARNING}},m={args:{type:e.ERROR,overlay:!1}},l={render:z,args:{type:e.COUNTER,counter:1e3,"max-counter":r[2],overlay:!0}},p={render:()=>g`
    <h5>Without overlay</h5>
    <div style="display: flex; justify-content: space-between; align-items: center; width: 10rem;">
      <mdc-badge type="${e.DOT}"></mdc-badge>
      <mdc-badge type="${e.ICON}" icon-name="placeholder-bold"></mdc-badge>
      <mdc-badge type="${e.COUNTER}" counter="10"></mdc-badge>
      <mdc-badge type="${e.SUCCESS}"></mdc-badge>
      <mdc-badge type="${e.WARNING}"></mdc-badge>
      <mdc-badge type="${e.ERROR}"></mdc-badge>
    </div>
    <h5>With overlay</h5>
    <div
      style="display: flex; justify-content: space-between; align-items: center; width: 10rem; background-color: var(--mds-color-theme-inverted-background-normal); padding: 5px;"
    >
      <mdc-badge type="${e.DOT}" overlay></mdc-badge>
      <mdc-badge type="${e.ICON}" icon-name="placeholder-bold" overlay></mdc-badge>
      <mdc-badge type="${e.COUNTER}" counter="10" overlay></mdc-badge>
      <mdc-badge type="${e.SUCCESS}" overlay></mdc-badge>
      <mdc-badge type="${e.WARNING}" overlay></mdc-badge>
      <mdc-badge type="${e.ERROR}" overlay></mdc-badge>
    </div>
  `,...q()};var y,b,u;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: DEFAULTS.TYPE,
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    counter: 1,
    'max-counter': MAX_COUNTER_LIST[1],
    overlay: false
  }
}`,...(u=(b=o.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var T,E,v;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    type: DEFAULTS.TYPE,
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    counter: 1,
    'max-counter': MAX_COUNTER_LIST[1]
  }
}`,...(v=(E=n.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var R,N,O;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    type: TYPE.ICON,
    'icon-name': 'placeholder-bold',
    variant: ICON_VARIANT.PRIMARY
  }
}`,...(O=(N=t.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var C,S,A;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: TYPE.COUNTER,
    counter: 10,
    'max-counter': MAX_COUNTER_LIST[1]
  }
}`,...(A=(S=c.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var h,I,$;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: TYPE.SUCCESS
  }
}`,...($=(I=d.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var U,P,Y;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    type: TYPE.WARNING
  }
}`,...(Y=(P=s.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};var f,x,_;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: TYPE.ERROR,
    overlay: false
  }
}`,...(_=(x=m.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var D,W,L;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: renderOverlay,
  args: {
    type: TYPE.COUNTER,
    counter: 1000,
    'max-counter': MAX_COUNTER_LIST[2],
    overlay: true
  }
}`,...(L=(W=l.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var k,w,M;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => html\`
    <h5>Without overlay</h5>
    <div style="display: flex; justify-content: space-between; align-items: center; width: 10rem;">
      <mdc-badge type="\${TYPE.DOT}"></mdc-badge>
      <mdc-badge type="\${TYPE.ICON}" icon-name="placeholder-bold"></mdc-badge>
      <mdc-badge type="\${TYPE.COUNTER}" counter="10"></mdc-badge>
      <mdc-badge type="\${TYPE.SUCCESS}"></mdc-badge>
      <mdc-badge type="\${TYPE.WARNING}"></mdc-badge>
      <mdc-badge type="\${TYPE.ERROR}"></mdc-badge>
    </div>
    <h5>With overlay</h5>
    <div
      style="display: flex; justify-content: space-between; align-items: center; width: 10rem; background-color: var(--mds-color-theme-inverted-background-normal); padding: 5px;"
    >
      <mdc-badge type="\${TYPE.DOT}" overlay></mdc-badge>
      <mdc-badge type="\${TYPE.ICON}" icon-name="placeholder-bold" overlay></mdc-badge>
      <mdc-badge type="\${TYPE.COUNTER}" counter="10" overlay></mdc-badge>
      <mdc-badge type="\${TYPE.SUCCESS}" overlay></mdc-badge>
      <mdc-badge type="\${TYPE.WARNING}" overlay></mdc-badge>
      <mdc-badge type="\${TYPE.ERROR}" overlay></mdc-badge>
    </div>
  \`,
  ...hideAllControls()
}`,...(M=(w=p.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};const de=["Example","Dot","Icon","Counter","Success","Warning","Error","Overlay","AllVariants"];export{p as AllVariants,c as Counter,n as Dot,m as Error,o as Example,t as Icon,l as Overlay,d as Success,s as Warning,de as __namedExportsOrder,ce as default};
