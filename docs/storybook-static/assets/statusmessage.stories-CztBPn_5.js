import{aF as o,k as s}from"./iframe-DKmoi846.js";import{c as h,s as A}from"./commonArgTypes-BG7EqI50.js";import{h as f,a as n}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const C=e=>s`
  <mdc-statusmessage severity="${e.severity}" message="${e.message}"></mdc-statusmessage>
`,x={title:"Components/statusmessage",tags:["autodocs"],component:"mdc-statusmessage",render:C,argTypes:{severity:{control:"select",options:Object.values(o)},message:{control:"text"},...h,...A,...f(["renderIcon","renderMessage"])}},t={args:{severity:o.DEFAULT,message:"Status message"}},a={render:()=>s`
    <div style="display: grid; gap: 0.75rem;">
      ${Object.values(o).map(e=>s`<mdc-statusmessage severity="${e}" message="${e} status message"></mdc-statusmessage>`)}
    </div>
  `,...n()},r={render:()=>s`
    <mdc-statusmessage severity="warning" message="This attribute message is not rendered">
      Slotted status message
    </mdc-statusmessage>
  `,...n()},m={render:()=>s`
    <mdc-statusmessage severity="priority" message="Status message with a custom icon"
      ><mdc-icon slot="icon" name="info-badge-filled"></mdc-icon
    ></mdc-statusmessage>
  `,...n()};var c,i,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    severity: STATUSMESSAGE_SEVERITY.DEFAULT,
    message: 'Status message'
  }
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var g,u,l;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display: grid; gap: 0.75rem;">\n      ${(Object.values(STATUSMESSAGE_SEVERITY) as StatusMessageSeverity[]).map((severity: StatusMessageSeverity) => html`<mdc-statusmessage severity="${severity}" message="${severity} status message"></mdc-statusmessage>`)}\n    </div>\n  `,\n  ...hideAllControls()\n}',...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var p,S,y;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-statusmessage severity="warning" message="This attribute message is not rendered">
      Slotted status message
    </mdc-statusmessage>
  \`,
  ...hideAllControls()
}`,...(y=(S=r.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var v,E,T;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-statusmessage severity="priority" message="Status message with a custom icon"
      ><mdc-icon slot="icon" name="info-badge-filled"></mdc-icon
    ></mdc-statusmessage>
  \`,
  ...hideAllControls()
}`,...(T=(E=m.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};const U=["Example","Severities","SlottedMessage","CustomIcon"];export{m as CustomIcon,t as Example,a as Severities,r as SlottedMessage,U as __namedExportsOrder,x as default};
