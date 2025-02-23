import"./index-0VnUZb1H.js";import{k as d}from"./lit-element-CHllvULs.js";import{C as h,n as u}from"./index-HW6KrQZO.js";import{t as v}from"./if-defined-C4tJgJ33.js";import{I as x,A as f,a as g}from"./iconprovider.component-XZChMYdq.js";import{p as y}from"./index-BYMLCX4c.js";import{h as C}from"./utils-D1SE5bce.js";import"./create-context-89xeped_.js";var $=Object.defineProperty,P=(e,t,i,a)=>{for(var n=void 0,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=r(t,i,n)||n);return n&&$(t,i,n),n};class l extends h{constructor(){super(...arguments),this.iconProviderContext=y.consume({host:this,context:x.Context})}render(){var t,i,a,n,o,r;return d`
      <p>URL: ${(t=this.iconProviderContext.value)==null?void 0:t.url}</p>
      <p>File Extension: ${(i=this.iconProviderContext.value)==null?void 0:i.fileExtension}</p>
      <p>Length Unit: ${(a=this.iconProviderContext.value)==null?void 0:a.lengthUnit}</p>
      <p>Default Size: ${(n=this.iconProviderContext.value)==null?void 0:n.size}</p>
      <p>Cache strategy: ${((o=this.iconProviderContext.value)==null?void 0:o.cacheStrategy)||"undefined"}</p>
      <p>Cache name: ${(r=this.iconProviderContext.value)==null?void 0:r.cacheName}</p>
      <mdc-icon name="${v(this.iconName)}"></mdc-icon>
    `}}P([u({type:String,attribute:"icon-name"})],l.prototype,"iconName");l.register("mdc-subcomponent-icon");const b=e=>d`
<mdc-iconprovider 
  url=${e.url}
  file-extension=${e["file-extension"]}
  cache-strategy=${e["cache-strategy"]}
  cache-name=${e["cache-name"]}
  length-unit=${e["length-unit"]}
  size=${e.size}>
  <mdc-subcomponent-icon icon-name=${e["icon-name"]}></mdc-subcomponent-icon>
</mdc-iconprovider>
`,U={title:"Components/iconprovider",tags:["autodocs"],component:"mdc-iconprovider",render:b,parameters:{badges:["stable"]},argTypes:{"file-extension":{options:f,control:{type:"radio"}},"length-unit":{options:g,control:{type:"inline-radio"}},"cache-strategy":{control:"select",options:["in-memory-cache","web-cache-api"]},"cache-name":{control:{type:"text"}},"icon-name":{control:{type:"text"},description:"Name of the icon to be rendered underneath IconProvider (not part of IconProvider component)"},...C(["Context"])}},c={args:{url:"./icons/svg","file-extension":"svg","length-unit":"em","cache-strategy":void 0,"cache-name":"my-icon-cache",size:1,"icon-name":"accessibility-regular"}};var s,m,p;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    url: './icons/svg',
    'file-extension': 'svg',
    'length-unit': 'em',
    'cache-strategy': undefined,
    'cache-name': 'my-icon-cache',
    size: 1,
    'icon-name': 'accessibility-regular'
  }
}`,...(p=(m=c.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const T=["Example"];export{c as Example,T as __namedExportsOrder,U as default};
