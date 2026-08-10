import"./index-CEkJWPuu.js";import"./index-CnixIkuv.js";import{k as o,R as C}from"./iframe-CwldXf1M.js";import{i as L}from"./manifest-774oQsuf.js";import{c as y,s as O}from"./commonArgTypes-BG7EqI50.js";import{i}from"./imageFixtures-CD4avj2q.js";import{a as g}from"./utils-B5QUENNQ.js";import{C as s}from"./staticchip.component-DtKSYpE9.js";import"./index-DxF-zGA7.js";import"./preload-helper-C1FmrZbK.js";import"./index-BZ-vQjHB.js";import"./index-DTrDRi1E.js";import"./IconNameMixin-B_vY_g4A.js";import"./index-B2iXWj8i.js";const $=a=>o` <mdc-staticchip color="${a.color}" label="${a.label}" icon-name="${a["icon-name"]}"></mdc-staticchip>`,N={title:"Components/chip/staticchip",tags:["autodocs"],component:"mdc-staticchip",render:$,argTypes:{color:{control:"select",options:Object.values(s)},label:{control:"text"},"icon-name":{control:"select",options:Object.keys(L)},...y,...O}},t={args:{color:s.DEFAULT,label:"Label"}},r={args:{color:s.DEFAULT,label:"Label","icon-name":"placeholder-bold"}},e={render:()=>o` <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <mdc-staticchip label="Addy Rodney">
        <mdc-avatar slot="prefix" size="24" src="${i.avatar}" initials="AR"></mdc-avatar>
      </mdc-staticchip>
      <mdc-staticchip label="Lisa Chang">
        <mdc-avatar slot="prefix" size="24" initials="LC"></mdc-avatar>
      </mdc-staticchip>
      <mdc-staticchip label="Cobalt Avatar" color="cobalt">
        <mdc-avatar slot="prefix" size="24" src="${i.avatar}" initials="CA"></mdc-avatar>
      </mdc-staticchip>
    </div>`,...g()},c={render:()=>o` <div style="display: flex; gap: 0.5rem;" role="${C.MAIN}">
      ${Object.values(s).map(a=>o` <mdc-staticchip color="${a}" label="${a}"></mdc-staticchip> `)}
    </div>`,...g()};var l,m,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label'
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var n,d,h;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    'icon-name': 'placeholder-bold'
  }
}`,...(h=(d=r.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var v,b,A;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => html\` <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <mdc-staticchip label="Addy Rodney">
        <mdc-avatar slot="prefix" size="24" src="\${imageFixtures.avatar}" initials="AR"></mdc-avatar>
      </mdc-staticchip>
      <mdc-staticchip label="Lisa Chang">
        <mdc-avatar slot="prefix" size="24" initials="LC"></mdc-avatar>
      </mdc-staticchip>
      <mdc-staticchip label="Cobalt Avatar" color="cobalt">
        <mdc-avatar slot="prefix" size="24" src="\${imageFixtures.avatar}" initials="CA"></mdc-avatar>
      </mdc-staticchip>
    </div>\`,
  ...hideAllControls()
}`,...(A=(b=e.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var f,u,x;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:'{\n  render: () => html` <div style="display: flex; gap: 0.5rem;" role="${ROLE.MAIN}">\n      ${Object.values(COLOR).map(color => html` <mdc-staticchip color="${color}" label="${color}"></mdc-staticchip> `)}\n    </div>`,\n  ...hideAllControls()\n}',...(x=(u=c.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const _=["Example","WithIcon","WithAvatar","AllColors"];export{c as AllColors,t as Example,e as WithAvatar,r as WithIcon,_ as __namedExportsOrder,N as default};
