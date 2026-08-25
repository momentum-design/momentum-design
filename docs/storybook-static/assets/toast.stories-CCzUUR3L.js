import{aS as V,g as j,k as e,ad as I,t as J,ae as N}from"./iframe-DKmoi846.js";import{c as W,s as M}from"./commonArgTypes-BG7EqI50.js";import{b as Y,h as B,a as u}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const{action:K}=__STORYBOOK_MODULE_ACTIONS__,z=t=>e`
  <mdc-toast
    variant="${J(t.variant)}"
    header-text="${t["header-text"]}"
    header-tag-name="${t["header-tag-name"]}"
    close-button-aria-label="${t["close-button-aria-label"]}"
    show-more-text="${t["show-more-text"]}"
    show-less-text="${t["show-less-text"]}"
    class="${t.class}"
    style="${t.style}"
    @close=${K("onclose")}
  >
    ${t.children}
    ${t["prefix-icon"]?e`<mdc-icon slot="content-prefix" name="${t["prefix-icon"]}" size="1.5"></mdc-icon>`:""}
    ${t["normal-body"]?e`<mdc-text slot="toast-body-normal" tagname="span">${t["normal-body"]}</mdc-text>`:""}
    ${t["detailed-body"]?e`<mdc-text slot="toast-body-detailed" tagname="span">${t["detailed-body"]}</mdc-text>`:""}
  </mdc-toast>
`,H={title:"Components/toast",tags:["autodocs"],component:"mdc-toast",render:z,argTypes:{variant:{control:"select",options:Object.values(V)},"header-text":{control:"text"},"header-tag-name":{control:"select",options:Object.values(j)},"close-button-aria-label":{control:"text"},"show-more-text":{control:"text"},"show-less-text":{control:"text"},"prefix-icon":{control:"text",description:"Icon name for the content prefix (slot: content-prefix). Only for custom variant."},"normal-body":{control:"text",description:"Content for the main body of the toast (slot: toast-body-normal)"},"detailed-body":{control:"text",description:"Content for the detailed body of the toast, shown when expanded (slot: toast-body-detailed)"},...W,...M,...Y(["content-prefix","toast-body-normal","toast-body-detailed","footer-button-primary","footer-button-secondary","footer"]),...B(["children","isDetailVisible","hasDetailedSlot","detailedElements","hasFooterButtons"])}},o={variant:"custom","header-tag-name":"span","close-button-aria-label":"Close toast"},s=e`
  <mdc-button slot="footer-button-secondary">Secondary</mdc-button>
  <mdc-button slot="footer-button-primary">Primary</mdc-button>
`,r={args:{...o,"header-text":"Toast Title","show-more-text":"Show more","show-less-text":"Show less","prefix-icon":"placeholder-bold","normal-body":"This is a toast message.","detailed-body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",children:e`${s}`}},n={args:{variant:"success","header-tag-name":"span","header-text":"This is a very long toast title of more than 3 lines that should overflow and trigger the show more/less functionality. Once 6 lines is reached, this will truncate regardless of the length of the content to prevent the toast from taking up too much space.","show-more-text":"Show more","show-less-text":"Show less","close-button-aria-label":"Close toast"}},l={args:{variant:"success","header-tag-name":"span","header-text":"This is a very long toast title of more than 6 lines that should overflow without the show more/less functionality. Once 6 lines is reached, this will truncate regardless of the length of the content to prevent the toast from taking up too much space.","close-button-aria-label":"Close toast"}},c={name:"Dynamic Short/Long Title",render:()=>{const t="This is a very long toast title of more than 3 lines that should overflow and trigger the show more/less functionality. Once 6 lines is reached, this will truncate regardless of the length of the content to prevent the toast from taking up too much space.",F="Short Title",h=N();return e`
      <mdc-toast
        ${I(h)}
        variant="success"
        header-tag-name="span"
        header-text=${t}
        show-more-text="Show more"
        show-less-text="Show less"
        close-button-aria-label="Close toast"
      >
      </mdc-toast>
      <mdc-button
        @click=${()=>{var a;(a=h.value)==null||a.setAttribute("header-text",F)}}
        >Short Title</mdc-button
      >
      <mdc-button
        @click=${()=>{var a;(a=h.value)==null||a.setAttribute("header-text",t)}}
        >Long Title</mdc-button
      >
    `}},i={name:"All Variants",render:()=>e`
    <div style="display: grid; grid-template-columns: repeat(2, 0fr); gap: 2rem;">
      ${[{...o,variant:"success","header-text":"Success!",children:e`<mdc-text tagname="span" slot="toast-body-normal">Your action was successful.</mdc-text>
            ${s}`},{...o,variant:"warning","header-text":"Warning!",children:e`<mdc-text tagname="span" slot="toast-body-normal">There was a warning.</mdc-text>
            ${s}`},{...o,variant:"error","header-text":"Error!",children:e`<mdc-text tagname="span" slot="toast-body-normal">An error occurred.</mdc-text>
            ${s}`},{...o,"header-text":"User Message",children:e`<mdc-icon name="chat-bold" size="1.5" slot="content-prefix"></mdc-icon>
            <mdc-text tagname="span" slot="toast-body-normal">New message received.</mdc-text>
            ${s}`}].map(t=>z({...o,...t}))}
    </div>
  `,...u()},d={name:"User Joined",args:{...o,"header-text":"",children:e`
      <mdc-avatar slot="content-prefix" src="https://picsum.photos/id/63/256" size="24"></mdc-avatar>
      <mdc-text tagname="span" slot="toast-body-normal"><b>Username</b> joined the session.</mdc-text>
    `},...u()},m={name:"Connecting",args:{...o,"header-text":"Connecting",children:e` <mdc-spinner slot="content-prefix" size="small"></mdc-spinner> `},...u()};var p,g,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...DefaultArgs,
    'header-text': 'Toast Title',
    'show-more-text': 'Show more',
    'show-less-text': 'Show less',
    'prefix-icon': 'placeholder-bold',
    'normal-body': 'This is a toast message.',
    'detailed-body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    children: html\`\${DefaultFooter}\`
  }
}`,...(x=(g=r.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,b,w;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    'header-tag-name': 'span',
    'header-text': 'This is a very long toast title of more than 3 lines that should overflow and trigger the show more/less functionality. Once 6 lines is reached, this will truncate regardless of the length of the content to prevent the toast from taking up too much space.',
    'show-more-text': 'Show more',
    'show-less-text': 'Show less',
    'close-button-aria-label': 'Close toast'
  }
}`,...(w=(b=n.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var y,v,T;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    'header-tag-name': 'span',
    'header-text': 'This is a very long toast title of more than 6 lines that should overflow without the show more/less functionality. Once 6 lines is reached, this will truncate regardless of the length of the content to prevent the toast from taking up too much space.',
    'close-button-aria-label': 'Close toast'
  }
}`,...(T=(v=l.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var S,$,A;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Dynamic Short/Long Title',
  render: () => {
    const longTitle = 'This is a very long toast title of more than 3 lines that should overflow and trigger the show more/less functionality. Once 6 lines is reached, this will truncate regardless of the length of the content to prevent the toast from taking up too much space.';
    const shortTitle = 'Short Title';
    const toastRef = createRef<Toast>();
    return html\`
      <mdc-toast
        \${ref(toastRef)}
        variant="success"
        header-tag-name="span"
        header-text=\${longTitle}
        show-more-text="Show more"
        show-less-text="Show less"
        close-button-aria-label="Close toast"
      >
      </mdc-toast>
      <mdc-button
        @click=\${() => {
      toastRef.value?.setAttribute('header-text', shortTitle);
    }}
        >Short Title</mdc-button
      >
      <mdc-button
        @click=\${() => {
      toastRef.value?.setAttribute('header-text', longTitle);
    }}
        >Long Title</mdc-button
      >
    \`;
  }
}`,...(A=($=c.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var C,D,O;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => html\`
    <div style="display: grid; grid-template-columns: repeat(2, 0fr); gap: 2rem;">
      \${[{
    ...DefaultArgs,
    variant: 'success',
    'header-text': 'Success!',
    children: html\`<mdc-text tagname="span" slot="toast-body-normal">Your action was successful.</mdc-text>
            \${DefaultFooter}\`
  }, {
    ...DefaultArgs,
    variant: 'warning',
    'header-text': 'Warning!',
    children: html\`<mdc-text tagname="span" slot="toast-body-normal">There was a warning.</mdc-text>
            \${DefaultFooter}\`
  }, {
    ...DefaultArgs,
    variant: 'error',
    'header-text': 'Error!',
    children: html\`<mdc-text tagname="span" slot="toast-body-normal">An error occurred.</mdc-text>
            \${DefaultFooter}\`
  }, {
    ...DefaultArgs,
    'header-text': 'User Message',
    children: html\`<mdc-icon name="chat-bold" size="1.5" slot="content-prefix"></mdc-icon>
            <mdc-text tagname="span" slot="toast-body-normal">New message received.</mdc-text>
            \${DefaultFooter}\`
  }].map(args => render({
    ...DefaultArgs,
    ...args
  }))}
    </div>
  \`,
  ...hideAllControls()
}`,...(O=(D=i.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var L,k,_;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'User Joined',
  args: {
    ...DefaultArgs,
    'header-text': '',
    children: html\`
      <mdc-avatar slot="content-prefix" src="https://picsum.photos/id/63/256" size="24"></mdc-avatar>
      <mdc-text tagname="span" slot="toast-body-normal"><b>Username</b> joined the session.</mdc-text>
    \`
  },
  ...hideAllControls()
}`,...(_=(k=d.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var U,E,R;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Connecting',
  args: {
    ...DefaultArgs,
    'header-text': 'Connecting',
    children: html\` <mdc-spinner slot="content-prefix" size="small"></mdc-spinner> \`
  },
  ...hideAllControls()
}`,...(R=(E=m.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const Q=["Example","LongTitle","LongTitleWithoutToggle","DynamicShortLongTitle","AllVariants","UserJoined","Connecting"];export{i as AllVariants,m as Connecting,c as DynamicShortLongTitle,r as Example,n as LongTitle,l as LongTitleWithoutToggle,d as UserJoined,Q as __namedExportsOrder,H as default};
