import"./index-BFQFxNxy.js";import{k as p}from"./lit-element-CHllvULs.js";import{C as d}from"./index-HW6KrQZO.js";import{I as m,A as u,a as h}from"./iconprovider.component-BFc9mT2k.js";import{p as v}from"./index-BYMLCX4c.js";import{h as x}from"./utils-D1SE5bce.js";import"./create-context-89xeped_.js";class g extends d{constructor(){super(...arguments),this.iconProviderContext=v.consume({host:this,context:m.Context})}render(){var n,t,i,r,s;return p`
      <p>URL: ${(n=this.iconProviderContext.value)==null?void 0:n.url}</p>
      <p>File Extension: ${(t=this.iconProviderContext.value)==null?void 0:t.fileExtension}</p>
      <p>Length Unit: ${(i=this.iconProviderContext.value)==null?void 0:i.lengthUnit}</p>
      <p>Default Size: ${(r=this.iconProviderContext.value)==null?void 0:r.size}</p>
      <p>Should cache: ${(s=this.iconProviderContext.value)==null?void 0:s.shouldCache}</p>
      <mdc-icon name="accessibility-regular"></mdc-icon>
    `}}g.register("mdc-subcomponent-icon");const f=e=>p`
<mdc-iconprovider 
  url=${e.url}
  file-extension=${e["file-extension"]}
  .shouldCache=${e["should-cache"]}
  length-unit=${e["length-unit"]}
  size=${e.size}>
  <mdc-subcomponent-icon></mdc-subcomponent-icon>
</mdc-iconprovider>
`,z={title:"Components/iconprovider",tags:["autodocs"],component:"mdc-iconprovider",render:f,parameters:{badges:["stable"]},argTypes:{"file-extension":{options:u,control:{type:"radio"}},"length-unit":{options:h,control:{type:"inline-radio"}},"should-cache":{control:{type:"boolean"}},...x(["Context"])}},o={args:{url:"./icons/svg","file-extension":"svg","length-unit":"em","should-cache":!1,size:1}};var c,a,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    url: './icons/svg',
    'file-extension': 'svg',
    'length-unit': 'em',
    'should-cache': false,
    size: 1
  }
}`,...(l=(a=o.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const I=["Example"];export{o as Example,I as __namedExportsOrder,z as default};
