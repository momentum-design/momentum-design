import{C as i}from"./index-baRnA5di.js";import{E as d,k as l}from"./iframe-B0XJYlue.js";import{p as a}from"./index-gtapvZLB.js";import"./index-CfnKoyTC.js";import"./index-_Nv-YJw_.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTrDRi1E.js";import"./index-D2QUMchj.js";import"./DisabledMixin-CGwTkMmF.js";import"./toggle.constants-BWtu9WLE.js";import"./index-BE0yEgkU.js";import"./popover.component-Dzdx_YbA.js";import"./base-DIkkzJ-c.js";import"./if-defined-CgS7PUg_.js";import"./BackdropMixin-Dq1K0DBu.js";import"./v4-CmTdKEVZ.js";import"./class-map-B0f2f2WP.js";import"./directive-Ctav8iJK.js";import"./menuitem.component-C8jAUFR1.js";import"./listitem.component-DAFmbhJv.js";import"./query-assigned-elements-uEuc3rg8.js";import"./keys-hFXe221I.js";import"./TabIndexMixin-BzXSi42v.js";import"./menuitemcheckbox.constants-C6KvUMTL.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,G={title:"Components/controltypeprovider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const H=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,H as __namedExportsOrder,G as default};
