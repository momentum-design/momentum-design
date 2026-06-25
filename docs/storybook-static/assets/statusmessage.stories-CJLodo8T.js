import{k as s}from"./iframe-CeAfCu9I.js";import{c as h,s as A}from"./commonArgTypes-BG7EqI50.js";import{h as f,a as o}from"./utils-B5QUENNQ.js";import"./index-D7O3iYjx.js";import{S as n}from"./statusmessage.constants-DfVAETh_.js";import"./preload-helper-C1FmrZbK.js";import"./index-C658QqKz.js";import"./index-o88J_soZ.js";import"./index-DTrDRi1E.js";const C=e=>s`
  <mdc-statusmessage severity="${e.severity}" message="${e.message}"></mdc-statusmessage>
`,j={title:"Components/statusmessage",tags:["autodocs"],component:"mdc-statusmessage",render:C,argTypes:{severity:{control:"select",options:Object.values(n)},message:{control:"text"},...h,...A,...f(["renderIcon","renderMessage"])}},t={args:{severity:n.DEFAULT,message:"Status message"}},a={render:()=>s`
    <div style="display: grid; gap: 0.75rem;">
      ${Object.values(n).map(e=>s`<mdc-statusmessage severity="${e}" message="${e} status message"></mdc-statusmessage>`)}
    </div>
  `,...o()},r={render:()=>s`
    <mdc-statusmessage severity="warning" message="This attribute message is not rendered">
      Slotted status message
    </mdc-statusmessage>
  `,...o()},m={render:()=>s`
    <mdc-statusmessage severity="priority" message="Status message with a custom icon"
      ><mdc-icon slot="icon" name="info-badge-filled"></mdc-icon
    ></mdc-statusmessage>
  `,...o()};var i,c,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    severity: STATUSMESSAGE_SEVERITY.DEFAULT,
    message: 'Status message'
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var g,u,l;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display: grid; gap: 0.75rem;">\n      ${(Object.values(STATUSMESSAGE_SEVERITY) as StatusMessageSeverity[]).map((severity: StatusMessageSeverity) => html`<mdc-statusmessage severity="${severity}" message="${severity} status message"></mdc-statusmessage>`)}\n    </div>\n  `,\n  ...hideAllControls()\n}',...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var p,S,y;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(E=m.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};const G=["Example","Severities","SlottedMessage","CustomIcon"];export{m as CustomIcon,t as Example,a as Severities,r as SlottedMessage,G as __namedExportsOrder,j as default};
