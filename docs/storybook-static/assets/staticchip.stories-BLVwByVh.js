import{S as O,T as u,C as c}from"./staticchip.component-H5xy_o-V.js";import{k as s,R as A}from"./iframe-Dihsx-NL.js";import"./index-DAxnXaXz.js";import{i as L}from"./manifest-BmzYojFK.js";import{c as g,s as C}from"./commonArgTypes-BG7EqI50.js";import{a as $}from"./utils-D6nie9pS.js";import"./IconNameMixin-lWfER01s.js";import"./preload-helper-C1FmrZbK.js";import"./index-CGtjRWZl.js";import"./index-DTrDRi1E.js";O.register(u);const E=o=>s` <mdc-staticchip color="${o.color}" label="${o.label}" icon-name="${o["icon-name"]}"></mdc-staticchip>`,I={title:"Components/chip/staticchip",tags:["autodocs"],component:"mdc-staticchip",render:E,argTypes:{color:{control:"select",options:Object.values(c)},label:{control:"text"},"icon-name":{control:"select",options:Object.keys(L)},...g,...C}},e={args:{color:c.DEFAULT,label:"Label"}},r={args:{color:c.DEFAULT,label:"Label","icon-name":"placeholder-bold"}},a={render:()=>s` <div style="display: flex; gap: 0.5rem;" role="${A.MAIN}">
      ${Object.values(c).map(o=>s` <mdc-staticchip color="${o}" label="${o}"></mdc-staticchip> `)}
    </div>`,...$()};var t,l,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label'
  }
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var n,m,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    'icon-name': 'placeholder-bold'
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,b,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:'{\n  render: () => html` <div style="display: flex; gap: 0.5rem;" role="${ROLE.MAIN}">\n      ${Object.values(COLOR).map(color => html` <mdc-staticchip color="${color}" label="${color}"></mdc-staticchip> `)}\n    </div>`,\n  ...hideAllControls()\n}',...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const M=["Example","WithIcon","AllColors"];export{a as AllColors,e as Example,r as WithIcon,M as __namedExportsOrder,I as default};
