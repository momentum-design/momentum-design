import{C as i}from"./ControlTypeMixin-CQLmNGmq.js";import{C as d,k as l}from"./iframe-MUwcZo0b.js";import{p as a}from"./index-BYMw0T9A.js";import"./index-DD8m6yyh.js";import"./index-D_h7nEd1.js";import"./preload-helper-C1FmrZbK.js";import"./index-DfCx3ynW.js";import"./index-DTrDRi1E.js";import"./menuitem.component-1bSlekbS.js";import"./listitem.component-BdMzyXTd.js";import"./DisabledMixin-BEHthWuB.js";import"./KeyDownHandledMixin-uwD7VgE6.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-CqZMQQWO.js";import"./index-C-TwOts7.js";import"./formfieldwrapper.constants-BWh6JG58.js";import"./popover.constants-CXPU2R0X.js";import"./statusmessage.constants-DSmYPQIN.js";import"./toggle.constants-BWJhRirK.js";import"./index-CB9t7gid.js";import"./popover.component-dm0I6DUg.js";import"./BackdropMixin-BlAgh6Ha.js";import"./menuitemcheckbox.constants--e8iErxn.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,F={title:"Providers/Control Type Provider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const G=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,G as __namedExportsOrder,F as default};
