import{Q as A}from"./repeat-CNQ7t7Vw.js";import{A as o,D as h}from"./index-C_l6avyr.js";import{k as r}from"./lit-element-D5KKan5q.js";import{t as s}from"./if-defined-D5BV9-c0.js";import{T}from"./index-VPKgHpX9.js";import{d as c}from"./utils-D1SE5bce.js";import{c as x,s as E}from"./commonArgTypes-BluK8w5L.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-Bb6vhctq.js";import"./state-CSSggq2n.js";import"./index-C9z9WAEj.js";import"./IconNameMixin-CujGSn0t.js";import"./index-BX3Tn-Br.js";import"./text.constants-ZF0jM5wn.js";import"./index-P21x_s7g.js";import"./iframe-BL2arnm0.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./index-D3DhXfcW.js";const j=e=>r`
  <mdc-avatar
    counter="${s(e.counter)}"
    icon-name="${s(e["icon-name"])}"
    initials="${s(e.initials)}"
    presence="${s(e.presence)}"
    size="${s(e.size)}"
    src="${s(e.src)}"
    ?is-typing="${e["is-typing"]}"
  ></mdc-avatar>
`,H={title:"Components/avatar",tags:["autodocs"],component:"mdc-avatar",render:j,parameters:{badges:["stable"]},argTypes:{src:{control:"text"},initials:{control:"text"},presence:{control:"select",options:Object.values(T)},size:{control:"select",options:Object.values(o)},"is-typing":{control:"boolean"},"icon-name":{control:"text"},counter:{control:"number"},...c(["--mdc-avatar-default-background-color","--mdc-avatar-default-foreground-color","--mdc-avatar-loading-indicator-background-color","--mdc-avatar-loading-indicator-foreground-color","--mdc-avatar-loading-overlay-background-color"]),...x,...E}},t={args:{src:"https://picsum.photos/id/63/256",initials:"MD",size:88,"icon-name":"","is-typing":""}},a={args:{size:h.SIZE}},i={render:()=>r`
    <div style="display: flex; justify-content: space-evenly; align-items: center">
    ${A(Object.values(o),e=>r`
        <mdc-avatar size="${e}"></mdc-avatar>
      `)}
    </div>
  `,argTypes:{...c(["counter","icon-name","initials","presence","size","src","is-typing"])}},n={render:e=>r`
    <div style="display: flex; justify-content: space-evenly; align-items: center">
      ${A(Object.values(o),S=>r`
        <mdc-avatar
          src="${s(e.src)}"
          presence="${s(e.presence)}"
          ?is-typing="${e["is-typing"]}"
          size="${S}"
        ></mdc-avatar>
      `)}
    </div>
  `,argTypes:{...c(["counter","icon-name","initials","size"])},args:{src:"https://picsum.photos/id/63/256",presence:"active","is-typing":!1}};var p,m,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/id/63/256',
    initials: 'MD',
    size: 88,
    'icon-name': '',
    'is-typing': ''
  }
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,u,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: DEFAULTS.SIZE
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,y,f;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; justify-content: space-evenly; align-items: center">
    \${repeat(Object.values(AVATAR_SIZE), size => html\`
        <mdc-avatar size="\${size}"></mdc-avatar>
      \`)}
    </div>
  \`,
  argTypes: {
    ...disableControls(['counter', 'icon-name', 'initials', 'presence', 'size', 'src', 'is-typing'])
  }
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var z,$,b;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
    src: 'https://picsum.photos/id/63/256',
    presence: 'active',
    'is-typing': false
  }
}`,...(b=($=n.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};const J=["Example","Fallback","Size","SizeWithPresence"];export{t as Example,a as Fallback,i as Size,n as SizeWithPresence,J as __namedExportsOrder,H as default};
