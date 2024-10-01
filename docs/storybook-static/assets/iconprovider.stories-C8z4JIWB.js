import"./index-BuhVKn4m.js";import{k as m}from"./lit-element-CPYlYYac.js";import{C as p}from"./index-CFYjfE6c.js";import{I as a}from"./iconprovider.component-1kxMB-M8.js";import{p as d}from"./index-BCUDnuze.js";import"./create-context-89xeped_.js";class l extends p{constructor(){super(...arguments),this.iconProviderContext=d.consume({host:this,context:a.Context})}render(){var n,t,r;return m`
      <p>URL: ${(n=this.iconProviderContext.value)==null?void 0:n.url}</p>
      <p>File Extension: ${(t=this.iconProviderContext.value)==null?void 0:t.fileExtension}</p>
      <p>Length Unit: ${(r=this.iconProviderContext.value)==null?void 0:r.lengthUnit}</p>
    `}}l.register("mdc-subcomponent-icon");const u=e=>m`
  <mdc-iconprovider url="${e.url}" file-extension="${e.fileExtension}" length-unit="${e.lengthUnit}">
    <mdc-subcomponent-icon></mdc-subcomponent-icon>
  </mdc-iconprovider>
`,C={title:"Work In Progress/iconprovider",tags:["autodocs"],component:"mdc-iconprovider",render:u,argTypes:{}},o={args:{url:"/test",fileExtension:"svg",lengthUnit:"em"}};var i,s,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    url: '/test',
    fileExtension: 'svg',
    lengthUnit: 'em'
  }
}`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const U=["Primary"];export{o as Primary,U as __namedExportsOrder,C as default};
