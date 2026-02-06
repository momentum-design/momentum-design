import{P as u,a as f,D as a}from"./index-MCVkG4Ys.js";import{k as s,R as x}from"./iframe-CDUGfpod.js";import{Q as v}from"./repeat-bpCF_bnt.js";import{b as S,a as $}from"./utils-B5QUENNQ.js";import"./index-DKlCMvXJ.js";import"./preload-helper-C1FmrZbK.js";import"./index-CwpeCgfw.js";import"./index-DTrDRi1E.js";import"./directive-Ctav8iJK.js";const g=e=>s` <mdc-presence type="${e.type}" size="${e.size}"></mdc-presence> `,I={title:"Components/avatar/presence",tags:["autodocs"],component:"mdc-presence",render:g,argTypes:{type:{options:Object.values(u),control:{type:"select"}},size:{options:Object.values(f),control:{type:"select"}},...S(["icon"])}},r={args:{type:a.TYPE,size:a.SIZE}},n={render:()=>s`
    <div style="display: flex;  flex-wrap: wrap; justify-content: space-around;" role="${x.MAIN}">
      ${v(Object.values(u),e=>s`
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px">
            <mdc-presence type="${e}"></mdc-presence>
            <span>${e}</span>
          </div>
        `)}
    </div>
  `,...$()},t={render:()=>s`
    <div style="display: flex;  flex-wrap: wrap; justify-content: space-around;" role="${x.MAIN}">
      ${v(Object.values(f),e=>s`
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px">
            <mdc-presence size="${e}"></mdc-presence>
            <span>size: ${e}</span>
          </div>
        `)}
    </div>
  `,args:{type:a.TYPE},...$()};var p,c,o;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: DEFAULTS.TYPE,
    size: DEFAULTS.SIZE
  }
}`,...(o=(c=r.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};var l,i,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex;  flex-wrap: wrap; justify-content: space-around;" role="\${ROLE.MAIN}">
      \${repeat(Object.values(PRESENCE_TYPE), presence => html\`
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px">
            <mdc-presence type="\${presence}"></mdc-presence>
            <span>\${presence}</span>
          </div>
        \`)}
    </div>
  \`,
  ...hideAllControls()
}`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,y,E;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex;  flex-wrap: wrap; justify-content: space-around;" role="\${ROLE.MAIN}">
      \${repeat(Object.values(PRESENCE_SIZE), size => html\`
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px">
            <mdc-presence size="\${size}"></mdc-presence>
            <span>size: \${size}</span>
          </div>
        \`)}
    </div>
  \`,
  args: {
    type: DEFAULTS.TYPE
  },
  ...hideAllControls()
}`,...(E=(y=t.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};const N=["Example","AllPresenceTypes","AllPresenceSizes"];export{t as AllPresenceSizes,n as AllPresenceTypes,r as Example,N as __namedExportsOrder,I as default};
