import{a4 as z,a5 as H,g as _,a6 as j,k as e,t as a}from"./iframe-90pN0ISN.js";import{c as G,s as C}from"./commonArgTypes-BG7EqI50.js";import{h as R}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const $=t=>e` <mdc-emptystate
    layout="${a(t.layout)}"
    size="${a(t.size)}"
    heading="${a(t.heading)}"
    heading-tag-name="${a(t["heading-tag-name"])}"
    description="${a(t.description)}"
    >${t.children}</mdc-emptystate
  >`,Y={title:"Components/emptystate",tags:["autodocs"],component:"mdc-emptystate",render:$,argTypes:{layout:{control:"select",options:Object.values(z)},size:{control:"select",options:Object.values(H)},heading:{control:"text"},"heading-tag-name":{control:"select",options:Object.values(_)},description:{control:"text",required:!0},...R(["children"]),...G,...C}},n={args:{heading:"No messages yet","heading-tag-name":j.HEADING_TAG_NAME,description:"Messages you send to your team will appear here.",children:e`
      <mdc-illustration slot="illustration" name="ants-content-oneninetwo-empty-primary"></mdc-illustration>
      <mdc-button slot="actions">Start a conversation</mdc-button>
      <mdc-link slot="actions" href="#invite-people">Invite people</mdc-link>
    `}},o={args:{description:"Choose a template to begin.",children:e`
      <mdc-illustration slot="illustration" name="ants-content-oneninetwo-empty-primary"></mdc-illustration>
      <mdc-text slot="heading" role="heading" aria-level="2" tagname="span" type="heading-small-medium">
        Start your first project <span aria-hidden="true">✨</span>
      </mdc-text>
      <mdc-button slot="actions">Choose a template</mdc-button>
    `}},i={args:{layout:z.HORIZONTAL,heading:"No files yet",description:"Files shared in this conversation will appear here.",children:e`
      <mdc-illustration slot="illustration" name="ants-content-oneninetwo-empty-primary"></mdc-illustration>
      <mdc-button slot="actions">Add files</mdc-button>
      <mdc-link slot="actions" href="#shared-files">Learn about shared files</mdc-link>
    `}},s={args:{size:H.LARGE,heading:"No upcoming meetings",description:"When a meeting is scheduled, its details will appear here.",children:e`
      <mdc-illustration slot="illustration" name="ants-content-oneninetwo-empty-primary"></mdc-illustration>
      <mdc-button slot="actions">Schedule a meeting</mdc-button>
      <mdc-link slot="actions" href="#calendar">View calendar</mdc-link>
    `}},r={args:{heading:"No tasks yet",description:"Tasks created for this project will appear here.",children:e`
      <mdc-illustration slot="illustration" name="ants-content-oneninetwo-empty-primary"></mdc-illustration>
    `}},l={args:{heading:"No notifications yet",description:"You’re all caught up. New notifications will appear here."}},c={args:{heading:"No saved items yet",description:"Bookmark items to find them here later.",children:e` <mdc-icon slot="illustration" name="bookmark-regular" size="2"></mdc-icon> `}};var d,m,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    heading: 'No messages yet',
    'heading-tag-name': DEFAULTS.HEADING_TAG_NAME,
    description: 'Messages you send to your team will appear here.',
    children: html\`
      <mdc-illustration slot="illustration" name="ants-content-oneninetwo-empty-primary"></mdc-illustration>
      <mdc-button slot="actions">Start a conversation</mdc-button>
      <mdc-link slot="actions" href="#invite-people">Invite people</mdc-link>
    \`
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,h,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    description: 'Choose a template to begin.',
    children: html\`
      <mdc-illustration slot="illustration" name="ants-content-oneninetwo-empty-primary"></mdc-illustration>
      <mdc-text slot="heading" role="heading" aria-level="2" tagname="span" type="heading-small-medium">
        Start your first project <span aria-hidden="true">✨</span>
      </mdc-text>
      <mdc-button slot="actions">Choose a template</mdc-button>
    \`
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var y,f,k;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    layout: LAYOUT.HORIZONTAL,
    heading: 'No files yet',
    description: 'Files shared in this conversation will appear here.',
    children: html\`
      <mdc-illustration slot="illustration" name="ants-content-oneninetwo-empty-primary"></mdc-illustration>
      <mdc-button slot="actions">Add files</mdc-button>
      <mdc-link slot="actions" href="#shared-files">Learn about shared files</mdc-link>
    \`
  }
}`,...(k=(f=i.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var b,w,A;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: SIZE.LARGE,
    heading: 'No upcoming meetings',
    description: 'When a meeting is scheduled, its details will appear here.',
    children: html\`
      <mdc-illustration slot="illustration" name="ants-content-oneninetwo-empty-primary"></mdc-illustration>
      <mdc-button slot="actions">Schedule a meeting</mdc-button>
      <mdc-link slot="actions" href="#calendar">View calendar</mdc-link>
    \`
  }
}`,...(A=(w=s.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var N,S,T;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    heading: 'No tasks yet',
    description: 'Tasks created for this project will appear here.',
    children: html\`
      <mdc-illustration slot="illustration" name="ants-content-oneninetwo-empty-primary"></mdc-illustration>
    \`
  }
}`,...(T=(S=r.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var v,I,E;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    heading: 'No notifications yet',
    description: 'You’re all caught up. New notifications will appear here.'
  }
}`,...(E=(I=l.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var L,x,O;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    heading: 'No saved items yet',
    description: 'Bookmark items to find them here later.',
    children: html\` <mdc-icon slot="illustration" name="bookmark-regular" size="2"></mdc-icon> \`
  }
}`,...(O=(x=c.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};const Z=["Example","RichHeading","Horizontal","Large","NoActions","TextOnly","IconInIllustrationSlot"];export{n as Example,i as Horizontal,c as IconInIllustrationSlot,s as Large,r as NoActions,o as RichHeading,l as TextOnly,Z as __namedExportsOrder,Y as default};
