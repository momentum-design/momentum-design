import{Q as S}from"./repeat-CbmjLfX_.js";import{A as c,D as b}from"./index-DAcxB7-_.js";import{k as r}from"./iframe-RgXKid-6.js";import{t as s}from"./if-defined-s8sYxEiT.js";import{P as T}from"./index-DBn_lx4K.js";import{d as A}from"./utils-Dd_sfl9-.js";import{c as j,s as D}from"./commonArgTypes-BluK8w5L.js";import{i as x}from"./imageFixtures-CD4avj2q.js";import"./directive-Ctav8iJK.js";import"./IconNameMixin-Bb6Ecb3-.js";import"./index-BXKzNGcC.js";import"./preload-helper-C1FmrZbK.js";import"./index-CHjwiPzJ.js";import"./index-DTrDRi1E.js";const F=e=>r`
  <mdc-avatar
    counter="${s(e.counter)}"
    icon-name="${s(e["icon-name"])}"
    initials="${s(e.initials)}"
    presence="${e.presence==="none"?void 0:s(e.presence)}"
    size="${s(e.size)}"
    src="${s(e.src)}"
    ?is-typing="${e["is-typing"]}"
  ></mdc-avatar>
`,W={title:"Components/avatar",tags:["autodocs"],component:"mdc-avatar",render:F,argTypes:{src:{control:"text"},initials:{control:"text"},presence:{control:"select",options:["none",...Object.values(T)]},size:{control:"select",options:Object.values(c)},"is-typing":{control:"boolean"},"icon-name":{control:"text"},counter:{control:"number"},...j,...D}},a={args:{src:x.avatar,initials:"MD",size:88,"icon-name":"","is-typing":""}},t={args:{size:b.SIZE}},i={render:()=>r`
    <div style="display: flex; justify-content: space-evenly; align-items: center">
      ${S(Object.values(c),e=>r` <mdc-avatar size="${e}"></mdc-avatar> `)}
    </div>
  `,argTypes:{...A(["counter","icon-name","initials","presence","size","src","is-typing"])}},n={render:e=>r`
    <div style="display: flex; justify-content: space-evenly; align-items: center">
      ${S(Object.values(c),E=>r`
          <mdc-avatar
            src="${s(e.src)}"
            presence="${s(e.presence)}"
            ?is-typing="${e["is-typing"]}"
            size="${E}"
          ></mdc-avatar>
        `)}
    </div>
  `,argTypes:{...A(["counter","icon-name","initials","size"])},args:{src:x.avatar,presence:"active","is-typing":!1}};var o,p,m;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    src: imageFixtures.avatar,
    initials: 'MD',
    size: 88,
    'icon-name': '',
    'is-typing': ''
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,d,v;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: DEFAULTS.SIZE
  }
}`,...(v=(d=t.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var y,u,g;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; justify-content: space-evenly; align-items: center">
      \${repeat(Object.values(AVATAR_SIZE), size => html\` <mdc-avatar size="\${size}"></mdc-avatar> \`)}
    </div>
  \`,
  argTypes: {
    ...disableControls(['counter', 'icon-name', 'initials', 'presence', 'size', 'src', 'is-typing'])
  }
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,z,$;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...($=(z=n.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};const N=["Example","Fallback","Size","SizeWithPresence"];export{a as Example,t as Fallback,i as Size,n as SizeWithPresence,N as __namedExportsOrder,W as default};
