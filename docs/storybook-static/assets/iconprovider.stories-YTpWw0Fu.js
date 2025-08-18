import"./index-CrGGhY7N.js";import{k as d}from"./lit-element-D5KKan5q.js";import{n as h}from"./property-Bj3TGwkg.js";import{t as v}from"./if-defined-D5BV9-c0.js";import{C as x}from"./provider.component-DrWB4byV.js";import{p as f}from"./index-CwZu4Wnd.js";import{I as g,A as y,a as C}from"./iconprovider.component-BtAZSWEH.js";import{a as $}from"./utils-CFOyPOhY.js";import"./create-context-89xeped_.js";var P=Object.defineProperty,b=(e,t,i,s)=>{for(var n=void 0,o=e.length-1,c;o>=0;o--)(c=e[o])&&(n=c(t,i,n)||n);return n&&P(t,i,n),n};class u extends x{constructor(){super(...arguments),this.iconProviderContext=f.consume({host:this,context:g.Context})}render(){var t,i,s,n,o,c,a;return d`
      <p>Icon Set: ${(t=this.iconProviderContext.value)==null?void 0:t.iconSet}</p>
      <p>URL: ${(i=this.iconProviderContext.value)==null?void 0:i.url}</p>
      <p>File Extension: ${(s=this.iconProviderContext.value)==null?void 0:s.fileExtension}</p>
      <p>Length Unit: ${(n=this.iconProviderContext.value)==null?void 0:n.lengthUnit}</p>
      <p>Default Size: ${(o=this.iconProviderContext.value)==null?void 0:o.size}</p>
      <p>Cache strategy: ${((c=this.iconProviderContext.value)==null?void 0:c.cacheStrategy)||"undefined"}</p>
      <p>Cache name: ${(a=this.iconProviderContext.value)==null?void 0:a.cacheName}</p>
      <mdc-icon length-unit="rem" name="${v(this.iconName)}"></mdc-icon>
    `}}b([h({type:String,attribute:"icon-name"})],u.prototype,"iconName");u.register("mdc-subcomponent-icon");const E=e=>d`
  <mdc-iconprovider
    url=${e.url}
    icon-set=${e["icon-set"]}
    file-extension=${e["file-extension"]}
    cache-strategy=${e["cache-strategy"]}
    cache-name=${e["cache-name"]}
    length-unit=${e["length-unit"]}
    size=${e.size}
  >
    <mdc-subcomponent-icon icon-name=${e["icon-name"]}></mdc-subcomponent-icon>
  </mdc-iconprovider>
`,A={title:"Components/iconprovider",tags:["autodocs"],component:"mdc-iconprovider",render:E,parameters:{badges:["stable"]},argTypes:{"icon-set":{control:"select",options:["momentum-icons","custom-icons"]},"file-extension":{options:y,control:{type:"radio"}},"length-unit":{options:C,control:{type:"inline-radio"}},"cache-strategy":{control:"select",options:["in-memory-cache","web-cache-api"]},"cache-name":{control:{type:"text"}},"icon-name":{control:{type:"text"},description:"Name of the icon to be rendered underneath IconProvider (not part of IconProvider component)"},...$(["Context"])}},r={args:{"icon-set":"momentum-icons",url:"./icons/svg","file-extension":"svg","length-unit":"em","cache-strategy":void 0,"cache-name":"my-icon-cache",size:1,"icon-name":"accessibility-regular"}};var m,p,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    'icon-set': 'momentum-icons',
    url: './icons/svg',
    'file-extension': 'svg',
    'length-unit': 'em',
    'cache-strategy': undefined,
    'cache-name': 'my-icon-cache',
    size: 1,
    'icon-name': 'accessibility-regular'
  }
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const D=["Example"];export{r as Example,D as __namedExportsOrder,A as default};
