import{C as h,W as v,k as l,t as x,n as g,X as f,$ as y}from"./iframe-CYZ064vw.js";import{p as C}from"./index-Cm4DuzN6.js";import{h as $}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";var P=Object.defineProperty,E=(e,t,i,s)=>{for(var n=void 0,o=e.length-1,c;o>=0;o--)(c=e[o])&&(n=c(t,i,n)||n);return n&&P(t,i,n),n};class u extends h{constructor(){super(...arguments),this.iconProviderContext=C.consume({host:this,context:v.Context})}render(){var t,i,s,n,o,c,a;return l`
      <p>Icon Set: ${(t=this.iconProviderContext.value)==null?void 0:t.iconSet}</p>
      <p>URL: ${(i=this.iconProviderContext.value)==null?void 0:i.url}</p>
      <p>File Extension: ${(s=this.iconProviderContext.value)==null?void 0:s.fileExtension}</p>
      <p>Length Unit: ${(n=this.iconProviderContext.value)==null?void 0:n.lengthUnit}</p>
      <p>Default Size: ${(o=this.iconProviderContext.value)==null?void 0:o.size}</p>
      <p>Cache strategy: ${((c=this.iconProviderContext.value)==null?void 0:c.cacheStrategy)||"undefined"}</p>
      <p>Cache name: ${(a=this.iconProviderContext.value)==null?void 0:a.cacheName}</p>
      <mdc-icon length-unit="rem" name="${x(this.iconName)}"></mdc-icon>
    `}}E([g({type:String,attribute:"icon-name"})],u.prototype,"iconName");u.register("mdc-subcomponent-icon");const b=e=>l`
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
`,N={title:"Providers/Icon Provider",tags:["autodocs"],component:"mdc-iconprovider",render:b,argTypes:{"icon-set":{control:"select",options:["momentum-icons","custom-icons"]},"file-extension":{options:f,control:{type:"radio"}},"length-unit":{options:y,control:{type:"inline-radio"}},"cache-strategy":{control:"select",options:["in-memory-cache","web-cache-api"]},"cache-name":{control:{type:"text"}},"icon-name":{control:{type:"text"},description:"Name of the icon to be rendered underneath IconProvider (not part of IconProvider component)"},...$(["Context"])}},r={args:{"icon-set":"momentum-icons",url:"./icons/svg","file-extension":"svg","length-unit":"em","cache-strategy":void 0,"cache-name":"my-icon-cache",size:1,"icon-name":"accessibility-regular"}};var m,p,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const z=["Example"];export{r as Example,z as __namedExportsOrder,N as default};
