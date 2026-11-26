import{as as t,R as u,Q as x,k as s,at as f,P as v}from"./iframe-DqY8iUG6.js";import{h as $,b as S}from"./utils-DrEByy2n.js";import"./preload-helper-C1FmrZbK.js";const g=e=>s` <mdc-presence type="${e.type}" size="${e.size}"></mdc-presence> `,T={title:"Components/avatar/presence",tags:["autodocs"],component:"mdc-presence",render:g,argTypes:{type:{options:Object.values(v),control:{type:"select"}},size:{options:Object.values(f),control:{type:"select"}},...S(["icon"])}},n={args:{type:t.TYPE,size:t.SIZE}},r={render:()=>s`
    <div style="display: flex;  flex-wrap: wrap; justify-content: space-around;" role="${u.MAIN}">
      ${x(Object.values(v),e=>s`
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px">
            <mdc-presence type="${e}"></mdc-presence>
            <span>${e}</span>
          </div>
        `)}
    </div>
  `,...$()},a={render:()=>s`
    <div style="display: flex;  flex-wrap: wrap; justify-content: space-around;" role="${u.MAIN}">
      ${x(Object.values(f),e=>s`
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px">
            <mdc-presence size="${e}"></mdc-presence>
            <span>size: ${e}</span>
          </div>
        `)}
    </div>
  `,args:{type:t.TYPE},...$()};var p,c,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: DEFAULTS.TYPE,
    size: DEFAULTS.SIZE
  }
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var o,i,d;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,y,E;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(E=(y=a.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};const j=["Example","AllPresenceTypes","AllPresenceSizes"];export{a as AllPresenceSizes,r as AllPresenceTypes,n as Example,j as __namedExportsOrder,T as default};
