import{C as h,S as v,k as l,n as x,U as g,W as f}from"./iframe-CwHTiZJN.js";import{t as y}from"./if-defined-cR5VEbI-.js";import{p as C}from"./index-C4lrFjaQ.js";import{h as P}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";var $=Object.defineProperty,E=(e,t,i,s)=>{for(var n=void 0,o=e.length-1,c;o>=0;o--)(c=e[o])&&(n=c(t,i,n)||n);return n&&$(t,i,n),n};class u extends h{constructor(){super(...arguments),this.iconProviderContext=C.consume({host:this,context:v.Context})}render(){var t,i,s,n,o,c,a;return l`
      <p>Icon Set: ${(t=this.iconProviderContext.value)==null?void 0:t.iconSet}</p>
      <p>URL: ${(i=this.iconProviderContext.value)==null?void 0:i.url}</p>
      <p>File Extension: ${(s=this.iconProviderContext.value)==null?void 0:s.fileExtension}</p>
      <p>Length Unit: ${(n=this.iconProviderContext.value)==null?void 0:n.lengthUnit}</p>
      <p>Default Size: ${(o=this.iconProviderContext.value)==null?void 0:o.size}</p>
      <p>Cache strategy: ${((c=this.iconProviderContext.value)==null?void 0:c.cacheStrategy)||"undefined"}</p>
      <p>Cache name: ${(a=this.iconProviderContext.value)==null?void 0:a.cacheName}</p>
      <mdc-icon length-unit="rem" name="${y(this.iconName)}"></mdc-icon>
    `}}E([x({type:String,attribute:"icon-name"})],u.prototype,"iconName");u.register("mdc-subcomponent-icon");const S=e=>l`
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
`,z={title:"Providers/Icon Provider",tags:["autodocs"],component:"mdc-iconprovider",render:S,argTypes:{"icon-set":{control:"select",options:["momentum-icons","custom-icons"]},"file-extension":{options:g,control:{type:"radio"}},"length-unit":{options:f,control:{type:"inline-radio"}},"cache-strategy":{control:"select",options:["in-memory-cache","web-cache-api"]},"cache-name":{control:{type:"text"}},"icon-name":{control:{type:"text"},description:"Name of the icon to be rendered underneath IconProvider (not part of IconProvider component)"},...P(["Context"])}},r={args:{"icon-set":"momentum-icons",url:"./icons/svg","file-extension":"svg","length-unit":"em","cache-strategy":void 0,"cache-name":"my-icon-cache",size:1,"icon-name":"accessibility-regular"}};var m,p,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const U=["Example"];export{r as Example,U as __namedExportsOrder,z as default};
