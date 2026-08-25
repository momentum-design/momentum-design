import{P as d,l as m,m as W,k as s,R as _,Q as u,t as a}from"./iframe-DKmoi846.js";import{i as k}from"./manifest-DISj2anu.js";import{d as v,a as M,b as L}from"./utils-B5QUENNQ.js";import{c as Y,s as Z}from"./commonArgTypes-BG7EqI50.js";import{i as p}from"./imageFixtures-CD4avj2q.js";import"./preload-helper-C1FmrZbK.js";const U=e=>s`
  <mdc-avatar
    counter="${a(e.counter)}"
    icon-name="${a(e["icon-name"])}"
    initials="${a(e.initials)}"
    presence="${e.presence==="none"?void 0:a(e.presence)}"
    size="${a(e.size)}"
    src="${a(e.src)}"
    ?is-typing="${e["is-typing"]}"
  ></mdc-avatar>
`,J={title:"Components/avatar/avatar",tags:["autodocs"],component:"mdc-avatar",render:U,argTypes:{src:{control:"text"},initials:{control:"text"},presence:{control:"select",options:["none",...Object.values(d)]},size:{control:"select",options:Object.values(m)},"is-typing":{control:"boolean"},"icon-name":{control:"select",options:Object.keys(k)},counter:{control:"number"},...Y,...Z}},n={args:{src:p.avatar,initials:"MD",size:88,"icon-name":"","is-typing":""}},t={args:{size:W.SIZE}},r={args:{"is-typing":!0,src:p.avatar,size:88,presence:d.BUSY},...v(s`<ul>
      <li>When the is-typing is true, then presence will not be displayed.</li>
    </ul>`)},i={args:{counter:999,size:88},...v(s`<ul>
      <li>Displays a counter text on the avatar component.</li>
      <li>
        The maximum number is 99 and if the given number is greater than 99, <br />
        then the avatar will be displayed as 99+.
      </li>
      <li>If the given number is a negative number, then the avatar will be displayed as 0.</li>
      <li>When the counter variable is provided, then presence will not be displayed.</li>
    </ul>`)},l={render:()=>s`
    <div style="display: flex;  flex-wrap: wrap; justify-content: space-around;" role="${_.MAIN}">
      ${u(Object.values(d),e=>s`
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px">
            <mdc-avatar src="${p.avatar}" presence="${e}" size="64"></mdc-avatar>
            <span>${e}</span>
          </div>
        `)}
    </div>
  `,...M(),...v(s`<ul>
      <li>
        This story demonstrates how presence statuses are displayed when integrated into the avatar component, as
        opposed to the standalone presence component story.
      </li>
    </ul>`)},o={render:()=>s`
    <div style="display: flex; justify-content: space-evenly; align-items: center" role="${_.MAIN}">
      ${u(Object.values(m),e=>s`
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px">
            <mdc-avatar size="${e}"></mdc-avatar>
            <span>Size: ${e}</span>
          </div>
        `)}
    </div>
  `,...M()},c={render:e=>s`
    <div style="display: flex; justify-content: space-evenly; align-items: center">
      ${u(Object.values(m),N=>s`
          <mdc-avatar
            src="${a(e.src)}"
            presence="${a(e.presence)}"
            ?is-typing="${e["is-typing"]}"
            size="${N}"
          ></mdc-avatar>
        `)}
    </div>
  `,argTypes:{...L(["counter","icon-name","initials","size"])},args:{src:p.avatar,presence:"active","is-typing":!1}};var y,g,h;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    src: imageFixtures.avatar,
    initials: 'MD',
    size: 88,
    'icon-name': '',
    'is-typing': ''
  }
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,f,x;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: DEFAULTS.SIZE
  }
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var $,S,z;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    'is-typing': true,
    src: imageFixtures.avatar,
    size: 88,
    presence: PRESENCE_TYPE.BUSY
  },
  ...describeStory(html\`<ul>
      <li>When the is-typing is true, then presence will not be displayed.</li>
    </ul>\`)
}`,...(z=(S=r.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var A,E,T;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    counter: 999,
    size: 88
  },
  ...describeStory(html\`<ul>
      <li>Displays a counter text on the avatar component.</li>
      <li>
        The maximum number is 99 and if the given number is greater than 99, <br />
        then the avatar will be displayed as 99+.
      </li>
      <li>If the given number is a negative number, then the avatar will be displayed as 0.</li>
      <li>When the counter variable is provided, then presence will not be displayed.</li>
    </ul>\`)
}`,...(T=(E=i.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var w,j,O;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex;  flex-wrap: wrap; justify-content: space-around;" role="\${ROLE.MAIN}">
      \${repeat(Object.values(PRESENCE_TYPE), presence => html\`
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px">
            <mdc-avatar src="\${imageFixtures.avatar}" presence="\${presence}" size="64"></mdc-avatar>
            <span>\${presence}</span>
          </div>
        \`)}
    </div>
  \`,
  ...hideAllControls(),
  ...describeStory(html\`<ul>
      <li>
        This story demonstrates how presence statuses are displayed when integrated into the avatar component, as
        opposed to the standalone presence component story.
      </li>
    </ul>\`)
}`,...(O=(j=l.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var C,I,P;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; justify-content: space-evenly; align-items: center" role="\${ROLE.MAIN}">
      \${repeat(Object.values(AVATAR_SIZE), size => html\`
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px">
            <mdc-avatar size="\${size}"></mdc-avatar>
            <span>Size: \${size}</span>
          </div>
        \`)}
    </div>
  \`,
  ...hideAllControls()
}`,...(P=(I=o.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var R,F,D;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(D=(F=c.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};const K=["Example","Fallback","TypingState","Counter","AllPresenceTypes","AllSizes","AllSizesWithPresence"];export{l as AllPresenceTypes,o as AllSizes,c as AllSizesWithPresence,i as Counter,n as Example,t as Fallback,r as TypingState,K as __namedExportsOrder,J as default};
