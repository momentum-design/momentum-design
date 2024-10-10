import"./index-BG-hdIxz.js";import{k as m}from"./lit-element-CPYlYYac.js";import{C as a}from"./index-fQJcZKNb.js";import{I as d}from"./iconprovider.component-w_FmVHM-.js";import{p as l}from"./index-CQ1swJS0.js";import"./create-context-89xeped_.js";class u extends a{constructor(){super(...arguments),this.iconProviderContext=l.consume({host:this,context:d.Context})}render(){var t,n,r,i;return m`
      <p>URL: ${(t=this.iconProviderContext.value)==null?void 0:t.url}</p>
      <p>File Extension: ${(n=this.iconProviderContext.value)==null?void 0:n.fileExtension}</p>
      <p>Length Unit: ${(r=this.iconProviderContext.value)==null?void 0:r.lengthUnit}</p>
      <p>Default Size: ${(i=this.iconProviderContext.value)==null?void 0:i.size}</p>
    `}}u.register("mdc-subcomponent-icon");const v=e=>m`
  <mdc-iconprovider 
    url=${e.url}
    file-extension=${e.fileExtension}
    length-unit=${e.lengthUnit}
    size=${e.size}>
    <mdc-subcomponent-icon></mdc-subcomponent-icon>
  </mdc-iconprovider>
`,$={title:"Work In Progress/iconprovider",tags:["autodocs"],component:"mdc-iconprovider",render:v,parameters:{badges:["wip"]},argTypes:{}},o={args:{url:"/test",fileExtension:"svg",lengthUnit:"em",size:1}};var s,c,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    url: '/test',
    fileExtension: 'svg',
    lengthUnit: 'em',
    size: 1
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const U=["Primary"];export{o as Primary,U as __namedExportsOrder,$ as default};
