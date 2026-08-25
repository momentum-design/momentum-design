import{k as B}from"./iframe-DKmoi846.js";import{c as K,s as L}from"./commonArgTypes-BG7EqI50.js";import"./preload-helper-C1FmrZbK.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,N=e=>B`
  <mdc-slider
    @input="${u("input")}"
    @change="${u("change")}"
    min="${e.min}"
    max="${e.max}"
    step="${e.step}"
    value="${e.value}"
    value-start="${e["value-start"]}"
    value-end="${e["value-end"]}"
    ?range="${e.range}"
    ?disabled="${e.disabled}"
    ?soft-disabled="${e["soft-disabled"]}"
    leading-icon="${e["leading-icon"]}"
    trailing-icon="${e["trailing-icon"]}"
    label="${e.label}"
    label-start="${e["label-start"]}"
    label-end="${e["label-end"]}"
    value-label="${e["value-label"]}"
    value-label-start="${e["value-label-start"]}"
    value-label-end="${e["value-label-end"]}"
    start-aria-label="${e["start-aria-label"]}"
    start-aria-valuetext="${e["start-aria-valuetext"]}"
    end-aria-label="${e["end-aria-label"]}"
    end-aria-valuetext="${e["end-aria-valuetext"]}"
    name="${e.name}"
    name-start="${e["name-start"]}"
    name-end="${e["name-end"]}"
    data-aria-valuetext="${e["data-aria-valuetext"]}"
    data-aria-label="${e["data-aria-label"]}"
    ?hide-tooltip="${e["hide-tooltip"]}"
    class="${e.class}"
    style="${e.style}"
  ></mdc-slider>
`,z={title:"Components/slider",tags:["autodocs"],component:"mdc-slider",render:N,argTypes:{min:{control:"number"},max:{control:"number"},step:{control:"number"},value:{control:"number",if:{arg:"range",eq:!1}},"value-start":{control:"number",if:{arg:"range",eq:!0}},"value-end":{control:"number",if:{arg:"range",eq:!0}},range:{control:"boolean"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},"leading-icon":{control:"text"},"trailing-icon":{control:"text"},label:{control:"text"},"label-start":{control:"text"},"label-end":{control:"text"},"value-label":{control:"text",if:{arg:"range",eq:!1}},"value-label-start":{control:"text",if:{arg:"range",eq:!0}},"value-label-end":{control:"text",if:{arg:"range",eq:!0}},"start-aria-label":{control:"text",if:{arg:"range",eq:!0}},"start-aria-valuetext":{control:"text",if:{arg:"range",eq:!0}},"end-aria-label":{control:"text",if:{arg:"range",eq:!0}},"end-aria-valuetext":{control:"text",if:{arg:"range",eq:!0}},name:{control:"text",if:{arg:"range",eq:!1}},"name-start":{control:"text",if:{arg:"range",eq:!0}},"name-end":{control:"text",if:{arg:"range",eq:!0}},"data-aria-valuetext":{control:"text",if:{arg:"range",eq:!1}},"data-aria-label":{control:"text"},"hide-tooltip":{control:"boolean"},...K,...L}},a={args:{min:0,max:100,step:1,value:50,range:!1,disabled:!1,"soft-disabled":!1,"leading-icon":"placeholder-bold","trailing-icon":"placeholder-bold",label:"Volume","label-start":"Min","label-end":"Max","value-label":"","value-label-start":"","value-label-end":"","start-aria-label":"","start-aria-valuetext":"","end-aria-label":"","end-aria-valuetext":"",name:"","name-start":"","name-end":"","data-aria-valuetext":"","data-aria-label":"","hide-tooltip":!1,class:"",style:""}},l={args:{min:0,max:100,step:5,range:!1,value:20,"label-start":"Start","label-end":"End",label:"Steps"}},n={args:{min:0,max:100,range:!1,value:50,disabled:!0,label:"Disabled"}},t={args:{min:0,max:100,value:50,range:!1,"leading-icon":"speaker-muted-bold","trailing-icon":"speaker-bold",label:"Volume"}},r={args:{min:0,max:100,value:30,range:!1,label:"Timeline with labels","label-start":"00:00","label-end":"03:00","value-label":"00:30","soft-disabled":!0}},s={args:{min:0,max:100,step:1,"value-start":20,"value-end":80,range:!0,label:"Range","label-start":"Min","label-end":"Max"}},i={args:{min:0,max:100,step:12,"value-start":38,"value-end":90,range:!0,label:"Range","label-start":"Min","label-end":"Max"}},o={args:{min:0,max:100,step:1,"value-start":20,"value-end":80,range:!0,label:"Range","label-start":"Min","label-end":"Max",disabled:!0}},d={args:{min:0,max:100,step:1,"value-start":20,"value-end":80,range:!0,label:"Range","label-start":"Min","label-end":"Max","soft-disabled":!0}};var b,c,m;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    range: false,
    disabled: false,
    'soft-disabled': false,
    'leading-icon': 'placeholder-bold',
    'trailing-icon': 'placeholder-bold',
    label: 'Volume',
    'label-start': 'Min',
    'label-end': 'Max',
    'value-label': '',
    'value-label-start': '',
    'value-label-end': '',
    'start-aria-label': '',
    'start-aria-valuetext': '',
    'end-aria-label': '',
    'end-aria-valuetext': '',
    name: '',
    'name-start': '',
    'name-end': '',
    'data-aria-valuetext': '',
    'data-aria-label': '',
    'hide-tooltip': false,
    class: '',
    style: ''
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var g,p,v;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 5,
    range: false,
    value: 20,
    'label-start': 'Start',
    'label-end': 'End',
    label: 'Steps'
  }
}`,...(v=(p=l.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var x,f,S;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    range: false,
    value: 50,
    disabled: true,
    label: 'Disabled'
  }
}`,...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var $,M,h;t.parameters={...t.parameters,docs:{...($=t.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    value: 50,
    range: false,
    'leading-icon': 'speaker-muted-bold',
    'trailing-icon': 'speaker-bold',
    label: 'Volume'
  }
}`,...(h=(M=t.parameters)==null?void 0:M.docs)==null?void 0:h.source}}};var R,q,D;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    value: 30,
    range: false,
    label: 'Timeline with labels',
    'label-start': '00:00',
    'label-end': '03:00',
    'value-label': \`00:30\`,
    'soft-disabled': true
  }
}`,...(D=(q=r.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var T,k,y;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 1,
    'value-start': 20,
    'value-end': 80,
    range: true,
    label: 'Range',
    'label-start': 'Min',
    'label-end': 'Max'
  }
}`,...(y=(k=s.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var _,E,O;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 12,
    'value-start': 38,
    'value-end': 90,
    range: true,
    label: 'Range',
    'label-start': 'Min',
    'label-end': 'Max'
  }
}`,...(O=(E=i.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var W,V,A;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 1,
    'value-start': 20,
    'value-end': 80,
    range: true,
    label: 'Range',
    'label-start': 'Min',
    'label-end': 'Max',
    disabled: true
  }
}`,...(A=(V=o.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var I,w,C;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 1,
    'value-start': 20,
    'value-end': 80,
    range: true,
    label: 'Range',
    'label-start': 'Min',
    'label-end': 'Max',
    'soft-disabled': true
  }
}`,...(C=(w=d.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const F=["Example","SliderWithTicks","DisabledSlider","SliderWithIcons","SoftDisabledSlider","RangeSlider","RangeSliderWithTicks","DisabledRangeSlider","SoftDisabledRangeSlider"];export{o as DisabledRangeSlider,n as DisabledSlider,a as Example,s as RangeSlider,i as RangeSliderWithTicks,t as SliderWithIcons,l as SliderWithTicks,d as SoftDisabledRangeSlider,r as SoftDisabledSlider,F as __namedExportsOrder,z as default};
