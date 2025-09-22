import{S as u,T as g,C as a}from"./staticchip.component-XdZoYH6n.js";import"./index-DHsMOcdX.js";import"./index-DyTlZ_IO.js";import{k as t}from"./lit-element-D5KKan5q.js";import{c as L,s as O}from"./commonArgTypes-BluK8w5L.js";import{t as A}from"./utils-CFOyPOhY.js";import"./provider.component-BaQC7CJH.js";import"./IconNameMixin-CRlZlTtq.js";import"./index-CqVtAZCJ.js";import"./iframe-BUpju6j_.js";import"../sb-preview/runtime.js";import"./state-C0WmBOuD.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-DWn5NkGG.js";import"./create-context-89xeped_.js";import"./index-DTrDRi1E.js";u.register(g);const C=o=>t` <mdc-staticchip color="${o.color}" label="${o.label}" icon-name="${o["icon-name"]}"></mdc-staticchip>`,W={title:"Components/chip/staticchip",tags:["autodocs"],component:"mdc-staticchip",render:C,parameters:{badges:["stable"]},argTypes:{color:{control:"select",options:Object.values(a)},label:{control:"text"},"icon-name":{control:"text"},...L,...O,...A(["--mdc-chip-color","--mdc-chip-border-color","--mdc-chip-background-color"])}},r={args:{color:a.DEFAULT,label:"Label"}},e={args:{color:a.DEFAULT,label:"Label","icon-name":"placeholder-bold"}},c={render:()=>t` <div style="display: flex; gap: 0.5rem;">
      ${Object.values(a).map(o=>t` <mdc-staticchip color="${o}" label="${o}"></mdc-staticchip> `)}
    </div>`};var s,l,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label'
  }
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var m,p,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    'icon-name': 'placeholder-bold'
  }
}`,...(n=(p=e.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};var d,b,h;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:'{\n  render: () => html` <div style="display: flex; gap: 0.5rem;">\n      ${Object.values(COLOR).map(color => html` <mdc-staticchip color="${color}" label="${color}"></mdc-staticchip> `)}\n    </div>`\n}',...(h=(b=c.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const G=["Example","WithIcon","AllColors"];export{c as AllColors,r as Example,e as WithIcon,G as __namedExportsOrder,W as default};
