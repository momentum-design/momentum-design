import{C as i}from"./ControlTypeMixin-DBMgC1m8.js";import{C as d,k as l}from"./iframe-JA1YSOwM.js";import{p as a}from"./index-Jqvz7ibo.js";import"./index-C_5xLEGr.js";import"./index-v752vTQQ.js";import"./preload-helper-C1FmrZbK.js";import"./index-BtNw0XcG.js";import"./index-DTrDRi1E.js";import"./menuitem.component-y1CxkUrB.js";import"./listitem.component-Dmk58yB2.js";import"./DisabledMixin-FIsRwQNV.js";import"./KeyDownHandledMixin-zdCFlya9.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-CjDV68yh.js";import"./index-CT28qUZs.js";import"./formfieldwrapper.constants-CHNcNMN3.js";import"./popover.constants-ob2f6-37.js";import"./statusmessage.constants-CLqfjLFC.js";import"./toggle.constants-D8uULFC_.js";import"./index-XCdy5sCM.js";import"./popover.component-BsRmE7FT.js";import"./BackdropMixin-BBcRIEHq.js";import"./menuitemcheckbox.constants-DEgW1I21.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
