import{b7 as a,b8 as m,b9 as i,k as d}from"./iframe-DKmoi846.js";import"./preload-helper-C1FmrZbK.js";class u extends a{constructor(){super(...arguments),this.controlTypeProviderContext=m.consume({host:this,context:i.Context})}render(){return d` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=r=>d`
  <mdc-controltypeprovider control-type="${r["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,b={title:"Providers/Control Type Provider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},e={args:{"control-type":"controlled"}};var t,n,c;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(c=(n=o.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var s,l,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const C=["Uncontrolled","Controlled"];export{e as Controlled,o as Uncontrolled,C as __namedExportsOrder,b as default};
