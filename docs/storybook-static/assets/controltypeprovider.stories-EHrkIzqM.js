import{C as i}from"./ControlTypeMixin-BMnRDQoO.js";import{E as d,k as l}from"./iframe-BfLztatZ.js";import{p as a}from"./index-FOhkjjRI.js";import"./index-DgzHeIDK.js";import"./index-C-1gzKOE.js";import"./preload-helper-C1FmrZbK.js";import"./index-B4y05MQQ.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DmB66eyx.js";import"./listitem.component-C2Boz2_G.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-BdI_GF1t.js";import"./DisabledMixin-nYMYrGUf.js";import"./index-YQoxqS1Y.js";import"./formfieldwrapper.constants--gmH-nPR.js";import"./toggle.constants-D3uQ1QiH.js";import"./index-E5cshU7M.js";import"./popover.component-DEekPGAe.js";import"./if-defined-D9kF3aOg.js";import"./BackdropMixin-DvKy5aHK.js";import"./v4-CmTdKEVZ.js";import"./class-map-BFdfo8OU.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BUf9j-5n.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,H={title:"Components/controltypeprovider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const I=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,I as __namedExportsOrder,H as default};
