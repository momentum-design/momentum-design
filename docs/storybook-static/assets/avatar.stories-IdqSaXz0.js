import{Q as b}from"./repeat-CNQ7t7Vw.js";import{A as o,D as E}from"./index-v3UR-Xp0.js";import{k as a}from"./lit-element-D5KKan5q.js";import{t as r}from"./if-defined-D5BV9-c0.js";import{P as T}from"./index-BrCr4GgP.js";import{t as j,d as S}from"./utils-CFOyPOhY.js";import{c as k,s as D}from"./commonArgTypes-BluK8w5L.js";import{i as x}from"./imageFixtures-CD4avj2q.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-Bb6vhctq.js";import"./state-C0WmBOuD.js";import"./provider.component-BaQC7CJH.js";import"./IconNameMixin-CRlZlTtq.js";import"./index-CqVtAZCJ.js";import"./index-DHsMOcdX.js";import"./index-DhIhdWNp.js";import"./iframe-DtD0cJ2q.js";import"../sb-preview/runtime.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-DWn5NkGG.js";import"./create-context-89xeped_.js";import"./index-DTrDRi1E.js";const F=e=>a`
  <mdc-avatar
    counter="${r(e.counter)}"
    icon-name="${r(e["icon-name"])}"
    initials="${r(e.initials)}"
    presence="${e.presence==="none"?void 0:r(e.presence)}"
    size="${r(e.size)}"
    src="${r(e.src)}"
    ?is-typing="${e["is-typing"]}"
  ></mdc-avatar>
`,K={title:"Components/avatar",tags:["autodocs"],component:"mdc-avatar",render:F,parameters:{badges:["stable"]},argTypes:{src:{control:"text"},initials:{control:"text"},presence:{control:"select",options:["none",...Object.values(T)]},size:{control:"select",options:Object.values(o)},"is-typing":{control:"boolean"},"icon-name":{control:"text"},counter:{control:"number"},...j(["--mdc-avatar-default-background-color","--mdc-avatar-default-foreground-color","--mdc-avatar-loading-indicator-background-color","--mdc-avatar-loading-indicator-foreground-color","--mdc-avatar-loading-overlay-background-color"]),...k,...D}},s={args:{src:x.avatar,initials:"MD",size:88,"icon-name":"","is-typing":""}},t={args:{size:E.SIZE}},i={render:()=>a`
    <div style="display: flex; justify-content: space-evenly; align-items: center">
      ${b(Object.values(o),e=>a` <mdc-avatar size="${e}"></mdc-avatar> `)}
    </div>
  `,argTypes:{...S(["counter","icon-name","initials","presence","size","src","is-typing"])}},n={render:e=>a`
    <div style="display: flex; justify-content: space-evenly; align-items: center">
      ${b(Object.values(o),A=>a`
          <mdc-avatar
            src="${r(e.src)}"
            presence="${r(e.presence)}"
            ?is-typing="${e["is-typing"]}"
            size="${A}"
          ></mdc-avatar>
        `)}
    </div>
  `,argTypes:{...S(["counter","icon-name","initials","size"])},args:{src:x.avatar,presence:"active","is-typing":!1}};var c,m,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    src: imageFixtures.avatar,
    initials: 'MD',
    size: 88,
    'icon-name': '',
    'is-typing': ''
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var l,d,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: DEFAULTS.SIZE
  }
}`,...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var v,u,y;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; justify-content: space-evenly; align-items: center">
      \${repeat(Object.values(AVATAR_SIZE), size => html\` <mdc-avatar size="\${size}"></mdc-avatar> \`)}
    </div>
  \`,
  argTypes: {
    ...disableControls(['counter', 'icon-name', 'initials', 'presence', 'size', 'src', 'is-typing'])
  }
}`,...(y=(u=i.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var f,z,$;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args: Args) => html\`
    <div style="display: flex; justify-content: space-evenly; align-items: center">
      \${repeat(Object.values(AVATAR_SIZE), size => html\`
          <mdc-avatar
            src="\${ifDefined(args.src)}"
            presence="\${ifDefined(args.presence)}"
            ?is-typing="\${args['is-typing']}"
            size="\${size}"
          ></mdc-avatar>
        \`)}
    </div>
  \`,
  argTypes: {
    ...disableControls(['counter', 'icon-name', 'initials', 'size'])
  },
  args: {
    src: imageFixtures.avatar,
    presence: 'active',
    'is-typing': false
  }
}`,...($=(z=n.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};const X=["Example","Fallback","Size","SizeWithPresence"];export{s as Example,t as Fallback,i as Size,n as SizeWithPresence,X as __namedExportsOrder,K as default};
