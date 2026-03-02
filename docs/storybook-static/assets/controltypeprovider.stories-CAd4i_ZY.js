import{C as l}from"./ControlTypeMixin-CZ4dXNQK.js";import{C as d,k as i}from"./iframe-BfXYEz0b.js";import{p as a}from"./index-By6KyR5o.js";import"./index-Bvh5JMne.js";import"./index-BdLsXWqB.js";import"./preload-helper-C1FmrZbK.js";import"./index-8OoRc4Un.js";import"./index-DTrDRi1E.js";import"./menuitem.component-3OF55oiw.js";import"./listitem.component-B2rJ4rcN.js";import"./query-assigned-elements-C-t-zA8X.js";import"./DisabledMixin-DWEdz6jx.js";import"./KeyDownHandledMixin-Ctc8K9Ft.js";import"./index-uQlaPB9e.js";import"./formfieldwrapper.constants-D56O1qEy.js";import"./popover.constants-CCNFUeJ5.js";import"./toggle.constants-WgJY2-Lz.js";import"./index-Cx5prO_d.js";import"./popover.component-ZuTtkvh-.js";import"./if-defined-DZxbqxdG.js";import"./BackdropMixin-Brg5K91Y.js";import"./v4-CmTdKEVZ.js";import"./class-map-BunWZ8p9.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-VtqmxeCy.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
