import{C as d,X as h,k as m,n as v,$ as x}from"./iframe-lqtK641B.js";import{t as f}from"./if-defined-B9Bf-iG8.js";import{p as y}from"./index-IC5axiHf.js";import{h as C}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";var g=Object.defineProperty,$=(t,r,n,a)=>{for(var e=void 0,o=t.length-1,s;o>=0;o--)(s=t[o])&&(e=s(r,n,e)||e);return e&&g(r,n,e),e};class p extends d{constructor(){super(...arguments),this.illustrationProviderContext=y.consume({host:this,context:h.Context})}render(){var r,n,a,e,o;return m`
      <p>Illustration Set: ${(r=this.illustrationProviderContext.value)==null?void 0:r.illustrationSet}</p>
      <p>URL: ${(n=this.illustrationProviderContext.value)==null?void 0:n.url}</p>
      <p>File Extension: ${(a=this.illustrationProviderContext.value)==null?void 0:a.fileExtension}</p>
      <p>Cache strategy: ${((e=this.illustrationProviderContext.value)==null?void 0:e.cacheStrategy)||"undefined"}</p>
      <p>Cache name: ${(o=this.illustrationProviderContext.value)==null?void 0:o.cacheName}</p>
      <mdc-illustration name="${f(this.illustrationName)}"></mdc-illustration>
    `}}$([v({type:String,attribute:"illustration-name"})],p.prototype,"illustrationName");p.register("mdc-subcomponent-illustration");const P=t=>m`
  <mdc-illustrationprovider
    url=${t.url}
    illustration-set=${t["illustration-set"]}
    file-extension=${t["file-extension"]}
    cache-strategy=${t["cache-strategy"]}
    cache-name=${t["cache-name"]}
  >
    <mdc-subcomponent-illustration illustration-name=${t["illustration-name"]}></mdc-subcomponent-illustration>
  </mdc-illustrationprovider>
`,N={title:"Components/illustrationprovider",tags:["autodocs"],component:"mdc-illustrationprovider",render:P,parameters:{badges:["stable"]},argTypes:{"illustration-set":{control:"select",options:["momentum-illustrations","custom-illustrations"]},"file-extension":{options:x,control:{type:"radio"}},"cache-strategy":{control:"select",options:["in-memory-cache","web-cache-api"]},"cache-name":{control:{type:"text"}},"illustration-name":{control:{type:"text"},description:"Name of the illustration to be rendered underneath IllustrationProvider (not part of IllustrationProvider component)"},...C(["Context"])}},i={args:{"illustration-set":"momentum-illustrations",url:"./illustrations/svg","file-extension":"svg","cache-strategy":void 0,"cache-name":"my-illustration-cache","illustration-name":"astronaut-avatar-onetwozero-empty-secondary"}};var l,u,c;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    'illustration-set': 'momentum-illustrations',
    url: './illustrations/svg',
    'file-extension': 'svg',
    'cache-strategy': undefined,
    'cache-name': 'my-illustration-cache',
    'illustration-name': 'astronaut-avatar-onetwozero-empty-secondary'
  }
}`,...(c=(u=i.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const L=["Example"];export{i as Example,L as __namedExportsOrder,N as default};
