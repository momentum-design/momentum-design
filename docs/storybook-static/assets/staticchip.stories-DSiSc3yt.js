import{S as u,T as g,C as c}from"./staticchip.component-BYuxEgy6.js";import{k as t}from"./iframe-D498-k7l.js";import"./index-B0je40HE.js";import{c as L,s as O}from"./commonArgTypes-BluK8w5L.js";import"./IconNameMixin-CuZVAmfp.js";import"./preload-helper-C1FmrZbK.js";import"./index-Ba9hZ_UX.js";import"./index-DTrDRi1E.js";u.register(g);const A=e=>t` <mdc-staticchip color="${e.color}" label="${e.label}" icon-name="${e["icon-name"]}"></mdc-staticchip>`,S={title:"Components/chip/staticchip",tags:["autodocs"],component:"mdc-staticchip",render:A,argTypes:{color:{control:"select",options:Object.values(c)},label:{control:"text"},"icon-name":{control:"text"},...L,...O}},o={args:{color:c.DEFAULT,label:"Label"}},r={args:{color:c.DEFAULT,label:"Label","icon-name":"placeholder-bold"}},a={render:()=>t` <div style="display: flex; gap: 0.5rem;">
      ${Object.values(c).map(e=>t` <mdc-staticchip color="${e}" label="${e}"></mdc-staticchip> `)}
    </div>`};var s,l,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label'
  }
}`,...(i=(l=o.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var n,p,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    'icon-name': 'placeholder-bold'
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,b,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:'{\n  render: () => html` <div style="display: flex; gap: 0.5rem;">\n      ${Object.values(COLOR).map(color => html` <mdc-staticchip color="${color}" label="${color}"></mdc-staticchip> `)}\n    </div>`\n}',...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const D=["Example","WithIcon","AllColors"];export{a as AllColors,o as Example,r as WithIcon,D as __namedExportsOrder,S as default};
