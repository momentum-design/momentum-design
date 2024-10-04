import"./index-qR-aA1gh.js";import{k as p}from"./lit-element-CPYlYYac.js";import{C as a}from"./index-CFYjfE6c.js";import{I as d}from"./iconprovider.component-Dft1Ohz8.js";import{p as l}from"./index-BCUDnuze.js";import"./create-context-89xeped_.js";class u extends a{constructor(){super(...arguments),this.iconProviderContext=l.consume({host:this,context:d.Context})}render(){var t,n,r,i;return p`
      <p>URL: ${(t=this.iconProviderContext.value)==null?void 0:t.url}</p>
      <p>File Extension: ${(n=this.iconProviderContext.value)==null?void 0:n.fileExtension}</p>
      <p>Length Unit: ${(r=this.iconProviderContext.value)==null?void 0:r.lengthUnit}</p>
      <p>Default Size: ${(i=this.iconProviderContext.value)==null?void 0:i.size}</p>
    `}}u.register("mdc-subcomponent-icon");const v=e=>p`
  <mdc-iconprovider 
    url=${e.url}
    file-extension=${e.fileExtension}
    length-unit=${e.lengthUnit}
    size=${e.size}>
    <mdc-subcomponent-icon></mdc-subcomponent-icon>
  </mdc-iconprovider>
`,$={title:"Work In Progress/iconprovider",tags:["autodocs"],component:"mdc-iconprovider",render:v,argTypes:{}},o={args:{url:"/test",fileExtension:"svg",lengthUnit:"em",size:1}};var s,c,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    url: '/test',
    fileExtension: 'svg',
    lengthUnit: 'em',
    size: 1
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const U=["Primary"];export{o as Primary,U as __namedExportsOrder,$ as default};
