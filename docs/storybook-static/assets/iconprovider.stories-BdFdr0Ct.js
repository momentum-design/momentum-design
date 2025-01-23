import"./index-rDA4K2ZD.js";import{k as a}from"./lit-element-CHllvULs.js";import{C as m}from"./index-HW6KrQZO.js";import{I as l,A as d,a as u}from"./iconprovider.component-CWYw8J7d.js";import{p as v}from"./index-BYMLCX4c.js";import{d as x}from"./utils-D1SE5bce.js";import"./create-context-89xeped_.js";class g extends m{constructor(){super(...arguments),this.iconProviderContext=v.consume({host:this,context:l.Context})}render(){var n,t,i,r;return a`
      <p>URL: ${(n=this.iconProviderContext.value)==null?void 0:n.url}</p>
      <p>File Extension: ${(t=this.iconProviderContext.value)==null?void 0:t.fileExtension}</p>
      <p>Length Unit: ${(i=this.iconProviderContext.value)==null?void 0:i.lengthUnit}</p>
      <p>Default Size: ${(r=this.iconProviderContext.value)==null?void 0:r.size}</p>
      <mdc-icon name="accessibility-regular"></mdc-icon>
    `}}g.register("mdc-subcomponent-icon");const h=e=>a`
<mdc-iconprovider 
  url=${e.url}
  file-extension=${e["file-extension"]}
  length-unit=${e["length-unit"]}
  size=${e.size}>
  <mdc-subcomponent-icon></mdc-subcomponent-icon>
</mdc-iconprovider>
`,z={title:"Components/iconprovider",tags:["autodocs"],component:"mdc-iconprovider",render:h,parameters:{badges:["stable"]},argTypes:{"file-extension":{options:d,control:{type:"radio"}},"length-unit":{options:u,control:{type:"inline-radio"}},...x(["Context"])}},o={args:{url:"./icons/svg","file-extension":"svg","length-unit":"em",size:1}};var s,c,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    url: './icons/svg',
    'file-extension': 'svg',
    'length-unit': 'em',
    size: 1
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const I=["Example"];export{o as Example,I as __namedExportsOrder,z as default};
