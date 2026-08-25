import{k as g}from"./iframe-DKmoi846.js";import{c as u,s as b}from"./commonArgTypes-BG7EqI50.js";import{h as v}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const x=s=>g` <mdc-progressspinner value="${s.value}" ?error="${s.error}" data-aria-label="${s["data-aria-label"]}">
  </mdc-progressspinner>`,h={title:"Components/progressspinner",tags:["autodocs"],component:"mdc-progressspinner",render:x,argTypes:{value:{control:"number"},error:{control:"boolean"},"data-aria-label":{control:"text"},...v(["help-text-type","required","label","disabled","help-text","toggletip-text","toggletip-placement","toggletip-strategy","info-icon-aria-label","variant","id"]),...u,...b}},r={args:{value:0,"data-aria-label":"progress spinner"}},e={args:{value:25,error:!0,"data-aria-label":"Error progress spinner"}},a={args:{value:100,error:!1,"data-aria-label":"Success progress spinner"}};var o,t,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    value: 0,
    'data-aria-label': 'progress spinner'
  }
}`,...(n=(t=r.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var l,p,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    value: 25,
    error: true,
    'data-aria-label': 'Error progress spinner'
  }
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var i,d,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    value: 100,
    error: false,
    'data-aria-label': 'Success progress spinner'
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const T=["Example","Error","Success"];export{e as Error,r as Example,a as Success,T as __namedExportsOrder,h as default};
