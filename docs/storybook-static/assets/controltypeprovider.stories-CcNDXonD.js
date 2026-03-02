import{C as l}from"./ControlTypeMixin-D2hxAK35.js";import{C as d,k as i}from"./iframe-g0r6a1kN.js";import{p as a}from"./index-BsTi84pG.js";import"./index-DI-rr34c.js";import"./index-DWWvUDEj.js";import"./preload-helper-C1FmrZbK.js";import"./index-CWlNr1hK.js";import"./index-DTrDRi1E.js";import"./menuitem.component-Dkv8k1Db.js";import"./listitem.component-CIfM_ysY.js";import"./query-assigned-elements-Dxi8DXzu.js";import"./DisabledMixin-jst5IV03.js";import"./KeyDownHandledMixin-Xf5xuIHd.js";import"./index-qim7nATA.js";import"./formfieldwrapper.constants-vgBQbaDf.js";import"./popover.constants-DaojcK4c.js";import"./toggle.constants-C9ihRvbf.js";import"./index-C19OeCOJ.js";import"./popover.component-DYgAbp-A.js";import"./if-defined-9wIIfuKU.js";import"./BackdropMixin-CMqK9JKf.js";import"./v4-CmTdKEVZ.js";import"./class-map-BBgOLgWQ.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DXNp8fWa.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,H={title:"Providers/Control Type Provider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const I=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,I as __namedExportsOrder,H as default};
