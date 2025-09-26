import{S as u,T as g,C as a}from"./staticchip.component-mhqRLD_s.js";import"./index-BnjtOTfP.js";import"./index-wwme6ITP.js";import{k as t}from"./iframe-DbFhe1C8.js";import{c as L,s as O}from"./commonArgTypes-BluK8w5L.js";import{t as A}from"./utils-CFOyPOhY.js";import"./IconNameMixin-miLAir6r.js";import"./index-CO0us3Ia.js";import"./preload-helper-C1FmrZbK.js";import"./index-CdiuGzo8.js";import"./index-DTrDRi1E.js";u.register(g);const C=o=>t` <mdc-staticchip color="${o.color}" label="${o.label}" icon-name="${o["icon-name"]}"></mdc-staticchip>`,U={title:"Components/chip/staticchip",tags:["autodocs"],component:"mdc-staticchip",render:C,argTypes:{color:{control:"select",options:Object.values(a)},label:{control:"text"},"icon-name":{control:"text"},...L,...O,...A(["--mdc-chip-color","--mdc-chip-border-color","--mdc-chip-background-color"])}},e={args:{color:a.DEFAULT,label:"Label"}},r={args:{color:a.DEFAULT,label:"Label","icon-name":"placeholder-bold"}},c={render:()=>t` <div style="display: flex; gap: 0.5rem;">
      ${Object.values(a).map(o=>t` <mdc-staticchip color="${o}" label="${o}"></mdc-staticchip> `)}
    </div>`};var l,s,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label'
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var m,p,n;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    'icon-name': 'placeholder-bold'
  }
}`,...(n=(p=r.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};var d,b,h;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:'{\n  render: () => html` <div style="display: flex; gap: 0.5rem;">\n      ${Object.values(COLOR).map(color => html` <mdc-staticchip color="${color}" label="${color}"></mdc-staticchip> `)}\n    </div>`\n}',...(h=(b=c.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const j=["Example","WithIcon","AllColors"];export{c as AllColors,e as Example,r as WithIcon,j as __namedExportsOrder,U as default};
