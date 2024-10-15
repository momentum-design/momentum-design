import"./index-fLtleMXh.js";import{k as p}from"./lit-element-CPYlYYac.js";import{C as m}from"./index-fQJcZKNb.js";import{I as d,A as l,a as u}from"./iconprovider.component-CoF-pQB9.js";import{p as v,d as g}from"./utils-DqTC_2h9.js";import"./create-context-89xeped_.js";class x extends m{constructor(){super(...arguments),this.iconProviderContext=v.consume({host:this,context:d.Context})}render(){var n,t,i,r;return p`
      <p>URL: ${(n=this.iconProviderContext.value)==null?void 0:n.url}</p>
      <p>File Extension: ${(t=this.iconProviderContext.value)==null?void 0:t.fileExtension}</p>
      <p>Length Unit: ${(i=this.iconProviderContext.value)==null?void 0:i.lengthUnit}</p>
      <p>Default Size: ${(r=this.iconProviderContext.value)==null?void 0:r.size}</p>
      <mdc-icon name="accessibility-regular"></mdc-icon>
    `}}x.register("mdc-subcomponent-icon");const h=e=>p`
  <mdc-iconprovider 
    url=${e.url}
    file-extension=${e["file-extension"]}
    length-unit=${e["length-unit"]}
    size=${e.size}>
    <mdc-subcomponent-icon></mdc-subcomponent-icon>
  </mdc-iconprovider>
`,b={title:"Work In Progress/iconprovider",tags:["autodocs"],component:"mdc-iconprovider",render:h,parameters:{badges:["wip"]},argTypes:{"file-extension":{options:l,control:{type:"radio"}},"length-unit":{options:u,control:{type:"inline-radio"}},...g(["Context","default"])}},o={args:{url:"./icons/svg","file-extension":"svg","length-unit":"em",size:1}};var s,c,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    url: './icons/svg',
    'file-extension': 'svg',
    'length-unit': 'em',
    size: 1
  }
}`,...(a=(c=o.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};const I=["Primary"];export{o as Primary,I as __namedExportsOrder,b as default};
