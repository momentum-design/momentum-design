import{Q as b}from"./repeat-CNQ7t7Vw.js";import{A as o,D as h}from"./index-CzLOkmfq.js";import{k as t}from"./lit-element-D5KKan5q.js";import{t as s}from"./if-defined-D5BV9-c0.js";import{P as E}from"./index-C34YTH8a.js";import{t as T,d as S}from"./utils-CFOyPOhY.js";import{c as x,s as j}from"./commonArgTypes-BluK8w5L.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-Bb6vhctq.js";import"./state-CmYk530Z.js";import"./property-Bj3TGwkg.js";import"./provider.component-DrWB4byV.js";import"./IconNameMixin-Bk-Z_FTS.js";import"./index-B-GnYs90.js";import"./index-DeEenWCE.js";import"./index-CCrTdjIm.js";import"./iframe-CzXTwD53.js";import"../sb-preview/runtime.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";const k=e=>t`
  <mdc-avatar
    counter="${s(e.counter)}"
    icon-name="${s(e["icon-name"])}"
    initials="${s(e.initials)}"
    presence="${e.presence==="none"?void 0:s(e.presence)}"
    size="${s(e.size)}"
    src="${s(e.src)}"
    ?is-typing="${e["is-typing"]}"
  ></mdc-avatar>
`,H={title:"Components/avatar",tags:["autodocs"],component:"mdc-avatar",render:k,parameters:{badges:["stable"]},argTypes:{src:{control:"text"},initials:{control:"text"},presence:{control:"select",options:["none",...Object.values(E)]},size:{control:"select",options:Object.values(o)},"is-typing":{control:"boolean"},"icon-name":{control:"text"},counter:{control:"number"},...T(["--mdc-avatar-default-background-color","--mdc-avatar-default-foreground-color","--mdc-avatar-loading-indicator-background-color","--mdc-avatar-loading-indicator-foreground-color","--mdc-avatar-loading-overlay-background-color"]),...x,...j}},r={args:{src:"https://picsum.photos/id/63/256",initials:"MD",size:88,"icon-name":"","is-typing":""}},a={args:{size:h.SIZE}},i={render:()=>t`
    <div style="display: flex; justify-content: space-evenly; align-items: center">
      ${b(Object.values(o),e=>t` <mdc-avatar size="${e}"></mdc-avatar> `)}
    </div>
  `,argTypes:{...S(["counter","icon-name","initials","presence","size","src","is-typing"])}},n={render:e=>t`
    <div style="display: flex; justify-content: space-evenly; align-items: center">
      ${b(Object.values(o),A=>t`
          <mdc-avatar
            src="${s(e.src)}"
            presence="${s(e.presence)}"
            ?is-typing="${e["is-typing"]}"
            size="${A}"
          ></mdc-avatar>
        `)}
    </div>
  `,argTypes:{...S(["counter","icon-name","initials","size"])},args:{src:"https://picsum.photos/id/63/256",presence:"active","is-typing":!1}};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/id/63/256',
    initials: 'MD',
    size: 88,
    'icon-name': '',
    'is-typing': ''
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,d,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: DEFAULTS.SIZE
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,v,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; justify-content: space-evenly; align-items: center">
      \${repeat(Object.values(AVATAR_SIZE), size => html\` <mdc-avatar size="\${size}"></mdc-avatar> \`)}
    </div>
  \`,
  argTypes: {
    ...disableControls(['counter', 'icon-name', 'initials', 'presence', 'size', 'src', 'is-typing'])
  }
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var f,z,$;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...($=(z=n.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};const J=["Example","Fallback","Size","SizeWithPresence"];export{r as Example,a as Fallback,i as Size,n as SizeWithPresence,J as __namedExportsOrder,H as default};
