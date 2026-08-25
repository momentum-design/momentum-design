import{L as o,k as s,R as L}from"./iframe-DKmoi846.js";import{i as C}from"./manifest-DISj2anu.js";import{c as y,s as O}from"./commonArgTypes-BG7EqI50.js";import{i}from"./imageFixtures-CD4avj2q.js";import{a as g}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const $=a=>s` <mdc-staticchip color="${a.color}" label="${a.label}" icon-name="${a["icon-name"]}"></mdc-staticchip>`,w={title:"Components/chip/staticchip",tags:["autodocs"],component:"mdc-staticchip",render:$,argTypes:{color:{control:"select",options:Object.values(o)},label:{control:"text"},"icon-name":{control:"select",options:Object.keys(C)},...y,...O}},e={args:{color:o.DEFAULT,label:"Label"}},t={args:{color:o.DEFAULT,label:"Label","icon-name":"placeholder-bold"}},c={render:()=>s` <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <mdc-staticchip label="Addy Rodney">
        <mdc-avatar slot="prefix" size="24" src="${i.avatar}" initials="AR"></mdc-avatar>
      </mdc-staticchip>
      <mdc-staticchip label="Lisa Chang">
        <mdc-avatar slot="prefix" size="24" initials="LC"></mdc-avatar>
      </mdc-staticchip>
      <mdc-staticchip label="Cobalt Avatar" color="cobalt">
        <mdc-avatar slot="prefix" size="24" src="${i.avatar}" initials="CA"></mdc-avatar>
      </mdc-staticchip>
    </div>`,...g()},r={render:()=>s` <div style="display: flex; gap: 0.5rem;" role="${L.MAIN}">
      ${Object.values(o).map(a=>s` <mdc-staticchip color="${a}" label="${a}"></mdc-staticchip> `)}
    </div>`,...g()};var l,n,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label'
  }
}`,...(m=(n=e.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var d,p,h;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    'icon-name': 'placeholder-bold'
  }
}`,...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var v,b,A;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(A=(b=c.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var u,x,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:'{\n  render: () => html` <div style="display: flex; gap: 0.5rem;" role="${ROLE.MAIN}">\n      ${Object.values(COLOR).map(color => html` <mdc-staticchip color="${color}" label="${color}"></mdc-staticchip> `)}\n    </div>`,\n  ...hideAllControls()\n}',...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const D=["Example","WithIcon","WithAvatar","AllColors"];export{r as AllColors,e as Example,c as WithAvatar,t as WithIcon,D as __namedExportsOrder,w as default};
