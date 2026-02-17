import{Q as d}from"./repeat-BNT2hUsO.js";import{A as m,D as W}from"./index-D28H_MWB.js";import{i as k}from"./manifest-BCiiiw7W.js";import{k as s,R as _}from"./iframe-Cdt4WgmD.js";import{t as a}from"./if-defined-CTZ3E5Y4.js";import{P as u}from"./index-RGgm8E23.js";import{d as v,a as M,b as L}from"./utils-B5QUENNQ.js";import{c as Y,s as Z}from"./commonArgTypes-BG7EqI50.js";import{i as p}from"./imageFixtures-CD4avj2q.js";import"./directive-Ctav8iJK.js";import"./IconNameMixin-BlG0hXqc.js";import"./index-Dn-5tj2l.js";import"./preload-helper-C1FmrZbK.js";import"./index-1B-lXjvD.js";import"./index-DTrDRi1E.js";const U=e=>s`
  <mdc-avatar
    counter="${a(e.counter)}"
    icon-name="${a(e["icon-name"])}"
    initials="${a(e.initials)}"
    presence="${e.presence==="none"?void 0:a(e.presence)}"
    size="${a(e.size)}"
    src="${a(e.src)}"
    ?is-typing="${e["is-typing"]}"
  ></mdc-avatar>
`,ie={title:"Components/avatar/avatar",tags:["autodocs"],component:"mdc-avatar",render:U,argTypes:{src:{control:"text"},initials:{control:"text"},presence:{control:"select",options:["none",...Object.values(u)]},size:{control:"select",options:Object.values(m)},"is-typing":{control:"boolean"},"icon-name":{control:"select",options:Object.keys(k)},counter:{control:"number"},...Y,...Z}},t={args:{src:p.avatar,initials:"MD",size:88,"icon-name":"","is-typing":""}},n={args:{size:W.SIZE}},r={args:{"is-typing":!0,src:p.avatar,size:88,presence:u.BUSY},...v(s`<ul>
      <li>When the is-typing is true, then presence will not be displayed.</li>
    </ul>`)},i={args:{counter:999,size:88},...v(s`<ul>
      <li>Displays a counter text on the avatar component.</li>
      <li>
        The maximum number is 99 and if the given number is greater than 99, <br />
        then the avatar will be displayed as 99+.
      </li>
      <li>If the given number is a negative number, then the avatar will be displayed as 0.</li>
      <li>When the counter variable is provided, then presence will not be displayed.</li>
    </ul>`)},o={render:()=>s`
    <div style="display: flex;  flex-wrap: wrap; justify-content: space-around;" role="${_.MAIN}">
      ${d(Object.values(u),e=>s`
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
    </ul>`)},l={render:()=>s`
    <div style="display: flex; justify-content: space-evenly; align-items: center" role="${_.MAIN}">
      ${d(Object.values(m),e=>s`
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px">
            <mdc-avatar size="${e}"></mdc-avatar>
            <span>Size: ${e}</span>
          </div>
        `)}
    </div>
  `,...M()},c={render:e=>s`
    <div style="display: flex; justify-content: space-evenly; align-items: center">
      ${d(Object.values(m),N=>s`
          <mdc-avatar
            src="${a(e.src)}"
            presence="${a(e.presence)}"
            ?is-typing="${e["is-typing"]}"
            size="${N}"
          ></mdc-avatar>
        `)}
    </div>
  `,argTypes:{...L(["counter","icon-name","initials","size"])},args:{src:p.avatar,presence:"active","is-typing":!1}};var y,g,h;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    src: imageFixtures.avatar,
    initials: 'MD',
    size: 88,
    'icon-name': '',
    'is-typing': ''
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,b,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: DEFAULTS.SIZE
  }
}`,...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var $,S,z;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(T=(E=i.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var w,j,O;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(O=(j=o.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var C,I,P;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(P=(I=l.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var R,D,F;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(F=(D=c.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const oe=["Example","Fallback","TypingState","Counter","AllPresenceTypes","AllSizes","AllSizesWithPresence"];export{o as AllPresenceTypes,l as AllSizes,c as AllSizesWithPresence,i as Counter,t as Example,n as Fallback,r as TypingState,oe as __namedExportsOrder,ie as default};
