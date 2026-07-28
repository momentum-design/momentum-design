import"./index-DmZ0Va5_.js";import{k as l,R as O}from"./iframe-vPjlp732.js";import{i as u}from"./manifest-774oQsuf.js";import{c as L,s as A}from"./commonArgTypes-BG7EqI50.js";import{a as g}from"./utils-B5QUENNQ.js";import{C as c}from"./staticchip.component-C_lj5r1F.js";import"./index-BtoRk3J9.js";import"./preload-helper-C1FmrZbK.js";import"./index-vK631QPL.js";import"./index-DTrDRi1E.js";import"./IconNameMixin-bLXjtifv.js";const $=o=>l` <mdc-staticchip color="${o.color}" label="${o.label}" icon-name="${o["icon-name"]}"></mdc-staticchip>`,I={title:"Components/chip/staticchip",tags:["autodocs"],component:"mdc-staticchip",render:$,argTypes:{color:{control:"select",options:Object.values(c)},label:{control:"text"},"icon-name":{control:"select",options:Object.keys(u)},...L,...A}},e={args:{color:c.DEFAULT,label:"Label"}},r={args:{color:c.DEFAULT,label:"Label","icon-name":"placeholder-bold"}},a={render:()=>l` <div style="display: flex; gap: 0.5rem;" role="${O.MAIN}">
      ${Object.values(c).map(o=>l` <mdc-staticchip color="${o}" label="${o}"></mdc-staticchip> `)}
    </div>`,...g()};var s,t,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label'
  }
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var n,m,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    'icon-name': 'placeholder-bold'
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,b,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:'{\n  render: () => html` <div style="display: flex; gap: 0.5rem;" role="${ROLE.MAIN}">\n      ${Object.values(COLOR).map(color => html` <mdc-staticchip color="${color}" label="${color}"></mdc-staticchip> `)}\n    </div>`,\n  ...hideAllControls()\n}',...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const U=["Example","WithIcon","AllColors"];export{a as AllColors,e as Example,r as WithIcon,U as __namedExportsOrder,I as default};
